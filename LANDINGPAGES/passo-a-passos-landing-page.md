<div class="cover-page">
  <img src="roteiros/logo.png" alt="D1 Consulting" class="cover-logo" />
  <div class="cover-title">Passo a Passo</div>
  <hr class="cover-divider" />
  <div class="cover-industry">Criação da Landing Page (Pós-Venda)</div>
  <div class="cover-price">Briefing &bull; Criação &bull; Domínio &bull; Hospedagem</div>
  <div class="cover-company">D1 CONSULTING</div>
</div>

# Passo a Passo — Criacao da Landing Page (Pos-Venda)

## Fluxo Completo

```
FECHAMENTO → BRIEFING → CRIACAO → REVISAO → DOMINIO + HOSPEDAGEM → PUBLICACAO → ENTREGA
```

---

## 1. Briefing (enviar no mesmo dia do fechamento)

### Formulario minimo via Google Forms / Typeform / WhatsApp:

**Dados do Negocio**
- Nome da empresa / profissional
- Ramo de atuacao (qual nicho)
- Ha quanto tempo existe
- Diferencial competitivo (o que te faz unico?)

**Publico-Alvo**
- Quem e o cliente ideal? (idade, renda, localizacao, dor)
- O que eles buscam ao contratar/visitar o negocio?

**Objetivo da Landing Page**
- Qual acao principal voce quer que o visitante tome? (ex: preencher formulario, ligar, comprar, solicitar orcamento)
- Existe algum funil? (ex: imovel > visita > fechamento)

**Conteudo**
- Textos prontos ou precisa criar?
- Fotos / videos / logo (enviar agora)
- Redes sociais para referenciar
- Ha depoimentos de clientes? Pode gravar?

**Concorrentes**
- Indique 3 sites de concorrentes que voce admira (ou odeia)
- O que eles fazem bem / mal?

**Preferências Visuais**
- Tem alguma marca/referencia de estilo? (ex: "gosto do site da empresa X")
- Cores que ja usa na marca
- Tom de comunicacao: formal ou informal?

**Tecnico**
- Tem dominio registrado? Qual?
- Tem hospedagem?
- Email profissional: quer criar? (@seudominio.com.br)
- Qual prazo deseja para lancamento?

---

## 2. Criacao da Landing Page

### Etapas internas:

```
BRIEFING → RASCUNHO (estrutura) → DESIGN (Figma / HTML) → CONTEUDO → REVISAO → AJUSTES → FINAL
```

### O que uma Landing Page de alta conversao tem:

| Elemento | Onde colocar |
|----------|-------------|
| Titulo principal (Headline) | Topo, acima da dobra |
| Subtitulo (Suporte a headline) | Abaixo do titulo |
| Imagem / video principal | Ao lado ou abaixo da headline |
| Proposta de valor clara | Topo |
| 3-5 beneficios em bullets | Meio |
| Prova social (depoimentos, numeros) | Meio |
| Sobre / credibilidade | Meio |
| Precificacao (se aplicavel) | Meio |
| Formulario de contato / CTA | Topo E final |
| Selos de confianca (pagamento, seguranca) | Perto do CTA |
| Footer com contatos e redes | Final |

### Stacks recomendadas (custo zero de ferramentas):

| Stack | Quando usar | Vantagem |
|-------|-------------|----------|
| HTML + Tailwind + JS puro | LP simples, sem banco | Leve, rapido, qualquer hospedagem |
| React + Vite | LP interativa | Componentizacao, facil manutencao |
| Next.js | LP que precisa de SEO avancado | SSR, SSG, imagens otimizadas |
| Vue + Vite | Alternativa ao React | Mais leve que React para LP simples |

### Ferramentas gratuitas para criar:

- **Heroicons** — icones SVG
- **Unsplash / Pexels** — imagens royalty-free
- **Google Fonts** — tipografia
- **Coolors / Adobe Color** — paleta de cores
- **Figma** — prototipagem (opcional, pode ir direto pra HTML)

---

## 3. Dominio (comprar ou transferir)

### Melhor custo-beneficio 2026:

| Extensao | Registradora | Preco | Renovacao | Privacidade WHOIS | Obs |
|----------|-------------|-------|-----------|-------------------|-----|
| **.com.br** | Registro.br | **R$ 40/ano** | R$ 40/ano | Gratis (PF) | Melhor custo. Oficial. Nao tem promocao enganosa |
| **.com.br** | Umbler | **R$ 36/ano** | R$ 36/ano | Nao disponivel | Mais barato. Sem Whois |
| **.com.br** | Hostinger | Gratis 1 ano | ~R$ 55/ano | Paga | Bom se ja contratar hospedagem |
| **.com** | Cloudflare Registrar | **~US$ 9,15/ano** | Mesmo preco | Gratis | Sem margem de lucro. Precisa de conta Cloudflare |
| **.com** | Porkbun | ~US$ 9,73/ano | Mesmo preco | Gratis | Interface simples, suporte em ingles |
| **.com** | Namecheap | ~US$ 6,98 1o ano | ~US$ 13,98 | Gratis 1o ano | Cuidado: renovacao dobra |

### Regra de ouro:
> **NUNCA compre dominio e hospedagem juntos.** Registre o dominio separado (Registro.br ou Cloudflare) e aponte o DNS para a hospedagem. Se um dia quiser trocar de hospedagem, o dominio e seu e nao fica refem.

### Fluxo de dominio:
```
1. Verificar disponibilidade no Registro.br (para .com.br)
2. Comprar (R$ 40)
3. Configurar DNS (apontar para hospedagem)
4. Se tiver email profissional, criar no hosting ou Google Workspace
```

---

## 4. Hospedagem

### Para a D1 Consulting — Multiplos clientes no mesmo plano

Voce precisa de uma hospedagem que permita gerenciar varios sites/dominios diferentes em um unico painel. Tres estrategias possiveis:

#### Estrategia A: Gratuita (cada site em sua propria conta gratuita)

| Servico | Preco | Limite por conta | Ideal para |
|---------|-------|-----------------|------------|
| **Vercel** | **Gratis** | 100 GB banda, builds ilimitados | Next.js, React, estatico |
| **Netlify** | **Gratis** | 100 GB banda, 300 min build | HTML, React, Vue, estatico |
| **Cloudflare Pages** | **Gratis** | 500 builds/mes, banda ilimitada | Hugo, Next.js, estatico |

**Custo: R$ 0,00** — cada cliente em uma conta Vercel separada.
- Voce gerencia cada uma pelo seu GitHub (um repo por cliente)
- Formularios: Web3Forms ou Formspree (gratis)
- SSL automatico, HTTPS, deploy por git push
- **Lucro do R$ 80/mes de manutencao = 100% seu**

#### Estrategia B: Hostinger Business (tudo em um lugar, sem WHM)

| Plano | Preco promocional (48 meses) | Renovacao | Sites | Diferencial |
|-------|----------------------------|-----------|-------|-------------|
| **Business** | ~R$ 14/mes (R$ 672/4 anos) | ~R$ 65/mes | **100 sites** | NVMe 50 GB, CDN, backups diarios |
| **Cloud Startup** | ~R$ 33/mes (R$ 1.584/4 anos) | ~R$ 130/mes | **300 sites** | NVMe 100 GB, prioridade, Node.js |

**Custo efetivo: R$ 14/mes nos primeiros 4 anos.**
- Painel hPanel proprio (nao e cPanel, mas gerencia todos os sites)
- Cada cliente com seu proprio dominio apontado
- SSL gratis, email incluso (5 contas/site no 1o ano)
- Ideal se voce mistura sites estaticos e dinamicos

#### Estrategia C: VPS (controle total, tudo em um servidor)

Com uma VPS voce tem root, pode instalar qualquer coisa e hospedar quantos sites quiser. O custo e similar a uma revenda, mas o controle e total — e a responsabilidade tambem.

**Provedores VPS com datacenter no Brasil (2026):**

| Provedor | Plano entrada | RAM | vCPU | Disco | Preco promocional | Renovacao |
|----------|--------------|-----|------|-------|------------------|-----------|
| **HostGator** VPS NVMe 4 | 4 GB | 2 | 100 GB NVMe | **R$ 35,49/mes** | ~R$ 70/mes |
| **HostGator** VPS NVMe 8 | 8 GB | 4 | 200 GB NVMe | **R$ 69,99/mes** | ~R$ 100/mes |
| **Hostinger** KVM 1 | 4 GB | 1 | 50 GB NVMe | **R$ 29,99/mes** (24m) | R$ 59,99/mes |
| **Hostinger** KVM 2 | 8 GB | 2 | 100 GB NVMe | **R$ 49,99/mes** (24m) | R$ 89,99/mes |
| **Locaweb** Cloud VPS | 2 GB | 1 | 50 GB SSD | **R$ 42,90/mes** | R$ 42,90/mes |
| **DigitalOcean** (SP) | 1 GB | 1 | 25 GB SSD | US$ 6/mes (~R$ 33) | Mesmo preco |

