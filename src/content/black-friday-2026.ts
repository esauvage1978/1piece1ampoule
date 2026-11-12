import data from '../data/black-friday-2026.json';

export type BFOffer = (typeof data.offers)[number];
export type BFTeaser = (typeof data.teasers)[number];

export type BFLocale = 'fr' | 'en' | 'uk' | 'ca' | 'de' | 'nl' | 'es' | 'it';

export const BF_UPDATED = data.updated;

const merchantSector = new Map(data.merchants.map((m) => [m.name, m.sector]));

export const LOCALE_REGION: Record<BFLocale, string> = {
  fr: 'FR',
  en: 'US',
  uk: 'GB',
  ca: 'CA',
  de: 'DE',
  nl: 'NL',
  es: 'ES',
  it: 'IT',
};

/** Amazon block key in JSON (FR hub also used for amazon.fr note on BE/CH pages via copy). */
export const LOCALE_AMAZON: Partial<Record<BFLocale, keyof typeof data.amazon>> = {
  fr: 'FR',
  en: 'US',
  uk: 'GB',
  ca: 'US',
  de: 'DE',
  es: 'ES',
  it: 'IT',
};

export type CategoryDef = { id: string; slug: Record<BFLocale, string>; sectors: string[] };

export const CATEGORIES: CategoryDef[] = [
  {
    id: 'lighting',
    slug: {
      fr: 'eclairage-luminaires',
      en: 'lighting',
      uk: 'lighting',
      ca: 'lighting',
      de: 'beleuchtung',
      nl: 'verlichting',
      es: 'iluminacion',
      it: 'illuminazione',
    },
    sectors: ['Home & Garden'],
  },
  {
    id: 'diy',
    slug: {
      fr: 'bricolage-outillage',
      en: 'diy-tools',
      uk: 'diy-tools',
      ca: 'diy-tools',
      de: 'werkzeug-baumarkt',
      nl: 'klussen-gereedschap',
      es: 'bricolaje',
      it: 'fai-da-te',
    },
    sectors: ['DIY'],
  },
  {
    id: 'tech',
    slug: {
      fr: 'high-tech-connecte',
      en: 'smart-home-tech',
      uk: 'smart-home-tech',
      ca: 'smart-home-tech',
      de: 'smart-home',
      nl: 'smart-home',
      es: 'tecnologia-hogar',
      it: 'smart-home',
    },
    sectors: ['Electronic Superstore', 'Electronic Accessories'],
  },
  {
    id: 'home',
    slug: {
      fr: 'maison-deco',
      en: 'home-decor',
      uk: 'home-decor',
      ca: 'home-decor',
      de: 'wohnen-deko',
      nl: 'wonen',
      es: 'hogar-deco',
      it: 'casa-arredo',
    },
    sectors: ['Furniture & Soft Furnishings', 'Sports Equipment'],
  },
];

const OTHER_SECTORS = new Set(CATEGORIES.flatMap((c) => c.sectors));

export function hubBase(locale: BFLocale): string {
  const bases: Record<BFLocale, string> = {
    fr: '/black-friday-2026/',
    en: '/en/black-friday-2026/',
    uk: '/uk/black-friday-2026/',
    ca: '/ca/black-friday-2026/',
    de: '/de/black-friday-2026/',
    nl: '/nl/black-friday-2026/',
    es: '/es/black-friday-2026/',
    it: '/it/black-friday-2026/',
  };
  return bases[locale];
}

export function categoryHref(locale: BFLocale, cat: CategoryDef): string {
  return `${hubBase(locale)}${cat.slug[locale]}/`;
}

export function slugToCategory(locale: BFLocale, slug: string): CategoryDef | undefined {
  return CATEGORIES.find((c) => c.slug[locale] === slug);
}

export function categoryPaths(locale: BFLocale, now = new Date()) {
  const offers = offersForLocale(locale, now);
  return CATEGORIES.filter((cat) => {
    const n = offers.filter((o) => categoryForOffer(o) === cat.id).length;
    return n >= 4;
  }).map((cat) => ({ params: { categorie: cat.slug[locale] }, props: { locale, catId: cat.id } }));
}

function endOfDay(iso: string): Date {
  return new Date(`${iso}T23:59:59`);
}

export function offersForLocale(locale: BFLocale, now = new Date()): BFOffer[] {
  const region = LOCALE_REGION[locale];
  return data.offers.filter((o) => {
    if (endOfDay(o.end) < now) return false;
    if (!o.regions?.length) return true;
    return o.regions.includes(region);
  });
}

export function sectorOf(offer: BFOffer): string {
  return merchantSector.get(offer.merchant) ?? 'Other';
}

export function categoryForOffer(offer: BFOffer): string {
  const s = sectorOf(offer);
  const hit = CATEGORIES.find((c) => c.sectors.includes(s));
  if (hit) return hit.id;
  if (!OTHER_SECTORS.has(s) && s !== 'Other') return 'other';
  return 'other';
}

