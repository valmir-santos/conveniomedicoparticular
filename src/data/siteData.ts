export interface TriageOption {
  id: 'cpf' | 'mei' | 'empresa';
  title: string;
  badge?: string;
  description: string;
  recommendedFor: string;
  whatsappMessage: string;
  route: string;
  isPrimary?: boolean;
}

export interface ModalityItem {
  id: string;
  name: string;
  slug: string;
  forWhom: string;
  notForWhom: string;
  highlight?: boolean;
  tag: string;
  details: string;
}

export interface FaqItem {
  id: string;
  question: string;
  directAnswer: string;
  explanation: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  timeline: string;
}

export const BROKER_INFO = {
  name: "Convênio Médico Particular",
  corretorNome: "Andrea Correa Leite",
  susep: "Registro SUSEP: 10.2000204.1",
  susepNumero: "Registro SUSEP: 10.2000204.1",
  cnpj: "CNPJ: 17.818.045/0001-70",
  email: "comercial@sismailing.com.br",
  codigoDireto: "Temos código direto cadastrado em todas as operadoras",
  endereco: "Rua São Roberto, 298 — Vila Marieta — São Paulo/SP — CEP 03617-010",
  rua: "Rua São Roberto, 298",
  bairro: "Vila Marieta",
  cidade: "São Paulo/SP",
  bairroCidade: "Vila Marieta, São Paulo/SP",
  cep: "03617-010",
  telefone: "(11) 99193-7930",
  telefoneFormatado: "(11) 99193-7930",
  telefoneRaw: "+5511991937930",
  telefoneTel: "tel:+5511991937930",
  whatsappBaseUrl: "https://wa.me/5511991937930",
  whatsappDefaultLink: "https://wa.me/5511991937930?text=Ol%C3%A1%21%20Quero%20uma%20cota%C3%A7%C3%A3o%20de%20plano%20de%20sa%C3%BAde.%20N%C3%A3o%20tenho%20CNPJ.",
  facebookUrl: "https://web.facebook.com/conveniomedicoparticular/",
  horarioAtendimento: "09:00 às 19:00 hs",
  regioesAtendidas: "Todas as regiões e bairros de São Paulo, além de Rio de Janeiro, Brasília, Paraná e atendimento digital em todo o Brasil."
};

export const TRIAGE_OPTIONS: TriageOption[] = [
  {
    id: 'cpf',
    title: 'Só tenho CPF',
    badge: 'Nosso foco em São Paulo, Rio de Janeiro, Brasília e Paraná',
    description: 'Sem exigência de MEI, sem precisar abrir empresa e sem taxa de sindicato ou associação de classe.',
    recommendedFor: 'Pessoa física, autônomos e famílias que querem contratar plano de saúde direto no seu nome em São Paulo.',
    whatsappMessage: 'Olá! Quero uma cotação de plano de saúde. Não tenho CNPJ e quero contratar direto no meu CPF.',
    route: '/plano-de-saude-sem-cnpj',
    isPrimary: true,
  },
  {
    id: 'mei',
    title: 'Tenho MEI ou CNPJ',
    badge: 'Autônomo com empresa',
    description: 'Para quem já mantém CNPJ ativo e busca tabela empresarial para 1 ou mais vidas.',
    recommendedFor: 'Microempreendedores que já pagam DAS e querem comparar se a tabela MEI compensa para sua faixa etária.',
    whatsappMessage: 'Olá! Já tenho MEI ativo e quero cotar um convênio médico para comparar opções na capital.',
    route: '/convenio-medico-mei',
    isPrimary: false,
  },
  {
    id: 'empresa',
    title: 'Quero para minha empresa',
    badge: 'Pequenas e Médias',
    description: 'Para equipes e sócios a partir de 2 vidas, com tabela corporativa e estudo de carências.',
    recommendedFor: 'Empresas com CNPJ que buscam implantar ou trocar o convênio dos funcionários.',
    whatsappMessage: 'Olá! Quero cotar convênio médico empresarial para minha equipe.',
    route: '/convenio-medico-empresarial',
    isPrimary: false,
  },
];

