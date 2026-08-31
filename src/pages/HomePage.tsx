import React, { useState } from 'react';
import { HeroTriage } from '../components/HeroTriage';
import { WhoWeAre } from '../components/WhoWeAre';
import { CpfAdvocacy } from '../components/CpfAdvocacy';
import { Modalities } from '../components/Modalities';
import { Operators } from '../components/Operators';
import { HowItWorks } from '../components/HowItWorks';
import { FaqSection } from '../components/FaqSection';
import { FinalCta } from '../components/FinalCta';
import { FaqSchema } from '../components/SchemaJsonLd';
import { ModalityItem, BROKER_INFO, FAQ_LIST } from '../data/siteData';
import { MessageCircle, X } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [selectedModalityModal, setSelectedModalityModal] = useState<ModalityItem | null>(null);

  const handleOpenModality = (modality: ModalityItem) => {
    setSelectedModalityModal(modality);
  };

  const handleCloseModal = () => {
    setSelectedModalityModal(null);
  };

  const homeFaqs = FAQ_LIST.map((faq) => ({
    question: faq.question,
    answer: `${faq.directAnswer} ${faq.explanation}`
  }));

  return (
    <>
      <FaqSchema faqs={homeFaqs} />

      {/* Seção 1 — Hero com Triagem */}
      <HeroTriage />

      {/* Seção 2 — Quem está do outro lado */}
      <WhoWeAre />

      {/* Seção 3 — Por que quem só tem CPF é mal atendido */}
      <CpfAdvocacy
        onNavigateSemCnpj={() => {
          const semCnpjMod = {
            id: 'sem-cnpj',
            name: 'Convênio Médico para quem não tem CNPJ',
            slug: '/plano-de-saude-sem-cnpj',
            tag: 'Especialidade da corretora',
            forWhom: 'Para quem quer contratar apenas com o CPF, sem abrir MEI e sem vínculo com sindicato.',
            notForWhom: 'Não é para quem já tem uma empresa estruturada com mais de 2 vidas buscando desconto corporativo.',
            highlight: true,
            details: 'A gente cota nas operadoras que ainda mantêm contratação individual ativa na capital de São Paulo, verificando hospitais do seu bairro e explicando a carência real.'
          };
          setSelectedModalityModal(semCnpjMod);
        }}
      />

      {/* Seção 4 — Modalidades */}
      <Modalities onSelectModality={handleOpenModality} />

      {/* Seção 5 — Operadoras com quem trabalhamos */}
      <Operators />

      {/* Seção 6 — Como funciona */}
      <HowItWorks />

      {/* Seção 7 — Perguntas frequentes da Home */}
      <FaqSection />

      {/* Seção 8 — CTA final */}
      <FinalCta />

      {/* Modal de Detalhes da Modalidade Selecionada */}
      {selectedModalityModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-gray-200 relative animate-in fade-in zoom-in duration-150 triagem-shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#FEF3C7] text-[#D97706] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {selectedModalityModal.tag}
              </span>
              <span className="text-xs text-gray-500 font-medium">SP • RJ • DF • PR • Brasil</span>
            </div>

            <h3 className="serif font-bold text-xl sm:text-2xl text-[#123A5F] mb-3">
              {selectedModalityModal.name}
            </h3>

            <div className="space-y-3.5 text-sm text-gray-700 mb-6">
              <p className="leading-relaxed bg-[#F9FAFB] p-3.5 rounded-lg border border-gray-200 text-gray-700">
                {selectedModalityModal.details}
              </p>

              <div>
                <strong className="text-[#123A5F] block text-xs uppercase tracking-wider font-bold">Para quem serve:</strong>
                <p className="text-gray-600 text-xs sm:text-sm mt-0.5">{selectedModalityModal.forWhom}</p>
              </div>

              <div>
                <strong className="text-gray-700 block text-xs uppercase tracking-wider font-bold">Para quem não serve:</strong>
                <p className="text-gray-600 text-xs sm:text-sm mt-0.5">{selectedModalityModal.notForWhom}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-gray-200">
              <a
                href={`${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent(`Olá! Gostaria de receber uma cotação e a tabela vigente para a modalidade: ${selectedModalityModal.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm py-3 px-5 rounded-full uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Pedir cotação no WhatsApp</span>
              </a>

              <button
                onClick={handleCloseModal}
                className="w-full sm:w-auto px-5 py-3 border border-gray-300 text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
