import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceSchema, FaqSchema } from '../components/SchemaJsonLd';
import { SectionWhatsAppCta } from '../components/SectionWhatsAppCta';
import { BROKER_INFO } from '../data/siteData';
import { ShieldCheck, Check, ArrowRight, Clock, HelpCircle, MapPin, Building, Users, AlertCircle } from 'lucide-react';
import { Seo } from '../components/Seo';

export const IndividualFamiliarPage: React.FC = () => {
  const pageTitle = "Convênio médico individual e familiar em São Paulo";
  const pageDescription = "Guia completo do convênio médico individual e familiar em São Paulo: quem pode contratar no CPF, carências na prática, hospitais por região e tabela comparativa.";

  const faqList = [
    {
      question: 'Preciso ter nome limpo ou comprovar renda para contratar?',
      answer: 'Não, as operadoras de saúde que comercializam planos individuais em São Paulo não exigem comprovação de holerite nem fazem análise restritiva em órgãos de proteção ao crédito para aprovar o contrato.'
    },
    {
      question: 'Posso colocar meus filhos e meu cônjuge no mesmo contrato?',
      answer: 'Sim, você pode entrar como titular e incluir cônjuge, companheiro(a) em união estável e filhos solteiros como dependentes. O valor mensal será a soma exata das faixas etárias de cada pessoa incluída.'
    },
    {
      question: 'Como funciona o reajuste anual do plano individual?',
      answer: 'O plano individual tem seu reajuste aplicado no mês de aniversário do contrato, além do reajuste por mudança de faixa etária quando o beneficiário completa a idade correspondente à virada de faixa.'
    },
    {
      question: 'Se eu sair do plano da empresa, posso aproveitar o tempo de carência?',
      answer: 'Sim, você pode solicitar a carta de permanência no seu plano anterior para avaliarmos a redução ou o aproveitamento de carências na nova operadora em São Paulo antes de assinar a proposta.'
    },
    {
      question: 'Qual a diferença prática entre acomodação em enfermaria e apartamento?',
      answer: 'Na enfermaria você compartilha o quarto hospitalar com outros pacientes do mesmo sexo. No apartamento você tem quarto exclusivo com banheiro privativo e direito a acompanhante 24 horas por dia.'
    },
    {
      question: 'Quanto tempo demora para a carteirinha ser liberada para uso?',
      answer: 'Após a aprovação da proposta digital e compensação do primeiro pagamento, a carteirinha digital fica disponível no aplicativo da operadora geralmente entre 3 e 5 dias úteis.'
    }
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-[#1A1A1A]">
      <Seo title={pageTitle} description={pageDescription} path="/convenio-medico-individual-familiar" />
      <ServiceSchema
        serviceName={pageTitle}
        description={pageDescription}
        url="/convenio-medico-individual-familiar"
        serviceType="Convênio Médico Individual e Familiar"
      />
      <FaqSchema faqs={faqList} />

      <Breadcrumb
        items={[
          { label: 'Modalidades', url: '/plano-de-saude-sem-cnpj' },
          { label: 'Convênio Individual e Familiar' }
        ]}
      />

      {/* Hero Principal */}
      <section className="bg-[#123A5F] text-white py-12 sm:py-16 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#D97706]/20 text-[#FDE68A] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#D97706]/30">
            Contratação Direta no CPF
          </div>

          <h1 className="serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            {pageTitle}
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans font-light">
            O plano individual e familiar é a solução para quem saiu do emprego recente, atua como autônomo sem CNPJ ou simplesmente quer a segurança de ter um convênio médico no próprio nome, sem depender da decisão de um RH ou do destino de uma empresa.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={`${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Olá! Quero cotar um convênio médico individual/familiar em São Paulo com a tabela de valores atualizada.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base py-3.5 px-7 rounded-full uppercase tracking-wider transition-transform hover:scale-[1.02] shadow-md text-center"
            >
              <span>Pedir tabela individual no WhatsApp</span>
            </a>
            <span className="text-xs text-slate-300 sm:text-left text-center">
              Tabela oficial das operadoras em São Paulo enviada na hora.
            </span>
          </div>
        </div>
      </section>

      {/* Corpo Editorial do Pilar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-12">

        {/* 1. O que é o plano individual e familiar, e o que muda na prática */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            O que é o plano individual e familiar, e o que muda na prática
          </h2>
          <p className="text-gray-700 leading-relaxed">
            O plano de saúde individual é um contrato firmado diretamente entre você (o <strong>titular</strong>) e a operadora de saúde. Se você quiser proteger pessoas da sua família, elas entram como <strong>dependentes</strong> na mesma apólice, gerando um plano familiar com boleto unificado.
          </p>
          <p className="text-gray-700 leading-relaxed">
            O valor da sua <strong>mensalidade</strong> é calculado estritamente pela <strong>faixa etária</strong> de cada pessoa cadastrada. Diferente dos planos de grandes corporações, a sua apólice individual não pode ser cancelada arbitrariamente pela operadora no fim do ano por decisão unilateral de diretoria: o vínculo é perpétuo enquanto você mantiver as mensalidades em dia, com reajuste ocorrendo no mês de <strong>aniversário do contrato</strong>.
          </p>

          <SectionWhatsAppCta
            label="Deseja calcular o valor para o seu grupo familiar?"
            sublabel="Mande as idades para somarmos a mensalidade exata"
            messageText="Olá! Gostaria de uma cotação de convênio familiar em São Paulo. Vou enviar as idades."
          />
        </section>

        {/* 2. Quem pode contratar */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Quem pode contratar
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Qualquer pessoa física residente no estado de São Paulo portadora de CPF ativo pode ser titular de um plano individual. Não há exigência de comprovação de faturamento, vínculo com sindicato ou diploma universitário:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-start gap-2.5">
              <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
              <div>
                <strong className="text-sm text-[#123A5F] block">Autônomos e Profissionais Informais</strong>
                <span className="text-xs text-gray-600">Sem necessidade de comprovar renda ou manter empresa.</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-start gap-2.5">
              <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
              <div>
                <strong className="text-sm text-[#123A5F] block">Crianças e Recém-Nascidos</strong>
                <span className="text-xs text-gray-600">Podem ser titulares com o CPF próprio e responsável legal.</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-start gap-2.5">
              <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
              <div>
                <strong className="text-sm text-[#123A5F] block">Adultos e Terceira Idade</strong>
                <span className="text-xs text-gray-600">Linhas exclusivas focadas em medicina preventiva e sênior.</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-start gap-2.5">
              <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
              <div>
                <strong className="text-sm text-[#123A5F] block">Famílias com Dependentes</strong>
                <span className="text-xs text-gray-600">Cônjuge, filhos e enteados no mesmo contrato familiar.</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Como funciona a carência, sem juridiquês */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Como funciona a carência, sem juridiquês
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Carência é o período entre a assinatura do contrato e o momento em que você pode utilizar cada tipo de procedimento médico. Cada operadora possui sua própria grade de prazos, que enviamos por escrito junto com a sua cotação antes de qualquer contratação:
          </p>

          <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-3 triagem-shadow">
            <div className="flex items-start gap-3 border-b border-gray-100 pb-3">
              <span className="bg-[#123A5F] text-white font-bold text-xs px-2.5 py-1 rounded shrink-0">24 Horas</span>
              <p className="text-xs sm:text-sm text-gray-700"><strong>Urgência e Emergência:</strong> Primeiros socorros, acidentes e situações de risco iminente à vida em pronto-socorro.</p>
            </div>
            <div className="flex items-start gap-3 border-b border-gray-100 pb-3">
              <span className="bg-blue-800 text-white font-bold text-xs px-2.5 py-1 rounded shrink-0">30 Dias</span>
              <p className="text-xs sm:text-sm text-gray-700"><strong>Consultas e Exames Simples:</strong> Consultas com especialistas em consultórios e exames laboratoriais básicos de sangue e urina.</p>
            </div>
            <div className="flex items-start gap-3 border-b border-gray-100 pb-3">
              <span className="bg-slate-700 text-white font-bold text-xs px-2.5 py-1 rounded shrink-0">180 Dias</span>
              <p className="text-xs sm:text-sm text-gray-700"><strong>Exames Complexos, Internações e Cirurgias:</strong> Ressonâncias, tomografias, procedimentos cirúrgicos e diárias hospitalares eletivas.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-[#D97706] text-white font-bold text-xs px-2.5 py-1 rounded shrink-0">300 Dias</span>
              <p className="text-xs sm:text-sm text-gray-700"><strong>Parto a Termo:</strong> Partos eletivos normais ou cesáreas (urgências obstétricas com risco materno-fetal entram em 24h).</p>
            </div>
          </div>
          <p className="text-xs text-gray-600 italic">
            * Se você já possui plano de saúde ativo há mais de 12 meses, você pode solicitar a redução dessas carências na troca de operadora.
          </p>
        </section>

        {/* 4. Doença preexistente: o que a operadora pergunta e por quê */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Doença preexistente: o que a operadora pergunta e por quê
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ao assinar uma proposta de convênio individual, você preenche um questionário confidencial chamado <strong>declaração pessoal de saúde</strong>. O objetivo da operadora é saber se você já realiza tratamento contínuo para condições como diabetes, hipertensão, problemas cardíacos, cirurgias prévias ou tratamentos oncológicos.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Declarar sua saúde com total transparência é a melhor garantia de segurança. A operadora não pode recusar a sua proposta pelo fato de você ter uma condição prévia: o que ocorre na prática é a aplicação de uma <strong>cobertura parcial temporária</strong> restrita aos procedimentos de alta complexidade diretamente ligados àquela condição por um período determinado. Para consultas de rotina, exames gerais e todas as outras especialidades médicas, seu atendimento segue 100% normal.
          </p>
        </section>

        {/* 5. Enfermaria ou apartamento, regional ou nacional: o que muda no preço */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Enfermaria ou apartamento, regional ou nacional: o que muda no preço
          </h2>
          <p className="text-gray-700 leading-relaxed">
            O valor final da cotação varia conforme duas escolhas principais que você faz no momento da contratação:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <h3 className="font-bold text-[#123A5F] text-base mb-2">Acomodação Hospitalar</h3>
              <ul className="text-xs sm:text-sm text-gray-700 space-y-2">
                <li><strong>Enfermaria (Quarto Coletivo):</strong> De 15% a 25% mais barato. Ideal para quem prioriza custo mensal enxuto.</li>
                <li><strong>Apartamento (Quarto Privativo):</strong> Maior conforto, banheiro exclusivo e direito a acompanhante em período integral.</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <h3 className="font-bold text-[#123A5F] text-base mb-2">Abrangência Geográfica</h3>
              <ul className="text-xs sm:text-sm text-gray-700 space-y-2">
                <li><strong>Regional São Paulo:</strong> Focado na capital e Grande SP. Melhor relação custo-benefício para quem não viaja com frequência.</li>
                <li><strong>Nacional:</strong> Cobertura em todo o país com pronto-socorros e hospitais de apoio em outros estados.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Rede credenciada em São Paulo */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Rede credenciada em São Paulo por região
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Antes de assinar qualquer plano, a gente verifica se os hospitais e prontos-socorros mais próximos da sua casa estão credenciados. Veja exemplos de hospitais atendidos pelas operadoras que cotamos na capital:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <span className="font-bold text-[#123A5F] block text-sm mb-1">Zona Leste e Mooca</span>
              <p className="text-gray-600">Hospital e Maternidade São Cristóvão (Mooca), Hospital Santa Virgínia (Belenzinho), Hospital Salvalus (Brás), Hospital Santa Marcelina (Itaquera), Hospital Vitória (Anália Franco).</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <span className="font-bold text-[#123A5F] block text-sm mb-1">Centro e Região da Paulista</span>
              <p className="text-gray-600">Hospital IGESP (Bela Vista), Hospital Santa Catarina (Av. Paulista), Hospital Beneficência Portuguesa (Liberdade), Hospital Alemão Oswaldo Cruz (Paraíso).</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <span className="font-bold text-[#123A5F] block text-sm mb-1">Zona Norte</span>
              <p className="text-gray-600">Hospital Previna Taipas, Hospital Presidente (Santana), Hospital São Camilo Santana, Hospital Nipo-Brasileiro (Parque Novo Mundo).</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <span className="font-bold text-[#123A5F] block text-sm mb-1">Zona Sul e Zona Oeste</span>
              <p className="text-gray-600">Hospital Bosque da Saúde, Hospital Metropolitano (Lapa), Hospital Sancta Maggiore (Pinheiros e Itaim), Hospital Leforte (Morumbi).</p>
            </div>
          </div>
        </section>

        {/* 7. Individual, adesão ou MEI: qual é o seu caso */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Individual, adesão ou MEI: qual é o seu caso
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Se você ainda tem dúvidas sobre qual formato é o mais econômico e seguro para você, compare os caminhos:
          </p>

          <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4 triagem-shadow">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-gray-100 pb-3">
              <div>
                <strong className="text-sm text-[#123A5F] block">Só tem CPF e não quer dor de cabeça</strong>
                <p className="text-xs text-gray-600">Foque no plano individual/familiar com contratação direta.</p>
              </div>
              <Link to="/plano-de-saude-sem-cnpj" className="text-xs font-bold text-[#D97706] hover:underline shrink-0">
                Ver opções sem CNPJ →
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-gray-100 pb-3">
              <div>
                <strong className="text-sm text-[#123A5F] block">Tem diploma universitário ou registro em conselho</strong>
                <p className="text-xs text-gray-600">Avalie os planos coletivos por adesão com redes amplas.</p>
              </div>
              <Link to="/convenio-medico-por-adesao" className="text-xs font-bold text-[#D97706] hover:underline shrink-0">
                Ver regras de adesão →
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <strong className="text-sm text-[#123A5F] block">Já tem MEI aberto há mais de 6 meses</strong>
                <p className="text-xs text-gray-600">Aproveite os descontos de tabela empresarial a partir de 2 vidas.</p>
              </div>
              <Link to="/convenio-medico-mei" className="text-xs font-bold text-[#D97706] hover:underline shrink-0">
                Ver tabela MEI →
              </Link>
            </div>
          </div>
        </section>

        {/* 8. Como pedir sua cotação */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Como pedir sua cotação
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Você não precisa preencher formulários com dezenas de campos. Basta clicar no botão abaixo e mandar uma mensagem com as idades das pessoas que vão entrar no plano e o bairro de São Paulo onde você mora:
          </p>

          <SectionWhatsAppCta
            variant="banner"
            label="Solicite a tabela oficial de convênios individuais em SP"
            sublabel="Receba o comparativo de preços e carências pelo WhatsApp"
            messageText="Olá! Gostaria de receber a cotação com a tabela oficial de convênios individuais e familiares para São Paulo."
          />
        </section>

        {/* Cluster de Guias Técnicos do Blog */}
        <section className="space-y-4 pt-4">
          <div className="bg-[#F0FDF4] border border-[#25D366]/40 rounded-2xl p-6 sm:p-7">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#25D366] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Artigos do Cluster Especializado
              </span>
              <span className="text-xs text-gray-500 font-medium">Aprofunde seu conhecimento</span>
            </div>
            <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] mb-2">
              Guias Técnicos: Convênio Individual e Familiar no CPF
            </h2>
            <p className="text-gray-700 text-sm mb-5">
              Leia nossos artigos práticos para entender prazos de carência, operadoras ativas na capital e por que você não precisa arriscar abrir um MEI fictício:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                to="/blog/abrir-mei-so-para-plano-de-saude-risco"
                className="bg-white p-4 rounded-xl border border-gray-200 hover:border-[#123A5F] transition-all flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#D97706] uppercase tracking-wider block mb-1">
                    Casos Especiais & Riscos
                  </span>
                  <h3 className="serif font-bold text-sm text-[#123A5F] group-hover:text-[#D97706] transition-colors leading-snug">
                    Abri MEI só para pagar mais barato. Posso perder o plano?
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#123A5F] mt-3 inline-flex items-center gap-1">
                  <span>Ler artigo</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                to="/blog/quais-operadoras-ainda-vendem-plano-individual-sao-paulo"
                className="bg-white p-4 rounded-xl border border-gray-200 hover:border-[#123A5F] transition-all flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#D97706] uppercase tracking-wider block mb-1">
                    Guia de Operadoras
                  </span>
                  <h3 className="serif font-bold text-sm text-[#123A5F] group-hover:text-[#D97706] transition-colors leading-snug">
                    Quais operadoras ainda vendem plano individual em São Paulo?
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#123A5F] mt-3 inline-flex items-center gap-1">
                  <span>Ler artigo</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                to="/blog/carencia-plano-de-saude-quanto-tempo"
                className="bg-white p-4 rounded-xl border border-gray-200 hover:border-[#123A5F] transition-all flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#D97706] uppercase tracking-wider block mb-1">
                    Como Funciona na Prática
                  </span>
                  <h3 className="serif font-bold text-sm text-[#123A5F] group-hover:text-[#D97706] transition-colors leading-snug">
                    Quanto tempo até eu poder usar o plano que acabei de contratar?
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#123A5F] mt-3 inline-flex items-center gap-1">
                  <span>Ler artigo</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            <div className="mt-4 pt-3 border-t border-green-200/60 flex items-center justify-between">
              <Link to="/blog" className="text-xs font-bold text-[#123A5F] hover:underline flex items-center gap-1">
                <span>Ver todos os artigos do Blog Técnico</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
              <Link to="/plano-de-saude-sem-cnpj" className="text-xs font-bold text-[#D97706] hover:underline">
                Simular plano sem CNPJ →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ com 6 Perguntas */}
        <section className="space-y-4 pt-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#D97706]" />
            <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F]">
              Perguntas frequentes sobre convênio individual e familiar
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
