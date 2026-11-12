import { awinLink } from './awin';

/** Programme Awin House of Lamps US (130277), accepté le 04/11/2026 (éditeur 3127458). Flux « House of Lamps Feed » (fid 117745), prix USD relevés le 04/11/2026. Boutique US : houseoflamps.com. */
export const HOL_MID = '130277';
export const HOL_PRICE_DATE = '04/11/2026';

export type HolPick = {
  nameFr: string;
  nameEn: string;
  priceUsd: string;
  image: string;
  merchantUrl: string;
  blurb: string;
  cta: string;
  pillarHref: string;
  pillarLabel: string;
};

const deep = (url: string) => url.replace(/\?lw_om_view=recotop$/, '');

const picks: Record<string, Omit<HolPick, 'merchantUrl' | 'nameEn'> & { deepLink: string; nameEn: string }> = {
  '/pieces/salle-manger/': {
    nameFr: 'Suspension Vitore, tissu blanc Ø 40 cm (Lucande)',
    nameEn: 'Vitore 15 3/4" White Fabric Pendant Light',
    priceUsd: '61,99',
    image: '/images/house-of-lamps/vitore-pendant.webp',
    deepLink: 'https://www.houseoflamps.com/products/lucande-vitore-pendant-light-o-40-cm-fabric-white',
    pillarHref: '/pieces/',
    pillarLabel: 'guides éclairage par pièce',
    blurb:
      'Au-dessus de la table, une suspension en tissu blanc diffuse la lumière sans éblouir les convives. Prévois une ampoule E27 dimmable 2700 K avec un IRC (indice de rendu des couleurs) ≥ 90 pour des plats et visages naturels.',
    cta: 'Voir la suspension Vitore sur House of Lamps',
  },
  '/pieces/salon/': {
    nameFr: 'Lampadaire Dangan, verre noir et blanc (Lucande)',
    nameEn: 'Dangan 23 3/4" Black and White Floor Lamp',
    priceUsd: '75,99',
    image: '/images/house-of-lamps/dangan-floor.webp',
    deepLink: 'https://www.houseoflamps.com/products/lucande-dangan-pillar-light-black-and-white-height-23-in-glass',
    pillarHref: '/pieces/',
    pillarLabel: 'guides éclairage par pièce',
    blurb:
      'Un lampadaire d’appoint complète le plafonnier : pratique près du canapé pour la lecture. Vérifie la douille (souvent E27) et une ampoule dimmable 2700–3000 K.',
    cta: 'Voir le lampadaire Dangan sur House of Lamps',
  },
  '/pieces/bureau-adulte/': {
    nameFr: 'Lampe de bureau Evaine, chromée et abat-jour blanc',
    nameEn: 'Evaine 25 1/4" Chrome-White Table Lamp',
    priceUsd: '69,99',
    image: '/images/house-of-lamps/evaine-table.webp',
    deepLink: 'https://www.houseoflamps.com/products/lucande-evaine-table-lamp-chrome-white-metal-66-cm',
    pillarHref: '/pieces/',
    pillarLabel: 'guides éclairage par pièce',
    blurb:
      'Sur un bureau télétravail, une base chromée et un abat-jour blanc renvoient la lumière vers le clavier sans encombrer le plan de travail. Associe une ampoule 4000 K pour limiter la fatigue visuelle.',
    cta: 'Voir la lampe Evaine sur House of Lamps',
  },
  '/pieces/couloir/': {
    nameFr: 'Plafonnier LED Mendosa, effet bois clair Ø 30 cm',
    nameEn: 'Mendosa 12" Wooden LED Ceiling Light',
    priceUsd: '51,99',
    image: '/images/house-of-lamps/mendosa-ceiling.webp',
    deepLink: 'https://www.houseoflamps.com/products/lucande-mendosa-led-ceiling-light-wood-o-30-cm',
    pillarHref: '/pieces/',
    pillarLabel: 'guides éclairage par pièce',
    blurb:
      'Dans un couloir étroit, un plafonnier plat libère le passage et homogénéise la lumière entre deux spots trop espacés. LED intégrée : vérifie la température de couleur annoncée sur la fiche.',
    cta: 'Voir le plafonnier Mendosa sur House of Lamps',
  },
  '/pieces/cuisine/': {
    nameFr: 'Plafonnier LED Adam, bois blanc avec réglage CCT',
    nameEn: 'Adam 15 3/4" White Wood LED Ceiling Light',
    priceUsd: '53,99',
    image: '/images/house-of-lamps/adam-ceiling.webp',
    deepLink: 'https://www.houseoflamps.com/products/lucande-adam-led-ceiling-light-white-wood-dimmable-cct',
    pillarHref: '/pieces/',
    pillarLabel: 'guides éclairage par pièce',
    blurb:
      'Entre l’îlot et la table, un plafonnier LED à température de couleur réglable (CCT) passe du blanc neutre (préparation) au chaud (repas). Complète-le avec un vrai éclairage de plan de travail.',
    cta: 'Voir le plafonnier Adam sur House of Lamps',
  },
  '/pieces/chambre-adulte/': {
    nameFr: 'Lampe de chevet Branford, marbre vert',
    nameEn: 'Branford 18 1/4" Green Marble Table Lamp',
    priceUsd: '76,99',
    image: '/images/house-of-lamps/branford-table.webp',
    deepLink: 'https://www.houseoflamps.com/products/lucande-branford-table-lamp-18-in-green-metal-marble',
    pillarHref: '/pieces/',
    pillarLabel: 'guides éclairage par pièce',
    blurb:
      'De chaque côté du lit, une base marbre stabilise la lampe ; choisis une ampoule 2700 K dimmable pour un réveil progressif. Hauteur ~46 cm : vérifie qu’elle n’éblouit pas allongé.',
    cta: 'Voir la lampe Branford sur House of Lamps',
  },
  '/zones/miroir-salle-de-bain/': {
    nameFr: 'Applique Claire, laiton et tissu crème',
    nameEn: 'Claire 10" White Brass Wall Sconce',
    priceUsd: '29,99',
    image: '/images/house-of-lamps/claire-sconce.webp',
    deepLink: 'https://www.houseoflamps.com/products/lucande-claire-wall-light-9-8-in-brass-white-fabric',
    pillarHref: '/zones/',
    pillarLabel: 'guides par zone (miroir, plan de travail…)',
    blurb:
      'Applique décorative pour un coin sec hors volumes IP de la douche. Pour le visage au lavabo, garde une barre LED IP44 au-dessus du miroir ; Claire peut compléter l’ambiance sur un mur latéral.',
    cta: 'Voir l’applique Claire sur House of Lamps',
  },
  '/articles/lampe-de-chevet/': {
    nameFr: 'Lampe de chevet Lirenda, rotin naturel et blanc',
    nameEn: 'Lirenda 20 1/4" Rattan Table Lamp',
    priceUsd: '69,99',
    image: '/images/house-of-lamps/lirenda-table.webp',
    deepLink: 'https://www.houseoflamps.com/products/lucande-lirenda-table-lamp-20-08-in-rattan-natural-white',
    pillarHref: '/articles/',
    pillarLabel: 'articles conseils LED',
    blurb:
      'Le rotin filtre légèrement la lumière : pratique en veilleuse d’ambiance avec une ampoule faiblement dimmable (2700 K). Hauteur ~51 cm — voir aussi notre guide ampoules pour chevet.',
    cta: 'Voir la lampe Lirenda sur House of Lamps',
  },
};

export const HOL_BY_PATH: Record<string, HolPick> = Object.fromEntries(
  Object.entries(picks).map(([path, p]) => [
    path,
    {
      nameFr: p.nameFr,
      nameEn: p.nameEn,
      priceUsd: p.priceUsd,
      image: p.image,
      blurb: p.blurb,
      cta: p.cta,
      pillarHref: p.pillarHref,
      pillarLabel: p.pillarLabel,
      merchantUrl: deep(p.deepLink),
    },
  ]),
);

export function holAwinHref(merchantUrl: string): string {
  return awinLink(HOL_MID, merchantUrl);
}
