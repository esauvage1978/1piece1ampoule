# Audit d’indexation — 1piece1ampoule.fr — 16/10/2026 (heure de Paris)

## 1. Sitemap (API Search Console)
- `sitemap-index.xml` : soumis le 12/10 11h37, **toujours « en attente »**, dernier téléchargement par Google le **07/04/2026 17h29** (Google n’a pas relu le sitemap depuis la refonte). 0 erreur, 0 avertissement. Compteurs soumis/indexés non renvoyés (fichier jamais retraité).
- Action : resoumis `sitemap-index.xml` **et** `sitemap-0.xml` (direct) le 16/10 à 18h30.
- robots.txt : `Allow: /` + ligne Sitemap. OK.

## 2. Inspection d’URL (74/74 URL du sitemap)
| État | Nb |
|---|---|
| Google ne reconnaît pas cette URL | 65 |
| Envoyée et indexée | 4 (/, /pieces/, /meilleur/meilleure-applique-miroir-salle-de-bain/, /meilleur/meilleure-lampe-solaire-exterieur/) |
| Explorée, actuellement non indexée | 3 (/guides/ampoules-dimmables-variateur/, /pieces/bureau-adulte/, /pieces/jardin/) |
| Page en double sans canonique sélectionnée | 2 (/pieces/cave-a-vin/ → Google a choisi **www**, /zones/escaliers/) |

robotsTxtState = ALLOWED et indexingState = INDEXING_ALLOWED partout où Google a exploré. Aucun blocage.

## 3. Crawl du site en ligne (74 pages)
- 74/74 : HTTP 200, aucune balise `noindex`, aucun en-tête `X-Robots-Tag`.
- 74/74 : canonical = URL exacte du sitemap (https, sans www, slash final).
- **Problème trouvé** : `www.1piece1ampoule.fr`, `http://` et `/index.html` répondaient **200 sans redirection** (contenu dupliqué ; Google a déjà retenu une URL www comme canonique).

## 4. Correctif déployé (16/10 18h30)
- Ajout de `public/.htaccess` : redirections **301** www → sans www, http → https, `/index.html` → `/` (le dossier `/.well-known/` est exclu pour le renouvellement SSL).
- Testé en ligne : https 200 ; http, www (http/https) et index.html → 301 vers https://1piece1ampoule.fr/… ; `/pieces/cuisine` → `/pieces/cuisine/` ; sitemap 200.
- Sauvegarde avant envoi : `C:\wamp64\www\site_vitrine\_backups\1piece1ampoule-remote-20261016-1829.zip`. Source locale synchronisée.

## 5. À soumettre manuellement (« Demander l’indexation »), par priorité
1. https://1piece1ampoule.fr/ (re-crawl de la nouvelle home, maillage vers tout le site)
2. https://1piece1ampoule.fr/pieces/cuisine/
3. https://1piece1ampoule.fr/pieces/cave-a-vin/ (corrige le canonique www)
4. https://1piece1ampoule.fr/articles/
5. https://1piece1ampoule.fr/meilleur/
6. https://1piece1ampoule.fr/articles/ampoule-led-qui-clignote/
7. https://1piece1ampoule.fr/meilleur/meilleure-ampoule-led-e27/
8. https://1piece1ampoule.fr/meilleur/meilleur-spot-gu10/
9. https://1piece1ampoule.fr/pieces/salon/
10. https://1piece1ampoule.fr/outils/

(Quota Search Console ≈ 10 demandes/jour ; ensuite /articles/2700k-ou-4000k/, /articles/combien-de-lumens-par-piece/, /pieces/salle-de-bain/, /pieces/jardin/, /meilleur/meilleure-ampoule-connectee/.)

## 6. Lecture
Le site est techniquement indexable ; le frein principal est que Google n’a **pas encore relu le sitemap** ni découvert les nouvelles URL (65/74 inconnues, site jeune avec peu de liens entrants). Leviers : demandes d’indexation ci-dessus, liens externes (Pinterest, forums), refaire cet audit dans 7–10 jours.

