/*
 * Cartografia Editorial: consulta de protocolo com estados vazios honestos.
 * A tela não finge consultar uma base que ainda não foi conectada ao frontend.
 */

import { ArrowLeft, ArrowUpRight, FileSearch, Search } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";

export default function RefundLookup() {
  const [searched, setSearched] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSearched(true); };
  return <SiteLayout><main className="form-page section-shell lookup-page"><Link href="/reembolso" className="back-link"><ArrowLeft size={15} /> Nova solicitação</Link><div className="lookup-card"><div className="lookup-icon"><FileSearch size={28} /></div><span className="section-label">Acompanhamento / pós-compra</span><h1>Consulte seu <em>protocolo.</em></h1><p>Use o protocolo recebido e o mesmo e-mail informado no pedido.</p><form className="lookup-form" onSubmit={submit}><label>Protocolo<input required placeholder="Ex.: GM-2026-0001" /></label><label>E-mail<input required type="email" placeholder="nome@dominio.com" /></label><button className="button button-dark" type="submit"><Search size={17} /> Consultar</button></form>{searched && <div className="lookup-empty"><strong>Consulta preparada, mas ainda sem conexão.</strong><span>O endpoint de protocolos será conectado quando o backend de atendimento for definido.</span></div>}</div></main></SiteLayout>;
}
