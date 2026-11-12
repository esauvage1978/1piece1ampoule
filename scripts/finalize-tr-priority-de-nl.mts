/**
 * Builds tr-priority-de.ts and tr-priority-nl.ts from EN + native copy overrides.
 */
import fs from 'fs';
import path from 'path';
import { TR_PRIORITY_EN } from '../src/content/tr-priority-en.ts';
import type { EnPage } from '../src/content/en.ts';
import { COPY_DE, COPY_NL, PATH_DE, PATH_NL, fixLinksDe, fixLinksNl } from './priority-copy-de-nl.ts';

const root = path.join(import.meta.dirname, '..', 'src', 'content');

const amzDe = (asin: string, label: string) =>
  `<a class="en-amz" href="https://www.amazon.de/dp/${asin}?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="${asin}" data-product="${label}">Preis auf Amazon.de prüfen</a>`;
const amzNl = (asin: string, label: string) =>
  `<a class="en-amz" href="https://www.amazon.nl/dp/${asin}?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="${asin}" data-product="${label}">Prijs op Amazon.nl bekijken</a>`;

const noteDe = `<p class="en-note">Produktdaten von Hersteller/Amazon, geprüft am 23.10.2026. Preise ändern sich. Als Amazon-Partner verdienen wir an qualifizierten Käufen.</p>`;
const noteNl = `<p class="en-note">Productgegevens van fabrikant/Amazon, gecontroleerd op 23/10/2026. Prijzen wijzigen. Als Amazon-partner verdienen wij aan in aanmerking komende aankopen.</p>`;

function injectAmz(body: string, amz: typeof amzDe): string {
  return body.replace(/\$\{amz\('([^']+)',\s*'([^']+)'\)\}/g, (_, asin, label) => amz(asin, label));
}

function build(
  lang: 'de' | 'nl',
  exportName: string,
  pathMap: Record<string, string>,
  copy: Record<string, Partial<EnPage>>,
  fixLinks: (s: string) => string,
  amz: typeof amzDe,
  note: string,
  header: string,
  errKicker: string,
) {
  const pages: EnPage[] = TR_PRIORITY_EN.map((en) => {
    const key = en.path;
    const c = copy[key];
    if (!c) throw new Error(`Missing ${lang} copy for ${key}`);
    const merged: EnPage = {
      ...en,
      path: pathMap[key] ?? en.path,
      title: c.title ?? en.title,
      description: c.description ?? en.description,
      kicker: c.kicker ?? en.kicker,
      h1: c.h1 ?? en.h1,
      lead: c.lead ?? en.lead,
      body: fixLinks(injectAmz(c.body ?? en.body, amz)),
      template: en.template,
      article: en.article,
    };
    return merged;
  });

  const errFn = `const err = (p: Omit<EnPage, 'article'> & { kicker?: string }): EnPage => ({
  ...p,
  article: true,
  kicker: p.kicker ?? '${errKicker}',
});`;

  const body = `${header}
import type { EnPage } from './en';

const amz = ${amz.toString()};
const note = \`${note}\`;

${errFn}

export const ${exportName}: EnPage[] = ${JSON.stringify(pages, null, 2)
    .replace(/"\$\{amz\(/g, '${amz(')
    .replace(/"\$\{/g, '${')};`;

  // Re-parse won't work with JSON - use manual emit
  const lines: string[] = [header, "import type { EnPage } from './en';", ''];
  lines.push('const amz = ' + amz.toString() + ';');
  lines.push('const note = `' + note + '`;', '');
  lines.push(errFn, '');
  lines.push(`export const ${exportName}: EnPage[] = [`);

  for (const p of pages) {
    lines.push('  {');
    lines.push(`    path: '${p.path}',`);
    if (p.template) lines.push(`    template: '${p.template}',`);
    if (p.article) lines.push('    article: true,');
    lines.push(`    kicker: ${JSON.stringify(p.kicker)},`);
    lines.push(`    title: ${JSON.stringify(p.title)},`);
    lines.push(`    description: ${JSON.stringify(p.description)},`);
    lines.push(`    h1: ${JSON.stringify(p.h1)},`);
    lines.push(`    lead: ${JSON.stringify(p.lead)},`);
    lines.push(`    body: \`${p.body.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')}\`,`);
    lines.push('  },');
  }
  lines.push('];', '');
  fs.writeFileSync(path.join(root, `tr-priority-${lang}.ts`), lines.join('\n'));
}

build(
  'de',
  'TR_PRIORITY_DE',
  PATH_DE,
  COPY_DE,
  fixLinksDe,
  amzDe,
  noteDe,
  '// Prioritätsseiten DE (Okt. 2026). Übersetzt aus FR-Quellen, geprüft 23.10.2026.',
  'Fehlercode-Ratgeber',
);
build(
  'nl',
  'TR_PRIORITY_NL',
  PATH_NL,
  COPY_NL,
  fixLinksNl,
  amzNl,
  noteNl,
  '// Prioriteitspagina’s NL (okt. 2026). Vertaald uit FR-bronnen, gecontroleerd 23/10/2026.',
  'Foutcode-gids',
);
console.log('Wrote tr-priority-de.ts and tr-priority-nl.ts');
