import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceSchema, FaqSchema } from '../components/SchemaJsonLd';
import { SectionWhatsAppCta } from '../components/SectionWhatsAppCta';
import { BROKER_INFO } from '../data/siteData';
import { ShieldCheck, Check, AlertCircle, ArrowRight, Building2, MapPin, HelpCircle, CheckCircle2, ChevronRight, Phone, MessageCircle } from 'lucide-react';

export const BrasiliaPage: React.FC = () => {
  const pageTitle = "Plano de Saúde em Brasília e Distrito Federal (DF)";
  const pageDescription = "Cotação de plano de saúde em Brasília (DF) no CPF, MEI, Adesão ou CNPJ. Comparativo com DF Star, Santa Lúcia, Santa Luzia, Hospital Anchieta e Hospital Águas Claras.";

  const faqList = [
    {
      question: 'Quais as melhores opções de convênio médico em Brasília e DF?',
      answer: 'Em Brasília, as operadoras mais procuradas incluem Amil DF, SulAmérica Saúde, Bradesco Saúde, Ideal Saúde, MedSênior Brasília e Seguros Unimed, com ampla cobertura no Plano Piloto, Taguatinga, Águas Claras e cidades satélites.'
    },
    {
      question: 'Quais hospitais de referência atendem pelos planos no Distrito Federal?',
      answer: 'A rede credenciada conta com hospitais renomados como DF Star (Asa Sul), Hospital Santa Lúcia (Asa Sul e Norte), Hospital Santa Luzia (Asa Sul), Hospital Brasília (Lago Sul), Hospital Daher, Hospital Anchieta (Taguatinga), Hospital Águas Claras e Hospital São Francisco (Ceilândia).'
    },
    {
      question: 'Servidores públicos e profissionais liberais têm tabelas com desconto no DF?',
      answer: 'Sim! Em Brasília, os planos coletivos por adesão (vinculados a conselhos regionais, associações de servidores públicos e entidades de classe) oferecem tabelas diferenciadas com carências reduzidas e atendimento nos principais hospitais do Plano Piloto.'
    },
    {
      question: 'Consigo contratar apenas com o meu CPF em Brasília?',
      answer: 'Sim, você pode contratar diretamente no seu CPF para planos individuais ou através de planos por adesão e familiares, sem precisar abrir empresa ou MEI.'
    },
    {
      question: 'Como faço para receber a cotação com a rede de hospitais de Brasília?',
      answer: 'Basta enviar uma mensagem no WhatsApp informando a sua idade e a região do DF onde prefere atendimento (ex: Asa Sul, Taguatinga, Águas Claras). Enviamos o estudo comparativo no mesmo dia útil.'
    }
  ];

  const dfRegions = [
    {
      name: 'Plano Piloto e Região Central',
      bairros: 'Asa Sul, Asa Norte, Sudoeste, Noroeste, Cruzeiro, Octogonal',
      hospitais: 'DF Star, Hospital Santa Lúcia Sul/Norte, Hospital Santa Luzia, Hospital Daher, Hospital Mater Dei',
      destaque: 'Maior concentração de medicina de ponta com cobertura completa Bradesco, Amil e SulAmérica.'
    },
    {
      name: 'Águas Claras e Guará',
      bairros: 'Águas Claras, Guará I e II, Vicente Pires, Park Way',
      hospitais: 'Hospital Águas Claras, Centro Médico Guará, Pronto Atendimento Amil Águas Claras',
      destaque: 'Rede moderna de pronto atendimento rápido com excelente custo-benefício para famílias.'
    },
    {
      name: 'Taguatinga e Ceilândia',
      bairros: 'Taguatinga Norte/Sul, Ceilândia Centro/Norte, Samambaia',
      hospitais: 'Hospital Anchieta (Taguatinga), Hospital São Francisco (Ceilândia), Hospital Santa Marta',
      destaque: 'Hospitais completos com maternidade, UTI e exames avançados para moradores do DF.'
    },
    {
      name: 'Lago Sul e Lago Norte',
      bairros: 'Lago Sul, Lago Norte, Jardim Botânico, Colorado',
      hospitais: 'Hospital Brasília (Lago Sul), Hospital Daher (Lago Sul), Maternidade Brasília',
      destaque: 'Atendimento exclusivo, hotelaria hospitalar de referência e ampla rede de laboratórios Sabin e Exame.'
    },
    {
      name: 'Gama, Sobradinho e Entorno do DF',
      bairros: 'Gama, Santa Maria, Sobradinho I/II, Valparaíso de Goiás, Luziânia',
      hospitais: 'Hospital Maria Auxiliadora (Gama), Hospital Santa Marta, Hospital Santa Helena Sobradinho',
      destaque: 'Opções regionais acessíveis com atendimento de urgência e emergência 24 horas.'
    }
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-[#1A1A1A]">
      <ServiceSchema
        serviceName={pageTitle}
        description={pageDescription}
        url="/plano-de-saude-brasilia"
      />
      <FaqSchema faqs={faqList} />

      <Breadcrumb
        items={[
          { label: 'Capitais Atendidas', url: '/' },
          { label: 'Brasília (DF)' }
        ]}
      />

      {/* Hero da Página de Brasília */}
      <section className="bg-[#123A5F] text-white py-12 sm:py-16 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#F59E0B]/20 text-[#FDE68A] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#F59E0B]/30">
            <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
            Atendimento Especializado em Brasília e Distrito Federal
          </div>

          <h1 className="serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            Convênio Médico em Brasília: Planos no CPF, Adesão, MEI e PME no DF
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans font-light">
            Compare os melhores planos de saúde do Distrito Federal. Analisamos a rede credenciada dos hospitais do Plano Piloto, Águas Claras, Taguatinga e região, com tabelas especiais para servidores, autônomos, famílias e empresas.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={`${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Olá! Gostaria de cotar um plano de saúde para Brasília e Distrito Federal. Pode me enviar os valores e hospitais?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base py-3.5 px-7 rounded-full uppercase tracking-wider transition-transform hover:scale-[1.02] shadow-md text-center"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Receber cotação para Brasília (DF)</span>
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
            Cotação oficial de tabelas vigentes • Estudo de redução de carências no DF • Sem intermediários
          </p>
        </div>
      </section>

      {/* Seção 1 — Guia por Regiões do Distrito Federal */}
      <section className="py-14 px-4 sm:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#D97706] block mb-2">
            Rede Credenciada no DF
          </span>
          <h2 className="serif text-2xl sm:text-3xl font-bold text-[#123A5F] leading-tight">
            Cobertura Médica por Região no Distrito Federal
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Confira os hospitais e prontos-socorros de destaque em cada região administrativa do DF:
          </p>
        </div>

        <div className="space-y-4">
          {dfRegions.map((reg, idx) => (
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
                  <strong className="text-xs uppercase tracking-wider text-[#D97706] block mb-1">Perfil de Atendimento:</strong>
                  <p className="text-gray-600 text-xs sm:text-sm">{reg.destaque}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 2 — Operadoras em Destaque em Brasília */}
      <section className="py-14 px-4 sm:px-8 bg-[#F3F4F6] border-y border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#D97706] block mb-2">
              Operadoras em Brasília
            </span>
            <h2 className="serif text-2xl sm:text-3xl font-bold text-[#123A5F] leading-tight">
              Principais Planos de Saúde no Distrito Federal
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Tabelas para contratação individual no CPF, planos de adesão e corporativos:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Forte Rede no DF</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">Amil Saúde Brasília</h3>
              <p className="text-xs text-gray-600 mb-3">Rede hospitalar com Hospital Santa Lúcia, Hospital Brasília e centros clínicos próprios no DF com telemedicina 24h.</p>
              <Link to="/operadoras/amil" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Ver planos Amil DF</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Premium & Reembolso</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">Bradesco Saúde DF</h3>
              <p className="text-xs text-gray-600 mb-3">Líder em preferência no DF com cobertura no DF Star, Hospital Santa Lúcia e ampla liberdade de reembolso de consultas.</p>
              <Link to="/operadoras/bradesco" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Ver planos Bradesco DF</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Tradição em Brasília</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">SulAmérica Saúde DF</h3>
              <p className="text-xs text-gray-600 mb-3">Cobertura médica completa no Plano Piloto e cidades satélites com acesso aos melhores laboratórios de Brasília (Sabin e Exame).</p>
              <Link to="/operadoras/sulamerica" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Ver planos SulAmérica DF</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-[#FEF3C7] text-[#D97706] text-[10px] font-bold px-2 py-0.5 rounded uppercase">Terceira Idade 49+</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">MedSênior Brasília</h3>
              <p className="text-xs text-gray-600 mb-3">Operadora especializada no público maduro e idosos, com centro médico próprio na Asa Sul e programas de medicina preventiva.</p>
              <Link to="/operadoras/medsenior" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Ver planos MedSênior DF</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Regional Acessível</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">Ideal Saúde DF</h3>
              <p className="text-xs text-gray-600 mb-3">Excelente opção regional para quem busca mensalidades econômicas com atendimento nos polos de Taguatinga e Ceilândia.</p>
              <a href={`${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Olá! Quero cotar planos da Ideal Saúde em Brasília.')}`} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Cotar Ideal Saúde</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 triagem-shadow">
              <span className="bg-purple-100 text-purple-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Cooperativa Médica</span>
              <h3 className="serif font-bold text-lg text-[#123A5F] mt-2 mb-1">Seguros Unimed & Unimed</h3>
              <p className="text-xs text-gray-600 mb-3">Segurança cooperativa nacional com ampla aceitação médica no DF e excelente estrutura de atendimento.</p>
              <Link to="/operadoras/seguros-unimed" className="text-xs font-bold text-[#D97706] inline-flex items-center gap-1 hover:underline">
                <span>Ver planos Unimed DF</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3 — FAQ Específico de Brasília */}
      <section className="py-14 px-4 sm:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#D97706] block mb-1">
            Perguntas do DF
          </span>
          <h2 className="serif text-2xl sm:text-3xl font-bold text-[#123A5F]">
            Dúvidas frequentes sobre convênio médico em Brasília
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
        badge="Cotação Rápida no DF"
        title="Receba o comparativo de preços de Brasília hoje mesmo"
        description="Informe a sua faixa etária e a sua cidade ou bairro no DF. Nós consultamos as tabelas oficiais e respondemos no WhatsApp no mesmo dia útil."
        buttonText="Pedir cotação para Brasília (DF)"
        customMessage="Olá! Quero cotar convênio médico em Brasília e DF. Pode me enviar as opções e tabelas?"
      />
    </div>
  );
};
