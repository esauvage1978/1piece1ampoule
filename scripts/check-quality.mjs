#!/usr/bin/env node
/**
 * Contrôles bloquants audit qualité (pré-publication, sur dist/ après build).
 * Échoue sur : recherche Amazon /s?k=, boutique ou tag incohérent avec la locale,
 * hreflang incomplet, /go/ ou lien interne cassé, id /go/ absent de la table,
 * lien Amazon sans mention légale d'affiliation (Partenaire Amazon / Associate…).
 *
 * Usage : node scripts/check-quality.mjs dist [--site https://1piece1ampoule.fr]
 */
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync as writeOut } from 'node:fs';
import { join, dirname } from 'node:path';

const args = process.argv.slice(2);
const DIST = args[0] && !args[0].startsWith('--') ? args[0] : 'dist';
const si = args.indexOf('--site');
const SITE = (si >= 0 && args[si + 1] ? args[si + 1] : 'https://1piece1ampoule.fr').replace(/\/$/, '');
const ORIGIN = new URL(SITE).origin;

const STORE = {
  fr: { host: /(^|\.)amazon\.fr$/i, tag: 'manuso06-21' },
  en: { host: /(^|\.)amazon\.com$/i, tag: 'roboteducatif-20' },
  uk: { host: /(^|\.)amazon\.co\.uk$/i, tag: 'roboteducatif-21' },
  ca: { host: /(^|\.)amazon\.ca$/i, tag: 'roboteducat03-20' },
  de: { host: /(^|\.)amazon\.de$/i, tag: 'roboteducat00-21' },
  nl: { host: /(^|\.)amazon\.nl$/i, tag: 'manuso0607-21' },
  es: { host: /(^|\.)amazon\.es$/i, tag: 'roboteducat07-21' },
  it: { host: /(^|\.)amazon\.it$/i, tag: 'roboteducat0f-21' },
};
const HREFLANG_EXPECT = ['fr', 'en', 'en-GB', 'en-CA', 'de', 'nl', 'es', 'it'];

function altsShouldBeComplete(path) {
  return /^\/(guides|articles|tutoriels|meilleur|pieces|zones|peinture|marques|en\/|de\/|nl\/|es\/|it\/|uk\/|ca\/)/.test(path);
}

function groupeAttendu(selfPath) {
  const seg = selfPath.split('/').filter(Boolean)[0] || '';
  if (seg && !['fr', 'en', 'uk', 'ca', 'de', 'nl', 'es', 'it'].includes(seg)) return null;
  const base = seg === 'fr' ? selfPath : selfPath.replace(/^\/(en|uk|ca|de|nl|es|it)(\/|$)/, '/fr$2');
  const paths = { fr: base };
  if (pageExists(base.replace(/^\/fr(\/|$)/, '/en$1'))) paths.en = base.replace(/^\/fr(\/|$)/, '/en$1');
  if (paths.en && pageExists(paths.en.replace(/^\/en(\/|$)/, '/uk$1'))) paths.uk = paths.en.replace(/^\/en(\/|$)/, '/uk$1');
  if (paths.en && pageExists(paths.en.replace(/^\/en(\/|$)/, '/ca$1'))) paths.ca = paths.en.replace(/^\/en(\/|$)/, '/ca$1');
  for (const l of ['de', 'nl', 'es', 'it']) {
    const p = base.replace(/^\/fr(\/|$)/, `/${l}$1`);
    if (pageExists(p)) paths[l] = p;
  }
  return Object.keys(paths).length > 1 ? paths : null;
}

const CODE = { fr: 'fr', en: 'en', uk: 'en-GB', ca: 'en-CA', de: 'de', nl: 'nl', es: 'es', it: 'it' };

/** Mention légale d'affiliation Amazon (PAS les avis clients Amazon). */
const AFFIL_DISCLAIMER =
  /Partenaire Amazon|Amazon Associate|Als Amazon-Partner|Als Amazon-partner|Amazon-partner verdien|Como Asociado de Amazon|Afiliado de Amazon|In qualità di Affiliato Amazon|Affiliato Amazon.*acquisti idonei|qualifying purchases|qualifizierten Käufen|qualifierten Verkäufen|achats remplissant les conditions/i;

