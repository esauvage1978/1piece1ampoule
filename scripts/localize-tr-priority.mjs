/**
 * Mechanical localization of tr-priority-de.ts / tr-priority-nl.ts from EN structure.
 * Run after copying tr-priority-en.ts. Applies path map, Amazon TLD, /en/ links.
 */
import fs from 'fs';
import path from 'path';

const root = path.join(import.meta.dirname, '..', 'src', 'content');

const PATH_EN_TO_DE = {
  'zones/kitchen-worktop': 'zonen/kuechenarbeitsplatte',
  'brands/luminaire-fr': 'marken/luminaire-fr',
  'promo-codes': 'aktionscodes',
  'guides/smart-bulb-gift-ideas': 'ratgeber/smarte-lampen-geschenkideen',
  'guides/smart-switch-no-neutral-compatibility': 'ratgeber/smarter-schalter-ohne-neutral-kompatibilitaet',
  'brands/philips-hue': 'marken/philips-hue',
  'brands/osram-ledvance': 'marken/osram-ledvance',
  'tools/halogen-led-equivalence-gu10-e27-lumens': 'werkzeuge/halogen-led-aequivalenz-gu10-e27-lumen',
  'guides/error-code/wiz-bulb-offline': 'ratgeber/fehlercode/wiz-bulb-offline',
  'guides/error-code/nanoleaf-wifi-2g': 'ratgeber/fehlercode/nanoleaf-wifi-2g',
  'guides/gu10-led-flicker-dimmer-diagnosis': 'ratgeber/gu10-led-flackern-dimmer-diagnose',
  'guides/matter-thread-matrix-philips-hue-aqara-govee': 'ratgeber/matter-thread-matrix-philips-hue-aqara-govee',
  'brands/steinel': 'marken/steinel',
  rooms: 'raeume',
  'guides/error-code/hue-bulb-blinking-reset': 'ratgeber/fehlercode/hue-lampe-blinkt-reset',
  'guides/error-code/hue-sync-box-hdmi-no-signal': 'ratgeber/fehlercode/hue-sync-box-hdmi-kein-signal',
  brands: 'marken',
  'rooms/hallway': 'raeume/flur',
  'articles/dusk-to-dawn-bulb': 'artikel/daemmerungslampe',
  'guides/error-code/schneider-wiser-offline': 'ratgeber/fehlercode/schneider-wiser-offline',
  'guides/smart-led-troubleshooting': 'ratgeber/smart-led-stoerungen',
  'rooms/dining-room': 'raeume/esszimmer',
  contact: 'kontakt',
  'guides/error-code/govee-bulb-firmware-brick': 'ratgeber/fehlercode/govee-bulb-firmware-brick',
  'guides/error-code/govee-strip-overheating': 'ratgeber/fehlercode/govee-strip-ueberhitzung',
};

const PATH_EN_TO_NL = {
  'zones/kitchen-worktop': 'zones/keukenblad',
  'brands/luminaire-fr': 'merken/luminaire-fr',
  'promo-codes': 'actiecodes',
  'guides/smart-bulb-gift-ideas': 'gidsen/smarte-lampen-cadeau-ideeen',
  'guides/smart-switch-no-neutral-compatibility': 'gidsen/slimme-schakelaar-zonder-nul-compatibiliteit',
  'brands/philips-hue': 'merken/philips-hue',
  'brands/osram-ledvance': 'merken/osram-ledvance',
  'tools/halogen-led-equivalence-gu10-e27-lumens': 'tools/halogen-led-equivalent-gu10-e27-lumen',
  'guides/error-code/wiz-bulb-offline': 'gidsen/foutcode/wiz-bulb-offline',
  'guides/error-code/nanoleaf-wifi-2g': 'gidsen/foutcode/nanoleaf-wifi-2g',
  'guides/gu10-led-flicker-dimmer-diagnosis': 'gidsen/gu10-led-flikker-dimmer-diagnose',
  'guides/matter-thread-matrix-philips-hue-aqara-govee': 'gidsen/matter-thread-matrix-philips-hue-aqara-govee',
  'brands/steinel': 'merken/steinel',
  rooms: 'ruimtes',
  'guides/error-code/hue-bulb-blinking-reset': 'gidsen/foutcode/hue-lamp-knippert-reset',
  'guides/error-code/hue-sync-box-hdmi-no-signal': 'gidsen/foutcode/hue-sync-box-hdmi-geen-signaal',
  brands: 'merken',
  'rooms/hallway': 'ruimtes/gang',
  'articles/dusk-to-dawn-bulb': 'artikelen/schemerlamp',
  'guides/error-code/schneider-wiser-offline': 'gidsen/foutcode/schneider-wiser-offline',
  'guides/smart-led-troubleshooting': 'gidsen/smart-led-problemen',
  'rooms/dining-room': 'ruimtes/eetkamer',
  contact: 'contact',
  'guides/error-code/govee-bulb-firmware-brick': 'gidsen/foutcode/govee-bulb-firmware-brick',
  'guides/error-code/govee-strip-overheating': 'gidsen/foutcode/govee-strip-oververhitting',
};

