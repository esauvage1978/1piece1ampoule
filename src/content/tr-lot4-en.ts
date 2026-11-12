// EN lot 4 (12/11/2026): 11 articles, 13 room guides, 3 zone guides, motion sensors, guides hub, LED accessories hub.
// Source: FR pages (articles-md, pieces.ts, zones/*.astro, guides/*.astro). Same facts, rewritten for UK/US readers;
// room pages follow the condensed format of the existing EN room guides (dining room, hallway).
// FR-only euro figures (EDF tariff, French shop prices) are replaced by kWh or left out; nothing added.
import type { EnPage } from './en';

const uk = (asin: string, label: string) =>
  `<a class="en-amz" href="https://www.amazon.co.uk/dp/${asin}?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="${asin}" data-product="${label}">Check price on Amazon UK</a>`;
/** Amazon UK search: the FR ASINs have not been checked on amazon.co.uk. */
const ukSearch = (q: string, label: string) =>
  `<a class="en-amz" href="https://www.amazon.co.uk/s?k=${encodeURIComponent(q)}&tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-product="${label}">Search on Amazon UK</a>`;
const note = `<p class="en-note">Product notes come from the manufacturer's listing. Prices and availability change: check them before buying. As an Amazon Associate I earn from qualifying purchases.</p>`;
const card = (flag: string, title: string, text: string, q: string) =>
  `<div class="en-card"><p class="en-flag">${flag}</p><h3>${title}</h3><p>${text}</p>${ukSearch(q, title)}</div>`;
const faq = (items: [string, string][]) =>
  `<h2>Quick answers</h2>${items.map(([q, a]) => `<p><strong>${q}</strong> ${a}</p>`).join('')}`;

