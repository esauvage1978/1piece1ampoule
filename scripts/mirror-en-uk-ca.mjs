#!/usr/bin/env node
/**
 * Miroirs /uk/ et /ca/ des pages /en/ (consigne 8 langues du 12/11/2026).
 * Usage (après astro build, AVANT go-links) : node scripts/mirror-en-uk-ca.mjs dist --site https://exemple.fr
 *
 * 1. Chaque dist/en/**​/index.html absent sous /uk/ ou /ca/ y est copié : <html lang> en-GB / en-CA,
 *    og:locale en_GB / en_CA, canonical et og:url propres, liens internes /en/ → /uk/ ou /ca/.
 *    Les pages /uk/ et /ca/ déjà écrites dans src/ sont gardées (seules leur langue, leur en-tête hreflang
 *    et leurs liens Amazon sont normalisés).
 * 2. Amazon : /uk/ → amazon.co.uk, tag roboteducatif-21 ; /ca/ → amazon.ca, tag roboteducat03-20.
 * 3. hreflang : toute page du build qui déclare hreflang="en" vers /en/X reçoit en-GB (/uk/X) et en-CA (/ca/X).
 * 4. Sitemaps : URL /uk/ et /ca/ ajoutées à côté de chaque URL /en/.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';

const args = process.argv.slice(2);
const DIST = args[0] && !args[0].startsWith('--') ? args[0] : 'dist';
const si = args.indexOf('--site');
if (si < 0 || !args[si + 1]) {
  console.error('mirror-en-uk-ca : --site https://domaine requis');
  process.exit(1);
}
const SITE = args[si + 1].replace(/\/$/, '').replace(/^(?!https?:)/, 'https://');
const LOCS = {
  uk: { lang: 'en-GB', og: 'en_GB', host: 'www.amazon.co.uk', tag: 'roboteducatif-21' },
  ca: { lang: 'en-CA', og: 'en_CA', host: 'www.amazon.ca', tag: 'roboteducat03-20' },
};
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (n.endsWith('.html')) out.push(p);
  }
  return out;
}
const pageExists = (path) => {
  const p = path.replace(/[?#].*$/, '').replace(/^\//, '');
  if (p === '' || p.endsWith('/')) return existsSync(join(DIST, p, 'index.html'));
  return existsSync(join(DIST, p)) || existsSync(join(DIST, p, 'index.html'));
};

/** Liens Amazon vers le marché du miroir. */
function amazonMarche(html, loc) {
  const { host, tag } = LOCS[loc];
  const bare = host.replace(/^www\./, '');
  return html
    .replace(/(?:www\.)?amazon\.(?:co\.uk|ca|com)(?![.\w-])/gi, (m) => (m.toLowerCase().startsWith('www.') ? host : bare))
    .replace(/\b(?:roboteducatif-2[01]|roboteducat03-20)\b/g, tag);
}

