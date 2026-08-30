/*
 * Cartografia Editorial: rota ausente apresentada como registro não catalogado.
 * O erro mantém o usuário dentro do fluxo, com retorno direto ao catálogo.
 */

import { ArrowLeft, FileWarning } from "lucide-react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";

export default function NotFound() {
  return <SiteLayout><main className="not-found section-shell"><FileWarning className="not-found-icon" size={34} /><span className="section-label">404 / registro não catalogado</span><h1>Esta coordenada ainda não existe no catálogo.</h1><p>Volte ao início para escolher uma ferramenta, conhecer uma solução ou preparar um briefing.</p><Link href="/" className="button button-primary"><ArrowLeft size={17} /> Voltar ao início</Link></main></SiteLayout>;
}
