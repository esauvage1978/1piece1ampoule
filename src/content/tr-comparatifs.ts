// Comparatifs, calculateur de ruban, fiche Imalent et soirées d'hiver (DE/NL).
// Faits repris de l'édition EN (octobre 2026). Pas d'avis Amazon, pas de prix inventé.
import type { EnPage } from './en';

type Loc = 'nl' | 'de' | 'it' | 'es';
const SHOP: Record<Loc, { host: string; tag: string; dp: string; search: string; note: string }> = {
  nl: {
    host: 'www.amazon.nl', tag: 'manuso0607-21',
    dp: 'Prijs op Amazon.nl bekijken', search: 'Zoeken op Amazon.nl',
    note: 'Gegevens uit de fabrieksfiches (Amazon.fr, gecontroleerd in oktober 2026). Het aanbod op Amazon.nl kan afwijken. Prijzen veranderen: de knop toont de prijs van vandaag. Als Amazon-partner verdienen wij aan in aanmerking komende aankopen.',
  },
  de: {
    host: 'www.amazon.de', tag: 'roboteducat00-21',
    dp: 'Preis auf Amazon.de prüfen', search: 'Auf Amazon.de suchen',
    note: 'Angaben aus den Herstellerdaten (Amazon.fr, geprüft im Oktober 2026). Das Angebot auf Amazon.de kann abweichen. Preise ändern sich: der Button zeigt den heutigen Preis. Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.',
  },
  it: {
    host: 'www.amazon.it', tag: 'roboteducat0f-21',
    dp: 'Vedi su Amazon.it', search: 'Cerca su Amazon.it',
    note: 'Dati dalle schede del produttore (Amazon.fr, verificati a ottobre 2026). L’assortimento su Amazon.it può differire. I prezzi cambiano: il pulsante mostra il prezzo di oggi. In qualità di Affiliato Amazon, ricevo un guadagno dagli acquisti idonei.',
  },
  es: {
    host: 'www.amazon.es', tag: 'roboteducat07-21',
    dp: 'Ver en Amazon.es', search: 'Buscar en Amazon.es',
    note: 'Datos de las fichas del fabricante (Amazon.fr, comprobados en octubre de 2026). El surtido en Amazon.es puede ser distinto. Los precios cambian: el botón muestra el precio de hoy. Como Afiliado de Amazon, gano por las compras que cumplen los requisitos.',
  },
};
const buy = (loc: Loc, label: string, link: { dp?: string; q?: string }) => {
  const s = SHOP[loc];
  const href = link.dp
    ? `https://${s.host}/dp/${link.dp}?tag=${s.tag}`
    : `https://${s.host}/s?k=${encodeURIComponent(link.q || label)}&tag=${s.tag}`;
  const text = link.dp ? s.dp : s.search;
  return `<a class="en-amz" href="${href}" rel="nofollow sponsored noopener" target="_blank" data-product="${label}">${text}</a>`;
};
const note = (loc: Loc) => `<p class="en-note">${SHOP[loc].note}</p>`;

type Row = { name: string; type: string; specs: string; best: string; link: { dp?: string; q?: string } };
type Cmp = {
  slug: string; fr: string;
  title: Record<Loc, string>; h1: Record<Loc, string>; description: Record<Loc, string>; intro: Record<Loc, string>;
  products: Record<Loc, Row[]>;
  criteria: Record<Loc, string[]>;
  faq: Record<Loc, [string, string][]>;
  extra?: Record<Loc, string>;
  related: Record<Loc, string>;
};

const UI: Record<Loc, { kicker: string; pick: string; keys: string; best: string; hProd: string; hType: string; hSpecs: string; hBest: string; table: string; check: string; faq: string; all: string; index: string }> = {
  nl: { kicker: 'Vergelijking · bijgewerkt oktober 2026', pick: 'Onze eerste keuze', keys: 'Kern', best: 'Het beste voor', hProd: 'Product', hType: 'Type', hSpecs: 'Kerngegevens', hBest: 'Geschikt voor', table: 'Vergelijkingstabel', check: 'Waar u op let voor u koopt', faq: 'Veelgestelde vragen', all: 'Alle vergelijkingen', index: 'vergelijkingen' },
  de: { kicker: 'Vergleich · Stand Oktober 2026', pick: 'Unsere erste Wahl', keys: 'Das Wichtigste', best: 'Am besten für', hProd: 'Produkt', hType: 'Typ', hSpecs: 'Kerndaten', hBest: 'Geeignet für', table: 'Vergleichstabelle', check: 'Worauf Sie vor dem Kauf achten', faq: 'Häufige Fragen', all: 'Alle Vergleiche', index: 'vergleiche' },
  it: { kicker: 'Confronto · aggiornato a ottobre 2026', pick: 'La nostra prima scelta', keys: 'In sintesi', best: 'Ideale per', hProd: 'Prodotto', hType: 'Tipo', hSpecs: 'Dati chiave', hBest: 'Adatto a', table: 'Tabella di confronto', check: 'Cosa verificare prima di acquistare', faq: 'Domande frequenti', all: 'Tutti i confronti', index: 'confronti' },
  es: { kicker: 'Comparativa · actualizada en octubre de 2026', pick: 'Nuestra primera opción', keys: 'Lo esencial', best: 'Mejor para', hProd: 'Producto', hType: 'Tipo', hSpecs: 'Datos clave', hBest: 'Sirve para', table: 'Tabla comparativa', check: 'Qué comprobar antes de comprar', faq: 'Preguntas frecuentes', all: 'Todas las comparativas', index: 'comparativas' },
};

const L = (nl: string, de: string, it: string, es: string): Record<Loc, string> => ({ nl, de, it, es });
const A = (nl: string[], de: string[], it: string[], es: string[]): Record<Loc, string[]> => ({ nl, de, it, es });
const Q = (nl: [string, string][], de: [string, string][], it: [string, string][], es: [string, string][]): Record<Loc, [string, string][]> => ({ nl, de, it, es });

const e27: Cmp = {
  slug: 'e27', fr: '/meilleur/meilleure-ampoule-led-e27/',
  title: L('Beste E27-ledlamp 2026: vergelijking', 'Beste E27-LED-Lampe 2026: Vergleich', 'Migliore lampadina LED E27 2026: confronto', 'Mejor bombilla LED E27 2026: comparativa'),
  h1: L('De beste E27-ledlamp in 2026', 'Die beste E27-LED-Lampe 2026', 'La migliore lampadina LED E27 nel 2026', 'La mejor bombilla LED E27 en 2026'),
  description: L(
    'Welke E27-ledlamp kopen? Vergelijking 2026: Philips, gloeidraad en slim, met lumen, kelvin en prijs per lamp.',
    'Welche E27-LED-Lampe kaufen? Vergleich 2026: Philips, Filament und smart, mit Lumen, Kelvin und Preis pro Lampe.',
    'Quale lampadina LED E27 comprare? Confronto 2026: Philips, filamento e smart, con lumen, kelvin e prezzo a lampadina.',
    '¿Qué bombilla LED E27 comprar? Comparativa 2026: Philips, filamento e inteligente, con lúmenes, kelvin y precio por bombilla.',
  ),
  intro: L(
    'De schroeffitting E27 past in de meeste plafond- en tafellampen. Kijk naar lumen (806 lm ≈ 60 W, 1.055 lm ≈ 75 W), kleurtemperatuur (2700 K warm, 4000 K neutraal) en de prijs per lamp in een multipack.',
    'Der Schraubsockel E27 passt in die meisten Decken- und Tischleuchten. Achten Sie auf Lumen (806 lm ≈ 60 W, 1.055 lm ≈ 75 W), Farbtemperatur (2700 K warm, 4000 K neutral) und den Preis pro Lampe im Mehrfachpack.',
    'L’attacco a vite E27 entra nella maggior parte dei lampadari e delle abat-jour. Guardate i lumen (806 lm ≈ 60 W, 1.055 lm ≈ 75 W), la temperatura di colore (2700 K calda, 4000 K neutra) e il prezzo a lampadina nelle confezioni multiple.',
    'El casquillo de rosca E27 encaja en la mayoría de lámparas de techo y de mesa. Mire los lúmenes (806 lm ≈ 60 W, 1.055 lm ≈ 75 W), la temperatura de color (2700 K cálida, 4000 K neutra) y el precio por bombilla en los packs.',
  ),
  products: {
    nl: [
      { name: 'Philips LED E27 8 W (equivalent 60 W) 2700 K, 6 stuks', type: 'E27-lamp', specs: '806 lm • 2700 K • Ra 80', best: 'Woonkamer en slaapkamer', link: { dp: 'B01KHIM7OG' } },
      { name: 'Philips LED Classic A60 E27, equivalent 100 W', type: 'Heldere E27', specs: 'ongeveer 1.500 lm • wit', best: 'Grote kamers, keuken, garage', link: { dp: 'B0DGPZCMG6' } },
      { name: 'Philips LED E27 4,9 W (equivalent 40 W) 2700 K, 6 stuks', type: 'E27-lamp', specs: '470 lm • 2700 K', best: 'Bijzetlamp en nachtkastje', link: { q: 'Philips LED E27 40W equivalent 2700K' } },
      { name: 'Philips LED-gloeidraad E27, equivalent 60 W, 2 stuks', type: 'Gloeidraad E27', specs: '806 lm • warmwit', best: 'Zichtbare lampen en hanglampen', link: { dp: 'B08HV4WG3Y' } },
      { name: 'Philips Hue White E27 800 lm, 2 stuks', type: 'Slimme lamp', specs: '806 lm • 2700 K • dimbaar', best: 'Eerste stap naar slim licht', link: { q: 'Philips Hue White E27 800 lm 2 pack' } },
    ],
    de: [
      { name: 'Philips LED E27 8 W (60-W-Ersatz) 2700 K, 6er-Pack', type: 'E27-Lampe', specs: '806 lm • 2700 K • Ra 80', best: 'Wohnzimmer und Schlafzimmer', link: { dp: 'B01KHIM7OG' } },
      { name: 'Philips LED Classic A60 E27, 100-W-Ersatz', type: 'Helle E27', specs: 'ca. 1.500 lm • weiß', best: 'Große Räume, Küche, Garage', link: { dp: 'B0DGPZCMG6' } },
      { name: 'Philips LED E27 4,9 W (40-W-Ersatz) 2700 K, 6er-Pack', type: 'E27-Lampe', specs: '470 lm • 2700 K', best: 'Nebenlampe und Nachttisch', link: { q: 'Philips LED E27 40W equivalent 2700K' } },
      { name: 'Philips LED-Filament E27, 60-W-Ersatz, 2er-Pack', type: 'Filament E27', specs: '806 lm • warmweiß', best: 'Sichtbare Lampen und Pendel', link: { dp: 'B08HV4WG3Y' } },
      { name: 'Philips Hue White E27 800 lm, 2er-Pack', type: 'Smarte Lampe', specs: '806 lm • 2700 K • dimmbar', best: 'Einstieg ins smarte Licht', link: { q: 'Philips Hue White E27 800 lm 2 pack' } },
    ],
    it: [
      { name: 'Philips LED E27 8 W (equivalente 60 W) 2700 K, conf. da 6', type: 'Lampadina E27', specs: '806 lm • 2700 K • Ra 80', best: 'Soggiorno e camera', link: { dp: 'B01KHIM7OG' } },
      { name: 'Philips LED Classic A60 E27, equivalente 100 W', type: 'E27 luminosa', specs: 'circa 1.500 lm • bianca', best: 'Stanze grandi, cucina, garage', link: { dp: 'B0DGPZCMG6' } },
      { name: 'Philips LED E27 4,9 W (equivalente 40 W) 2700 K, conf. da 6', type: 'Lampadina E27', specs: '470 lm • 2700 K', best: 'Abat-jour e comodino', link: { q: 'Philips LED E27 40W equivalent 2700K' } },
      { name: 'Philips LED a filamento E27, equivalente 60 W, conf. da 2', type: 'Filamento E27', specs: '806 lm • bianco caldo', best: 'Lampade a vista e sospensioni', link: { dp: 'B08HV4WG3Y' } },
      { name: 'Philips Hue White E27 800 lm, conf. da 2', type: 'Lampadina smart', specs: '806 lm • 2700 K • dimmerabile', best: 'Primo passo verso la luce smart', link: { q: 'Philips Hue White E27 800 lm 2 pack' } },
    ],
    es: [
      { name: 'Philips LED E27 8 W (equivalente a 60 W) 2700 K, pack de 6', type: 'Bombilla E27', specs: '806 lm • 2700 K • Ra 80', best: 'Salón y dormitorio', link: { dp: 'B01KHIM7OG' } },
      { name: 'Philips LED Classic A60 E27, equivalente a 100 W', type: 'E27 luminosa', specs: 'unos 1.500 lm • blanca', best: 'Estancias grandes, cocina, garaje', link: { dp: 'B0DGPZCMG6' } },
      { name: 'Philips LED E27 4,9 W (equivalente a 40 W) 2700 K, pack de 6', type: 'Bombilla E27', specs: '470 lm • 2700 K', best: 'Lámpara auxiliar y mesilla', link: { q: 'Philips LED E27 40W equivalent 2700K' } },
      { name: 'Philips LED de filamento E27, equivalente a 60 W, pack de 2', type: 'Filamento E27', specs: '806 lm • blanco cálido', best: 'Bombillas a la vista y colgantes', link: { dp: 'B08HV4WG3Y' } },
      { name: 'Philips Hue White E27 800 lm, pack de 2', type: 'Bombilla inteligente', specs: '806 lm • 2700 K • regulable', best: 'Primer paso hacia la luz inteligente', link: { q: 'Philips Hue White E27 800 lm 2 pack' } },
    ],
  },
  criteria: A(
    ['Lichtstroom (lm) passend bij de ruimte', 'Kleurtemperatuur (K)', 'Ra ≥ 80 (Ra ≥ 90 in keuken en badkamer)', 'Prijs per lamp in een multipack', 'Dimbaar of niet'],
    ['Lichtstrom (lm) passend zum Raum', 'Farbtemperatur (K)', 'Ra ≥ 80 (Ra ≥ 90 in Küche und Bad)', 'Preis pro Lampe im Mehrfachpack', 'Dimmbar oder nicht'],
    ['Flusso (lm) adatto alla stanza', 'Temperatura di colore (K)', 'Ra ≥ 80 (Ra ≥ 90 in cucina e bagno)', 'Prezzo a lampadina nelle confezioni', 'Dimmerabile o no'],
    ['Flujo (lm) acorde con la estancia', 'Temperatura de color (K)', 'Ra ≥ 80 (Ra ≥ 90 en cocina y baño)', 'Precio por bombilla en el pack', 'Regulable o no'],
  ),
  faq: Q(
    [['Hoeveel lumen vervangt 60 W?', 'Ongeveer 806 lumen. Voor 75 W rekent u 1.055 lm, voor 100 W ongeveer 1.521 lm.'], ['2700 K of 4000 K?', '2700 K in woon- en slaapkamer (warm). 4000 K in keuken, werkkamer en garage (neutraal, preciezer).'], ['Werkt een niet-dimbare E27 op een dimmer?', 'Nee. Op een dimmer kiest u een lamp met de aanduiding dimbaar, anders gaat ze flikkeren of stuk.']],
    [['Wie viele Lumen ersetzen 60 W?', 'Etwa 806 Lumen. Für 75 W rechnen Sie mit 1.055 lm, für 100 W mit etwa 1.521 lm.'], ['2700 K oder 4000 K?', '2700 K im Wohn- und Schlafzimmer (warm). 4000 K in Küche, Arbeitszimmer und Garage (neutral, genauer).'], ['Geht eine nicht dimmbare E27 an einem Dimmer?', 'Nein. Am Dimmer brauchen Sie eine als dimmbar gekennzeichnete Lampe, sonst flackert oder fällt sie aus.']],
    [['Quanti lumen sostituiscono 60 W?', 'Circa 806 lumen. Per 75 W puntate a 1.055 lm, per 100 W a circa 1.521 lm.'], ['2700 K o 4000 K?', '2700 K in soggiorno e camera (calda). 4000 K in cucina, studio e garage (neutra, più precisa).'], ['Una E27 non dimmerabile funziona sul variatore?', 'No. Sul variatore scegliete una lampadina indicata come dimmerabile, altrimenti sfarfalla o si guasta.']],
    [['¿Cuántos lúmenes sustituyen a 60 W?', 'Unos 806 lúmenes. Para 75 W, 1.055 lm; para 100 W, unos 1.521 lm.'], ['¿2700 K o 4000 K?', '2700 K en salón y dormitorio (cálida). 4000 K en cocina, despacho y garaje (neutra, más precisa).'], ['¿Una E27 no regulable funciona con regulador?', 'No. Con regulador elija una bombilla marcada como regulable; si no, parpadea o falla.']],
  ),
  extra: L(
    '<p class="en-note">De bajonetfitting B22 komt in de Benelux weinig voor. Twijfelt u, kijk dan in <a href="/nl/gidsen/e27-vs-b22/">E27 of B22</a>.</p>',
    '<p class="en-note">Der Bajonettsockel B22 ist im deutschsprachigen Raum selten. Im Zweifel: <a href="/de/ratgeber/e27-oder-b22/">E27 oder B22</a>.</p>',
    '<p class="en-note">L’attacco a baionetta B22 è raro in Italia. In caso di dubbio: <a href="/it/guide/e27-o-b22/">E27 o B22</a>.</p>',
    '<p class="en-note">El casquillo de bayoneta B22 es poco habitual en España. Si duda: <a href="/es/guias/e27-o-b22/">E27 o B22</a>.</p>',
  ),
  related: L(
    '<a href="/nl/gidsen/lumen-watt/">lumen of watt</a>, <a href="/nl/gidsen/lampfittingen-e27-e14-gu10/">lampfittingen</a>',
    '<a href="/de/ratgeber/lumen-watt/">Lumen oder Watt</a>, <a href="/de/ratgeber/lampensockel-e27-e14-gu10/">Lampensockel</a>',
    '<a href="/it/guide/lumen-watt/">lumen o watt</a>, <a href="/it/guide/attacchi-e27-e14-gu10/">attacchi</a>',
    '<a href="/es/guias/lumenes-vatios/">lúmenes o vatios</a>, <a href="/es/guias/casquillos-e27-e14-gu10/">casquillos</a>',
  ),
};