export const ARTICLES_LOT4_EN: EnPage[] = [
  {
    path: 'articles/led-bulb-buzzing-humming', article: true, kicker: 'Troubleshooting',
    title: 'LED bulb buzzing or humming: causes and fixes',
    description: 'A noisy LED bulb: incompatible dimmer, 12 V transformer, cheap driver or LED strip power supply. How to get your silence back.',
    h1: 'LED bulb buzzing or humming',
    lead: 'A faint hum, or a high-pitched buzz you can hear in a quiet room: plenty of LED bulbs make noise. The sound almost always comes from the electronics (the driver) or from a dimmer, and it is very fixable.',
    body: `<h2>One-minute diagnosis</h2><ul>
<li><strong>Dimmer:</strong> the noise gets louder as you dim → a <strong>dimmable</strong> bulb and an LED-compatible dimmer.</li>
<li><strong>12 V spotlights (GU5.3/MR16):</strong> buzzing since you switched to LED → an <strong>LED 12 V driver</strong>, or move to <strong>GU10</strong> (mains voltage).</li>
<li><strong>No dimmer:</strong> the noise usually comes from the bulb’s <strong>driver</strong> → try another brand.</li>
<li><strong>LED strip:</strong> a whining <strong>24 V power supply</strong> that is undersized or badly mounted → run it at 70–80 % load, away from hollow walls.</li></ul>
<h2>Where does the noise come from?</h2>
<p>An LED runs on low-voltage DC, so every bulb contains a small converter for the mains supply. Its coils and capacitors vibrate at certain frequencies (magnetostriction). Well-designed, well-potted electronics stay silent; cheap bulbs much less so.</p>
<h2>Cause 1: a dimmer</h2>
<p>If the noise rises as you dim, it is the dimmer. Phase-cut dimmers chop the mains waveform, and the LED electronics vibrate in response.</p><ul>
<li>Check the bulb is <strong>dimmable</strong>. A non-dimmable bulb on a dimmer buzzes and eventually fails.</li>
<li>Use an <strong>LED-compatible dimmer</strong> with an adjustable minimum.</li>
<li>On many dimmers, <strong>trailing-edge</strong> mode is much quieter with LEDs.</li></ul>
<h2>Cause 2: a 12 V transformer (GU5.3 spots)</h2>
<p>Old GU5.3/MR16 halogen spots run from an electronic 12 V transformer. With LEDs drawing 5 W instead of 50 W, the transformer is below its minimum load: it hums, and the spots may flicker. Replace it with an <strong>LED 12 V driver</strong>, or switch to <strong>GU10</strong> by changing the lampholders. See <a href="/en/articles/gu10-or-gu5-3/">GU10 or GU5.3</a>.</p>
<h2>Cause 3: the bulb itself</h2>
<p>Still noisy without a dimmer? Swap it for a bulb from another brand. If the silence returns, your bulb has a poor driver.</p>
<h2>Cause 4: an LED strip power supply</h2>
<p>Cheap 24 V supplies often whine at low load or with a PWM dimmer. A good-quality supply sized so it runs at 70–80 % of its rating is quieter. Do not stick it against a hollow partition, which amplifies the vibration like a soundbox.</p>
<h2>When to worry</h2>
<p>Buzzing with a <strong>hot smell, crackling or black marks</strong> on the lampholder is not normal: switch off the circuit and have it checked. A loose contact that arcs can overheat.</p>
<h2>Our advice</h2>
<p>In a quiet bedroom or office, use branded bulbs and, if you dim, a dimmable bulb with a recent LED dimmer. That combination solves 90 % of noise problems. See also <a href="/en/guides/dimmable-led-bulbs/">dimmable LED bulbs</a>.</p>
${faq([['Will a buzzing LED burn out?', 'It often ages faster, especially a non-dimmable bulb on a dimmer. Fix the cause rather than wait.'], ['Why have my 12 V spots buzzed since I fitted LEDs?', 'The halogen transformer is below its minimum load. Replace it with an LED 12 V driver or move to GU10.']])}`,
  },
  {
    path: 'articles/led-bulb-flickering', article: true, kicker: 'Troubleshooting',
    title: 'LED bulb flickering: 6 causes and fixes (2026)',
    description: 'Your LED bulb flickers, flashes or wavers? Lampholder, dimmer, illuminated switch, driver: a 10-minute diagnosis and the fixes.',
    h1: 'LED bulb flickering: causes and fixes',
    lead: 'An LED that flickers, flashes now and then, or wavers when the oven comes on is almost never a lost cause. Nine times out of ten the cause is the lampholder, an incompatible dimmer, the switch (illuminated or smart), or the bulb itself.',
    body: `<h2>1. The 30-second test: swap the bulb</h2>
<p>Switch off, let it cool, then swap the suspect bulb with one that works well elsewhere.</p><ul>
<li><strong>The flicker follows the bulb</strong> → it is the bulb (tired or cheap driver). Replace it.</li>
<li><strong>The flicker stays with the fitting</strong> → it is the installation: lampholder, switch, dimmer or wiring.</li></ul>
<h2>2. A loose or corroded lampholder</h2>
<p>A half-screwed E27 bulb, or a flattened contact tab at the bottom of the holder, makes an intermittent contact: micro power cuts, so flicker. Screw the bulb in firmly (without forcing). With the power off, lift the centre tab very slightly with an insulated screwdriver. A blackened or melted holder means overheating: replace the holder or the fitting.</p>
<h2>3. A dimmer not designed for LEDs</h2>
<p>This is the top cause when flicker appears <strong>mostly at low brightness</strong>. Old dimmers were designed for 40–100 W bulbs; a 6 W LED is below their minimum load. Check the bulb says <strong>dimmable</strong>: a non-dimmable LED on a dimmer will always flicker. Replace the dimmer with an LED-compatible model with an adjustable minimum. See <a href="/en/guides/dimmable-led-bulbs/">dimmable LED bulbs</a>.</p>
<h2>4. An illuminated or smart switch</h2>
<p>A switch with a neon or LED locator (or a no-neutral smart switch) lets a tiny current through even when off. The LED stores a little, then flashes every few seconds. It is also why a bulb <a href="/en/articles/led-bulb-glowing-when-off/">glows faintly when off</a>. Replace the illuminated switch with a plain one, or fit a bypass capacitor at the light (have it fitted if you are not confident). Another route: leave the switch on and use a <a href="/en/articles/smart-bulb-wifi-or-zigbee/">smart bulb</a>.</p>
<h2>5. A big appliance starting up</h2>
<p>Flicker when the washing machine heats, the oven starts or the immersion heater kicks in? The voltage dips briefly on the circuit. Bulbs with very basic drivers show it immediately; a good branded bulb absorbs it. If <strong>every</strong> light in the house dips strongly, have the consumer unit and connections checked by an electrician.</p>
<h2>6. Flicker you cannot see, but your phone can</h2>
<p>Film the bulb with your phone camera (slow motion if possible). Rolling dark bands mean flicker that is invisible to the eye but tiring over time (headaches, eye strain at a desk). Choose bulbs sold as flicker-free.</p>
<h2>What to buy</h2><ul>
<li><strong>If you replace the bulb:</strong> a branded bulb with a good driver. For a living space, a Philips 60 W-equivalent at 2700K is a safe choice.</li>
<li><strong>If you have a dimmer:</strong> a genuinely dimmable bulb <strong>and</strong> a recent LED dimmer.</li></ul>
${card('E27 · 2700K', 'Philips LED E27, 60 W equivalent, warm white', 'A branded bulb with a stable driver for living spaces.', 'Philips LED E27 60W warm white')}
${note}
<h2>In short</h2><ol><li>Swap the bulb to tell bulb from installation.</li><li>Tighten and check the lampholder.</li><li>Dimmer? Dimmable bulb plus LED dimmer.</li><li>Illuminated or no-neutral smart switch? Replace it or add a bypass.</li><li>Every light wavers? Electrician.</li></ol>
${faq([['Why does my LED flash when it is switched off?', 'An illuminated switch or a no-neutral smart switch lets a small current through that charges the driver, which flashes periodically. Replace the switch or add a bypass.'], ['Is a flickering LED dangerous?', 'Usually not, but a blackened holder, a hot smell or crackling means a loose contact that is heating: switch off the circuit and have it checked.'], ['Why does my LED flicker on a dimmer?', 'Either the bulb is not dimmable, or the dimmer is not LED-compatible (minimum load too high). You need a dimmable bulb and an LED dimmer.']])}`,
  },
  {
    path: 'articles/led-bulb-glowing-when-off', article: true, kicker: 'Troubleshooting',
    title: 'LED bulb glowing faintly when switched off: why and how to fix it',
    description: 'Residual glow from a switched-off LED: illuminated switch, smart module, switched neutral, long cable runs. The causes and simple fixes.',
    h1: 'LED bulb still glowing faintly after switching off',
    lead: 'You switch off and the LED keeps glowing in the dark, for a few seconds or all night. It is very common and called ghosting. Usually harmless, but annoying, especially in a bedroom.',
    body: `<h2>Why can a switched-off LED still glow?</h2>
<p>An LED needs very little energy to give a visible glow: a few milliamps are enough. The slightest leakage current in the circuit while the switch is open lights it faintly. Halogen and incandescent bulbs needed far more to glow, so you never saw anything.</p>
<h2>The 4 usual causes</h2>
<p><strong>1. A switch with a locator light.</strong> The little light that helps you find the switch in the dark is powered through your bulb. That tiny current is enough to make an LED glow. This is cause number one.</p>
<p><strong>2. A no-neutral smart switch or dimmer.</strong> Two-wire smart modules power themselves by letting a small current flow through the bulb all the time. Same effect. Manufacturers sell a <strong>bypass</strong> to fit at the light.</p>
<p><strong>3. Neutral switched instead of live.</strong> If the switch breaks the neutral rather than the live, the bulb stays live even when off, and coupling with nearby wires can make it glow. It is also <strong>a safety issue</strong>: you can get a shock changing the “off” bulb. Have the wiring corrected.</p>
<p><strong>4. Long parallel cables (two-way switching).</strong> Long runs of parallel cable create an induced current through capacitive coupling. Very sensitive LEDs glow faintly.</p>
<h2>Fixes, simplest first</h2><ol>
<li><strong>Replace the illuminated switch</strong> with a plain one: five minutes, a few pounds.</li>
<li><strong>Try another brand of bulb:</strong> quality bulbs whose driver has a higher start-up threshold glow much less. Often enough.</li>
<li><strong>Fit a bypass capacitor</strong> across the light fitting to absorb the residual current.</li>
<li><strong>Have the wiring checked</strong> if you suspect the switch breaks the neutral.</li></ol>
<p class="en-note">Always work on a switch with the circuit switched off at the consumer unit. If in doubt, call an electrician.</p>
<h2>And if it flashes instead of glowing?</h2>
<p>Same mechanism: the residual current charges the driver’s capacitor, which empties in a flash. See <a href="/en/articles/led-bulb-flickering/">LED bulb flickering</a>.</p>
<h2>Which bulb avoids the problem?</h2>
<p>Choose a well-known brand. If you move to a smart switch, consider <strong>smart bulbs</strong> (Philips Hue, Tapo) instead: they are always powered and the bulb itself switches off, so no more ghost glow. See <a href="/en/articles/smart-bulb-wifi-or-zigbee/">Wi-Fi or Zigbee</a>.</p>
${faq([['Does it use electricity?', 'Very little: a few tenths of a watt. It is a comfort issue (and sometimes a wiring one), not a bill issue.'], ['Does my switch break the neutral?', 'If the bulb glows and you get a small shock touching it when off, it is possible. Have an electrician check: it is a safety fault.']])}`,
  },
  {
    path: 'articles/choosing-recessed-downlights', article: true, kicker: 'How-to guide',
    title: 'How to choose LED recessed downlights (cut-out, IP rating, layout)',
    description: 'Cut-out size, fixed or tilting, integrated or GU10, how many and where, IP rating and insulation: the 6 decisions before you buy.',
    h1: 'Choosing LED recessed downlights',
    lead: 'Recessed downlights give a clean ceiling and even light, provided you choose and place them well. Here are the six decisions to make before buying.',
    body: `<h2>1. Cut-out diameter</h2><p>The first criterion, especially when renovating. Common sizes: <strong>68 mm</strong> (the most common in Europe), 75 mm, 80–90 mm. When replacing existing downlights, measure the hole, not the fitting.</p>
<h2>2. Fixed or tilting?</h2><ul><li><strong>Fixed:</strong> general lighting, clean ceiling.</li><li><strong>Tilting</strong> (± 30°): to aim at a worktop, a picture or to graze a wall. More versatile, especially in a kitchen under a sloping ceiling.</li></ul>
<h2>3. Integrated LED or replaceable GU10?</h2><ul><li><strong>Integrated LED</strong> (slim): very shallow (ideal for a 5 cm ceiling void), but you replace the whole fitting if it fails.</li><li><strong>Fitting plus GU10 bulb:</strong> deeper (7–9 cm), but the bulb changes in ten seconds and you can change colour or output later. See <a href="/en/articles/gu10-or-gu5-3/">GU10 or GU5.3</a>.</li></ul>
<h2>4. How many, and where?</h2><p>Rule of thumb: <strong>one 500–650 lm downlight every 1.2–1.5 m</strong> for general lighting, about <strong>60 cm from the walls</strong>. In a kitchen, place them <strong>above the front edge of the worktop</strong>, not in the middle of the room, or your body shades what you are chopping. Work out the total with <a href="/en/tutorials/how-much-light-per-room-lux-foot-candles/">how much light per room</a>.</p>
<h2>5. IP rating</h2><ul><li><strong>IP20:</strong> dry rooms.</li><li><strong>IP44:</strong> bathroom outside the shower zone, kitchen, soffits.</li><li><strong>IP65:</strong> above the shower, exposed outdoor spots.</li></ul><p>Details in the <a href="/en/guides/ip-ratings-bathroom-outdoor/">IP ratings guide</a>.</p>
<h2>6. Insulation and heat</h2><p>Under an insulated loft, a downlight buried in mineral wool overheats (and with halogen it is a fire risk). Use downlight covers or fittings rated to be covered with insulation. LEDs run cooler, but their electronics hate heat: see <a href="/en/articles/led-heat-lifespan/">why LEDs fail early</a>.</p>
<h2>Bonus: dimming</h2><p>Dimmable downlights plus an LED-compatible dimmer give a kitchen that switches from “cooking” to “dinner”. Buy the whole set from one brand for even dimming.</p>
<h2>Our pick</h2><p>A <strong>pack of 10 Bojim tilting downlights</strong> (650 lm, dimmable, 68 mm cut-out) is a good starting point for a kitchen or living room. If you prefer holders with GU10 bulbs, choose warm-dimming bulbs for ambience and 4000K for the kitchen.</p>
${card('Kit · 68 mm', 'Bojim tilting LED downlights, 650 lm, dimmable (pack of 10)', 'A good starting point for a kitchen or living room.', 'Bojim LED tilting downlight 650lm dimmable 68mm')}
${note}
${faq([['How many downlights for a 10 m² kitchen?', 'About 5 to 6 downlights of 500–650 lumens above the worktop, plus under-cabinet lighting.']])}`,
  },
  {
    path: 'articles/patio-lighting', article: true, kicker: 'How-to guide',
    title: 'Patio and terrace lighting: zones, solar or wired',
    description: 'Dining area, paths, façade, utility corner: solar or wired, colour temperature, IP rating, and a choice of festoon lights, spots and floodlights.',
    h1: 'Lighting a patio or terrace well',
    lead: 'A well-lit patio is an extra room in summer. The classic mistake is one powerful floodlight on the wall that dazzles everyone and draws every insect in the neighbourhood. Here is how to do better, zone by zone, with or without mains power.',
    body: `<h2>Think in four zones</h2><ol>
<li><strong>Dining area:</strong> soft, warm light over the table. A festoon string above it works wonders at 2200–2700K.</li>
<li><strong>Paths:</strong> bollards, solar spikes or low markers along the path and steps. The aim is to see where you walk, not light the sky.</li>
<li><strong>Façade and entrance:</strong> a wall light, possibly with a motion sensor or <a href="/en/articles/dusk-to-dawn-bulb/">dusk-to-dawn</a>.</li>
<li><strong>Utility areas</strong> (barbecue, storage, bins): a floodlight with a motion sensor that only comes on when needed.</li></ol>
<p>Same logic for an outdoor sauna at the end of the garden: mark the path with solar spikes or IP65 bollards (people often walk it barefoot at night) and keep a warm, low light by the door rather than a floodlight.</p>
<h2>Solar or wired?</h2>
<table><thead><tr><th></th><th>Solar</th><th>Wired (mains or 24 V)</th></tr></thead><tbody>
<tr><td>Installation</td><td>none</td><td>outdoor socket or electrician</td></tr><tr><td>Output</td><td>low to medium</td><td>high</td></tr><tr><td>Winter reliability</td><td>variable</td><td>constant</td></tr><tr><td>Best for</td><td>markers, decoration, far corners</td><td>dining area, façade, security</td></tr></tbody></table>
<p>A good compromise: <strong>festoon and wall light on mains, solar markers</strong>.</p>
<h2>The right settings</h2><ul>
<li><strong>Warm white (2200–3000K):</strong> friendlier and less attractive to insects than cool white.</li>
<li><strong>IP44 minimum</strong> for anything exposed to rain, <strong>IP65</strong> for anything at ground level or very exposed.</li>
<li><strong>Light downwards:</strong> less glare and less light pollution for neighbours and wildlife.</li>
<li><strong>Dimmer or remote</strong> on the festoon: full for drinks, dimmed late in the evening.</li></ul>
<h2>Our picks</h2>
<div class="en-card"><p class="en-flag">Dining area · IP65</p><h3>ZOTOYI 15 m S14 festoon lights (15+1 bulbs)</h3><p>Shatterproof S14 bulbs for the table area.</p>${uk('B0972HH7C6', 'ZOTOYI 15 m S14 festoon')}</div>
<div class="en-card"><p class="en-flag">Dining area · 24 V</p><h3>10 m G40 festoon lights, 24 V, dimmable</h3><p>Low voltage if you want a safer installation.</p>${uk('B0CZ9B4C2B', '10 m G40 festoon lights 24V')}</div>
${card('Paths', 'Solar spike lights with motion sensor (3-pack)', 'For path edges, no cable.', 'solar spike lights motion sensor 3 pack')}
${card('Entrance', 'Steinel XSolar solar wall light with sensor', 'For an entrance with no cable.', 'Steinel XSolar')}
${card('Utility area', '30 W LED floodlight with motion sensor', 'Only on when you need it.', '30W LED floodlight PIR motion sensor')}
${note}
<p>Read also: <a href="/en/guides/christmas-lights-indoor-outdoor/">festoon and fairy lights indoors and out</a> and <a href="/en/zones/outdoor-entrance-path/">lighting an entrance and path</a>.</p>
${faq([['Which colour temperature for a patio?', 'Warm white between 2200 and 3000K: friendlier and less attractive to insects.']])}`,
  },
  {
    path: 'articles/led-savings-calculation', article: true, kicker: 'How-to guide',
    title: 'How much does LED save? Calculation and worked examples',
    description: 'The formula, an incandescent/halogen/LED table in kWh, the downlight case, payback time and checking with a plug-in power meter.',
    h1: 'How much does switching to LED save?',
    lead: 'Does switching to LED really save money? Yes, and you can put a precise figure on it. Here is the calculation, light by light, and how to check it yourself with a power meter.',
    body: `<h2>The basic formula</h2>
<p><strong>Annual energy (kWh) = power (kW) × hours per day × 365</strong>, then multiply by the unit rate on your bill.</p>
<table><thead><tr><th>Bulb</th><th>Power</th><th>3 h/day</th><th>6 h/day</th></tr></thead><tbody>
<tr><td>Incandescent 60 W</td><td>60 W</td><td>65.7 kWh/year</td><td>131.4 kWh/year</td></tr>
<tr><td>Halogen 42 W</td><td>42 W</td><td>46.0 kWh/year</td><td>92.0 kWh/year</td></tr>
<tr><td>LED 806 lm</td><td>8 W</td><td>8.8 kWh/year</td><td>17.5 kWh/year</td></tr></tbody></table>
<p>Replacing a 42 W halogen with an 8 W LED saves about 37–74 kWh a year per light point at 3 to 6 hours a day.</p>
<h2>Downlights: the big winners</h2>
<p>50 W GU10 halogen downlights often come in sixes or eights in a kitchen. 8 × 50 W = 400 W on 4 hours a day, that is <strong>584 kWh a year</strong>. With LEDs (8 × 5 W) it drops to <strong>58 kWh a year</strong>. It is the most profitable change in the house. See <a href="/en/articles/gu10-or-gu5-3/">GU10 or GU5.3</a>.</p>
<h2>Check with a power meter</h2>
<p>A plug-in power meter sits between the socket and the appliance and shows real power (W), cumulative energy (kWh) and sometimes cost. Handy to check a floor lamp, fairy lights or an aquarium; to track down standby losses (router, TV, consoles), which often cost more than the lighting; and to compare two bulbs.</p>
<h2>Payback time</h2>
<p>A good LED replacing a halogen used 3 hours a day saves about 37 kWh a year, so it usually pays for itself within months at typical unit rates. After that it is pure gain for years (around 15,000 hours, over 13 years at 3 hours a day).</p>
<h2>Saving even more</h2><ul>
<li><strong>Motion sensors</strong> in passageways (hallway, cellar, garage). See <a href="/en/guides/motion-sensors/">motion sensors</a>.</li>
<li><strong>The right lumens in the right place:</strong> no point over-lighting. See <a href="/en/tutorials/how-much-light-per-room-lux-foot-candles/">how much light per room</a>.</li>
<li><strong>Solar outdoors:</strong> zero consumption. See <a href="/en/articles/patio-lighting/">patio lighting</a>.</li></ul>
${card('Measure', 'Plug-in power meter', 'Shows watts, kWh and cost for one appliance.', 'plug in power meter energy monitor')}
${note}
${faq([['How much does an LED left on all night use?', 'An 8 W LED on for 10 hours uses 0.08 kWh. Multiply by your unit rate.']])}`,
  },
  {
    path: 'articles/gu10-or-gu5-3', article: true, kicker: 'How-to guide',
    title: 'GU10 or GU5.3 (MR16): the differences and which to choose',
    description: 'Thick twist-lock pins at mains voltage or thin straight pins at 12 V: how to tell them apart, which to pick, heat and beam angle.',
    h1: 'GU10 or GU5.3 (MR16)?',
    lead: 'Your recessed spots have two small pins and you do not know which bulbs to buy? GU10 and GU5.3 (also called MR16) share the same reflector size, about 50 mm, but not the same voltage. Get it wrong and at best the bulb will not fit, at worst it burns out.',
    body: `<h2>The difference at a glance</h2><ul>
<li><strong>GU10:</strong> two <strong>thick pins with a small bulge at the tip</strong>. Push in and twist a quarter turn. Runs directly on <strong>mains voltage</strong> (230 V in the UK and Europe), no transformer.</li>
<li><strong>GU5.3 / MR16:</strong> two <strong>thin, straight pins</strong> 5.3 mm apart. The bulb pushes straight in. Runs on <strong>12 V</strong> through a transformer hidden in the ceiling.</li></ul>
<h2>Which is better?</h2>
<p><strong>For a new installation, choose GU10.</strong> No transformer to replace, no buzzing, far more choice (dimmable, warm-dimming, smart, high CRI) and lower prices.</p>
<p><strong>If you already have GU5.3</strong>, two options:</p><ol>
<li><strong>Keep 12 V</strong> and buy GU5.3 LEDs. Simple, but check the transformer: old electronic halogen transformers cope badly with the low draw of LEDs, which causes flicker and buzzing. An LED 12 V driver solves it.</li>
<li><strong>Switch to GU10:</strong> remove the transformer and replace the lampholders. A good moment to do it is when the ceiling is being redone.</li></ol>
<h2>The heat trap</h2>
<p>GU10 and GU5.3 LEDs are compact, so their electronics run hot. In recessed spots covered with insulation, lifespan drops. Leave an air gap and buy branded bulbs. More in <a href="/en/articles/led-heat-lifespan/">why LEDs run hot and fail</a>.</p>
<h2>Beam angle</h2><ul><li><strong>36°:</strong> narrow beam, ideal to highlight a picture or a splashback.</li><li><strong>100–120°:</strong> wide beam for general lighting. That is what you need 90 % of the time.</li></ul>
<h2>What to buy</h2>
<p>In GU10, 805 lm packs at 4000K give plenty of light for a kitchen, and dimmable warm-glow bulbs suit a living room. In GU5.3, 2700K and 4000K LEDs from established brands are good value. For complete fittings (holder plus bulb) in a new ceiling, see <a href="/en/articles/choosing-recessed-downlights/">choosing recessed downlights</a>, and for the swap itself <a href="/en/tutorials/replace-halogen-gu10-mr16-with-led/">replacing halogen GU10/MR16 with LED</a>.</p>
${card('GU10 · 4000K', 'GU10 LED bulbs, 805 lm, 4000K (multipack)', 'Plenty of light for a kitchen.', 'GU10 LED 805lm 4000K pack')}
${card('GU5.3 · 12 V', 'GU5.3 / MR16 LED bulbs, 12 V', 'Check your transformer, or use an LED 12 V driver.', 'MR16 GU5.3 LED 12V bulbs')}
${note}
${faq([['Can I replace a GU5.3 with a GU10?', 'Yes, by removing the 12 V transformer and changing the lampholder, since GU10 runs directly on mains voltage.'], ['Why do my GU5.3 LED spots flicker?', 'The halogen transformer is not suited to the low draw of LEDs. An LED 12 V driver fixes it.']])}`,
  },
  {
    path: 'articles/installing-led-strip', article: true, kicker: 'How-to guide',
    title: 'Installing an LED strip: power supply, aluminium profile, fitting (full guide)',
    description: 'COB or SMD, 24 V, sizing the power supply (×1.2), why an aluminium profile matters, step-by-step fitting and the common mistakes.',
    h1: 'Installing an LED strip',
    lead: 'A well-fitted LED strip transforms a kitchen (under the cabinets), a living room (behind the TV, in a cove) or a staircase. Badly fitted, it peels off, flickers, shows every dot and runs hot. Here is the full method, from buying to fitting.',
    body: `<h2>1. Choose the right strip</h2><ul>
<li><strong>COB rather than SMD:</strong> a COB strip packs the LEDs so tightly the line of light is continuous, with no dots. Best for visible lighting (under cabinets, shelves).</li>
<li><strong>24 V rather than 12 V:</strong> less voltage drop, so even light over 5 m without re-feeding.</li>
<li><strong>CRI ≥ 90</strong> for the kitchen.</li>
<li><strong>IP65 (waterproof)</strong> for a bathroom, a covered outdoor spot or near the kitchen sink. In dry rooms, IP20 is brighter and easier to cut.</li>
<li><strong>Colour temperature:</strong> 3000K for ambience, 4000K for the worktop. Under wall cabinets, a <strong>mains-powered LED bar</strong> fits in a quarter of an hour if you do not want to run 24 V cable: see <a href="/en/zones/kitchen-worktop/">kitchen worktop lighting</a>.</li></ul>
<h2>2. Size the power supply</h2>
<p><strong>Supply rating = strip power (W/m) × length × 1.2</strong></p>
<p>Example: 4 m of 10 W/m strip = 40 W × 1.2 = <strong>48 W minimum</strong>, so a 60 W supply. The 20 % margin prevents overheating and whining. Make sure the supply <strong>voltage</strong> matches the strip (24 V with 24 V). To dim with a wall dimmer, choose a <strong>TRIAC-dimmable</strong> supply.</p>
<h2>3. The aluminium profile: essential</h2>
<p>An aluminium profile with an opal diffuser:</p><ul><li><strong>dissipates heat</strong> (strip lifespan doubles);</li><li><strong>hides the dots</strong> for a clean line;</li><li><strong>protects</strong> against dust and splashes;</li><li>holds better than adhesive alone on a greasy or rough surface.</li></ul>
<p>A <strong>45°</strong> profile is perfect under a wall cabinet: it aims the light at the wall and worktop without dazzling you.</p>
<h2>4. Fitting, step by step</h2><ol>
<li><strong>Cut</strong> the strip only at the marks (scissor symbols every 5 to 10 cm).</li>
<li><strong>Degrease</strong> the surface or the inside of the profile with isopropyl alcohol.</li>
<li><strong>Stick</strong> the strip into the profile without bending it at a sharp angle (use a corner connector or a gentle loop).</li>
<li><strong>Connect:</strong> quick connectors or soldering (more reliable over time). Respect + and −.</li>
<li><strong>Test</strong> before closing the diffuser and fixing the profile.</li>
<li><strong>Hide the power supply</strong> in a ventilated cabinet, never wrapped in insulation.</li></ol>
<h2>5. Common mistakes</h2><ul>
<li><strong>Undersized power supply:</strong> flicker, whining, failure.</li>
<li><strong>More than 5 m in series at 12 V:</strong> the end of the strip turns yellower and dimmer. Feed power at both ends or switch to 24 V.</li>
<li><strong>Strip stuck directly on raw wood:</strong> it peels off within months.</li></ul>
<h2>What to buy</h2>
${card('Indoor', 'COB LED strip, 24 V, 3000K, CRI 90+', 'Continuous line of light for dry rooms.', 'BTF-LIGHTING COB LED strip 24V 3000K CRI 90')}
${card('Damp areas', 'COB LED strip IP65, 24 V', 'For bathrooms and covered outdoor spots.', 'COB LED strip IP65 24V')}
${card('Profile', 'Aluminium V (corner) profile with opal diffuser', 'Heat sink and clean line.', 'aluminium LED profile V corner opal diffuser')}
${card('Power', '24 V 60 W LED power supply', 'Up to about 4 m of 10 W/m strip; choose 100 W dimmable for long runs on a dimmer.', '24V 60W LED driver power supply')}
${note}
${faq([['Which power supply for 5 m of LED strip?', 'Multiply the power per metre by 5, then by 1.2. For 10 W/m: 60 W minimum.'], ['Is an aluminium profile compulsory?', 'Not compulsory, but strongly recommended: it dissipates heat, hides the dots and protects the strip.']])}`,
  },
  {
    path: 'articles/bedside-lamp', article: true, kicker: 'How-to guide',
    title: 'How to choose a bedside lamp (height, colour temperature, cordless)',
    description: 'Shoulder height, 2700K or warmer, touch dimming, cordless or wired, shade type, and the right bulb if you keep your lamp.',
    h1: 'Choosing a bedside lamp',
    lead: 'The bedside lamp is the one you use most intimately: to read, to get up at night, to fall asleep. A poor lamp (too white, too bright, badly placed) spoils your evenings. Here are the criteria that matter.',
    body: `<h2>1. The right height</h2>
<p>To read in bed, the light source should be <strong>roughly at shoulder height</strong> when you sit up, slightly to the side. Too low and you read in the shadow of your arm; too high and you are dazzled. A 40–55 cm lamp on a standard bedside table usually gets it right.</p>
<h2>2. Colour temperature: warm, even very warm</h2>
<p>In the evening, go for <strong>2700K or lower</strong>. Cool, blue-rich light delays the feeling of sleepiness. Many lamps offer three settings: keep 3000K for reading, 2200–2700K for the rest. See <a href="/en/guides/colour-temperature-kelvin/">colour temperature</a>.</p>
<h2>3. Dimming</h2>
<p>This is the real comfort: proper light to read, a night light to get a glass of water without waking your partner. <strong>Touch</strong> lamps (tap to change level) are very handy in the dark.</p>
<h2>4. Cordless or wired?</h2><ul>
<li><strong>Cordless rechargeable:</strong> goes anywhere, even far from a socket, and moves around. Check battery capacity (4000–6000 mAh = several evenings).</li>
<li><strong>Wired:</strong> never flat, often brighter.</li>
<li><strong>With wireless charging:</strong> your phone charges on the lamp base, and it frees a socket.</li></ul>
<h2>5. The shade</h2>
<p>An opaque shade sends light downwards (reading without disturbing your partner); a translucent shade gives ambient light. If you share the bed and one of you reads late, choose an adjustable lamp or a reading light.</p>
<h2>And the bulb, if you keep your lamp?</h2>
<p>An <strong>E27 (large) or E14 (small) screw base</strong> bulb of <strong>470 lm (40 W equivalent) at 2700K</strong> is enough to read in bed. In the UK many lamps use B22 bayonet: check your base in <a href="/en/guides/e27-vs-b22/">E27 vs B22</a>. <a href="/en/articles/vintage-filament-bulb/">Vintage filament bulbs</a> look lovely in a lamp with an open shade.</p>
<h2>What to buy</h2>
${card('Cordless', 'Cordless touch bedside lamp, 3 colour temperatures', 'Dimmable, large battery. For a bedside with no socket nearby.', 'cordless touch bedside lamp rechargeable dimmable 3 colour')}
${card('Wireless charging', 'Wooden touch lamp with wireless phone charger', 'Clock and phone charging built in.', 'wooden bedside lamp wireless charger touch')}
${note}
<p>For the rest of the bedroom, see our <a href="/en/rooms/bedroom/">bedroom guide</a>.</p>
${faq([['How bright should a bedside lamp be?', 'About 470 lumens (40 W equivalent) at 2700K is enough to read in bed.']])}`,
  },
  {
    path: 'articles/grow-light-houseplants', article: true, kicker: 'How-to guide',
    title: 'LED grow light for houseplants: which one to choose?',
    description: 'Full spectrum or red/blue, distance, hours per day, E27 bulb or clip-on lamp, and how much it uses.',
    h1: 'LED grow light for houseplants',
    lead: 'Your houseplants wilt in winter, your seedlings stretch towards the window? An LED grow light makes up for the lack of daylight. No need for professional greenhouse kit: for a few green plants or seedlings, a well-chosen bulb or clip-on lamp is enough.',
    body: `<h2>Why an ordinary bulb is not (really) enough</h2>
<p>Plants mainly use <strong>blue</strong> light (leaf growth) and <strong>red</strong> light (flowering, fruiting). A 2700K household bulb emits little of either and, above all, is too weak: at 50 cm it gives only a fraction of the light of a well-exposed window.</p>
<h2>Full spectrum or red/blue?</h2><ul>
<li><strong>Red and blue (purple light):</strong> effective, but very unpleasant in a living room.</li>
<li><strong>Full spectrum (white light):</strong> slightly less targeted, but it looks like daylight. <strong>The right choice at home.</strong></li></ul>
<h2>4 rules of use</h2><ol>
<li><strong>Distance:</strong> 20 to 40 cm above the leaves. Further away, intensity drops very quickly.</li>
<li><strong>Duration:</strong> 10 to 14 hours a day for green plants, 14 to 16 hours for seedlings. A timer plug does the job.</li>
<li><strong>Night:</strong> plants need darkness. Do not run it 24 hours a day.</li>
<li><strong>Watch:</strong> leaves yellowing or browning from the top → too close; long, pale stems → not enough light.</li></ol>
<h2>E27 bulb or clip-on lamp?</h2><ul>
<li><strong>E27 grow bulb:</strong> screws into an existing lamp (adjustable floor lamp, pendant above a shelf). Discreet and cheap.</li>
<li><strong>Multi-head clip-on lamp:</strong> clamps to a shelf or desk, with flexible arms to aim at several plants.</li></ul>
<h2>What to buy</h2>
${card('E27', 'SANSI full-spectrum E27 grow bulb', 'Ideal in an existing light fitting.', 'SANSI full spectrum E27 grow light bulb')}
${card('Clip-on', 'SANSI 20 W two-head clip-on grow lamp', 'For a plant corner or a seedling shelf.', 'SANSI clip grow light 2 heads')}
${note}
<h2>How much does it use?</h2>
<p>A 20 W lamp on 12 hours a day uses about 88 kWh a year. Multiply by your unit rate; the method is in <a href="/en/articles/led-savings-calculation/">how much LED saves</a>.</p>
${faq([['How many hours should I light my plants?', '10 to 14 hours a day for green plants, 14 to 16 hours for seedlings, with a dark period.']])}`,
  },
  {
    path: 'articles/best-g9-led-bulb', article: true, kicker: 'How-to guide',
    title: 'Best G9 LED bulb: which one for a chandelier?',
    description: 'Size, lumens to replace a 40 W halogen, flicker and dimming: the 4 checks before buying G9 LEDs, plus common mistakes.',
    h1: 'Best G9 LED bulb',
    lead: 'G9 bulbs are the small capsules with two looped pins found in designer chandeliers, wall lights and multi-head pendants. The old halogen versions ran very hot and burned out quickly; G9 LEDs use five times less energy, but they are not all equal.',
    body: `<h2>4 things to check</h2><ol>
<li><strong>Size:</strong> a G9 LED is often longer and wider than a G9 halogen. Measure the space in your fitting (glass, cover, shade) before buying. Compact ceramic models fit almost everywhere.</li>
<li><strong>Light output:</strong> a 40 W G9 halogen gives about 400–450 lm. Choose an LED in that range to keep the same light. A three-head pendant with 650 lm LEDs becomes much brighter.</li>
<li><strong>Flicker:</strong> cheap G9s are known to flicker (check with your phone camera). Choose one sold as flicker-free.</li>
<li><strong>Dimmer compatibility:</strong> most G9s are <strong>not</strong> dimmable. If your fitting is on a dimmer, check specifically.</li></ol>
<h2>What to buy</h2>
${card('Chandelier · 3000K', 'GY G9 3.2 W, 3000K', 'Compact (16 × 50 mm), 520 lm for 3.2 W, energy class C, CRI 82, not dimmable (manufacturer data). That is about 162 lm/W. A direct replacement for a 40 W halogen in a chandelier.', 'GY G9 LED 3.2W 520lm 3000K')}
${card('Pendant · 2700K', 'AGOTD G9 2700K, 650 lm (pack of 3)', 'Brighter and flicker-free, for a pendant that really has to light the table.', 'AGOTD G9 LED 2700K 650lm')}
${note}
<h2>Common G9 mistakes</h2><ul>
<li><strong>Too powerful a G9 in an enclosed fitting:</strong> it runs hot and its lifespan drops. See <a href="/en/articles/led-heat-lifespan/">LED heat and lifespan</a>.</li>
<li><strong>Mixing colour temperatures</strong> in one chandelier (2700K, 3000K, 4000K): very visible. Buy the whole set.</li>
<li><strong>Forcing the pins:</strong> G9s push straight in, without twisting.</li></ul>
<h2>Going further</h2>
<p>Not sure which base you have? See <a href="/en/guides/e27-vs-b22/">E27 vs B22</a> and <a href="/en/articles/gu10-or-gu5-3/">GU10 or GU5.3</a>. For the right light level: <a href="/en/tutorials/how-much-light-per-room-lux-foot-candles/">how much light per room</a>.</p>
${faq([['Which G9 LED replaces a 40 W halogen?', 'A G9 LED of about 400 to 450 lumens, i.e. 4 to 6 W.'], ['Are G9 LEDs dimmable?', 'Most are not. Check for “dimmable” if your fitting is on a dimmer.']])}`,
  },
];

