import live from '../content/lang-nav-live.json';
import type { Group } from '../content/i18n';

const LIVE200 = new Set(live.live200 as string[]);

/** Pages FR dont le sélecteur en ligne pointe vers les hubs /en/, /de/, … */
export const LANG_HUB_FR = new Set([
  '/articles/',
  '/zones/',
  '/tutoriels/',
  '/a-propos/',
  '/guides/',
]);

const homes: Record<string, string> = {
  fr: '/',
  en: '/en/',
  uk: '/uk/',
  ca: '/ca/',
  de: '/de/',
  nl: '/nl/',
  es: '/es/',
  it: '/it/',
};

function enPublished(group: Group | undefined): boolean {
  const en = group?.en;
  return typeof en === 'string' && LIVE200.has(en);
}

function hasPartialEsIt(group: Group | undefined): boolean {
  const es = group?.es;
  const it = group?.it;
  return (
    (typeof es === 'string' && LIVE200.has(es)) || (typeof it === 'string' && LIVE200.has(it))
  );
}

function isZoneDetail(hub: string): boolean {
  return hub.startsWith('/zones/') && hub !== '/zones/';
}

function isFrErrorGuide(hub: string): boolean {
  return hub.startsWith('/guides/code-erreur/');
}

function altForLang(l: string, group: Group | undefined): string | undefined {
  if (!group) return undefined;
  const direct = group[l as keyof Group];
  if (typeof direct === 'string') return direct;
  const en = group.en;
  if ((l === 'uk' || l === 'ca') && typeof en === 'string') {
    return en.replace(/^\/en\//, `/${l}/`);
  }
  return undefined;
}

/** Sélecteur de langue calqué sur le comportement du site en production (nov. 2026). */
export function langNavHref(
  l: string,
  frPath: string,
  group: Group | undefined,
  pageLang: string,
): string {
  const fp = frPath.endsWith('/') ? frPath : `${frPath}/`;
  const hub = group?.fr ?? fp;
  const home = homes[l];

  if (pageLang !== 'fr' && group) {
    if (!enPublished(group) && hasPartialEsIt(group)) {
      if (pageLang === 'en' || pageLang === 'uk' || pageLang === 'ca') {
        if (l === 'fr') return homes.fr;
        return home;
      }
      if (pageLang === 'es' || pageLang === 'it') {
        if (l === 'fr') return group.fr;
        if (l === 'es' || l === 'it') {
          const alt = group[l as keyof Group];
          if (typeof alt === 'string') return alt;
        }
        return home;
      }
    }
    if (l === 'fr') return group.fr;
    const alt = altForLang(l, group);
    if (alt) return alt;
    return home;
  }

  if (l === 'fr') {
    if (LANG_HUB_FR.has(hub)) return homes.fr;
    if (isFrErrorGuide(hub)) return homes.fr;
    if (isZoneDetail(hub)) return group?.fr ?? fp;
    if (enPublished(group)) return group?.fr ?? fp;
    if (hasPartialEsIt(group)) return group?.fr ?? fp;
    return homes.fr;
  }

  if (LANG_HUB_FR.has(hub)) return home;

  if (isZoneDetail(hub)) {
    const alt = altForLang(l, group);
    return alt ?? home;
  }

  if (isFrErrorGuide(hub)) return home;

  if (enPublished(group)) {
    const alt = altForLang(l, group);
    return alt ?? home;
  }

  if (hasPartialEsIt(group)) {
    if (l === 'es' || l === 'it') {
      const alt = group?.[l];
      if (typeof alt === 'string' && LIVE200.has(alt)) return alt;
    }
    return home;
  }

  return home;
}
