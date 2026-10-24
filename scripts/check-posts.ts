// Checagem dos artigos do blog: `npm run check:posts`.
// Artigo novo (data de hoje em diante) com ERRO não pode ir para a main.
// Artigo já publicado só gera AVISO, para não travar o site por conteúdo antigo.
// As regras vêm de conteudo/regras-editoriais.md.
import fs from 'node:fs';
import path from 'node:path';
import { BLOG_POSTS, BLOG_CATEGORIES, BlogPost } from '../src/data/blogData';
import { todayISO } from '../src/lib/site';

type Level = 'ERRO' | 'AVISO';
const problems: { slug: string; level: Level; msg: string }[] = [];
const today = todayISO();
const root = path.resolve(import.meta.dirname, '..');
const read = (f: string) => fs.readFileSync(path.join(root, f), 'utf-8');

const isNew = (p: BlogPost) => p.publishDate >= today;
// Em artigo novo vale como ERRO; em artigo já publicado, como AVISO.
const report = (p: BlogPost, msg: string, always: Level | null = null) =>
  problems.push({ slug: p.slug || p.id || '(sem slug)', level: always ?? (isNew(p) ? 'ERRO' : 'AVISO'), msg });

const textOf = (p: BlogPost) => {
  const b = p.concreteBlock || ({} as BlogPost['concreteBlock']);
  return [
    p.title, p.subtitle, p.metaDescription, p.introAnswer,
    ...(p.sections || []).flatMap((s) => [s.questionH2, s.directFirstSentence, ...(s.content || [])]),
    b.title, b.description, ...(b.headers || []), ...(b.rows || []).flat(),
    ...(b.items || []).flatMap((i) => [i.title, i.desc]),
    ...(b.steps || []).flatMap((s) => [s.title, s.detail]),
    ...(p.keyTakeaways || []), p.ctaTitle, p.ctaDescription,
  ].filter(Boolean).join(' ');
};
const words = (t: string) => t.split(/\s+/).filter(Boolean).length;

