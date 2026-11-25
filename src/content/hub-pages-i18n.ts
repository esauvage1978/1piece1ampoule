/** Textes communs des pages hub (outils, marques, légal) — 8 locales site. */
export type HubLang = 'fr' | 'en' | 'uk' | 'ca' | 'de' | 'nl' | 'es' | 'it';

export type HubToolLink = { href: string; title: string; desc: string };

const base = (lang: HubLang) => (lang === 'uk' || lang === 'ca' ? 'en' : lang);

export const HUB_TOOLS: Record<HubLang, {
  kicker: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  garage: string;
  living: string;
  calc: string;
  otherTitle: string;
  faqTitle: string;
  linksGuide: Record<string, string>;
  affNote: string;
  affHref: string;
  depannageHref: string;
  depannageLabel: string;
  illuAlt: string;
  tools: HubToolLink[];
}> = {
  fr: {
    kicker: 'Outil gratuit',
    title: 'Simulateur d’éclairage : lumens, Kelvin et IRC par pièce',
    description: 'Visualise en temps réel l’effet des lumens, de la température de couleur (Kelvin) et de l’IRC dans une cuisine, un salon, une chambre, une salle de bain, un bureau ou un garage.',
    h1: 'Simulateur d’éclairage pièce par pièce',
    lead: 'Vois avant d’acheter : combien de lumens, quelle teinte et quel IRC pour ta pièce.',
    garage: 'Forte intensité, blanc neutre ou froid, et IRC élevé si tu veux bien voir les détails (outils, marquages, peinture).',
    living: 'Teinte chaude et intensité moyenne, avec un variateur pour moduler le soir. Préfère plusieurs sources pour éviter les zones sombres.',
    calc: 'Les plages viennent des niveaux d’éclairement usuels (lux) multipliés par une surface type. La simulation est indicative : l’écran ne reproduit pas exactement une vraie lumière.',
    otherTitle: 'Autres outils gratuits',
    faqTitle: 'Lumens et Kelvin : les questions qu’on nous pose le plus',
    linksGuide: { lumens: '/guides/lumens-vs-watts/', kelvin: '/guides/kelvin-temperature-couleur/', cri: '/guides/irc-indice-rendu-couleur/', lux: '/tutoriels/calculer-eclairage-piece-lux/' },
    affNote: 'Le simulateur peut proposer des ampoules Amazon en bout de parcours : liens partenaires',
    affHref: '/affiliation-amazon/',
    depannageHref: '/guides/codes-erreurs-eclairage-connecte-depannage/',
    depannageLabel: 'répertoire des codes erreurs',
    illuAlt: 'Schéma : curseurs lumens, Kelvin et IRC pour une pièce type',
    tools: [
      { href: '/peinture/preparation-murs-poncage-enduit-sous-couche/#calculateur', title: 'Calculateur quantité peinture', desc: 'Litres selon m², couches et rendement m²/L.' },
      { href: '/outils/convertisseur-lux-lumens-watts-surface/', title: 'Convertisseur Lux ↔ Lumens ↔ Watts', desc: 'Surface, type de pièce et couleur des murs.' },
      { href: '/outils/equivalence-halogene-led-gu10-e27-lumens/', title: 'Équivalence halogène / LED', desc: 'Watts halogène → lumens LED, angle et IRC.' },
      { href: '/outils/calculateur-ruban-led-alimentation-24v/', title: 'Calculateur ruban LED 12V / 24V', desc: 'Longueur, chute de tension et alimentation +20 %.' },
      { href: '/outils/generateur-plan-eclairage-cuisine-pdf/', title: 'Plan d’éclairage cuisine (PDF)', desc: 'Zones lux, GU10, ruban 24 V, Kelvin et IRC ≥ 90.' },
      { href: '/outils/calculateur-roi-relamping-led-professionnel/', title: 'ROI relamping LED pro', desc: 'kWh, maintenance et retour sur investissement.' },
    ],
  },
  en: {
    kicker: 'Free tool',
    title: 'Lighting simulator: lumens, colour temperature and CRI room by room',
    description: 'See how lumens, colour temperature (Kelvin) and CRI change the look of a living room, bedroom, kitchen, bathroom, home office or garage, before you buy a bulb.',
    h1: 'Lighting simulator, room by room',
    lead: 'See it before you buy: how many lumens, which shade of white and what CRI your room needs.',
    garage: 'Plenty of light, neutral or cool white, and a high CRI if you need to see detail: tools, markings, paint.',
    living: 'Warm white at medium output, with a dimmer for the evening. Several light sources beat one bright ceiling light.',
    calc: 'The ranges are based on usual illuminance levels (lux) multiplied by a typical floor area. Treat the result as a guide: a screen cannot reproduce real light exactly.',
    otherTitle: 'More free lighting tools',
    faqTitle: 'Lumens and Kelvin: questions we hear most often',
    linksGuide: { lumens: '/en/guides/lumens-vs-watts/', kelvin: '/en/guides/colour-temperature-kelvin/', cri: '/en/guides/cri-colour-rendering-index/', lux: '/en/tutorials/how-much-light-per-room-lux-foot-candles/' },
    affNote: 'The simulator may suggest Amazon bulbs at the end of the flow: partner links',
    affHref: '/en/affiliate-disclosure/',
    depannageHref: '/en/guides/error-codes/',
    depannageLabel: 'smart lighting error code directory',
    illuAlt: 'Diagram: lumens, Kelvin and CRI sliders for a typical room',
    tools: [
      { href: '/en/tools/lux-lumen-watt-room-converter/', title: 'Lux ↔ lumen ↔ watt converter', desc: 'Floor area, room type and wall colour.' },
      { href: '/en/tools/halogen-led-equivalence-gu10-e27-lumens/', title: 'Halogen to LED equivalence', desc: 'Halogen watts to real LED lumens.' },
      { href: '/en/tools/led-strip-power-supply-calculator/', title: 'LED strip power supply', desc: 'COB or SMD length, voltage drop and PSU headroom.' },
      { href: '/en/tools/kitchen-lighting-plan-generator-pdf/', title: 'Kitchen lighting plan (PDF)', desc: 'Worktop lux zones, GU10, 24 V strip, CRI ≥ 90.' },
      { href: '/en/tools/led-relamping-roi-calculator/', title: 'LED relamping ROI', desc: 'Payback for offices, shops and workshops.' },
    ],
  },
  uk: {
    kicker: 'Free tool',
    title: 'Lighting simulator: lumens, colour temperature and CRI room by room',
    description: 'See how lumens, colour temperature (Kelvin) and CRI change the look of a living room, bedroom, kitchen, bathroom, home office or garage, before you buy a bulb.',
    h1: 'Lighting simulator, room by room',
    lead: 'See it before you buy: how many lumens, which shade of white and what CRI your room needs.',
    garage: 'Plenty of light, neutral or cool white, and a high CRI if you need to see detail: tools, markings, paint.',
    living: 'Warm white at medium output, with a dimmer for the evening. Several light sources beat one bright ceiling light.',
    calc: 'The ranges are based on usual illuminance levels (lux) multiplied by a typical floor area. Treat the result as a guide: a screen cannot reproduce real light exactly.',
    otherTitle: 'More free lighting tools',
    faqTitle: 'Lumens and Kelvin: questions we hear most often',
    linksGuide: { lumens: '/uk/guides/lumens-vs-watts/', kelvin: '/uk/guides/colour-temperature-kelvin/', cri: '/uk/guides/cri-colour-rendering-index/', lux: '/uk/tutorials/how-much-light-per-room-lux-foot-candles/' },
    affNote: 'The simulator may suggest Amazon bulbs at the end of the flow: partner links',
    affHref: '/uk/affiliate-disclosure/',
    depannageHref: '/uk/guides/error-codes/',
    depannageLabel: 'smart lighting error code directory',
    illuAlt: 'Diagram: lumens, Kelvin and CRI sliders for a typical room',
    tools: [
      { href: '/uk/tools/lux-lumen-watt-room-converter/', title: 'Lux ↔ lumen ↔ watt converter', desc: 'Floor area, room type and wall colour.' },
      { href: '/uk/tools/halogen-led-equivalence-gu10-e27-lumens/', title: 'Halogen to LED equivalence', desc: 'Halogen watts to real LED lumens.' },
      { href: '/uk/tools/led-strip-power-supply-calculator/', title: 'LED strip power supply', desc: 'COB or SMD length, voltage drop and PSU headroom.' },
      { href: '/uk/tools/kitchen-lighting-plan-generator-pdf/', title: 'Kitchen lighting plan (PDF)', desc: 'Worktop lux zones, GU10, 24 V strip, CRI ≥ 90.' },
      { href: '/uk/tools/led-relamping-roi-calculator/', title: 'LED relamping ROI', desc: 'Payback for offices, shops and workshops.' },
    ],
  },
  ca: {
    kicker: 'Free tool',
    title: 'Lighting simulator: lumens, colour temperature and CRI room by room',
    description: 'See how lumens, colour temperature (Kelvin) and CRI change the look of a living room, bedroom, kitchen, bathroom, home office or garage, before you buy a bulb.',
    h1: 'Lighting simulator, room by room',
    lead: 'See it before you buy: how many lumens, which shade of white and what CRI your room needs.',
    garage: 'Plenty of light, neutral or cool white, and a high CRI if you need to see detail: tools, markings, paint.',
    living: 'Warm white at medium output, with a dimmer for the evening. Several light sources beat one bright ceiling light.',
    calc: 'The ranges are based on usual illuminance levels (lux) multiplied by a typical floor area. Treat the result as a guide: a screen cannot reproduce real light exactly.',
    otherTitle: 'More free lighting tools',
    faqTitle: 'Lumens and Kelvin: questions we hear most often',
    linksGuide: { lumens: '/ca/guides/lumens-vs-watts/', kelvin: '/ca/guides/colour-temperature-kelvin/', cri: '/ca/guides/cri-colour-rendering-index/', lux: '/ca/tutorials/how-much-light-per-room-lux-foot-candles/' },
    affNote: 'The simulator may suggest Amazon bulbs at the end of the flow: partner links',
    affHref: '/ca/affiliate-disclosure/',
    depannageHref: '/ca/guides/error-codes/',
    depannageLabel: 'smart lighting error code directory',
    illuAlt: 'Diagram: lumens, Kelvin and CRI sliders for a typical room',
    tools: [
      { href: '/ca/tools/lux-lumen-watt-room-converter/', title: 'Lux ↔ lumen ↔ watt converter', desc: 'Floor area, room type and wall colour.' },
      { href: '/ca/tools/halogen-led-equivalence-gu10-e27-lumens/', title: 'Halogen to LED equivalence', desc: 'Halogen watts to real LED lumens.' },
      { href: '/ca/tools/led-strip-power-supply-calculator/', title: 'LED strip power supply', desc: 'COB or SMD length, voltage drop and PSU headroom.' },
      { href: '/ca/tools/kitchen-lighting-plan-generator-pdf/', title: 'Kitchen lighting plan (PDF)', desc: 'Worktop lux zones, GU10, 24 V strip, CRI ≥ 90.' },
      { href: '/ca/tools/led-relamping-roi-calculator/', title: 'LED relamping ROI', desc: 'Payback for offices, shops and workshops.' },
    ],
  },
  de: {
    kicker: 'Kostenloses Werkzeug',
    title: 'Lichtsimulator: Lumen, Kelvin und Farbwiedergabe für jeden Raum',
    description: 'Sehen Sie vor dem Kauf, wie Lumen, Farbtemperatur (Kelvin) und Farbwiedergabe (CRI) Wohnzimmer, Schlafzimmer, Küche, Bad, Arbeitszimmer oder Garage verändern.',
    h1: 'Lichtsimulator für jeden Raum',
    lead: 'Erst ansehen, dann kaufen: wie viele Lumen, welches Weiß und welche Farbwiedergabe Ihr Raum braucht.',
    garage: 'Viel Licht, neutral- oder kaltweiß, und ein hoher CRI-Wert, wenn Details zählen.',
    living: 'Warmweiß bei mittlerer Helligkeit, abends mit Dimmer. Mehrere Lichtquellen sind besser als eine starke Deckenleuchte.',
    calc: 'Die Bereiche beruhen auf üblichen Beleuchtungsstärken (Lux) mal einer typischen Raumfläche.',
    otherTitle: 'Weitere kostenlose Werkzeuge',
    faqTitle: 'Lumen und Kelvin: häufige Fragen',
    linksGuide: { lumens: '/de/ratgeber/lumen-watt/', kelvin: '/de/ratgeber/farbtemperatur-kelvin/', cri: '/de/ratgeber/farbwiedergabe-cri-ra/', lux: '/de/anleitungen/lux-lumen-pro-raum-berechnen/' },
    affNote: 'Der Simulator kann am Ende Amazon-Lampen vorschlagen: Partnerlinks',
    affHref: '/de/werbehinweis/',
    depannageHref: '/de/ratgeber/fehlercodes/',
    depannageLabel: 'Fehlercode-Verzeichnis',
    illuAlt: 'Schema: Lumen-, Kelvin- und CRI-Regler für einen Beispielraum',
    tools: [
      { href: '/de/werkzeuge/lux-lumen-watt-raum-umrechner/', title: 'Lux ↔ Lumen ↔ Watt', desc: 'Fläche, Raumtyp und Wandfarbe.' },
      { href: '/de/werkzeuge/halogen-led-aequivalenz-gu10-e27-lumen/', title: 'Halogen-LED-Äquivalenz', desc: 'Halogenwatt zu echten LED-Lumen.' },
      { href: '/de/werkzeuge/halogen-led-aequivalenz-gu10-e27-lumen/', title: 'Halogen-LED-Äquivalenz', desc: 'GU10, E27 und Lumen für Relamping.' },
      { href: '/de/werkzeuge/kuechenbeleuchtung-plan-pdf/', title: 'Küchenlichtplan (PDF)', desc: 'Arbeitsflächen-Lux, GU10, 24-V-Streifen.' },
      { href: '/de/werkzeuge/led-relamping-roi/', title: 'ROI LED-Umrüstung', desc: 'Amortisation für Gewerbe und Büros.' },
    ],
  },
  nl: {
    kicker: 'Gratis tool',
    title: 'Lichtsimulator: lumen, kelvin en kleurweergave per ruimte',
    description: 'Zie vóór je koopt wat lumen, kleurtemperatuur (kelvin) en kleurweergave (CRI) doen in woonkamer, slaapkamer, keuken, badkamer, werkkamer of garage.',
    h1: 'Lichtsimulator per ruimte',
    lead: 'Eerst zien, dan kopen: hoeveel lumen, welk wit en welke kleurweergave je ruimte nodig heeft.',
    garage: 'Veel licht, neutraal of koel wit, en een hoge CRI als je details wilt zien.',
    living: 'Warm wit op gemiddelde sterkte, met een dimmer voor de avond. Meerdere lichtbronnen werken beter dan één felle plafondlamp.',
    calc: 'De bereiken zijn gebaseerd op gangbare verlichtingssterktes (lux) maal een gemiddelde vloeroppervlakte.',
    otherTitle: 'Meer gratis tools',
    faqTitle: 'Lumen en Kelvin: veelgestelde vragen',
    linksGuide: { lumens: '/nl/gidsen/lumen-watt/', kelvin: '/nl/gidsen/kleurtemperatuur-kelvin/', cri: '/nl/gidsen/kleurweergave-cri-ra/', lux: '/nl/handleidingen/lux-lumen-per-ruimte-berekenen/' },
    affNote: 'De simulator kan Amazon-lampen voorstellen: partnerlinks',
    affHref: '/nl/affiliatebeleid/',
    depannageHref: '/nl/gidsen/foutcodes/',
    depannageLabel: 'foutcode-overzicht',
    illuAlt: 'Schema: lumen-, kelvin- en CRI-regelaars voor een voorbeeldruimte',
    tools: [
      { href: '/nl/tools/lux-lumen-watt-ruimte-omrekenen/', title: 'Lux ↔ lumen ↔ watt', desc: 'Oppervlakte, ruimtetype en wandkleur.' },
      { href: '/nl/tools/halogen-led-equivalent-gu10-e27-lumen/', title: 'Halogeen-LED-equivalent', desc: 'Halogeenwatt naar echte LED-lumen.' },
      { href: '/nl/tools/ledstrip-voeding-calculator/', title: 'LED-strip voeding', desc: 'Lengte, spanningsval en voeding +20 %.' },
      { href: '/nl/tools/keuken-verlichtingsplan-pdf/', title: 'Keukenverlichtingsplan (PDF)', desc: 'Werkblad-lux, GU10, 24 V strip.' },
      { href: '/nl/tools/roi-relamping-led/', title: 'ROI LED-vervanging', desc: 'Terugverdientijd voor winkels en kantoren.' },
    ],
  },
  es: {
    kicker: 'Herramienta gratuita',
    title: 'Simulador de luz: lúmenes, kelvin y CRI por estancia',
    description: 'Vea el efecto de lúmenes, temperatura de color (kelvin) y CRI en salón, dormitorio, cocina, baño, despacho o garaje antes de comprar.',
    h1: 'Simulador de iluminación por estancia',
    lead: 'Véalo antes de comprar: cuántos lúmenes, qué blanco y qué CRI necesita su habitación.',
    garage: 'Mucha luz, blanco neutro o frío y CRI alto si necesita ver detalles.',
    living: 'Blanco cálido a intensidad media, con regulador por la noche. Varias fuentes superan una sola plafonera potente.',
    calc: 'Los rangos parten de niveles de lux habituales multiplicados por una superficie tipo.',
    otherTitle: 'Más herramientas gratuitas',
    faqTitle: 'Lúmenes y Kelvin: preguntas frecuentes',
    linksGuide: { lumens: '/es/guias/lumenes-vatios/', kelvin: '/es/guias/temperatura-color-kelvin/', cri: '/es/guias/reproduccion-cromatica-cri-ra/', lux: '/es/tutoriales/calcular-lux-lumen-por-estancia/' },
    affNote: 'El simulador puede sugerir bombillas en Amazon: enlaces de afiliación',
    affHref: '/es/afiliacion/',
    depannageHref: '/es/guias/codigos-error/',
    depannageLabel: 'repertorio de códigos de error',
    illuAlt: 'Esquema: controles de lúmenes, kelvin y CRI para una estancia tipo',
    tools: [
      { href: '/es/herramientas/convertidor-lux-lumen-vatio-superficie/', title: 'Convertidor lux ↔ lúmenes', desc: 'Superficie, tipo de estancia y color de pared.' },
      { href: '/es/herramientas/equivalencia-halogeno-led-gu10-e27-lumenes/', title: 'Equivalencia halógeno LED', desc: 'Watts halógeno a lúmenes LED reales.' },
      { href: '/es/herramientas/plan-iluminacion-cocina-pdf/', title: 'Plan de iluminación cocina (PDF)', desc: 'Zonas de lux, GU10 y tira 24 V.' },
      { href: '/es/herramientas/roi-relamping-led/', title: 'ROI relamping LED', desc: 'Retorno de inversión en comercios y oficinas.' },
    ],
  },
  it: {
    kicker: 'Strumento gratuito',
    title: 'Simulatore di illuminazione: lumen, kelvin e CRI stanza per stanza',
    description: 'Simulatore prima dell’acquisto: lumen, kelvin e CRI stanza per stanza. Strumento gratuito, con i limiti di un calcolo indicativo.',
    h1: 'Simulatore di illuminazione stanza per stanza',
    lead: 'Vedere prima di comprare: quanti lumen, quale bianco e quale CRI servono alla vostra stanza.',
    garage: 'Tanta luce, bianco neutro o freddo, e CRI alto se servono i dettagli: attrezzi, segni, vernice.',
    living: 'Bianco caldo a intensità media, con un dimmer per la sera. Più punti luce funzionano meglio di una sola plafoniera potente.',
    calc: 'Gli intervalli partono dai livelli di illuminamento abituali (lux) moltiplicati per una superficie tipica.',
    otherTitle: 'Altri strumenti gratuiti',
    faqTitle: 'Lumen e Kelvin: domande frequenti',
    linksGuide: { lumens: '/it/guide/lumen-watt/', kelvin: '/it/guide/temperatura-colore-kelvin/', cri: '/it/guide/resa-cromatica-cri-ra/', lux: '/it/tutorial/calcolare-lux-lumen-per-stanza/' },
    affNote: 'Il simulatore può suggerire lampadine Amazon: link partner',
    affHref: '/it/affiliazione/',
    depannageHref: '/it/guide/codici-errore/',
    depannageLabel: 'repertorio codici errore',
    illuAlt: 'Schema: cursori lumen, kelvin e CRI per una stanza tipo',
    tools: [
      { href: '/it/strumenti/convertitore-lux-lumen-watt-superficie/', title: 'Convertitore lux ↔ lumen', desc: 'Superficie, tipo di stanza e colore pareti.' },
      { href: '/it/strumenti/equivalenza-alogeno-led-gu10-e27-lumen/', title: 'Equivalenza alogena LED', desc: 'Watt alogeno a lumen LED reali.' },
      { href: '/it/strumenti/piano-illuminazione-cucina-pdf/', title: 'Piano illuminazione cucina (PDF)', desc: 'Zone lux, GU10 e striscia 24 V.' },
      { href: '/it/strumenti/roi-relamping-led/', title: 'ROI relamping LED', desc: 'Ritorno dell’investimento per attività.' },
    ],
  },
};

