import type { EnPage } from './en';

const note = (lang: string) =>
  `<p class="en-note">${lang}</p>`;

export const INTENT_EN: EnPage[] = [
  {
    path: 'guides/e27-vs-b22',
    article: true,
    kicker: 'Compare',
    title: 'E27 vs B22: screw or bayonet, which base do you have?',
    description: 'E27 screws in (27 mm). B22 pushes and twists (22 mm bayonet). They are not interchangeable. How to tell them apart, when an adapter is a bad idea, and what to buy once you know the base.',
    h1: 'E27 vs B22',
    lead: 'E27 and B22 do not swap. E27 is an Edison screw, 27 mm. B22 is a bayonet cap: two lugs, push and a quarter turn, 22 mm. In the UK the pendant is usually B22. In France it is usually E27. The fitting you already have decides.',
    body: `<h2>Tell them apart</h2>
<table><thead><tr><th></th><th>E27</th><th>B22</th></tr></thead><tbody>
<tr><td>Also called</td><td>ES, Edison screw</td><td>BC, bayonet cap</td></tr>
<tr><td>How it fits</td><td>Screw</td><td>Push, then quarter turn</td></tr>
<tr><td>What you see</td><td>A metal thread</td><td>A smooth cap and two side lugs</td></tr>
<tr><td>Diameter</td><td>27 mm</td><td>22 mm</td></tr>
<tr><td>Typical home</td><td>France, most of Europe, newer UK lamps</td><td>UK ceiling pendants, some older French fittings</td></tr>
</tbody></table>
<p>Diameter is not enough. E14 is a smaller screw (14 mm). GU10 is a spotlight with two pins. The full list is on <a href="/en/guides/bulb-bases-b22-e26-e27-gu10/">bulb bases</a>.</p>
<h2>Which one to buy</h2>
<p>Match the bulb you remove. If you are choosing a new fitting, E27 has the wider range of smart, filament and dimmable lamps in Europe. In a UK ceiling rose that is already B22, stay with B22 unless you are happy to change the lampholder.</p>
<p>Brightness is lumens, not the cap. The official swap for an old 60 W incandescent is at least 806 lm, on either base. See <a href="/en/guides/lumens-vs-watts/">lumens vs watts</a>. Warm white for a living room is <a href="/en/guides/colour-temperature-kelvin/">2700 K</a>.</p>
<h2>B22 to E27 adapters</h2>
<p>The adapter locks into the B22 holder and you screw an E27 bulb into it. It adds length, often on the order of 2 to 3 cm depending on the model, and it adds a contact. In a closed shade that already runs warm, changing the lampholder is cleaner than stacking an adapter. An adapter does not change the voltage and does not make a non-dimmable bulb dimmable.</p>
<h2>Do not confuse them with E26</h2>
<p>E26 is the US medium screw, 26 mm, built for 120 V. It almost fits an E27 socket. A 120 V bulb on 230 V mains is the wrong lamp. Read the voltage printed on the cap. Only a bulb marked for your mains (or a wide-range 100–240 V driver) belongs there.</p>
${note('Figures for the 806 lm equivalence come from Commission Delegated Regulation (EU) 2019/2015, Annex V, table 7. Cap names follow IEC 60061 designations (E27, B22d).')}`,
  },
  {
    path: 'guides/smart-bulb-deal',
    article: true,
    kicker: 'Buying',
    title: 'Smart bulb deal: what is actually worth buying',
    description: 'A smart-bulb deal is the right base, the right radio and enough lumens, with a discount you can see at checkout. No verified promo code on 9 November 2026. How to compare Hue and a no-hub Wi-Fi bulb.',
    h1: 'What counts as a smart bulb deal',
    lead: 'The lowest sticker price is not the deal. The deal is a bulb that fits the socket, works with the phone or hub you already have, and shows its discount on the basket total.',
    body: `<h2>Compare the same numbers</h2>
<table><thead><tr><th>Check</th><th>Why it changes the price</th><th>Anchor</th></tr></thead><tbody>
<tr><td>Base</td><td>E27 does not screw into B22</td><td><a href="/en/guides/e27-vs-b22/">E27 vs B22</a></td></tr>
<tr><td>Radio</td><td>Wi-Fi needs no hub; Zigbee does</td><td><a href="/en/guides/bulb-bases-b22-e26-e27-gu10/">Bases</a>, then the French Wi-Fi vs Zigbee article if you read French</td></tr>
<tr><td>Useful lumens</td><td>Two “60 W” claims are not the same light</td><td>At least 806 lm to replace an old 60 W, <a href="/en/guides/lumens-vs-watts/">lumens table</a></td></tr>
<tr><td>Tint</td><td>Fixed white, tunable white, or colour</td><td><a href="/en/guides/colour-temperature-kelvin/">2700 K</a> for a living room</td></tr>
</tbody></table>
<h2>Three situations</h2>
<p><strong>One or two lamps, no hub.</strong> A Wi-Fi colour bulb such as the Tapo L530E (listing: 806 lm, no hub) is the short path. Each bulb joins 2.4 GHz Wi-Fi. Past one room, Zigbee is kinder to the router.</p>
<p><strong>Reliable warm white.</strong> Philips Hue White E27, EPREL sheet 739280 checked on 22 October 2026: 806 lm, 7.5 W on, 2700 K fixed, CRI 80, class F. Bluetooth in one room, Hue Bridge for schedules. CRI 80 is fine in a living room, short for a makeup mirror.</p>
<p><strong>You will actually change the white.</strong> Hue White Ambiance E27 1100 lm, EPREL 2187086, same date: 1100 lm, 8.1 W, 0.1 W standby, tunable white, class D. It costs more because it does more. It is only a deal if you use the tunable white.</p>
<p>Prices move, so this page does not print a figure that would already be stale. On 9 November 2026 this site has no verified promo code for a smart bulb: the OSRAM ALLSTARS code ended on 31 October 2026.</p>
<h2>Before you pay</h2>
<ul>
<li>The discount has to appear on the total. A code that does not apply is not a deal.</li>
<li>A smart bulb needs permanent power. A wall dimmer makes it flicker.</li>
<li>Colour-only modes use more watts for fewer useful white lumens.</li>
</ul>
${note('EPREL figures are from the EU product database sheets cited above, read on 22 October 2026. This is not a lab test of the bulbs.')}`,
  },
];