type RoomProduct = [badge: string, title: string, sub: string, q: string];
const K = '<a href="/en/guides/colour-temperature-kelvin/">';
const CRI = '<a href="/en/guides/cri-colour-rendering-index/">';
const DIM = '<a href="/en/guides/dimmable-led-bulbs/">';
const LM = '<a href="/en/guides/lumens-vs-watts/">';
const IP = '<a href="/en/guides/ip-ratings-bathroom-outdoor/">';
const MS = '<a href="/en/guides/motion-sensors/">';
function room(o: { path: string; title: string; description: string; h1: string; lead: string; sections: [string, string[]][]; products: RoomProduct[]; extra?: string }): EnPage {
  const secs = o.sections.map(([t, pts]) => `<h2>${t}</h2><ul>${pts.map((p) => `<li>${p}</li>`).join('')}</ul>`).join('\n');
  const prods = o.products.map(([b, t, s, q]) => card(b, t, s, q)).join('\n');
  return {
    path: o.path, kicker: 'Room guide', title: o.title, description: o.description, h1: o.h1, lead: o.lead,
    body: `${secs}\n<h2>Product ideas</h2>\n${prods}\n${note}\n${o.extra ?? ''}<p>Method: <a href="/en/tutorials/how-much-light-per-room-lux-foot-candles/">lux and lumens per room</a>. All rooms: <a href="/en/rooms/">room guides</a>.</p>`,
  };
}

