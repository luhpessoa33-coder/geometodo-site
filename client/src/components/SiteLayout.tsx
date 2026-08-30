/*
 * Cartografia Editorial: navegação de catálogo como uma prancha técnica.
 * Verde Mata de Coordenada orienta a marca; rótulos monoespaçados marcam o sistema.
 */

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { brand } from "@/const";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link href="/" className="brand-lockup" onClick={close}>
          <img src={brand.logo} alt="" className="brand-mark" />
          <span>GeoMétodo</span>
        </Link>
        <button className="mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen((value) => !value)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={open ? "site-nav is-open" : "site-nav"} aria-label="Navegação principal">
          <Link href="/#comprar-agora" onClick={close}>Comprar</Link>
          <Link href="/#solucoes" onClick={close}>Serviços</Link>
          <Link href="/#servico" onClick={close}>Diagnóstico</Link>
          <Link href="/proposta" onClick={close}>Orçamento</Link>
          <Link href="/#comprar" className="nav-cta" onClick={close}>Quero o kit <ArrowUpRight size={14} /></Link>
        </nav>
      </header>
      {children}
      <footer className="site-footer">
        <div className="footer-topline">
          <div>
            <div className="footer-brand"><img src={brand.logo} alt="" className="brand-mark" /> GeoMétodo</div>
            <p className="footer-copy">Análises espaciais ambientais com método, rastreabilidade e clareza.</p>
          </div>
          <div className="footer-links">
            <Link href="/#comprar-agora">Produtos</Link>
            <Link href="/#solucoes">Serviços</Link>
            <Link href="/proposta">Solicitar proposta</Link>
            <Link href="/reembolso">Pós-compra</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} GeoMétodo</span>
          <span>Produtos digitais e apoio técnico ético.</span>
        </div>
      </footer>
    </div>
  );
}