const gu10: Cmp = {
  slug: 'gu10', fr: '/meilleur/meilleur-spot-gu10/',
  title: L('Beste GU10-ledspot 2026: multipacks', 'Bester GU10-LED-Spot 2026: Mehrfachpacks', 'Miglior faretto LED GU10 2026: confezioni', 'Mejor foco LED GU10 2026: packs'),
  h1: L('De beste GU10-ledspot in 2026', 'Der beste GU10-LED-Spot 2026', 'Il miglior faretto LED GU10 nel 2026', 'El mejor foco LED GU10 en 2026'),
  description: L(
    'Vergelijking 2026 van GU10-ledspots: 4000 K in de keuken, warmwit in de woonkamer, stralingshoek, lumen en prijs per pack.',
    'Vergleich 2026 der GU10-LED-Spots: 4000 K in der Küche, Warmweiß im Wohnzimmer, Abstrahlwinkel, Lumen und Preis pro Pack.',
    'Confronto 2026 dei faretti LED GU10: 4000 K in cucina, bianco caldo in soggiorno, angolo del fascio, lumen e prezzo a confezione.',
    'Comparativa 2026 de focos LED GU10: 4000 K en la cocina, blanco cálido en el salón, ángulo de haz, lúmenes y precio por pack.',
  ),
  intro: L(
    'GU10 is de fitting van inbouwspots op netspanning. Wat telt: de stralingshoek (36° gericht, 120° breed), de lumen (350 tot 800 lm) en de kleurtemperatuur van de ruimte.',
    'GU10 ist der Sockel der Netzspannungs-Einbauspots. Entscheidend sind Abstrahlwinkel (36° gebündelt, 120° breit), Lumen (350 bis 800 lm) und die Farbtemperatur des Raums.',
    'Il GU10 è l’attacco dei faretti da incasso a tensione di rete. Contano l’angolo del fascio (36° concentrato, 120° ampio), i lumen (da 350 a 800 lm) e la temperatura di colore della stanza.',
    'El GU10 es el casquillo de los focos empotrados a tensión de red. Importan el ángulo del haz (36° concentrado, 120° amplio), los lúmenes (de 350 a 800 lm) y la temperatura de color de la estancia.',
  ),
  products: {
    nl: [
      { name: 'GY GU10 LED 4,5 W 805 lm 4000 K, 12 stuks', type: 'GU10', specs: '805 lm • 4000 K • klasse A • 36°', best: 'Keuken, aanrecht, gang', link: { q: 'GY GU10 LED 805lm 4000K' } },
      { name: 'GY GU10 LED 4,9 W 790 lm 4000 K, 10 stuks', type: 'GU10', specs: '790 lm • 4000 K • 120°', best: 'Breed, gelijkmatig licht', link: { q: 'GU10 LED 790lm 4000K 120 degree' } },
      { name: 'Philips LED GU10 4,6 W warmwit, 10 stuks', type: 'GU10', specs: '355 lm • 2700 K', best: 'Woonkamer en sfeer', link: { q: 'Philips LED GU10 warm white 10 pack' } },
      { name: 'DiCUNO GU10 6 W 550 lm 2700 K, 6 stuks', type: 'GU10', specs: '550 lm • 2700 K • 120°', best: 'Sfeerspots', link: { q: 'DiCUNO GU10 550lm 2700K' } },
    ],
    de: [
      { name: 'GY GU10 LED 4,5 W 805 lm 4000 K, 12er-Pack', type: 'GU10', specs: '805 lm • 4000 K • Klasse A • 36°', best: 'Küche, Arbeitsplatte, Flur', link: { q: 'GY GU10 LED 805lm 4000K' } },
      { name: 'GY GU10 LED 4,9 W 790 lm 4000 K, 10er-Pack', type: 'GU10', specs: '790 lm • 4000 K • 120°', best: 'Breites, gleichmäßiges Licht', link: { q: 'GU10 LED 790lm 4000K 120 degree' } },
      { name: 'Philips LED GU10 4,6 W warmweiß, 10er-Pack', type: 'GU10', specs: '355 lm • 2700 K', best: 'Wohnzimmer und Stimmung', link: { q: 'Philips LED GU10 warm white 10 pack' } },
      { name: 'DiCUNO GU10 6 W 550 lm 2700 K, 6er-Pack', type: 'GU10', specs: '550 lm • 2700 K • 120°', best: 'Stimmungs-Spots', link: { q: 'DiCUNO GU10 550lm 2700K' } },
    ],
    it: [
      { name: 'GY GU10 LED 4,5 W 805 lm 4000 K, conf. da 12', type: 'GU10', specs: '805 lm • 4000 K • classe A • 36°', best: 'Cucina, piano di lavoro, corridoio', link: { q: 'GY GU10 LED 805lm 4000K' } },
      { name: 'GY GU10 LED 4,9 W 790 lm 4000 K, conf. da 10', type: 'GU10', specs: '790 lm • 4000 K • 120°', best: 'Luce ampia e uniforme', link: { q: 'GU10 LED 790lm 4000K 120 degree' } },
      { name: 'Philips LED GU10 4,6 W bianco caldo, conf. da 10', type: 'GU10', specs: '355 lm • 2700 K', best: 'Soggiorno e atmosfera', link: { q: 'Philips LED GU10 warm white 10 pack' } },
      { name: 'DiCUNO GU10 6 W 550 lm 2700 K, conf. da 6', type: 'GU10', specs: '550 lm • 2700 K • 120°', best: 'Faretti d’ambiente', link: { q: 'DiCUNO GU10 550lm 2700K' } },
    ],
    es: [
      { name: 'GY GU10 LED 4,5 W 805 lm 4000 K, pack de 12', type: 'GU10', specs: '805 lm • 4000 K • clase A • 36°', best: 'Cocina, encimera, pasillo', link: { q: 'GY GU10 LED 805lm 4000K' } },
      { name: 'GY GU10 LED 4,9 W 790 lm 4000 K, pack de 10', type: 'GU10', specs: '790 lm • 4000 K • 120°', best: 'Luz amplia y uniforme', link: { q: 'GU10 LED 790lm 4000K 120 degree' } },
      { name: 'Philips LED GU10 4,6 W blanco cálido, pack de 10', type: 'GU10', specs: '355 lm • 2700 K', best: 'Salón y ambiente', link: { q: 'Philips LED GU10 warm white 10 pack' } },
      { name: 'DiCUNO GU10 6 W 550 lm 2700 K, pack de 6', type: 'GU10', specs: '550 lm • 2700 K • 120°', best: 'Focos de ambiente', link: { q: 'DiCUNO GU10 550lm 2700K' } },
    ],
  },
  criteria: A(
    ['Stralingshoek', 'Lumen per spot', 'Kleurtemperatuur 2700 K / 4000 K', 'Energieklasse', 'Prijs per lamp'],
    ['Abstrahlwinkel', 'Lumen pro Spot', 'Farbtemperatur 2700 K / 4000 K', 'Energieklasse', 'Preis pro Lampe'],
    ['Angolo del fascio', 'Lumen per faretto', 'Temperatura 2700 K / 4000 K', 'Classe energetica', 'Prezzo a lampadina'],
    ['Ángulo del haz', 'Lúmenes por foco', 'Temperatura 2700 K / 4000 K', 'Clase energética', 'Precio por bombilla'],
  ),
  faq: Q(
    [['Hoeveel GU10-spots per m²?', 'Meestal één spot van 400–500 lm per 1,5 tot 2 m² als hoofdlicht; minder als de spots bijverlichting zijn.'], ['Welke stralingshoek?', '36–40° voor een aanrecht of een schilderij, 100–120° voor gelijkmatige algemene verlichting.']],
    [['Wie viele GU10-Spots pro m²?', 'Meist ein Spot mit 400–500 lm je 1,5 bis 2 m² als Hauptlicht; weniger, wenn die Spots nur ergänzen.'], ['Welcher Abstrahlwinkel?', '36–40° für Arbeitsplatte oder Bild, 100–120° für gleichmäßiges Allgemeinlicht.']],
    [['Quanti faretti GU10 al m²?', 'Di solito un faretto da 400–500 lm ogni 1,5–2 m² come luce principale; meno se i faretti sono di complemento.'], ['Quale angolo del fascio?', '36–40° per il piano di lavoro o un quadro, 100–120° per una luce generale uniforme.']],
    [['¿Cuántos focos GU10 por m²?', 'Suele bastar un foco de 400–500 lm cada 1,5–2 m² como luz principal; menos si los focos son de apoyo.'], ['¿Qué ángulo de haz?', '36–40° para la encimera o un cuadro, 100–120° para una luz general uniforme.']],
  ),
  related: L(
    '<a href="/nl/gidsen/kleurtemperatuur-kelvin/">kelvin</a>, <a href="https://1piece1ampoule.fr/pieces/cuisine/">keuken (Franse gids)</a>',
    '<a href="/de/ratgeber/farbtemperatur-kelvin/">Kelvin</a>, <a href="https://1piece1ampoule.fr/pieces/cuisine/">Küche (französischer Ratgeber)</a>',
    '<a href="/it/guide/temperatura-colore-kelvin/">kelvin</a>, <a href="https://1piece1ampoule.fr/pieces/cuisine/">cucina (guida francese)</a>',
    '<a href="/es/guias/temperatura-color-kelvin/">kelvin</a>, <a href="https://1piece1ampoule.fr/pieces/cuisine/">cocina (guía francesa)</a>',
  ),
};

