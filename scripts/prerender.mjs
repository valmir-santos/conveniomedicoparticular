// Roda depois do build: gera um HTML completo para cada rota (texto, título,
// canonical, og:tags e JSON-LD já no código-fonte), mais 404.html e sitemap.xml.
// Assim Google, robôs de IA e pré-visualizações de WhatsApp leem a página sem JavaScript.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const dist = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render, ROUTES, SITE_URL } = await import(pathToFileURL(ssrEntry).href);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');
const HEAD_RE = /<!--seo-head-start-->[\s\S]*?<!--seo-head-end-->/;
if (!HEAD_RE.test(template) || !template.includes('<!--app-html-->')) {
  throw new Error('index.html sem os marcadores <!--seo-head-start/end--> ou <!--app-html-->');
}

const toFile = (route) => (route === '/' ? 'index.html' : `${route.slice(1)}.html`);

const writePage = (route, file) => {
  const { html, head, seo } = render(route);
  if (!seo) throw new Error(`A rota ${route} não tem o componente <Seo>`);
  const page = template
    .replace(HEAD_RE, `<!--seo-head-start-->\n    ${head}\n    <!--seo-head-end-->`)
    .replace('<!--app-html-->', html);
  const out = path.join(dist, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page);
  return seo;
};

const titles = new Map();
for (const { path: route } of ROUTES) {
  const seo = writePage(route, toFile(route));
  if (titles.has(seo.title)) console.warn(`Aviso: título repetido em ${route} e ${titles.get(seo.title)}`);
  titles.set(seo.title, route);
}
writePage('/pagina-inexistente-404', '404.html');

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...ROUTES.map(({ path: route, lastmod }) =>
    // lastmod só onde há data real (artigos); a data do build em tudo faria o Google ignorar o campo
    `  <url>\n    <loc>${route === '/' ? `${SITE_URL}/` : SITE_URL + route}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}\n  </url>`,
  ),
  '</urlset>',
  '',
].join('\n');
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`Pré-renderizadas ${ROUTES.length} páginas + 404.html; sitemap.xml com ${ROUTES.length} URLs.`);
