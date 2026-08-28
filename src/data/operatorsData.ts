export interface OperatorDetail {
  slug: string;
  name: string;
  categoryTitle: string;
  badge: string;
  shortDescription: string;
  acceptsIndividualCpf: boolean;
  acceptsAdesao: boolean;
  acceptsPme: boolean;
  idealProfile: string;
  notIdealProfile: string;
  coverageRegionSP: string;
  ownUnitsAndHospitals: string[];
  keyAccreditedHospitals: string[];
  differentials: string[];
  howToQuote: string;
  faq: {
    question: string;
    answer: string;
  }[];
}

export const OPERATORS_DETAILED: OperatorDetail[] = [
  {
    slug: 'sao-cristovao',
    name: 'São Cristóvão Saúde',
    categoryTitle: 'São Cristóvão Saúde em São Paulo: planos, rede e como contratar',
    badge: 'Aceita contratação no CPF',
    shortDescription: 'Uma das operadoras mais tradicionais e sólidas da Zona Leste de São Paulo, com hospital próprio na Mooca e contratação individual ativa para pessoas físicas.',
    acceptsIndividualCpf: true,
    acceptsAdesao: true,
    acceptsPme: true,
    idealProfile: 'Quem mora ou trabalha na Zona Leste, Mooca, Belém, Tatuapé, Penha, Vila Prudente ou região central de São Paulo e busca atendimento completo com hospital próprio de excelência sem precisar de CNPJ.',
    notIdealProfile: 'Quem precisa de atendimento frequente na Zona Sul extrema, Zona Oeste distante ou cobertura médica interestadual fora do estado de São Paulo.',
    coverageRegionSP: 'Forte concentração na Zona Leste (Mooca, Tatuapé, Penha, Vila Prudente, Anália Franco) e Centro expandido de São Paulo.',
    ownUnitsAndHospitals: [
      'Hospital e Maternidade São Cristóvão (Rua Américo Ventura, Mooca)',
      'Centro Ambulatorial Américo Ventura (Mooca)',
      'Unidade Avançada Anália Franco',
      'Unidade Diagnóstica Penha (Zona Leste)'
    ],
    keyAccreditedHospitals: [
      'Hospital Santa Virgínia (Belenzinho)',
      'Hospital e Maternidade Ouro Verde (Itaquera)',
      'Hospital Day Penha'
    ],
    differentials: [
      'Contratação individual e familiar diretamente no CPF com código oficial',
      'Hospital próprio com maternidade, UTI neonatal e pronto-socorro 24h na Mooca',
      'Valores de tabela mais acessíveis do que as operadoras multinacionais',
      'Programas de medicina preventiva e saúde da família'
    ],
    howToQuote: 'Para cotar São Cristóvão Saúde, envie as idades dos beneficiários no WhatsApp. Consultamos na hora se a tabela individual com ou sem coparticipação está liberada para a sua faixa etária.',
    faq: [
      {
        question: 'O São Cristóvão aceita quem não tem CNPJ nem MEI?',
        answer: 'Sim, o São Cristóvão Saúde é uma das poucas operadoras em São Paulo que mantém a venda de planos individuais e familiares diretamente com o CPF do titular.'
      },
      {
        question: 'Onde fica o hospital principal do São Cristóvão?',
        answer: 'O Hospital e Maternidade São Cristóvão fica localizado na Rua Américo Ventura, 123, no tradicional bairro da Mooca, na Zona Leste de São Paulo.'
      },
      {
        question: 'Posso incluir meus pais ou filhos no mesmo plano?',
        answer: 'Sim, você pode contratar um plano familiar incluindo cônjuge, filhos e dependentes diretos com cobrança unificada.'
      },
      {
        question: 'Como funciona a carência de urgência no São Cristóvão?',
        answer: 'Atendimentos de urgência e emergência no pronto-socorro são liberados nas primeiras 24 horas após a vigência do contrato. As demais carências seguem a tabela oficial da operadora enviada na cotação.'
      }
    ]
  },
  {
    slug: 'trasmontano',
    name: 'Trasmontano Saúde',
    categoryTitle: 'Trasmontano Saúde em São Paulo: planos, rede e como contratar',
    badge: 'Aceita contratação no CPF',
    shortDescription: 'Operadora centenária com ampla rede de centros médicos próprios espalhados pela capital paulista, litoral e hospitais como o IGESP na Bela Vista.',
    acceptsIndividualCpf: true,
    acceptsAdesao: true,
    acceptsPme: true,
    idealProfile: 'Pessoas e famílias de todas as faixas etárias que desejam atendimento em policlínicas próprias na capital e hospital de referência no Centro/Paulista.',
    notIdealProfile: 'Quem busca planos com reembolso livre para médicos não credenciados ou atendimento de rotina fora de São Paulo e litoral paulista.',
    coverageRegionSP: 'Capital de São Paulo (Zona Leste, Centro, Zona Norte, Zona Sul), Grande ABC e Baixada Santista.',
    ownUnitsAndHospitals: [
      'Hospital IGESP (Rua Silvia, Bela Vista / Região da Paulista)',
      'Centros Médicos Próprios na Penha, Tatuapé e São Miguel Paulista',
      'Centro Médico Santana (Zona Norte) e Santo Amaro (Zona Sul)',
      'Centro Médico São Bernardo do Campo e Santos'
    ],
    keyAccreditedHospitals: [
      'Hospital Presidente (Zona Norte)',
      'Hospital e Maternidade Master Clin',
      'Hospital São Lucas'
    ],
    differentials: [
      'Linha individual e familiar para crianças, adultos e faixa 50+ no CPF',
      'Hospital IGESP no coração de São Paulo com tecnologia cirúrgica de ponta',
      'Centros médicos com diversas especialidades e exames no mesmo local',
      'Opções de enfermaria e apartamento com preços competitivos'
    ],
    howToQuote: 'Informe as idades pelo WhatsApp para receber a tabela completa da Trasmontano, com a lista de centros médicos mais próximos do seu endereço em São Paulo.',
    faq: [
      {
        question: 'A Trasmontano aceita contrato individual?',
        answer: 'Sim, a Trasmontano Saúde comercializa planos individuais e familiares para quem não tem empresa, tanto para crianças quanto adultos e terceira idade.'
      },
      {
        question: 'Qual o hospital de referência da Trasmontano em SP?',
        answer: 'O Hospital IGESP, localizado na Bela Vista próximo à Avenida Paulista, é a principal referência hospitalar da rede própria da Trasmontano.'
      },
      {
        question: 'Tem unidades da Trasmontano na Zona Leste?',
        answer: 'Sim, há centros médicos próprios na Penha, Tatuapé e São Miguel Paulista, além de unidades na Zona Norte, Sul e Centro.'
      },
      {
        question: 'Como é feito o pagamento da mensalidade?',
        answer: 'O pagamento é feito por boleto bancário mensal emitido diretamente pela operadora Trasmontano Saúde.'
      }
    ]
  },
  {
    slug: 'prevent-senior',
    name: 'Prevent Senior',
    categoryTitle: 'Prevent Senior em São Paulo: planos, rede e como contratar',
    badge: 'Especialista 50+ no CPF',
    shortDescription: 'Operadora de saúde focada no público adulto e sênior na capital paulista, com ampla rede própria de hospitais Sancta Maggiore e núcleos especializados.',
    acceptsIndividualCpf: true,
    acceptsAdesao: false,
    acceptsPme: true,
    idealProfile: 'Adultos a partir de 40/50 anos e idosos que buscam medicina preventiva integrada e atendimento hospitalar próprio em São Paulo.',
    notIdealProfile: 'Jovens ou famílias com crianças pequenas buscando planos pediátricos tradicionais de baixo custo.',
    coverageRegionSP: 'Toda a capital de São Paulo com forte presença em Pinheiros, Itaim Bibi, Mooca, Paraíso, Santa Cecília e Santana.',
    ownUnitsAndHospitals: [
      'Hospital Sancta Maggiore Mooca',
      'Hospital Sancta Maggiore Pinheiros',
      'Hospital Sancta Maggiore Itaim Bibi',
      'Hospital Sancta Maggiore Paraíso',
      'Hospital Sancta Maggiore Santa Cecília',
      'Núcleos de Medicina Avançada e Diagnóstica'
    ],
    keyAccreditedHospitals: [
      'Rede hospitalar própria exclusiva Sancta Maggiore em São Paulo'
    ],
    differentials: [
      'Contratação individual no CPF sem carência para reajustes abusivos por faixa avançada',
      'Médicos de família e acompanhamento geriátrico contínuo',
      'Rede hospitalar moderna e dedicada exclusivamente aos seus beneficiários',
      'Oficinas de bem-estar, reabilitação e acompanhamento crônico'
    ],
    howToQuote: 'Envie as idades dos beneficiários no WhatsApp para receber a tabela oficial da Prevent Senior para São Paulo.',
    faq: [
      {
        question: 'A Prevent Senior só aceita pessoas idosas?',
        answer: 'Não, adultos de qualquer idade podem contratar, embora o foco principal e a estrutura médica sejam desenhados para o público acima de 50 anos.'
      },
      {
        question: 'Precisa ter MEI para contratar Prevent Senior?',
        answer: 'Não, a Prevent Senior vende diretamente no CPF como plano individual para pessoas físicas em São Paulo.'
      },
      {
        question: 'Como funciona a declaração de saúde na Prevent Senior?',
        answer: 'O proponente realiza o preenchimento da declaração de saúde com entrevista médica orientada para mapeamento dos cuidados necessários.'
      },
      {
        question: 'Quais os principais hospitais da Prevent Senior?',
        answer: 'Os hospitais da rede própria Sancta Maggiore (Pinheiros, Mooca, Itaim Bibi, Paraíso, Santa Cecília e Santana).'
      }
    ]
  },
  {
    slug: 'hapvida-notredame',
    name: 'HapVida Notredame',
    categoryTitle: 'HapVida Notredame em São Paulo: planos, rede e como contratar',
    badge: 'Individual, Adesão e PME',
    shortDescription: 'Um dos maiores grupos de saúde suplementar do Brasil, com hospitais de grande porte como o Salvalus na Zona Leste e dezenas de centros clínicos em SP.',
    acceptsIndividualCpf: true,
    acceptsAdesao: true,
    acceptsPme: true,
    idealProfile: 'Quem busca planos com ampla rede própria de centros clínicos e prontos-socorros em todas as regiões de São Paulo com mensalidades acessíveis.',
    notIdealProfile: 'Quem exige hospitais de altíssimo custo fora da rede própria ou prefere atendimento exclusivo em consultórios particulares com reembolso.',
    coverageRegionSP: 'São Paulo capital (Zona Leste, Centro, Zona Norte, Zona Sul, Zona Oeste) e toda a Grande São Paulo.',
    ownUnitsAndHospitals: [
      'Hospital e Maternidade Salvalus (Belenzinho / Brás - Zona Leste)',
      'Hospital Modelo (Zona Oeste / Centro)',
      'Hospital e Maternidade Guarulhos',
      'Centros Clínicos Notredame Intermédica em toda SP'
    ],
    keyAccreditedHospitals: [
      'Hospital Bosque da Saúde',
      'Hospital e Maternidade Cruz Azul (Cambuci)',
      'Hospital Presidente'
    ],
    differentials: [
      'Opções de contratação individual, por adesão profissional e a partir de 2 vidas via MEI/PME',
      'Centros de medicina preventiva (Qualivida) com acompanhamento de doenças crônicas',
      'Hospital Salvalus com centro cirúrgico de alta complexidade na Zona Leste',
      'Opções com coparticipação inteligente para reduzir a mensalidade fixa'
    ],
    howToQuote: 'Mande sua idade e profissão pelo WhatsApp. Verificamos se você tem acesso via adesão com desconto ou contratação direta.',
    faq: [
      {
        question: 'A HapVida Notredame vende para quem só tem CPF?',
        answer: 'Sim, a contratação para pessoa física pode ser feita via planos individuais específicos ou por meio de adesão através de conselhos e entidades de classe.'
      },
      {
        question: 'Onde fica o Hospital Salvalus em São Paulo?',
        answer: 'O Hospital Salvalus fica na Rua Bresser, na região do Brás/Belenzinho, com fácil acesso pela Linha Vermelha do Metrô e Zona Leste.'
      },
      {
        question: 'Tem plano com coparticipação?',
        answer: 'Sim, a operadora oferece opções com coparticipação (onde a mensalidade fixa fica menor) e planos sem coparticipação.'
      },
      {
        question: 'Como faço para incluir dependentes?',
        answer: 'Basta apresentar certidão de casamento/declaração de união estável para cônjuge e certidão de nascimento/RG para os filhos.'
      }
    ]
  },
  {
    slug: 'alice-saude',
    name: 'Alice Saúde',
    categoryTitle: 'Alice Saúde em São Paulo: planos, rede e como contratar',
    badge: 'Adesão e PME com Hospitais de Ponta',
    shortDescription: 'Gestora de saúde que combina tecnologia, Time de Saúde dedicado (médicos e enfermeiros 24/7) e hospitais de primeira linha como Einstein e Oswaldo Cruz.',
    acceptsIndividualCpf: false,
    acceptsAdesao: true,
    acceptsPme: true,
    idealProfile: 'Profissionais liberais, autônomos com entidade de classe, famílias e pequenas empresas que valorizam atendimento humanizado e hospitais de excelência em SP.',
    notIdealProfile: 'Quem busca planos hospitalares populares de entrada ou não tem nenhum vínculo profissional elegível para adesão nem CNPJ.',
    coverageRegionSP: 'Capital de São Paulo com cobertura nos principais polos médicos: Paulista, Jardins, Pinheiros, Morumbi e Itaim.',
    ownUnitsAndHospitals: [
      'Casa Alice (Espaço presencial para consultas e acolhimento em Pinheiros)',
      'Time de Saúde Digital 24h via aplicativo integrado'
    ],
    keyAccreditedHospitals: [
      'Hospital Israelita Albert Einstein (Morumbi e unidades)',
      'Hospital Alemão Oswaldo Cruz (Paraíso)',
      'Hospital Infantil Sabará (Higienópolis)',
      'Hospital Santa Catarina (Avenida Paulista)',
      'Laboratórios Fleury e Delboni Auriemo'
    ],
    differentials: [
      'Time de Saúde exclusivo que cuida do seu histórico e coordena especialistas',
      'Acesso aos melhores hospitais e laboratórios diagnósticos de São Paulo',
      'Contratação por adesão para diversas categorias profissionais ou MEI/PME',
      'App premiado com agendamento direto e telemedicina instantânea'
    ],
    howToQuote: 'Envie sua formação ou ocupação no WhatsApp para checarmos em qual entidade por adesão você se enquadra na Alice.',
    faq: [
      {
        question: 'Consigo contratar Alice sem empresa?',
        answer: 'Sim, através de planos coletivos por adesão vinculados à sua profissão, conselho de classe ou associação profissional.'
      },
      {
        question: 'Quais hospitais a Alice cobre em São Paulo?',
        answer: 'A depender do plano escolhido, a rede inclui Hospital Albert Einstein, Oswaldo Cruz, Sabará Infantil, Santa Catarina e Leforte.'
      },
      {
        question: 'O que é o Time de Saúde da Alice?',
        answer: 'É uma equipe formada por médicos de família e enfermeiros dedicados que acompanham você o ano todo, não apenas quando você fica doente.'
      },
      {
        question: 'Como funciona a cotação da Alice?',
        answer: 'A gente analisa sua idade e profissão, puxa a tabela vigente e envia a comparação detalhada no WhatsApp.'
      }
    ]
  },
  {
    slug: 'medsenior',
    name: 'MedSênior Saúde',
    categoryTitle: 'MedSênior Saúde em São Paulo: planos, rede e como contratar',
    badge: 'Especialista 49+ no CPF',
    shortDescription: 'Operadora especializada na terceira idade e medicina preventiva, com foco no envelhecimento saudável e plano individual contratado diretamente no CPF.',
    acceptsIndividualCpf: true,
    acceptsAdesao: false,
    acceptsPme: true,
    idealProfile: 'Pessoas com 49 anos ou mais que buscam acompanhamento preventivo, núcleos de oficinas de saúde e atendimento focado na longevidade.',
    notIdealProfile: 'Pessoas abaixo de 49 anos ou famílias com dependentes jovens.',
    coverageRegionSP: 'Capital de São Paulo com unidades em regiões estratégicas (Bela Vista, Jardim Paulista e centros médicos credenciados).',
    ownUnitsAndHospitals: [
      'Centro de Prevenção e Longevidade MedSênior (Bela Vista / Paulista)',
      'Oficinas de Saúde e Reabilitação Cognitiva'
    ],
    keyAccreditedHospitals: [
      'Hospital Santa Paula',
      'Hospital Metropolitano',
      'Hospital Villa-Lobos (Mooca / Zona Leste)',
      'Hospital São Lucas'
    ],
    differentials: [
      'Planos individuais sem coparticipação para consultas e exames preventivos',
      'Oficinas gratuitas de nutrição, memória, movimento e artes',
      'Médicos especialistas em geriatria e saúde integrativa',
      'Contratação direta no CPF com suporte do corretor oficial'
    ],
    howToQuote: 'Envie a idade do titular no WhatsApp. Enviamos a tabela da MedSênior com a lista de hospitais credenciados em São Paulo.',
    faq: [
      {
        question: 'Qual a idade mínima para contratar a MedSênior?',
        answer: 'A MedSênior aceita beneficiários a partir dos 49 anos de idade.'
      },
      {
        question: 'Precisa de CNPJ para contratar MedSênior?',
        answer: 'Não, a MedSênior possui modalidade individual contratada diretamente com o CPF do titular.'
      },
      {
        question: 'A MedSênior tem carência?',
        answer: 'Sim, como todo plano de saúde, há tabela de carências para consultas, exames e procedimentos que a gente envia detalhada antes da assinatura.'
      },
      {
        question: 'Onde ficam os centros de atendimento em São Paulo?',
        answer: 'A MedSênior conta com unidades na região central e Paulista, além de rede hospitalar credenciada nas zonas leste, sul, oeste e norte.'
      }
    ]
  },
  {
    slug: 'seguros-unimed',
    name: 'Seguros Unimed',
    categoryTitle: 'Seguros Unimed em São Paulo: planos, rede e como contratar',
    badge: 'Adesão e PME de Alta Qualidade',
    shortDescription: 'Uma das seguradoras de saúde mais conceituadas do país, com ampla rede credenciada em São Paulo, opções com reembolso e solidez cooperativa.',
    acceptsIndividualCpf: false,
    acceptsAdesao: true,
    acceptsPme: true,
    idealProfile: 'Quem busca planos com flexibilidade de reembolso, cobertura em hospitais renomados de São Paulo e contratação via entidade profissional ou empresa.',
    notIdealProfile: 'Quem busca planos individuais populares com valor reduzido ou quem não tem vínculo com sindicato/associação nem CNPJ.',
    coverageRegionSP: 'Toda a capital paulista, Grande São Paulo e abrangência nacional.',
    ownUnitsAndHospitals: [
      'Rede Referenciada Nacional do Sistema Unimed'
    ],
    keyAccreditedHospitals: [
      'Hospital Sírio-Libanês',
      'Hospital Alemão Oswaldo Cruz',
      'Hospital Samaritano (Higienópolis e Paulista)',
      'Hospital Santa Isabel',
      'Hospital Santa Catarina'
    ],
    differentials: [
      'Seguradora de saúde com solidez e nota máxima nos índices de atendimento',
      'Opções com reembolso para consultas particulares fora da rede',
      'Ampla contratação coletiva por adesão para diversas formações universitárias',
      'Telemedicina 24 horas e programa de assistência viagem'
    ],
    howToQuote: 'Informe sua ocupação ou o CNPJ no WhatsApp para receber o comparativo com a tabela de reembolso da Seguros Unimed.',
    faq: [
      {
        question: 'Seguros Unimed é o mesmo que Unimed Nacional?',
        answer: 'A Seguros Unimed é a seguradora do grupo Unimed, oferecendo planos com características de seguro-saúde, incluindo regras estruturadas de reembolso.'
      },
      {
        question: 'Consigo contratar no CPF?',
        answer: 'A contratação no CPF é feita pela modalidade coletiva por adesão através de entidades de classe, associações e conselhos profissionais.'
      },
      {
        question: 'Como funciona o reembolso?',
        answer: 'Caso você consulte um médico de sua confiança fora da rede credenciada, você envia o recibo pelo app da seguradora e recebe o valor conforme a tabela do seu plano.'
      },
      {
        question: 'Quais os hospitais credenciados em SP?',
        answer: 'A rede inclui os melhores hospitais de São Paulo, como Oswaldo Cruz, Samaritano, Santa Isabel, São Camilo e Santa Catarina.'
      }
    ]
  },
  {
    slug: 'unihosp',
    name: 'UniHosp Saúde',
    categoryTitle: 'UniHosp Saúde em São Paulo: planos, rede e como contratar',
    badge: 'Individual e Familiar Econômico',
    shortDescription: 'Operadora focada em planos de saúde de valor acessível para famílias e pessoas físicas em São Paulo capital e Grande ABC.',
    acceptsIndividualCpf: true,
    acceptsAdesao: true,
    acceptsPme: true,
    idealProfile: 'Quem quer sair do SUS, mora em São Paulo ou Grande ABC e precisa de uma mensalidade que caiba no orçamento mensal contratando no CPF.',
    notIdealProfile: 'Quem necessita de atendimento médico fora de SP ou em hospitais de luxo da capital.',
    coverageRegionSP: 'São Paulo (Zona Leste, Centro, Zona Sul) e Grande ABC (Santo André, São Bernardo, São Caetano, Diadema e Mauá).',
    ownUnitsAndHospitals: [
      'Centros Médicos Próprios UniHosp no ABC e Capital',
      'Unidade Diagnóstica UniHosp'
    ],
    keyAccreditedHospitals: [
      'Hospital e Maternidade Bartira (Santo André)',
      'Hospital Ribeirão Pires',
      'Hospital São Lucas',
      'Hospital Day Penha'
    ],
    differentials: [
      'Contratação individual e familiar diretamente no CPF com valores acessíveis',
      'Foco no atendimento humanizado em consultas básicas e exames essenciais',
      'Rede de pronto-atendimento ágil no ABC e Zona Leste',
      'Sem exigência de MEI ou comprovação de faturamento'
    ],
    howToQuote: 'Envie as idades no WhatsApp para receber a tabela de valores da UniHosp Saúde.',
    faq: [
      {
        question: 'A UniHosp aceita crianças e idosos?',
        answer: 'Sim, a UniHosp comercializa planos para todas as faixas etárias na modalidade individual e familiar.'
      },
      {
        question: 'Qual a principal região de cobertura da UniHosp?',
        answer: 'A maior concentração da rede está no Grande ABC e nas Zonas Leste e Sul de São Paulo.'
      },
      {
        question: 'Preciso ter nome limpo para contratar?',
        answer: 'A contratação de plano de saúde não exige consulta restritiva de crédito para a aprovação da proposta.'
      },
      {
        question: 'Como funciona a inclusão familiar?',
        answer: 'Você pode colocar dependentes diretos no mesmo contrato, com soma das mensalidades por idade.'
      }
    ]
  },
  {
    slug: 'plena-saude',
    name: 'Plena Saúde',
    categoryTitle: 'Plena Saúde em São Paulo: planos, rede e como contratar',
    badge: 'Individual na Zona Norte e Oeste',
    shortDescription: 'Operadora com rede hospitalar própria Previna na Zona Norte, Oeste e Franco da Rocha, com planos individuais de ótimo custo-benefício.',
    acceptsIndividualCpf: true,
    acceptsAdesao: true,
    acceptsPme: true,
    idealProfile: 'Moradores da Zona Norte de SP (Freguesia do Ó, Taipas, Pirituba), Zona Oeste (Lapa, Osasco) e região de Franco da Rocha/Caieiras.',
    notIdealProfile: 'Moradores da Zona Leste profunda ou Zona Sul que precisem de hospitais próximos à sua residência.',
    coverageRegionSP: 'Zona Norte, Zona Oeste de São Paulo, Osasco, Franco da Rocha, Caieiras e Mairiporã.',
    ownUnitsAndHospitals: [
      'Hospital Previna Taipas (Zona Norte)',
      'Hospital Previna Franco da Rocha',
      'Centros Médicos Plena Saúde na Lapa, Osasco, Santana e Pirituba'
    ],
    keyAccreditedHospitals: [
      'Hospital Metropolitano Lapa',
      'Hospital Presidente (Santana)'
    ],
    differentials: [
      'Contratação individual e familiar com CPF',
      'Hospitais próprios de pronto-socorro e internação na Zona Norte e Franco da Rocha',
      'Planos com valores de tabela enxutos para famílias da região norte/oeste',
      'Ambulatórios próprios com diversas especialidades médicas'
    ],
    howToQuote: 'Mande sua idade e bairro de São Paulo pelo WhatsApp para receber a tabela oficial da Plena Saúde.',
    faq: [
      {
        question: 'A Plena Saúde vende plano individual?',
        answer: 'Sim, você pode contratar diretamente no CPF sem necessidade de empresa ou MEI.'
      },
      {
        question: 'Onde fica o Hospital Previna?',
        answer: 'O Hospital Previna possui unidade de destaque em Taipas (Zona Norte de São Paulo) e unidade em Franco da Rocha.'
      },
      {
        question: 'A Plena atende na Lapa?',
        answer: 'Sim, a Plena Saúde conta com centro médico próprio na região da Lapa e parcerias hospitalares.'
      },
      {
        question: 'Como peço a cotação?',
        answer: 'Basta enviar uma mensagem no WhatsApp informando quantas pessoas entrarão no plano e suas respectivas idades.'
      }
    ]
  },
  {
    slug: 'blue-med',
    name: 'Blue Med Saúde',
    categoryTitle: 'Blue Med Saúde em São Paulo: planos, rede e como contratar',
    badge: 'Individual e Regional',
    shortDescription: 'Operadora em expansão em São Paulo e Baixada Santista, com rede credenciada de hospitais e clínicas com foco em preço justo.',
    acceptsIndividualCpf: true,
    acceptsAdesao: true,
    acceptsPme: true,
    idealProfile: 'Quem busca planos com mensalidade mais econômica na capital ou tem rotina entre São Paulo e a Baixada Santista.',
    notIdealProfile: 'Quem procura planos de altíssimo padrão com hospitais como Einstein ou Sírio-Libanês.',
    coverageRegionSP: 'São Paulo capital, Grande ABC, Guarulhos e Baixada Santista (Santos, Praia Grande, São Vicente).',
    ownUnitsAndHospitals: [
      'Espaços de Atendimento Blue Med na Capital e Baixada'
    ],
    keyAccreditedHospitals: [
      'Hospital Master Clin',
      'Hospital e Maternidade Guarulhos',
      'Hospital Frei Galvão (Santos)'
    ],
    differentials: [
      'Aceita contratação de pessoa física no CPF',
      'Opções de planos regionais com foco em economia de custos',
      'Atendimento na capital e nas cidades do litoral paulista',
      'Processo de contratação 100% digital e rápido'
    ],
    howToQuote: 'Envie as idades no WhatsApp para receber a tabela comparativa da Blue Med Saúde.',
    faq: [
      {
        question: 'A Blue Med vende para quem só tem CPF?',
        answer: 'Sim, a Blue Med disponibiliza modalidades de planos individuais e familiares para contratação com CPF.'
      },
      {
        question: 'O plano atende no litoral?',
        answer: 'Sim, a Blue Med tem forte presença na Baixada Santista (Santos, Praia Grande, São Vicente, Cubatão).'
      },
      {
        question: 'Como funciona a declaração de saúde?',
        answer: 'É feita digitalmente no momento da proposta, onde você declara seus antecedentes de saúde com tranquilidade.'
      },
      {
        question: 'Quanto tempo demora para a carteirinha ficar pronta?',
        answer: 'Após a aprovação da proposta pela operadora, a carteirinha digital fica disponível no aplicativo em poucos dias úteis.'
      }
    ]
  },
  {
    slug: 'amil',
    name: 'Amil',
    categoryTitle: 'Amil em São Paulo: planos, rede e como contratar',
    badge: 'Adesão e PME com Ampla Rede',
    shortDescription: 'Uma das marcas mais reconhecidas do país, com linhas Amil Fácil (regional SP) até planos nacionais com hospitais renomados.',
    acceptsIndividualCpf: false,
    acceptsAdesao: true,
    acceptsPme: true,
    idealProfile: 'Quem busca contratação por adesão profissional ou a partir de 2 vidas no MEI/empresa com acesso a grandes hospitais de São Paulo.',
    notIdealProfile: 'Quem não possui nenhum vínculo profissional elegível para adesão nem CNPJ ativo.',
    coverageRegionSP: 'Toda a cidade de São Paulo, Grande SP, interior e cobertura nacional nas linhas intermediárias e avançadas.',
    ownUnitsAndHospitals: [
      'Amil Espaço Saúde (Unidades de Atenção Primária em SP)',
      'Hospital Paulistano (Bela Vista)',
      'Hospital Metropolitano (Lapa)'
    ],
    keyAccreditedHospitals: [
      'Hospital Samaritano',
      'Hospital Santa Catarina',
      'Hospital Vitória Anália Franco (Zona Leste)',
      'Hospital Leforte',
      'Hospital Santa Joana e Pro Matre Paulista'
    ],
    differentials: [
      'Linha Amil Fácil com foco em custo-benefício em São Paulo e região metropolitana',
      'Linhas Amil Saúde e Amil One com hospitais de referência e reembolso',
      'Ampla aceitação por adesão para engenheiros, advogados, administradores, estudantes e diversas outras categorias',
      'Telemedicina Amil com atendimento com médicos do Einstein'
    ],
    howToQuote: 'Envie sua profissão e idade no WhatsApp para localizarmos a melhor tabela de adesão da Amil para o seu perfil.',
    faq: [
      {
        question: 'A Amil vende plano individual no CPF diretamente?',
        answer: 'A Amil comercializa seus planos para pessoa física por meio de entidades de classe coletivas por adesão ou através de CNPJ/MEI a partir de 2 vidas.'
      },
      {
        question: 'O que é a linha Amil Fácil?',
        answer: 'É a linha de planos com abrangência em São Paulo e cidades vizinhas, oferecendo rede qualificada com mensalidade mais acessível.'
      },
      {
        question: 'Como saber se tenho direito ao plano por adesão da Amil?',
        answer: 'Basta informar ao corretor qual é a sua profissão ou formação superior para consultarmos as entidades parceiras (como Qualicorp, Elo, Affinity).'
      },
      {
        question: 'A Amil atende na Zona Leste de SP?',
        answer: 'Sim, conta com hospitais de referência como o Hospital Vitória no Jardim Anália Franco, Hospital Santa Virgínia e laboratórios credenciados.'
      }
    ]
  },
  {
    slug: 'sulamerica',
    name: 'SulAmérica Saúde',
    categoryTitle: 'SulAmérica Saúde em São Paulo: planos, rede e como contratar',
    badge: 'Adesão e PME Premium',
    shortDescription: 'Seguro-saúde tradicional com rede referenciada dos hospitais mais prestigiados de São Paulo, reembolso ágil e excelência em atendimento.',
    acceptsIndividualCpf: false,
    acceptsAdesao: true,
    acceptsPme: true,
    idealProfile: 'Quem busca hospitais de primeiro nível em São Paulo (Sírio-Libanês, Einstein, Oswaldo Cruz, HCor) e flexibilidade de reembolso contratando via adesão ou PME.',
    notIdealProfile: 'Quem procura planos básicos de entrada com foco exclusivamente no menor preço mensal.',
    coverageRegionSP: 'São Paulo capital, Grande São Paulo e atendimento em todo o território nacional.',
    ownUnitsAndHospitals: [
      'Rede de Gestão de Saúde e Telemedicina SulAmérica Direta'
    ],
    keyAccreditedHospitals: [
      'Hospital Sírio-Libanês (Bela Vista e Itaim)',
      'Hospital Israelita Albert Einstein (Morumbi)',
      'Hospital Alemão Oswaldo Cruz',
      'Hospital do Coração (HCor)',
      'Hospital Nove de Julho',
      'Hospital São Luiz (Itaim, Morumbi, Anália Franco)'
    ],
    differentials: [
      'Seguro-saúde de alta reputação no mercado brasileiro',
      'Reembolso rápido com envio de comprovantes 100% pelo aplicativo',
      'Opções de contratação por adesão para dezenas de associações e sindicatos',
      'Assistência viagem nacional e internacional nas categorias superiores'
    ],
    howToQuote: 'Envie sua formação profissional no WhatsApp para receber o estudo comparativo com a tabela de reembolso da SulAmérica.',
    faq: [
      {
        question: 'Consigo contratar SulAmérica como pessoa física?',
        answer: 'Sim, através dos planos coletivos por adesão vinculados à sua categoria profissional ou conselho de classe.'
      },
      {
        question: 'Como funciona o reembolso da SulAmérica?',
        answer: 'Você realiza consultas com seus médicos particulares, solicita a nota fiscal/recibo e faz a solicitação de reembolso no app com pagamento direto na sua conta.'
      },
      {
        question: 'Quais hospitais da Zona Leste atendem SulAmérica?',
        answer: 'Hospitais como Hospital São Luiz Anália Franco, Hospital Santa Virgínia e Hospital Villa-Lobos.'
      },
      {
        question: 'A partir de quantas pessoas posso contratar com CNPJ?',
        answer: 'A partir de 2 vidas (sócios, funcionários ou dependentes diretos) via contratação PME.'
      }
    ]
  },
  {
    slug: 'bradesco-saude',
    name: 'Bradesco Saúde',
    categoryTitle: 'Bradesco Saúde em São Paulo: planos, rede e como contratar',
    badge: 'Líder Corporativo e Adesão',
    shortDescription: 'Uma das maiores seguradoras de saúde da América Latina, sinônimo de aceitação médica em São Paulo e cobertura completa em todo o país.',
    acceptsIndividualCpf: false,
    acceptsAdesao: true,
    acceptsPme: true,
    idealProfile: 'Empresários, profissionais liberais e famílias que exigem aceitação médica irrestrita, médicos renomados e os melhores hospitais de São Paulo.',
    notIdealProfile: 'Quem busca planos hospitalares individuais simples sem adesão a entidades de classe.',
    coverageRegionSP: 'Capital paulista completa e cobertura nacional em todas as regiões do Brasil.',
    ownUnitsAndHospitals: [
      'Clínicas Meu Doutor Bradesco Saúde em São Paulo'
    ],
    keyAccreditedHospitals: [
      'Hospital Israelita Albert Einstein',
      'Hospital Sírio-Libanês',
      'Hospital Alemão Oswaldo Cruz',
      'Hospital Beneficência Portuguesa (BP Mirante)',
      'Hospital e Maternidade Santa Joana',
      'Hospital São Camilo (Pompeia, Santana, Ipiranga)'
    ],
    differentials: [
      'A maior aceitação entre médicos especialistas e clínicas renomadas de São Paulo',
      'Clínicas Meu Doutor com agendamento rápido sem coparticipação para prevenção',
      'Tabelas de reembolso estruturadas para consultas particulares fora da rede',
      'Contratação por adesão para inúmeras entidades profissionais e sindicais'
    ],
    howToQuote: 'Envie seu CNPJ ou profissão no WhatsApp para receber a cotação oficial da Bradesco Saúde com a lista de hospitais.',
    faq: [
      {
        question: 'Quem não tem empresa consegue contratar Bradesco Saúde?',
        answer: 'Consegue por meio de planos coletivos por adesão vinculados à sua formação superior, profissão regulamentada ou entidade de classe.'
      },
      {
        question: 'O Bradesco Saúde é aceito no Hospital Albert Einstein?',
        answer: 'Sim, as categorias intermediárias e superiores (como Nacional Plus e Premium) oferecem atendimento completo no Hospital Albert Einstein e Sírio-Libanês.'
      },
      {
        question: 'Como funciona a inclusão no plano empresarial Bradesco?',
        answer: 'A contratação empresarial PME aceita a partir de 2 ou 3 vidas, incluindo titulares e seus dependentes legais (cônjuge e filhos).'
      },
      {
        question: 'O que são as clínicas Meu Doutor?',
        answer: 'São centros médicos exclusivos para clientes Bradesco Saúde focados em atendimento ágil com médicos de família, pediatras e cardiologistas.'
      }
    ]
  },
  {
    slug: 'porto-seguro',
    name: 'Porto Seguro Saúde',
    categoryTitle: 'Porto Seguro Saúde em São Paulo: planos, rede e como contratar',
    badge: 'Adesão e PME com Benefícios',
    shortDescription: 'Plano de saúde com foco no atendimento diferenciado em São Paulo, programas de prevenção e acesso a hospitais de alta qualidade.',
    acceptsIndividualCpf: false,
    acceptsAdesao: true,
    acceptsPme: true,
    idealProfile: 'Empresas, autônomos e famílias que buscam atendimento humanizado, boa rede em São Paulo e benefícios integrados do ecossistema Porto Seguro.',
    notIdealProfile: 'Quem busca planos individuais populares com contratação direta sem entidade de classe.',
    coverageRegionSP: 'São Paulo capital, Grande São Paulo, litoral e principais cidades do interior.',
    ownUnitsAndHospitals: [
      'Espaços de Saúde e Atendimento Porto Seguro'
    ],
    keyAccreditedHospitals: [
      'Hospital Alvorada (Moema)',
      'Hospital Leforte (Liberdade e Morumbi)',
      'Hospital Samaritano',
      'Hospital São Luiz',
      'Hospital Infantil Sabará'
    ],
    differentials: [
      'Atendimento reconhecido com nota de excelência nos canais de suporte ao cliente',
      'Opções de telemedicina do Einstein 24 horas via app',
      'Descontos e benefícios exclusivos em serviços e farmácias',
      'Contratação simplificada a partir de 2 vidas via MEI ou empresa'
    ],
    howToQuote: 'Mande sua idade e dados no WhatsApp para receber o comparativo com a tabela de valores da Porto Seguro Saúde.',
    faq: [
      {
        question: 'Posso contratar Porto Seguro Saúde pelo MEI?',
        answer: 'Sim, a Porto Seguro Saúde atende microempreendedores individuais a partir de 2 vidas com excelente tabela de preços.'
      },
      {
        question: 'Tem opção com coparticipação?',
        answer: 'Sim, você pode optar por planos com coparticipação para reduzir o custo da mensalidade fixa.'
      },
      {
        question: 'Quais hospitais infantis estão incluídos?',
        answer: 'A rede inclui referências pediátricas em São Paulo, como o Hospital Infantil Sabará e prontos-socorros pediátricos do Leforte e São Luiz.'
      },
      {
        question: 'Como funciona o envio de documentos?',
        answer: 'Todo o processo de contratação é feito de forma 100% digital, com envio seguro de documentos pelo WhatsApp e assinatura eletrônica.'
      }
    ]
  },
  {
    slug: 'unimed-nacional',
    name: 'Unimed Nacional',
    categoryTitle: 'Unimed Nacional em São Paulo: planos, rede e como contratar',
    badge: 'Adesão e PME Cooperativo',
    shortDescription: 'A operadora nacional do Sistema Unimed, com ampla cobertura em São Paulo através de renomados hospitais credenciados e cooperativas em todo o Brasil.',
    acceptsIndividualCpf: false,
    acceptsAdesao: true,
    acceptsPme: true,
    idealProfile: 'Quem viaja com frequência pelo Brasil e necessita de rede credenciada em São Paulo aliada a atendimento de urgência em qualquer estado.',
    notIdealProfile: 'Quem busca planos individuais estritamente locais no CPF com foco em baixíssimo custo.',
    coverageRegionSP: 'Capital de São Paulo completa, com hospitais em todas as zonas e abrangência nacional.',
    ownUnitsAndHospitals: [
      'Rede Nacional de Cooperativas Médicas Unimed'
    ],
    keyAccreditedHospitals: [
      'Hospital Santa Marcelina (Itaquera - Zona Leste)',
      'Hospital São Camilo (Santana e Pompeia)',
      'Hospital Santa Virgínia (Belenzinho)',
      'Hospital e Maternidade Sepaco (Vila Mariana)',
      'Hospital Beneficência Portuguesa'
    ],
    differentials: [
      'A maior rede de médicos cooperados do Brasil',
      'Cobertura de urgência e emergência em milhares de municípios brasileiros',
      'Planos por adesão com tabelas diferenciadas para entidades de classe',
      'Opções empresariais e PME com excelente equilíbrio entre custo e amplitude'
    ],
    howToQuote: 'Envie as idades no WhatsApp para puxarmos a tabela da Unimed Nacional aberta para a sua região.',
    faq: [
      {
        question: 'A Unimed Nacional atende na Zona Leste de SP?',
        answer: 'Sim, a rede inclui hospitais renomados como o Hospital Santa Marcelina em Itaquera, Hospital Santa Virgínia no Belenzinho e Hospital Ouro Verde.'
      },
      {
        question: 'Como contratar Unimed Nacional no CPF?',
        answer: 'A contratação de pessoa física é realizada pela modalidade coletiva por adesão através de sindicatos, conselhos ou associações profissionais.'
      },
      {
        question: 'O plano tem cobertura fora de São Paulo?',
        answer: 'Sim, os planos da Unimed Nacional possuem abrangência nacional para urgências, emergências e procedimentos eletivos conforme a categoria contratada.'
      },
      {
        question: 'Qual o prazo de análise da proposta?',
        answer: 'A proposta digital é analisada e emitida pela operadora em poucos dias úteis após a conferência dos documentos e declaração de saúde.'
      }
    ]
  }
];
