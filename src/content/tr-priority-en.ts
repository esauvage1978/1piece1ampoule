// Priority EN pages (Oct 2026 lot). Sources: FR pages in src/pages/, hiver.ts, marques.ts, catalog-fr.json — checked 23/10/2026.
import type { EnPage } from './en';

const uk = (asin: string, label: string) =>
  `<a class="en-amz" href="https://www.amazon.co.uk/dp/${asin}?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="${asin}" data-product="${label}">Check price on Amazon UK</a>`;
const note = `<p class="en-note">Listing data from manufacturer/Amazon pages checked 23 October 2026. Prices change — verify before buying. As an Amazon Associate I earn from qualifying purchases.</p>`;

const err = (p: Omit<EnPage, 'article'> & { kicker?: string }): EnPage => ({
  ...p,
  article: true,
  kicker: p.kicker ?? 'Error code guide',
});

export const TR_PRIORITY_EN: EnPage[] = [
  {
    path: 'zones/kitchen-worktop',
    article: true,
    kicker: 'Zone guide',
    title: 'Kitchen worktop lighting: lux, lumens, colour temperature and LED bars',
    description: 'How many lumens under wall cabinets, which Kelvin and CRI, and three mains-powered LED bars compared (lm/m calculated). Target 500 lux on the worktop.',
    h1: 'Kitchen worktop lighting',
    lead: 'The ceiling light fills the room, but you cook with your back to it — your body shadows the board. The fix is a source under the wall units, between you and the worktop.',
    body: `<h2>Three numbers to remember</h2>
<ul>
<li><strong>500 lux</strong> on the worktop for chopping and reading a recipe — our “detailed task” benchmark in <a href="/en/tutorials/how-much-light-per-room-lux-foot-candles/">lux per room</a>.</li>
<li><strong>420 lm per metre</strong> minimum: for a 3.0 × 0.6 m worktop, 500 lx × 1.8 m² × factor 1.4 (close source) ≈ 1,260 lm, i.e. 420 lm/m of cabinet run.</li>
<li><strong>4000 K and CRI (colour rendering index) ≥ 80</strong> (90 if you can) to judge food without a colour cast — see <a href="/en/guides/colour-temperature-kelvin/">colour temperature</a> and <a href="/en/guides/cri-colour-rendering-index/">CRI</a>.</li>
</ul>
<h2>Three mains-powered bars compared</h2>
<p>Lumens per metre = stated flux ÷ length (manufacturer data, checked 23/10/2026). All bars exceed 420 lm/m; the choice is mostly colour, mounting and length.</p>
<table><thead><tr><th>Product</th><th>Power</th><th>Stated flux</th><th>Flux/m (calc.)</th><th>Colour</th><th>Daisy-chain</th></tr></thead><tbody>
<tr><td>DA LIGHT swivel bar 56 cm ${uk('B07H7HB6LG', 'DA LIGHT 56 cm bar')}</td><td>230 V, switch</td><td>560 lm</td><td>1,000 lm/m</td><td>3000 / 4000 / 6000 K</td><td>Yes, linkable</td></tr>
<tr><td>SEBSON kitchen bar 60 cm ${uk('B01LZEWUT7', 'SEBSON 60 cm bar')}</td><td>230 V, plug + switch</td><td>715 lm (11 W)</td><td>1,192 lm/m</td><td>3000 K</td><td>One bar per socket</td></tr>
<tr><td>Oktaplex Riga 28 cm ${uk('B0CGRC4GQ9', 'Oktaplex Riga 28 cm')}</td><td>230 V</td><td>370 lm (4 W)</td><td>1,321 lm/m</td><td>4000 K</td><td>Yes, extendable</td></tr>
</tbody></table>
<p><strong>Pick:</strong> DA LIGHT — 1,000 lm/m (more than double the target), three whites including 4000 K, swivel head toward the splashback, linkable bars on one plug.</p>
<h2>No socket under the cabinets?</h2>
<p>A rechargeable bar (e.g. OUILA 60 cm on the French site) suits backup use; if the maker does not publish lumens, do not rely on it as the main worktop light.</p>
<h2>Bar or LED strip?</h2>
<p>A bar screws in and plugs in — about 15 minutes. Strip in an aluminium profile gives a continuous line but needs a sized 24 V driver. See <a href="/en/tutorials/under-cabinet-led-strip-kitchen/">under-cabinet LED strip</a>.</p>
<h2>Placement</h2>
<ul>
<li>As far <strong>forward</strong> on the wall unit as possible so light hits the board, not only the splashback.</li>
<li>One bar per cabinet run, leaving 2–3 cm at each end for end caps.</li>
<li>Nothing over the sink without the right <a href="/en/guides/ip-ratings-bathroom-outdoor/">IP rating</a>.</li>
</ul>
<p>General kitchen lighting: <a href="/en/rooms/kitchen/">kitchen room guide</a> (when published). More zones on the French <a href="https://1piece1ampoule.fr/zones/">zones hub</a>.</p>`,
  },
  {
    path: 'brands/luminaire-fr',
    article: true,
    kicker: 'Partner merchant',
    title: 'Luminaire.fr review: delivery €39.90 bulky items, 30-day returns, support',
    description: 'Luminaire.fr merchant sheet: Lampenwelt catalogue, DPD/GLS delivery, €39.90 bulky surcharge, 30-day returns. Updated 23/10/2026.',
    h1: 'Luminaire.fr: our view of the merchant',
    lead: 'Luminaire.fr is the French shop of Lampenwelt GmbH (Fulda, Germany). It is a multi-brand retailer, not a manufacturer — wider choice of pendants, wall lights and ceiling fittings than on Amazon when you need a specific style.',
    body: `<h2>Catalogue</h2>
<p>Indoor fittings (pendants, ceiling, wall, floor, spots), outdoor lighting (bollards, solar, motion), bulbs, smart home and seasonal décor. Featured brands include Lindby, Lucande, Arcchio, Prios, EGLO, Paulmann, Philips, Philips Hue, OSRAM, SLV, <a href="/en/brands/steinel/">Steinel</a>, plus design names (Artemide, FLOS, Louis Poulsen, Foscarini…).</p>
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
<p>We use Luminaire.fr when we need a specific fitting (dining pendant, IP44 bathroom wall light, garden bollard) rather than a bulb alone. Measure before ordering large pieces. For bulbs only, Amazon UK or the <a href="/en/brands/osram-ledvance/">OSRAM shop</a> is often simpler.</p>
<p>Promo code: none verified on 9 November 2026. The mid-season offer ended on 25 October 2026. A discount only counts if it shows on the basket total. Active offers, when there are any: <a href="/en/promo-codes/">promo codes page</a>. This shop ships within France.</p>`,
  },
  {
    path: 'promo-codes',
    template: 'promo-codes',
    kicker: 'Deals',
    title: 'Lighting promo codes and verified deals — October 2026',
    description: 'Verified partner promo codes with end dates. OSRAM ALLSTARS -25% until 31/10/2026.',
    h1: 'Lighting promo codes',
    lead: '',
    body: '',
  },
  {
    path: 'guides/smart-bulb-gift-ideas',
    article: true,
    kicker: 'Gift guide',
    title: 'Smart bulb gift ideas: Wi-Fi, Bluetooth or Zigbee (EPREL data)',
    description: 'Give a connected bulb without wrong base or hub: E27, GU10, Wi-Fi 2.4 GHz or Zigbee. Four verified ideas (Philips Hue, Tapo) with EPREL figures.',
    h1: 'Smart bulb gift ideas',
    lead: 'A smart bulb is a good gift if it fits the lamp and works with the recipient’s router or phone. Three questions are enough to avoid a return.',
    body: `<h2>Three questions before buying</h2>
<ol>
<li><strong>Which base?</strong> E27 in most pendants, E14 for small shades, GU10 for spot fittings. See <a href="/en/guides/bulb-bases-b22-e26-e27-gu10/">bulb bases</a>.</li>
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
${uk('B08GDC99PX', 'Tapo L530E Wi-Fi colour E27')}${uk('B099NPGWCQ', 'Hue White E27 2-pack')}${uk('B0FJ8VXHRX', 'Hue White Ambiance 1100 lm')}${uk('B099NRLRG3', 'Hue White & Color starter kit')}${note}
<h2>So it works on Christmas morning</h2>
<ul>
<li>Include the gift receipt — wrong base means an easy swap.</li>
<li>Smart bulbs need permanent power: the wall switch stays ON, or add a wireless remote. See <a href="/en/guides/smart-switch-no-neutral-compatibility/">smart switch without neutral</a>.</li>
<li>On a legacy dimmer, smart bulbs flicker — remove the dimmer or lock it at full.</li>
</ul>
<p>More: <a href="/en/brands/philips-hue/">Philips Hue brand page</a>, winter lighting on the French site.</p>`,
  },
  {
    path: 'guides/smart-switch-no-neutral-compatibility',
    article: true,
    kicker: 'Smart home guide',
    title: 'Smart switch without neutral: Shelly, Legrand, Aqara, Sonoff, Schneider matrix',
    description: 'Which 2-wire smart module works without a neutral at the switch? Wi-Fi and Zigbee matrix, minimum LED load, bypass notes.',
    h1: 'Smart switch compatibility without neutral',
    lead: 'In many UK homes the switch box has live and switched live but no neutral. Two-wire modules draw standby current through the bulb — with LEDs you often need a bypass at the ceiling rose. Always comply with BS 7671; hire a registered electrician for mains work.',
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
<p>Step-by-step: <a href="/en/tutorials/smart-switch-no-neutral/">smart switch without neutral tutorial</a>. Ghosting: <a href="/en/guides/smart-led-troubleshooting/">smart LED troubleshooting hub</a>.</p>`,
  },
  {
    path: 'brands/philips-hue',
    article: true,
    kicker: 'Brand guide',
    title: 'Philips Hue review: EPREL bulbs, Bridge, 2-year warranty, pros and cons',
    description: 'Philips Hue by Signify: White, White Ambiance and Color E27 from our comparisons, Bluetooth vs Bridge, 2-year warranty, standby draw.',
    h1: 'Philips Hue: our view of the brand',
    lead: 'Philips Hue is Signify’s connected lighting range — the reference for smart bulbs in Europe. Here are the models we cite, official EPREL figures, what the Hue Bridge adds, and warranty facts for products bought in the EU/UK.',
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
<p>Support: Philips Hue help line 00800 7445 4775 (EU). Our picks: ${uk('B099NPGWCQ', 'Hue White 2-pack')} ${uk('B0FJ8VXHRX', 'White Ambiance')} ${uk('B099NRLRG3', 'Color starter kit')}${note}
<p>Compare Wi-Fi: <a href="/en/guides/smart-bulb-gift-ideas/">gift guide</a>. Zigbee vs Wi-Fi on the French <a href="https://1piece1ampoule.fr/articles/ampoule-connectee-wifi-ou-zigbee/">article</a>.</p>`,
  },
  {
    path: 'brands/osram-ledvance',
    article: true,
    kicker: 'Brand guide',
    title: 'OSRAM (LEDVANCE) review: radar bulb, 3–5 year warranty, SMART+ shop',
    description: 'OSRAM consumer lamps by LEDVANCE GmbH: Star A75 Motion Sensor E27 datasheet, radar 3 m, 1055 lm, ALLSTARS promo -25%.',
    h1: 'OSRAM (LEDVANCE): our view of the brand',
    lead: 'Consumer OSRAM lamps are made and warranted by LEDVANCE GmbH (Garching, Germany). The stand-out product is the radar motion bulb — automating a landing or cellar without wiring. Also sold on shop.ledvance.fr (EU).',
    body: `<h2>Featured product: Star A75 Motion Sensor E27</h2>
<table><tbody>
<tr><th>Flux / power</th><td>1,055 lm for 10 W (105 lm/W), 75 W equivalent</td></tr>
<tr><th>Colour / CRI</th><td>4000 K cool white, CRI 80</td></tr>
<tr><th>Sensor</th><td>Radar (microwave), up to 3 m on 90°, works through glass/plastic shades</td></tr>
<tr><th>Behaviour</th><td>On below 20 lx, off 30 s after last motion</td></tr>
<tr><th>Limits</th><td>Not dimmable; wall switch must stay ON</td></tr>
</tbody></table>
<p class="en-note">Source: LEDVANCE datasheet “LED Star Classic A 75 Motion Sensor 10W 840 E27”, 23/10/2026.</p>
${uk('B0FGD6H3NZ', 'OSRAM Star A75 Motion Sensor E27')}
<h2>Strengths and limits</h2>
<ul>
<li>Sensor inside the bulb — no extra wiring for cellar, hall or stairs.</li>
<li>Radar sees through closed globes where PIR fails.</li>
<li>Public datasheets and long commercial warranties (3–5 years on many lamp families).</li>
<li>3 m range only — not for a long hallway; 4000 K is harsh for living rooms; 30 s off delay fixed.</li>
</ul>
<h2>Warranty (LEDVANCE FR pages, 23/10/2026)</h2>
<p>LED Classic Energy A/B/C up to 5 years; many STAR families 3 years; luminaires 3–10 years depending on range. Star A75 Motion family: rely on minimum 2-year seller conformity if not listed explicitly.</p>
<p>Promo: code <strong>ALLSTARS</strong> −25% on OSRAM shop “All Stars” selection until 31/10/2026 — <a href="/en/promo-codes/">details</a>.</p>`,
  },
  {
    path: 'tools/halogen-led-equivalence-gu10-e27-lumens',
    article: true,
    kicker: 'Tool',
    title: 'Halogen to LED equivalence: GU10, E27, lumens and beam angle',
    description: 'Replace halogen by lumens not watts. Reference table 20–100 W, inline calculator, CRI note. 50 W GU10 ≈450 lm → ~5 W LED.',
    h1: 'Halogen or incandescent → LED: keep the same brightness',
    lead: 'Compare lumens, not watts. A 50 W halogen GU10 delivers about 450 lm; a well-specified 5 W LED reaches 400–500 lm at a fraction of the power. Beam angle changes the feel: 36° concentrates (kitchen), 110° spreads (hallway).',
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
var baseNote=base==='gu10'?'Check dimmer compatibility — see <a href="/en/guides/gu10-led-flicker-dimmer-diagnosis/">GU10 flicker guide</a>.':'E27/E14: check shade height (globe vs reflector).';
el('eq-result').innerHTML='<p><strong>Target flux:</strong> about <strong>'+lm.toLocaleString('en-GB')+' lm</strong> (equivalent to your '+w+' W lamp).</p><p class="mt-2"><strong>Indicative LED:</strong> ≈ <strong>'+ledW+' W LED</strong> (~95–110 lm/W on a good spec).</p><p class="mt-2"><strong>CRI:</strong> look for ≥ '+irc+' on the box (<a href="/en/guides/cri-colour-rendering-index/">CRI guide</a>).</p><p class="mt-2 text-stone-600">'+beamNote+' '+baseNote+'</p>';}
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
<p>Examples: ${uk('B0F62SG8Z9', 'GU10 ~805 lm')} ${uk('B01KHIM7OG', 'E27 806 lm')}${note}
<p>Install: <a href="/en/tutorials/replace-halogen-gu10-mr16-with-led/">replace GU10/MR16</a>, <a href="/en/guides/bulb-bases-b22-e26-e27-gu10/">bases</a>. Full interactive version also on <a href="https://1piece1ampoule.fr/outils/equivalence-halogene-led-gu10-e27-lumens/">French tools page</a>.</p>`,
  },
  err({
    path: 'guides/error-code/wiz-bulb-offline',
    title: 'WiZ bulb offline in the app (Wi-Fi 2.4 GHz)',
    description: 'WiZ V2 bulb unreachable: incomplete migration, Wi-Fi change, switch off. Fix pairing on 2.4 GHz Wi-Fi.',
    h1: 'WiZ bulb shown offline',
    lead: 'The bulb no longer responds in the WiZ V2 app while the wall switch still powers it.',
    body: `<p><strong>Symptom:</strong> grey or offline status in WiZ V2.</p>
<p><strong>Likely causes:</strong> migration from WiZ V1 incomplete; router password or SSID changed; partial reset; phone on guest Wi-Fi.</p>
<h2>Steps</h2><ol>
<li>Use the <strong>WiZ V2</strong> app (not the legacy one).</li>
<li>Re-run Wi-Fi setup (pairing mode on the bulb).</li>
<li>Keep the wall switch ON.</li>
<li>Ensure the router broadcasts <strong>2.4 GHz Wi-Fi</strong> (WiZ does not join 5 GHz-only networks).</li>
<li>Several bulbs offline: reboot the router.</li>
</ol>
<p>Support: <a href="https://www.wizconnected.com/" rel="nofollow noopener" target="_blank">wizconnected.com</a>. Difficulty 2/5 · about 10–20 min · £0.</p>`,
  }),
  err({
    path: 'guides/error-code/nanoleaf-wifi-2g',
    title: 'Nanoleaf Wi-Fi setup failed (use 2.4 GHz)',
    description: 'Nanoleaf Shapes/Lines: Wi-Fi fails at last step — use 2.4 GHz, disable AP isolation, simplify password test.',
    h1: 'Nanoleaf: Wi-Fi connection failed',
    lead: 'Setup fails at the final Wi-Fi step; only local control works.',
    body: `<p><strong>Causes:</strong> phone joined to 5 GHz only; special characters in password; AP isolation; MAC filtering.</p>
<h2>Steps</h2><ol>
<li>Configure on <strong>2.4 GHz</strong> only.</li>
<li>Temporarily simplify the Wi-Fi password to test.</li>
<li>Disable client isolation / guest network for setup.</li>
<li>Move the controller near the router.</li>
<li>Reset controller (5 s) and retry.</li>
</ol>
<p>Support: <a href="https://help.nanoleaf.me/" rel="nofollow noopener" target="_blank">help.nanoleaf.me</a>. Difficulty 2/5 · 10–25 min · £0.</p>`,
  }),
  err({
    path: 'guides/gu10-led-flicker-dimmer-diagnosis',
    kicker: 'Troubleshooting guide',
    title: 'GU10 or E27 LED flicker, dimmer buzz and ghosting — diagnosis',
    description: 'Structured diagnosis for LED flicker on dimmers, buzzing, ghost glow when off, or flicker at full power. Difficulty, time and cost bands.',
    h1: 'GU10 / E27 LED: flicker, buzzing, ghosting',
    lead: 'Use this decision path (same logic as our French interactive tree). If the fault involves the consumer unit or burning smell, stop and call a registered electrician.',
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
<p>Matrix: <a href="https://1piece1ampoule.fr/guides/matrice-variateur-dimmer-ampoule-led-gu10-e27/">dimmer × LED</a> (FR). Smart bulbs: <a href="/en/guides/smart-led-troubleshooting/">troubleshooting hub</a>.</p>`,
  }),
  {
    path: 'guides/matter-thread-matrix-philips-hue-aqara-govee',
    article: true,
    kicker: 'Protocol guide',
    title: 'Matter, Thread and Zigbee matrix: Hue, Aqara, Govee, Shelly, Nanoleaf, IKEA',
    description: 'Cross-compatibility of smart bulbs, strips and switches with Matter, Thread, Zigbee 3.0, Home Assistant, Apple Home, Google, Alexa.',
    h1: 'Matter, Thread and Zigbee compatibility matrix',
    lead: 'Matter is a common application layer; Thread is a low-power mesh radio often used with Matter; Zigbee 3.0 is the mesh protocol Hue and Aqara use natively. Status depends on firmware — check the SKU before buying.',
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
<p>Wi-Fi vs Zigbee: French <a href="https://1piece1ampoule.fr/articles/ampoule-connectee-wifi-ou-zigbee/">comparison article</a>. No-neutral kits: <a href="/en/guides/smart-switch-no-neutral-compatibility/">compatibility matrix</a>.</p>`,
  },
  {
    path: 'brands/steinel',
    article: true,
    kicker: 'Brand guide',
    title: 'Steinel review: motion lights, NightMatic 2000, 3-year warranty (datasheets)',
    description: 'Steinel outdoor motion and dusk products: XSolar L-S ONE 150 lm, NightMatic 2000, IS 360-1 DE — German datasheet specs, 3-year warranty.',
    h1: 'Steinel: our view of the brand',
    lead: 'Steinel (Herzebrock-Clarholz, Germany) specialises in motion detectors, dusk switches and outdoor sensor luminaires — solid choice when you want automatic lighting on a path, garage or porch.',
    body: `<h2>Products we cite (manufacturer datasheets, 23/10/2026)</h2>
<table><thead><tr><th>Product</th><th>Role</th><th>Key data</th></tr></thead><tbody>
<tr><td>XSolar L-S ONE (081973)</td><td>Solar wall with PIR</td><td>150 lm, 3000 K, 1.2 W; IR 140°, 8 m tangential / 2 m radial; LiFePO4 3000 mAh; IP44, IK03 — ${uk('B0B272H45X', 'XSolar L-S ONE Amazon UK')}</td></tr>
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
<p>Radar-in-bulb alternative: <a href="/en/brands/osram-ledvance/">OSRAM motion bulb</a>. Outdoor guide on French site.</p>`,
  },
  {
    path: 'rooms',
    kicker: 'Room guides',
    title: 'Lighting by room: kitchen, hallway, dining room, bathroom…',
    description: 'Choose a room for practical lux/lumen advice and product angles. Guides for every main room of the house.',
    h1: 'Rooms',
    lead: 'Pick a room type for concrete guidance on lumens, colour temperature (Kelvin), CRI and typical fittings.',
    body: `<div class="en-grid">
<a class="en-tile" href="/en/rooms/kitchen/"><strong>Kitchen</strong><span>Worktop zones, ceiling and dining area.</span></a>
<a class="en-tile" href="/en/rooms/living-room/"><strong>Living room</strong><span>Layered light, dimming, 2700 K evenings.</span></a>
<a class="en-tile" href="/en/rooms/hallway/"><strong>Hallway</strong><span>Narrow corridors, 3500–4000 K, anti-shadow.</span></a>
<a class="en-tile" href="/en/rooms/dining-room/"><strong>Dining room</strong><span>Pendant over table, CRI for food.</span></a>
<a class="en-tile" href="/en/rooms/bathroom/"><strong>Bathroom</strong><span>IP zones, mirror light, CRI 90.</span></a>
<a class="en-tile" href="/en/rooms/bedroom/"><strong>Bedroom</strong><span>Warm dim light, reading spots.</span></a>
<a class="en-tile" href="/en/rooms/home-office/"><strong>Home office</strong><span>4000 K task light, anti-glare.</span></a>
<a class="en-tile" href="/en/rooms/garage/"><strong>Garage</strong><span>IP fittings, 4000 K, high lumens.</span></a>
<a class="en-tile" href="/en/rooms/garden/"><strong>Garden</strong><span>Outdoor IP, solar and motion.</span></a>
<a class="en-tile" href="/en/rooms/kids-bedroom/"><strong>Children's bedroom</strong><span>Study, play, night light.</span></a>
<a class="en-tile" href="/en/rooms/kids-study/"><strong>Children's desk</strong><span>Writing light without glare.</span></a>
<a class="en-tile" href="/en/rooms/toilet/"><strong>Toilet</strong><span>Mirror, WC, sensor.</span></a>
<a class="en-tile" href="/en/rooms/wine-cellar/"><strong>Wine cellar</strong><span>Racks, low heat, 2700 K.</span></a>
<a class="en-tile" href="/en/rooms/vaulted-cellar/"><strong>Vaulted cellar</strong><span>Bounced light, accents.</span></a>
<a class="en-tile" href="/en/rooms/parking/"><strong>Driveway and parking</strong><span>IP, 4000 K, sensors.</span></a>
</div>
<p>Method: <a href="/en/tutorials/how-much-light-per-room-lux-foot-candles/">lux and lumens per room</a>. French full index: <a href="https://1piece1ampoule.fr/pieces/">1piece1ampoule.fr/pieces</a>.</p>`,
  },
  err({
    path: 'guides/error-code/hue-bulb-blinking-reset',
    title: 'Hue bulb blinking: pairing mode or reset',
    description: 'Hue bulb pulses after power cut: Zigbee pairing or reset sequence. Keep compatible dimmer or remove it.',
    h1: 'Hue bulb blinking: pairing or reset',
    lead: 'Regular pulsing after a mains blip — the bulb is often in Zigbee pairing or needs a reset.',
    body: `<h2>Steps</h2><ol>
<li>If you meant to add it: start “Add light” in the Hue app.</li>
<li>If it was already installed: power cycle reset (off 5 s, on 5 s — repeat per Hue instructions for your model).</li>
<li>Avoid non-“Works with Hue” dimmers.</li>
<li>Re-pair to the Bridge if it disappeared.</li>
<li>Still blinking on a plain lampholder: possible hardware fault.</li>
</ol>
<p>Support: 00800 7445 4775 · <a href="https://www.philips-hue.com/en-gb/support" rel="nofollow noopener" target="_blank">philips-hue.com support</a>. Difficulty 1/5 · 5–15 min · £0.</p>`,
  }),
  err({
    path: 'guides/error-code/hue-sync-box-hdmi-no-signal',
    title: 'Hue Play HDMI Sync Box: black screen or no signal',
    description: 'TV black when Sync Box is inline: HDMI cable, boot order, HDCP 2.2, Dolby Vision tunnel test.',
    h1: 'Hue Sync Box: no HDMI signal',
    lead: 'The TV shows nothing when the Sync Box sits in the HDMI chain although the source works direct to the TV.',
    body: `<h2>Steps</h2><ol>
<li>Test source → TV without Sync Box.</li>
<li>Replace HDMI cable (18 Gbps rated for 4K HDR).</li>
<li>Power order: TV, then Sync Box, then console.</li>
<li>Temporarily disable HDR/Dolby Vision on the source.</li>
<li>One source only failing: check its HDCP settings.</li>
</ol>
<p>Entertainment area must exist in Hue app for sync. Difficulty 2/5 · 15–30 min · £10–40 cable. Support: Philips Hue.</p>`,
  }),
  {
    path: 'brands',
    article: true,
    kicker: 'Brands',
    title: 'Brands and merchants: Hue, OSRAM, Steinel, Tapo, Luminaire.fr',
    description: 'Summary table: product focus, warranty/returns, one-line verdict. OSRAM promo on promo codes page.',
    h1: 'Brands and merchants in our guides',
    lead: 'Before buying a bulb, spot or sensor, it helps to know who stands behind it — warranty, returns and whether the brand fits your use case.',
    body: `<table><thead><tr><th>Brand</th><th>Type</th><th>On this site</th><th>Warranty / returns</th><th>Our view</th></tr></thead><tbody>
<tr><td><a href="/en/brands/philips-hue/">Philips Hue</a></td><td>Connected lighting (Signify)</td><td>3 E27 smart bulbs compared</td><td>2-year manufacturer</td><td>Reference for expandable Zigbee; CRI 80 only</td></tr>
<tr><td><a href="/en/brands/osram-ledvance/">OSRAM (LEDVANCE)</a></td><td>Manufacturer + shop</td><td>Radar Star A75 + official shop</td><td>3–5 years on listed lamp families</td><td>Strong datasheets; radar bulb for no-wire automation</td></tr>
<tr><td><a href="/en/brands/luminaire-fr/">Luminaire.fr</a></td><td>Merchant (Lampenwelt)</td><td>Wide fitting catalogue</td><td>30-day return (FR), paid return postage</td><td>When you need a specific pendant or outdoor fitting</td></tr>
<tr><td><a href="/en/brands/steinel/">Steinel</a></td><td>Motion / outdoor</td><td>5 datasheet products</td><td>3-year manufacturer (FR terms)</td><td>Best for dedicated motion/dusk hardware</td></tr>
<tr><td>Tapo (TP-Link)</td><td>Wi-Fi smart</td><td>L530E in gift guide</td><td>2-year TP-Link</td><td>Cheap entry without hub; class F efficiency</td></tr>
<tr><td><a href="/en/brands/imalent/">Imalent</a></td><td>LED torches</td><td>GR35 tested (supplied free)</td><td>To confirm with the seller</td><td>Powerful torch; not for fixed home lighting</td></tr>
</tbody></table>
<p class="en-note">UK consumers always have statutory rights against the seller; EU/FR pages cite French legal conformity (2 years).</p>
<p>Deals: <a href="/en/promo-codes/">promo codes</a>.</p>`,
  },
  {
    path: 'rooms/hallway',
    article: true,
    kicker: 'Room guide',
    title: 'Hallway lighting: dark corners, lumens, 3500–4000 K, CRI',
    description: 'Split the hallway into zones: entrance, dark run, corner, floor safety. Avoid tunnel effect with wall washing and skirting lights.',
    h1: 'Hallway lighting',
    lead: 'Split a hallway into zones — entrance (welcome), dark straight (comfort), corner (no head shadow), floor (night safety) — then tune Kelvin, CRI and dimming for an even result.',
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
<p>Lux method: <a href="/en/tutorials/how-much-light-per-room-lux-foot-candles/">lumens and lux</a>. Motion bulb idea: <a href="/en/brands/osram-ledvance/">OSRAM radar E27</a> (3 m range limit). French detail: <a href="https://1piece1ampoule.fr/pieces/couloir/">couloir page</a>.</p>`,
  },
  {
    path: 'articles/dusk-to-dawn-bulb',
    article: true,
    kicker: 'Article',
    title: 'Dusk-to-dawn bulb: photocell porch light vs motion sensor',
    description: 'Photocell bulb stays on all night (~5 W × 12 h ≈ 22 kWh/year at French regulated rate 0.2001 €/kWh). IP44 luminaire required outdoors.',
    h1: 'Dusk-to-dawn bulb',
    lead: 'A dusk-to-dawn bulb switches on when ambient light falls and off at dawn using a built-in photocell — no timer app required.',
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
<p>Example product cited on FR site: Lucide ST64 filament dusk bulb 2200 K — ${uk('B07TSKP9JC', 'Lucide ST64 dusk E27')}. Solar alternative: <a href="/en/brands/steinel/">Steinel XSolar</a>.</p>`,
  },
  err({
    path: 'guides/error-code/schneider-wiser-offline',
    title: 'Schneider Wiser offline: gateway and dimmer',
    description: 'Wiser app shows offline: gateway power, 2.4 GHz Wi-Fi, firmware. Support 0825 012 999 (France).',
    h1: 'Schneider Wiser: device offline',
    lead: 'Wiser by SE shows offline; scenes no longer run.',
    body: `<h2>Steps</h2><ol>
<li>Check Wiser gateway power and Ethernet/Wi-Fi link.</li>
<li>Reconnect to <strong>2.4 GHz Wi-Fi</strong>.</li>
<li>Reboot router and gateway.</li>
<li>Update app and device firmware.</li>
<li>France support: 0825 012 999 — <a href="https://www.se.com/ww/en/work/support/" rel="nofollow noopener" target="_blank">se.com support</a>.</li>
</ol>
<p>Difficulty 2/5 · 15–30 min · £0.</p>`,
  }),
  {
    path: 'guides/smart-led-troubleshooting',
    article: true,
    kicker: 'Troubleshooting hub',
    title: 'Smart bulbs and LED troubleshooting: error code directory',
    description: 'Entry point for Hue, Shelly, IKEA, Govee, WiZ, Nanoleaf and dimmer issues — 44 structured fixes, all in English.',
    h1: 'Smart bulbs & LED: diagnostics and error codes',
    lead: 'Single entry for connected lighting faults: Hue Bridge, Zigbee/Wi-Fi bulbs, Shelly modules, Govee strips, Legrand/Schneider dimmers, flicker and ghosting.',
    body: `<p>All <strong>44 step-by-step sheets</strong> are now in English: see the <a href="/en/guides/error-codes/">error code directory</a>, sorted by brand.</p>
<h2>Priority sheets in English</h2>
<ul>
<li><a href="/en/guides/error-code/wiz-bulb-offline/">WiZ bulb offline</a></li>
<li><a href="/en/guides/error-code/nanoleaf-wifi-2g/">Nanoleaf Wi-Fi (2.4 GHz)</a></li>
<li><a href="/en/guides/error-code/hue-bulb-blinking-reset/">Hue bulb blinking / reset</a></li>
<li><a href="/en/guides/error-code/hue-sync-box-hdmi-no-signal/">Hue Sync Box HDMI no signal</a></li>
<li><a href="/en/guides/error-code/schneider-wiser-offline/">Schneider Wiser offline</a></li>
<li><a href="/en/guides/error-code/govee-bulb-firmware-brick/">Govee bulb bricked after OTA</a></li>
<li><a href="/en/guides/error-code/govee-strip-overheating/">Govee strip overheating</a></li>
</ul>
<h2>Related tools</h2>
<ul>
<li><a href="/en/guides/gu10-led-flicker-dimmer-diagnosis/">GU10/E27 flicker diagnosis</a></li>
<li><a href="/en/guides/smart-switch-no-neutral-compatibility/">Smart switch without neutral</a></li>
<li><a href="/en/guides/matter-thread-matrix-philips-hue-aqara-govee/">Matter / Thread / Zigbee matrix</a></li>
<li><a href="/en/rooms/">Choose a replacement bulb by room</a></li>
</ul>
<p>Full list: <a href="/en/guides/error-codes/">all error codes by brand</a>.</p>`,
  },
  {
    path: 'rooms/dining-room',
    article: true,
    kicker: 'Room guide',
    title: 'Dining room lighting: table, sideboard, CRI and dimming',
    description: 'Zone the dining room: table, sideboard, indirect mood, circulation. Warm dimmable light and CRI for natural food colour.',
    h1: 'Dining room lighting',
    lead: 'Zone the space — table/meals, sideboard/storage, indirect mood, circulation — then pick fittings and a Kelvin/CRI combo that flatters faces and food.',
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
<p>Often <strong>2700–3000 K</strong> dimmed after dinner. French detail: <a href="https://1piece1ampoule.fr/pieces/salle-manger/">salle à manger</a>. Merchant pendants: <a href="/en/brands/luminaire-fr/">Luminaire.fr</a>.</p>`,
  },
  {
    path: 'contact',
    template: 'contact',
    kicker: 'Contact',
    title: 'Contact — ask a lighting question',
    description: 'Questions about bulbs, rooms or partnerships. We usually reply within 24–48 working hours.',
    h1: 'Contact',
    lead: '',
    body: '',
  },
  err({
    path: 'guides/error-code/govee-bulb-firmware-brick',
    title: 'Govee bulb stuck after firmware update',
    description: 'Govee H600x fixed colour or missing after OTA: power-cycle, retry update on stable 2.4 GHz Wi-Fi, contact support.',
    h1: 'Govee bulb bricked after firmware OTA',
    lead: 'Bulb unresponsive, fixed colour, or vanished from Govee Home after an over-the-air update.',
    body: `<h2>Steps</h2><ol>
<li>Power off 10 s, on again.</li>
<li>Stay near router on stable <strong>2.4 GHz Wi-Fi</strong>; retry OTA.</li>
<li>Manual re-add in pairing mode.</li>
<li>Contact Govee support with exact model (H600x).</li>
<li>Under warranty: replacement.</li>
</ol>
<p>Official support recommended (requires_official_sav flag in catalogue). Difficulty 3/5 · 20–40 min.</p>`,
  }),
  err({
    path: 'guides/error-code/govee-strip-overheating',
    title: 'Govee RGBIC strip overheating or yellowing',
    description: 'Strip hot to touch: lower max brightness, aluminium profile, respect max length per PSU, unwind coils.',
    h1: 'Govee strip overheating',
    lead: 'Strip feels hot, colour yellows at ends, or adhesive lifts — often power supply or installation issue.',
    body: `<h2>Steps</h2><ol>
<li>Lower max brightness in Govee Home.</li>
<li>Mount in an <strong>aluminium profile</strong> for heat spread.</li>
<li>Do not exceed length per power supply rating.</li>
<li>Unwind bundled loops that trap heat.</li>
<li>Replace PSU if it also runs hot abnormally.</li>
</ol>
<p><strong>Safety:</strong> overheated strip can melt adhesive and pose a fire risk — stay within rated length. Difficulty 2/5 · 20–40 min · £10–40 parts. Support: help.govee.com</p>`,
  }),
];
