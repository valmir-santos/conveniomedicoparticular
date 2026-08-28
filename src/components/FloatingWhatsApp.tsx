import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle, X } from 'lucide-react';
import { BROKER_INFO } from '../data/siteData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const location = useLocation();

  const getCustomWhatsAppLink = () => {
    const path = location.pathname;
    let message = 'Olá! Quero uma cotação de plano de saúde. Não tenho CNPJ e quero contratar direto no meu CPF.';

    if (path.includes('/convenio-medico-mei')) {
      message = 'Olá! Quero uma cotação de convênio médico para MEI e saber se vale a pena para o meu perfil.';
    } else if (path.includes('/convenio-medico-empresarial')) {
      message = 'Olá! Quero cotar convênio médico empresarial para minha equipe.';
    } else if (path.includes('/convenio-medico-por-adesao')) {
      message = 'Olá! Quero cotar plano de saúde por adesão através da minha profissão/formação.';
    } else if (path.includes('/convenio-medico-individual-familiar')) {
      message = 'Olá! Quero cotar convênio médico individual e familiar direto no CPF.';
    } else if (path.includes('/tabela-de-precos')) {
      message = 'Olá! Gostaria de receber a tabela de preços de convênios médicos atualizada para a minha idade.';
    } else if (path.includes('/operadoras/')) {
      const operadoraSlug = path.split('/operadoras/')[1]?.replace('/', '');
      message = `Olá! Gostaria de receber a cotação e a rede de atendimento da operadora ${operadoraSlug || ''}.`;
    } else if (path.includes('/blog/')) {
      message = 'Olá! Li um artigo no blog de vocês e gostaria de tirar uma dúvida e receber uma cotação de plano de saúde.';
    } else if (path.includes('/contato') || path.includes('/sobre')) {
      message = 'Olá! Gostaria de falar com o corretor responsável da Convênio Médico Particular.';
    }

    return `${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
  };

  return (
    <aside aria-label="Atendimento rápido WhatsApp" className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {/* Balão de Notificação / Chamada Rápida */}
      {showTooltip && (
        <div className="bg-white text-[#1A1A1A] p-3.5 rounded-xl triagem-shadow border border-gray-200 max-w-[270px] text-xs relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 p-0.5"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-1.5 font-bold text-[#123A5F] mb-1">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
            <span className="serif">Corretora On-Line</span>
          </div>
          <p className="text-gray-600 leading-snug">
            Mande sua(s) idade(s) para receber a tabela de convênio hoje.
          </p>
        </div>
      )}

      {/* Botão Flutuante Principal */}
      <a
        href={getCustomWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        title="Falar no WhatsApp com Andrea Correa Leite da Convênio Médico Particular"
        aria-label="Falar no WhatsApp com o corretor"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </aside>
  );
};
