import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceSchema } from '../components/SchemaJsonLd';
import { BROKER_INFO } from '../data/siteData';
import { MessageCircle, Phone, MapPin, Clock, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

export const ContatoPage: React.FC = () => {
  const pageTitle = "Fale com o Corretor | Convênio Médico Particular";
  const pageDescription = "Atendimento direto com corretor habilitado SUSEP em São Paulo. Fale no WhatsApp, ligue ou agende atendimento presencial. Sem formulários cansativos.";

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-[#1A1A1A]">
      <ServiceSchema
        serviceName="Atendimento e Cotação de Convênios Médicos"
        description={pageDescription}
        url="/contato"
      />

      <Breadcrumb
        items={[
          { label: 'Contato e Atendimento' }
        ]}
      />

      {/* Hero */}
      <section className="bg-[#123A5F] text-white py-12 sm:py-16 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#25D366]/20 text-emerald-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#25D366]/30">
            Canal Direto com o Corretor
          </div>

          <h1 className="serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            Fale com o corretor responsável
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans font-light">
            Não usamos formulários demorados nem transferimos você para robôs de atendimento. Fale diretamente com o corretor habilitado pela SUSEP pelo canal que for mais conveniente para você.
          </p>
        </div>
      </section>

      {/* Canais de Atendimento */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Canal Principal: WhatsApp */}
          <div className="bg-white rounded-xl border border-emerald-200 p-6 triagem-shadow flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#25D366] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
              Mais Rápido
            </div>

            <div>
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#25D366] flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>

              <h2 className="serif text-xl font-bold text-[#123A5F] mb-2">
                Atendimento via WhatsApp
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                Mande suas idades e região. Analisamos a grade de operadoras e respondemos no mesmo dia com a tabela de preços, carências e hospitais.
              </p>
            </div>

            <a
              href={`${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Olá! Gostaria de falar com o corretor para tirar dúvidas e cotar plano de saúde em São Paulo.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm py-3.5 px-4 rounded-full uppercase tracking-wider transition-colors w-full text-center shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Direto</span>
            </a>
          </div>

          {/* Canal Telefônico */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 triagem-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#123A5F] flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>

              <h2 className="serif text-xl font-bold text-[#123A5F] mb-2">
                Atendimento por Telefone
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                Prefere conversar por ligação de voz para explicar seu caso com calma? Ligue diretamente para nossa central.
              </p>
            </div>

            <a
              href={`tel:${BROKER_INFO.telefoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-[#123A5F] hover:bg-[#1B4D7E] text-white font-bold text-xs sm:text-sm py-3.5 px-4 rounded-full uppercase tracking-wider transition-colors w-full text-center shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Ligar {BROKER_INFO.telefone}</span>
            </a>
          </div>

          {/* Canal E-mail */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 triagem-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-amber-50 text-[#D97706] flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>

              <h2 className="serif text-xl font-bold text-[#123A5F] mb-2">
                Atendimento por E-mail
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                Envie suas dúvidas cadastrais ou pedidos de cotação corporativa diretamente para nosso e-mail comercial.
              </p>
            </div>

            <a
              href={`mailto:${BROKER_INFO.email}`}
              className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs sm:text-sm py-3.5 px-4 rounded-full transition-colors w-full text-center border border-gray-300 truncate"
            >
              <Mail className="w-4 h-4 text-gray-600 shrink-0" />
              <span className="truncate">{BROKER_INFO.email}</span>
            </a>
          </div>

        </div>

        {/* Informações de Atendimento Presencial e Horários */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 triagem-shadow grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#123A5F]">
              <Clock className="w-5 h-5 text-[#D97706]" />
              <h3 className="serif text-lg font-bold">Horários de Atendimento</h3>
            </div>
            <ul className="text-xs sm:text-sm text-gray-700 space-y-2">
              <li className="flex justify-between border-b border-gray-100 pb-1.5">
                <span>Segunda a Sábado:</span>
                <strong className="text-[#123A5F]">09:00 às 19:00 hs</strong>
              </li>
              <li className="flex justify-between text-gray-500">
                <span>Domingos e Feriados:</span>
                <span>Plantão WhatsApp (retorno no 1º dia útil)</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#123A5F]">
              <MapPin className="w-5 h-5 text-[#D97706]" />
              <h3 className="serif text-lg font-bold">Atendimento Presencial</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Fazemos questão de manter escritório físico para quem prefere assinar a proposta presencialmente na capital paulista:
            </p>
            <div className="text-xs sm:text-sm text-gray-800 bg-gray-50 p-3 rounded-lg border border-gray-200">
              <p className="font-semibold text-[#123A5F]">{BROKER_INFO.endereco}</p>
              <p className="text-gray-500 mt-1">Zona Leste de São Paulo — fácil acesso pelas principais vias da região.</p>
            </div>
          </div>
        </div>

        {/* Abrangência Nacional e Praças Presenciais */}
        <div className="bg-[#123A5F] text-white rounded-xl p-6 sm:p-7 space-y-3">
          <h3 className="serif text-lg font-bold text-white">
            Atendimento em Todo o Brasil
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Atendimento presencial nas praças de <strong>São Paulo, Rio de Janeiro, Brasília e Paraná</strong>. Para as demais cidades e estados do país, realizamos cotações e implantações de contratos 100% de forma digital e segura.
          </p>
        </div>

      </div>
    </div>
  );
};
