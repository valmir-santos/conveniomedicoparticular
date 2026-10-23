import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceSchema, FaqSchema } from '../components/SchemaJsonLd';
import { SectionWhatsAppCta } from '../components/SectionWhatsAppCta';
import { BROKER_INFO } from '../data/siteData';
import { ShieldCheck, Check, AlertCircle, ArrowRight, Building2, MapPin, HelpCircle, CheckCircle2, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { Seo } from '../components/Seo';

export const ParanaPage: React.FC = () => {
  const pageTitle = "Plano de Saúde em Curitiba e Paraná (PR)";
  const pageDescription = "Cotação de plano de saúde em Curitiba e cidades do Paraná no CPF, MEI, Adesão ou CNPJ. Compare Unimed Curitiba, Clinipam, Nossa Saúde, Paraná Clínicas, Amil e Bradesco.";

  const faqList = [
    {
      question: 'Quais os principais planos de saúde disponíveis em Curitiba e Paraná?',
      answer: 'No Paraná, as operadoras mais tradicionais incluem Unimed Curitiba, Clinipam / Hapvida Notredame, Nossa Saúde, Paraná Clínicas, Amil PR, Bradesco Saúde, SulAmérica e MedSênior Curitiba.'
    },
    {
      question: 'Quais hospitais renomados atendem pelos convênios em Curitiba?',
      answer: 'A rede hospitalar da capital paranaense inclui centros de excelência como Hospital Marcelino Champagnat, Hospital Nossa Senhora das Graças, Hospital Pilar, Hospital Santa Cruz, Hospital Pequeno Príncipe (pediatria de referência), Hospital IPO, Hospital Sugisawa e Hospital Vita.'
    },
    {
      question: 'Consigo contratar plano de saúde no Paraná sem ter CNPJ?',
      answer: 'Sim! Cotamos nas operadoras que aceitam pessoa física direto no CPF, além de linhas por adesão vinculadas a associações profissionais e sindicatos, garantindo segurança sem necessidade de abrir MEI.'
    },
    {
      question: 'Como funciona a cotação e contratação para moradores do Paraná?',
      answer: 'Nosso atendimento é realizado de forma rápida e segura via WhatsApp. Enviamos a relação dos hospitais do seu bairro em Curitiba ou da sua cidade no Paraná, tabela de preços atualizada e carências. A proposta é assinada eletronicamente pelo celular.'
    },
    {
      question: 'Atendem cidades do interior do Paraná como Londrina e Maringá?',
      answer: 'Sim! Além de Curitiba e Região Metropolitana, cotamos planos para Londrina, Maringá, Ponta Grossa, Cascavel, Foz do Iguaçu e demais municípios paranaenses com atendimento local e telemedicina.'
    }
  ];

  const prRegions = [
    {
      name: 'Curitiba — Região Central e Batel',
      bairros: 'Batel, Água Verde, Centro, Bigorrilho (Champagnat), Mercês, Juvevê, Cabral',
      hospitais: 'Hospital Marcelino Champagnat, Hospital Santa Cruz, Hospital Sugisawa, Hospital Nossa Senhora das Graças, Hospital Vita Batel',
      destaque: 'Maior polo médico do Paraná com cobertura completa Unimed Curitiba, Bradesco, Amil e SulAmérica.'
    },
    {
      name: 'Curitiba — Zona Norte e Leste',
      bairros: 'Santa Felicidade, Boa Vista, Bacacheri, Tarumã, Jardim Social, Cristo Rei',
      hospitais: 'Hospital Pilar (Bom Retiro), Hospital das Nações, Hospital IPO (Jardim Social)',
      destaque: 'Centros médicos de referência em cirurgias de média e alta complexidade e pronto-socorro.'
    },
    {
      name: 'Curitiba — Zona Sul e Oeste',
      bairros: 'Portão, Novo Mundo, Boqueirão, Hauer, Pinheirinho, CIC, Santa Quitéria',
      hospitais: 'Hospital do Trabalhador, Centros Médicos Clinipam/Hapvida, Policlínicas Nossa Saúde',
      destaque: 'Opções com excelente custo-benefício, ampla rede de ambulatórios e exames de rotina rápidos.'
    },
    {
      name: 'Região Metropolitana de Curitiba (RMC)',
      bairros: 'São José dos Pinhais, Colombo, Pinhais, Araucária, Campo Largo',
      hospitais: 'Hospital e Maternidade São José dos Pinhais, Hospital do Rocio (Campo Largo), Hospital Novaclínica',
      destaque: 'Planos regionais com valores diferenciados e hospitais de grande porte com pronto atendimento 24h.'
    },
    {
      name: 'Interior do Paraná',
      bairros: 'Londrina, Maringá, Ponta Grossa, Cascavel, Foz do Iguaçu, Guarapuava',
      hospitais: 'Hospital Evangélico de Londrina, Hospital Paraná (Maringá), Hospital Geral Unimed Ponta Grossa, Hospital São Lucas Cascavel',
      destaque: 'Planos cooperativos Unimed e seguradoras nacionais com cobertura estadual e nacional.'
    }
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-[#1A1A1A]">
      <Seo title={pageTitle} description={pageDescription} path="/plano-de-saude-curitiba-parana" />
      <ServiceSchema
        serviceName={pageTitle}
        description={pageDescription}
        url="/plano-de-saude-curitiba-parana"
      />
      <FaqSchema faqs={faqList} />

      <Breadcrumb
        items={[
          { label: 'Capitais Atendidas', url: '/' },
          { label: 'Curitiba e Paraná' }
        ]}
      />

      {/* Hero da Página do Paraná */}
      <section className="bg-[#123A5F] text-white py-12 sm:py-16 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#F59E0B]/20 text-[#FDE68A] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#F59E0B]/30">
            <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
            Atendimento Especializado em Curitiba e Paraná (PR)
          </div>

          <h1 className="serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            Convênio Médico em Curitiba e Paraná: Compare no CPF, MEI ou Adesão
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans font-light">
            Encontre o plano de saúde ideal em Curitiba, Região Metropolitana e interior do Paraná. Cotamos diretamente com as principais operadoras e cooperativas do estado para você economizar sem abrir mão dos melhores hospitais paranaenses.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={`${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Olá! Gostaria de cotar um plano de saúde para Curitiba e Paraná (PR). Pode me enviar as opções e tabelas?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base py-3.5 px-7 rounded-full uppercase tracking-wider transition-transform hover:scale-[1.02] shadow-md text-center"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Receber cotação para Curitiba e PR</span>
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
            Cotação direta nas operadoras • Análise de redução de carências no PR • Atendimento digital seguro
          </p>
        </div>
      </section>

      {/* Seção 1 — Guia por Regiões do Paraná */}
      <section className="py-14 px-4 sm:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#D97706] block mb-2">
            Rede Credenciada no Paraná
          </span>
          <h2 className="serif text-2xl sm:text-3xl font-bold text-[#123A5F] leading-tight">
            Cobertura Hospitalar em Curitiba e Região
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Principais referências de hospitais, maternidades e centros de diagnóstico no estado:
          </p>
        </div>

        <div className="space-y-4">
          {prRegions.map((reg, idx) => (
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
                  <strong className="text-xs uppercase tracking-wider text-gray-500 block mb-1">Hospitais de Destaque:</strong>
                  <p className="text-gray-800 font-medium">{reg.hospitais}</p>
                </div>
                <div>
                  <strong className="text-xs uppercase tracking-wider text-[#D97706] block mb-1">Diferencial da Região:</strong>
                  <p className="text-gray-600 text-xs sm:text-sm">{reg.destaque}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 2 — Operadoras em Destaque no Paraná */}
      <section className="py-14 px-4 sm:px-8 bg-[#F3F4F6] border-y border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#D97706] block mb-2">
              Operadoras Paranaenses
            </span>
            <h2 className="serif text-2xl sm:text-3xl font-bold text-[#123A5F] leading-tight">
              Principais Planos de Saúde no Paraná
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Opções no CPF, coletivos por adesão e planos para MEI e pequenas empresas:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-purple-100 text-purple-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Líder Absoluto no PR</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">Unimed Curitiba & Paraná</h3>
              <p className="text-xs text-gray-600 mb-3">A maior cooperativa médica do estado com acesso irrestrito aos melhores médicos, clínicas e hospitais de Curitiba e interior.</p>
              <a href={`${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Olá! Quero cotar planos da Unimed Curitiba / Paraná.')}`} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Cotar Unimed Curitiba</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Rede Própria & Economia</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">Clinipam / Hapvida</h3>
              <p className="text-xs text-gray-600 mb-3">Tradição consolidada em Curitiba e RMC com hospitais próprios, prontos atendimentos e mensalidades muito competitivas.</p>
              <a href={`${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Olá! Quero cotar planos da Clinipam em Curitiba.')}`} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Cotar Clinipam PR</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-[#FEF3C7] text-[#D97706] text-[10px] font-bold px-2 py-0.5 rounded uppercase">Regional Tradicional</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">Nossa Saúde PR</h3>
              <p className="text-xs text-gray-600 mb-3">Operadora focada em Curitiba e Região Metropolitana com atendimento humanizado e centros médicos de proximidade.</p>
              <a href={`${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Olá! Quero cotar planos da Nossa Saúde no Paraná.')}`} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Cotar Nossa Saúde</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Nacional / Linha Fácil</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">Amil Saúde Paraná</h3>
              <p className="text-xs text-gray-600 mb-3">Linhas regionais e nacionais com hospitais como Hospital Marcelino Champagnat e Hospital Pilar, além de telemedicina.</p>
              <Link to="/operadoras/amil" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Ver planos Amil PR</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Alta Complexidade</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">Bradesco & SulAmérica PR</h3>
              <p className="text-xs text-gray-600 mb-3">Rede hospitalar premium no Paraná com cobertura nos hospitais Santa Cruz, Graças e Pilar, com reembolso ágil.</p>
              <Link to="/operadoras/bradesco-saude" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Ver planos Bradesco PR</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-[#FEF3C7] text-[#D97706] text-[10px] font-bold px-2 py-0.5 rounded uppercase">Público 49+</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">MedSênior Curitiba</h3>
              <p className="text-xs text-gray-600 mb-3">Centro de excelência em medicina preventiva para a terceira idade em Curitiba sem coparticipação surpresa.</p>
              <Link to="/operadoras/medsenior" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Ver planos MedSênior PR</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3 — FAQ Específico do Paraná */}
      <section className="py-14 px-4 sm:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#D97706] block mb-1">
            Dúvidas do Paraná
          </span>
          <h2 className="serif text-2xl sm:text-3xl font-bold text-[#123A5F]">
            Perguntas sobre planos de saúde em Curitiba e PR
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
        badge="Cotação Rápida no Paraná"
        title="Receba a comparação de preços de Curitiba e PR agora"
        description="Envie as idades dos beneficiários e a sua cidade no Paraná. O corretor puxa a tabela das operadoras ativas e responde no WhatsApp no mesmo dia útil."
        buttonText="Pedir cotação para Curitiba e PR"
        customMessage="Olá! Quero cotar convênio médico em Curitiba e no Paraná. Pode me enviar as opções e hospitais?"
      />
    </div>
  );
};
