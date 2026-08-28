import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { OPERATORS_DETAILED } from '../data/operatorsData';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceSchema, FaqSchema } from '../components/SchemaJsonLd';
import { SectionWhatsAppCta } from '../components/SectionWhatsAppCta';
import { BROKER_INFO } from '../data/siteData';
import { ShieldCheck, Check, AlertCircle, MapPin, Building, HelpCircle, ArrowRight, XCircle } from 'lucide-react';

export const OperadoraDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const operator = OPERATORS_DETAILED.find((op) => op.slug === slug);

  if (!operator) {
    return <Navigate to="/operadoras" replace />;
  }

  const pageTitle = `${operator.name} em São Paulo: planos, rede e como contratar`;
  const pageDescription = `Tudo sobre ${operator.name} em São Paulo: rede credenciada, hospitais próprios, tipos de contratação e cotação de tabela oficial.`;

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-[#1A1A1A]">
      <ServiceSchema
        serviceName={pageTitle}
        description={pageDescription}
        url={`/operadoras/${operator.slug}`}
        serviceType={`Cotação de Planos de Saúde ${operator.name}`}
      />
      <FaqSchema faqs={operator.faq} />

      <Breadcrumb
        items={[
          { label: 'Operadoras', url: '/operadoras' },
          { label: operator.name }
        ]}
      />

      {/* Hero da Operadora */}
      <section className="bg-[#123A5F] text-white py-12 sm:py-16 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#D97706]/20 text-[#FDE68A] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#D97706]/30">
            {operator.badge}
          </div>

          <h1 className="serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            {operator.categoryTitle}
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans font-light">
            {operator.shortDescription}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={`${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent(`Olá! Gostaria de receber a cotação e a tabela de preços oficial da operadora ${operator.name} em São Paulo.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base py-3.5 px-7 rounded-full uppercase tracking-wider transition-transform hover:scale-[1.02] shadow-md text-center"
            >
              <span>Pedir tabela {operator.name} no WhatsApp</span>
            </a>
            <span className="text-xs text-slate-300 sm:text-left text-center">
              Código direto na operadora. Sem intermediários.
            </span>
          </div>
        </div>
      </section>

      {/* Conteúdo Específico da Operadora */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-12">

        {/* 1. Modalidades de Aceitação e Regras */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Tipos de contratação aceitos na {operator.name}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Veja como você pode contratar os planos da {operator.name} em São Paulo:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            <div className={`p-4 rounded-xl border ${operator.acceptsIndividualCpf ? 'bg-emerald-50/60 border-emerald-200' : 'bg-gray-50 border-gray-200'}`}>
              <div className="flex items-center gap-2 mb-2">
                {operator.acceptsIndividualCpf ? (
                  <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-gray-400 shrink-0" />
                )}
                <h3 className="font-bold text-sm text-[#123A5F]">Pessoa Física (CPF)</h3>
              </div>
              <p className="text-xs text-gray-600">
                {operator.acceptsIndividualCpf ? 'Aceita contratação individual direta no CPF.' : 'Não comercializa plano individual direto no balcão.'}
              </p>
            </div>

            <div className={`p-4 rounded-xl border ${operator.acceptsAdesao ? 'bg-emerald-50/60 border-emerald-200' : 'bg-gray-50 border-gray-200'}`}>
              <div className="flex items-center gap-2 mb-2">
                {operator.acceptsAdesao ? (
                  <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-gray-400 shrink-0" />
                )}
                <h3 className="font-bold text-sm text-[#123A5F]">Por Adesão</h3>
              </div>
              <p className="text-xs text-gray-600">
                {operator.acceptsAdesao ? 'Disponível para entidades profissionais e conselhos.' : 'Não comercializa na modalidade de adesão.'}
              </p>
            </div>

            <div className={`p-4 rounded-xl border ${operator.acceptsPme ? 'bg-emerald-50/60 border-emerald-200' : 'bg-gray-50 border-gray-200'}`}>
              <div className="flex items-center gap-2 mb-2">
                {operator.acceptsPme ? (
                  <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-gray-400 shrink-0" />
                )}
                <h3 className="font-bold text-sm text-[#123A5F]">MEI e Empresas</h3>
              </div>
              <p className="text-xs text-gray-600">
                {operator.acceptsPme ? 'Planos empresariais a partir de 2 vidas.' : 'Consulte disponibilidade corporativa.'}
              </p>
            </div>
          </div>

          <SectionWhatsAppCta
            label={`Quer cotar ${operator.name} para a sua idade?`}
            sublabel="Consultamos os valores vigentes no sistema da operadora"
            messageText={`Olá! Gostaria de cotar ${operator.name} em São Paulo. Vou enviar as idades dos beneficiários.`}
          />
        </section>

        {/* 2. Para qual perfil é a melhor escolha e para qual não é */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Para qual perfil {operator.name} é a melhor escolha (e para qual não é)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-5">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-2">
                <Check className="w-5 h-5" />
                <span>Excelente escolha para:</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                {operator.idealProfile}
              </p>
            </div>

            <div className="bg-amber-50/50 border border-amber-200 rounded-xl p-5">
              <div className="flex items-center gap-2 text-[#D97706] font-bold text-sm mb-2">
                <AlertCircle className="w-5 h-5" />
                <span>Não é recomendada para:</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                {operator.notIdealProfile}
              </p>
            </div>
          </div>
        </section>

        {/* 3. Região e Rede de Hospitais em São Paulo */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Rede própria e principais hospitais credenciados em São Paulo
          </h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>Região de cobertura em SP:</strong> {operator.coverageRegionSP}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <h3 className="font-bold text-sm text-[#123A5F] mb-3 flex items-center gap-2">
                <Building className="w-4 h-4 text-[#D97706]" />
                <span>Unidades e Hospitais Próprios:</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                {operator.ownUnitsAndHospitals.map((unit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#123A5F] mt-2 shrink-0"></span>
                    <span>{unit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <h3 className="font-bold text-sm text-[#123A5F] mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D97706]" />
                <span>Hospitais Credenciados de Destaque:</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                {operator.keyAccreditedHospitals.map((hosp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] mt-2 shrink-0"></span>
                    <span>{hosp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Diferenciais da Operadora */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Diferenciais de atendimento da {operator.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {operator.differentials.map((diff, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
                <span className="text-xs sm:text-sm text-gray-800">{diff}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Como solicitar cotação */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Como solicitar a cotação oficial da {operator.name}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {operator.howToQuote}
          </p>

          <SectionWhatsAppCta
            variant="banner"
            label={`Receba a tabela oficial de ${operator.name} hoje`}
            sublabel="Cotação com carências e lista de hospitais no seu bairro"
            messageText={`Olá! Gostaria de receber a tabela de preços oficial e carências de ${operator.name} para São Paulo.`}
          />
        </section>

        {/* 6. FAQ Específica */}
        <section className="space-y-4 pt-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#D97706]" />
            <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F]">
              Perguntas frequentes sobre {operator.name}
            </h2>
          </div>

          <div className="space-y-3 pt-2">
            {operator.faq.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-5 triagem-shadow">
                <h3 className="font-bold text-sm sm:text-base text-[#123A5F] mb-2 flex items-start gap-2">
                  <span className="text-[#D97706] font-bold">Q:</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pl-5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Links Internos */}
        <section className="bg-[#F3F4F6] p-6 rounded-xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="serif text-base font-bold text-[#123A5F]">Quer comparar com outras operadoras em São Paulo?</h3>
            <p className="text-xs text-gray-600">Veja o guia do plano individual ou a relação completa de operadoras.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/plano-de-saude-sem-cnpj"
              className="text-xs font-bold text-[#123A5F] hover:text-[#D97706] underline"
            >
              Planos sem CNPJ
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              to="/operadoras"
              className="text-xs font-bold text-[#123A5F] hover:text-[#D97706] underline"
            >
              Todas as Operadoras
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};
