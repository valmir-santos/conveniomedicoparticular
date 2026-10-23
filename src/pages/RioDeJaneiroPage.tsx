import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceSchema, FaqSchema } from '../components/SchemaJsonLd';
import { SectionWhatsAppCta } from '../components/SectionWhatsAppCta';
import { BROKER_INFO } from '../data/siteData';
import { ShieldCheck, Check, AlertCircle, ArrowRight, Building2, MapPin, HelpCircle, CheckCircle2, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { Seo } from '../components/Seo';

export const RioDeJaneiroPage: React.FC = () => {
  const pageTitle = "Plano de Saúde no Rio de Janeiro (Capital, Niterói e Baixada)";
  const pageDescription = "Cotação de plano de saúde no Rio de Janeiro (RJ) no CPF, MEI ou CNPJ. Compare Assim Saúde, Leve Saúde, Amil, SulAmérica, Bradesco e hospitais da Rede D'Or.";

  const faqList = [
    {
      question: 'Quais operadoras vendem plano de saúde individual no Rio de Janeiro?',
      answer: 'No Rio de Janeiro, operadoras regionais consolidadas como Assim Saúde e Leve Saúde oferecem contratação direta para pessoa física no CPF, além de linhas por adesão e opções corporativas para MEI e empresas.'
    },
    {
      question: 'Quais os principais hospitais credenciados no Rio de Janeiro e Niterói?',
      answer: 'A rede no RJ conta com grandes centros médicos como hospitais da Rede D\'Or (Copa D\'Or, Barra D\'Or, Quinta D\'Or, Norte D\'Or), Hospital Samaritano RJ, Casa de Saúde São José (Humaitá), Hospital Badim (Tijuca), Hospital Pasteur (Méier) e Complexo Hospitalar de Niterói (CHN).'
    },
    {
      question: 'Consigo contratar no Rio de Janeiro sem ter CNPJ?',
      answer: 'Sim! Cotamos nas operadoras que aceitam pessoa física direto no CPF ou através de planos coletivos por adesão vinculados à sua profissão ou formação, sem precisar abrir MEI.'
    },
    {
      question: 'Como funciona o atendimento para quem mora no Rio de Janeiro?',
      answer: 'Nosso atendimento é ágil e personalizado via WhatsApp e telefone. Enviamos as tabelas oficiais de preços do Rio de Janeiro, relação de hospitais por bairro e você assina a proposta 100% digital pelo celular.'
    },
    {
      question: 'Quanto tempo leva para poder usar o plano no RJ?',
      answer: 'Atendimentos de urgência e emergência em prontos-socorros são liberados após 24 horas da vigência. Consultas e exames simples seguem prazos rápidos conforme a tabela oficial da operadora.'
    }
  ];

  const rjRegions = [
    {
      name: 'Zona Sul e Centro',
      bairros: 'Copacabana, Botafogo, Flamengo, Ipanema, Leblon, Tijuca, Centro',
      hospitais: 'Copa D\'Or, Casa de Saúde São José, Samaritano Botafogo, Hospital Badim, Hospital Glória D\'Or',
      destaque: 'Atendimento de alta complexidade com ampla cobertura Amil, Bradesco, SulAmérica e Assim Saúde.'
    },
    {
      name: 'Barra, Recreio e Jacarepaguá',
      bairros: 'Barra da Tijuca, Recreio dos Bandeirantes, Taquara, Freguesia, Anil',
      hospitais: 'Barra D\'Or, Hospital Samaritano Barra, Hospital Rio Mar, Hospital Vitória Barra, Rios D\'Or',
      destaque: 'Região com excelente infraestrutura hospitalar própria e centros médicos credenciados.'
    },
    {
      name: 'Zona Norte e Subúrbio',
      bairros: 'Méier, Madureira, Ilha do Governador, Vila da Penha, Ramos, Del Castilho',
      hospitais: 'Quinta D\'Or (São Cristóvão), Norte D\'Or (Caspadouro), Hospital Pasteur, Hospital Memorial',
      destaque: 'Forte presença de planos com excelente custo-benefício (Assim Saúde, Leve Saúde e Amil Fácil).'
    },
    {
      name: 'Niterói e São Gonçalo',
      bairros: 'Icaraí, Centro de Niterói, Santa Rosa, Alcântara, Zé Garoto',
      hospitais: 'Complexo Hospitalar de Niterói (CHN), Hospital Santa Martha, Hospital São Lucas, Hospital Icaraí',
      destaque: 'Rede hospitalar autônoma de primeira linha com cobertura regional completa.'
    },
    {
      name: 'Baixada Fluminense e Zona Oeste',
      bairros: 'Nova Iguaçu, Duque de Caxias, São João de Meriti, Campo Grande, Bangu',
      hospitais: 'Hospital Caxias D\'Or, Hospital Nossa Senhora de Fátima, Hospital Memorial Santa Cruz, Real Cordis',
      destaque: 'Planos acessíveis com ampla aceitação ambulatorial e pronto-socorro 24 horas.'
    }
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-[#1A1A1A]">
      <Seo title={pageTitle} description={pageDescription} path="/plano-de-saude-rio-de-janeiro" />
      <ServiceSchema
        serviceName={pageTitle}
        description={pageDescription}
        url="/plano-de-saude-rio-de-janeiro"
      />
      <FaqSchema faqs={faqList} />

      <Breadcrumb
        items={[
          { label: 'Capitais Atendidas', url: '/' },
          { label: 'Rio de Janeiro' }
        ]}
      />

      {/* Hero da Página do Rio de Janeiro */}
      <section className="bg-[#123A5F] text-white py-12 sm:py-16 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#F59E0B]/20 text-[#FDE68A] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#F59E0B]/30">
            <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
            Atendimento Especializado no Rio de Janeiro (RJ)
          </div>

          <h1 className="serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            Convênio Médico no Rio de Janeiro: Compare no CPF, MEI ou Adesão
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans font-light">
            Encontre a melhor opção de plano de saúde no Rio de Janeiro, Niterói e Baixada. Consultamos diretamente as operadoras que atuam no mercado fluminense para garantir a melhor rede de hospitais, laboratórios e pronto-socorro pelo valor mais justo.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={`${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Olá! Gostaria de cotar um plano de saúde para o Rio de Janeiro (RJ). Pode me enviar as opções e hospitais?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base py-3.5 px-7 rounded-full uppercase tracking-wider transition-transform hover:scale-[1.02] shadow-md text-center"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Receber cotação para o Rio de Janeiro</span>
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
            Cotação direta na fonte • Sem taxas de corretagem extras • Atendimento digital em todo o RJ
          </p>
        </div>
      </section>

      {/* Seção 1 — Guia por Regiões do Rio de Janeiro */}
      <section className="py-14 px-4 sm:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#D97706] block mb-2">
            Rede Credenciada no Rio
          </span>
          <h2 className="serif text-2xl sm:text-3xl font-bold text-[#123A5F] leading-tight">
            Cobertura Hospitalar nas Regiões do Rio de Janeiro
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Veja as principais referências de pronto-socorro e internação em cada região do Grande Rio:
          </p>
        </div>

        <div className="space-y-4">
          {rjRegions.map((reg, idx) => (
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
                  <strong className="text-xs uppercase tracking-wider text-gray-500 block mb-1">Hospitais & Prontos-Socorros:</strong>
                  <p className="text-gray-800 font-medium">{reg.hospitais}</p>
                </div>
                <div>
                  <strong className="text-xs uppercase tracking-wider text-[#D97706] block mb-1">Destaque de Operadoras:</strong>
                  <p className="text-gray-600 text-xs sm:text-sm">{reg.destaque}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 2 — Operadoras em Destaque no Rio de Janeiro */}
      <section className="py-14 px-4 sm:px-8 bg-[#F3F4F6] border-y border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#D97706] block mb-2">
              Operadoras Fluminenses
            </span>
            <h2 className="serif text-2xl sm:text-3xl font-bold text-[#123A5F] leading-tight">
              Principais Planos de Saúde no Rio de Janeiro
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Comparamos opções individuais no CPF, adesão e corporativas:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-[#FEF3C7] text-[#D97706] text-[10px] font-bold px-2 py-0.5 rounded uppercase">Maior Rede Própria RJ</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">Assim Saúde</h3>
              <p className="text-xs text-gray-600 mb-3">A maior rede própria da América Latina no RJ, com hospitais Memorial e Assim Medical Centers espalhados por todo o estado.</p>
              <a href={`${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Olá! Quero cotar planos da Assim Saúde no Rio de Janeiro.')}`} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Cotar Assim Saúde</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Inovação & Custo-Benefício</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">Leve Saúde</h3>
              <p className="text-xs text-gray-600 mb-3">Operadora focada em saúde preventiva, medicina de família e valores acessíveis com excelentes clínicas no Rio e Niterói.</p>
              <a href={`${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Olá! Quero cotar planos da Leve Saúde no RJ.')}`} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Cotar Leve Saúde</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Nacional / Rede D'Or</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">Amil Saúde RJ</h3>
              <p className="text-xs text-gray-600 mb-3">Ampla abrangência no estado do Rio, planos Amil Fácil e linhas completas com pronto atendimento e telemedicina.</p>
              <Link to="/operadoras/amil" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Ver planos Amil RJ</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Referência Médica</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">Bradesco Saúde RJ</h3>
              <p className="text-xs text-gray-600 mb-3">Cobertura premium em hospitais como Copa Star, Samaritano e São José, com sistema de reembolso ágil.</p>
              <Link to="/operadoras/bradesco" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Ver planos Bradesco RJ</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Tradição & Reembolso</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">SulAmérica Saúde RJ</h3>
              <p className="text-xs text-gray-600 mb-3">Histórico de excelência no Rio de Janeiro, ampla rede referenciada e opções para MEI e pequenas empresas.</p>
              <Link to="/operadoras/sulamerica" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Ver planos SulAmérica RJ</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-[#FEF3C7] text-[#D97706] text-[10px] font-bold px-2 py-0.5 rounded uppercase">Especialistas 50+</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">MedSênior & Prevent Senior RJ</h3>
              <p className="text-xs text-gray-600 mb-3">Planos dedicados à terceira idade sem reajuste por faixa etária a partir dos 59 anos e unidades próprias na capital.</p>
              <Link to="/operadoras/medsenior" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Ver planos Terceira Idade RJ</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3 — FAQ Específico do Rio de Janeiro */}
      <section className="py-14 px-4 sm:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#D97706] block mb-1">
            Tire Suas Dúvidas
          </span>
          <h2 className="serif text-2xl sm:text-3xl font-bold text-[#123A5F]">
            Perguntas sobre planos de saúde no Rio de Janeiro
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
        badge="Cotação Rápida no Rio de Janeiro"
        title="Receba a tabela de preços do Rio de Janeiro agora"
        description="Envie as idades dos dependentes e seu bairro ou cidade (Rio, Niterói ou Baixada). O corretor envia a relação completa no WhatsApp no mesmo dia útil."
        buttonText="Pedir cotação para o Rio de Janeiro"
        customMessage="Olá! Gostaria de cotar um plano de saúde no Rio de Janeiro. Pode me enviar os valores e hospitais?"
      />
    </div>
  );
};
