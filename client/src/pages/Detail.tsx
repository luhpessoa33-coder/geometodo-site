/*
 * Cartografia Editorial: detalhes em três camadas — abordagem, entregáveis e entradas.
 * O objetivo é esclarecer escopo antes da conversão, nunca simular prova social.
 */

import { ArrowLeft, ArrowUpRight, Check, ClipboardCheck, FileInput, Layers3 } from "lucide-react";
import { Link, useRoute } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import { solutionDetails } from "@/const";

export default function Detail() {
  const [, params] = useRoute("/solucoes/:slug");
  const key = `/solucoes/${params?.slug ?? ""}`;
  const data = solutionDetails[key];

  if (!data) {
    return <SiteLayout><main className="not-found section-shell"><span className="section-label">404 / rota não catalogada</span><h1>Esta solução ainda não está no catálogo.</h1><Link href="/" className="button button-primary">Voltar ao início <ArrowLeft size={17} /></Link></main></SiteLayout>;
  }

  const groups = [
    { label: "Abordagem técnica", icon: Layers3, items: data.approach },
    { label: "Entregáveis", icon: ClipboardCheck, items: data.deliverables },
    { label: "Entradas necessárias", icon: FileInput, items: data.inputs },
  ];

  return (
    <SiteLayout>
      <main className="detail-page">
        <section className="detail-hero section-shell">
          <Link href="/#solucoes" className="back-link"><ArrowLeft size={15} /> Todas as soluções</Link>
          <div className="detail-hero-grid"><div><span className="section-label">{data.category} / escopo especializado</span><h1>{data.title}</h1><p className="detail-lede">{data.description}</p><div className="detail-meta"><span>{data.price}</span><span>Prazo típico <strong>{data.timeline}</strong></span></div></div><div className="detail-stamp"><span>GeoMétodo</span><strong>RIGOR<br />ANTES DE<br /><em>PROMESSA.</em></strong><small>escopo_03 / validado</small></div></div>
        </section>
        <section className="detail-intro section-shell"><span className="section-label">Indicado para</span><p>{data.indication}</p></section>
        <section className="detail-groups section-shell">{groups.map((group, index) => { const Icon = group.icon; return <div className="detail-group" key={group.label}><div className="detail-group-heading"><span>0{index + 1}</span><Icon size={20} /><h2>{group.label}</h2></div><ul>{group.items.map((item) => <li key={item}><Check size={17} />{item}</li>)}</ul></div>; })}</section>
        <section className="detail-bottom section-shell"><div><span className="section-label">Próximo passo</span><h2>Traga o fluxo. A gente começa pelo ponto crítico.</h2><p>O escopo final depende da qualidade dos dados, licenças, extensão territorial e finalidade do estudo. Resultados, limitações e decisões metodológicas são documentados.</p></div><Link href={`/proposta?solucao=${encodeURIComponent(data.title.replace(" Premium", ""))}`} className="button button-dark">Enviar briefing técnico <ArrowUpRight size={17} /></Link></section>
      </main>
    </SiteLayout>
  );
}