**Painais de controle gratuitos (para substituir o cPanel/WHM):**

| Painel | Preco | Email | DNS | Multi-usuario | Ideal para |
|--------|-------|-------|-----|--------------|------------|
| **HestiaCP** | **Gratis** | ✅ Sim | ✅ Sim | ✅ Sim (pacotes por usuario) | **Revenda, multi-clientes** |
| **CyberPanel** | **Gratis** | ✅ Sim | ❌ | Basico | WordPress com OpenLiteSpeed |
| **CloudPanel** | **Gratis** | ❌ | ❌ | ❌ | PHP/Node.js, devs |
| **aaPanel** | Gratis (Pro ~R$ 85/ano) | ✅ Sim | ✅ Sim | Pro | Alternativa generica ao cPanel |

### VPS vs Revenda vs Compartilhado — Comparacao final

| Criterio | Plano M (R$ 12,99) | Revenda Crescendo (R$ 72,79) | VPS + HestiaCP (R$ 70/mes) |
|----------|-------------------|----------------------------|---------------------------|
| **Performance** | Compartilhada (oscila) | Compartilhada + NVMe | **Dedicada (so pra voce)** |
| **Recursos** | 1 cPanel compartilhado | WHM + 15 cPanels isolados | Root + servidor inteiro |
| **Clientes isolados** | ❌ (tudo no mesmo cPanel) | ✅ (cada um no seu cPanel) | ✅ (cada um no seu pacote) |
| **Manutencao** | Zero (HostGator cuida) | Zero (HostGator cuida) | **Voce e o admin** |
| **Escalabilidade** | Ilimitado (1 cPanel) | 15 contas | **Ilimitado** |
| **Email** | Ilimitado | Ilimitado | Configurar vc mesmo |
| **Conhecimento necessario** | Basico | Intermediario (WHM) | **Avancado (Linux, SSH)** |
| **Suporte 3h da manha** | HostGator | HostGator | **Voce** |

### Simulacao financeira (10 clientes):

| Modelo | Custo fixo | Faturamento (10 x R$ 80) | Lucro mensal |
|--------|-----------|-------------------------|-------------|
| **Plano M** | R$ 12,99 | R$ 800 | **R$ 787** |
| **Hostinger Business** | R$ 14,00 | R$ 800 | **R$ 786** |
| **Revenda Crescendo** | R$ 72,79 | R$ 800 | **R$ 727** |
| **VPS HostGator NVMe 8** | R$ 69,99 | R$ 800 | **R$ 730** |
| **VPS Hostinger KVM 2** | R$ 49,99 | R$ 800 | **R$ 750** |

> **A diferenca de custo entre a opcao mais barata (R$ 12,99) e a VPS (R$ 69,99) e de apenas R$ 57/mes. Com 10 clientes, a diferenca no lucro e de R$ 787 vs R$ 730 — apenas R$ 57 de diferenca para ter UM SERVIDOR INTEIRO SO SEU.**

### Recomendacao final:

```
 ORCAMENTO R$ 200 — MELHOR QUALIDADE + FACILIDADE:

   → VPS HostGator NVMe 12 (R$ 92,99)
     + cPanel Admin (5 contas, ~R$ 30/mes)
     = ~R$ 123/mes
     4 vCPU · 12 GB RAM · 300 GB NVMe
     ✅ WHM para criar contas separadas por cliente
     ✅ cPanel em cada conta (familiar, facil)
     ✅ Datacenter Oracle Sao Paulo
     ✅ Suporte 24h em portugues
     ✅ Roda Node.js, Python, Docker, WordPress
     ✅ Sobra R$ 77/mes para dominios e ferramentas

   Alternativa (mais potente, menos comodidade):
   → VPS HostGator NVMe 16 (R$ 133,99)
     + CyberPanel (gratis, OpenLiteSpeed)
     = R$ 133,99/mes
     6 vCPU · 16 GB RAM · 400 GB NVMe
     ✅ Mais recursos brutos
     ⚠️ CyberPanel exige aprender um painel novo
     ✅ Sobra R$ 66/mes
```

