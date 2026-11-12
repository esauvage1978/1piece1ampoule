export type Comparatif = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  asins: string[];
  criteria: string[];
  faq: { q: string; a: string }[];
  methode?: string[];
  enBref?: string;
  related: string[]; // slugs de pièces / guides (chemins)
};

export const COMPARATIFS: Comparatif[] = [
  {
    slug: 'meilleure-ampoule-led-e27',
    title: 'Meilleure ampoule LED E27 2026 : comparatif',
    h1: 'Meilleure ampoule LED E27 en 2026',
    description: 'Quelle ampoule LED E27 acheter ? Comparatif 2026 des meilleures ampoules E27 (Philips, filament, connectée) : lumens, Kelvin, IRC, prix par ampoule.',
    intro: 'Le culot E27 équipe la majorité des plafonniers et lampes. Pour bien choisir : regarde les lumens (806 lm ≈ 60 W, 1055 lm ≈ 75 W), la teinte (2700K chaleureux, 4000K neutre) et le prix par ampoule des lots.',
    asins: ['B01KHIM7OG', 'B0DGPZCMG6', 'B09ZBJPNK4', 'B08HV4WG3Y', 'B099NPGWCQ'],
    criteria: ['Flux lumineux (lm) adapté à la pièce', 'Température de couleur (K)', 'IRC ≥ 80 (≥ 90 pour cuisine / salle de bain)', 'Prix par ampoule dans les lots', 'Dimmable ou non'],
    faq: [
      { q: 'Combien de lumens pour remplacer une ampoule 60 W ?', a: 'Environ 806 lumens. Pour 75 W, vise 1055 lm ; pour 100 W, environ 1521 lm.' },
      { q: '2700K ou 4000K ?', a: '2700K pour salon et chambre (ambiance chaleureuse), 4000K pour cuisine, bureau et garage (lumière neutre et précise).' },
      { q: 'Une ampoule E27 non dimmable fonctionne-t-elle sur un variateur ?', a: 'Non : sur un variateur, choisis une ampoule marquée dimmable, sinon elle peut clignoter ou s’abîmer.' },
    ],
    related: ['/guides/lumens-vs-watts/', '/guides/culots-e27-e14-gu10/', '/pieces/salon/', '/pieces/chambre-adulte/'],
  },
  {
    slug: 'meilleur-spot-gu10',
    title: 'Meilleur spot LED GU10 2026 : comparatif des lots',
    h1: 'Meilleure ampoule spot GU10 LED en 2026',
    description: 'Comparatif 2026 des meilleures ampoules GU10 LED : 4000K pour la cuisine, blanc chaud pour le salon, angle de faisceau, lumens et prix par lot.',
    intro: 'Le GU10 est le culot des spots encastrés. Les critères qui comptent : l’angle (36° = ciblé, 120° = large), les lumens (350 à 800 lm) et la teinte selon la pièce.',
    asins: ['B0F62SG8Z9', 'B0BNDC7BPV', 'B07665H9B7', 'B0919GN6FK'],
    criteria: ['Angle de faisceau', 'Lumens par spot', 'Teinte 2700K / 4000K', 'Classe énergétique', 'Prix par ampoule'],
    faq: [
      { q: 'Combien de spots GU10 par m² ?', a: 'En général 1 spot de 400–500 lm pour 1,5 à 2 m² en éclairage principal ; moins si les spots sont en appoint.' },
      { q: 'Quel angle choisir ?', a: '36–40° pour éclairer un plan de travail ou un tableau, 100–120° pour un éclairage général homogène.' },
    ],
    related: ['/pieces/cuisine/', '/pieces/couloir/', '/guides/culots-e27-e14-gu10/', '/guides/kelvin-temperature-couleur/'],
  },
  {
    slug: 'meilleure-ampoule-connectee',
    title: 'Meilleure ampoule connectée 2026 : Philips Hue & alternatives',
    h1: 'Meilleure ampoule connectée E27 en 2026',
    description: 'Ampoule connectée Alexa / Google / HomeKit : comparatif 2026 Philips Hue White, White Ambiance et couleur. Bluetooth ou pont, quelle version choisir ?',
    intro: 'Une ampoule connectée permet de varier l’intensité et la teinte sans variateur, de programmer un réveil lumineux ou des scénarios. Philips Hue reste la référence pour sa fiabilité et son écosystème ; une ampoule Wi-Fi Tapo L530E convient aussi pour débuter sans pont.',
    asins: ['B0FJ8VXHRX', 'B08GDC99PX', 'B08Z4KCJZY', 'B099NRLRG3', 'B099NPGWCQ'],
    criteria: [
      'Rendement : la White Ambiance 1 100 lm (EPREL 2187086) produit environ 136 lm/W (1 100 lm / 8,1 W, classe D), contre environ 107 lm/W pour la White 806 lm (806 lm / 7,5 W, classe F) et environ 96 lm/W pour la White & Color (1 055 lm / 11 W, classe F).',
      'Teinte : blanc fixe 2 700 K (White), blanc réglable 1 000–20 000 K (White Ambiance) ou couleurs + blanc 2 000–6 500 K (White & Color).',
      'Veille : une ampoule connectée consomme aussi à l’arrêt (0,1 W à 0,5 W selon les fiches ci-dessus), soit 0,9 à 4,4 kWh par an pour une ampoule allumée en permanence sur le réseau.',
      'Pilotage : Bluetooth (jusqu’à 10 ampoules, sans pont) ou Zigbee via le pont Hue pour le pilotage à distance et les automatisations.',
      'IRC : les trois modèles annoncent un IRC de 80 (≥ 80), suffisant pour un séjour, juste pour un plan de travail ou un miroir de maquillage.',
    ],
    methode: [
      'Les valeurs (flux lumineux utile, puissance en marche, température de couleur, IRC, classe énergétique) proviennent des fiches EPREL de la base européenne ou de la fiche d’information produit imposée par le règlement (UE) 2019/2015. Chaque ligne du tableau donne sa source et sa date de consultation (22/10/2026).',
      'Le rendement (lm/W) est calculé par nos soins : flux utile divisé par la puissance en marche. Le coût de veille utilise 8 760 h par an.',
      'Les prix de ces ampoules changent souvent : le bouton Amazon affiche le prix du jour.',
      'Écarté : l’ampoule Wi-Fi Gologi E27 vendue chez 2echoix (EAN 8720828084489), faute de fiche EPREL publique et parce que les données publiées par les revendeurs se contredisent (345 lm pour 5,5 W annoncée en classe D).',
      'Nous n’avons pas encore mesuré ces ampoules nous-mêmes (luxmètre, wattmètre). Ce comparatif repose uniquement sur les données officielles des fabricants.',
    ],
    faq: [
      { q: 'Faut-il un pont Hue ?', a: 'Non pour démarrer (Bluetooth, jusqu’à 10 ampoules dans une pièce). Le pont devient utile pour piloter à distance et créer des automatisations.' },
      { q: 'Une ampoule connectée sur un interrupteur classique ?', a: 'Oui, mais l’interrupteur doit rester allumé : sinon l’ampoule n’est plus alimentée.' },
    ],
    related: ['/pieces/salon/', '/pieces/chambre-adulte/', '/guides/ampoules-dimmables-variateur/'],
  },
  {
    slug: 'meilleure-lampe-detecteur-sans-fil',
    title: 'Meilleure lampe LED sans fil à détecteur 2026 (placard, couloir)',
    h1: 'Meilleure lampe LED rechargeable à détecteur de mouvement',
    description: 'Placard, dressing, couloir, cave sans électricité : comparatif 2026 des réglettes LED rechargeables à détecteur (OUILA, Lumic, libtit).',
    intro: 'Sans travaux ni électricien : une réglette aimantée, rechargeable en USB-C, qui s’allume quand tu ouvres le placard ou passes dans le couloir. Idéal aussi pour une cave sans prise.',
    asins: ['B0F18462GT', 'B0D3VBP11G', 'B0DYVCTSHH', 'B0CRL78J86'],
    criteria: ['Longueur et lumens', 'Autonomie / capacité batterie', 'Fixation aimantée', '3 teintes et variation', 'Détection jour/nuit'],
    faq: [
      { q: 'Quelle autonomie réelle ?', a: 'En mode détection, compte 3 à 6 semaines selon le nombre de passages et la luminosité réglée.' },
      { q: 'Ça marche dans une cave sans électricité ?', a: 'Oui, c’est même l’usage idéal : recharge-la à l’étage, fixe-la par aimant ou adhésif.' },
    ],
    related: ['/zones/placards-dressing/', '/tutoriels/eclairer-cave-sans-electricite/', '/pieces/couloir/', '/guides/detecteurs-de-mouvement/', '/zones/escaliers/'],
  },
  {
    slug: 'meilleur-projecteur-led-exterieur-detecteur',
    title: 'Meilleur projecteur LED extérieur à détecteur 2026',
    h1: 'Meilleur projecteur LED extérieur avec détecteur de mouvement',
    description: 'Entrée, allée, garage, parking : comparatif 2026 des projecteurs LED à détecteur IP65/IP66 (30 W à 60 W), lumens, portée et réglages.',
    intro: 'Un projecteur à détecteur sécurise l’entrée et l’allée tout en consommant peu. Vérifie l’indice IP (≥ IP65), les lumens selon la surface et les réglages (sensibilité, durée, crépusculaire).',
    asins: ['B0FP4ZKX9Z', 'B0F1CV6R3M', 'B0BPX1ZZXJ'],
    criteria: ['IP65 minimum', 'Lumens selon la surface', 'Portée de détection', 'Réglage durée / sensibilité', 'Teinte (3000K plus agréable pour le voisinage)'],
    faq: [
      { q: 'Quelle puissance pour une allée ?', a: '20–30 W (2000–3000 lm) suffisent pour une entrée ou une allée ; 50–60 W pour une cour ou un parking.' },
    ],
    related: ['/zones/entree-allee-exterieure/', '/pieces/parking/', '/pieces/jardin/', '/pieces/garage/', '/guides/ip-indice-protection/'],
  },
  {
    slug: 'meilleure-reglette-led-garage',
    title: 'Meilleure réglette LED garage 2026 : 120 cm étanche IP65',
    h1: 'Meilleure réglette LED pour garage et atelier',
    description: 'Combien de lumens pour un garage ? Comparatif 2026 des réglettes LED 120 cm étanches IP65, 4000K, connectables, pour garage, atelier et cave.',
    intro: 'Pour un garage, compte 100 à 300 lumens par m² (plus pour un atelier). Les réglettes 120 cm IP65 connectables sont la solution la plus simple et la plus lumineuse.',
    asins: ['B0BZ59BD65', 'B07VNNFBHV'],
    criteria: ['Lumens par réglette', 'IP65 (poussière, humidité)', 'Connectable en série', '4000K pour bricoler'],
    faq: [{ q: 'Combien de réglettes pour un garage de 20 m² ?', a: 'Deux réglettes 120 cm d’environ 4000 lm couvrent bien 20 m² ; ajoute une source sur l’établi.' }],
    related: ['/pieces/garage/', '/pieces/cave-voutee/', '/guides/lumens-vs-watts/'],
  },
  {
    slug: 'meilleure-reglette-led-sous-meuble',
    title: 'Meilleure réglette LED sous meuble cuisine 2026',
    h1: 'Meilleure réglette LED sous meuble de cuisine',
    description: 'Éclairer un plan de travail sans ombre : comparatif 2026 des réglettes LED sous meuble (230 V, orientables, 4000K) et alternatives sans fil.',
    intro: 'La réglette sous meuble supprime l’ombre portée sur le plan de travail. Visez environ 4000 K, un bon <strong>IRC (indice de rendu des couleurs)</strong> et une longueur proche de celle du meuble haut.',
    enBref:
      'Pour un plan de travail sans ombre, une réglette 230 V sous le meuble haut (souvent 4000 K, IRC ≥ 80) se branche sur une prise : plus simple qu’un ruban 24 V. Comparez la longueur, l’orientation du faisceau et la possibilité de connecter plusieurs réglettes entre elles.',
    asins: ['B07H7HB6LG', 'B0CGRC4GQ9', 'B01LZEWUT7', 'B0F18462GT'],
    criteria: ['Alimentation 230 V ou batterie', 'Longueur', 'Teinte 4000K', 'Connectable', 'Interrupteur intégré'],
    faq: [
      {
        q: 'Réglette ou ruban LED ?',
        a: 'Pour un plan de travail principal, la réglette 230 V se visse et se branche en quelques minutes. Le ruban COB dans un profilé alu convient si vous voulez une ligne continue sur tout le linéaire et acceptez de dimensionner une alimentation 24 V. En résumé : réglette pour la simplicité, ruban pour l’esthétique et les angles de meuble.',
      },
    ],
    related: ['/zones/plan-de-travail-cuisine/', '/pieces/cuisine/', '/guides/irc-indice-rendu-couleur/'],
  },
  {
    slug: 'meilleur-ruban-led',
    title: 'Meilleur ruban LED 2026 : COB, cuisine, TV, indirect',
    h1: 'Meilleur ruban LED pour la maison (COB, IRC 90+)',
    description: 'Ruban LED COB sans points lumineux, IRC 90+, étanche IP65, profilé alu : comparatif 2026 pour cuisine, TV, corniche et cave.',
    intro: 'Les rubans COB donnent une ligne de lumière continue, sans points visibles. Visez un <strong>IRC (indice de rendu des couleurs)</strong> élevé pour un rendu des couleurs fidèle. Associez-les à un profilé aluminium avec diffuseur pour un rendu uniforme et une meilleure dissipation. Vous ne souhaitez pas souder ni dimensionner une alimentation 24 V sous les meubles ? Notre <a href="/meilleur/meilleure-reglette-led-sous-meuble/">comparatif des réglettes LED sous meuble</a> recense des modèles 230 V prêts à brancher.',
    asins: ['B09TQZVFY7', 'B0B9WSBMH4', 'B08NWLXPMC'],
    criteria: ['COB (sans points) ou SMD', '24 V pour les grandes longueurs', 'IRC ≥ 90', 'IP65 si humidité', 'Profilé + diffuseur'],
    faq: [{ q: 'Faut-il une alimentation ?', a: 'Oui : un bloc 24 V dimensionné (puissance du ruban × longueur + 20 %), non inclus avec ces rubans.' }],
    related: ['/pieces/cuisine/', '/pieces/salon/', '/pieces/cave-voutee/', '/pieces/cave-a-vin/'],
  },
  {
    slug: 'meilleure-lampe-solaire-exterieur',
    title: 'Meilleure lampe solaire extérieure à détecteur 2026',
    h1: 'Meilleure lampe solaire extérieure avec détecteur',
    description: 'Allée, portail, abri de jardin : comparatif 2026 des lampes solaires à détecteur (spots, applique STEINEL), autonomie, IP65, lumens.',
    intro: 'Sans câble ni facture : une lampe solaire à détecteur éclaire l’allée ou le portail uniquement quand c’est utile. Vérifie l’exposition du panneau et la qualité de la batterie.',
    asins: ['B09XMP2CPQ', 'B0B272H45X'],
    criteria: ['Exposition du panneau', 'Batterie (LiFePO4 = plus durable)', 'IP65', 'Lumens et modes'],
    faq: [{ q: 'Ça marche en hiver ?', a: 'Oui avec une bonne exposition, mais l’autonomie baisse : privilégie un modèle à détecteur plutôt qu’allumé en continu.' }],
    related: ['/zones/entree-allee-exterieure/', '/pieces/jardin/', '/pieces/parking/'],
  },
  {
    slug: 'meilleure-guirlande-guinguette',
    title: 'Meilleure guirlande guinguette extérieure 2026',
    h1: 'Meilleure guirlande guinguette pour terrasse et pergola',
    description: 'Guirlande guinguette LED extérieure : comparatif 2026 (10 à 15 m, IP44/IP65, télécommande, basse tension) pour pergola, terrasse et jardin.',
    intro: 'La guinguette crée instantanément une ambiance chaleureuse. Choisis la longueur selon ta pergola, une basse tension pour la sécurité et une télécommande avec minuterie.',
    asins: ['B0972HH7C6', 'B0CZ9B4C2B'],
    criteria: ['Longueur', 'IP44 minimum', 'Basse tension 24 V', 'Dimmable / minuterie'],
    faq: [{ q: 'Peut-on la laisser dehors toute l’année ?', a: 'Les modèles IP65 supportent la pluie ; rentre-la en cas de gel prolongé pour prolonger sa durée de vie.' }],
    related: ['/pieces/jardin/'],
  },
  {
    slug: 'meilleure-applique-miroir-salle-de-bain',
    title: 'Meilleure applique miroir salle de bain LED IP44 (2026)',
    h1: 'Meilleure applique LED pour miroir de salle de bain',
    description: 'Applique miroir LED IP44 : comparatif 2026 pour un éclairage sans ombre (maquillage, rasage), teinte, longueur, installation.',
    intro: 'Au-dessus du miroir, la lumière doit éclairer le visage de face sans ombre. Une applique IP44 de la largeur du miroir, en 3000–4000K, est le meilleur compromis.',
    asins: ['B07B4CPRDQ', 'B0BBLYJCFF'],
    criteria: ['IP44 minimum (zone 2)', 'Largeur proche du miroir', 'Teinte 3000–4000K', 'IRC élevé'],
    faq: [{ q: 'Quel IP en salle de bain ?', a: 'IP44 au-dessus du lavabo (zone 2) ; IP65 au-dessus de la douche ou de la baignoire.' }],
    related: ['/zones/miroir-salle-de-bain/', '/pieces/salle-de-bain/', '/pieces/toilettes/', '/guides/ip-indice-protection/'],
  },
  {
    slug: 'meilleure-lampe-de-bureau-led',
    title: 'Meilleure lampe de bureau LED 2026 (télétravail, devoirs)',
    h1: 'Meilleure lampe de bureau LED et barre d’écran',
    description: 'Lampe de bureau LED dimmable, lampe architecte ou BenQ ScreenBar : comparatif 2026 pour le télétravail et les devoirs, sans reflets ni fatigue.',
    intro: 'Pour travailler confortablement, vise environ 500 lux sur le plan de travail, une teinte réglable (3000–5000K) et pas d’éblouissement. La barre d’écran est idéale pour un bureau étroit.',
    asins: ['B08MFN1S45', 'B09QLY8QFZ', 'B0785D93KD', 'B0DK59YKRS'],
    criteria: ['Éclairement (lux)', 'Teinte réglable', 'Pince ou pied', 'Anti-reflet écran'],
    faq: [{ q: 'Barre d’écran ou lampe classique ?', a: 'La barre éclaire le bureau sans refléter sur l’écran et libère de la place ; la lampe est plus polyvalente (lecture, dessin).' }],
    related: ['/pieces/bureau-adulte/', '/pieces/bureau-enfant/'],
  },
  {
    slug: 'meilleure-veilleuse-enfant',
    title: 'Meilleure veilleuse enfant rechargeable 2026',
    h1: 'Meilleure veilleuse rechargeable pour bébé et enfant',
    description: 'Veilleuse bébé et enfant rechargeable : comparatif 2026 (Annmore, MediAcous) — autonomie, lumière chaude, minuterie, sécurité.',
    intro: 'Une bonne veilleuse émet une lumière très douce et chaude, sans bleu, et se recharge facilement. La minuterie évite qu’elle reste allumée toute la nuit.',
    asins: ['B0B1J4ZP4T', 'B09NS944X2'],
    criteria: ['Lumière chaude, faible intensité', 'Autonomie', 'Minuterie', 'Matériaux sans danger'],
    faq: [{ q: 'Quelle couleur de veilleuse pour bien dormir ?', a: 'Une lumière chaude (orangée/ambrée) et faible perturbe moins le sommeil qu’une lumière blanche ou bleue.' }],
    related: ['/pieces/chambre-enfant/'],
  },
];
