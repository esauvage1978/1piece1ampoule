// Alternates sitemap (xhtml:link) — même table GROUPS que Layout.astro ; en cas de doublon, le groupe le plus complet l'emporte (uk/ca dans PRIORITY_GROUPS, etc.).
import { GROUPS } from '../content/i18n.ts';

const ALT_LANG_KEYS = ['fr', 'en', 'uk', 'ca', 'de', 'nl', 'es', 'it'];

const HREFLANG = {
  fr: 'fr',
  en: 'en',
  uk: 'en-GB',
  ca: 'en-CA',
  de: 'de',
  nl: 'nl',
  es: 'es',
  it: 'it',
};

/** @param {string} p */
const norm = (p) => (p.endsWith('/') ? p : `${p}/`);

/** @param {string} path */
function groupForSitemap(path) {
  const matches = GROUPS.filter((g) => ALT_LANG_KEYS.some((k) => g[k] === path));
  if (!matches.length) return undefined;
  const score = (g) => ALT_LANG_KEYS.filter((k) => g[k]).length;
  return matches.reduce((best, g) => (score(g) > score(best) ? g : best));
}

/**
 * @param {string} pathname
 * @param {string} site
 * @param {Set<string>} built chemins présents dans le sitemap (build)
 * @returns {{ lang: string, url: string }[] | undefined}
 */
export function sitemapLinks(pathname, site, built) {
  const path = norm(pathname);
  let group = groupForSitemap(path);
  if (!group && /^\/(uk|ca)\//.test(path)) {
    group = groupForSitemap(norm(path.replace(/^\/(uk|ca)\//, '/en/')));
  }
  if (!group) return undefined;
  /** @type {{ l: string, href: string }[]} */
  const alts = [];
  const push = (l, href) => {
    const p = norm(href);
    if (!built.has(p) || alts.some((a) => a.l === l)) return;
    alts.push({ l, href: p });
  };
  for (const l of ALT_LANG_KEYS) {
    if (group[l]) push(l, group[l]);
  }
  if (group.en && built.has(norm(group.en))) {
    const en = norm(group.en);
    for (const geo of ['uk', 'ca']) {
      push(geo, en.replace(/^\/en(?=\/|$)/, `/${geo}`));
    }
  }
  if (alts.length <= 1) return undefined;
  const links = alts.map(({ l, href }) => ({
    lang: HREFLANG[l],
    url: new URL(href, site).href,
  }));
  if (group.fr && built.has(norm(group.fr))) {
    links.push({ lang: 'x-default', url: new URL(norm(group.fr), site).href });
  }
  return links;
}