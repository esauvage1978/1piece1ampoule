// Offres vérifiées (API Awin Promotions, relevé du 23/10/2026, liens contrôlés le 23/10/2026).
// 26/10/2026 : offres Luminaire.fr MIDSEASON et soldes de mi-saison retirées (fin le 25/10 à 23 h 59, Paris).
// Les dates de fin sont en UTC. Une offre expirée n'est pas générée au build et est masquée côté navigateur.
export interface Promo { id: string; marchand: string; mid: number; titre: string; code?: string; details: string; debut: string; fin: string; verifie: string; lien: string; marquePage?: string }
export const PROMOS: Promo[] = [
  { id: '4103383', marchand: 'Boutique OSRAM (LEDVANCE)', mid: 98739, marquePage: '/marques/osram-ledvance/', titre: '-25 % sur les meilleures ventes OSRAM', code: 'ALLSTARS',
    details: 'Code valable sur la sélection « All Stars » de la boutique officielle OSRAM : ampoules LED, rubans et lampes les plus vendus.',
    debut: '2026-09-15T08:00:00Z', fin: '2026-10-31T22:59:00Z', verifie: '23/10/2026',
    lien: 'https://www.awin1.com/cread.php?awinmid=98739&awinaffid=3127458&ued=https%3A%2F%2Fshop.ledvance.fr%2Fcollections%2Fall-stars' },
];
export const activePromos = (now = new Date()) => PROMOS.filter((p) => new Date(p.fin) > now && new Date(p.debut) <= now);
export const frDate = (iso: string) => new Date(iso).toLocaleDateString('fr-FR', { timeZone: 'Europe/Paris', day: '2-digit', month: '2-digit', year: 'numeric' });
export const frDateTime = (iso: string) => new Date(iso).toLocaleString('fr-FR', { timeZone: 'Europe/Paris', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
