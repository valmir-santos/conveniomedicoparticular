import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceSchema, FaqSchema } from '../components/SchemaJsonLd';
import { SectionWhatsAppCta } from '../components/SectionWhatsAppCta';
import { BROKER_INFO } from '../data/siteData';
import { Building, Users, Check, ArrowRight, HelpCircle, FileSpreadsheet, PieChart } from 'lucide-react';
import { Seo } from '../components/Seo';

export const EmpresarialPage: React.FC = () => {
  const pageTitle = "Convênio Médico Empresarial (PME): Cotação e Valores";
  const pageDescription = "Planos de saúde empresariais para pequenas e médias empresas (PME) a partir de 2 vidas em São Paulo, Rio de Janeiro, Brasília, Paraná e todo o Brasil. Redução de carências e coparticipação inteligente.";

  const faqList = [
    {
      question: 'A partir de quantas vidas posso contratar o convênio empresarial?',
      answer: 'A grande maioria das operadoras e seguradoras aceita contratação a partir de 2 vidas, somando sócios (LTDA, SLU, S/A), funcionários registrados no eSocial e seus dependentes legais (cônjuge e filhos).'
    },
    {
      question: 'Qual a diferença entre contratar por MEI e por empresa LTDA/SLU?',
      answer: 'Empresas LTDA, SLU ou EIRELI podem contratar o plano imediatamente após a emissão do contrato social na Junta Comercial (sem carência de tempo de CNPJ). Já o MEI exige no mínimo 6 meses de CNPJ ativo na Receita Federal.'
    },
    {
      question: 'O que é e como funciona a coparticipação corporativa?',
      answer: 'É um modelo onde a empresa paga uma mensalidade fixa até 30% mais baixa e o colaborador paga uma pequena taxa apenas quando realiza consultas ou exames simples, com limitadores por procedimento.'
    },
    {
      question: 'Como funciona a inclusão e exclusão de funcionários ao longo do ano?',
      answer: 'A movimentação cadastral é feita 100% online no portal da operadora. Novas admissões são incluídas no prazo da contratação e colaboradores desligados são excluídos no fechamento da fatura mensal.'
    },
    {
      question: 'Quais regiões possuem atendimento para planos PME?',
      answer: 'Atendemos empresas em São Paulo (capital e interior), Rio de Janeiro, Distrito Federal (Brasília), Curitiba/Paraná e apólices de abrangência nacional em todas as regiões do Brasil.'
    },
    {
      question: 'Como é calculado o reajuste anual do plano empresarial?',
      answer: 'Para contratos de 2 a 29 vidas, o reajuste anual é calculado com base no agrupamento de contratos coletivos (pool de risco) da operadora, além da variação por faixa etária quando houver.'
    }
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-[#1A1A1A]">
      <Seo title={pageTitle} description={pageDescription} path="/convenio-medico-empresarial" />
      <ServiceSchema
        serviceName={pageTitle}
        description={pageDescription}
        url="/convenio-medico-empresarial"
        serviceType="Convênio Médico Empresarial para PME"
      />
      <FaqSchema faqs={faqList} />

      <Breadcrumb
        items={[
          { label: 'Modalidades', url: '/plano-de-saude-sem-cnpj' },
          { label: 'Convênio Empresarial' }
        ]}
      />

      {/* Hero */}
      <section className="bg-[#123A5F] text-white py-12 sm:py-16 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#D97706]/20 text-[#FDE68A] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#D97706]/30">
            Pequenas e Médias Empresas (PME)
          </div>

          <h1 className="serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            {pageTitle}
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans font-light">
            Planos de saúde corporativos a partir de 2 vidas para empresas em São Paulo, Rio de Janeiro, Brasília, Paraná e cobertura nacional. Realizamos o estudo comparativo de custos entre as principais operadoras e seguradoras com foco em rede hospitalar de qualidade e gestão eficiente.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={`${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Olá! Gostaria de cotar plano de saúde empresarial PME para minha empresa.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base py-3.5 px-7 rounded-full uppercase tracking-wider transition-transform hover:scale-[1.02] shadow-md text-center"
            >
              <span>Cotar tabela PME no WhatsApp</span>
            </a>
            <span className="text-xs text-slate-300 sm:text-left text-center">
              Estudo comparativo de operadoras sem custo para sua empresa.
            </span>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-12">

        {/* 1. A partir de quantas vidas e documentos necessários */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            A partir de quantas vidas e o que a operadora pede da empresa
          </h2>
          <p className="text-gray-700 leading-relaxed">
            As operadoras de saúde em São Paulo atendem contratos empresariais a partir de <strong>2 vidas</strong> (podendo ser 2 sócios ou 1 sócio + dependente/funcionário).
          </p>
          <p className="text-gray-700 leading-relaxed">
            Para a implantação da apólice corporativa, a documentação exigida é simples e enviada 100% digitalmente:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <Building className="w-6 h-6 text-[#123A5F] mb-2" />
              <h3 className="font-bold text-sm text-[#123A5F]">Documentação da Empresa</h3>
              <ul className="text-xs text-gray-600 space-y-1.5 mt-2">
                <li>• Contrato Social ou Última Alteração Contratual</li>
                <li>• Cartão CNPJ atualizado da Receita Federal</li>
                <li>• Comprovante de endereço da sede ou filial em SP</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <Users className="w-6 h-6 text-[#D97706] mb-2" />
              <h3 className="font-bold text-sm text-[#123A5F]">Documentação dos Beneficiários</h3>
              <ul className="text-xs text-gray-600 space-y-1.5 mt-2">
                <li>• RG, CPF e comprovante de residência dos titulares</li>
                <li>• Relação do eSocial / FGTS para colaboradores</li>
                <li>• Certidão de casamento/nascimento para dependentes</li>
              </ul>
            </div>
          </div>

          <SectionWhatsAppCta
            label="Deseja comparar opções empresariais para a sua equipe?"
            sublabel="Mande o número de colaboradores para calcularmos as faixas"
            messageText="Olá! Gostaria de receber um comparativo de plano de saúde empresarial para pequenas e médias empresas em São Paulo."
          />
        </section>

        {/* 2. Inclusão, Exclusão e Coparticipação */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Movimentação cadastral e coparticipação estratégica
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A gestão do plano de saúde da sua empresa precisa ser ágil e previsível. Auxiliamos o RH ou o gestor da empresa em dois pontos fundamentais:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="bg-white p-5 rounded-xl border border-gray-200">
              <h3 className="font-bold text-sm text-[#123A5F] mb-2">Entradas e Saídas Simplificadas</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Admissões recentes podem ser incluídas sem novas carências caso cumpram o prazo contratual de entrada, e demissões são processadas diretamente para não gerar cobranças adicionais na fatura seguinte.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200">
              <h3 className="font-bold text-sm text-[#123A5F] mb-2">Coparticipação para Reduzir Custo Fixo</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Opção onde a empresa reduz o valor fixo da mensalidade em até 30% e os colaboradores participam com valores simbólicos em consultas simples, incentivando o uso consciente dos serviços.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Reajuste Corporativo */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Como funciona o reajuste corporativo
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Diferente dos planos individuais de balcão, o contrato de saúde empresarial tem seu reajuste anual pautado pela sinistralidade do grupo segurado. Por isso, quando o aniversário do contrato da sua empresa se aproxima, nossa corretora realiza uma <strong>renegociação direta ou estudo de portabilidade</strong> para manter a mensalidade dentro do orçamento da sua empresa.
          </p>
        </section>

        {/* 4. FAQ com 4 Perguntas */}
        <section className="space-y-4 pt-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#D97706]" />
            <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F]">
              Perguntas frequentes sobre convênio médico empresarial
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

        {/* Links Internos */}
        <section className="bg-[#F3F4F6] p-6 rounded-xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="serif text-base font-bold text-[#123A5F]">Empresa com apenas 1 titular sem sócios?</h3>
            <p className="text-xs text-gray-600">Confira as opções para MEI ou contratação direta no CPF.</p>
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
