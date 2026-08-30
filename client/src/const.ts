/*
 * Cartografia Editorial: dados comerciais centralizados, precisão antes de promoção.
 * Esta camada mantém preços e checkouts explícitos, sem segredos ou integrações privadas.
 */

export type Product = {
  name: string;
  eyebrow: string;
  description: string;
  price: string;
  href: string;
  image: string;
  imageAlt: string;
  features: string[];
  decision: string;
  tone: "green" | "clay" | "ink";
};

export type Service = {
  name: string;
  category: string;
  description: string;
  price: string;
  timeline: string;
  href: string;
};

export const products: Product[] = [
  {
    name: "GeoMétodo Essencial",
    eyebrow: "Começar com método",
    description: "Um kit operacional para organizar dados, projeções e decisões espaciais sem improviso.",
    price: "R$ 47",
    href: "https://mpago.la/1KPYFHV",
    image: "/assets/hero-geometodo.webp",
    imageAlt: "Profissional trabalhando com mapa ambiental em estação de geoprocessamento",
    features: ["Manual prático", "Planilha AHP", "Checklist SIRGAS 2000 / UTM"],
    decision: "enquadrar o fluxo",
    tone: "green",
  },
  {
    name: "GeoTCC Pro",
    eyebrow: "Organizar pesquisa GIS",
    description: "Estrutura acadêmica para explicar o método, documentar o processamento e chegar à banca com clareza.",
    price: "R$ 97",
    href: "https://mpago.la/2cUHWGM",
    image: "/assets/hero-geometodo.webp",
    imageAlt: "Profissional trabalhando com mapa ambiental em estação de geoprocessamento",
    features: ["Guia de pesquisa", "Checklist de defesa", "Fluxo de validação"],
    decision: "comunicar o método",
    tone: "clay",
  },
  {
    name: "GeoAHP Pro",
    eyebrow: "Validar pesos e consistência",
    description: "Calculadora AHP com matriz par a par, pesos, λmax, IC, RC e cenários de sensibilidade.",
    price: "R$ 147",
    href: "https://mpago.la/2EMhh8L",
    image: "/assets/geoahp-pro.svg",
    imageAlt: "Capa ilustrativa do GeoAHP Pro",
    features: ["Planilha validada", "Manual técnico", "Arte de divulgação"],
    decision: "validar pesos",
    tone: "green",
  },
  {
    name: "GeoUSLE Pro",
    eyebrow: "Modelar perda de solo",
    description: "Fluxo rastreável para estimar perda média de solo com os fatores R, K, LS, C e P.",
    price: "R$ 197",
    href: "https://mpago.la/33QNcvU",
    image: "/assets/geousle-pro.svg",
    imageAlt: "Capa ilustrativa do GeoUSLE Pro",
    features: ["Calculadora para 200 unidades", "Controle de fontes", "Manual ArcGIS Pro"],
    decision: "modelar perda de solo",
    tone: "clay",
  },
  {
    name: "GeoArcPy Automation Pack",
    eyebrow: "Automatizar no ArcGIS",
    description: "Scripts modulares para validar, normalizar, combinar critérios e exportar mapas no ArcGIS Pro.",
    price: "R$ 247",
    href: "https://mpago.la/1F8QrBy",
    image: "/assets/geoarcpy.svg",
    imageAlt: "Capa ilustrativa do GeoArcPy Automation Pack",
    features: ["Código Python / ArcPy", "Logs e validações", "Configuração de CRS e raster"],
    decision: "automatizar o ArcGIS",
    tone: "ink",
  },
  {
    name: "GeoMCDA Lab",
    eyebrow: "Normalizar e combinar critérios",
    description: "Laboratório de normalização, ponderação, classes, Fuzzy e análise de sensibilidade.",
    price: "R$ 297",
    href: "https://mpago.la/2XiJT9Z",
    image: "/assets/geomcda-lab.svg",
    imageAlt: "Capa ilustrativa do GeoMCDA Lab",
    features: ["Escala comum 1–10", "Maximizar ou minimizar", "Combinação ponderada"],
    decision: "combinar critérios",
    tone: "green",
  },
  {
    name: "GeoPSA Hídrica Suite",
    eyebrow: "Priorizar PSA Hídrica",
    description: "Suíte integrada para estruturar a priorização territorial de serviços ecossistêmicos hídricos.",
    price: "R$ 497",
    href: "https://mpago.la/31YNZUp",
    image: "/assets/geopsa-hidrica.svg",
    imageAlt: "Capa ilustrativa do GeoPSA Hídrica Suite",
    features: ["AHP + MCDA + USLE", "Automação ArcPy", "Rastreabilidade e relatório"],
    decision: "priorizar PSA hídrica",
    tone: "clay",
  },
];

