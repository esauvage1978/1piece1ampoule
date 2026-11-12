// Pages « Marque ».
export type Marque = { slug: string; name: string; aliases: string[]; type: string; produits: string; garantie: string; avis: string; promoMid?: number };
export const MARQUES: Marque[] = [
  { slug: 'philips-hue', name: 'Philips Hue', aliases: ['Philips Hue'], type: 'Fabricant (éclairage connecté)', produits: '3 ampoules E27 connectées', garantie: '2 ans fabricant', avis: 'La référence pour un éclairage connecté évolutif ; IRC 80 seulement.' },
  { slug: 'osram-ledvance', name: 'OSRAM (LEDVANCE)', aliases: ['Osram', 'OSRAM'], type: 'Fabricant + boutique partenaire', produits: 'Ampoule radar Star A75 + boutique officielle', garantie: '3 à 5 ans selon la gamme (lampes)', avis: 'Fiches techniques complètes et garanties longues sur les gammes listées.', promoMid: 98739 },
  { slug: 'luminaire-fr', name: 'Luminaire.fr', aliases: [], type: 'Marchand partenaire', produits: 'Catalogue luminaires, ampoules, extérieur', garantie: 'Retour 30 jours + garanties fabricants', avis: 'Très large choix multimarque ; retours à vos frais.', promoMid: 7498 },
  { slug: 'steinel', name: 'Steinel', aliases: ['STEINEL', 'Steinel'], type: 'Fabricant (détecteurs, extérieur)', produits: '5 produits (applique solaire, détecteurs, applique)', garantie: '3 ans fabricant (5 ans XLED home)', avis: 'Le spécialiste des détecteurs ; lisez bien le rôle de chaque produit.' },
  { slug: 'tapo', name: 'Tapo (TP-Link)', aliases: ['Tapo'], type: 'Fabricant (connecté Wi-Fi)', produits: 'Ampoule Wi-Fi L530E (seule ou par 2)', garantie: '2 ans TP-Link France', avis: 'Le moins cher pour débuter sans pont ; classe F.' },
  { slug: 'imalent', name: 'Imalent', aliases: ['Imalent', 'IMALENT'], type: 'Fabricant (lampes torches LED)', produits: 'Test GR35 (torche 4 en 1 + coffret)', garantie: 'À confirmer auprès du vendeur', avis: 'Torche puissante et simple d’emploi ; notice pas toujours en français.' },
];
export const brandPage = (brand: string) => MARQUES.find((m) => m.aliases.includes(brand));
