import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { awinLink, AWIN_AFFID } from '../src/content/awin.ts';

const MYLANDS_MID = '131679';
const ml = (path, label) =>
  `<a href="${awinLink(MYLANDS_MID, 'https://mylands.fr' + path)}" rel="sponsored nofollow noopener" target="_blank" data-awin-link data-awin-mid="${MYLANDS_MID}" data-product="Mylands peintures">${label}</a>`;
const affFull = `<p class="en-note">Liens partenaires Awin (Mylands) : une commission peut nous être versée, sans surcoût pour vous. ${ml('/', 'Boutique Mylands')}. <a href="/affiliation-amazon/">Transparence affiliation</a>.</p>`;
const affLight = `<p class="en-note">Liens partenaires Awin : une commission peut nous être versée, sans surcoût pour vous. <a href="/affiliation-amazon/">Transparence affiliation</a>.</p>`;
const pilier = `<p><a href="/peinture/">← Guide peinture complet</a> · <a href="/peinture/peinture-eclairage-couleur-finition/">Peinture et éclairage</a></p>`;
const pilierFor = (slug) => {
  if (slug === 'peinture-eclairage-couleur-finition') {
    return `<p><a href="/peinture/">← Guide peinture complet</a> · <a href="/guides/kelvin-temperature-couleur/">température de couleur (Kelvin)</a> · <a href="/guides/irc-indice-rendu-couleur/">indice de rendu des couleurs (IRC)</a></p>`;
  }
  return pilier;
};
const RETENIR = {
  'peinture-acrylique': `<h2>À retenir</h2><p>Comptez <strong>deux couches</strong> et 8 à 12 m²/L/couche selon le pot. Testez la teinte le soir (2700 K) et le jour. En couloir ou salle de bain, une finition <a href="/peinture/finitions-mat-satin-eggshell/">eggshell</a> (entre mat et satin) se nettoie mieux qu’un mat pur.</p>`,
    'peinture-glycero-alkyde': `<h2>À retenir</h2><p>Glycéro solvant : gants, masque FFP2 si poudres, fenêtres ouvertes 48 h minimum ; nettoyez pinceaux au white-spirit et évacuez les déchets en déchetterie. L’alkyde à l’eau se ponçe entre couches au grain 220. Ne recouvrez pas un glycéro brillant sans ponçage ou sous-couche d’accrochage.</p>`,
  'peinture-a-leau': `<h2>À retenir</h2><p>Diluez et nettoyez vos outils à l’eau claire. Le vinyl ou VAE convient aux pièces sèches peu sollicitées ; l’<a href="/peinture/peinture-acrylique/">acrylique</a> tient mieux au lessivage. En pièce humide, voir <a href="/peinture/peintures-speciales-humides-cuisine-plafond/">peintures spéciales</a>. Aérez jusqu’à disparition de l’odeur (COV = composés organiques volatils).</p>`,
  'peinture-minerale-chaux': `<h2>À retenir</h2><p>La chaux et les peintures minérales respirent et restent très mates : idéal en pièce sèche, pas en <a href="/peinture/salle-de-bain/">salle de bain</a> sans formulation dédiée. Séchage souvent 24–48 h entre couches. Mur foncé ou très mat : augmentez les lumens (<a href="/tutoriels/calculer-eclairage-piece-lux/">calcul lux</a>).</p>`,
  'peintures-speciales-humides-cuisine-plafond': `<h2>À retenir</h2><p>En salle de bain, attendez que les murs soient secs (VMC ou aération 48 h après les dernières douches) avant de peindre. Sous-couche anti-moisissure si taches noires, puis deux couches fines de peinture pièces humides. Plafond : <a href="/peinture/plafond/">peinture plafond mate</a>.</p>`,
  'finitions-mat-satin-eggshell': `<h2>À retenir</h2><p>Mat ou velours : peu de reflets, couleur stable sous LED. Satin ou brillant : révèle les coups de rouleau mais se nettoie mieux. <strong>Eggshell</strong> = compromis lessivable entre mat et satin. Pour juger la teinte, ampoules <a href="/guides/irc-indice-rendu-couleur/">IRC ≥ 90</a>.</p>`,
  'salle-de-bain': `<h2>À retenir</h2><p>Ne peignez pas sur un mur encore humide : VMC ou fenêtre ouverte, attendez le séchage complet. Deux couches de peinture pièces humides valent mieux qu’une couche épaisse. Testez la teinte au miroir sous lumière neutre (~4000 K, <a href="/guides/kelvin-temperature-couleur/">Kelvin</a>).</p>`,
  'cuisine': `<h2>À retenir</h2><p>Dégraissez hotte et crédence avant sous-couche. Choisissez un <strong>satin lessivable</strong> sur les murs et aérez pendant les travaux (COV = composés organiques volatils), même si la cuisine reste partiellement utilisable. Sous les meubles, ~4000 K (kelvins, lumière neutre) aide à voir les éclaboussures.</p>`,
  'chambre': `<h2>À retenir</h2><p>Privilégiez un <a href="/peinture/finitions-mat-satin-eggshell/">mat ou velours</a> pour limiter les reflets des lampes de chevet. Teintes légèrement plus chaudes qu’au jour si vous lisez le soir en 2700 K. Plafond un ton plus clair que les murs agrandit visuellement la pièce.</p>`,
  'salon': `<h2>À retenir</h2><p>Testez l’échantillon le jour et le soir : le salon cumule lumière naturelle et lampes. Mur foncé = plus de lumens (<a href="/tutoriels/calculer-eclairage-piece-lux/">lux</a>). Boiseries en satin : <a href="/peinture/boiseries-portes/">portes et plinthes</a>.</p>`,
  'entree-couloir': `<h2>À retenir</h2><p>Zones de frottement (encadrements, bas de mur) : <strong>satin lessivable</strong>. Teinte claire au plafond pour « allonger » un couloir étroit. Préparez les chocs (<a href="/peinture/preparation-murs-poncage-enduit-sous-couche/">enduit</a>) avant la couleur.</p>`,
  'plafond': `<h2>À retenir</h2><p>Peignez le plafond en premier avant les murs. Rouleau à manche longue, peinture plafond mate anti-éclaboussures. ~10 m²/L/couche ; plafond 12 m² ≈ 2,4 L pour deux couches (<a href="/peinture/preparation-murs-poncage-enduit-sous-couche/#calculateur">calculateur</a>).</p>`,
  'chambre-enfant': `<h2>À retenir</h2><p>Peintures faibles en COV (composés organiques volatils), classe A+ si possible. Faites sécher 48 à 72 h, chambre aérée la nuit, avant de laisser l’enfant dormir. Mat ou velours lessivable — pas de brillant qui renvoie la veilleuse (<a href="/pieces/chambre-enfant/">éclairage chambre enfant</a>).</p>`,
  'boiseries-portes': `<h2>À retenir</h2><p>Masquez poignées et paumelles ou démontez-les. Ponçage léger entre couches sur alkyde. Deux passes satin ; reflets des spots : voir <a href="/peinture/peinture-eclairage-couleur-finition/">peinture et lumière</a>.</p>`,
  'preparation-murs-poncage-enduit-sous-couche': `<h2>À retenir</h2><p>Support propre, mat et sec : ponçage, enduit, sous-couche si besoin. Formule litres = (m² × couches) ÷ rendement ; marge 10 %. Ensuite choisissez <a href="/peinture/peinture-acrylique/">le type de peinture</a> et la <a href="/peinture/finitions-mat-satin-eggshell/">finition</a>.</p>`,
  'mylands': `<h2>À retenir</h2><p>Commandez des échantillons et testez sous vos ampoules (<a href="/peinture/peinture-eclairage-couleur-finition/">Kelvin et IRC</a>). Essai réel ~25 m² salle de bain en Pure White No.1 eggshell — compte rendu après travaux uniquement.</p>`,
  'peinture-eclairage-couleur-finition': `<h2>À retenir</h2><p>Pour choisir une couleur : ampoules <strong>IRC ≥ 90</strong>, test échantillon le soir (2700 K) et le jour. Mur mat = moins de reflets ; satin ou eggshell renvoie les spots GU10 (culot à broches). Murs foncés : augmentez les lumens.</p>`,
};
const enrich = (slug, body) => body + (RETENIR[slug] || '');

