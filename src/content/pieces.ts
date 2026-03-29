import type { ThematicPage } from './site';

export const PIECES: ThematicPage[] = [
  {
    slug: 'cuisine',
    title: 'Quelle ampoule choisir pour une cuisine ? (zones, lumens, solutions)',
    description:
      'Découpe ta cuisine en zones (plan de travail, central, ambiance, électroménager) et choisis l’éclairage adapté : lumens, Kelvin, IRC, spots, bandeaux LED, suspensions.',
    hero: {
      eyebrow: 'Pièce par pièce',
      image: '/illustrations/cuisine.svg',
      imageAlt: 'Illustration cuisine et éclairage',
    },
    sections: [
      {
        title: 'Résumé (si tu veux aller vite)',
        points: [
          'Plan de travail : sous-meubles + 4000K + IRC ≥ 90.',
          'Éclairage central : homogène, sans éblouissement.',
          'Ambiance : 2700–3000K + variateur/contrôle d’intensité si possible.',
          'Électroménager : ampoules spécifiques (culot/dimensions/chaleur).',
        ],
      },
      {
        title: 'Les erreurs fréquentes',
        points: [
          'N’avoir qu’un plafonnier : tu crées des ombres sur le plan de travail.',
          'Choisir trop froid partout : l’ambiance devient “bloc opératoire”.',
          'Oublier l’IRC : couleurs d’aliments ternes, rendu moins qualitatif.',
        ],
      },
    ],
    products: [
      {
        title: 'Réglettes LED sous meuble',
        subtitle: 'Éclairage direct du plan de travail',
        keywords: 'reglette led sous meuble cuisine 4000k irc 90',
        altKeywords: 'eclairage sous meuble led cuisine 4000k irc 90',
      },
      {
        title: 'Ruban LED avec profilé',
        subtitle: 'Lumière continue, rendu premium',
        keywords: 'ruban led cuisine 24v profilé aluminium diffuseur 4000k',
        altKeywords: 'ruban led sous meuble cuisine profilé aluminium diffuseur 4000k',
      },
      {
        title: 'Spots encastrables LED',
        subtitle: 'Plafond uniforme et discret',
        keywords: 'spot encastrable led gu10 cuisine 4000k irc 90',
        altKeywords: 'plafonnier spots encastrés led cuisine 4000k irc 90',
      },
      {
        title: 'Ampoules E27 IRC 90+',
        subtitle: 'Couleurs fidèles',
        keywords: 'ampoule led e27 irc 90 4000k',
        altKeywords: 'ampoule led e27 haute fidelite couleurs irc 90 4000k',
      },
    ],
  },
  {
    slug: 'salon',
    title: 'Éclairage de salon : TV, lecture, ambiance — choisir les bons luminaires',
    description:
      'Découpe ton salon en zones (TV, lecture, ambiance, circulation) pour éviter l’éblouissement et créer un rendu agréable le jour comme le soir. Ensuite, choisis les bons niveaux de lumens, la bonne teinte (Kelvin) et un IRC adapté.',
    hero: {
      eyebrow: 'Pièce par pièce',
      image: '/illustrations/salon.svg',
      imageAlt: 'Illustration salon et lumière d’ambiance',
    },
    sections: [
      {
        title: 'La règle qui change tout',
        points: [
          'Multiplie les points lumineux : plafond + lampes + éclairage indirect.',
          'Teinte conseillée pour le soir : 2700–3000K (plus cosy).',
          'Évite l’éblouissement autour de la TV : lumière indirecte / ruban LED anti-reflets.',
        ],
      },
    ],
    products: [
      { title: 'Lampadaire / liseuse de lecture', subtitle: 'Faisceau dirigé et précis', keywords: 'lampadaire lecture led orientable' },
      { title: 'Ampoules E27 blanc chaud', subtitle: 'Ambiance cosy', keywords: 'ampoule led e27 2700k' },
      { title: 'Ruban LED derriere TV (bias light)', subtitle: 'Confort et moins de reflet', keywords: 'ruban led derriere tv bias light 24v' },
      { title: 'Variateur + ampoules dimmables', subtitle: 'Ambiance réglable', keywords: 'ampoule led dimmable e27 variateur compatible' },
    ],
  },
  {
    slug: 'garage',
    title: 'Éclairage de garage : efficace, sans ombre, “atelier”',
    description:
      'Pour bricoler et stationner en sécurité : plafonniers puissants, réglettes atelier, détecteurs et lumière neutre à froide.',
    hero: {
      eyebrow: 'Usage',
      image: '/illustrations/garage.svg',
      imageAlt: 'Illustration garage et réglettes LED',
    },
    sections: [
      {
        title: 'Règles d’or par zone (sans fatigue visuelle)',
        points: [
          'Stockage : éclaire les étagères (diffuseur + lignes lumineuses) pour retrouver rapidement outils et consommables.',
          'Établi : vise un faisceau dirigé, stable, orientable, pour éviter les ombres sur la pièce en cours.',
          'Stationnement : cherche une lumière homogène au sol pour circuler sans “zones sombres”.',
          'Entrée : privilégie une détection simple (mouvement ou ouverture) pour accéder vite à la bonne ambiance.',
        ],
      },
      {
        title: 'Teinte, couleurs et confort',
        points: [
          'Teinte (Kelvin) : souvent neutre à froid (env. 4000K–5000K) pour bien voir et travailler.',
          'Couleurs (IRC) : vise un IRC élevé (souvent >= 90) pour un rendu plus naturel.',
          'Intensité : un mode “dimmable” ou plusieurs niveaux lumineux rendent le garage plus confortable.',
        ],
      },
    ],
    products: [
      { title: 'Reglette LED atelier (stockage/étagères)', subtitle: 'Lignes lumineuses, montage simple', keywords: 'reglette led atelier garage etagere 4000k' },
      { title: 'Projecteur LED orientable (établi)', subtitle: 'Faisceau dirigé et précis', keywords: 'projecteur led orientable interieur etabli' },
      { title: 'Plafonnier/panneau LED puissant (circulation)', subtitle: 'Éclairage général homogène', keywords: 'panneau led plafond garage 4000k' },
      { title: 'Détecteur de mouvement (entrée)', subtitle: 'Allumage automatique', keywords: 'detecteur de mouvement interieur plafond 4000k' },
      { title: 'Ruban LED robuste (outils/coin)', subtitle: 'Accent local, déco technique', keywords: 'ruban led etanche atelier placard outils' },
      { title: 'Lampe d’appoint établie (support)', subtitle: 'Travail de précision', keywords: 'lampe de travail led orientable etabli' },
    ],
  },
  {
    slug: 'salle-de-bain',
    title: 'Éclairage de salle de bain : miroir, douche, ambiance (sans risque)',
    description:
      'Découpe ta salle de bain en zones (miroir/vasque, douche/baignoire, toilettes, circulation) et choisis la bonne teinte (Kelvin), la bonne fidélité des couleurs (IRC) et des luminaires adaptés aux pièces humides.',
    hero: {
      eyebrow: 'Pièce par pièce',
      image: '/illustrations/salle-bain.svg',
      imageAlt: 'Illustration salle de bain et éclairage',
    },
    sections: [
      {
        title: 'Objectifs par zone',
        points: [
          'Miroir/vasque : éviter les ombres sur le visage, viser une lumière nette et naturelle (IRC élevé).',
          'Douche/baignoire : luminaires prévus pour l’humidité (IP) + placement selon zones de sécurité.',
          'Toilettes : confort + économie (capteur parfois utile).',
          'Ambiance : une teinte plus chaude (2700-3000K) pour le soir.',
        ],
      },
      {
        title: 'Les erreurs fréquentes',
        points: [
          'Une seule source au plafond : ombres sur le visage.',
          'Teinte trop froide : rendu “clinique”.',
          'Luminaires non adaptés pièces humides : risque et inconfort.',
        ],
      },
    ],
    products: [
      { title: 'Barre/Reglette LED pour miroir', subtitle: 'Sans ombres sur le visage', keywords: 'barre led miroir salle de bain ip44' },
      { title: 'Applique LED pour vasque', subtitle: 'Lumière de face', keywords: 'applique led salle de bain miroir ip44' },
      { title: 'Spot/downlight LED salle de bain IP', subtitle: 'Zones humides (sélection)', keywords: 'spot led salle de bain ip65 ip44' },
      { title: 'Ruban LED étanche IP pour douche/zone humide', subtitle: 'Accent protégé', keywords: 'ruban led etanche ip65 salle de bain 24v' },
    ],
  },
  {
    slug: 'salle-manger',
    title: 'Éclairage de salle à manger : table, buffet, ambiance — conseils pratiques',
    description:
      'Découpe la salle à manger en zones (table/repas, buffet/rangement, ambiance indirecte, circulation) pour choisir les bons luminaires et la bonne teinte (Kelvin) avec un rendu agréable (IRC).',
    hero: {
      eyebrow: 'Pièce par pièce',
      image: '/illustrations/salle-manger.svg',
      imageAlt: 'Illustration salle à manger et éclairage',
    },
    sections: [
      {
        title: 'Objectifs par zone',
        points: [
          'Table/repas : lumière flatteuse, sans ombres sur les visages.',
          'Buffet/rangement : mettre en valeur et retrouver facilement.',
          'Ambiance : indirecte, plus chaude le soir, et parfois dimmable.',
          'Circulation : homogène pour éviter les zones trop sombres.',
        ],
      },
      {
        title: 'Les erreurs fréquentes',
        points: [
          'Un seul plafonnier : visage ombré + table pas assez mise en valeur.',
          'Trop froid : rendu “terne” et moins convivial.',
          'Manque d’IRC : couleurs des aliments moins naturelles.',
        ],
      },
    ],
    products: [
      { title: 'Suspension au-dessus de la table', subtitle: 'Mise en valeur', keywords: 'suspension luminaire salle a manger au dessus table' },
      { title: 'Ruban LED pour buffet', subtitle: 'Accent & déco', keywords: 'ruban led buffet salle a manger 24v' },
      { title: 'Appliques murales indirectes', subtitle: 'Ambiance douce', keywords: 'applique murale indirecte salle a manger' },
      { title: 'Ampoules dimmables (ambiance)', subtitle: 'Soir = plus cosy', keywords: 'ampoule led dimmable e27 2700k' },
    ],
  },
  {
    slug: 'jardin',
    title: 'Éclairage de jardin : pergola, salon de jardin, allée, repas/barbecue',
    description:
      'Découpe ton jardin en zones (pergola, salon de jardin, allée/circulation, zone repas/barbecue) pour choisir les bons luminaires extérieurs. Optimise la teinte (Kelvin), la fidélité des couleurs (IRC) et le dimmable pour créer une ambiance qui dure.',
    hero: {
      eyebrow: 'Pièce par pièce',
      image: '/illustrations/jardin.svg',
      imageAlt: 'Illustration jardin et éclairage',
    },
    sections: [
      {
        title: 'Résumé (si tu veux aller vite)',
        points: [
          'Pergola : privilégie une lumière indirecte (confort + ambiance, sans éblouir).',
          'Salon de jardin : vise 2700–3000K le soir et un IRC adapté pour des couleurs flatteuses.',
          'Allée : cherche une lumière homogène au sol et des luminaires avec un bon IP.',
          'Zone repas/barbecue : mise en valeur + Kelvin/IRC pour des visages et aliments plus naturels.',
        ],
      },
      {
        title: 'Les erreurs fréquentes',
        points: [
          'Mettre trop froid sans réguler : ambiance “bureau” le soir.',
          'Oublier l’indice IP : tu prends un luminaire non prévu pour la pluie/l’extérieur.',
          'N’avoir qu’un seul point : le jardin paraît en “îlots” avec des zones d’ombre.',
          'Ignorer le dimmable : tu perds la possibilité de moduler l’ambiance selon le moment.',
        ],
      },
    ],
    products: [
      {
        title: 'Applique LED extérieur IP65 (pergola/abri)',
        subtitle: 'Indirect, anti-éblouissement',
        keywords: 'applique led exterieur ip65 3000k indirect pergola',
        altKeywords: 'ruban led exterieur ip65 indirect pergola 3000k',
        badge: 'Pergola',
      },
      {
        title: 'Guirlande LED extérieure dimmable',
        subtitle: 'Salon de jardin, ambiance chaude',
        keywords: 'guirlande led exterieur dimmable ip65 2700k',
        altKeywords: 'suspension exterieur led dimmable ip65 3000k',
        badge: 'Salon de jardin',
      },
      {
        title: 'Spot / borne LED extérieur IP67 (allée)',
        subtitle: 'Homogène, sécurité au sol',
        keywords: 'borne led exterieur ip67 3000k spot sol',
        altKeywords: 'spot sol led exterieur ip65 3000k',
        badge: 'Allée',
      },
      {
        title: 'Suspension extérieure LED (zone repas)',
        subtitle: 'Mise en valeur + IRC',
        keywords: 'suspension exterieur led ip65 2700k irc 90',
        altKeywords: 'ampoule led exterieur ip65 dimmable 3000k irc 90',
        badge: 'Repas / barbecue',
      },
    ],
  },
  {
    slug: 'couloir',
    title: 'Éclairage de couloir : couloir sombre en angle (zones, lumens, IRC)',
    description:
      'Découpe ton couloir en zones : entrée (accueil), tronçon sombre (confort), angle/coude (anti-ombre) et sol (sécurité). Ajuste ensuite la teinte (Kelvin), l’IRC et éventuellement le dimmable pour une ambiance homogène.',
    hero: {
      eyebrow: 'Pièce par pièce',
      image: '/illustrations/couloir.svg',
      imageAlt: 'Illustration couloir et éclairage',
    },
    sections: [
      {
        title: 'Résumé (si tu veux aller vite)',
        points: [
          'Couloir sombre : vise souvent 3500–4000K + plusieurs points pour éviter les “zones d’ombre”.',
          'Angle/coude : privilégie l’éclairage indirect sur les murs (lumière rebondie) plutôt qu’un seul plafonnier.',
          'Circulation au sol : sécurise le chemin avec un balisage discret et homogène.',
          'Qualité : un IRC élevé rend les portes et couleurs plus naturelles.',
        ],
      },
      {
        title: 'Les erreurs fréquentes',
        points: [
          'Un seul spot au plafond : tu “perds” l’angle et tu vois des ombres.',
          'Trop froid : l’effet est terne et moins accueillant.',
          'Ignorer le dimmable : impossible d’adapter l’intensité au soir/nuit.',
        ],
      },
    ],
    products: [
      {
        title: 'Applique LED indirecte pour couloir',
        subtitle: 'Accueil chaleureux, sans éblouir',
        keywords: 'applique murale led indirecte couloir entree 3000k',
        altKeywords: 'applique murale led indirecte couloir dimmable 2700k',
        badge: 'Entrée',
      },
      {
        title: 'Barre LED / spots pour couloir sombre',
        subtitle: 'Uniformité sur le trajet',
        keywords: 'spot encastrable led couloir 4000k irc 90',
        altKeywords: 'barre led couloir 4000k irc 90',
        badge: 'Tronçon sombre',
      },
      {
        title: 'Ruban LED indirect pour angle',
        subtitle: 'Anti-ombre, lumière rebondie',
        keywords: 'ruban led indirect angle couloir 3000k',
        altKeywords: 'applique murale led indirecte couloir angle dimmable 2700k',
        badge: 'Angle / coude',
      },
      {
        title: 'Balisage LED discret au sol',
        subtitle: 'Sécurité, sans agresser les yeux',
        keywords: 'bandeau led sol couloir 3000k irc 90',
        altKeywords: 'balise led sol couloir 2700k dimmable',
        badge: 'Sol / sécurité',
      },
    ],
  },
  {
    slug: 'bureau-adulte',
    title: 'Bureau adulte : découpe en zones (poste de travail, lecture, confort, anti-reflets)',
    description:
      'Découpe ton bureau adulte en zones (poste de travail, lecture/écriture, éclairage de confort) pour obtenir un rendu net, limiter la fatigue visuelle et préserver l’ambiance. Optimise ensuite Kelvin, IRC et le dimmable selon tes besoins.',
    hero: {
      eyebrow: 'Pièce par pièce',
      image: '/illustrations/bureau-adulte.svg',
      imageAlt: 'Illustration bureau adulte et éclairage',
    },
    sections: [
      {
        title: 'Découpage en zones',
        points: [
          'Zone “poste de travail” : vise une lumière précise sur la surface (écriture/ordinateur) pour travailler sans ombres.',
          'Zone “lecture” : ajoute une source orientable pour un éclairage ciblé, agréable pour les yeux.',
          'Zone “confort” : un éclairage indirect aide à détendre l’espace (moins de contraste, ambiance plus douce).',
          'Anti-reflets écran : répartis les sources et évite que la lumière vienne directement dans les yeux ou vers l’écran.',
        ],
      },
      {
        title: 'Réglages qui font la différence',
        points: [
          'Teinte : pour un usage actif, vise souvent un <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/kelvin-temperature-couleur">Kelvin plutôt neutre</a> (environ 3500–5000K).',
          'Couleurs fidèles : cherche un <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/irc-indice-rendu-couleur">IRC élevé</a> (souvent >= 90) pour un rendu plus naturel des papiers/bois et des objets.',
          'Confort modulable : si tu veux adapter le soir, ajoute du <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/ampoules-dimmables-variateur">dimmable & variateur</a>.',
          'Bonne quantité de lumière : commence par des <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/lumens-vs-watts">lumens cohérents</a> plutôt que “une seule ampoule”.',
        ],
      },
      {
        title: 'Erreurs fréquentes à éviter',
        points: [
          '<strong>Tout au plafond</strong> : tu crées des ombres sur la table et tu fatigues la vision.',
          '<strong>Contrastes trop forts</strong> : trop clair près du poste + sombre autour = yeux qui “sautent” en permanence.',
          'Ignorer l’<a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/irc-indice-rendu-couleur">IRC</a> quand tu utilises des couleurs (documents, maquettes).',
        ],
      },
    ],
    products: [
      {
        title: 'Lampe de bureau LED orientable',
        subtitle: 'Ciblage précis, moins d’ombres',
        keywords: 'lampe bureau led orientable 4000k',
        altKeywords: 'lampe eclairage poste de travail led 5000k',
        badge: 'Poste de travail',
      },
      {
        title: 'Réglettes LED pour bureau (éclairage de la zone)',
        subtitle: 'Uniformité sur la surface',
        keywords: 'reglette led bureau eclairage zone 4000k',
        altKeywords: 'bandeau led sous tablette bureau 4000k irc 90',
        badge: 'Zone travail',
      },
      {
        title: 'Plafonnier LED dimmable (confort)',
        subtitle: 'Ambiance modulable pour le soir',
        keywords: 'plafonnier led dimmable variateur 2700k',
        altKeywords: 'ampoule led dimmable e27 variateur compatible 3000k',
        badge: 'Confort',
      },
      {
        title: 'Ruban LED indirect pour ambiance',
        subtitle: 'Lumière rebondie, contraste réduit',
        keywords: 'ruban led indirect bureau ambience 2700k',
        altKeywords: 'applique murale led indirecte bureau 3000k',
        badge: 'Ambiance',
      },
    ],
  },
  {
    slug: 'bureau-enfant',
    title: 'Bureau enfant : découpe en zones (écriture/lecture, repos, général, anti-éblouissement)',
    description:
      'Découpe le bureau enfant en zones (écriture/lecture, repos, éclairage général) pour limiter la fatigue visuelle. Objectif : une lumière confortable, une teinte adaptée et un rendu fidèle (IRC) sans éblouissement.',
    hero: {
      eyebrow: 'Pièce par pièce',
      image: '/illustrations/bureau-enfant.svg',
      imageAlt: 'Illustration bureau enfant et éclairage',
    },
    sections: [
      {
        title: 'Découpage en zones',
        points: [
          'Zone “écriture/lecture” : lumière ciblée et stable pour éviter la fatigue et les ombres.',
          'Zone “repos” : ambiance plus douce pour les pauses (souvent un peu plus chaud).',
          'Zone “général” : un plafonnier ou des points répartis pour que le bureau ne soit pas en “tunnel sombre”.',
          'Anti-éblouissement : évite les reflets directifs et privilégie un éclairage orienté vers la table/mur, pas vers les yeux.',
        ],
      },
      {
        title: 'Teinte, IRC et quantité',
        points: [
          'Teinte : pour le travail, vise une base <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/kelvin-temperature-couleur">neutre</a> (souvent 3500–5000K) et <strong>adoucit</strong> le soir.',
          'IRC : vise un <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/irc-indice-rendu-couleur">IRC élevé</a> (>= 90) pour un rendu naturel des cahiers, livres, couleurs.',
          'Quantité : ajuste les <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/lumens-vs-watts">lumens</a> selon la surface, pas au hasard.',
          'Confort : passe au <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/ampoules-dimmables-variateur">dimmable</a> si tu veux moduler selon l’heure et la fatigue.',
        ],
      },
      {
        title: 'Erreurs fréquentes',
        points: [
          'Trop chaud partout : les couleurs “s’éteignent” et la concentration baisse.',
          'Un seul point lumineux : ombres sur le cahier + fatigue visuelle.',
          'Oublier la cohérence : bureau clair + fond sombre = contrastes agressifs.',
        ],
      },
    ],
    products: [
      {
        title: 'Lampe LED de lecture orientable (enfant)',
        subtitle: 'Ciblage sans éblouir',
        keywords: 'lampe lecture led orientable enfant 4000k',
        altKeywords: 'lampadaire enfant led dimmable 2700k',
        badge: 'Écriture/lecture',
      },
      {
        title: 'Plafonnier LED anti-éblouissement (bureau)',
        subtitle: 'Répartition homogène',
        keywords: 'plafonnier led bureau anti eblouissement 4000k',
        altKeywords: 'panel led plafond bureau 4000k irc 90',
        badge: 'Général',
      },
      {
        title: 'Ampoules dimmables (ambiance + pauses)',
        subtitle: 'Moduler selon l’heure',
        keywords: 'ampoule led dimmable e27 variateur 2700k 3000k',
        altKeywords: 'led dimmable e27 3000k variateur compatible irc 90',
        badge: 'Repos',
      },
      {
        title: 'Ruban LED indirect (pause & détente)',
        subtitle: 'Ambiance douce',
        keywords: 'ruban led indirect enfant 2700k',
        altKeywords: 'applique murale led indirecte chambre enfant 3000k',
        badge: 'Ambiance',
      },
    ],
  },
  {
    slug: 'cave-a-vin',
    title: 'Cave à vin : découpe en zones (rayonnages, entrée/chemin, mise en valeur, sécurité)',
    description:
      'Découpe ta cave à vin en zones (rayonnages, entrée/cheminement, mise en valeur). Objectif : une lumière qui rend les bouteilles belles, sans surchauffer, avec des couleurs fidèles (IRC) et un bon confort d’usage (capteur si besoin).',
    hero: {
      eyebrow: 'Pièce par pièce',
      image: '/illustrations/cave-a-vin.svg',
      imageAlt: 'Illustration cave à vin et éclairage',
    },
    sections: [
      {
        title: 'Découpage en zones',
        points: [
          'Rayonnages : vise une lumière homogène, sans reflets agressifs sur les étiquettes.',
          'Entrée/chemin : ajoute un éclairage d’accueil pour éviter de “chercher” une allumette.',
          'Zone mise en valeur : une source plus “directionnelle” pour faire ressortir les bouteilles (sans éblouir).',
          'Sécurité : un éclairage bas niveau peut suffire pour circuler sans allumer toute la cave.',
        ],
      },
      {
        title: 'Kelvin, IRC et confort',
        points: [
          'Teinte : souvent 2700–3000K pour une ambiance “cave” chaleureuse, surtout en éclairage ponctuel.',
          'IRC : cherche un <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/irc-indice-rendu-couleur">IRC élevé</a> pour un rendu fidèle des étiquettes et du bois.',
          'Dimmable/capteur : si tu veux limiter l’éclairage, le <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/ampoules-dimmables-variateur">dimmable</a> ou un <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/detecteurs-de-mouvement">détecteur</a> change tout au quotidien.',
          'Quantité : ajuste les <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/lumens-vs-watts">lumens</a> pour éviter les contrastes trop forts entre les niveaux.',
        ],
      },
      {
        title: 'Erreurs fréquentes',
        points: [
          'Un éclairage “agressif” au plafond : reflets, étiquettes illisibles et ambiance froide.',
          'Choisir une teinte trop bleue/neutre : rendu moins “cave”.',
          'Oublier l’anti-éblouissement : si tu bouges dans la cave, le reflet fatigue vite.',
        ],
      },
    ],
    products: [
      {
        title: 'Ruban LED (cave à vin) faible chaleur',
        subtitle: 'Rayonnages bien éclairés',
        keywords: 'ruban led interieur cave a vin 2700k',
        altKeywords: 'ruban led 12v 24v cave a vin irc 90',
        badge: 'Rayonnages',
      },
      {
        title: 'Spot encastré orientable (mise en valeur)',
        subtitle: 'Bouteilles “highlight” sans éblouir',
        keywords: 'spot encastrable led orientable cave a vin 3000k irc 90',
        altKeywords: 'projecteur led encastrable orientable 2700k irc 90',
        badge: 'Mise en valeur',
      },
      {
        title: 'Capteur d’ouverture (porte de cave)',
        subtitle: 'Lumière quand tu ouvres',
        keywords: 'capteur ouverture porte detecteur cave',
        altKeywords: 'detecteur mouvement interieur cave a vin',
        badge: 'Entrée',
      },
      {
        title: 'Ampoules LED dimmables (ambiance cave)',
        subtitle: 'Moduler l’éclairage selon l’usage',
        keywords: 'ampoule led dimmable e27 variateur 2700k',
        altKeywords: 'ampoule led dimmable e27 3000k irc 90',
        badge: 'Confort',
      },
    ],
  },
  {
    slug: 'chambre-adulte',
    title: 'Chambre adulte : découpe en zones (lecture, lit/ambiance, circulation, rangement)',
    description:
      'Découpe la chambre adulte en zones (lit/lecture, circulation, rangement/armoire, ambiance). Une bonne lumière doit être confortable la journée et relaxante le soir : Kelvin adapté, IRC correct et dimmable si possible.',
    hero: {
      eyebrow: 'Pièce par pièce',
      image: '/illustrations/chambre-adulte.svg',
      imageAlt: 'Illustration chambre adulte et éclairage',
    },
    sections: [
      {
        title: 'Découpage en zones',
        points: [
          'Zone “lecture” : privilégie des lampes orientables (appliques/bras) avec faisceau maîtrisé.',
          'Zone “lit” (ambiance) : lumière douce, indirecte ou faible, idéale pour s’endormir.',
          'Zone “circulation” : évite les zones trop sombres entre lit, porte et rangements.',
          'Zone “rangement” : éclaire les armoires/étagères pour retrouver rapidement sans éclairage aveuglant.',
        ],
      },
      {
        title: 'Réglages : Kelvin, IRC et dimmable',
        points: [
          'Teinte : vise souvent 2700–3000K (ambiance repos) et réserve le plus neutre à la lecture si besoin.',
          'IRC : cherche un <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/irc-indice-rendu-couleur">IRC élevé</a> pour un rendu agréable des matières (tissus, murs).',
          'Dimmable : le <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/ampoules-dimmables-variateur">dimmable & variateur</a> permet une transition douce le soir.',
          'Quantité : adapte les <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/lumens-vs-watts">lumens</a> à la taille de la chambre et au niveau de lecture.',
        ],
      },
      {
        title: 'Erreurs fréquentes',
        points: [
          'Plafonnier unique : trop dur au lit, mauvaise ambiance et lectures inconfortables.',
          'Lumière trop froide la nuit : sensation “éclairage bureau”.',
          'Ignorer le confort visuel : si tu lis, il te faut une source orientable.',
        ],
      },
    ],
    products: [
      {
        title: 'Appliques LED pour lecture (lit)',
        subtitle: 'Faisceau dirigé, confort yeux',
        keywords: 'applique led lecture chambre adulte 3000k',
        altKeywords: 'lampe murale lecture orientable 2700k dimmable',
        badge: 'Lecture',
      },
      {
        title: 'Ampoules dimmables (ambiance chambre)',
        subtitle: 'Soir = plus cosy',
        keywords: 'ampoule led dimmable e27 variateur 2700k',
        altKeywords: 'ampoule led dimmable e27 3000k irc 90',
        badge: 'Ambiance',
      },
      {
        title: 'Plafonnier LED dimmable (général)',
        subtitle: 'Circulation sans trous',
        keywords: 'plafonnier led dimmable variateur chambre 3000k',
        altKeywords: 'panel led plafond dimmable 2700k irc 90',
        badge: 'Circulation',
      },
      {
        title: 'Ruban LED pour armoire/éclairage indirect',
        subtitle: 'Rangement lisible',
        keywords: 'ruban led indirect armoire chambre 2700k',
        altKeywords: 'spot led armoire chambre 3000k',
        badge: 'Rangement',
      },
    ],
  },
  {
    slug: 'chambre-enfant',
    title: 'Chambre enfant : découpe en zones (travail, jeux, nuit/veille, circulation)',
    description:
      'Découpe la chambre enfant en zones (travail/lecture, jeux, nuit/veille). L’objectif : limiter la fatigue visuelle et garder une ambiance apaisante le soir grâce à une teinte adaptée et du dimmable si possible.',
    hero: {
      eyebrow: 'Pièce par pièce',
      image: '/illustrations/chambre-enfant.svg',
      imageAlt: 'Illustration chambre enfant et éclairage',
    },
    sections: [
      {
        title: 'Découpage en zones',
        points: [
          'Zone “travail” : lumière ciblée et stable pour éviter les ombres sur les cahiers.',
          'Zone “jeux” : éclairage plus doux et réparti pour ne pas transformer la pièce en tunnel sombre.',
          'Zone “nuit/veille” : lumière très tamisée pour rassurer sans couper le sommeil.',
          'Zone “circulation” : un niveau bas évite les chutes et les allumages en panique.',
        ],
      },
      {
        title: 'Teinte, IRC et dimmable',
        points: [
          'Jour : base <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/kelvin-temperature-couleur">neutre</a> (souvent 3500–5000K) selon l’activité.',
          'Couleurs : vise un <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/irc-indice-rendu-couleur">IRC élevé</a> (>= 90) pour un rendu naturel des dessins et des murs.',
          'Soir : ajuste via le <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/ampoules-dimmables-variateur">dimmable</a> pour conserver une ambiance apaisante.',
          'Quantité : calcule avec les <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/lumens-vs-watts">lumens</a> pour éviter un éclairage insuffisant.',
        ],
      },
      {
        title: 'Erreurs fréquentes',
        points: [
          'Trop froid partout : sensation clinique, moins rassurante.',
          'Un seul plafonnier : ombres sur le cahier + fatigue.',
          'Ignorer la transition jour/soir : le dimmable est souvent la solution.',
        ],
      },
    ],
    products: [
      {
        title: 'Lampe LED de bureau (lecture/cahiers)',
        subtitle: 'Faisceau orienté, confortable',
        keywords: 'lampe bureau enfant led orientable 4000k',
        altKeywords: 'lampe led enfant dimmable 3000k',
        badge: 'Travail',
      },
      {
        title: 'Plafonnier LED réparti (anti-éblouissement)',
        subtitle: 'Ambiance homogène',
        keywords: 'plafonnier led chambre enfant 4000k anti eblouissement',
        altKeywords: 'panel led chambre enfant 4000k irc 90',
        badge: 'Jeux',
      },
      {
        title: 'Ampoules dimmables (nuit + douceur)',
        subtitle: 'Moduler le niveau',
        keywords: 'ampoule led dimmable e27 variateur 2700k',
        altKeywords: 'ampoule led dimmable e14 2700k irc 90',
        badge: 'Nuit',
      },
      {
        title: 'Veilleuse LED rechargeable (très tamisée)',
        subtitle: 'Sécurité douce',
        keywords: 'veilleuse led rechargeable 2700k',
        altKeywords: 'lampe veilleuse led dimmable 3000k',
        badge: 'Circulation',
      },
    ],
  },
  {
    slug: 'toilettes',
    title: 'Toilettes : découpe en zones (miroir/vasque, WC, circulation, pratique)',
    description:
      'Découpe les toilettes en zones (miroir/vasque, WC, circulation) pour un résultat propre et confortable. Optimise la teinte (Kelvin), la fidélité des couleurs (IRC) et pense au détecteur de mouvement si tu veux plus de confort.',
    hero: {
      eyebrow: 'Pièce par pièce',
      image: '/illustrations/toilettes.svg',
      imageAlt: 'Illustration toilettes et éclairage',
    },
    sections: [
      {
        title: 'Découpage en zones',
        points: [
          'Miroir/vasque : priorité à une lumière sans ombres sur le visage.',
          'Zone WC : un éclairage confortable, pas agressif, surtout le soir.',
          'Circulation : éclairer le chemin jusqu’à la porte pour éviter les “à tâtons”.',
          'Pratique : le détecteur de mouvement améliore l’usage au quotidien.',
        ],
      },
      {
        title: 'Réglages : Kelvin, IRC, IP',
        points: [
          'Teinte : viser souvent 3000–4000K (naturel sans faire trop froid).',
          'IRC : un <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/irc-indice-rendu-couleur">IRC élevé</a> rend le visage et les matières plus flatteurs.',
          'Sécurité : si les toilettes sont dans une zone humide/bain attenante, regarde l’<a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/ip-indice-protection">IP</a> des luminaires.',
          'Confort : le <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/ampoules-dimmables-variateur">dimmable</a> est un plus pour le soir.',
        ],
      },
      {
        title: 'Erreurs fréquentes',
        points: [
          'Miroir éclairé “de dessus” : ombres sous les yeux.',
          'Plafonnier unique : visage trop dur + zone WC trop sombre ou inversement.',
          'Ignorer l’IP quand la pièce est humide.',
        ],
      },
    ],
    products: [
      {
        title: 'Barre LED pour miroir (toilettes)',
        subtitle: 'Visage net, zéro ombre',
        keywords: 'barre led miroir toilettes ip44 4000k',
        altKeywords: 'reglette led miroir salle de bain toilettes ip44 irc 90',
        badge: 'Miroir',
      },
      {
        title: 'Plafonnier LED (WC) anti-éblouissement',
        subtitle: 'Confort le soir',
        keywords: 'plafonnier led toilettes 3000k',
        altKeywords: 'panel led toilettes dimmable 2700k',
        badge: 'WC',
      },
      {
        title: 'Détecteur de mouvement (toilettes)',
        subtitle: 'Allumage automatique',
        keywords: 'detecteur mouvement interieur plafond toilettes',
        altKeywords: 'detecteur mouvement wc temporisation',
        badge: 'Usage',
      },
      {
        title: 'Ampoules dimmables (ambiance)',
        subtitle: 'Pour moduler le soir',
        keywords: 'ampoule led dimmable e27 variateur 2700k',
        altKeywords: 'ampoule led dimmable e27 3000k irc 90',
        badge: 'Ambiance',
      },
    ],
  },
  {
    slug: 'parking',
    title: 'Parking : découpe en zones (entrée, cheminement, places, technique/détection)',
    description:
      'Découpe le parking en zones (entrée, cheminement, places, circulation) : l’objectif est de réduire les zones sombres, améliorer la sécurité et garder une lumière homogène. Optimise l’<a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/ip-indice-protection">IP</a>, la teinte (Kelvin) et, si possible, la gestion (détecteur/dimmable).',
    hero: {
      eyebrow: 'Pièce par pièce',
      image: '/illustrations/parking.svg',
      imageAlt: 'Illustration parking et éclairage',
    },
    sections: [
      {
        title: 'Découpage en zones',
        points: [
          'Entrée : donne un repère visuel immédiat (accueil + sécurité).',
          'Cheminement/circulation : vise une lumière régulière pour éviter les “trous”.',
          'Places : éclairer sans éblouir les conducteurs et les passants.',
          'Zone technique : si tu as un local/portail, pense à la détection.',
        ],
      },
      {
        title: 'Réglages recommandés',
        points: [
          'Teinte : souvent 4000K pour la visibilité (neutre et efficace).',
          'Protection : vérifie l’<a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/ip-indice-protection">IP</a> et l’usage extérieur avant d’installer.',
          'Sécurité : combine puissance + répartition, avec parfois des <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/detecteurs-de-mouvement">détecteurs de mouvement</a> pour limiter l’allumage.',
          'Qualité : si les couleurs comptent (mur/sol particulier), vise un <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/irc-indice-rendu-couleur">IRC</a> correct.',
        ],
      },
      {
        title: 'Erreurs fréquentes',
        points: [
          'Installer trop peu de points : tu obtiens des zones sombres malgré la “puissance”.',
          'Choisir un luminaire sans IP extérieur.',
          'Ajuster trop froid sans répartition : sensation “parking industriel”.',
        ],
      },
    ],
    products: [
      {
        title: 'Projecteur LED extérieur (parking)',
        subtitle: 'Puissance et répartition',
        keywords: 'projecteur led exterieur parking ip65 4000k',
        altKeywords: 'spot exterieur led parking 4000k irc 80 ip65',
        badge: 'Places/circulation',
      },
      {
        title: 'Borne LED extérieure (cheminement)',
        subtitle: 'Sécurité au sol',
        keywords: 'borne led exterieur allée ip65 3000k',
        altKeywords: 'spot sol led exterieur ip67 4000k',
        badge: 'Cheminement',
      },
      {
        title: 'Détecteur de mouvement extérieur (option)',
        subtitle: 'Allumage intelligent',
        keywords: 'detecteur mouvement exterieur ip65',
        altKeywords: 'capteur presence exterieur projecteur',
        badge: 'Gestion',
      },
      {
        title: 'Ampoules/LED dimmables (selon installation)',
        subtitle: 'Moduler l’intensité',
        keywords: 'ampoule led dimmable variateur exterieur 2700k',
        altKeywords: 'spot led dimmable exterieur 3000k ip65',
        badge: 'Confort',
      },
    ],
  },
  {
    slug: 'cave-voutee',
    title: 'Cave voutée : découpe en zones (voûte rebondie, rayonnages, circulation, accents)',
    description:
      'Une cave voutée se traite en “lumière rebondie” et en zones : étagères, couloir de circulation et points de mise en valeur. Optimise Kelvin et IRC, et évite les ombres en plaçant des sources orientables et indirectes.',
    hero: {
      eyebrow: 'Pièce par pièce',
      image: '/illustrations/cave-voutee.svg',
      imageAlt: 'Illustration cave voutée et éclairage',
    },
    sections: [
      {
        title: 'Découpage en zones',
        points: [
          'Voûte : fais “rebondir” la lumière pour uniformiser le volume (éviter les contrastes brutaux).',
          'Rayonnages : éclaire les niveaux avec plusieurs sources pour ne pas créer de zones sombres entre les étagères.',
          'Circulation : ajoute un balisage doux pour se repérer sans éblouissement.',
          'Accents : un éclairage directionnel met en valeur une zone (mur, meuble, dégustation).',
        ],
      },
      {
        title: 'Réglages',
        points: [
          'Teinte : souvent 2700–3000K si tu veux une ambiance “cave”.',
          'IRC : vise un <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/irc-indice-rendu-couleur">IRC élevé</a> pour le rendu des matières (bois, pierre, vin).',
          'Répartition : augmente les points plutôt qu’une seule source très puissante.',
          'Confort : si tu passes souvent, le <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/detecteurs-de-mouvement">détecteur</a> ou un mode dimmable réduit la gêne.',
        ],
      },
      {
        title: 'Erreurs fréquentes',
        points: [
          'Une lampe unique au plafond : la voûte “mange” la lumière et tu gardes des ombres.',
          'Éclairage trop froid : rendu moins chaleureux et moins confortable.',
          'Oublier la sécurité au sol : circulation difficile la nuit ou en cas de faible lumière extérieure.',
        ],
      },
    ],
    products: [
      {
        title: 'Projecteur LED orientable (cave voutée)',
        subtitle: 'Guidage et accents',
        keywords: 'projecteur led orientable cave voutee 3000k ip44',
        altKeywords: 'spot encastrable orientable cave voutee irc 90 2700k',
        badge: 'Accents',
      },
      {
        title: 'Ruban LED (éclairage des niveaux)',
        subtitle: 'Plus d’homogénéité sur les étagères',
        keywords: 'ruban led cave voutee interieur 3000k',
        altKeywords: 'ruban led irc 90 cave voutee 2700k',
        badge: 'Rayonnages',
      },
      {
        title: 'Balisage LED doux (circulation)',
        subtitle: 'Repères, sans éblouir',
        keywords: 'bandeau led circulation cave ip20 2700k',
        altKeywords: 'spot sol led doux cave 2700k dimmable',
        badge: 'Circulation',
      },
      {
        title: 'Ampoules dimmables (selon luminaires)',
        subtitle: 'Ambiance modulée',
        keywords: 'ampoule led dimmable e27 variateur 2700k',
        altKeywords: 'ampoule led dimmable e27 3000k irc 90',
        badge: 'Confort',
      },
    ],
  },
  {
    slug: 'couloir-long-etroit',
    title: 'Couloir long et étroit : découpe en zones (entrée, tronçons, angle/coude, sol/sécurité)',
    description:
      'Découpe le couloir long et étroit en zones (entrée, tronçons, angles éventuels, sol) : l’objectif est d’obtenir une lumière homogène sur tout le trajet. Kelvin adapté, IRC correct et répartition des points pour supprimer les ombres.',
    hero: {
      eyebrow: 'Pièce par pièce',
      image: '/illustrations/couloir-long-etroit.svg',
      imageAlt: 'Illustration couloir long et étroit et éclairage',
    },
    sections: [
      {
        title: 'Découpage en zones',
        points: [
          'Entrée : accueil + repère pour “entrer” dans le couloir en douceur.',
          'Tronçon central : répartition régulière pour éviter les taches sombres.',
          'Angle/coude (si présent) : lumière indirecte sur les murs pour casser l’ombre.',
          'Sol : un balisage discret améliore la sécurité, surtout la nuit.',
        ],
      },
      {
        title: 'Réglages recommandés',
        points: [
          'Teinte : souvent 3000–4000K (plus clair que du chaud pur, sans être agressif).',
          'IRC : un <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/irc-indice-rendu-couleur">IRC élevé</a> rend portes/peinture plus naturelles.',
          'Méthode : commence par les <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/lumens-vs-watts">lumens</a>, puis ajuste avec la répartition des sources.',
          'Confort : le <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/ampoules-dimmables-variateur">dimmable</a> aide à moduler le soir.',
        ],
      },
      {
        title: 'Erreurs fréquentes',
        points: [
          'Trop d’écart entre les points : effet “spot par spot” au lieu d’un couloir homogène.',
          'Lumière trop directionnelle vers le couloir : tu “brûles” le milieu et les côtés restent sombres.',
          'Ignorer le sol : en cas de mouvement nocturne, les accidents arrivent vite.',
        ],
      },
    ],
    products: [
      {
        title: 'Ruban LED indirect (bande murale)',
        subtitle: 'Anti-ombre sur toute la longueur',
        keywords: 'ruban led indirect couloir long 3000k irc 90',
        altKeywords: 'bandeau led indirect couloir etroit dimmable 2700k',
        badge: 'Anti-ombre',
      },
      {
        title: 'Plafonniers/spots répartis (couloir étroit)',
        subtitle: 'Homogénéité',
        keywords: 'spots encastrés couloir etroit 4000k irc 90',
        altKeywords: 'barre led couloir 4000k irc 90',
        badge: 'Tronçons',
      },
      {
        title: 'Balisage sol LED (sécurité)',
        subtitle: 'Chemin discret',
        keywords: 'bandeau led sol couloir 3000k irc 90',
        altKeywords: 'balise led sol couloir 2700k dimmable',
        badge: 'Sol',
      },
      {
        title: 'Ampoules dimmables (ambiance couloir)',
        subtitle: 'Moduler le soir',
        keywords: 'ampoule led dimmable e27 variateur 2700k',
        altKeywords: 'ampoule led dimmable gu10 couloir 3000k irc 90',
        badge: 'Confort',
      },
    ],
  },
  {
    slug: 'cave-sans-electricite',
    title: 'Cave sans électricité : découpe en zones (accès, rangement, circulation, stockage autonome)',
    description:
      'Sans prise électrique, tu dois raisonner “autonomie” : recharge, capteur, et diffusion. Découpe en zones (accès, rangement, sécurité) pour choisir le bon type de lampe et créer une lumière pratique et rassurante.',
    hero: {
      eyebrow: 'Pièce par pièce',
      image: '/illustrations/cave-sans-electricite.svg',
      imageAlt: 'Illustration cave sans électricité et éclairage autonome',
    },
    sections: [
      {
        title: 'Découpage en zones',
        points: [
          'Accès (porte/escaliers) : priorité à une lumière immédiate dès que tu ouvres/descends.',
          'Rangement (étagères) : besoin d’un faisceau utile et stable pour retrouver rapidement.',
          'Circulation : un niveau bas aide à circuler sans trébucher.',
          'Stockage “tout prêt” : un système rechargé/déposé à portée de main pour ne jamais être à court.',
        ],
      },
      {
        title: 'Choix du matériel (autonomie)',
        points: [
          'Capteur : un <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/detecteurs-de-mouvement">détecteur de mouvement</a> (ou éclairage à activation) évite de consommer inutilement.',
          'Teinte : vise souvent 2700–4000K selon l’ambiance souhaitée et l’usage (rangement vs lecture).',
          'Confort : si tu veux voir les couleurs (étiquettes), privilégie un <a class="font-semibold text-amber-300 hover:text-amber-200" href="/guides/irc-indice-rendu-couleur">IRC correct</a> quand c’est indiqué.',
          'Praticité : pense au mode rechargeable (USB, batterie) et à l’autonomie annoncée.',
        ],
      },
      {
        title: 'Erreurs fréquentes',
        points: [
          'Prendre trop faible : tu fais des allers-retours au lieu de travailler/choisir.',
          'Ignorer l’ergonomie : lampe trop lourde ou pas orientable = difficulté en cave.',
          'Ne pas prévoir la recharge : une lampe “trop souvent vide” ne sert à rien.',
        ],
      },
    ],
    products: [
      {
        title: 'Lampe rechargeable LED (cave, portative)',
        subtitle: 'Accès immédiat',
        keywords: 'lampe rechargeable led interieur detecteur 3000k',
        altKeywords: 'lampe torche rechargeable led 4000k',
        badge: 'Accès',
      },
      {
        title: 'Projecteur LED sur batterie (rangement)',
        subtitle: 'Faisceau utile pour les étagères',
        keywords: 'projecteur led batterie rechargeable 4000k',
        altKeywords: 'spot led rechargeable detecteur interieur 3000k',
        badge: 'Rangement',
      },
      {
        title: 'Bande LED rechargeable (circulation)',
        subtitle: 'Repères au sol',
        keywords: 'bandeau led rechargeable usb 2700k',
        altKeywords: 'ruban led rechargeable usb dimmable 3000k',
        badge: 'Circulation',
      },
      {
        title: 'Détecteur de mouvement portable (option)',
        subtitle: 'Allumage à la demande',
        keywords: 'detecteur mouvement portable lampe rechargeable',
        altKeywords: 'capteur mouvement lampe batterie',
        badge: 'Gestion',
      },
    ],
  },
];

