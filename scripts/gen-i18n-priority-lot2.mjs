import fs from 'fs';
import path from 'path';
import {
  PATH_EN_TO_DE,
  PATH_EN_TO_NL,
  PATH_EN_TO_ES,
  PATH_EN_TO_IT,
} from '../src/content/i18n-priority-lot2-pathmaps.ts';

const FR_TO_EN = [
  ['/guides/code-erreur/hue-bridge-led-orange/', 'guides/error-code/hue-bridge-orange-led'],
  ['/guides/code-erreur/hue-bridge-limite-50-accessoires/', 'guides/error-code/hue-bridge-50-device-limit'],
  ['/guides/code-erreur/ikea-dirigera-tradfri-migration/', 'guides/error-code/ikea-dirigera-tradfri-migration'],
  ['/guides/code-erreur/ikea-tradfri-gateway-hors-ligne/', 'guides/error-code/ikea-tradfri-gateway-offline'],
  ['/guides/code-erreur/nanoleaf-layout-invalide/', 'guides/error-code/nanoleaf-invalid-layout'],
  ['/guides/code-erreur/schneider-wiser-matter-thread/', 'guides/error-code/schneider-wiser-matter-thread'],
  ['/guides/code-erreur/shelly-dimmer-2-wifi-offline/', 'guides/error-code/shelly-dimmer-2-wifi-offline'],
  ['/guides/code-erreur/variateur-led-ghosting/', 'guides/error-code/led-dimmer-ghosting'],
  ['/guides/code-erreur/variateur-led-scintillement-bas/', 'guides/error-code/led-dimmer-low-flicker'],
  ['/guides/code-erreur/wiz-bulb-scintillement-variateur/', 'guides/error-code/wiz-bulb-dimmer-flicker'],
  ['/guides/eclairage-exterieur-automatique-steinel/', 'guides/steinel-automatic-outdoor-lighting'],
  ['/guides/eclairage-noel-guirlandes-interieur-exterieur/', 'guides/christmas-lights-indoor-outdoor'],
  ['/guides/luminotherapie-lumiere-matin-hiver/', 'guides/morning-light-therapy-winter'],
  ['/marques/tapo/', 'brands/tapo'],
  ['/outils/convertisseur-lux-lumens-watts-surface/', 'tools/lux-lumen-watt-room-converter'],
  ['/tutoriels/', 'tutorials'],
  ['/zones/', 'zones'],
  ['/zones/miroir-salle-de-bain/', 'zones/bathroom-mirror'],
  ['/a-propos/', 'about'],
  ['/articles/', 'articles'],
  ['/articles/ampoule-connectee-wifi-ou-zigbee/', 'articles/smart-bulb-wifi-or-zigbee'],
  ['/articles/ampoule-dimmable-ou-non/', 'articles/dimmable-or-non-dimmable-bulb'],
  ['/articles/ampoule-filament-vintage/', 'articles/vintage-filament-bulb'],
  ['/articles/ampoule-four-frigo/', 'articles/oven-fridge-bulb'],
  ['/articles/ampoule-led-chauffe-duree-de-vie/', 'articles/led-heat-lifespan'],
];

const en = (p) => `/en/${p}/`;
const uk = (p) => `/uk/${p}/`;
const ca = (p) => `/ca/${p}/`;
const de = (p) => `/de/${p}/`;
const nl = (p) => `/nl/${p}/`;
const es = (p) => `/es/${p}/`;
const it = (p) => `/it/${p}/`;

const groups = FR_TO_EN.map(([fr, enPath]) => {
  const g = {
    fr,
    en: en(enPath),
    uk: uk(enPath),
    ca: ca(enPath),
    de: de(PATH_EN_TO_DE[enPath]),
    nl: nl(PATH_EN_TO_NL[enPath]),
    es: es(PATH_EN_TO_ES[enPath]),
    it: it(PATH_EN_TO_IT[enPath]),
  };
  return g;
});

const out = `/** Correspondances FR ↔ langues pour le lot prioritaire 2 (oct. 2026). */
import type { Group } from './i18n';
import {
  PATH_EN_TO_DE,
  PATH_EN_TO_NL,
  PATH_EN_TO_ES,
  PATH_EN_TO_IT,
} from './i18n-priority-lot2-pathmaps';

const en = (p: string) => \`/en/\${p}/\`;
const uk = (p: string) => \`/uk/\${p}/\`;
const ca = (p: string) => \`/ca/\${p}/\`;
const de = (p: string) => \`/de/\${p}/\`;
const nl = (p: string) => \`/nl/\${p}/\`;
const es = (p: string) => \`/es/\${p}/\`;
const it = (p: string) => \`/it/\${p}/\`;

/** Lot 2 — 25 pages FR (codes erreur, Steinel, hubs, articles). */
export const LOT2_GROUPS: Group[] = [
${groups
  .map((g) => {
    const lines = Object.entries(g)
      .map(([k, v]) => `    ${k}: '${v}',`)
      .join('\n');
    return `  {\n${lines}\n  },`;
  })
  .join('\n')}
];
`;

const dest = path.join(import.meta.dirname, '..', 'src', 'content', 'i18n-priority-lot2.ts');
fs.writeFileSync(dest, out);
console.log('Wrote', dest, groups.length, 'groups');