export function topOffers(offers: BFOffer[], limit = 8): BFOffer[] {
  return [...offers].sort((a, b) => {
    if (a.bf !== b.bf) return a.bf ? -1 : 1;
    if ((b.pct ?? 0) !== (a.pct ?? 0)) return (b.pct ?? 0) - (a.pct ?? 0);
    if (!!b.code !== !!a.code) return b.code ? 1 : -1;
    return a.merchant.localeCompare(b.merchant);
  }).slice(0, limit);
}

export function groupByCategory(offers: BFOffer[]): { cat: CategoryDef | null; offers: BFOffer[] }[] {
  const buckets = new Map<string, BFOffer[]>();
  const other: BFOffer[] = [];
  for (const o of offers) {
    const id = categoryForOffer(o);
    if (id === 'other') other.push(o);
    else {
      if (!buckets.has(id)) buckets.set(id, []);
      buckets.get(id)!.push(o);
    }
  }
  const out: { cat: CategoryDef | null; offers: BFOffer[] }[] = CATEGORIES.map((cat) => ({
    cat,
    offers: buckets.get(cat.id) ?? [],
  })).filter((x) => x.offers.length > 0);
  if (other.length) out.push({ cat: null, offers: other });
  return out;
}

export function teasersForLocale(locale: BFLocale): BFTeaser[] {
  const region = LOCALE_REGION[locale];
  return data.teasers.filter((t) => {
    const r = (t.region ?? '').toUpperCase();
    if (r.includes(region)) return true;
    if (locale === 'uk' && r.includes('UK')) return true;
    if (locale === 'fr' && r.includes('FR')) return true;
    if (locale === 'en' && r.includes('US')) return true;
    return false;
  });
}

export function amazonForLocale(locale: BFLocale) {
  const key = LOCALE_AMAZON[locale];
  return key ? data.amazon[key] : null;
}

const REGION_FLAGS: Record<string, string> = {
  FR: '🇫🇷',
  GB: '🇬🇧',
  US: '🇺🇸',
  DE: '🇩🇪',
  IT: '🇮🇹',
  ES: '🇪🇸',
  NL: '🇳🇱',
  BE: '🇧🇪',
  CH: '🇨🇭',
  CA: '🇨🇦',
};

export function flagForOffer(offer: BFOffer): string {
  const r = offer.regions?.[0] ?? offer.merchant_region ?? '';
  return REGION_FLAGS[r] ?? '🌍';
}

type LocaleStrings = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  disclosure: string;
  updatedLabel: string;
  countdownBf: string;
  countdownCm: string;
  topTitle: string;
  amazonTitle: string;
  verifyTitle: string;
  verifyBody: string;
  adviceTitle: string;
  faqTitle: string;
  teasersTitle: string;
  teasersNote: string;
  navCategories: string;
  copy: string;
  copied: string;
  noCode: string;
  cta: string;
  validFrom: string;
  validUntil: string;
  statusActive: string;
  statusExpiring: string;
  statusUpcoming: (d: string) => string;
  categoryLabels: Record<string, string>;
  otherCategory: string;
  affiliateMore: string;
  locale: string;
  dateLocale: string;
  timeZone: string;
};