export const INTENT_DE: EnPage[] = [
  {
    path: 'ratgeber/e27-oder-b22',
    article: true,
    kicker: 'Vergleich',
    title: 'E27 oder B22: Schraube oder Bajonett?',
    description: 'E27 wird geschraubt (27 mm). B22 wird gesteckt und um eine Vierteldrehung verriegelt (Bajonett 22 mm). Die Fassungen sind nicht austauschbar. So erkennen Sie sie, und wann ein Adapter stört.',
    h1: 'E27 oder B22',
    lead: 'E27 und B22 passen nicht in dieselbe Fassung. E27 ist ein Edisongewinde, 27 mm. B22 ist ein Bajonett mit zwei Nasen: eindrücken, Vierteldrehung, 22 mm. In Deutschland ist E27 der Normalfall. B22 findet sich in älteren Leuchten und in britischen Fassungen.',
    body: `<h2>Unterscheiden</h2>
<table><thead><tr><th></th><th>E27</th><th>B22</th></tr></thead><tbody>
<tr><td>Griff</td><td>Schrauben</td><td>Drücken, dann Vierteldrehung</td></tr>
<tr><td>Zu sehen</td><td>Metallgewinde</td><td>Glatter Sockel, zwei seitliche Nasen</td></tr>
<tr><td>Durchmesser</td><td>27 mm</td><td>22 mm</td></tr>
</tbody></table>
<p>E14 ist die kleine Schraube (14 mm). GU10 ist ein Strahler mit zwei Stiften. Die Übersicht steht unter <a href="/de/ratgeber/lampensockel-e27-e14-gu10/">Lampensockel</a>.</p>
<h2>Was Sie kaufen</h2>
<p>Nehmen Sie denselben Sockel wie die alte Lampe. Bei einer neuen Leuchte ist E27 die größere Auswahl, auch bei <a href="/de/ratgeber/farbtemperatur-kelvin/">2700 K</a> und bei hohem <a href="/de/ratgeber/farbwiedergabe-cri-ra/">Ra</a>. Die Helligkeit steht in Lumen: eine alte 60-W-Glühlampe entspricht mindestens 806 lm, Sockel egal. Tabelle: <a href="/de/ratgeber/lumen-watt/">Lumen statt Watt</a>.</p>
<h2>Adapter B22 auf E27</h2>
<p>Der Adapter rastet in die B22-Fassung, danach schrauben Sie eine E27 hinein. Er macht die Lampe länger, je nach Modell oft um 2 bis 3 cm, und er setzt einen Kontakt dazu. In einer geschlossenen, warmen Leuchte ist ein Fassungswechsel sauberer. Der Adapter ändert weder die Spannung noch macht er eine nicht dimmbare Lampe dimmbar.</p>
<p class="en-note">806 lm: Delegierte Verordnung (EU) 2019/2015, Anhang V, Tabelle 7. Sockelbezeichnungen nach IEC 60061 (E27, B22d).</p>`,
  },
  {
    path: 'ratgeber/smarte-lampe-angebot',
    article: true,
    kicker: 'Kauf',
    title: 'Smarte Lampe im Angebot: woran Sie ein echtes Schnäppchen erkennen',
    description: 'Ein Angebot zählt, wenn Sockel, Funk und Lumen passen und der Rabatt im Warenkorb steht. Am 9. November 2026 kein geprüfter Gutschein für smarte Lampen. Vergleich Hue und WLAN-Lampe ohne Bridge.',
    h1: 'Smarte Lampe: was ein Angebot wert ist',
    lead: 'Der niedrigste Streichpreis ist kein Angebot. Die Lampe muss in die Fassung passen, mit dem Handy oder der Bridge funktionieren, die Sie schon haben, und der Nachlass muss auf der Summe erscheinen.',
    body: `<h2>Dieselben Größen vergleichen</h2>
<table><thead><tr><th>Punkt</th><th>Warum der Preis sich ändert</th></tr></thead><tbody>
<tr><td>Sockel</td><td>E27 passt nicht in B22. <a href="/de/ratgeber/e27-oder-b22/">E27 oder B22</a></td></tr>
<tr><td>Funk</td><td>WLAN ohne Bridge, Zigbee mit Bridge</td></tr>
<tr><td>Lumen</td><td>Mindestens 806 lm für eine alte 60 W. <a href="/de/ratgeber/lumen-watt/">Tabelle</a></td></tr>
<tr><td>Lichtfarbe</td><td>Festes Warmweiß, einstellbares Weiß oder Farbe. <a href="/de/ratgeber/farbtemperatur-kelvin/">2700 K</a> im Wohnzimmer</td></tr>
</tbody></table>
<p><strong>Eine oder zwei Lampen, keine Bridge.</strong> Eine WLAN-Farblichtlampe (Angabe Tapo L530E: 806 lm) ist der kurze Weg. Jede Lampe hängt am 2,4-GHz-WLAN.</p>
<p><strong>Zuverlässiges Warmweiß.</strong> Philips Hue White E27, EPREL 739280, gelesen am 22. Oktober 2026: 806 lm, 7,5 W, 2700 K fest, Ra 80, Klasse F. Bluetooth im Raum, Hue Bridge für Zeitpläne.</p>
<p><strong>Weißton wirklich genutzt.</strong> Hue White Ambiance E27 1100 lm, EPREL 2187086, gleiches Datum: 1100 lm, 8,1 W, 0,1 W Standby, Klasse D. Teurer, weil sie mehr kann.</p>
<p>Am 9. November 2026 liegt hier kein geprüfter Gutscheincode für smarte Lampen: der OSRAM-Code ALLSTARS endete am 31. Oktober 2026. Der Rabatt muss auf der Summe stehen. Eine smarte Lampe braucht Dauerstrom; ein Wanddimmer lässt sie flackern.</p>
<p class="en-note">EPREL-Zahlen aus den genannten EU-Datenblättern, Stand 22. Oktober 2026. Kein eigener Labortest.</p>`,
  },
];

