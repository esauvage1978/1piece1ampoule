#!/usr/bin/env node
/**
 * Génère sql/seed_1p1a.sql et public/api/errors-fallback.json depuis scripts/1p1a-errors-data.mjs
 */
import { writeFileSync, mkdirSync, cpSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, categories, brands, products, errors } from './1p1a-errors-data.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const langs = ['fr', 'en', 'de', 'it', 'es'];
const SEO_PREFIX = '/guides/code-erreur';

function sqlEscape(s) {
  if (s == null) return 'NULL';
  return `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, "''").replace(/\n/g, '\\n')}'`;
}

function loc(row, prefix, lang) {
  const k = `${prefix}_${lang}`;
  return row[k] ?? row[`${prefix}_fr`] ?? '';
}

const brandBySlug = Object.fromEntries(brands.map((b) => [b.slug, b]));
const prodBySlug = Object.fromEntries(products.map((p) => [p.slug, p]));

const errorsByProduct = {};
for (const e of errors) {
  const ps = e.product_slug;
  if (!errorsByProduct[ps]) errorsByProduct[ps] = [];
  errorsByProduct[ps].push(e);
}

const invalidProducts = products.filter((p) => (errorsByProduct[p.slug]?.length ?? 0) < 2);
if (invalidProducts.length) {
  console.error('Produits avec moins de 2 fiches erreurs:', invalidProducts.map((p) => p.slug).join(', '));
  process.exit(1);
}

const catIds = {};
categories.forEach((c, i) => { catIds[c.slug] = i + 1; });
const brandIds = {};
brands.forEach((b, i) => { brandIds[b.slug] = i + 1; });
const prodIds = {};
products.forEach((p, i) => { prodIds[p.slug] = i + 1; });

let sql = `-- ${SITE} — seed catalogue codes erreurs (généré par scripts/export-errors-artifacts.mjs)\n`;
sql += 'SET NAMES utf8mb4;\nSET FOREIGN_KEY_CHECKS=0;\n';
sql += 'TRUNCATE TABLE error_code_applicable_products;\nTRUNCATE TABLE error_codes;\nTRUNCATE TABLE products;\nTRUNCATE TABLE brands;\nTRUNCATE TABLE device_categories;\nSET FOREIGN_KEY_CHECKS=1;\n\n';

for (const c of categories) {
  sql += `INSERT INTO device_categories (id, slug, name_fr, name_en, name_de, name_it, name_es, sort_order) VALUES (${catIds[c.slug]}, ${sqlEscape(c.slug)}, ${sqlEscape(c.name_fr)}, ${sqlEscape(c.name_en)}, ${sqlEscape(c.name_de)}, ${sqlEscape(c.name_it)}, ${sqlEscape(c.name_es)}, ${c.sort_order});\n`;
}
sql += '\n';
for (const b of brands) {
  sql += `INSERT INTO brands (id, slug, name, is_affiliate_partner, priority_rank, official_site_url, support_url, support_email, support_phone) VALUES (${brandIds[b.slug]}, ${sqlEscape(b.slug)}, ${sqlEscape(b.name)}, ${b.is_affiliate_partner}, ${b.priority_rank}, ${sqlEscape(b.official_site_url)}, ${sqlEscape(b.support_url)}, ${b.support_email ? sqlEscape(b.support_email) : 'NULL'}, ${b.support_phone ? sqlEscape(b.support_phone) : 'NULL'});\n`;
}
sql += '\n';
for (const p of products) {
  const bid = brandIds[p.brand_slug];
  const cid = catIds[p.category_slug];
  sql += `INSERT INTO products (id, slug, brand_id, category_id, name, protocol) VALUES (${prodIds[p.slug]}, ${sqlEscape(p.slug)}, ${bid}, ${cid}, ${sqlEscape(p.name)}, ${p.protocol ? sqlEscape(p.protocol) : 'NULL'});\n`;
}
sql += '\n';

