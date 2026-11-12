// NL : 27 fiches codes erreur + répertoire (lot EN 3). Faits inchangés, néerlandais naturel.
import type { EnPage } from './en';
import { PATH_EN_TO_NL } from './i18n-priority-lot2-pathmaps';
import { ERR_NL, EXISTING_NL, UI_NL } from './tr-lot3-nl-data';

const bars = (n: number) => '●'.repeat(n) + '○'.repeat(5 - n);
const brandKey = (b: string) => (/algemeen|Generic/i.test(b) ? 'Generic LED dimmer' : b);
const SHOW: Record<string, string> = { 'Generic LED dimmer': 'Leddimmer (algemeen)' };
const ORDER = ['Philips Hue', 'Shelly', 'IKEA', 'Govee', 'Nanoleaf', 'WiZ', 'Legrand Netatmo', 'Schneider Wiser', 'Generic LED dimmer'];

/** Fiches déjà publiées en NL : le slug EN ne correspond pas toujours au chemin. */
const KNOWN: Record<string, string> = {
  'hue-bulb-blinking-reset': 'gidsen/foutcode/hue-lamp-knippert-reset',
  'hue-sync-box-hdmi-no-signal': 'gidsen/foutcode/hue-sync-box-hdmi-geen-signaal',
  'govee-bulb-firmware-brick': 'gidsen/foutcode/govee-bulb-firmware-brick',
  'govee-strip-overheating': 'gidsen/foutcode/govee-strip-oververhitting',
  'nanoleaf-wifi-2g': 'gidsen/foutcode/nanoleaf-wifi-2g',
  'wiz-bulb-offline': 'gidsen/foutcode/wiz-bulb-offline',
  'schneider-wiser-offline': 'gidsen/foutcode/schneider-wiser-offline',
};
const existingPath = (slug: string) =>
  PATH_EN_TO_NL[`guides/error-code/${slug}`] || KNOWN[slug] || `${UI_NL.sheetPrefix}/${slug}`;

const errPage = (e: (typeof ERR_NL)[number]): EnPage => ({
  path: `${UI_NL.sheetPrefix}/${e.slug}`,
  article: true,
  kicker: UI_NL.kicker,
  title: `${e.title}: ${UI_NL.titleSuffix}`,
  description: `${e.code}: ${e.symptom}`.slice(0, 158),
  h1: e.title,
  lead: e.symptom,
  body: `<p><strong>${UI_NL.symptomLabel} :</strong> ${e.code} · <strong>${UI_NL.difficulty}</strong> ${bars(e.difficulty)} (${e.difficulty}/5) · <strong>${UI_NL.time}</strong> ${e.time} · <strong>${UI_NL.cost}</strong> ${e.cost} · <strong>${UI_NL.tools}</strong> ${e.tools}</p>
<h2>${UI_NL.causeTitle}</h2><p>${e.cause}</p>
<h2>${UI_NL.stepsTitle}</h2><ol>${e.steps.map((s) => `<li>${s}</li>`).join('')}</ol>
${e.safety ? `<p><strong>${UI_NL.safety} :</strong> ${e.safety}</p>` : ''}
<p class="en-note">${UI_NL.warrantyNote}</p>
${e.support ? `<p>${UI_NL.officialHelp} : <a href="${e.support}" rel="nofollow noopener" target="_blank">${e.supportLabel}</a>.</p>` : ''}
<p><a href="/nl/${UI_NL.directoryPath}/">← ${UI_NL.back}</a> · <a href="/nl/gidsen/smart-led-problemen/">${UI_NL.hub}</a></p>`,
});

const directoryBody = () => {
  const all = [
    ...EXISTING_NL.map((x) => ({ brand: brandKey(x.brand), href: `/nl/${existingPath(x.path)}/`, label: x.label })),
    ...ERR_NL.map((e) => ({ brand: brandKey(e.brand), href: `/nl/${UI_NL.sheetPrefix}/${e.slug}/`, label: e.title })),
  ];
  return ORDER.map((b) => {
    const items = all.filter((x) => x.brand === b);
    const name = SHOW[b] ?? b;
    return items.length ? `<h2>${name}</h2><ul>${items.map((x) => `<li><a href="${x.href}">${x.label}</a></li>`).join('')}</ul>` : '';
  }).join('\n');
};

const DIRECTORY: EnPage = {
  path: UI_NL.directoryPath,
  article: true,
  kicker: 'Storingen',
  title: UI_NL.directoryTitle,
  description: UI_NL.directoryDescription,
  h1: UI_NL.directoryH1,
  lead: UI_NL.directoryLead,
  body: `${UI_NL.directoryIntro}
${directoryBody()}`,
};

export const TR_LOT3_NL: EnPage[] = [DIRECTORY, ...ERR_NL.map(errPage)];

export const LOT3_NL_GROUPS: { fr: string; nl: string }[] = [
  { fr: '/guides/codes-erreurs-eclairage-connecte-depannage/', nl: `/nl/${UI_NL.directoryPath}/` },
  ...ERR_NL.map((e) => ({ fr: encodeURI(`/guides/code-erreur/${e.fr}/`), nl: `/nl/${UI_NL.sheetPrefix}/${e.slug}/` })),
];