function hasAmazonAffiliateLink(html) {
  if (/\/go\/az-[\w-]+\//i.test(html)) return true;
  if (/data-amazon-link|data-go=["']amazon["']/i.test(html)) return true;
  if (/href="https?:\/\/[^"]*amazon\.[^"]+\/dp\//i.test(html)) return true;
  const goId = html.match(/href="\/go\/(az-[\w-]+)\//i);
  if (goId) return true;
  return false;
}

function grouplangs(selfPath, byCode) {
  const grp = groupeAttendu(selfPath);
  if (!grp) return [];
  const miss = [];
  for (const [loc, p] of Object.entries(grp)) {
    const code = CODE[loc];
    if (code && !byCode.has(code.toLowerCase())) miss.push(code);
  }
  if ((grp.fr || grp.en) && !byCode.has('x-default')) miss.push('x-default');
  return [...new Set(miss)];
}

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (n.endsWith('.html')) out.push(p);
  }
  return out;
}

function pubPath(file) {
  let rel = file.slice(DIST.length).replace(/^\//, '');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return `/${rel.slice(0, -10)}`;
  return `/${rel}`;
}

function pageExists(pathname) {
  const p = pathname.replace(/^\//, '');
  if (p === '' || p.endsWith('/')) return existsSync(join(DIST, p, 'index.html'));
  return existsSync(join(DIST, p)) || existsSync(join(DIST, p, 'index.html'));
}

function localeOf(path) {
  const seg = path.split('/').filter(Boolean)[0];
  return STORE[seg] ? seg : 'fr';
}

const goTable = new Map();
const tablePath = join(DIST, 'go-table.php');
if (existsSync(tablePath)) {
  for (const m of readFileSync(tablePath, 'utf8').matchAll(/"([\w-]+)"\s*=>\s*\[[\s\S]*?'url'\s*=>\s*'([^']+)'/g)) goTable.set(m[1], m[2]);
}
if (!goTable.size && existsSync(join(dirname(DIST), 'scripts/go-table.json'))) {
  const j = JSON.parse(readFileSync(join(dirname(DIST), 'scripts/go-table.json'), 'utf8'));
  const links = j.links || j;
  for (const [id, e] of Object.entries(links)) if (e?.url) goTable.set(id, e.url);
}

const bad = [];
const attr = (tag, n) => {
  const m = tag.match(new RegExp(`\\s${n}\\s*=\\s*(["'])(.*?)\\1`, 'i'));
  return m ? m[2] : '';
};

for (const file of walk(DIST)) {
  const html = readFileSync(file, 'utf8');
  const path = pubPath(file);
  const loc = localeOf(path);
  const headEnd = html.search(/<\/head>/i);
  const head = headEnd >= 0 ? html.slice(0, headEnd) : html;

  for (const m of html.matchAll(/https?:\/\/[^"'<>\s]+/g)) {
    const url = m[0].replace(/&amp;/g, '&');
    if (/\/s\?/.test(url) && /amazon\./i.test(url)) {
      bad.push(`${path} : Amazon recherche /s?k= interdite (${url.slice(0, 80)}…)`);
    }
    const am = url.match(/^https?:\/\/([^/]+)\/([^?#]+)/i);
    if (am && /amazon\./i.test(am[1]) && !/^m\.media-amazon\./i.test(am[1])) {
      const host = am[1].toLowerCase();
      const want = STORE[loc];
      if (want && !want.host.test(host)) {
        bad.push(`${path} [${loc}] : boutique Amazon attendue pour la locale, trouvé ${host}`);
      }
      try {
        const u = new URL(url);
        const tag = u.searchParams.get('tag') || '';
        if (want && tag && tag !== want.tag) bad.push(`${path} [${loc}] : tag Amazon ${tag} ≠ ${want.tag}`);
      } catch {}
    }
  }

  for (const m of html.matchAll(/href="(\/go\/([\w-]+)\/?)"/g)) {
    const id = m[2];
    if (!goTable.has(id)) bad.push(`${path} : /go/${id}/ absent de go-table`);
  }

  if (hasAmazonAffiliateLink(html) && !AFFIL_DISCLAIMER.test(html)) {
    bad.push(`${path} : lien Amazon sans mention légale d'affiliation (Partenaire Amazon / Associate…)`);
  }

  if (altsShouldBeComplete(path)) {
    const altTags = [...head.matchAll(/<link\b[^>]*>/gi)].filter((t) => attr(t[0], 'rel').includes('alternate') && attr(t[0], 'hreflang'));
    if (altTags.length > 1) {
      const codes = new Set(altTags.map((t) => attr(t[0], 'hreflang').toLowerCase()));
      if (!codes.has('x-default')) bad.push(`${path} : hreflang sans x-default`);
      const byCode = new Map(altTags.map((t) => [attr(t[0], 'hreflang').toLowerCase(), attr(t[0], 'href')]));
      for (const miss of grouplangs(path, byCode)) bad.push(`${path} : hreflang incomplet (manque ${miss})`);
    }
  }

  const pageLoc = path.split('/').filter(Boolean)[0] || 'fr';
  const linkAuditLocales = new Set(['fr', 'de', 'en', 'uk', 'ca']);
  for (const m of html.matchAll(/href="(\/(?!\/|https?:|#|go\/|api\/)[^"#?]*)"/g)) {
    const href = m[1].split('#')[0];
    if (!href.endsWith('/')) continue;
    if (/\.(css|js|png|jpe?g|webp|svg|ico|woff2?)$/i.test(href)) continue;
    const linkLoc = href.split('/').filter(Boolean)[0] || 'fr';
    if (!linkAuditLocales.has(pageLoc) || linkLoc !== pageLoc) continue;
    if (!pageExists(href)) bad.push(`${path} : lien interne 404 ${href}`);
  }
}

// Diagnostic B04 (non bloquant) : pages article-type sans <img éditorial (hors amazon/_astro/og)
const b04 = [];
for (const file of walk(DIST)) {
  const path = pubPath(file);
  if (!/^\/(articles|guides|tutoriels|pieces|zones|meilleur|en\/|de\/|nl\/|es\/|it\/|uk\/|ca\/)/.test(path)) continue;
  const body = readFileSync(file, 'utf8').split(/<\/head>/i)[1] || '';
  const imgs = [...body.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/gi)].map((m) => m[1]);
  const editorial = imgs.filter((s) => !/\/images\/amazon\//.test(s) && !/_astro\//.test(s) && !/\/og-image/.test(s) && !/favicon|icon-/.test(s));
  if (!editorial.length) b04.push(path);
}

const pageCount = walk(DIST).length;
if (bad.length) {
  console.error(`check-quality : ${bad.length} problème(s) bloquant(s)\n` + bad.slice(0, 80).join('\n') + (bad.length > 80 ? `\n… et ${bad.length - 80} autres` : ''));
  process.exit(1);
}
writeOut(join(dirname(DIST), 'check-quality-b04.json'), JSON.stringify({ generated: new Date().toISOString(), count: b04.length, sample: b04.slice(0, 40) }, null, 1));
console.log(`check-quality : OK (${pageCount} pages, B04 diagnostic : ${b04.length} sans image éditoriale)`);