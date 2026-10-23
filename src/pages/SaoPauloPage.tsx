import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceSchema, FaqSchema } from '../components/SchemaJsonLd';
import { SectionWhatsAppCta } from '../components/SectionWhatsAppCta';
import { BROKER_INFO } from '../data/siteData';
import { ShieldCheck, Check, AlertCircle, ArrowRight, Building2, MapPin, HelpCircle, CheckCircle2, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { Seo } from '../components/Seo';

export const SaoPauloPage: React.FC = () => {
  const pageTitle = "Plano de Saúde em São Paulo (Capital e Grande SP)";
  const pageDescription = "Cotação de plano de saúde em São Paulo no CPF ou CNPJ. Comparativo completo de operadoras, hospitais de referência na Zona Leste, Sul, Norte, Oeste, Centro e Grande SP.";

  const faqList = [
    {
      question: 'Quais operadoras ainda aceitam contratação no CPF em São Paulo?',
      answer: 'Em São Paulo, operadoras como São Cristóvão Saúde, Trasmontano Saúde, Prevent Senior, MedSênior, UniHosp e Plena Saúde mantêm a comercialização ativa de planos individuais e familiares direto no CPF, sem necessidade de MEI ou taxa associativa.'
    },
    {
      question: 'Quais os melhores hospitais credenciados em São Paulo?',
      answer: 'Dependendo da operadora e categoria do plano, a rede inclui Hospital IGESP, Hospital e Maternidade São Cristóvão (Mooca), Hospital Santa Virgínia, Hospital Nipo-Brasileiro, Hospital São Camilo, Hospital Santa Joana, Hospital Samaritano, Hospital Alemão Oswaldo Cruz e Hospital Nove de Julho.'
    },
    {
      question: 'Qual a diferença de preço entre plano no CPF e plano MEI em SP?',
      answer: 'A tabela empresarial (MEI) costuma ter mensalidade cerca de 15% a 25% menor, mas exige pagamento mensal da taxa do DAS e cumprimento de obrigações fiscais. Para quem não tem atividade comercial ativa, o plano individual no CPF costuma ser muito mais seguro e vantajoso no longo prazo.'
    },
    {
      question: 'Como funciona o atendimento presencial e digital em São Paulo?',
      answer: 'Nossa sede física está localizada na Rua São Roberto, 298, na Vila Marieta (Zona Leste de São Paulo). Atendemos presencialmente com horário agendado ou de forma 100% digital e ágil pelo WhatsApp para todas as regiões da capital, ABC e Grande SP.'
    },
    {
      question: 'Quanto tempo leva para emitir o plano e liberar o uso?',
      answer: 'A cotação é feita no mesmo dia. Após a assinatura digital da proposta, a implantação leva em média de 3 a 7 dias úteis, com atendimento de urgência e emergência liberado em 24h após a vigência.'
    }
  ];

  const spRegions = [
    {
      name: 'Zona Leste',
      bairros: 'Tatuapé, Mooca, Penha, Vila Marieta, Anália Franco, Belém, Itaquera, São Miguel',
      hospitais: 'Hospital São Cristóvão, Santa Virgínia, Ouro Verde, Day Penha, Vitória Anália Franco, Salvalus',
      destaque: 'Forte presença de planos individuais acessíveis no CPF (São Cristóvão, Trasmontano, UniHosp).'
    },
    {
      name: 'Zona Norte',
      bairros: 'Santana, Tucuruvi, Casa Verde, Mandaqui, Vila Maria, Limão, Jaçanã',
      hospitais: 'Hospital Nipo-Brasileiro, São Camilo Santana, Hospital Presidente, Pronto-Socorro Plena Saúde',
      destaque: 'Excelente cobertura com Plena Saúde, Trasmontano e grandes seguradoras.'
    },
    {
      name: 'Centro e Paulista',
      bairros: 'Bela Vista, Consolação, República, Liberdade, Santa Cecília, Higienópolis',
      hospitais: 'Hospital IGESP, Oswaldo Cruz, Nove de Julho, Santa Isabel, Beneficência Portuguesa',
      destaque: 'Referência médica do país com opções individuais (IGESP/Trasmontano) e planos premium.'
    },
    {
      name: 'Zona Sul e Oeste',
      bairros: 'Pinheiros, Perdizes, Santo Amaro, Morumbi, Vila Mariana, Moema, Butantã, Lapa',
      hospitais: 'Hospital São Camilo Pompeia, Samaritano, Santa Paula, Hospital Alvorada Moema, Leforte',
      destaque: 'Ampla aceitação Amil, Bradesco, SulAmérica, Porto Seguro, Prevent Senior e Alice.'
    },
    {
      name: 'Grande ABC e Guarulhos',
      bairros: 'Santo André, São Bernardo do Campo, São Caetano, Diadema, Mauá, Guarulhos',
      hospitais: 'Hospital e Maternidade Brasil, Hospital América Mauá, Hospital São Bernardo, Stella Maris',
      destaque: 'Planos regionais com ótimo custo-benefício (UniHosp, Notredame Intermédica, Amil).'
    }
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-[#1A1A1A]">
      <Seo title={pageTitle} description={pageDescription} path="/plano-de-saude-sao-paulo" />
      <ServiceSchema
        serviceName={pageTitle}
        description={pageDescription}
        url="/plano-de-saude-sao-paulo"
      />
      <FaqSchema faqs={faqList} />

      <Breadcrumb
        items={[
          { label: 'Capitais Atendidas', url: '/' },
          { label: 'São Paulo' }
        ]}
      />

      {/* Hero da Página Regional */}
      <section className="bg-[#123A5F] text-white py-12 sm:py-16 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#F59E0B]/20 text-[#FDE68A] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#F59E0B]/30">
            <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
            Atendimento Oficial em São Paulo e Grande SP
          </div>

          <h1 className="serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            Convênio Médico em São Paulo: planos individuais no CPF, MEI e Empresas
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans font-light">
            Encontre o plano ideal para você, sua família ou sua empresa na capital paulista e região metropolitana. Cotamos diretamente na fonte nas operadoras que continuam aceitando pessoa física e comparamos a rede credenciada dos melhores hospitais de São Paulo.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={`${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Olá! Gostaria de cotar um plano de saúde para São Paulo (capital/região). Pode me enviar as opções?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base py-3.5 px-7 rounded-full uppercase tracking-wider transition-transform hover:scale-[1.02] shadow-md text-center"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Receber cotação para São Paulo</span>
            </a>

            <a
              href={BROKER_INFO.telefoneTel}
              className="inline-flex items-center justify-center gap-2 bg-[#0D263F] hover:bg-[#163654] text-white font-semibold text-sm py-3.5 px-6 rounded-full border border-slate-600 transition-colors text-center"
            >
              <Phone className="w-4 h-4 text-[#D97706]" />
              <span>{BROKER_INFO.telefoneFormatado}</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 mt-4">
            Sede física em SP: Rua São Roberto, 298 — Vila Marieta • Atendimento presencial e digital
          </p>
        </div>
      </section>

      {/* Seção 1 — Guia por Regiões de São Paulo */}
      <section className="py-14 px-4 sm:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#D97706] block mb-2">
            Rede Credenciada por Bairro
          </span>
          <h2 className="serif text-2xl sm:text-3xl font-bold text-[#123A5F] leading-tight">
            Como escolher o melhor convênio para o seu bairro em SP
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            O segredo para não errar na contratação em São Paulo é verificar se o pronto-socorro mais perto da sua residência tem atendimento 24h na operadora escolhida:
          </p>
        </div>

        <div className="space-y-4">
          {spRegions.map((reg, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 triagem-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D97706]"></span>
                  <h3 className="serif text-lg font-bold text-[#123A5F]">{reg.name}</h3>
                </div>
                <span className="text-xs text-gray-500 font-medium">{reg.bairros}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-xs uppercase tracking-wider text-gray-500 block mb-1">Hospitais & Centros Clínicos:</strong>
                  <p className="text-gray-800 font-medium">{reg.hospitais}</p>
                </div>
                <div>
                  <strong className="text-xs uppercase tracking-wider text-[#D97706] block mb-1">Dica do Corretor:</strong>
                  <p className="text-gray-600 text-xs sm:text-sm">{reg.destaque}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 2 — Operadoras em Destaque em São Paulo */}
      <section className="py-14 px-4 sm:px-8 bg-[#F3F4F6] border-y border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#D97706] block mb-2">
              Tabela Direta na Fonte
            </span>
            <h2 className="serif text-2xl sm:text-3xl font-bold text-[#123A5F] leading-tight">
              Principais Operadoras em São Paulo
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Trabalhamos com código direto cadastrado em todas as operadoras que atuam na capital e interior:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-[#FEF3C7] text-[#D97706] text-[10px] font-bold px-2 py-0.5 rounded uppercase">Venda no CPF</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">São Cristóvão Saúde</h3>
              <p className="text-xs text-gray-600 mb-3">Referência histórica na Zona Leste e Mooca com hospital próprio de ponta e valores muito acessíveis.</p>
              <Link to="/operadoras/sao-cristovao" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Ver planos do São Cristóvão</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-[#FEF3C7] text-[#D97706] text-[10px] font-bold px-2 py-0.5 rounded uppercase">Venda no CPF</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">Trasmontano Saúde</h3>
              <p className="text-xs text-gray-600 mb-3">Hospital IGESP na Bela Vista e mais de 20 centros médicos próprios espalhados por São Paulo e litoral.</p>
              <Link to="/operadoras/trasmontano" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Ver planos do Trasmontano</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-[#FEF3C7] text-[#D97706] text-[10px] font-bold px-2 py-0.5 rounded uppercase">Adulto & 50+</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">Prevent Senior</h3>
              <p className="text-xs text-gray-600 mb-3">Foco em medicina preventiva para adultos e idosos na capital, com hospitais Sancta Maggiore e ampla rede diagnóstica.</p>
              <Link to="/operadoras/prevent-senior" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Ver planos Prevent Senior</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Nacional / PME</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">Amil Saúde SP</h3>
              <p className="text-xs text-gray-600 mb-3">Linha Amil Fácil regional e linhas nacionais com hospitais como Paulistano, TotalCor, Vitória e Samaritano.</p>
              <Link to="/operadoras/amil" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Ver planos Amil SP</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Premium & Reembolso</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">Bradesco & SulAmérica</h3>
              <p className="text-xs text-gray-600 mb-3">Redes hospitalares de primeira linha (Sírio-Libanês, Einstein, Oswaldo Cruz) com opção de reembolso médico.</p>
              <Link to="/operadoras/bradesco-saude" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Ver planos Bradesco Saúde</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Econômico</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">UniHosp & Plena Saúde</h3>
              <p className="text-xs text-gray-600 mb-3">Planos individuais com preços reduzidos e rede própria focada na Zona Norte, Zona Leste e Grande ABC.</p>
              <Link to="/operadoras" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Ver todas as operadoras</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3 — FAQ Específico de São Paulo */}
      <section className="py-14 px-4 sm:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#D97706] block mb-1">
            Dúvidas Frequentes
          </span>
          <h2 className="serif text-2xl sm:text-3xl font-bold text-[#123A5F]">
            Perguntas sobre planos de saúde em São Paulo
          </h2>
        </div>

        <div className="space-y-3">
          {faqList.map((faq, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <h3 className="serif font-bold text-base text-[#123A5F] flex items-center gap-2 mb-2">
                <HelpCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-sans pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA de Rodapé da Página */}
      <SectionWhatsAppCta
        badge="Cotação Rápida em São Paulo"
        title="Receba os preços das operadoras de São Paulo hoje"
        description="Envie as idades e os bairros onde você prefere atendimento. O corretor puxa a tabela das operadoras ativas em SP e responde no WhatsApp no mesmo dia útil."
        buttonText="Pedir cotação para São Paulo"
        customMessage="Olá! Quero cotar convênio médico em São Paulo. Pode me enviar os valores e hospitais da minha região?"
      />
    </div>
  );
};