export const STRINGS: Record<BFLocale, LocaleStrings> = {
  fr: {
    title: 'Black Friday 2026 éclairage & maison — codes promo vérifiés',
    description:
      'Hub Black Friday 2026 : offres Awin vérifiées sur ampoules LED, luminaires et bricolage, codes à copier, dates de validité et liens Amazon.fr.',
    h1: 'Black Friday 2026 : offres éclairage & maison',
    intro:
      'Toutes les promotions listées proviennent de notre relevé Awin du 29 octobre 2026. Nous ne publions que des remises confirmées avec leurs dates de début et de fin — vérifiez le panier avant de payer.',
    disclosure:
      'Liens affiliés (Awin, Amazon) : une commission peut m’être versée sans surcoût pour vous. Conditions sur le site marchand.',
    updatedLabel: 'Mis à jour le',
    countdownBf: 'Black Friday',
    countdownCm: 'Cyber Monday',
    topTitle: 'Top offres du moment',
    amazonTitle: 'Amazon Black Friday',
    verifyTitle: 'Comment vérifier un vrai bon prix',
    verifyBody:
      'Comparez le prix affiché à l’historique (Keepa ou CamelCamelCamel sur Amazon), au prix le plus bas des 30 derniers jours sur les sites EU (directive Omnibus), et au coût d’une ampoule LED équivalente en lumens/culot. Méfiez-vous des « -70 % » sur une référence jamais vendue au prix barré.',
    adviceTitle: 'Avant d’acheter : nos guides utiles',
    faqTitle: 'FAQ Black Friday éclairage 2026',
    teasersTitle: 'Offres attendues / à confirmer',
    teasersNote: 'Annonces repérées sur le web, non confirmées dans notre flux partenaire.',
    navCategories: 'Catégories',
    copy: 'Copier',
    copied: 'Copié',
    noCode: 'Sans code : remise appliquée au panier.',
    cta: 'Voir l’offre',
    validFrom: 'Du',
    validUntil: 'au',
    statusActive: 'En cours',
    statusExpiring: 'Expire bientôt',
    statusUpcoming: (d) => `À venir le ${d}`,
    categoryLabels: {
      lighting: 'Éclairage & luminaires',
      diy: 'Bricolage & outillage',
      tech: 'High-tech & connecté',
      home: 'Maison & déco',
    },
    otherCategory: 'Autres bons plans',
    affiliateMore: 'En savoir plus sur notre affiliation',
    locale: 'fr-FR',
    dateLocale: 'fr-FR',
    timeZone: 'Europe/Paris',
  },
  en: {
    title: 'Black Friday 2026 lighting deals — verified codes (US)',
    description:
      'Black Friday 2026 hub: verified Awin promos on LED bulbs, fixtures and DIY, copyable codes, end dates and Amazon.com deals page.',
    h1: 'Black Friday 2026: lighting & home deals',
    intro:
      'Every offer comes from our Awin feed checked on 29 October 2026. We only list confirmed discounts with start and end dates — always double-check your basket.',
    disclosure:
      'Affiliate links (Awin, Amazon): I may earn a commission at no extra cost to you. Merchant terms apply.',
    updatedLabel: 'Updated',
    countdownBf: 'Black Friday',
    countdownCm: 'Cyber Monday',
    topTitle: 'Top deals right now',
    amazonTitle: 'Amazon Black Friday',
    verifyTitle: 'How to spot a real discount',
    verifyBody:
      'Compare the sale price to price history (Keepa or CamelCamelCamel on Amazon) and to the lowest price in the last 30 days where applicable. Watch for inflated “was” prices on bulbs with the wrong base or voltage for your home.',
    adviceTitle: 'Before you buy: our guides',
    faqTitle: 'Black Friday lighting FAQ 2026',
    teasersTitle: 'Expected offers / unconfirmed',
    teasersNote: 'Spotted online; not confirmed in our partner feed yet.',
    navCategories: 'Categories',
    copy: 'Copy',
    copied: 'Copied',
    noCode: 'No code needed — discount applies at checkout.',
    cta: 'View deal',
    validFrom: 'From',
    validUntil: 'to',
    statusActive: 'Live now',
    statusExpiring: 'Ending soon',
    statusUpcoming: (d) => `Starts ${d}`,
    categoryLabels: {
      lighting: 'Lighting & fixtures',
      diy: 'DIY & tools',
      tech: 'Smart home & tech',
      home: 'Home & décor',
    },
    otherCategory: 'More deals',
    affiliateMore: 'Affiliate disclosure',
    locale: 'en-US',
    dateLocale: 'en-US',
    timeZone: 'America/New_York',
  },
  uk: {
    title: 'Black Friday 2026 UK lighting deals — verified codes',
    description:
      'Black Friday 2026 UK: verified partner promos on LED bulbs and lighting, voucher codes, validity dates and Amazon.co.uk Black Friday page.',
    h1: 'Black Friday 2026 UK: lighting & DIY deals',
    intro:
      'Offers are from our Awin check on 29 October 2026 for GB delivery. Confirmed dates only — check B22 vs E27 and 230 V before you buy.',
    disclosure:
      'Affiliate links (Awin, Amazon): I may earn a commission at no extra cost to you. Merchant terms apply.',
    updatedLabel: 'Updated',
    countdownBf: 'Black Friday',
    countdownCm: 'Cyber Monday',
    topTitle: 'Top UK deals',
    amazonTitle: 'Amazon Black Friday UK',
    verifyTitle: 'How to spot a real discount',
    verifyBody:
      'Use Keepa or CamelCamelCamel on Amazon.co.uk, compare to the 30-day lowest price (Consumer Rights Act / retailer policies), and match lumens and cap (B22, E27, GU10) to your fitting.',
    adviceTitle: 'Before you buy: our guides',
    faqTitle: 'Black Friday lighting FAQ 2026',
    teasersTitle: 'Expected offers / unconfirmed',
    teasersNote: 'Seen on merchant sites; not in our partner feed yet.',
    navCategories: 'Categories',
    copy: 'Copy',
    copied: 'Copied',
    noCode: 'No code — discount at checkout.',
    cta: 'View deal',
    validFrom: 'From',
    validUntil: 'to',
    statusActive: 'Live',
    statusExpiring: 'Ending soon',
    statusUpcoming: (d) => `From ${d}`,
    categoryLabels: {
      lighting: 'Lighting',
      diy: 'DIY & tools',
      tech: 'Smart home',
      home: 'Home & décor',
    },
    otherCategory: 'Other deals',
    affiliateMore: 'Affiliate disclosure',
    locale: 'en-GB',
    dateLocale: 'en-GB',
    timeZone: 'Europe/London',
  },
  ca: {
    title: 'Black Friday 2026 Canada lighting deals',
    description:
      'Black Friday 2026 deals for Canada: verified partner offers where available, codes and dates. Amazon US link for cross-border shoppers.',
    h1: 'Black Friday 2026: lighting deals (Canada)',
    intro:
      'Fewer CA-specific rows in our feed on 29 October 2026 — we show offers that ship to Canada when listed. Confirm voltage (120 V) and shipping before checkout.',
    disclosure:
      'Affiliate links: I may earn a commission at no extra cost to you.',
    updatedLabel: 'Updated',
    countdownBf: 'Black Friday',
    countdownCm: 'Cyber Monday',
    topTitle: 'Top deals for Canada',
    amazonTitle: 'Amazon Black Friday (US store)',
    verifyTitle: 'How to spot a real discount',
    verifyBody:
      'Check price history on Amazon and whether the seller ships to your province. Compare lumens and E26 bases to what you already use.',
    adviceTitle: 'Before you buy: our guides',
    faqTitle: 'Black Friday FAQ 2026',
    teasersTitle: 'Expected offers / unconfirmed',
    teasersNote: 'Not confirmed in our partner feed.',
    navCategories: 'Categories',
    copy: 'Copy',
    copied: 'Copied',
    noCode: 'No code required.',
    cta: 'View deal',
    validFrom: 'From',
    validUntil: 'to',
    statusActive: 'Live',
    statusExpiring: 'Ending soon',
    statusUpcoming: (d) => `From ${d}`,
    categoryLabels: {
      lighting: 'Lighting',
      diy: 'DIY',
      tech: 'Tech',
      home: 'Home',
    },
    otherCategory: 'Other',
    affiliateMore: 'Affiliate disclosure',
    locale: 'en-CA',
    dateLocale: 'en-CA',
    timeZone: 'America/Toronto',
  },
  de: {
    title: 'Black Friday 2026 Beleuchtung — Gutscheine & Aktionen',
    description:
      'Black Friday 2026 Hub: geprüfte Awin-Angebote für LED-Lampen, Leuchten und Baumarkt, Codes kopieren, Gültigkeit und Amazon.de Black Friday.',
    h1: 'Black Friday 2026: Beleuchtung & Haus',
    intro:
      'Alle Angebote stammen aus unserem Awin-Abgleich vom 29. Oktober 2026. Nur bestätigte Rabatte mit Start- und Enddatum.',
    disclosure:
      'Affiliate-Links (Awin, Amazon): Ich kann eine Provision erhalten, ohne Mehrkosten für Sie.',
    updatedLabel: 'Aktualisiert am',
    countdownBf: 'Black Friday',
    countdownCm: 'Cyber Monday',
    topTitle: 'Top-Angebote',
    amazonTitle: 'Amazon Black Friday DE',
    verifyTitle: 'Echten Rabatt erkennen',
    verifyBody:
      'Preishistorie mit Keepa/CamelCamelCamel prüfen, 30-Tage-Tiefpreis (Omnibus-EU) vergleichen, Sockel (E27, GU10) und Dimmbarkeit checken.',
    adviceTitle: 'Vor dem Kauf: unsere Ratgeber',
    faqTitle: 'FAQ Black Friday Beleuchtung 2026',
    teasersTitle: 'Erwartete Angebote / unbestätigt',
    teasersNote: 'Online gesehen, im Partner-Feed noch nicht bestätigt.',
    navCategories: 'Kategorien',
    copy: 'Kopieren',
    copied: 'Kopiert',
    noCode: 'Ohne Code — Rabatt an der Kasse.',
    cta: 'Angebot ansehen',
    validFrom: 'Vom',
    validUntil: 'bis',
    statusActive: 'Aktiv',
    statusExpiring: 'Endet bald',
    statusUpcoming: (d) => `Ab ${d}`,
    categoryLabels: {
      lighting: 'Beleuchtung & Leuchten',
      diy: 'Werkzeug & Baumarkt',
      tech: 'Smart Home & Technik',
      home: 'Wohnen & Deko',
    },
    otherCategory: 'Weitere Deals',
    affiliateMore: 'Werbehinweis',
    locale: 'de-DE',
    dateLocale: 'de-DE',
    timeZone: 'Europe/Berlin',
  },
  nl: {
    title: 'Black Friday 2026 verlichting — kortingscodes',
    description:
      'Black Friday 2026: geverifieerde Awin-acties voor LED-lampen en verlichting in Nederland, codes en einddata.',
    h1: 'Black Friday 2026: verlichting & wonen',
    intro:
      'Aanbiedingen uit onze Awin-controle van 29 oktober 2026. Alleen bevestigde kortingen met geldigheidsdata.',
    disclosure:
      'Affiliatelinks: ik kan commissie ontvangen zonder meerprijs voor u.',
    updatedLabel: 'Bijgewerkt op',
    countdownBf: 'Black Friday',
    countdownCm: 'Cyber Monday',
    topTitle: 'Topdeals',
    amazonTitle: 'Amazon Black Friday',
    verifyTitle: 'Echte korting herkennen',
    verifyBody:
      'Vergelijk met prijshistorie (Keepa), let op fitting (E27, GU10) en dimbaarheid met uw dimmer.',
    adviceTitle: 'Eerst lezen: onze gidsen',
    faqTitle: 'FAQ Black Friday 2026',
    teasersTitle: 'Verwachte aanbiedingen / nog niet bevestigd',
    teasersNote: 'Online gezien, nog niet in onze partnerfeed.',
    navCategories: 'Categorieën',
    copy: 'Kopiëren',
    copied: 'Gekopieerd',
    noCode: 'Geen code nodig.',
    cta: 'Naar de actie',
    validFrom: 'Van',
    validUntil: 't/m',
    statusActive: 'Actief',
    statusExpiring: 'Loopt bijna af',
    statusUpcoming: (d) => `Vanaf ${d}`,
    categoryLabels: {
      lighting: 'Verlichting',
      diy: 'Klussen & gereedschap',
      tech: 'Smart home',
      home: 'Wonen',
    },
    otherCategory: 'Overig',
    affiliateMore: 'Affiliatebeleid',
    locale: 'nl-NL',
    dateLocale: 'nl-NL',
    timeZone: 'Europe/Amsterdam',
  },
  es: {
    title: 'Black Friday 2026 iluminación — códigos verificados',
    description:
      'Hub Black Friday 2026: ofertas Awin verificadas en bombillas LED y luminarias, códigos, fechas y Amazon.es Black Friday.',
    h1: 'Black Friday 2026: iluminación y hogar',
    intro:
      'Ofertas del informe Awin del 29 de octubre de 2026. Solo descuentos confirmados con fechas de inicio y fin.',
    disclosure:
      'Enlaces de afiliado: puedo recibir una comisión sin coste extra para usted.',
    updatedLabel: 'Actualizado el',
    countdownBf: 'Black Friday',
    countdownCm: 'Cyber Monday',
    topTitle: 'Mejores ofertas',
    amazonTitle: 'Amazon Black Friday ES',
    verifyTitle: 'Cómo detectar un buen precio real',
    verifyBody:
      'Compare con el historial (Keepa/CamelCamelCamel), el precio más bajo de 30 días (Omnibus UE) y el culot correcto (E27, GU10).',
    adviceTitle: 'Antes de comprar: nuestras guías',
    faqTitle: 'FAQ Black Friday iluminación 2026',
    teasersTitle: 'Ofertas esperadas / por confirmar',
    teasersNote: 'Vistas en la web; aún no confirmadas en nuestro feed.',
    navCategories: 'Categorías',
    copy: 'Copiar',
    copied: 'Copiado',
    noCode: 'Sin código — descuento en caja.',
    cta: 'Ver oferta',
    validFrom: 'Del',
    validUntil: 'al',
    statusActive: 'Activa',
    statusExpiring: 'Termina pronto',
    statusUpcoming: (d) => `Desde el ${d}`,
    categoryLabels: {
      lighting: 'Iluminación',
      diy: 'Bricolaje',
      tech: 'Hogar conectado',
      home: 'Hogar y deco',
    },
    otherCategory: 'Otros',
    affiliateMore: 'Afiliación',
    locale: 'es-ES',
    dateLocale: 'es-ES',
    timeZone: 'Europe/Madrid',
  },
  it: {
    title: 'Black Friday 2026 illuminazione — codici sconto',
    description:
      'Hub Black Friday 2026: promozioni Awin verificate su lampadine LED e illuminazione, codici copiabili, date e Amazon.it Black Friday.',
    h1: 'Black Friday 2026: illuminazione e casa',
    intro:
      'Promozioni dal controllo Awin del 29 ottobre 2026. Solo sconti confermati con date di validità.',
    disclosure:
      'Link affiliati: posso ricevere una commissione senza costi extra per lei.',
    updatedLabel: 'Aggiornato il',
    countdownBf: 'Black Friday',
    countdownCm: 'Cyber Monday',
    topTitle: 'Migliori offerte',
    amazonTitle: 'Amazon Black Friday IT',
    verifyTitle: 'Come capire se lo sconto è reale',
    verifyBody:
      'Confronta con Keepa/CamelCamelCamel, prezzo minimo 30 giorni (Omnibus UE) e attacco corretto (E27, GU10).',
    adviceTitle: 'Prima di acquistare: le nostre guide',
    faqTitle: 'FAQ Black Friday illuminazione 2026',
    teasersTitle: 'Offerte attese / da confermare',
    teasersNote: 'Individuate online, non ancora nel feed partner.',
    navCategories: 'Categorie',
    copy: 'Copia',
    copied: 'Copiato',
    noCode: 'Senza codice — sconto a carrello.',
    cta: 'Vedi offerta',
    validFrom: 'Dal',
    validUntil: 'al',
    statusActive: 'In corso',
    statusExpiring: 'In scadenza',
    statusUpcoming: (d) => `Dal ${d}`,
    categoryLabels: {
      lighting: 'Illuminazione',
      diy: 'Fai da te',
      tech: 'Smart home',
      home: 'Casa e arredo',
    },
    otherCategory: 'Altre offerte',
    affiliateMore: 'Affiliazione',
    locale: 'it-IT',
    dateLocale: 'it-IT',
    timeZone: 'Europe/Rome',
  },
};

