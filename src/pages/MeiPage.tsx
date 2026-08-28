import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceSchema, FaqSchema } from '../components/SchemaJsonLd';
import { SectionWhatsAppCta } from '../components/SectionWhatsAppCta';
import { BROKER_INFO } from '../data/siteData';
import { Check, AlertCircle, ArrowRight, HelpCircle, Building2, Briefcase, FileCheck } from 'lucide-react';

export const MeiPage: React.FC = () => {
  const pageTitle = "Convênio médico para MEI em São Paulo";
  const pageDescription = "Tabela de convênio médico para MEI em São Paulo a partir de 2 vidas. Saiba quando vale a pena, regras das operadoras e a verdade sobre abrir CNPJ só pelo plano.";

  const faqList = [
    {
      question: 'Vale a pena abrir MEI só para pagar menos no plano de saúde?',
      answer: 'Na imensa maioria das vezes, não vale a pena. Manter um MEI gera custo fixo mensal da guia do DAS (cerca de R$ 75 a R$ 80 todo mês) e obrigação de declaração anual na Receita. Se você não tem atividade econômica real, o custo tributário e o risco de cancelamento anulam a economia da mensalidade.'
    },
    {
      question: 'Quantas vidas são necessárias para contratar convênio pelo MEI?',
      answer: 'A grande maioria das operadoras em São Paulo exige no mínimo 2 vidas (o titular do MEI + 1 dependente legal, como cônjuge ou filho, ou 1 funcionário registrado no eSocial).'
    },
    {
      question: 'Preciso ter quanto tempo de MEI aberto?',
      answer: 'A maior parte das operadoras e seguradoras exige um tempo mínimo de 6 meses de constituição do CNPJ ativo na Receita Federal para aceitar a proposta comercial.'
    },
    {
      question: 'Quais documentos o MEI precisa apresentar?',
      answer: 'Cartão CNPJ atualizado, Certificado da Condição de Microempreendedor Individual (CCMEI), documento com foto do titular e certidão de casamento/nascimento para comprovar o vínculo dos dependentes.'
    },
    {
      question: 'Como funciona o reajuste do plano de saúde MEI?',
      answer: 'O reajuste anual é calculado no aniversário do contrato com base no agrupamento de contratos coletivos (pool de risco de pequenas empresas) da operadora, além da variação por faixa etária.'
    }
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-[#1A1A1A]">
      <ServiceSchema
        serviceName={pageTitle}
        description={pageDescription}
        url="/convenio-medico-mei"
        serviceType="Convênio Médico para Microempreendedor Individual (MEI)"
      />
      <FaqSchema faqs={faqList} />

      <Breadcrumb
        items={[
          { label: 'Modalidades', url: '/plano-de-saude-sem-cnpj' },
          { label: 'Convênio para MEI' }
        ]}
      />

      {/* Hero */}
      <section className="bg-[#123A5F] text-white py-12 sm:py-16 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#D97706]/20 text-[#FDE68A] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#D97706]/30">
            Contratação para Microempreendedores
          </div>

          <h1 className="serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            {pageTitle}
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans font-light">
            Se você já possui um MEI ativo e trabalha no seu negócio em São Paulo, o convênio empresarial pode gerar uma economia real de 20% a 35% na mensalidade. Aqui, analisamos a sua tabela com transparência: vendemos para quem realmente é MEI e orientamos quem só tem CPF a não criar problemas fiscais.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={`${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Olá! Tenho um MEI ativo em São Paulo e gostaria de receber a cotação de convênio a partir de 2 vidas.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base py-3.5 px-7 rounded-full uppercase tracking-wider transition-transform hover:scale-[1.02] shadow-md text-center"
            >
              <span>Cotar tabela MEI no WhatsApp</span>
            </a>
            <span className="text-xs text-slate-300 sm:text-left text-center">
              Análise rápida de CNPJ e operadoras no mesmo dia útil.
            </span>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-12">

        {/* 1. Quando o MEI é a escolha certa */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Quando o MEI é a escolha certa
          </h2>
          <p className="text-gray-700 leading-relaxed">
            O plano de saúde via MEI é uma excelente escolha quando você já possui uma empresa aberta com atividade real — seja você um prestador de serviços, comerciante, artesão ou profissional autônomo formalizado — e deseja incluir pelo menos mais uma pessoa da sua família (cônjuge ou filho) ou o funcionário registrado do seu negócio.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Nesse cenário, você aproveita as tabelas empresariais das operadoras em São Paulo (como Amil, HapVida Notredame, Bradesco Saúde, SulAmérica e Porto Seguro) com redução significativa de custo em relação aos planos avulsos.
          </p>

          <SectionWhatsAppCta
            label="Seu MEI tem mais de 6 meses de abertura?"
            sublabel="Mande o CNPJ e as idades para puxarmos as tabelas liberadas"
            messageText="Olá! Gostaria de cotar plano de saúde com meu CNPJ MEI em São Paulo."
          />
        </section>

        {/* 2. O que a operadora pede na contratação */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            O que a operadora pede para aprovar o plano MEI
          </h2>
          <p className="text-gray-700 leading-relaxed">
            As operadoras de saúde realizam uma auditoria documental antes de emitir a apólice para certificar a regularidade da microempresa:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <FileCheck className="w-6 h-6 text-[#D97706] mb-2" />
              <h3 className="font-bold text-sm text-[#123A5F]">Tempo Mínimo de Abertura</h3>
              <p className="text-xs text-gray-600 mt-1">A maioria das operadoras exige no mínimo 6 meses contínuos de CNPJ ativo na Receita Federal.</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <Building2 className="w-6 h-6 text-[#123A5F] mb-2" />
              <h3 className="font-bold text-sm text-[#123A5F]">Mínimo de 2 Vidas</h3>
              <p className="text-xs text-gray-600 mt-1">Titular do MEI + dependente legal com vínculo familiar comprovado ou funcionário registrado.</p>
            </div>
          </div>
        </section>

        {/* 3. Seção Honesta: O risco de abrir MEI só para o plano */}
        <section className="bg-amber-50/80 border border-amber-200 rounded-xl p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-2 text-[#D97706]">
            <AlertCircle className="w-6 h-6 shrink-0" />
            <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F]">
              Uma conversa honesta: vale a pena abrir MEI apenas para contratar plano?
            </h2>
          </div>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            Muitos corretores na internet aconselham clientes a abrir um MEI em 10 minutos para conseguir vender o plano corporativo. O que eles não contam são as consequências fiscais e contratuais:
          </p>
          <ul className="space-y-2.5 text-xs sm:text-sm text-gray-800">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D97706] mt-2 shrink-0"></span>
              <span><strong>Custo fixo do DAS:</strong> Você terá que pagar todo mês entre R$ 75 e R$ 80 de imposto do Simples Nacional. Em um ano, são quase R$ 1.000 de despesa obrigatória.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D97706] mt-2 shrink-0"></span>
              <span><strong>Obrigação com a Receita Federal:</strong> O MEI exige declaração anual de rendimentos (DASN). Se esquecer, o seu CPF pessoal fica com pendência cadastral na Receita.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D97706] mt-2 shrink-0"></span>
              <span><strong>Cancelamento por inatividade:</strong> Na auditoria anual das operadoras, caso o CNPJ não apresente movimentação comercial real, o plano pode ser cancelado.</span>
            </li>
          </ul>
          <p className="text-xs text-gray-600 italic pt-1">
            Se você não tem negócio, prefira contratar no seu CPF como pessoa física. É mais seguro e não cria obrigações contábeis.
          </p>
        </section>

        {/* 4. FAQ com 5 Perguntas */}
        <section className="space-y-4 pt-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#D97706]" />
            <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F]">
              Perguntas frequentes sobre convênio médico MEI
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

        {/* Link para Plano sem CNPJ */}
        <section className="bg-[#F3F4F6] p-6 rounded-xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="serif text-base font-bold text-[#123A5F]">Não tem MEI ou prefere não envolver CNPJ?</h3>
            <p className="text-xs text-gray-600">Veja como contratar diretamente no seu CPF com total segurança em São Paulo.</p>
          </div>
          <Link
            to="/plano-de-saude-sem-cnpj"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#123A5F] hover:text-[#D97706] underline shrink-0"
          >
            <span>Ver planos sem CNPJ</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>

      </div>
    </div>
  );
};
