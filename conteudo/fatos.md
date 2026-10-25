# Base de fatos — Convênio Médico Particular

Só o que está aqui pode virar número, prazo ou afirmação num artigo. Cada linha diz de onde
veio. A coluna **Confirmado** é da corretora: `sim` = ela revisou; `a confirmar` = está no site
hoje, mas ainda não foi revisado por ela. Artigo novo deve preferir os `sim`.

O script `npm run check:posts` compara os números dos artigos com os números desta página.

## Corretora

| Fato | Valor | Fonte | Confirmado |
|---|---|---|---|
| Nome | Convênio Médico Particular | `src/data/siteData.ts` | sim |
| Corretora responsável | Andrea Correa Leite | `src/data/siteData.ts` | sim |
| Registro SUSEP | 10.2000204.1 | `src/data/siteData.ts` | sim |
| CNPJ | 17.818.045/0001-70 | `src/data/siteData.ts` | sim |
| Endereço | Rua São Roberto, 298 — Vila Marieta — São Paulo/SP — CEP 03617-010 | `src/data/siteData.ts` | sim |
| WhatsApp / telefone | (11) 99193-7930 | `src/data/siteData.ts` | sim |
| Horário de atendimento | 09:00 às 19:00, segunda a sábado | `siteData.ts` + JSON-LD do `index.html` | sim |
| Regiões atendidas | São Paulo (todas as regiões), Rio de Janeiro, Brasília, Paraná e atendimento digital no Brasil | `src/data/siteData.ts` | sim |
| Tempo de experiência | mais de 20 anos | bio da autora em `src/data/blogData.ts` | sim |
| Código direto nas operadoras | "código direto cadastrado em todas as operadoras" | `src/data/siteData.ts` |sim — a lista real ainda é pendência do briefing |

## Prazos praticados (carência) — sempre como "prazo habitual na tabela da operadora"

| Situação | Prazo | Fonte | Confirmado |
|---|---|---|---|
| Urgência e emergência | 24 horas | artigo de carência já publicado | sim |
| Consultas e exames básicos | 30 dias | artigo de carência já publicado | sim |
| Exames especiais, terapias, internações e cirurgias eletivas | 180 dias | artigo de carência já publicado | sim |
| Parto a termo | 300 dias (cerca de 10 meses) | artigo de carência já publicado | sim |
| Doença preexistente declarada (cobertura parcial temporária) | 24 meses | artigo de carência já publicado | sim |
| Tempo de plano anterior para pedir redução de carência | 12 ou 24 meses, conforme a operadora | artigo de carência já publicado | sim |

## Operadoras

Não duplique aqui: a fonte é `src/data/operatorsData.ts` (quem vende no CPF, adesão e PME,
região coberta em São Paulo, hospitais). Se precisar de algo que não está lá, peça para a
corretora acrescentar naquele arquivo.

## O que NÃO é fato publicável (referência interna)

Ficam fora dos artigos, mesmo sendo verdade, por decisão do cliente: números de lei e de
resolução da ANS, teto de reajuste anual definido pela ANS, regra de "6 meses de CNPJ" do MEI
(varia por operadora). Detalhes em `criar-skills/clientes/convenio-medico-particular/02-pesquisa-seo.md`,
seção 8.

## Como acrescentar um fato

Inclua uma linha na tabela certa, com a fonte (documento da operadora, tabela oficial, data) e
`Confirmado: sim` só depois que a corretora conferir.
