export const SITE = {
  name: 'Choisir son ampoule',
  baseline: 'Guides & sélections de produits pour éclairer chaque pièce — avec des liens Amazon partenaires.',
  url: 'https://1piece1ampoule.fr',
  amazonTag: 'manuso06-21',
};

export type ProductLink = {
  title: string;
  subtitle?: string;
  keywords: string;
  altKeywords?: string;
  badge?: string;
};

export type ThematicPage = {
  slug: string;
  title: string;
  description: string;
  hero: {
    eyebrow?: string;
    image: string;
    imageAlt: string;
  };
  sections: Array<{
    title: string;
    points: string[];
  }>;
  products: ProductLink[];
};

