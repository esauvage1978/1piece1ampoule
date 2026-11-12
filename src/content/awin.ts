// Liens partenaires Awin (programme Luminaire FR, ID 7498, accepté le 19/10/2026).
// Catégories luminaire.fr vérifiées (HTTP 200) le 19/10/2026. Lien profond Awin, rel="sponsored nofollow".
export const AWIN_AFFID = '3127458';
export const LUMINAIRE_MID = '7498';
export function awinLink(mid: string, url: string): string {
  return `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=${AWIN_AFFID}&ued=${encodeURIComponent(url)}`;
}
export const LUMINAIRE_BY_PATH: Record<
  string,
  { path: string; label: string; blurb?: string; linkLabel?: string }
> = {
  '/pieces/salon/': { path: '/c/luminaires-par-piece/salon', label: 'luminaires pour le salon' },
  '/pieces/chambre-adulte/': { path: '/c/luminaires-par-piece/chambre', label: 'luminaires pour la chambre' },
  '/pieces/chambre-enfant/': { path: '/c/luminaires-par-piece/chambre-d-enfant', label: 'luminaires pour chambre d’enfant' },
  '/pieces/cuisine/': { path: '/c/luminaires-par-piece/cuisine', label: 'luminaires pour la cuisine' },
  '/pieces/salle-de-bain/': { path: '/c/luminaires-par-piece/salle-de-bain', label: 'luminaires pour la salle de bain' },
  '/pieces/salle-manger/': { path: '/c/luminaires-par-piece/salle-a-manger', label: 'luminaires pour la salle à manger' },
  '/pieces/couloir/': { path: '/c/luminaires-par-piece/couloir', label: 'luminaires pour le couloir' },
  '/pieces/bureau-adulte/': { path: '/c/luminaires-par-piece/bureau', label: 'luminaires pour le bureau' },
  '/pieces/bureau-enfant/': { path: '/c/luminaires-par-piece/bureau', label: 'luminaires pour le bureau' },
  '/pieces/cave-a-vin/': { path: '/c/luminaires-par-piece/cave', label: 'luminaires pour la cave' },
  '/pieces/cave-voutee/': { path: '/c/luminaires-par-piece/cave', label: 'luminaires pour la cave' },
  '/pieces/jardin/': { path: '/c/eclairage-exterieur/eclairage-jardin', label: 'éclairage de jardin' },
  '/pieces/parking/': { path: '/c/eclairage-exterieur/eclairage-allees', label: 'éclairage d’allée et de cour' },
  '/pieces/garage/': { path: '/c/eclairage-exterieur/eclairage-garage', label: 'éclairage de garage' },
  '/zones/plan-de-travail-cuisine/': { path: '/c/luminaires-par-piece/cuisine/eclairage-meuble-cuisine', label: 'éclairages sous meuble de cuisine' },
  '/zones/miroir-salle-de-bain/': { path: '/c/luminaires-par-piece/salle-de-bain/miroirs-lumineux', label: 'miroirs lumineux' },
  '/zones/entree-allee-exterieure/': { path: '/c/eclairage-exterieur/eclairage-entree-de-la-maison', label: 'éclairages d’entrée extérieure' },
  '/zones/escaliers/': { path: '/c/luminaires-par-piece/escalier', label: 'luminaires pour escalier' },
  '/meilleur/meilleur-projecteur-led-exterieur-detecteur/': { path: '/c/eclairage-exterieur/eclairage-entree-de-la-maison', label: 'éclairage d’entrée extérieure' },
  '/meilleur/meilleur-ruban-led/': {
    path: '/c/lampes-dinterieur/eclairage-led',
    label: 'éclairage LED et rubans',
    blurb: 'un large choix d’éclairage LED et de rubans',
    linkLabel: 'Voir l’éclairage LED et les rubans sur Luminaire.fr',
  },
  '/meilleur/meilleur-spot-gu10/': { path: '/c/ampoules/ampoules-gu10', label: 'ampoules GU10' },
  '/meilleur/meilleure-ampoule-connectee/': { path: '/c/maison-connectee/ampoules-connectees-et-intelligentes', label: 'ampoules connectées' },
  '/meilleur/meilleure-ampoule-led-e27/': { path: '/c/ampoules/ampoules-e27', label: 'ampoules E27' },
  '/meilleur/meilleure-applique-miroir-salle-de-bain/': { path: '/c/luminaires-par-piece/salle-de-bain/miroirs-lumineux', label: 'miroirs lumineux' },
  '/meilleur/meilleure-guirlande-guinguette/': { path: '/c/eclairage-exterieur/luminaires-de-terrasse', label: 'luminaires de terrasse' },
  '/meilleur/meilleure-lampe-de-bureau-led/': { path: '/c/luminaires-par-piece/bureau/lampes-de-table-de-travail-bureau', label: 'lampes de bureau' },
  '/meilleur/meilleure-lampe-detecteur-sans-fil/': { path: '/c/lampes-dinterieur/lampes-sans-fil', label: 'lampes sans fil' },
  '/meilleur/meilleure-lampe-solaire-exterieur/': { path: '/c/eclairage-exterieur/eclairage-jardin', label: 'éclairage de jardin' },
  '/meilleur/meilleure-reglette-led-sous-meuble/': {
    path: '/c/luminaires-par-piece/cuisine/eclairage-meuble-cuisine',
    label: 'éclairage sous meuble de cuisine',
    blurb: 'un large choix d’éclairages sous meuble de cuisine',
    linkLabel: 'Voir l’éclairage sous meuble de cuisine sur Luminaire.fr',
  },
  '/meilleur/meilleure-veilleuse-enfant/': { path: '/c/lampes-dinterieur/lampes-sur-prise-et-veilleuses', label: 'veilleuses et lampes sur prise' },
  '/articles/meilleure-ampoule-g9/': { path: '/c/ampoules/ampoules-g9', label: 'ampoules G9' },
  '/articles/e27-ou-b22/': { path: '/c/ampoules/ampoules-b22', label: 'ampoules B22' },
  '/articles/gu10-ou-gu5-3/': { path: '/c/ampoules/ampoules-gu5-3-mr16', label: 'ampoules GU5.3' },
  '/articles/ampoule-filament-vintage/': { path: '/c/ampoules/ampoules-filament', label: 'ampoules à filament' },
  '/articles/ampoule-dimmable-ou-non/': { path: '/c/ampoules/lampes-led-a-intensite-variable', label: 'ampoules LED dimmables' },
  '/articles/ampoule-connectee-wifi-ou-zigbee/': { path: '/c/maison-connectee/ampoules-connectees-et-intelligentes', label: 'ampoules connectées' },
  '/articles/choisir-spots-encastrables/': { path: '/c/lampes-dinterieur/spots-encastres-downlights', label: 'spots encastrés' },
  '/articles/lampe-de-chevet/': { path: '/c/luminaires-par-piece/chambre/lampes-de-chevet', label: 'lampes de chevet' },
  '/articles/eclairage-terrasse/': { path: '/c/eclairage-exterieur/luminaires-de-terrasse', label: 'luminaires de terrasse' },
  '/articles/installer-ruban-led/': { path: '/c/lampes-dinterieur/eclairage-led', label: 'éclairage LED et rubans' },
};

