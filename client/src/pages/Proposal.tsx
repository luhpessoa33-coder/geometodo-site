/*
 * Cartografia Editorial: formulário de briefing como caderno de campo.
 * Os dados ficam no navegador apenas durante a interação; nenhum envio real é simulado.
 */

import { ArrowLeft, ArrowUpRight, Check, LockKeyhole, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link, useLocation } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import { proposalSolutions } from "@/const";

export default function Proposal() {
  const [, setLocation] = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", organization: "", solution: "", deadline: "", budget: "", description: "", website: "" });
  const params = new URLSearchParams(window.location.search);
  const initialSolution = params.get("solucao") ?? "";

  const update = (field: string, value: string) => setForm((current) => ({ ...current, [field]: value }));
  const onSubmit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); };

  if (submitted) {
    return <SiteLayout><main className="form-page section-shell"><div className="form-success"><div className="success-icon"><Check size={30} /></div><span className="section-label">Briefing preparado / modo prévia</span><h1>Seu briefing está pronto para a próxima etapa.</h1><p>O site reconstruído está sem um canal de envio conectado. Nenhum dado foi transmitido. Quando o backend ou e-mail comercial for definido, este formulário poderá encaminhar a solicitação com segurança.</p><div className="success-actions"><button className="button button-primary" onClick={() => setSubmitted(false)}>Revisar briefing</button><Link href="/" className="text-link">Voltar ao início <ArrowUpRight size={15} /></Link></div></div></main></SiteLayout>;
  }

  return <SiteLayout><main className="form-page section-shell"><Link href="/" className="back-link"><ArrowLeft size={15} /> Voltar ao catálogo</Link><div className="form-heading"><div><span className="section-label">GeoMétodo Catálogo / briefing confidencial</span><h1>Conte o que seu projeto precisa <em>resolver.</em></h1><p>A GeoMétodo analisa objetivo, dados, prazo e nível de complexidade para definir um escopo técnico verificável.</p></div><div className="form-aside"><LockKeyhole size={18} /><span>Sem exposição da titular no site</span><span>Sem compromisso antes da proposta</span><span>Escopo definido por escrito</span></div></div><form className="briefing-form" onSubmit={onSubmit}><div className="form-grid two"><label>Nome ou organização<input required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Como devemos chamar você?" /></label><label>E-mail para retorno<input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="nome@dominio.com" /></label></div><div className="form-grid two"><label>WhatsApp <small>opcional</small><input value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} placeholder="(00) 00000-0000" /></label><label>Instituição / empresa <small>opcional</small><input value={form.organization} onChange={(e) => update("organization", e.target.value)} placeholder="Se fizer sentido para o escopo" /></label></div><div className="form-grid two"><label>Solução desejada<select required value={form.solution || initialSolution} onChange={(e) => update("solution", e.target.value)}><option value="">Selecione uma solução</option>{proposalSolutions.map((item) => <option key={item} value={item}>{item}</option>)}</select></label><label>Prazo desejado<select value={form.deadline} onChange={(e) => update("deadline", e.target.value)}><option value="">A definir</option><option>Até 15 dias</option><option>15 a 30 dias</option><option>30 a 60 dias</option><option>Mais de 60 dias</option></select></label></div><div className="form-grid two"><label>Faixa de investimento<select value={form.budget} onChange={(e) => update("budget", e.target.value)}><option value="">A definir</option><option>Até R$ 1.000</option><option>R$ 1.000 a R$ 2.500</option><option>R$ 2.500 a R$ 5.000</option><option>Acima de R$ 5.000</option></select></label><label>Website <small>opcional</small><input type="url" value={form.website} onChange={(e) => update("website", e.target.value)} placeholder="https://" /></label></div><label>Descreva objetivo, dados disponíveis e dificuldade<textarea required value={form.description} onChange={(e) => update("description", e.target.value)} placeholder="Quanto mais contexto, melhor o primeiro diagnóstico." rows={7} /></label><div className="form-submit"><span><Send size={15} /> Os dados serão usados somente para analisar e responder à solicitação comercial.</span><button className="button button-dark" type="submit">Preparar briefing técnico <ArrowUpRight size={17} /></button></div></form></main></SiteLayout>;
}
