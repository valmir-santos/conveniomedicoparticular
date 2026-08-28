import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, X, Star, FileText } from 'lucide-react';
import { MODALITIES, ModalityItem } from '../data/siteData';

interface ModalitiesProps {
  onSelectModality?: (modality: ModalityItem) => void;
}

export const Modalities: React.FC<ModalitiesProps> = ({ onSelectModality }) => {
  return (
    <section id="modalidades" className="py-16 px-4 sm:px-8 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#D97706] block mb-2">
            Modalidades Atendidas
          </span>
          <h2 className="serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123A5F] leading-tight mb-3">
            Modalidades de convênio médico em São Paulo
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Cada formato possui regras próprias de entrada, documentação e carência. Veja o resumo de para quem serve e para quem não serve:
          </p>
        </div>

        {/* Lista com Hierarquia Estruturada */}
        <div className="space-y-5">
          {MODALITIES.map((item, index) => {
            const isTopPriority = item.highlight;

            return (
              <div
                key={item.id}
                id={`modalidade-item-${item.id}`}
                className={`rounded-xl transition-all triagem-shadow ${
                  isTopPriority
                    ? 'bg-white border-2 border-[#D97706] border-l-8 border-l-[#D97706] p-6 relative'
                    : 'bg-white border border-gray-200 border-l-8 border-l-[#123A5F] p-6 hover:border-gray-300'
                }`}
              >
                {/* Badge de Prioridade */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                        isTopPriority
                          ? 'bg-[#FEF3C7] text-[#D97706]'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {item.tag}
                    </span>

                    {isTopPriority && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#D97706]">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        Destaque em São Paulo
                      </span>
                    )}
                  </div>

                  <span className="text-xs text-gray-400 font-mono font-semibold">
                    0{index + 1}
                  </span>
                </div>

                {/* Nome da Modalidade */}
                <h3 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] mb-3">
                  <Link to={item.slug} className="hover:text-[#D97706] transition-colors">
                    {item.name}
                  </Link>
                </h3>

                {/* Para quem serve e para quem não serve */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 my-3 text-sm">
                  <div className="flex items-start gap-2.5 bg-[#F9FAFB] p-3.5 rounded-lg border border-gray-200">
                    <Check className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#123A5F] block text-xs uppercase tracking-wider font-bold">Para quem serve:</strong>
                      <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{item.forWhom}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 bg-[#F9FAFB] p-3.5 rounded-lg border border-gray-200">
                    <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-700 block text-xs uppercase tracking-wider font-bold">Para quem não serve:</strong>
                      <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{item.notForWhom}</span>
                    </div>
                  </div>
                </div>

                {/* Detalhes práticos */}
                <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
                  {item.details}
                </p>

                {/* Links de Ação */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                  <Link
                    to={item.slug}
                    className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold transition-colors group ${
                      isTopPriority
                        ? 'text-[#D97706] hover:text-[#B45309]'
                        : 'text-[#123A5F] hover:text-[#0D263F]'
                    }`}
                  >
                    <span>Acessar guia completo de {item.name.toLowerCase()}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  {onSelectModality && (
                    <button
                      type="button"
                      onClick={() => onSelectModality(item)}
                      className="text-xs text-gray-500 hover:text-gray-800 underline flex items-center gap-1"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Prévia rápida</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

