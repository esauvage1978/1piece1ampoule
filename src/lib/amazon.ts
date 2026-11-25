export const AMAZON_PARTNER_TAG = 'manuso06-21';

/** Boutique et tag partenaire par locale publique du site. */
export const AMAZON_BY_LOCALE = {
  fr: { host: 'www.amazon.fr', tag: 'manuso06-21' },
  en: { host: 'www.amazon.com', tag: 'roboteducatif-20' },
  uk: { host: 'www.amazon.co.uk', tag: 'roboteducatif-21' },
  ca: { host: 'www.amazon.ca', tag: 'roboteducat03-20' },
  de: { host: 'www.amazon.de', tag: 'roboteducat00-21' },
  nl: { host: 'www.amazon.nl', tag: 'manuso0607-21' },
  es: { host: 'www.amazon.es', tag: 'roboteducat07-21' },
  it: { host: 'www.amazon.it', tag: 'roboteducat0f-21' },
} as const;

export type AmazonLocale = keyof typeof AMAZON_BY_LOCALE;

export function amazonLocaleOf(path: string): AmazonLocale {
  if (path.startsWith('/uk/') || path === '/uk') return 'uk';
  if (path.startsWith('/ca/') || path === '/ca') return 'ca';
  if (path.startsWith('/en/') || path === '/en') return 'en';
  if (path.startsWith('/de/') || path === '/de') return 'de';
  if (path.startsWith('/nl/') || path === '/nl') return 'nl';
  if (path.startsWith('/es/') || path === '/es') return 'es';
  if (path.startsWith('/it/') || path === '/it') return 'it';
  return 'fr';
}

export function amazonStore(locale: AmazonLocale = 'fr') {
  return AMAZON_BY_LOCALE[locale];
}

/** Fiche produit Amazon avec tag de la locale (ASIN vérifié uniquement). */
export function amazonProductUrl(asin: string, locale: AmazonLocale = 'fr') {
  const { host, tag } = amazonStore(locale);
  return `https://${host}/dp/${asin}?tag=${tag}`;
}

/** @deprecated Ne pas utiliser pour de nouveaux liens éditoriaux — préférer amazonProductUrl avec un ASIN vérifié. */
export function amazonSearchUrl(keywords: string, tag: string = AMAZON_PARTNER_TAG) {
  const url = new URL('https://www.amazon.fr/s');
  url.searchParams.set('k', keywords);
  url.searchParams.set('tag', tag);
  return url.toString();
}

/** Construit une URL Amazon avec tag partenaire (conserve un tag existant). */
export function withAmazonTag(inputUrl: string, tag: string = AMAZON_PARTNER_TAG) {
  const base = 'https://www.amazon.fr';
  const url = new URL(inputUrl.startsWith('http') ? inputUrl : `${base}${inputUrl.startsWith('/') ? '' : '/'}${inputUrl}`);
  if (!url.searchParams.get('tag')) url.searchParams.set('tag', tag);
  return url.toString();
}