export function formatDate(iso: string, locale: BFLocale): string {
  const s = STRINGS[locale];
  return new Date(`${iso}T12:00:00`).toLocaleDateString(s.dateLocale, {
    timeZone: s.timeZone,
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function statusLabel(offer: BFOffer, locale: BFLocale): string {
  const t = STRINGS[locale];
  if (offer.status === 'active') return t.statusActive;
  if (offer.status === 'expiringSoon') return t.statusExpiring;
  return t.statusUpcoming(formatDate(offer.start, locale));
}

export function affiliatePath(locale: BFLocale): string {
  const paths: Record<BFLocale, string> = {
    fr: '/affiliation-amazon/',
    en: '/en/affiliate-disclosure/',
    uk: '/uk/affiliate-disclosure/',
    ca: '/ca/affiliate-disclosure/',
    de: '/de/werbehinweis/',
    nl: '/nl/affiliatebeleid/',
    es: '/es/afiliacion/',
    it: '/it/affiliazione/',
  };
  return paths[locale];
}

type GuideLink = { href: string; label: string };

export function buyingGuides(locale: BFLocale, catId?: string): GuideLink[] {
  const fr: Record<string, GuideLink[]> = {
    lighting: [
      { href: '/meilleur/meilleur-spot-gu10/', label: 'Comparatif spots GU10 LED' },
      { href: '/tutoriels/remplacer-halogene-gu10-mr16-par-led/', label: 'Remplacer halogène GU10 par LED' },
      { href: '/guides/lumens-vs-watts/', label: 'Lumens vs watts' },
      { href: '/guides/kelvin-temperature-couleur/', label: 'Température de couleur (Kelvin)' },
      { href: '/marques/osram-ledvance/', label: 'Fiche OSRAM / LEDVANCE' },
    ],
    diy: [
      { href: '/guides/detecteurs-de-mouvement/', label: 'Détecteurs de mouvement' },
      { href: '/guides/eclairage-exterieur-automatique-steinel/', label: 'Éclairage extérieur Steinel' },
      { href: '/zones/entree-allee-exterieure/', label: 'Éclairer entrée et allée' },
    ],
    tech: [
      { href: '/meilleur/meilleure-ampoule-connectee/', label: 'Comparatif ampoules connectées' },
      { href: '/articles/ampoule-connectee-wifi-ou-zigbee/', label: 'Wi-Fi ou Zigbee ?' },
      { href: '/marques/philips-hue/', label: 'Philips Hue : notre avis' },
      { href: '/guides/matrice-matter-thread-philips-hue-aqara-govee/', label: 'Matter / Thread : matrice compatibilité' },
    ],
    default: [
      { href: '/guides/ampoules-dimmables-variateur/', label: 'Ampoules dimmables et variateurs' },
      { href: '/codes-promo/', label: 'Codes promo du moment' },
      { href: '/meilleur/', label: 'Tous les comparatifs 2026' },
    ],
  };
  const en: Record<string, GuideLink[]> = {
    lighting: [
      { href: '/en/guides/lumens-vs-watts/', label: 'Lumens vs watts' },
      { href: '/en/guides/colour-temperature-kelvin/', label: 'Colour temperature' },
      { href: '/en/tutorials/replace-halogen-gu10-mr16-with-led/', label: 'Replace halogen GU10 with LED' },
      { href: '/en/guides/dimmable-led-bulbs/', label: 'Dimmable LED bulbs' },
    ],
    tech: [
      { href: '/en/guides/bulb-bases-b22-e26-e27-gu10/', label: 'Bulb bases (B22, E26, GU10)' },
      { href: '/en/tutorials/smart-switch-no-neutral/', label: 'Smart switch without neutral' },
    ],
    default: [
      { href: '/en/guides/ip-ratings-bathroom-outdoor/', label: 'IP ratings for bathroom & outdoor' },
      { href: '/en/tools/', label: 'Lighting simulator' },
    ],
  };
  const de: Record<string, GuideLink[]> = {
    lighting: [
      { href: '/de/ratgeber/lumen-watt/', label: 'Lumen vs Watt' },
      { href: '/de/anleitungen/halogen-gu10-mr16-durch-led-ersetzen/', label: 'Halogen GU10 durch LED ersetzen' },
      { href: '/de/ratgeber/dimmbare-led-lampen/', label: 'Dimmbare LED-Lampen' },
    ],
    default: [{ href: '/de/werkzeuge/', label: 'Lichtsimulator' }],
  };
  const maps: Partial<Record<BFLocale, Record<string, GuideLink[]>>> = { fr, en, uk: en, ca: en, de, nl: en, es: en, it: en };
  const map = maps[locale] ?? fr;
  const key = catId && map[catId] ? catId : 'default';
  const specific = map[key] ?? map.default ?? [];
  const base = map.default ?? [];
  const merged = [...specific];
  for (const l of base) if (!merged.some((x) => x.href === l.href)) merged.push(l);
  return merged.slice(0, 10);
}

export function faqItems(locale: BFLocale): { q: string; a: string }[] {
  const faqs: Record<BFLocale, { q: string; a: string }[]> = {
    fr: [
      {
        q: 'Quand a lieu le Black Friday 2026 ?',
        a: 'Le Black Friday 2026 est le vendredi 27 novembre 2026. Le Cyber Monday suit le 30 novembre 2026. Certaines enseignes lancent des « Black November » plus tôt : les dates exactes sont indiquées sur chaque offre ci-dessus.',
      },
      {
        q: 'Les codes promo Black Friday sont-ils cumulables ?',
        a: 'Rarement. Un code Awin ou marchand s’applique en général sur le panier hors autres promotions. Lisez les conditions sur la fiche produit et dans le panier avant de payer.',
      },
      {
        q: 'Comment savoir si une ampoule LED en promo est une bonne affaire ?',
        a: 'Vérifiez lumens, culot, dimmabilité et IRC. Comparez au prix des 30 derniers jours (Omnibus) et à nos comparatifs indépendants — un gros pourcentage sur une référence inadaptée reste une mauvaise achat.',
      },
      {
        q: 'Proposez-vous des offres Philips Hue pour le Black Friday ?',
        a: 'Nous listons uniquement les promos confirmées dans notre flux partenaire. S’il n’y a pas de ligne Hue ci-dessus, aucune remise n’a été confirmée à la date de mise à jour — consultez aussi Amazon.fr le jour J.',
      },
      {
        q: 'Les liens Amazon.fr sont-ils sûrs ?',
        a: 'Ils pointent vers la page officielle Black Friday Amazon avec notre tag affilié, sans surcoût. Les prix changent en temps réel : vérifiez la fiche produit au moment de l’achat.',
      },
      {
        q: 'Pourquoi une offre affiche « à venir » ?',
        a: 'L’annonceur a publié une promotion future dans Awin (souvent Black November). Le badge indique la date de début ; le lien peut déjà décrypter la landing, mais la remise ne s’applique qu’à partir de cette date.',
      },
      {
        q: 'Que signifie « offre attendue / à confirmer » ?',
        a: 'Ce sont des annonces repérées sur le site marchand ou la presse, pas encore reçues via notre API partenaire. Nous indiquons la source pour que vous puissiez surveiller, sans garantir le montant de la remise.',
      },
    ],
    en: [
      {
        q: 'When is Black Friday 2026?',
        a: 'Black Friday 2026 is Friday 27 November 2026. Cyber Monday is 30 November 2026. Some merchants start earlier — each row above shows its own start and end date.',
      },
      {
        q: 'Can I stack voucher codes?',
        a: 'Usually not. One merchant code per order is typical. Read the terms on the product page before checkout.',
      },
      {
        q: 'How do I know an LED bulb deal is genuine?',
        a: 'Match lumens, base (E26 in the US), dimming and colour temperature to your fitting. Compare to 30-day price history and our guides — a high % off the wrong bulb is still a bad buy.',
      },
      {
        q: 'Do you list Philips Hue Black Friday deals?',
        a: 'Only when confirmed in our partner feed on the update date. If Hue is not listed above, check Amazon.com on the day — we will add confirmed rows when Awin publishes them.',
      },
      {
        q: 'Are Amazon links official?',
        a: 'They use our affiliate tag on Amazon’s Black Friday hub. Prices change live — always confirm on the product page.',
      },
      {
        q: 'Why does an offer say “Starts …”?',
        a: 'The advertiser scheduled a future promo in Awin. The discount applies from the start date shown, even if the landing page is already live.',
      },
    ],
    uk: [
      {
        q: 'When is Black Friday 2026 in the UK?',
        a: 'Friday 27 November 2026, with Cyber Monday on 30 November 2026. Merchants may run earlier “Black November” windows — see each offer’s dates.',
      },
      {
        q: 'B22 or E27 — does it matter for deals?',
        a: 'Yes. UK homes often use B22 bayonet; E27 is common on pendants and imports. A cheap bulb is useless if the cap or voltage (230 V) is wrong.',
      },
      {
        q: 'Can I trust the % off shown?',
        a: 'We pass through the advertiser’s headline. Verify against price history (Keepa on .co.uk) and our lumens/base guides before buying.',
      },
      {
        q: 'Why is Shelly listed as “expected”?',
        a: 'We saw Black Friday messaging on the merchant site but no confirmed Awin row yet — source link is shown for transparency.',
      },
      {
        q: 'Do deals ship to Northern Ireland?',
        a: 'Depends on the merchant — check checkout. Our GB-filtered list assumes UK mainland unless stated otherwise on the offer.',
      },
      {
        q: 'What does “ending soon” mean?',
        a: 'The partner marked the promo as expiring shortly before the end datetime in Awin. Copy the code and checkout before the date shown.',
      },
    ],
    ca: [
      {
        q: 'When is Black Friday 2026?',
        a: '27 November 2026, Cyber Monday 30 November 2026. Canadian shipping depends on each merchant — confirm at checkout.',
      },
      {
        q: 'Why so few Canada-specific offers?',
        a: 'Our Awin feed on 29 October 2026 had limited CA-region rows. We show what lists Canada in regions; more may appear closer to November.',
      },
      {
        q: 'Amazon US link — will it ship to Canada?',
        a: 'Not all items ship cross-border. Use the Amazon checkout to see import fees and delivery to your address.',
      },
      {
        q: '120 V bulbs only?',
        a: 'Yes for most Canadian homes. Do not buy UK/EU 230 V bulbs even if they look cheaper.',
      },
      {
        q: 'Are codes copy-paste?',
        a: 'When a code is shown, use the copy button and paste at the merchant checkout. Some deals need no code.',
      },
      {
        q: 'How often is this page updated?',
        a: 'When we refresh the JSON feed from Awin — date shown at the top. Rebuild the site to publish new rows.',
      },
    ],
    de: [
      {
        q: 'Wann ist Black Friday 2026?',
        a: 'Freitag, 27. November 2026. Cyber Monday am 30. November 2026. Viele Händler starten früher — siehe Startdatum je Angebot.',
      },
      {
        q: 'Sind die Gutscheincodes kombinierbar?',
        a: 'In der Regel nein. Bedingungen des Händlers im Warenkorb prüfen.',
      },
      {
        q: 'Wie erkenne ich eine gute LED-Ampel?',
        a: 'Lumen, Sockel (E27/GU10), Dimmbarkeit und Kelvin vergleichen. Keepa-Historie und unsere Ratgeber nutzen.',
      },
      {
        q: 'Philips Hue am Black Friday?',
        a: 'Nur wenn im Partner-Feed bestätigt — sonst Amazon.de am Tag selbst prüfen.',
      },
      {
        q: 'Was bedeutet « unbestätigt »?',
        a: 'Hinweise von der Händlerseite ohne Awin-Zeile — Quelle ist verlinkt, Betrag kann abweichen.',
      },
      {
        q: 'Warum « Endet bald »?',
        a: 'Der Advertiser markiert kurz vor Ablauf in Awin — rechtzeitig einlösen.',
      },
    ],
    nl: [
      {
        q: 'Wanneer is Black Friday 2026?',
        a: 'Vrijdag 27 november 2026, Cyber Monday 30 november 2026.',
      },
      {
        q: 'Zijn Lampen24-codes geldig in heel NL?',
        a: 'Zie regio’s bij elke rij — onze lijst filtert op NL waar vermeld.',
      },
      {
        q: 'Hoe kopieer ik een code?',
        a: 'Gebruik de knop « Kopiëren » en plak bij de checkout van de webshop.',
      },
      {
        q: 'Amazon-block ontbreekt?',
        a: 'Geen Amazon-tag in onze BF-data voor NL — gebruik partnerlinks hierboven.',
      },
      {
        q: 'Dimmen met LED?',
        a: 'Lees onze gids over dimbare LED vóór u in actie koopt.',
      },
      {
        q: 'Hoe vaak bijgewerkt?',
        a: 'Bij elke JSON-feed refresh — datum bovenaan.',
      },
    ],
    es: [
      {
        q: '¿Cuándo es el Black Friday 2026?',
        a: 'Viernes 27 de noviembre de 2026; Cyber Monday 30 de noviembre de 2026.',
      },
      {
        q: '¿Son acumulables los códigos?',
        a: 'Normalmente no — revise condiciones en la tienda.',
      },
      {
        q: '¿Cómo comprobar un buen precio en bombillas LED?',
        a: 'Historial de precios, culot E27/GU10 y lúmenes según nuestras guías.',
      },
      {
        q: '¿Ofertas Philips Hue?',
        a: 'Solo si aparecen confirmadas arriba; si no, consulte Amazon.es el día del evento.',
      },
      {
        q: '¿Qué es « por confirmar »?',
        a: 'Anuncio visto en la web del comercio, aún no en nuestro feed Awin.',
      },
      {
        q: '¿Por qué « empieza el … »?',
        a: 'Promoción programada en Awin — válida desde esa fecha.',
      },
    ],
    it: [
      {
        q: 'Quando è il Black Friday 2026?',
        a: 'Venerdì 27 novembre 2026; Cyber Monday 30 novembre 2026.',
      },
      {
        q: 'I codici sono cumulabili?',
        a: 'Di solito no — controllare i termini del negozio.',
      },
      {
        q: 'Come capire se un’offerta LED conviene?',
        a: 'Lumen, attacco E27/GU10, dimmerabilità e storico prezzi (Keepa).',
      },
      {
        q: 'Offerte Philips Hue?',
        a: 'Solo se confermate nel feed partner in data aggiornamento.',
      },
      {
        q: 'Cosa significa « da confermare »?',
        a: 'Indizio dal sito merchant, fonte citata, importo non garantito.',
      },
      {
        q: 'Perché « in scadenza »?',
        a: 'Promo quasi terminata secondo Awin — usare prima della data fine.',
      },
    ],
  };
  return faqs[locale];
}

export function offerListSchema(offers: BFOffer[], locale: BFLocale, pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: STRINGS[locale].h1,
    numberOfItems: offers.length,
    itemListElement: offers.map((o, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Offer',
        name: o.title,
        url: o.url,
        priceValidUntil: o.end,
        eligibleRegion: o.regions?.length ? o.regions : LOCALE_REGION[locale],
        seller: { '@type': 'Organization', name: o.merchant },
        ...(o.code ? { discountCode: o.code } : {}),
      },
    })),
  };
}

export type BFGroupEntry = { fr: string; en?: string; uk?: string; ca?: string; de?: string; nl?: string; es?: string; it?: string };

export const BF_HREFLANG: BFGroupEntry = {
  fr: '/black-friday-2026/',
  en: '/en/black-friday-2026/',
  uk: '/uk/black-friday-2026/',
  ca: '/ca/black-friday-2026/',
  de: '/de/black-friday-2026/',
  nl: '/nl/black-friday-2026/',
  es: '/es/black-friday-2026/',
  it: '/it/black-friday-2026/',
};