function linkMap(text, prefix, pathMap) {
  let out = text.replaceAll('/en/', `/${prefix}/`);
  for (const [en, loc] of Object.entries(pathMap)) {
    out = out.replaceAll(`/en/${en}/`, `/${prefix}/${loc}/`);
    out = out.replaceAll(`/${prefix}/${en}/`, `/${prefix}/${loc}/`);
  }
  return out;
}

function localizeFile(lang, { exportName, prefix, pathMap, amzHost, amzTag, amzCta, noteHtml, headerComment, errKicker }) {
  const filePath = path.join(root, `tr-priority-${lang}.ts`);
  let s = fs.readFileSync(filePath, 'utf8');
  s = s.replace(/TR_PRIORITY_EN/g, exportName);
  s = s.replace(/Priority EN pages.*?\n/, headerComment + '\n');
  s = s.replace(
    /const uk = \(asin: string, label: string\) =>[\s\S]*?;\nconst note = `[\s\S]*?`;/,
    `const amz = (asin: string, label: string) =>
  \`<a class="en-amz" href="https://www.${amzHost}/dp/\${asin}?tag=${amzTag}" rel="nofollow sponsored noopener" target="_blank" data-asin="\${asin}" data-product="\${label}">${amzCta}</a>\`;
const note = \`${noteHtml}\`;`,
  );
  s = s.replace(/\$\{uk\(/g, '${amz(');
  s = s.replace(/\buk\(/g, 'amz(');
  s = s.replace(/kicker: p\.kicker \?\? 'Error code guide'/, `kicker: p.kicker ?? '${errKicker}'`);
  for (const [en, loc] of Object.entries(pathMap)) {
    s = s.replaceAll(`path: '${en}'`, `path: '${loc}'`);
  }
  s = linkMap(s, prefix, pathMap);
  s = s.replace(/toLocaleString\('en-GB'\)/g, lang === 'de' ? "toLocaleString('de-DE')" : "toLocaleString('nl-NL')");
  fs.writeFileSync(filePath, s);
}

localizeFile('de', {
  exportName: 'TR_PRIORITY_DE',
  prefix: 'de',
  pathMap: PATH_EN_TO_DE,
  amzHost: 'amazon.de',
  amzTag: 'roboteducat00-21',
  amzCta: 'Preis auf Amazon.de prüfen',
  noteHtml:
    '<p class="en-note">Produktdaten von Hersteller/Amazon, geprüft am 23.10.2026. Preise ändern sich. Als Amazon-Partner verdienen wir an qualifizierten Käufen.</p>',
  headerComment: '// Prioritätsseiten DE (Okt. 2026). Übersetzt aus FR-Quellen, geprüft 23.10.2026.',
  errKicker: 'Fehlercode-Ratgeber',
});

localizeFile('nl', {
  exportName: 'TR_PRIORITY_NL',
  prefix: 'nl',
  pathMap: PATH_EN_TO_NL,
  amzHost: 'amazon.nl',
  amzTag: 'manuso0607-21',
  amzCta: 'Prijs op Amazon.nl bekijken',
  noteHtml:
    '<p class="en-note">Productgegevens van fabrikant/Amazon, gecontroleerd op 23/10/2026. Prijzen wijzigen. Als Amazon-partner verdienen wij aan in aanmerking komende aankopen.</p>',
  headerComment: '// Prioriteitspagina’s NL (okt. 2026). Vertaald uit FR-bronnen, gecontroleerd 23/10/2026.',
  errKicker: 'Foutcode-gids',
});

console.log('Localized tr-priority-de.ts and tr-priority-nl.ts (paths, links, Amazon).');