let errId = 1;
for (const e of errors) {
  const p = prodBySlug[e.product_slug];
  const solutionWithCause = (lang) => {
    const cause = loc(e, 'cause', lang);
    const sol = loc(e, 'solution', lang);
    return cause ? `Causes fréquentes : ${cause}\n\n${sol}` : sol;
  };
  sql += `INSERT INTO error_codes (id, slug, category_id, brand_id, product_id, error_code, difficulty, estimated_time, estimated_cost, requires_official_sav, title_fr, title_en, title_de, title_it, title_es, symptom_fr, symptom_en, symptom_de, symptom_it, symptom_es, solution_fr, solution_en, solution_de, solution_it, solution_es, tools_fr, tools_en, tools_de, tools_it, tools_es, safety_warning_fr, safety_warning_en, safety_warning_de, safety_warning_it, safety_warning_es) VALUES (`;
  sql += `${errId}, ${sqlEscape(e.slug)}, ${catIds[p.category_slug]}, ${brandIds[p.brand_slug]}, ${prodIds[e.product_slug]}, ${sqlEscape(e.error_code)}, ${e.difficulty}, ${sqlEscape(e.estimated_time)}, ${sqlEscape(e.estimated_cost)}, ${e.requires_official_sav ? 1 : 0}, `;
  for (const lang of langs) {
    sql += `${sqlEscape(loc(e, 'title', lang))}, `;
  }
  for (const lang of langs) {
    sql += `${sqlEscape(loc(e, 'symptom', lang))}, `;
  }
  for (const lang of langs) {
    sql += `${sqlEscape(solutionWithCause(lang))}, `;
  }
  for (const lang of langs) {
    sql += `${sqlEscape(loc(e, 'tools', lang) || e.tools_fr || '')}, `;
  }
  for (const lang of langs) {
    const sw = loc(e, 'safety_warning', lang) || e.safety_warning_fr;
    sql += `${sw ? sqlEscape(sw) : 'NULL'}, `;
  }
  sql = sql.replace(/, $/, ');\n');
  errId++;
}

mkdirSync(join(root, 'sql'), { recursive: true });
writeFileSync(join(root, 'sql/seed_1p1a.sql'), sql, 'utf8');

function buildCatalogLang(lang) {
  const catOut = categories.map((c) => ({
    id: catIds[c.slug],
    slug: c.slug,
    name: loc(c, 'name', lang),
    sort_order: c.sort_order,
  }));
  const brandOut = brands.map((b) => ({
    id: brandIds[b.slug],
    slug: b.slug,
    name: b.name,
    is_affiliate_partner: b.is_affiliate_partner,
    priority_rank: b.priority_rank,
    official_site_url: b.official_site_url,
    support_url: b.support_url,
    support_email: b.support_email,
    support_phone: b.support_phone,
    affiliate_default_url: null,
  }));
  const prodOut = products
    .map((p) => ({
      id: prodIds[p.slug],
      slug: p.slug,
      brand_id: brandIds[p.brand_slug],
      brand_slug: p.brand_slug,
      category_id: catIds[p.category_slug],
      category_slug: p.category_slug,
      name: p.name,
      protocol: p.protocol ?? null,
      image_url: null,
      error_count: errorsByProduct[p.slug].length,
    }))
    .filter((p) => p.error_count >= 2);

  const errOut = errors.map((e, idx) => {
    const p = prodBySlug[e.product_slug];
    const b = brandBySlug[p.brand_slug];
    return {
      id: idx + 1,
      slug: e.slug,
      category_id: catIds[p.category_slug],
      category_slug: p.category_slug,
      brand_id: brandIds[p.brand_slug],
      brand_slug: p.brand_slug,
      product_id: prodIds[e.product_slug],
      product_slug: e.product_slug,
      applicable_products: [],
      error_code: e.error_code,
      difficulty: e.difficulty,
      estimated_time: e.estimated_time,
      estimated_cost: e.estimated_cost,
      requires_official_sav: Boolean(e.requires_official_sav),
      title: loc(e, 'title', lang),
      symptom: loc(e, 'symptom', lang),
      cause: loc(e, 'cause', lang),
      solution: loc(e, 'solution', lang),
      tools: loc(e, 'tools', lang) || e.tools_fr || '',
      safety_warning: loc(e, 'safety_warning', lang) || e.safety_warning_fr || null,
      brand_support_url: b.support_url,
      seo_path: `${SEO_PREFIX}/${e.slug}/`,
    };
  });

  return {
    ok: true,
    source: 'fallback',
    lang,
    categories: catOut,
    brands: brandOut,
    products: prodOut,
    errors: errOut,
  };
}

const fallback = {};
for (const lang of langs) {
  fallback[lang] = buildCatalogLang(lang);
}

mkdirSync(join(root, 'public/api'), { recursive: true });
writeFileSync(join(root, 'public/api/errors-fallback.json'), JSON.stringify(fallback, null, 0), 'utf8');

mkdirSync(join(root, 'src/data/errors'), { recursive: true });
writeFileSync(join(root, 'src/data/errors/catalog-fr.json'), JSON.stringify(buildCatalogLang('fr'), null, 0), 'utf8');

console.log(`OK: ${errors.length} fiches, ${products.length} produits → sql/seed_1p1a.sql + public/api/errors-fallback.json`);