const smart: Cmp = {
  slug: 'smart', fr: '/meilleur/meilleure-ampoule-connectee/',
  title: L('Beste slimme E27-lamp 2026: Hue en Tapo', 'Beste smarte E27-Lampe 2026: Hue und Tapo', 'Migliore lampadina smart E27 2026: Hue e Tapo', 'Mejor bombilla inteligente E27 2026: Hue y Tapo'),
  h1: L('De beste slimme E27-lamp in 2026', 'Die beste smarte E27-Lampe 2026', 'La migliore lampadina smart E27 nel 2026', 'La mejor bombilla inteligente E27 en 2026'),
  description: L(
    'Slimme lamp voor Alexa, Google of HomeKit: vergelijking 2026 van Philips Hue White, White Ambiance en kleur. Bluetooth of bridge?',
    'Smarte Lampe für Alexa, Google oder HomeKit: Vergleich 2026 von Philips Hue White, White Ambiance und Farbe. Bluetooth oder Bridge?',
    'Lampadina smart per Alexa, Google o HomeKit: confronto 2026 tra Philips Hue White, White Ambiance e colore. Bluetooth o bridge?',
    'Bombilla inteligente para Alexa, Google o HomeKit: comparativa 2026 de Philips Hue White, White Ambiance y color. ¿Bluetooth o puente?',
  ),
  intro: L(
    'Met een slimme lamp verandert u helderheid en kleurtemperatuur zonder wanddimmer, en plant u een wekkerlicht of scènes. Philips Hue blijft de referentie voor betrouwbaarheid. Een Tapo L530E op wifi is een goede start zonder bridge.',
    'Eine smarte Lampe ändert Helligkeit und Farbtemperatur ohne Wanddimmer und kann Wecklicht oder Szenen fahren. Philips Hue bleibt die Referenz für Zuverlässigkeit. Eine Tapo L530E per WLAN ist ein guter Start ohne Bridge.',
    'Una lampadina smart cambia luminosità e temperatura di colore senza variatore a muro, e permette una sveglia luminosa o delle scene. Philips Hue resta il riferimento per l’affidabilità. Una Tapo L530E Wi-Fi è un buon inizio senza bridge.',
    'Una bombilla inteligente cambia el brillo y la temperatura de color sin regulador de pared, y permite un despertador luminoso o escenas. Philips Hue sigue siendo la referencia por fiabilidad. Una Tapo L530E Wi-Fi es un buen comienzo sin puente.',
  ),
  products: {
    nl: [
      { name: 'Philips Hue White Ambiance E27 1.100 lm', type: 'Slimme lamp', specs: '1.100 lm • instelbaar wit • Bluetooth/Zigbee', best: 'Woonkamer, slaapkamer, scènes', link: { dp: 'B0FJ8VXHRX' } },
      { name: 'Tapo L530E wifi-kleurlamp E27', type: 'Wifi-lamp', specs: '806 lm • kleuren • geen bridge', best: 'Eerste slimme lamp', link: { dp: 'B08GDC99PX' } },
      { name: 'Tapo L530E wifi E27, 2 stuks', type: 'Wifi-lamp', specs: '806 lm • kleuren • Alexa/Google', best: 'Woon- en slaapkamer', link: { dp: 'B08Z4KCJZY' } },
      { name: 'Philips Hue White & Color Ambiance E27-startset', type: 'Kleurenset', specs: '1.100 lm • kleuren • bridge + afstandsbediening', best: 'Sfeer bij de televisie', link: { dp: 'B099NRLRG3' } },
      { name: 'Philips Hue White E27 800 lm, 2 stuks', type: 'Slimme lamp', specs: '800 lm • 2700 K • dimbaar', best: 'Instap', link: { q: 'Philips Hue White E27 800 lm 2 pack' } },
    ],
    de: [
      { name: 'Philips Hue White Ambiance E27 1.100 lm', type: 'Smarte Lampe', specs: '1.100 lm • einstellbares Weiß • Bluetooth/Zigbee', best: 'Wohnzimmer, Schlafzimmer, Szenen', link: { dp: 'B0FJ8VXHRX' } },
      { name: 'Tapo L530E WLAN-Farbbirne E27', type: 'WLAN-Lampe', specs: '806 lm • Farben • ohne Bridge', best: 'Erste smarte Lampe', link: { dp: 'B08GDC99PX' } },
      { name: 'Tapo L530E WLAN E27, 2er-Pack', type: 'WLAN-Lampe', specs: '806 lm • Farben • Alexa/Google', best: 'Wohn- und Schlafzimmer', link: { dp: 'B08Z4KCJZY' } },
      { name: 'Philips Hue White & Color Ambiance E27 Starter-Set', type: 'Farb-Set', specs: '1.100 lm • Farben • Bridge + Fernbedienung', best: 'Stimmung am Fernseher', link: { dp: 'B099NRLRG3' } },
      { name: 'Philips Hue White E27 800 lm, 2er-Pack', type: 'Smarte Lampe', specs: '800 lm • 2700 K • dimmbar', best: 'Einstieg', link: { q: 'Philips Hue White E27 800 lm 2 pack' } },
    ],
    it: [
      { name: 'Philips Hue White Ambiance E27 1.100 lm', type: 'Lampadina smart', specs: '1.100 lm • bianco variabile • Bluetooth/Zigbee', best: 'Soggiorno, camera, scene', link: { dp: 'B0FJ8VXHRX' } },
      { name: 'Tapo L530E lampadina Wi-Fi a colori E27', type: 'Lampadina Wi-Fi', specs: '806 lm • colori • senza bridge', best: 'Prima lampadina smart', link: { dp: 'B08GDC99PX' } },
      { name: 'Tapo L530E Wi-Fi E27, conf. da 2', type: 'Lampadina Wi-Fi', specs: '806 lm • colori • Alexa/Google', best: 'Soggiorno e camera', link: { dp: 'B08Z4KCJZY' } },
      { name: 'Philips Hue White & Color Ambiance E27 kit di partenza', type: 'Kit colore', specs: '1.100 lm • colori • bridge + telecomando', best: 'Atmosfera vicino alla TV', link: { dp: 'B099NRLRG3' } },
      { name: 'Philips Hue White E27 800 lm, conf. da 2', type: 'Lampadina smart', specs: '800 lm • 2700 K • dimmerabile', best: 'Ingresso nella gamma', link: { q: 'Philips Hue White E27 800 lm 2 pack' } },
    ],
    es: [
      { name: 'Philips Hue White Ambiance E27 1.100 lm', type: 'Bombilla inteligente', specs: '1.100 lm • blanco variable • Bluetooth/Zigbee', best: 'Salón, dormitorio, escenas', link: { dp: 'B0FJ8VXHRX' } },
      { name: 'Tapo L530E bombilla Wi-Fi de color E27', type: 'Bombilla Wi-Fi', specs: '806 lm • colores • sin puente', best: 'Primera bombilla inteligente', link: { dp: 'B08GDC99PX' } },
      { name: 'Tapo L530E Wi-Fi E27, pack de 2', type: 'Bombilla Wi-Fi', specs: '806 lm • colores • Alexa/Google', best: 'Salón y dormitorio', link: { dp: 'B08Z4KCJZY' } },
      { name: 'Philips Hue White & Color Ambiance E27 kit de inicio', type: 'Kit de color', specs: '1.100 lm • colores • puente + mando', best: 'Ambiente junto al televisor', link: { dp: 'B099NRLRG3' } },
      { name: 'Philips Hue White E27 800 lm, pack de 2', type: 'Bombilla inteligente', specs: '800 lm • 2700 K • regulable', best: 'Entrada en la gama', link: { q: 'Philips Hue White E27 800 lm 2 pack' } },
    ],
  },
  criteria: A(
    ['Rendement: White Ambiance 1.100 lm (EPREL 2187086) geeft ongeveer 136 lm/W (1.100 lm / 8,1 W, klasse D), tegen ongeveer 107 lm/W voor White 806 lm (806 / 7,5 W, klasse F) en ongeveer 96 lm/W voor White & Color (1.055 lm / 11 W, klasse F).', 'Kleur: vast warmwit 2.700 K (White), instelbaar wit 1.000–20.000 K (White Ambiance) of kleuren plus wit 2.000–6.500 K (White & Color).', 'Stand-by: een slimme lamp verbruikt ook uitgeschakeld 0,1 tot 0,5 W, dus 0,9 tot 4,4 kWh per jaar als ze permanent op het net zit.', 'Bediening: Bluetooth (tot 10 lampen, zonder bridge) of Zigbee via de Hue Bridge voor bediening op afstand.', 'Ra: de drie modellen geven Ra 80 op, genoeg voor de woonkamer, krap voor een aanrecht of make-upspiegel.'],
    ['Lichtausbeute: White Ambiance 1.100 lm (EPREL 2187086) liegt bei etwa 136 lm/W (1.100 lm / 8,1 W, Klasse D), gegenüber etwa 107 lm/W bei White 806 lm (806 / 7,5 W, Klasse F) und etwa 96 lm/W bei White & Color (1.055 lm / 11 W, Klasse F).', 'Farbe: festes Warmweiß 2.700 K (White), einstellbares Weiß 1.000–20.000 K (White Ambiance) oder Farben plus Weiß 2.000–6.500 K (White & Color).', 'Stand-by: eine smarte Lampe zieht auch ausgeschaltet 0,1 bis 0,5 W, also 0,9 bis 4,4 kWh im Jahr, wenn sie dauerhaft am Netz hängt.', 'Steuerung: Bluetooth (bis 10 Lampen, ohne Bridge) oder Zigbee über die Hue Bridge für Fernzugriff.', 'Ra: alle drei Modelle nennen Ra 80, ausreichend fürs Wohnzimmer, knapp für Arbeitsplatte oder Schminkspiegel.'],
    ['Efficacia: la White Ambiance 1.100 lm (EPREL 2187086) rende circa 136 lm/W (1.100 lm / 8,1 W, classe D), contro circa 107 lm/W della White 806 lm (806 / 7,5 W, classe F) e circa 96 lm/W della White & Color (1.055 lm / 11 W, classe F).', 'Colore: bianco caldo fisso 2.700 K (White), bianco regolabile 1.000–20.000 K (White Ambiance) o colori più bianco 2.000–6.500 K (White & Color).', 'Stand-by: una lampadina smart assorbe anche da spenta 0,1–0,5 W, cioè 0,9–4,4 kWh l’anno se resta sempre in rete.', 'Comando: Bluetooth (fino a 10 lampadine, senza bridge) o Zigbee con la Hue Bridge per il controllo da remoto.', 'Ra: i tre modelli dichiarano Ra 80, sufficiente in soggiorno, al limite per un piano di lavoro o uno specchio da trucco.'],
    ['Eficacia: la White Ambiance de 1.100 lm (EPREL 2187086) ronda los 136 lm/W (1.100 lm / 8,1 W, clase D), frente a unos 107 lm/W de la White de 806 lm (806 / 7,5 W, clase F) y unos 96 lm/W de la White & Color (1.055 lm / 11 W, clase F).', 'Color: blanco cálido fijo de 2.700 K (White), blanco regulable de 1.000–20.000 K (White Ambiance) o colores más blanco de 2.000–6.500 K (White & Color).', 'En espera: una bombilla inteligente consume también apagada de 0,1 a 0,5 W, es decir de 0,9 a 4,4 kWh al año si permanece siempre en la red.', 'Control: Bluetooth (hasta 10 bombillas, sin puente) o Zigbee con el Hue Bridge para el mando a distancia.', 'Ra: los tres modelos declaran Ra 80, suficiente en el salón, justo para una encimera o un espejo de maquillaje.'],
  ),
  faq: Q(
    [['Heb ik een Hue Bridge nodig?', 'Niet om te beginnen (Bluetooth, tot 10 lampen in één kamer). De bridge wordt nuttig voor bediening buitenshuis en automatiseringen.'], ['Kan een slimme lamp op een gewone schakelaar?', 'Ja, maar de schakelaar moet aan blijven: anders heeft de lamp geen stroom.']],
    [['Brauche ich eine Hue Bridge?', 'Nicht für den Anfang (Bluetooth, bis 10 Lampen in einem Raum). Die Bridge wird nützlich für Zugriff von unterwegs und Automationen.'], ['Geht eine smarte Lampe an einem normalen Schalter?', 'Ja, aber der Schalter muss an bleiben: sonst hat die Lampe keinen Strom.']],
    [['Mi serve la Hue Bridge?', 'Non per iniziare (Bluetooth, fino a 10 lampadine in una stanza). Il bridge serve per il controllo da fuori casa e le automazioni.'], ['Una lampadina smart funziona su un interruttore normale?', 'Sì, ma l’interruttore deve restare acceso: altrimenti la lampadina non ha corrente.']],
    [['¿Necesito un Hue Bridge?', 'No para empezar (Bluetooth, hasta 10 bombillas en una habitación). El puente sirve para el control desde fuera y las automatizaciones.'], ['¿Una bombilla inteligente funciona con un interruptor normal?', 'Sí, pero el interruptor debe quedarse encendido: si no, la bombilla no tiene corriente.']],
  ),
  extra: L(
    '<h2>Methode</h2><p>De waarden (nuttige lichtstroom, vermogen in werking, kleurtemperatuur, Ra, energieklasse) komen uit EPREL of het productblad volgens verordening (EU) 2019/2015, gecontroleerd op 22 oktober 2026. Het rendement (lm/W) is onze berekening: nuttige stroom gedeeld door het vermogen. Stand-by rekent met 8.760 uur per jaar. We hebben deze lampen nog niet zelf gemeten: de vergelijking steunt alleen op officiële fabrieksgegevens.</p>',
    '<h2>Methode</h2><p>Die Werte (Nutzlichtstrom, Leistungsaufnahme im Betrieb, Farbtemperatur, Ra, Energieklasse) stammen aus EPREL oder dem Produktdatenblatt nach Verordnung (EU) 2019/2015, geprüft am 22. Oktober 2026. Die Lichtausbeute (lm/W) ist unsere Rechnung: Nutzlichtstrom geteilt durch die Leistung. Der Stand-by rechnet mit 8.760 Stunden im Jahr. Wir haben diese Lampen noch nicht selbst gemessen: der Vergleich stützt sich nur auf offizielle Herstellerdaten.</p>',
    '<h2>Metodo</h2><p>I valori (flusso utile, potenza in uso, temperatura di colore, Ra, classe energetica) vengono da EPREL o dalla scheda prodotto prevista dal regolamento (UE) 2019/2015, verificati il 22 ottobre 2026. L’efficacia (lm/W) è un nostro calcolo: flusso utile diviso per la potenza. Lo stand-by usa 8.760 ore l’anno. Non abbiamo ancora misurato queste lampadine: il confronto si basa solo sui dati ufficiali del produttore.</p>',
    '<h2>Método</h2><p>Los valores (flujo útil, potencia en uso, temperatura de color, Ra, clase energética) salen de EPREL o de la ficha exigida por el Reglamento (UE) 2019/2015, comprobados el 22 de octubre de 2026. La eficacia (lm/W) es un cálculo nuestro: flujo útil dividido por la potencia. El consumo en espera usa 8.760 horas al año. Aún no hemos medido estas bombillas: la comparativa se apoya solo en los datos oficiales del fabricante.</p>',
  ),
  related: L(
    '<a href="/nl/artikelen/smarte-lamp-wifi-of-zigbee/">wifi of Zigbee</a>, <a href="/nl/merken/philips-hue/">Philips Hue</a>, <a href="/nl/merken/tapo/">Tapo</a>',
    '<a href="/de/artikel/smarte-lampe-wifi-oder-zigbee/">WLAN oder Zigbee</a>, <a href="/de/marken/philips-hue/">Philips Hue</a>, <a href="/de/marken/tapo/">Tapo</a>',
    '<a href="/it/articoli/lampadina-smart-wifi-o-zigbee/">Wi-Fi o Zigbee</a>, <a href="/it/marchi/philips-hue/">Philips Hue</a>, <a href="/it/marchi/tapo/">Tapo</a>',
    '<a href="/es/articulos/bombilla-inteligente-wifi-o-zigbee/">Wi-Fi o Zigbee</a>, <a href="/es/marcas/philips-hue/">Philips Hue</a>, <a href="/es/marcas/tapo/">Tapo</a>',
  ),
};