// Programme Awin OSRAM Homelighting FR (LEDVANCE), ID 98739, accepté le 20/10/2026.
// Domaine autorisé : shop.ledvance.fr. Collections vérifiées (HTTP 200) le 20/10/2026.
// Règles : pas d'enchère sur la marque, pas de code promo non fourni par l'annonceur, liens rel="sponsored nofollow".
export const OSRAM_MID = '98739';
export const OSRAM_BY_PATH: Record<string, { path: string; label: string }> = {
  '/meilleur/meilleure-ampoule-led-e27/': { path: '/collections/ampoules-e27', label: 'ampoules E27 OSRAM' },
  '/articles/ampoule-led-chauffe-duree-de-vie/': { path: '/collections/led-osram-classique', label: 'ampoules LED OSRAM classiques' },
  '/meilleur/meilleur-spot-gu10/': { path: '/collections/ampoules-gu10', label: 'spots GU10 OSRAM' },
  '/articles/gu10-ou-gu5-3/': { path: '/collections/ampoules-gu10', label: 'spots GU10 OSRAM' },
  '/meilleur/meilleure-ampoule-connectee/': { path: '/collections/ampoules-smart', label: 'ampoules connectées OSRAM' },
  '/articles/ampoule-connectee-wifi-ou-zigbee/': { path: '/collections/ampoules-smart', label: 'ampoules connectées OSRAM' },
};