/** Liens /go/ déjà résolus au build (ex. piscinebot) : on remet l’URL Amazon du bon marché, go-links (lancé après) refera l’id. */
const GO_TABLE = (() => {
  const t = new Map();
  for (const f of [join(DIST, 'go-table.php'), join('public', 'go-table.php')]) {
    if (!existsSync(f)) continue;
    for (const m of readFileSync(f, 'utf8').matchAll(/"([\w-]+)"\s*=>\s*\['url'\s*=>\s*'([^']+)'/g)) if (!t.has(m[1])) t.set(m[1], m[2]);
  }
  return t;
})();
function goMarche(html, loc) {
  if (!GO_TABLE.size) return html;
  const want = loc === 'uk' ? 'gb' : 'ca';
  return html.replace(/href="\/go\/(az-(gb|ca|us)-[\w-]+)\/?"/g, (m, id, c) => {
    if (c === want) return m;
    const url = GO_TABLE.get(id);
    if (!url || !/amazon\.(?:co\.uk|ca|com)\//i.test(url)) return m;
    return `href="${amazonMarche(url, loc).replace(/&(?!amp;)/g, '&amp;')}"`;
  });
}

const HREF_ALT = /<link\b[^>]*\bhreflang=["'][^"']+["'][^>]*>/gi;

function rewrite(html, loc) {
  const { lang, og } = LOCS[loc];
  const alts = [];
  let out = html.replace(HREF_ALT, (t) => `\u0000ALT${alts.push(t) - 1}\u0000`);
  out = out.replace(/<html\b([^>]*)\blang="[^"]*"/i, `<html$1lang="${lang}"`);
  out = out.replace(/(property="og:locale"\s+content=")[^"]*"/g, `$1${og}"`);
  out = out.replace(/("inLanguage"\s*:\s*")en(?:-[A-Za-z]+)?"/g, `$1${lang}"`);
  out = out.replaceAll(`${SITE}/en/`, `${SITE}/${loc}/`);
  out = out.replace(/(href|action)=(["'])\/en\/([^"']*)\2/g, (m, a, q, rest) =>
    pageExists(`/${loc}/${rest}`) || pageExists(`/en/${rest}`) ? `${a}=${q}/${loc}/${rest}${q}` : m,
  );
  out = goMarche(amazonMarche(out, loc), loc);
  return out.replace(/\u0000ALT(\d+)\u0000/g, (_, i) => alts[Number(i)]);
}

/** Normalise une page /uk/ ou /ca/ déjà présente (langue, og:locale, Amazon). */
function normaliser(html, loc) {
  const { lang, og } = LOCS[loc];
  let out = html.replace(/<html\b([^>]*)\blang="[^"]*"/i, `<html$1lang="${lang}"`);
  out = out.replace(/(property="og:locale"\s+content=")[^"]*"/g, `$1${og}"`);
  const alts = [];
  out = out.replace(HREF_ALT, (t) => `\u0000ALT${alts.push(t) - 1}\u0000`);
  out = goMarche(amazonMarche(out, loc), loc);
  return out.replace(/\u0000ALT(\d+)\u0000/g, (_, i) => alts[Number(i)]);
}

// 1. miroirs
const enRoot = join(DIST, 'en');
const enFiles = walk(enRoot).filter((f) => f.endsWith(`${sep}index.html`));
const stats = { crees: 0, normalises: 0, hreflang: 0, sitemap: 0 };
const enRel = new Set(enFiles.map((f) => relative(enRoot, f)));
// d’abord créer les dossiers (pour que pageExists voie les cibles /uk/ /ca/ pendant la réécriture)
for (const loc of Object.keys(LOCS)) {
  for (const rel of enRel) {
    const dest = join(DIST, loc, rel);
    if (existsSync(dest)) {
      writeFileSync(dest, normaliser(readFileSync(dest, 'utf8'), loc));
      stats.normalises++;
    } else {
      mkdirSync(dirname(dest), { recursive: true });
      writeFileSync(dest, rewrite(readFileSync(join(enRoot, rel), 'utf8'), loc));
      stats.crees++;
    }
  }
}

// 2. hreflang
const enTagRe = /<link\b[^>]*\bhreflang=["']en(?:-US)?["'][^>]*>/i;
const hrefOf = (tag) => (tag.match(/\bhref=["']([^"']+)["']/i) || [])[1];
for (const file of walk(DIST)) {
  let html = readFileSync(file, 'utf8');
  const rel = relative(DIST, file).split(sep).join('/');
  const locDir = rel.split('/')[0];
  let changed = false;
  // page miroir sans hreflang : reprendre celles de la page EN
  if ((locDir === 'uk' || locDir === 'ca') && !HREF_ALT.test(html)) {
    const src = join(enRoot, rel.slice(3));
    if (existsSync(src)) {
      const tags = readFileSync(src, 'utf8').match(HREF_ALT) || [];
      if (tags.length) {
        const bloc = tags.join('\n');
        html = /<link rel="canonical"/i.test(html)
          ? html.replace(/<link rel="canonical"/i, `${bloc}\n<link rel="canonical"`)
          : html.replace(/<\/head>/i, `${bloc}\n</head>`);
        changed = true;
      }
    }
  }
  HREF_ALT.lastIndex = 0;
  const m = html.match(enTagRe);
  if (m) {
    const href = hrefOf(m[0]) || '';
    const mm = href.match(new RegExp(`^(?:${esc(SITE)})?/en/(.*)$`));
    if (mm) {
      const ajout = [];
      for (const [loc, { lang }] of Object.entries(LOCS)) {
        if ((html.match(HREF_ALT) || []).some((t) => new RegExp(`hreflang=["']${lang}["']`, 'i').test(t))) continue;
        if (!pageExists(`/${loc}/${mm[1]}`)) continue;
        ajout.push(m[0].replace(/hreflang=["'][^"']+["']/i, `hreflang="${lang}"`).replace(href, href.replace('/en/', `/${loc}/`)));
      }
      if (ajout.length) {
        html = html.replace(m[0], [m[0], ...ajout].join('\n'));
        changed = true;
        stats.hreflang++;
      }
    }
  }
  if (changed) writeFileSync(file, html);
}

// 3. sitemaps
for (const f of readdirSync(DIST).filter((n) => /^sitemap.*\.xml$/.test(n) && !/index/.test(n))) {
  const p = join(DIST, f);
  let xml = readFileSync(p, 'utf8');
  const existing = new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((x) => x[1]));
  const ajout = [];
  for (const [, bloc, loc] of xml.matchAll(/(<url>\s*<loc>([^<]+)<\/loc>[\s\S]*?<\/url>)/g)) {
    if (!loc.startsWith(`${SITE}/en/`)) continue;
    for (const l of Object.keys(LOCS)) {
      const u = loc.replace(`${SITE}/en/`, `${SITE}/${l}/`);
      if (existing.has(u) || !pageExists(u.slice(SITE.length))) continue;
      ajout.push(bloc.replace(`<loc>${loc}</loc>`, `<loc>${u}</loc>`));
      existing.add(u);
    }
  }
  if (ajout.length) {
    xml = xml.replace(/<\/urlset>\s*$/, `${ajout.join('')}</urlset>`);
    writeFileSync(p, xml);
    stats.sitemap += ajout.length;
  }
}
console.log(
  `[mirror-en-uk-ca] ${SITE} : ${enFiles.length} pages EN, ${stats.crees} miroirs créés, ${stats.normalises} pages UK/CA existantes normalisées, hreflang en-GB/en-CA ajoutés sur ${stats.hreflang} pages, ${stats.sitemap} URL ajoutées aux sitemaps`,
);
