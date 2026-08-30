# GeoMétodo — Cartografia Editorial

Reconstrução frontend do site GeoMétodo, com base no inventário público de `geometodo.com.br`. O projeto usa React, Vite, Tailwind 4 e roteamento client-side.

## O que está implementado

A página inicial apresenta a proposta de valor, o kit essencial, o catálogo dos sete produtos digitais, três soluções de serviço e os CTAs comerciais. As rotas `/proposta`, `/reembolso` e `/reembolso/consultar` preservam o fluxo textual original em uma interface responsiva.

Os sete links externos do Mercado Pago foram mantidos exatamente como inventariados:

| Produto | Checkout |
|---|---|
| GeoMétodo Essencial | `https://mpago.la/1KPYFHV` |
| GeoTCC Pro | `https://mpago.la/2cUHWGM` |
| GeoAHP Pro | `https://mpago.la/2EMhh8L` |
| GeoUSLE Pro | `https://mpago.la/33QNcvU` |
| GeoArcPy Automation Pack | `https://mpago.la/1F8QrBy` |
| GeoMCDA Lab | `https://mpago.la/2XiJT9Z` |
| GeoPSA Hídrica Suite | `https://mpago.la/31YNZUp` |

## Limites deliberados

Este é um frontend estático. O briefing, a solicitação de reembolso e a consulta de protocolo apresentam estados de prévia e **não enviam dados** enquanto um backend ou canal comercial seguro não estiver configurado. Nenhuma senha, chave, token, dado de pagamento, depoimento ou avaliação foi incluído.

As imagens geradas e os assets originais públicos usam o armazenamento persistente do projeto. `ideas.md` registra a direção Cartografia Editorial e as decisões de estilo.

## Desenvolvimento

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
```

## Rotas

- `/` — catálogo e apresentação.
- `/proposta` — briefing técnico.
- `/reembolso` — solicitação de reembolso.
- `/reembolso/consultar` — consulta de protocolo.
- `/solucoes/auditoria-ahp-mcda` — auditoria AHP/MCDA.
- `/solucoes/cartografia-cientifica` — cartografia científica premium.
- `/solucoes/sensibilidade-mcda` — análise de sensibilidade MCDA.

## Domínio

O domínio `geometodo.com.br` só deve ser apontado depois de publicar e validar a versão final. No painel de publicação, adicionar o domínio raiz e `www`, configurar os registros DNS solicitados pelo provedor e confirmar o HTTPS. Não existe `CNAME` neste repositório para evitar uma troca acidental do site em produção.
