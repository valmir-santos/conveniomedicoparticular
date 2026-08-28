export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  targetKeyword: string;
  metaDescription: string;
  category: string;
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    susep: string;
    bio: string;
    profileUrl: string;
  };
  introAnswer: string;
  sections: {
    questionH2: string;
    directFirstSentence: string;
    content: string[];
  }[];
  concreteBlock: {
    type: 'table' | 'checklist' | 'steps';
    title: string;
    description: string;
    headers?: string[];
    rows?: string[][];
    items?: { title: string; desc: string; alert?: boolean }[];
    steps?: { step: number; title: string; detail: string }[];
  };
  keyTakeaways: string[];
  customWhatsappText: string;
  ctaTitle: string;
  ctaDescription: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'artigo-3-mei-risco',
    slug: 'abrir-mei-so-para-plano-de-saude-risco',
    title: 'Abri MEI só para pagar mais barato. Posso perder o plano?',
    subtitle: 'Entenda como funcionam as auditorias das operadoras de saúde em São Paulo e os riscos reais de manter um CNPJ sem atividade apenas para ter desconto no convênio.',
    targetKeyword: 'abrir MEI só para plano de saúde risco',
    metaDescription: 'Descubra se abrir MEI só para ter plano de saúde tem risco de cancelamento, como funcionam as auditorias das operadoras em São Paulo e quando o plano individual no CPF é mais seguro.',
    category: 'Casos Especiais & Riscos',
    publishDate: '2026-08-20',
    readTime: '7 min de leitura',
    author: {
      name: 'Andrea Correa Leite',
      role: 'Corretora Habilitada com Registro SUSEP',
      susep: '10.2000204.1',
      bio: 'Especialista em convênios médicos individuais, familiares e PME na capital de São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 10 anos. Atendimento técnico sem atalhos irregulares.',
      profileUrl: '/sobre'
    },
    introAnswer: 'Sim, você pode ter o convênio cancelado de forma unilateral se a operadora identificar que o seu CNPJ MEI foi criado apenas de fachada, está inativo na Receita Federal ou sem recolhimento regular das guias mensais. A contratação empresarial exige comprovação de atividade real e manutenção do CNPJ ativo durante toda a vigência do contrato.',
    sections: [
      {
        questionH2: 'Como a operadora descobre que o MEI não tem atividade comercial de verdade?',
        directFirstSentence: 'A operadora realiza auditorias periódicas automáticas cruzando a base de dados do CNPJ com a Receita Federal e a Junta Comercial de São Paulo.',
        content: [
          'Nos contratos de saúde corporativos para microempreendedores, as operadoras inserem no próprio formulário de adesão a obrigação de envio anual de documentos comprobatórios, como a declaração anual do MEI (DASN-SIMEI) e as guias DAS quitadas.',
          'Quando um cliente abre uma empresa apenas no papel para baratear a mensalidade e deixa de emitir notas ou de pagar a guia mensal do DAS, o CNPJ entra em situação irregular ou é suspenso. Na auditoria da operadora — que costuma ocorrer no mês de aniversário do contrato ou no momento de autorizar uma cirurgia de alto custo em hospitais —, essa inconsistência trava as autorizações.',
          'Se a empresa for declarada inapta ou baixada pelo governo por falta de movimentação, o cancelamento do contrato de saúde ocorre de imediato, deixando o titular e seus dependentes desassistidos.'
        ]
      },
      {
        questionH2: 'O que acontece com os dependentes e com as carências se o plano MEI for cancelado?',
        directFirstSentence: 'Se o plano for cancelado por irregularidade no CNPJ, você e seus dependentes perdem a cobertura hospitalar e todo o histórico de carências já cumprido na operadora.',
        content: [
          'Ao contrário do que muitos vendedores apressados dizem no WhatsApp, a perda de um plano empresarial por cancelamento cadastral não garante transferência automática para uma linha individual com carência zerada.',
          'Imagine uma família residente no Tatuapé ou em Santana com um filho em tratamento fonoaudiológico ou um idoso com cirurgia agendada no Hospital São Cristóvão ou na rede própria da Trasmontano: um cancelamento repentino por auditoria interrompe internações eletivas e exige iniciar uma nova contratação do zero.',
          'Por isso, quem não exerce atividade autônoma de verdade não deve se iludir com a falsa economia inicial de um CNPJ fictício.'
        ]
      },
      {
        questionH2: 'Quanto custa manter um MEI aberto exclusivamente para ter plano de saúde?',
        directFirstSentence: 'Manter um MEI custa o pagamento mensal obrigatório do tributo DAS e os custos de declaração anual, o que anula grande parte da economia da mensalidade.',
        content: [
          'Muitas pessoas olham apenas a diferença da tabela de preços entre o plano individual no CPF e o empresarial para 2 vidas. No entanto, o MEI gera uma despesa mensal fixa com a guia do DAS (INSS e tributos), que ultrapassa R$ 75 a R$ 80 todo mês, além do trabalho de entrega da declaração anual.',
          'Se você precisar do apoio de um contador para regularizar pendências ou emitir certidões negativas exigidas pela operadora, esse custo anual sobe ainda mais. Quando colocamos na ponta do lápis, a economia ilusória evapora e o risco de estresse com documentação aumenta.'
        ]
      },
      {
        questionH2: 'Quando contratar com MEI é uma boa escolha e quando é um erro perigoso?',
        directFirstSentence: 'Contratar pelo MEI é excelente para quem já trabalha formalmente como autônomo e tem mais de 6 meses de CNPJ ativo, mas é um erro perigoso para quem só quer comprar plano médico para si ou para a família.',
        content: [
          'Se você é prestador de serviços, comerciante, eletricista, designer ou consultor que emite notas fiscais, paga seu DAS em dia e possui o CNPJ aberto há pelo menos 6 meses, a linha empresarial PME é perfeita: ela oferece acesso a redes amplas e tabelas corporativas vantajosas.',
          'Porém, se você é trabalhador com carteira assinada, aposentado, estudante ou profissional liberal sem empresa, o caminho seguro e definitivo é o convênio no CPF. Você fica livre de auditorias fiscais corporativas e não corre o risco de ver seu atendimento suspenso por burocracia contábil.'
        ]
      },
      {
        questionH2: 'Como migrar com segurança para um plano individual no CPF sem ficar desprotegido?',
        directFirstSentence: 'O caminho correto é cotar as operadoras que mantêm contratação direta no CPF na cidade de São Paulo e solicitar a análise de aproveitamento do tempo cumprido no plano anterior.',
        content: [
          'A gente confere junto com você as regras de tempo de permanência do seu plano atual e verifica se a nova operadora escolhida na capital aceita a carta de permanência do seu convênio anterior.',
          'Assim, você formaliza a contratação diretamente no seu CPF, vinculando sua família a um contrato seguro e sem dependência de CNPJ de terceiros ou empresas inativas.'
        ]
      }
    ],
    concreteBlock: {
      type: 'table',
      title: 'Comparativo Prático: Plano no CPF vs. Plano Aberto com MEI Fictício',
      description: 'Veja os fatores de segurança, custos ocultos e estabilidade antes de tomar uma decisão para a sua família.',
      headers: ['Critério de Análise', 'Plano Individual no CPF', 'Plano MEI Criado Apenas para Desconto'],
      rows: [
        ['Vínculo Contratual', 'Direto com a sua pessoa física', 'Vinculado ao CNPJ da microempresa'],
        ['Risco de Auditoria Contábil', 'Zero. Não depende de situação fiscal de empresa', 'Alto. Operadoras conferem regularidade na Receita Federal'],
        ['Custos Fixos Paralelos', 'Apenas a mensalidade do convênio', 'Mensalidade + Guia mensal do DAS + Declaração anual'],
        ['Risco de Cancelamento Coletivo', 'Mínimo. Contrato individual tem proteção sólida', 'Elevado se o CNPJ ficar inativo ou com guias atrasadas'],
        ['Exigência de Tempo de Empresa', 'Nenhuma. Contratação imediata', 'Exige CNPJ ativo e regularizado há mais de 6 meses'],
        ['Perfil Recomendado', 'Famílias, autônomos sem CNPJ, aposentados, crianças', 'Quem já vive da sua microempresa e emite notas reais']
      ]
    },
    keyTakeaways: [
      'Nunca abra MEI fantasma apenas para comprar plano de saúde com desconto; o risco de cancelamento em auditoria é real.',
      'A contratação individual no CPF em São Paulo traz tranquilidade total contra descredenciamentos corporativos.',
      'Se você já tem uma empresa ativa e regularizada há mais de 6 meses, o plano empresarial MEI é uma opção legítima e vantajosa.',
      'Na nossa corretora, lemos as regras contratuais da operadora com você antes de qualquer assinatura.'
    ],
    customWhatsappText: 'Olá! Li o artigo sobre riscos do MEI para plano de saúde e quero uma cotação segura no CPF para mim e minha família em São Paulo.',
    ctaTitle: 'Quer cotar no CPF com total segurança e sem atalhos?',
    ctaDescription: 'Nós selecionamos as operadoras com venda ativa de plano individual em São Paulo e montamos o comparativo de hospitais da sua região.'
  },
  {
    id: 'artigo-5-operadoras-individual-sp',
    slug: 'quais-operadoras-ainda-vendem-plano-individual-sao-paulo',
    title: 'Quais operadoras ainda vendem plano individual em São Paulo?',
    subtitle: 'Mapeamento completo das opções ativas de convênio médico para contratação direta no CPF na capital paulista e Grande SP.',
    targetKeyword: 'operadoras plano individual São Paulo',
    metaDescription: 'Veja quais operadoras ainda vendem plano de saúde individual em São Paulo, quais hospitais atendem na capital e Zona Leste, e como contratar apenas com o CPF.',
    category: 'Guia de Operadoras',
    publishDate: '2026-08-22',
    readTime: '8 min de leitura',
    author: {
      name: 'Andrea Correa Leite',
      role: 'Corretora Habilitada com Registro SUSEP',
      susep: '10.2000204.1',
      bio: 'Especialista em convênios médicos individuais, familiares e PME na capital de São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 10 anos. Atendimento técnico sem atalhos irregulares.',
      profileUrl: '/sobre'
    },
    introAnswer: 'Em São Paulo, as principais operadoras com comercialização ativa de planos de saúde individuais e familiares no CPF são São Cristóvão Saúde, Trasmontano Saúde, Prevent Senior, MedSênior, UniHosp e Plena Saúde. Enquanto grandes seguradoras nacionais focam no mercado corporativo, essas operadoras regionais mantêm atendimento individual de excelência com forte rede própria de hospitais e centros de diagnóstico na capital.',
    sections: [
      {
        questionH2: 'Por que muitas operadoras deixaram de vender convênio individual na capital?',
        directFirstSentence: 'Muitas companhias optaram por focar em apólices corporativas para evitar os limites de reajuste e as regras contratuais mais rígidas dos planos de pessoa física.',
        content: [
          'Nos últimos anos, o mercado de saúde suplementar passou por uma concentração. As grandes seguradoras voltaram seus produtos quase que exclusivamente para o formato empresarial (com CNPJ) ou contratos coletivos por adesão vinculados a entidades associativas.',
          'No entanto, na praça de São Paulo, operadoras de medicina de grupo tradicionais investiram pesadamente em infraestrutura própria — com hospitais modernos, prontos-socorros 24 horas e centros de especialidades distribuídos pela Zona Leste, Zona Norte, Centro e Grande SP.',
          'Isso permitiu que elas mantivessem viva e competitiva a venda direta de planos individuais no CPF com excelente custo-benefício.'
        ]
      },
      {
        questionH2: 'Quais são as operadoras de plano individual com maior presença na Zona Leste e Centro?',
        directFirstSentence: 'A São Cristóvão Saúde e a Trasmontano Saúde são as principais referências de plano individual nas Zonas Leste, Centro e Sudeste da capital.',
        content: [
          'A São Cristóvão Saúde possui seu complexo hospitalar de excelência localizado na Mooca, além de unidades de atendimento ambulatorial em bairros como Penha, Tatuapé, Anália Franco e Vila Prudente. É a escolha preferida de milhares de famílias e moradores da região leste.',
          'A Trasmontano Saúde possui ampla rede própria com hospitais e centros médicos modernos espalhados pela capital (com destaque para o Hospital IGESP na região da Bela Vista/Centro) e unidades avançadas de diagnóstico.',
          'Ambas oferecem contratação direta para pessoa física, aceitando titulares individuais, crianças, jovens e famílias inteiras sem exigência de vínculo com pessoa jurídica.'
        ]
      },
      {
        questionH2: 'Quais opções atendem a terceira idade e o público sênior no CPF?',
        directFirstSentence: 'Prevent Senior e MedSênior são as operadoras especializadas no público 49+ e terceira idade com contratação direta individual na capital de São Paulo.',
        content: [
          'A Prevent Senior conta com a rede de hospitais e prontos-atendimentos Sancta Maggiore distribuídos em pontos estratégicos da capital paulista (Pinheiros, Itaim, Mooca, Paraíso, Santana), focando em medicina preventiva e acompanhamento contínuo de doenças crônicas.',
          'A MedSênior também atua com foco total na melhor idade, oferecendo oficinas de saúde, programas de longevidade e núcleos de atendimento preventivo próprios, sem coparticipação para consultas preventivas nos centros próprios.',
          'A contratação é realizada de forma individual no CPF, passando pela triagem de declaração de saúde padrão da operadora.'
        ]
      },
      {
        questionH2: 'Existem opções acessíveis com abrangência regional na Zona Norte, Oeste e ABC?',
        directFirstSentence: 'Sim, a Plena Saúde e a UniHosp oferecem planos individuais regionais com mensalidades acessíveis e foco em bairros específicos da Grande São Paulo.',
        content: [
          'A Plena Saúde conta com hospitais próprios e unidades de pronto-atendimento na Zona Norte, Zona Oeste e cidades vizinhas como Franco da Rocha, Caieiras e Osasco.',
          'Já a UniHosp concentra sua rede própria e credenciada na Zona Sul da capital e na região do Grande ABC (Santo André, São Bernardo do Campo, São Caetano do Sul e Diadema).',
          'A tabela da operadora define exatamente quais hospitais e laboratórios estão disponíveis em cada plano, e nossa equipe confere os pontos mais próximos da sua residência antes da contratação.'
        ]
      },
      {
        questionH2: 'O que avaliar entre rede própria e rede credenciada antes de escolher?',
        directFirstSentence: 'A rede própria oferece agilidade e estabilidade de atendimento no mesmo grupo, enquanto a rede credenciada oferece variedade de hospitais parceiros que podem ser alterados conforme regras do contrato.',
        content: [
          'Ao escolher um convênio individual em São Paulo, o fator mais importante é verificar onde fica o pronto-socorro mais próximo para urgências e quais laboratórios você utiliza no dia a dia (como Lavoisier, CDB, Delboni ou laboratórios próprios da operadora).',
          'Nós montamos a simulação comparativa colocando lado a lado os hospitais credenciados no seu bairro para que você decida com total clareza.'
        ]
      }
    ],
    concreteBlock: {
      type: 'table',
      title: 'Guia Rápido de Operadoras de Plano Individual em São Paulo (Contratação no CPF)',
      description: 'Mapeamento das principais redes e perfis de atendimento disponíveis na capital paulista.',
      headers: ['Operadora', 'Perfil Principal', 'Destaque de Rede em São Paulo', 'Tipo de Acomodação'],
      rows: [
        ['São Cristóvão Saúde', 'Individual & Familiar', 'Hospital São Cristóvão (Mooca), Centros em Tatuapé e Penha', 'Enfermaria ou Apartamento'],
        ['Trasmontano Saúde', 'Individual & Familiar', 'Hospital IGESP (Centro), rede de centros médicos próprios', 'Enfermaria ou Apartamento'],
        ['Prevent Senior', 'Público Adulto e Sênior', 'Rede Sancta Maggiore (Pinheiros, Mooca, Paraíso, Santana)', 'Enfermaria ou Apartamento'],
        ['MedSênior', 'Público 49+ e Terceira Idade', 'Centros de medicina preventiva próprios e hospitais parceiros', 'Enfermaria ou Apartamento'],
        ['Plena Saúde', 'Regional Acessível', 'Hospital Previna (Zona Norte/Oeste e região metropolitana)', 'Enfermaria ou Apartamento'],
        ['UniHosp Saúde', 'Regional Acessível', 'Rede própria e credenciada na Zona Sul e Grande ABC', 'Enfermaria ou Apartamento']
      ]
    },
    keyTakeaways: [
      'Sim, ainda existem excelentes opções de plano de saúde no CPF em São Paulo com hospitais de primeira linha.',
      'A rede própria das operadoras regionais garante atendimento estável e controle de qualidade nos exames e internações.',
      'Você não precisa abrir empresa nem pagar mensalidade de sindicato para ter um convênio médico de qualidade.',
      'Solicite uma cotação com a tabela vigente para comparar os hospitais atendidos no seu bairro.'
    ],
    customWhatsappText: 'Olá! Gostaria de receber o comparativo das operadoras de plano individual em São Paulo com a tabela de valores vigente.',
    ctaTitle: 'Quer comparar as operadoras ativas no seu bairro?',
    ctaDescription: 'Enviamos as tabelas completas da São Cristóvão, Trasmontano, Prevent Senior e outras opções direto no seu WhatsApp.'
  },
  {
    id: 'artigo-1-carencia-quanto-tempo',
    slug: 'carencia-plano-de-saude-quanto-tempo',
    title: 'Quanto tempo até eu poder usar o plano que acabei de contratar?',
    subtitle: 'Entenda como funcionam os prazos de carência na prática: urgência, consultas, exames simples, exames complexos, cirurgias e partos.',
    targetKeyword: 'carência plano de saúde quanto tempo',
    metaDescription: 'Saiba quanto tempo demora para usar o plano de saúde após contratar: prazos de carência para consultas, exames, internações, cirurgias e urgência em São Paulo.',
    category: 'Como Funciona na Prática',
    publishDate: '2026-08-25',
    readTime: '7 min de leitura',
    author: {
      name: 'Andrea Correa Leite',
      role: 'Corretora Habilitada com Registro SUSEP',
      susep: '10.2000204.1',
      bio: 'Especialista em convênios médicos individuais, familiares e PME na capital de São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 10 anos. Atendimento técnico sem atalhos irregulares.',
      profileUrl: '/sobre'
    },
    introAnswer: 'Na prática, você pode usar o plano para atendimentos de urgência e emergência 24 horas após a vigência do contrato. Para consultas de rotina e exames laboratoriais simples, o prazo habitual da tabela da operadora é de 30 dias; exames de alta complexidade e cirurgias eletivas levam em média 180 dias; e partos a termo têm prazo de 300 dias.',
    sections: [
      {
        questionH2: 'O que posso usar logo no primeiro mês após a contratação?',
        directFirstSentence: 'A partir de 24 horas você tem cobertura para casos de urgência com risco imediato, e após 30 dias pode agendar consultas médicas e exames laboratoriais básicos.',
        content: [
          'Assim que o contrato é implantado e a primeira mensalidade confirmada pela operadora, entra em vigor o prazo inicial de 24 horas para socorro emergencial em pronto-socorro credenciado.',
          'Completados os primeiros 30 dias, você já pode marcar consultas com médicos de todas as especialidades clínicas (cardiologista, ginecologista, pediatra, ortopedista) e realizar exames simples como hemograma, urina, fezes e radiografias simples.',
          'A tabela da operadora lista detalhadamente cada procedimento e a data exata de liberação no aplicativo do beneficiário.'
        ]
      },
      {
        questionH2: 'Qual é o prazo para exames complexos, ressonâncias e tomografias?',
        directFirstSentence: 'Para procedimentos de alta complexidade, o prazo padrão praticado no mercado é de 180 dias a contar da data de vigência do contrato.',
        content: [
          'Exames que exigem equipamentos sofisticados, contraste ou sedação — como ressonância magnética, tomografia computadorizada, endoscopia, colonoscopia e ultrassonografias com doppler — entram no grupo de exames especiais.',
          'Se você já vinha de outro plano de saúde e solicitou o aproveitamento do tempo cumprido (compra ou redução de carência), esses prazos podem ser encurtados significativamente na nova operadora.',
          'Nossa equipe avalia a sua documentação anterior antes de fechar o contrato para pleitear a redução de prazos junto à operadora escolhida.'
        ]
      },
      {
        questionH2: 'Como funciona o prazo para internações hospitalares e cirurgias eletivas?',
        directFirstSentence: 'Internações clínicas e cirurgias previamente programadas têm carência habitual de 180 dias após o início do plano.',
        content: [
          'Cirurgias eletivas são aquelas que não representam risco imediato de vida e podem ser agendadas com antecedência pelo cirurgião, como cirurgias ortopédicas de ligamento, retirada de vesícula, hérnias ou amígdalas.',
          'Durante os primeiros 6 meses de contrato, a internação para esses procedimentos só ocorre mediante autorização prévia após o cumprimento desse período contratual.',
          'Importante destacar que se a necessidade de internação decorrer de um acidente pessoal imprevisto ocorrido após as primeiras 24 horas de vigência, o atendimento hospitalar de urgência é garantido conforme o contrato.'
        ]
      },
      {
        questionH2: 'Quanto tempo antes preciso contratar se estiver planejando uma gravidez?',
        directFirstSentence: 'Para ter cobertura completa do parto a termo, a mulher deve contratar o plano com no mínimo 10 meses (300 dias) de antecedência.',
        content: [
          'O acompanhamento pré-natal — que inclui consultas com obstetra e exames de rotina da gestação — é liberado gradualmente nos prazos de consulta (30 dias) e exames (30 a 180 dias).',
          'No entanto, a internação hospitalar para o parto normal ou cesárea a termo exige o cumprimento do prazo integral de 300 dias estabelecido na proposta de adesão da operadora.',
          'Se a mulher já estiver grávida no momento da assinatura, o plano cobrirá todo o pré-natal e eventuais complicações emergenciais, mas o parto hospitalar a termo não estará coberto pelo plano caso ocorra antes do prazo contratual.'
        ]
      },
      {
        questionH2: 'É possível zerar ou reduzir as carências se eu já tiver um plano anterior?',
        directFirstSentence: 'Sim, você pode reduzir ou até zerar a maioria das carências apresentando a carta de permanência e os comprovantes de pagamento do seu convênio anterior.',
        content: [
          'Quando você já possui um plano ativo há mais de 12 ou 24 meses em uma operadora e decide mudar para outra em São Paulo, as operadoras oferecem tabelas promocionais de redução de carência.',
          'Para que isso funcione, é fundamental não cancelar o plano antigo antes da emissão e aceitação da proposta no novo convênio, além de emitir a carta de quitação e permanência emitida pela sua operadora atual.',
          'A gente confere esse documento com você antes de enviar a proposta para garantir que a redução seja validada formalmente na emissão da carteirinha.'
        ]
      }
    ],
    concreteBlock: {
      type: 'table',
      title: 'Tabela Prática de Prazos de Carência (Padrão de Mercado em São Paulo)',
      description: 'Resumo dos prazos habituais aplicados pelas operadoras para novos contratos individuais sem aproveitamento de carência anterior.',
      headers: ['Tipo de Procedimento / Atendimento', 'Prazo Habitual na Tabela da Operadora', 'Exemplos Práticos'],
      rows: [
        ['Urgência e Emergência com risco de vida', '24 horas', 'Pronto-socorro, acidentes pessoais, quadros agudos'],
        ['Consultas Médicas e Exames Básicos', '30 dias', 'Clínico geral, pediatria, ginecologia, exame de sangue, urina, raio-X'],
        ['Exames e Terapias Especiais', '180 dias', 'Ultrassom com doppler, tomografia, ressonância, fisioterapia, psicólogo'],
        ['Internações e Cirurgias Eletivas', '180 dias', 'Cirurgias programadas, internações clínicas, procedimentos de médio porte'],
        ['Parto a Termo (Cesárea ou Normal)', '300 dias (~10 meses)', 'Internação hospitalar para nascimento do bebê'],
        ['Tratamentos de Doenças Preexistentes Declaradas', '24 meses (cobertura parcial temporária)', 'Cirurgias de alta complexidade e leito de UTI vinculados diretamente à condição preexistente']
      ]
    },
    keyTakeaways: [
      'Urgências são atendidas após 24 horas de vigência do plano na operadora.',
      'Consultas e exames laboratoriais básicos são liberados em cerca de 30 dias.',
      'Planejamento de parto hospitalar exige contratação com antecedência mínima de 10 meses.',
      'Se você já tem convênio médico em outra empresa, solicite a carta de permanência para reduzir os prazos na nova contratação.'
    ],
    customWhatsappText: 'Olá! Gostaria de tirar dúvidas sobre prazos de carência e verificar a possibilidade de redução com o meu plano atual.',
    ctaTitle: 'Quer verificar seus prazos ou aproveitar carências do plano atual?',
    ctaDescription: 'Envie sua carta de permanência ou tire suas dúvidas sobre prazos diretamente com nossa equipe de corretores em São Paulo.'
  }
];

export const BLOG_CATEGORIES = [
  'Todos',
  'Casos Especiais & Riscos',
  'Guia de Operadoras',
  'Como Funciona na Prática'
];
