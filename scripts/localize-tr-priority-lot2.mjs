/**
 * Generate tr-priority-lot2-{de,nl,es,it}.ts from tr-priority-lot2-en.ts
 * Paths, Amazon domains, /en/ links, and locale-specific meta from lot2-meta.json.
 */
import fs from 'fs';
import path from 'path';

const root = path.join(import.meta.dirname, '..', 'src', 'content');
const enPath = path.join(root, 'tr-priority-lot2-en.ts');
const metaPath = path.join(import.meta.dirname, 'lot2-meta.json');

const maps = {
  de: {
    'guides/error-code/hue-bridge-orange-led': 'ratgeber/fehlercode/hue-bridge-orange-led',
    'guides/error-code/hue-bridge-50-device-limit': 'ratgeber/fehlercode/hue-bridge-50-geraete-limit',
    'guides/error-code/ikea-dirigera-tradfri-migration': 'ratgeber/fehlercode/ikea-dirigera-tradfri-migration',
    'guides/error-code/ikea-tradfri-gateway-offline': 'ratgeber/fehlercode/ikea-tradfri-gateway-offline',
    'guides/error-code/nanoleaf-invalid-layout': 'ratgeber/fehlercode/nanoleaf-layout-unzulaessig',
    'guides/error-code/schneider-wiser-matter-thread': 'ratgeber/fehlercode/schneider-wiser-matter-thread',
    'guides/error-code/shelly-dimmer-2-wifi-offline': 'ratgeber/fehlercode/shelly-dimmer-2-wifi-offline',
    'guides/error-code/led-dimmer-ghosting': 'ratgeber/fehlercode/variator-led-nachleuchten',
    'guides/error-code/led-dimmer-low-flicker': 'ratgeber/fehlercode/variator-led-flackern-niedrig',
    'guides/error-code/wiz-bulb-dimmer-flicker': 'ratgeber/fehlercode/wiz-lampe-variator-flackern',
    'guides/steinel-automatic-outdoor-lighting': 'ratgeber/steinel-aussenbeleuchtung-automatisch',
    'guides/christmas-lights-indoor-outdoor': 'ratgeber/weihnachtsbeleuchtung-innen-aussen',
    'guides/morning-light-therapy-winter': 'ratgeber/lichttherapie-morgenlicht-winter',
    'brands/tapo': 'marken/tapo',
    'tools/lux-lumen-watt-room-converter': 'werkzeuge/lux-lumen-watt-raum-umrechner',
    tutorials: 'anleitungen',
    zones: 'zonen',
    'zones/bathroom-mirror': 'zonen/badezimmerspiegel',
    about: 'ueber-uns',
    articles: 'artikel',
    'articles/smart-bulb-wifi-or-zigbee': 'artikel/smarte-lampe-wifi-oder-zigbee',
    'articles/dimmable-or-non-dimmable-bulb': 'artikel/dimmbare-oder-nicht-dimmbare-lampe',
    'articles/vintage-filament-bulb': 'artikel/vintage-filament-lampe',
    'articles/oven-fridge-bulb': 'artikel/backofen-kuehlschrank-lampe',
    'articles/led-heat-lifespan': 'artikel/led-waerme-lebensdauer',
    'guides/ip-ratings-bathroom-outdoor': 'ratgeber/ip-schutzarten-bad-aussen',
    'guides/colour-temperature-kelvin': 'ratgeber/farbtemperatur-kelvin',
    'guides/lumens-vs-watts': 'ratgeber/lumen-watt',
    'guides/cri-colour-rendering-index': 'ratgeber/farbwiedergabe-cri-ra',
    'guides/smart-bulb-gift-ideas': 'ratgeber/smarte-lampen-geschenkideen',
    'guides/gu10-led-flicker-dimmer-diagnosis': 'ratgeber/gu10-led-flackern-dimmer-diagnose',
    'tutorials/how-much-light-per-room-lux-foot-candles': 'anleitungen/lux-lumen-pro-raum-berechnen',
    'tutorials/under-cabinet-led-strip-kitchen': 'anleitungen/led-streifen-unter-haengeschraenken',
    'tutorials/light-basement-shed-without-power': 'anleitungen/keller-ohne-strom-beleuchten',
    'tutorials/replace-halogen-gu10-mr16-with-led': 'anleitungen/halogen-gu10-mr16-durch-led-ersetzen',
    'tutorials/smart-switch-no-neutral': 'anleitungen/smarter-schalter-ohne-neutralleiter',
    'tools/halogen-led-equivalence-gu10-e27-lumens': 'werkzeuge/halogen-led-aequivalenz-gu10-e27-lumen',
    'brands/steinel': 'marken/steinel',
    'brands/philips-hue': 'marken/philips-hue',
    'zones/kitchen-worktop': 'zonen/kuechenarbeitsplatte',
    contact: 'kontakt',
  },
  nl: {
    'guides/error-code/hue-bridge-orange-led': 'gidsen/foutcode/hue-bridge-oranje-led',
    'guides/error-code/hue-bridge-50-device-limit': 'gidsen/foutcode/hue-bridge-50-apparaatlimiet',
    'guides/error-code/ikea-dirigera-tradfri-migration': 'gidsen/foutcode/ikea-dirigera-tradfri-migratie',
    'guides/error-code/ikea-tradfri-gateway-offline': 'gidsen/foutcode/ikea-tradfri-gateway-offline',
    'guides/error-code/nanoleaf-invalid-layout': 'gidsen/foutcode/nanoleaf-ongeldige-indeling',
    'guides/error-code/schneider-wiser-matter-thread': 'gidsen/foutcode/schneider-wiser-matter-thread',
    'guides/error-code/shelly-dimmer-2-wifi-offline': 'gidsen/foutcode/shelly-dimmer-2-wifi-offline',
    'guides/error-code/led-dimmer-ghosting': 'gidsen/foutcode/led-dimmer-naslagen',
    'guides/error-code/led-dimmer-low-flicker': 'gidsen/foutcode/led-dimmer-flikker-laag',
    'guides/error-code/wiz-bulb-dimmer-flicker': 'gidsen/foutcode/wiz-lamp-flikker-dimmer',
    'guides/steinel-automatic-outdoor-lighting': 'gidsen/steinel-automatische-buitenverlichting',
    'guides/christmas-lights-indoor-outdoor': 'gidsen/kerstverlichting-binnen-buiten',
    'guides/morning-light-therapy-winter': 'gidsen/lichttherapie-ochtendlicht-winter',
    'brands/tapo': 'merken/tapo',
    'tools/lux-lumen-watt-room-converter': 'tools/lux-lumen-watt-ruimte-omrekenen',
    tutorials: 'handleidingen',
    zones: 'zones',
    'zones/bathroom-mirror': 'zones/badkamerspiegel',
    about: 'over-ons',
    articles: 'artikelen',
    'articles/smart-bulb-wifi-or-zigbee': 'artikelen/smarte-lamp-wifi-of-zigbee',
    'articles/dimmable-or-non-dimmable-bulb': 'artikelen/dimbare-of-niet-dimbare-lamp',
    'articles/vintage-filament-bulb': 'artikelen/vintage-filament-lamp',
    'articles/oven-fridge-bulb': 'artikelen/oven-koelkast-lamp',
    'articles/led-heat-lifespan': 'artikelen/led-warmte-levensduur',
    'guides/ip-ratings-bathroom-outdoor': 'gidsen/ip-beschermingsgraad-badkamer-buiten',
    'guides/colour-temperature-kelvin': 'gidsen/kleurtemperatur-kelvin',
    'guides/lumens-vs-watts': 'gidsen/lumen-watt',
    'guides/cri-colour-rendering-index': 'gidsen/kleurweergave-cri-ra',
    'guides/smart-bulb-gift-ideas': 'gidsen/smarte-lampen-cadeau-ideeen',
    'guides/gu10-led-flicker-dimmer-diagnosis': 'gidsen/gu10-led-flikker-dimmer-diagnose',
    'tutorials/how-much-light-per-room-lux-foot-candles': 'handleidingen/lux-lumen-per-ruimte-berekenen',
    'tutorials/under-cabinet-led-strip-kitchen': 'handleidingen/ledstrip-onder-keukenkastjes',
    'tutorials/light-basement-shed-without-power': 'handleidingen/kelder-schuur-zonder-stroom-verlichten',
    'tutorials/replace-halogen-gu10-mr16-with-led': 'handleidingen/halogeen-gu10-mr16-vervangen-door-led',
    'tutorials/smart-switch-no-neutral': 'handleidingen/slimme-schakelaar-zonder-nul',
    'tools/halogen-led-equivalence-gu10-e27-lumens': 'tools/halogen-led-equivalent-gu10-e27-lumen',
    'brands/steinel': 'merken/steinel',
    'brands/philips-hue': 'merken/philips-hue',
    'zones/kitchen-worktop': 'zones/keukenblad',
    contact: 'contact',
  },
  es: {
    'guides/error-code/hue-bridge-orange-led': 'guias/codigo-error/hue-bridge-led-naranja',
    'guides/error-code/hue-bridge-50-device-limit': 'guias/codigo-error/hue-bridge-limite-50-dispositivos',
    'guides/error-code/ikea-dirigera-tradfri-migration': 'guias/codigo-error/ikea-dirigera-tradfri-migracion',
    'guides/error-code/ikea-tradfri-gateway-offline': 'guias/codigo-error/ikea-tradfri-gateway-offline',
    'guides/error-code/nanoleaf-invalid-layout': 'guias/codigo-error/nanoleaf-diseno-invalido',
    'guides/error-code/schneider-wiser-matter-thread': 'guias/codigo-error/schneider-wiser-matter-thread',
    'guides/error-code/shelly-dimmer-2-wifi-offline': 'guias/codigo-error/shelly-dimmer-2-wifi-offline',
    'guides/error-code/led-dimmer-ghosting': 'guias/codigo-error/regulador-led-brillo-residual',
    'guides/error-code/led-dimmer-low-flicker': 'guias/codigo-error/regulador-led-parpadeo-bajo',
    'guides/error-code/wiz-bulb-dimmer-flicker': 'guias/codigo-error/bombilla-wiz-parpadeo-regulador',
    'guides/steinel-automatic-outdoor-lighting': 'guias/iluminacion-exterior-automatica-steinel',
    'guides/christmas-lights-indoor-outdoor': 'guias/luces-navidad-interior-exterior',
    'guides/morning-light-therapy-winter': 'guias/luminoterapia-luz-manana-invierno',
    'brands/tapo': 'marcas/tapo',
    'tools/lux-lumen-watt-room-converter': 'herramientas/convertidor-lux-lumen-vatio-superficie',
    tutorials: 'tutoriales',
    zones: 'zonas',
    'zones/bathroom-mirror': 'zonas/espejo-bano',
    about: 'sobre-nosotros',
    articles: 'articulos',
    'articles/smart-bulb-wifi-or-zigbee': 'articulos/bombilla-inteligente-wifi-o-zigbee',
    'articles/dimmable-or-non-dimmable-bulb': 'articulos/bombilla-regulable-o-no',
    'articles/vintage-filament-bulb': 'articulos/bombilla-filamento-vintage',
    'articles/oven-fridge-bulb': 'articulos/bombilla-horno-nevera',
    'articles/led-heat-lifespan': 'articulos/bombilla-led-calor-vida-util',
    'guides/ip-ratings-bathroom-outdoor': 'guias/grado-ip-bano-exterior',
    'guides/colour-temperature-kelvin': 'guias/temperatura-color-kelvin',
    'guides/lumens-vs-watts': 'guias/lumenes-vatios',
    'guides/cri-colour-rendering-index': 'guias/reproduccion-cromatica-cri-ra',
    'guides/smart-bulb-gift-ideas': 'guias/regalar-bombillas-inteligentes',
    'guides/gu10-led-flicker-dimmer-diagnosis': 'guias/parpadeo-gu10-led-regulador-diagnostico',
    'tutorials/how-much-light-per-room-lux-foot-candles': 'tutoriales/calcular-lux-lumenes-por-estancia',
    'tutorials/under-cabinet-led-strip-kitchen': 'tutoriales/tira-led-bajo-muebles-cocina',
    'tutorials/light-basement-shed-without-power': 'tutoriales/iluminar-trastero-sin-electricidad',
    'tutorials/replace-halogen-gu10-mr16-with-led': 'tutoriales/sustituir-halogenos-gu10-mr16-por-led',
    'tutorials/smart-switch-no-neutral': 'tutoriales/interruptor-inteligente-sin-neutro',
    'tools/halogen-led-equivalence-gu10-e27-lumens': 'herramientas/equivalencia-halogeno-led-gu10-e27-lumenes',
    'brands/steinel': 'marcas/steinel',
    'brands/philips-hue': 'marcas/philips-hue',
    'zones/kitchen-worktop': 'zonas/encimera-cocina',
    contact: 'contacto',
  },
  it: {
    'guides/error-code/hue-bridge-orange-led': 'guide/codice-errore/hue-bridge-led-arancione',
    'guides/error-code/hue-bridge-50-device-limit': 'guide/codice-errore/hue-bridge-limite-50-dispositivi',
    'guides/error-code/ikea-dirigera-tradfri-migration': 'guide/codice-errore/ikea-dirigera-tradfri-migrazione',
    'guides/error-code/ikea-tradfri-gateway-offline': 'guide/codice-errore/ikea-tradfri-gateway-offline',
    'guides/error-code/nanoleaf-invalid-layout': 'guide/codice-errore/nanoleaf-layout-non-valido',
    'guides/error-code/schneider-wiser-matter-thread': 'guide/codice-errore/schneider-wiser-matter-thread',
    'guides/error-code/shelly-dimmer-2-wifi-offline': 'guide/codice-errore/shelly-dimmer-2-wifi-offline',
    'guides/error-code/led-dimmer-ghosting': 'guide/codice-errore/dimmer-led-luce-residua',
    'guides/error-code/led-dimmer-low-flicker': 'guide/codice-errore/dimmer-led-sfarfallio-basso',
    'guides/error-code/wiz-bulb-dimmer-flicker': 'guide/codice-errore/lampadina-wiz-sfarfallio-dimmer',
    'guides/steinel-automatic-outdoor-lighting': 'guide/illuminazione-esterna-automatica-steinel',
    'guides/christmas-lights-indoor-outdoor': 'guide/luci-di-natale-interno-esterno',
    'guides/morning-light-therapy-winter': 'guide/fototerapia-luce-mattino-inverno',
    'brands/tapo': 'marchi/tapo',
    'tools/lux-lumen-watt-room-converter': 'strumenti/convertitore-lux-lumen-watt-superficie',
    tutorials: 'tutorial',
    zones: 'zone',
    'zones/bathroom-mirror': 'zone/specchio-bagno',
    about: 'chi-siamo',
    articles: 'articoli',
    'articles/smart-bulb-wifi-or-zigbee': 'articoli/lampadina-smart-wifi-o-zigbee',
    'articles/dimmable-or-non-dimmable-bulb': 'articoli/lampadina-dimmerabile-o-no',
    'articles/vintage-filament-bulb': 'articoli/lampadina-filamento-vintage',
    'articles/oven-fridge-bulb': 'articoli/lampadina-forno-frigo',
    'articles/led-heat-lifespan': 'articoli/lampadina-led-calore-durata',
    'guides/ip-ratings-bathroom-outdoor': 'guide/grado-ip-bagno-esterno',
    'guides/colour-temperature-kelvin': 'guide/temperatura-colore-kelvin',
    'guides/lumens-vs-watts': 'guide/lumen-watt',
    'guides/cri-colour-rendering-index': 'guide/resa-cromatica-cri-ra',
    'guides/smart-bulb-gift-ideas': 'guide/regalare-lampadine-smart',
    'guides/gu10-led-flicker-dimmer-diagnosis': 'guide/sfarfallio-gu10-led-dimmer-diagnosi',
    'tutorials/how-much-light-per-room-lux-foot-candles': 'tutorial/calcolare-lux-lumen-per-stanza',
    'tutorials/under-cabinet-led-strip-kitchen': 'tutorial/striscia-led-sotto-pensili-cucina',
    'tutorials/light-basement-shed-without-power': 'tutorial/illuminare-cantina-senza-corrente',
    'tutorials/replace-halogen-gu10-mr16-with-led': 'tutorial/sostituire-alogene-gu10-mr16-con-led',
    'tutorials/smart-switch-no-neutral': 'tutorial/interruttore-smart-senza-neutro',
    'tools/halogen-led-equivalence-gu10-e27-lumens': 'strumenti/equivalenza-alogeno-led-gu10-e27-lumen',
    'brands/steinel': 'marchi/steinel',
    'brands/philips-hue': 'marchi/philips-hue',
    'zones/kitchen-worktop': 'zone/piano-lavoro-cucina',
    contact: 'contatti',
  },
};