## Annexe : détail par URL
| URL | Couverture | Dernière exploration | Canonique Google |
|---|---|---|---|
| / | Envoyée et indexée | 15/09/2026 06:20 | 1piece1ampoule.fr/ |
| /a-propos/ | Google ne reconnaît pas cette URL | — | — |
| /affiliation-amazon/ | Google ne reconnaît pas cette URL | — | — |
| /articles/ | Google ne reconnaît pas cette URL | — | — |
| /articles/2700k-ou-4000k/ | Google ne reconnaît pas cette URL | — | — |
| /articles/ampoule-connectee-wifi-ou-zigbee/ | Google ne reconnaît pas cette URL | — | — |
| /articles/ampoule-crepusculaire/ | Google ne reconnaît pas cette URL | — | — |
| /articles/ampoule-dimmable-ou-non/ | Google ne reconnaît pas cette URL | — | — |
| /articles/ampoule-filament-vintage/ | Google ne reconnaît pas cette URL | — | — |
| /articles/ampoule-four-frigo/ | Google ne reconnaît pas cette URL | — | — |
| /articles/ampoule-led-chauffe-duree-de-vie/ | Google ne reconnaît pas cette URL | — | — |
| /articles/ampoule-led-gresille-bourdonne/ | Google ne reconnaît pas cette URL | — | — |
| /articles/ampoule-led-qui-clignote/ | Google ne reconnaît pas cette URL | — | — |
| /articles/ampoule-led-reste-allumee-faiblement/ | Google ne reconnaît pas cette URL | — | — |
| /articles/choisir-spots-encastrables/ | Google ne reconnaît pas cette URL | — | — |
| /articles/combien-de-lumens-par-piece/ | Google ne reconnaît pas cette URL | — | — |
| /articles/e27-ou-b22/ | Google ne reconnaît pas cette URL | — | — |
| /articles/eclairage-terrasse/ | Google ne reconnaît pas cette URL | — | — |
| /articles/economies-led-calcul/ | Google ne reconnaît pas cette URL | — | — |
| /articles/gu10-ou-gu5-3/ | Google ne reconnaît pas cette URL | — | — |
| /articles/installer-ruban-led/ | Google ne reconnaît pas cette URL | — | — |
| /articles/lampe-de-chevet/ | Google ne reconnaît pas cette URL | — | — |
| /articles/lampe-horticole/ | Google ne reconnaît pas cette URL | — | — |
| /articles/meilleure-ampoule-detecteur-mouvement/ | Google ne reconnaît pas cette URL | — | — |
| /articles/meilleure-ampoule-dimmable-e27/ | Google ne reconnaît pas cette URL | — | — |
| /articles/meilleure-ampoule-e27-4000k/ | Google ne reconnaît pas cette URL | — | — |
| /articles/meilleure-ampoule-g9/ | Google ne reconnaît pas cette URL | — | — |
| /guides/ | Google ne reconnaît pas cette URL | — | — |
| /guides/ampoules-dimmables-variateur/ | Explorée, actuellement non indexée | 07/05/2026 15:43 | 1piece1ampoule.fr/guides/ampoules-dimmables-variateur/ |
| /guides/culots-e27-e14-gu10/ | Google ne reconnaît pas cette URL | — | — |
| /guides/detecteurs-de-mouvement/ | Google ne reconnaît pas cette URL | — | — |
| /guides/ip-indice-protection/ | Google ne reconnaît pas cette URL | — | — |
| /guides/irc-indice-rendu-couleur/ | Google ne reconnaît pas cette URL | — | — |
| /guides/kelvin-temperature-couleur/ | Google ne reconnaît pas cette URL | — | — |
| /guides/lumens-vs-watts/ | Google ne reconnaît pas cette URL | — | — |
| /meilleur/ | Google ne reconnaît pas cette URL | — | — |
| /meilleur/meilleur-projecteur-led-exterieur-detecteur/ | Google ne reconnaît pas cette URL | — | — |
| /meilleur/meilleur-ruban-led/ | Google ne reconnaît pas cette URL | — | — |
| /meilleur/meilleur-spot-gu10/ | Google ne reconnaît pas cette URL | — | — |
| /meilleur/meilleure-ampoule-connectee/ | Google ne reconnaît pas cette URL | — | — |
| /meilleur/meilleure-ampoule-led-e27/ | Google ne reconnaît pas cette URL | — | — |
| /meilleur/meilleure-applique-miroir-salle-de-bain/ | Envoyée et indexée | 15/10/2026 03:19 | 1piece1ampoule.fr/meilleur/meilleure-applique-miroir-salle-de-bain/ |
| /meilleur/meilleure-guirlande-guinguette/ | Google ne reconnaît pas cette URL | — | — |
| /meilleur/meilleure-lampe-de-bureau-led/ | Google ne reconnaît pas cette URL | — | — |
| /meilleur/meilleure-lampe-detecteur-sans-fil/ | Google ne reconnaît pas cette URL | — | — |
| /meilleur/meilleure-lampe-solaire-exterieur/ | Envoyée et indexée | 15/10/2026 18:04 | 1piece1ampoule.fr/meilleur/meilleure-lampe-solaire-exterieur/ |
| /meilleur/meilleure-reglette-led-garage/ | Google ne reconnaît pas cette URL | — | — |
| /meilleur/meilleure-reglette-led-sous-meuble/ | Google ne reconnaît pas cette URL | — | — |
| /meilleur/meilleure-veilleuse-enfant/ | Google ne reconnaît pas cette URL | — | — |
| /mentions-legales/ | Google ne reconnaît pas cette URL | — | — |
| /outils/ | Google ne reconnaît pas cette URL | — | — |
| /pieces/ | Envoyée et indexée | 29/09/2026 16:27 | 1piece1ampoule.fr/pieces/ |
| /pieces/bureau-adulte/ | Explorée, actuellement non indexée | 10/07/2026 10:07 | 1piece1ampoule.fr/pieces/bureau-adulte/ |
| /pieces/bureau-enfant/ | Google ne reconnaît pas cette URL | — | — |
| /pieces/cave-a-vin/ | Page en double sans URL canonique sélectionnée par l'utilisateur | 28/06/2026 02:48 | www.1piece1ampoule.fr/pieces/cave-a-vin/ |
| /pieces/cave-sans-electricite/ | Google ne reconnaît pas cette URL | — | — |
| /pieces/cave-voutee/ | Google ne reconnaît pas cette URL | — | — |
| /pieces/chambre-adulte/ | Google ne reconnaît pas cette URL | — | — |
| /pieces/chambre-enfant/ | Google ne reconnaît pas cette URL | — | — |
| /pieces/couloir-long-etroit/ | Google ne reconnaît pas cette URL | — | — |
| /pieces/couloir/ | Google ne reconnaît pas cette URL | — | — |
| /pieces/cuisine/ | Google ne reconnaît pas cette URL | — | — |
| /pieces/garage/ | Google ne reconnaît pas cette URL | — | — |
| /pieces/jardin/ | Explorée, actuellement non indexée | 15/10/2026 15:33 | 1piece1ampoule.fr/pieces/jardin/ |
| /pieces/parking/ | Google ne reconnaît pas cette URL | — | — |
| /pieces/salle-de-bain/ | Google ne reconnaît pas cette URL | — | — |
| /pieces/salle-manger/ | Google ne reconnaît pas cette URL | — | — |
| /pieces/salon/ | Google ne reconnaît pas cette URL | — | — |
| /pieces/toilettes/ | Google ne reconnaît pas cette URL | — | — |
| /politique-de-confidentialite/ | Google ne reconnaît pas cette URL | — | — |
| /politique-de-cookies/ | Google ne reconnaît pas cette URL | — | — |
| /zones/ | Google ne reconnaît pas cette URL | — | — |
| /zones/escaliers/ | Page en double sans URL canonique sélectionnée par l'utilisateur | 11/06/2026 05:26 | 1piece1ampoule.fr/zones/escaliers/ |
| /zones/placards-dressing/ | Google ne reconnaît pas cette URL | — | — |