export const ROOMS_LOT4_EN: EnPage[] = [
  room({ path: 'rooms/kitchen', title: 'Which bulbs for a kitchen? Zones, lumens and fittings',
    description: 'Split your kitchen into zones (worktop, general, ambience, appliances) and choose the right lighting: lumens, Kelvin, CRI, downlights, LED bars, pendants.',
    h1: 'Kitchen lighting', lead: 'Split the kitchen into zones (worktop, general, ambience, appliances) and light each one for what you do there.',
    sections: [['In a hurry?', ['Worktop: under-cabinet lighting, 4000K, CRI ≥ 90. Details in <a href="/en/zones/kitchen-worktop/">kitchen worktop lighting</a>.', 'General light: even, without glare.', 'Ambience: 2700–3000K, with a dimmer if possible.', 'Appliances: specific bulbs (base, size, heat). See <a href="/en/articles/oven-fridge-bulb/">oven and fridge bulbs</a>.']],
      ['Common mistakes', ['Only a ceiling light: you cast shadows on the worktop.', 'Too cool everywhere: the room feels like an operating theatre.', 'Ignoring CRI: dull food colours, a less pleasant result.']]],
    products: [['Worktop', 'Under-cabinet LED bars', 'Direct light on the worktop', 'under cabinet LED light bar kitchen 4000K CRI 90'], ['Worktop', 'LED strip with aluminium profile', 'Continuous light, premium look', 'LED strip 24V aluminium profile diffuser 4000K'], ['General', 'Recessed LED downlights', 'Even, discreet ceiling', 'GU10 recessed downlight kitchen 4000K'], ['Colour', 'E27 bulbs, CRI 90+', 'True colours', 'E27 LED bulb CRI 90 4000K']] }),
  room({ path: 'rooms/living-room', title: 'Living room lighting: TV, reading, ambience',
    description: 'Split your living room into zones (TV, reading, ambience, circulation) to avoid glare, then choose lumens, colour temperature (Kelvin) and colour rendering (CRI).',
    h1: 'Living room lighting', lead: 'Split the living room into zones (TV, reading, ambience, circulation) to avoid glare and get a pleasant result day and evening.',
    sections: [['The rule that changes everything', ['Multiply light points: ceiling + lamps + indirect light.', `Recommended evening tone: ${K}2700–3000K</a> (cosier).`, 'Avoid glare around the TV: indirect light or an anti-reflection LED strip (bias light).']]],
    products: [['Reading', 'Reading floor lamp', 'Directed, precise beam', 'LED reading floor lamp adjustable'], ['Ambience', 'Warm white E27 bulbs', 'Cosy ambience', 'E27 LED bulb 2700K'], ['TV', 'LED strip behind the TV (bias light)', 'Comfort and less glare', 'TV bias lighting LED strip'], ['Dimming', 'Dimmer + dimmable bulbs', 'Adjustable ambience', 'dimmable E27 LED bulb']],
    extra: `<p>Dimming: ${DIM}dimmable LED bulbs</a>.</p>` }),
  room({ path: 'rooms/garage', title: 'Garage lighting: bright, shadow-free, workshop-ready',
    description: 'To work and park safely: powerful ceiling lights, workshop LED bars, motion sensors and neutral to cool white light.',
    h1: 'Garage lighting', lead: 'To do DIY and park safely: powerful ceiling lights, workshop bars, sensors and neutral to cool light.',
    sections: [['Golden rules by zone (without eye strain)', ['Storage: light the shelves (diffuser + lines of light) to find tools and supplies quickly.', 'Workbench: aim for a directed, stable, adjustable beam to avoid shadows on your work.', 'Parking: even light on the floor so you move around without dark patches.', 'Entrance: simple detection (motion or door opening) to get light straight away.']],
      ['Colour temperature, colour and comfort', [`Colour temperature: usually neutral to cool (about 4000–5000K) to see and work well — ${K}Kelvin</a>.`, `Colour rendering: aim for a high ${CRI}CRI</a> (often ≥ 90) for more natural colours.`, 'Intensity: a dimmable mode or several levels makes the garage more comfortable.']]],
    products: [['Storage', 'Workshop LED bar (shelving)', 'Lines of light, easy fitting', 'LED batten workshop garage 4000K'], ['Workbench', 'Adjustable LED floodlight', 'Directed, precise beam', 'adjustable LED work light indoor'], ['Circulation', 'Powerful LED ceiling panel', 'Even general light', 'LED ceiling panel garage 4000K'], ['Entrance', 'Motion sensor', 'Automatic switching', 'ceiling PIR motion sensor indoor'], ['Tools', 'Rugged LED strip', 'Local accent', 'waterproof LED strip workshop'], ['Precision', 'Workbench task lamp', 'Precision work', 'LED task lamp workbench adjustable']] }),
  room({ path: 'rooms/bathroom', title: 'Bathroom lighting: mirror, shower, ambience (safely)',
    description: 'Split your bathroom into zones (mirror/basin, shower/bath, toilet, circulation) and choose colour temperature, colour rendering and fittings rated for damp rooms.',
    h1: 'Bathroom lighting', lead: 'Split the bathroom into zones (mirror/basin, shower/bath, toilet, circulation), then choose the right Kelvin, CRI and fittings designed for damp rooms.',
    sections: [['Goals by zone', ['Mirror/basin: no shadows on the face, crisp natural light (high CRI). See <a href="/en/zones/bathroom-mirror/">bathroom mirror lighting</a>.', `Shower/bath: fittings rated for moisture (${IP}IP</a>), placed according to the safety zones.`, 'Toilet: comfort and savings (a sensor can help).', 'Ambience: a warmer tone (2700–3000K) for the evening.']],
      ['Common mistakes', ['A single ceiling source: shadows on the face.', 'Too cool a tone: clinical look.', 'Fittings not rated for damp rooms: risk and discomfort.']]],
    products: [['Mirror', 'LED mirror bar', 'No shadows on the face', 'LED mirror light bar bathroom IP44'], ['Basin', 'LED wall light for the basin', 'Light from the front', 'LED bathroom wall light IP44'], ['Damp zones', 'IP-rated bathroom downlight', 'Wet zones (check rating)', 'bathroom downlight IP65'], ['Accent', 'IP65 waterproof LED strip', 'Protected accent', 'IP65 LED strip bathroom 24V']] }),
  room({ path: 'rooms/garden', title: 'Garden lighting: pergola, seating area, path, dining/barbecue',
    description: 'Split your garden into zones (pergola, seating, path, dining/barbecue) to choose outdoor fittings, colour temperature, colour rendering and dimming.',
    h1: 'Garden lighting', lead: 'Split the garden into zones (pergola, seating area, path, dining/barbecue) to pick the right outdoor fittings and an ambience that lasts.',
    sections: [['In a hurry?', ['Pergola: indirect light (comfort and ambience, no glare).', 'Seating area: 2700–3000K in the evening and a suitable CRI for flattering colours.', `Path: even light on the ground and fittings with a good ${IP}IP rating</a>.`, 'Dining/barbecue: highlight with suitable Kelvin and CRI for natural faces and food.']],
      ['Common mistakes', ['Too cool without control: office ambience in the evening.', 'Ignoring the IP rating: a fitting not designed for rain.', 'A single light point: the garden looks like islands with dark patches.', 'Skipping dimming: no way to adjust the mood to the moment.']]],
    products: [['Pergola', 'IP65 outdoor LED wall light', 'Indirect, anti-glare', 'outdoor LED wall light IP65 3000K up down'], ['Seating', 'Dimmable outdoor festoon lights', 'Warm ambience', 'outdoor festoon lights dimmable IP65 2700K'], ['Path', 'IP67 LED bollard or spike light', 'Even, safe ground light', 'LED bollard light outdoor IP67 3000K'], ['Dining / barbecue', 'Outdoor LED pendant', 'Highlight with good CRI', 'outdoor pendant light IP65 2700K']],
    extra: `<p>Read also: <a href="/en/articles/patio-lighting/">patio and terrace lighting</a> and <a href="/en/zones/outdoor-entrance-path/">entrance and path</a>.</p>` }),
  room({ path: 'rooms/home-office', title: 'Home office lighting: workstation, reading, comfort, anti-glare',
    description: 'Split your home office into zones (workstation, reading/writing, comfort lighting) for crisp light and less eye strain, then set Kelvin, CRI and dimming.',
    h1: 'Home office lighting', lead: 'Split the office into zones (workstation, reading/writing, comfort) for crisp light and less eye strain.',
    sections: [['Zones', ['Workstation: precise light on the surface (writing, computer) to work without shadows.', 'Reading: add an adjustable source for targeted light that is easy on the eyes.', 'Comfort: indirect light relaxes the space (less contrast, softer feel).', 'Screen glare: spread the sources and keep light from shining straight into your eyes or onto the screen.']],
      ['Settings that make the difference', [`Colour temperature: for active use, a ${K}fairly neutral Kelvin</a> (about 3500–5000K).`, `True colours: a ${CRI}high CRI</a> (often ≥ 90) for paper, wood and objects.`, `Adjustable comfort: for evenings, add ${DIM}dimming</a>.`, `The right amount of light: start from ${LM}consistent lumens</a> rather than “one bulb”.`]],
      ['Mistakes to avoid', ['<strong>Everything on the ceiling:</strong> shadows on the desk and tired eyes.', '<strong>Contrasts too strong:</strong> bright desk + dark surroundings = eyes constantly adjusting.', `Ignoring ${CRI}CRI</a> when you work with colour (documents, models).`]]],
    products: [['Workstation', 'Adjustable LED desk lamp', 'Precise, fewer shadows', 'LED desk lamp adjustable 4000K'], ['Work zone', 'LED bar for the desk area', 'Even light on the surface', 'under shelf LED light bar 4000K CRI 90'], ['Comfort', 'Dimmable LED ceiling light', 'Adjustable for the evening', 'dimmable LED ceiling light 2700K'], ['Ambience', 'Indirect LED strip', 'Bounced light, less contrast', 'indirect LED strip 2700K']],
    extra: `<p>Step by step: <a href="/en/tutorials/home-office-lighting-lux-cri-kelvin/">home office lighting: lux, CRI, Kelvin</a>.</p>` }),
  room({ path: 'rooms/kids-study', title: "Children's desk lighting: writing, rest, general, anti-glare",
    description: "Split a child's desk area into zones (writing/reading, rest, general light) to limit eye strain: comfortable light, the right tone and true colours without glare.",
    h1: "Children's desk lighting", lead: 'Split the desk area into zones to limit eye strain: comfortable light, a suitable tone and good colour rendering, without glare.',
    sections: [['Zones', ['Writing/reading: targeted, stable light to avoid fatigue and shadows.', 'Rest: a softer ambience for breaks (often slightly warmer).', 'General: a ceiling light or spread-out points so the desk is not a dark tunnel.', 'Anti-glare: avoid harsh reflections; aim light at the desk or wall, not at the eyes.']],
      ['Colour temperature, CRI and quantity', [`Colour temperature: for work, a ${K}neutral</a> base (often 3500–5000K), <strong>softened</strong> in the evening.`, `CRI: a ${CRI}high CRI</a> (≥ 90) for natural-looking notebooks, books and colours.`, `Quantity: adjust ${LM}lumens</a> to the surface, not at random.`, `Comfort: go ${DIM}dimmable</a> to adapt to the time of day and tiredness.`]],
      ['Common mistakes', ['Too warm everywhere: colours fade and concentration drops.', 'A single light point: shadows on the notebook and eye strain.', 'Ignoring balance: bright desk + dark background = harsh contrast.']]],
    products: [['Writing/reading', "Adjustable LED reading lamp (child)", 'Targeted, no glare', 'kids LED desk lamp adjustable 4000K'], ['General', 'Anti-glare LED ceiling light', 'Even spread', 'anti glare LED ceiling light 4000K'], ['Rest', 'Dimmable bulbs', 'Adjust to the time of day', 'dimmable E27 LED bulb 2700K'], ['Ambience', 'Indirect LED strip', 'Soft ambience', 'indirect LED strip 2700K bedroom']] }),
  room({ path: 'rooms/wine-cellar', title: 'Wine cellar lighting: racks, entrance, highlights, safety',
    description: 'Split your wine cellar into zones (racks, entrance/path, highlights). Light that flatters the bottles without heating them, with true colours and a sensor if needed.',
    h1: 'Wine cellar lighting', lead: 'Light that makes the bottles look good, without heat, with true colours (CRI) and easy use (a sensor if needed).',
    sections: [['Zones', ['Racks: even light, without harsh reflections on the labels.', 'Entrance/path: welcome lighting so you are not fumbling around.', 'Highlight zone: a more directional source to bring out the bottles (without glare).', 'Safety: low-level lighting can be enough to move around without lighting the whole cellar.']],
      ['Kelvin, CRI and comfort', ['Colour temperature: often 2700–3000K for a warm cellar ambience, especially for accent lighting.', `CRI: look for a ${CRI}high CRI</a> for true labels and wood.`, `Dimming or sensor: ${DIM}dimming</a> or a ${MS}sensor</a> makes daily use much easier.`, `Quantity: adjust ${LM}lumens</a> to avoid strong contrasts between levels.`]],
      ['Common mistakes', ['Harsh ceiling lighting: reflections, unreadable labels and a cold feel.', 'Too blue or neutral a tone: less of a cellar feel.', 'Forgetting anti-glare: as you move around, the reflection quickly tires the eyes.']]],
    products: [['Racks', 'Low-heat LED strip for a wine cellar', 'Well-lit racks', 'LED strip wine cellar 2700K'], ['Highlight', 'Adjustable recessed spot', 'Bottles highlighted without glare', 'adjustable recessed LED spot 3000K CRI 90'], ['Entrance', 'Door contact sensor', 'Light when you open', 'door contact sensor light switch'], ['Comfort', 'Dimmable LED bulbs', 'Adjust to use', 'dimmable E27 LED bulb 2700K']] }),
  room({ path: 'rooms/bedroom', title: 'Bedroom lighting: reading, bed ambience, circulation, storage',
    description: 'Split the bedroom into zones (bed/reading, circulation, storage, ambience). Comfortable by day and calming at night: the right Kelvin, decent CRI and a dimmer if possible.',
    h1: 'Bedroom lighting', lead: 'Comfortable by day and calming at night: split the bedroom into zones and set colour temperature, CRI and dimming.',
    sections: [['Zones', ['Reading: adjustable lamps (wall lights, arms) with a controlled beam.', 'Bed (ambience): soft, indirect or low light, ideal for falling asleep.', 'Circulation: avoid dark patches between bed, door and storage.', 'Storage: light wardrobes and shelves so you find things without blinding light.']],
      ['Settings: Kelvin, CRI and dimming', ['Colour temperature: often 2700–3000K (rest), keeping a more neutral tone for reading if needed.', `CRI: a ${CRI}high CRI</a> for pleasant textures (fabrics, walls).`, `Dimming: ${DIM}dimmable bulbs and a dimmer</a> give a soft evening transition.`, `Quantity: match ${LM}lumens</a> to the room size and your reading level.`]],
      ['Common mistakes', ['A single ceiling light: too harsh in bed, poor ambience and uncomfortable reading.', 'Light too cool at night: feels like an office.', 'Ignoring visual comfort: if you read, you need an adjustable source.']]],
    products: [['Reading', 'LED reading wall lights', 'Directed beam, easy on the eyes', 'LED reading wall light bedroom 3000K'], ['Ambience', 'Dimmable bulbs', 'Cosier in the evening', 'dimmable E27 LED bulb 2700K'], ['Circulation', 'Dimmable LED ceiling light', 'No dark patches', 'dimmable LED ceiling light bedroom 3000K'], ['Storage', 'LED strip for wardrobe / indirect light', 'Readable storage', 'wardrobe LED strip 2700K']],
    extra: `<p>Read also: <a href="/en/articles/bedside-lamp/">choosing a bedside lamp</a> and <a href="/en/zones/wardrobes-closets/">wardrobe and closet lighting</a>.</p>` }),
  room({ path: 'rooms/kids-bedroom', title: "Children's bedroom lighting: study, play, night light, circulation",
    description: "Split a child's bedroom into zones (study/reading, play, night). Limit eye strain and keep a calm evening ambience with the right tone and dimming.",
    h1: "Children's bedroom lighting", lead: 'Limit eye strain and keep a calming evening ambience with the right colour temperature and, if possible, dimming.',
    sections: [['Zones', ['Study: targeted, stable light to avoid shadows on notebooks.', 'Play: softer, well-spread light so the room is not a dark tunnel.', 'Night: very dim light to reassure without disturbing sleep.', 'Circulation: a low level avoids falls and panicked switching-on.']],
      ['Colour temperature, CRI and dimming', [`Daytime: ${K}neutral</a> base (often 3500–5000K) depending on the activity.`, `Colour: a ${CRI}high CRI</a> (≥ 90) for natural-looking drawings and walls.`, `Evening: adjust with ${DIM}dimming</a> to keep a calming ambience.`, `Quantity: calculate with ${LM}lumens</a> to avoid too little light.`]],
      ['Common mistakes', ['Too cool everywhere: clinical, less reassuring.', 'A single ceiling light: shadows on the notebook and tiredness.', 'Ignoring the day/evening transition: dimming is often the answer.']]],
    products: [['Study', 'LED desk lamp (reading/notebooks)', 'Directed, comfortable', 'kids LED desk lamp adjustable 4000K'], ['Play', 'Spread LED ceiling light (anti-glare)', 'Even ambience', 'LED ceiling light kids room 4000K'], ['Night', 'Dimmable bulbs', 'Adjust the level', 'dimmable LED bulb 2700K E14'], ['Circulation', 'Rechargeable LED night light', 'Very dim, gentle safety', 'rechargeable LED night light warm white']] }),
  room({ path: 'rooms/toilet', title: 'Toilet / WC lighting: mirror, WC, circulation, practical',
    description: 'Split the toilet into zones (mirror/basin, WC, circulation) for a clean, comfortable result. Set Kelvin and CRI, and consider a motion sensor.',
    h1: 'Toilet lighting', lead: 'A clean, comfortable result: split the room into zones, set Kelvin and CRI, and consider a motion sensor.',
    sections: [['Zones', ['Mirror/basin: light without shadows on the face first.', 'WC: comfortable, not harsh, especially in the evening.', 'Circulation: light the way to the door so you are not groping around.', `Practical: a ${MS}motion sensor</a> improves everyday use.`]],
      ['Settings: Kelvin, CRI, IP', ['Colour temperature: usually 3000–4000K (natural without being too cool).', `CRI: a ${CRI}high CRI</a> flatters faces and materials.`, `Safety: if the toilet is in or next to a damp area, check the ${IP}IP rating</a> of the fittings.`, `Comfort: ${DIM}dimming</a> is a plus in the evening.`]],
      ['Common mistakes', ['Mirror lit from above: shadows under the eyes.', 'A single ceiling light: face too harsh and WC too dark, or the other way round.', 'Ignoring IP when the room is damp.']]],
    products: [['Mirror', 'LED mirror bar', 'Clear face, no shadows', 'LED mirror light bar IP44 4000K'], ['WC', 'Anti-glare LED ceiling light', 'Comfortable in the evening', 'LED ceiling light 3000K small'], ['Use', 'Motion sensor', 'Automatic switching', 'ceiling PIR motion sensor indoor time delay'], ['Ambience', 'Dimmable bulbs', 'Adjust in the evening', 'dimmable E27 LED bulb 2700K']] }),
  room({ path: 'rooms/parking', title: 'Driveway and car park lighting: entrance, path, spaces, sensors',
    description: 'Split a parking area into zones (entrance, path, spaces, circulation) to reduce dark patches, improve safety and keep light even. Check IP, Kelvin and controls.',
    h1: 'Driveway and parking lighting', lead: `Reduce dark patches, improve safety and keep light even. Check the ${IP}IP rating</a>, the colour temperature and, if possible, the controls (sensor, dimming).`,
    sections: [['Zones', ['Entrance: an immediate visual marker (welcome and safety).', 'Path/circulation: regular light to avoid gaps.', 'Spaces: light without dazzling drivers and passers-by.', 'Technical area: for a shed or gate, think about detection.']],
      ['Recommended settings', ['Colour temperature: often 4000K for visibility (neutral and effective).', `Protection: check the ${IP}IP rating</a> and outdoor use before installing.`, `Safety: combine power and spread, sometimes with ${MS}motion sensors</a> to limit switching on.`, `Quality: if colours matter (particular wall or floor), aim for a decent ${CRI}CRI</a>.`]],
      ['Common mistakes', ['Too few light points: dark patches despite the “power”.', 'A fitting without an outdoor IP rating.', 'Too cool without good spread: an industrial car-park feel.']]],
    products: [['Spaces / circulation', 'Outdoor LED floodlight', 'Power and spread', 'outdoor LED floodlight IP65 4000K'], ['Path', 'Outdoor LED bollard', 'Safe ground light', 'LED bollard outdoor IP65 3000K'], ['Control', 'Outdoor motion sensor (option)', 'Smart switching', 'outdoor PIR motion sensor IP65'], ['Comfort', 'Dimmable outdoor LEDs (depending on installation)', 'Adjust the intensity', 'dimmable outdoor LED spot IP65']] }),
  room({ path: 'rooms/vaulted-cellar', title: 'Vaulted cellar lighting: bounced light, racks, circulation, accents',
    description: 'A vaulted cellar works with bounced light and zones: shelves, circulation and highlights. Set Kelvin and CRI, and avoid shadows with adjustable and indirect sources.',
    h1: 'Vaulted cellar lighting', lead: 'Treat a vaulted cellar with bounced light and zones: shelving, circulation and highlights.',
    sections: [['Zones', ['Vault: bounce the light to even out the volume (avoid harsh contrasts).', 'Racks: light each level with several sources so there are no dark patches between shelves.', 'Circulation: soft markers to find your way without glare.', 'Accents: directional light to highlight an area (wall, furniture, tasting).']],
      ['Settings', ['Colour temperature: often 2700–3000K for a cellar ambience.', `CRI: a ${CRI}high CRI</a> for materials (wood, stone, wine).`, 'Spread: more light points rather than one very powerful source.', `Comfort: if you go in often, a ${MS}sensor</a> or a dimmable mode reduces the hassle.`]],
      ['Common mistakes', ['A single ceiling lamp: the vault “swallows” the light and shadows remain.', 'Lighting too cool: less warm and less comfortable.', 'Forgetting floor safety: hard to move around at night or in low light.']]],
    products: [['Accents', 'Adjustable LED floodlight', 'Guidance and accents', 'adjustable LED spotlight indoor 3000K IP44'], ['Racks', 'LED strip for the levels', 'More even light on shelves', 'LED strip 3000K CRI 90'], ['Circulation', 'Soft LED markers', 'Guide lights, no glare', 'LED step marker light 2700K'], ['Comfort', 'Dimmable bulbs (depending on fittings)', 'Adjustable ambience', 'dimmable E27 LED bulb 2700K']] }),
];