// Palavras já ocupadas por páginas do site (tabela em conteudo/pautas.md)
const pautas = read('conteudo/pautas.md');
const occupiedSection = pautas.split('## Palavras já ocupadas')[1]?.split('\n## ')[0] || '';
const occupied = [...occupiedSection.matchAll(/^\|\s*([^|`]+?)\s*\|\s*`/gm)].map((m) => m[1].toLowerCase());

// Números permitidos: os que aparecem em conteudo/fatos.md, sem a seção do que não é publicável
const fatos = read('conteudo/fatos.md').split('## O que NÃO é fato publicável')[0];
const allowedNumbers = new Set([...fatos.matchAll(/\d+(?:[.,]\d+)?/g)].map((m) => m[0].replace(',', '.')));

const FORBIDDEN: { re: RegExp; msg: string; level: Level | null }[] = [
  { re: /\bLei\s+(n[ºo°.]?\s*)?\d|\bLei\s+dos\s+Planos|\bRN\s*(ANS\s*)?(n[ºo°.]?\s*)?\d+|Resolu[çc][ãa]o\s+Normativa|\bart(igo|\.)\s*\d+/i, msg: 'cita lei, resolução ou artigo (regra 1)', level: 'ERRO' },
  { re: /\bANS\b|Agência Nacional de Saúde/i, msg: 'menciona a ANS: confira se não é afirmação normativa (regra 1)', level: 'AVISO' },
  { re: /\b(atendi|atendemos (um|uma)|um cliente nosso|uma cliente nossa|semana passada|m[êe]s passado|centenas de clientes|milhares de clientes|j[áa] ajudamos)\b/i, msg: 'parece experiência ou caso inventado (regra 4)', level: null },
  { re: /segundo (a|o|uma|um) (pesquisa|estudo|relat[óo]rio|levantamento)|(pesquisa|estudo|levantamento) (da|do|de|mostra|aponta|revela)|de acordo com (a|o) (pesquisa|estudo)/i, msg: 'cita estudo ou pesquisa (regra 5)', level: null },
  { re: /aprova[çc][ãa]o garantida|garantimos|o mais barato|100% aprovad|sem car[êe]ncia garantid/i, msg: 'promete resultado (regra 6)', level: null },
  { re: /abr(a|ir) (um )?MEI (para|pra) (ter|contratar|pagar)/i, msg: 'parece recomendar abrir MEI só para o plano (regra 7)', level: 'AVISO' },
];

const slugs = new Map<string, number>();
const ids = new Map<string, number>();
const titles = new Map<string, string>();
const keywords = new Map<string, string>();
const shingles = new Map<string, Set<string>>();

for (const p of BLOG_POSTS) {
  // Campos obrigatórios
  for (const f of ['id', 'slug', 'title', 'subtitle', 'targetKeyword', 'metaDescription', 'category', 'publishDate', 'readTime', 'introAnswer', 'customWhatsappText', 'ctaTitle', 'ctaDescription'] as const) {
    if (!String(p[f] ?? '').trim()) report(p, `campo "${f}" vazio`, 'ERRO');
  }
  if (!p.author?.name) report(p, 'autor sem nome', 'ERRO');

  if (p.slug && !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.slug)) report(p, 'slug fora do padrão (minúsculas, números e hífen, sem acento)', 'ERRO');
  slugs.set(p.slug, (slugs.get(p.slug) || 0) + 1);
  ids.set(p.id, (ids.get(p.id) || 0) + 1);

  if (!/^\d{4}-\d{2}-\d{2}$/.test(p.publishDate) || isNaN(new Date(`${p.publishDate}T12:00:00`).getTime())) {
    report(p, `data de publicação inválida: "${p.publishDate}" (use AAAA-MM-DD)`, 'ERRO');
  }
  if (p.category && !(BLOG_CATEGORIES as readonly string[]).includes(p.category)) {
    report(p, `categoria "${p.category}" não existe em BLOG_CATEGORIES`, 'ERRO');
  }

  if (p.title.length > 90) report(p, `título com ${p.title.length} caracteres (máximo 90)`);
  if (p.metaDescription.length < 120 || p.metaDescription.length > 170) report(p, `meta descrição com ${p.metaDescription.length} caracteres (de 120 a 170)`);
  if (/^tudo sobre|vale a pena\?$|para iniciantes/i.test(p.title)) report(p, 'título com cara de permutação de palavra-chave (regra 8)', 'AVISO');

  const prev = titles.get(p.title.toLowerCase());
  if (prev) report(p, `título igual ao de "${prev}"`, 'ERRO');
  titles.set(p.title.toLowerCase(), p.slug);

  const kw = p.targetKeyword.toLowerCase().trim();
  if (keywords.has(kw)) report(p, `palavra-alvo repetida com "${keywords.get(kw)}"`, 'ERRO');
  keywords.set(kw, p.slug);
  if (occupied.includes(kw)) report(p, `palavra-alvo já é de uma página do site (pautas.md)`, 'ERRO');

  // Estrutura
  if ((p.sections || []).length < 4) report(p, `só ${(p.sections || []).length} seções (mínimo 4)`);
  (p.sections || []).forEach((s, i) => {
    if (!s.questionH2?.trim().endsWith('?')) report(p, `seção ${i + 1}: o H2 deve ser uma pergunta`);
    if (!s.directFirstSentence?.trim()) report(p, `seção ${i + 1}: falta a resposta direta`, 'ERRO');
    if (!(s.content || []).length) report(p, `seção ${i + 1}: sem parágrafos`, 'ERRO');
  });
  const b = p.concreteBlock;
  if (!b) report(p, 'falta o bloco concreto (tabela, checklist ou passo a passo)', 'ERRO');
  else if ((b.type === 'table' && !(b.rows || []).length) || (b.type === 'checklist' && !(b.items || []).length) || (b.type === 'steps' && !(b.steps || []).length)) {
    report(p, `bloco concreto do tipo "${b.type}" está vazio`, 'ERRO');
  }
  if ((p.keyTakeaways || []).length < 3) report(p, 'menos de 3 pontos-chave');

  // Tamanho
  const text = textOf(p);
  const n = words(text);
  if (n < 600 || n > 1500) report(p, `${n} palavras (de 600 a 1.500)`);

  // Conteúdo proibido
  for (const f of FORBIDDEN) {
    const m = text.match(f.re);
    if (m) report(p, `${f.msg}: "…${text.slice(Math.max(0, m.index! - 30), m.index! + m[0].length + 30).trim()}…"`, f.level);
  }
  const prices = text.match(/R\$\s?\d[\d.,]*/g);
  if (prices) report(p, `${prices.length} valor(es) em R$ sem tabela oficial (regra 2): ${[...new Set(prices)].slice(0, 4).join(', ')}`);

  // Números com unidade que não estão em fatos.md
  const unknown = new Set<string>();
  for (const m of text.matchAll(/(\d+(?:[.,]\d+)?)\s*(%|dias?|meses|m[êe]s|horas?|anos?|vidas)\b/gi)) {
    if (!allowedNumbers.has(m[1].replace(',', '.'))) unknown.add(m[0]);
  }
  if (unknown.size) report(p, `número(s) fora de fatos.md (regra 3): ${[...unknown].slice(0, 6).join(', ')}`);

  // Para comparar semelhança entre artigos
  const w = text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').split(/[^a-z0-9]+/).filter(Boolean);
  const sh = new Set<string>();
  for (let i = 0; i + 4 < w.length; i++) sh.add(w.slice(i, i + 5).join(' '));
  shingles.set(p.slug, sh);
}

for (const [slug, count] of slugs) if (count > 1) problems.push({ slug, level: 'ERRO', msg: `slug repetido em ${count} artigos` });
for (const [id, count] of ids) if (count > 1) problems.push({ slug: id, level: 'ERRO', msg: `id repetido em ${count} artigos` });

// Links fixos para artigos dentro das páginas (ex.: o pilar linkando o cluster)
const walk = (dir: string): string[] =>
  fs.readdirSync(path.join(root, dir), { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(`${dir}/${e.name}`) : /\.tsx?$/.test(e.name) ? [`${dir}/${e.name}`] : []);
for (const file of [...walk('src/pages'), ...walk('src/components')]) {
  for (const m of read(file).matchAll(/["'`]\/blog\/([a-z0-9-]+)["'`]/g)) {
    const target = BLOG_POSTS.find((p) => p.slug === m[1]);
    if (!target) problems.push({ slug: file, level: 'ERRO', msg: `link para artigo que não existe: /blog/${m[1]}` });
    else if (target.publishDate > today) problems.push({ slug: file, level: 'ERRO', msg: `link para artigo ainda agendado (${target.publishDate}): /blog/${m[1]}` });
  }
}

// Artigos quase iguais (trechos de 5 palavras em comum)
const list = [...shingles.entries()];
for (let i = 0; i < list.length; i++) {
  for (let j = i + 1; j < list.length; j++) {
    const [a, sa] = list[i];
    const [b, sb] = list[j];
    let inter = 0;
    for (const s of sa) if (sb.has(s)) inter++;
    const sim = inter / Math.max(1, Math.min(sa.size, sb.size));
    if (sim > 0.25) problems.push({ slug: b, level: 'AVISO', msg: `${Math.round(sim * 100)}% de trechos iguais a "${a}"` });
  }
}

// Relatório
const bySlug = new Map<string, typeof problems>();
for (const p of problems) bySlug.set(p.slug, [...(bySlug.get(p.slug) || []), p]);
const errors = problems.filter((p) => p.level === 'ERRO').length;
const warnings = problems.length - errors;
const scheduled = BLOG_POSTS.filter(isNew);

console.log(`\nChecagem do blog — ${BLOG_POSTS.length} artigos (${scheduled.length} agendados a partir de ${today})\n`);
for (const [slug, list] of bySlug) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const tag = post ? (isNew(post) ? `agendado para ${post.publishDate}` : `publicado em ${post.publishDate}`) : '';
  console.log(`${slug}${tag ? `  (${tag})` : ''}`);
  for (const p of list) console.log(`  ${p.level === 'ERRO' ? 'ERRO ' : 'AVISO'}  ${p.msg}`);
  console.log('');
}
console.log(`${errors} erro(s), ${warnings} aviso(s).`);
if (errors) {
  console.log('Corrija os ERROS antes de enviar. Avisos precisam de uma linha de justificativa no resumo.');
  process.exit(1);
}
