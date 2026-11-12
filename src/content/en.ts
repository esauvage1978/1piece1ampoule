// English edition (/en/). Data checked 22/10/2026. No invented figures: every number has a source or a shown calculation.
import { TUTOS_TR } from './tr-tutos';
import { TR_PRIORITY_EN } from './tr-priority-en';
import { TR_PRIORITY_LOT2_EN } from './tr-priority-lot2-en';
import { TR_LOT3_EN } from './tr-lot3-en';
import { TR_LOT4_EN } from './tr-lot4-en';
import { INTENT_EN } from './intentions-gsc';
const uk = (asin: string, label: string) => `<a class="en-amz" href="https://www.amazon.co.uk/dp/${asin}?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="${asin}" data-product="${label}">Check price on Amazon UK</a>`;
const us = (asin: string, label: string) => `<a class="en-amz" href="https://www.amazon.com/dp/${asin}?tag=roboteducatif-20" rel="nofollow sponsored noopener" target="_blank" data-asin="${asin}" data-product="${label}">Check price on Amazon US</a>`;
const note = `<p class="en-note">Product data below is taken from the manufacturer's listing on Amazon, checked on 22 October 2026. Prices change: check the current price before buying. As an Amazon Associate I earn from qualifying purchases.</p>`;

export const P = {
  ukB22: `<div class="en-card"><p class="en-flag">UK · B22</p><h3>Philips Ultra Efficient LED A60 B22, 2700K, clear</h3><p>Listed as a 60 W-equivalent B22 bayonet bulb in warm white (2700K), rated up to 50,000 hours. Philips' Ultra Efficient range is its high-efficacy line for the new A–G energy label.</p>${uk('B0CDC1ZV8B', 'Philips Ultra Efficient B22 clear')}</div>`,
  ukGU10a: `<div class="en-card"><p class="en-flag">UK · GU10 230 V</p><h3>Philips CorePro LED GU10 4W, 4000K, dimmable (10-pack)</h3><p>Listing: 50 W halogen replacement, 350 lm, 36° beam, CRI 80, dimmable with compatible dimmers, energy class F.</p>${uk('B09N8W4DMT', 'Philips CorePro GU10 4W dimmable')}</div>`,
  ukGU10b: `<div class="en-card"><p class="en-flag">UK · GU10 230 V</p><h3>Philips LED Classic GU10 4.6W, 4000K (6-pack)</h3><p>Listing: 50 W equivalent, 390 lm, CRI 80, 220–240 V, non-dimmable, energy class F.</p>${uk('B0766441R8', 'Philips Classic GU10 4.6W')}</div>`,
  usA19warm: `<div class="en-card"><p class="en-flag">US · E26 120 V</p><h3>Philips Ultra Definition LED A19, 8W, 2700K (8-pack)</h3><p>Listing: 60 W equivalent, 800 lm, E26 base, dimmable, flicker-free. Listed as CRI 95.</p>${us('B0B927WMTY', 'Philips Ultra Definition A19 2700K')}</div>`,
  usA19day: `<div class="en-card"><p class="en-flag">US · E26 120 V</p><h3>Philips Ultra Definition LED A19, 8W, 5000K daylight (8-pack)</h3><p>Listing: 800 lm (8 W = 60 W), dimmable, frosted, flicker-free.</p>${us('B0B92RYSNV', 'Philips Ultra Definition A19 5000K')}</div>`,
  usGU10: `<div class="en-card"><p class="en-flag">US · GU10 120 V</p><h3>Philips 465054 LED GU10 6W, 3000K, dimmable (3-pack)</h3><p>Listing: 400 lm, 35° flood, 50 W equivalent, dimmable. A 120 V GU10: do not use it on 230 V UK circuits (and vice versa).</p>${us('B01LMEQIMQ', 'Philips 465054 GU10')}</div>`,
  usMR16: `<div class="en-card"><p class="en-flag">US · MR16 12 V</p><h3>Philips LED MR16 4W, 3000K, dimmable (3-pack)</h3><p>Listing: 380 lm (4 W = 50 W), clear, flicker-free, low-voltage GU5.3 pins.</p>${us('B0B8TL1FGW', 'Philips MR16 4W')}</div>`,
};

export type EnPage = { path: string; title: string; description: string; kicker: string; h1: string; lead: string; body: string; article?: boolean; template?: 'contact' | 'promo-codes' };

