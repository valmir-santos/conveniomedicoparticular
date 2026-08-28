import React from 'react';
import { ShieldCheck, MapPin, Phone, MessageCircle, FileText, Check } from 'lucide-react';
import { BROKER_INFO } from '../data/siteData';
import { BrandIcon } from './Logo';

export const WhoWeAre: React.FC = () => {
  return (
    <section id="quem-atende" className="py-14 px-4 sm:px-8 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Coluna de Apresentação em Primeira Pessoa */}
          <div className="lg:col-span-7">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#D97706] mb-3">
              Quem está do outro lado
            </h4>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#123A5F] rounded-xl flex items-center justify-center text-white serif text-2xl sm:text-3xl font-bold shrink-0 shadow-sm">
                CA
              </div>
              <div className="flex flex-col">
                <span className="serif text-2xl font-bold text-[#123A5F] leading-tight">
                  Carlos Alberto
                </span>
                <span className="text-xs text-gray-500 font-medium mt-0.5">
                  Corretor Responsável | Registro SUSEP 10.203040
                </span>
                <p className="text-sm text-gray-600 italic mt-2 leading-relaxed">
                  "Não enviamos tabelas genéricas. Analisamos seu perfil e rede de preferência antes de enviar a cotação. Atendemos todo o Brasil com presença física em SP, RJ, DF e PR, e atendimento 100% digital em todas as demais regiões."
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 font-sans text-base leading-relaxed">
              <p>
                Eu atendo pessoalmente quem me chama no WhatsApp. Não passo o seu número para uma 
                central de telemarketing com atendentes rotativos que você nunca mais vai conseguir encontrar.
              </p>
              
              <p>
                Trabalho com código direto nas principais operadoras de saúde do país. Oferecemos 
                <strong> atendimento presencial em São Paulo, Rio de Janeiro, Brasília e Paraná</strong>, 
                e prestamos consultoria personalizada de forma 100% digital e ágil para todas as demais praças do Brasil. 
                Nossa sede física em SP fica na <strong>Rua São Roberto, 298, na Vila Marieta (São Paulo/SP)</strong>.
              </p>

              <p className="text-gray-600 text-sm">
                Se você só tem CPF, não vou te empurrar para abrir empresa. A gente analisa o que está 
                disponível na sua faixa de idade e mostra a realidade dos valores antes de você assinar qualquer proposta.
              </p>
            </div>

            {/* Compromissos Diretos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-start gap-2 text-sm text-gray-800">
                <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <span>Sem repasse de dados para terceiros</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-800">
                <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <span>Tabela de carências enviada por escrito</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-800">
                <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <span>Presencial em SP, RJ, DF e PR</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-800">
                <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <span>Atendimento nacional 100% virtual</span>
              </div>
            </div>
          </div>

          {/* Coluna do Cartão de Registro & Credenciais */}
          <div className="lg:col-span-5 bg-[#F9FAFB] border border-gray-200 rounded-xl p-6 triagem-shadow">
            <div className="border-b border-gray-200 pb-4 mb-4 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D97706] block mb-1">
                  Identificação da Corretora
                </span>
                <h3 className="serif text-xl font-bold text-[#123A5F]">
                  {BROKER_INFO.name}
                </h3>
                <p className="text-xs text-gray-600 mt-0.5 font-medium">
                  Atendimento Oficial em São Paulo
                </p>
              </div>
              <div className="bg-white p-2 rounded-xl border border-gray-200 shadow-xs shrink-0">
                <BrandIcon size={44} />
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <FileText className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-[#123A5F] block">Registro Oficial SUSEP</span>
                  <span className="text-gray-700 text-xs sm:text-sm font-mono bg-white px-2 py-0.5 rounded border border-gray-200 inline-block mt-0.5 font-semibold">
                    SUSEP 10.203040
                  </span>
                  <span className="text-xs text-gray-500 block mt-0.5">
                    {BROKER_INFO.codigoDireto}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-[#123A5F] block">Endereço do Escritório</span>
                  <span className="text-gray-700 text-xs sm:text-sm block">
                    {BROKER_INFO.endereco}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-[#123A5F] block">Contato Telefônico Direto</span>
                  <a
                    href={BROKER_INFO.telefoneTel}
                    className="text-[#123A5F] hover:text-[#D97706] font-bold text-sm transition-colors"
                  >
                    {BROKER_INFO.telefoneFormatado}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col gap-2">
              <a
                href={BROKER_INFO.whatsappDefaultLink}
                target="_blank"
                rel="noopener noreferrer"
                id="who-we-are-whatsapp-btn"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#123A5F] hover:bg-[#0D2A45] text-white font-bold text-sm py-3 px-4 rounded-lg transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
                <span>Conversar direto com o corretor</span>
              </a>
              <span className="text-[11px] text-gray-500 text-center">
                Atendimento com corretor habilitado • Sem filas
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

