/*
 * Cartografia Editorial: hero em prancha assimétrica, prova técnica e catálogo em trilhos.
 * CTAs são honestos: checkouts externos preservados; propostas e reembolsos ficam em rotas próprias.
 */

import { ArrowDownRight, ArrowUpRight, Check, Compass, FileCheck2, Leaf, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import { products, services } from "@/const";

function ProductCard({ product, index }: { product: (typeof products)[number]; index: number }) {
  return (
    <article className={`product-card tone-${product.tone}`}>
      <div className="product-image-wrap">
        <img src={product.image} alt={product.imageAlt} className="product-image" />
        <span className="availability"><span className="availability-dot" /> disponível</span>
      </div>
      <div className="product-body">
        <div className="product-index">0{index + 1} / instrumento técnico</div>
        <div className="product-specs"><span>decisão</span><strong>{product.decision}</strong><span className="spec-status">link Mercado Pago</span></div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <ul className="feature-list">
          {product.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}
        </ul>
        <div className="product-footer">
          <strong>{product.price}</strong>
          <a href={product.href} target="_blank" rel="noopener noreferrer" className="arrow-link">Abrir checkout <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <SiteLayout>
      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-gridline hero-gridline-one" />
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-symbol">✳</span> ArcGIS + AHP/MCDA sem improviso</div>
            <h1>Transforme dados ambientais em <em>mapas defensáveis.</em></h1>
            <p className="hero-lede">Um kit operacional para executar, conferir e documentar análises espaciais com método — da projeção ao mapa final.</p>
            <div className="hero-actions">
              <a href="#comprar-agora" className="button button-primary">Escolher uma solução <ArrowDownRight size={17} /></a>
              <Link href="/proposta" className="text-link">Preciso de serviço técnico <ArrowUpRight size={15} /></Link>
            </div>
            <div className="hero-notes">
              <span><FileCheck2 size={15} /> aplicação prática</span>
              <span><ShieldCheck size={15} /> validação incluída</span>
              <span><Leaf size={15} /> foco ambiental</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo-frame"><img src="/manus-storage/geometodo-hero-cartografia_ef18634f.png" alt="Profissional trabalhando com um mapa ambiental em estação de geoprocessamento" /></div>
            <div className="consistency-card"><span>Matriz AHP</span><strong>RC &lt; 0,10</strong><small>consistência verificada</small></div>
            <div className="coordinate-stamp">S 08° 03′  /  W 34° 52′<br /><b>fluxo_01</b></div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Princípios GeoMétodo">
          <div>Menos tentativa e erro.</div>
          <div>Mais rastreabilidade.</div>
          <div>Resultados que você consegue explicar.</div>
        </section>

        <section className="quick-choice section-shell" id="comprar-agora">
          <div className="section-intro split-intro">
            <div><span className="section-label">Escolha rápida / 01</span><h2>O que você precisa <em>resolver hoje?</em></h2></div>
            <Link href="/#solucoes" className="text-link">Prefiro contratar um serviço <ArrowUpRight size={15} /></Link>
          </div>
          <div className="quick-grid">
            {products.slice(0, 4).map((product) => (
              <a href={product.href} target="_blank" rel="noopener noreferrer" className="quick-card" key={product.name}>
                <span>{product.eyebrow}</span><strong>{product.name}</strong><b>{product.price}</b><ArrowUpRight size={16} />
              </a>
            ))}
          </div>
        </section>

        <section className="method-section section-shell" id="comprar">
          <div className="method-panel">
            <div className="method-art"><img src="/manus-storage/geometodo-hero-profissional_d4691216.png" alt="Profissional trabalhando com mapa ambiental em uma estação técnica" /><span className="method-art-label">prancha / fluxo reproduzível</span></div>
            <div className="method-copy"><span className="section-label">Produto digital / 01</span><h2>Kit GeoMétodo <em>Essencial</em></h2><p>Ferramentas prontas para você sair da dúvida metodológica e chegar a um fluxo reproduzível.</p><a className="button button-primary" href="https://mpago.la/1KPYFHV" target="_blank" rel="noopener noreferrer">Comprar com Mercado Pago <ArrowUpRight size={17} /></a></div>
          </div>
          <div className="decision-flow"><div className="flow-heading"><span className="section-label">O fluxo em cinco decisões</span><Compass size={24} /></div><div className="flow-steps">{["Enquadrar", "Padronizar", "Modelar", "Validar", "Comunicar"].map((step, index) => <div className="flow-step" key={step}><span>0{index + 1}</span><strong>{step}</strong><small>{["objetivo, escala e dados", "projeção, extensão e resolução", "critérios, pesos e direção", "consistência, sensibilidade e NoData", "mapa, legenda e relatório"][index]}</small></div>)}</div></div>
        </section>

        <section className="catalog-section section-shell">
          <div className="section-intro"><span className="section-label">Catálogo profissional / 02</span><h2>Cinco ferramentas novas, <em>construídas para uso real.</em></h2><p className="section-description">Produtos digitais para quem precisa validar um raciocínio, automatizar um fluxo ou explicar um mapa.</p></div>
          <div className="catalog-grid">{products.slice(2).map((product, index) => <ProductCard key={product.name} product={product} index={index + 2} />)}</div>
          <p className="catalog-note">Imagens ilustrativas geradas por IA. Produtos digitais, sem envio físico. Sem promessa de aprovação acadêmica, resultado técnico ou retorno financeiro.</p>
        </section>

        <section className="services-section section-shell" id="solucoes">
          <div className="section-intro split-intro"><div><span className="section-label">Soluções de alto valor / 03</span><h2>Profundidade técnica em <em>cada etapa do projeto.</em></h2></div><Link href="/proposta" className="button button-outline">Solicitar proposta <ArrowUpRight size={17} /></Link></div>
          <div className="services-list">{services.map((service, index) => <Link href={service.href} className="service-row" key={service.name}><span className="service-number">0{index + 1}</span><span className="service-category">{service.category}</span><span className="service-name">{service.name}</span><span className="service-description">{service.description}</span><span className="service-price">{service.price}<small>{service.timeline}</small></span><ArrowUpRight size={20} /></Link>)}</div>
        </section>

        <section className="diagnostic-section section-shell" id="servico">
          <div className="diagnostic-mark">RC<br /><strong>&lt;0,10</strong></div>
          <div><span className="section-label">Oferta premium / diagnóstico</span><h2>Seu projeto tem um erro que o tutorial <em>não resolve?</em></h2><p>Na Sessão Diagnóstico GeoMétodo, analisamos o fluxo, identificamos o ponto crítico e entregamos um plano de correção priorizado.</p></div>
          <div className="diagnostic-cta"><span>A partir de <strong>R$ 297</strong></span><Link href="/proposta?solucao=Sess%C3%A3o%20Diagn%C3%B3stico" className="button button-dark">Solicitar diagnóstico <ArrowUpRight size={17} /></Link></div>
        </section>

        <section className="closing-section section-shell"><span className="section-label">Comece pelo fluxo certo</span><h2>Menos tentativa e erro.<br /><em>Mais rastreabilidade.</em></h2><p>Checkout protegido pelo provedor de pagamento. A liberação ocorre após a confirmação.</p><div className="closing-links"><a href="https://mpago.la/1KPYFHV" target="_blank" rel="noopener noreferrer" className="button button-primary">Comprar o kit / R$ 47 <ArrowUpRight size={17} /></a><Link href="/proposta" className="text-link">Solicitar proposta técnica <ArrowUpRight size={15} /></Link></div></section>
      </main>
    </SiteLayout>
  );
}
