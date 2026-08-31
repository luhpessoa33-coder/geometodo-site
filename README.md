# GeoMétodo

Vitrine técnica e comercial independente, mantida no GitHub e publicada no Cloudflare como Worker de assets estáticos.

## Arquitetura atual

- Frontend: React 19, TypeScript, Vite 7, Tailwind CSS 4 e Wouter.
- Código-fonte e integração contínua: GitHub e GitHub Actions.
- Build: `pnpm build`, com saída em `dist/public`.
- Publicação: Cloudflare Workers Static Assets, configurada em `wrangler.jsonc`.
- Domínio público: `https://geometodo.com.br`.
- Linha acadêmica separada: `https://geotcc.geometodo.com.br`.
- Pagamentos: sete links externos do Mercado Pago; nenhuma credencial de pagamento fica no frontend.
- Imagens públicas: versionadas em `client/public/assets`.
- Backend: não existe nesta versão. Formulários funcionam somente como prévia local e não transmitem dados.

## Build e deploy no Cloudflare

- Production branch: `main`
- Build command: `pnpm build`
- Deploy command: `pnpm deploy`
- Root directory: `/`
- Node.js: 22

O arquivo `client/public/_redirects` preserva as rotas da SPA. O `wrangler.jsonc` também usa `not_found_handling: single-page-application`.

## Segurança

A vitrine estática não armazena senhas, tokens, pagamentos ou dados pessoais. Login administrativo, pedidos de reembolso e autorizações de divulgação devem usar backend autenticado e auditável antes de serem ativados.

## Desenvolvimento

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm validate
pnpm dev
```

Validação local: TypeScript, testes Vitest e build de produção. As páginas de proposta e reembolso não devem ser tratadas como canais ativos até a implantação de um backend autenticado e auditável.
