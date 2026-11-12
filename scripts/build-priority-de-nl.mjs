/**
 * Build tr-priority-de.ts / tr-priority-nl.ts from TR_PRIORITY_EN + native overrides JSON.
 */
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const root = path.join(import.meta.dirname, '..');
const enMod = await import(pathToFileURL(path.join(root, 'src/content/tr-priority-en.ts')).href);
const { TR_PRIORITY_EN } = enMod;

const overrides = JSON.parse(
  fs.readFileSync(path.join(import.meta.dirname, 'de-nl-overrides.json'), 'utf8'),
);

const PATH_DE = overrides.PATH_DE;
const PATH_NL = overrides.PATH_NL;
const LINK_DE = overrides.LINK_DE;
const LINK_NL = overrides.LINK_NL;

function fixLinks(text, linkMap, prefix) {
  let s = text.replaceAll('/en/', `/${prefix}/`);
  for (const [from, to] of Object.entries(linkMap)) {
    s = s.replaceAll(from, to);
  }
  return s;
}

function emit(lang, exportName, pathMap, linkMap, prefix, amzHost, amzTag, amzCta, note, header, errKicker, copyKey) {
  const amzFn = `(asin, label) => \`<a class="en-amz" href="https://www.${amzHost}/dp/\${asin}?tag=${amzTag}" rel="nofollow sponsored noopener" target="_blank" data-asin="\${asin}" data-product="\${label}">${amzCta}</a>\``;
  const copy = overrides[copyKey];

  const ERR_EN = new Set([
    'guides/error-code/wiz-bulb-offline',
    'guides/error-code/nanoleaf-wifi-2g',
    'guides/gu10-led-flicker-dimmer-diagnosis',
    'guides/error-code/hue-bulb-blinking-reset',
    'guides/error-code/hue-sync-box-hdmi-no-signal',
    'guides/error-code/schneider-wiser-offline',
    'guides/error-code/govee-bulb-firmware-brick',
    'guides/error-code/govee-strip-overheating',
  ]);

  const pages = TR_PRIORITY_EN.map((en) => {
    const o = copy[en.path] || {};
    let body = o.body ?? en.body;
    body = body.replace(/\$\{uk\(/g, '${amz(').replace(/\buk\(/g, '${amz(');
    body = fixLinks(body, linkMap, prefix);
    body = body.replace(/amazon\.co\.uk/g, amzHost).replace(/roboteducatif-21/g, amzTag);
    body = body.replace(/Check price on Amazon UK/g, amzCta);
    return {
      enPath: en.path,
      path: pathMap[en.path],
      template: en.template,
      article: en.article,
      kicker: o.kicker ?? en.kicker,
      title: o.title ?? en.title,
      description: o.description ?? en.description,
      h1: o.h1 ?? en.h1,
      lead: o.lead ?? en.lead,
      body,
    };
  });

  const lines = [
    header,
    "import type { EnPage } from './en';",
    '',
    `const amz = ${amzFn};`,
    `const note = \`${note}\`;`,
    '',
    `const err = (p: Omit<EnPage, 'article'> & { kicker?: string }): EnPage => ({`,
    '  ...p,',
    '  article: true,',
    `  kicker: p.kicker ?? '${errKicker}',`,
    '});',
    '',
    `export const ${exportName}: EnPage[] = [`,
  ];

  for (const p of pages) {
    if (p.template) {
      lines.push('  {');
      lines.push(`    path: '${p.path}',`);
      lines.push(`    template: '${p.template}',`);
      lines.push(`    kicker: ${JSON.stringify(p.kicker)},`);
      lines.push(`    title: ${JSON.stringify(p.title)},`);
      lines.push(`    description: ${JSON.stringify(p.description)},`);
      lines.push(`    h1: ${JSON.stringify(p.h1)},`);
      lines.push(`    lead: '',`);
      lines.push(`    body: '',`);
      lines.push('  },');
      continue;
    }
    const useErr = ERR_EN.has(p.enPath);
    lines.push(useErr ? '  err({' : '  {');
    lines.push(`    path: '${p.path}',`);
    if (p.article && !useErr) lines.push('    article: true,');
    if (p.kicker) lines.push(`    kicker: ${JSON.stringify(p.kicker)},`);
    lines.push(`    title: ${JSON.stringify(p.title)},`);
    lines.push(`    description: ${JSON.stringify(p.description)},`);
    lines.push(`    h1: ${JSON.stringify(p.h1)},`);
    lines.push(`    lead: ${JSON.stringify(p.lead)},`);
    const esc = p.body.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{amz\(/g, '${amz(');
    lines.push(`    body: \`${esc}\`,`);
    lines.push(useErr ? '  }),' : '  },');
  }
  lines.push('];', '');
  fs.writeFileSync(path.join(root, 'src/content', `tr-priority-${lang}.ts`), lines.join('\n'));
}

emit(
  'de',
  'TR_PRIORITY_DE',
  PATH_DE,
  LINK_DE,
  'de',
  'amazon.de',
  'roboteducat00-21',
  'Preis auf Amazon.de prüfen',
  '<p class="en-note">Produktdaten von Hersteller/Amazon, geprüft am 23.10.2026. Preise ändern sich. Als Amazon-Partner verdienen wir an qualifizierten Käufen.</p>',
  '// Prioritätsseiten DE (Okt. 2026). Übersetzt aus FR-Quellen, geprüft 23.10.2026.',
  'Fehlercode-Ratgeber',
  'COPY_DE',
);

emit(
  'nl',
  'TR_PRIORITY_NL',
  PATH_NL,
  LINK_NL,
  'nl',
  'amazon.nl',
  'manuso0607-21',
  'Prijs op Amazon.nl bekijken',
  '<p class="en-note">Productgegevens van fabrikant/Amazon, gecontroleerd op 23/10/2026. Prijzen wijzigen. Als Amazon-partner verdienen wij aan in aanmerking komende aankopen.</p>',
  '// Prioriteitspagina’s NL (okt. 2026). Vertaald uit FR-bronnen, gecontroleerd 23/10/2026.',
  'Foutcode-gids',
  'COPY_NL',
);

console.log('Built tr-priority-de.ts and tr-priority-nl.ts');
