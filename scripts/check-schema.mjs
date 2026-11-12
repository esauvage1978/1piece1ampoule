// Échoue si un JSON-LD de dist/ contient un Product sans offers.price.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
const files = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); });
walk('dist');
const bad = [];
const visit = (n, file) => {
  if (Array.isArray(n)) return n.forEach((x) => visit(x, file));
  if (!n || typeof n !== 'object') return;
  const t = [].concat(n['@type'] || []);
  if (t.includes('Product')) {
    const offers = [].concat(n.offers || []);
    if (!offers.some((o) => o && (o.price !== undefined || o.lowPrice !== undefined))) bad.push(`${file} : Product « ${n.name ?? '?'} » sans offers.price`);
  }
  if (t.includes('Article') && !(n.author?.name && n.datePublished && n.dateModified)) bad.push(`${file} : Article sans author/datePublished/dateModified`);
  if (t.includes('FAQPage')) for (const q of n.mainEntity || []) {
    const vis = visible.get(file); const k = norm(q.name);
    if (!vis.includes(k)) bad.push(`${file} : question FAQ non visible « ${q.name} »`);
  }
  Object.values(n).forEach((v) => visit(v, file));
};
const norm = (x) => String(x).replace(/&#39;|&#x27;|&rsquo;|’/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
const visible = new Map();
for (const f of files) {
  visible.set(f, norm(readFileSync(f, 'utf8').replace(/<script[\s\S]*?<\/script>/g, ' ')));
  for (const m of readFileSync(f, 'utf8').matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try { visit(JSON.parse(m[1]), f); } catch (e) { bad.push(`${f} : JSON-LD invalide (${e.message})`); }
  }
}
if (bad.length) { console.error(`check-schema : ${bad.length} problème(s)\n` + bad.join('\n')); process.exit(1); }
console.log(`check-schema : OK (${files.length} pages, aucun Product sans prix, Article daté, FAQ visibles)`);