const LOCALES = {
  de: {
    exportName: 'TR_PRIORITY_LOT2_DE',
    prefix: 'de',
    amzHost: 'amazon.de',
    amzTag: 'roboteducat00-21',
    amzCta: 'Preis auf Amazon.de prüfen',
    noteHtml:
      '<p class="en-note">Produktdaten von Hersteller/Amazon, geprüft am 30.10.2026. Preise ändern sich — vor dem Kauf prüfen. Als Amazon-Partner verdienen wir an qualifizierten Käufen.</p>',
    headerComment:
      '// Prioritätsseiten DE Lot 2 (Okt. 2026). Übersetzt aus FR/EN-Quellen, geprüft 30.10.2026.',
    errKicker: 'Fehlercode-Ratgeber',
    localeStr: 'de-DE',
    currencyFrom: '£',
    currencyTo: '€',
  },
  nl: {
    exportName: 'TR_PRIORITY_LOT2_NL',
    prefix: 'nl',
    amzHost: 'amazon.nl',
    amzTag: 'manuso0607-21',
    amzCta: 'Prijs op Amazon.nl bekijken',
    noteHtml:
      '<p class="en-note">Productgegevens van fabrikant/Amazon, gecontroleerd op 30/10/2026. Prijzen wijzigen — controleer vóór aankoop. Als Amazon-partner verdienen wij aan in aanmerking komende aankopen.</p>',
    headerComment:
      '// Prioriteitspagina’s NL lot 2 (okt. 2026). Vertaald uit FR/EN-bronnen, gecontroleerd 30/10/2026.',
    errKicker: 'Foutcode-gids',
    localeStr: 'nl-NL',
    currencyFrom: '£',
    currencyTo: '€',
  },
  es: {
    exportName: 'TR_PRIORITY_LOT2_ES',
    prefix: 'es',
    amzHost: 'amazon.es',
    amzTag: 'roboteducat07-21',
    amzCta: 'Ver precio en Amazon.es',
    noteHtml:
      '<p class="en-note">Datos de fabricante/Amazon comprobados el 30/10/2026. Los precios cambian — verifique antes de comprar. Como afiliado de Amazon obtenemos ingresos por compras cualificadas.</p>',
    headerComment:
      '// Páginas prioritarias ES lot 2 (oct. 2026). Traducidas desde FR/EN, comprobadas 30/10/2026.',
    errKicker: 'Guía de código de error',
    localeStr: 'es-ES',
    currencyFrom: '£',
    currencyTo: '€',
  },
  it: {
    exportName: 'TR_PRIORITY_LOT2_IT',
    prefix: 'it',
    amzHost: 'amazon.it',
    amzTag: 'roboteducat0f-21',
    amzCta: 'Vedi prezzo su Amazon.it',
    noteHtml:
      '<p class="en-note">Dati da scheda produttore/Amazon verificati il 30/10/2026. I prezzi cambiano — controllare prima dell’acquisto. In qualità di affiliato Amazon percepiamo commissioni sugli acquisti idonei.</p>',
    headerComment:
      '// Pagine prioritarie IT lot 2 (ott. 2026). Tradotte da FR/EN, verificate 30/10/2026.',
    errKicker: 'Guida codici errore',
    localeStr: 'it-IT',
    currencyFrom: '£',
    currencyTo: '€',
  },
};

