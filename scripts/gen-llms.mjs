// Génère dist/llms.txt (format llmstxt.org) à partir des pages réellement construites :
// titre (h1), meta description et URL canonique de chaque page HTML de dist/.
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const SITE = 'https://1piece1ampoule.fr';
const pages = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : f === 'index.html' && pages.push(p); });
walk('dist');
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&#39;|&#x27;/g, '’').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const info = pages.map((f) => {
  const h = readFileSync(f, 'utf8');
  const url = (h.match(/<link rel="canonical" href="([^"]+)"/) || [])[1] || SITE + '/';
  const h1 = dec((h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || '');
  const title = dec((h.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '');
  const desc = dec((h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
  return { path: new URL(url).pathname, url, name: h1 || title, desc };
}).sort((a, b) => a.path.localeCompare(b.path, 'fr'));
const sec = (re, exclude = []) => info.filter((p) => re.test(p.path) && !exclude.includes(p.path));
const line = (p) => `- [${p.name}](${p.url}): ${p.desc}`;
const out = [
  '# 1 pièce 1 ampoule (Choisir son ampoule)',
  '',
  '> Guides indépendants en français pour choisir ses ampoules et son éclairage LED pièce par pièce : lumens, température de couleur (Kelvin), IRC, culots, indice IP, comparatifs de produits et simulateur interactif. Site édité par Emmanuel Sauvage, financé par l’affiliation Amazon (sans surcoût pour le lecteur). Pas de prix affichés : ils changent trop souvent.',
  '',
  'Chaque page indique son auteur et sa date de mise à jour. Les recommandations reposent sur les fiches techniques des fabricants (lumens, Kelvin, IRC, culot), pas sur des tests en laboratoire.',
  '',
  '## Pièces', '', ...sec(/^\/pieces\/.+/).map(line), '',
  '## Zones', '', ...sec(/^\/zones\/.+/).map(line), '',
  '## Guides techniques', '', ...sec(/^\/guides\/.+/).map(line), '',
  '## Comparatifs', '', ...sec(/^\/meilleur\/.+/).map(line), '',
  '## Tutoriels pas à pas', '', ...sec(/^\/tutoriels\/.+/).map(line), '',
  '## Conseils et dépannage', '', ...sec(/^\/articles\/.+/).map(line), '',
  '## Outils', '', ...sec(/^\/outils\//).map(line), '',
  '## À propos', '', ...sec(/^\/(a-propos|affiliation-amazon)\/$/).map(line), '',
  '## Optional', '', ...sec(/^\/(pieces|zones|guides|meilleur|articles|tutoriels)\/$|^\/(mentions-legales|politique-de-confidentialite|politique-de-cookies)\/$/).map(line), '',
];
writeFileSync('dist/llms.txt', out.join('\n'));
console.log(`gen-llms : dist/llms.txt (${info.length} pages)`);
