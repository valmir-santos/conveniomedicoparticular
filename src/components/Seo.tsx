import React, { createContext, useContext, useEffect } from 'react';
import { SITE_NAME, DEFAULT_IMAGE, absUrl } from '../lib/site';

export interface SeoData {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

// No build (pré-renderização) o servidor passa um coletor; a página registra
// seus dados aqui e o script de build escreve as tags no <head> do HTML.
export const SeoCollectorContext = createContext<{ data?: SeoData } | null>(null);

export const fullTitle = (title: string) =>
  title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

export const renderHeadTags = (seo: SeoData) => {
  const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const title = esc(fullTitle(seo.title));
  const description = esc(seo.description);
  const url = absUrl(seo.path);
  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<meta name="robots" content="${seo.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}" />`,
    seo.noindex ? '' : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:type" content="${seo.type || 'website'}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${DEFAULT_IMAGE}" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${DEFAULT_IMAGE}" />`,
  ].filter(Boolean).join('\n    ');
};

const setMeta = (attr: 'name' | 'property', key: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = value;
};

export const Seo: React.FC<SeoData> = (props) => {
  const collector = useContext(SeoCollectorContext);
  if (collector) collector.data = props;

  // Na navegação dentro do site (sem recarregar) atualiza o <head> no navegador.
  useEffect(() => {
    const title = fullTitle(props.title);
    const url = absUrl(props.path);
    document.title = title;
    setMeta('name', 'description', props.description);
    setMeta('name', 'robots', props.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', props.description);
    setMeta('property', 'og:type', props.type || 'website');
    setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', props.description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (props.noindex) {
      canonical?.remove();
    } else {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = url;
    }
  }, [props.title, props.description, props.path, props.type, props.noindex]);

  return null;
};