function pageOf(loc: Loc, c: Cmp, indexPath: string): EnPage {
  const u = UI[loc];
  const rows = c.products[loc];
  const top = rows[0];
  return {
    path: `${u.index}/${c.slug}`,
    article: true,
    kicker: u.kicker,
    title: c.title[loc],
    description: c.description[loc],
    h1: c.h1[loc],
    lead: c.intro[loc],
    body: `<div class="en-card"><p class="en-flag">${u.pick}</p><h3>${top.name}</h3><p><strong>${u.keys} :</strong> ${top.specs}. <strong>${u.best} :</strong> ${top.best}.</p>${buy(loc, top.name, top.link)}</div>
${c.extra?.[loc] ?? ''}<h2>${u.table}</h2><table><thead><tr><th>${u.hProd}</th><th>${u.hType}</th><th>${u.hSpecs}</th><th>${u.hBest}</th><th></th></tr></thead><tbody>${rows.map((p) => `<tr><td>${p.name}</td><td>${p.type}</td><td>${p.specs}</td><td>${p.best}</td><td>${buy(loc, p.name, p.link)}</td></tr>`).join('')}</tbody></table>
${note(loc)}<h2>${u.check}</h2><ul>${c.criteria[loc].map((x) => `<li>${x}</li>`).join('')}</ul>
<h2>${u.faq}</h2>${c.faq[loc].map(([q, a]) => `<h3>${q}</h3><p>${a}</p>`).join('')}
<p>${c.related[loc]}. <a href="/${loc}/${indexPath}/">${u.all}</a>.</p>`,
  };
}

