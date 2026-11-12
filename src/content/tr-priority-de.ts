// Prioritätsseiten DE (Okt. 2026). Übersetzt aus FR-Quellen, geprüft 23.10.2026.
import type { EnPage } from './en';

const amz = (asin: string, label: string) => `<a class="en-amz" href="https://www.amazon.de/dp/${asin}?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="${asin}" data-product="${label}">Preis auf Amazon.de prüfen</a>`;
const note = `<p class="en-note">Produktdaten von Hersteller/Amazon, geprüft am 23.10.2026. Preise ändern sich. Als Amazon-Partner verdienen wir an qualifizierten Käufen.</p>`;

const err = (p: Omit<EnPage, 'article'> & { kicker?: string }): EnPage => ({
  ...p,
  article: true,
  kicker: p.kicker ?? 'Fehlercode-Ratgeber',
});

export const TR_PRIORITY_DE: EnPage[] = [
  {
    path: 'zonen/kuechenarbeitsplatte',
    article: true,
    kicker: "Zonen-Ratgeber",
    title: "Küchenarbeitsplatte beleuchten: Lux, Lumen, Kelvin und LED-Leisten",
    description: "Wie viele Lumen unter Oberschränken, welche Kelvin- und CRI-Werte, drei Netz-LED-Leisten im Vergleich (lm/m). Ziel: 500 Lux auf der Arbeitsplatte.",
    h1: "Beleuchtung der Küchenarbeitsplatte",
    lead: "Das Deckenlicht erhellt die Küche, aber Sie kochen mit dem Rücken zur Lampe — Ihr Körper wirft Schatten auf die Platte. Die Lösung: Licht unter den Hängeschränken, zwischen Ihnen und der Arbeitsfläche.",
    body: `<h2>Drei Zahlen merken</h2>
<ul>
<li><strong>500 lux</strong> auf der Arbeitsplatte zum Schneiden und Lesen von Rezepten — our “detailed task” benchmark in <a href="/de/anleitungen/lux-lumen-pro-raum-berechnen/">Lux pro Raum</a>.</li>
<li><strong>420 lm per metre</strong> Mindestwert: for a 3.0 × 0.6 m worktop, 500 lx × 1.8 m² × factor 1.4 (close source) ≈ 1,260 lm, i.e. 420 lm/m of cabinet run.</li>
<li><strong>4000 K and CRI (Farbwiedergabeindex (CRI)) ≥ 80</strong> (90 if you can) to judge food without a colour cast — see <a href="/de/ratgeber/farbtemperatur-kelvin/">Farbtemperatur</a> and <a href="/de/ratgeber/farbwiedergabe-cri-ra/">CRI</a>.</li>
</ul>
<h2>Drei Netz-LED-Leisten im Vergleich</h2>
<p>Lumen pro Meter = angegebener Lichtstrom ÷ length (Herstellerangaben, geprüft 23.10.2026). Alle Leisten liegen über 420 lm/m; entscheidend sind Farbe, Montage und Länge.</p>
<table><thead><tr><th>Product</th><th>Power</th><th>Lichtstrom</th><th>lm/m (berechnet)</th><th>Colour</th><th>Verkettbar</th></tr></thead><tbody>
<tr><td>DA LIGHT swivel bar 56 cm <a class="en-amz" href="https://www.amazon.de/dp/B07H7HB6LG?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B07H7HB6LG" data-product="DA LIGHT 56 cm bar">Preis auf Amazon.de prüfen</a></td><td>230 V, switch</td><td>560 lm</td><td>1,000 lm/m</td><td>3000 / 4000 / 6000 K</td><td>Ja, verkettbar</td></tr>
<tr><td>SEBSON kitchen bar 60 cm <a class="en-amz" href="https://www.amazon.de/dp/B01LZEWUT7?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B01LZEWUT7" data-product="SEBSON 60 cm bar">Preis auf Amazon.de prüfen</a></td><td>230 V, plug + switch</td><td>715 lm (11 W)</td><td>1,192 lm/m</td><td>3000 K</td><td>Eine Leiste pro Steckdose</td></tr>
<tr><td>Oktaplex Riga 28 cm <a class="en-amz" href="https://www.amazon.de/dp/B0CGRC4GQ9?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0CGRC4GQ9" data-product="Oktaplex Riga 28 cm">Preis auf Amazon.de prüfen</a></td><td>230 V</td><td>370 lm (4 W)</td><td>1,321 lm/m</td><td>4000 K</td><td>Ja, erweiterbar</td></tr>
</tbody></table>
<p><strong>Empfehlung:</strong> DA LIGHT — 1,000 lm/m (more than double the target), three whites including 4000 K, swivel head toward the splashback, linkable bars on one plug.</p>
<h2>Keine Steckdose unter den Schränken?</h2>
<p>A rechargeable bar (e.g. OUILA 60 cm on the French site) suits backup use; if the maker does not publish lumens, do not rely on it as the main worktop light.</p>
<h2>Leiste oder LED-Streifen?</h2>
<p>A bar screws in and plugs in — about 15 minutes. Strip in an aluminium profile gives a continuous line but needs a sized 24 V driver. See <a href="/de/anleitungen/led-streifen-unter-haengeschraenken/">under-cabinet LED strip</a>.</p>
<h2>Montage</h2>
<ul>
<li>As far <strong>forward</strong> on the wall unit as possible so light hits the board, not only the splashback.</li>
<li>One bar per cabinet run, leaving 2–3 cm at each end for end caps.</li>
<li>Nothing over the sink without the right <a href="/de/ratgeber/ip-schutzarten-bad-aussen/">IP rating</a>.</li>
</ul>
<p>Allgemeine Küchenbeleuchtung: <a href="/de/raeume/kitchen/">kitchen room guide</a> (when published). More zones on the French <a href="https://1piece1ampoule.fr/zones/">zones hub</a>.</p>`,
  },
  {
    path: 'marken/luminaire-fr',
    article: true,
    kicker: "Partner-Händler",
    title: "Luminaire.fr: Lieferung 39,90 € Sperrgut, 30 Tage Rückgabe, SAV",
    description: "Händlersteckbrief Lampenwelt/Luminaire.fr: Katalog, DPD/GLS, 39,90 € Sperrgut, 30 Tage Rückgabe. Stand 23.10.2026.",
    h1: "Luminaire.fr: unser Händlerüberblick",
    lead: "Luminaire.fr ist der französische Shop der Lampenwelt GmbH (Fulda). Multimarken-Händler — größere Auswahl an Pendeln und Wandleuchten als bei Amazon, wenn ein bestimmter Stil gesucht wird.",
    body: `<h2>Catalogue</h2>
<p>Indoor fittings (pendants, ceiling, wall, floor, spots), outdoor lighting (bollards, solar, motion), bulbs, smart home and seasonal décor. Featured brands include Lindby, Lucande, Arcchio, Prios, EGLO, Paulmann, Philips, Philips Hue, OSRAM, SLV, <a href="/de/marken/steinel/">Steinel</a>, plus design names (Artemide, FLOS, Louis Poulsen, Foscarini…).</p>
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
<h2>Stärken and limits</h2>
<table><thead><tr><th>Stärken</th><th>Grenzen</th></tr></thead><tbody>
<tr><td>Very wide range, entry level to design</td><td>Paid returns</td></tr>
<tr><td>30-day return window (twice the legal minimum in France)</td><td>€39.90 bulky delivery fee</td></tr>
<tr><td>Parcel shop for small parcels</td><td>No overseas French delivery</td></tr>
<tr><td>Seasonal sales, when a dated offer is live</td><td>Promo codes often exclude design brands. None verified on 9 November 2026</td></tr>
</tbody></table>
<p>We use Luminaire.fr when we need a specific fitting (dining pendant, IP44 bathroom wall light, garden bollard) rather than a bulb alone. Measure before ordering large pieces. For bulbs only, Amazon UK or the <a href="/de/marken/osram-ledvance/">OSRAM shop</a> is often simpler.</p>
<p>Kein geprüfter Gutscheincode am 9. November 2026. Das Zwischensaison-Angebot endete am 25. Oktober 2026. Ein Rabatt zählt nur, wenn er auf der Summe steht. Der Shop liefert innerhalb Frankreichs. Aktuelle Angebote, falls vorhanden: <a href="/de/aktionscodes/">Aktionscodes</a>.</p>`,
  },
  {
    path: 'aktionscodes',
    template: 'promo-codes',
    kicker: "Aktionen",
    title: "Aktionscodes Beleuchtung — Oktober 2026",
    description: "Geprüfte Partner-Aktionscodes mit Enddatum. OSRAM ALLSTARS −25 % bis 31.10.2026.",
    h1: "Aktionscodes Beleuchtung",
    lead: '',
    body: '',
  },
  {
    path: 'ratgeber/smarte-lampen-geschenkideen',
    article: true,
    kicker: "Geschenk-Ratgeber",
    title: "Smarte Lampen als Geschenk: Wi-Fi, Bluetooth oder Zigbee (EPREL)",
    description: "Verbundene Lampe verschenken: Sockel, Wi-Fi 2,4 GHz oder Zigbee, mit oder ohne Bridge. Vier geprüfte Ideen (Hue, Tapo).",
    h1: "Geschenkideen: smarte Lampen",
    lead: "Eine smarte Lampe ist ein gutes Geschenk, wenn sie in die Leuchte passt und mit Router oder Handy der beschenkten Person funktioniert. Drei Fragen reichen.",
    body: `<h2>Three questions before buying</h2>
<ol>
<li><strong>Welcher Sockel?</strong> E27 in most pendants, E14 for small shades, GU10 for spot fittings. See <a href="/de/ratgeber/lampensockel-e27-e14-gu10/">bulb bases</a>.</li>
<li><strong>Welche Funkverbindung?</strong> Wi-Fi works without a hub but needs the router’s <strong>2.4 GHz Wi-Fi</strong> band (many IoT devices do not join 5 GHz). <strong>Zigbee</strong> needs a hub (Hue Bridge, some smart speakers) but scales better with many bulbs. Philips Hue also works over <strong>Bluetooth</strong> for up to about ten bulbs in one room.</li>
<li><strong>Nur Weiß oder Farbe?</strong> Tunable white suits daily use; colour is mainly for mood and TV sync.</li>
</ol>
<h2>Welches Geschenk für wen</h2>
<table><thead><tr><th>Profile</th><th>Idea</th><th>Verified data</th></tr></thead><tbody>
<tr><td>Beginner, no hub</td><td>Tapo L530E (Wi-Fi, colour)</td><td>8.7 W (60 W equivalent), dimmable, no hub</td></tr>
<tr><td>Try Hue on a budget</td><td>Hue White E27 806 lm, 2-pack</td><td>EPREL 739280: 806 lm, 7.5 W, 2700 K, CRI 80, class F</td></tr>
<tr><td>Dark winter mornings</td><td>Hue White Ambiance E27 1100 lm</td><td>EPREL 2187086: 1100 lm, 8.1 W, standby 0.1 W, class D</td></tr>
<tr><td>Film and colour fan</td><td>Hue White &amp; Color starter kit E27</td><td>Model 9290024688A: 1055 lm, 11 W, 2000–6500 K + colours; bridge and remote in box</td></tr>
</tbody></table>
<h2>Geprüfte Empfehlungen (Amazon UK)</h2>
<a class="en-amz" href="https://www.amazon.de/dp/B08GDC99PX?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B08GDC99PX" data-product="Tapo L530E Wi-Fi colour E27">Preis auf Amazon.de prüfen</a><a class="en-amz" href="https://www.amazon.de/dp/B099NPGWCQ?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B099NPGWCQ" data-product="Hue White E27 2-pack">Preis auf Amazon.de prüfen</a><a class="en-amz" href="https://www.amazon.de/dp/B0FJ8VXHRX?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0FJ8VXHRX" data-product="Hue White Ambiance 1100 lm">Preis auf Amazon.de prüfen</a><a class="en-amz" href="https://www.amazon.de/dp/B099NRLRG3?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B099NRLRG3" data-product="Hue White & Color starter kit">Preis auf Amazon.de prüfen</a><p class="en-note">Listing data from manufacturer/Amazon pages checked 23 October 2026. Prices change — verify before buying. As an Amazon Associate I earn from qualifying purchases.</p>
<h2>Damit es am Feiertag funktioniert</h2>
<ul>
<li>Include the gift receipt — wrong base means an easy swap.</li>
<li>Smart bulbs need permanent power: the wall switch stays ON, or add a wireless remote. See <a href="/de/ratgeber/smarter-schalter-ohne-neutral-kompatibilitaet/">smart switch without neutral</a>.</li>
<li>On a legacy dimmer, smart bulbs flicker — remove the dimmer or lock it at full.</li>
</ul>
<p>More: <a href="/de/marken/philips-hue/">Philips Hue brand page</a>, winter lighting on the French site.</p>`,
  },
  {
    path: 'ratgeber/smarter-schalter-ohne-neutral-kompatibilitaet',
    article: true,
    kicker: "Smart-Home-Ratgeber",
    title: "Smarter Schalter ohne Neutralleiter: Shelly, Legrand, Aqara, Sonoff, Schneider",
    description: "Welches 2-Draht-Modul ohne N in der Schalterdose? Matrix Wi-Fi/Zigbee, Mindestlast LED, Bypass-Hinweise.",
    h1: "Kompatibilität: smarter Schalter ohne Neutralleiter",
    lead: "In vielen DE/AT/CH-Installationen fehlt in der Schalterdose der Neutralleiter. 2-Draht-Module führen Standby-Strom über die Lampe — bei LED oft Bypass an der Decke. Arbeiten nur durch Elektrofachbetrieb (DIN VDE).",
    body: `<h2>Modul-Matrix (manufacturer data — check exact SKU before buying)</h2>
<table><thead><tr><th>Product</th><th>Protocol</th><th>No neutral</th><th>Min. load</th><th>LED bypass</th><th>Dimming</th><th>Note</th></tr></thead><tbody>
<tr><td>Shelly 1L</td><td>Wi-Fi 2.4 GHz</td><td>Yes (2-wire)</td><td>3 W LED</td><td>Often yes</td><td>On/off only</td><td>Bypass at fitting; local + cloud control</td></tr>
<tr><td>Shelly Dimmer 2</td><td>Wi-Fi</td><td>No — neutral required</td><td>1 W</td><td>Sometimes</td><td>Yes</td><td>Not a true 2-wire solution</td></tr>
<tr><td>Legrand Céliane with Netatmo</td><td>Zigbee</td><td>Yes (2-wire module)</td><td>5 W</td><td>Often yes</td><td>Dimmer variants</td><td>Complete switch plate; Netatmo gateway</td></tr>
<tr><td>Aqara H1 (no neutral)</td><td>Zigbee</td><td>Yes</td><td>3 W</td><td>Often yes</td><td>On/off or dim variant</td><td>Aqara / Apple Home via hub</td></tr>
<tr><td>Sonoff ZBMini-L2</td><td>Zigbee</td><td>Yes</td><td>3 W</td><td>Recommended for LED</td><td>On/off</td><td>Module behind switch</td></tr>
<tr><td>Schneider Wiser</td><td>Zigbee</td><td>Depends on SKU</td><td>5–10 W</td><td>Depends on load</td><td>Some dimmer SKUs</td><td>Check datasheet (switch vs micro-module)</td></tr>
</tbody></table>
<p class="en-note">Isolate the circuit at the consumer unit before any work. Data indicative — French/EU SKUs; verify UK compatibility and certification before install.</p>
<h2>Entscheidungshilfen</h2>
<ul>
<li><strong>Wi-Fi (Shelly 1L):</strong> no hub, but only on 2.4 GHz Wi-Fi; fine for one or two circuits.</li>
<li><strong>Zigbee (Aqara, Legrand):</strong> needs a hub (Aqara M2/M3, HomeKit border router, etc.) but keeps lighting off your Wi-Fi.</li>
<li><strong>Bypass:</strong> if the bulb glows when “off”, add the maker’s bypass or use a ≥5 W dimmable LED load.</li>
</ul>
<p>Step-by-step: <a href="/de/anleitungen/smarter-schalter-ohne-neutralleiter/">smart switch without neutral tutorial</a>. Ghosting: <a href="/de/ratgeber/smart-led-stoerungen/">smart LED troubleshooting hub</a>.</p>`,
  },
  {
    path: 'marken/philips-hue',
    article: true,
    kicker: "Marken-Ratgeber",
    title: "Philips Hue: EPREL-Daten, Bridge, 2 Jahre Garantie, Vor- und Nachteile",
    description: "Philips Hue (Signify): White, Ambiance, Color E27, Bluetooth vs Bridge, Standby, Garantie EU.",
    h1: "Philips Hue: unsere Markeneinschätzung",
    lead: "Philips Hue ist Signifys verbundene Beleuchtung — Referenz für smarte Lampen in Europa. Modelle, EPREL-Zahlen, Nutzen der Hue Bridge, Garantie.",
    body: `<h2>Offizielle EPREL-Daten (bulbs we compare)</h2>
<table><thead><tr><th>Model</th><th>Flux</th><th>Power</th><th>Colour</th><th>CRI</th><th>Class</th><th>EPREL</th></tr></thead><tbody>
<tr><td>White E27 806 lm</td><td>806 lm</td><td>7.5 W on (9 W max listed)</td><td>2700 K fixed</td><td>80</td><td>F</td><td><a href="https://eprel.ec.europa.eu/qr/739280" rel="nofollow noopener" target="_blank">739280</a></td></tr>
<tr><td>White Ambiance E27</td><td>1100 lm at 4000 K</td><td>8.1 W (0.1 W standby)</td><td>1000–20000 K tunable</td><td>≥80</td><td>D</td><td><a href="https://eprel.ec.europa.eu/qr/2187086" rel="nofollow noopener" target="_blank">2187086</a></td></tr>
<tr><td>White &amp; Color kit</td><td>1055 lm useful</td><td>11 W (0.5 W network standby)</td><td>2000–6500 K + colour</td><td>80</td><td>F</td><td>9290024688A sheet</td></tr>
</tbody></table>
<h2>Stärken</h2>
<ul>
<li>White Ambiance ≈136 lm/W (1100 lm / 8.1 W) — best energy class among our connected picks.</li>
<li>No hub to start: Bluetooth controls up to ~10 bulbs from the phone.</li>
<li>With Hue Bridge (Zigbee): remote access, automations, larger homes.</li>
<li>White fixed, tunable white, or colour ranges.</li>
</ul>
<h2>Grenzen</h2>
<ul>
<li>White 806 lm and Color ≈107 and 96 lm/W — class F.</li>
<li>Standby 0.1–0.5 W per bulb (up to ~4.4 kWh/year each if always powered).</li>
<li>CRI 80 — fine for living rooms, tight for kitchen worktops or mirrors.</li>
<li>Remote access and advanced automations need the Bridge (included in starter kits).</li>
<li>2-year manufacturer warranty on 3 h/day average use; software not covered.</li>
</ul>
<p>Support: Philips Hue help line 00800 7445 4775 (EU). Our picks: <a class="en-amz" href="https://www.amazon.de/dp/B099NPGWCQ?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B099NPGWCQ" data-product="Hue White 2-pack">Preis auf Amazon.de prüfen</a> <a class="en-amz" href="https://www.amazon.de/dp/B0FJ8VXHRX?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0FJ8VXHRX" data-product="White Ambiance">Preis auf Amazon.de prüfen</a> <a class="en-amz" href="https://www.amazon.de/dp/B099NRLRG3?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B099NRLRG3" data-product="Color starter kit">Preis auf Amazon.de prüfen</a><p class="en-note">Listing data from manufacturer/Amazon pages checked 23 October 2026. Prices change — verify before buying. As an Amazon Associate I earn from qualifying purchases.</p>
<p>Compare Wi-Fi: <a href="/de/guides/smart-bulb-gift-ideas/">gift guide</a>. Zigbee vs Wi-Fi on the French <a href="https://1piece1ampoule.fr/articles/ampoule-connectee-wifi-ou-zigbee/">article</a>.</p>`,
  },
  {
    path: 'marken/osram-ledvance',
    article: true,
    kicker: "Marken-Ratgeber",
    title: "OSRAM (LEDVANCE): Radarlamp, 3–5 Jahre Garantie, SMART+ Shop",
    description: "OSRAM Star A75 Motion Sensor E27: 1055 lm, Radar 3 m, ALLSTARS −25 %.",
    h1: "OSRAM (LEDVANCE): Markenüberblick",
    lead: "Verbraucherlampen OSRAM werden von LEDVANCE GmbH (Garching) hergestellt und garantiert. Highlight: Radarlamp — Flur oder Keller ohne Zusatzverkabelung.",
    body: `<h2>Produkt im Fokus: Star A75 Motion Sensor E27</h2>
<table><tbody>
<tr><th>Flux / power</th><td>1,055 lm for 10 W (105 lm/W), 75 W equivalent</td></tr>
<tr><th>Colour / CRI</th><td>4000 K cool white, CRI 80</td></tr>
<tr><th>Sensor</th><td>Radar (microwave), up to 3 m on 90°, works through glass/plastic shades</td></tr>
<tr><th>Behaviour</th><td>On below 20 lx, off 30 s after last motion</td></tr>
<tr><th>Grenzen</th><td>Not dimmable; wall switch must stay ON</td></tr>
</tbody></table>
<p class="en-note">Source: LEDVANCE datasheet “LED Star Classic A 75 Motion Sensor 10W 840 E27”, 23/10/2026.</p>
<a class="en-amz" href="https://www.amazon.de/dp/B0FGD6H3NZ?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0FGD6H3NZ" data-product="OSRAM Star A75 Motion Sensor E27">Preis auf Amazon.de prüfen</a>
<h2>Stärken and limits</h2>
<ul>
<li>Sensor inside the bulb — no extra wiring for cellar, hall or stairs.</li>
<li>Radar sees through closed globes where PIR fails.</li>
<li>Public datasheets and long commercial warranties (3–5 years on many lamp families).</li>
<li>3 m range only — not for a long hallway; 4000 K is harsh for living rooms; 30 s off delay fixed.</li>
</ul>
<h2>Warranty (LEDVANCE FR pages, 23/10/2026)</h2>
<p>LED Classic Energy A/B/C up to 5 years; many STAR families 3 years; luminaires 3–10 years depending on range. Star A75 Motion family: rely on minimum 2-year seller conformity if not listed explicitly.</p>
<p>Promo: code <strong>ALLSTARS</strong> −25% on OSRAM shop “All Stars” selection until 31/10/2026 — <a href="/de/aktionscodes/">details</a>.</p>`,
  },
  {
    path: 'werkzeuge/halogen-led-aequivalenz-gu10-e27-lumen',
    article: true,
    kicker: "Werkzeug",
    title: "Halogen → LED: GU10, E27, Lumen und Abstrahlwinkel",
    description: "Umrüsten nach Lumen, nicht Watt. Tabelle 20–100 W, Rechner, CRI-Hinweis. 50 W GU10 ≈ 450 lm → ~5 W LED.",
    h1: "Halogen oder Glühlampe → LED: gleiche Helligkeit",
    lead: "Vergleichen Sie Lumen, nicht Watt. Ein 50-W-Halogen-GU10 liefert etwa 450 lm; eine gute 5-W-LED erreicht 400–500 lm. Der Abstrahlwinkel ändert die Wirkung: 36° fokussiert, 110° streut.",
    body: `<h2>Äquivalenz-Rechner</h2>
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
var baseNote=base==='gu10'?'Check dimmer compatibility — see <a href="/de/ratgeber/gu10-led-flackern-dimmer-diagnose/">GU10 flicker guide</a>.':'E27/E14: check shade height (globe vs reflector).';
el('eq-result').innerHTML='<p><strong>Target flux:</strong> about <strong>'+lm.toLocaleString('en-GB')+' lm</strong> (equivalent to your '+w+' W lamp).</p><p class="mt-2"><strong>Indicative LED:</strong> ≈ <strong>'+ledW+' W LED</strong> (~95–110 lm/W on a good spec).</p><p class="mt-2"><strong>CRI:</strong> look for ≥ '+irc+' on the box (<a href="/de/ratgeber/farbwiedergabe-cri-ra/">CRI guide</a>).</p><p class="mt-2 text-stone-600">'+beamNote+' '+baseNote+'</p>';}
['eq-tech','eq-base','eq-w','eq-beam','eq-irc'].forEach(function(id){var n=el(id);if(n){n.addEventListener('input',calc);n.addEventListener('change',calc);}});calc();})();
</script>
<h2>Referenztabelle Halogen → LED</h2>
<table><thead><tr><th>Halogen (W)</th><th>~ Lumens</th><th>LED target (lm)</th><th>GU10</th><th>E27</th></tr></thead><tbody>
<tr><td>20 W</td><td>180 lm</td><td>200 lm</td><td>2–3 W LED</td><td>2–3 W LED</td></tr>
<tr><td>35 W</td><td>300 lm</td><td>350 lm</td><td>3–4 W LED</td><td>4 W LED</td></tr>
<tr><td>50 W</td><td>450 lm</td><td>500 lm</td><td>5 W LED</td><td>5–6 W LED</td></tr>
<tr><td>75 W</td><td>650 lm</td><td>750 lm</td><td>— (rare GU10)</td><td>8–9 W LED</td></tr>
<tr><td>100 W</td><td>1300 lm</td><td>1520 lm</td><td>—</td><td>12–15 W LED</td></tr>
</tbody></table>
<p>Examples: <a class="en-amz" href="https://www.amazon.de/dp/B0F62SG8Z9?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0F62SG8Z9" data-product="GU10 ~805 lm">Preis auf Amazon.de prüfen</a> <a class="en-amz" href="https://www.amazon.de/dp/B01KHIM7OG?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B01KHIM7OG" data-product="E27 806 lm">Preis auf Amazon.de prüfen</a><p class="en-note">Listing data from manufacturer/Amazon pages checked 23 October 2026. Prices change — verify before buying. As an Amazon Associate I earn from qualifying purchases.</p>
<p>Install: <a href="/de/anleitungen/halogen-gu10-mr16-durch-led-ersetzen/">replace GU10/MR16</a>, <a href="/de/ratgeber/lampensockel-e27-e14-gu10/">bases</a>. Full interactive version also on <a href="https://1piece1ampoule.fr/outils/equivalence-halogene-led-gu10-e27-lumens/">French tools page</a>.</p>`,
  },
  err({
    path: 'ratgeber/fehlercode/wiz-bulb-offline',
    kicker: "Error code guide",
    title: "WiZ-Lampe offline in der App (Wi-Fi 2,4 GHz)",
    description: "WiZ V2 offline: Migration, WLAN-Wechsel. Pairing am 2,4-GHz-WLAN.",
    h1: "WiZ-Lampe als offline angezeigt",
    lead: "Die Lampe antwortet nicht mehr in WiZ V2, der Wandschalter speist sie aber noch.",
    body: `<p><strong>Symptom:</strong> Status offline in WiZ V2.</p>
<p><strong>Ursachen:</strong> unvollständige Migration V1→V2, neues WLAN, Teil-Reset.</p>
<h2>Schritte</h2><ol>
<li>App <strong>WiZ V2</strong> verwenden.</li>
<li>WLAN der Lampe neu einrichten (Pairing).</li>
<li>Wandschalter auf EIN lassen.</li>
<li>Router sendet <strong>2,4-GHz-WLAN</strong> (Wi-Fi).</li>
<li>Mehrere Lampen offline: Router neu starten.</li>
</ol>
<p>Schwierigkeit 2/5 · ca. 10–20 min · 0 €.</p>`,
  }),
  err({
    path: 'ratgeber/fehlercode/nanoleaf-wifi-2g',
    kicker: "Error code guide",
    title: "Nanoleaf: Wi-Fi-Einrichtung schlägt fehl (2,4 GHz)",
    description: "Nanoleaf: letzter Schritt scheitert — 2,4 GHz, AP-Isolation, Passwort testen.",
    h1: "Nanoleaf: Wi-Fi-Verbindung fehlgeschlagen",
    lead: "Einrichtung scheitert im letzten Schritt; nur lokale Steuerung möglich.",
    body: `<p><strong>Ursachen:</strong> nur 5-GHz, Sonderzeichen im Passwort, AP-Isolation.</p>
<h2>Schritte</h2><ol>
<li>Nur <strong>2,4 GHz</strong> für die Einrichtung.</li>
<li>Passwort zum Test vereinfachen.</li>
<li>Client-Isolation deaktivieren.</li>
<li>Controller näher an den Router.</li>
<li>Reset (5 s) und erneut versuchen.</li>
</ol>
<p>Schwierigkeit 2/5 · 10–25 min.</p>`,
  }),
  err({
    path: 'ratgeber/gu10-led-flackern-dimmer-diagnose',
    kicker: "Störungen",
    title: "GU10/E27-LED flackert, Dimmer brummt, Nachleuchten — Diagnose",
    description: "Systematische Diagnose: Flimmern am Dimmer, Brummen, Geisterlicht, Flackern bei 100 %. Schwierigkeit, Zeit, Kosten.",
    h1: "GU10/E27-LED: Flimmern, Brummen, Nachleuchten",
    lead: "Entscheidungsweg wie auf unserer französischen Seite. Bei Brandgeruch oder Verteiler: Elektriker rufen.",
    body: `<h2>1 — Main symptom</h2>
<ul>
<li><strong>Flicker when on</strong>, especially at low dimmer setting → check dimmable marking, trailing vs leading edge, minimum load, replace incompatible dimmer.</li>
<li><strong>Buzz from dimmer or lamp</strong> → halogen-era dimmer on LED, under-minimum load, mix of dimmable and non-dimmable — use LED-rated dimmer and matched bulbs.</li>
<li><strong>Glow or flash when “off”</strong> → standby current through smart/no-neutral switch or dimmer leakage — bypass, compatible dimmable LED, or smart bulb with switch locked ON.</li>
<li><strong>Flicker at 100 %</strong> on a simple switch → loose lamp, failing driver, or bad contact in GU10 holder — try another bulb, check lampholder.</li>
</ul>
<h2>Typical fixes (from our tree leaves)</h2>
<table><thead><tr><th>Case</th><th>Schwierigkeit</th><th>Time</th><th>Cost</th></tr></thead><tbody>
<tr><td>Non-dimmable LED on dimmer → swap for dimmable or remove dimmer</td><td>1</td><td>5–15 min</td><td>£5–25</td></tr>
<tr><td>Leading-edge dimmer + dimmable LED → trailing-edge LED dimmer</td><td>2–3</td><td>20–45 min</td><td>£25–55</td></tr>
<tr><td>Single low-power LED below dimmer minimum → add load or “low load” dimmer</td><td>2–3</td><td>25–50 min</td><td>£10–50</td></tr>
<tr><td>Smart switch without neutral + ghosting → manufacturer bypass at rose</td><td>3–4</td><td>30–90 min</td><td>£4–15 parts (+ electrician)</td></tr>
</tbody></table>
<p>Matrix: <a href="https://1piece1ampoule.fr/guides/matrice-variateur-dimmer-ampoule-led-gu10-e27/">dimmer × LED</a> (FR). Smart bulbs: <a href="/de/ratgeber/smart-led-stoerungen/">troubleshooting hub</a>.</p>`,
  }),
  {
    path: 'ratgeber/matter-thread-matrix-philips-hue-aqara-govee',
    article: true,
    kicker: "Protokoll-Ratgeber",
    title: "Matter-, Thread- und Zigbee-Matrix: Hue, Aqara, Govee, Shelly, Nanoleaf, IKEA",
    description: "Quer-Kompatibilität smarter Lampen mit Matter, Thread, Zigbee 3.0, Home Assistant, Apple Home, Google, Alexa.",
    h1: "Matter, Thread und Zigbee: Kompatibilitätsmatrix",
    lead: "Matter ist eine gemeinsame Anwendungsschicht; Thread ein Energie-sparendes Funknetz; Zigbee 3.0 das Mesh von Hue und Aqara. Status hängt von der Firmware ab — SKU prüfen.",
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
<p>Wi-Fi vs Zigbee: French <a href="https://1piece1ampoule.fr/articles/ampoule-connectee-wifi-ou-zigbee/">comparison article</a>. No-neutral kits: <a href="/de/ratgeber/smarter-schalter-ohne-neutral-kompatibilitaet/">compatibility matrix</a>.</p>`,
  },
  {
    path: 'marken/steinel',
    article: true,
    kicker: "Marken-Ratgeber",
    title: "Steinel: Bewegungslicht, NightMatic 2000, 3 Jahre Garantie",
    description: "Steinel XSolar L-S ONE 150 lm, NightMatic, IS 360-1 — Datenblattwerte, 3 Jahre Garantie.",
    h1: "Steinel: Markenüberblick",
    lead: "Steinel (Herzebrock-Clarholz) baut Bewegungsmelder, Dämmerungsschalter und Außenleuchten — sinnvoll für Weg, Garage, Eingang.",
    body: `<h2>Products we cite (manufacturer datasheets, 23/10/2026)</h2>
<table><thead><tr><th>Product</th><th>Role</th><th>Key data</th></tr></thead><tbody>
<tr><td>XSolar L-S ONE (081973)</td><td>Solar wall with PIR</td><td>150 lm, 3000 K, 1.2 W; IR 140°, 8 m tangential / 2 m radial; LiFePO4 3000 mAh; IP44, IK03 — <a class="en-amz" href="https://www.amazon.de/dp/B0B272H45X?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0B272H45X" data-product="XSolar L-S ONE Amazon UK">Preis auf Amazon.de prüfen</a></td></tr>
<tr><td>XSolar LH-N (035730)</td><td>Solar house number</td><td>4 LEDs marker, 4000 K; dusk 2 lx; IP44</td></tr>
<tr><td>L 12 M (069155)</td><td>E27 wall lamp, no sensor</td><td>Bulb not included, max 60 W; IP44</td></tr>
<tr><td>NightMatic 2000 (550417)</td><td>Dusk switch</td><td>2–30 lx threshold; 1000 W resistive, max 4 LED lamps; 0.8 W; IP54</td></tr>
<tr><td>IS 360-1 DE (032845)</td><td>Ceiling motion sensor</td><td>360°, Ø8 m / Ø4 m; 8 s–35 min; 2–2000 lx; LED &gt;8 W: 350 W; IP54</td></tr>
</tbody></table>
<p class="en-note">EU list prices on 2echoix (second grade) were €70.59, €57.19, €23.39, €41.99 on 22/10/2026 — may change; not UK prices.</p>
<h2>Stärken and limits</h2>
<ul>
<li>Precise settings (IS 360-1: 8 s to 35 min, 2–2000 lx).</li>
<li>Detailed LED load limits on datasheets.</li>
<li>LiFePO4 on XSolar range; <strong>3-year manufacturer warranty</strong> in France (5 years XLED home line).</li>
<li>XSolar 150 lm only finds the lock — not aisle lighting; L 12 M has <em>no</em> sensor despite similar names.</li>
</ul>
<p>Radar-in-bulb alternative: <a href="/de/marken/osram-ledvance/">OSRAM motion bulb</a>. Outdoor guide on French site.</p>`,
  },
  {
    path: 'raeume',
    kicker: "Räume",
    title: "Beleuchtung nach Raum: Küche, Flur, Esszimmer, Bad…",
    description: "Raum wählen für Lux/Lumen-Tipps. Flur- und Esszimmer-Ratgeber in dieser Ausgabe.",
    h1: "Räume",
    lead: "Raumtyp wählen für Lumen, Kelvin, CRI (Farbwiedergabeindex) und typische Leuchten. Weitere Raumseiten folgen in der deutschen Ausgabe.",
    body: `<div class="en-grid">
<a class="en-tile" href="/de/raeume/kitchen/"><strong>Kitchen</strong><span>Worktop zones, ceiling and dining area.</span></a>
<a class="en-tile" href="/de/raeume/living-room/"><strong>Living room</strong><span>Layered light, dimming, 2700 K evenings.</span></a>
<a class="en-tile" href="/de/raeume/hallway/"><strong>Hallway</strong><span>Narrow corridors, 3500–4000 K, anti-shadow.</span></a>
<a class="en-tile" href="/de/raeume/dining-room/"><strong>Dining room</strong><span>Pendant over table, CRI for food.</span></a>
<a class="en-tile" href="/de/raeume/bathroom/"><strong>Bathroom</strong><span>IP zones, mirror light, CRI 90.</span></a>
<a class="en-tile" href="/de/raeume/bedroom/"><strong>Bedroom</strong><span>Warm dim light, reading spots.</span></a>
<a class="en-tile" href="/de/raeume/home-office/"><strong>Home office</strong><span>4000 K task light, anti-glare.</span></a>
<a class="en-tile" href="/de/raeume/garage/"><strong>Garage</strong><span>IP fittings, 4000 K, high lumens.</span></a>
<a class="en-tile" href="/de/raeume/garden/"><strong>Garden</strong><span>Outdoor IP, solar and motion.</span></a>
</div>
<p>Method: <a href="/de/anleitungen/lux-lumen-pro-raum-berechnen/">lux and lumens per room</a>. French full index: <a href="https://1piece1ampoule.fr/pieces/">1piece1ampoule.fr/pieces</a>.</p>`,
  },
  err({
    path: 'ratgeber/fehlercode/hue-lampe-blinkt-reset',
    kicker: "Error code guide",
    title: "Hue-Lampe blinkt: Pairing oder Reset",
    description: "Hue pulsiert nach Stromausfall: Zigbee-Pairing oder Reset. Kompatible Dimmer.",
    h1: "Hue-Lampe blinkt: Pairing oder Reset",
    lead: "Regelmäßiges Pulsieren nach Netzstörung — oft Zigbee-Pairing oder Reset nötig.",
    body: `<h2>Schritte</h2><ol>
<li>If you meant to add it: start “Add light” in the Hue app.</li>
<li>If it was already installed: power cycle reset (off 5 s, on 5 s — repeat per Hue instructions for your model).</li>
<li>Avoid non-“Works with Hue” dimmers.</li>
<li>Re-pair to the Bridge if it disappeared.</li>
<li>Still blinking on a plain lampholder: possible hardware fault.</li>
</ol>
<p>Support: 00800 7445 4775 · <a href="https://www.philips-hue.com/en-gb/support" rel="nofollow noopener" target="_blank">philips-hue.com support</a>. Schwierigkeit 1/5 · 5–15 min · £0.</p>`,
  }),
  err({
    path: 'ratgeber/fehlercode/hue-sync-box-hdmi-kein-signal',
    kicker: "Error code guide",
    title: "Hue Sync Box: schwarzes Bild oder kein Signal",
    description: "TV schwarz mit Sync Box: HDMI-Kabel, Boot-Reihenfolge, HDCP 2.2, Dolby Vision testen.",
    h1: "Hue Sync Box: kein HDMI-Signal",
    lead: "TV bleibt schwarz, obwohl die Quelle direkt am TV funktioniert.",
    body: `<h2>Schritte</h2><ol>
<li>Test source → TV without Sync Box.</li>
<li>Replace HDMI cable (18 Gbps rated for 4K HDR).</li>
<li>Power order: TV, then Sync Box, then console.</li>
<li>Temporarily disable HDR/Dolby Vision on the source.</li>
<li>One source only failing: check its HDCP settings.</li>
</ol>
<p>Entertainment area must exist in Hue app for sync. Schwierigkeit 2/5 · 15–30 min · £10–40 cable. Support: Philips Hue.</p>`,
  }),
  {
    path: 'marken',
    article: true,
    kicker: "Marken",
    title: "Marken und Händler: Hue, OSRAM, Steinel, Tapo, Luminaire.fr",
    description: "Übersicht: Schwerpunkt, Garantie/Rückgabe, Kurzfazit. OSRAM-Aktion auf Aktionscodes-Seite.",
    h1: "Marken und Händler in unseren Ratgebern",
    lead: "Vor dem Kauf: Garantie, Rückgabe und Einsatzgebiet der Marke.",
    body: `<table><thead><tr><th>Brand</th><th>Type</th><th>On this site</th><th>Warranty / returns</th><th>Our view</th></tr></thead><tbody>
<tr><td><a href="/de/marken/philips-hue/">Philips Hue</a></td><td>Connected lighting (Signify)</td><td>3 E27 smart bulbs compared</td><td>2-year manufacturer</td><td>Reference for expandable Zigbee; CRI 80 only</td></tr>
<tr><td><a href="/de/marken/osram-ledvance/">OSRAM (LEDVANCE)</a></td><td>Manufacturer + shop</td><td>Radar Star A75 + official shop</td><td>3–5 years on listed lamp families</td><td>Strong datasheets; radar bulb for no-wire automation</td></tr>
<tr><td><a href="/de/marken/luminaire-fr/">Luminaire.fr</a></td><td>Merchant (Lampenwelt)</td><td>Wide fitting catalogue</td><td>30-day return (FR), paid return postage</td><td>When you need a specific pendant or outdoor fitting</td></tr>
<tr><td><a href="/de/marken/steinel/">Steinel</a></td><td>Motion / outdoor</td><td>5 datasheet products</td><td>3-year manufacturer (FR terms)</td><td>Best for dedicated motion/dusk hardware</td></tr>
<tr><td>Tapo (TP-Link)</td><td>Wi-Fi smart</td><td>L530E in gift guide</td><td>2-year TP-Link</td><td>Cheap entry without hub; class F efficiency</td></tr>
</tbody></table>
<p class="en-note">UK consumers always have statutory rights against the seller; EU/FR pages cite French legal conformity (2 years).</p>
<p>Deals: <a href="/de/aktionscodes/">promo codes</a>.</p>`,
  },
  {
    path: 'raeume/flur',
    article: true,
    kicker: "Raum-Ratgeber",
    title: "Flurbeleuchtung: dunkle Ecken, Lumen, 3500–4000 K, CRI",
    description: "Flur in Zonen: Eingang, dunkler Abschnitt, Ecke, Boden. Tunnel-Effekt vermeiden.",
    h1: "Flurbeleuchtung",
    lead: "Flur in Zonen teilen — Eingang, gerader dunkler Abschnitt, Ecke, Boden — dann Kelvin, CRI und Dimmen abstimmen.",
    body: `<h2>Kurzfassung</h2>
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
<h2>Typische Fehler</h2>
<ul>
<li>One ceiling spot: loses the bend and casts facial shadow.</li>
<li>Too cool a white: feels flat and unwelcoming.</li>
<li>No dimming: cannot soften light at night.</li>
</ul>
<p>Lux method: <a href="/de/anleitungen/lux-lumen-pro-raum-berechnen/">lumens and lux</a>. Motion bulb idea: <a href="/de/marken/osram-ledvance/">OSRAM radar E27</a> (3 m range limit). French detail: <a href="https://1piece1ampoule.fr/pieces/couloir/">couloir page</a>.</p>`,
  },
  {
    path: 'artikel/daemmerungslampe',
    article: true,
    kicker: "Artikel",
    title: "Dämmerungslampe: Fotzelle vs. Bewegungsmelder",
    description: "Fotzellenlampe brennt die ganze Nacht (~5 W × 12 h). Außen mindestens IP44.",
    h1: "Dämmerungslampe (Fotzelle)",
    lead: "Schaltet bei Dunkelheit ein und morgens aus — ohne App-Timer, per eingebauter Fotzelle.",
    body: `<h2>Dämmerungsschaltung vs. Bewegungsmelder</h2>
<table><thead><tr><th></th><th>Dusk-to-dawn</th><th>Motion (PIR/radar)</th></tr></thead><tbody>
<tr><td>On when</td><td>All night</td><td>When someone passes</td></tr>
<tr><td>Best for</td><td>Porch, façade lantern, “occupied” look</td><td>Path, garage, cellar</td></tr>
<tr><td>Energy</td><td>~4–8 W × 12 h/night</td><td>Very low average</td></tr>
<tr><td>Deterrent</td><td>Constant presence</td><td>Sudden light</td></tr>
</tbody></table>
<h2>Wo montieren</h2>
<ul>
<li>Outdoor wall lantern with bulb sheltered — luminaire at least <strong>IP44</strong>.</li>
<li>Window lamp for holiday presence simulation.</li>
<li>Enclosed stair with no daylight: photocell may stay dark → bulb always on — wrong product.</li>
</ul>
<h2>Trap: the sensor “sees” its own light</h2>
<p>If the cell catches spill from the bulb, it may think it is day and cycle off/on. Point the sensor at open sky or use a fitting that shields it.</p>
<h2>Betriebskosten (French regulated example)</h2>
<p>5 W × 12 h/night ≈ 22 kWh/year. At the French regulated tariff <strong>0.2001 € TTC/kWh</strong> (Base option from 1 August 2026 on the French market) that is about <strong>4.40 €/year</strong>. UK: multiply kWh by your p/kWh unit rate.</p>
<p>Example product cited on FR site: Lucide ST64 filament dusk bulb 2200 K — <a class="en-amz" href="https://www.amazon.de/dp/B07TSKP9JC?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B07TSKP9JC" data-product="Lucide ST64 dusk E27">Preis auf Amazon.de prüfen</a>. Solar alternative: <a href="/de/marken/steinel/">Steinel XSolar</a>.</p>`,
  },
  err({
    path: 'ratgeber/fehlercode/schneider-wiser-offline',
    kicker: "Error code guide",
    title: "Schneider Wiser offline: Gateway und Dimmer",
    description: "Wiser-App offline: Gateway, 2,4-GHz-WLAN, Firmware. Support 0825 012 999.",
    h1: "Schneider Wiser: Gerät offline",
    lead: "Wiser by SE zeigt offline; Szenen laufen nicht mehr.",
    body: `<h2>Schritte</h2><ol>
<li>Check Wiser gateway power and Ethernet/Wi-Fi link.</li>
<li>Reconnect to <strong>2.4 GHz Wi-Fi</strong>.</li>
<li>Reboot router and gateway.</li>
<li>Update app and device firmware.</li>
<li>France support: 0825 012 999 — <a href="https://www.se.com/ww/de/work/support/" rel="nofollow noopener" target="_blank">se.com support</a>.</li>
</ol>
<p>Schwierigkeit 2/5 · 15–30 min · £0.</p>`,
  }),
  {
    path: 'ratgeber/smart-led-stoerungen',
    article: true,
    kicker: "Störungen",
    title: "Smarte Lampen & LED: Fehlercode-Verzeichnis",
    description: "Einstieg Hue, Shelly, IKEA, Govee, WiZ, Nanoleaf, Dimmer — 44 Schritte auf der FR-Seite.",
    h1: "Smarte Lampen & LED: Diagnose und Fehlercodes",
    lead: "Ein Einstieg für Störungen: Hue Bridge, Zigbee/Wi-Fi, Shelly, Govee-Streifen, Dimmer, Flimmern.",
    body: `<p>The full interactive directory (filter by brand, symptom, difficulty) lives on the French site with <strong>44 step-by-step sheets</strong> sourced from <code>catalog-fr.json</code>.</p>
<h2>Prioritäts-Ratgeber auf Deutsch</h2>
<ul>
<li><a href="/de/guides/error-code/wiz-bulb-offline/">WiZ bulb offline</a></li>
<li><a href="/de/guides/error-code/nanoleaf-wifi-2g/">Nanoleaf Wi-Fi (2.4 GHz)</a></li>
<li><a href="/de/guides/error-code/hue-bulb-blinking-reset/">Hue bulb blinking / reset</a></li>
<li><a href="/de/guides/error-code/hue-sync-box-hdmi-no-signal/">Hue Sync Box HDMI no signal</a></li>
<li><a href="/de/guides/error-code/schneider-wiser-offline/">Schneider Wiser offline</a></li>
<li><a href="/de/guides/error-code/govee-bulb-firmware-brick/">Govee bulb bricked after OTA</a></li>
<li><a href="/de/guides/error-code/govee-strip-overheating/">Govee strip overheating</a></li>
</ul>
<h2>Verwandte Tools</h2>
<ul>
<li><a href="/de/ratgeber/gu10-led-flackern-dimmer-diagnose/">GU10/E27 flicker diagnosis</a></li>
<li><a href="/de/ratgeber/smarter-schalter-ohne-neutral-kompatibilitaet/">Smart switch without neutral</a></li>
<li><a href="/de/guides/matter-thread-matrix-philips-hue-aqara-govee/">Matter / Thread / Zigbee matrix</a></li>
<li><a href="/de/raeume/">Choose a replacement bulb by room</a></li>
</ul>
<p>Vollständiges FR-Verzeichnis: <a href="https://1piece1ampoule.fr/guides/depannage-ampoules-connectees-led/">depannage hub</a>.</p>`,
  },
  {
    path: 'raeume/esszimmer',
    article: true,
    kicker: "Raum-Ratgeber",
    title: "Esszimmer: Tisch, Sideboard, CRI und Dimmen",
    description: "Zonen Esszimmer: Tisch, Anrichte, Stimmung, Verkehr. Warmes dimmbares Licht, CRI für natürliche Farben.",
    h1: "Esszimmerbeleuchtung",
    lead: "Zonen — Tisch, Anrichte, indirekte Stimmung, Laufwege — dann Kelvin/CRI für Gesichter und Speisen.",
    body: `<h2>Ziele nach Zone</h2>
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
<p>Often <strong>2700–3000 K</strong> dimmed after dinner. French detail: <a href="https://1piece1ampoule.fr/pieces/salle-manger/">salle à manger</a>. Merchant pendants: <a href="/de/marken/luminaire-fr/">Luminaire.fr</a>.</p>`,
  },
  {
    path: 'kontakt',
    template: 'contact',
    kicker: "Kontakt",
    title: "Kontakt — Frage zur Beleuchtung",
    description: "Fragen zu Lampen, Räumen oder Partnerschaften. Antwort meist innerhalb 24–48 Werktagen.",
    h1: "Kontakt",
    lead: '',
    body: '',
  },
  err({
    path: 'ratgeber/fehlercode/govee-bulb-firmware-brick',
    kicker: "Error code guide",
    title: "Govee-Lampe nach Firmware-Update blockiert",
    description: "Govee H600x hängt nach OTA: Stromzyklus, Update am 2,4-GHz-WLAN, Support.",
    h1: "Govee-Lampe nach OTA-Update blockiert",
    lead: "Keine Reaktion, feste Farbe oder verschwunden aus der App nach Over-the-Air-Update.",
    body: `<h2>Schritte</h2><ol>
<li>Power off 10 s, on again.</li>
<li>Stay near router on stable <strong>2.4 GHz Wi-Fi</strong>; retry OTA.</li>
<li>Manual re-add in pairing mode.</li>
<li>Contact Govee support with exact model (H600x).</li>
<li>Under warranty: replacement.</li>
</ol>
<p>Official support recommended (requires_official_sav flag in catalogue). Schwierigkeit 3/5 · 20–40 min.</p>`,
  }),
  err({
    path: 'ratgeber/fehlercode/govee-strip-ueberhitzung',
    kicker: "Error code guide",
    title: "Govee-LED-Streifen überhitzt oder vergilbt",
    description: "Streifen heiß: Helligkeit senken, Aluprofil, max. Länge pro Netzteil.",
    h1: "Govee-Streifen: Überhitzung",
    lead: "Streifen heiß, Farbe an den Enden gelblich, Kleber löst sich — oft Netzteil oder Montage.",
    body: `<h2>Schritte</h2><ol>
<li>Lower max brightness in Govee Home.</li>
<li>Mount in an <strong>aluminium profile</strong> for heat spread.</li>
<li>Do not exceed length per power supply rating.</li>
<li>Unwind bundled loops that trap heat.</li>
<li>Replace PSU if it also runs hot abnormally.</li>
</ol>
<p><strong>Sicherheit:</strong> overheated strip can melt adhesive and pose a fire risk — stay within rated length. Schwierigkeit 2/5 · 20–40 min · £10–40 parts. Support: help.govee.com</p>`,
  }),
];
