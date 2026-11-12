/** Lien « pilier » contextuel sous le fil d’Ariane des articles /articles/[slug]. */
export const ARTICLE_PILLAR_BY_CATEGORY = {
  Dépannage: {
    href: '/guides/ampoule-led-clignote-eteinte-gresille-depannage/',
    label: 'guide de dépannage LED (clignotement, lueur, grésillement)',
  },
  Comparer: {
    href: '/guides/ampoules-dimmables-variateur/',
    label: 'guide ampoules dimmables et variateurs',
  },
  'Meilleurs choix': {
    href: '/meilleur/',
    label: 'comparatifs par type d’ampoule et de luminaire',
  },
  'Guides pratiques': {
    href: '/guides/lumens-vs-watts/',
    label: 'guide lumens, watts et niveaux d’éclairage',
  },
};

export const ARTICLE_PILLAR_OVERRIDE = {
  'installer-ruban-led': {
    href: '/tutoriels/poser-ruban-led-sous-meuble-cuisine/',
    label: 'tutoriel pose d’un ruban LED sous meuble de cuisine',
  },
  'ampoule-led-qui-clignote': {
    href: '/guides/ampoule-led-clignote-eteinte-gresille-depannage/',
    label: 'guide de dépannage LED (clignotement, lueur, grésillement)',
  },
  'ampoule-led-gresille-bourdonne': {
    href: '/guides/ampoule-led-clignote-eteinte-gresille-depannage/',
    label: 'guide de dépannage LED (clignotement, lueur, grésillement)',
  },
  'ampoule-led-reste-allumee-faiblement': {
    href: '/guides/ampoule-led-clignote-eteinte-gresille-depannage/',
    label: 'guide de dépannage LED (clignotement, lueur, grésillement)',
  },
  'choisir-spots-encastrables': {
    href: '/guides/culots-e27-e14-gu10/',
    label: 'guide des culots et formats d’ampoules',
  },
  'gu10-ou-gu5-3': {
    href: '/guides/culots-e27-e14-gu10/',
    label: 'guide des culots E27, GU10 et formats courants',
  },
  'e27-ou-b22': {
    href: '/guides/culots-e27-e14-gu10/',
    label: 'guide des culots E27, E14, GU10 et B22',
  },
  'bon-plan-ampoule-connectee': {
    href: '/meilleur/meilleure-ampoule-connectee/',
    label: 'comparatif des ampoules connectées E27',
  },
};

export function articlePillar(slug, category) {
  return ARTICLE_PILLAR_OVERRIDE[slug] ?? ARTICLE_PILLAR_BY_CATEGORY[category];
}