const sensor: Cmp = {
  slug: 'sensor', fr: '/meilleur/meilleure-lampe-detecteur-sans-fil/',
  title: L('Beste oplaadbare ledlamp met bewegingssensor', 'Beste Akku-LED-Leuchte mit Bewegungsmelder', 'Migliore lampada LED ricaricabile con sensore', 'Mejor lámpara LED recargable con sensor'),
  h1: L('De beste oplaadbare ledlamp met sensor', 'Die beste Akku-LED-Leuchte mit Sensor', 'La migliore lampada LED ricaricabile con sensore', 'La mejor lámpara LED recargable con sensor'),
  description: L(
    'Kast, inloopkast, gang of kelder zonder stroom: vergelijking 2026 van oplaadbare ledlampen met sensor (OUILA, Lumic, libtit).',
    'Schrank, Ankleide, Flur oder Keller ohne Strom: Vergleich 2026 aufladbarer LED-Leuchten mit Sensor (OUILA, Lumic, libtit).',
    'Armadio, cabina, corridoio o cantina senza corrente: confronto 2026 di barre LED ricaricabili con sensore (OUILA, Lumic, libtit).',
    'Armario, vestidor, pasillo o sótano sin corriente: comparativa 2026 de barras LED recargables con sensor (OUILA, Lumic, libtit).',
  ),
  intro: L(
    'Geen breekwerk en geen elektricien: een magneetstrip, op te laden via USB-C, die aangaat als u de kast opent of door de gang loopt. Ook ideaal in een kelder zonder stopcontact.',
    'Kein Stemmen und kein Elektriker: eine Magnetleiste, per USB-C aufladbar, die angeht, wenn Sie den Schrank öffnen oder den Flur entlanggehen. Auch ideal im Keller ohne Steckdose.',
    'Niente opere murarie e niente elettricista: una barra magnetica, ricaricabile via USB-C, che si accende quando aprite l’armadio o passate nel corridoio. Ideale anche in una cantina senza presa.',
    'Sin obra y sin electricista: una barra magnética, recargable por USB-C, que se enciende al abrir el armario o al pasar por el pasillo. También ideal en un sótano sin enchufe.',
  ),
  products: {
    nl: [
      { name: 'OUILA oplaadbare kastlamp 60 cm met sensor', type: 'Draadloze sensorbalk', specs: '3000/4000/6500 K • 5.000 mAh • USB-C', best: 'Kast, inloopkast, kelder zonder stroom', link: { dp: 'B0F18462GT' } },
      { name: 'Lumic Mouvement 3.0 draadloze sensorbalk', type: 'Draadloze sensorbalk', specs: '150 lm • 3 kleurtemperaturen • magneet', best: 'Kast, lade, gang', link: { q: 'Lumic wireless motion sensor light bar' } },
      { name: 'Kastlamp 30 cm met sensor en afstandsbediening, 2 stuks', type: 'Draadloze sensorbalk', specs: 'Dimbaar • afstandsbediening • oplaadbaar', best: 'Kasten en trappen', link: { q: 'rechargeable cabinet light motion sensor remote 30cm 2 pack' } },
      { name: 'libtit draadloze balk 30 cm met sensor, 4 stuks', type: 'Draadloze sensorbalk', specs: '3 kleurtemperaturen • USB • magneet', best: 'Meerdere kasten of een trap', link: { q: 'libtit wireless motion sensor light 30cm' } },
    ],
    de: [
      { name: 'OUILA Akku-Schrankleuchte 60 cm mit Sensor', type: 'Funk-Sensorleiste', specs: '3000/4000/6500 K • 5.000 mAh • USB-C', best: 'Schrank, Ankleide, Keller ohne Strom', link: { dp: 'B0F18462GT' } },
      { name: 'Lumic Mouvement 3.0 Funk-Sensorleiste', type: 'Funk-Sensorleiste', specs: '150 lm • 3 Farbtemperaturen • Magnet', best: 'Schrank, Schublade, Flur', link: { q: 'Lumic wireless motion sensor light bar' } },
      { name: 'Schrankleuchte 30 cm mit Sensor und Fernbedienung, 2er-Pack', type: 'Funk-Sensorleiste', specs: 'Dimmbar • Fernbedienung • Akku', best: 'Schränke und Treppen', link: { q: 'rechargeable cabinet light motion sensor remote 30cm 2 pack' } },
      { name: 'libtit Funkleiste 30 cm mit Sensor, 4er-Pack', type: 'Funk-Sensorleiste', specs: '3 Farbtemperaturen • USB • Magnet', best: 'Mehrere Schränke oder eine Treppe', link: { q: 'libtit wireless motion sensor light 30cm' } },
    ],
    it: [
      { name: 'OUILA barra LED ricaricabile 60 cm con sensore', type: 'Barra sensore senza fili', specs: '3000/4000/6500 K • 5.000 mAh • USB-C', best: 'Armadio, cabina, cantina senza corrente', link: { dp: 'B0F18462GT' } },
      { name: 'Lumic Mouvement 3.0 barra sensore senza fili', type: 'Barra sensore senza fili', specs: '150 lm • 3 temperature • magnete', best: 'Armadio, cassetto, corridoio', link: { q: 'Lumic wireless motion sensor light bar' } },
      { name: 'Luce per armadio 30 cm con sensore e telecomando, conf. da 2', type: 'Barra sensore senza fili', specs: 'Dimmerabile • telecomando • ricaricabile', best: 'Armadi e scale', link: { q: 'rechargeable cabinet light motion sensor remote 30cm 2 pack' } },
      { name: 'libtit barra 30 cm con sensore, conf. da 4', type: 'Barra sensore senza fili', specs: '3 temperature • USB • magnete', best: 'Più armadi o una scala', link: { q: 'libtit wireless motion sensor light 30cm' } },
    ],
    es: [
      { name: 'OUILA barra LED recargable de 60 cm con sensor', type: 'Barra con sensor sin cables', specs: '3000/4000/6500 K • 5.000 mAh • USB-C', best: 'Armario, vestidor, sótano sin corriente', link: { dp: 'B0F18462GT' } },
      { name: 'Lumic Mouvement 3.0 barra con sensor sin cables', type: 'Barra con sensor sin cables', specs: '150 lm • 3 temperaturas • imán', best: 'Armario, cajón, pasillo', link: { q: 'Lumic wireless motion sensor light bar' } },
      { name: 'Luz de armario de 30 cm con sensor y mando, pack de 2', type: 'Barra con sensor sin cables', specs: 'Regulable • mando • recargable', best: 'Armarios y escaleras', link: { q: 'rechargeable cabinet light motion sensor remote 30cm 2 pack' } },
      { name: 'libtit barra de 30 cm con sensor, pack de 4', type: 'Barra con sensor sin cables', specs: '3 temperaturas • USB • imán', best: 'Varios armarios o una escalera', link: { q: 'libtit wireless motion sensor light 30cm' } },
    ],
  },
  criteria: A(
    ['Lengte en lumen', 'Accuduur of capaciteit', 'Magneetbevestiging', 'Drie kleurtemperaturen en dimmen', 'Dag-nachtdetectie'],
    ['Länge und Lumen', 'Akkulaufzeit oder Kapazität', 'Magnetbefestigung', 'Drei Farbtemperaturen und Dimmen', 'Tag-Nacht-Erkennung'],
    ['Lunghezza e lumen', 'Autonomia o capacità', 'Fissaggio magnetico', 'Tre temperature e regolazione', 'Rilevamento giorno/notte'],
    ['Longitud y lúmenes', 'Autonomía o capacidad', 'Fijación magnética', 'Tres temperaturas y regulación', 'Detección día/noche'],
  ),
  faq: Q(
    [['Hoe lang gaat de accu echt mee?', 'In sensormodus rekent u 3 tot 6 weken, afhankelijk van hoe vaak de lamp aanspringt en hoe fel ze staat.'], ['Werkt ze in een kelder zonder stroom?', 'Ja, dat is het ideale gebruik: boven opladen, daarna met de magneet of plakstrip vastzetten.']],
    [['Wie lange hält der Akku wirklich?', 'Im Sensormodus rechnen Sie mit 3 bis 6 Wochen, je nachdem wie oft die Leuchte auslöst und wie hell sie steht.'], ['Geht sie im Keller ohne Strom?', 'Ja, das ist der ideale Einsatz: oben laden, dann mit Magnet oder Klebestreifen befestigen.']],
    [['Quanto dura davvero la batteria?', 'In modalità sensore contate da 3 a 6 settimane, secondo quante volte si accende e la luminosità impostata.'], ['Funziona in una cantina senza corrente?', 'Sì, è l’uso ideale: caricatela di sopra, poi fissatela con la calamita o l’adesivo.']],
    [['¿Cuánto dura de verdad la batería?', 'En modo sensor cuente de 3 a 6 semanas, según cuántas veces se encienda y el brillo elegido.'], ['¿Funciona en un sótano sin corriente?', 'Sí, es el uso ideal: cárguela arriba y fíjela con el imán o el adhesivo.']],
  ),
  related: L(
    '<a href="https://1piece1ampoule.fr/zones/placards-dressing/">kasten (Franse gids)</a>, <a href="https://1piece1ampoule.fr/guides/detecteurs-de-mouvement/">bewegingssensoren (FR)</a>',
    '<a href="https://1piece1ampoule.fr/zones/placards-dressing/">Schränke (französischer Ratgeber)</a>, <a href="https://1piece1ampoule.fr/guides/detecteurs-de-mouvement/">Bewegungsmelder (FR)</a>',
    '<a href="https://1piece1ampoule.fr/zones/placards-dressing/">armadi (guida francese)</a>, <a href="https://1piece1ampoule.fr/guides/detecteurs-de-mouvement/">sensori (FR)</a>',
    '<a href="https://1piece1ampoule.fr/zones/placards-dressing/">armarios (guía francesa)</a>, <a href="https://1piece1ampoule.fr/guides/detecteurs-de-mouvement/">sensores (FR)</a>',
  ),
};

const flood: Cmp = {
  slug: 'flood', fr: '/meilleur/meilleur-projecteur-led-exterieur-detecteur/',
  title: L('Beste ledschijnwerper voor buiten met sensor', 'Bester LED-Außenstrahler mit Sensor', 'Miglior faro LED da esterno con sensore', 'Mejor proyector LED de exterior con sensor'),
  h1: L('De beste buitenschijnwerper met sensor', 'Der beste Außenstrahler mit Sensor', 'Il miglior faro da esterno con sensore', 'El mejor proyector de exterior con sensor'),
  description: L(
    'Ingang, pad, garage, parkeerplaats: vergelijking 2026 van ledschijnwerpers IP65 met sensor, van 24 tot 60 W.',
    'Eingang, Weg, Garage, Stellplatz: Vergleich 2026 der LED-Strahler IP65 mit Sensor, von 24 bis 60 W.',
    'Ingresso, vialetto, garage, posto auto: confronto 2026 di fari LED IP65 con sensore, da 24 a 60 W.',
    'Entrada, camino, garaje, aparcamiento: comparativa 2026 de proyectores LED IP65 con sensor, de 24 a 60 W.',
  ),
  intro: L(
    'Een schijnwerper met sensor beveiligt de ingang en het pad en verbruikt weinig. Controleer de IP-waarde (minstens IP65), de lumen voor het oppervlak en de instellingen (gevoeligheid, tijd, schemer).',
    'Ein Sensorstrahler sichert Eingang und Weg und verbraucht wenig. Prüfen Sie die Schutzart (mindestens IP65), die Lumen für die Fläche und die Einstellungen (Empfindlichkeit, Zeit, Dämmerung).',
    'Un faro con sensore mette in sicurezza ingresso e vialetto e consuma poco. Controllate il grado IP (almeno IP65), i lumen per la superficie e le regolazioni (sensibilità, tempo, crepuscolo).',
    'Un proyector con sensor asegura la entrada y el camino y consume poco. Compruebe el grado IP (al menos IP65), los lúmenes para la superficie y los ajustes (sensibilidad, tiempo, anochecer).',
  ),
  products: {
    nl: [
      { name: 'Ledschijnwerper 30 W met sensor en afstandsbediening, 3 kleurtemperaturen', type: 'Buitenschijnwerper', specs: '3.600 lm • IP65 • 4 standen', best: 'Ingang, pad, garage', link: { q: '30W LED floodlight motion sensor remote 3600lm' } },
      { name: 'CLY ledschijnwerper 60 W met sensor en afstandsbediening', type: 'Buitenschijnwerper', specs: '5.640 lm • sensor', best: 'Parkeerplaats en grote gevel', link: { q: 'CLY 60W LED floodlight motion sensor' } },
      { name: 'OREiN ledschijnwerper 24 W met sensor, 3 kleurtemperaturen', type: 'Buitenschijnwerper', specs: '2.800 lm • 2700/4000/6500 K • IP65', best: 'Terras en tuin', link: { dp: 'B0BPX1ZZXJ' } },
    ],
    de: [
      { name: 'LED-Strahler 30 W mit Sensor und Fernbedienung, 3 Farbtemperaturen', type: 'Außenstrahler', specs: '3.600 lm • IP65 • 4 Modi', best: 'Eingang, Weg, Garage', link: { q: '30W LED floodlight motion sensor remote 3600lm' } },
      { name: 'CLY LED-Strahler 60 W mit Sensor und Fernbedienung', type: 'Außenstrahler', specs: '5.640 lm • Sensor', best: 'Stellplatz und große Fassade', link: { q: 'CLY 60W LED floodlight motion sensor' } },
      { name: 'OREiN LED-Strahler 24 W mit Sensor, 3 Farbtemperaturen', type: 'Außenstrahler', specs: '2.800 lm • 2700/4000/6500 K • IP65', best: 'Terrasse und Garten', link: { dp: 'B0BPX1ZZXJ' } },
    ],
    it: [
      { name: 'Faro LED 30 W con sensore e telecomando, 3 temperature', type: 'Faro da esterno', specs: '3.600 lm • IP65 • 4 modi', best: 'Ingresso, vialetto, garage', link: { q: '30W LED floodlight motion sensor remote 3600lm' } },
      { name: 'CLY faro LED 60 W con sensore e telecomando', type: 'Faro da esterno', specs: '5.640 lm • sensore', best: 'Posto auto e grande facciata', link: { q: 'CLY 60W LED floodlight motion sensor' } },
      { name: 'OREiN faro LED 24 W con sensore, 3 temperature', type: 'Faro da esterno', specs: '2.800 lm • 2700/4000/6500 K • IP65', best: 'Terrazza e giardino', link: { dp: 'B0BPX1ZZXJ' } },
    ],
    es: [
      { name: 'Proyector LED de 30 W con sensor y mando, 3 temperaturas', type: 'Proyector de exterior', specs: '3.600 lm • IP65 • 4 modos', best: 'Entrada, camino, garaje', link: { q: '30W LED floodlight motion sensor remote 3600lm' } },
      { name: 'CLY proyector LED de 60 W con sensor y mando', type: 'Proyector de exterior', specs: '5.640 lm • sensor', best: 'Aparcamiento y fachada grande', link: { q: 'CLY 60W LED floodlight motion sensor' } },
      { name: 'OREiN proyector LED de 24 W con sensor, 3 temperaturas', type: 'Proyector de exterior', specs: '2.800 lm • 2700/4000/6500 K • IP65', best: 'Terraza y jardín', link: { dp: 'B0BPX1ZZXJ' } },
    ],
  },
  criteria: A(
    ['Minstens IP65', 'Lumen voor het oppervlak', 'Detectiebereik', 'Tijd en gevoeligheid', 'Kleurtemperatuur (3000 K stoort de buren minder)'],
    ['Mindestens IP65', 'Lumen für die Fläche', 'Erfassungsweite', 'Zeit und Empfindlichkeit', 'Farbtemperatur (3000 K stört Nachbarn weniger)'],
    ['Almeno IP65', 'Lumen per la superficie', 'Portata di rilevamento', 'Tempo e sensibilità', 'Temperatura di colore (3000 K dà meno fastidio ai vicini)'],
    ['Al menos IP65', 'Lúmenes para la superficie', 'Alcance de detección', 'Tiempo y sensibilidad', 'Temperatura de color (3000 K molesta menos a los vecinos)'],
  ),
  faq: Q(
    [['Hoeveel vermogen voor een pad?', '20–30 W (2.000–3.000 lm) volstaat voor een ingang of een pad; 50–60 W voor een erf of parkeerplaats.']],
    [['Wie viel Leistung für einen Weg?', '20–30 W (2.000–3.000 lm) reichen für Eingang oder Weg; 50–60 W für Hof oder Parkplatz.']],
    [['Quanta potenza per un vialetto?', '20–30 W (2.000–3.000 lm) bastano per un ingresso o un vialetto; 50–60 W per un cortile o un parcheggio.']],
    [['¿Cuánta potencia para un camino?', '20–30 W (2.000–3.000 lm) bastan para una entrada o un camino; 50–60 W para un patio o un aparcamiento.']],
  ),
  related: L(
    '<a href="/nl/gidsen/ip-beschermingsgraad-badkamer-buiten/">IP-waarde</a>',
    '<a href="/de/ratgeber/ip-schutzarten-bad-aussen/">Schutzart IP</a>',
    '<a href="/it/guide/grado-ip-bagno-esterno/">grado IP</a>',
    '<a href="/es/guias/grado-ip-bano-exterior/">grado IP</a>',
  ),
};