#### Estrategia D: Revenda cPanel/WHM (profissional, white-label)

Melhor para quem quer criar a propria "marca de hospedagem":

| Provedor | Preco/mes | Contas | Armazenamento | Prazo |
|----------|----------|--------|---------------|-------|
| **MyWay** | R$ 40,90 | **6 contas** | 10 GB NVMe | Mensal (sem fidelidade) |
| **PWH Revenda I** | R$ 39,90 | **15 contas** | SSD ilimitado | Mensal |
| **ValueHost Revenda** | R$ 29,99 | **20 contas** | 70 GB NVMe | 36 meses |
| **DDR Host BASIC** | R$ 43,92 | **Ilimitadas** | 50 GB NVMe | 36 meses |
| **TargetHost Ilimitada** | R$ 49,99 | **Ilimitadas** | 60 GB NVMe | 12 meses |
| **ATMUN Host #1** | R$ 50,92 | **Ilimitadas** | **100 GB NVMe** | 12 meses |

**Vantagens do WHM/cPanel:**
- Cada cliente tem seu proprio painel (cPanel) separado
- Nameservers personalizados (ns1.suahospedagem.com.br)
- White-label: o cliente ve seu proprio sistema, nao o da revenda
- Contas de email ilimitadas por cliente
- SSL Let's Encrypt automatico por conta
- Backup por conta de cliente

**Simulacao de lucro (15 clientes):**
```
Conta: PWH Revenda I = R$ 39,90/mes (ate 15 clientes)
Faturamento: 15 x R$ 80/mes = R$ 1.200/mes
Custo: R$ 39,90/mes
Lucro bruto: R$ 1.160,10/mes (+2.900% de margem)
```

### Tabela comparativa das 3 estrategias:

| Criterio | A - Vercel/Netlify (gratis) | B - Hostinger Business | C - Revenda WHM |
|----------|---------------------------|----------------------|----------------|
| Custo | **R$ 0** | ~R$ 14/mes | ~R$ 40-50/mes |
| Sites | Ilimitados (contas separadas) | 100-300 | 6 a ilimitadas |
| Painel unificado | Nao (cada conta separada) | Sim (hPanel) | Sim (WHM + cPanel por cliente) |
| Email profissional | Cloudflare Routing (gratis) | Incluso 1 ano | Ilimitado |
| SSL | Automatico | Automatico | Automatico |
| White-label | Nao | Parcial | **Sim** |
| Manutencao | Git push | Git/FTP | FTP + Git |
| Ideal para | LP 100% estatica | Mix estatica + dinamic | Quem quer revender hospedagem |

### Recomendacao D1 Consulting:

```
COMECAR: Estrategia A (Vercel/Netlify gratis) — custo ZERO
CRESCER: Estrategia B (Hostinger Business ~R$ 14/mes) — tudo centralizado
ESCALAR: Estrategia C (Revenda WHM ~R$ 40/mes) — margem profissional white-label
```

### Para cada cliente individual (sem plano multi-sites):

Se preferir manter cada cliente independente (nada compartilhado), use **Vercel/Netlify gratis** para LPs estaticas. O unico custo do cliente e o dominio (~R$ 3,33/mes). Voce cobra R$ 80/mes de manutencao e lucra R$ 76,67 por cliente.

---

### Hospedagem para LP com backend:

| Servico | Preco inicial | Ideal para |
|---------|--------------|------------|
| **Hostinger** | ~R$ 6/mes (48 meses) | WordPress, PHP, sites dinamicos |
| **HostGator** | ~R$ 12/mes | Tradicional, cPanel, revenda |
| **Locaweb** | ~R$ 15/mes | Suporte nacional, empresas |
| **Umbler** | ~R$ 18/mes | DevOps, containers, escalabilidade |

### Para formularios simples (sem backend):
Use services gratuitos:
- **Formspree** — formulario → email (gratis 50/mes)
- **Web3Forms** — formulario → email (gratis 250/mes)
- **Google Forms embedado** — 100% gratis
- **WhatsApp API** — botao "Fale conosco" vai direto pro zap

