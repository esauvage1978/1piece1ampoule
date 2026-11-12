// Prioriteitspagina’s NL (okt. 2026). Vertaald uit FR-bronnen, gecontroleerd 23/10/2026.
import type { EnPage } from './en';

const amz = (asin: string, label: string) => `<a class="en-amz" href="https://www.amazon.nl/dp/${asin}?tag=manuso0607-21" rel="nofollow sponsored noopener" target="_blank" data-asin="${asin}" data-product="${label}">Prijs op Amazon.nl bekijken</a>`;
const note = `<p class="en-note">Productgegevens van fabrikant/Amazon, gecontroleerd op 23/10/2026. Prijzen wijzigen. Als Amazon-partner verdienen wij aan in aanmerking komende aankopen.</p>`;

const err = (p: Omit<EnPage, 'article'> & { kicker?: string }): EnPage => ({
  ...p,
  article: true,
  kicker: p.kicker ?? 'Foutcode-gids',
});

export const TR_PRIORITY_NL: EnPage[] = [
  {
    path: 'zones/keukenblad',
    article: true,
    kicker: "Zone-gids",
    title: "Keukenblad verlichten: lux, lumen, kelvin en LED-balken",
    description: "Hoeveel lumen onder bovenkastjes, kelvin en CRI, drie netwerk-LED-balken (lm/m). Doel: 500 lux op het werkblad.",
    h1: "Verlichting keukenblad",
    lead: "Het plafondlicht verlicht de keuken, maar u kookt met uw rug naar het licht — uw lichaam werpt schaduw op het blad. Oplossing: licht onder de bovenkastjes.",
    body: `<h2>Drie cijfers onthouden</h2>
<ul>
<li><strong>500 lux</strong> op het werkblad om te snijden en een recept te lezen — onze richtwaarde voor «precieze taken» in het <a href="/nl/handleidingen/lux-lumen-per-ruimte-berekenen/">lux-overzicht per ruimte</a>.</li>
<li><strong>420 lm per meter</strong> minimaal: voor een blad van 3,0 × 0,6 m geldt 500 lx × 1,8 m² × factor 1,4 (dichte bron) ≈ 1.260 lm, dus 420 lm/m keukenmeubel.</li>
<li><strong>4000 K en CRI (kleurweergave-index) ≥ 80</strong> (90 indien mogelijk) om voedsel te beoordelen zonder kleurzweem — zie <a href="/nl/gidsen/kleurtemperatuur-kelvin/">kleurtemperatuur</a> en <a href="/nl/gidsen/kleurweergave-cri-ra/">CRI</a>.</li>
</ul>
<h2>Drie netwerk-LED-balken vergeleken</h2>
<p>Lumen per meter = opgegeven lichtstroom ÷ lengte (fabrikantgegevens, gecontroleerd op 23/10/2026). Alle balken halen ruim de 420 lm/m; het verschil zit vooral in kleur, montage en lengte.</p>
<table><thead><tr><th>Product</th><th>Voeding</th><th>Lichtstroom</th><th>lm/m (berekend)</th><th>Kleur</th><th>Serieschakeling</th></tr></thead><tbody>
<tr><td>DA LIGHT draaibare balk 56 cm <a class="en-amz" href="https://www.amazon.nl/dp/B07H7HB6LG?tag=manuso0607-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B07H7HB6LG" data-product="DA LIGHT 56 cm bar">Prijs op Amazon.nl bekijken</a></td><td>230 V, schakelaar</td><td>560 lm</td><td>1.000 lm/m</td><td>3000 / 4000 / 6000 K</td><td>Ja, koppelbaar</td></tr>
<tr><td>SEBSON keukenbalk 60 cm <a class="en-amz" href="https://www.amazon.nl/dp/B01LZEWUT7?tag=manuso0607-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B01LZEWUT7" data-product="SEBSON 60 cm bar">Prijs op Amazon.nl bekijken</a></td><td>230 V, stekker + schakelaar</td><td>715 lm (11 W)</td><td>1.192 lm/m</td><td>3000 K</td><td>Eén balk per stopcontact</td></tr>
<tr><td>Oktaplex Riga 28 cm <a class="en-amz" href="https://www.amazon.nl/dp/B0CGRC4GQ9?tag=manuso0607-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0CGRC4GQ9" data-product="Oktaplex Riga 28 cm">Prijs op Amazon.nl bekijken</a></td><td>230 V</td><td>370 lm (4 W)</td><td>1.321 lm/m</td><td>4000 K</td><td>Ja, uitbreidbaar</td></tr>
</tbody></table>
<p><strong>Keuze:</strong> DA LIGHT — 1.000 lm/m (meer dan het dubbele van het doel), drie wittonen waaronder 4000 K, draaikop richting achterwand, meerdere balken op één stekker.</p>
<h2>Geen stopcontact onder de kastjes?</h2>
<p>Een oplaadbare balk (bijv. OUILA 60 cm op de Franse site) is geschikt als reserve; publiceert de fabrikant geen lumen, vertrouw er dan niet op als hoofdverlichting van het werkblad.</p>
<h2>Balk of LED-strip?</h2>
<p>Een balk schroef je vast en steek je in het stopcontact — ongeveer 15 minuten montage. Strip in een aluminiumprofiel geeft een doorlopende lijn, maar vereist een passende 24 V-voeding. Zie <a href="/nl/handleidingen/ledstrip-onder-keukenkastjes/">LED-strip onder keukenkastjes</a>.</p>
<h2>Plaatsing</h2>
<ul>
<li>Zo ver mogelijk naar de <strong>voorzijde</strong> van het wandmeubel, zodat het licht op het blad valt en niet alleen op de achterwand.</li>
<li>Eén balk per keukenlijn, met 2–3 cm marge aan elk einde voor eindkappen.</li>
<li>Geen armatuur boven de gootsteen zonder de juiste <a href="/nl/gidsen/ip-beschermingsgraad-badkamer-buiten/">IP-classificatie</a>.</li>
</ul>
<p>Algemene keukenverlichting: <a href="https://1piece1ampoule.fr/pieces/cuisine/">keukengids</a> (Franse versie, de Nederlandse pagina volgt). Meer zones op het Franse <a href="https://1piece1ampoule.fr/zones/">zone-overzicht</a>.</p>`,
  },
  {
    path: 'merken/luminaire-fr',
    article: true,
    kicker: "Partnerwinkel",
    title: "Luminaire.fr: verzending €39,90 bulky, 30 dagen retour",
    description: "Winkelfiche Lampenwelt/Luminaire.fr. Bijgewerkt 23/10/2026.",
    h1: "Luminaire.fr: onze winkelbeoordeling",
    lead: "Franse shop van Lampenwelt GmbH (Fulda). Multimerken — breder assortiment hang- en wandlampen dan op Amazon.",
    body: `<h2>Catalogue</h2>
<p>Indoor fittings (pendants, ceiling, wall, floor, spots), outdoor lighting (bollards, solar, motion), bulbs, smart home and seasonal décor. Featured brands include Lindby, Lucande, Arcchio, Prios, EGLO, Paulmann, Philips, Philips Hue, OSRAM, SLV, <a href="/nl/merken/steinel/">Steinel</a>, plus design names (Artemide, FLOS, Louis Poulsen, Foscarini…).</p>
<h2>Delivery (France mainland — source Luminaire.fr, 23/10/2026)</h2>
<ul>
<li>Standard DPD, or GLS parcel shop (held 5–8 days depending on shop).</li>
<li><strong>Bulky items: €39.90 per order</strong>, even when standard delivery is free; no parcel shop for bulky lines.</li>
<li>Metropolitan France only (no overseas territories).</li>
<li>Lead time depends on stock; tracking email when shipped. Prices incl. French VAT.</li>
</ul>
<h2>Returns and support</h2>
<ul>
<li><strong>30 days to return</strong> without giving a reason: 14 days legal withdrawal plus 16 days voluntary return.</li>
<li>Return shipping paid by the customer (shown on the returns portal).</li>
<li>Legal conformity warranty from Lampenwelt, plus manufacturers’ warranties (dedicated page on the site).</li>
<li>Customer service: phone +33 9 77 55 39 95, email or contact form.</li>
</ul>
<p class="en-note">Sources: luminaire.fr shipping and T&amp;C (art. 7), checked 23/10/2026. UK readers: this merchant ships within France; use it when buying for a French property or compare UK retailers locally.</p>
<h2>Strengths and limits</h2>
<table><thead><tr><th>Strengths</th><th>Limits</th></tr></thead><tbody>
<tr><td>Very wide range, entry level to design</td><td>Paid returns</td></tr>
<tr><td>30-day return window (twice the legal minimum in France)</td><td>€39.90 bulky delivery fee</td></tr>
<tr><td>Parcel shop for small parcels</td><td>No overseas French delivery</td></tr>
<tr><td>Seasonal sales, when a dated offer is live</td><td>Promo codes often exclude design brands. None verified on 9 November 2026</td></tr>
</tbody></table>
<p>We use Luminaire.fr when we need a specific fitting (dining pendant, IP44 bathroom wall light, garden bollard) rather than a bulb alone. Measure before ordering large pieces. For bulbs only, Amazon UK or the <a href="/nl/merken/osram-ledvance/">OSRAM shop</a> is often simpler.</p>
<p>Geen gecontroleerde code op 9 november 2026. De midseizoensactie eindigde op 25 oktober 2026. Een korting telt alleen als ze op het totaal staat. De winkel levert binnen Frankrijk. Acties, als die er zijn: <a href="/nl/actiecodes/">actiecodes</a>.</p>`,
  },
  {
    path: 'actiecodes',
    template: 'promo-codes',
    kicker: "Acties",
    title: "Actiecodes verlichting — oktober 2026",
    description: "Gecontroleerde partnercodes met einddatum.",
    h1: "Actiecodes verlichting",
    lead: '',
    body: '',
  },
  {
    path: 'gidsen/smarte-lampen-cadeau-ideeen',
    article: true,
    kicker: "Cadeau-gids",
    title: "Slimme lampen cadeau: Wi-Fi, Bluetooth of Zigbee",
    description: "Cadeau zonder verkeerde fitting: E27, GU10, Wi-Fi 2,4 GHz of Zigbee. Vier ideeën (Hue, Tapo).",
    h1: "Cadeau-ideeën: slimme lampen",
    lead: "Een slimme lamp is een goed cadeau als hij past en werkt met de router of telefoon van de ontvanger. Drie vragen volstaan.",
    body: `<h2>Three questions before buying</h2>
<ol>
<li><strong>Which base?</strong> E27 in most pendants, E14 for small shades, GU10 for spot fittings. See <a href="/nl/gidsen/lampfittingen-e27-e14-gu10/">bulb bases</a>.</li>
<li><strong>Which radio?</strong> Wi-Fi works without a hub but needs the router’s <strong>2.4 GHz Wi-Fi</strong> band (many IoT devices do not join 5 GHz). <strong>Zigbee</strong> needs a hub (Hue Bridge, some smart speakers) but scales better with many bulbs. Philips Hue also works over <strong>Bluetooth</strong> for up to about ten bulbs in one room.</li>
<li><strong>White only or colour?</strong> Tunable white suits daily use; colour is mainly for mood and TV sync.</li>
</ol>
<h2>Who gets what</h2>
<table><thead><tr><th>Profile</th><th>Idea</th><th>Verified data</th></tr></thead><tbody>
<tr><td>Beginner, no hub</td><td>Tapo L530E (Wi-Fi, colour)</td><td>8.7 W (60 W equivalent), dimmable, no hub</td></tr>
<tr><td>Try Hue on a budget</td><td>Hue White E27 806 lm, 2-pack</td><td>EPREL 739280: 806 lm, 7.5 W, 2700 K, CRI 80, class F</td></tr>
<tr><td>Dark winter mornings</td><td>Hue White Ambiance E27 1100 lm</td><td>EPREL 2187086: 1100 lm, 8.1 W, standby 0.1 W, class D</td></tr>
<tr><td>Film and colour fan</td><td>Hue White &amp; Color starter kit E27</td><td>Model 9290024688A: 1055 lm, 11 W, 2000–6500 K + colours; bridge and remote in box</td></tr>
</tbody></table>
<h2>Verified picks (Amazon UK)</h2>
<a class="en-amz" href="https://www.amazon.nl/dp/B08GDC99PX?tag=manuso0607-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B08GDC99PX" data-product="Tapo L530E Wi-Fi colour E27">Prijs op Amazon.nl bekijken</a><a class="en-amz" href="https://www.amazon.nl/dp/B099NPGWCQ?tag=manuso0607-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B099NPGWCQ" data-product="Hue White E27 2-pack">Prijs op Amazon.nl bekijken</a><a class="en-amz" href="https://www.amazon.nl/dp/B0FJ8VXHRX?tag=manuso0607-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0FJ8VXHRX" data-product="Hue White Ambiance 1100 lm">Prijs op Amazon.nl bekijken</a><a class="en-amz" href="https://www.amazon.nl/dp/B099NRLRG3?tag=manuso0607-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B099NRLRG3" data-product="Hue White & Color starter kit">Prijs op Amazon.nl bekijken</a><p class="en-note">Listing data from manufacturer/Amazon pages checked 23 October 2026. Prices change — verify before buying. As an Amazon Associate I earn from qualifying purchases.</p>
<h2>So it works on Christmas morning</h2>
<ul>
<li>Include the gift receipt — wrong base means an easy swap.</li>
<li>Smart bulbs need permanent power: the wall switch stays ON, or add a wireless remote. See <a href="/nl/gidsen/slimme-schakelaar-zonder-nul-compatibiliteit/">smart switch without neutral</a>.</li>
<li>On a legacy dimmer, smart bulbs flicker — remove the dimmer or lock it at full.</li>
</ul>
<p>More: <a href="/nl/merken/philips-hue/">Philips Hue brand page</a>, winter lighting on the French site.</p>`,
  },
  {
    path: 'gidsen/slimme-schakelaar-zonder-nul-compatibiliteit',
    article: true,
    kicker: "Smart-home-gids",
    title: "Slimme schakelaar zonder nul: Shelly, Legrand, Aqara, Sonoff, Schneider",
    description: "Welke 2-draadsmodule zonder n in de doos? Matrix Wi-Fi/Zigbee, minimale LED-last, bypass.",
    h1: "Compatibiliteit: slimme schakelaar zonder nul",
    lead: "In veel NL/BE-installaties ontbreekt de nul in de schakelaar. 2-draadsmodules sturen standby-stroom via de lamp — bij LED vaak bypass. Werk door erkend installateur (NEN 1010 / AREI).",
    body: `<h2>Module matrix (manufacturer data — check exact SKU before buying)</h2>
<table><thead><tr><th>Product</th><th>Protocol</th><th>No neutral</th><th>Min. load</th><th>LED bypass</th><th>Dimming</th><th>Note</th></tr></thead><tbody>
<tr><td>Shelly 1L</td><td>Wi-Fi 2.4 GHz</td><td>Yes (2-wire)</td><td>3 W LED</td><td>Often yes</td><td>On/off only</td><td>Bypass at fitting; local + cloud control</td></tr>
<tr><td>Shelly Dimmer 2</td><td>Wi-Fi</td><td>No — neutral required</td><td>1 W</td><td>Sometimes</td><td>Yes</td><td>Not a true 2-wire solution</td></tr>
<tr><td>Legrand Céliane with Netatmo</td><td>Zigbee</td><td>Yes (2-wire module)</td><td>5 W</td><td>Often yes</td><td>Dimmer variants</td><td>Complete switch plate; Netatmo gateway</td></tr>
<tr><td>Aqara H1 (no neutral)</td><td>Zigbee</td><td>Yes</td><td>3 W</td><td>Often yes</td><td>On/off or dim variant</td><td>Aqara / Apple Home via hub</td></tr>
<tr><td>Sonoff ZBMini-L2</td><td>Zigbee</td><td>Yes</td><td>3 W</td><td>Recommended for LED</td><td>On/off</td><td>Module behind switch</td></tr>
<tr><td>Schneider Wiser</td><td>Zigbee</td><td>Depends on SKU</td><td>5–10 W</td><td>Depends on load</td><td>Some dimmer SKUs</td><td>Check datasheet (switch vs micro-module)</td></tr>
</tbody></table>
<p class="en-note">Isolate the circuit at the consumer unit before any work. Data indicative — French/EU SKUs; verify UK compatibility and certification before install.</p>
<h2>Decision tips</h2>
<ul>
<li><strong>Wi-Fi (Shelly 1L):</strong> no hub, but only on 2.4 GHz Wi-Fi; fine for one or two circuits.</li>
<li><strong>Zigbee (Aqara, Legrand):</strong> needs a hub (Aqara M2/M3, HomeKit border router, etc.) but keeps lighting off your Wi-Fi.</li>
<li><strong>Bypass:</strong> if the bulb glows when “off”, add the maker’s bypass or use a ≥5 W dimmable LED load.</li>
</ul>
<p>Step-by-step: <a href="/nl/handleidingen/slimme-schakelaar-zonder-nul/">smart switch without neutral tutorial</a>. Ghosting: <a href="/nl/gidsen/smart-led-problemen/">smart LED troubleshooting hub</a>.</p>`,
  },
  {
    path: 'merken/philips-hue',
    article: true,
    kicker: "Merkengids",
    title: "Philips Hue: EPREL, bridge, 2 jaar garantie",
    description: "Philips Hue (Signify): White, Ambiance, Color, Bluetooth vs bridge.",
    h1: "Philips Hue: merkoverzicht",
    lead: "Referentie voor slimme lampen in Europa. EPREL-cijfers, Hue Bridge, garantie.",
    body: `<h2>Official EPREL data (bulbs we compare)</h2>
<table><thead><tr><th>Model</th><th>Flux</th><th>Power</th><th>Colour</th><th>CRI</th><th>Class</th><th>EPREL</th></tr></thead><tbody>
<tr><td>White E27 806 lm</td><td>806 lm</td><td>7.5 W on (9 W max listed)</td><td>2700 K fixed</td><td>80</td><td>F</td><td><a href="https://eprel.ec.europa.eu/qr/739280" rel="nofollow noopener" target="_blank">739280</a></td></tr>
<tr><td>White Ambiance E27</td><td>1100 lm at 4000 K</td><td>8.1 W (0.1 W standby)</td><td>1000–20000 K tunable</td><td>≥80</td><td>D</td><td><a href="https://eprel.ec.europa.eu/qr/2187086" rel="nofollow noopener" target="_blank">2187086</a></td></tr>
<tr><td>White &amp; Color kit</td><td>1055 lm useful</td><td>11 W (0.5 W network standby)</td><td>2000–6500 K + colour</td><td>80</td><td>F</td><td>9290024688A sheet</td></tr>
</tbody></table>
<h2>Strengths</h2>
<ul>
<li>White Ambiance ≈136 lm/W (1100 lm / 8.1 W) — best energy class among our connected picks.</li>
<li>No hub to start: Bluetooth controls up to ~10 bulbs from the phone.</li>
<li>With Hue Bridge (Zigbee): remote access, automations, larger homes.</li>
<li>White fixed, tunable white, or colour ranges.</li>
</ul>
<h2>Limits</h2>
<ul>
<li>White 806 lm and Color ≈107 and 96 lm/W — class F.</li>
<li>Standby 0.1–0.5 W per bulb (up to ~4.4 kWh/year each if always powered).</li>
<li>CRI 80 — fine for living rooms, tight for kitchen worktops or mirrors.</li>
<li>Remote access and advanced automations need the Bridge (included in starter kits).</li>
<li>2-year manufacturer warranty on 3 h/day average use; software not covered.</li>
</ul>
<p>Support: Philips Hue help line 00800 7445 4775 (EU). Our picks: <a class="en-amz" href="https://www.amazon.nl/dp/B099NPGWCQ?tag=manuso0607-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B099NPGWCQ" data-product="Hue White 2-pack">Prijs op Amazon.nl bekijken</a> <a class="en-amz" href="https://www.amazon.nl/dp/B0FJ8VXHRX?tag=manuso0607-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0FJ8VXHRX" data-product="White Ambiance">Prijs op Amazon.nl bekijken</a> <a class="en-amz" href="https://www.amazon.nl/dp/B099NRLRG3?tag=manuso0607-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B099NRLRG3" data-product="Color starter kit">Prijs op Amazon.nl bekijken</a><p class="en-note">Listing data from manufacturer/Amazon pages checked 23 October 2026. Prices change — verify before buying. As an Amazon Associate I earn from qualifying purchases.</p>
<p>Compare Wi-Fi: <a href="/nl/gidsen/smarte-lampen-cadeau-ideeen/">cadeaugids slimme lampen</a>. Zigbee vs Wi-Fi on the French <a href="https://1piece1ampoule.fr/articles/ampoule-connectee-wifi-ou-zigbee/">article</a>.</p>`,
  },
  {
    path: 'merken/osram-ledvance',
    article: true,
    kicker: "Merkengids",
    title: "OSRAM (LEDVANCE): radar-lamp, garantie 3–5 jaar",
    description: "OSRAM Star A75 Motion Sensor: 1055 lm, radar 3 m.",
    h1: "OSRAM (LEDVANCE): merkoverzicht",
    lead: "Consumentenlampen van LEDVANCE GmbH. Radar-lamp voor gang of kelder zonder extra bedrading.",
    body: `<h2>Featured product: Star A75 Motion Sensor E27</h2>
<table><tbody>
<tr><th>Flux / power</th><td>1,055 lm for 10 W (105 lm/W), 75 W equivalent</td></tr>
<tr><th>Colour / CRI</th><td>4000 K cool white, CRI 80</td></tr>
<tr><th>Sensor</th><td>Radar (microwave), up to 3 m on 90°, works through glass/plastic shades</td></tr>
<tr><th>Behaviour</th><td>On below 20 lx, off 30 s after last motion</td></tr>
<tr><th>Limits</th><td>Not dimmable; wall switch must stay ON</td></tr>
</tbody></table>
<p class="en-note">Source: LEDVANCE datasheet “LED Star Classic A 75 Motion Sensor 10W 840 E27”, 23/10/2026.</p>
<a class="en-amz" href="https://www.amazon.nl/dp/B0FGD6H3NZ?tag=manuso0607-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0FGD6H3NZ" data-product="OSRAM Star A75 Motion Sensor E27">Prijs op Amazon.nl bekijken</a>
<h2>Strengths and limits</h2>
<ul>
<li>Sensor inside the bulb — no extra wiring for cellar, hall or stairs.</li>
<li>Radar sees through closed globes where PIR fails.</li>
<li>Public datasheets and long commercial warranties (3–5 years on many lamp families).</li>
<li>3 m range only — not for a long hallway; 4000 K is harsh for living rooms; 30 s off delay fixed.</li>
</ul>
<h2>Warranty (LEDVANCE FR pages, 23/10/2026)</h2>
<p>LED Classic Energy A/B/C up to 5 years; many STAR families 3 years; luminaires 3–10 years depending on range. Star A75 Motion family: rely on minimum 2-year seller conformity if not listed explicitly.</p>
<p>Promo: code <strong>ALLSTARS</strong> −25% on OSRAM shop “All Stars” selection until 31/10/2026 — <a href="/nl/actiecodes/">details</a>.</p>`,
  },
  {
    path: 'tools/halogen-led-equivalent-gu10-e27-lumen',
    article: true,
    kicker: "Tool",
    title: "Halogeen → LED: GU10, E27, lumen en bundelhoek",
    description: "Vervang op lumen, niet watt. Tabel en rekenhulp. 50 W GU10 ≈ 450 lm.",
    h1: "Halogeen of gloeilamp → LED: zelfde helderheid",
    lead: "Vergelijk lumen, niet watt. 50 W halogeen GU10 ≈ 450 lm; goede 5 W LED haalt 400–500 lm.",
    body: `<h2>Equivalence calculator</h2>
<div id="equiv-tool" class="en-grid">
<label class="block text-sm font-semibold">Current technology
<select id="eq-tech" class="mt-1 w-full rounded-xl border border-stone-300 p-2"><option value="halogen">Halogen (GU10 / E27)</option><option value="incand">Incandescent (E27 / E14)</option></select></label>
<label class="block text-sm font-semibold">Target base
<select id="eq-base" class="mt-1 w-full rounded-xl border border-stone-300 p-2"><option value="gu10">GU10 (230 V UK)</option><option value="e27">E27</option><option value="e14">E14</option></select></label>
<label class="block text-sm font-semibold">Current power (W)
<input id="eq-w" type="number" min="15" max="150" step="5" value="50" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
<label class="block text-sm font-semibold">Beam use
<select id="eq-beam" class="mt-1 w-full rounded-xl border border-stone-300 p-2"><option value="36">Narrow ~36° (worktop)</option><option value="60">Medium ~60°</option><option value="110">Wide ~110° (hall)</option></select></label>
<label class="block text-sm font-semibold sm:col-span-2">Target CRI
<select id="eq-irc" class="mt-1 w-full rounded-xl border border-stone-300 p-2"><option value="80">≥ 80 (standard)</option><option value="90">≥ 90 (kitchen, bathroom)</option><option value="95">≥ 95 (premium colour)</option></select></label>
</div>
<div id="eq-result" class="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm" aria-live="polite"></div>
<script>
(function(){function el(id){return document.getElementById(id);}function num(v){return parseFloat(String(v).replace(',','.'))||0;}
var lmPerW={halogen:9,incand:13};
function calc(){var tech=el('eq-tech').value,w=num(el('eq-w').value),lm=Math.round(w*(lmPerW[tech]||9)),ledW=Math.max(2,Math.round(lm/95)),beam=el('eq-beam').value,base=el('eq-base').value,irc=el('eq-irc').value;
var beamNote=beam==='36'?'Choose a 36° GU10 or narrow reflector E27 so lumens hit the worktop.':beam==='110'?'A 110° beam spreads lumens on walls; avoid 36° in a hall unless highlighting one spot.':'Medium beam: compromise for living room and bedroom.';
var baseNote=base==='gu10'?'Check dimmer compatibility — see <a href="/nl/gidsen/gu10-led-flikker-dimmer-diagnose/">GU10 flicker guide</a>.':'E27/E14: check shade height (globe vs reflector).';
el('eq-result').innerHTML='<p><strong>Target flux:</strong> about <strong>'+lm.toLocaleString('en-GB')+' lm</strong> (equivalent to your '+w+' W lamp).</p><p class="mt-2"><strong>Indicative LED:</strong> ≈ <strong>'+ledW+' W LED</strong> (~95–110 lm/W on a good spec).</p><p class="mt-2"><strong>CRI:</strong> look for ≥ '+irc+' on the box (<a href="/nl/gidsen/kleurweergave-cri-ra/">CRI guide</a>).</p><p class="mt-2 text-stone-600">'+beamNote+' '+baseNote+'</p>';}
['eq-tech','eq-base','eq-w','eq-beam','eq-irc'].forEach(function(id){var n=el(id);if(n){n.addEventListener('input',calc);n.addEventListener('change',calc);}});calc();})();
</script>
<h2>Halogen → LED reference table</h2>
<table><thead><tr><th>Halogen (W)</th><th>~ Lumens</th><th>LED target (lm)</th><th>GU10</th><th>E27</th></tr></thead><tbody>
<tr><td>20 W</td><td>180 lm</td><td>200 lm</td><td>2–3 W LED</td><td>2–3 W LED</td></tr>
<tr><td>35 W</td><td>300 lm</td><td>350 lm</td><td>3–4 W LED</td><td>4 W LED</td></tr>
<tr><td>50 W</td><td>450 lm</td><td>500 lm</td><td>5 W LED</td><td>5–6 W LED</td></tr>
<tr><td>75 W</td><td>650 lm</td><td>750 lm</td><td>— (rare GU10)</td><td>8–9 W LED</td></tr>
<tr><td>100 W</td><td>1300 lm</td><td>1520 lm</td><td>—</td><td>12–15 W LED</td></tr>
</tbody></table>
<p>Examples: <a class="en-amz" href="https://www.amazon.nl/dp/B0F62SG8Z9?tag=manuso0607-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0F62SG8Z9" data-product="GU10 ~805 lm">Prijs op Amazon.nl bekijken</a> <a class="en-amz" href="https://www.amazon.nl/dp/B01KHIM7OG?tag=manuso0607-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B01KHIM7OG" data-product="E27 806 lm">Prijs op Amazon.nl bekijken</a><p class="en-note">Listing data from manufacturer/Amazon pages checked 23 October 2026. Prices change — verify before buying. As an Amazon Associate I earn from qualifying purchases.</p>
<p>Install: <a href="/nl/handleidingen/halogeen-gu10-mr16-vervangen-door-led/">replace GU10/MR16</a>, <a href="/nl/gidsen/lampfittingen-e27-e14-gu10/">bases</a>. Full interactive version also on <a href="https://1piece1ampoule.fr/outils/equivalence-halogene-led-gu10-e27-lumens/">French tools page</a>.</p>`,
  },
  err({
    path: 'gidsen/foutcode/wiz-bulb-offline',
    kicker: "Error code guide",
    title: "WiZ-lamp offline in de app (Wi-Fi 2,4 GHz)",
    description: "WiZ V2 offline: migratie, gewijzigd Wi-Fi. Opnieuw koppelen op 2,4 GHz.",
    h1: "WiZ-lamp offline",
    lead: "Geen reactie in WiZ V2; wand schakelaar staat wel aan.",
    body: `<p><strong>Symptoom:</strong> offline in WiZ V2.</p>
<h2>Stappen</h2><ol>
<li>App <strong>WiZ V2</strong> gebruiken.</li>
<li>Wi-Fi opnieuw instellen (koppelen).</li>
<li>Wandschakelaar aan laten.</li>
<li><strong>2,4 GHz Wi-Fi</strong> op de router.</li>
<li>Meerdere lampen offline: router herstarten.</li>
</ol>
<p>Moeilijkheid 2/5 · 10–20 min.</p>`,
  }),
  err({
    path: 'gidsen/foutcode/nanoleaf-wifi-2g',
    kicker: "Error code guide",
    title: "Nanoleaf: Wi-Fi mislukt (2,4 GHz)",
    description: "Laatste stap mislukt — alleen 2,4 GHz, AP-isolatie uit.",
    h1: "Nanoleaf: Wi-Fi-verbinding mislukt",
    lead: "Configuratie stopt in de laatste stap; alleen lokaal bedienbaar.",
    body: `<p><strong>Causes:</strong> phone joined to 5 GHz only; special characters in password; AP isolation; MAC filtering.</p>
<h2>Stappen</h2><ol>
<li>Configure on <strong>2.4 GHz</strong> only.</li>
<li>Temporarily simplify the Wi-Fi password to test.</li>
<li>Disable client isolation / guest network for setup.</li>
<li>Move the controller near the router.</li>
<li>Reset controller (5 s) and retry.</li>
</ol>
<p>Support: <a href="https://help.nanoleaf.me/" rel="nofollow noopener" target="_blank">help.nanoleaf.me</a>. Difficulty 2/5 · 10–25 min · £0.</p>`,
  }),
  err({
    path: 'gidsen/gu10-led-flikker-dimmer-diagnose',
    kicker: "Storingen",
    title: "GU10/E27-LED flikkert, dimmer zoemt, nagleuning",
    description: "Diagnose flikkeren, zoemen, spooklicht, flikkeren op 100 %.",
    h1: "GU10/E27-LED: flikkeren en dimmer",
    lead: "Zelfde logica als onze Franse interactieve gids. Brandlucht: installateur bellen.",
    body: `<h2>1 — Main symptom</h2>
<ul>
<li><strong>Flicker when on</strong>, especially at low dimmer setting → check dimmable marking, trailing vs leading edge, minimum load, replace incompatible dimmer.</li>
<li><strong>Buzz from dimmer or lamp</strong> → halogen-era dimmer on LED, under-minimum load, mix of dimmable and non-dimmable — use LED-rated dimmer and matched bulbs.</li>
<li><strong>Glow or flash when “off”</strong> → standby current through smart/no-neutral switch or dimmer leakage — bypass, compatible dimmable LED, or smart bulb with switch locked ON.</li>
<li><strong>Flicker at 100 %</strong> on a simple switch → loose lamp, failing driver, or bad contact in GU10 holder — try another bulb, check lampholder.</li>
</ul>
<h2>Typical fixes (from our tree leaves)</h2>
<table><thead><tr><th>Case</th><th>Difficulty</th><th>Time</th><th>Cost</th></tr></thead><tbody>
<tr><td>Non-dimmable LED on dimmer → swap for dimmable or remove dimmer</td><td>1</td><td>5–15 min</td><td>£5–25</td></tr>
<tr><td>Leading-edge dimmer + dimmable LED → trailing-edge LED dimmer</td><td>2–3</td><td>20–45 min</td><td>£25–55</td></tr>
<tr><td>Single low-power LED below dimmer minimum → add load or “low load” dimmer</td><td>2–3</td><td>25–50 min</td><td>£10–50</td></tr>
<tr><td>Smart switch without neutral + ghosting → manufacturer bypass at rose</td><td>3–4</td><td>30–90 min</td><td>£4–15 parts (+ electrician)</td></tr>
</tbody></table>
<p>Matrix: <a href="https://1piece1ampoule.fr/guides/matrice-variateur-dimmer-ampoule-led-gu10-e27/">dimmer × LED</a> (FR). Smart bulbs: <a href="/nl/gidsen/smart-led-problemen/">troubleshooting hub</a>.</p>`,
  }),
  {
    path: 'gidsen/matter-thread-matrix-philips-hue-aqara-govee',
    article: true,
    kicker: "Protocol-gids",
    title: "Matter-, Thread- en Zigbee-matrix: Hue, Aqara, Govee…",
    description: "Cross-compatibiliteit Matter, Thread, Zigbee 3.0, Home Assistant, Apple Home.",
    h1: "Matter, Thread en Zigbee: matrix",
    lead: "Matter = applicatielaag; Thread = mesh-radio; Zigbee 3.0 = mesh van Hue/Aqara. Firmware en SKU controleren.",
    body: `<p class="en-note">Legend: <strong>Native</strong> = built-in; <strong>Partial</strong> = firmware/hub dependent; <strong>Via hub</strong> = exposed through a bridge; <strong>No</strong> = not supported.</p>
<table><thead><tr><th>Brand</th><th>Product</th><th>Matter</th><th>Thread</th><th>Zigbee 3</th><th>Home Assistant</th><th>Apple Home</th><th>Google</th><th>Alexa</th><th>Note</th></tr></thead><tbody>
<tr><td>Philips Hue</td><td>White &amp; Color bulbs</td><td>Via hub</td><td>Via hub</td><td>Native</td><td>Native</td><td>Via hub</td><td>Via hub</td><td>Via hub</td><td>Zigbee via Bridge; Matter on Bridge v2 (recent firmware)</td></tr>
<tr><td>Philips Hue</td><td>Hue Bridge</td><td>Native</td><td>Partial</td><td>Native</td><td>Native</td><td>Partial</td><td>Partial</td><td>Native</td><td>Matter controller for supported Hue lights</td></tr>
<tr><td>Aqara</td><td>Hub M3 / M2</td><td>Native</td><td>Native</td><td>Native</td><td>Native</td><td>Native</td><td>Partial</td><td>Partial</td><td>Thread border router + Zigbee hub</td></tr>
<tr><td>Aqara</td><td>H1 switch (no neutral)</td><td>Partial</td><td>Partial</td><td>Native</td><td>Native</td><td>Via hub</td><td>Partial</td><td>Partial</td><td>Matter exposure depends on hub firmware</td></tr>
<tr><td>Govee</td><td>Wi-Fi RGB bulbs</td><td>Partial</td><td>No</td><td>No</td><td>Partial</td><td>Partial</td><td>Partial</td><td>Native</td><td>Wi-Fi 2.4 GHz + Bluetooth; check Matter on newer SKUs</td></tr>
<tr><td>Shelly</td><td>Plus 1 / Dimmer 2</td><td>Partial</td><td>No</td><td>No</td><td>Native</td><td>Partial</td><td>Partial</td><td>Native</td><td>Wi-Fi relays; Matter on Gen3 select models</td></tr>
<tr><td>Nanoleaf</td><td>Essentials / Shapes</td><td>Native</td><td>Native</td><td>No</td><td>Partial</td><td>Native</td><td>Native</td><td>Native</td><td>Matter over Thread on Essentials</td></tr>
<tr><td>IKEA</td><td>DIRIGERA hub</td><td>Native</td><td>Native</td><td>Native</td><td>Native</td><td>Partial</td><td>Partial</td><td>Partial</td><td>Replaces TRÅDFRI gateway</td></tr>
<tr><td>IKEA</td><td>TRÅDFRI bulbs</td><td>Via hub</td><td>Via hub</td><td>Native</td><td>Native</td><td>Via hub</td><td>Via hub</td><td>Via hub</td><td>Matter via DIRIGERA</td></tr>
</tbody></table>
<p>Wi-Fi vs Zigbee: French <a href="https://1piece1ampoule.fr/articles/ampoule-connectee-wifi-ou-zigbee/">comparison article</a>. No-neutral kits: <a href="/nl/gidsen/slimme-schakelaar-zonder-nul-compatibiliteit/">compatibility matrix</a>.</p>`,
  },
  {
    path: 'merken/steinel',
    article: true,
    kicker: "Merkengids",
    title: "Steinel: bewegingslicht, NightMatic, 3 jaar garantie",
    description: "XSolar L-S ONE 150 lm, NightMatic, IS 360-1 — datasheet.",
    h1: "Steinel: merkoverzicht",
    lead: "Duits merk voor bewegingsmelder, schemerschakelaar en buitenlampen.",
    body: `<h2>Products we cite (manufacturer datasheets, 23/10/2026)</h2>
<table><thead><tr><th>Product</th><th>Role</th><th>Key data</th></tr></thead><tbody>
<tr><td>XSolar L-S ONE (081973)</td><td>Solar wall with PIR</td><td>150 lm, 3000 K, 1.2 W; IR 140°, 8 m tangential / 2 m radial; LiFePO4 3000 mAh; IP44, IK03 — <a class="en-amz" href="https://www.amazon.nl/dp/B0B272H45X?tag=manuso0607-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0B272H45X" data-product="XSolar L-S ONE Amazon UK">Prijs op Amazon.nl bekijken</a></td></tr>
<tr><td>XSolar LH-N (035730)</td><td>Solar house number</td><td>4 LEDs marker, 4000 K; dusk 2 lx; IP44</td></tr>
<tr><td>L 12 M (069155)</td><td>E27 wall lamp, no sensor</td><td>Bulb not included, max 60 W; IP44</td></tr>
<tr><td>NightMatic 2000 (550417)</td><td>Dusk switch</td><td>2–30 lx threshold; 1000 W resistive, max 4 LED lamps; 0.8 W; IP54</td></tr>
<tr><td>IS 360-1 DE (032845)</td><td>Ceiling motion sensor</td><td>360°, Ø8 m / Ø4 m; 8 s–35 min; 2–2000 lx; LED &gt;8 W: 350 W; IP54</td></tr>
</tbody></table>
<p class="en-note">EU list prices on 2echoix (second grade) were €70.59, €57.19, €23.39, €41.99 on 22/10/2026 — may change; not UK prices.</p>
<h2>Strengths and limits</h2>
<ul>
<li>Precise settings (IS 360-1: 8 s to 35 min, 2–2000 lx).</li>
<li>Detailed LED load limits on datasheets.</li>
<li>LiFePO4 on XSolar range; <strong>3-year manufacturer warranty</strong> in France (5 years XLED home line).</li>
<li>XSolar 150 lm only finds the lock — not aisle lighting; L 12 M has <em>no</em> sensor despite similar names.</li>
</ul>
<p>Radar-in-bulb alternative: <a href="/nl/merken/osram-ledvance/">OSRAM motion bulb</a>. Outdoor guide on French site.</p>`,
  },
  {
    path: 'ruimtes',
    kicker: "Ruimtes",
    title: "Verlichting per ruimte: keuken, gang, eetkamer…",
    description: "Kies een ruimte voor lux/lumen-advies.",
    h1: "Ruimtes",
    lead: "Ruimtetype kiezen voor lumen, kelvin, CRI en fittingen.",
    body: `<div class="en-grid">
<a class="en-tile" href="/nl/ruimtes/gang/"><strong>Gang</strong><span>Smalle gangen, 3500–4000 K, minder schaduw.</span></a>
<a class="en-tile" href="/nl/ruimtes/eetkamer/"><strong>Eetkamer</strong><span>Hanglamp boven de tafel, hoge kleurweergave voor het eten.</span></a>
</div>
<p>Method: <a href="/nl/handleidingen/lux-lumen-per-ruimte-berekenen/">lux and lumens per room</a>. French full index: <a href="https://1piece1ampoule.fr/pieces/">1piece1ampoule.fr/pieces</a>.</p>`,
  },
  err({
    path: 'gidsen/foutcode/hue-lamp-knippert-reset',
    kicker: "Error code guide",
    title: "Hue-lamp knippert: koppelen of reset",
    description: "Hue pulseert na stroomuitval: Zigbee koppelen of reset.",
    h1: "Hue-lamp knippert",
    lead: "Regelmatig knipperen na netstoring — pairing of reset.",
    body: `<h2>Stappen</h2><ol>
<li>If you meant to add it: start “Add light” in the Hue app.</li>
<li>If it was already installed: power cycle reset (off 5 s, on 5 s — repeat per Hue instructions for your model).</li>
<li>Avoid non-“Works with Hue” dimmers.</li>
<li>Re-pair to the Bridge if it disappeared.</li>
<li>Still blinking on a plain lampholder: possible hardware fault.</li>
</ol>
<p>Support: 00800 7445 4775 · <a href="https://www.philips-hue.com/en-gb/support" rel="nofollow noopener" target="_blank">philips-hue.com support</a>. Difficulty 1/5 · 5–15 min · £0.</p>`,
  }),
  err({
    path: 'gidsen/foutcode/hue-sync-box-hdmi-geen-signaal',
    kicker: "Error code guide",
    title: "Hue Sync Box: geen HDMI-beeld",
    description: "Zwart scherm met Sync Box: HDMI-kabel, opstartvolgorde, HDCP.",
    h1: "Hue Sync Box: geen signaal",
    lead: "TV blijft zwart terwijl bron direct op TV wel werkt.",
    body: `<h2>Stappen</h2><ol>
<li>Test source → TV without Sync Box.</li>
<li>Replace HDMI cable (18 Gbps rated for 4K HDR).</li>
<li>Power order: TV, then Sync Box, then console.</li>
<li>Temporarily disable HDR/Dolby Vision on the source.</li>
<li>One source only failing: check its HDCP settings.</li>
</ol>
<p>Entertainment area must exist in Hue app for sync. Difficulty 2/5 · 15–30 min · £10–40 cable. Support: Philips Hue.</p>`,
  }),
  {
    path: 'merken',
    article: true,
    kicker: "Merken",
    title: "Merken: Hue, OSRAM, Steinel, Tapo, Luminaire.fr",
    description: "Overzicht garantie en gebruik.",
    h1: "Merken in onze gidsen",
    lead: "Garantie, retour en toepassing vóór aankoop.",
    body: `<table><thead><tr><th>Brand</th><th>Type</th><th>On this site</th><th>Warranty / returns</th><th>Our view</th></tr></thead><tbody>
<tr><td><a href="/nl/merken/philips-hue/">Philips Hue</a></td><td>Connected lighting (Signify)</td><td>3 E27 smart bulbs compared</td><td>2-year manufacturer</td><td>Reference for expandable Zigbee; CRI 80 only</td></tr>
<tr><td><a href="/nl/merken/osram-ledvance/">OSRAM (LEDVANCE)</a></td><td>Manufacturer + shop</td><td>Radar Star A75 + official shop</td><td>3–5 years on listed lamp families</td><td>Strong datasheets; radar bulb for no-wire automation</td></tr>
<tr><td><a href="/nl/merken/luminaire-fr/">Luminaire.fr</a></td><td>Merchant (Lampenwelt)</td><td>Wide fitting catalogue</td><td>30-day return (FR), paid return postage</td><td>When you need a specific pendant or outdoor fitting</td></tr>
<tr><td><a href="/nl/merken/steinel/">Steinel</a></td><td>Motion / outdoor</td><td>5 datasheet products</td><td>3-year manufacturer (FR terms)</td><td>Best for dedicated motion/dusk hardware</td></tr>
<tr><td>Tapo (TP-Link)</td><td>Wi-Fi smart</td><td>L530E in gift guide</td><td>2-year TP-Link</td><td>Cheap entry without hub; class F efficiency</td></tr>
</tbody></table>
<p class="en-note">UK consumers always have statutory rights against the seller; EU/FR pages cite French legal conformity (2 years).</p>
<p>Deals: <a href="/nl/actiecodes/">promo codes</a>.</p>`,
  },
  {
    path: 'ruimtes/gang',
    article: true,
    kicker: "Ruimte-gids",
    title: "Gangverlichting: donkere hoeken, lumen, 3500–4000 K",
    description: "Zones gang: entree, donker stuk, hoek, vloer.",
    h1: "Gangverlichting",
    lead: "Gang in zones — entree, donker stuk, hoek, vloer — kelvin en CRI afstemmen.",
    body: `<h2>Quick summary</h2>
<ul>
<li>Dark stretches: often <strong>3500–4000 K</strong> plus several sources to avoid pools of shadow.</li>
<li>Corners: indirect wall light beats a single downlight.</li>
<li>Floor: discreet skirting or marker lights for night trips.</li>
<li>High <strong>CRI</strong> keeps door colours and paint true.</li>
</ul>
<h2>Long narrow hall — avoid the tunnel</h2>
<ul>
<li>Space luminaires along the length; large gaps create a “spot-spot” rhythm.</li>
<li>Downlight-only schemes leave walls dark — use wall washers or LED strip behind a cornice.</li>
<li>Low floor markers improve safety without glare.</li>
</ul>
<h2>Common mistakes</h2>
<ul>
<li>One ceiling spot: loses the bend and casts facial shadow.</li>
<li>Too cool a white: feels flat and unwelcoming.</li>
<li>No dimming: cannot soften light at night.</li>
</ul>
<p>Lux method: <a href="/nl/handleidingen/lux-lumen-per-ruimte-berekenen/">lumens and lux</a>. Motion bulb idea: <a href="/nl/merken/osram-ledvance/">OSRAM radar E27</a> (3 m range limit). French detail: <a href="https://1piece1ampoule.fr/pieces/couloir/">couloir page</a>.</p>`,
  },
  {
    path: 'artikelen/schemerlamp',
    article: true,
    kicker: "Artikel",
    title: "Schemerlamp: fotocel vs. bewegingsmelder",
    description: "Fotocel brandt hele nacht. Buiten minimaal IP44.",
    h1: "Schemerlamp (fotocel)",
    lead: "Schakelt bij schemer in en ’s ochtends uit — ingebouwde fotocel.",
    body: `<h2>Dusk-to-dawn vs motion sensor</h2>
<table><thead><tr><th></th><th>Dusk-to-dawn</th><th>Motion (PIR/radar)</th></tr></thead><tbody>
<tr><td>On when</td><td>All night</td><td>When someone passes</td></tr>
<tr><td>Best for</td><td>Porch, façade lantern, “occupied” look</td><td>Path, garage, cellar</td></tr>
<tr><td>Energy</td><td>~4–8 W × 12 h/night</td><td>Very low average</td></tr>
<tr><td>Deterrent</td><td>Constant presence</td><td>Sudden light</td></tr>
</tbody></table>
<h2>Where to install</h2>
<ul>
<li>Outdoor wall lantern with bulb sheltered — luminaire at least <strong>IP44</strong>.</li>
<li>Window lamp for holiday presence simulation.</li>
<li>Enclosed stair with no daylight: photocell may stay dark → bulb always on — wrong product.</li>
</ul>
<h2>Trap: the sensor “sees” its own light</h2>
<p>If the cell catches spill from the bulb, it may think it is day and cycle off/on. Point the sensor at open sky or use a fitting that shields it.</p>
<h2>Running cost (French regulated example)</h2>
<p>5 W × 12 h/night ≈ 22 kWh/year. At the French regulated tariff <strong>0.2001 € TTC/kWh</strong> (Base option from 1 August 2026 on the French market) that is about <strong>4.40 €/year</strong>. UK: multiply kWh by your p/kWh unit rate.</p>
<p>Example product cited on FR site: Lucide ST64 filament dusk bulb 2200 K — <a class="en-amz" href="https://www.amazon.nl/dp/B07TSKP9JC?tag=manuso0607-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B07TSKP9JC" data-product="Lucide ST64 dusk E27">Prijs op Amazon.nl bekijken</a>. Solar alternative: <a href="/nl/merken/steinel/">Steinel XSolar</a>.</p>`,
  },
  err({
    path: 'gidsen/foutcode/schneider-wiser-offline',
    kicker: "Error code guide",
    title: "Schneider Wiser offline",
    description: "Gateway, 2,4 GHz Wi-Fi, firmware.",
    h1: "Schneider Wiser offline",
    lead: "App toont offline; scenario’s lopen niet.",
    body: `<h2>Stappen</h2><ol>
<li>Check Wiser gateway power and Ethernet/Wi-Fi link.</li>
<li>Reconnect to <strong>2.4 GHz Wi-Fi</strong>.</li>
<li>Reboot router and gateway.</li>
<li>Update app and device firmware.</li>
<li>France support: 0825 012 999 — <a href="https://www.se.com/ww/nl/work/support/" rel="nofollow noopener" target="_blank">se.com support</a>.</li>
</ol>
<p>Difficulty 2/5 · 15–30 min · £0.</p>`,
  }),
  {
    path: 'gidsen/smart-led-problemen',
    article: true,
    kicker: "Storingen",
    title: "Slimme lampen & LED: foutcode-overzicht",
    description: "Startpunt Hue, Govee, WiZ — 44 stappen op FR-site.",
    h1: "Slimme lampen: diagnose",
    lead: "Storingen verbonden verlichting: bridge, Zigbee/Wi-Fi, strips, dimmers.",
    body: `<p>Het volledige overzicht, per merk, staat op <a href="/nl/gidsen/foutcodes/">de foutcodes</a> (44 stappenplannen).</p>
<h2>Priority sheets in English</h2>
<ul>
<li><a href="/nl/gidsen/foutcode/wiz-bulb-offline/">WiZ-lamp offline</a></li>
<li><a href="/nl/gidsen/foutcode/nanoleaf-wifi-2g/">Nanoleaf en wifi 2,4 GHz</a></li>
<li><a href="/nl/gidsen/foutcode/hue-lamp-knippert-reset/">Hue-lamp knippert / reset</a></li>
<li><a href="/nl/gidsen/foutcode/hue-sync-box-hdmi-geen-signaal/">Hue Sync Box: geen HDMI-signaal</a></li>
<li><a href="/nl/gidsen/foutcode/schneider-wiser-offline/">Schneider Wiser offline</a></li>
<li><a href="/nl/gidsen/foutcode/govee-bulb-firmware-brick/">Govee-lamp geblokkeerd na een update</a></li>
<li><a href="/nl/gidsen/foutcode/govee-strip-oververhitting/">Govee-strip te warm</a></li>
</ul>
<h2>Related tools</h2>
<ul>
<li><a href="/nl/gidsen/gu10-led-flikker-dimmer-diagnose/">GU10/E27 flicker diagnosis</a></li>
<li><a href="/nl/gidsen/slimme-schakelaar-zonder-nul-compatibiliteit/">Smart switch without neutral</a></li>
<li><a href="/nl/gidsen/matter-thread-matrix-philips-hue-aqara-govee/">Matrix Matter, Thread en Zigbee</a></li>
<li><a href="/nl/ruimtes/">Een lamp kiezen per ruimte</a></li>
</ul>
<p>Complete French repertoire: <a href="https://1piece1ampoule.fr/guides/depannage-ampoules-connectees-led/">depannage hub</a>.</p>`,
  },
  {
    path: 'ruimtes/eetkamer',
    article: true,
    kicker: "Ruimte-gids",
    title: "Eetkamer: tafel, dressoir, CRI en dimmen",
    description: "Zones eetkamer: tafel, dressoir, sfeer, looproutes.",
    h1: "Eetkamerverlichting",
    lead: "Zones — tafel, dressoir, indirecte sfeer — kelvin/CRI voor gezichten en eten.",
    body: `<h2>Goals by zone</h2>
<ul>
<li><strong>Table:</strong> flattering light, minimal shadow on faces — pendant sized to table width.</li>
<li><strong>Sideboard:</strong> accent and easy search — strip or spots with CRI ≥ 90.</li>
<li><strong>Mood:</strong> indirect, warmer in the evening, dimmable.</li>
<li><strong>Circulation:</strong> even floor light to avoid dark corners.</li>
</ul>
<h2>Frequent mistakes</h2>
<ul>
<li>Single central pendant only — shadows on faces, table under-lit.</li>
<li>Too cool (&gt;4000 K) — food and skin look dull.</li>
<li>Low CRI — meat and vegetables look grey.</li>
</ul>
<p>Often <strong>2700–3000 K</strong> dimmed after dinner. French detail: <a href="https://1piece1ampoule.fr/pieces/salle-manger/">salle à manger</a>. Merchant pendants: <a href="/nl/merken/luminaire-fr/">Luminaire.fr</a>.</p>`,
  },
  {
    path: 'contact',
    template: 'contact',
    kicker: "Contact",
    title: "Contact — vraag over verlichting",
    description: "Antwoord meestal binnen 24–48 werkuren.",
    h1: "Contact",
    lead: '',
    body: '',
  },
  err({
    path: 'gidsen/foutcode/govee-bulb-firmware-brick',
    kicker: "Error code guide",
    title: "Govee-lamp blokkeert na firmware-update",
    description: "Na OTA: stroom reset, update op 2,4 GHz, support.",
    h1: "Govee-lamp na update geblokkeerd",
    lead: "Geen reactie of vaste kleur na OTA.",
    body: `<h2>Stappen</h2><ol>
<li>Power off 10 s, on again.</li>
<li>Stay near router on stable <strong>2.4 GHz Wi-Fi</strong>; retry OTA.</li>
<li>Manual re-add in pairing mode.</li>
<li>Contact Govee support with exact model (H600x).</li>
<li>Under warranty: replacement.</li>
</ol>
<p>Official support recommended (requires_official_sav flag in catalogue). Difficulty 3/5 · 20–40 min.</p>`,
  }),
  err({
    path: 'gidsen/foutcode/govee-strip-oververhitting',
    kicker: "Error code guide",
    title: "Govee-strip oververhit of vergeeld",
    description: "Strip heet: helderheid omlaag, alu-profiel, max. lengte.",
    h1: "Govee-strip oververhitting",
    lead: "Strip heet, gele uiteinden, lijm los — voeding of montage.",
    body: `<h2>Stappen</h2><ol>
<li>Lower max brightness in Govee Home.</li>
<li>Mount in an <strong>aluminium profile</strong> for heat spread.</li>
<li>Do not exceed length per power supply rating.</li>
<li>Unwind bundled loops that trap heat.</li>
<li>Replace PSU if it also runs hot abnormally.</li>
</ol>
<p><strong>Safety:</strong> overheated strip can melt adhesive and pose a fire risk — stay within rated length. Difficulty 2/5 · 20–40 min · £10–40 parts. Support: help.govee.com</p>`,
  }),
];
