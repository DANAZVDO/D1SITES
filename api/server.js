import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import axios from 'axios';
import crypto from 'crypto';
import dotenv from 'dotenv';
import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const PAGSEGURO_ENV = process.env.PAGSEGURO_ENV || 'sandbox';
const PAGSEGURO_TOKEN = process.env.PAGSEGURO_TOKEN;
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || 'd1os-webhook-secret';

const PAGSEGURO_BASE = PAGSEGURO_ENV === 'production'
    ? 'https://api.pagseguro.com'
    : 'https://sandbox.api.pagseguro.com';

const plans = {
    landing: { name: 'Landing Page', creation: 87900, monthly: 12000 },
    institucional: { name: 'Site Institucional', creation: 587500, monthly: 47000 },
    crm: { name: 'CRM Exclusivo', creation: null, monthly: null },
};

// In-memory order store (use DB in production)
const orders = new Map();

app.use(helmet());
app.use(cors({ origin: process.env.ALLOWED_ORIGINS?.split(',') || '*' }));
app.use(express.json());

// ========== GOOGLE CALENDAR SETUP ==========

function getGoogleCalendarClient() {
    const keyFile = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    if (!keyFile || !fs.existsSync(keyFile)) {
        console.warn('⚠️  Google Calendar: chave de serviço não configurada. Agendamentos salvos localmente.');
        return null;
    }

    try {
        const auth = new google.auth.GoogleAuth({
            keyFile,
            scopes: ['https://www.googleapis.com/auth/calendar.events'],
        });

        return google.calendar({ version: 'v3', auth });
    } catch (err) {
        console.error('Google Calendar auth error:', err.message);
        return null;
    }
}

async function createCalendarEvent({ date, time, name, phone, email, plan, modality, address }) {
    const calendar = getGoogleCalendarClient();
    if (!calendar) return null;

    const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary';

    const [year, month, day] = date.split('-').map(Number);
    const [hour, minute] = time.split(':').map(Number);

    const startDateTime = new Date(year, month - 1, day, hour, minute);
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000);

    const planLabel = plan === 'landing' ? 'Landing Page' : plan === 'institucional' ? 'Site Institucional' : plan === 'crm' ? 'CRM Exclusivo' : 'A definir';
    const modalityLabel = modality === 'presencial' ? `Presencial — 📍 ${address}` : 'Online (Videochamada)';

    const event = {
        summary: `D1OS Sites — ${name}`,
        description: `📋 Projeto: ${planLabel}\n👤 Cliente: ${name}\n📱 WhatsApp: ${phone}\n📧 Email: ${email || '—'}\n🎥 Modalidade: ${modalityLabel}\n\n---\nAgendado via D1OS Sites`,
        start: {
            dateTime: startDateTime.toISOString(),
            timeZone: 'America/Sao_Paulo',
        },
        end: {
            dateTime: endDateTime.toISOString(),
            timeZone: 'America/Sao_Paulo',
        },
        reminders: {
            useDefault: false,
            overrides: [
                { method: 'popup', minutes: 60 },
                { method: 'popup', minutes: 10 },
            ],
        },
        colorId: '11', // Red
    };

    try {
        const response = await calendar.events.insert({
            calendarId,
            requestBody: event,
        });
        console.log(`📅 Evento criado: ${response.data.htmlLink}`);
        return response.data;
    } catch (err) {
        console.error('Google Calendar API error:', err.message);
        return null;
    }
}

// In-memory schedule store (use DB in production)
const schedules = [];

// ========== PAGSEGURO API HELPERS ==========

function pagseguroHeaders() {
    return {
        Authorization: `Bearer ${PAGSEGURO_TOKEN}`,
        'Content-Type': 'application/json',
    };
}

