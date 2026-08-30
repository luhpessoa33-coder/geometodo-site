# Direção visual — GeoMétodo

## Referência de reconstrução

O site público `https://geometodo.com.br/` é a referência de conteúdo, arquitetura comercial e linguagem visual. A reconstrução deve preservar a hierarquia observada: proposta de valor sobre análises espaciais ambientais, catálogo com sete produtos, serviços premium, checkouts individuais do Mercado Pago, briefing técnico e fluxo de reembolso. A identidade deve permanecer separada de perfis pessoais e não deve expor dados privados.

## Abordagem escolhida

### Theme Name: Cartografia Editorial

A estética combina editorial científico, cartografia ambiental e instrumentação técnica. O objetivo é fazer o visitante sentir que está diante de um método verificável e cuidadoso, não de uma vitrine genérica de cursos.

### Design Movement

Swiss International Typographic Style reinterpretado para comunicação científica ambiental, com contraste entre serif editorial e sans-serif de instrumentação.

### Core Principles

1. **Rigor visível:** números, etiquetas, estados e microcopy devem transmitir rastreabilidade.
2. **Assimetria controlada:** composição em faixas e colunas deslocadas, evitando uma sucessão de cards centralizados.
3. **Matéria cartográfica:** linhas de grade, coordenadas, rótulos de legenda e recortes de mapa aparecem como detalhes funcionais, não como decoração aleatória.
4. **Conversão sem pressão:** CTAs são diretos, informativos e sempre acompanhados de contexto sobre entrega, escopo e limites.

### Color Philosophy

A base usa marfim mineral e carvão esverdeado para lembrar papel técnico, mata atlântica e mapas impressos. O verde profundo é a assinatura de confiança; o amarelo argila é reservado para estados de atenção e destaques de decisão. O azul de coordenada aparece apenas em microdetalhes e links de sistema. Não usar gradientes roxos nem neon.

### Layout Paradigm

A página funciona como uma prancha editorial: uma barra superior compacta, hero com texto à esquerda e imagem topográfica à direita, faixas horizontais de prova, catálogo em trilhos assimétricos e serviços organizados por profundidade. O conteúdo deve alternar largura total, coluna estreita de anotação e blocos de leitura para criar ritmo.

### Signature Elements

- Micro-rótulos monoespaçados com coordenadas, estados e códigos de etapa.
- Linhas finas de grade cartográfica que atravessam seções e conectam conteúdo.
- Selo circular de consistência `RC < 0,10` como marcador de rigor.

### Interaction Philosophy

Toda interação deve confirmar uma decisão: escolher produto, entender escopo, abrir proposta ou consultar pós-compra. Hovers revelam contexto curto; CTAs preservam seus links externos; formulários apresentam estados de sucesso e erro claros. Nenhuma interação simula venda, testemunho ou prova social inexistente.

### Animation

Movimentos curtos e discretos, abaixo de 300ms, com entradas por opacidade e deslocamento de poucos pixels. Linhas de grade podem aparecer por máscara suave ao entrar na viewport. Botões comprimem levemente ao pressionar. O movimento deve ser desativado ou reduzido para `prefers-reduced-motion`.

### Typography System

Display: `DM Serif Display`, para títulos e chamadas editoriais. Interface e corpo: `Manrope`, com pesos 400, 500, 600 e 700. Rótulos técnicos: `IBM Plex Mono`, em caixa alta e espaçamento ampliado. H1 deve ser grande e quebrado em linhas curtas; H2 deve combinar uma frase editorial com um marcador de seção; o corpo deve ficar entre 16px e 18px com altura de linha confortável.

### Brand Essence

**GeoMétodo transforma análises espaciais ambientais em decisões rastreáveis para pesquisadores, consultores e equipes técnicas que precisam explicar cada etapa.** Personalidade: criteriosa, terrestre, didática.

### Brand Voice

Headlines e CTAs devem soar precisos, calmos e orientados à ação técnica. Evitar urgência artificial, promessas financeiras e aprovação acadêmica.

- “Menos tentativa e erro. Mais rastreabilidade.”
- “Escolha o fluxo que você precisa defender.”

### Wordmark & Logo

O logotipo deve combinar o nome GeoMétodo em serif editorial com um símbolo independente: três curvas topográficas concêntricas envolvendo um ponto de coordenada, formando uma marca compacta que funciona sem texto em favicon e selo.

### Signature Brand Color

**Verde Mata de Coordenada — `#17483D`**. É o tom próprio da marca: profundo, técnico e orgânico, usado em CTAs principais, títulos-chave e elementos de orientação.

## Restrições de implementação

Os links de checkout Mercado Pago devem ser mantidos exatamente como inventariados. O projeto não deve armazenar segredos, dados de pagamento ou integrações privadas. As páginas de proposta e reembolso serão reconstruídas como experiências de formulário no frontend; o envio real dependerá de uma API/backend que ainda não está presente no inventário.

Quando houver dúvida, aplicar a pergunta: **“Esta escolha reforça ou dilui a estética Cartografia Editorial?”**