export const INTENT_NL: EnPage[] = [
  {
    path: 'gidsen/e27-vs-b22',
    article: true,
    kicker: 'Vergelijken',
    title: 'E27 vs B22: schroef of bajonet?',
    description: 'E27 schroeft u in (27 mm). B22 duwt u in en draait u een kwartslag (bajonet 22 mm). Ze passen niet in dezelfde fitting. Zo herkent u ze, en wanneer een verloop lastig is.',
    h1: 'E27 vs B22',
    lead: 'E27 en B22 zijn niet uitwisselbaar. E27 is een Edisonschroef van 27 mm. B22 is een bajonet met twee nokken: indrukken, kwartslag, 22 mm. In Nederland en Vlaanderen is E27 de gewone fitting. B22 zit in oudere armaturen en in Britse lampen.',
    body: `<h2>Herkennen</h2>
<table><thead><tr><th></th><th>E27</th><th>B22</th></tr></thead><tbody>
<tr><td>Beweging</td><td>Schraaien</td><td>Drukken, dan kwartslag</td></tr>
<tr><td>Wat u ziet</td><td>Metalen schroefdraad</td><td>Gladde huls, twee nokken opzij</td></tr>
<tr><td>Diameter</td><td>27 mm</td><td>22 mm</td></tr>
</tbody></table>
<p>E14 is de kleine schroef (14 mm). GU10 is een spot met twee pinnen. Overzicht: <a href="/nl/gidsen/lampfittingen-e27-e14-gu10/">lampfittingen</a>.</p>
<h2>Wat u koopt</h2>
<p>Neem dezelfde fitting als de lamp die u eruit haalt. Bij een nieuw armatuur heeft E27 meer keuze, ook in <a href="/nl/gidsen/kleurtemperatuur-kelvin/">2700 K</a> en een hoge <a href="/nl/gidsen/kleurweergave-cri-ra/">Ra-waarde</a>. Helderheid staat in lumen: een oude gloeilamp van 60 W is minstens 806 lm, fitting maakt niet uit. Tabel: <a href="/nl/gidsen/lumen-watt/">watt naar lumen</a>.</p>
<h2>Verloop van B22 naar E27</h2>
<p>Het verloop klikt in de B22-fitting, daarna schroeft u een E27 erin. Het maakt de lamp langer, vaak zo’n 2 tot 3 cm afhankelijk van het model, en het voegt een contact toe. In een dichte, warme kap is een nieuwe fitting netter. Het verloop verandert de netspanning niet en maakt een niet-dimbare lamp niet dimbaar.</p>
<p class="en-note">806 lm: Gedelegeerde Verordening (EU) 2019/2015, bijlage V, tabel 7. Fittingnamen volgens IEC 60061 (E27, B22d).</p>`,
  },
  {
    path: 'gidsen/slimme-lamp-aanbieding',
    article: true,
    kicker: 'Kopen',
    title: 'Slimme lamp in de aanbieding: wanneer het echt een koopje is',
    description: 'Een aanbieding telt als fitting, radio en lumen kloppen en de korting in de winkelmand staat. Op 9 november 2026 geen gecontroleerde code voor slimme lampen. Hue tegenover wifi zonder bridge.',
    h1: 'Slimme lamp: wat een aanbieding waard is',
    lead: 'De laagste streepprijs is geen koopje. De lamp moet in de fitting passen, werken met de telefoon of bridge die u al hebt, en de korting moet op het totaal staan.',
    body: `<h2>Dezelfde cijfers vergelijken</h2>
<table><thead><tr><th>Punt</th><th>Waarom de prijs verschuift</th></tr></thead><tbody>
<tr><td>Fitting</td><td>E27 past niet in B22. <a href="/nl/gidsen/e27-vs-b22/">E27 vs B22</a></td></tr>
<tr><td>Radio</td><td>Wifi zonder bridge, Zigbee mét bridge</td></tr>
<tr><td>Lumen</td><td>Minstens 806 lm voor een oude 60 W. <a href="/nl/gidsen/lumen-watt/">Watt naar lumen</a></td></tr>
<tr><td>Kleur</td><td>Vast warmwit, instelbaar wit of kleur. <a href="/nl/gidsen/kleurtemperatuur-kelvin/">2700 K</a> in de woonkamer</td></tr>
</tbody></table>
<p><strong>Een of twee lampen, geen bridge.</strong> Een wifi-kleurlamp (opgave Tapo L530E: 806 lm) is de korte route. Elke lamp zit op 2,4 GHz wifi.</p>
<p><strong>Betrouwbaar warmwit.</strong> Philips Hue White E27, EPREL 739280, gelezen op 22 oktober 2026: 806 lm, 7,5 W, 2700 K vast, Ra 80, klasse F.</p>
<p><strong>Wit tint écht gebruikt.</strong> Hue White Ambiance E27 1100 lm, EPREL 2187086, zelfde datum: 1100 lm, 8,1 W, 0,1 W standby, klasse D.</p>
<p>Op 9 november 2026 staat hier geen gecontroleerde code voor een slimme lamp: de OSRAM-code ALLSTARS liep af op 31 oktober 2026. De korting moet op het totaal staan. Een slimme lamp heeft permanente spanning nodig; een wanddimmer laat haar flikkeren.</p>
<p class="en-note">EPREL-cijfers uit de genoemde EU-bladen, stand 22 oktober 2026. Geen eigen laboratoriumtest.</p>`,
  },
];

