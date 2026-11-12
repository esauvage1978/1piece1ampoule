// Questions fréquentes de saison (heure d'hiver, fin 2026). Chiffres alignés sur le simulateur /outils/ et le tutoriel lux.
type F = { q: string; a: string };
const lumensSalon: F[] = [
  { q: 'Combien de lumens pour un salon de 20 m² ?', a: 'Compte environ 1 800 à 3 200 lumens au total, répartis sur trois ou quatre sources (plafonnier, lampadaire, lampes d’appoint). Avec deux ampoules E27 de 1 055 lm et une lampe de lecture de 806 lm, tu es à un peu moins de 3 000 lm, ce qui suffit dans la plupart des salons aux murs clairs.' },
  { q: 'Combien de lumens pour un salon de 15 m² ?', a: 'Environ 1 500 à 2 400 lumens : par exemple un plafonnier de 1 521 lm et une lampe d’ambiance de 806 lm. Préfère du dimmable, car un petit salon devient vite éblouissant le soir.' },
  { q: 'Combien de lumens pour un salon de 25 m² ?', a: 'Prévois 2 500 à 4 000 lumens répartis sur au moins quatre points lumineux. Si tu veux 100 lux partout pour lire n’importe où, le calcul complet (pertes, murs, hauteur) monte à environ 6 750 lm : c’est rarement utile, mieux vaut une lampe de lecture là où tu lis.' },
  { q: 'Combien de lumens pour un salon de 30 m² ou une pièce de vie ouverte ?', a: 'Entre 3 000 et 4 800 lumens pour l’ambiance, plus l’éclairage propre de la cuisine ouverte (plan de travail à part). Découpe la pièce en zones : chaque coin canapé, table et lecture a sa source.' },
];
const kelvinChambre: F = { q: 'Quelle température de couleur pour une chambre en hiver ?', a: '2 700 K, voire 2 200 K pour la lampe de chevet le soir : une lumière chaude et tamisée gêne moins l’endormissement qu’un blanc neutre. Pour le réveil, quand il fait encore nuit, une ampoule à blanc réglable peut monter vers 4 000 K le matin.' };
const kelvinTeletravail: F = { q: 'Quelle température de couleur pour télétravailler en hiver ?', a: 'Un blanc neutre de 4 000 K sur le bureau en journée, avec environ 500 lux sur le plan de travail (le niveau visé pour lire et écrire). Passé 18 h, redescends vers 2 700 à 3 000 K pour la fin de journée.' };
export const HIVER_FAQ: Record<string, F[]> = {
  outils: [...lumensSalon.slice(0, 3), kelvinChambre, kelvinTeletravail,
    { q: 'Combien de lumens pour une chambre de 12 m² ?', a: 'Environ 900 à 1 800 lumens : un plafonnier de 806 à 1 055 lm et une lampe de chevet de 250 à 470 lm de chaque côté.' }],
  salon: lumensSalon,
  'chambre-adulte': [kelvinChambre,
    { q: 'Combien de lumens pour une chambre de 12 m² ?', a: 'Environ 900 à 1 800 lumens au total : un plafonnier de 806 à 1 055 lm pour ranger et s’habiller, et une lampe de chevet de 250 à 470 lm de chaque côté du lit.' },
    { q: 'Faut-il une lumière plus forte en hiver dans la chambre ?', a: 'Pas le soir : c’est plutôt le matin que la lumière manque. Une ampoule connectée programmée pour s’allumer progressivement 20 à 30 minutes avant le réveil aide à se lever quand il fait encore nuit.' }],
  'bureau-adulte': [kelvinTeletravail,
    { q: 'Combien de lumens pour un bureau de télétravail de 10 m² ?', a: 'Environ 3 000 à 5 000 lumens au total : un plafonnier ou une suspension pour la pièce, plus une lampe de bureau de 500 à 1 000 lm orientée sur le plan de travail, placée du côté opposé à la main qui écrit.' },
    { q: 'Comment éviter les reflets sur l’écran en hiver ?', a: 'Place l’écran perpendiculaire à la fenêtre et évite une source nue derrière toi. Une lampe avec abat-jour ou un éclairage indirect au plafond donne une lumière plus homogène.' }],
  'tuto-lux': [...lumensSalon.slice(0, 3), kelvinTeletravail],
  'codes-promo': [
    { q: 'Quand a lieu le Black Friday 2026 ?', a: 'Le vendredi 27 novembre 2026, suivi du Cyber Monday le lundi 30 novembre. Les offres commencent souvent quelques jours avant : nous les ajoutons ici dès qu’elles sont confirmées par les marques, avec leur date de fin.' },
    { q: 'Y a-t-il déjà un pack Philips Hue en promotion pour le Black Friday 2026 ?', a: 'Pas à ce jour sur nos partenaires. Pour juger une future offre, comparez au prix habituel d’un kit de démarrage (pont + ampoules) et vérifiez le culot (E27, GU10) et le type (White, White Ambiance ou couleur). Voir notre comparatif <a href="/meilleur/meilleure-ampoule-connectee/">ampoules connectées</a> et le guide <a href="/articles/ampoule-connectee-wifi-ou-zigbee/">Wi-Fi ou Zigbee</a>.' },
    { q: 'Quels bons plans éclairage sont valables en ce moment ?', a: 'Ceux affichés en haut de cette page, avec leur date de fin. Dès qu’une offre expire, elle disparaît automatiquement ; les partenaires sans code affichent un lien vers leurs offres en cours sur le site marchand.' }],
  'philips-hue': [
    { q: 'Faut-il un pont Hue Bridge pour utiliser des ampoules Philips Hue ?', a: 'Non : les ampoules Hue récentes se pilotent en Bluetooth depuis l’application, dans la limite de 10 ampoules et à portée du téléphone. Le pont devient utile pour piloter jusqu’à 50 lampes, à distance hors de chez toi, et pour des automatisations fiables (réveil progressif, allumage au coucher du soleil).' },
    { q: 'Pack Philips Hue Black Friday 2026 : lequel viser ?', a: 'Pour débuter, un kit de démarrage White Ambiance E27 (blanc réglable de 2 200 à 6 500 K) avec pont couvre le salon et la chambre. Les ampoules couleur coûtent nettement plus cher pour un usage surtout décoratif. Nous publierons sur la page codes promo les offres confirmées, avec leur date de fin.' },
    { q: 'Philips Hue ou Tapo pour un premier équipement ?', a: 'Tapo (Wi-Fi, sans pont) revient moins cher et suffit pour deux ou trois ampoules. Hue est plus cher mais plus fiable sur une maison entière, avec de meilleurs blancs et un vaste choix de culots et de luminaires.' }],
  'meilleure-ampoule-connectee': [
    { q: 'Hue Bridge, Bluetooth ou Wi-Fi : quelle ampoule connectée choisir ?', a: 'Une ou deux ampoules : une Tapo en Wi-Fi ou une Hue en Bluetooth suffit, sans boîtier. Au-delà de cinq ou six ampoules, ou pour des scénarios automatiques, le pont Hue (Zigbee) est plus stable et ne charge pas ta box Wi-Fi.' },
    { q: 'Quelles ampoules connectées regarder pour le Black Friday 2026 (27 novembre) ?', a: 'Les Philips Hue de ce comparatif, en particulier la White Ambiance pour le blanc réglable ; hors comparatif, la Tapo L530E pour la couleur en Wi-Fi à petit prix. Vérifie le culot et le flux en lumens avant de comparer les prix.' },
    { q: 'Une ampoule connectée aide-t-elle à mieux vivre l’heure d’hiver ?', a: 'Oui sur deux points : un réveil lumineux progressif le matin quand il fait nuit, et un passage automatique en lumière chaude le soir. Les deux se programment dans l’application Hue ou Tapo.' }],
};
