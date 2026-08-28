import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceSchema } from '../components/SchemaJsonLd';
import { SectionWhatsAppCta } from '../components/SectionWhatsAppCta';
import { BROKER_INFO } from '../data/siteData';
import { ShieldCheck, MapPin, Check, Phone, Mail, Award, Clock, HeartHandshake } from 'lucide-react';

export const SobrePage: React.FC = () => {
  const pageTitle = "Sobre a Corretora | Convênio Médico Particular";
  const pageDescription = `Conheça a história de ${BROKER_INFO.name}, corretora de planos de saúde credenciada SUSEP (${BROKER_INFO.susep}) em São Paulo. Transparência na comissão e suporte contínuo no pós-venda.`;

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-[#1A1A1A]">
      <ServiceSchema
        serviceName="Consultoria e Corretagem de Planos de Saúde"
        description={pageDescription}
        url="/sobre"
      />

      <Breadcrumb
        items={[
          { label: 'Sobre a Corretora' }
        ]}
      />

      {/* Hero */}
      <section className="bg-[#123A5F] text-white py-12 sm:py-16 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#D97706]/20 text-[#FDE68A] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#D97706]/30">
            Registro Oficial SUSEP nº {BROKER_INFO.susep}
          </div>

          <h1 className="serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            Corretagem especializada e transparente em São Paulo
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans font-light">
            Somos uma corretora de seguros devidamente habilitada pela SUSEP com sede na capital paulista. Atendemos todo o território nacional com estrutura presencial em São Paulo, Rio de Janeiro, Brasília e Paraná, além de consultoria remota para todas as cidades do Brasil.
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-12">

        {/* 1. Quem é a Corretora */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Quem somos e como atuamos no mercado de saúde
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A <strong>{BROKER_INFO.name}</strong> nasceu com um propósito claro: eliminar o ruído e as promessas ilusórias do mercado de saúde suplementar. Enquanto a internet se encheu de formulários automáticos que vendem dados cadastrais para dezenas de call centers, optamos pelo caminho do atendimento consultivo humano, direto com o corretor responsável.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Com anos de atuação consolidada no mercado paulistano, conhecemos a fundo a rede hospitalar de cada bairro de São Paulo — da Mooca ao Morumbi, de Santana a Santo Amaro —, o que nos permite indicar o plano que realmente resolve a vida do beneficiário no momento da emergência.
          </p>
        </section>

        {/* 2. Como a Corretora Ganha Dinheiro: 100% de Transparência */}
        <section className="bg-white rounded-xl border border-gray-200 p-6 sm:p-7 triagem-shadow space-y-4">
          <div className="flex items-center gap-2 text-[#123A5F]">
            <HeartHandshake className="w-6 h-6 text-[#D97706]" />
            <h2 className="serif text-xl sm:text-2xl font-bold">
              Como somos remunerados: transparência absoluta
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Fazemos questão de explicar com total clareza como funciona a remuneração da corretora:
          </p>
          <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
              <span><strong>Você não paga nenhum valor adicional à corretora:</strong> A nossa consultoria, o estudo de tabelas e o acompanhamento do seu contrato são 100% gratuitos para você. O preço da sua mensalidade é exatamente o valor oficial da tabela da operadora.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
              <span><strong>A comissão é paga pela operadora:</strong> Quando o contrato é implantado com sucesso, a operadora remunera a corretora com uma comissão de corretagem padrão de mercado.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-1" />
              <span><strong>Por que nunca empurramos planos ruins:</strong> Se um cliente contrata um plano inadequado por impulso e cancela a apólice nos primeiros meses, a operadora realiza o estorno integral da comissão da corretora. O nosso modelo só é sustentável quando você permanece satisfeito e bem atendido por anos.</span>
            </li>
          </ul>
        </section>

        {/* 3. Política de Pós-Venda */}
        <section className="space-y-4">
          <h2 className="serif text-xl sm:text-2xl font-bold text-[#123A5F] border-b border-gray-200 pb-2">
            Acompanhamento contínuo no pós-venda
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Nosso trabalho não termina com o envio da carteirinha. Permanecemos como o seu ponto de contato direto para suporte no dia a dia:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <span className="font-bold text-sm text-[#123A5F] block mb-1">Dúvidas de Reajuste</span>
              <p className="text-xs text-gray-600">Ajudamos a conferir os índices anuais e buscamos alternativas caso a mensalidade suba.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <span className="font-bold text-sm text-[#123A5F] block mb-1">Apoio em Guias e Prazos</span>
              <p className="text-xs text-gray-600">Orientação prática sobre liberação de exames e canais diretos da operadora.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <span className="font-bold text-sm text-[#123A5F] block mb-1">Inclusão de Familiares</span>
              <p className="text-xs text-gray-600">Inclusão de recém-nascidos e novos dependentes sem burocracia desnecessária.</p>
            </div>
          </div>
        </section>

        {/* 4. Localização e Dados Oficiais */}
        <section className="bg-[#123A5F] text-white rounded-xl p-6 sm:p-7 space-y-4">
          <h2 className="serif text-xl font-bold text-white">
            Dados cadastrais e endereço em São Paulo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-200">
            <div>
              <p className="font-semibold text-white">Razão / Nome:</p>
              <p>{BROKER_INFO.name}</p>
              <p className="mt-2 font-semibold text-white">Registro SUSEP:</p>
              <p className="text-[#F59E0B] font-bold">{BROKER_INFO.susepNumero}</p>
              <p className="mt-2 font-semibold text-white">Cadastro Nacional (CNPJ):</p>
              <p className="text-slate-200">{BROKER_INFO.cnpj}</p>
            </div>
            <div>
              <p className="font-semibold text-white">Endereço Oficial:</p>
              <p>{BROKER_INFO.endereco}</p>
              <p className="mt-2 font-semibold text-white">Horário de Atendimento:</p>
              <p>{BROKER_INFO.horarioAtendimento}</p>
            </div>
          </div>
        </section>

        <SectionWhatsAppCta
          variant="banner"
          label="Fale diretamente com o nosso corretor"
          sublabel="Tire suas dúvidas ou peça uma cotação personalizada sem compromisso"
          messageText="Olá! Gostaria de falar com o corretor responsável para tirar algumas dúvidas sobre planos de saúde em São Paulo."
        />

      </div>
    </div>
  );
};
