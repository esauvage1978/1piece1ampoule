import { MEILLEUR_INDEXABLES } from './src/content/meilleur-index.mjs';
// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { pageDates } from './src/content/dates.mjs';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE ?? 'https://1piece1ampoule.fr',
  // Port fixe : un `npm run dev` par site, sans se marcher dessus.
  server: { port: 4323 },
  redirects: {
    '/outils/calculateur-lumens-par-piece/': '/outils/',
    '/outils/compatibilite-variateur-led/': '/guides/matrice-variateur-dimmer-ampoule-led-gu10-e27/',
  },
  integrations: [sitemap({ filter: (page) => { const m = new URL(page).pathname.match(/^\/meilleur\/([^/]+)\/$/); return !m || MEILLEUR_INDEXABLES.includes(m[1]); }, serialize(item) { item.lastmod = pageDates(new URL(item.url).pathname).modified; return item; } })],
  vite: {
    plugins: [tailwindcss()],
    server: { strictPort: true },
    preview: { strictPort: true },
  }
});