export const INTENT_ES: EnPage[] = [
  {
    path: 'guias/e27-o-b22',
    article: true,
    kicker: 'Comparar',
    title: 'E27 o B22: rosca o bayoneta',
    description: 'La E27 se enrosca (27 mm). La B22 se empuja y gira un cuarto de vuelta (bayoneta de 22 mm). No son intercambiables. Cómo distinguirlas y cuándo un adaptador estorba.',
    h1: 'E27 o B22',
    lead: 'E27 y B22 no entran en el mismo portalámparas. E27 es una rosca Edison de 27 mm. B22 es una bayoneta con dos tetones: empujar y un cuarto de vuelta, 22 mm. En España lo habitual es E27. La B22 aparece en lámparas antiguas y en casquillos británicos.',
    body: `<h2>Distinguirlas</h2>
<table><thead><tr><th></th><th>E27</th><th>B22</th></tr></thead><tbody>
<tr><td>Gesto</td><td>Enroscar</td><td>Empujar y un cuarto de vuelta</td></tr>
<tr><td>Qué se ve</td><td>Rosca metálica</td><td>Casquillo liso y dos tetones</td></tr>
<tr><td>Diámetro</td><td>27 mm</td><td>22 mm</td></tr>
</tbody></table>
<p>E14 es la rosca pequeña (14 mm). GU10 es un foco de dos pines. Lista: <a href="/es/guias/casquillos-e27-e14-gu10/">casquillos</a>.</p>
<h2>Qué comprar</h2>
<p>Compre el mismo casquillo que la bombilla que quita. En una lámpara nueva, E27 tiene más modelos, también en <a href="/es/guias/temperatura-color-kelvin/">2700 K</a> y con <a href="/es/guias/reproduccion-cromatica-cri-ra/">Ra alto</a>. La luz se mide en lúmenes: una incandescente de 60 W son como mínimo 806 lm. Tabla: <a href="/es/guias/lumenes-vatios/">lúmenes y vatios</a>.</p>
<h2>Adaptador de B22 a E27</h2>
<p>Encaja en el portalámparas B22 y después se enrosca una E27. Alarga la bombilla, a menudo del orden de 2 a 3 cm según el modelo, y añade un contacto. En una pantalla cerrada que se calienta, cambiar el portalámparas es más limpio. El adaptador no cambia la tensión ni vuelve regulable una bombilla que no lo es.</p>
<p class="en-note">806 lm: Reglamento Delegado (UE) 2019/2015, anexo V, tabla 7. Nombres de casquillo según IEC 60061 (E27, B22d).</p>`,
  },
  {
    path: 'guias/oferta-bombilla-inteligente',
    article: true,
    kicker: 'Compra',
    title: 'Oferta en bombilla inteligente: cuándo compensa de verdad',
    description: 'Una oferta vale si casquillo, radio y lúmenes encajan y el descuento se ve en el total. El 9 de noviembre de 2026 no hay un código verificado para bombillas conectadas. Hue frente a wifi sin puente.',
    h1: 'Bombilla inteligente: qué es una oferta útil',
    lead: 'El precio tachado más bajo no es la oferta. La bombilla tiene que entrar en el casquillo, funcionar con el móvil o el puente que ya tiene, y el descuento tiene que salir en el total.',
    body: `<h2>Compare las mismas cifras</h2>
<table><thead><tr><th>Punto</th><th>Por qué cambia el precio</th></tr></thead><tbody>
<tr><td>Casquillo</td><td>E27 no entra en B22. <a href="/es/guias/e27-o-b22/">E27 o B22</a></td></tr>
<tr><td>Radio</td><td>Wi-Fi sin puente, Zigbee con puente</td></tr>
<tr><td>Lúmenes</td><td>Al menos 806 lm para una antigua de 60 W. <a href="/es/guias/lumenes-vatios/">Tabla</a></td></tr>
<tr><td>Tono</td><td>Blanco fijo, blanco regulable o color. <a href="/es/guias/temperatura-color-kelvin/">2700 K</a> en el salón</td></tr>
</tbody></table>
<p><strong>Una o dos lámparas, sin puente.</strong> Una bombilla wifi de color (ficha Tapo L530E: 806 lm) es el camino corto.</p>
<p><strong>Blanco cálido fiable.</strong> Philips Hue White E27, EPREL 739280, consultada el 22 de octubre de 2026: 806 lm, 7,5 W, 2700 K fijos, Ra 80, clase F.</p>
<p><strong>Blanco que sí va a cambiar.</strong> Hue White Ambiance E27 1100 lm, EPREL 2187086, misma fecha: 1100 lm, 8,1 W, 0,1 W en reposo, clase D.</p>
<p>El 9 de noviembre de 2026 no hay un código promocional verificado para bombillas conectadas: el código OSRAM ALLSTARS terminó el 31 de octubre de 2026. El descuento tiene que verse en el total. Una bombilla conectada necesita tensión permanente; un regulador de pared la hace parpadear.</p>
<p class="en-note">Cifras EPREL de las fichas citadas, lectura del 22 de octubre de 2026. No es un ensayo de laboratorio propio.</p>`,
  },
];

