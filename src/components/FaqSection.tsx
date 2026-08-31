import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQ_LIST } from '../data/siteData';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['sem-cnpj-consegue', 'vale-a-pena-mei']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="perguntas-frequentes" className="py-16 px-4 sm:px-8 bg-[#F9FAFB] border-b border-gray-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="mb-10 text-center sm:text-left">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#D97706] block mb-2">
            Tire Suas Dúvidas
          </span>
          <h2 className="serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123A5F] leading-tight mb-3">
            Perguntas que a gente ouve toda semana
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Respostas práticas e diretas para as dúvidas mais comuns de quem busca convênio médico nas principais capitais e em todo o Brasil.
          </p>
        </div>

        {/* Lista de Perguntas e Respostas */}
        <div className="space-y-3.5">
          {FAQ_LIST.map((item) => {
            const isOpen = openIds.includes(item.id);

            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-colors triagem-shadow"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                  className="w-full py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="serif font-bold text-base sm:text-lg text-[#123A5F] flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#D97706] shrink-0" />
                    {item.question}
                  </span>
                  <div className="text-gray-400 shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#123A5F]" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-gray-700 font-sans border-t border-gray-100 text-sm sm:text-base leading-relaxed space-y-2.5">
                    <p className="font-bold text-[#123A5F]">
                      {item.directAnswer}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