function linkMap(text, prefix, pathMap) {
  let out = text.replaceAll('/en/', `/${prefix}/`);
  for (const [en, loc] of Object.entries(pathMap)) {
    out = out.replaceAll(`/en/${en}/`, `/${prefix}/${loc}/`);
    out = out.replaceAll(`/${prefix}/${en}/`, `/${prefix}/${loc}/`);
  }
  return out;
}

function applyMeta(s, lang, meta) {
  if (!meta?.[lang]) return s;
  for (const [enPath, fields] of Object.entries(meta[lang])) {
    const locPath = maps[lang][enPath] ?? enPath;
    const blockRe = new RegExp(
      `(path: '${locPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'[\\s\\S]*?)(title: )'(?:[^'\\\\]|\\\\.)*'`,
    );
    if (fields.title) s = s.replace(blockRe, `$1$2'${fields.title.replace(/'/g, "\\'")}'`);
    // simpler: replace by en path before path swap — meta keyed by en path, apply before path change
  }
  return s;
}

function localize(lang, cfg) {
  const pathMap = maps[lang];
  let s = fs.readFileSync(enPath, 'utf8');
  const meta = fs.existsSync(metaPath) ? JSON.parse(fs.readFileSync(metaPath, 'utf8')) : {};

  s = s.replace(/TR_PRIORITY_LOT2_EN/g, cfg.exportName);
  s = s.replace(
    /\/\/ Priority EN pages lot 2.*?\n/,
    cfg.headerComment + '\n',
  );
  s = s.replace(
    /const uk = \(asin: string, label: string\) =>[\s\S]*?;\nconst note = `[\s\S]*?`;/,
    `const amz = (asin: string, label: string) =>
  \`<a class="en-amz" href="https://www.${cfg.amzHost}/dp/\${asin}?tag=${cfg.amzTag}" rel="nofollow sponsored noopener" target="_blank" data-asin="\${asin}" data-product="\${label}">${cfg.amzCta}</a>\`;
const note = \`${cfg.noteHtml}\`;`,
  );
  s = s.replace(/\$\{uk\(/g, '${amz(');
  s = s.replace(/\buk\(/g, 'amz(');
  s = s.replace(/amazon\.co\.uk/g, cfg.amzHost);
  s = s.replace(/roboteducatif-21/g, cfg.amzTag);
  s = s.replace(/Check price on Amazon UK/g, cfg.amzCta);
  s = s.replace(
    /Listing data from manufacturer\/Amazon pages checked 30 October 2026\. Prices change — verify before buying\. As an Amazon Associate I earn from qualifying purchases\./g,
    cfg.noteHtml.replace(/<\/?p class="en-note">/g, '').replace(/<\/p>/, ''),
  );
  s = s.replace(/kicker: p\.kicker \?\? 'Error code guide'/, `kicker: p.kicker ?? '${cfg.errKicker}'`);

  // Apply meta translations (keyed by EN path) before path rewrites
  if (meta[lang]) {
    for (const [enPath, fields] of Object.entries(meta[lang])) {
      const esc = enPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const re = new RegExp(`(path: '${esc}',[\\s\\S]*?)(title: )'([^']*)'`);
      if (fields.title && re.test(s)) s = s.replace(re, `$1$2'${fields.title.replace(/'/g, "\\'")}'`);
      const reD = new RegExp(`(path: '${esc}',[\\s\\S]*?description: )'([^']*)'`);
      if (fields.description) s = s.replace(reD, `$1'${fields.description.replace(/'/g, "\\'")}'`);
      const reH = new RegExp(`(path: '${esc}',[\\s\\S]*?h1: )'([^']*)'`);
      if (fields.h1) s = s.replace(reH, `$1'${fields.h1.replace(/'/g, "\\'")}'`);
      const reL = new RegExp(`(path: '${esc}',[\\s\\S]*?lead: )'([^']*)'`);
      if (fields.lead) s = s.replace(reL, `$1'${fields.lead.replace(/'/g, "\\'")}'`);
      if (fields.body) {
        const reB = new RegExp(`(path: '${esc}',[\\s\\S]*?body: \`)([\\s\\S]*?)(\`,\\s*\\})`);
        s = s.replace(reB, `$1${fields.body}$3`);
      }
    }
  }

  for (const [en, loc] of Object.entries(pathMap)) {
    s = s.replaceAll(`path: '${en}'`, `path: '${loc}'`);
  }
  s = linkMap(s, cfg.prefix, pathMap);
  s = s.replace(/toLocaleString\('en-GB'\)/g, `toLocaleString('${cfg.localeStr}')`);
  s = s.replaceAll(cfg.currencyFrom, cfg.currencyTo);

  const out = path.join(root, `tr-priority-lot2-${lang}.ts`);
  fs.writeFileSync(out, s);
  console.log('Wrote', out);
}

for (const [lang, cfg] of Object.entries(LOCALES)) {
  localize(lang, cfg);
}
