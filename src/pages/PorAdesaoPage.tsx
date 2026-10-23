import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceSchema, FaqSchema } from '../components/SchemaJsonLd';
import { SectionWhatsAppCta } from '../components/SectionWhatsAppCta';
import { BROKER_INFO } from '../data/siteData';
import { Check, AlertCircle, ArrowRight, HelpCircle, GraduationCap, Briefcase, Award } from 'lucide-react';
import { Seo } from '../components/Seo';

export const PorAdesaoPage: React.FC = () => {
  const pageTitle = "Plano de saúde por adesão em São Paulo";
  const pageDescription = "Descubra se sua profissão, formação universitária ou sindicato dá direito a planos de saúde coletivos por adesão em São Paulo com tabelas diferenciadas.";

  const faqList = [
    {
      question: 'O que é exatamente um plano de saúde por adesão?',
      answer: 'É um plano coletivo intermediado por uma administradora de benefícios (como Qualicorp, Elo ou Affinity) contratado por meio de uma entidade de classe, sindicato ou associação profissional à qual você é vinculado.'
    },
    {
      question: 'Quem não tem curso superior consegue contratar por adesão?',
      answer: 'Sim. Além de conselhos de nível superior, existem entidades de classe voltadas a técnicos, servidores públicos, comerciários, corretores, profissionais do setor de serviços e estudantes matriculados.'
    },
    {
      question: 'Como funciona o reajuste nos planos por adesão?',
      answer: 'O reajuste ocorre na data base fixada no contrato coletivo daquela entidade profissional, sendo calculado com base no uso geral (sinistralidade) de todos os associados daquela apólice coletiva.'
    },
    {
      question: 'Posso incluir dependentes no plano por adesão?',
      answer: 'Sim, a maioria dos planos coletivos por adesão permite a inclusão de cônjuge, companheiro(a) e filhos solteiros como dependentes diretos do titular.'
    }
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-[#1A1A1A]">
      <Seo title={pageTitle} description={pageDescription} path="/convenio-medico-por-adesao" />
      <ServiceSchema
        serviceName={pageTitle}
        description={pageDescription}
        url="/convenio-medico-por-adesao"
        serviceType="Plano de Saúde Coletivo por Adesão"
      />
      <FaqSchema faqs={faqList} />

      <Breadcrumb
        items={[
          { label: 'Modalidades', url: '/plano-de-saude-sem-cnpj' },
          { label: 'Planos por Adesão' }
        ]}
      />

      {/* Hero da Página */}
      <section className="bg-[#123A5F] text-white py-12 sm:py-16 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#D97706]/20 text-[#FDE68A] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#D97706]/30">
            Contratação por Categoria Profissional
          </div>

          <h1 className="serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            {pageTitle}
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans font-light">
            A maioria dos profissionais em São Paulo não sabe que a sua formação superior, profissão regulamentada ou até mesmo o vínculo estudantil dá acesso a planos de operadoras como Amil, SulAmérica, Bradesco e Alice sem precisar de CNPJ.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={`${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Olá! Gostaria de consultar se minha profissão dá direito a plano por adesão em São Paulo.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base py-3.5 px-7 rounded-full uppercase tracking-wider transition-transform hover:scale-[1.02] shadow-md text-center"
            >
              <span>Descobrir minha elegibilidade</span>
            </a>
            <span className="text-xs text-slate-300 sm:text-left text-center">
              Consulta rápida da sua entidade profissional no WhatsApp.
            </span>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-12">

        {/* 1. Como descobrir se você tem direito */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Como descobrir se você tem direito a um plano por adesão
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Para saber se você pode contratar um plano por adesão, basta verificar se a sua ocupação profissional possui uma entidade de classe (conselho, sindicato ou associação) conveniada às administradoras de benefícios com as quais trabalhamos em São Paulo.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Trabalhamos com as principais administradoras do mercado (como Qualicorp, Elo Benefícios, Affinity e Unifocus), o que nos permite cruzar sua formação com as tabelas ativas em minutos.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow text-center">
              <GraduationCap className="w-8 h-8 text-[#D97706] mx-auto mb-2" />
              <h3 className="font-bold text-sm text-[#123A5F]">Conselhos e Graduações</h3>
              <p className="text-xs text-gray-600 mt-1">Administradores (CRA), Engenheiros (CREA), Advogados (OAB), Médicos (CRM), Dentistas (CRO), Arquitetos (CAU), Economistas (CORECON) e outros diplomas reconhecidos pelo MEC.</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow text-center">
              <Briefcase className="w-8 h-8 text-[#123A5F] mx-auto mb-2" />
              <h3 className="font-bold text-sm text-[#123A5F]">Sindicatos e Associações</h3>
              <p className="text-xs text-gray-600 mt-1">Servidores públicos municipais, estaduais e federais, bancários, comerciários, corretores de imóveis e profissionais de TI.</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow text-center">
              <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-bold text-sm text-[#123A5F]">Estudantes em Geral</h3>
              <p className="text-xs text-gray-600 mt-1">Estudantes do ensino fundamental, médio, técnico, graduação e pós-graduação através de entidades representativas como UNE e UBES.</p>
            </div>
          </div>

          <SectionWhatsAppCta
            label="Qual a sua profissão ou formação?"
            sublabel="Consultamos na hora se você tem tabela por adesão disponível"
            messageText="Olá! Gostaria de consultar se minha profissão/formação tem tabela de plano por adesão em São Paulo."
          />
        </section>

        {/* 2. Como se comprova o vínculo */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Como se comprova o vínculo para a contratação
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A comprovação de elegibilidade é feita de maneira 100% digital no envio da proposta. Dependendo da categoria, você apresenta apenas um documento simples:
          </p>

          <ul className="space-y-2.5 text-sm text-gray-800 pt-1">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
              <span><strong>Para profissionais graduados:</strong> Cópia do diploma universitário ou carteira do conselho de classe ativo.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
              <span><strong>Para profissionais de sindicatos:</strong> Carteira de trabalho comprovando a ocupação ou comprovante de filiação associativa.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
              <span><strong>Para estudantes:</strong> Comprovante de matrícula vigente ou carteirinha estudantil oficial.</span>
            </li>
          </ul>
        </section>

        {/* 3. Comparação de preço e o que você abre mão */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Como o preço se compara ao individual e o que você abre mão
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Na tabela de entrada, o plano por adesão costuma apresentar valores de <strong>10% a 20% mais baixos</strong> do que o individual tradicional, além de dar acesso a operadoras e seguradoras que não vendem diretamente no balcão de pessoas físicas em São Paulo.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-[#D97706]">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <h3 className="font-bold text-sm sm:text-base text-[#123A5F]">
                O que você precisa considerar antes de contratar por adesão:
              </h3>
            </div>
            <ul className="text-xs sm:text-sm text-gray-800 space-y-2">
              <li>• <strong>Reajustes coletivos:</strong> O reajuste anual é calculado com base no histórico de utilização de todos os associados daquela entidade, ocorrendo sempre no mês da data-base do contrato coletivo.</li>
              <li>• <strong>Taxa associativa:</strong> Em alguns casos, há uma mensalidade simbólica de contribuição para a entidade de classe parceira.</li>
              <li>• <strong>Intermediação da administradora:</strong> O faturamento e cobrança dos boletos são administrados pela empresa gestora do contrato coletivo.</li>
            </ul>
          </div>
        </section>

        {/* 4. FAQ com 4 Perguntas */}
        <section className="space-y-4 pt-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#D97706]" />
            <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F]">
              Perguntas frequentes sobre planos de saúde por adesão
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

        {/* Links de navegação interna */}
        <section className="bg-[#F3F4F6] p-6 rounded-xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="serif text-base font-bold text-[#123A5F]">Não tem vínculo profissional ou prefere plano direto no CPF?</h3>
            <p className="text-xs text-gray-600">Veja as operadoras que vendem planos individuais e familiares sem administradora.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/plano-de-saude-sem-cnpj"
              className="text-xs font-bold text-[#123A5F] hover:text-[#D97706] underline"
            >
              Plano sem CNPJ
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              to="/convenio-medico-individual-familiar"
              className="text-xs font-bold text-[#123A5F] hover:text-[#D97706] underline"
            >
              Convênio Individual
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};
