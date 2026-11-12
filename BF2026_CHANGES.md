# Black Friday 2026 — changements (1piece1ampoule.fr)

**Build :** `npm run build` OK (Node ≥ 22.12). **Non déployé.**

## Données

| Fichier | Action |
|---------|--------|
| `src/data/black-friday-2026.json` | **Créé** — copie de `/workspace/blackfriday-2026/1piece1ampoule/black-friday-2026.json` (source unique des offres au build) |

## Logique & composants

| Fichier | Action |
|---------|--------|
| `src/content/black-friday-2026.ts` | **Créé** — filtre région/expiry, catégories (secteurs marchands), i18n, FAQ, JSON-LD ItemList/Offer, guides internes |
| `src/components/BlackFridayHub.astro` | **Créé** — hub (top offres, catégories, Amazon, vérif prix, teasers, FAQ, countdown 27/11 & 30/11, bouton copier code) |
| `src/components/BlackFridayStrip.astro` | **Créé** — bandeau lien vers le hub |

## Pages hub (URLs publiques)

| URL |
|-----|
| https://1piece1ampoule.fr/black-friday-2026/ |
| https://1piece1ampoule.fr/black-friday-2026/eclairage-luminaires/ |
| https://1piece1ampoule.fr/en/black-friday-2026/ |
| https://1piece1ampoule.fr/en/black-friday-2026/lighting/ |
| https://1piece1ampoule.fr/uk/black-friday-2026/ |
| https://1piece1ampoule.fr/uk/black-friday-2026/lighting/ |
| https://1piece1ampoule.fr/ca/black-friday-2026/ |
| https://1piece1ampoule.fr/de/black-friday-2026/ |
| https://1piece1ampoule.fr/de/black-friday-2026/beleuchtung/ |
| https://1piece1ampoule.fr/nl/black-friday-2026/ |
| https://1piece1ampoule.fr/nl/black-friday-2026/verlichting/ |
| https://1piece1ampoule.fr/es/black-friday-2026/ |
| https://1piece1ampoule.fr/es/black-friday-2026/iluminacion/ |
| https://1piece1ampoule.fr/it/black-friday-2026/ |
| https://1piece1ampoule.fr/it/black-friday-2026/illuminazione/ |

Fichiers pages : `src/pages/black-friday-2026/{index,[categorie].}.astro` et miroirs sous `en/`, `uk/`, `ca/`, `de/`, `nl/`, `es/`, `it/`.

## Intégration site

| Fichier | Action |
|---------|--------|
| `src/content/i18n.ts` | **Modifié** — groupe hreflang BF (fr/en/uk/ca/de/nl/es/it), type `Group` étendu uk/ca |
| `src/content/dates.mjs` | **Modifié** — `lastmod` 2026-10-29 pour les hubs BF |
| `src/layouts/Layout.astro` | **Modifié** — hreflang uk/ca, og:locale, fil d’Ariane `black-friday-2026`, langues uk/ca |
| `src/components/Header.astro` | **Modifié** — entrée menu « BF 2026 » par locale |
| `src/pages/index.astro` | **Modifié** — bandeau BF sous l’accès rapide |
| `src/components/IntlHome.astro` | **Modifié** — bandeau BF sur accueils en/de/nl/es/it |
| `src/pages/codes-promo/index.astro` | **Modifié** — bandeau BF en tête de page |

## Sitemap

Automatique via `@astrojs/sitemap` (nouvelles URLs incluses au build).

## Notes

- Offres : **76** lignes dans le JSON ; filtrées par pays et `end` au build (offres expirées exclues).
- Teasers ManoMano FR / Shelly UK : bloc « Offres attendues / à confirmer » avec `source_url`.
- Liens affiliés sortants : `rel="sponsored nofollow noopener"` + `target="_blank"`.
- Pages `/en/deals/`, `/uk/deals/`, `/ca/deals/` existent encore dans un ancien `dist/` mais **n’ont pas de source dans `src/`** : le lien BF a été ajouté sur `/codes-promo/` (FR) et les accueils ; réintroduire un lien sur deals dès que ces pages seront de nouveau versionnées.

## Rafraîchir les offres

```bash
cp /workspace/blackfriday-2026/1piece1ampoule/black-friday-2026.json src/data/black-friday-2026.json
npm run build
```

Ne pas éditer les offres dans les fichiers `.astro`.
