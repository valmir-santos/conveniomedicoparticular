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
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 10 anos. Atendimento técnico sem atalhos irregulares.',
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
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 10 anos. Atendimento técnico sem atalhos irregulares.',
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
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 10 anos. Atendimento técnico sem atalhos irregulares.',
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
        directFirstSentence: 'Contratar pelo MEI é excelente para quem já trabalha formalmente como autônomo e tem mais de 6 meses de CNPJ ativo, mas é um erro para quem só quer comprar plano médico pessoal.',
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
        { title: 'Você já tem MEI ativo há mais de 6 meses com faturamento real?', desc: 'Se SIM, o plano empresarial PME é vantajoso e plenamente regular.', alert: false },
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
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 10 anos. Atendimento técnico sem atalhos irregulares.',
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
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 10 anos. Atendimento técnico sem atalhos irregulares.',
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
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 10 anos. Atendimento técnico sem atalhos irregulares.',
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
      bio: 'Especialista em convênios médicos individuais, familiares e PME em São Paulo, Rio de Janeiro, Brasília e Paraná há mais de 10 anos. Atendimento técnico sem atalhos irregulares.',
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
  }
];

export const BLOG_CATEGORIES = [
  'Todos',
  'Casos Especiais & Riscos',
  'Guia de Operadoras',
  'Como Funciona na Prática'
];