export const HUB_BRANDS: Record<HubLang, {
  kicker: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  tableTitle: string;
  th: [string, string, string, string, string];
  promoLink: string;
  osramCta: string;
  osramHref: string;
  promoPage: string;
  promoPageLabel: string;
  faqTitle: string;
  illuAlt: string;
  legalNote: string;
}> = {
  fr: {
    kicker: 'Marques',
    title: 'Marques et marchands : nos avis, garanties et SAV en France',
    description: 'Philips Hue, OSRAM, Steinel, Tapo, Imalent et Luminaire.fr : produits cités sur 1 pièce 1 ampoule, garantie et SAV en France.',
    h1: 'Les marques et marchands de nos comparatifs',
    lead: 'Avant d’acheter une ampoule, un spot ou un détecteur, il est utile de savoir à qui l’on a affaire : garantie, retours et limites de chaque marque que nous citons.',
    tableTitle: 'Tableau résumé',
    th: ['Marque', 'Type', 'Sur le site', 'Garantie / retours', 'Notre avis'],
    promoLink: 'code promo en cours',
    osramCta: 'Boutique OSRAM LEDVANCE (partenaire)',
    osramHref: 'https://www.awin1.com/cread.php?awinmid=98739&awinaffid=3127458&ued=https%3A%2F%2Fshop.ledvance.fr%2Fcollections%2Fall-stars',
    promoPage: '/codes-promo/',
    promoPageLabel: 'Codes promo',
    faqTitle: 'Marques éclairage : questions fréquentes',
    illuAlt: 'Illustration : ampoules et marques citées dans nos guides',
    legalNote: 'La garantie légale de conformité de 2 ans s’applique toujours auprès du vendeur, en plus de toute garantie commerciale.',
  },
  en: {
    kicker: 'Brands',
    title: 'Brands and merchants: Hue, OSRAM, Steinel, Tapo, Luminaire.fr',
    description: 'Summary table: product focus, warranty/returns, one-line verdict. OSRAM promo on promo codes page.',
    h1: 'Brands and merchants in our guides',
    lead: 'Before buying a bulb, spot or sensor, it helps to know who stands behind it: warranty, returns and whether the brand fits your use case.',
    tableTitle: 'Summary table',
    th: ['Brand', 'Type', 'On this site', 'Warranty / returns', 'Our view'],
    promoLink: 'active promo code',
    osramCta: 'OSRAM LEDVANCE shop (partner)',
    osramHref: 'https://www.awin1.com/cread.php?awinmid=98739&awinaffid=3127458&ued=https%3A%2F%2Fshop.ledvance.fr%2Fcollections%2Fall-stars',
    promoPage: '/en/promo-codes/',
    promoPageLabel: 'Promo codes hub',
    faqTitle: 'Lighting brands: FAQ',
    illuAlt: 'Illustration: bulb brands referenced in our guides',
    legalNote: 'UK consumers always have statutory rights against the seller; figures cite French terms where pages are shared.',
  },
  uk: {
    kicker: 'Brands',
    title: 'Brands and merchants: Hue, OSRAM, Steinel, Tapo, Luminaire.fr',
    description: 'Summary table: product focus, warranty/returns, one-line verdict.',
    h1: 'Brands and merchants in our guides',
    lead: 'Before buying a bulb, spot or sensor, it helps to know who stands behind it.',
    tableTitle: 'Summary table',
    th: ['Brand', 'Type', 'On this site', 'Warranty / returns', 'Our view'],
    promoLink: 'active promo code',
    osramCta: 'OSRAM LEDVANCE shop (partner)',
    osramHref: 'https://www.awin1.com/cread.php?awinmid=98739&awinaffid=3127458&ued=https%3A%2F%2Fshop.ledvance.fr%2Fcollections%2Fall-stars',
    promoPage: '/uk/promo-codes/',
    promoPageLabel: 'Promo codes (UK)',
    faqTitle: 'Lighting brands: FAQ',
    illuAlt: 'Illustration: bulb brands referenced in our guides',
    legalNote: 'Statutory consumer rights apply against the retailer you buy from.',
  },
  ca: {
    kicker: 'Brands',
    title: 'Brands and merchants: Hue, OSRAM, Steinel, Tapo',
    description: 'Summary table: product focus, warranty/returns, one-line verdict.',
    h1: 'Brands and merchants in our guides',
    lead: 'Before buying a bulb, spot or sensor, it helps to know who stands behind it.',
    tableTitle: 'Summary table',
    th: ['Brand', 'Type', 'On this site', 'Warranty / returns', 'Our view'],
    promoLink: 'active promo code',
    osramCta: 'OSRAM LEDVANCE shop (partner)',
    osramHref: 'https://www.awin1.com/cread.php?awinmid=98739&awinaffid=3127458&ued=https%3A%2F%2Fshop.ledvance.fr%2Fcollections%2Fall-stars',
    promoPage: '/ca/promo-codes/',
    promoPageLabel: 'Promo codes (CA)',
    faqTitle: 'Lighting brands: FAQ',
    illuAlt: 'Illustration: bulb brands referenced in our guides',
    legalNote: 'Check retailer warranty where you place the order.',
  },
  de: {
    kicker: 'Marken',
    title: 'Marken und Händler: Hue, OSRAM, Steinel, Tapo',
    description: 'Übersicht: Produkte, Garantie, Kurzurteil.',
    h1: 'Marken und Händler in unseren Ratgebern',
    lead: 'Vor dem Kauf lohnt sich ein Blick auf Garantie, Rückgabe und Einsatzgebiet der Marke.',
    tableTitle: 'Übersichtstabelle',
    th: ['Marke', 'Typ', 'Auf der Website', 'Garantie / Rückgabe', 'Unser Urteil'],
    promoLink: 'Aktionscode',
    osramCta: 'OSRAM LEDVANCE Shop (Partner)',
    osramHref: 'https://www.awin1.com/cread.php?awinmid=98739&awinaffid=3127458&ued=https%3A%2F%2Fshop.ledvance.fr%2Fcollections%2Fall-stars',
    promoPage: '/de/aktionscodes/',
    promoPageLabel: 'Aktionscodes',
    faqTitle: 'Marken FAQ',
    illuAlt: 'Illustration: Marken in unseren Ratgebern',
    legalNote: 'Gesetzliche Gewährleistung gilt gegenüber dem Verkäufer.',
  },
  nl: {
    kicker: 'Merken',
    title: 'Merken en winkels: Hue, OSRAM, Steinel, Tapo',
    description: 'Overzicht: producten, garantie, kort advies.',
    h1: 'Merken in onze gidsen',
    lead: 'Voor u koopt: garantie, retour en geschiktheid van het merk.',
    tableTitle: 'Overzicht',
    th: ['Merk', 'Type', 'Op de site', 'Garantie / retour', 'Ons advies'],
    promoLink: 'actiecode',
    osramCta: 'OSRAM LEDVANCE shop (partner)',
    osramHref: 'https://www.awin1.com/cread.php?awinmid=98739&awinaffid=3127458&ued=https%3A%2F%2Fshop.ledvance.fr%2Fcollections%2Fall-stars',
    promoPage: '/nl/actiecodes/',
    promoPageLabel: 'Actiecodes',
    faqTitle: 'Veelgestelde vragen over merken',
    illuAlt: 'Illustratie: merken in onze gidsen',
    legalNote: 'Wettelijke garantie loopt via de verkoper.',
  },
  es: {
    kicker: 'Marcas',
    title: 'Marcas y comercios de iluminación',
    description: 'Tabla resumen: productos, garantía y opinión.',
    h1: 'Marcas de nuestros comparativos',
    lead: 'Antes de comprar: garantía, devoluciones y encaje de cada marca.',
    tableTitle: 'Tabla resumen',
    th: ['Marca', 'Tipo', 'En el sitio', 'Garantía / devoluciones', 'Nuestra opinión'],
    promoLink: 'código promo activo',
    osramCta: 'Tienda OSRAM LEDVANCE (socio)',
    osramHref: 'https://www.awin1.com/cread.php?awinmid=98739&awinaffid=3127458&ued=https%3A%2F%2Fshop.ledvance.fr%2Fcollections%2Fall-stars',
    promoPage: '/es/codigos-promo/',
    promoPageLabel: 'Códigos promo',
    faqTitle: 'Preguntas frecuentes sobre marcas',
    illuAlt: 'Ilustración: marcas citadas en nuestras guías',
    legalNote: 'La garantía legal de dos años corresponde al vendedor.',
  },
  it: {
    kicker: 'Marchi',
    title: 'Marchi e rivenditori di illuminazione',
    description: 'Tabella: prodotti, garanzia, giudizio in una riga.',
    h1: 'Marchi citati nei nostri confronti',
    lead: 'Prima dell’acquisto: garanzia, resi e limiti di ogni marchio che citiamo.',
    tableTitle: 'Tabella riassuntiva',
    th: ['Marchio', 'Tipo', 'Sul sito', 'Garanzia / resi', 'Il nostro giudizio'],
    promoLink: 'codice promo attivo',
    osramCta: 'Shop OSRAM LEDVANCE (partner)',
    osramHref: 'https://www.awin1.com/cread.php?awinmid=98739&awinaffid=3127458&ued=https%3A%2F%2Fshop.ledvance.fr%2Fcollections%2Fall-stars',
    promoPage: '/it/codici-promo/',
    promoPageLabel: 'Codici promo',
    faqTitle: 'Domande frequenti sui marchi',
    illuAlt: 'Illustrazione: marchi citati nelle guide',
    legalNote: 'La garanzia legale di conformità di 2 anni resta a carico del venditore.',
  },
};

export const hubBrandPrefix = (lang: HubLang) => {
  const map: Record<HubLang, string> = {
    fr: '/marques/',
    en: '/en/brands/',
    uk: '/uk/brands/',
    ca: '/ca/brands/',
    de: '/de/marken/',
    nl: '/nl/merken/',
    es: '/es/marcas/',
    it: '/it/marchi/',
  };
  return map[lang];
};

export const hubToolLang = (lang: HubLang): 'fr' | 'en' | 'de' | 'nl' | 'es' | 'it' => {
  const b = base(lang);
  return b as 'fr' | 'en' | 'de' | 'nl' | 'es' | 'it';
};