/** @type {import('../src/content/peinture.ts').PeinturePage[]} */
const PAGES = [
  {
    slug: 'peinture-acrylique',
    section: 'types',
    short: 'Acrylique',
    title: 'Peinture acrylique : usages, séchage et pièces (2026)',
    description:
      'Peinture acrylique à l’eau pour murs et plafonds : séchage, lessivage, préparation et rendu sous vos ampoules LED.',
    h1: 'Peinture acrylique (à l’eau)',
    lead: 'C’est la peinture la plus vendue pour rafraîchir un logement : elle s’applique facilement, sent peu et se nettoie à l’eau.',
    image: 'wall',
    showMylands: true,
    body: `<h2>En bref</h2><table><thead><tr><th>Critère</th><th>Valeur type</th></tr></thead><tbody><tr><td>Rendement</td><td>8 à 12 m²/L/couche (moyenne 10)</td></tr><tr><td>Entre deux couches</td><td>2 à 4 h</td></tr><tr><td>Pièces</td><td>Séjour, chambre, couloir, plafond sec</td></tr></tbody></table><h2>Bons réflexes</h2><ul><li>Préparer le support (<a href="/peinture/preparation-murs-poncage-enduit-sous-couche/">ponçage, enduit, sous-couche</a>).</li><li>Choisir une finition adaptée (<a href="/peinture/finitions-mat-satin-eggshell/">mat, velours, satin</a>).</li><li>Tester la teinte sous votre éclairage (<a href="/peinture/peinture-eclairage-couleur-finition/">peinture et lumière</a>).</li></ul><p>Échantillons : ${ml('/', 'Mylands sur mylands.fr')}.</p>${affFull}`,
  },
  {
    slug: 'peinture-glycero-alkyde',
    section: 'types',
    short: 'Glycéro / alkyde',
    title: 'Peinture glycéro et alkyde : boiseries et finitions dures',
    description:
      'Glycéro solvant ou alkyde à l’eau : portes, plinthes, brillance, odeur et compatibilité avec l’acrylique murale.',
    h1: 'Peinture glycéro et alkyde',
    lead: 'Utile surtout sur menuiseries lorsque vous voulez une couche dure et un satin marqué.',
    image: 'cans',
    body: `<h2>Comparatif rapide</h2><table><thead><tr><th>Produit</th><th>Support</th><th>Sécurité / odeur</th></tr></thead><tbody><tr><td>Glycéro (solvant)</td><td>Bois déjà au solvant</td><td>Odeur forte, gants et masque, aération 48 h</td></tr><tr><td><a href="/peinture/peinture-a-leau/">Alkyde à l’eau</a></td><td>Portes, plinthes</td><td>Film dur, ponçage inter-couches, COV modérés</td></tr><tr><td>Acrylique murale</td><td>Murs</td><td>Voir <a href="/peinture/peinture-acrylique/">acrylique</a></td></tr></tbody></table><p>Le glycéro est une peinture à base de solvant ; l’alkyde modernise cette résine en version eau (rayons peinture « alkyde acrylique » ou « glycéro à l’eau »). Guide menuiseries : <a href="/peinture/boiseries-portes/">boiseries et portes</a>. Lumière : <a href="/guides/kelvin-temperature-couleur/">Kelvin</a>, <a href="/peinture/peinture-eclairage-couleur-finition/">finition et reflets</a>.</p><p class="en-note"><a href="/affiliation-amazon/">Transparence affiliation</a>.</p>`,
  },
  {
    slug: 'peinture-a-leau',
    section: 'types',
    short: 'À l’eau',
    title: 'Peinture à l’eau : acrylique, vinyl, COV et entretien',
    description:
      'Famille des peintures à l’eau : labels COV, lessivage, pièces adaptées et préparation des murs avant application.',
    h1: 'Peinture à l’eau',
    lead: 'Sur l’étiquette, « à l’eau » signifie dilution et nettoyage à l’eau claire — c’est le standard des rénovations intérieures.',
    image: 'roller',
    body: `<h2>Sous-familles</h2><table><thead><tr><th>Type</th><th>Usage</th><th>Odeur / COV (composés organiques volatils)</th></tr></thead><tbody><tr><td><a href="/peinture/peinture-acrylique/">Acrylique</a></td><td>Murs, plafonds sec</td><td>Faible, nettoyage à l’eau</td></tr><tr><td>Vinyl / VAE (vinyl acétate d’éthylène)</td><td>Pièces sèches, budget</td><td>Modéré</td></tr><tr><td><a href="/peinture/peinture-glycero-alkyde/">Alkyde à l’eau</a></td><td><a href="/peinture/boiseries-portes/">Menuiseries</a></td><td>Intermédiaire</td></tr><tr><td>Pièces humides</td><td>SDB, cuisine vapeur</td><td>Voir <a href="/peinture/peintures-speciales-humides-cuisine-plafond/">peintures spéciales</a></td></tr></tbody></table><h2>Entretien et dilution</h2><p>La peinture à l’eau se dilue avec de l’eau claire (suivre la notice, souvent 5 à 10 % pour un rouleau). Les murs lessivables supportent une éponge humide et un savon doux une fois la peinture bien sèche (7 à 15 jours).</p><p>Préparation : <a href="/peinture/preparation-murs-poncage-enduit-sous-couche/">murs prêts à peindre</a>. Lumière : <a href="/guides/irc-indice-rendu-couleur/">indice de rendu des couleurs (IRC) ≥ 90</a>.</p><p class="en-note"><a href="/affiliation-amazon/">Transparence affiliation</a>.</p>`,
  },
  {
    slug: 'peinture-minerale-chaux',
    section: 'types',
    short: 'Minérale / chaux',
    title: 'Peinture à la chaux et minérale : mat, respirant, usages',
    description:
      'Peinture minérale ou à la chaux : effet mat, murs respirants, pièces sèches et compatibilité avec l’éclairage naturel.',
    h1: 'Peinture minérale et à la chaux',
    lead: 'Finition très mate et minérale, idéale sur enduits traditionnels — peu adaptée aux pièces très humides sans produit dédié.',
    image: 'wall',
    body: `<h2>Où l’utiliser</h2><ul><li>Salon ou <a href="/peinture/chambre/">chambre</a> sèche.</li><li>Murs anciens, enduit chaux ou pierre apparente.</li><li>Éviter en <a href="/peinture/salle-de-bain/">salle de bain</a> sauf formulation spéciale anti-humidité.</li></ul><h2>Lumière et teintes</h2><p>Le mat absorbe la lumière : un mur foncé demande plus de <strong>lumens</strong> (flux lumineux de la lampe) pour le même confort — voir le <a href="/tutoriels/calculer-eclairage-piece-lux/">calcul lux par pièce</a>. Pour des teintes profondes compatibles enduit minéral, testez des échantillons (<a href="/peinture/mylands/">Mylands</a> propose des gammes acryliques premium).</p><h2>Séchage et application</h2><p>Comptez souvent <strong>24 à 48 h</strong> entre deux couches (lire la notice). Deux passes fines valent mieux qu’une couche épaisse.</p><h2>À éviter</h2><ul><li>Peinture à la chaux standard en salle de bain non ventilée.</li><li>Enduit encore humide ou non stabilisé.</li><li>Recouvrir une peinture glycéro brillante sans préparation (<a href="/peinture/preparation-murs-poncage-enduit-sous-couche/">préparer le support</a>).</li></ul><p class="en-note"><a href="/affiliation-amazon/">Transparence affiliation</a>.</p>`,
  },
  {
    slug: 'peintures-speciales-humides-cuisine-plafond',
    section: 'types',
    short: 'Peintures spéciales',
    title: 'Peinture salle de bain, cuisine, plafond et sous-couche',
    description:
      'Peintures spéciales pièces humides, cuisine, plafond et sous-couches : accrochage, moisissures et finitions.',
    h1: 'Peintures spéciales et sous-couche',
    lead: 'Sous-couche, anti-humidité et peintures plafond ne sont pas des options « marketing » : elles évitent les reprises et les taches.',
    image: 'bathroom',
    body: `<h2>Tableau des besoins</h2><table><thead><tr><th>Zone</th><th>Produit</th><th>Guide détaillé</th></tr></thead><tbody><tr><td>Salle de bain</td><td>Peinture pièces humides + sous-couche</td><td><a href="/peinture/salle-de-bain/">Peinture salle de bain — guide complet</a></td></tr><tr><td>Cuisine</td><td>Lessivable, anti-taches</td><td><a href="/peinture/cuisine/">Peinture cuisine — graisse et lessivage</a></td></tr><tr><td>Plafond</td><td>Mate blanche</td><td><a href="/peinture/plafond/">Peindre un plafond au rouleau</a></td></tr><tr><td>Support neuf</td><td>Sous-couche universelle ou accrochage</td><td><a href="/peinture/preparation-murs-poncage-enduit-sous-couche/">Préparer les murs avant peinture</a></td></tr></tbody></table><p>Avant peinture en salle de bain : murs secs, <strong>VMC</strong> (ventilation mécanique contrôlée) efficace, pas de condensation active. Éclairage : <a href="/guides/ip-indice-protection/">indice de protection IP</a> (étanchéité aux projections d’eau) pour luminaires.</p>${affFull}`,
  },
  {
    slug: 'finitions-mat-satin-eggshell',
    section: 'types',
    short: 'Finitions',
    title: 'Finition mate, velours, satin, brillant, eggshell : laquelle choisir ?',
    description:
      'Mat, velours, satin, brillant et eggshell : entretien, reflets sous les ampoules et pièces adaptées.',
    h1: 'Finitions : mat, velours, satin, brillant, eggshell',
    lead: 'La finition change autant le toucher que la façon dont la lumière glisse sur le mur.',
    image: 'roller',
    body: `<h2>Comparatif</h2><table><thead><tr><th>Finition</th><th>Reflets</th><th>Pièces</th></tr></thead><tbody><tr><td>Mat / velours</td><td>Absorbent la lumière</td><td>Salon, chambre, plafond</td></tr><tr><td>Satin</td><td>Légers reflets</td><td>Cuisine, couloir, boiseries</td></tr><tr><td>Brillant</td><td>Reflets marqués</td><td>Portes, lambris</td></tr><tr><td>Eggshell</td><td>Entre mat et satin</td><td>SDB lessivable — ex. Pure White No.1 eggshell (Mylands)</td></tr></tbody></table><p>Sous ampoules LED, un mat cache les défauts ; un satin révèle les coups de rouleau. L’<a href="/guides/irc-indice-rendu-couleur/">indice de rendu des couleurs (IRC)</a> compte autant que la finition. Lire <a href="/peinture/peinture-eclairage-couleur-finition/">peinture et éclairage</a>. Types : <a href="/peinture/peinture-acrylique/">acrylique</a>.</p>${affFull}`,
  },
  {
    slug: 'salle-de-bain',
    section: 'pieces',
    short: 'Salle de bain',
    title: 'Peinture salle de bain : humidité, satin velouté (eggshell), préparation',
    description:
      'Choisir une peinture pour la salle de bain : vapeur, finition lessivable, sous-couche et rendu sous lumière du miroir.',
    h1: 'Peindre une salle de bain',
    lead: 'La vapeur et les projections d’eau imposent une peinture spéciale pièces humides et une préparation anti-moisissure.',
    image: 'bathroom',
    showMylands: false,
    body: `<h2>Check-list</h2><ul><li>Peinture « pièces humides » sur l’étiquette (film plus dense que l’acrylique standard).</li><li>Sous-couche anti-moisissure si traces noires (<a href="/peinture/preparation-murs-poncage-enduit-sous-couche/">préparation des murs</a>).</li><li>Finition <a href="/peinture/finitions-mat-satin-eggshell/">satin velouté lessivable (eggshell)</a> sur zones touchées.</li><li><strong>VMC</strong> (ventilation mécanique contrôlée) ou aération : attendez murs secs avant d’ouvrir le pot.</li></ul><h2>Essai Mylands</h2><p>Repeindre ~25 m² en Pure White No.1 eggshell (produit offert) — le compte rendu sera publié sur la <a href="/peinture/mylands/">page Mylands</a> après les travaux (prévu fin 2026).</p><h2>Éclairage</h2><p>Au miroir, visez ~4000 K, blanc neutre (unité Kelvin : <a href="/guides/kelvin-temperature-couleur/">guide Kelvin</a>) et IRC 90. Voir <a href="/pieces/salle-de-bain/">éclairage salle de bain</a> et <a href="/peinture/peinture-eclairage-couleur-finition/">peinture et lumière</a>.</p><p class="en-note">Liens partenaires Awin (Mylands) : une commission peut nous être versée, sans surcoût pour vous. ${ml('/', 'Boutique Mylands')}. <a href="/affiliation-amazon/">Transparence affiliation</a>.</p>`,
  },
  {
    slug: 'cuisine',
    section: 'pieces',
    short: 'Cuisine',
    title: 'Peinture cuisine : graisse, lessivage et zones chaudes',
    description:
      'Peinture pour cuisine : finition lessivable, zones derrière plaques, préparation et teinte sous éclairage du plan de travail.',
    h1: 'Peindre une cuisine',
    lead: 'Entre graisse et éclaboussures, la cuisine demande une peinture lessivable et un satin facile à essuyer.',
    image: 'cans',
    body: `<h2>Zones</h2><ul><li>Murs : <a href="/peinture/peinture-acrylique/">peinture acrylique</a> en satin lessivable.</li><li>Plafond : <a href="/peinture/plafond/">peinture plafond</a> mate.</li></ul><h2>Dégraissage avant peinture</h2><ul><li>Hotte, crédence et murs près des plaques : dégraissant ou eau savonneuse, rinçage, séchage 24 h minimum.</li><li>Ne peignez pas sur une buée de graisse : la couleur cloque.</li></ul><p>Composés organiques volatils (COV) : aérez pendant l’application. Sous les meubles, ~4000 K (kelvins, lumière neutre — <a href="/guides/kelvin-temperature-couleur/">guide Kelvin</a>) aide à voir les taches. Plan de travail : <a href="/zones/plan-de-travail-cuisine/">éclairage plan de travail</a>. Spéciales : <a href="/peinture/peintures-speciales-humides-cuisine-plafond/">peintures spéciales</a>.</p>${affFull}`,
  },
  {
    slug: 'chambre',
    section: 'pieces',
    short: 'Chambre',
    title: 'Peinture chambre : teintes apaisantes, mat ou velours (2026)',
    description:
      'Couleurs apaisantes pour une chambre : finition mat ou velours, test d’échantillon le soir à 2700 K, sous-couche et deux couches.',
    h1: 'Peindre une chambre',
    lead: 'On y passe des heures à faible lumière : la teinte doit rester agréable le soir sous 2700 K (Kelvin, lumière chaude).',
    image: 'roller',
    body: `<h2>Finition</h2><ul><li><a href="/peinture/finitions-mat-satin-eggshell/">Mat ou velours</a> pour limiter les reflets des lampes de chevet.</li><li>Deux couches fines après <a href="/peinture/preparation-murs-poncage-enduit-sous-couche/">préparation</a> et sous-couche si repassage de couleur.</li></ul><h2>Éclairage et teinte</h2><ul><li>Collez un échantillon d’au moins 50 cm² et observez deux soirs à 2700 K (<a href="/peinture/peinture-eclairage-couleur-finition/">peinture et lumière</a>).</li><li>Éclairage dimmable : <a href="/guides/ampoules-dimmables-variateur/">ampoules dimmables</a>.</li></ul><h2>Teintes</h2><p>Beiges, gris chauds ou verts sauge fonctionnent bien en 2700 K. Plafond un ton plus clair que les murs agrandit visuellement la pièce. Repères ampoules : <a href="/pieces/chambre-adulte/">chambre adulte</a>. Enfant : <a href="/peinture/chambre-enfant/">chambre d’enfant</a>.</p>${affFull}`,
  },
  {
    slug: 'salon',
    section: 'pieces',
    short: 'Salon',
    title: 'Peinture salon : couleur, mat et lumière du séjour',
    description:
      'Repeindre un salon : choix de teinte, finition mat ou velours, murs foncés et coefficient de lumière K.',
    h1: 'Peindre un salon',
    lead: 'Le salon mélange lumière du jour et lampes le soir : la peinture doit fonctionner dans les deux cas.',
    image: 'wall',
    body: `<h2>Teinte et luminosité</h2><p>Un mur foncé absorbe la lumière : il faut plus de lumens pour le même confort. Le <strong>lux</strong> mesure l’éclairement reçu sur le mur ; les <strong>lumens</strong> décrivent le flux sortant de l’ampoule — voir le <a href="/tutoriels/calculer-eclairage-piece-lux/">calcul lux par pièce</a>. L’<strong>indice de rendu des couleurs (IRC)</strong> : <a href="/guides/irc-indice-rendu-couleur/">guide IRC</a>.</p><ul><li>Pièce au nord : teintes légèrement plus chaudes ; au sud : tester le blanc pur qui peut jaunir le soir.</li><li>Murs : velours ou mat (<a href="/peinture/finitions-mat-satin-eggshell/">finitions</a>).</li><li>Boiseries : <a href="/peinture/boiseries-portes/">portes et plinthes</a>.</li><li>Ampoules : <a href="/pieces/salon/">éclairage salon</a> — testez l’échantillon un soir sous vos lampadaires.</li></ul>${affFull}`,
  },
  {
    slug: 'entree-couloir',
    section: 'pieces',
    short: 'Entrée / couloir',
    title: 'Peinture entrée et couloir : lessivable, encadrements, couloir sombre',
    description:
      'Peinture lessivable pour entrée et couloir : satin sur zones touchées, encadrements, plafond mat clair et éclairage d’accueil.',
    h1: 'Peindre une entrée ou un couloir',
    lead: 'Passage obligé : on choisit une peinture lessivable en satin et des teintes qui supportent un éclairage parfois faible.',
    image: 'roller',
    body: `<h2>Étapes</h2><ol><li>Reboucher chocs (<a href="/peinture/preparation-murs-poncage-enduit-sous-couche/">enduit</a>) et sous-couche si support neuf.</li><li>Deux couches <a href="/peinture/peinture-acrylique/">acrylique</a> satin sur encadrements et bas de mur.</li><li>Plafond en <strong>mat clair</strong> pour éviter les reflets dans un couloir étroit.</li></ol><h2>Pratique</h2><ul><li>Le satin se nettoie mieux que le mat sur les zones de frottement (mains, sacs).</li><li>Couloir sans fenêtre : prévoyez assez de lumens (<a href="/tutoriels/calculer-eclairage-piece-lux/">calcul lux</a>).</li><li>Portes colorées : <strong>IRC (indice de rendu des couleurs) ≥ 90</strong> — <a href="/guides/irc-indice-rendu-couleur/">guide IRC</a>.</li><li>Éclairage d’accueil : <a href="/pieces/couloir/">couloir</a>.</li></ul><p>Finitions : <a href="/peinture/finitions-mat-satin-eggshell/">mat ou satin</a>.</p>${affFull}`,
  },
  {
    slug: 'plafond',
    section: 'pieces',
    short: 'Plafond',
    title: 'Peinture plafond : blanc mat, rouleau et éclaboussures',
    description:
      'Peindre un plafond : peinture mate anti-éclaboussures, découpe au pinceau, deux couches, préparation et éclairage uniforme sous spots.',
    h1: 'Peindre un plafond',
    lead: 'Le plafond se voit surtout par la lumière qu’il renvoie : le blanc mat reste la valeur sûre.',
    image: 'wall',
    body: `<h2>Produit et technique</h2><p>Utilisez une peinture « plafond » mate, souvent formulée anti-éclaboussures. Comptez deux couches fines sur un <a href="/peinture/preparation-murs-poncage-enduit-sous-couche/">support préparé</a>.</p><h2>Rouleau et anti-éclaboussures</h2><ul><li>Rouleau à manche longue et bâche au sol.</li><li>Découpe au pinceau le long des murs avant le rouleau.</li><li>Repassez autour des spots <a href="/meilleur/meilleur-spot-gu10/">GU10</a> (culot à broches, souvent encastrés) après séchage.</li><li>Respectez le séchage entre couches (souvent 4 h).</li><li>Exemple : plafond 12 m² ≈ 2,4 L pour deux couches à 10 m²/L (<a href="/peinture/preparation-murs-poncage-enduit-sous-couche/#calculateur">calculateur de litres</a>).</li></ul><h2>Sécurité</h2><p>Échelle stable, lunettes, pauses pour la nuque ; aérez même en peinture à l’eau.</p><p>Reflets : <a href="/peinture/peinture-eclairage-couleur-finition/">finitions et lumière</a>. Pour une cuisine ou SDB, une peinture plafond mate blanche standard suffit souvent ; voir aussi <a href="/peinture/peintures-speciales-humides-cuisine-plafond/">peintures spéciales pièces humides</a>.</p><p class="en-note"><a href="/affiliation-amazon/">Transparence affiliation</a>.</p>`,
  },
  {
    slug: 'chambre-enfant',
    section: 'pieces',
    short: 'Chambre d’enfant',
    title: 'Peinture chambre d’enfant : COV, couleurs et entretien',
    description:
      'Peinture chambre enfant : faibles émissions, finition lessivable, couleurs stables sous lumière douce du soir.',
    h1: 'Peindre une chambre d’enfant',
    lead: 'Privilégiez des peintures à faibles émissions (COV = composés organiques volatils), aérez pendant l’application et choisissez une finition lessivable.',
    image: 'roller',
    body: `<h2>Sécurité en chambre d’enfant</h2><ul><li>Labels émissions intérieures (classe A+ ou équivalent, faibles COV).</li><li>Mat ou velours lessivable (<a href="/peinture/finitions-mat-satin-eggshell/">finitions</a>).</li><li>Peignez quand l’enfant dort ailleurs plusieurs nuits ; fenêtres ouvertes jusqu’à disparition de l’odeur.</li><li>Pendant les travaux : pièce fermée, pas d’accès enfant, chiffons et pots hors de portée.</li></ul><h2>Couleur et lumière</h2><p>Évitez le brillant qui renvoie la veilleuse. Température de couleur (<a href="/guides/kelvin-temperature-couleur/">Kelvin</a>, ex. 2700 K le soir) : voir <a href="/pieces/chambre-enfant/">éclairage chambre enfant</a>.</p><p>Adultes : <a href="/peinture/chambre/">guide chambre</a>. Préparation : <a href="/peinture/preparation-murs-poncage-enduit-sous-couche/">murs lisses</a>.</p>${affFull}`,
  },
  {
    slug: 'boiseries-portes',
    section: 'pieces',
    short: 'Boiseries / portes',
    title: 'Peindre portes et boiseries : alkyde, acrylique bois, satin',
    description:
      'Peinture alkyde à l’eau ou acrylique spéciale bois pour portes et plinthes : ponçage grain 120–180, sous-couche, deux couches satin, séchage et reflets sous la lumière.',
    h1: 'Peindre boiseries et portes',
    lead: 'Les menuiseries demandent un ponçage léger, une sous-couche adaptée et une finition plus dure qu’au mur.',
    image: 'cans',
    body: `<h2>Alkyde et acrylique bois</h2><p>L’<strong>alkyde</strong> (souvent à l’eau aujourd’hui) forme un film dur sur menuiseries ; l’<strong>acrylique spéciale bois</strong> convient aussi en satin lessivable. Le glycéro solvant existe encore pour rénover d’anciennes portes déjà peintes au solvant : aérez longtemps.</p><h2>Étapes</h2><ol><li>Dégraisser et poncer au grain 120–180 (<a href="/peinture/preparation-murs-poncage-enduit-sous-couche/">préparation des supports</a>).</li><li>Sous-couche bois ou accrochage sur chants et moulures.</li><li>Deux couches satin — laisser sécher entre les passes (voir notice, souvent 4 à 6 h).</li></ol><p>Reflets des spots : <a href="/peinture/finitions-mat-satin-eggshell/">finitions mat et satin</a> et <a href="/peinture/peinture-eclairage-couleur-finition/">peinture sous vos ampoules</a>. Murs : <a href="/peinture/peinture-acrylique/">peinture acrylique murale</a>.</p>${affFull}`,
  },
  {
    slug: 'preparation-murs-poncage-enduit-sous-couche',
    section: 'preparation',
    short: 'Préparation des murs',
    title: 'Préparer un mur : ponçage, enduit, sous-couche, calculateur',
    description:
      'Ponçage, rebouchage, traces de colle wallpaper, sous-couche : étapes avant peinture et calculateur de litres.',
    h1: 'Préparer les murs avant de peindre',
    lead: 'Une peinture premium ne rattrape pas un mur mal préparé : le ponçage, l’enduit et la sous-couche font 80 % du résultat.',
    image: 'wall',
    hasCalculator: true,
    faq: [
      {
        q: 'Combien de m² avec 1 litre de peinture ?',
        a: 'En moyenne 10 m² par litre et par couche sur mur lisse ; 8 m²/L si surface poreuse ou couleur foncée. Prévoyez deux couches.',
      },
      {
        q: 'Faut-il toujours une sous-couche ?',
        a: 'Oui sur plâtre neuf, repassage de couleur foncée vers clair, ou support douteux. Sur ancienne peinture saine et claire, une sous-couche d’accrochage peut suffire.',
      },
      {
        q: 'Comment enlever les traces de colle de papier peint ?',
        a: 'Gratter le surplus, poncer, puis lessiver. Si la colle brille encore, sous-couche d’accrochage ou enduit local avant la peinture.',
      },
    ],
    body: `<h2>Ponçage</h2><p>Poncez léger au papier de verre grain moyen (120–180) pour matifier l’ancienne peinture brillante et éliminer les grains d’enduit.</p><h2>Enduit et fissures</h2><p>Rebouchage à l’enduit acrylique, ponçage après séchage complet.</p><h2>Traces de colle</h2><p>Après dépose de papier peint, enlever les résidus puis <strong>sous-couche d’accrochage</strong> si le mur est irrégulier au toucher.</p><h2>Sous-couche</h2><ul><li>Plâtre neuf : sous-couche spécifique.</li><li>Pièce humide : sous-couche anti-moisissure (<a href="/peinture/salle-de-bain/">salle de bain</a>).</li></ul><h2>Rendement</h2><p><strong>litres = (surface m² × couches) ÷ rendement m²/L</strong>. Moyenne : 10 m²/L/couche. Utilisez le calculateur ci-dessous.</p><p>Ensuite : <a href="/peinture/peinture-acrylique/">type de peinture</a>, <a href="/peinture/finitions-mat-satin-eggshell/">finition</a>, <a href="/peinture/peinture-eclairage-couleur-finition/">lumière</a>.</p>${affFull}`,
  },
  {
    slug: 'mylands',
    section: 'marque',
    short: 'Mylands',
    title: 'Mylands : peintures londoniennes, gammes et essai salle de bain',
    description:
      'Mylands sur mylands.fr : histoire, Couleurs de Londres, finitions, pour qui, comment commander — essai 25 m² à venir.',
    h1: 'Mylands : marque et gammes',
    lead: 'Manufacture familiale londonienne depuis 1884, peintures à l’eau aux pigments profonds, livrées en France via mylands.fr.',
    image: 'cans',
    showMylands: true,
    faq: [
      {
        q: 'Mylands livre-t-il en France ?',
        a: 'Oui via mylands.fr : entrepôt français, commande avant 14h30 un jour ouvré expédiée le jour même selon le site (vérifié le 02/11/2026).',
      },
      {
        q: 'Qu’est-ce que la collection Couleurs de Londres ?',
        a: 'Environ 120 teintes inspirées de Londres, présentées sur mylands.fr et mylands.com.',
      },
      {
        q: 'Un test réel est-il prévu sur 1piece1ampoule ?',
        a: 'Oui : repeindre une salle de bain d’environ 25 m² en Pure White No.1 eggshell (produit offert par Mylands). Compte rendu après travaux — aucun résultat anticipé ici.',
      },
    ],
    body: `<h2>La marque</h2><p>Mylands (mylands.com) : manufacture familiale britannique depuis 1884, peintures à l’eau faibles en COV (classe A+ annoncée pour émissions intérieures), pigments dont une part minérale. Royal Warrant renouvelé sous le règne du roi Charles III selon le site.</p><h2>Gammes</h2><ul><li><strong>Couleurs de Londres</strong> — ~120 teintes.</li><li><strong>Pure White No.1</strong> — blanc de référence, finition eggshell entre autres.</li><li><strong>Échantillons</strong> — test sous <a href="/guides/kelvin-temperature-couleur/">Kelvin</a> et <a href="/guides/irc-indice-rendu-couleur/">IRC</a>.</li></ul><h2>Pour qui ?</h2><p>Rénovations soignées, couleurs profondes, finition premium — pas le choix le moins cher au litre.</p><h2>Essai à venir</h2><p><strong>Salle de bain ~25 m²</strong>, <strong>Pure White No.1 eggshell</strong>, offert par Mylands. Article après travaux uniquement.</p><p>${ml('/', 'Visiter mylands.fr')}</p><p><a href="/peinture/peinture-eclairage-couleur-finition/">Peinture et éclairage</a> · <a href="/peinture/preparation-murs-poncage-enduit-sous-couche/">Préparation des murs</a> · <a href="/codes-promo/">Codes promo</a></p>${affFull}`,
  },
  {
    slug: 'peinture-eclairage-couleur-finition',
    section: 'eclairage',
    short: 'Peinture et lumière',
    title: 'Peinture et éclairage : couleur, finition, Kelvin et IRC',
    description:
      'Comment la peinture réagit à la température de couleur et à l’IRC des ampoules : mats, satins et murs foncés.',
    h1: 'Peinture, couleur et éclairage',
    lead: 'La même teinte change entre le jour, une ampoule 2700 K et un spot 4000 K au miroir — le lien entre peinture et ampoules.',
    image: 'roller',
    faq: [
      {
        q: 'Pourquoi ma peinture paraît plus foncée le soir ?',
        a: 'À flux plus faible et en lumière chaude, les teintes saturées paraissent plus sombres. Testez l’échantillon le soir.',
      },
      {
        q: 'Quel IRC pour juger une couleur de peinture ?',
        a: 'IRC ≥ 90 dans les pièces où vous choisissez la teinte. Voir le guide IRC du site.',
      },
      {
        q: 'Mat ou satin sous LED ?',
        a: 'Mat : moins de reflets. Satin : reflets des spots GU10 (culot à broches, souvent encastrés) — voir finitions peinture.',
      },
    ],
    body: `<p><strong>Kelvin</strong> = température de couleur de la lumière (ex. 2700 K chaud, 4000 K neutre). <strong>IRC</strong> = indice de rendu des couleurs (viser ≥ 90 pour juger une teinte).</p><h2>Valeur de réflexion lumineuse (LRV)</h2><p>Le LRV indique combien la peinture renvoie la lumière. Un blanc pur agrandit visuellement ; un anthracite demande plus de lumens — voir le <a href="/tutoriels/calculer-eclairage-piece-lux/">calcul lux</a>.</p><h2>Température de couleur (kelvins)</h2><p>Une peinture gris-beige paraît rosée à 2700 K et gris-bleu à 4000 K. Lisez le <a href="/guides/kelvin-temperature-couleur/">guide Kelvin du site</a> et testez un échantillon le soir et le matin.</p><h2>IRC et saturation</h2><p>Avec un IRC ≥ 90 (<a href="/guides/irc-indice-rendu-couleur/">guide IRC</a>), les verts et rouges restent fidèles. En IRC 80, une peinture vert sauge peut sembler grisâtre : ce n’est pas la faute du pot, c’est le rendu des couleurs par l’ampoule.</p><h2>Finition : mat, satin, eggshell</h2><p>Un mur <a href="/peinture/finitions-mat-satin-eggshell/">mat</a> absorbe la lumière : moins de reflets sous un plafonnier, couleur plus stable. Un satin ou eggshell renvoie les spots GU10 : la teinte paraît plus claire à flux égal. En salle de bain, l’eggshell lessivable est un bon compromis.</p><h2>Murs foncés et lumens</h2><p>Plus le mur est foncé ou mat, plus il faut augmenter le flux lumineux pour le même confort visuel. Méthode : <a href="/tutoriels/calculer-eclairage-piece-lux/">lux par pièce</a> et <a href="/outils/convertisseur-lux-lumens-watts-surface/">convertisseur lux-lumens</a>.</p><h2>Pièces à relire</h2><ul><li><a href="/peinture/salon/">Salon</a> — tester la teinte le soir sous vos lampadaires.</li><li><a href="/peinture/cuisine/">Cuisine</a> — comparer la couleur sous la barre LED ~4000 K du plan de travail.</li><li><a href="/peinture/salle-de-bain/">Salle de bain</a> — juger la teinte au miroir en lumière neutre.</li><li><a href="/peinture/mylands/">Mylands</a> — commander un échantillon avant un grand pot.</li></ul><p class="en-note"><a href="/affiliation-amazon/">Transparence affiliation</a>.</p>`,
  },
];

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '${');
}

