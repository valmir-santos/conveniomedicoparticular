import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Phone, MessageCircle, BookmarkPlus, ExternalLink } from 'lucide-react';
import { BROKER_INFO, MODALITIES } from '../data/siteData';
import { BrandIcon } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-600 text-xs font-sans border-t border-gray-200">
      
      {/* Bloco Superior do Rodapé */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Identificação e Registro com Logo */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-[#F9FAFB] p-1.5 rounded-xl border border-gray-200 shadow-xs shrink-0">
                <BrandIcon size={36} />
              </div>
              <h3 className="serif text-lg font-bold text-[#123A5F] tracking-tight leading-tight">
                {BROKER_INFO.name}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Corretora de convênio médico e plano de saúde com atuação especializada em São Paulo, Rio de Janeiro, Brasília, Paraná e atendimento digital em todo o Brasil.
            </p>
            <div className="pt-1 text-gray-700 space-y-1">
              <div className="flex items-center gap-1.5 text-[#D97706] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#D97706]" />
                <span>{BROKER_INFO.susepNumero}</span>
              </div>
              <p className="text-[11px] font-semibold text-gray-600">
                {BROKER_INFO.cnpj}
              </p>
              <p className="text-[11px] text-gray-500">
                {BROKER_INFO.codigoDireto}
              </p>
            </div>
          </div>

          {/* Modalidades e Capitais */}
          <div className="space-y-3">
            <h4 className="serif text-sm font-bold text-[#123A5F] uppercase tracking-wider">
              Páginas & Modalidades
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/plano-de-saude-sem-cnpj"
                  className="hover:text-[#D97706] transition-colors block font-semibold text-[#123A5F]"
                >
                  ★ Plano sem CNPJ (CPF)
                </Link>
              </li>
              <li>
                <Link
                  to="/convenio-medico-individual-familiar"
                  className="hover:text-[#D97706] transition-colors block text-gray-600"
                >
                  Individual e Familiar
                </Link>
              </li>
              <li>
                <Link
                  to="/convenio-medico-por-adesao"
                  className="hover:text-[#D97706] transition-colors block text-gray-600"
                >
                  Plano por Adesão
                </Link>
              </li>
              <li>
                <Link
                  to="/convenio-medico-mei"
                  className="hover:text-[#D97706] transition-colors block text-gray-600"
                >
                  Convênio Médico MEI
                </Link>
              </li>
              <li>
                <Link
                  to="/convenio-medico-empresarial"
                  className="hover:text-[#D97706] transition-colors block text-gray-600"
                >
                  Empresarial PME
                </Link>
              </li>
              <li>
                <Link
                  to="/tabela-de-precos-convenio-medico-sao-paulo"
                  className="hover:text-[#D97706] transition-colors block text-gray-600"
                >
                  Tabela de Preços 2026
                </Link>
              </li>
              <li className="pt-2 border-t border-gray-100">
                <span className="text-[10px] font-bold text-[#D97706] uppercase tracking-wider block mb-1">Capitais Atendidas:</span>
              </li>
              <li>
                <Link to="/plano-de-saude-sao-paulo" className="hover:text-[#D97706] transition-colors block text-gray-600">
                  São Paulo (Capital e SP)
                </Link>
              </li>
              <li>
                <Link to="/plano-de-saude-rio-de-janeiro" className="hover:text-[#D97706] transition-colors block text-gray-600">
                  Rio de Janeiro (RJ)
                </Link>
              </li>
              <li>
                <Link to="/plano-de-saude-brasilia" className="hover:text-[#D97706] transition-colors block text-gray-600">
                  Brasília e Distrito Federal (DF)
                </Link>
              </li>
              <li>
                <Link to="/plano-de-saude-curitiba-parana" className="hover:text-[#D97706] transition-colors block text-gray-600">
                  Curitiba e Paraná (PR)
                </Link>
              </li>
              <li className="pt-2 border-t border-gray-100">
                <Link
                  to="/operadoras"
                  className="hover:text-[#D97706] transition-colors block text-gray-600"
                >
                  Operadoras Credenciadas
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-[#D97706] transition-colors block font-semibold text-[#123A5F]"
                >
                  Blog & Guias Técnicos
                </Link>
              </li>
            </ul>
          </div>

          {/* Endereço Físico & Regiões de Atendimento */}
          <div className="space-y-3">
            <h4 className="serif text-sm font-bold text-[#123A5F] uppercase tracking-wider">
              Escritório & Atendimento
            </h4>
            <div className="flex items-start gap-2 text-gray-700">
              <MapPin className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#123A5F] block">Endereço Físico:</strong>
                <span>{BROKER_INFO.endereco}</span>
              </div>
            </div>

            <div className="text-[11px] text-gray-500 pt-1 leading-relaxed">
              <strong className="text-gray-700 block">Área Atendida:</strong>
              {BROKER_INFO.regioesAtendidas}
            </div>

            <div className="text-[11px] text-gray-500 pt-1">
              <strong className="text-gray-700 block">Horário:</strong>
              {BROKER_INFO.horarioAtendimento}
            </div>
            
            <div className="pt-2">
              <Link to="/sobre" className="text-xs font-bold text-[#123A5F] hover:text-[#D97706] underline mr-3">Sobre a Corretora</Link>
              <Link to="/contato" className="text-xs font-bold text-[#123A5F] hover:text-[#D97706] underline">Fale Conosco</Link>
            </div>
          </div>

          {/* Contato & Fonte Preferencial do Google */}
          <div className="space-y-4">
            <h4 className="serif text-sm font-bold text-[#123A5F] uppercase tracking-wider">
              Canais Diretos
            </h4>
            <div className="space-y-2.5">
              <a
                href={BROKER_INFO.whatsappDefaultLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#123A5F] hover:text-[#D97706] font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
                <span>{BROKER_INFO.telefoneFormatado} (WhatsApp)</span>
              </a>

              <a
                href={BROKER_INFO.telefoneTel}
                className="flex items-center gap-2 text-gray-600 hover:text-[#123A5F] transition-colors"
              >
                <Phone className="w-4 h-4 text-gray-400" />
                <span>Ligação direta</span>
              </a>

              <a
                href={BROKER_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-[#123A5F] transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-gray-400" />
                <span>Página no Facebook</span>
              </a>
            </div>

            {/* Botão de Fonte Preferencial no Google */}
            <div className="pt-2">
              <a
                href="https://news.google.com/publications"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-google-preferred-source"
                title="Adicione a Convênio Médico Particular como fonte preferencial no Google"
                className="inline-flex items-center gap-2 bg-[#F9FAFB] hover:bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-[11px] font-semibold border border-gray-300 transition-colors"
              >
                <BookmarkPlus className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Adicione como fonte preferencial no Google</span>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Faixa Inferior de Direitos e Transparência */}
      <div className="bg-[#123A5F] py-4 px-4 sm:px-8 border-t-2 border-[#D97706] text-white">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-300 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {BROKER_INFO.name}. Todos os direitos reservados. {BROKER_INFO.susepNumero} | {BROKER_INFO.cnpj}.
          </p>
          <p className="text-slate-300">
            Endereço oficial: {BROKER_INFO.endereco}
          </p>
        </div>
      </div>
    </footer>
  );
};

