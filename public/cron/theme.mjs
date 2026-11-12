/** Produits retenus pour 1 Pièce 1 Ampoule : ampoules, spots, rubans et luminaires. */
const TERMES = [
  'ampoule', 'led', 'luminaire', 'lampe', 'e27', 'e14', 'gu10', 'b22', 'spot', 'applique',
  'suspension', 'ruban', 'bulb', 'leuchtmittel', 'lampe',
];

export function concerneLeSite(nom) {
  const s = String(nom || '').toLowerCase().normalize('NFD').replace(/\p{M}/gu, '');
  return TERMES.some((mot) => s.includes(mot));
}
