import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';

interface CpfAdvocacyProps {
  onNavigateSemCnpj?: () => void;
}

export const CpfAdvocacy: React.FC<CpfAdvocacyProps> = ({ onNavigateSemCnpj }) => {
  return (
    <section id="por-que-cpf" className="py-16 px-4 sm:px-8 bg-[#F9FAFB] border-b border-gray-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#D97706] block mb-2">
            Posicionamento Claro
          </span>
          <h2 className="serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123A5F] leading-tight">
            Por que quem só tem CPF é mal atendido no mercado tradicional
          </h2>
        </div>

        {/* Texto do Posicionamento */}
        <div className="space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed font-sans">
          <p>
            Se você já pesquisou convênio médico na internet nos últimos meses, quase certamente caiu 
            em formulários que exigem CNPJ logo no primeiro campo. Ou em atendentes que, ao ouvirem que você é 
            pessoa física, tentam te convencer a abrir um MEI sob a promessa de que o plano vai ficar 40% mais barato.
          </p>

          <p>
            O que não costumam te avisar é o custo oculto dessa manobra. Abrir um MEI só para ter plano de saúde 
            obriga você a pagar a guia do DAS todo mês, entregar declarações anuais e lidar com burocracia contábil. 
            Se a sua renda não vem de atividade empresarial, o imposto fixo mensal consome rapidamente qualquer 
            suposta economia na mensalidade.
          </p>

          <p>
            O mercado empurra o plano empresarial porque ele dá menos trabalho operacional para quem vende e 
            possui regras comerciais mais rápidas. Com isso, quem trabalha com carteira assinada, é autônomo sem CNPJ, 
            aposentado ou profissional informal nas principais cidades acaba ficando sem atendimento de verdade.
          </p>

          <p className="font-semibold text-[#123A5F]">
            Na Convênio Médico Particular, nós fazemos o caminho oposto. Nós pesquisamos as operadoras que continuam 
            comercializando planos individuais e familiares em São Paulo, Rio de Janeiro, Brasília, Paraná e todo o país, 
            comparamos a rede credenciada de hospitais e laboratórios da sua região, e falamos a verdade: se a conta não fechar para o seu caso, avisamos na hora.
          </p>
        </div>

        {/* Comparativo Visual Concreto de Realidade */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 triagem-shadow">
            <div className="flex items-center gap-2 text-rose-700 font-bold text-sm mb-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>O que o mercado tradicional faz</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Exige CNPJ logo no início, insiste para você abrir MEI e ignora quem deseja contratar plano individual e familiar direto no CPF.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-[#123A5F] triagem-shadow">
            <div className="flex items-center gap-2 text-[#123A5F] font-bold text-sm mb-2">
              <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0" />
              <span>O que nós fazemos aqui</span>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed">
              Cotamos direto nas operadoras que vendem para pessoa física na sua região, enviamos a tabela de carências completa e calculamos a viabilidade real.
            </p>
          </div>
        </div>

        {/* Link interno descritivo com destaque */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-gray-200">
          <span className="text-sm text-gray-600">
            Deseja saber quais operadoras ainda atendem pessoa física na sua região?
          </span>

          <Link
            to="/plano-de-saude-sem-cnpj"
            id="link-modalidade-sem-cnpj"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#D97706] hover:text-[#B45309] transition-colors group"
          >
            <span>Ver detalhes de plano de saúde para quem não tem CNPJ</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