### Fluxo de publicacao (estatico):

```
1. Desenvolver local
2. Enviar para GitHub (repositorio privado)
3. Conectar Vercel/Netlify ao repositorio
4. Configurar dominio personalizado nas configuracoes
5. Apontar DNS do Registro.br para Vercel/Netlify
6. Deploy automatico a cada commit
7. Testar https, formulario, links, responsivo
```

---

## 5. Email Profissional

Recomendacao custo-beneficio:

| Servico | Preco | Obs |
|---------|-------|-----|
| **Cloudflare Email Routing** | **Gratis** | Encaminha emails do seu dominio para seu Gmail. Permite responder COMO @seudominio pelo Gmail |
| **Zoho Mail** | **Gratis** (ate 5 contas, 5 GB cada) | Webmail, suporta IMAP/SMTP |
| **Google Workspace** | R$ 27/mes (1 conta) | Mais completo, custo mensal |
| **Hostinger Email** | Incluso na hospedagem | Se ja tiver plano de hosting |
| **Locaweb Email** | ~R$ 10/mes | Tradicional, suporte nacional |

Para a maioria dos clientes: **Cloudflare Email Routing (gratis) + responder pelo Gmail** resolve sem custo.

---

## 6. Precificacao (o que cobrar a mais?)

Tabela de servicos adicionais apos a LP base (R$ 879):

| Servico | Preco sugerido |
|---------|---------------|
| Registro de dominio (.com.br 1 ano) | R$ 40 (repasse) |
| Email profissional (configuracao) | R$ 50 (unico) |
| Hospedagem (se for dinamico, 1o ano) | R$ 150-300 (repasse+taxa) |
| Textos profissionais (copywriting) | R$ 150-300 (por pagina) |
| Fotos profissionais (ensaio) | R$ 200-500 (combinar) |
| Criacao de logo / identidade | R$ 200-500 |
| Integracao com CRM / API | R$ 200-400 (unico) |
| Anuncio Google Ads (criacao + 1 mes) | R$ 300-500 + verba de anuncio |

### Sugestao de combo pos-venda:

```
Landing Page (R$ 879)
+ Dominio .com.br 1 ano (R$ 40)
+ Email profissional (R$ 50)
+ Copywriting (R$ 200)
━━━━━━━━━━━━━━━━━━━━━
Total: R$ 1.169
```

---

## 7. Checklist de Entrega

Antes de entregar ao cliente, conferir:

- [ ] Responsivo (celular, tablet, desktop)
- [ ] Carregamento rapido (Lighthouse > 90)
- [ ] Formulario de contato funcionando (testar)
- [ ] Botao WhatsApp funcionando (link correto)
- [ ] Links externos abrindo em nova aba
- [ ] SEO basico (title, meta description, OG tags)
- [ ] Dominio apontado (https ativo)
- [ ] Politica de privacidade (se tiver formulario)
- [ ] Backup do codigo (GitHub privado)
- [ ] Medicao instalada (Google Analytics / Tag Manager)
- [ ] Entregar: link + credenciais + manual de 1 pagina

---

## 8. Ferramentas Gratuitas Essenciais

| Finalidade | Ferramenta |
|-----------|------------|
| Repositorio | GitHub (privado, gratis) |
| Hospedagem estatica | Vercel / Netlify (gratis) |
| Dominio | Registro.br (R$ 40/ano) |
| Email | Cloudflare Email Routing (gratis) |
| Formulario | Web3Forms / Formspree (gratis) |
| Imagens | Unsplash / Pexels (gratis) |
| Icones | Heroicons / Lucide (gratis) |
| Tipografia | Google Fonts (gratis) |
| Analytics | Google Analytics 4 (gratis) |
| SEO | Google Search Console (gratis) |
| Teste de velocidade | PageSpeed Insights (gratis) |
| QR Code | qr-code-generator.com (gratis) |

**Custo fixo mensal para o cliente manter a LP no ar:**
- Dominio: R$ 40/ano (R$ 3,33/mes)
- Hospedagem estatica: R$ 0
- Email: R$ 0

**Total: ~R$ 3,33/mes** (ou R$ 80/mes como voce cobra, com a manutencao inclusa)
