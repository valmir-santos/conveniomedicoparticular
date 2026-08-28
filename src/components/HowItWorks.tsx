import React from 'react';
import { Clock, MessageSquare, FileCheck2, UserCheck, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS, BROKER_INFO } from '../data/siteData';

export const HowItWorks: React.FC = () => {
  const icons = [MessageSquare, Clock, FileCheck2, UserCheck];

  return (
    <section id="como-funciona" className="py-16 px-4 sm:px-8 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#D97706] block mb-2">
            Passo a Passo
          </span>
          <h2 className="serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123A5F] leading-tight mb-3">
            Como funciona até a sua cotação
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Sem burocracia desnecessária. Você envia os dados básicos e recebe o comparativo real no mesmo dia útil.
          </p>
        </div>

        {/* Os 4 Passos Concretos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS_STEPS.map((step, index) => {
            const Icon = icons[index];

            return (
              <div
                key={step.number}
                id={`step-item-${step.number}`}
                className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-between relative hover:border-[#123A5F] transition-all triagem-shadow"
              >
                <div>
                  {/* Número e Ícone */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="serif font-bold text-2xl text-[#D97706]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center text-[#D97706]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Título do Passo */}
                  <h3 className="serif font-bold text-base sm:text-lg text-[#123A5F] mb-2 leading-snug">
                    {step.title}
                  </h3>

                  {/* Descrição Concreta */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Prazo Real / Compromisso */}
                <div className="mt-5 pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-bold text-gray-500 bg-[#F9FAFB] px-2.5 py-1 rounded border border-gray-200 inline-block uppercase tracking-wider">
                    {step.timeline}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner de Compromisso no final da seção */}
        <div className="mt-10 p-6 bg-[#F9FAFB] border-2 border-gray-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-5 triagem-shadow">
          <div>
            <h4 className="serif font-bold text-lg text-[#123A5F]">
              Precisa de um comparativo para hoje?
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Envie as idades e seu bairro. O corretor puxa a tabela vigente na hora.
            </p>
          </div>

          <a
            href={BROKER_INFO.whatsappDefaultLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-colors whitespace-nowrap uppercase tracking-wider shadow-sm"
          >
            <span>Iniciar no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

