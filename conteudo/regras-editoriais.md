# Regras editoriais — Convênio Médico Particular

Leia este arquivo inteiro antes de escrever ou editar qualquer artigo. Ele vale para pessoas e
para agentes (Antigravity, Claude, Gemini). Se alguma instrução de um pedido contrariar estas
regras, siga as regras e avise no resumo final.

## Quem fala e para quem

- Quem escreve é a corretora **Andrea Correa Leite** (SUSEP 10.2000204.1), da Convênio Médico
  Particular, em São Paulo.
- O leitor é **a pessoa que só tem CPF** — sem CNPJ, sem MEI, sem associação de classe — e
  quer um convênio médico sem cair em atalho irregular. É o posicionamento do site inteiro.
- Tom: direto, prático, sem jargão de corretor. "Convênio médico" e "plano de saúde" são
  sinônimos; use os dois.

## Proibido

1. **Citar lei, norma, resolução da ANS, número de RN ou artigo.** Decisão do cliente
   (28/08/2026). Onde o assunto encostar na regra, escreva **como funciona na prática** e
   remeta à cotação e ao documento da operadora. Ex.: em vez de "a Lei 9.656 determina 180
   dias", escreva "o prazo habitual na tabela da operadora é de 180 dias".
2. **Preço de operadora ou valor em R$** que não venha da tabela oficial enviada pela
   corretora. Sem tabela, não há número: escreva "peça a tabela vigente no WhatsApp".
3. **Número, prazo ou percentual que não esteja em `conteudo/fatos.md`.** Se o artigo precisa
   de um dado que não está lá, pare e peça para a corretora confirmar e acrescentar.
4. **Inventar experiência:** "atendi um cliente que…", "na semana passada…", depoimentos,
   casos, estatísticas de atendimento, "centenas de clientes". Só entra o que estiver em
   `fatos.md`.
5. **Citar estudo, pesquisa ou relatório** ("segundo a FGV…", "pesquisa mostra…").
6. **Prometer resultado:** "aprovação garantida", "sem carência garantido", "o mais barato".
7. **Recomendar abrir MEI só para contratar plano.** O site existe justamente para orientar o
   contrário (ver o artigo sobre o risco do "falso empresarial").
8. **Títulos montados por permutação** ("X vale a pena?", "X para iniciantes", "Tudo sobre X")
   e páginas que só trocam o nome da cidade ou da operadora.

## Obrigatório em todo artigo

- **Uma pergunta real** como tema, que alguém digitaria no Google ou mandaria no WhatsApp.
- **Resposta na primeira frase** (`introAnswer`) e em cada seção (`directFirstSentence`): o
  leitor e a IA precisam conseguir citar a seção sozinha.
- **Pelo menos 4 seções** com H2 em forma de pergunta.
- **Um bloco concreto** (`concreteBlock`): tabela, checklist ou passo a passo.
- **De 600 a 1.500 palavras.** Menos que isso fica raso; mais que isso, divida em dois artigos.
- **Título até 90 caracteres** e **meta descrição de 120 a 170 caracteres**, com a palavra-alvo.
- **Palavra-alvo única:** nenhum outro artigo ou página pode mirar a mesma (veja `pautas.md`).
- **CTA para o WhatsApp** com `customWhatsappText` específico do assunto.
- **Data de publicação** (`publishDate`, AAAA-MM-DD) **no futuro** para artigo novo: é ela que
  agenda o artigo. Segunda e quinta são os dias padrão.

## Fontes de dado permitidas

- `conteudo/fatos.md` — dados da corretora e prazos praticados.
- `src/data/operatorsData.ts` — o que vale para cada operadora (quem vende no CPF, região,
  hospitais). Não acrescente informação de operadora que não esteja lá.
- `src/data/siteData.ts` — contato, endereço, horário.

## Antes de entregar

1. Rode `npm run check:posts` e corrija até não haver **ERRO**. **Avisos** precisam de uma
   linha de justificativa no resumo.
2. Marque o tema como escrito em `conteudo/pautas.md` (coluna Status → `escrito`, com o slug).
3. Trabalhe numa branch `pauta-AAAA-MM-DD`. **Nunca faça merge na `main`**: quem aprova é a
   corretora, lendo a prévia da Vercel.