function pageToTs(p) {
  const lines = [
    '  {',
    `    slug: ${JSON.stringify(p.slug)},`,
    `    section: ${JSON.stringify(p.section)},`,
    `    short: ${JSON.stringify(p.short)},`,
    `    title: ${JSON.stringify(p.title)},`,
    `    description: ${JSON.stringify(p.description)},`,
    `    h1: ${JSON.stringify(p.h1)},`,
    `    lead: ${JSON.stringify(p.lead)},`,
  ];
  if (p.image) lines.push(`    image: ${JSON.stringify(p.image)},`);
  if (p.showMylands) lines.push('    showMylands: true,');
  if (p.hasCalculator) lines.push('    hasCalculator: true,');
  if (p.faq) lines.push(`    faq: ${JSON.stringify(p.faq, null, 2).replace(/\n/g, '\n    ')},`);
  lines.push(`    body: \`${esc(pilierFor(p.slug) + enrich(p.slug, p.body))}\`,`);
  lines.push('  },');
  return lines.join('\n');
}

const header = `// Rubrique Peinture (02/11/2026). Partenaire Awin Mylands (131679).
import { awinLink, AWIN_AFFID } from './awin';

export const MYLANDS_MID = '131679';
export type PeinturePage = {
  slug: string;
  section: 'types' | 'pieces' | 'preparation' | 'marque' | 'eclairage';
  short: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  body: string;
  image?: 'roller' | 'wall' | 'cans' | 'bathroom';
  faq?: { q: string; a: string }[];
  showMylands?: boolean;
  hasCalculator?: boolean;
};

export const PEINTURE_SECTIONS = [
  { id: 'types', label: 'Types et finitions', intro: 'Acrylique, alkyde, chaux, pièces humides et aspect mat à brillant.' },
  { id: 'pieces', label: 'Pièce par pièce', intro: 'Contraintes d’humidité, lessivage et finitions adaptées.' },
  { id: 'preparation', label: 'Préparation et quantités', intro: 'Ponçage, enduit, sous-couche et calculateur de litres.' },
  { id: 'marque', label: 'Marque partenaire', intro: 'Mylands : gammes, public et essai à venir.' },
  { id: 'eclairage', label: 'Peinture et lumière', intro: 'Kelvin, IRC et finitions sous vos ampoules.' },
] as const;

export const PEINTURE_IMAGES = {
  roller: {
    src: '/peinture/peinture-roller-salon.jpg',
    alt: 'Personne peignant un mur au rouleau dans un salon',
    credit: 'Illustration générée pour 1 pièce 1 ampoule — scène de peinture au rouleau.',
  },
  wall: {
    src: '/peinture/peinture-mur-blanc.jpg',
    alt: 'Mur en cours de peinture en blanc au rouleau',
    credit: 'Illustration générée pour 1 pièce 1 ampoule — rafraîchissement de mur.',
  },
  cans: {
    src: '/peinture/peinture-pots.jpg',
    alt: 'Pots de peinture et pinceaux sur bâche de protection',
    credit: 'Illustration générée pour 1 pièce 1 ampoule — préparation du chantier.',
  },
  bathroom: {
    src: '/peinture/peinture-sdb-mur.jpg',
    alt: 'Salle de bain aux murs clairs et lumineux',
    credit: 'Illustration générée pour 1 pièce 1 ampoule — salle de bain repeinte.',
  },
};

export const PEINTURE_GALLERY_EXTRA = [
  { src: '/peinture/peinture-pots.jpg', alt: 'Pots de peinture et pinceaux', credit: 'Illustration générée — préparation.' },
  { src: '/peinture/peinture-mur-blanc.jpg', alt: 'Mur blanc en cours de peinture', credit: 'Illustration générée — application au rouleau.' },
];

export const PEINTURE_PAGES: PeinturePage[] = [
`;

const footer = `];

export function peintureBySlug(slug: string): PeinturePage | undefined {
  return PEINTURE_PAGES.find((p) => p.slug === slug);
}
`;

const out = header + PAGES.map(pageToTs).join('\n') + footer;
const root = dirname(fileURLToPath(import.meta.url));
writeFileSync(join(root, '../src/content/peinture.ts'), out, 'utf8');
console.log('Wrote peinture.ts with', PAGES.length, 'pages');