export const MODALITIES: ModalityItem[] = [
  {
    id: 'sem-cnpj',
    name: 'Convênio Médico para quem não tem CNPJ',
    slug: '/plano-de-saude-sem-cnpj',
    tag: 'Especialidade da corretora',
    forWhom: 'Para quem quer contratar apenas com o CPF, sem abrir MEI e sem vínculo com sindicato.',
    notForWhom: 'Não é para quem já tem uma empresa estruturada com mais de 2 vidas buscando desconto corporativo.',
    highlight: true,
    details: 'A gente cota nas operadoras que ainda mantêm contratação individual ativa na capital de São Paulo, verificando hospitais do seu bairro e explicando a carência real.'
  },
  {
    id: 'individual-familiar',
    name: 'Convênio Médico Individual e Familiar',
    slug: '/convenio-medico-individual-familiar',
    tag: 'Contratação Direta CPF',
    forWhom: 'Para você e seus dependentes diretos (filhos, cônjuge, pais) com faturamento em boleto único.',
    notForWhom: 'Não atende quem busca incluir sobrinhos ou agregados sem vínculo de dependência reconhecido pela operadora.',
    highlight: true,
    details: 'Opções com acomodação em enfermaria ou apartamento, com ou sem coparticipação para consultas e exames na rede credenciada paulistana.'
  },
  {
    id: 'adesao',
    name: 'Convênio Médico por Adesão',
    slug: '/convenio-medico-por-adesao',
    tag: 'Entidades de Classe',
    forWhom: 'Para estudantes, profissionais liberais e servidores vinculados a conselhos (CREA, CRM, OAB, etc.).',
    notForWhom: 'Não serve para quem não possui nenhum vínculo com entidade associativa ou não deseja pagar mensalidade da entidade.',
    details: 'Planos coletivos intermediados por administradoras de benefícios, com possibilidade de ampla rede nacional.'
  },
  {
    id: 'mei',
    name: 'Convênio Médico MEI',
    slug: '/convenio-medico-mei',
    tag: 'A partir de 6 meses de MEI',
    forWhom: 'Para microempreendedores que já possuem MEI ativo há pelo menos 6 meses e querem incluir dependentes.',
    notForWhom: 'Não recomendamos abrir MEI exclusivamente para contratar plano de saúde, devido aos custos fixos mensais do DAS.',
    details: 'Tabelas empresariais acessíveis para 1 ou mais vidas, dependendo das regras vigentes de cada operadora em São Paulo.'
  },
  {
    id: 'empresarial',
    name: 'Convênio Médico Empresarial (pequenas e médias empresas)',
    slug: '/convenio-medico-empresarial',
    tag: 'A partir de 2 vidas',
    forWhom: 'Para micro, pequenas e médias empresas que querem oferecer assistência médica a sócios e colaboradores.',
    notForWhom: 'Não se aplica a contratos de pessoa física sem vínculo societário ou empregatício.',
    details: 'Estudo personalizado de custos, análise de rede credenciada por região de São Paulo e avaliação de aproveitamento de carências do plano anterior.'
  }
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Você informa sua idade e região',
    description: 'Manda no WhatsApp quantas pessoas vão entrar no plano, as idades de cada uma e os bairros onde você costuma passar em consultas ou pronto-socorro.',
    timeline: 'Leva 2 minutos'
  },
  {
    number: '02',
    title: 'A gente puxa a tabela das operadoras ativas',
    description: 'Consultamos diretamente no sistema das operadoras em São Paulo quais planos individuais ou familiares estão abertos para a sua faixa etária.',
    timeline: 'Consulta direta na fonte'
  },
  {
    number: '03',
    title: 'Você recebe o comparativo de preços e carências no mesmo dia útil',
    description: 'Enviamos o resumo claro com os valores de enfermaria e apartamento, opções com ou sem coparticipação e a tabela real de carências antes de você assinar nada.',
    timeline: 'Resposta no mesmo dia útil'
  },
  {
    number: '04',
    title: 'Se você aprovar, fazemos a proposta digital',
    description: 'Você preenche a declaração de saúde, confere cada dado e assina digitalmente pelo celular. Acompanhamos até a emissão da carteirinha e liberação para uso.',
    timeline: '100% digital e seguro'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'sem-cnpj-consegue',
    question: 'Não tenho CNPJ. Consigo contratar plano de saúde?',
    directAnswer: 'Sim, você consegue contratar normalmente apenas com o seu CPF.',
    explanation: 'Embora muitas corretoras prefiram vender para empresas, ainda existem operadoras tradicionais em São Paulo que comercializam planos individuais e familiares. A gente localiza essas opções ativas para você.'
  },
  {
    id: 'vale-a-pena-mei',
    question: 'Vale a pena abrir MEI só para pagar mais barato?',
    directAnswer: 'Na maioria dos casos de quem só tem CPF, não vale a pena.',
    explanation: 'Abrir um MEI obriga você a pagar a taxa mensal do DAS todo mês, além de declaração anual. Se você não tem atividade comercial de verdade, o custo e o trabalho fiscal não compensam a diferença da mensalidade.'
  },
  {
    id: 'tempo-usar-carencia',
    question: 'Quanto tempo até eu poder usar o plano?',
    directAnswer: 'Depende do tipo de procedimento e da tabela de carência de cada operadora.',
    explanation: 'Atendimentos de urgência e emergência costumam ser liberados nas primeiras 24 horas após a vigência. Consultas e exames simples liberam em seguida, enquanto cirurgias, internações e partos exigem prazos maiores. A gente manda a tabela exata antes de você fechar.'
  },
  {
    id: 'problema-saude',
    question: 'Tenho um problema de saúde. O plano me aceita?',
    directAnswer: 'Sim, você pode contratar o convênio declarando sua condição de saúde com total transparência.',
    explanation: 'Ao preencher a declaração de saúde, você informa seus tratamentos prévios. A operadora pode aplicar cobertura parcial temporária para procedimentos complexos relacionados àquela condição, mas você continua atendido nas demais especialidades.'
  },
  {
    id: 'rede-zona-leste',
    question: 'O plano cobre a rede aqui na minha Cidade e outras regiões?',
    directAnswer: 'Cobre, desde que a gente selecione uma operadora com rede credenciada nos seus bairros de preferência.',
    explanation: 'Se você mora na Vila Marieta, Penha, Tatuapé, Mooca ou Itaquera, filtramos operadoras que possuem hospitais, laboratórios e prontos-socorros próximos de onde você mora ou trabalha.'
  },
  {
    id: 'incluir-familia',
    question: 'Posso incluir minha família no mesmo plano?',
    directAnswer: 'Sim, você pode incluir cônjuge, companheiro(a) e filhos no mesmo contrato individual/familiar.',
    explanation: 'A cobrança vem consolidada em uma única mensalidade, calculada pela soma das faixas etárias de cada vida incluída.'
  },
  {
    id: 'diferenca-enfermaria-apartamento',
    question: 'Qual a diferença entre enfermaria e apartamento?',
    directAnswer: 'A diferença é a privacidade e as regras de acompanhante em caso de internação hospitalar.',
    explanation: 'Na enfermaria (quarto coletivo), você divide o quarto com outros pacientes e a mensalidade é mais em conta. No apartamento (quarto privativo), você fica sozinho no quarto com direito a acompanhante 24 horas.'
  },
  {
    id: 'cobra-cotacao',
    question: 'Vocês cobram alguma coisa pela cotação?',
    directAnswer: 'Não, a cotação e o atendimento são 100% gratuitos.',
    explanation: 'Quem remunera a corretora é a operadora de saúde quando o contrato é emitido. Você não paga nenhuma taxa de consultoria para receber a comparação detalhada de preços e carências.'
  }
];

