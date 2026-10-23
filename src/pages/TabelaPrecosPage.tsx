import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceSchema, FaqSchema } from '../components/SchemaJsonLd';
import { SectionWhatsAppCta } from '../components/SectionWhatsAppCta';
import { BROKER_INFO } from '../data/siteData';
import { Table, MessageCircle, AlertCircle, Check, HelpCircle, ArrowRight } from 'lucide-react';
import { Seo } from '../components/Seo';

export const TabelaPrecosPage: React.FC = () => {
  const pageTitle = "Tabela de preços convênio médico São Paulo 2026";
  const pageDescription = "Estrutura oficial da tabela de preços de convênio médico em São Paulo para 2026. Entenda o que compõe o valor por faixa etária e solicite a tabela vigente no WhatsApp.";

  const faqList = [
    {
      question: 'Por que o preço de plano de saúde na internet nunca bate com a cotação?',
      answer: 'A maioria dos sites divulga valores antigos desatualizados ou preços de planos empresariais com coparticipação máxima para atrair cliques. Quando a cotação real é calculada pela faixa etária e rede exata, o valor é diferente. Aqui enviamos a tabela oficial sem distorções.'
    },
    {
      question: 'Quais são as faixas etárias oficiais para cálculo de preço?',
      answer: 'O cálculo segue 10 faixas etárias padronizadas: 0 a 18 anos, 19 a 23, 24 a 28, 29 a 33, 34 a 38, 39 a 43, 44 a 48, 49 a 53, 54 a 58 e 59 anos ou mais.'
    },
    {
      question: 'Como faço para receber a tabela oficial de 2026?',
      answer: 'Basta enviar uma mensagem no WhatsApp informando as idades dos beneficiários. Consultamos a grade oficial da operadora e enviamos o PDF/tabela detalhada no mesmo dia útil.'
    },
    {
      question: 'A tabela de preços tem validade?',
      answer: 'Sim, as operadoras de saúde em São Paulo atualizam suas tabelas comerciais periodicamente. Ao solicitar sua cotação, você recebe a versão em vigor naquela data com garantia das condições vigentes.'
    }
  ];

  const AGE_RANGES = [
    '00 a 18 anos',
    '19 a 23 anos',
    '24 a 28 anos',
    '29 a 33 anos',
    '34 a 38 anos',
    '39 a 43 anos',
    '44 a 48 anos',
    '49 a 53 anos',
    '54 a 58 anos',
    '59 anos ou mais'
  ];

  const SAMPLE_OPERATORS_TABLE = [
    { name: 'São Cristóvão Saúde', modalidade: 'Individual / CPF', acomodacao: 'Enfermaria / Apartamento', abrangencia: 'São Paulo (Zona Leste / Capital)' },
    { name: 'Trasmontano Saúde', modalidade: 'Individual / CPF', acomodacao: 'Enfermaria / Apartamento', abrangencia: 'Capital de SP e Litoral' },
    { name: 'Prevent Senior', modalidade: 'Individual 50+ / CPF', acomodacao: 'Enfermaria / Apartamento', abrangencia: 'Capital de São Paulo' },
    { name: 'HapVida Notredame', modalidade: 'Individual / Adesão / PME', acomodacao: 'Enfermaria / Apartamento', abrangencia: 'São Paulo e Região Metropolitana' },
    { name: 'MedSênior Saúde', modalidade: 'Individual 49+ / CPF', acomodacao: 'Enfermaria / Apartamento', abrangencia: 'Capital de São Paulo' },
    { name: 'UniHosp Saúde', modalidade: 'Individual / CPF', acomodacao: 'Enfermaria', abrangencia: 'São Paulo e Grande ABC' },
    { name: 'Plena Saúde', modalidade: 'Individual / CPF', acomodacao: 'Enfermaria / Apartamento', abrangencia: 'Zona Norte, Oeste e Região' },
    { name: 'Amil Fácil / Amil Saúde', modalidade: 'Adesão / MEI / PME', acomodacao: 'Enfermaria / Apartamento', abrangencia: 'Regional SP / Nacional' },
    { name: 'SulAmérica Saúde', modalidade: 'Adesão / MEI / PME', acomodacao: 'Apartamento / Reembolso', abrangencia: 'Nacional' },
    { name: 'Bradesco Saúde', modalidade: 'Adesão / MEI / PME', acomodacao: 'Enfermaria / Apartamento', abrangencia: 'Nacional' }
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-[#1A1A1A]">
      <Seo title={pageTitle} description={pageDescription} path="/tabela-de-precos-convenio-medico-sao-paulo" />
      <ServiceSchema
        serviceName={pageTitle}
        description={pageDescription}
        url="/tabela-de-precos-convenio-medico-sao-paulo"
        serviceType="Tabela de Preços e Cotação de Planos de Saúde"
      />
      <FaqSchema faqs={faqList} />

      <Breadcrumb
        items={[
          { label: 'Cotação', url: '/convenio-medico-individual-familiar' },
          { label: 'Tabela de Preços 2026' }
        ]}
      />

      {/* Hero */}
      <section className="bg-[#123A5F] text-white py-12 sm:py-16 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#D97706]/20 text-[#FDE68A] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#D97706]/30">
            Valores Oficiais das Operadoras
          </div>

          <h1 className="serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            {pageTitle}
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans font-light">
            Não divulgamos estimativas genéricas ou números fictícios na internet. O valor real do seu convênio médico é determinado pela tabela oficial da operadora calculada para a sua faixa etária, acomodação e tipo de contratação.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={`${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Olá! Gostaria de receber a tabela de preços oficial de convênio médico para 2026 em São Paulo.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base py-3.5 px-7 rounded-full uppercase tracking-wider transition-transform hover:scale-[1.02] shadow-md text-center"
            >
              <span>Pedir tabela oficial no WhatsApp</span>
            </a>
            <span className="text-xs text-slate-300 sm:text-left text-center">
              Envio imediato da grade com carências e valores em vigor.
            </span>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-12">

        {/* 1. O que faz o preço subir ou descer */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            O que faz o preço do convênio médico variar
          </h2>
          <p className="text-gray-700 leading-relaxed">
            O valor final da mensalidade não é um número aleatório. Ele é definido com base em cinco fatores objetivos:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <strong className="text-[#123A5F] text-sm block mb-1">1. Faixa Etária dos Beneficiários</strong>
              <p className="text-xs text-gray-600">Calculado rigorosamente pela idade de cada pessoa na data de assinatura da proposta.</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <strong className="text-[#123A5F] text-sm block mb-1">2. Tipo de Contratação</strong>
              <p className="text-xs text-gray-600">Planos individuais (CPF), coletivos por adesão (associações) ou empresariais (MEI/PME).</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <strong className="text-[#123A5F] text-sm block mb-1">3. Padrão de Acomodação</strong>
              <p className="text-xs text-gray-600">Enfermaria (quarto compartilhado) ou Apartamento (quarto privativo com banheiro).</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <strong className="text-[#123A5F] text-sm block mb-1">4. Região de Abrangência</strong>
              <p className="text-xs text-gray-600">Planos regionais de São Paulo costumam ter mensalidades mais acessíveis que planos de cobertura nacional.</p>
            </div>
          </div>
        </section>

        {/* 2. Estrutura da Tabela Oficial 2026 */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Estrutura da tabela de operadoras em São Paulo (2026)
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Consulte a grade de modalidades e solicite a cotação exata da sua faixa etária diretamente na tabela vigente:
          </p>

          <div className="overflow-x-auto bg-white rounded-xl border border-gray-200 triagem-shadow">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#123A5F] text-white">
                <tr>
                  <th className="p-3 font-bold">Operadora</th>
                  <th className="p-3 font-bold">Modalidade</th>
                  <th className="p-3 font-bold">Acomodação</th>
                  <th className="p-3 font-bold">Abrangência</th>
                  <th className="p-3 font-bold text-center">Valor Oficial</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {SAMPLE_OPERATORS_TABLE.map((op, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="p-3 font-bold text-[#123A5F]">{op.name}</td>
                    <td className="p-3 text-gray-600">{op.modalidade}</td>
                    <td className="p-3 text-gray-600">{op.acomodacao}</td>
                    <td className="p-3 text-gray-600">{op.abrangencia}</td>
                    <td className="p-3 text-center">
                      <a
                        href={`${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent(`Olá! Gostaria de consultar o valor oficial da tabela 2026 para a operadora: ${op.name}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-[#FEF3C7] text-[#D97706] hover:bg-[#FDE68A] font-bold text-[11px] px-2.5 py-1 rounded-md transition-colors"
                      >
                        <span>[Ver tabela oficial]</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#123A5F] shrink-0 mt-0.5" />
            <p className="text-xs text-gray-700 leading-relaxed">
              <strong>Compromisso de transparência:</strong> Não publicamos valores inventados ou desatualizados. As células acima conectam você direto à tabela enviada pela operadora para o mês corrente, garantindo que o preço contratado seja exatamente o valor emitido no seu boleto.
            </p>
          </div>
        </section>

        {/* 3. As 10 Faixas Etárias */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Faixas etárias padronizadas para cotação
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Todas as operadoras em São Paulo utilizam as seguintes divisões por idade:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-1">
            {AGE_RANGES.map((range, index) => (
              <div key={index} className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                <span className="text-[11px] font-bold text-[#D97706] block mb-0.5">Faixa {index + 1}</span>
                <span className="text-xs font-semibold text-[#123A5F]">{range}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. CTA Tabela no WhatsApp */}
        <section>
          <SectionWhatsAppCta
            variant="banner"
            label="Receba o PDF completo com os valores de 2026"
            sublabel="Mande as idades para puxarmos a tabela com carências e hospitais"
            messageText="Olá! Gostaria de receber a tabela de preços oficial em PDF para São Paulo."
          />
        </section>

        {/* 5. FAQ */}
        <section className="space-y-4 pt-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#D97706]" />
            <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F]">
              Perguntas frequentes sobre a tabela de preços
            </h2>
          </div>

          <div className="space-y-3 pt-2">
            {faqList.map((faq, index) => (
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

      </div>
    </div>
  );
};
