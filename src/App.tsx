import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollToTop } from './components/ScrollToTop';

// Páginas
import { HomePage } from './pages/HomePage';
import { PlanoSemCnpjPage } from './pages/PlanoSemCnpjPage';
import { IndividualFamiliarPage } from './pages/IndividualFamiliarPage';
import { PorAdesaoPage } from './pages/PorAdesaoPage';
import { MeiPage } from './pages/MeiPage';
import { EmpresarialPage } from './pages/EmpresarialPage';
import { TabelaPrecosPage } from './pages/TabelaPrecosPage';
import { OperadorasListPage } from './pages/OperadorasListPage';
import { OperadoraDetailPage } from './pages/OperadoraDetailPage';
import { SobrePage } from './pages/SobrePage';
import { ContatoPage } from './pages/ContatoPage';
import { BlogListPage } from './pages/BlogListPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { SaoPauloPage } from './pages/SaoPauloPage';
import { RioDeJaneiroPage } from './pages/RioDeJaneiroPage';
import { BrasiliaPage } from './pages/BrasiliaPage';
import { ParanaPage } from './pages/ParanaPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#1A1A1A]">
        {/* Cabeçalho com identificação SUSEP, endereço em SP e contatos */}
        <Header />

        {/* Conteúdo das Rotas */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Página prioritária: Plano sem CNPJ */}
            <Route path="/plano-de-saude-sem-cnpj" element={<PlanoSemCnpjPage />} />

            {/* O pilar do cluster: Individual e Familiar */}
            <Route path="/convenio-medico-individual-familiar" element={<IndividualFamiliarPage />} />

            {/* Modalidades complementares */}
            <Route path="/convenio-medico-por-adesao" element={<PorAdesaoPage />} />
            <Route path="/convenio-medico-mei" element={<MeiPage />} />
            <Route path="/convenio-medico-empresarial" element={<EmpresarialPage />} />

            {/* Páginas Regionais por Capital / Estado */}
            <Route path="/plano-de-saude-sao-paulo" element={<SaoPauloPage />} />
            <Route path="/plano-de-saude-rio-de-janeiro" element={<RioDeJaneiroPage />} />
            <Route path="/plano-de-saude-brasilia" element={<BrasiliaPage />} />
            <Route path="/plano-de-saude-distrito-federal" element={<BrasiliaPage />} />
            <Route path="/plano-de-saude-curitiba-parana" element={<ParanaPage />} />
            <Route path="/plano-de-saude-parana" element={<ParanaPage />} />

            {/* Cotação e Tabela de Preços */}
            <Route path="/tabela-de-precos-convenio-medico-sao-paulo" element={<TabelaPrecosPage />} />

            {/* Operadoras */}
            <Route path="/operadoras" element={<OperadorasListPage />} />
            <Route path="/operadoras/:slug" element={<OperadoraDetailPage />} />

            {/* Blog & Guias Técnicos */}
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />

            {/* Institucional e Contato */}
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/contato" element={<ContatoPage />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Rodapé institucional com schema LocalBusiness e dados oficiais */}
        <Footer />

        {/* Botão de WhatsApp flutuante fixo */}
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}
