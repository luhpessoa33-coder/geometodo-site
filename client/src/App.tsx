/*
 * Cartografia Editorial: a aplicação funciona como uma prancha técnica navegável.
 * Rotas comerciais permanecem claras, com escape routes e nenhum envio automático.
 */

import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Proposal from "./pages/Proposal";
import Refund from "./pages/Refund";
import RefundLookup from "./pages/RefundLookup";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/proposta" component={Proposal} />
      <Route path="/reembolso" component={Refund} />
      <Route path="/reembolso/consultar" component={RefundLookup} />
      <Route path="/solucoes/:slug" component={Detail} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster position="bottom-right" />
          <AppRoutes />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