export const services: Service[] = [
  {
    name: "Auditoria AHP/MCDA",
    category: "Auditoria técnica",
    description: "Revisão independente da matriz, dos pesos, da razão de consistência e da coerência entre critérios.",
    price: "a partir de R$ 497",
    timeline: "3 a 5 dias úteis",
    href: "/solucoes/auditoria-ahp-mcda",
  },
  {
    name: "Cartografia Científica Premium",
    category: "Cartografia",
    description: "Revisão e finalização de mapas para artigos, dissertações, relatórios ambientais e apresentações técnicas.",
    price: "a partir de R$ 697",
    timeline: "5 a 8 dias úteis",
    href: "/solucoes/cartografia-cientifica",
  },
  {
    name: "Análise de Sensibilidade MCDA",
    category: "Validação",
    description: "Teste da estabilidade do resultado diante de alterações justificadas nos pesos, critérios e cenários.",
    price: "a partir de R$ 890",
    timeline: "5 a 10 dias úteis",
    href: "/solucoes/sensibilidade-mcda",
  },
];

export const solutionDetails: Record<string, { title: string; category: string; price: string; timeline: string; description: string; indication: string; approach: string[]; deliverables: string[]; inputs: string[] }> = {
  "/solucoes/auditoria-ahp-mcda": {
    title: "Auditoria AHP/MCDA",
    category: "Auditoria técnica",
    price: "a partir de R$ 497",
    timeline: "3 a 5 dias úteis",
    description: "Revisão independente da matriz de comparação, pesos, razão de consistência e coerência entre critérios, escalas e objetivo decisório.",
    indication: "Pesquisas, consultorias e órgãos que já possuem uma matriz ou modelo multicritério.",
    approach: ["Autovalor e vetor de prioridades", "Índice e razão de consistência", "Análise de coerência e reciprocidade"],
    deliverables: ["Memória de cálculo rastreável", "Diagnóstico de inconsistências", "Matriz revisada e recomendações"],
    inputs: ["Matriz atual", "Descrição dos critérios", "Objetivo e área de estudo"],
  },
  "/solucoes/cartografia-cientifica": {
    title: "Cartografia Científica Premium",
    category: "Cartografia",
    price: "a partir de R$ 697",
    timeline: "5 a 8 dias úteis",
    description: "Revisão e finalização de mapas para artigos, dissertações, relatórios ambientais e apresentações técnicas.",
    indication: "Pesquisadores e equipes que precisam elevar a qualidade editorial e técnica dos mapas.",
    approach: ["Revisão de projeção e escala", "Semiologia e hierarquia cartográfica", "Validação de legenda, fontes e metadados"],
    deliverables: ["Até 3 mapas finalizados", "Arquivos para impressão e tela", "Checklist de conformidade cartográfica"],
    inputs: ["Camadas ou projeto GIS", "Formato de publicação", "Normas do periódico ou instituição"],
  },
  "/solucoes/sensibilidade-mcda": {
    title: "Análise de Sensibilidade MCDA",
    category: "Validação",
    price: "a partir de R$ 890",
    timeline: "5 a 10 dias úteis",
    description: "Teste da estabilidade do resultado diante de alterações justificadas nos pesos, critérios e cenários.",
    indication: "Modelos de priorização que precisam demonstrar robustez e limites interpretativos.",
    approach: ["Perturbação sistemática de pesos", "Comparação espacial de cenários", "Síntese de estabilidade por classe"],
    deliverables: ["Cenários comparativos", "Tabelas e gráficos", "Nota técnica de robustez"],
    inputs: ["Raster ou índice final", "Pesos e critérios", "Regras de classificação"],
  },
};

export const proposalSolutions = [
  "Sessão Diagnóstico — a partir de R$ 297",
  "Auditoria AHP/MCDA — a partir de R$ 497",
  "Cartografia Científica — a partir de R$ 697",
  "Sensibilidade MCDA — a partir de R$ 890",
  "Mentoria Técnica — a partir de R$ 1.190",
  "Automação ArcPy — a partir de R$ 1.290",
  "Protocolo USLE — a partir de R$ 1.490",
  "Modelagem LST — a partir de R$ 1.490",
  "Banco Geoespacial — a partir de R$ 1.590",
  "Modelagem Ambiental — a partir de R$ 1.890",
  "Pesquisa Geoespacial — a partir de R$ 2.490",
  "PSA Hídrica — a partir de R$ 3.490",
];

export const brand = {
  name: "GeoMétodo",
  signature: "#17483D",
  logo: "/assets/geometodo-symbol.svg",
};
