import catalogFr from './catalog-fr.json';

export type ErrorCatalog = typeof catalogFr;

export interface ErrorFiche {
  id: number;
  slug: string;
  category_slug: string;
  brand_slug: string;
  product_slug: string;
  error_code: string;
  difficulty: number;
  estimated_time: string | null;
  estimated_cost: string | null;
  requires_official_sav: boolean;
  title: string;
  symptom: string;
  cause?: string;
  solution: string;
  tools: string;
  safety_warning: string | null;
  seo_path: string;
  brand_support_url?: string | null;
}

export function getCatalogFr(): ErrorCatalog {
  return catalogFr;
}

export function getFicheBySlug(slug: string): ErrorFiche | undefined {
  return catalogFr.errors.find((e) => e.slug === slug) as ErrorFiche | undefined;
}

export function urlFicheErreur(slug: string): string {
  return `/guides/code-erreur/${slug}/`;
}
