import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, ShieldCheck, ChevronDown } from 'lucide-react';
import { BROKER_INFO } from '../data/siteData';
import { BrandIcon } from './Logo';

export const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="sticky top-0 z-40 bg-[#123A5F] text-white border-b-4 border-[#D97706] shadow-md">
      {/* Barra superior de identificação e transparência */}
      <div className="bg-[#0D263F] text-xs text-slate-300 py-1.5 px-4 sm:px-8 border-b border-[#1E4A78]">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[#F59E0B] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Corretora com Registro SUSEP ({BROKER_INFO.susep})
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden sm:inline text-slate-300">Código Direto nas Operadoras de SP</span>
          </div>
          
          <div className="flex items-center gap-4 text-xs">
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
              {BROKER_INFO.bairroCidade}
            </span>
            <span className="text-slate-400">Atendimento seg a sex 8h às 19h</span>
          </div>
        </div>
      </div>

      {/* Barra Principal de Navegação e Contato Direto */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-4">
        {/* Identidade da Corretora com Logo Oficial */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-white p-1 rounded-xl shadow-xs border border-white/40 shrink-0 group-hover:scale-105 transition-transform">
            <BrandIcon size={38} />
          </div>
          <div className="flex flex-col">
            <span className="serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-100 transition-colors leading-tight">
              Convênio Médico Particular
            </span>
            <span className="text-[10px] sm:text-xs text-[#F59E0B] font-bold tracking-widest uppercase opacity-95 font-sans mt-0.5">
              Corretora de Planos de Saúde em São Paulo
            </span>
          </div>
        </Link>

        {/* Links de navegação e Ações Rápidas */}
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href={BROKER_INFO.telefoneTel}
            id="header-phone-button"
            className="hidden sm:flex flex-col text-right group"
            title="Ligue para falar com o corretor em São Paulo"
          >
            <span className="text-[11px] text-slate-300 uppercase tracking-wider opacity-80 group-hover:text-white transition-colors">
              Atendimento Personalizado
            </span>
            <div className="flex items-center gap-1.5 text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
              <Phone className="w-4 h-4 text-[#D97706]" />
              <span>{BROKER_INFO.telefoneFormatado}</span>
            </div>
          </a>

          <a
            href={BROKER_INFO.whatsappDefaultLink}
            target="_blank"
            rel="noopener noreferrer"
            id="header-whatsapp-cta"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-sm hover:shadow transition-all active:scale-[0.99] whitespace-nowrap uppercase tracking-wider"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span className="hidden md:inline">Pedir cotação no WhatsApp</span>
            <span className="md:hidden">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Menu de navegação das páginas internas e âncoras */}
      <nav className="bg-[#0E2F4E] px-4 sm:px-8 border-t border-[#1B4B79] overflow-x-auto scrollbar-none">
        <div className="max-w-6xl mx-auto flex items-center gap-5 py-2.5 text-xs font-medium whitespace-nowrap">
          <Link
            to="/plano-de-saude-sem-cnpj"
            className={`transition-colors font-bold px-2 py-0.5 rounded ${location.pathname === '/plano-de-saude-sem-cnpj' ? 'bg-[#D97706] text-white' : 'text-amber-300 hover:text-white'}`}
          >
            ★ Sem CNPJ (CPF)
          </Link>
          <Link
            to="/convenio-medico-individual-familiar"
            className={`transition-colors hover:text-white ${location.pathname === '/convenio-medico-individual-familiar' ? 'text-[#F59E0B] font-bold' : 'text-slate-200'}`}
          >
            Individual e Familiar
          </Link>
          <Link
            to="/convenio-medico-por-adesao"
            className={`transition-colors hover:text-white ${location.pathname === '/convenio-medico-por-adesao' ? 'text-[#F59E0B] font-bold' : 'text-slate-200'}`}
          >
            Por Adesão
          </Link>
          <Link
            to="/convenio-medico-mei"
            className={`transition-colors hover:text-white ${location.pathname === '/convenio-medico-mei' ? 'text-[#F59E0B] font-bold' : 'text-slate-200'}`}
          >
            Plano MEI
          </Link>
          <Link
            to="/convenio-medico-empresarial"
            className={`transition-colors hover:text-white ${location.pathname === '/convenio-medico-empresarial' ? 'text-[#F59E0B] font-bold' : 'text-slate-200'}`}
          >
            Empresarial PME
          </Link>
          <Link
            to="/tabela-de-precos-convenio-medico-sao-paulo"
            className={`transition-colors hover:text-white ${location.pathname === '/tabela-de-precos-convenio-medico-sao-paulo' ? 'text-[#F59E0B] font-bold' : 'text-slate-200'}`}
          >
            Tabela de Preços 2026
          </Link>
          <Link
            to="/operadoras"
            className={`transition-colors hover:text-white ${location.pathname.startsWith('/operadoras') ? 'text-[#F59E0B] font-bold' : 'text-slate-200'}`}
          >
            Operadoras em SP
          </Link>
          <Link
            to="/blog"
            className={`transition-colors hover:text-white ${location.pathname.startsWith('/blog') ? 'text-[#F59E0B] font-bold' : 'text-slate-200'}`}
          >
            Blog
          </Link>
          <Link
            to="/sobre"
            className={`transition-colors hover:text-white ${location.pathname === '/sobre' ? 'text-[#F59E0B] font-bold' : 'text-slate-200'}`}
          >
            Sobre
          </Link>
          <Link
            to="/contato"
            className={`transition-colors hover:text-white ${location.pathname === '/contato' ? 'text-[#F59E0B] font-bold' : 'text-slate-200'}`}
          >
            Contato
          </Link>
        </div>
      </nav>
    </header>
  );
};