// Programme Awin 2echoix (ID 31151), accepté le 22/10/2026. Produits de deuxième choix / déstockage.
// Liens produits issus du flux Awin récupéré le 22/10/2026 (prix TTC relevés ce jour-là). Aucun code promo 2echoix affiché (règle annonceur).
export const ECHOIX_MID = '31151';
export const ECHOIX_PRICE_DATE = '22/10/2026';
export const ECHOIX_BY_PATH: Record<string, { name: string; price: string; url: string }[]> = {
  '/pieces/salle-manger/': [
    { name: 'Anne Lighting Sable, suspension lin et métal Ø 60 cm, E27', price: '60,09 €', url: 'https://www.awin1.com/pclick.php?p=45114790907&a=3127458&m=31151' },
    { name: 'Globo Annika, suspension en verre ambré, E27', price: '58,99 €', url: 'https://www.awin1.com/pclick.php?p=45114790555&a=3127458&m=31151' },
  ],
  '/pieces/salon/': [
    { name: 'Lucide Gunhild, suspension 3 × E27, verre transparent', price: '79,00 €', url: 'https://www.awin1.com/pclick.php?p=46246025029&a=3127458&m=31151' },
    { name: 'Anne Lighting Capos, suspension bois et tissu Ø 48 cm, E27', price: '35,49 €', url: 'https://www.awin1.com/pclick.php?p=45114790889&a=3127458&m=31151' },
  ],
  '/pieces/couloir/': [
    { name: 'Lucide Grony, spot plafond GU10 « dim to warm » 5 W, 2 200–3 000 K', price: '12,09 €', url: 'https://www.awin1.com/pclick.php?p=45225462349&a=3127458&m=31151' },
    { name: 'Steinhauer Natasja, plafonnier 3 spots GU10 avec variateur', price: '48,99 €', url: 'https://www.awin1.com/pclick.php?p=45114790866&a=3127458&m=31151' },
  ],
  '/pieces/bureau-adulte/': [
    { name: 'Goliving, lampe de bureau à pince LED dimmable, bras 78 cm', price: '46,79 €', url: 'https://www.awin1.com/pclick.php?p=46387413556&a=3127458&m=31151' },
  ],
};

