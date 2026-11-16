import { MEILLEUR_INDEXABLES } from './src/content/meilleur-index.mjs';
// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { pageDates } from './src/content/dates.mjs';
import { sitemapLinks } from './src/i18n/sitemap-links.mjs';

const SITE = process.env.SITE ?? 'https://1piece1ampoule.fr';
/** @type {Set<string>} */
const sitemapPaths = new Set();

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // Port fixe : un `npm run dev` par site, sans se marcher dessus.
  server: { port: 4323 },
  redirects: {
    '/outils/calculateur-lumens-par-piece/': '/outils/',
    '/outils/compatibilite-variateur-led/': '/guides/matrice-variateur-dimmer-ampoule-led-gu10-e27/',
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const m = new URL(page).pathname.match(/^\/meilleur\/([^/]+)\/$/);
        const ok = !m || MEILLEUR_INDEXABLES.includes(m[1]);
        if (ok) sitemapPaths.add(new URL(page).pathname);
        return ok;
      },
      serialize(item) {
        item.lastmod = pageDates(new URL(item.url).pathname).modified;
        const links = sitemapLinks(new URL(item.url).pathname, SITE, sitemapPaths);
        if (links) item.links = links;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: { strictPort: true },
    preview: { strictPort: true },
  }
});