export const ZONES_GUIDES_LOT4_EN: EnPage[] = [
  {
    path: 'zones/outdoor-entrance-path', article: true, kicker: 'Zone guide',
    title: 'Lighting an entrance and outdoor path: sensor, IP rating, lumens',
    description: 'Floodlight with motion sensor, solar or dusk-to-dawn wall light: lumens needed, IP rating, calculated efficacy (lm/W) and solutions compared.',
    h1: 'Outdoor entrance and path',
    lead: 'Finding the lock, seeing the step, deterring intruders: outside, a light that comes on by itself when you arrive beats a lamp left on all night.',
    body: `<h2>The essentials</h2><ul>
<li><strong>Power:</strong> 20 to 30 W (2,000 to 3,000 lm) for an entrance or path; 50 to 60 W for a yard or car park.</li>
<li><strong>IP rating:</strong> IP44 under a canopy, IP65 if the fitting takes rain directly. Details in the <a href="/en/guides/ip-ratings-bathroom-outdoor/">IP ratings guide</a>.</li>
<li><strong>Control:</strong> a motion sensor for passing through, a dusk sensor for evening marker lights. See <a href="/en/guides/motion-sensors/">setting up a motion sensor</a> and <a href="/en/articles/dusk-to-dawn-bulb/">the dusk-to-dawn bulb</a>.</li>
<li><strong>Colour temperature:</strong> 2700–3000K bothers neighbours and wildlife less than 6500K.</li></ul>
<h2>Mains floodlights with motion sensor</h2>
<p>Efficacy = stated flux ÷ stated power: the higher it is, the less the floodlight uses for the same light.</p>
<table><thead><tr><th>Model</th><th>Flux</th><th>Efficacy (calculated)</th><th>Colour temperature</th><th>IP</th><th>Use</th></tr></thead><tbody>
<tr><td>OREiN 24 W LED floodlight with sensor</td><td>2,800 lm</td><td>117 lm/W</td><td>2700 / 4000 / 6500K</td><td>IP65</td><td>Entrance, patio</td></tr>
<tr><td>30 W LED floodlight with sensor + remote</td><td>3,600 lm</td><td>120 lm/W</td><td>3 settings</td><td>IP65</td><td>Path, garage</td></tr></tbody></table>
<p class="en-note">Data: manufacturers' product listings on Amazon.fr, checked 23 October 2026. UK listings may differ.</p>
<div class="en-card"><p class="en-flag">Our pick · entrance</p><h3>OREiN 24 W LED floodlight with motion sensor</h3><p>2,800 lm, the right range for an entrance, IP65 and above all a selectable 2700K setting: enough light for the lock without dazzling the street.</p>${uk('B0BPX1ZZXJ', 'OREiN 24 W floodlight')}</div>
${card('Path · garage', '30 W LED floodlight with motion sensor and remote', '3,600 lm, IP65, three colour temperatures.', '30W LED floodlight motion sensor remote')}
<h2>No cable: solar and dusk-to-dawn</h2>
<table><thead><tr><th>Model</th><th>Power source</th><th>Strengths</th><th>For</th></tr></thead><tbody>
<tr><td>STEINEL XSolar L-S ONE (solar wall light)</td><td>Solar, LiFePO4 battery</td><td>Adjustable sensor</td><td>Shed, gate, façade without cable</td></tr>
<tr><td>Solar spike lights with sensor (pack of 3)</td><td>Solar</td><td>IP65, ground spikes</td><td>Path edges</td></tr>
<tr><td>Lucide ST64 E27 dusk-to-dawn bulb, 4 W</td><td>Mains (E27 holder)</td><td>Day/night sensor, 2200K</td><td>Existing wall light, porch</td></tr></tbody></table>
${card('Solar', 'STEINEL XSolar L-S ONE', 'Solar wall light with adjustable sensor.', 'Steinel XSolar L-S ONE')}
${card('Path', 'Solar spike lights with motion sensor (pack of 3)', 'For path edges.', 'solar spike lights motion sensor IP65')}
${note}
<p>Going further: <a href="/en/guides/steinel-automatic-outdoor-lighting/">Steinel automatic outdoor lighting</a>, our <a href="/en/rooms/garden/">garden</a> and <a href="/en/rooms/parking/">driveway</a> pages, <a href="/en/articles/patio-lighting/">patio lighting</a>, and <a href="/en/zones/">all zones</a>.</p>`,
  },
  {
    path: 'zones/stairs', article: true, kicker: 'Zone guide',
    title: 'Stair lighting with LEDs: motion sensor, step lights, strip',
    description: 'How to light a staircase: automatic LED kit with sensor, recessed step lights, LED strip under the handrail. Settings and product ideas.',
    h1: 'Stairs',
    lead: 'The aim: see every step without glare. Low marker lights plus a motion sensor are often the most impressive and most useful solution.',
    body: `<h2>Solutions that work</h2><ul><li>LED strip under the handrail or under the step nosing.</li><li>Low wall lights (step markers) every 2–3 steps.</li><li>A sensor at the bottom and at the top so it lights up in both directions.</li></ul>
<h2>Recommended settings</h2><ul><li>Colour temperature: 2700–3000K for night-time comfort.</li><li>Time delay: 30–60 s.</li><li>Avoid direct light in the eyes: prefer indirect.</li></ul>
<div class="en-card"><p class="en-flag">Our pick · no work needed</p><h3>Osram Star A75 Motion Sensor E27</h3><p>The no-work solution for a stairwell that already has an E27 holder: built-in radar sensor (3 m range), 1,055 lm at 4000K, enough to reach the 150 lux benchmark for stairs.</p>${uk('B0FGD6H3NZ', 'Osram Star A75 Motion Sensor E27')}</div>
<p>Warranty and official shop: <a href="/en/brands/osram-ledvance/">our OSRAM page</a>. Benchmark: 150 lux on stairs (<a href="/en/tutorials/how-much-light-per-room-lux-foot-candles/">lux per room</a>). Read also: <a href="/en/guides/motion-sensors/">setting up a motion sensor</a>, <a href="/en/zones/">all zones</a>.</p>
<h2>Product ideas</h2>
${card('Safety', 'Wall step marker lights', 'Safety and looks', 'LED stair wall light recessed')}
${card('Handrail / steps', 'LED strip + diffuser', 'Under the handrail or the steps', 'LED strip aluminium profile stairs diffuser')}
${card('Automatic', 'Stair motion sensor', 'Automatic switching', 'ceiling PIR motion sensor stairs')}
${card('Ambience', 'Controller + dimmer for LED strip', 'Adjustable ambience', '24V LED strip dimmer')}
${note}`,
  },
  {
    path: 'zones/wardrobes-closets', article: true, kicker: 'Zone guide',
    title: 'Wardrobe and closet lighting: wireless LEDs with sensor',
    description: 'Light a wardrobe or walk-in closet without rewiring: rechargeable LED bars with sensor, where to place the light and which sensor to choose.',
    h1: 'Wardrobes and closets',
    lead: 'The goal: see your clothes clearly without light in your eyes. The winning combination is soft light, a sensor and a diffuser.',
    body: `<h2>Where to put the light</h2><ul><li>Under the top shelf, aimed inwards.</li><li>On the sides (aluminium profiles) for even light.</li><li>Avoid a bare source at eye level without a diffuser.</li></ul>
<h2>Which sensor?</h2><ul><li>PIR motion: the simplest and most common.</li><li>Door opening: perfect for cupboards, clean trigger.</li><li>USB rechargeable: handy where there is no power.</li></ul>
<div class="en-card"><p class="en-flag">Our pick · no cable</p><h3>OUILA 60 cm rechargeable bar with sensor</h3><p>No cable to run: magnetic mounting, 5,000 mAh battery charged over USB-C, three colour temperatures (3000, 4000 and 6500K) and switch-on by sensor when the door opens.</p>${uk('B0F18462GT', 'OUILA rechargeable bar 60 cm')}</div>
<h2>Product ideas</h2>
${card('Easy fitting', 'Rechargeable closet light + sensor', 'Simple to fit', 'rechargeable LED wardrobe light motion sensor')}
${card('Diffusion', 'LED strip + aluminium profile', 'Premium diffusion', 'aluminium LED profile wardrobe diffuser')}
${card('Trigger', 'Door contact switch (lighting)', 'Clean trigger', 'door contact switch wardrobe light')}
${card('Line of light', 'High-density 24 V LED strip', 'Even line of light', '24V high density LED strip 4000K')}
${note}
<p>Read also: <a href="/en/guides/motion-sensors/">motion sensors</a>, <a href="/en/rooms/bedroom/">bedroom lighting</a> and <a href="/en/zones/">all zones</a>.</p>`,
  },
  {
    path: 'guides/motion-sensors', article: true, kicker: 'Technical guide',
    title: 'Motion sensor lighting: placement and settings',
    description: 'Where to place a motion sensor (closet, stairs, garage, outdoors), which time-delay settings, and which sensor lights or E27 sensor bulbs to choose.',
    h1: 'Motion sensors',
    lead: 'A good sensor means comfort (the light comes on by itself) and savings. The key is placement: angle, height and time delay.',
    body: `<h2>Placements that (usually) work</h2><ul><li>Hallway: on the ceiling, centred, short time delay.</li><li>Stairs: at the bottom or top, angled to cover the steps.</li><li>Garage: near the door, avoiding hidden areas.</li><li>Outdoors: under an overhang or roof, aimed at the walkway.</li></ul>
<h2>Useful settings</h2><ul><li>Time delay: 30–90 s for passing through, longer for a garage.</li><li>Dusk setting: prevents switching on in broad daylight.</li><li>Sensitivity: lower it if pets or cars trigger it too often.</li></ul>
<h2>E27 sensor bulb: no wiring</h2>
<p>A sensor bulb screws into an ordinary holder and lights up as you pass, then switches off after the time delay. Handy for an entrance, hallway, cellar, garage or stairwell.</p><ul>
<li><strong>Passive infrared (PIR):</strong> detects the heat of a moving body; the sensor must “see” the area (not through a shade). For a bare holder or an open wall light.</li>
<li><strong>Radar (microwave):</strong> also detects through a glass globe; more sensitive, it can sometimes react through a thin partition. For an enclosed ceiling light.</li></ul>
<p><strong>The switch must stay ON:</strong> the bulb needs constant power to detect.</p>
<p>Check on the listing: detection range (shorter is enough for a hallway, longer for a garage), adjustable time delay, built-in dusk sensor, light output in lumens.</p>
<p>No holder? A rechargeable sensor bar sticks or clips on magnetically: see <a href="/en/zones/wardrobes-closets/">wardrobe lighting</a>. Outdoors, see the <a href="/en/articles/dusk-to-dawn-bulb/">dusk-to-dawn bulb</a>.</p>
<h2>Product ideas</h2>
${card('Hallways, garage', 'Indoor ceiling motion sensor', 'Hallways, garage', 'ceiling PIR motion sensor indoor')}
${card('Outdoor', 'Wall-mounted PIR sensor (outdoor)', 'Dusk setting + IP rating', 'outdoor PIR motion sensor wall IP65')}
${card('All-in-one', 'LED ceiling light with sensor', 'Simple, all-in-one', 'LED ceiling light with motion sensor')}
${card('Closets', 'Closet bar with sensor', 'Closets and wardrobes', 'rechargeable LED cabinet light motion sensor')}
${note}
<h2>Going further</h2><p>To adjust the mood, consider <a href="/en/guides/dimmable-led-bulbs/">dimmable bulbs</a>. For quality: <a href="/en/guides/cri-colour-rendering-index/">CRI</a> and <a href="/en/guides/colour-temperature-kelvin/">Kelvin</a>. Read also <a href="/en/guides/steinel-automatic-outdoor-lighting/">Steinel automatic outdoor lighting</a> and our brand pages <a href="/en/brands/steinel/">Steinel</a> and <a href="/en/brands/osram-ledvance/">OSRAM</a>.</p>`,
  },
  {
    path: 'guides/led-accessories', kicker: 'Guides',
    title: 'LED lighting accessories: holders, dimmers, strips',
    description: 'Bypass capacitors, base adapters, aluminium profiles for LED strip, compatible dimmers and the parts to finish an installation.',
    h1: 'LED lighting accessories',
    lead: 'Beyond the bulb: trailing-edge dimmers, no-neutral bypass, strip profiles, Steinel sensors, IP ratings in the bathroom. Find the right products by room, or size things before you buy.',
    body: `<div class="en-grid">
<a class="en-tile" href="/en/guides/dimmable-led-bulbs/"><strong>Dimmers and dimmable bulbs</strong><span>Avoid flicker: trailing edge, minimum load, the right LED bulbs.</span></a>
<a class="en-tile" href="/en/guides/gu10-led-flicker-dimmer-diagnosis/"><strong>GU10 / E27 flicker diagnosis</strong><span>Dimmer and bulb compatibility, step by step.</span></a>
<a class="en-tile" href="/en/articles/installing-led-strip/"><strong>LED strip and power supply</strong><span>Length, voltage drop, aluminium profile and wattage.</span></a>
<a class="en-tile" href="/en/guides/ip-ratings-bathroom-outdoor/"><strong>IP and bathrooms</strong><span>IP44/IP65 near the mirror or the shower.</span></a>
<a class="en-tile" href="/en/guides/smart-switch-no-neutral-compatibility/"><strong>No-neutral smart switches</strong><span>Bypass and minimum load.</span></a>
<a class="en-tile" href="/en/rooms/"><strong>Bulbs by room</strong><span>Kitchen, bathroom, hallway: lumens, Kelvin and products room by room.</span></a>
</div>
<p>Troubleshooting: <a href="/en/guides/smart-led-troubleshooting/">smart LED troubleshooting</a> and <a href="/en/guides/error-codes/">error codes</a>.</p>`,
  },
  {
    path: 'guides', kicker: 'Guides',
    title: 'LED lighting guides: lumens, Kelvin, CRI, bases, IP',
    description: 'All our guides to choosing an LED bulb: lumens vs watts, colour temperature, CRI, bases, IP ratings, dimming and smart lighting. The basics to buy right first time.',
    h1: 'Technical guides',
    lead: 'The basics to buy right first time. Each guide also suggests products (Amazon partner links).',
    body: `<h2>The basics</h2><div class="en-grid">
<a class="en-tile" href="/en/guides/lumens-vs-watts/"><strong>Lumens vs watts</strong><span>Light output explained simply, with benchmarks by room.</span></a>
<a class="en-tile" href="/en/guides/colour-temperature-kelvin/"><strong>Colour temperature (Kelvin)</strong><span>Warm, neutral, cool white: the look and where to use it.</span></a>
<a class="en-tile" href="/en/guides/cri-colour-rendering-index/"><strong>CRI</strong><span>Why true colours make all the difference.</span></a>
<a class="en-tile" href="/en/guides/bulb-bases-b22-e26-e27-gu10/"><strong>Bulb bases</strong><span>Screw, bayonet or pins: identify the format before buying.</span></a>
<a class="en-tile" href="/en/guides/e27-vs-b22/"><strong>E27 vs B22</strong><span>Screw or bayonet: not interchangeable.</span></a>
<a class="en-tile" href="/en/guides/ip-ratings-bathroom-outdoor/"><strong>IP ratings</strong><span>IP44, IP65: damp rooms and outdoors.</span></a>
<a class="en-tile" href="/en/guides/dimmable-led-bulbs/"><strong>Dimmable bulbs</strong><span>Definition and dimmer compatibility.</span></a>
<a class="en-tile" href="/en/guides/motion-sensors/"><strong>Motion sensors</strong><span>Closets, hallways, garage, outdoors: placement and settings.</span></a>
<a class="en-tile" href="/en/guides/led-accessories/"><strong>LED accessories</strong><span>Dimmers, bypass, profiles, IP.</span></a>
</div>
<h2>Smart lighting</h2><div class="en-grid">
<a class="en-tile" href="/en/guides/smart-switch-no-neutral-compatibility/"><strong>No-neutral smart switch</strong><span>Bypass and minimum load.</span></a>
<a class="en-tile" href="/en/guides/matter-thread-matrix-philips-hue-aqara-govee/"><strong>Matter, Thread, Zigbee matrix</strong><span>Hue, Aqara, Govee and the main ecosystems.</span></a>
<a class="en-tile" href="/en/guides/gu10-led-flicker-dimmer-diagnosis/"><strong>GU10 / E27 flicker diagnosis</strong><span>Flicker, buzzing, ghosting.</span></a>
<a class="en-tile" href="/en/guides/smart-led-troubleshooting/"><strong>Smart LED troubleshooting</strong><span>Common faults and fixes.</span></a>
<a class="en-tile" href="/en/guides/error-codes/"><strong>Smart lighting error codes</strong><span>Hue, Shelly, IKEA, Govee, WiZ and more.</span></a>
<a class="en-tile" href="/en/guides/smart-bulb-deal/"><strong>Smart bulb deals</strong><span>Base, protocol, lumens: what makes a real bargain.</span></a>
<a class="en-tile" href="/en/guides/smart-bulb-gift-ideas/"><strong>Smart bulb gift ideas</strong><span>Starter kits that work.</span></a>
</div>
<h2>Outdoor and seasonal</h2><div class="en-grid">
<a class="en-tile" href="/en/guides/steinel-automatic-outdoor-lighting/"><strong>Steinel automatic outdoor lighting</strong><span>Products compared on their spec sheets.</span></a>
<a class="en-tile" href="/en/guides/christmas-lights-indoor-outdoor/"><strong>Christmas lights indoors and out</strong><span>IP, low voltage, consumption.</span></a>
<a class="en-tile" href="/en/guides/morning-light-therapy-winter/"><strong>Morning light therapy in winter</strong><span>Light boxes and wake-up lights.</span></a>
<a class="en-tile" href="/en/guides/long-winter-evenings-night-lights/"><strong>Long evenings and night lights</strong><span>Warm white, safe night lights.</span></a>
</div>
<h2>Troubleshooting and technical tools</h2><div class="en-grid"><a class="en-tile" href="/en/guides/led-flickering-buzzing-glowing-troubleshooting/"><strong>LED troubleshooting</strong><span>Flicker when off, buzzing, ghost glow.</span></a><a class="en-tile" href="/en/guides/dimmer-led-bulb-matrix-gu10-e27-e14/"><strong>Dimmer × LED matrix</strong><span>Leading or trailing edge, GU10/E27/E14.</span></a><a class="en-tile" href="/en/guides/smart-lighting-kit-configurator-no-neutral/"><strong>Smart lighting kit configurator</strong><span>No neutral, bypasses, hubs.</span></a><a class="en-tile" href="/en/guides/bathroom-zones-ip44-ip65/"><strong>Bathroom zones and IP</strong><span>Zones 0, 1, 2, IP44 / IP65.</span></a><a class="en-tile" href="/en/tests/imalent-gr35/"><strong>Imalent GR35 test</strong><span>Torch, green laser, powerbank case.</span></a></div>
<h2>Paint and comparisons</h2><div class="en-grid"><a class="en-tile" href="/en/paint/"><strong>Interior paint guide</strong><span>Types, rooms, preparation, paint and light.</span></a><a class="en-tile" href="/en/best/"><strong>Best LED picks</strong><span>Bulbs, spotlights, strips, sensors.</span></a></div>
<p>Tools: <a href="/en/tools/lux-lumen-watt-room-converter/">lux, lumen and watt converter</a> and <a href="/en/tools/halogen-led-equivalence-gu10-e27-lumens/">halogen to LED equivalence</a>. Step-by-step: <a href="/en/tutorials/">tutorials</a>.</p>`,
  },
];

