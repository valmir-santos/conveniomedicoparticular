import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Building, Info, MessageCircle, ChevronRight } from 'lucide-react';
import { BROKER_INFO, OPERATOR_PLACEHOLDERS } from '../data/siteData';

export const Operators: React.FC = () => {
  return (
    <section id="operadoras" className="py-16 px-4 sm:px-8 bg-[#F9FAFB] border-b border-gray-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#D97706] block mb-2">
            Código Direto na Fonte
          </span>
          <h2 className="serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123A5F] leading-tight mb-3">
            Operadoras comparadas em São Paulo
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Nós cotamos na fonte, direto no sistema das operadoras credenciadas. 
            Você não paga taxa de adesão a intermediários nem sobrepreço de corretagem.
          </p>
        </div>

        {/* Informação sobre Código Direto */}
        <div className="bg-[#123A5F] text-white p-6 sm:p-7 rounded-xl mb-8 triagem-shadow border-b-4 border-[#D97706]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-start gap-3.5">
              <ShieldCheck className="w-7 h-7 text-[#D97706] shrink-0 mt-0.5" />
              <div>
                <h3 className="serif font-bold text-lg sm:text-xl text-white">
                  Sem administradora no meio: cotação direta na operadora
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  Trabalhamos com código direto cadastrado. Isso significa que a proposta vai direto 
                  para a emissão da operadora escolhida, com tabela original de carências e sem custos extras.
                </p>
              </div>
            </div>

            <a
              href={BROKER_INFO.whatsappDefaultLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-full whitespace-nowrap transition-colors uppercase tracking-wider shadow-sm shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Comparar no WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bloco de operadoras */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 triagem-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-[#D97706]" />
              <span>Operadoras com comercialização ativa em São Paulo</span>
            </div>
            <Link to="/operadoras" className="text-[#123A5F] hover:text-[#D97706] inline-flex items-center gap-1 font-bold">
              <span>Ver todas as 15 operadoras</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {OPERATOR_PLACEHOLDERS.map((op, idx) => (
              <Link
                key={idx}
                to={`/operadoras/${op.slug}`}
                className="p-3.5 rounded-lg border border-gray-200 bg-[#F9FAFB] flex flex-col justify-between hover:border-[#123A5F] hover:bg-white transition-all shadow-xs group"
              >
                <div>
                  <span className="serif font-bold text-sm text-[#123A5F] group-hover:text-[#D97706] transition-colors block">
                    {op.name}
                  </span>
                  <span className="text-[11px] text-gray-600 block mt-1 leading-tight">
                    {op.focus}
                  </span>
                </div>

                <div className="mt-3 pt-2 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-400 font-semibold">Ver detalhes</span>
                  <span className="text-[10px] text-[#D97706] font-bold uppercase tracking-wider flex items-center gap-0.5">
                    <span>Guia</span>
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Aviso transparente de atualização cadastral */}
          <div className="mt-6 pt-4 border-t border-gray-100 flex items-start gap-2 text-xs text-gray-600 bg-[#F9FAFB] p-3.5 rounded-lg border border-gray-200">
            <Info className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
            <span>
              <strong>Nota de conformidade:</strong> As tabelas de preços, rede credenciada e regras de comercialização para pessoa física 
              são atualizadas periodicamente pelas operadoras. No momento da sua cotação, checamos a vigência exata para a sua faixa etária.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

