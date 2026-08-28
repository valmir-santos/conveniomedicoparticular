import React from 'react';
import { MessageCircle, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { BROKER_INFO } from '../data/siteData';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-8 bg-[#123A5F] text-white border-t-4 border-[#D97706]">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Selo */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D263F] text-[#F59E0B] text-xs font-bold uppercase tracking-wider mb-4 border border-[#1E4A78]">
          <ShieldCheck className="w-4 h-4 text-[#D97706]" />
          Cotação Direta e Sem Custo
        </div>

        {/* Pergunta que o visitante realmente faria */}
        <h2 className="serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
          Quer saber quanto custa um plano de saúde no seu CPF hoje?
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed font-sans">
          Mande uma mensagem agora com as idades de quem vai entrar. O corretor puxa a tabela das operadoras 
          ativas em São Paulo e responde no WhatsApp no mesmo dia útil.
        </p>

        {/* Botões Lado a Lado */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={BROKER_INFO.whatsappDefaultLink}
            target="_blank"
            rel="noopener noreferrer"
            id="final-cta-whatsapp-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-base px-8 py-4 rounded-full shadow-lg transition-all active:scale-[0.99] uppercase tracking-wider"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Pedir cotação no WhatsApp</span>
          </a>

          <a
            href={BROKER_INFO.telefoneTel}
            id="final-cta-phone-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0D263F] hover:bg-[#163654] text-white font-bold text-base px-7 py-4 rounded-full border border-slate-600 transition-colors"
          >
            <Phone className="w-5 h-5 text-[#D97706]" />
            <span>Ligar: {BROKER_INFO.telefoneFormatado}</span>
          </a>
        </div>

        {/* Endereço Exato e Horário */}
        <div className="pt-8 border-t border-[#1E4A78] text-xs sm:text-sm text-slate-300 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#D97706] shrink-0" />
            <span>{BROKER_INFO.endereco}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#F59E0B] shrink-0" />
            <span>{BROKER_INFO.horarioAtendimento}</span>
          </div>
        </div>

      </div>
    </section>
  );
};

