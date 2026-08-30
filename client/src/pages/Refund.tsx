/*
 * Cartografia Editorial: pós-compra com clareza operacional e sem prometer estorno automático.
 * A interface coleta a intenção localmente, mas não transmite dados sem integração real.
 */

import { ArrowLeft, ArrowUpRight, Check, LockKeyhole } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";

const products = ["GeoMétodo Essencial", "GeoTCC Pro", "GeoAHP Pro", "GeoUSLE Pro", "GeoArcPy Automation Pack", "GeoMCDA Lab", "GeoPSA Hídrica Suite", "Outro"];
const reasons = ["Arrependimento dentro do prazo legal", "Compra realizada por engano", "Compra duplicada", "Problema de acesso ao material", "Incompatibilidade técnica", "Conteúdo diferente da oferta apresentada", "Cobrança não reconhecida", "Outro motivo"];

export default function Refund() {
  const [submitted, setSubmitted] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); };
  if (submitted) return <SiteLayout><main className="form-page section-shell"><div className="form-success"><div className="success-icon"><Check size={30} /></div><span className="section-label">Solicitação preparada / modo prévia</span><h1>O pedido está pronto para ser conectado ao atendimento.</h1><p>Nenhum dado foi enviado nesta versão. O site reconstruído ainda precisa de um endpoint seguro para gerar protocolo e encaminhar a solicitação.</p><div className="success-actions"><button className="button button-primary" onClick={() => setSubmitted(false)}>Revisar pedido</button><Link href="/reembolso/consultar" className="text-link">Consultar protocolo <ArrowUpRight size={15} /></Link></div></div></main></SiteLayout>;
  return <SiteLayout><main className="form-page section-shell"><Link href="/" className="back-link"><ArrowLeft size={15} /> Voltar ao catálogo</Link><div className="form-heading"><div><span className="section-label">GeoMétodo Consultar protocolo / atendimento pós-compra</span><h1>Solicitar <em>reembolso.</em></h1><p>Registre o pedido com os dados da compra. A solicitação deverá passar por análise humana antes de qualquer estorno.</p></div><div className="form-aside"><LockKeyhole size={18} /><span>Confirmação de registro</span><span>Análise humana</span><span>Direitos do consumidor preservados</span></div></div><form className="briefing-form" onSubmit={submit}><div className="form-grid two"><label>E-mail usado na compra<input required type="email" placeholder="nome@dominio.com" /></label><label>ID do pagamento Mercado Pago<input required placeholder="Identificador da compra" /></label></div><div className="form-grid three"><label>Data da compra<input required type="date" /></label><label>Produto<select required defaultValue=""><option value="">Selecione o produto</option>{products.map((product) => <option key={product}>{product}</option>)}</select></label><label>Valor pago<input required inputMode="decimal" placeholder="R$ 0,00" /></label></div><label>Motivo principal<select required defaultValue=""><option value="">Selecione o motivo</option>{reasons.map((reason) => <option key={reason}>{reason}</option>)}</select></label><label>Informações adicionais <small>opcional</small><textarea rows={6} placeholder="Inclua apenas o necessário para a análise." /></label><div className="form-submit"><span>A análise deve respeitar os direitos legais aplicáveis à compra.</span><button className="button button-dark" type="submit">Preparar solicitação <ArrowUpRight size={17} /></button></div></form></main></SiteLayout>;
}
