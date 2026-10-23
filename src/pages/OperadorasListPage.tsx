import React from 'react';
import { Link } from 'react-router-dom';
import { OPERATORS_DETAILED } from '../data/operatorsData';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceSchema } from '../components/SchemaJsonLd';
import { SectionWhatsAppCta } from '../components/SectionWhatsAppCta';
import { BROKER_INFO } from '../data/siteData';
import { Building2, ChevronRight, Check, ShieldCheck } from 'lucide-react';
import { Seo } from '../components/Seo';

export const OperadorasListPage: React.FC = () => {
  const pageTitle = "Operadoras de Plano de Saúde em São Paulo";
  const pageDescription = "Conheça as 15 principais operadoras de planos de saúde em São Paulo. Descubra quais vendem no CPF, redes credenciadas e tabelas de preços oficiais.";

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-[#1A1A1A]">
      <Seo title={pageTitle} description={pageDescription} path="/operadoras" />
      <ServiceSchema
        serviceName={pageTitle}
        description={pageDescription}
        url="/operadoras"
        serviceType="Consultoria de Operadoras de Planos de Saúde"
      />

      <Breadcrumb
        items={[
          { label: 'Operadoras em São Paulo' }
        ]}
      />

      {/* Hero */}
      <section className="bg-[#123A5F] text-white py-12 sm:py-16 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#D97706]/20 text-[#FDE68A] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#D97706]/30">
            Grade Oficial de Operadoras
          </div>

          <h1 className="serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            {pageTitle}
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans font-light">
            Trabalhamos com código direto nas principais operadoras e seguradoras atuantes no mercado de São Paulo. Cada operadora atende um perfil de público e uma região específica da cidade. Conheça os detalhes de cada uma:
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={`${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Olá! Gostaria de cotar as operadoras de plano de saúde em São Paulo.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base py-3.5 px-7 rounded-full uppercase tracking-wider transition-transform hover:scale-[1.02] shadow-md text-center"
            >
              <span>Comparar operadoras no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lista de Operadoras */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OPERATORS_DETAILED.map((op) => (
            <div
              key={op.slug}
              className="bg-white rounded-xl border border-gray-200 p-5 triagem-shadow flex flex-col justify-between hover:border-[#123A5F]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#123A5F] px-2.5 py-1 rounded-full">
                    {op.badge}
                  </span>
                  {op.acceptsIndividualCpf && (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Aceita CPF
                    </span>
                  )}
                </div>

                <h2 className="serif text-xl font-bold text-[#123A5F] mb-2">
                  {op.name}
                </h2>

                <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {op.shortDescription}
                </p>

                <div className="space-y-1.5 text-xs text-gray-700 mb-4 pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-gray-900">Região SP:</span>
                    <span className="truncate">{op.coverageRegionSP}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <Link
                  to={`/operadoras/${op.slug}`}
                  className="text-xs font-bold text-[#123A5F] hover:text-[#D97706] inline-flex items-center gap-1"
                >
                  <span>Ver rede e planos</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={`${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent(`Olá! Quero cotar a operadora ${op.name} em São Paulo.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#25D366] hover:text-[#1EBE5D]"
                >
                  Cotar
                </a>
              </div>
            </div>
          ))}
        </div>

        <SectionWhatsAppCta
          variant="banner"
          label="Dúvida sobre qual operadora tem o melhor hospital no seu bairro?"
          sublabel="Fazemos a triagem exata de prontos-socorros próximos da sua casa"
          messageText="Olá! Gostaria de ajuda para escolher a operadora com os melhores hospitais próximos ao meu endereço em São Paulo."
        />
      </div>
    </div>
  );
};
