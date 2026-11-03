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
  // 1. CARÊNCIAS
  {
    id: 'artigo-1-carencia-quanto-tempo',
    slug: 'carencia-plano-de-saude-quanto-tempo',
    title: 'Quanto tempo até eu poder usar o plano que acabei de contratar?',
    subtitle: 'Entenda como funcionam os prazos de carência na prática: urgência, consultas, exames simples, exames complexos, cirurgias e partos.',
    targetKeyword: 'carência plano de saúde quanto tempo',
    metaDescription: 'Saiba quanto tempo demora para usar o plano de saúde após contratar: prazos de carência para consultas, exames, internações, cirurgias e urgência.',
    category: 'Como Funciona na Prática',
    publishDate: '2026-08-25',
    readTime: '7 min de leitura',
    author: {
      name: 'Andrea Correa Leite',
      role: 'Corretora Habilitada com Registro SUSEP',
      susep: '10.2000204.1',
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 20 anos. Atendimento técnico sem atalhos irregulares.',
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
          'A proposta da operadora lista detalhadamente cada procedimento e a data exata de liberação no aplicativo do beneficiário.'
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
          'Quando você já possui um plano ativo há mais de 12 ou 24 meses em uma operadora e decide mudar de convênio, as operadoras oferecem tabelas promocionais de redução de carência.',
          'Para que isso funcione, é fundamental não cancelar o plano antigo antes da emissão e aceitação da proposta no novo convênio, além de emitir a carta de quitação e permanência emitida pela sua operadora atual.',
          'A gente confere esse documento com você antes de enviar a proposta para garantir que a redução seja validada formalmente na emissão da carteirinha.'
        ]
      }
    ],
    concreteBlock: {
      type: 'table',
      title: 'Tabela Prática de Prazos de Carência (Padrão de Mercado)',
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
    ctaDescription: 'Envie sua carta de permanência ou tire suas dúvidas sobre prazos diretamente com nossa equipe de corretores especializados.'
  },

  // 2. COPARTICIPAÇÃO
  {
    id: 'artigo-2-coparticipacao-vale-a-pena',
    slug: 'como-funciona-coparticipacao-plano-de-saude-vale-a-pena',
    title: 'Como funciona a coparticipação no plano de saúde e quando ela realmente vale a pena?',
    subtitle: 'Entenda a diferença entre plano com e sem coparticipação, como são cobradas as taxas de consultas e exames e a conta exata para saber se você economiza.',
    targetKeyword: 'como funciona coparticipação plano de saúde vale a pena',
    metaDescription: 'Descubra como funciona a coparticipação em planos de saúde, valores médios cobrados por consulta e exame, teto mensal e a conta prática para saber se vale a pena.',
    category: 'Como Funciona na Prática',
    publishDate: '2026-08-28',
    readTime: '8 min de leitura',
    author: {
      name: 'Andrea Correa Leite',
      role: 'Corretora Habilitada com Registro SUSEP',
      susep: '10.2000204.1',
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 20 anos. Atendimento técnico sem atalhos irregulares.',
      profileUrl: '/sobre'
    },
    introAnswer: 'Plano com coparticipação é aquele em que a mensalidade fixa é entre 20% e 40% mais barata e você só paga um valor adicional pequeno (fixo ou percentual) nos meses em que fizer consultas, exames ou passar no pronto-socorro. Ele vale muito a pena para pessoas e famílias que usam o convênio de forma preventiva ou eventual.',
    sections: [
      {
        questionH2: 'O que é e como é cobrada a taxa de coparticipação?',
        directFirstSentence: 'A coparticipação é um valor de participação nas despesas médicas que vem discriminado no próprio boleto mensal do plano, cobrado apenas após o uso do procedimento.',
        content: [
          'Na modalidade coparticipativa, o beneficiário paga uma mensalidade menor todo mês. Quando realiza uma consulta com especialista ou faz um exame, a operadora apura o valor correspondente e lança essa cobrança no boleto seguinte.',
          'Os valores podem ser pré-fixados (ex: R$ 25 a R$ 35 por consulta eletiva e R$ 40 a R$ 50 no pronto-socorro) ou percentuais (geralmente entre 10% e 30% do custo da tabela da operadora, com um limite máximo em reais por evento).',
          'Importante: em internações hospitalares e cirurgias, a maioria das operadoras não cobra percentual ilimitado, e sim uma taxa única fixa por internação (ou isenção total da coparticipação hospitalar).'
        ]
      },
      {
        questionH2: 'Existe um limite máximo que a operadora pode cobrar no mês?',
        directFirstSentence: 'Sim, as operadoras de saúde estabelecem tetos máximos por procedimento e limites globais na fatura mensal para proteger o cliente de contas abusivas.',
        content: [
          'Para garantir previsibilidade ao orçamento familiar, o contrato da operadora define que um único exame nunca ultrapasse determinado valor (por exemplo, teto de R$ 50 a R$ 90 mesmo em ressonâncias caras).',
          'Além disso, procedimentos de alta complexidade contínua — como sessões de quimioterapia, hemodiálise e radioterapia — costumam ser isentos de coparticipação nas operadoras idôneas.',
          'Antes de assinar a proposta, a nossa equipe apresenta a grade completa de coparticipação para você conferir exatamente o valor de cada item.'
        ]
      },
      {
        questionH2: 'Para quem o plano com coparticipação é a melhor escolha?',
        directFirstSentence: 'O plano coparticipativo é a melhor escolha para jovens, adultos saudáveis e famílias que realizam até 4 a 6 consultas e check-ups por ano.',
        content: [
          'Se você raramente vai ao pronto-socorro e faz exames apenas no check-up anual, pagar 30% a mais todo mês em um plano sem coparticipação é desperdício de dinheiro.',
          'A economia gerada na mensalidade ao longo de 12 meses costuma somar mais de R$ 1.500 a R$ 3.000 por pessoa — valor muito superior ao custo de eventuais taxas de consultas que você possa utilizar no ano.'
        ]
      },
      {
        questionH2: 'Quando o plano tradicional sem coparticipação é mais indicado?',
        directFirstSentence: 'O plano sem coparticipação é recomendado para pessoas com doenças crônicas, crianças pequenas com visitas frequentes ao pediatra ou idosos em tratamento contínuo.',
        content: [
          'Bebês no primeiro ano de vida e crianças até 5 anos costumam ter episódios frequentes de febre, viroses e consultas pediátricas mensais. Nesses casos, as taxas de pronto-socorro acumuladas podem encarecer o boleto.',
          'Da mesma forma, quem realiza acompanhamento quinzenal com psicólogo, psiquiatra ou fisioterapia motora tem maior tranquilidade com a mensalidade integral fixa, sem oscilações no final do mês.'
        ]
      }
    ],
    concreteBlock: {
      type: 'table',
      title: 'Comparativo Prático: Plano com Coparticipação vs Sem Coparticipação',
      description: 'Simulação real do custo anual para um perfil com uso moderado (4 consultas e 1 bateria de exames no ano).',
      headers: ['Item Analisado', 'Plano SEM Coparticipação', 'Plano COM Coparticipação'],
      rows: [
        ['Mensalidade Média Estimada', 'R$ 450,00 / mês', 'R$ 310,00 / mês (economia de R$ 140/mês)'],
        ['Custo Fixo Anual das Mensalidades', 'R$ 5.400,00 / ano', 'R$ 3.720,00 / ano'],
        ['Custo de 4 Consultas no Ano', 'R$ 0,00 (incluso)', 'R$ 120,00 (4 x R$ 30,00)'],
        ['Custo de 1 Bateria de Exames de Sangue e Raio-X', 'R$ 0,00 (incluso)', 'R$ 60,00'],
        ['Custo Total Real no Final de 1 Ano', 'R$ 5.400,00', 'R$ 3.900,00'],
        ['Economia Real no Bolso', 'Nenhuma (paga pelo uso de terceiros)', 'R$ 1.500,00 de economia líquida no ano']
      ]
    },
    keyTakeaways: [
      'A coparticipação reduz o valor da mensalidade em até 30% a 40% todos os meses.',
      'Você só paga taxa adicional nos meses em que realmente passar por atendimento médico.',
      'Internações hospitalares e tratamentos contínuos possuem regras de proteção com taxas fixas ou isenção.',
      'Solicite uma simulação comparando as duas tabelas para a sua faixa de idade.'
    ],
    customWhatsappText: 'Olá! Gostaria de comparar os valores de planos com e sem coparticipação para o meu perfil.',
    ctaTitle: 'Quer ver a diferença de preço com e sem coparticipação?',
    ctaDescription: 'Enviamos a simulação comparativa das operadoras direto no seu WhatsApp para você escolher a opção mais econômica.'
  },

  // 3. MEI E RISCO DE CANCELAMENTO
  {
    id: 'artigo-3-mei-risco',
    slug: 'abrir-mei-so-para-plano-de-saude-risco',
    title: 'Abri MEI só para pagar mais barato. Posso perder o plano?',
    subtitle: 'Entenda como funcionam as auditorias das operadoras de saúde e os riscos reais de manter um CNPJ sem atividade apenas para ter desconto no convênio.',
    targetKeyword: 'abrir MEI só para plano de saúde risco',
    metaDescription: 'Descubra se abrir MEI só para ter plano de saúde tem risco de cancelamento, como funcionam as auditorias das operadoras e quando o plano individual no CPF é mais seguro.',
    category: 'Casos Especiais & Riscos',
    publishDate: '2026-08-20',
    readTime: '7 min de leitura',
    author: {
      name: 'Andrea Correa Leite',
      role: 'Corretora Habilitada com Registro SUSEP',
      susep: '10.2000204.1',
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 20 anos. Atendimento técnico sem atalhos irregulares.',
      profileUrl: '/sobre'
    },
    introAnswer: 'Sim, você pode ter o convênio cancelado de forma unilateral se a operadora identificar que o seu CNPJ MEI foi criado apenas de fachada, está inativo na Receita Federal ou sem recolhimento regular das guias mensais. A contratação empresarial exige comprovação de atividade real e manutenção do CNPJ ativo durante toda a vigência do contrato.',
    sections: [
      {
        questionH2: 'Como a operadora descobre que o MEI não tem atividade comercial de verdade?',
        directFirstSentence: 'A operadora realiza auditorias periódicas automáticas cruzando a base de dados do CNPJ com a Receita Federal e os órgãos de registro.',
        content: [
          'Nos contratos de saúde corporativos para microempreendedores, as operadoras inserem no formulário de adesão a obrigação de envio anual de documentos comprobatórios, como a declaração anual do MEI (DASN-SIMEI) e as guias DAS quitadas.',
          'Quando um cliente abre uma empresa apenas no papel para baratear a mensalidade e deixa de pagar as guias mensais do DAS, o CNPJ entra em situação irregular. Na auditoria da operadora — que costuma ocorrer no aniversário do contrato ou ao autorizar uma cirurgia de alto custo —, essa inconsistência trava o atendimento.',
          'Se a empresa for declarada inapta ou baixada pelo governo por falta de movimentação, o cancelamento do contrato de saúde ocorre de imediato.'
        ]
      },
      {
        questionH2: 'O que acontece com os dependentes e com as carências se o plano MEI for cancelado?',
        directFirstSentence: 'Se o plano for cancelado por irregularidade no CNPJ, você e seus dependentes perdem a cobertura hospitalar e o histórico de carências na operadora.',
        content: [
          'A perda de um plano empresarial por cancelamento cadastral não garante transferência automática para uma linha individual com carência zerada.',
          'Imagine uma família com um filho em terapia contínua ou um idoso com cirurgia agendada: um cancelamento repentino por auditoria interrompe internações eletivas e exige iniciar uma nova contratação do zero.',
          'Por isso, quem não exerce atividade autônoma formal não deve se iludir com a falsa economia de um CNPJ fictício.'
        ]
      },
      {
        questionH2: 'Quanto custa manter um MEI aberto exclusivamente para ter plano de saúde?',
        directFirstSentence: 'Manter um MEI custa o pagamento mensal obrigatório do tributo DAS e as obrigações da declaração anual, o que anula grande parte da economia da mensalidade.',
        content: [
          'O MEI gera uma despesa mensal fixa com a guia do DAS (INSS e tributos), que ultrapassa R$ 75 a R$ 85 todo mês, além do trabalho de entrega da declaração anual.',
          'Quando colocamos na ponta do lápis, a economia ilusória evapora e o risco de estresse com documentação aumenta significativamente.'
        ]
      },
      {
        questionH2: 'Quando contratar com MEI é uma boa escolha e quando é um erro perigoso?',
        directFirstSentence: 'Contratar pelo MEI é excelente para quem já trabalha formalmente como autônomo, com CNPJ ativo e atividade real, mas é um erro para quem só quer comprar plano médico pessoal.',
        content: [
          'Se você é prestador de serviços, comerciante ou consultor com CNPJ ativo e faturamento real, a linha empresarial PME é perfeita: ela oferece acesso a redes amplas e tabelas corporativas.',
          'Porém, se você é trabalhador CLT, aposentado, estudante ou profissional sem empresa, o caminho seguro é o convênio no CPF. Você fica livre de auditorias fiscais e não corre risco de cancelamento por burocracia contábil.'
        ]
      }
    ],
    concreteBlock: {
      type: 'checklist',
      title: 'Checklist de Segurança: Você deve contratar no CPF ou no MEI?',
      description: 'Avalie os critérios abaixo para escolher a modalidade de contratação mais segura para sua família.',
      items: [
        { title: 'Você já tem MEI ativo, no tempo exigido pela operadora, com faturamento real?', desc: 'Se SIM, o plano empresarial PME é vantajoso e plenamente regular.', alert: false },
        { title: 'Você pretendia abrir MEI apenas para comprar o plano de saúde?', desc: 'Se SIM, NÃO faça isso. O custo das guias DAS e o risco de cancelamento em auditoria não compensam.', alert: true },
        { title: 'Você quer um contrato que não dependa de CNPJ nem de sindicato?', desc: 'O plano individual direto no CPF é o único que oferece proteção permanente sem vínculo com pessoa jurídica.', alert: false },
        { title: 'Você possui dependentes idosos ou crianças com tratamentos em andamento?', desc: 'Priorize contratos individuais no CPF para evitar risco de cancelamento unilateral inesperado.', alert: false }
      ]
    },
    keyTakeaways: [
      'Operadoras realizam auditorias cadastrais periódicas nos contratos vinculados a CNPJ MEI.',
      'Manter MEI gera custos obrigatórios de guias DAS que anulam a diferença de preço da mensalidade.',
      'Contratos individuais no CPF não sofrem auditoria contábil e oferecem segurança de longo prazo.',
      'Se você já tem MEI ativo e regular, aproveite as tabelas corporativas PME.'
    ],
    customWhatsappText: 'Olá! Gostaria de analisar se para o meu caso é melhor contratar no CPF ou no MEI.',
    ctaTitle: 'Dúvida se contrata no CPF ou no MEI?',
    ctaDescription: 'Analisamos o seu perfil sem custo para indicar o contrato mais seguro e econômico para sua família.'
  },

  // 4. INDIVIDUAL NO CPF VS COLETIVO POR ADESÃO
  {
    id: 'artigo-4-individual-vs-adesao',
    slug: 'diferenca-plano-individual-coletivo-por-adesao',
    title: 'Qual a diferença entre plano individual no CPF e plano por adesão de sindicato?',
    subtitle: 'Entenda as regras de reajuste anual, cancelamento unilateral pelas administradoras de benefícios e por que o plano individual direto no CPF é mais seguro.',
    targetKeyword: 'diferença plano individual e coletivo por adesão',
    metaDescription: 'Entenda a diferença real entre plano de saúde individual no CPF e plano coletivo por adesão de sindicato/entidade: reajustes, cancelamento e segurança.',
    category: 'Casos Especiais & Riscos',
    publishDate: '2026-08-30',
    readTime: '8 min de leitura',
    author: {
      name: 'Andrea Correa Leite',
      role: 'Corretora Habilitada com Registro SUSEP',
      susep: '10.2000204.1',
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 20 anos. Atendimento técnico sem atalhos irregulares.',
      profileUrl: '/sobre'
    },
    introAnswer: 'A principal diferença é a segurança jurídica: no plano individual no CPF, o reajuste anual é controlado por índice oficial e a operadora não pode cancelar seu contrato sem motivo justo. No plano por adesão (vinculado a sindicatos e administradoras), os reajustes anuais de sinistralidade costumam ser muito mais altos e a administradora pode rescindir o contrato de todo o grupo.',
    sections: [
      {
        questionH2: 'O que é um plano coletivo por adesão e como ele é comercializado?',
        directFirstSentence: 'O plano por adesão é um contrato intermediado por uma administradora de benefícios vinculada a uma entidade de classe, sindicato ou associação profissional.',
        content: [
          'Nessa modalidade, você não contrata diretamente com a operadora, mas sim adere a uma apólice coletiva gerida por uma administradora.',
          'Para entrar no plano, é exigida a comprovação de vínculo com a profissão ou formação acadêmica (como estudantes, advogados, servidores ou comerciantes), além do pagamento de taxas associativas.',
          'Embora dê acesso a operadoras que não vendem no CPF, esse formato transfere as decisões contratuais para a relação entre a administradora e a operadora de saúde.'
        ]
      },
      {
        questionH2: 'Por que os reajustes do plano por adesão costumam ser tão altos?',
        directFirstSentence: 'Os planos por adesão sofrem reajustes anuais calculados com base na sinistralidade e nos custos médicos do grupo de beneficiários da administradora.',
        content: [
          'Enquanto os planos individuais diretos no CPF têm seu percentual de aumento anual estritamente limitado por teto oficial, os planos coletivos por adesão não possuem esse limitador prévio.',
          'Se muitas pessoas do grupo fizeram cirurgias ou internações no ano, a administradora repassa esse custo aplicando aumentos que frequentemente superam 20%, 30% ou mais no aniversário da apólice.',
          'Isso faz com que o plano que começou barato se torne financeiramente insustentável após 2 ou 3 anos de contratação.'
        ]
      },
      {
        questionH2: 'A operadora pode cancelar o plano por adesão de repente?',
        directFirstSentence: 'Sim, a administradora ou a operadora podem rescindir o contrato coletivo de comum acordo, notificando os beneficiários com aviso prévio.',
        content: [
          'No plano por adesão, se a operadora de saúde decidir que aquela carteira de clientes não é mais lucrativa, ela pode rescindir o contrato da apólice inteira.',
          'Já no plano de saúde individual no CPF, a legislação do setor proíbe a rescisão imotivada: a operadora é obrigada a manter o seu contrato ativo por tempo indeterminado, desde que você pague as mensalidades em dia.',
          'Essa garantia é essencial para quem tem familiares em tratamento médico ou com idade avançada, onde perder o plano representa um risco dramático.'
        ]
      },
      {
        questionH2: 'Qual modalidade escolher para ter mais tranquilidade financeira?',
        directFirstSentence: 'Para quem busca previsibilidade de longo prazo e estabilidade sem surpresas de cancelamento, o plano individual no CPF é a melhor opção.',
        content: [
          'O plano coletivo por adesão pode ser útil temporariamente para quem precisa de um hospital de rede nacional muito específico.',
          'No entanto, para a grande maioria das famílias que buscam atendimento médico de qualidade com hospitais de referência nas capitais, o convênio individual no CPF é o mais equilibrado e protegido.'
        ]
      }
    ],
    concreteBlock: {
      type: 'table',
      title: 'Quadro Comparativo: Plano Individual (CPF) vs Plano por Adesão (Sindicato)',
      description: 'Diferenças fundamentais entre a contratação direta no CPF e a contratação coletiva por entidade de classe.',
      headers: ['Critério de Avaliação', 'Plano Individual Direto (CPF)', 'Plano Coletivo por Adesão (Sindicato)'],
      rows: [
        ['Vínculo Contratual', 'Direto entre Você e a Operadora de Saúde', 'Intermediado por Administradora e Entidade de Classe'],
        ['Controle do Reajuste Anual', 'Teto oficial controlado por índice regulado', 'Definido pela administradora com base na sinistralidade do grupo'],
        ['Cancelamento Unilateral', 'PROIBIDO (a operadora não pode cancelar sem fraude/inadimplência)', 'PERMITIDO (a administradora ou operadora pode encerrar a apólice)'],
        ['Exigência de Documentos', 'Apenas RG, CPF e comprovante de residência', 'Exige diploma, carteira de conselho ou taxa de filiação sindical'],
        ['Estabilidade para Tratamentos Longos', 'Máxima: garantia de continuidade vitalícia', 'Média/Baixa: risco de rescisão coletiva da carteira']
      ]
    },
    keyTakeaways: [
      'Planos individuais no CPF oferecem a maior proteção contra reajustes abusivos e cancelamentos repentinos.',
      'Planos por adesão têm reajustes baseados no uso de todo o grupo, o que pode gerar aumentos elevados.',
      'No convênio individual, seu contrato não depende de mensalidades de sindicatos ou entidades de classe.',
      'Consulte a nossa equipe para comparar as operadoras com contratação direta no seu estado.'
    ],
    customWhatsappText: 'Olá! Gostaria de entender a diferença de valores entre o plano individual no CPF e por adesão.',
    ctaTitle: 'Quer proteger sua família contra reajustes abusivos?',
    ctaDescription: 'Receba a tabela oficial de planos individuais no CPF com contratação direta pelas operadoras.'
  },

  // 5. OPERADORAS COM PLANO INDIVIDUAL
  {
    id: 'artigo-2-operadoras-individual-sp',
    slug: 'quais-operadoras-ainda-vendem-plano-individual-sao-paulo',
    title: 'Quais operadoras ainda vendem plano individual no CPF?',
    subtitle: 'Conheça as principais operadoras com rede própria, hospitais de referência e contratação direta para pessoa física nas capitais.',
    targetKeyword: 'quais operadoras ainda vendem plano individual',
    metaDescription: 'Descubra quais operadoras ainda vendem plano de saúde individual no CPF em São Paulo e capitais: São Cristóvão, Trasmontano, Prevent Senior, MedSênior e mais.',
    category: 'Guia de Operadoras',
    publishDate: '2026-08-22',
    readTime: '9 min de leitura',
    author: {
      name: 'Andrea Correa Leite',
      role: 'Corretora Habilitada com Registro SUSEP',
      susep: '10.2000204.1',
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 20 anos. Atendimento técnico sem atalhos irregulares.',
      profileUrl: '/sobre'
    },
    introAnswer: 'Embora gigantes multinacionais tenham focado apenas no mercado corporativo, operadoras sólidas com rede própria continuam comercializando convênios médicos individuais no CPF com excelente estrutura hospitalar. Em São Paulo e capitais, destacam-se São Cristóvão Saúde, Trasmontano Saúde, Prevent Senior, MedSênior, Plena Saúde e UniHosp.',
    sections: [
      {
        questionH2: 'Por que muitas corretoras dizem que não existe mais plano individual?',
        directFirstSentence: 'Muitas corretoras não possuem código direto nessas operadoras ou preferem vender planos empresariais por conveniência comercial.',
        content: [
          'Vender plano individual exige credenciamento específico e atendimento técnico cuidadoso.',
          'Operadoras regionais e especializadas mantêm sua operação voltada ao cliente pessoa física porque possuem hospitais próprios, centros de diagnóstico e maternidades bem equipadas.',
          'Nossa corretora possui código direto oficial nessas operadoras, permitindo emitir sua proposta sem taxas intermediárias abusivas.'
        ]
      },
      {
        questionH2: 'Quais são os principais diferenciais da São Cristóvão Saúde?',
        directFirstSentence: 'A São Cristóvão Saúde é referência absoluta na Zona Leste e região central de São Paulo com seu complexo hospitalar próprio e maternidade moderna na Mooca.',
        content: [
          'Com mais de 110 anos de história, a São Cristóvão oferece planos individuais e familiares com excelente custo-benefício, centros ambulatoriais próprios e pronto-atendimento 24 horas.',
          'É uma das opções mais procuradas por famílias que moram ou trabalham nas regiões da Mooca, Tatuapé, Belém, Anália Franco e Vila Prudente.'
        ]
      },
      {
        questionH2: 'Como funciona a estrutura própria da Trasmontano Saúde?',
        directFirstSentence: 'A Trasmontano conta com ampla rede de centros médicos e hospitais próprios espalhados pela capital paulista, litoral e Grande São Paulo.',
        content: [
          'Com o Hospital IGESP no centro e novos centros médicos na Zona Leste, Zona Sul e Zona Norte, a Trasmontano atende desde jovens até a terceira idade com planos individuais acessíveis e programas de medicina preventiva.'
        ]
      },
      {
        questionH2: 'Quais operadoras são focadas no público sênior e terceira idade?',
        directFirstSentence: 'Prevent Senior e MedSênior são as duas maiores operadoras especializadas no público adulto e 50+, com foco em medicina preventiva.',
        content: [
          'Essas operadoras contam com núcleos de medicina avançada, reabilitação física, hospitais de excelência e modelo que evita reajustes por faixa etária após os 59 anos de idade.'
        ]
      }
    ],
    concreteBlock: {
      type: 'table',
      title: 'Tabela Comparativa das Principais Operadoras no CPF',
      description: 'Resumo das opções de convênio médico individual com contratação direta no CPF.',
      headers: ['Operadora', 'Perfil Principal', 'Destaque de Rede Hospitalar', 'Acomodação'],
      rows: [
        ['São Cristóvão Saúde', 'Familiar e Individual', 'Complexo Hospitalar São Cristóvão (Mooca) e rede credenciada', 'Enfermaria ou Apartamento'],
        ['Trasmontano Saúde', 'Todas as idades e 50+', 'Hospital IGESP, Rede Centros Médicos Trasmontano', 'Enfermaria ou Apartamento'],
        ['Prevent Senior', 'Adulto e Terceira Idade', 'Hospitais Sancta Maggiore e núcleos especializados', 'Enfermaria ou Apartamento'],
        ['MedSênior', 'Exclusivo 49+ e Terceira Idade', 'Centros de prevenção, geriatria e hospitais credenciados', 'Enfermaria ou Apartamento'],
        ['Plena Saúde', 'Regional Acessível', 'Hospital Previna (Zona Norte/Oeste e região metropolitana)', 'Enfermaria ou Apartamento'],
        ['UniHosp Saúde', 'Regional Acessível', 'Rede própria e credenciada na Zona Sul e Grande ABC', 'Enfermaria ou Apartamento']
      ]
    },
    keyTakeaways: [
      'Sim, existem excelentes opções de plano de saúde no CPF com hospitais de primeira linha.',
      'A rede própria das operadoras regionais garante atendimento estável e controle de qualidade.',
      'Você não precisa abrir empresa nem pagar sindicato para ter convênio médico.',
      'Solicite uma cotação com a tabela vigente para comparar os hospitais atendidos no seu bairro.'
    ],
    customWhatsappText: 'Olá! Gostaria de receber o comparativo das operadoras de plano individual com a tabela de valores vigente.',
    ctaTitle: 'Quer comparar as operadoras ativas no seu bairro?',
    ctaDescription: 'Enviamos as tabelas completas da São Cristóvão, Trasmontano, Prevent Senior e outras opções direto no seu WhatsApp.'
  },

  // 6. CONVÊNIO FAMILIAR E DEPENDENTES
  {
    id: 'artigo-6-dependentes-convenio-familiar',
    slug: 'como-incluir-dependentes-plano-de-saude-familiar',
    title: 'Como incluir dependentes e familiares no mesmo plano de saúde?',
    subtitle: 'Regras de inclusão para cônjuge, companheiro, filhos, enteados e recém-nascidos, com desconto por quantidade de vidas e boleto único.',
    targetKeyword: 'como incluir dependentes plano de saúde familiar',
    metaDescription: 'Descubra quem pode ser dependente no plano de saúde familiar, quais documentos são exigidos, como cadastrar recém-nascidos e como funciona o desconto no boleto.',
    category: 'Como Funciona na Prática',
    publishDate: '2026-08-31',
    readTime: '8 min de leitura',
    author: {
      name: 'Andrea Correa Leite',
      role: 'Corretora Habilitada com Registro SUSEP',
      susep: '10.2000204.1',
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 20 anos. Atendimento técnico sem atalhos irregulares.',
      profileUrl: '/sobre'
    },
    introAnswer: 'No plano de saúde familiar, o titular pode incluir como dependentes diretos o cônjuge ou companheiro(a) em união estável, filhos naturais ou adotivos e enteados até 21 anos (ou até 24 anos se universitários). A contratação familiar unifica o pagamento em um único boleto e muitas operadoras oferecem tabelas com descontos progressivos para 2 ou mais vidas.',
    sections: [
      {
        questionH2: 'Quem pode entrar como dependente no convênio familiar?',
        directFirstSentence: 'Podem ser incluídos como dependentes o cônjuge, companheiro com declaração de união estável, filhos solteiros, enteados e menores sob tutela judicial.',
        content: [
          'A legislação e as normas das operadoras definem como dependentes diretos aqueles que possuem laço conjugal ou de filiação direta com o titular do contrato.',
          'Para cônjuge, a comprovação é feita pela certidão de casamento ou escritura/declaração pública de união estável.',
          'Para filhos e enteados, basta a certidão de nascimento ou RG com CPF acompanhados do documento do responsável legal.',
          'Parentes de segundo grau — como pais, tios, sobrinhos ou irmãos — não entram como dependentes em contratos individuais/familiares padrão, precisando de contratos próprios ou contratações na linha empresarial PME.'
        ]
      },
      {
        questionH2: 'Como funciona a inclusão de recém-nascidos no plano da mãe ou do pai?',
        directFirstSentence: 'O bebê recém-nascido pode ser atendido pelo plano do titular durante os primeiros 30 dias de vida utilizando a carteirinha da mãe ou do pai.',
        content: [
          'Durante os primeiros 30 dias após o parto, todo o atendimento pediátrico de urgência e exames neonatais são cobertos pelo convênio do titular.',
          'Para que a criança continue no plano sem cumprir nenhuma carência adicional, o titular deve solicitar formalmente a inclusão do bebê como dependente dentro desses primeiros 30 dias.',
          'Basta enviar a certidão de nascimento da criança para a nossa corretora que providenciamos a inclusão imediata na operadora.'
        ]
      },
      {
        questionH2: 'É mais barato contratar um plano familiar ou planos individuais separados?',
        directFirstSentence: 'Contratar na modalidade familiar costuma ser mais econômico e prático devido aos descontos por quantidade de vidas e facilidade de gestão financeira.',
        content: [
          'Operadoras como São Cristóvão e Trasmontano praticam tabelas diferenciadas para contratos familiares a partir de 2 ou 3 pessoas.',
          'Além da economia mensal na soma das mensalidades, a família recebe um único boleto bancário consolidado e gerencia as carteirinhas de todos os membros em um mesmo aplicativo no celular.'
        ]
      },
      {
        questionH2: 'É possível incluir dependentes depois que o plano já começou?',
        directFirstSentence: 'Sim, dependentes podem ser incluídos a qualquer momento após o início do contrato, respeitando as regras de carência para novos membros.',
        content: [
          'Se você já tem um plano individual ativo e se casou ou teve um filho, pode solicitar a inclusão do novo familiar.',
          'Para novos dependentes adicionados posteriormente (com exceção do recém-nascido cadastrado em até 30 dias do parto), aplicam-se os prazos normais de carência a contar da data de inclusão daquela vida.'
        ]
      }
    ],
    concreteBlock: {
      type: 'steps',
      title: 'Passo a Passo para Contratar ou Incluir Dependentes no Convênio Familiar',
      description: 'Como formalizar a inclusão de familiares com rapidez e sem complicação.',
      steps: [
        { step: 1, title: 'Separar os Documentos Pessoais', detail: 'RG, CPF e comprovante de endereço do titular; RG/Certidão e CPF de cada dependente; Certidão de casamento ou união estável para cônjuge.' },
        { step: 2, title: 'Escolher a Acomodação (Enfermaria ou Apartamento)', detail: 'Definir o padrão de acomodação para a família e checar os hospitais com maternidade e pronto-socorro infantil credenciados.' },
        { step: 3, title: 'Aproveitamento de Carências Anteriores', detail: 'Se algum membro da família já possuía outro convênio, anexar a carta de permanência do plano anterior para reduzir prazos.' },
        { step: 4, title: 'Assinatura Digital e Emissão das Carteirinhas', detail: 'Conferência da proposta, assinatura eletrônica e liberação do aplicativo com carteirinhas de toda a família.' }
      ]
    },
    keyTakeaways: [
      'Cônjuge, filhos e enteados podem ser reunidos em um único contrato familiar com desconto.',
      'Recém-nascidos têm cobertura gratuita nos primeiros 30 dias e devem ser incluídos nesse prazo para zerar carências.',
      'Pagamento unificado em boleto único simplifica o controle das despesas da casa.',
      'Nossa equipe cuida de todo o processo de inclusão cadastral diretamente na operadora.'
    ],
    customWhatsappText: 'Olá! Gostaria de cotar um plano de saúde familiar e entender as condições para incluir meus dependentes.',
    ctaTitle: 'Quer proteger toda a família em um único plano?',
    ctaDescription: 'Faça uma simulação familiar com tabela de desconto e receba os valores de todas as operadoras no WhatsApp.'
  },

  // 7. TERCEIRA IDADE E PÚBLICO 50+
  {
    id: 'artigo-7-terceira-idade-sem-reajuste',
    slug: 'plano-de-saude-para-idosos-terceira-idade-sem-reajuste',
    title: 'Plano de saúde para idosos e terceira idade: como funcionam as operadoras especializadas?',
    subtitle: 'Conheça o modelo de medicina preventiva da Prevent Senior e MedSênior, sem reajustes por idade após os 59 anos e com centros de diagnóstico exclusivos.',
    targetKeyword: 'plano de saúde para idosos terceira idade sem reajuste',
    metaDescription: 'Entenda como funcionam os planos de saúde para idosos e público 50+ (Prevent Senior e MedSênior), regras de reajuste após 59 anos e cuidados com a saúde sênior.',
    category: 'Casos Especiais & Riscos',
    publishDate: '2026-08-31',
    readTime: '9 min de leitura',
    author: {
      name: 'Andrea Correa Leite',
      role: 'Corretora Habilitada com Registro SUSEP',
      susep: '10.2000204.1',
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 20 anos. Atendimento técnico sem atalhos irregulares.',
      profileUrl: '/sobre'
    },
    introAnswer: 'Operadoras especializadas no público 50+ e terceira idade — como Prevent Senior e MedSênior — operam com foco em medicina preventiva, acompanhamento geriátrico contínuo e rede hospitalar própria. Por lei, após completar 59 anos, o beneficiário não sofre mais nenhum reajuste por mudança de faixa etária, tendo apenas os reajustes anuais padrão do contrato.',
    sections: [
      {
        questionH2: 'Como funcionam os reajustes por idade após os 59 anos?',
        directFirstSentence: 'Aos 59 anos ocorre a última mudança de faixa etária da vida do beneficiário; a partir dos 60 anos, reajustes por idade são expressamente proibidos.',
        content: [
          'A tabela de faixas etárias de todos os planos de saúde divide as mensalidades em 10 grupos de idade, sendo a última faixa aos 59 anos ou mais.',
          'Isso significa que aos 65, 70, 80 ou 90 anos, o valor da sua mensalidade não sofrerá acréscimos por envelhecimento.',
          'O único aumento que ocorre anualmente é o reajuste inflacionário anual do contrato no mês de aniversário da apólice.'
        ]
      },
      {
        questionH2: 'Qual a diferença do modelo de atendimento da Prevent Senior e da MedSênior?',
        directFirstSentence: 'Essas operadoras focam na prevenção de doenças crônicas e no cuidado integrado com médicos de família e geriatras dedicados.',
        content: [
          'Em vez de focar apenas no atendimento em prontos-socorros quando a pessoa já está doente, essas operadoras investem em núcleos de reabilitação física, acompanhamento de pressão e diabetes, fisioterapia, ortopedia e oficinas de memória e bem-estar.',
          'A Prevent Senior possui ampla rede de hospitais próprios (Rede Sancta Maggiore em São Paulo) e centros diagnósticos com equipamentos de ponta.',
          'A MedSênior se destaca pela medicina de prevenção, plano de cuidado personalizado e expansão com unidades próprias em capitais estratégicas como São Paulo, Brasília, Curitiba e Rio de Janeiro.'
        ]
      },
      {
        questionH2: 'Quem já tem doenças preexistentes pode contratar o plano sênior?',
        directFirstSentence: 'Sim, a contratação é garantida para qualquer pessoa, mediante o preenchimento da declaração de saúde ou entrevista médica qualificada.',
        content: [
          'Condições de saúde comuns na terceira idade — como hipertensão, diabetes, artrose ou cirurgias anteriores — não impedem a contratação do plano.',
          'O que ocorre é a aplicação da Cobertura Parcial Temporária (CPT) de até 24 meses exclusivamente para procedimentos cirúrgicos complexos ou leitos de UTI diretamente decorrentes da doença prévia.',
          'Todas as consultas, exames básicos, remédios em pronto-socorro e tratamentos de novas doenças contam com cobertura normal após os prazos contratuais iniciais.'
        ]
      },
      {
        questionH2: 'Como trocar de plano na terceira idade sem perder as carências já cumpridas?',
        directFirstSentence: 'A troca de convênio para uma operadora sênior pode ser feita aproveitando o tempo de permanência do convênio anterior para encurtar carências.',
        content: [
          'Se o idoso já possui um convênio que ficou caro demais e quer migrar para Prevent Senior, MedSênior ou Trasmontano, deve solicitar a carta de permanência da operadora atual.',
          'Nossa equipe realiza a análise técnica da documentação para verificar em qual categoria de redução de carências o cliente se enquadra antes de oficializar a mudança.'
        ]
      }
    ],
    concreteBlock: {
      type: 'table',
      title: 'Destaques das Operadoras Especializadas no Público Sênior',
      description: 'Comparativo dos principais diferenciais das operadoras focadas na maturidade.',
      headers: ['Operadora', 'Faixa de Entrada', 'Destaque Estrutural', 'Programas de Prevenção'],
      rows: [
        ['Prevent Senior', 'A partir de 40/50 anos e terceira idade', 'Rede de Hospitais Sancta Maggiore e unidades avançadas', 'Núcleos de cardiologia, ortopedia, reabilitação e oncologia especializada'],
        ['MedSênior', 'Exclusivo a partir de 49 anos', 'Centros médicos de geriatria e hospitais credenciados de referência', 'Oficinas de saúde, geriatria integrada e plano de cuidado preventivo individualizado'],
        ['Trasmontano Saúde', 'Linhas convencionais e linha sênior', 'Hospital IGESP e centros médicos próprios em SP e Litoral', 'Programas Viva Mais com acompanhamento multidisciplinar']
      ]
    },
    keyTakeaways: [
      'Após os 59 anos de idade, o plano não sofre mais nenhum aumento por faixa etária.',
      'Operadoras sênior investem em prevenção, diagnóstico precoce e geriatria especializada.',
      'Doenças preexistentes não impedem a contratação: consultas e exames têm cobertura liberada.',
      'Apresente sua carta de permanência para aproveitar carências de planos anteriores.'
    ],
    customWhatsappText: 'Olá! Gostaria de receber uma cotação de planos de saúde especializados para terceira idade / público 50+.',
    ctaTitle: 'Quer cotar um plano especializado para você ou seus pais?',
    ctaDescription: 'Enviamos as tabelas completas da Prevent Senior, MedSênior e Trasmontano direto no seu WhatsApp.'
  },

  // 8. COMO CONTRATAR PLANO MEI
  {
    id: 'artigo-8-como-contratar-plano-mei',
    slug: 'como-contratar-plano-de-saude-mei-regras-documentos',
    title: 'Como contratar plano de saúde com MEI: tempo de CNPJ, documentos e dependentes',
    subtitle: 'O guia definitivo para microempreendedores: regras de tempo de CNPJ, quem pode ser incluído, documentos exigidos e como funciona a redução de carência.',
    targetKeyword: 'como contratar plano de saúde com MEI',
    metaDescription: 'Veja como contratar plano de saúde com MEI: tempo de CNPJ exigido, documentos necessários, inclusão de familiares e como comparar as tabelas das operadoras.',
    category: 'Planos Empresariais & MEI',
    publishDate: '2026-09-01',
    readTime: '8 min de leitura',
    author: {
      name: 'Andrea Correa Leite',
      role: 'Corretora Habilitada com Registro SUSEP',
      susep: '10.2000204.1',
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 20 anos. Atendimento técnico sem atalhos irregulares.',
      profileUrl: '/sobre'
    },
    introAnswer: 'Para contratar um plano de saúde pelo MEI, você precisa ter o CNPJ ativo na Receita Federal, cumprir o tempo mínimo de abertura exigido pela operadora, que varia de uma para outra, e reunir no mínimo 2 vidas (o titular do MEI mais um dependente direto, como cônjuge ou filho, ou funcionário registrado). A diferença de preço em relação ao plano no CPF depende da tabela vigente de cada operadora.',
    sections: [
      {
        questionH2: 'Quanto tempo de MEI aberto as operadoras exigem?',
        directFirstSentence: 'O tempo mínimo de CNPJ ativo varia por operadora, e a exigência serve para certificar que a empresa possui atividade econômica regular e não foi criada apenas para fraude de adesão.',
        content: [
          'Por isso, a regra precisa ser conferida na tabela vigente da operadora escolhida, antes de enviar a proposta.',
          'Durante a análise da proposta, a operadora emite o comprovante de situação cadastral no site da Receita Federal e confere a data de abertura.',
          'Se o seu CNPJ ainda não atingir o tempo exigido por aquela operadora, a proposta de MEI não é aceita, sendo necessário aguardar o prazo, verificar outra operadora ou optar por um contrato no CPF.'
        ]
      },
      {
        questionH2: 'Quais documentos o microempreendedor precisa apresentar?',
        directFirstSentence: 'A documentação básica inclui o Cartão CNPJ, o Certificado CCMEI, documento com foto do titular e comprovantes de parentesco dos dependentes.',
        content: [
          'Para o titular do MEI: Cartão CNPJ ativo, Certificado da Condição de Microempreendedor Individual (CCMEI atualizado), RG/CNH e comprovante de residência.',
          'Para dependentes: Certidão de casamento ou união estável para cônjuge/companheiro(a); Certidão de nascimento ou RG/CPF para filhos solteiros ou enteados.',
          'Para funcionário registrado: Cópia da carteira de trabalho ou extrato do eSocial comprovando o vínculo empregatício formal com o MEI.'
        ]
      },
      {
        questionH2: 'Quem pode entrar como dependente no plano MEI?',
        directFirstSentence: 'Podem ser incluídos como dependentes o cônjuge, companheiro com união estável, filhos e enteados solteiros até 21 anos (ou 24 se universitários).',
        content: [
          'Diferente de empresas maiores (LTDA ou S/A), o MEI só permite a inclusão de dependentes diretos (vínculo de 1º grau) ou de funcionário registrado com carteira assinada.',
          'Pais, sogros, tios ou primos não podem ser cadastrados na apólice de MEI, preservando a elegibilidade cadastral da microempresa.'
        ]
      },
      {
        questionH2: 'Como funciona o pagamento e o reajuste anual do MEI?',
        directFirstSentence: 'O pagamento é feito em boleto bancário emitido em nome do CNPJ e o reajuste anual é apurado pelo agrupamento de contratos até 29 vidas.',
        content: [
          'Todo mês, a fatura é enviada para o e-mail cadastrado ou baixada no portal corporativo da operadora.',
          'No aniversário da apólice, o reajuste é calculado com base no índice do pool de risco de pequenas empresas da operadora, mantendo a estabilidade coletiva do grupo.'
        ]
      }
    ],
    concreteBlock: {
      type: 'steps',
      title: 'Passo a Passo para Contratar Plano de Saúde pelo MEI',
      description: 'Como funciona a contratação do início até a liberação das carteirinhas.',
      steps: [
        { step: 1, title: 'Checagem do CNPJ', detail: 'Verificação do tempo de abertura exigido pela operadora e situação ativa na Receita Federal.' },
        { step: 2, title: 'Composição das 2 Vidas', detail: 'Definição do titular + dependente legal (cônjuge/filho) ou funcionário registrado.' },
        { step: 3, title: 'Escolha da Rede e Acomodação', detail: 'Seleção da operadora (Amil, Bradesco, Porto, Trasmontano, São Cristóvão) e padrão de internação (Enfermaria ou Apartamento).' },
        { step: 4, title: 'Envio Digital e Implantação', detail: 'Assinatura digital da proposta, conferência documental e emissão das carteirinhas corporativas.' }
      ]
    },
    keyTakeaways: [
      'Contratos de MEI exigem mínimo de 2 vidas, e o tempo de CNPJ ativo varia por operadora.',
      'A diferença de preço em relação ao plano no CPF depende da tabela vigente; peça o comparativo antes de decidir.',
      'Cônjuge, filhos e funcionários registrados no eSocial podem ser incluídos.',
      'Envie o número do seu CNPJ para receber um estudo comparativo completo das operadoras.'
    ],
    customWhatsappText: 'Olá! Tenho um MEI ativo e gostaria de receber o comparativo de valores das operadoras.',
    ctaTitle: 'Quer cotar a tabela MEI para o seu CNPJ?',
    ctaDescription: 'Enviamos o estudo comparativo de preços e hospitais das principais operadoras direto no seu WhatsApp.'
  },

  // 9. PLANO PME A PARTIR DE QUANTAS VIDAS
  {
    id: 'artigo-9-plano-pme-regras-vidas',
    slug: 'plano-de-saude-pme-a-partir-de-quantas-vidas-regras',
    title: 'Plano de saúde empresarial PME: como contratar a partir de 2 ou 3 vidas e regras para sócios',
    subtitle: 'Tudo o que você precisa saber sobre convênio para micro, pequenas e médias empresas (LTDA, SLU, S/A): carência zero do CNPJ, coparticipação e dependentes.',
    targetKeyword: 'plano de saúde PME a partir de quantas vidas',
    metaDescription: 'Entenda como contratar plano de saúde empresarial PME a partir de 2 vidas para empresas LTDA e SLU: sem carência de CNPJ, coparticipação inteligente e regras.',
    category: 'Planos Empresariais & MEI',
    publishDate: '2026-09-01',
    readTime: '9 min de leitura',
    author: {
      name: 'Andrea Correa Leite',
      role: 'Corretora Habilitada com Registro SUSEP',
      susep: '10.2000204.1',
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 20 anos. Atendimento técnico sem atalhos irregulares.',
      profileUrl: '/sobre'
    },
    introAnswer: 'Empresas do tipo LTDA, SLU, EIRELI ou S/A podem contratar plano de saúde empresarial (PME) a partir de 2 ou 3 vidas imediatamente após a abertura do CNPJ, sem necessidade de aguardar prazo de carência da empresa. Podem participar sócios administradores constantes no contrato social, funcionários com vínculo CLT e seus dependentes diretos.',
    sections: [
      {
        questionH2: 'Empresa LTDA ou SLU precisa esperar tempo de CNPJ para contratar?',
        directFirstSentence: 'Não, empresas constituídas como LTDA ou Sociedade Limitada Unipessoal (SLU) podem contratar o plano no dia seguinte à emissão do contrato social registrado.',
        content: [
          'Diferente do MEI (em que o tempo mínimo de abertura varia por operadora), as sociedades contratuais regulares (LTDA, SLU, S/A) são aceitas pelas operadoras logo após a obtenção do CNPJ ativo e registro na Junta Comercial.',
          'Isso permite que novos empresários, startups, clínicas, consultorias e comércios ofereçam plano de saúde aos sócios e colaboradores desde o primeiro mês de atividade da empresa.'
        ]
      },
      {
        questionH2: 'Quem pode compor as vidas de um plano corporativo PME?',
        directFirstSentence: 'As vidas do plano PME podem ser compostas por sócios do contrato social, funcionários CLT registrados e seus respectivos dependentes legais.',
        content: [
          'Por exemplo: uma empresa SLU com apenas 1 sócio titular pode atingir o mínimo de 2 vidas incluindo o sócio mais o cônjuge ou um filho como dependente.',
          'Em empresas com equipe, funcionários registrados no eSocial, estagiários com contrato formal e aprendizes também podem ser inseridos na apólice corporativa.',
          'A apólice pode ter categorias diferentes de plano para diretoria e colaboradores, conforme o planejamento de benefícios da empresa.'
        ]
      },
      {
        questionH2: 'Como a coparticipação reduz os custos da folha de pagamento?',
        directFirstSentence: 'A coparticipação reduz o custo fixo da mensalidade corporativa em até 30% e estimula o uso consciente dos serviços médicos pelos colaboradores.',
        content: [
          'No modelo com coparticipação, a empresa paga uma fatura mensal previsível e bem mais barata.',
          'Quando um colaborador faz uma consulta eletiva ou exame simples, a taxa de coparticipação (com teto pré-fixado) é descontada na folha de pagamento ou assumida pela empresa, conforme a política interna de RH.',
          'Internações hospitalares e terapias continuadas possuem regras com limitadores ou isenção, garantindo proteção total ao colaborador.'
        ]
      },
      {
        questionH2: 'Como funciona o aproveitamento e compra de carências em planos PME?',
        directFirstSentence: 'Para grupos a partir de 2 vidas que já possuíam plano de saúde anterior, as operadoras aplicam tabelas promocionais de redução de carência e, a partir de 30 vidas, carência zero total.',
        content: [
          'Se a empresa está trocando de operadora ou se os colaboradores já tinham convênio médico prévio, apresentamos a carta de permanência do contrato anterior para zerar prazos de consultas, exames e internações.',
          'Nossa equipe faz o estudo técnico de migração para garantir que ninguém fique desassistido durante a transição.'
        ]
      }
    ],
    concreteBlock: {
      type: 'table',
      title: 'Quadro Comparativo: Plano MEI vs Plano Empresarial PME (LTDA / SLU)',
      description: 'Principais diferenças contratuais entre MEI e sociedades empresariais.',
      headers: ['Critério', 'Microempreendedor Individual (MEI)', 'Empresarial PME (LTDA / SLU / S/A)'],
      rows: [
        ['Tempo de CNPJ Exigido', 'Varia por operadora; confira na tabela vigente', 'Imediato (zero dias de carência do CNPJ)'],
        ['Mínimo de Vidas', 'A partir de 2 vidas (titular + dependente direto)', 'A partir de 2 ou 3 vidas (sócios, funcionários e dependentes)'],
        ['Tipos de Vidas Permitidas', 'Apenas titular MEI, dependentes diretos e funcionário registrado', 'Sócios no contrato social, colaboradores CLT, estagiários e familiares'],
        ['Diferenciação de Planos', 'Mesmo plano para todo o grupo', 'Possibilidade de planos superiores para diretoria e padrão para equipe'],
        ['Aproveitamento de Carências', 'Redução promocional conforme tempo de permanência anterior', 'Redução promocional e isenção total de carências a partir de 30 vidas']
      ]
    },
    keyTakeaways: [
      'Empresas LTDA e SLU podem contratar logo após a obtenção do CNPJ ativo.',
      'Contratação a partir de 2 vidas somando sócios, funcionários e familiares.',
      'Coparticipação reduz os custos fixos da empresa em até 30% ao mês.',
      'Solicite um estudo comparativo gratuito entre as maiores operadoras e seguradoras do país.'
    ],
    customWhatsappText: 'Olá! Gostaria de receber um estudo de plano de saúde empresarial PME para minha empresa.',
    ctaTitle: 'Quer reduzir os custos de saúde da sua empresa?',
    ctaDescription: 'Elaboramos um estudo comparativo completo entre Amil, Bradesco, SulAmérica, Porto Saúde, GNDI e outras opções para o seu CNPJ.'
  },

  // 10. DOENÇA PREEXISTENTE
  {
    id: 'artigo-10-doenca-preexistente',
    slug: 'plano-de-saude-com-doenca-preexistente',
    title: 'Tenho um problema de saúde. O plano me aceita?',
    subtitle: 'Diabetes, hipertensão, cirurgia antiga ou tratamento em andamento: o que acontece na contratação e o que muda no uso do plano.',
    targetKeyword: 'plano de saúde com doença preexistente',
    metaDescription: 'Tem doença preexistente e quer contratar plano de saúde? Veja como a declaração funciona, o que fica limitado por 24 meses e o que você já pode usar.',
    category: 'Casos Especiais & Riscos',
    publishDate: '2026-11-05',
    readTime: '6 min de leitura',
    author: {
      name: 'Andrea Correa Leite',
      role: 'Corretora Habilitada com Registro SUSEP',
      susep: '10.2000204.1',
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 20 anos. Atendimento técnico sem atalhos irregulares.',
      profileUrl: '/sobre'
    },
    introAnswer: 'Sim, ter um problema de saúde não impede você de contratar um plano. Você informa a condição na declaração de saúde e, na prática, o prazo habitual na tabela da operadora é de 24 meses de cobertura parcial temporária: durante esse período ficam limitados cirurgias, leitos de alta tecnologia e procedimentos de alta complexidade ligados àquela condição. O restante do plano segue os prazos normais de carência.',
    sections: [
      {
        questionH2: 'A operadora pode recusar quem já tem uma doença?',
        directFirstSentence: 'Ter uma doença conhecida não é motivo para ficar sem plano: o caminho normal é declarar a condição e contratar com a cobertura parcial temporária.',
        content: [
          'É aqui que muita gente desiste antes da hora. A pessoa com hipertensão, diabetes ou um histórico de cirurgia imagina que vai ouvir um não, e nem chega a pedir a cotação. O que a operadora avalia, na verdade, é como aquela condição entra no contrato.',
          'Vale entender a diferença entre duas coisas que parecem iguais. Uma é a carência, que todo beneficiário novo cumpre, com ou sem doença. A outra é a cobertura parcial temporária, que só existe para a condição que você declarou.',
          'O que muda de uma operadora para outra é o formulário, a análise médica e as tabelas disponíveis para a sua idade. Por isso a pergunta útil não é "vão me aceitar?", e sim "em qual operadora e em qual tabela o meu caso fica melhor?".'
        ]
      },
      {
        questionH2: 'O que fica limitado durante os 24 meses?',
        directFirstSentence: 'Durante os 24 meses, a limitação vale para cirurgias, leitos de alta tecnologia, como UTI, e procedimentos de alta complexidade relacionados diretamente à condição declarada.',
        content: [
          'Um exemplo simples: quem declara um problema no joelho pode usar o plano normalmente para uma gripe, uma consulta com o cardiologista ou um exame de sangue, respeitando as carências. O que fica de fora nesse período é a cirurgia do joelho declarado.',
          'Consultas e exames comuns não entram nessa limitação. Quem faz acompanhamento de uma doença crônica continua indo ao médico depois de cumprir o prazo habitual de 30 dias para consultas e exames básicos.',
          'A lista exata de procedimentos que ficam limitados aparece no documento que a operadora envia depois de analisar a declaração. Leia esse documento antes de assinar, e pergunte se algum item não ficar claro.'
        ]
      },
      {
        questionH2: 'O que acontece em uma urgência ligada à doença declarada?',
        directFirstSentence: 'O atendimento de urgência e emergência tem prazo habitual de 24 horas, mas o que está coberto em uma internação ligada à condição declarada precisa ser conferido no contrato antes de assinar.',
        content: [
          'Esse é o ponto que mais vale perguntar, porque a dúvida costuma aparecer justamente na pior hora. O pronto-socorro atende, mas uma internação longa ou uma cirurgia decorrente da condição declarada pode cair na limitação do período.',
          'Peça que a regra da operadora escolhida seja mostrada por escrito. Se a sua condição tem risco real de precisar de internação nos próximos meses, essa informação pesa mais na decisão do que uma diferença pequena de mensalidade.'
        ]
      },
      {
        questionH2: 'Dá para pagar mais e ter cobertura completa desde o início?',
        directFirstSentence: 'Algumas operadoras podem propor um acréscimo na mensalidade em troca de cobertura para a condição declarada, mas isso não é oferecido em todo contrato.',
        content: [
          'Essa alternativa é conhecida como agravo. Quando existe, o valor depende da análise da operadora para o seu caso, e por isso não há tabela pública para consultar. Só dá para saber depois da análise.',
          'Se a proposta vier, compare com calma: some o acréscimo ao longo do período e veja quanto isso representa frente ao risco real de precisar daquele procedimento. Em alguns casos compensa; em outros, a cobertura parcial atende bem.'
        ]
      },
      {
        questionH2: 'Posso deixar de informar o problema para evitar a limitação?',
        directFirstSentence: 'Não: omitir uma doença que você conhece é o maior risco dessa contratação, porque a operadora pode negar a cobertura e questionar o próprio contrato.',
        content: [
          'A omissão costuma aparecer quando mais importa. No pedido de uma cirurgia, a operadora consulta o histórico e pode investigar se a condição já era conhecida antes da assinatura. Nesse momento, o que era uma limitação de prazo vira um problema muito maior.',
          'Declarar custa uma limitação com data para acabar. Omitir pode custar a cobertura no momento em que você mais precisar dela, além de abrir discussão sobre a validade do contrato.',
          'Se você não tem certeza de como descrever a sua situação, leve a dúvida ao seu médico e separe seus exames. A gente orienta o caminho da proposta, mas as respostas da declaração são suas.'
        ]
      }
    ],
    concreteBlock: {
      type: 'table',
      title: 'O que muda com uma condição declarada',
      description: 'Prazos habituais na tabela da operadora. O documento da proposta é quem define o seu caso.',
      headers: ['Situação', 'Prazo habitual', 'Ligado à condição declarada?'],
      rows: [
        ['Urgência e emergência', '24 horas', 'Confira no contrato o que cobre em caso de internação'],
        ['Consultas e exames básicos', '30 dias', 'Liberados normalmente após o prazo'],
        ['Exames especiais e cirurgias sem relação com a condição', '180 dias', 'Não entram na limitação'],
        ['Cirurgias ligadas à condição', '24 meses', 'Limitadas pela cobertura parcial temporária'],
        ['UTI e leitos de alta tecnologia ligados à condição', '24 meses', 'Limitados pela cobertura parcial temporária'],
        ['Procedimentos de alta complexidade ligados à condição', '24 meses', 'Limitados pela cobertura parcial temporária']
      ]
    },
    keyTakeaways: [
      'Ter uma doença conhecida não impede a contratação do plano.',
      'A cobertura parcial temporária tem prazo habitual de 24 meses e vale só para o que está ligado à condição declarada.',
      'Consultas e exames comuns seguem os prazos normais de carência.',
      'Omitir uma doença conhecida pode custar a cobertura e abrir discussão sobre o contrato.'
    ],
    customWhatsappText: 'Olá! Tenho um problema de saúde e gostaria de saber como fica a contratação do plano no meu caso.',
    ctaTitle: 'Tem uma condição de saúde e quer saber como fica o seu plano?',
    ctaDescription: 'Conte pelo WhatsApp a sua idade e a sua cidade. A gente mostra quais operadoras atendem o seu perfil e como funciona a declaração em cada uma.'
  },

  // 11. REAJUSTE
  {
    id: 'artigo-11-reajuste-anual',
    slug: 'reajuste-plano-de-saude-individual-empresarial',
    title: 'Por que o plano sobe todo ano, e por que o empresarial pode subir mais',
    subtitle: 'Reajuste anual e mudança de faixa etária são coisas diferentes. Veja como cada tipo de contrato calcula o aumento.',
    targetKeyword: 'reajuste plano de saúde individual',
    metaDescription: 'Entenda por que o reajuste do plano de saúde individual funciona diferente do empresarial e do adesão, e o que perguntar antes de escolher o contrato.',
    category: 'Como Funciona na Prática',
    publishDate: '2026-11-09',
    readTime: '6 min de leitura',
    author: {
      name: 'Andrea Correa Leite',
      role: 'Corretora Habilitada com Registro SUSEP',
      susep: '10.2000204.1',
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 20 anos. Atendimento técnico sem atalhos irregulares.',
      profileUrl: '/sobre'
    },
    introAnswer: 'O plano sobe todo ano porque os custos de consultas, exames e internações mudam, e a mensalidade é recalculada na data de aniversário do contrato. No plano individual, o índice anual é único para toda a categoria. No coletivo por adesão e no empresarial, a operadora calcula o aumento com base no uso e nos custos do contrato, e por isso ele pode vir maior.',
    sections: [
      {
        questionH2: 'Por que a mensalidade aumenta mesmo se eu não usei o plano?',
        directFirstSentence: 'A mensalidade aumenta porque o reajuste olha para o custo do conjunto de beneficiários, e não para o uso individual de cada pessoa.',
        content: [
          'Um plano de saúde funciona como um grupo que divide a conta. O que você paga ajuda a cobrir a cirurgia de outra pessoa, e o que os outros pagam fica ali para o dia em que você precisar.',
          'Por isso, não ter usado o plano durante o ano não gera desconto nem evita o aumento. O preço de exames, materiais, honorários e internações continua mudando, e a mensalidade acompanha esse custo.',
          'O reajuste é aplicado no mês de aniversário do contrato. Esse mês aparece na proposta, e vale anotar para não ser pego de surpresa quando o boleto chegar.'
        ]
      },
      {
        questionH2: 'Qual é a diferença entre o reajuste anual e o aumento por idade?',
        directFirstSentence: 'O reajuste anual vale para todo o contrato e acontece uma vez por ano; o aumento por faixa etária acontece quando o beneficiário muda de faixa de idade.',
        content: [
          'São dois movimentos separados, e eles podem cair no mesmo ano. Quem faz aniversário e muda de faixa recebe o aumento previsto na tabela da faixa nova, além do reajuste anual do contrato.',
          'A boa notícia é que o aumento por idade não é surpresa: ele já está previsto na tabela do contrato. Peça para ver a coluna inteira de faixas etárias na hora de contratar, e não só o valor da sua idade de hoje.',
          'Isso muda a conta de quem está perto de trocar de faixa. Um plano que parece melhor agora pode ficar em outro patamar pouco tempo depois.'
        ]
      },
      {
        questionH2: 'Como funciona o reajuste no plano individual?',
        directFirstSentence: 'No plano individual ou familiar contratado no CPF, o índice anual é único para os contratos da categoria e não depende do uso da sua carteira.',
        content: [
          'Na prática, isso dá mais previsibilidade para quem contrata no CPF. O índice é divulgado todo ano, e a operadora o aplica na data de aniversário do contrato.',
          'Essa previsibilidade é um dos motivos pelos quais o plano individual pode custar mais na entrada e, mesmo assim, fazer sentido para quem pretende ficar muitos anos. O preço do primeiro boleto é só uma parte da conta.',
          'A limitação é a oferta: poucas operadoras ainda vendem esse tipo de contrato em São Paulo, e cada uma atende regiões e faixas etárias específicas.'
        ]
      },
      {
        questionH2: 'Por que o coletivo por adesão e o empresarial podem subir mais?',
        directFirstSentence: 'Nos contratos coletivos, o aumento é calculado pela operadora a partir do uso e dos custos do contrato, sem o índice único da categoria individual.',
        content: [
          'O nome técnico para esse uso é sinistralidade: a relação entre o que a operadora gastou com o grupo e o que recebeu de mensalidades. Quando o grupo usa mais, a pressão por aumento cresce.',
          'Contratos com poucas vidas, como os de MEI e de pequenas empresas, costumam ser calculados em conjunto com outros contratos parecidos. Isso dilui o impacto de uma internação no seu grupo, mas você também passa a depender do resultado de um grupo maior, que não controla.',
          'Por isso, a mensalidade menor de um plano por CNPJ ou por adesão não conta a história inteira. Sem o histórico de reajustes daquela linha, a comparação com o individual fica pela metade.'
        ]
      },
      {
        questionH2: 'O que perguntar antes de escolher para não levar um susto?',
        directFirstSentence: 'Antes de assinar, pergunte qual é o mês de aniversário, como o reajuste é calculado naquele contrato e qual foi o histórico de aumentos daquela linha.',
        content: [
          'Nenhum corretor consegue prever o aumento do próximo ano, e desconfie de quem promete um número. O que dá para fazer é comparar como cada contrato calcula o reajuste e o que aconteceu nos anos anteriores.',
          'Também vale olhar a mensalidade como uma decisão de longo prazo. Trocar de plano depois de um aumento grande é possível, mas pode envolver novas análises e carências, dependendo do tempo de plano e da operadora.',
          'Quando a tabela vigente chega, a gente coloca as opções lado a lado com a sua faixa etária, para você enxergar também o preço das próximas faixas.'
        ]
      }
    ],
    concreteBlock: {
      type: 'table',
      title: 'Como o reajuste funciona em cada tipo de contrato',
      description: 'Comparação prática. As regras do seu contrato estão na proposta da operadora.',
      headers: ['Tipo de contrato', 'Como o reajuste anual é definido', 'O que observar'],
      rows: [
        ['Individual ou familiar (CPF)', 'Índice único da categoria, divulgado todo ano', 'Oferta limitada de operadoras e regiões'],
        ['Coletivo por adesão', 'Calculado pela operadora e pela administradora, conforme uso e custos', 'Peça o histórico de reajustes da entidade e da linha'],
        ['Empresarial pequeno (MEI e PME)', 'Calculado pela operadora, em geral junto com contratos parecidos', 'Mensalidade inicial não mostra os aumentos seguintes'],
        ['Mudança de faixa etária (todos)', 'Previsto na tabela de faixas do próprio contrato', 'Veja a tabela inteira, não só a sua idade de hoje']
      ]
    },
    keyTakeaways: [
      'O reajuste acompanha o custo do grupo, e não o quanto você usou o plano.',
      'Reajuste anual e mudança de faixa etária são aumentos diferentes e podem cair no mesmo ano.',
      'No individual, o índice anual é único; no coletivo, a operadora calcula com base no uso e nos custos.',
      'Peça o mês de aniversário, a tabela inteira de faixas e o histórico de aumentos antes de escolher.'
    ],
    customWhatsappText: 'Olá! Gostaria de comparar como é o reajuste nas opções de plano de saúde para o meu perfil.',
    ctaTitle: 'Quer comparar os planos olhando além do primeiro boleto?',
    ctaDescription: 'Envie as idades pelo WhatsApp. A gente mostra a tabela vigente com todas as faixas e explica como é o reajuste em cada opção.'
  },

  // 12. PERDI O PLANO DA EMPRESA
  {
    id: 'artigo-12-perdi-plano-empresa',
    slug: 'perdi-o-plano-da-empresa-o-que-fazer',
    title: 'Perdi o plano da empresa. Como contratar por conta sem começar do zero',
    subtitle: 'Demissão, fim de contrato ou empresa que cancelou o benefício: o que fazer antes de o plano acabar para não perder o tempo já cumprido.',
    targetKeyword: 'perdi o plano da empresa o que fazer',
    metaDescription: 'Perdeu o plano da empresa? Veja o que perguntar ao RH, como pedir a carta de permanência e como contratar por conta aproveitando o tempo já cumprido.',
    category: 'Casos Especiais & Riscos',
    publishDate: '2026-11-12',
    readTime: '6 min de leitura',
    author: {
      name: 'Andrea Correa Leite',
      role: 'Corretora Habilitada com Registro SUSEP',
      susep: '10.2000204.1',
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 20 anos. Atendimento técnico sem atalhos irregulares.',
      profileUrl: '/sobre'
    },
    introAnswer: 'O primeiro passo é agir antes de o plano acabar: pergunte ao RH se você pode continuar no plano atual e peça a carta de permanência à empresa ou à operadora. Com esse documento e os comprovantes do plano anterior, muitas operadoras aceitam reduzir as carências de quem já tinha 12 ou 24 meses de plano, conforme a regra de cada uma.',
    sections: [
      {
        questionH2: 'Posso continuar no plano da empresa depois de sair?',
        directFirstSentence: 'Em alguns casos sim: quem foi demitido sem justa causa ou se aposentou e ajudava a pagar a mensalidade pode ter a opção de continuar, assumindo o valor integral.',
        content: [
          'A pergunta certa para o RH é direta: "eu tenho direito de continuar no plano? Por quanto tempo e por qual valor?". As condições dependem de como você pagava o plano e do motivo da saída, então peça a resposta por escrito.',
          'Mesmo quando essa opção existe, compare o valor. Sem a parte que a empresa pagava, a mensalidade pode mudar bastante. Continuar pode ser uma boa ponte para quem está em tratamento ou tem um procedimento marcado.',
          'Atenção ao prazo para responder: normalmente existe uma data para aceitar essa opção. Depois dela, o caminho é contratar um plano novo.'
        ]
      },
      {
        questionH2: 'Que documentos devo pedir antes de o plano acabar?',
        directFirstSentence: 'O documento mais importante é a carta de permanência, que informa desde quando você está no plano e qual é o tipo de contrato.',
        content: [
          'Peça a carta enquanto o vínculo está ativo, porque ela costuma ser mais simples de conseguir nesse momento. Guarde junto os comprovantes do plano e uma cópia da carteirinha.',
          'Inclua os dependentes nesse pedido. Cônjuge e filhos que estavam no plano também podem precisar comprovar o próprio tempo de permanência, e a data de entrada de cada um pode ser diferente.',
          'Esses papéis são o que a nova operadora analisa para decidir se reduz as carências. Sem eles, a negociação pode acabar na tabela padrão de prazos.'
        ]
      },
      {
        questionH2: 'Dá para aproveitar a carência já cumprida no plano novo?',
        directFirstSentence: 'Muitas vezes sim: as operadoras costumam reduzir carências de quem comprova 12 ou 24 meses de plano anterior, cada uma com a sua própria tabela.',
        content: [
          'A redução não é automática, e não é igual em toda operadora. A proposta precisa indicar o que foi aproveitado, e é esse documento que vale, não a conversa de venda.',
          'Por isso o ideal é evitar um intervalo sem plano entre o antigo e o novo. Quanto mais tempo passa depois do fim do plano anterior, mais difícil fica conseguir essa redução, e o intervalo deixa você descoberto.',
          'Se o plano acabar sem nenhuma redução aprovada, os prazos habituais são de 24 horas para urgência, 30 dias para consultas e exames básicos e 180 dias para internações e cirurgias eletivas.'
        ]
      },
      {
        questionH2: 'Qual operadora consigo contratar sem empresa?',
        directFirstSentence: 'Sem CNPJ, as opções no CPF incluem São Cristóvão, Trasmontano, HapVida Notredame, UniHosp, Plena e Blue Med, além de Prevent Senior e MedSênior para o público mais velho.',
        content: [
          'Aqui costuma vir a surpresa: o plano da empresa muitas vezes é de uma operadora que não vende no CPF. Amil, Bradesco Saúde, SulAmérica, Porto Seguro Saúde e Seguros Unimed contratam por adesão a entidade de classe ou por empresa.',
          'Se você tem formação ou profissão que dá direito a uma entidade, o plano por adesão pode ser o caminho para continuar em uma dessas operadoras. Sem esse vínculo, o foco passa a ser o CPF.',
          'Cada operadora atende regiões diferentes, então a rede perto de casa e do seu médico pesa tanto quanto a mensalidade. Não abra um CNPJ só para manter o plano: quando a empresa não tem atividade real, o contrato fica em risco.'
        ]
      }
    ],
    concreteBlock: {
      type: 'steps',
      title: 'O que fazer, nesta ordem, quando o plano da empresa vai acabar',
      description: 'Comece pelo primeiro passo assim que souber da saída, mesmo antes da data final do plano.',
      steps: [
        { step: 1, title: 'Descubra a data final do plano', detail: 'Pergunte ao RH o último dia de cobertura. O restante do planejamento é feito a partir dessa data.' },
        { step: 2, title: 'Pergunte se você pode continuar', detail: 'Peça por escrito se existe essa opção, por quanto tempo e por qual valor.' },
        { step: 3, title: 'Peça a carta de permanência', detail: 'Solicite para você e para cada dependente, e guarde os comprovantes e as carteirinhas.' },
        { step: 4, title: 'Anote tratamentos em andamento', detail: 'Liste consultas, exames e cirurgias já marcados. Isso pesa na escolha entre continuar ou trocar.' },
        { step: 5, title: 'Compare as opções disponíveis', detail: 'Coloque lado a lado CPF e adesão, com a rede perto de casa e a tabela vigente para as suas idades.' },
        { step: 6, title: 'Confirme a redução na proposta', detail: 'Antes de assinar, veja na proposta quais carências foram reduzidas e a data de início do plano novo.' }
      ]
    },
    keyTakeaways: [
      'Comece antes de o plano acabar: depois do fim, fica mais difícil aproveitar o tempo cumprido.',
      'Pergunte ao RH, por escrito, se você pode continuar no plano e por qual valor.',
      'A carta de permanência é o documento-chave para pedir a redução de carências.',
      'Muitas operadoras de plano empresarial não vendem no CPF, então compare as opções reais para o seu caso.'
    ],
    customWhatsappText: 'Olá! Vou perder o plano da empresa e gostaria de ver como contratar por conta aproveitando o tempo que já cumpri.',
    ctaTitle: 'Seu plano da empresa vai acabar?',
    ctaDescription: 'Envie pelo WhatsApp a data final do plano, as idades e a carta de permanência, se já tiver. A gente vê as opções para você não ficar descoberto.'
  },

  // 13. ENFERMARIA OU APARTAMENTO
  {
    id: 'artigo-13-enfermaria-ou-apartamento',
    slug: 'plano-de-saude-enfermaria-ou-apartamento',
    title: 'Enfermaria ou apartamento: o que muda no dia a dia e no preço do plano',
    subtitle: 'A diferença aparece na internação, não na consulta. Veja o que muda de verdade e como escolher a acomodação certa.',
    targetKeyword: 'plano de saúde enfermaria ou apartamento',
    metaDescription: 'Plano de saúde com enfermaria ou apartamento? Veja o que muda na internação, no parto, na rede de hospitais e na mensalidade antes de escolher a acomodação.',
    category: 'Como Funciona na Prática',
    publishDate: '2026-11-16',
    readTime: '5 min de leitura',
    author: {
      name: 'Andrea Correa Leite',
      role: 'Corretora Habilitada com Registro SUSEP',
      susep: '10.2000204.1',
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 20 anos. Atendimento técnico sem atalhos irregulares.',
      profileUrl: '/sobre'
    },
    introAnswer: 'A diferença entre enfermaria e apartamento é o tipo de quarto em uma internação: na enfermaria você divide o quarto com outros pacientes; no apartamento, o quarto é individual e com mais espaço para o acompanhante. Consultas, exames e o tratamento médico não mudam por causa disso. O apartamento custa mais e, em algumas tabelas, dá acesso a hospitais diferentes.',
    sections: [
      {
        questionH2: 'O que muda de verdade entre enfermaria e apartamento?',
        directFirstSentence: 'O que muda é o quarto durante a internação: coletivo na enfermaria e individual no apartamento, com a mesma lista de procedimentos cobertos.',
        content: [
          'Na enfermaria, o quarto é compartilhado, e o número de leitos varia conforme o hospital. Você terá menos privacidade e pode ter horários de visita mais restritos.',
          'No apartamento, o quarto é só seu, em geral com banheiro privativo e acomodação para o acompanhante. Em uma internação longa, ou no pós-operatório, essa diferença é o que a família mais sente.',
          'A escolha não muda o que o médico pode fazer por você. Uma cirurgia coberta continua coberta nas duas opções, seguindo as regras do contrato.'
        ]
      },
      {
        questionH2: 'A acomodação muda alguma coisa nas consultas e nos exames?',
        directFirstSentence: 'Em geral não: consultas e exames ambulatoriais seguem a mesma rede do produto, porque a acomodação se refere à internação.',
        content: [
          'Quem quase nunca é internado passa anos sem perceber diferença entre os dois tipos de plano. Isso explica por que a enfermaria costuma ser escolhida por quem quer reduzir a mensalidade.',
          'Mas há uma ressalva importante: em algumas operadoras, a mudança de acomodação vem junto com outra categoria de produto. Nesse caso, a rede de consultórios e de laboratórios também pode mudar, e a comparação precisa ser feita produto a produto.'
        ]
      },
      {
        questionH2: 'A rede de hospitais pode ser diferente?',
        directFirstSentence: 'Sim, em alguns produtos o hospital que você quer só atende quem tem apartamento, ou atende a enfermaria em unidades diferentes.',
        content: [
          'Esse é o ponto que mais deve pesar. Antes de decidir, procure o hospital de sua preferência na rede daquele produto específico, e não apenas na rede geral da operadora.',
          'Na rede própria de algumas operadoras, como a da Trasmontano, existem opções de enfermaria e apartamento. Mesmo assim, vale conferir qual hospital atende cada opção na sua região, porque é lá que você seria internado.',
          'Uma boa pergunta para fazer antes da assinatura é: "se eu precisar internar amanhã, em qual hospital deste produto eu iria?". A resposta vale mais do que o nome da categoria.'
        ]
      },
      {
        questionH2: 'E no parto, qual a acomodação indicada?',
        directFirstSentence: 'No parto, a acomodação contratada define o quarto da mãe e pode influenciar a maternidade disponível, então confira antes de planejar a gravidez.',
        content: [
          'Quem planeja ter filhos costuma olhar mais para essa diferença, porque é uma internação quase certa. O prazo habitual na tabela da operadora para o parto a termo é de 300 dias, e por isso a escolha precisa ser feita bem antes.',
          'Procure a maternidade que você pretende usar na rede do produto, e veja como funciona o acompanhante nas duas acomodações.',
          'Pode ser difícil mudar de ideia depois. Passar da enfermaria para o apartamento durante o contrato pode exigir uma nova análise e um novo prazo para usar a acomodação superior.'
        ]
      },
      {
        questionH2: 'Como decidir qual escolher?',
        directFirstSentence: 'Decida olhando primeiro o hospital que você usaria, depois a diferença na mensalidade em todas as faixas de idade da família.',
        content: [
          'Se a diferença de preço é pequena na sua faixa etária, o apartamento pode compensar pela privacidade em um momento difícil. Se a diferença pesa todos os meses e o hospital é o mesmo, a enfermaria pode atender bem.',
          'Para quem tem mais idade ou um histórico de internações, o conforto do apartamento costuma ter mais valor, porque a chance de precisar dele é maior. Só que o preço também cresce com a faixa etária, então a conta precisa ser feita com os valores reais da tabela vigente.'
        ]
      }
    ],
    concreteBlock: {
      type: 'table',
      title: 'Enfermaria e apartamento lado a lado',
      description: 'Comparação geral. Os detalhes de cada produto estão na proposta e na rede da operadora.',
      headers: ['O que comparar', 'Enfermaria', 'Apartamento'],
      rows: [
        ['Quarto na internação', 'Coletivo, dividido com outros pacientes', 'Individual'],
        ['Acompanhante', 'Conforme a regra do hospital e do contrato', 'Em geral com acomodação no próprio quarto'],
        ['Procedimentos cobertos', 'Os previstos no contrato', 'Os previstos no contrato'],
        ['Rede de hospitais', 'Confira no produto', 'Confira no produto; pode incluir outras unidades'],
        ['Mensalidade', 'Menor', 'Maior; peça a diferença na sua faixa etária'],
        ['Para quem costuma fazer sentido', 'Quem prioriza o custo mensal', 'Quem prioriza privacidade em uma internação']
      ]
    },
    keyTakeaways: [
      'A diferença aparece na internação, não na consulta de rotina.',
      'Procure o hospital que você usaria na rede do produto antes de decidir.',
      'Confira a maternidade e a regra do acompanhante se planeja ter filhos.',
      'Compare a diferença de preço em todas as faixas de idade da família.'
    ],
    customWhatsappText: 'Olá! Gostaria de comparar enfermaria e apartamento com os valores para as idades da minha família.',
    ctaTitle: 'Quer ver a diferença real no seu caso?',
    ctaDescription: 'Envie as idades e o hospital que você prefere pelo WhatsApp. A gente compara enfermaria e apartamento na tabela vigente.'
  },

  // 14. REGIONAL OU NACIONAL
  {
    id: 'artigo-14-regional-ou-nacional',
    slug: 'plano-de-saude-regional-ou-nacional',
    title: 'Abrangência regional ou nacional: quando vale pagar por cobertura no Brasil todo',
    subtitle: 'Morar em São Paulo e viajar de vez em quando não significa precisar de um plano nacional. Veja como decidir pelo seu dia a dia.',
    targetKeyword: 'plano de saúde regional ou nacional',
    metaDescription: 'Plano de saúde regional ou nacional? Veja o que cada abrangência cobre, o que acontece em viagem e quando faz sentido pagar por cobertura em todo o Brasil.',
    category: 'Como Funciona na Prática',
    publishDate: '2026-11-19',
    readTime: '6 min de leitura',
    author: {
      name: 'Andrea Correa Leite',
      role: 'Corretora Habilitada com Registro SUSEP',
      susep: '10.2000204.1',
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 20 anos. Atendimento técnico sem atalhos irregulares.',
      profileUrl: '/sobre'
    },
    introAnswer: 'Um plano regional cobre o atendimento de rotina em uma área definida no contrato, como a capital e cidades vizinhas; um plano nacional leva a rede para outros estados. O nacional faz sentido quando você tem rotina fora da região, como trabalho, família ou tratamento em outro estado. Para quem vive e se trata em São Paulo, o regional costuma atender, desde que a rede esteja perto.',
    sections: [
      {
        questionH2: 'O que significa abrangência no plano de saúde?',
        directFirstSentence: 'Abrangência é a área geográfica em que o contrato garante o atendimento, e ela aparece escrita na proposta e na carteirinha.',
        content: [
          'Os formatos mais comuns são municipal, grupo de municípios, estadual e nacional. O nome do produto nem sempre deixa isso claro, por isso o campo a ser conferido é o de abrangência na proposta.',
          'Abrangência e rede são coisas diferentes. Um plano pode ter abrangência em uma área grande e, ainda assim, ter poucos hospitais perto da sua casa. O contrário também acontece: um plano regional com rede forte onde você mora.',
          'Em São Paulo, isso fica bem visível. A Plena Saúde, por exemplo, concentra atendimento na Zona Norte, na Zona Oeste e em Osasco; a São Cristóvão tem forte presença na Zona Leste e no Centro expandido.'
        ]
      },
      {
        questionH2: 'Plano regional me deixa sem atendimento em uma viagem?',
        directFirstSentence: 'Depende do contrato: a regra de urgência fora da área de abrangência varia, então confira na proposta antes de assumir que está coberto.',
        content: [
          'A pergunta certa é: "se eu passar mal em outra cidade, como funciona?". Alguns contratos preveem atendimento de urgência fora da região, e outros têm condições específicas, como reembolso ou transferência.',
          'Quem viaja poucas vezes por ano pode achar mais sensato manter o plano regional e entender bem essa regra do que pagar a diferença todos os meses. Já quem viaja com frequência para o mesmo lugar precisa fazer outra conta.',
          'Uma confusão comum é achar que a rede nacional dá acesso a consulta de rotina em qualquer lugar. Antes de contar com isso, confira se existe rede no destino que você frequenta.'
        ]
      },
      {
        questionH2: 'Quando vale pagar por um plano nacional?',
        directFirstSentence: 'Vale quando existe um motivo concreto e recorrente fora da sua região: trabalho frequente, família em outro estado ou intenção de se tratar em outra cidade.',
        content: [
          'Um exemplo prático: quem passa parte do mês em outro estado por trabalho usa aquela rede de verdade. Já quem visita a família uma vez por ano talvez pague por algo que quase não usa.',
          'Quem está mudando de cidade em breve também deve considerar isso. Em vez de levar em conta só o lugar de hoje, pense onde a família deve morar durante os próximos anos de contrato.'
        ]
      },
      {
        questionH2: 'Quem só tem CPF consegue contratar um plano nacional?',
        directFirstSentence: 'É mais difícil: as operadoras do nosso guia com abrangência nacional, como Bradesco Saúde, SulAmérica, Seguros Unimed e Unimed Nacional, contratam por adesão ou por empresa.',
        content: [
          'No CPF, a maior parte das opções em São Paulo é regional, com rede concentrada na capital e nas cidades próximas. A Trasmontano, por exemplo, cobre a capital, o Grande ABC e a Baixada Santista; a UniHosp cobre partes da capital e o Grande ABC.',
          'Para quem tem formação ou profissão ligada a uma entidade de classe, o plano por adesão pode abrir o caminho para as linhas nacionais. Sem esse vínculo, abrir um CNPJ só para ter cobertura nacional não é uma saída segura.',
          'Se o seu caso é só ter rede perto de casa em São Paulo, a abrangência regional no CPF costuma resolver sem precisar de nenhum atalho.'
        ]
      }
    ],
    concreteBlock: {
      type: 'checklist',
      title: 'Cinco perguntas para decidir entre regional e nacional',
      description: 'Responda com a sua rotina real, não com a viagem que talvez aconteça um dia.',
      items: [
        { title: 'Onde a família mora e trabalha?', desc: 'Confira hospitais e pronto-socorro perto desses endereços na rede do produto.' },
        { title: 'Você tem rotina em outro estado?', desc: 'Trabalho frequente ou família que você visita muito pesam a favor da abrangência nacional.' },
        { title: 'Há rede de verdade no destino?', desc: 'Procure a cidade na rede do produto, em vez de confiar só na palavra "nacional".' },
        { title: 'Como é a urgência fora da região?', desc: 'Peça a regra por escrito, com o que acontece em uma viagem.' },
        { title: 'Você vai mudar de cidade em breve?', desc: 'Trocar de plano depois pode envolver nova análise. Se a mudança é provável, fale disso antes.', alert: true }
      ]
    },
    keyTakeaways: [
      'Abrangência é a área do contrato; rede é quem realmente atende nessa área.',
      'Plano nacional vale quando existe uma rotina recorrente fora da sua região.',
      'A regra de urgência fora da área varia, e precisa ser conferida na proposta.',
      'No CPF, a maior parte das opções em São Paulo é regional.'
    ],
    customWhatsappText: 'Olá! Gostaria de saber se no meu caso faz mais sentido um plano regional ou nacional.',
    ctaTitle: 'Regional ou nacional: qual faz sentido para a sua rotina?',
    ctaDescription: 'Conte onde a família mora e para onde costuma ir. A gente mostra pelo WhatsApp as opções com rede de verdade nesses lugares.'
  },

  // 15. REEMBOLSO
  {
    id: 'artigo-15-reembolso',
    slug: 'reembolso-plano-de-saude-como-funciona',
    title: 'Como funciona o reembolso de consulta no plano de saúde',
    subtitle: 'Nem todo plano tem reembolso, e o valor devolvido segue uma tabela. Veja o passo a passo e o que conferir antes de contratar.',
    targetKeyword: 'reembolso plano de saúde como funciona',
    metaDescription: 'Veja como funciona o reembolso do plano de saúde: quais planos têm, quanto volta da consulta particular, quais documentos enviar e o que evitar no pedido.',
    category: 'Como Funciona na Prática',
    publishDate: '2026-11-23',
    readTime: '5 min de leitura',
    author: {
      name: 'Andrea Correa Leite',
      role: 'Corretora Habilitada com Registro SUSEP',
      susep: '10.2000204.1',
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 20 anos. Atendimento técnico sem atalhos irregulares.',
      profileUrl: '/sobre'
    },
    introAnswer: 'No reembolso, você paga a consulta particular a um médico fora da rede, envia o recibo ou a nota fiscal à operadora e recebe de volta um valor limitado pela tabela do seu contrato. Nem sempre esse valor cobre o preço inteiro, e nem todo plano tem esse recurso. Por isso, a tabela de reembolso precisa ser comparada antes da contratação.',
    sections: [
      {
        questionH2: 'Todo plano de saúde tem reembolso?',
        directFirstSentence: 'Não: o reembolso de livre escolha é uma característica de alguns produtos, em geral nas categorias com preço mais alto.',
        content: [
          'Em São Paulo, esse recurso aparece em operadoras como SulAmérica, Bradesco Saúde, Seguros Unimed e nas linhas Amil com essa opção. Essas operadoras contratam por adesão ou por empresa, e não diretamente no CPF.',
          'Os planos de rede própria funcionam de outra forma. A proposta deles é você usar os hospitais e os centros médicos da operadora, e é isso que ajuda a segurar o preço. Quem prioriza reembolso livre não costuma ser o público da Trasmontano ou da HapVida Notredame.',
          'Confirme sempre no produto, não na marca. Dentro da mesma operadora, uma categoria pode ter reembolso e outra não.'
        ]
      },
      {
        questionH2: 'Quanto eu recebo de volta?',
        directFirstSentence: 'Você recebe o valor previsto na tabela do seu contrato para aquele procedimento, limitado ao que pagou, e não necessariamente o preço total da consulta.',
        content: [
          'Cada categoria tem a sua própria tabela. Quanto mais alta a categoria, em geral maior o limite. Se o seu médico cobra mais do que esse limite, a diferença fica por sua conta.',
          'Peça a simulação com o procedimento que você realmente usa. Se você tem um médico de confiança fora da rede, pergunte quanto a operadora devolveria pela consulta dele naquela categoria.',
          'Esse é um dado que depende da tabela vigente da operadora, por isso é preciso pedir a informação do seu produto, e não usar um valor que viu em outro lugar.'
        ]
      },
      {
        questionH2: 'Quais documentos preciso enviar?',
        directFirstSentence: 'Normalmente você envia a nota fiscal ou o recibo da consulta, com os dados do profissional e do paciente, pelo aplicativo ou portal da operadora.',
        content: [
          'O documento precisa identificar quem atendeu, quem foi atendido, o valor, a data e o que foi feito. Em exames e procedimentos, a operadora pode pedir também o pedido médico e o laudo.',
          'Guarde os originais. A operadora pode pedir o comprovante de pagamento, e o prazo para solicitar o reembolso e para receber o valor está no contrato. Vale conferir isso antes de deixar para depois.',
          'Na SulAmérica, por exemplo, você solicita pelo aplicativo e recebe diretamente na sua conta. Cada operadora tem o próprio caminho, que aparece no aplicativo do beneficiário.'
        ]
      },
      {
        questionH2: 'O que devo evitar para não ter problema com o reembolso?',
        directFirstSentence: 'Nunca entregue login e senha do plano a uma clínica, e nunca aceite recibo de uma consulta que não aconteceu ou com valor diferente do que você pagou.',
        content: [
          'Algumas clínicas oferecem "fazer o reembolso por você" e pedem a sua senha. Isso coloca os seus dados em risco e deixa o pedido em seu nome, mesmo que você não saiba o que foi enviado.',
          'Recibo fracionado ou de procedimento que não ocorreu também é um problema sério. O pedido sai em seu nome e, se a operadora identificar a irregularidade, é você quem precisa responder.',
          'A regra é simples: peça o reembolso você mesmo, com o documento real da consulta real, e deixe o histórico do aplicativo em dia.'
        ]
      },
      {
        questionH2: 'Como saber se vale pagar por um plano com reembolso?',
        directFirstSentence: 'Faz sentido quando você usa com frequência um médico que não está na rede, e quando a tabela daquela categoria devolve uma parte relevante da consulta.',
        content: [
          'Compare duas contas: a diferença de mensalidade para a categoria com reembolso e o que você de fato receberia por ano com as consultas que costuma fazer.',
          'Se o seu médico atende na rede de um plano mais simples, talvez você não precise pagar por esse recurso. Antes de decidir, pergunte a ele quais convênios atende.'
        ]
      }
    ],
    concreteBlock: {
      type: 'steps',
      title: 'Como pedir um reembolso de consulta',
      description: 'O caminho geral. O aplicativo da sua operadora mostra as etapas e os prazos do seu contrato.',
      steps: [
        { step: 1, title: 'Confira a cobertura antes da consulta', detail: 'Veja no aplicativo se o seu produto tem reembolso e qual o limite para aquele procedimento.' },
        { step: 2, title: 'Pague e peça o documento certo', detail: 'Solicite nota fiscal ou recibo com os dados do profissional, do paciente, o valor e a data.' },
        { step: 3, title: 'Abra o pedido você mesmo', detail: 'Entre no aplicativo ou portal da operadora e envie os arquivos. Não entregue a sua senha a terceiros.' },
        { step: 4, title: 'Acompanhe a análise', detail: 'A operadora pode pedir um comprovante de pagamento ou o pedido médico. Responda dentro do prazo.' },
        { step: 5, title: 'Confira o valor recebido', detail: 'Compare o depósito com a tabela do contrato. Se houver diferença, peça a explicação à operadora.' }
      ]
    },
    keyTakeaways: [
      'Reembolso é uma característica do produto, e nem todo plano tem.',
      'O valor devolvido segue a tabela do contrato e pode não cobrir toda a consulta.',
      'Envie documentos reais e faça o pedido com o seu próprio acesso.',
      'Se o seu médico atende em um convênio mais simples, talvez você não precise desse recurso.'
    ],
    customWhatsappText: 'Olá! Gostaria de saber quais planos têm reembolso no meu caso e quanto volta da consulta do meu médico.',
    ctaTitle: 'Quer manter o seu médico de confiança?',
    ctaDescription: 'Informe pelo WhatsApp a sua profissão e o médico que você usa. A gente compara a rede e a tabela de reembolso das opções disponíveis.'
  },

  // 16. TROCAR DE PLANO
  {
    id: 'artigo-16-trocar-plano-carencia',
    slug: 'trocar-de-plano-de-saude-sem-carencia',
    title: 'Como mudar de plano aproveitando o tempo que já cumpri',
    subtitle: 'Trocar de operadora nem sempre significa cumprir tudo de novo. Veja o que analisar e em que ordem fazer a mudança.',
    targetKeyword: 'trocar de plano de saúde sem carência',
    metaDescription: 'Quer trocar de plano de saúde sem carência? Veja como aproveitar o tempo já cumprido, o que pode ficar de fora e por que não cancelar antes da proposta aceita.',
    category: 'Como Funciona na Prática',
    publishDate: '2026-11-26',
    readTime: '6 min de leitura',
    author: {
      name: 'Andrea Correa Leite',
      role: 'Corretora Habilitada com Registro SUSEP',
      susep: '10.2000204.1',
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 20 anos. Atendimento técnico sem atalhos irregulares.',
      profileUrl: '/sobre'
    },
    introAnswer: 'Para mudar de plano aproveitando o tempo já cumprido, você precisa comprovar a permanência no plano atual e pedir a redução de carências antes de cancelar. Muitas operadoras aceitam quem tem 12 ou 24 meses de plano anterior, cada uma com sua regra. A resposta sobre o que foi reduzido deve constar na proposta, e o plano antigo só deve ser cancelado depois da aceitação do novo.',
    sections: [
      {
        questionH2: 'Quando faz sentido trocar de plano?',
        directFirstSentence: 'A troca faz sentido quando existe um motivo concreto, como aumento que pesou, rede que piorou, mudança de endereço ou um contrato que não atende mais a família.',
        content: [
          'Antes de comparar preços, escreva o motivo. Trocar só por causa da mensalidade, sem olhar a rede, pode levar você a uma mensalidade menor em um hospital distante da sua casa.',
          'Veja também o que você pode perder. Um contrato individual antigo, por exemplo, tem uma forma de reajuste que dificilmente você encontrará igual em um plano coletivo, e isso precisa entrar na conta.',
          'Pergunte ainda se o seu médico atende no plano novo e se um tratamento em andamento continuaria sendo feito no mesmo lugar.'
        ]
      },
      {
        questionH2: 'De quanto tempo de plano preciso para reduzir as carências?',
        directFirstSentence: 'As tabelas de redução costumam pedir 12 ou 24 meses de plano anterior, conforme a operadora e o tipo de contrato.',
        content: [
          'Essa regra não é igual em toda parte. Com o mesmo tempo de plano, uma operadora pode reduzir mais carências do que outra, e isso pode mudar de uma campanha para outra.',
          'Por isso, vale comparar os prazos junto com o preço. Uma mensalidade um pouco maior com carências menores pode ser melhor para quem tem exames ou cirurgias planejados.',
          'Também existe a portabilidade de carências, um caminho com requisitos próprios sobre tempo de plano e compatibilidade entre os produtos. Peça para verificar se o seu caso se enquadra antes de escolher por qual caminho seguir.'
        ]
      },
      {
        questionH2: 'O que pode ficar de fora da redução?',
        directFirstSentence: 'Parto, categoria superior à do plano antigo e cobertura parcial de doença declarada são os pontos que mais costumam ficar de fora ou receber regras próprias.',
        content: [
          'Se o plano novo tem acomodação ou rede superior à do antigo, a operadora pode manter um prazo para usar aquilo que é novo. A redução cobre principalmente o que você já tinha.',
          'Quem estava cumprindo os 24 meses de cobertura parcial temporária deve perguntar como fica o tempo restante. E quem está planejando engravidar deve olhar o prazo de parto, de 300 dias na tabela habitual, com atenção redobrada.',
          'A proposta precisa detalhar o resultado. Se a informação só veio por mensagem, peça que ela apareça no documento.'
        ]
      },
      {
        questionH2: 'Por que não posso cancelar o plano atual antes?',
        directFirstSentence: 'Se você cancelar antes de a proposta nova ser aceita, pode ficar sem cobertura e ainda perder a base para pedir a redução.',
        content: [
          'A ordem correta é: cotar, separar documentos, enviar a proposta, receber a aceitação e a data de início, e só então cancelar o plano antigo. Esse cuidado evita um intervalo descoberto.',
          'A operadora nova ainda pode pedir uma análise da declaração de saúde, e isso leva tempo. Enquanto o processo acontece, mantenha o plano atual em dia. Mensalidade atrasada também pode atrapalhar a comprovação.',
          'Pode haver alguns dias com os dois planos ativos. Na maior parte dos casos, é um custo menor do que o risco de um período sem cobertura.'
        ]
      }
    ],
    concreteBlock: {
      type: 'checklist',
      title: 'O que separar antes de pedir a troca',
      description: 'Com esses itens em mãos, dá para comparar as opções com os prazos reais do seu caso.',
      items: [
        { title: 'Carta de permanência', desc: 'Mostra desde quando você está no plano e o tipo de contrato. Peça uma para cada beneficiário.' },
        { title: 'Comprovantes de pagamento', desc: 'Separe os boletos pagos mais recentes, porque a operadora nova pode pedir.' },
        { title: 'Carteirinha do plano atual', desc: 'Ajuda a identificar o produto, a acomodação e a abrangência para comparar.' },
        { title: 'Lista de médicos e tratamentos', desc: 'Anote quem você precisa manter e o que está em andamento.' },
        { title: 'Não cancele ainda', desc: 'O pedido de cancelamento só deve ser feito depois da aceitação da proposta e da confirmação da data de início.', alert: true }
      ]
    },
    keyTakeaways: [
      'As operadoras costumam pedir 12 ou 24 meses de plano anterior para reduzir carências.',
      'Compare o que foi reduzido junto com o preço e a rede.',
      'Parto e categoria superior costumam ter regras próprias.',
      'Cancele o plano antigo só depois da aceitação da proposta nova.'
    ],
    customWhatsappText: 'Olá! Quero trocar de plano e gostaria de ver como aproveitar o tempo que já cumpri.',
    ctaTitle: 'Pensando em trocar de plano?',
    ctaDescription: 'Envie sua carta de permanência e as idades pelo WhatsApp. A gente compara as opções e mostra o que cada operadora costuma reduzir.'
  },

  // 17. DECLARAÇÃO DE SAÚDE
  {
    id: 'artigo-17-declaracao-de-saude',
    slug: 'declaracao-de-saude-plano-de-saude',
    title: 'Declaração de saúde: o que perguntam e por que não omitir',
    subtitle: 'Como é o formulário, quem preenche, como responder em caso de dúvida e o que acontece depois de enviar.',
    targetKeyword: 'declaração de saúde plano de saúde',
    metaDescription: 'Veja o que é a declaração de saúde do plano, que perguntas aparecem no formulário, quem preenche, como responder em caso de dúvida e por que não omitir nada.',
    category: 'Como Funciona na Prática',
    publishDate: '2026-11-30',
    readTime: '5 min de leitura',
    author: {
      name: 'Andrea Correa Leite',
      role: 'Corretora Habilitada com Registro SUSEP',
      susep: '10.2000204.1',
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 20 anos. Atendimento técnico sem atalhos irregulares.',
      profileUrl: '/sobre'
    },
    introAnswer: 'A declaração de saúde é o formulário em que cada beneficiário informa as doenças e as lesões que sabe ter antes de contratar o plano. Ela costuma perguntar sobre diagnósticos, cirurgias, internações e tratamentos, além de peso e altura. Responda com o que você sabe e, na dúvida, consulte seu médico. É com base nela que a operadora analisa a proposta e define o que entra em cobertura parcial temporária.',
    sections: [
      {
        questionH2: 'O que a declaração de saúde costuma perguntar?',
        directFirstSentence: 'O formulário costuma listar grupos de doenças e perguntar sobre diagnósticos, cirurgias, internações, tratamentos em andamento e uso contínuo de medicamentos.',
        content: [
          'A maioria das perguntas é respondida com sim ou não, e pede mais detalhes quando a resposta é sim. Os grupos costumam passar por coração, pressão, diabetes, coluna, articulações, câncer, saúde mental e outros.',
          'Altura e peso também aparecem, porque ajudam na análise médica. Em alguns formulários, há perguntas sobre gravidez em andamento e sobre cirurgias já indicadas por um médico.',
          'Cada operadora usa o próprio modelo, e por isso as perguntas não são idênticas. Leia o formulário inteiro antes de responder: uma pergunta sobre um problema antigo pode estar escrita de um jeito diferente do que você imagina.'
        ]
      },
      {
        questionH2: 'Quem deve preencher e assinar?',
        directFirstSentence: 'Cada beneficiário responde por si, e o responsável legal responde por crianças e por dependentes que não podem assinar.',
        content: [
          'O titular não deve responder de memória pelo cônjuge ou por um filho adulto. Cada pessoa sabe melhor o próprio histórico, e a assinatura confirma que aquelas informações são verdadeiras.',
          'O corretor pode explicar o que uma pergunta quer dizer, mas não pode decidir a resposta por você. Desconfie de quem sugere marcar "não" em tudo para a proposta passar mais rápido.',
          'Em muitas operadoras, é possível fazer uma entrevista com um médico indicado por ela para tirar dúvidas sobre o preenchimento. Se você tem um histórico mais complexo, vale perguntar sobre essa opção.'
        ]
      },
      {
        questionH2: 'E se eu não tiver certeza de uma resposta?',
        directFirstSentence: 'Consulte o seu médico ou os seus exames antes de responder, porque o formulário pergunta sobre o que você sabe ter.',
        content: [
          'Não dá para declarar o que você nunca soube, e o formulário também não é um exame. A questão são as condições que você conhece: um diagnóstico que já recebeu, um tratamento que faz, uma cirurgia que já foi indicada.',
          'Quando a dúvida é sobre um problema antigo que passou, procure o laudo ou o relatório médico. Escreva o que aconteceu e quando, em vez de simplesmente deixar a pergunta de lado.',
          'Antes de assinar, confira o que foi escrito se outra pessoa ajudou a digitar. A responsabilidade pelas respostas continua sendo sua.'
        ]
      },
      {
        questionH2: 'O que acontece depois de enviar a declaração?',
        directFirstSentence: 'A operadora analisa as respostas e pode aceitar a proposta, pedir mais informações ou aplicar a cobertura parcial temporária às condições declaradas.',
        content: [
          'Em alguns casos, a operadora pede exames ou relatórios médicos antes de responder. Quanto mais clara for a declaração, menor a chance de a análise voltar com dúvidas.',
          'Quando existe uma condição declarada, o prazo habitual na tabela da operadora é de 24 meses de cobertura parcial temporária para o que está ligado a ela. Leia com atenção a resposta da análise antes de confirmar a contratação.',
          'Guarde uma cópia da declaração junto com a proposta. Esse documento pode ser consultado mais tarde, então é bom você saber exatamente o que foi informado.'
        ]
      },
      {
        questionH2: 'Por que não vale a pena omitir uma informação?',
        directFirstSentence: 'Porque a operadora pode comparar a declaração com o seu histórico quando você pedir um procedimento, e a omissão de algo conhecido pode gerar negativa e questionamento do contrato.',
        content: [
          'O problema não aparece na contratação, que fica mais rápida. Ele aparece anos depois, no pedido de uma cirurgia, quando o relatório do médico registra há quanto tempo aquele problema existe.',
          'Declarar traz uma limitação com data para terminar. A omissão deixa uma dúvida que pode aparecer na hora em que você mais precisar, e a discussão acontece quando você já está doente.',
          'A declaração também protege você: quando está tudo informado, fica muito mais simples reagir se surgir um problema com a análise de uma cobertura.'
        ]
      }
    ],
    concreteBlock: {
      type: 'checklist',
      title: 'Antes de preencher a declaração',
      description: 'Separe estes itens para responder com calma e sem depender da memória.',
      items: [
        { title: 'Diagnósticos que você já recebeu', desc: 'Liste as doenças conhecidas, com a data aproximada do diagnóstico.' },
        { title: 'Cirurgias e internações', desc: 'Anote o que foi feito e quando, e procure os relatórios quando houver.' },
        { title: 'Tratamentos e medicamentos atuais', desc: 'Tenha em mãos a lista do que você usa e por que motivo.' },
        { title: 'Cirurgias já indicadas', desc: 'Informe se algum médico já pediu um procedimento que ainda não foi feito.' },
        { title: 'Respostas de cada dependente', desc: 'Peça que cada adulto confira as próprias respostas antes de assinar.' },
        { title: 'Nunca marque "não" para acelerar', desc: 'Uma resposta que não corresponde ao que você sabe pode gerar problema justamente quando você precisar do plano.', alert: true }
      ]
    },
    keyTakeaways: [
      'A declaração pergunta sobre as doenças e as lesões que você sabe ter.',
      'Cada beneficiário responde pelo próprio histórico; o corretor não decide as respostas.',
      'Na dúvida, consulte o seu médico e procure os seus exames antes de responder.',
      'Guarde uma cópia da declaração junto com a proposta.'
    ],
    customWhatsappText: 'Olá! Tenho dúvidas sobre como funciona a declaração de saúde na contratação do plano.',
    ctaTitle: 'Dúvida sobre a declaração de saúde?',
    ctaDescription: 'Fale com a gente pelo WhatsApp antes de preencher. A gente explica o formulário da operadora que você escolher e o que acontece em cada etapa.'
  }
];

export const BLOG_CATEGORIES = [
  'Todos',
  'Casos Especiais & Riscos',
  'Guia de Operadoras',
  'Como Funciona na Prática',
  'Planos Empresariais & MEI'
];

