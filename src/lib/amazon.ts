export const AMAZON_PARTNER_TAG = 'manuso06-21';

/**
 * Construit une URL Amazon avec tag partenaire.
 * - Accepte une URL Amazon (dp, gp/product, s?k=...) ou une URL relative.
 * - Si le tag est déjà présent, on le conserve.
 */
export function withAmazonTag(inputUrl: string, tag: string = AMAZON_PARTNER_TAG) {
  const base = 'https://www.amazon.fr';
  const url = new URL(inputUrl.startsWith('http') ? inputUrl : `${base}${inputUrl.startsWith('/') ? '' : '/'}${inputUrl}`);
  if (!url.searchParams.get('tag')) url.searchParams.set('tag', tag);
  return url.toString();
}

export function amazonSearchUrl(keywords: string, tag: string = AMAZON_PARTNER_TAG) {
  const url = new URL('https://www.amazon.fr/s');
  url.searchParams.set('k', keywords);
  url.searchParams.set('tag', tag);
  return url.toString();
}

