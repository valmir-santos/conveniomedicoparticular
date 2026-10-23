// Usado só no build (scripts/prerender.mjs): gera o HTML de cada rota.
import {StrictMode} from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import App from './App.tsx';
import {SeoCollectorContext, SeoData, renderHeadTags} from './components/Seo';
import {BLOG_POSTS} from './data/blogData';
import {OPERATORS_DETAILED} from './data/operatorsData';

export {SITE_URL} from './lib/site';

// Rotas indexáveis. A ordem é a do sitemap.
export const ROUTES: {path: string; lastmod?: string}[] = [
  {path: '/'},
  {path: '/plano-de-saude-sem-cnpj'},
  {path: '/convenio-medico-individual-familiar'},
  {path: '/convenio-medico-por-adesao'},
  {path: '/convenio-medico-mei'},
  {path: '/convenio-medico-empresarial'},
  {path: '/tabela-de-precos-convenio-medico-sao-paulo'},
  {path: '/plano-de-saude-sao-paulo'},
  {path: '/plano-de-saude-rio-de-janeiro'},
  {path: '/plano-de-saude-brasilia'},
  {path: '/plano-de-saude-curitiba-parana'},
  {path: '/operadoras'},
  ...OPERATORS_DETAILED.map((op) => ({path: `/operadoras/${op.slug}`})),
  {path: '/blog'},
  ...BLOG_POSTS.map((post) => ({path: `/blog/${post.slug}`, lastmod: post.publishDate})),
  {path: '/sobre'},
  {path: '/contato'},
];

export function render(url: string): {html: string; head: string; seo?: SeoData} {
  const collector: {data?: SeoData} = {};
  const html = renderToString(
    <StrictMode>
      <SeoCollectorContext.Provider value={collector}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </SeoCollectorContext.Provider>
    </StrictMode>,
  );
  return {html, head: collector.data ? renderHeadTags(collector.data) : '', seo: collector.data};
}