async function createPagSeguroOrder({ plan, customer, amount }) {
    const reference = `D1OS-${Date.now()}-${crypto.randomBytes(4).toString('hex')}`;

    const body = {
        reference_id: reference,
        customer: {
            name: customer.name,
            email: customer.email,
            tax_id: customer.tax_id,
            phones: [{ country: '55', area: customer.phone.substring(0, 2), number: customer.phone.substring(2) }],
        },
        items: [{
            reference_id: plan,
            name: plans[plan].name,
            quantity: 1,
            unit_amount: amount,
        }],
        notification_urls: [`${process.env.API_URL || `http://localhost:${PORT}`}/api/webhook/pagseguro`],
    };

    const { data } = await axios.post(`${PAGSEGURO_BASE}/orders`, body, { headers: pagseguroHeaders() });
    return { id: data.id, reference, charges: data.charges };
}

async function payOrderPix(orderId) {
    const { data } = await axios.post(
        `${PAGSEGURO_BASE}/orders/${orderId}/pay`,
        { payment_method: { type: 'PIX' }, pix: { expiration_date: new Date(Date.now() + 30 * 60 * 1000).toISOString() } },
        { headers: pagseguroHeaders() }
    );
    const pixCharge = data.charges?.find(c => c.payment_method?.type === 'PIX');
    return {
        qr_code: pixCharge?.payment_method?.qr_code?.png_image || pixCharge?.links?.find(l => l.media === 'image/png')?.href,
        qr_code_text: pixCharge?.payment_method?.qr_code?.text,
    };
}

async function payOrderBoleto(orderId, customer) {
    const { data } = await axios.post(
        `${PAGSEGURO_BASE}/orders/${orderId}/pay`,
        {
            payment_method: {
                type: 'BOLETO',
                boleto: {
                    due_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
                    instruction_lines: { line_1: 'Pagamento do site D1OS Sites', line_2: 'D1 Consulting - CNPJ em cadastro' },
                    holder: { name: customer.name, tax_id: customer.tax_id, email: customer.email, address: { country: 'BRA' } },
                },
            },
        },
        { headers: pagseguroHeaders() }
    );
    const boletoCharge = data.charges?.find(c => c.payment_method?.type === 'BOLETO');
    return { boleto_url: boletoCharge?.payment_method?.boleto?.formatted_barcode || boletoCharge?.links?.[0]?.href };
}

async function payOrderCreditCard(orderId, cardData, installments) {
    const { data } = await axios.post(
        `${PAGSEGURO_BASE}/orders/${orderId}/pay`,
        {
            payment_method: {
                type: 'CREDIT_CARD', installments, capture: true,
                card: { number: cardData.number, exp_month: cardData.exp_month, exp_year: cardData.exp_year, security_code: cardData.cvv, holder: { name: cardData.holder } },
            },
        },
        { headers: pagseguroHeaders() }
    );
    return { status: data.charges?.[0]?.status || 'PAID' };
}

// ========== ROUTES ==========

app.post('/api/create-order', async (req, res) => {
    try {
        const { plan, customer, payment, business_name, description } = req.body;
        if (!plans[plan]) return res.status(400).json({ error: 'Plano inválido' });
        if (!customer?.name || !customer?.email || !customer?.tax_id) return res.status(400).json({ error: 'Dados do cliente incompletos' });

        const amount = plans[plan].creation;
        const order = await createPagSeguroOrder({ plan, customer, amount });

        orders.set(order.id, { plan, customer, business_name, description, created_at: new Date().toISOString(), status: 'pending' });

        let paymentResult = {};
        if (payment.method === 'pix') {
            paymentResult = await payOrderPix(order.id);
        } else if (payment.method === 'boleto') {
            paymentResult = await payOrderBoleto(order.id, customer);
        } else if (payment.method === 'credit_card') {
            const [month, year] = (payment.card_expiry || '12/30').split('/');
            paymentResult = await payOrderCreditCard(order.id, {
                number: (payment.card_number || '').replace(/\s/g, ''),
                exp_month: month, exp_year: `20${year}`,
                cvv: payment.card_cvv, holder: payment.card_holder || customer.name,
            }, payment.installments || 1);
        }

        res.json({ id: order.id, payment_method: payment.method, ...paymentResult });
    } catch (err) {
        console.error('Order error:', err.response?.data || err.message);
        res.status(500).json({ error: err.response?.data?.error_messages?.[0]?.description || 'Erro ao processar pagamento. Tente novamente.' });
    }
});

// ========== SCHEDULE ENDPOINT ==========

app.post('/api/schedule', async (req, res) => {
    try {
        const { date, time, name, phone, email, plan, modality, address } = req.body;

        if (!date || !time || !name || !phone) {
            return res.status(400).json({ error: 'Data, horário, nome e WhatsApp são obrigatórios' });
        }

        if (modality === 'presencial' && !address) {
            return res.status(400).json({ error: 'Endereço obrigatório para visita presencial' });
        }

        const scheduleData = { date, time, name, phone, email, plan, modality, address: address || null, created_at: new Date().toISOString() };
        schedules.push(scheduleData);

        // Create Google Calendar event
        const calendarEvent = await createCalendarEvent(scheduleData);

        console.log(`📅 Visita agendada: ${name} — ${date} ${time} — ${modality}`);
        if (calendarEvent) {
            console.log(`   Google Calendar: ${calendarEvent.htmlLink}`);
        }

        res.json({ success: true, calendarLink: calendarEvent?.htmlLink || null });
    } catch (err) {
        console.error('Schedule error:', err.message);
        res.status(500).json({ error: 'Erro ao agendar. Tente novamente.' });
    }
});

// ========== PAGSEGURO WEBHOOK ==========

app.post('/api/webhook/pagseguro', async (req, res) => {
    try {
        const { id, charges } = req.body;
        if (!id) return res.status(400).json({ error: 'ID inválido' });

        const order = orders.get(id);
        if (!order) return res.status(404).json({ error: 'Pedido não encontrado' });

        const charge = charges?.[0];
        if (charge?.status === 'PAID') {
            order.status = 'paid';
            orders.set(id, order);
            console.log(`✅ Pagamento confirmado: ${id} — ${order.plan} — ${order.customer.name}`);
        }

        res.json({ received: true });
    } catch (err) {
        console.error('Webhook error:', err.message);
        res.status(500).json({ error: 'Erro interno' });
    }
});

// ========== HEALTH CHECK ==========

app.get('/api/health', (req, res) => {
    const cal = getGoogleCalendarClient();
    res.json({
        status: 'ok',
        pagseguro: PAGSEGURO_ENV,
        orders: orders.size,
        schedules: schedules.length,
        calendar: !!cal,
    });
});

app.listen(PORT, () => {
    console.log(`D1OS Sites API rodando na porta ${PORT}`);
    console.log(`PagSeguro: ${PAGSEGURO_ENV}`);
    console.log(`Google Calendar: ${getGoogleCalendarClient() ? '✅ Configurado' : '⚠️  Não configurado'}`);
    if (!PAGSEGURO_TOKEN || PAGSEGURO_TOKEN === 'sandbox_token_aqui') {
        console.warn('⚠️  PAGSEGURO_TOKEN não configurado. Configure no .env');
    }
});
