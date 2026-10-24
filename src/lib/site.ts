// Domínio oficial do site. A Vercel redireciona a versão sem "www" para esta,
// então canonical, sitemap e JSON-LD precisam usar exatamente este endereço.
export const SITE_URL = 'https://www.conveniomedicoparticular.com.br';

export const SITE_NAME = 'Convênio Médico Particular';

export const DEFAULT_TITLE = 'Convênio Médico Particular | Planos de Saúde para quem só tem CPF';

export const DEFAULT_DESCRIPTION =
  'Corretora de convênio médico especializada em quem só tem CPF em São Paulo, Rio de Janeiro, Brasília, Paraná e atendimento nacional. Sem exigência de MEI ou CNPJ. Cotação oficial no WhatsApp.';

export const DEFAULT_IMAGE = `${SITE_URL}/logo.jpg`;

export const absUrl = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);

// Formata 'AAAA-MM-DD' sem passar por Date, para não mudar o dia por fuso horário
// e para o HTML gerado no build ser idêntico ao do navegador.
export const formatDateBR = (isoDate: string) => {
  const [y, m, d] = isoDate.split('-');
  return `${d}/${m}/${y}`;
};

// Data de hoje em São Paulo, no formato 'AAAA-MM-DD' (o mesmo de publishDate).
export const todayISO = () =>
  new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo' }).format(new Date());

// Artigo com data futura fica agendado: não aparece no blog nem abre pelo endereço.
export const isPublished = (publishDate: string, today: string) => publishDate <= today;
