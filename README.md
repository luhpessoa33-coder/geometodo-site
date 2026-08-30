# GeoMétodo

Vitrine técnica e comercial independente, mantida no GitHub e preparada para publicação no Cloudflare Pages.

## Arquitetura

- Código-fonte: GitHub.
- Build e prévias: GitHub Actions + Cloudflare Pages.
- Domínio: Cloudflare DNS, com troca de nameservers somente após validação do endereço `pages.dev`.
- Pagamentos: links externos do Mercado Pago.
- Imagens públicas: versionadas no próprio repositório.
- Divulgação: nenhuma publicação externa sem aprovação humana.

## Build no Cloudflare Pages

- Production branch: `main`
- Build command: `pnpm build`
- Output directory: `dist/public`
- Root directory: vazio
- Node.js: 22

O arquivo `client/public/_redirects` preserva as rotas do React no Pages.

## Segurança

A vitrine estática não armazena senhas, tokens, pagamentos ou dados pessoais. Login administrativo, pedidos de reembolso e autorizações de divulgação devem usar backend autenticado e auditável antes de serem ativados.

## Desenvolvimento

```bash
pnpm install --no-frozen-lockfile
pnpm check
pnpm build
pnpm dev
```