export const TR_LOT4_EN: EnPage[] = [...ARTICLES_LOT4_EN, ...ROOMS_LOT4_EN, ...ZONES_GUIDES_LOT4_EN];

const FR_OF: Record<string, string> = {
  'articles/led-bulb-buzzing-humming': '/articles/ampoule-led-gresille-bourdonne/',
  'articles/led-bulb-flickering': '/articles/ampoule-led-qui-clignote/',
  'articles/led-bulb-glowing-when-off': '/articles/ampoule-led-reste-allumee-faiblement/',
  'articles/choosing-recessed-downlights': '/articles/choisir-spots-encastrables/',
  'articles/patio-lighting': '/articles/eclairage-terrasse/',
  'articles/led-savings-calculation': '/articles/economies-led-calcul/',
  'articles/gu10-or-gu5-3': '/articles/gu10-ou-gu5-3/',
  'articles/installing-led-strip': '/articles/installer-ruban-led/',
  'articles/bedside-lamp': '/articles/lampe-de-chevet/',
  'articles/grow-light-houseplants': '/articles/lampe-horticole/',
  'articles/best-g9-led-bulb': '/articles/meilleure-ampoule-g9/',
  'rooms/kitchen': '/pieces/cuisine/', 'rooms/living-room': '/pieces/salon/', 'rooms/garage': '/pieces/garage/',
  'rooms/bathroom': '/pieces/salle-de-bain/', 'rooms/garden': '/pieces/jardin/', 'rooms/home-office': '/pieces/bureau-adulte/',
  'rooms/kids-study': '/pieces/bureau-enfant/', 'rooms/wine-cellar': '/pieces/cave-a-vin/', 'rooms/bedroom': '/pieces/chambre-adulte/',
  'rooms/kids-bedroom': '/pieces/chambre-enfant/', 'rooms/toilet': '/pieces/toilettes/', 'rooms/parking': '/pieces/parking/',
  'rooms/vaulted-cellar': '/pieces/cave-voutee/',
  'zones/outdoor-entrance-path': '/zones/entree-allee-exterieure/', 'zones/stairs': '/zones/escaliers/',
  'zones/wardrobes-closets': '/zones/placards-dressing/', 'guides/motion-sensors': '/guides/detecteurs-de-mouvement/',
  'guides/led-accessories': '/guides/consommables-accessoires-eclairage-led/', guides: '/guides/',
};
export const LOT4_EN_GROUPS = TR_LOT4_EN.map((p) => ({ fr: encodeURI(FR_OF[p.path]), en: `/en/${p.path}/` }));