export const EN_PAGES: EnPage[] = [
{
path: '', kicker: 'English edition', title: 'Lighting guides with real data: bulb bases, lumens, Kelvin, CRI | 1 pièce 1 ampoule',
description: 'Independent LED lighting guides for the UK and US: B22 vs E26 vs E27 bases, lumens per room, lux and foot-candles, colour temperature, CRI, IP ratings and dimmers.',
h1: 'Choose the right bulb, with numbers', lead: 'Our French site has helped readers choose bulbs room by room since 2020. This English edition brings together our most useful guides, adapted to the UK (230 V, B22 bayonet, BS 7671) and the US (120 V, E26, NEC).',
body: `<h2>Start here</h2>
<div class="en-grid">
<a class="en-tile" href="/en/tools/"><strong>Lighting simulator</strong><span>Try lumens, Kelvin and CRI in six rooms.</span></a>
<a class="en-tile" href="/en/guides/bulb-bases-b22-e26-e27-gu10/"><strong>Bulb bases</strong><span>B22, E26, E27, E14, GU10, MR16: identify yours in 10 seconds.</span></a>
<a class="en-tile" href="/en/guides/lumens-vs-watts/"><strong>Lumens vs watts</strong><span>Official equivalence tables (UK/EU and US).</span></a>
<a class="en-tile" href="/en/tutorials/how-much-light-per-room-lux-foot-candles/"><strong>How much light per room</strong><span>Lux, foot-candles and the lumen formula, worked out.</span></a>
<a class="en-tile" href="/en/guides/colour-temperature-kelvin/"><strong>Colour temperature</strong><span>2700K, 3000K, 4000K, 5000K: which room gets which.</span></a>
<a class="en-tile" href="/en/guides/cri-colour-rendering-index/"><strong>CRI</strong><span>Why CRI 90 matters in kitchens and bathrooms.</span></a>
<a class="en-tile" href="/en/guides/ip-ratings-bathroom-outdoor/"><strong>IP ratings</strong><span>UK bathroom zones and US damp/wet locations.</span></a>
<a class="en-tile" href="/en/guides/dimmable-led-bulbs/"><strong>Dimmable LEDs</strong><span>Leading vs trailing edge, minimum load, flicker.</span></a>
<a class="en-tile" href="/en/tutorials/replace-halogen-gu10-mr16-with-led/"><strong>Replace halogen spots</strong><span>GU10 and MR16 to LED, with the transformer trap.</span></a>
<a class="en-tile" href="/en/tutorials/under-cabinet-led-strip-kitchen/"><strong>Under-cabinet LED strip</strong><span>24V, wire size, power supply.</span></a>
<a class="en-tile" href="/en/tutorials/smart-switch-no-neutral/"><strong>Smart switch, no neutral</strong><span>Why LEDs flicker, the bypass.</span></a>
<a class="en-tile" href="/en/tutorials/light-basement-shed-without-power/"><strong>Cellar or shed with no power</strong><span>Batteries and 12V solar, in Wh.</span></a>
</div>
<h2>UK and US: the three differences that cause wrong purchases</h2>
<table><thead><tr><th></th><th>United Kingdom</th><th>United States</th></tr></thead><tbody>
<tr><td>Mains voltage</td><td>230 V, 50 Hz</td><td>120 V, 60 Hz</td></tr>
<tr><td>Most common screw/bayonet base</td><td>B22 bayonet (BC), then E27 (ES) and E14 (SES)</td><td>E26 (medium), E12 (candelabra), E17</td></tr>
<tr><td>Efficiency label</td><td>UK energy label A–G (rescaled in 2021)</td><td>Lighting Facts label (FTC), ENERGY STAR certification</td></tr>
<tr><td>Wiring rules</td><td>BS 7671 (IET Wiring Regulations), Part P in England and Wales</td><td>National Electrical Code (NEC), local permits</td></tr>
</tbody></table>
<p>GU10 spotlights exist in both 230 V and 120 V versions with the same base: always check the voltage printed on the bulb.</p>
<h2>How we work</h2>
<p>Our figures come from regulations (EU/UK ecodesign, ENERGY STAR, IEC 60529, BS 7671, NEC) or from manufacturer specifications, and every calculation is shown. Product links are Amazon affiliate links (UK and US); they never change our verdicts. See our <a href="/en/affiliate-disclosure/">affiliate disclosure</a>.</p>`},
{
path: 'guides/lumens-vs-watts', article: true, kicker: 'Technical guide', title: 'Lumens vs watts: LED equivalence tables for the UK and US (2026)',
description: 'How many lumens replace a 40, 60, 75 or 100 W bulb? Official UK/EU and US equivalence tables, efficacy (lm/W), energy labels and running cost formula.',
h1: 'Lumens vs watts', lead: 'Watts measure power drawn; lumens measure light produced. Since LEDs produce 5 to 10 times more light per watt than incandescent bulbs, buy on lumens.',
body: `<h2>Official equivalence tables</h2>
<p>The UK/EU figures come from Commission Delegated Regulation (EU) 2019/2015, Annex V, table 7 (same values as the former Regulation (EC) 244/2009, table 6; retained in GB law), which defines the luminous flux a non-directional lamp must reach to claim an incandescent equivalence. The US figures are the ENERGY STAR / FTC equivalences used on US packaging.</p>
<table><thead><tr><th>Old incandescent</th><th>UK/EU minimum (lm)</th><th>US equivalence (lm)</th><th>Typical LED power</th></tr></thead><tbody>
<tr><td>25 W</td><td>249</td><td>—</td><td>2.5–3 W</td></tr>
<tr><td>40 W</td><td>470</td><td>450</td><td>4–5 W</td></tr>
<tr><td>60 W</td><td>806</td><td>800</td><td>7–9 W</td></tr>
<tr><td>75 W</td><td>1,055</td><td>1,100</td><td>10–12 W</td></tr>
<tr><td>100 W</td><td>1,521</td><td>1,600</td><td>13–16 W</td></tr>
</tbody></table>
<p>Typical LED power is a range seen on current manufacturer sheets (e.g. Philips 8 W A60 = 806 lm, i.e. 100 lm/W), not a regulatory value.</p>
<h2>Efficacy: lumens per watt</h2>
<p>Efficacy = lumens ÷ watts. It drives the energy label:</p>
<ul><li><strong>UK:</strong> the A–G energy label rescaled on 1 September 2021 (Regulation 2019/2015 as retained in GB). Class A starts around 210 lm/W; most standard LED bulbs sold today are class E or F (85–135 lm/W). The Philips 8 W / 806 lm A60 B22 (EPREL 391863) is class F at 100 lm/W.</li>
<li><strong>US:</strong> no A–G label; the box carries the FTC <em>Lighting Facts</em> panel (brightness in lumens, estimated yearly energy cost, life, colour). ENERGY STAR certification adds minimum efficacy, colour-rendering (CRI ≥ 80) and lifetime requirements.</li></ul>
<h2>Running cost formula</h2>
<p>Annual cost = watts × hours per day × 365 ÷ 1000 × price per kWh.</p>
<p>Example, 3 hours a day: a 60 W incandescent uses 65.7 kWh a year; an 8 W LED uses 8.8 kWh. Multiply by the unit rate on your bill (pence per kWh in the UK, cents per kWh in the US) to get your own figure. The saving per bulb is 56.9 kWh a year.</p>
<h2>Picking the right bulbs</h2>
${P.ukB22}${P.usA19warm}${note}
<p>Next: <a href="/en/tutorials/how-much-light-per-room-lux-foot-candles/">how many lumens a room needs</a> and <a href="/en/guides/colour-temperature-kelvin/">which colour temperature</a>.</p>`},
{
path: 'guides/bulb-bases-b22-e26-e27-gu10', article: true, kicker: 'Technical guide', title: 'Bulb bases explained: B22, E26, E27, E14, GU10, MR16 (UK and US)',
description: 'Identify your bulb base in seconds: B22 bayonet and E27/E14 screw in the UK, E26/E12 in the US, GU10 and MR16 (GU5.3) spotlights, with diameters and voltages.',
h1: 'Bulb bases: B22, E26, E27, GU10…', lead: 'The base (cap) is the part that goes into the fitting. The letter gives the type (E = Edison screw, B = bayonet, G = pins), the number the diameter or pin spacing in millimetres.',
body: `<h2>Reference table</h2>
<table><thead><tr><th>Base</th><th>Type</th><th>Size</th><th>Where you find it</th></tr></thead><tbody>
<tr><td><strong>B22</strong> (BC)</td><td>Bayonet, 2 lugs, push and twist</td><td>22 mm</td><td>UK: the most common ceiling pendant and lamp base</td></tr>
<tr><td><strong>B15</strong> (SBC)</td><td>Small bayonet</td><td>15 mm</td><td>UK: small lamps, cooker hoods</td></tr>
<tr><td><strong>E27</strong> (ES)</td><td>Edison screw</td><td>27 mm</td><td>UK and Europe: lamps, newer pendants</td></tr>
<tr><td><strong>E14</strong> (SES)</td><td>Small Edison screw</td><td>14 mm</td><td>UK/Europe: candle bulbs, bedside lamps</td></tr>
<tr><td><strong>E26</strong> (medium)</td><td>Edison screw</td><td>26 mm</td><td>US: standard household base</td></tr>
<tr><td><strong>E12</strong> (candelabra)</td><td>Edison screw</td><td>12 mm</td><td>US: chandeliers, night lights</td></tr>
<tr><td><strong>E17</strong> (intermediate)</td><td>Edison screw</td><td>17 mm</td><td>US: appliance and some ceiling fans</td></tr>
<tr><td><strong>GU10</strong></td><td>2 pins with feet, push and twist</td><td>10 mm pin spacing</td><td>Mains-voltage spots (230 V UK, 120 V US versions)</td></tr>
<tr><td><strong>GU5.3</strong> (MR16)</td><td>2 thin straight pins</td><td>5.3 mm</td><td>12 V low-voltage spots, need a transformer</td></tr>
<tr><td><strong>G9</strong></td><td>2 looped pins</td><td>9 mm</td><td>Small designer fittings, mains voltage</td></tr>
</tbody></table>
<h2>E26 vs E27: can you swap them?</h2>
<p>Mechanically an E26 bulb fits an E27 socket and vice versa (1 mm difference). Electrically, the bulb's driver must match the mains: a US 120 V bulb on UK 230 V will fail, a 230 V bulb on 120 V will be dim or not start. Many LED bulbs are sold as "100–240 V"; only those are safe to swap. Never force one into the other without checking the voltage marking.</p>
<h2>B22 or E27 in the UK?</h2>
<p>Most UK ceiling roses with pendant lampholders are B22. If your fitting is B22 and you want a bulb only available in E27, use a fitting-rated B22-to-E27 adapter only if the lampshade clearance allows the extra length, or better, change the lampholder. Full comparison: <a href="/en/guides/e27-vs-b22/">E27 vs B22</a>.</p>
<h2>Bulbs for each base</h2>
${P.ukB22}${P.ukGU10b}${P.usA19warm}${P.usGU10}${note}`},
{
path: 'guides/colour-temperature-kelvin', article: true, kicker: 'Technical guide', title: 'Colour temperature: 2700K vs 3000K vs 4000K vs 5000K, room by room',
description: 'What 2700K, 3000K, 4000K and 5000K mean, US labels (soft white, bright white, daylight) vs UK labels (warm white, cool white), and which room gets which.',
h1: '2700 kelvin is warm white', lead: '2700 K is warm white, close to an old incandescent, for living room, bedroom and dining. It is not more efficient than 4000 K: at the same lumens, only the tint changes.',
body: `<h2>Labels decoded</h2>
<table><thead><tr><th>Kelvin</th><th>UK packaging</th><th>US packaging</th><th>Typical use</th></tr></thead><tbody>
<tr><td>2200–2700K</td><td>Extra warm / warm white</td><td>Soft white</td><td>Living room, bedroom, dining</td></tr>
<tr><td>3000K</td><td>Warm white</td><td>Warm white / bright white (low end)</td><td>Kitchen with wood, hallways, bathrooms</td></tr>
<tr><td>4000K</td><td>Cool white</td><td>Bright white / cool white</td><td>Kitchen worktops, garage, home office</td></tr>
<tr><td>5000–6500K</td><td>Daylight</td><td>Daylight</td><td>Workshop, task lighting, photo work</td></tr>
</tbody></table>
<p>The colour code on professional lamps combines CRI and Kelvin: "827" = CRI 80+, 2700K; "930" = CRI 90+, 3000K; "840" = CRI 80+, 4000K.</p>
<h2>Room by room</h2>
<ul><li><strong>Living room and bedroom:</strong> 2700K. Evening light above 4000K is perceived as harsh in living spaces.</li>
<li><strong>Kitchen:</strong> 3000K ambient plus 4000K under-cabinet for tasks, or 3000K throughout if open-plan.</li>
<li><strong>Bathroom mirror:</strong> 3000–4000K with CRI 90 for make-up and shaving (see <a href="/en/guides/cri-colour-rendering-index/">CRI</a>).</li>
<li><strong>Home office:</strong> 4000K at the desk.</li>
<li><strong>Garage and workshop:</strong> 4000–5000K.</li></ul>
<p>Keep one temperature per room: mixing 2700K and 4000K in the same field of view makes both look wrong.</p>
<h2>Examples</h2>
${P.usA19warm}${P.usA19day}${P.ukGU10a}${note}`},
{
path: 'guides/cri-colour-rendering-index', article: true, kicker: 'Technical guide', title: 'LED bulb CRI (Ra): why 90 matters, and what R9 is',
description: 'CRI (Ra) measures how faithfully a light shows colours. Legal minimums in the UK/EU and ENERGY STAR (CRI 80, R9 > 0), when to pay for CRI 90+, and how to read the code 927/930.',
h1: 'CRI: colour rendering index', lead: 'CRI (Ra, 0–100) compares how a light source renders 8 test colours against a reference light. Daylight and incandescent bulbs score 100.',
body: `<h2>The thresholds that matter</h2>
<table><thead><tr><th>CRI</th><th>What it means</th><th>Source</th></tr></thead><tbody>
<tr><td>80</td><td>Legal minimum for general-purpose LED lamps in the UK/EU</td><td>Regulation (EU) 2019/2020 (ecodesign), retained in GB</td></tr>
<tr><td>80 and R9 &gt; 0</td><td>Minimum for ENERGY STAR certified lamps in the US</td><td>ENERGY STAR Lamps specification</td></tr>
<tr><td>90+</td><td>Skin tones, food and wood look natural</td><td>Manufacturer "high CRI" lines (e.g. Philips Ultra Definition)</td></tr>
<tr><td>95+</td><td>Colour-critical work: painting, photo, retail</td><td>Specialist lamps</td></tr></tbody></table>
<h2>What is R9?</h2>
<p>Ra averages 8 pastel colours. R9 is the separate score for saturated red, which LEDs often render poorly. A CRI 80 lamp can have an R9 near zero, which makes skin and meat look grey. Look for R9 &gt; 50 on high-CRI lamps; reputable brands publish it on the datasheet.</p>
<h2>Where CRI 90 is worth it</h2>
<ul><li>Bathroom mirror and dressing table.</li><li>Kitchen worktops (food colour).</li><li>Rooms with artwork or wood finishes.</li></ul>
<p>In a hallway or garage, CRI 80 is enough.</p>
<h2>Reading the code</h2>
<p>The first digit of the 3-digit code is the CRI band: 8xx = 80–89, 9xx = 90+. The two other digits are the Kelvin in hundreds: 927 = CRI 90+, 2700K.</p>
${P.usA19warm}${note}`},
{
path: 'guides/ip-ratings-bathroom-outdoor', article: true, kicker: 'Technical guide', title: 'IP ratings for lights: UK bathroom zones and US damp/wet locations',
description: 'What IP44, IP65 and IP67 mean (IEC 60529), which IP rating each UK bathroom zone needs under BS 7671, and how US damp and wet location listings work under the NEC.',
h1: 'IP ratings: bathroom and outdoor lighting', lead: 'The IP code (IEC 60529) has two digits: the first for solids (0–6), the second for water (0–9). "X" means not tested.',
body: `<h2>The ratings you will see</h2>
<table><thead><tr><th>Rating</th><th>Water protection</th><th>Typical use</th></tr></thead><tbody>
<tr><td>IP20</td><td>None</td><td>Dry indoor rooms</td></tr>
<tr><td>IP44</td><td>Splashing water from any direction</td><td>Bathroom zone 2, sheltered outdoor walls</td></tr>
<tr><td>IP65</td><td>Water jets (6.3 mm nozzle)</td><td>Exposed outdoor, showers with jets</td></tr>
<tr><td>IP67</td><td>Temporary immersion up to 1 m</td><td>Bathroom zone 0, ground lights</td></tr>
<tr><td>IP68</td><td>Continuous immersion (conditions set by maker)</td><td>Ponds, pools</td></tr></tbody></table>
<h2>UK: bathroom zones (BS 7671, section 701)</h2>
<ul><li><strong>Zone 0</strong> (inside the bath or shower tray): IPX7 minimum, SELV 12 V only.</li>
<li><strong>Zone 1</strong> (above the bath/tray up to 2.25 m): IPX4 minimum (IPX5 where water jets are used for cleaning).</li>
<li><strong>Zone 2</strong> (0.6 m around zone 1): IPX4 minimum.</li>
<li><strong>Outside the zones:</strong> no IP requirement in BS 7671, but IP44 is a sensible choice above a basin.</li></ul>
<p>In England and Wales, new lighting points or alterations to circuits inside these bathroom zones are notifiable under Part P of the Building Regulations: use a registered electrician (NICEIC, NAPIT) or notify building control. Replacing a bulb is never notifiable.</p>
<h2>US: damp and wet locations (NEC)</h2>
<p>US fixtures are listed by UL/ETL as <strong>dry</strong>, <strong>damp</strong> or <strong>wet location</strong> rather than by IP code. Under NEC 410.10(D), no part of a cord-connected, chain-, cable- or cord-suspended luminaire, track light, pendant or ceiling paddle fan may sit within 3 ft horizontally and 8 ft vertically of the bathtub rim or shower threshold (including directly above it). Luminaires within the tub or shower footprint, up to 8 ft above the rim, must be marked for damp locations, or for wet locations where subject to shower spray. Outdoors, exposed fixtures must be wet-location listed. Some imported fittings carry both an IP code and a UL listing; in the US, the listing is what inspectors check.</p>`},
{
path: 'guides/dimmable-led-bulbs', article: true, kicker: 'Technical guide', title: 'Dimmable LED bulbs: dimmer compatibility, flicker and buzzing (UK and US)',
description: 'Why LED bulbs flicker or buzz on dimmers: leading vs trailing edge, minimum load, compatibility lists. UK (Part P, LED dimmers) and US (CL dimmers, NEMA SSL 7A).',
h1: 'Dimmable LEDs and dimmers', lead: 'A non-dimmable LED on a dimmer can flicker, buzz or fail early. A dimmable LED on an old dimmer may do the same. Both sides must match.',
body: `<h2>Three checks</h2>
<ol><li><strong>The bulb says "dimmable"</strong> on the box and the datasheet.</li>
<li><strong>The dimmer suits LEDs.</strong> Old incandescent dimmers are usually leading-edge (TRIAC) with a minimum load of 40–60 W; three 5 W LEDs (15 W) sit below that and flicker. LED-rated dimmers are mostly trailing-edge and accept loads from a few watts.</li>
<li><strong>Load within limits.</strong> Manufacturers often derate: a dimmer rated 400 W for incandescent may be limited to around 10 % of that for LEDs. Use the LED rating printed on the dimmer, not the incandescent one.</li></ol>
<h2>UK specifics</h2>
<p>Dimmer manufacturers (Varilight, MK, Hamilton, etc.) publish LED compatibility lists by bulb model. Replacing a light switch with a dimmer on the same circuit is not notifiable under Part P outside bathroom zones, but it must comply with BS 7671; switch off at the consumer unit and test dead first. If unsure, use a registered electrician.</p>
<h2>US specifics</h2>
<p>Look for dimmers marked <strong>CL</strong> (CFL/LED, e.g. Lutron Diva CL) or compatible with <strong>NEMA SSL 7A</strong> phase-cut dimming. Turn off the breaker before working; local codes based on the NEC apply and some jurisdictions require a permit.</p>
<h2>Symptoms and fixes</h2>
<table><thead><tr><th>Symptom</th><th>Likely cause</th><th>Fix</th></tr></thead><tbody>
<tr><td>Flicker at low level</td><td>Below dimmer minimum load</td><td>Trailing-edge LED dimmer, or set its low-end trim</td></tr>
<tr><td>Buzzing</td><td>Leading-edge dimmer with LED driver</td><td>Trailing-edge dimmer</td></tr>
<tr><td>Glow when off</td><td>Leakage current via dimmer/smart switch</td><td>Dimmer with neutral, or bypass/load correction device</td></tr>
<tr><td>Doesn't dim below 50 %</td><td>Incompatible pair</td><td>Check the dimmer's compatibility list</td></tr></tbody></table>
${P.ukGU10a}${P.usA19warm}${note}`},
{
path: 'tutorials/how-much-light-per-room-lux-foot-candles', article: true, kicker: 'Tutorial', title: 'How much light does a room need? Lux, foot-candles and lumens calculator',
description: 'Recommended lux and foot-candles per room, and the formula to turn them into lumens: worked examples for a UK kitchen in m² and a US living room in square feet.',
h1: 'How much light per room (lux and foot-candles)', lead: 'Lux (lx) = lumens per square metre. Foot-candles (fc) = lumens per square foot. 1 fc = 10.764 lx.',
body: `<h2>Recommended levels</h2>
<p>Ranges below follow the work-surface values of EN 12464-1 (used by CIBSE in the UK) and the residential ranges of the IES (Illuminating Engineering Society, US) handbook, rounded.</p>
<table><thead><tr><th>Space</th><th>Lux</th><th>Foot-candles</th></tr></thead><tbody>
<tr><td>Hallway, stairs</td><td>100–150</td><td>10–15</td></tr>
<tr><td>Living room (ambient)</td><td>100–200</td><td>10–20</td></tr>
<tr><td>Bedroom (ambient)</td><td>100–150</td><td>10–15</td></tr>
<tr><td>Kitchen (general)</td><td>200–300</td><td>20–30</td></tr>
<tr><td>Kitchen worktop, reading, desk</td><td>500</td><td>50</td></tr>
<tr><td>Bathroom mirror</td><td>300–500</td><td>30–50</td></tr>
<tr><td>Workshop bench</td><td>500–750</td><td>50–75</td></tr></tbody></table>
<h2>The formula</h2>
<p>Lumens needed = target lux × floor area (m²) ÷ utilisation factor.<br>US: lumens needed = target foot-candles × floor area (ft²) ÷ utilisation factor.</p>
<p>The utilisation factor (0.5–0.6 in a typical home with light walls) accounts for light absorbed by walls, ceiling and shades. Use 0.5 for dark décor or shaded fittings.</p>
<h2>Worked example (UK, metric)</h2>
<p>Kitchen 3 × 4 m = 12 m², target 300 lx general: 300 × 12 ÷ 0.55 = <strong>6,545 lm</strong>. With 350 lm GU10 LEDs, that is 6,545 ÷ 350 ≈ <strong>19 spots</strong>, or fewer spots plus under-cabinet strips to reach 500 lx on the worktop.</p>
<h2>Worked example (US, imperial)</h2>
<p>Living room 14 × 16 ft = 224 ft², target 15 fc ambient: 15 × 224 ÷ 0.55 = <strong>6,109 lm</strong>. With 800 lm A19 bulbs (60 W equivalent), that is ≈ <strong>8 bulbs</strong> spread over ceiling and lamps.</p>
<h2>Check the result</h2>
<p>A free smartphone light-meter app gives a rough lux reading (±10–20 % depending on the phone). Measure at worktop or table height, lights on, curtains closed.</p>
${P.ukGU10b}${P.usA19warm}${note}`},
{
path: 'tutorials/replace-halogen-gu10-mr16-with-led', article: true, kicker: 'Tutorial', title: 'Replace halogen GU10 and MR16 spotlights with LED (UK and US)',
description: 'Step-by-step: identify GU10 (mains) vs MR16 GU5.3 (12 V), choose lumens and beam angle, deal with transformers and dimmers. UK 230 V and US 120 V versions.',
h1: 'Replace halogen GU10 and MR16 spots with LED', lead: 'To claim it replaces a 50 W MR16 halogen, an LED must give at least 540 lm in a 90° cone; for a 50 W mains GU10 (PAR16), 300 lm (EU Regulation 1194/2012). Compare lumens, not watts.',
body: `<h2>1. Identify the spot</h2>
<ul><li><strong>GU10:</strong> two short pins with feet, push and twist. Mains voltage: 230 V in the UK, 120 V in the US. No transformer.</li>
<li><strong>MR16 (GU5.3):</strong> two thin straight pins, push in. 12 V, fed by a transformer in the ceiling void.</li></ul>
<h2>2. Match the light</h2>
<table><thead><tr><th>Halogen replaced</th><th>UK/EU minimum Φ90°</th><th>Example</th></tr></thead><tbody>
<tr><td>35 W GU10 (mains PAR16)</td><td>200 lm</td><td>–</td></tr>
<tr><td>50 W GU10 (mains PAR16)</td><td>300 lm</td><td>Philips CorePro 4 W, 350 lm (UK); Philips 6 W, 400 lm (US)</td></tr>
<tr><td>35 W MR16 (GU5.3)</td><td>300 lm</td><td>Philips 4 W, 380 lm (US)</td></tr>
<tr><td>50 W MR16 (GU5.3)</td><td>540 lm</td><td>check Φ90° on the datasheet</td></tr></tbody></table>
<p>Source: Regulation (EU) 1194/2012, Annex III, table 6 (now table 4 of Delegated Regulation (EU) 2019/2015; retained in GB). For LEDs the value is also multiplied by the lumen maintenance factor, and by 0.8–0.9 for beams under 20°. US packaging is not bound by these EU values. LED figures come from the listings below. Keep the beam angle (usually 36°–40°). Choose 2700–3000K to match halogen's warm light.</p>
<h2>3. MR16: the transformer trap</h2>
<p>Old electronic transformers often need a minimum load of 20–35 W. A single 4 W LED is below it: flicker or nothing. Fixes: an LED driver rated for the total LED wattage, or replace the MR16 fittings with GU10 mains fittings (in the UK, that is electrical work under BS 7671; in a bathroom zone it is notifiable under Part P in England and Wales).</p>
<h2>4. Dimmers</h2>
<p>See our <a href="/en/guides/dimmable-led-bulbs/">dimmable LED guide</a>: use dimmable LEDs and an LED-rated (trailing-edge or CL) dimmer.</p>
<h2>5. Safety and fire</h2>
<p>Turn off the circuit at the consumer unit (UK) or breaker (US) and let halogens cool: they run at well over 100 °C. In the UK, many ceiling spots are fire-rated downlights that maintain the ceiling's fire resistance: keep them. In the US, recessed cans in contact with insulation must be IC-rated.</p>
<h2>Bulbs</h2>
${P.ukGU10a}${P.ukGU10b}${P.usGU10}${P.usMR16}${note}`},
{
path: 'affiliate-disclosure', kicker: 'Transparency', title: 'Affiliate disclosure | 1 pièce 1 ampoule', description: 'How 1piece1ampoule.fr earns money: Amazon Associates (UK and US) and other affiliate programmes.',
h1: 'Affiliate disclosure', lead: 'As an Amazon Associate I earn from qualifying purchases.',
body: `<p>Some links on the English edition of this site are affiliate links to Amazon.co.uk (Amazon Associates UK) and Amazon.com (Amazon Associates US). If you buy after clicking, we may receive a commission at no extra cost to you. Links are marked "Check price on Amazon UK/US" and carry <code>rel="sponsored"</code>.</p>
<p>The site may also use links from affiliate networks (such as Awin) with lighting retailers. Commissions never decide what we recommend: selections are based on published specifications (lumens, CRI, voltage, energy class) and the criteria explained in each guide.</p>
<p>Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates. Prices and availability are shown on Amazon at the time of purchase; the seller and Amazon are responsible for orders, delivery, returns and warranties.</p>`},
{
path: 'legal-notice', kicker: 'Legal', title: 'Legal notice | 1 pièce 1 ampoule', description: 'Publisher, host and terms of use of 1piece1ampoule.fr (English edition).',
h1: 'Legal notice', lead: 'Information required under French law (LCEN, article 6).',
body: `<h2>Publisher</h2><p>Emmanuel Sauvage, individual publisher, Erquinghem-Lys (59193), France. Contact: <a href="mailto:contact@1piece1ampoule.fr">contact@1piece1ampoule.fr</a>. Personal site: <a href="https://emmanuelsauvage.fr/">emmanuelsauvage.fr</a>.</p>
<h2>Host</h2><p>o2switch, Clermont-Ferrand, France (<a href="https://www.o2switch.fr/">o2switch.fr</a>).</p>
<h2>Purpose</h2><p>1 pièce 1 ampoule is an editorial website publishing lighting guides. It does not sell products. Affiliate links are explained in our <a href="/en/affiliate-disclosure/">affiliate disclosure</a>.</p>
<h2>Liability</h2><p>We aim for accurate, sourced information, but standards and products change. Electrical work must comply with local rules (BS 7671 and Building Regulations in the UK, the NEC and local codes in the US); when in doubt, hire a qualified electrician.</p>
<h2>Intellectual property</h2><p>Texts, tables and illustrations are © 1piece1ampoule.fr unless stated otherwise.</p>`},
{
path: 'privacy', kicker: 'Legal', title: 'Privacy policy | 1 pièce 1 ampoule', description: 'What personal data 1piece1ampoule.fr processes (Google Analytics only with consent), legal basis and your rights under the GDPR / UK GDPR.',
h1: 'Privacy policy', lead: 'We collect as little as possible: audience statistics only if you accept them.',
body: `<h2>Controller</h2><p>Emmanuel Sauvage, Erquinghem-Lys (59193), France — <a href="mailto:contact@1piece1ampoule.fr">contact@1piece1ampoule.fr</a>.</p>
<h2>Data processed</h2><ul><li><strong>Audience statistics (Google Analytics 4)</strong>, loaded only after you click "Accept all" or tick "Statistics". Google Consent Mode is set to "denied" by default. Data: pages viewed, approximate location, device type, clicks on affiliate links.</li><li><strong>Your cookie choice</strong>, stored in your browser (localStorage key <code>cookie_consent_v1</code>).</li><li><strong>Emails</strong> you send us, kept only as long as needed to reply.</li></ul>
<h2>Legal basis</h2><p>Consent (GDPR / UK GDPR art. 6(1)(a)) for statistics; legitimate interest for answering messages.</p>
<h2>Retention</h2><p>Google Analytics data is kept 14 months. Your cookie choice stays in your browser until you clear it or change it.</p>
<h2>Recipients</h2><p>Google Ireland Ltd (Analytics). When you click an Amazon link, Amazon processes data under its own privacy notice.</p>
<h2>Your rights</h2><p>Access, rectification, erasure, objection, restriction, withdrawal of consent at any time (<a href="/en/cookies/">cookie settings</a>). You can complain to the CNIL (France) or, in the UK, the ICO.</p>`},
{
path: 'cookies', kicker: 'Legal', title: 'Cookie policy | 1 pièce 1 ampoule', description: 'Cookies used on 1piece1ampoule.fr and how to change your choice.',
h1: 'Cookie policy', lead: 'No cookie except strictly necessary storage is set before you choose.',
body: `<table><thead><tr><th>Name</th><th>Purpose</th><th>Duration</th><th>Consent</th></tr></thead><tbody>
<tr><td>cookie_consent_v1 (localStorage)</td><td>Remembers your choice</td><td>Until cleared</td><td>Not required</td></tr>
<tr><td>_ga, _ga_*</td><td>Google Analytics 4 audience statistics</td><td>Up to 13 months</td><td>Required</td></tr></tbody></table>
<p>"Accept all" and "Reject all" are shown side by side with equal weight, following CNIL guidance. Rejecting has no effect on access to the site.</p>
<p><button type="button" class="en-amz" onclick="window.__showCookiePreferences && window.__showCookiePreferences()">Change my cookie settings</button></p>`},
];
EN_PAGES.splice(EN_PAGES.findIndex((p) => p.path === 'tutorials/replace-halogen-gu10-mr16-with-led') + 1, 0, ...TUTOS_TR.en);
EN_PAGES.push(...TR_PRIORITY_EN);
EN_PAGES.push(...TR_PRIORITY_LOT2_EN);
EN_PAGES.push(...TR_LOT3_EN);
EN_PAGES.push(...TR_LOT4_EN);
EN_PAGES.push(...INTENT_EN);