const bar: Cmp = {
  slug: 'bar', fr: '/meilleur/meilleure-reglette-led-sous-meuble/',
  title: L('Beste ledlamp onder de keukenkast', 'Beste LED-Unterbauleuchte für die Küche', 'Migliore barra LED sottopensile per la cucina', 'Mejor regleta LED bajo mueble de cocina'),
  h1: L('De beste ledlamp onder het keukenkastje', 'Die beste LED-Unterbauleuchte', 'La migliore barra LED sottopensile', 'La mejor regleta LED bajo mueble'),
  description: L(
    'Een aanrecht zonder schaduw: vergelijking 2026 van onderkastlampen op netspanning (verstelbaar, 4000 K) en draadloze alternatieven.',
    'Eine Arbeitsplatte ohne Schatten: Vergleich 2026 von Unterbauleuchten am Netz (schwenkbar, 4000 K) und kabellosen Alternativen.',
    'Un piano di lavoro senza ombre: confronto 2026 di barre sottopensile a rete (orientabili, 4000 K) e alternative senza fili.',
    'Una encimera sin sombras: comparativa 2026 de regletas bajo mueble a red (orientables, 4000 K) y alternativas sin cables.',
  ),
  intro: L(
    'Een lamp onder het bovenkastje haalt de schaduw van het aanrecht weg. Mik op ongeveer 4000 K, een goede kleurweergave en een lengte dicht bij die van het kastje.',
    'Eine Leuchte unter dem Oberschrank nimmt den Schatten von der Arbeitsplatte. Zielen Sie auf etwa 4000 K, eine gute Farbwiedergabe und eine Länge nahe an der des Schranks.',
    'Una luce sotto il pensile toglie l’ombra dal piano di lavoro. Puntate a circa 4000 K, una buona resa cromatica e una lunghezza vicina a quella del mobile.',
    'Una luz bajo el mueble alto quita la sombra de la encimera. Apunte a unos 4000 K, una buena reproducción cromática y una longitud cercana a la del armario.',
  ),
  products: {
    nl: [
      { name: 'DA LIGHT verstelbare onderkastlamp 56 cm (3000/4000/6000 K)', type: 'Netspanningsbalk', specs: '560 lm • 3 kleurtemperaturen • koppelbaar', best: 'Keukenaanrecht', link: { dp: 'B07H7HB6LG' } },
      { name: 'Oktaplex Riga onderkastlamp 28 cm 4000 K', type: 'Netspanningsbalk', specs: '370 lm • 4000 K • uitbreidbaar', best: 'Korte aanrechten', link: { q: 'Oktaplex Riga under cabinet light 4000K' } },
      { name: 'SEBSON keukenbalk 60 cm met schakelaar', type: 'Netspanningsbalk', specs: '715 lm • 3000 K', best: 'Keuken en bureau', link: { q: 'SEBSON LED under cabinet light 60cm switch' } },
      { name: 'OUILA oplaadbare lamp 60 cm met sensor', type: 'Draadloze sensorbalk', specs: '3000/4000/6500 K • 5.000 mAh • USB-C', best: 'Geen stopcontact in de buurt', link: { dp: 'B0F18462GT' } },
    ],
    de: [
      { name: 'DA LIGHT schwenkbare Unterbauleuchte 56 cm (3000/4000/6000 K)', type: 'Netzleiste', specs: '560 lm • 3 Farbtemperaturen • anreihbar', best: 'Küchenarbeitsplatte', link: { dp: 'B07H7HB6LG' } },
      { name: 'Oktaplex Riga Unterbauleuchte 28 cm 4000 K', type: 'Netzleiste', specs: '370 lm • 4000 K • erweiterbar', best: 'Kurze Arbeitsplatten', link: { q: 'Oktaplex Riga under cabinet light 4000K' } },
      { name: 'SEBSON Küchenleiste 60 cm mit Schalter', type: 'Netzleiste', specs: '715 lm • 3000 K', best: 'Küche und Schreibtisch', link: { q: 'SEBSON LED under cabinet light 60cm switch' } },
      { name: 'OUILA Akku-Leuchte 60 cm mit Sensor', type: 'Funk-Sensorleiste', specs: '3000/4000/6500 K • 5.000 mAh • USB-C', best: 'Keine Steckdose in der Nähe', link: { dp: 'B0F18462GT' } },
    ],
    it: [
      { name: 'DA LIGHT barra sottopensile orientabile 56 cm (3000/4000/6000 K)', type: 'Barra a rete', specs: '560 lm • 3 temperature • collegabile', best: 'Piano di lavoro', link: { dp: 'B07H7HB6LG' } },
      { name: 'Oktaplex Riga barra sottopensile 28 cm 4000 K', type: 'Barra a rete', specs: '370 lm • 4000 K • estendibile', best: 'Piani corti', link: { q: 'Oktaplex Riga under cabinet light 4000K' } },
      { name: 'SEBSON barra cucina 60 cm con interruttore', type: 'Barra a rete', specs: '715 lm • 3000 K', best: 'Cucina e scrivania', link: { q: 'SEBSON LED under cabinet light 60cm switch' } },
      { name: 'OUILA lampada ricaricabile 60 cm con sensore', type: 'Barra sensore senza fili', specs: '3000/4000/6500 K • 5.000 mAh • USB-C', best: 'Nessuna presa vicina', link: { dp: 'B0F18462GT' } },
    ],
    es: [
      { name: 'DA LIGHT regleta bajo mueble orientable de 56 cm (3000/4000/6000 K)', type: 'Regleta de red', specs: '560 lm • 3 temperaturas • enlazable', best: 'Encimera', link: { dp: 'B07H7HB6LG' } },
      { name: 'Oktaplex Riga regleta bajo mueble de 28 cm 4000 K', type: 'Regleta de red', specs: '370 lm • 4000 K • ampliable', best: 'Encimeras cortas', link: { q: 'Oktaplex Riga under cabinet light 4000K' } },
      { name: 'SEBSON regleta de cocina de 60 cm con interruptor', type: 'Regleta de red', specs: '715 lm • 3000 K', best: 'Cocina y escritorio', link: { q: 'SEBSON LED under cabinet light 60cm switch' } },
      { name: 'OUILA lámpara recargable de 60 cm con sensor', type: 'Barra con sensor sin cables', specs: '3000/4000/6500 K • 5.000 mAh • USB-C', best: 'Sin enchufe cerca', link: { dp: 'B0F18462GT' } },
    ],
  },
  criteria: A(
    ['Netspanning of accu', 'Lengte', 'Kleurtemperatuur rond 4000 K', 'Koppelbaar', 'Ingebouwde schakelaar'],
    ['Netz oder Akku', 'Länge', 'Farbtemperatur um 4000 K', 'Anreihbar', 'Eingebauter Schalter'],
    ['Rete o batteria', 'Lunghezza', 'Temperatura intorno a 4000 K', 'Collegabile', 'Interruttore incorporato'],
    ['Red o batería', 'Longitud', 'Temperatura en torno a 4000 K', 'Enlazable', 'Interruptor incorporado'],
  ),
  extra: L(
    '<p><strong>Kort:</strong> voor een aanrecht zonder schaduw steekt een netspanningsbalk onder het kastje (vaak 4000 K, Ra ≥ 80) in een stopcontact: eenvoudiger dan een 24V-strip. Vergelijk de lengte, de lichtrichting en of u balken kunt koppelen.</p><h2>Balk of ledstrip?</h2><p>Een <strong>netspanningsbalk</strong> zit aan de voorkant van het bovenkastje, bij voorkeur met een <strong>verstelbare</strong> kop naar het blad. Een <strong>ledstrip</strong> in een aluminiumprofiel past bij lange lijnen en hoeken, met een 24V-voeding en vaak <strong>IP65</strong> bij de spoelbak. Zet de bron naar <strong>voren</strong>, zodat het blad verlicht is en niet alleen de achterwand. Boven de spoelbak: controleer de <a href="/nl/gidsen/ip-beschermingsgraad-badkamer-buiten/">IP-waarde</a>.</p>',
    '<p><strong>Kurz:</strong> für eine schattenfreie Arbeitsplatte steckt eine Netzleiste unter dem Oberschrank (oft 4000 K, Ra ≥ 80) in die Steckdose: einfacher als ein 24-V-Streifen. Vergleichen Sie Länge, Lichtkegel und ob sich Leisten anreihen lassen.</p><h2>Leiste oder LED-Streifen?</h2><p>Eine <strong>Netzleiste</strong> sitzt vorn am Oberschrank, am besten mit <strong>schwenkbarem</strong> Kopf zur Platte. Ein <strong>LED-Streifen</strong> im Aluprofil eignet sich für lange Linien und Ecken, mit 24-V-Netzteil und oft <strong>IP65</strong> an der Spüle. Setzen Sie die Quelle nach <strong>vorn</strong>, damit die Platte Licht bekommt und nicht nur die Rückwand. Über der Spüle: <a href="/de/ratgeber/ip-schutzarten-bad-aussen/">Schutzart</a> prüfen.</p>',
    '<p><strong>In breve:</strong> per un piano senza ombre una barra a rete sotto il pensile (spesso 4000 K, Ra ≥ 80) si collega a una presa: più semplice di una striscia a 24 V. Confrontate lunghezza, direzione della luce e se le barre si collegano tra loro.</p><h2>Barra o striscia LED?</h2><p>Una <strong>barra a rete</strong> si fissa davanti al pensile, meglio con testa <strong>orientabile</strong> verso il piano. Una <strong>striscia LED</strong> in un profilo di alluminio conviene per linee lunghe e angoli, con alimentatore a 24 V e spesso <strong>IP65</strong> vicino al lavello. Mettete la sorgente <strong>davanti</strong>, così illumina il piano e non solo il paraschizzi. Sopra il lavello: controllate il <a href="/it/guide/grado-ip-bagno-esterno/">grado IP</a>.</p>',
    '<p><strong>En breve:</strong> para una encimera sin sombra, una regleta de red bajo el mueble alto (a menudo 4000 K, Ra ≥ 80) se enchufa: más simple que una tira de 24 V. Compare la longitud, la dirección de la luz y si las regletas se pueden unir.</p><h2>¿Regleta o tira LED?</h2><p>Una <strong>regleta de red</strong> se fija delante del mueble alto, mejor con cabezal <strong>orientable</strong> hacia la encimera. Una <strong>tira LED</strong> en un perfil de aluminio conviene para líneas largas y rincones, con fuente de 24 V y a menudo <strong>IP65</strong> junto al fregadero. Ponga la fuente <strong>delante</strong>, para iluminar la encimera y no solo el frontal. Sobre el fregadero: compruebe el <a href="/es/guias/grado-ip-bano-exterior/">grado IP</a>.</p>',
  ),
  faq: Q(
    [['Balk of ledstrip?', 'Voor het hoofdaanrecht schroeft u een netspanningsbalk vast en steekt u de stekker erin. Een COB-strip in een aluminiumprofiel past als u een doorlopende lijn wilt en een 24V-voeding wilt berekenen. Kort: balk voor het gemak, strip voor de afwerking en de hoeken.']],
    [['Leiste oder LED-Streifen?', 'Für die Hauptarbeitsplatte schrauben Sie eine Netzleiste an und stecken den Stecker ein. Ein COB-Streifen im Aluprofil passt, wenn Sie eine durchgehende Linie wollen und ein 24-V-Netzteil auslegen. Kurz: Leiste für die Einfachheit, Streifen für die Optik und die Ecken.']],
    [['Barra o striscia?', 'Per il piano principale avvitate una barra a rete e inserite la spina. Una striscia COB in un profilo di alluminio conviene se volete una linea continua e accettate di dimensionare un alimentatore a 24 V. In breve: barra per la semplicità, striscia per l’estetica e gli angoli.']],
    [['¿Regleta o tira?', 'Para la encimera principal atornille una regleta de red y enchúfela. Una tira COB en un perfil de aluminio conviene si quiere una línea continua y acepta dimensionar una fuente de 24 V. En breve: regleta por sencillez, tira por el acabado y los rincones.']],
  ),
  related: L(
    '<a href="/nl/zones/keukenblad/">aanrecht</a>, <a href="/nl/gidsen/kleurweergave-cri-ra/">kleurweergave</a>',
    '<a href="/de/zonen/kuechenarbeitsplatte/">Arbeitsplatte</a>, <a href="/de/ratgeber/farbwiedergabe-cri-ra/">Farbwiedergabe</a>',
    '<a href="/it/zone/piano-lavoro-cucina/">piano di lavoro</a>, <a href="/it/guide/resa-cromatica-cri-ra/">resa cromatica</a>',
    '<a href="/es/zonas/encimera-cocina/">encimera</a>, <a href="/es/guias/reproduccion-cromatica-cri-ra/">reproducción cromática</a>',
  ),
};

