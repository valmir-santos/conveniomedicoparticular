import React, { useState } from 'react';
import { MessageCircle, CheckCircle2, ArrowRight, Shield, User, Building2, Briefcase } from 'lucide-react';
import { TRIAGE_OPTIONS, BROKER_INFO, TriageOption } from '../data/siteData';

interface HeroTriageProps {
  onSelectOption?: (option: TriageOption) => void;
}

export const HeroTriage: React.FC<HeroTriageProps> = ({ onSelectOption }) => {
  const [selectedId, setSelectedId] = useState<'cpf' | 'mei' | 'empresa'>('cpf');
  const [idades, setIdades] = useState('');
  const [bairro, setBairro] = useState('');

  const selectedOption = TRIAGE_OPTIONS.find((opt) => opt.id === selectedId) || TRIAGE_OPTIONS[0];

  const getCustomWhatsAppLink = () => {
    let text = selectedOption.whatsappMessage;
    if (idades.trim() || bairro.trim()) {
      text += `\n\nDetalhes para a cotação:\n- Idade(s): ${idades.trim() || 'A informar'}\n- Cidade / Bairro: ${bairro.trim() || 'A informar'}`;
    }
    return `${BROKER_INFO.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
  };

  const handleCardClick = (option: TriageOption) => {
    setSelectedId(option.id);
    if (onSelectOption) {
      onSelectOption(option);
    }
  };

  return (
    <section id="triagem" className="relative bg-[#F9FAFB] text-[#1A1A1A] pt-10 sm:pt-14 pb-16 px-4 sm:px-8 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho Principal com Tipografia Editorial */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-xs font-bold text-[#D97706] mb-4 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse"></span>
            Atendimento Especializado nas Principais Capitais
          </div>
          
          <h1 className="serif text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-[#123A5F] mb-4 font-bold">
            Convênio médico nas principais capitais: <span className="italic text-[#D97706]">qual é o seu caso?</span>
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cotamos nas operadoras que ainda aceitam quem só tem CPF em São Paulo, Rio de Janeiro, Brasília, Paraná e atendimento digital em todo o Brasil. Sem MEI, sem pegadinhas. 
            Envie sua faixa etária e receba o valor no WhatsApp hoje mesmo.
          </p>
        </div>

        {/* Bloco de Triagem em 3 Colunas com Foco Principal */}
        <div className="mb-10">
          <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center justify-between">
            <span>Selecione sua situação para receber a tabela correta:</span>
            <span className="text-[#D97706] font-semibold">Cotação direta sem intermediários</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRIAGE_OPTIONS.map((option) => {
              const isSelected = selectedId === option.id;
              const isCpf = option.id === 'cpf';

              return (
                <div
                  key={option.id}
                  id={`triage-card-${option.id}`}
                  onClick={() => handleCardClick(option)}
                  className={`triagem-shadow bg-white p-7 sm:p-8 flex flex-col justify-between text-center rounded-xl transition-all duration-200 cursor-pointer hover:scale-[1.02] ${
                    isCpf
                      ? 'cpf-highlight ring-2 ring-[#D97706]/20'
                      : isSelected
                      ? 'border-2 border-[#123A5F]'
                      : 'border border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <div>
                    {/* Ícone com círculo suave temático */}
                    <div
                      className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-4 ${
                        option.id === 'cpf'
                          ? 'bg-[#FEF3C7] text-[#D97706]'
                          : option.id === 'mei'
                          ? 'bg-[#E0E7FF] text-[#123A5F]'
                          : 'bg-[#F3F4F6] text-gray-600'
                      }`}
                    >
                      {option.id === 'cpf' && <User className="w-6 h-6" />}
                      {option.id === 'mei' && <Briefcase className="w-6 h-6" />}
                      {option.id === 'empresa' && <Building2 className="w-6 h-6" />}
                    </div>

                    {/* Título da Opção */}
                    <h2 className="serif text-2xl font-bold text-[#123A5F] mb-2 flex items-center justify-center gap-2">
                      {option.title}
                      {isSelected && (
                        <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
                      )}
                    </h2>

                    {/* Descrição */}
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {option.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">
                      <strong className="text-[#123A5F]">Indicado para:</strong> {option.recommendedFor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Caixa de Cotação e Consulta Personalizada */}
        <div className="bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 triagem-shadow">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex-1 w-full">
              <div className="flex items-center gap-2 text-sm font-bold text-[#123A5F] mb-2">
                <Shield className="w-4 h-4 text-[#D97706]" />
                <span className="uppercase tracking-wider text-xs">Situação selecionada:</span>
                <span className="text-[#D97706] font-extrabold">{selectedOption.title}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {selectedOption.id === 'cpf' && (
                  <span>
                    Cotamos nas operadoras que mantêm plano individual ativo na sua região. Você recebe a tabela de carência e valores antes de qualquer decisão.
                  </span>
                )}
                {selectedOption.id === 'mei' && (
                  <span>
                    Analisamos se a tabela MEI é vantajosa para sua faixa etária ou se o custo de impostos mensais inviabiliza a economia.
                  </span>
                )}
                {selectedOption.id === 'empresa' && (
                  <span>
                    Estudo comparativo de custos para pequenas e médias empresas, com análise de rede hospitalar e carências.
                  </span>
                )}
              </p>

              {/* Campos rápidos opcionais */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label htmlFor="input-idades" className="block text-xs font-semibold text-gray-700 mb-1">
                    Idade(s) de quem vai entrar no plano (opcional):
                  </label>
                  <input
                    type="text"
                    id="input-idades"
                    value={idades}
                    onChange={(e) => setIdades(e.target.value)}
                    placeholder="Ex: 34 anos, dependente 5 anos"
                    className="w-full bg-[#F9FAFB] border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#123A5F] focus:ring-1 focus:ring-[#123A5F]"
                  />
                </div>
                <div>
                  <label htmlFor="input-bairro" className="block text-xs font-semibold text-gray-700 mb-1">
                    Sua cidade, estado ou bairro (opcional):
                  </label>
                  <input
                    type="text"
                    id="input-bairro"
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                    placeholder="Ex: São Paulo, Rio de Janeiro, Brasília, Curitiba..."
                    className="w-full bg-[#F9FAFB] border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#123A5F] focus:ring-1 focus:ring-[#123A5F]"
                  />
                </div>
              </div>
            </div>

            {/* Botão de WhatsApp em Destaque */}
            <div className="w-full lg:w-auto flex flex-col items-stretch sm:items-center gap-2 shrink-0">
              <a
                href={getCustomWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-main-cta-whatsapp"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-base px-7 py-4 rounded-full shadow-md hover:shadow-lg transition-all active:scale-[0.99] text-center uppercase tracking-wider"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Pedir cotação no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <span className="text-xs text-gray-500 text-center">
                Atendimento direto com corretor registrado • Sem robôs
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