export const INTENT_IT: EnPage[] = [
  {
    path: 'guide/e27-o-b22',
    article: true,
    kicker: 'Confronto',
    title: 'E27 o B22: vite o baionetta',
    description: 'L’E27 si avvita (27 mm). Il B22 si spinge e si gira di un quarto di giro (baionetta 22 mm). Non sono intercambiabili. Come riconoscerli e quando un adattatore è una cattiva idea.',
    h1: 'E27 o B22',
    lead: 'E27 e B22 non entrano nello stesso portalampada. E27 è una vite Edison da 27 mm. B22 è una baionetta con due nottolini: si spinge e si gira di un quarto, 22 mm. In Italia lo standard è l’E27. Il B22 resta su lampade vecchie e su portalampada britannici.',
    body: `<h2>Riconoscerli</h2>
<table><thead><tr><th></th><th>E27</th><th>B22</th></tr></thead><tbody>
<tr><td>Gesto</td><td>Avvitare</td><td>Spingere, poi un quarto di giro</td></tr>
<tr><td>Cosa si vede</td><td>Filettatura metallica</td><td>Attacco liscio e due nottolini</td></tr>
<tr><td>Diametro</td><td>27 mm</td><td>22 mm</td></tr>
</tbody></table>
<p>E14 è la vite piccola (14 mm). GU10 è un faretto a due piedini. Elenco: <a href="/it/guide/attacchi-e27-e14-gu10/">attacchi</a>.</p>
<h2>Cosa comprare</h2>
<p>Prenda lo stesso attacco della lampadina che toglie. Su un apparecchio nuovo l’E27 ha più scelta, anche a <a href="/it/guide/temperatura-colore-kelvin/">2700 K</a> e con <a href="/it/guide/resa-cromatica-cri-ra/">Ra alto</a>. La luce si legge in lumen: una vecchia da 60 W è almeno 806 lm. Tabella: <a href="/it/guide/lumen-watt/">lumen e watt</a>.</p>
<h2>Adattatore da B22 a E27</h2>
<p>Si innesta nel portalampada B22, poi si avvita una E27. Allunga la lampadina, spesso di circa 2–3 cm secondo il modello, e aggiunge un contatto. In un paralume chiuso che scalda, cambiare il portalampada è più pulito. L’adattatore non cambia la tensione e non rende dimmerabile una lampadina che non lo è.</p>
<p class="en-note">806 lm: regolamento delegato (UE) 2019/2015, allegato V, tabella 7. Nomi degli attacchi secondo IEC 60061 (E27, B22d).</p>`,
  },
  {
    path: 'guide/offerta-lampadina-smart',
    article: true,
    kicker: 'Acquisto',
    title: 'Offerta lampadina smart: quando conviene davvero',
    description: 'Un’offerta vale se attacco, radio e lumen coincidono e lo sconto compare nel totale. Il 9 novembre 2026 non c’è un codice verificato sulle lampadine connesse. Hue contro Wi-Fi senza bridge.',
    h1: 'Lampadina smart: cos’è un’offerta utile',
    lead: 'Il prezzo barrato più basso non è l’offerta. La lampadina deve entrare nell’attacco, funzionare con il telefono o il bridge che ha già, e lo sconto deve vedersi sul totale.',
    body: `<h2>Confronti gli stessi numeri</h2>
<table><thead><tr><th>Voce</th><th>Perché il prezzo cambia</th></tr></thead><tbody>
<tr><td>Attacco</td><td>E27 non entra nel B22. <a href="/it/guide/e27-o-b22/">E27 o B22</a></td></tr>
<tr><td>Radio</td><td>Wi-Fi senza bridge, Zigbee con bridge</td></tr>
<tr><td>Lumen</td><td>Almeno 806 lm per una vecchia da 60 W. <a href="/it/guide/lumen-watt/">Tabella</a></td></tr>
<tr><td>Tinta</td><td>Bianco fisso, bianco regolabile o colore. <a href="/it/guide/temperatura-colore-kelvin/">2700 K</a> in soggiorno</td></tr>
</tbody></table>
<p><strong>Una o due lampade, senza bridge.</strong> Una lampadina Wi-Fi a colori (scheda Tapo L530E: 806 lm) è la strada corta.</p>
<p><strong>Bianco caldo affidabile.</strong> Philips Hue White E27, EPREL 739280, letta il 22 ottobre 2026: 806 lm, 7,5 W, 2700 K fissi, Ra 80, classe F.</p>
<p><strong>Bianco che userà davvero.</strong> Hue White Ambiance E27 1100 lm, EPREL 2187086, stessa data: 1100 lm, 8,1 W, 0,1 W in standby, classe D.</p>
<p>Il 9 novembre 2026 non c’è un codice promozionale verificato per le lampadine connesse: il codice OSRAM ALLSTARS è scaduto il 31 ottobre 2026. Lo sconto deve comparire sul totale. Una lampadina smart vuole tensione sempre presente; un varialuce a muro la fa sfarfallare.</p>
<p class="en-note">Cifre EPREL dalle schede citate, lettura del 22 ottobre 2026. Non è una prova di laboratorio nostra.</p>`,
  },
];
