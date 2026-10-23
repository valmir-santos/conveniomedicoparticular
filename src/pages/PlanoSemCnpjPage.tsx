import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceSchema, FaqSchema } from '../components/SchemaJsonLd';
import { SectionWhatsAppCta } from '../components/SectionWhatsAppCta';
import { BROKER_INFO } from '../data/siteData';
import { ShieldCheck, Check, AlertCircle, ArrowRight, Clock, HelpCircle, FileText, ChevronRight } from 'lucide-react';
import { Seo } from '../components/Seo';

export const PlanoSemCnpjPage: React.FC = () => {
  const pageTitle = "Plano de saúde para quem não tem CNPJ, em São Paulo";
  const pageDescription = "Descubra como contratar plano de saúde em São Paulo apenas com CPF. Conheça as operadoras que ainda vendem no CPF, a verdade sobre abrir MEI e os 3 caminhos práticos.";

  const faqList = [
    {
      question: 'Não tenho CNPJ. Consigo mesmo contratar plano de saúde?',
      answer: 'Sim, você consegue contratar normalmente apenas com o seu CPF. Embora muitas corretoras e comerciais foquem apenas em contratos empresariais, existem operadoras consolidadas em São Paulo que mantêm linhas individuais e familiares abertas para pessoas físicas.'
    },
    {
      question: 'Por que quase todo site me manda abrir um MEI?',
      answer: 'Porque planos empresariais pagam comissões mais rápidas às corretoras e permitem contratos com reajustes livres por sinistralidade. As plataformas automáticas da internet preferem empurrar o cliente para abrir um MEI em vez de cotar manualmente as operadoras que ainda aceitam pessoa física.'
    },
    {
      question: 'Abrir MEI só para o plano é arriscado?',
      answer: 'Sim, há riscos práticos importantes. Se você não exerce atividade comercial real, você terá que pagar a guia do DAS todo mês, entregar declaração anual obrigatória da Receita e a operadora pode exigir comprovantes de atividade econômica ou faturamento na auditoria cadastral.'
    },
    {
      question: 'Plano individual é sempre mais caro?',
      answer: 'O plano individual costuma ter uma mensalidade inicial cerca de 15% a 25% superior a um plano empresarial básico, porém não embute custos fiscais de manter um CNPJ ativo nem taxas associativas cobradas mensalmente por administradoras de benefícios.'
    },
    {
      question: 'Sou autônomo sem registro. Isso muda alguma coisa?',
      answer: 'Não muda nada para a contratação do plano individual. Você só precisa apresentar seu documento com CPF, comprovante de residência em São Paulo e preencher a declaração de saúde padrão da operadora.'
    },
    {
      question: 'Quanto tempo demora entre pedir a cotação e estar com o plano ativo?',
      answer: 'A cotação com a tabela oficial de preços e carências é enviada no mesmo dia útil pelo WhatsApp. Após a escolha do plano e envio dos documentos digitais, a análise e emissão da carteirinha pela operadora leva em média de 3 a 7 dias úteis.'
    }
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-[#1A1A1A]">
      <Seo title={pageTitle} description={pageDescription} path="/plano-de-saude-sem-cnpj" />
      <ServiceSchema
        serviceName={pageTitle}
        description={pageDescription}
        url="/plano-de-saude-sem-cnpj"
      />
      <FaqSchema faqs={faqList} />

      <Breadcrumb
        items={[
          { label: 'Planos de Saúde', url: '/convenio-medico-individual-familiar' },
          { label: 'Plano de Saúde sem CNPJ' }
        ]}
      />

      {/* Hero da Página Interna */}
      <section className="bg-[#123A5F] text-white py-12 sm:py-16 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#F59E0B]/20 text-[#FDE68A] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#F59E0B]/30">
            Especialidade da Corretora em São Paulo
          </div>

          <h1 className="serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            {pageTitle}
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans font-light">
            As grandes operadoras de saúde em São Paulo deixaram de priorizar a venda direta para pessoa física no balcão, porque contratos corporativos transferem riscos e facilitam reajustes em grupo. Se você tentou contratar recentemente e ouviu que <strong className="text-white font-semibold">"é obrigatório abrir um MEI ou ter CNPJ"</strong>, saiba que essa informação está incompleta: você tem caminhos reais para contratar com total segurança apenas com o seu CPF.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={`${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Olá! Li a página de plano de saúde sem CNPJ e quero ver as opções ativas para o meu CPF em São Paulo.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base py-3.5 px-7 rounded-full uppercase tracking-wider transition-transform hover:scale-[1.02] shadow-md text-center"
            >
              <span>Consultar operadoras no CPF</span>
            </a>
            <span className="text-xs text-slate-300 sm:text-left text-center">
              Atendimento direto com corretor em São Paulo. Sem robôs.
            </span>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-12">

        {/* 1. O que acontece quando você tenta contratar só com CPF */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            O que acontece quando você tenta contratar só com CPF nas operadoras grandes
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A maioria das corretoras comerciais simplesmente descarta a sua solicitação ou programa formulários automáticos para exigir um número de CNPJ logo no primeiro clique. Isso acontece porque a venda de planos individuais exige trabalho manual de preenchimento, conferência de declaração de saúde e acompanhamento direto do corretor, enquanto os planos corporativos são vendidos em pacotes padronizados.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Na prática, quando você busca atendimento nas grandes plataformas da internet, você costuma ouvir duas respostas prontas: ou que <em>"não existe mais plano individual no Brasil"</em> (o que não é verdade em São Paulo) ou que <em>"você precisa abrir um MEI rapidinho só para assinar o contrato"</em>.
          </p>

          <SectionWhatsAppCta
            label="Quer ver quais planos aceitam seu CPF hoje?"
            sublabel="Consultamos a grade das operadoras paulistanas na hora"
            messageText="Olá! Gostaria de receber a relação de operadoras que aceitam pessoa física no CPF em São Paulo."
          />
        </section>

        {/* 2. Os três caminhos de quem não tem CNPJ */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Quais são, na prática, os três caminhos de quem não tem CNPJ
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Se você não tem uma empresa aberta, você tem exatamente três alternativas reais de contratação no mercado paulistano. Cada uma tem vantagens e pontos de atenção que precisam ser avaliados antes de você assinar qualquer proposta:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow flex flex-col justify-between">
              <div>
                <span className="bg-blue-50 text-[#123A5F] text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider block w-fit mb-2">
                  Caminho 1
                </span>
                <h3 className="serif text-lg font-bold text-[#123A5F] mb-2">
                  Plano Individual / Familiar
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Contrato emitido diretamente no seu nome e CPF com a operadora de saúde. Você não depende de empresa, sindicato ou administradora intermediária.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100">
                <Link
                  to="/convenio-medico-individual-familiar"
                  className="text-xs font-bold text-[#123A5F] hover:text-[#D97706] inline-flex items-center gap-1"
                >
                  <span>Ver detalhes do plano individual</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow flex flex-col justify-between">
              <div>
                <span className="bg-amber-50 text-[#D97706] text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider block w-fit mb-2">
                  Caminho 2
                </span>
                <h3 className="serif text-lg font-bold text-[#123A5F] mb-2">
                  Plano Coletivo por Adesão
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Contratação através da sua profissão, formação universitária, conselho regional (CRA, CREA, OAB) ou sindicato de classe via administradora.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100">
                <Link
                  to="/convenio-medico-por-adesao"
                  className="text-xs font-bold text-[#123A5F] hover:text-[#D97706] inline-flex items-center gap-1"
                >
                  <span>Ver regras de adesão</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow flex flex-col justify-between">
              <div>
                <span className="bg-emerald-50 text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider block w-fit mb-2">
                  Caminho 3
                </span>
                <h3 className="serif text-lg font-bold text-[#123A5F] mb-2">
                  Abrir MEI com Atividade Real
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Válido para quem já atua como autônomo, comerciante ou prestador de serviço e formaliza a atividade para contratar a partir de 1 ou 2 vidas.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100">
                <Link
                  to="/convenio-medico-mei"
                  className="text-xs font-bold text-[#123A5F] hover:text-[#D97706] inline-flex items-center gap-1"
                >
                  <span>Ver quando o MEI vale a pena</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Tabela Comparativa dos Três Caminhos */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Comparativo direto: para quem serve e o que você abre mão
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Para tomar a decisão certa sem surpresas financeiras no futuro, veja o que muda na prática entre as três modalidades disponíveis em São Paulo:
          </p>

          <div className="overflow-x-auto bg-white rounded-xl border border-gray-200 triagem-shadow">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#123A5F] text-white">
                <tr>
                  <th className="p-3.5 sm:p-4 font-bold">Critério de Análise</th>
                  <th className="p-3.5 sm:p-4 font-bold bg-[#174875]">Plano Individual / CPF</th>
                  <th className="p-3.5 sm:p-4 font-bold">Plano por Adesão</th>
                  <th className="p-3.5 sm:p-4 font-bold">Abrir MEI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-[#123A5F]">Para quem serve</td>
                  <td className="p-3.5 sm:p-4 text-gray-700 bg-blue-50/40 font-medium">Quem quer contratar apenas com CPF, sem burocracia e sem manter empresa.</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Profissionais com curso superior, técnicos registrados, advogados, engenheiros, estudantes.</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Quem já exerce atividade econômica autônoma e precisa de plano para 2 ou mais pessoas.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-[#123A5F]">Custo relativo</td>
                  <td className="p-3.5 sm:p-4 text-gray-700 bg-blue-50/40">Mensalidade cheia (sem taxas extras de associação).</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Mensalidade intermediária + taxa associativa da entidade.</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Mensalidade mais barata + guia do DAS mensal do governo.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-[#123A5F]">O que você ganha</td>
                  <td className="p-3.5 sm:p-4 text-gray-700 bg-blue-50/40">Vínculo direto com a operadora, sem risco de cancelamento unilateral da carteira.</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Acesso a operadoras grandes (como Amil, SulAmérica, Alice) que não vendem no balcão.</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Valores com desconto de tabela empresarial e carências reduzidas para grupos.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3.5 sm:p-4 font-bold text-[#123A5F]">O que você abre mão</td>
                  <td className="p-3.5 sm:p-4 text-gray-700 bg-blue-50/40">Menos opções de seguradoras multinacionais disponíveis no catálogo.</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Reajustes calculados pelo pool da administradora e taxa de corretagem/adesão na entrada.</td>
                  <td className="p-3.5 sm:p-4 text-gray-700">Tranquilidade fiscal: exige manter impostos em dia e comprovação de faturamento.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Seção Honesta sobre o MEI */}
        <section className="bg-amber-50/70 border border-amber-200 rounded-xl p-6 sm:p-7 space-y-4">
          <div className="flex items-center gap-2 text-[#D97706]">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F]">
              A verdade sobre o MEI: por que é mais barato e qual é o risco real
            </h2>
          </div>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            Os planos de saúde para MEI e pequenas empresas costumam ser entre <strong>20% e 35% mais baratos</strong> na largada porque as operadoras entendem que contratos corporativos diluem riscos entre os funcionários e permitem reajustes contratuais mais flexíveis.
          </p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            No entanto, abrir um MEI <strong>exclusivamente para obter desconto no convênio</strong> envolve riscos práticos que muitas corretoras omitem:
          </p>
          <ul className="space-y-2.5 text-sm text-gray-800 pt-1">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D97706] mt-2 shrink-0"></span>
              <span><strong>Guia do DAS obrigatória:</strong> Todo mês você terá que pagar a guia do Simples Nacional (cerca de R$ 75 a R$ 80), use ou não o CNPJ. Ao longo do ano, isso consome grande parte da economia da mensalidade.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D97706] mt-2 shrink-0"></span>
              <span><strong>Declaração Anual da Receita Federal (DASN-SIMEI):</strong> Se você esquecer de declarar o faturamento anual da empresa, seu CPF pode ser bloqueado com pendências fiscais na Receita.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D97706] mt-2 shrink-0"></span>
              <span><strong>Auditoria de atividade pelas operadoras:</strong> As operadoras em São Paulo têm exigido tempo mínimo de 6 meses de abertura do CNPJ e comprovação de atividade econômica real. Se o CNPJ for considerado inativo, o plano pode cancelar o contrato.</span>
            </li>
          </ul>
          <p className="text-xs text-gray-600 italic pt-2">
            Se você já tem MEI ativo e trabalha com ele, excelente: cotamos nessa modalidade. Mas se você só tem CPF, não invente burocracia desnecessária.
          </p>
        </section>

        {/* 5. Quais operadoras ainda vendem individual em São Paulo */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Quais operadoras ainda vendem individual em São Paulo
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Estas são as principais operadoras com código direto que mantêm comercialização ativa de planos individuais e familiares para contratação com CPF na capital paulista:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-[#123A5F] text-base">São Cristóvão Saúde</h3>
              <p className="text-xs text-gray-600 mt-1">Forte na Zona Leste, Mooca, Tatuapé e Belenzinho. Hospital e maternidade próprios de referência na Mooca.</p>
              <Link to="/operadoras/sao-cristovao" className="text-xs font-bold text-[#D97706] mt-2 inline-block">Ver rede São Cristóvão →</Link>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-[#123A5F] text-base">Trasmontano Saúde</h3>
              <p className="text-xs text-gray-600 mt-1">Centros médicos em toda a capital e Hospital IGESP na Bela Vista. Planos individuais para todas as idades.</p>
              <Link to="/operadoras/trasmontano" className="text-xs font-bold text-[#D97706] mt-2 inline-block">Ver rede Trasmontano →</Link>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-[#123A5F] text-base">Prevent Senior</h3>
              <p className="text-xs text-gray-600 mt-1">Foco no público adulto e terceira idade, rede de hospitais Sancta Maggiore na capital.</p>
              <Link to="/operadoras/prevent-senior" className="text-xs font-bold text-[#D97706] mt-2 inline-block">Ver rede Prevent Senior →</Link>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-[#123A5F] text-base">MedSênior Saúde</h3>
              <p className="text-xs text-gray-600 mt-1">Especializada a partir dos 49 anos com oficinas de medicina preventiva e rede credenciada em SP.</p>
              <Link to="/operadoras/medsenior" className="text-xs font-bold text-[#D97706] mt-2 inline-block">Ver rede MedSênior →</Link>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-[#123A5F] text-base">UniHosp Saúde</h3>
              <p className="text-xs text-gray-600 mt-1">Planos individuais de excelente custo-benefício para quem mora em São Paulo e Grande ABC.</p>
              <Link to="/operadoras/unihosp" className="text-xs font-bold text-[#D97706] mt-2 inline-block">Ver rede UniHosp →</Link>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-[#123A5F] text-base">Plena Saúde</h3>
              <p className="text-xs text-gray-600 mt-1">Hospital próprio Previna na Zona Norte e Franco da Rocha, com centros médicos na Lapa e Osasco.</p>
              <Link to="/operadoras/plena-saude" className="text-xs font-bold text-[#D97706] mt-2 inline-block">Ver rede Plena Saúde →</Link>
            </div>
          </div>

          <p className="text-xs text-gray-500 pt-2">
            * Se você tem formação superior ou registro em sindicato, operadoras como <strong>Amil, SulAmérica, Bradesco e Alice</strong> também ficam disponíveis pela modalidade de adesão.
          </p>
        </section>

        {/* 6. Como é o processo aqui */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Como é o processo aqui: o que você manda, o que recebe e em quanto tempo
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Trabalhamos de forma transparente e direta pelo WhatsApp, sem formulários cansativos nem insistência comercial:
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200">
              <div className="w-8 h-8 rounded-full bg-[#123A5F] text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
              <div>
                <h3 className="font-bold text-[#123A5F] text-sm sm:text-base">Você manda as idades e bairros de preferência</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">Basta enviar uma mensagem dizendo quantas pessoas vão entrar e a região onde preferem ser atendidos em São Paulo.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200">
              <div className="w-8 h-8 rounded-full bg-[#123A5F] text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
              <div>
                <h3 className="font-bold text-[#123A5F] text-sm sm:text-base">A gente envia a tabela oficial das operadoras no mesmo dia</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">Você recebe os valores de enfermaria e apartamento, a relação de hospitais credenciados no seu bairro e o prazo de carências.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200">
              <div className="w-8 h-8 rounded-full bg-[#123A5F] text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
              <div>
                <h3 className="font-bold text-[#123A5F] text-sm sm:text-base">Proposta 100% digital com acompanhamento até a carteirinha</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">Você assina eletronicamente pelo celular e tem o suporte do corretor para tirar dúvidas sempre que precisar.</p>
              </div>
            </div>
          </div>

          <SectionWhatsAppCta
            variant="banner"
            label="Receba o comparativo de planos para o seu CPF hoje"
            sublabel="Tabela oficial sem compromisso e sem custo de consultoria"
            messageText="Olá! Gostaria de receber a cotação de convênio médico no CPF para São Paulo com a tabela de preços e carências."
          />
        </section>

        {/* 7. FAQ com 6 Perguntas Específicas */}
        <section className="space-y-4 pt-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#D97706]" />
            <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F]">
              Perguntas frequentes sobre plano de saúde sem CNPJ
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

        {/* Links Internos de Navegação do Cluster */}
        <section className="bg-[#F3F4F6] p-6 rounded-xl border border-gray-200 space-y-3">
          <h3 className="serif text-base font-bold text-[#123A5F]">
            Navegue pelas modalidades de contratação em São Paulo:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
            <li>
              <Link
                to="/convenio-medico-individual-familiar"
                className="text-[#123A5F] hover:text-[#D97706] font-bold underline flex items-center gap-1"
              >
                <ArrowRight className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Convênio Individual e Familiar</span>
              </Link>
            </li>
            <li>
              <Link
                to="/convenio-medico-por-adesao"
                className="text-[#123A5F] hover:text-[#D97706] font-bold underline flex items-center gap-1"
              >
                <ArrowRight className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Planos Coletivos por Adesão</span>
              </Link>
            </li>
            <li>
              <Link
                to="/convenio-medico-mei"
                className="text-[#123A5F] hover:text-[#D97706] font-bold underline flex items-center gap-1"
              >
                <ArrowRight className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Convênio Médico para MEI</span>
              </Link>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
};