const strip: Cmp = {
  slug: 'strip', fr: '/meilleur/meilleur-ruban-led/',
  title: L('Beste ledstrip voor in huis (COB, Ra 90+)', 'Bester LED-Streifen für zu Hause (COB, Ra 90+)', 'Migliore striscia LED per casa (COB, Ra 90+)', 'Mejor tira LED para casa (COB, Ra 90+)'),
  h1: L('De beste ledstrip voor in huis', 'Der beste LED-Streifen für zu Hause', 'La migliore striscia LED per casa', 'La mejor tira LED para casa'),
  description: L(
    'COB-ledstrip zonder zichtbare puntjes, Ra 90+, IP65, aluminiumprofiel: vergelijking 2026 voor keuken, televisie, koof en kelder.',
    'COB-LED-Streifen ohne sichtbare Punkte, Ra 90+, IP65, Aluprofil: Vergleich 2026 für Küche, Fernseher, Voute und Keller.',
    'Striscia LED COB senza punti visibili, Ra 90+, IP65, profilo in alluminio: confronto 2026 per cucina, TV, veletta e cantina.',
    'Tira LED COB sin puntos visibles, Ra 90+, IP65, perfil de aluminio: comparativa 2026 para cocina, televisor, foseado y sótano.',
  ),
  intro: L(
    'COB-strips geven een doorlopende lichtlijn zonder puntjes. Kies een hoge kleurweergave voor echte kleuren, en een aluminiumprofiel met diffuser voor een gelijkmatig beeld en betere warmteafvoer. Liever niet solderen of een 24V-voeding berekenen? Kijk naar de <a href="/nl/vergelijkingen/bar/">onderkastlampen</a>, klaar om in te pluggen.',
    'COB-Streifen geben eine durchgehende Lichtlinie ohne Punkte. Wählen Sie eine hohe Farbwiedergabe für echte Farben und ein Aluprofil mit Diffusor für ein gleichmäßiges Bild und bessere Wärmeabfuhr. Lieber nicht löten oder ein 24-V-Netzteil auslegen? Sehen Sie die <a href="/de/vergleiche/bar/">Unterbauleisten</a>, steckerfertig.',
    'Le strisce COB danno una linea di luce continua senza punti. Scegliete un’alta resa cromatica per colori veri e un profilo in alluminio con diffusore per un aspetto uniforme e un migliore smaltimento del calore. Preferite non saldare né dimensionare un alimentatore a 24 V? Guardate le <a href="/it/confronti/bar/">barre sottopensile</a>, pronte da collegare.',
    'Las tiras COB dan una línea de luz continua sin puntos. Elija una reproducción cromática alta para colores reales y un perfil de aluminio con difusor para un aspecto uniforme y mejor evacuación del calor. ¿Prefiere no soldar ni dimensionar una fuente de 24 V? Vea las <a href="/es/comparativas/bar/">regletas bajo mueble</a>, listas para enchufar.',
  ),
  products: {
    nl: [
      { name: 'BTF-LIGHTING COB-ledstrip 24 V 5 m 3000 K Ra 90+', type: 'COB-strip', specs: '480 leds/m • geen puntjes • Ra 90+', best: 'Onder kasten, tv, koof', link: { q: 'BTF-LIGHTING COB LED strip 24V 3000K CRI 90' } },
      { name: 'TOPAI COB-ledstrip 24 V 5 m 3000 K IP65', type: 'Waterdichte COB-strip', specs: 'IP65 • Ra 90+', best: 'Badkamer en overdekt buiten', link: { q: 'TOPAI COB LED strip 24V IP65' } },
      { name: 'Chesbung aluminium V-profiel voor ledstrip (20 × 1 m)', type: 'Profiel', specs: 'Opalen diffuser • hoekmontage', best: 'Een afgewerkte lijn', link: { q: 'Chesbung aluminium V profile LED strip' } },
    ],
    de: [
      { name: 'BTF-LIGHTING COB-LED-Streifen 24 V 5 m 3000 K Ra 90+', type: 'COB-Streifen', specs: '480 LEDs/m • ohne Punkte • Ra 90+', best: 'Unter Schränken, TV, Voute', link: { q: 'BTF-LIGHTING COB LED strip 24V 3000K CRI 90' } },
      { name: 'TOPAI COB-LED-Streifen 24 V 5 m 3000 K IP65', type: 'Wasserfester COB-Streifen', specs: 'IP65 • Ra 90+', best: 'Bad und überdachter Außenbereich', link: { q: 'TOPAI COB LED strip 24V IP65' } },
      { name: 'Chesbung Alu-V-Profil für LED-Streifen (20 × 1 m)', type: 'Profil', specs: 'Opal-Diffusor • Eckmontage', best: 'Eine saubere Linie', link: { q: 'Chesbung aluminium V profile LED strip' } },
    ],
    it: [
      { name: 'BTF-LIGHTING striscia LED COB 24 V 5 m 3000 K Ra 90+', type: 'Striscia COB', specs: '480 LED/m • senza punti • Ra 90+', best: 'Sotto i pensili, TV, veletta', link: { q: 'BTF-LIGHTING COB LED strip 24V 3000K CRI 90' } },
      { name: 'TOPAI striscia LED COB 24 V 5 m 3000 K IP65', type: 'Striscia COB impermeabile', specs: 'IP65 • Ra 90+', best: 'Bagno e esterno coperto', link: { q: 'TOPAI COB LED strip 24V IP65' } },
      { name: 'Chesbung profilo a V in alluminio per striscia (20 × 1 m)', type: 'Profilo', specs: 'Diffusore opale • montaggio ad angolo', best: 'Una linea rifinita', link: { q: 'Chesbung aluminium V profile LED strip' } },
    ],
    es: [
      { name: 'BTF-LIGHTING tira LED COB 24 V 5 m 3000 K Ra 90+', type: 'Tira COB', specs: '480 LED/m • sin puntos • Ra 90+', best: 'Bajo muebles, televisor, foseado', link: { q: 'BTF-LIGHTING COB LED strip 24V 3000K CRI 90' } },
      { name: 'TOPAI tira LED COB 24 V 5 m 3000 K IP65', type: 'Tira COB estanca', specs: 'IP65 • Ra 90+', best: 'Baño y exterior cubierto', link: { q: 'TOPAI COB LED strip 24V IP65' } },
      { name: 'Chesbung perfil de aluminio en V para tira (20 × 1 m)', type: 'Perfil', specs: 'Difusor ópalo • montaje en esquina', best: 'Una línea acabada', link: { q: 'Chesbung aluminium V profile LED strip' } },
    ],
  },
  criteria: A(
    ['COB (geen puntjes) of SMD', '24 V voor lange stukken', 'Ra ≥ 90', 'IP65 als het vochtig is', 'Profiel plus diffuser'],
    ['COB (ohne Punkte) oder SMD', '24 V für lange Strecken', 'Ra ≥ 90', 'IP65 bei Feuchte', 'Profil plus Diffusor'],
    ['COB (senza punti) o SMD', '24 V per i tratti lunghi', 'Ra ≥ 90', 'IP65 se c’è umidità', 'Profilo più diffusore'],
    ['COB (sin puntos) o SMD', '24 V para tramos largos', 'Ra ≥ 90', 'IP65 si hay humedad', 'Perfil más difusor'],
  ),
  extra: L(
    '<p><strong>COB</strong> (chip on board): de diodes zitten in een doorlopende band. Een diffuser verbergt de puntjes, zodat de lijn egaal oogt.</p>',
    '<p><strong>COB</strong> (Chip on Board): die Dioden sitzen in einem durchgehenden Band. Ein Diffusor verbirgt die Punkte, die Linie wirkt gleichmäßig.</p>',
    '<p><strong>COB</strong> (chip on board): i diodi stanno in una banda continua. Un diffusore nasconde i punti e la linea appare uniforme.</p>',
    '<p><strong>COB</strong> (chip on board): los diodos van en una banda continua. Un difusor oculta los puntos y la línea se ve uniforme.</p>',
  ),
  faq: Q(
    [['Heb ik een voeding nodig?', 'Ja: een 24V-voeding van stripvermogen × lengte + 20 %, niet bij deze strips inbegrepen. De calculator volgt in een volgend lot; tot die tijd geldt de vuistregel hierboven.']],
    [['Brauche ich ein Netzteil?', 'Ja: ein 24-V-Netzteil mit Streifenleistung × Länge + 20 %, nicht bei diesen Streifen enthalten. Der Rechner folgt; bis dahin gilt die Faustregel oben.']],
    [['Mi serve un alimentatore?', 'Sì: un alimentatore a 24 V da potenza della striscia × lunghezza + 20 %, non incluso con queste strisce. Il calcolatore arriverà; intanto vale la regola qui sopra.']],
    [['¿Necesito una fuente?', 'Sí: una fuente de 24 V de potencia de la tira × longitud + 20 %, no incluida con estas tiras. La calculadora llegará; mientras tanto vale la regla de arriba.']],
  ),
  related: L(
    '<a href="https://1piece1ampoule.fr/articles/installer-ruban-led/">een ledstrip plaatsen (FR)</a>',
    '<a href="https://1piece1ampoule.fr/articles/installer-ruban-led/">LED-Streifen verlegen (FR)</a>',
    '<a href="https://1piece1ampoule.fr/articles/installer-ruban-led/">posare una striscia LED (FR)</a>',
    '<a href="https://1piece1ampoule.fr/articles/installer-ruban-led/">instalar una tira LED (FR)</a>',
  ),
};

