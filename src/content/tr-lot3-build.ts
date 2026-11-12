// Assemble les fiches codes erreur traduites (répertoire + 27 feuilles) et les paires hreflang.
import type { EnPage } from './en';

export type SheetErr = {
  slug: string;
  fr: string;
  brand: string;
  title: string;
  code: string;
  symptom: string;
  cause: string;
  steps: string[];
  tools: string;
  safety?: string;
  difficulty: number;
  time: string;
  cost: string;
  support: string;
  supportLabel: string;
};

export type SheetUi = {
  kicker: string;
  titleSuffix: string;
  symptomLabel: string;
  difficulty: string;
  time: string;
  cost: string;
  tools: string;
  causeTitle: string;
  stepsTitle: string;
  safety: string;
  warrantyNote: string;
  officialHelp: string;
  back: string;
  hub: string;
  directoryPath: string;
  sheetPrefix: string;
  directoryTitle: string;
  directoryDescription: string;
  directoryH1: string;
  directoryLead: string;
  directoryIntro: string;
  directoryKicker: string;
  genericBrand: string;
};

const ORDER = ['Philips Hue', 'Shelly', 'IKEA', 'Govee', 'Nanoleaf', 'WiZ', 'Legrand Netatmo', 'Schneider Wiser', 'Generic LED dimmer'];
const bars = (n: number) => '●'.repeat(n) + '○'.repeat(5 - n);
const brandKey = (b: string) => (/algemeen|allgemein|generico|genérico|Generic/i.test(b) ? 'Generic LED dimmer' : b);

export function buildErrorSheets(opts: {
  locale: 'de' | 'it' | 'es' | 'nl';
  ui: SheetUi;
  errors: SheetErr[];
  existing: { brand: string; path: string; label: string }[];
  resolveExisting: (enSlug: string) => string;
  hubPath: string;
}): { pages: EnPage[]; groups: { fr: string; href: string }[] } {
  const { locale, ui, errors, existing, resolveExisting, hubPath } = opts;
  const show = (b: string) => (b === 'Generic LED dimmer' ? ui.genericBrand : b);
  const suffix = ui.titleSuffix.replace(/^:\s*/, '');
  const back = ui.back.replace(/^←\s*/, '');
  const pages: EnPage[] = errors.map((e) => ({
    path: `${ui.sheetPrefix}/${e.slug}`,
    article: true,
    kicker: ui.kicker,
    title: `${e.title}: ${suffix}`,
    description: `${e.code}: ${e.symptom}`.slice(0, 158),
    h1: e.title,
    lead: e.symptom,
    body: `<p><strong>${ui.symptomLabel} :</strong> ${e.code} · <strong>${ui.difficulty}</strong> ${bars(e.difficulty)} (${e.difficulty}/5) · <strong>${ui.time}</strong> ${e.time} · <strong>${ui.cost}</strong> ${e.cost} · <strong>${ui.tools}</strong> ${e.tools}</p>
<h2>${ui.causeTitle}</h2><p>${e.cause}</p>
<h2>${ui.stepsTitle}</h2><ol>${e.steps.map((s) => `<li>${s}</li>`).join('')}</ol>
${e.safety ? `<p><strong>${ui.safety} :</strong> ${e.safety}</p>` : ''}
<p class="en-note">${ui.warrantyNote}</p>
${e.support ? `<p>${ui.officialHelp} : <a href="${e.support}" rel="nofollow noopener" target="_blank">${e.supportLabel}</a>.</p>` : ''}
<p><a href="/${locale}/${ui.directoryPath}/">← ${back}</a> · <a href="/${locale}/${hubPath}/">${ui.hub}</a></p>`,
  }));
  const all = [
    ...existing.map((x) => ({ brand: brandKey(x.brand), href: `/${locale}/${resolveExisting(x.path)}/`, label: x.label })),
    ...errors.map((e) => ({ brand: brandKey(e.brand), href: `/${locale}/${ui.sheetPrefix}/${e.slug}/`, label: e.title })),
  ];
  const directory: EnPage = {
    path: ui.directoryPath,
    article: true,
    kicker: ui.directoryKicker,
    title: ui.directoryTitle,
    description: ui.directoryDescription,
    h1: ui.directoryH1,
    lead: ui.directoryLead,
    body: `${ui.directoryIntro}\n${ORDER.map((b) => {
      const items = all.filter((x) => x.brand === b);
      return items.length ? `<h2>${show(b)}</h2><ul>${items.map((x) => `<li><a href="${x.href}">${x.label}</a></li>`).join('')}</ul>` : '';
    }).join('\n')}`,
  };
  const groups = [
    { fr: '/guides/codes-erreurs-eclairage-connecte-depannage/', href: `/${locale}/${ui.directoryPath}/` },
    ...errors.map((e) => ({ fr: encodeURI(`/guides/code-erreur/${e.fr}/`), href: `/${locale}/${ui.sheetPrefix}/${e.slug}/` })),
  ];
  return { pages: [directory, ...pages], groups };
}
