#!/usr/bin/env node
/** Génère lang-nav-live.json : chemins alternatifs i18n qui répondent 200 en production. */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import { GROUPS } from '../src/content/i18n.ts';

const urls = new Set<string>();
for (const g of GROUPS) {
  for (const [lang, path] of Object.entries(g)) {
    if (lang === 'fr' || !path) continue;
    urls.add(path);
    if (lang === 'en' && path.startsWith('/en/')) {
      urls.add(path.replace(/^\/en\//, '/uk/'));
      urls.add(path.replace(/^\/en\//, '/ca/'));
    }
  }
}

const live200: string[] = [];
for (const p of [...urls].sort()) {
  const code = execSync(
    `curl -sI -o /dev/null -w '%{http_code}' 'https://1piece1ampoule.fr${p}'`,
    { encoding: 'utf8' },
  ).trim();
  if (code === '200') live200.push(p);
}

const out = { live200, generated: new Date().toISOString(), checked: urls.size };
fs.writeFileSync(new URL('../src/content/lang-nav-live.json', import.meta.url), JSON.stringify(out, null, 2) + '\n');
console.log(`lang-nav-live: ${live200.length}/${urls.size} URLs en 200`);