const desk: Cmp = {
  slug: 'desk', fr: '/meilleur/meilleure-lampe-de-bureau-led/',
  title: L('Beste ledbureaulamp en monitorbalk', 'Beste LED-Schreibtischlampe und Monitorleuchte', 'Migliore lampada LED da scrivania e barra monitor', 'Mejor lámpara LED de escritorio y barra de monitor'),
  h1: L('De beste ledbureaulamp en monitorbalk', 'Die beste LED-Schreibtischlampe und Monitorleuchte', 'La migliore lampada da scrivania e barra monitor', 'La mejor lámpara de escritorio y barra de monitor'),
  description: L(
    'Dimbare ledbureaulamp, architectenlamp of BenQ ScreenBar: vergelijking 2026 voor thuiswerk en huiswerk, zonder verblinding.',
    'Dimmbare LED-Schreibtischlampe, Architektenlampe oder BenQ ScreenBar: Vergleich 2026 für Homeoffice und Hausaufgaben, ohne Blendung.',
    'Lampada LED da scrivania dimmerabile, lampada da architetto o BenQ ScreenBar: confronto 2026 per smart working e compiti, senza abbagliamento.',
    'Lámpara LED de escritorio regulable, lámpara de arquitecto o BenQ ScreenBar: comparativa 2026 para teletrabajo y deberes, sin deslumbrar.',
  ),
  intro: L(
    'Om prettig te werken mikt u op ongeveer 500 lux op het blad, een instelbare kleurtemperatuur (3000–5000 K) en geen verblinding. Een monitorbalk past op een smal bureau.',
    'Zum bequemen Arbeiten zielen Sie auf etwa 500 Lux auf der Fläche, eine einstellbare Farbtemperatur (3000–5000 K) und keine Blendung. Eine Monitorleuchte passt auf einen schmalen Schreibtisch.',
    'Per lavorare bene puntate a circa 500 lux sul piano, una temperatura di colore regolabile (3000–5000 K) e niente abbagliamento. Una barra da monitor sta bene su una scrivania stretta.',
    'Para trabajar a gusto apunte a unos 500 lux sobre la mesa, una temperatura de color regulable (3000–5000 K) y nada de deslumbramiento. Una barra de monitor cabe en un escritorio estrecho.',
  ),
  products: {
    nl: [
      { name: 'Unilux Mambo ledbureaulamp 3000–5000 K', type: 'Bureaulamp', specs: '900 lux • klem en voet', best: 'Bureau van volwassene of kind', link: { q: 'Unilux Mambo LED desk lamp' } },
      { name: 'Architectenlamp op klem, 1.000 lm', type: 'Bureaulamp', specs: '3 kleurtemperaturen • 10 standen', best: 'Bureau en tekenen', link: { q: 'LED architect lamp clamp 1000 lumen' } },
      { name: 'BenQ ScreenBar monitorbalk', type: 'Monitorbalk', specs: 'Antiverblinding • automatische dimming', best: 'Thuiswerk en gamen', link: { q: 'BenQ ScreenBar' } },
      { name: 'BenQ ScreenBar Halo 2 met afstandsbediening', type: 'Monitorbalk', specs: 'Licht voor en achter • aanwezigheid', best: 'Een afgewerkt bureau', link: { q: 'BenQ ScreenBar Halo 2' } },
    ],
    de: [
      { name: 'Unilux Mambo LED-Schreibtischlampe 3000–5000 K', type: 'Schreibtischlampe', specs: '900 Lux • Klemme und Fuß', best: 'Schreibtisch von Erwachsenen oder Kindern', link: { q: 'Unilux Mambo LED desk lamp' } },
      { name: 'Architektenlampe mit Klemme, 1.000 lm', type: 'Schreibtischlampe', specs: '3 Farbtemperaturen • 10 Stufen', best: 'Schreibtisch und Zeichnen', link: { q: 'LED architect lamp clamp 1000 lumen' } },
      { name: 'BenQ ScreenBar Monitorleuchte', type: 'Monitorleuchte', specs: 'Blendfrei • automatisches Dimmen', best: 'Homeoffice und Gaming', link: { q: 'BenQ ScreenBar' } },
      { name: 'BenQ ScreenBar Halo 2 mit Fernbedienung', type: 'Monitorleuchte', specs: 'Licht vorn und hinten • Anwesenheit', best: 'Ein fertiger Schreibtisch', link: { q: 'BenQ ScreenBar Halo 2' } },
    ],
    it: [
      { name: 'Unilux Mambo lampada LED da scrivania 3000–5000 K', type: 'Lampada da scrivania', specs: '900 lux • morsetto e base', best: 'Scrivania di adulto o bambino', link: { q: 'Unilux Mambo LED desk lamp' } },
      { name: 'Lampada da architetto a morsetto, 1.000 lm', type: 'Lampada da scrivania', specs: '3 temperature • 10 livelli', best: 'Scrivania e disegno', link: { q: 'LED architect lamp clamp 1000 lumen' } },
      { name: 'BenQ ScreenBar barra da monitor', type: 'Barra monitor', specs: 'Antiabbaglio • regolazione automatica', best: 'Smart working e gioco', link: { q: 'BenQ ScreenBar' } },
      { name: 'BenQ ScreenBar Halo 2 con telecomando', type: 'Barra monitor', specs: 'Luce davanti e dietro • presenza', best: 'Una scrivania rifinita', link: { q: 'BenQ ScreenBar Halo 2' } },
    ],
    es: [
      { name: 'Unilux Mambo lámpara LED de escritorio 3000–5000 K', type: 'Lámpara de escritorio', specs: '900 lux • pinza y base', best: 'Escritorio de adulto o niño', link: { q: 'Unilux Mambo LED desk lamp' } },
      { name: 'Lámpara de arquitecto con pinza, 1.000 lm', type: 'Lámpara de escritorio', specs: '3 temperaturas • 10 niveles', best: 'Escritorio y dibujo', link: { q: 'LED architect lamp clamp 1000 lumen' } },
      { name: 'BenQ ScreenBar barra de monitor', type: 'Barra de monitor', specs: 'Antideslumbramiento • regulación automática', best: 'Teletrabajo y juego', link: { q: 'BenQ ScreenBar' } },
      { name: 'BenQ ScreenBar Halo 2 con mando', type: 'Barra de monitor', specs: 'Luz delante y detrás • presencia', best: 'Un escritorio acabado', link: { q: 'BenQ ScreenBar Halo 2' } },
    ],
  },
  criteria: A(
    ['Verlichtingssterkte (lux)', 'Instelbare kleurtemperatuur', 'Klem of voet', 'Geen weerkaatsing op het scherm'],
    ['Beleuchtungsstärke (Lux)', 'Einstellbare Farbtemperatur', 'Klemme oder Fuß', 'Keine Spiegelung auf dem Bildschirm'],
    ['Illuminamento (lux)', 'Temperatura di colore regolabile', 'Morsetto o base', 'Niente riflessi sullo schermo'],
    ['Iluminancia (lux)', 'Temperatura de color regulable', 'Pinza o base', 'Nada de reflejos en la pantalla'],
  ),
  faq: Q(
    [['Monitorbalk of gewone lamp?', 'De balk verlicht het blad zonder op het scherm te spiegelen en maakt plaats vrij. De lamp is veelzijdiger (lezen, tekenen).']],
    [['Monitorleuchte oder klassische Lampe?', 'Die Leiste beleuchtet die Fläche ohne Spiegelung auf dem Bildschirm und spart Platz. Die Lampe ist vielseitiger (Lesen, Zeichnen).']],
    [['Barra da monitor o lampada classica?', 'La barra illumina il piano senza riflettersi sullo schermo e libera spazio. La lampada è più versatile (lettura, disegno).']],
    [['¿Barra de monitor o lámpara clásica?', 'La barra ilumina la mesa sin reflejarse en la pantalla y libera sitio. La lámpara es más versátil (leer, dibujar).']],
  ),
  related: L(
    '<a href="https://1piece1ampoule.fr/pieces/bureau-adulte/">werkkamer (FR)</a>, <a href="https://1piece1ampoule.fr/tutoriels/eclairage-bureau-teletravail-lux-irc-kelvin/">verlichting thuiswerk (FR)</a>',
    '<a href="https://1piece1ampoule.fr/pieces/bureau-adulte/">Arbeitszimmer (FR)</a>, <a href="https://1piece1ampoule.fr/tutoriels/eclairage-bureau-teletravail-lux-irc-kelvin/">Homeoffice-Licht (FR)</a>',
    '<a href="https://1piece1ampoule.fr/pieces/bureau-adulte/">studio (FR)</a>, <a href="https://1piece1ampoule.fr/tutoriels/eclairage-bureau-teletravail-lux-irc-kelvin/">luce per lo smart working (FR)</a>',
    '<a href="https://1piece1ampoule.fr/pieces/bureau-adulte/">despacho (FR)</a>, <a href="https://1piece1ampoule.fr/tutoriels/eclairage-bureau-teletravail-lux-irc-kelvin/">luz para teletrabajar (FR)</a>',
  ),
};

const CMPS = [e27, gu10, smart, sensor, flood, bar, strip, desk];

function indexPage(loc: Loc, pages: EnPage[]): EnPage {
  const u = UI[loc];
  const copy = {
    nl: { title: 'Beste ledverlichting 2026: lampen, spots, strips, sensoren', description: 'Onze ledvergelijkingen: E27 en GU10, slimme lampen, sensorlampen, buitenschijnwerpers, onderkastlampen, ledstrips en bureaulampen.', h1: 'De beste ledkeuzes', lead: 'Elke vergelijking heeft minstens drie producten, een volledige tabel en gecontroleerde Amazon-links. De gegevens komen uit fabrieksfiches; we zeggen het als we zelf niet hebben gemeten.', before: 'Voor u koopt, de basis: <a href="https://1piece1ampoule.fr/guides/">gidsen</a> en <a href="/nl/tools/">het gereedschap</a>.' },
    de: { title: 'Beste LED-Beleuchtung 2026: Lampen, Spots, Streifen, Sensoren', description: 'Unsere LED-Vergleiche: E27 und GU10, smarte Lampen, Sensorleuchten, Außenstrahler, Unterbauleuchten, LED-Streifen und Schreibtischlampen.', h1: 'Die besten LED-Wahl', lead: 'Jeder Vergleich hat mindestens drei Produkte, eine vollständige Tabelle und geprüfte Amazon-Links. Die Daten stammen aus Herstellerangaben; wir sagen es, wenn wir selbst nicht gemessen haben.', before: 'Vor dem Kauf die Grundlagen: <a href="https://1piece1ampoule.fr/guides/">Ratgeber</a> und <a href="/de/werkzeuge/">Werkzeuge</a>.' },
    it: { title: 'Migliori luci LED 2026: lampadine, faretti, strisce, sensori', description: 'I nostri confronti LED: E27 e GU10, lampadine smart, luci con sensore, proiettori da esterno, barre sottopensile, strisce LED e lampade da scrivania.', h1: 'Le scelte LED migliori', lead: 'Ogni confronto ha almeno tre prodotti, una tabella completa e link Amazon verificati. I dati vengono dalle schede del produttore; lo diciamo quando non abbiamo misurato noi.', before: 'Prima di acquistare, le basi: <a href="https://1piece1ampoule.fr/guides/">guide</a> e <a href="/it/strumenti/">gli strumenti</a>.' },
    es: { title: 'Mejor iluminación LED 2026: bombillas, focos, tiras, sensores', description: 'Nuestras comparativas LED: E27 y GU10, bombillas inteligentes, luces con sensor, proyectores de exterior, regletas bajo mueble, tiras LED y lámparas de escritorio.', h1: 'Las mejores elecciones LED', lead: 'Cada comparativa tiene al menos tres productos, una tabla completa y enlaces de Amazon comprobados. Los datos salen de las fichas del fabricante; lo decimos cuando no hemos medido nosotros.', before: 'Antes de comprar, lo básico: <a href="https://1piece1ampoule.fr/guides/">guías</a> y <a href="/es/herramientas/">las herramientas</a>.' },
  }[loc];
  return {
    path: u.index, kicker: u.kicker.replace(' · bijgewerkt oktober 2026', '').replace(' · Stand Oktober 2026', '').replace(' · aggiornato a ottobre 2026', '').replace(' · actualizada en octubre de 2026', ''),
    title: copy.title, description: copy.description, h1: copy.h1, lead: copy.lead,
    body: `<div class="en-grid">${pages.map((p) => `<a class="en-tile" href="/${loc}/${p.path}/"><strong>${p.h1}</strong><span>${p.description.split(':')[0]}.</span></a>`).join('')}</div><p>${copy.before}</p>`,
  };
}

function buildLoc(loc: Loc): EnPage[] {
  const u = UI[loc];
  const pages = CMPS.map((c) => pageOf(loc, c, u.index));
  return [indexPage(loc, pages), ...pages];
}

export const TR_COMP_NL = buildLoc('nl');
export const TR_COMP_DE = buildLoc('de');
export const TR_COMP_IT = buildLoc('it');
export const TR_COMP_ES = buildLoc('es');

export const LOT_COMP_GROUPS: { fr: string; nl: string; de: string; it: string; es: string }[] = [
  { fr: '/meilleur/', nl: '/nl/vergelijkingen/', de: '/de/vergleiche/', it: '/it/confronti/', es: '/es/comparativas/' },
  ...CMPS.map((c) => ({
    fr: c.fr,
    nl: `/nl/vergelijkingen/${c.slug}/`,
    de: `/de/vergleiche/${c.slug}/`,
    it: `/it/confronti/${c.slug}/`,
    es: `/es/comparativas/${c.slug}/`,
  })),
];
