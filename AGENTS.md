# D1SITES — Regras de Push

## Regra de Deploy
**SEMPRE** que for fazer push para `https://github.com/DANAZVDO/D1SITES.git`:

1. Copiar todo o conteúdo de `E:\D1\D1SITES\SITE\` para `E:\D1\D1SITES\` (raiz do repo)
2. Excluir `node_modules/` da cópia
3. Fazer commit e push

O conteúdo da pasta `SITE/` deve ser espelhado diretamente na raiz do repositório. A pasta `SITE/` é apenas workspace local e está no `.gitignore`.

## Comando de sincronização
```powershell
$src = "E:\D1\D1SITES\SITE"; $dst = "E:\D1\D1SITES"
# Copiar arquivos da raiz
@("index.html","landing-page.html","site-institucional.html","crm-exclusivo.html","checkout.html","obrigado.html","MARCA-LINHA.png",".nojekyll",".gitignore",".gitattributes") | ForEach-Object { Copy-Item "$src\$_" -Destination "$dst\$_" -Force -ErrorAction SilentlyContinue }
# Copiar portfolio
if (Test-Path "$src\portfolio") { Copy-Item "$src\portfolio" -Destination "$dst\portfolio" -Recurse -Force }
# Copiar api (sem node_modules)
if (Test-Path "$src\api") { 
    New-Item -ItemType Directory -Path "$dst\api" -Force -ErrorAction SilentlyContinue
    Get-ChildItem "$src\api" -Exclude "node_modules" | ForEach-Object { Copy-Item $_.FullName -Destination "$dst\api\" -Recurse -Force }
}
# Commit e push
git add -A; git commit -m "deploy: sync SITE/ to root"; git push origin main
```