export const OPERATOR_PLACEHOLDERS = [
  { name: "São Cristóvão Saúde", slug: "sao-cristovao-saude", focus: "Forte atuação na Zona Leste e Mooca" },
  { name: "Trasmontano Saúde", slug: "trasmontano-saude", focus: "Rede própria em São Paulo e litoral" },
  { name: "Prevent Senior", slug: "prevent-senior", focus: "Foco no público adulto e sênior na capital" },
  { name: "HapVida Notredame", slug: "hapvida-notredame", focus: "Centros clínicos próprios e hospitais credenciados" },
  { name: "Amil", slug: "amil-saude", focus: "Opções de abrangência regional e nacional" },
  { name: "SulAmérica Saúde", slug: "sulamerica-saude", focus: "Rede referenciada e opções com reembolso" },
  { name: "Bradesco Saúde", slug: "bradesco-saude", focus: "Rede de hospitais de referência em São Paulo" },
  { name: "Porto Seguro Saúde", slug: "porto-seguro-saude", focus: "Atendimento diferenciado e benefícios na capital" },
  { name: "Unimed Nacional", slug: "unimed-nacional", focus: "Ampla cobertura cooperativa" },
  { name: "Seguros Unimed", slug: "seguros-unimed", focus: "Solidez, ampla rede e opções com reembolso" },
  { name: "Alice Saúde", slug: "alice-saude", focus: "Gestão de saúde integrada e Time de Saúde em SP" },
  { name: "MedSênior Saúde", slug: "medsenior-saude", focus: "Planos especializados na terceira idade e medicina preventiva" },
  { name: "UniHosp Saúde", slug: "unihosp-saude", focus: "Planos regionais acessíveis em São Paulo e ABC" },
  { name: "Plena Saúde", slug: "plena-saude", focus: "Rede própria com hospitais na Zona Norte, Oeste e Franco da Rocha" },
  { name: "Blue Med Saúde", slug: "blue-med-saude", focus: "Planos regionais com excelente custo-benefício" }
];
