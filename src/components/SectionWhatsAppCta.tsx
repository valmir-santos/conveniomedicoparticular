import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { BROKER_INFO } from '../data/siteData';

interface SectionWhatsAppCtaProps {
  label?: string;
  sublabel?: string;
  messageText: string;
  variant?: 'primary' | 'compact' | 'banner';
  className?: string;
}

export const SectionWhatsAppCta: React.FC<SectionWhatsAppCtaProps> = ({
  label = 'Pedir cotação no WhatsApp',
  sublabel = 'Envie as idades para receber a tabela oficial hoje',
  messageText,
  variant = 'primary',
  className = ''
}) => {
  const whatsappUrl = `${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent(messageText)}`;

  if (variant === 'compact') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm py-2.5 px-5 rounded-full uppercase tracking-wider transition-transform hover:scale-[1.02] shadow-sm ${className}`}
      >
        <MessageCircle className="w-4 h-4 fill-current shrink-0" />
        <span>{label}</span>
      </a>
    );
  }

  if (variant === 'banner') {
    return (
      <div className={`bg-[#123A5F] text-white rounded-xl p-5 sm:p-6 my-8 border border-slate-700 triagem-shadow ${className}`}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-widest block mb-1">
              Atendimento Direto com o Corretor
            </span>
            <p className="serif text-lg sm:text-xl font-bold leading-tight">
              {label}
            </p>
            {sublabel && (
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {sublabel}
              </p>
            )}
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm py-3.5 px-6 rounded-full uppercase tracking-wider transition-transform hover:scale-[1.02] shadow-md w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  // Default Primary
  return (
    <div className={`my-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 bg-[#FEF3C7]/40 border border-[#F59E0B]/30 rounded-xl ${className}`}>
      <div className="flex-1">
        <p className="text-sm font-bold text-[#123A5F]">
          {label}
        </p>
        {sublabel && (
          <p className="text-xs text-gray-600 mt-0.5">
            {sublabel}
          </p>
        )}
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-full uppercase tracking-wider transition-colors shadow-sm shrink-0"
      >
        <MessageCircle className="w-4 h-4 fill-current shrink-0" />
        <span>Enviar mensagem agora</span>
      </a>
    </div>
  );
};
