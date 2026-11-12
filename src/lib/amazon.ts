export const AMAZON_PARTNER_TAG = 'manuso06-21';

/** Construit une URL Amazon avec tag partenaire (conserve un tag existant). */
export function withAmazonTag(inputUrl: string, tag: string = AMAZON_PARTNER_TAG) {
  const base = 'https://www.amazon.fr';
  const url = new URL(inputUrl.startsWith('http') ? inputUrl : `${base}${inputUrl.startsWith('/') ? '' : '/'}${inputUrl}`);
  if (!url.searchParams.get('tag')) url.searchParams.set('tag', tag);
  return url.toString();
}

/** Lien direct vers une fiche produit Amazon.fr (ASIN vérifié). */
export function amazonProductUrl(asin: string, tag: string = AMAZON_PARTNER_TAG) {
  return `https://www.amazon.fr/dp/${asin}?tag=${tag}`;
}

/** Repli : recherche Amazon (utilisé seulement si aucun produit vérifié ne correspond). */
export function amazonSearchUrl(keywords: string, tag: string = AMAZON_PARTNER_TAG) {
  const url = new URL('https://www.amazon.fr/s');
  url.searchParams.set('k', keywords);
  url.searchParams.set('tag', tag);
  return url.toString();
}