// Versions traduites : programmes Awin acceptés le 22/10/2026 (éditeur 3127458).
// Lightsin UK (106979) : luminaires, collection vérifiée HTTP 200 le 22/10/2026.
// Besselink Licht (107822, NL) : page « lichtbronnen » vérifiée HTTP 200 le 22/10/2026.
// Casa Moro DE (31431, déco orientale) et Gemax DE (59747, lames de scie) : hors sujet pour /de/, non placés.
export type TrPartner = { mid: string; url: string; title: string; text: string; cta: string; note: string; more: string; moreHref: string; name: string };
const EN_NOTE = { note: 'Partner link: I may earn a commission at no extra cost to you.', more: 'Learn more', moreHref: '/en/affiliate-disclosure/' };
const NL_NOTE = { note: 'Partnerlink: ik kan een commissie ontvangen, zonder extra kosten voor jou.', more: 'Meer informatie', moreHref: '/nl/affiliatebeleid/' };
const LIGHTSIN = { mid: '106979', name: 'Lightsin UK', url: 'https://lightsin.co.uk/collections/living-room-lighting', title: 'Looking for a new light fitting?', text: 'Lightsin UK sells pendants, ceiling lights and table lamps by room.', cta: 'See living room lighting at Lightsin UK', ...EN_NOTE };
const LIGHTS_UK = { mid: '7574', name: 'Lights.co.uk', url: 'https://www.lights.co.uk/c/light-bulbs', title: 'Need a specific LED bulb in the UK?', text: 'Lights.co.uk (Lampenwelt group) stocks LED bulbs in B22, E27, E14, GU10 and G9, with UK delivery.', cta: 'See light bulbs at Lights.co.uk', ...EN_NOTE };
const LIGHTS_IE = { mid: '10896', name: 'Lights.ie', url: 'https://www.lights.ie/c/light-bulbs', title: 'For readers in Ireland', text: 'Lights.ie offers the same Lampenwelt-range bulbs with delivery within Ireland — check the fitting (B22, E27, GU10) before you order.', cta: 'See light bulbs at Lights.ie', ...EN_NOTE };
const BESSELINK = { mid: '107822', name: 'Besselink Licht', url: 'https://www.besselinklicht.nl/lichtbronnen', title: 'Een LED-lamp kopen bij een Nederlandse lampenwinkel', text: 'Besselink Licht verkoopt LED-lichtbronnen in alle gangbare fittingen, naast binnen- en buitenverlichting.', cta: 'Bekijk de lichtbronnen bij Besselink Licht', ...NL_NOTE };
// Groupe Lampenwelt, programmes acceptés le 23/10/2026 (éditeur 3127458), redirections Awin contrôlées (HTTP 200, paramètre awc) :
// Lampara.es 10548, Lampade.it 10404, Lampen24 NL 8151, Lampen24 BE 10152, Lampenwelt CH 9373 (boutique francophone fr.lumories.ch).
// Lampenwelt DE 7619, Lampenwelt AT 9292, Lights.co.uk 7574, Lights.ie 10896 — acceptés le 04/11/2026 (éditeur 3127458), catégories ampoules vérifiées HTTP 200 le 04/11/2026.
const IT_NOTE = { note: 'Link partner: potremmo ricevere una commissione, senza costi aggiuntivi per voi.', more: 'Maggiori informazioni', moreHref: '/it/affiliazione/' };
const ES_NOTE = { note: 'Enlace de socio: podemos recibir una comisión, sin coste adicional para ti.', more: 'Más información', moreHref: '/es/afiliacion/' };
const DE_NOTE = { note: 'Partnerlink: Ich erhalte eventuell eine Provision, für dich entstehen keine Mehrkosten.', more: 'Mehr erfahren', moreHref: '/de/werbehinweis/' };
/** Mention affiliation encore présente en prod sur certaines pages DE (lien /affiliation-amazon/). */
const DE_PROD_AWIN_NOTE = { note: 'Lien partenaire Awin ·', more: 'transparence', moreHref: '/affiliation-amazon/' };
const NETZWERK_DE = { mid: '102989', name: 'Netzwerkartikel.de', url: 'https://www.netzwerkartikel.de/' };
const GETGOODS_DE = { mid: '17430', name: 'getgoods DE', url: 'https://www.getgoods.com/' };
const LAMPADE = { mid: '10404', name: 'Lampade.it', url: 'https://www.lampade.it/c/lampadine', title: 'Cercate una lampadina particolare?', text: 'Lampade.it, negozio italiano specializzato in illuminazione, offre lampadine LED in tutti gli attacchi, dalle E27 alle GU10 e G9.', cta: 'Vedi le lampadine su Lampade.it', ...IT_NOTE };
const LAMPADE_SMART = { ...LAMPADE, url: 'https://www.lampade.it/c/smart-home', title: 'Più scelta nella casa smart', text: 'Lampade.it propone lampadine e lampade smart di Philips Hue, Tapo e altri marchi, con consegna in Italia.', cta: 'Vedi la casa smart su Lampade.it' };
const LAMPARA = { mid: '10548', name: 'Lampara.es', url: 'https://www.lampara.es/c/bombillas', title: '¿Buscas una bombilla concreta?', text: 'Lampara.es, tienda especializada en iluminación, vende bombillas LED en todos los casquillos, de E27 a GU10 y G9.', cta: 'Ver las bombillas en Lampara.es', ...ES_NOTE };
const LAMPARA_SMART = { ...LAMPARA, url: 'https://www.lampara.es/c/smart-home', title: 'Más opciones para el hogar inteligente', text: 'Lampara.es reúne bombillas y lámparas inteligentes de Philips Hue, Tapo y otras marcas, con envío a España.', cta: 'Ver el hogar inteligente en Lampara.es' };
const LAMPEN24_NL = { mid: '8151', name: 'Lampen24 NL', url: 'https://www.lampen24.nl/c/lichtbronnen', title: 'Nog meer keus in lichtbronnen', text: 'Lampen24 heeft een groot assortiment LED-lampen in alle fittingen, van E27 en E14 tot GU10 en G9.', cta: 'Bekijk de lichtbronnen bij Lampen24', ...NL_NOTE };
const LAMPEN24_BE = { mid: '10152', name: 'Lampen24 BE', url: 'https://www.lampen24.be/c/lichtbronnen', title: 'Voor onze lezers in België', text: 'Lampen24.be levert hetzelfde assortiment lichtbronnen met verzending binnen België.', cta: 'Bekijk de lichtbronnen bij Lampen24.be', ...NL_NOTE };
const LAMPENWELT_CH = { mid: '9373', name: 'Lampenwelt CH', url: 'https://www.lampenwelt.ch/c/leuchtmittel', title: 'Für unsere Leserinnen und Leser in der Schweiz', text: 'Lampenwelt.ch führt LED-Leuchtmittel in allen gängigen Sockeln und liefert innerhalb der Schweiz.', cta: 'Leuchtmittel bei Lampenwelt.ch ansehen', ...DE_NOTE };
const LAMPENWELT_DE = { mid: '7619', name: 'Lampenwelt DE', url: 'https://www.lampenwelt.de/c/leuchtmittel', title: 'LED-Leuchtmittel online bestellen (DE)', text: 'Lampenwelt.de führt LED-Lampen in E27, E14, GU10, G9 und weiteren Sockeln — Versand innerhalb Deutschlands.', cta: 'Leuchtmittel bei Lampenwelt.de ansehen', ...DE_NOTE };
const LAMPENWELT_AT = { mid: '9292', name: 'Lampenwelt AT', url: 'https://www.lampenwelt.at/c/leuchtmittel', title: 'Für Leserinnen und Leser in Österreich', text: 'Lampenwelt.at liefert dasselbe Sortiment an Leuchtmitteln nach Österreich — Sockel und Kelvin auf der Produktseite prüfen.', cta: 'Leuchtmittel bei Lampenwelt.at ansehen', ...DE_NOTE };
// Formadore NL (130023), accepté le 25/10/2026 (éditeur 3127458) : déco et lampes (tafellampen, draadloze lampen).
// Redirection Awin contrôlée le 26/10/2026 (HTTP 302 vers formadore.nl avec awc), pages /lampen et /draadloze-lampen en HTTP 200.
const FORMADORE = { mid: '130023', name: 'Formadore', url: 'https://formadore.nl/lampen', title: 'Een lamp die bij je interieur past', text: 'Formadore is een Nederlandse webwinkel voor woondecoratie met een ruime keus aan tafellampen, hanglampen en vloerlampen.', cta: 'Bekijk de lampen bij Formadore', ...NL_NOTE };
const FORMADORE_DRAADLOOS = { ...FORMADORE, url: 'https://formadore.nl/draadloze-lampen', title: 'Licht zonder stopcontact', text: 'Formadore verkoopt oplaadbare, draadloze lampen: handig in een berging, schuur of hoek zonder stopcontact.', cta: 'Bekijk de draadloze lampen bij Formadore' };
// Formadore UK (130025), accepté le 25/10/2026 (éditeur 3127458). Redirection Awin contrôlée le 26/10/2026 (HTTP 302 vers formadore.co.uk/lighting avec awc), page en HTTP 200.
const FORMADORE_UK = { mid: '130025', name: 'Formadore UK', url: 'https://formadore.co.uk/lighting', title: 'A lamp that suits your interior', text: 'Formadore UK is a home decor shop with a wide choice of table lamps, pendants and floor lamps.', cta: 'See the lamps at Formadore UK', ...EN_NOTE };
// Programmes acceptés depuis le 19/10/2026 (éditeur 3127458), redirections Awin contrôlées le 26/10/2026 (HTTP 302 avec awc, page marchande en HTTP 200) :
// SimplyLED UK (5190), Lights 4 Living UK (5723), Formadore IT (130027).
const SIMPLYLED_GU10 = { mid: '5190', name: 'SimplyLED', url: 'https://www.simplyled.co.uk/lightbulbs/spotlight-bulbs/gu10/', title: 'Buying GU10 LED bulbs in the UK?', text: 'SimplyLED is a UK lighting retailer with a wide range of GU10 LED spotlight bulbs, dimmable and non-dimmable, in warm and cool white.', cta: 'See GU10 LED bulbs at SimplyLED', ...EN_NOTE };
const SIMPLYLED_BULBS = { ...SIMPLYLED_GU10, url: 'https://www.simplyled.co.uk/lightbulbs/', title: 'Need a specific LED bulb?', text: 'SimplyLED stocks LED bulbs in the common UK and European bases (B22, E27, E14, GU10, G9), with lumens and colour temperature listed on each product.', cta: 'See LED bulbs at SimplyLED' };
const LIGHTS4LIVING_BATH = { mid: '5723', name: 'Lights 4 Living', url: 'https://www.lights4living.com/bathroom-lights', title: 'Choosing a bathroom light?', text: 'Lights 4 Living is a UK lighting shop with a dedicated range of bathroom ceiling and wall lights; check the IP rating of each fitting against your bathroom zone.', cta: 'See bathroom lights at Lights 4 Living', ...EN_NOTE };
const FORMADORE_IT_SENZAFILI = { mid: '130027', name: 'Formadore IT', url: 'https://formadore.it/lampade-senza-fili', title: 'Luce senza presa di corrente', text: 'Formadore vende lampade ricaricabili senza fili: pratiche in cantina, in un ripostiglio o in un angolo senza presa.', cta: 'Vedi le lampade senza fili su Formadore', ...IT_NOTE };
// Trotec IT (115365), accepté le 30/10/2026 (éditeur 3127458). Pages marchandes vérifiées HTTP 302→200 le 30/10/2026.
const TROTEC_IT_DEUMID = { mid: '115365', name: 'Trotec IT', url: 'https://www.trotec.com/it/shop/deumidificatori.html', title: 'Umidità in cantina o in ripostiglio?', text: 'Oltre all’illuminazione a batteria, un deumidificatore Trotec aiuta a limitare muffa e condensa nelle cantine e locali chiusi.', cta: 'Vedi i deumidificatori Trotec', ...IT_NOTE };
const TROTEC_IT_MISUR = { mid: '115365', name: 'Trotec IT', url: 'https://www.trotec.com/it/shop/misurazione.html', title: 'Misurare luce e ambiente', text: 'Luxmetri e strumenti di misura Trotec per verificare i lux calcolati e controllare umidità o temperatura.', cta: 'Vedi gli strumenti di misura Trotec', ...IT_NOTE };
const TROTEC_IT_RISCALD = { mid: '115365', name: 'Trotec IT', url: 'https://www.trotec.com/it/shop/riscaldamento.html', title: 'Riscaldamento d’ambiente in inverno', text: 'Stufe e riscaldatori Trotec per rendere più confortevole uno studio o una stanza poco isolata, accanto alla luce del mattino.', cta: 'Vedi i riscaldatori Trotec', ...IT_NOTE };
const TROTEC_IT_VENT = { mid: '115365', name: 'Trotec IT', url: 'https://www.trotec.com/it/shop/ventilazione.html', title: 'Aerazione in bagno e locali umidi', text: 'Ventilatori e deumidificatori Trotec per zone IP o soggette a condensa, oltre alle lampade adatte al bagno.', cta: 'Vedi ventilazione Trotec', ...IT_NOTE };
const TROTEC_IT_LASER = { mid: '115365', name: 'Trotec IT', url: 'https://www.trotec.com/it/shop/laser.html', title: 'Strumenti laser per il fai-da-te', text: 'Livelle laser e misuratori Trotec per posare faretti o strisce LED in modo preciso.', cta: 'Vedi strumenti laser Trotec', ...IT_NOTE };
const SHELLY_ES = { mid: '128973', name: 'Shelly ES', url: 'https://www.shelly.com/es', title: 'Módulos Shelly en la tienda oficial España', text: 'Shelly vende relés, medidores y dimmers Gen4 compatibles con Home Assistant, Matter y Zigbee. Compruebe el neutro y la carga máxima antes de instalar.', cta: 'Ver la tienda Shelly España', ...ES_NOTE };
const ANTHBOT_US = { mid: '127129', name: 'Anthbot US', url: 'https://anthbot.com/', title: 'Robot lawn mower and garden paths', text: 'If you light garden paths or driveways, coordinate stake height with mowing: Anthbot (US) sells wire-free robot lawn mowers for residential lawns.', cta: 'See Anthbot US', ...EN_NOTE };
const ANTHBOT_DE = { mid: '125144', name: 'ANTHBOT DE', url: 'https://de.anthbot.com/', title: 'Mähroboter und Gartenwege', text: 'Beleuchtete Wege und Rasenroboter teilen sich denselben Garten: ANTHBOT (DE) bietet kabellose Mähroboter für Privatgärten — Kantenstecker und Spots vor der Mähgrenze planen.', cta: 'ANTHBOT Deutschland ansehen', ...DE_NOTE };
export const TR_PARTNER_BY_PATH: Record<string, TrPartner | TrPartner[]> = {
  '/en/tutorials/how-much-light-per-room-lux-foot-candles/': [LIGHTS_UK, LIGHTS_IE, FORMADORE_UK],
  '/en/guides/colour-temperature-kelvin/': [LIGHTS_UK, FORMADORE_UK],
  '/en/tutorials/replace-halogen-gu10-mr16-with-led/': [SIMPLYLED_GU10, LIGHTS_UK],
  '/en/guides/bulb-bases-b22-e26-e27-gu10/': [SIMPLYLED_BULBS, LIGHTS_UK, LIGHTS_IE],
  '/en/guides/lumens-vs-watts/': [SIMPLYLED_BULBS, LIGHTS_UK],
  '/en/guides/ip-ratings-bathroom-outdoor/': [LIGHTS4LIVING_BATH, ANTHBOT_US],
  '/it/tutorial/illuminare-cantina-senza-corrente/': [FORMADORE_IT_SENZAFILI, TROTEC_IT_DEUMID],
  '/it/tutorial/calcolare-lux-lumen-per-stanza/': [LAMPADE, TROTEC_IT_MISUR],
  '/it/guide/fototerapia-luce-mattino-inverno/': [LAMPADE, TROTEC_IT_RISCALD],
  '/it/guide/grado-ip-bagno-esterno/': [LAMPADE, TROTEC_IT_VENT],
  '/it/tutorial/striscia-led-sotto-pensili-cucina/': TROTEC_IT_LASER,
  '/nl/gidsen/lumen-watt/': [BESSELINK, LAMPEN24_NL, LAMPEN24_BE],
  '/nl/gidsen/lampfittingen-e27-e14-gu10/': [BESSELINK, LAMPEN24_NL, LAMPEN24_BE],
  '/nl/gidsen/dimbare-led-lampen/': [BESSELINK, LAMPEN24_NL, LAMPEN24_BE],
  '/nl/handleidingen/halogeen-gu10-mr16-vervangen-door-led/': [BESSELINK, LAMPEN24_NL, LAMPEN24_BE],
  '/nl/gidsen/kleurtemperatuur-kelvin/': [LAMPEN24_NL, FORMADORE, LAMPEN24_BE],
  '/nl/handleidingen/kelder-schuur-zonder-stroom-verlichten/': [FORMADORE_DRAADLOOS, LAMPEN24_NL, LAMPEN24_BE],
  '/nl/handleidingen/lux-lumen-per-ruimte-berekenen/': [FORMADORE, LAMPEN24_NL, LAMPEN24_BE],
  '/it/guide/lumen-watt/': LAMPADE,
  '/it/guide/attacchi-e27-e14-gu10/': LAMPADE,
  '/it/guide/temperatura-colore-kelvin/': LAMPADE,
  '/it/guide/lampadine-led-dimmerabili/': LAMPADE,
  '/it/tutorial/sostituire-alogene-gu10-mr16-con-led/': LAMPADE,
  '/it/guide/regalare-lampadine-smart/': LAMPADE_SMART,
  '/it/tutorial/interruttore-smart-senza-neutro/': LAMPADE_SMART,
  '/es/guias/lumenes-vatios/': LAMPARA,
  '/es/guias/casquillos-e27-e14-gu10/': LAMPARA,
  '/es/guias/temperatura-color-kelvin/': LAMPARA,
  '/es/guias/bombillas-led-regulables/': LAMPARA,
  '/es/tutoriales/sustituir-halogenos-gu10-mr16-por-led/': LAMPARA,
  '/es/guias/regalar-bombillas-inteligentes/': [LAMPARA_SMART, SHELLY_ES],
  '/es/tutoriales/interruptor-inteligente-sin-neutro/': [LAMPARA_SMART, SHELLY_ES],
  '/de/ratgeber/steinel-aussenbeleuchtung-automatisch/': ANTHBOT_DE,
  '/de/ratgeber/lumen-watt/': [LAMPENWELT_DE, LAMPENWELT_AT],
  '/de/ratgeber/lampensockel-e27-e14-gu10/': LAMPENWELT_DE,
  '/de/ratgeber/dimmbare-led-lampen/': LAMPENWELT_DE,
  '/de/anleitungen/halogen-gu10-mr16-durch-led-ersetzen/': LAMPENWELT_DE,
  '/de/ratgeber/fehlercode/hue-bridge-orange-led/': {
    ...NETZWERK_DE,
    title: 'Neues Ethernet-Kabel für die Hue Bridge',
    text: 'Netzwerkartikel.de liefert Patch- und Installationskabel in Deutschland — hilfreich, wenn die orange LED von einem defekten LAN-Kabel kommt.',
    cta: 'Patchkabel bei Netzwerkartikel.de',
    ...DE_PROD_AWIN_NOTE,
  },
  '/de/artikel/smarte-lampe-wifi-oder-zigbee/': {
    ...GETGOODS_DE,
    title: 'Smart-Home-Zubehör und Elektronik (DE/AT)',
    text: 'getgoods.de führt neben Beleuchtung auch Router, Sensoren, Werkzeug und Sicherheitstechnik — praktisch, wenn Sie Ihr Wi-Fi-Licht-Setup erweitern.',
    cta: 'getgoods.de ansehen',
    ...DE_PROD_AWIN_NOTE,
  },
};

// Version FR : Lampenwelt CH (9373) via sa boutique francophone Lumories, pour les lecteurs en Suisse.
export const CH_MID = '9373';
export const CH_FR_URL = 'https://fr.lumories.ch/c/ampoules';
export const CH_FR_PATHS = new Set(['/meilleur/meilleure-ampoule-led-e27/', '/meilleur/meilleur-spot-gu10/', '/articles/e27-ou-b22/', '/articles/gu10-ou-gu5-3/', '/articles/meilleure-ampoule-g9/', '/articles/ampoule-dimmable-ou-non/', '/articles/ampoule-filament-vintage/']);

const FR_EXTRA_NOTE = { note: 'Lien partenaire : une commission peut m’être versée, sans surcoût pour vous.', more: 'En savoir plus', moreHref: '/affiliation-amazon/' };
const DE_EXTRA_NOTE = { note: 'Partnerlink: Ich erhalte eventuell eine Provision, für dich entstehen keine Mehrkosten.', more: 'Mehr erfahren', moreHref: '/de/werbehinweis/' };

/** Partenaires Awin récents (getgoods, Netzwerkartikel, TESSAN) — pages éditoriales DE/FR. */
export const EXTRA_PARTNER_BY_PATH: Record<string, TrPartner> = {
  '/tutoriels/programmer-guirlande-lumineuse-exterieure/': {
    mid: '122030',
    name: 'TESSAN',
    url: 'https://tessan.com/',
    title: 'Multiprise et charge USB pour guirlandes',
    text: 'TESSAN vend des bandes de prises avec ports USB : pratique pour alimenter une minuterie, un module Wi‑Fi et plusieurs chargeurs depuis une seule prise extérieure protégée (indice IP de la multiprise à vérifier).',
    cta: 'Voir les multiprises TESSAN',
    ...FR_EXTRA_NOTE,
  },
  '/de/ratgeber/weihnachtsbeleuchtung-innen-aussen/': {
    mid: '122030',
    name: 'TESSAN',
    url: 'https://tessan.com/',
    title: 'Mehrere Lichterketten an einer Steckdose',
    text: 'TESSAN bietet Steckdosenleisten mit USB — hilfreich für Timer, Wi‑Fi-Steckdosen und mehrere Trafos an einer Außensteckdose (IP-Schutz der Leiste prüfen).',
    cta: 'TESSAN Mehrfachsteckdosen ansehen',
    ...DE_EXTRA_NOTE,
  },
  '/de/artikel/smarte-lampe-wifi-oder-zigbee/': {
    mid: '102989',
    name: 'Netzwerkartikel.de',
    url: 'https://www.netzwerkartikel.de/',
    title: 'Netzwerk für smarte Lampen',
    text: 'Bei vielen Zigbee- oder WLAN-Lampen brauchen Sie stabile Verkabelung bis zur Fritzbox. Netzwerkartikel.de liefert Patchkabel, Switches und Zubehör aus Deutschland.',
    cta: 'Netzwerkartikel.de',
    ...DE_EXTRA_NOTE,
  },
  '/de/ratgeber/matter-thread-matrix-philips-hue-aqara-govee/': {
    mid: '17430',
    name: 'getgoods DE',
    url: 'https://www.getgoods.com/',
    title: 'Thread-Border-Router und Bridges nachkaufen',
    text: 'getgoods.com (Versand DE/AT) führt Elektronik wie Router, Smart-Home-Hubs und Zubehör — Kompatibilität (Matter/Thread) auf der Produktseite prüfen.',
    cta: 'getgoods durchsuchen',
    ...DE_EXTRA_NOTE,
  },
  '/de/ratgeber/fehlercode/hue-bridge-orange-led/': {
    mid: '17430',
    name: 'getgoods DE',
    url: 'https://www.getgoods.com/',
    title: 'Neue Hue Bridge oder Zubehör',
    text: 'Wenn die Bridge defekt ist, brauchen Sie ein Ersatzgerät mit gleicher Generation. getgoods.com (Versand DE/AT) führt Smart-Home-Elektronik — Modellnummer vor dem Kauf vergleichen.',
    cta: 'Smart-Home bei getgoods',
    ...DE_EXTRA_NOTE,
  },
  '/guides/irc-indice-rendu-couleur/': {
    mid: '131679',
    name: 'Mylands peintures',
    url: 'https://mylands.fr/',
    title: 'Peinture murale et rendu des couleurs',
    text: 'Un IRC de 90 ou plus aide à juger une teinte de peinture au mur. Échantillons Mylands sur mylands.fr (France).',
    cta: 'Voir les peintures Mylands',
    ...FR_EXTRA_NOTE,
  },
  '/peinture/': {
    mid: '131679',
    name: 'Mylands peintures',
    url: 'https://mylands.fr/',
    title: 'Tester une peinture avant d’acheter',
    text: 'Mylands propose des échantillons et un nuancier « Couleurs de Londres » sur mylands.fr — utile avec un éclairage IRC 90.',
    cta: 'Voir Mylands',
    ...FR_EXTRA_NOTE,
  },
  '/peinture/mylands/': {
    mid: '131679',
    name: 'Mylands peintures',
    url: 'https://mylands.fr/',
    title: 'Commander sur mylands.fr',
    text: 'Peintures à l’eau, finitions eggshell ou mat, livraison depuis l’entrepôt français.',
    cta: 'Ouvrir mylands.fr',
    ...FR_EXTRA_NOTE,
  },
  '/peinture/peinture-eclairage-couleur-finition/': {
    mid: '131679',
    name: 'Mylands peintures',
    url: 'https://mylands.fr/',
    title: 'Échantillon sous vos ampoules',
    text: 'Collez un échantillon Mylands et observez-le à 2700 K et 4000 K avant de peindre toute la pièce.',
    cta: 'Commander des échantillons',
    ...FR_EXTRA_NOTE,
  },
  '/guides/kelvin-temperature-couleur/': {
    mid: '131679',
    name: 'Mylands peintures',
    url: 'https://mylands.fr/',
    title: 'Tester une teinte sous la bonne lumière',
    text: 'Une peinture change selon la température de couleur (2700 K ou 4000 K). Mylands propose des échantillons sur mylands.fr à tester sous vos ampoules.',
    cta: 'Commander des échantillons Mylands',
    ...FR_EXTRA_NOTE,
  },
  '/tutoriels/calculer-eclairage-piece-lux/': {
    mid: '131679',
    name: 'Mylands peintures',
    url: 'https://mylands.fr/',
    title: 'Repeindre en couleur foncée',
    text: 'Un mur foncé augmente le coefficient K : il faut plus de lumens. Mylands (mylands.fr) vend des peintures de décoration avec nuancier.',
    cta: 'Voir Mylands',
    ...FR_EXTRA_NOTE,
  },
};
