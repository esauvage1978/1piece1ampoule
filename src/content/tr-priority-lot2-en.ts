// Priority EN pages lot 2 (Oct 2026). Sources: FR pages, hiver.ts, marques, catalog-fr.json — checked 30/10/2026.
import type { EnPage } from './en';

const uk = (asin: string, label: string) =>
  `<a class="en-amz" href="https://www.amazon.co.uk/dp/${asin}?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="${asin}" data-product="${label}">Check price on Amazon UK</a>`;
const note = `<p class="en-note">Listing data from manufacturer/Amazon pages checked 30 October 2026. Prices change — verify before buying. As an Amazon Associate I earn from qualifying purchases.</p>`;

const err = (p: Omit<EnPage, 'article'> & { kicker?: string }): EnPage => ({
  ...p,
  article: true,
  kicker: p.kicker ?? 'Error code guide',
});

export const TR_PRIORITY_LOT2_EN: EnPage[] = [
  err({
    path: 'guides/error-code/hue-bridge-orange-led',
    title: 'Hue Bridge orange LED (no Internet link)',
    description: 'Orange Bridge LED: local bulbs may work but cloud and voice assistants fail. DHCP, DNS, cable.',
    h1: 'Hue Bridge orange LED (no Internet)',
    lead: 'The Bridge LED stays orange instead of blue; bulbs may respond locally but cloud automations fail.',
    body: `<p><strong>Symptom:</strong> orange LED; local control sometimes OK; cloud/Alexa/Google fail.</p>
<p><strong>Likely causes:</strong> no DHCP (Dynamic Host Configuration Protocol) on the LAN, blocked DNS, parental filter on Signify servers, bad Ethernet cable.</p>
<h2>Steps</h2><ol>
<li>Verify Internet on the same LAN port with another device.</li>
<li>Reboot the router with the Bridge connected.</li>
<li>Allow the Bridge MAC in the router (label on unit).</li>
<li>Try public DNS (1.1.1.1 / 8.8.8.8) if DNS is filtered.</li>
<li>Still orange with new cable: Philips Hue support.</li>
</ol>
<p><strong>Tools:</strong> spare Ethernet cable.</p>
<p><strong>Safety:</strong> do not open the Bridge — 230 V inside.</p>
<p>Difficulty 2/5 · 20–40 min · £0–22. Support: <a href="https://www.philips-hue.com/en-gb/support" rel="nofollow noopener" target="_blank">philips-hue.com</a>.</p>`,
  }),
  err({
    path: 'guides/error-code/hue-bridge-50-device-limit',
    title: 'Hue Bridge: cannot add new bulbs (Zigbee limit)',
    description: 'Pairing fails near ~50 Hue lights: remove ghosts, pair near Bridge, plan channels, second Bridge.',
    h1: 'Hue Bridge: Zigbee device limit',
    lead: 'The app refuses to pair a blinking bulb, often after ~50 lights or too many Zigbee routers.',
    body: `<p><strong>Symptom:</strong> pairing failure while bulb blinks.</p>
<p><strong>Likely causes:</strong> Zigbee mesh saturated (Hue Bridge v2 typically supports about <strong>50 devices</strong>); misplaced repeater bulbs; ghost entries in the Hue app (Settings → Devices).</p>
<h2>Steps</h2><ol>
<li>Delete unused lights in the Hue app.</li>
<li>Pair within 3 m of Bridge, then relocate bulb.</li>
<li>Check Zigbee channel vs your router’s 2.4 GHz Wi-Fi — avoid overlap where possible.</li>
<li>Reset bulb and retry — see <a href="/en/guides/error-code/hue-bulb-blinking-reset/">Hue blinking reset guide</a>.</li>
<li>Large install: second Hue Bridge on separate network.</li>
</ol>
<p>Difficulty 3/5 · 30–60 min · £0–55.</p>`,
  }),
  err({
    path: 'guides/error-code/ikea-dirigera-tradfri-migration',
    title: 'DIRIGERA: TRÅDFRI lights missing after migration',
    description: 'IKEA DIRIGERA migration: keep TRÅDFRI on, re-search devices, reset orphans.',
    h1: 'DIRIGERA: TRÅDFRI migration',
    lead: 'After moving to DIRIGERA, some TRÅDFRI bulbs or sensors no longer appear.',
    body: `<p><strong>Symptom:</strong> missing TRÅDFRI devices post-migration.</p>
<p><strong>Likely causes:</strong> interrupted migration; two hubs active; out-of-range during transfer.</p>
<h2>Steps</h2><ol>
<li>Run IKEA migration wizard (TRÅDFRI powered).</li>
<li>Power off old gateway when done.</li>
<li>Move missing devices closer; search again.</li>
<li>Reset and re-pair orphans.</li>
<li>IKEA support if migration fails twice.</li>
</ol>
<p>Difficulty 2/5 · 30–60 min · £0.</p>`,
  }),
  err({
    path: 'guides/error-code/ikea-tradfri-gateway-offline',
    title: 'IKEA TRÅDFRI gateway offline',
    description: 'TRÅDFRI gateway offline: Ethernet, USB power, mDNS, QR re-add.',
    h1: 'TRÅDFRI gateway offline',
    lead: 'IKEA app shows gateway disconnected; wall switches may still work locally.',
    body: `<p><strong>Symptom:</strong> gateway offline in app.</p>
<p><strong>Likely causes:</strong> Ethernet unplugged; weak USB supply; <strong>mDNS</strong> (Multicast DNS — local device discovery) blocked on router.</p>
<h2>Steps</h2><ol>
<li>Check power LED.</li>
<li>Replug Ethernet to main router; confirm link LED on the gateway.</li>
<li>Reboot router and gateway.</li>
<li>Re-add with QR code.</li>
<li><strong>Factory reset</strong> only if needed — you must re-pair every TRÅDFRI accessory afterwards.</li>
</ol>
<p>Difficulty 2/5 · 10–25 min · £0.</p>`,
  }),
  err({
    path: 'guides/error-code/nanoleaf-invalid-layout',
    title: 'Nanoleaf: invalid layout or missing panel',
    description: 'Nanoleaf layout rejected: reseat links, find grey panel, firmware, panel limit.',
    h1: 'Nanoleaf: invalid layout',
    lead: 'App will not validate the shape or one panel stays grey.',
    body: `<p><strong>Symptom:</strong> invalid layout or grey panel.</p>
<p><strong>Likely causes:</strong> loose link; dead panel; over panel limit; old firmware.</p>
<h2>Steps</h2><ol>
<li>Reseat every connector until click.</li>
<li>Remove panels one-by-one to find fault.</li>
<li>Update controller firmware.</li>
<li>Respect max panels per kit.</li>
<li>Warranty for dead panel.</li>
</ol>
<p>Difficulty 2/5 · 15–35 min · £0. <a href="https://help.nanoleaf.me/" rel="nofollow noopener" target="_blank">Nanoleaf Help Center — layout troubleshooting</a>.</p>`,
  }),
  err({
    path: 'guides/error-code/schneider-wiser-matter-thread',
    title: 'Schneider Wiser Matter pairing failed (Thread)',
    description: 'Wiser Matter QR fails: firmware, Thread border router, VLAN isolation.',
    h1: 'Wiser Matter: Apple Home failed',
    lead: 'Wiser dimmer Matter QR fails or hangs in Apple Home.',
    body: `<p><strong>Symptom:</strong> Matter pairing failure.</p>
<p><strong>Likely causes:</strong> old firmware; no Thread border router; device already paired.</p>
<h2>Steps</h2><ol>
<li>Update via Wiser by SE.</li>
<li>Ensure <strong>Thread</strong> border router on LAN (radio used with Matter).</li>
<li>Reset Matter on device.</li>
<li>Disable VLAN isolation.</li>
<li>Check Schneider Matter device list.</li>
</ol>
<p>Difficulty 3/5 · 25–45 min · £0.</p>`,
  }),
  err({
    path: 'guides/error-code/shelly-dimmer-2-wifi-offline',
    title: 'Shelly Dimmer 2 Wi-Fi offline',
    description: 'Shelly Dimmer 2 offline: 2.4 GHz Wi-Fi, AP mode, DHCP reservation.',
    h1: 'Shelly Dimmer 2 Wi-Fi offline',
    lead: 'Module unresponsive in app; physical dimmer may still work.',
    body: `<p><strong>Symptom:</strong> cloud offline.</p>
<p><strong>Likely causes:</strong> Wi-Fi password change; 5 GHz only; DHCP IP change.</p>
<p><strong>Note:</strong> local dimming may still work when the cloud is down; MQTT (machine-to-machine messaging) and Home Assistant are optional advanced setups.</p>
<h2>Steps</h2><ol>
<li>Enable <strong>2.4 GHz Wi-Fi</strong>.</li>
<li>Join the Shelly access point: hold the device input ~5 s until AP mode, connect to <strong>Shelly-XXXXXX</strong>, open <strong>192.168.33.1</strong> in the browser (see Shelly docs).</li>
<li>Reconfigure Wi-Fi credentials.</li>
<li>DHCP reservation in router.</li>
<li>Local MQTT/Home Assistant backup (advanced users only).</li>
</ol>
<p><strong>Safety:</strong> turn off the circuit if you open the wall box to reach the module terminals.</p>
<p>Difficulty 2/5 · 15–30 min · £0. <a href="https://kb.shelly.cloud/knowledge-base/shelly-dimmer-2-wifi-setup" rel="nofollow noopener" target="_blank">Shelly Wi-Fi setup (official)</a>.</p>`,
  }),
  err({
    path: 'guides/error-code/led-dimmer-ghosting',
    title: 'LED dimmer ghosting when off',
    description: 'LED glow when dimmer OFF: bypass, LED dimmer, neutral check.',
    h1: 'LED dimmer ghosting',
    lead: 'LEDs glow faintly when dimmer is OFF.',
    body: `<p><strong>Symptom:</strong> ghost glow at OFF.</p>
<p><strong>Likely causes:</strong> dimmer leakage; shared neutral; sensitive LEDs.</p>
<h2>Steps</h2><ol>
<li>Install manufacturer bypass (e.g. Philips Ledstrip bypass) (~£4).</li>
<li>Replace with LED-rated dimmer.</li>
<li>No halogen/LED mix on circuit.</li>
<li>Check neutral at rose.</li>
<li>Electrician if persists.</li>
</ol>
<p><strong>Safety:</strong> LED-rated bipolar capacitor only; no live work.</p>
<p>Difficulty 2/5 · 15–40 min · £4–22. Dimmable basics: <a href="/en/articles/dimmable-or-non-dimmable-bulb/">dimmable vs non-dimmable</a>.</p>`,
  }),
  err({
    path: 'guides/error-code/led-dimmer-low-flicker',
    title: 'LED dimmer flicker at low brightness',
    description: 'Flicker between 5–25% brightness: raise minimum trim, try trailing-edge dimmer, match bulbs. Isolate power before trim adjustment.',
    h1: 'LED dimmer low-end flicker',
    lead: 'Visible flicker between 5% and 25%.',
    body: `<p><strong>Symptom:</strong> low-end flicker.</p>
<p><strong>Likely causes:</strong> <strong>Phase-cut dimmer</strong> mismatch (leading edge cuts at the start of the AC wave; trailing edge cuts at the end — both are “phase-cut” types); cheap drivers; minimum trim set too low.</p>
<p><strong>Safety:</strong> isolate the circuit at the consumer unit before adjusting dimmer trim or swapping the dimmer.</p>
<h2>Steps</h2><ol>
<li>Raise minimum trim.</li>
<li>Try other dimmable LED brand.</li>
<li>Trailing edge if supported.</li>
<li>No strips on wall dimmer without driver.</li>
<li>Matched dimmer + bulb range.</li>
</ol>
<p>Difficulty 2/5 · 15–35 min · £0–30.</p>`,
  }),
  err({
    path: 'guides/error-code/wiz-bulb-dimmer-flicker',
    title: 'WiZ bulb flicker with wall dimmer',
    description: 'WiZ + wall dimmer: 100% on switch, LED dimmer, or app-only dimming.',
    h1: 'WiZ bulb wall dimmer flicker',
    lead: 'Flicker or dropout when a wall dimmer controls a <strong>WiZ</strong> smart bulb (Signify connected range).',
    body: `<p><strong>Symptom:</strong> flicker with external dimmer.</p>
<p><strong>Likely causes:</strong> incompatible dimmer; dual dimmer + app control.</p>
<h2>Steps</h2><ol>
<li>Wall dimmer at 100%; dim in WiZ app.</li>
<li>Certified LED dimmer listed for WiZ.</li>
<li>Simple switch + app.</li>
<li>Check “dimmable” on box.</li>
<li>Compensation capacitor only if you see <a href="/en/guides/error-code/led-dimmer-ghosting/">ghost glow when off</a>, not for flicker while dimming.</li>
</ol>
<p><strong>Expected result:</strong> stable light at your target brightness without flicker.</p>
<p><strong>Safety:</strong> isolate circuit before dimmer swap.</p>
<p>Compare radios: <a href="/en/articles/smart-bulb-wifi-or-zigbee/">Wi-Fi vs Zigbee smart bulbs</a>.</p>
<p>Difficulty 2/5 · 15–35 min · £18–40.</p>`,
  }),
  {
    path: 'guides/steinel-automatic-outdoor-lighting',
    article: true,
    kicker: 'Buying guide',
    title: 'Steinel automatic outdoor lighting: 4 datasheet products compared',
    description: 'Steinel L 12 M, NightMatic 2000, IS 360-1, XSolar LH-N: IP, loads, thresholds from manufacturer sheets.',
    h1: 'Automate entrance lighting with Steinel',
    lead: 'Four Steinel refs from 2echoix compared on manufacturer data (23/10/2026). Only XSolar LH-N is a self-contained light; L 12 M has no detector.',
    body: `<h2>Our pick</h2>
<p>For an existing door light: <strong>L 12 M + E27 LED ~800 lm at 2700–3000 K + NightMatic 2000</strong> (about €80.58 excl. bulb). For motion only: <strong>IS 360-1</strong> under porch.</p>
<p><a href="https://www.awin1.com/pclick.php?p=46381369701&a=3127458&m=31151" rel="sponsored nofollow noopener" target="_blank">L 12 M at 2echoix (€57.19, 22/10/2026)</a></p>
<h2>Datasheet table</h2>
<table><thead><tr><th>Product</th><th>Role</th><th>Flux</th><th>IP</th><th>K</th><th>Load</th><th>Detection</th><th>2echoix</th></tr></thead><tbody>
<tr><td>L 12 M 069155</td><td>Wall lamp, no sensor</td><td>From E27 bulb</td><td>IP44; <strong>IK03</strong> (impact rating 0.3 J)</td><td>Bulb</td><td>Max 60 W</td><td>–</td><td><a href="https://www.awin1.com/pclick.php?p=46381369701&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€57.19</a></td></tr>
<tr><td>NightMatic 2000 550417</td><td>Dusk switch</td><td>None</td><td>IP54</td><td>–</td><td>1000 W; 4 LED max; 0.8 W</td><td>2–30 lx</td><td><a href="https://www.awin1.com/pclick.php?p=46359010299&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€23.39</a></td></tr>
<tr><td>IS 360-1 DE 032845</td><td>Ceiling PIR (passive infrared motion sensor)</td><td>None</td><td>IP54</td><td>–</td><td>350 W LED if &gt;8 W/bulb</td><td>360° Ø8/4 m</td><td><a href="https://www.awin1.com/pclick.php?p=46381369825&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€41.99</a></td></tr>
<tr><td>XSolar LH-N 035730</td><td>Solar house number</td><td>4 LED marker</td><td>IP44</td><td>4000 K CRI 80–89</td><td><strong>LiFePO4</strong> (lithium iron phosphate battery)</td><td>Dusk 2 lx</td><td><a href="https://www.awin1.com/pclick.php?p=45843200190&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€70.59</a></td></tr>
</tbody></table>
<p class="en-note">Steinel datasheets 23/10/2026; EU outlet prices 22/10/2026 — verify local stock and shipping. Affiliate Awin (EU retailer). Only XSolar LH-N emits useful light alone.</p>
<h2>Combinations</h2>
<ul>
<li><strong>Dusk to dawn:</strong> L 12 M + NightMatic — shield sensor from lamp spill.</li>
<li><strong>Passage only:</strong> IS 360-1 at 2.5–4 m under cover.</li>
<li><strong>Number without wiring:</strong> XSolar LH-N (marker, not path lighting).</li>
</ul>
<h2>Outdoor wiring (UK)</h2>
<ul>
<li>Exposed rain: minimum <strong>IP44</strong> — see <a href="/en/guides/ip-ratings-bathroom-outdoor/">IP guide</a>.</li>
<li>NightMatic / IS 360-1: live + neutral; follow manufacturer max load and RCD protection on outdoor circuits (BS 7671).</li>
<li>Respect LED load limits on datasheets.</li>
</ul>
<p><a href="/en/brands/steinel/">Steinel brand page</a>.</p>`,
  },
  {
    path: 'guides/christmas-lights-indoor-outdoor',
    article: true,
    kicker: 'Seasonal guide',
    title: 'Christmas lights indoors and out: IP, transformer, safety, consumption',
    description: 'Christmas lights: IP44 outdoors, low voltage, EN 60598-2-20, RCD, consumption and timers.',
    h1: 'Christmas lights indoors and outdoors',
    lead: 'Fairy lights need the right IP rating, transformer and runtime — same as any luminaire.',
    body: `<h2>At a glance</h2><table><thead><tr><th>Use</th><th>Require</th></tr></thead><tbody><tr><td>Indoor tree</td><td>LED, CE, EN 60598-2-20</td></tr><tr><td>Outdoors</td><td>IP44+ (IP65 exposed), low-voltage transformer</td></tr><tr><td>Socket</td><td>RCD-protected outdoor circuit</td></tr></tbody></table><h2>Indoors</h2><ul><li>LED only near dry needles.</li><li>Warm 2200–2700 K — <a href="/en/guides/colour-temperature-kelvin/">Kelvin</a>.</li><li>Respect max chains in manual.</li></ul><h2>Outdoors</h2><ul><li>IP44 under cover; IP65 in rain.</li><li>24 V transformer; uncoiled outdoor extension.</li></ul><h2>Consumption</h2><p>kWh = W × hours ÷ 1000. Example: 6 W × 6 h × 40 d = 1.44 kWh.</p><h2>Examples</h2><div class="en-card"><p class="en-flag">Outdoor IP65</p><h3>ZOTOYI 15 m S14 festoon</h3><p>Shatterproof S14, IP65 claimed for exposed façades.</p><a class="en-amz" href="https://www.amazon.co.uk/dp/B0972HH7C6?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0972HH7C6" data-product="ZOTOYI 15 m S14 festoon">Check price on Amazon UK</a></div><div class="en-card"><p class="en-flag">Balcony IP44 24 V</p><h3>10 m G40 festoon with timer</h3><p>24 V, IP44, dimmable timer per listing.</p><a class="en-amz" href="https://www.amazon.co.uk/dp/B0CZ9B4C2B?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0CZ9B4C2B" data-product="10 m G40 festoon with timer">Check price on Amazon UK</a></div><p class="en-note">Listing data from manufacturer/Amazon pages checked 30 October 2026. Prices change — verify before buying. As an Amazon Associate I earn from qualifying purchases.</p><p>FR tutorials: <a href="https://1piece1ampoule.fr/tutoriels/programmer-guirlande-lumineuse-exterieure/">program at dusk</a>.</p>`,
  },
  {
    path: 'guides/morning-light-therapy-winter',
    article: true,
    kicker: 'Winter wellbeing',
    title: 'Morning light and light therapy: 10,000 lux, distance, dawn alarms',
    description: 'Therapy lamp vs dawn simulator vs smart bulbs; lux at distance; winter morning routine.',
    h1: 'Light therapy and morning light in winter',
    lead: 'Three different tools — and lux numbers only hold at the distance in the datasheet.',
    body: `<h2>Three tools</h2><table><thead><tr><th>Tool</th><th>Role</th><th>Level</th></tr></thead><tbody><tr><td>Therapy lamp</td><td>Face-on session</td><td>10,000 lux at stated distance</td></tr><tr><td>Dawn simulator</td><td>Gradual wake</td><td>~300 lux max (HF3520, Philips)</td></tr><tr><td>Smart bulbs</td><td>Scheduled ramp</td><td>Depends on lm and distance</td></tr></tbody></table><h2>Distance</h2><p>Lux falls with distance squared. 10,000 lux at 10 cm ≠ 10,000 lux at arm's length.</p><h2>Therapy lamp use</h2><ul><li>Often ~30 min at ~10,000 lux in morning — follow manual.</li><li>Offset gaze; CE medical device, UV-free.</li><li>See a doctor if eye disease or bipolar disorder.</li></ul><h2>Picks</h2><div class="en-card"><p class="en-flag">Light therapy</p><h3>Beurer TL 30</h3><p>10,000 lux at ~10 cm, 6500 K, CRI 80, 3-year warranty.</p><a class="en-amz" href="https://www.amazon.co.uk/dp/B00MOIWOAK?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B00MOIWOAK" data-product="Beurer TL 30">Check price on Amazon UK</a></div><div class="en-card"><p class="en-flag">Hue wake-up</p><h3>Hue White Ambiance E27 1100 lm</h3><p>EPREL 2187086: 1100 lm, 8.1 W, class D; Bluetooth.</p><a class="en-amz" href="https://www.amazon.co.uk/dp/B0FJ8VXHRX?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0FJ8VXHRX" data-product="Hue White Ambiance E27 1100 lm">Check price on Amazon UK</a></div><p class="en-note">Listing data from manufacturer/Amazon pages checked 30 October 2026. Prices change — verify before buying. As an Amazon Associate I earn from qualifying purchases.</p>`,
  },
  {
    path: 'brands/tapo',
    article: true,
    kicker: 'Brand guide',
    title: 'Tapo (TP-Link) review: L530E Wi-Fi bulb, 2-year warranty',
    description: 'Tapo L530E: 806 lm, 8.7 W, class F, Wi-Fi 2.4 GHz, pros/cons and support facts.',
    h1: 'Tapo (TP-Link): our view of the brand',
    lead: 'Tapo is TP-Link’s smart home line. The Wi-Fi colour L530E is the no-hub alternative to Philips Hue for a first room.',
    body: `<h2>Official L530E data (TP-Link France, 23/10/2026)</h2>
<table><tbody>
<tr><th>Flux / power</th><td>806 lm, 8.7 W (~93 lm/W), 60 W equivalent</td></tr>
<tr><th>Energy class</th><td>F (<strong>EPREL</strong> — EU energy label registry)</td></tr>
<tr><th>Colour / CRI</th><td>2500–6500 K white + colour; CRI (colour rendering index) ≥ 80</td></tr>
<tr><th>Radio</th><td>Wi-Fi 2.4 GHz only — no Zigbee hub</td></tr>
<tr><th>Dimming</th><td>1–100% in app</td></tr>
<tr><th>Lifetime</th><td>15,000 h</td></tr>
</tbody></table>
<h2>Strengths</h2><ul><li>No hub; Alexa/Google.</li><li>Holiday mode, schedules, sun sync.</li><li>Remembers last state after outage.</li><li>Low entry price.</li></ul>
<h2>Limits</h2><ul><li>Class F efficiency vs Hue White Ambiance class D.</li><li>Each bulb uses a Wi-Fi slot on the router.</li><li>806 lm is enough for roughly <strong>12–15 m²</strong>; tight for a large open-plan room.</li><li>Wall switch must stay ON.</li></ul>
<h2>Warranty (France terms — check UK seller)</h2>
<p>TP-Link Tapo <strong>2-year</strong> commercial warranty; support France 01 82 88 35 35. Statutory UK rights apply against your retailer.</p>
<h2>Our view</h2>
<p>Best entry to connected lighting for 1–3 bulbs. Beyond that, <strong>Zigbee</strong> (low-power mesh protocol) systems like Philips Hue scale better — see <a href="/en/articles/smart-bulb-wifi-or-zigbee/">Wi-Fi vs Zigbee</a>.</p>
<p><a class="en-amz" href="https://www.amazon.co.uk/dp/B08GDC99PX?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B08GDC99PX" data-product="Tapo L530E E27 colour single">Check price — Tapo L530E single</a> <a class="en-amz" href="https://www.amazon.co.uk/dp/B08Z4KCJZY?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B08Z4KCJZY" data-product="Tapo L530E 2-pack">Check price — Tapo L530E 2-pack</a></p>
<p class="en-note">Listing data from manufacturer/Amazon pages checked 30 October 2026. Prices change — verify before buying. As an Amazon Associate I earn from qualifying purchases.</p>
<p>Compare: <a href="/en/brands/philips-hue/">Philips Hue</a> — choose Tapo for a low-cost Wi-Fi start; Hue if you plan many rooms on Zigbee.</p>`,
  },
  {
    path: 'tools/lux-lumen-watt-room-converter',
    article: true,
    kicker: 'Tool',
    title: 'Lux ↔ lumens ↔ LED watts converter by room size',
    description: 'Bidirectional calculator: lux, lumens and LED watts for m² floor area with wall reflection factor K.',
    h1: 'Lux ↔ lumens ↔ LED watts converter',
    lead: 'Relate target lux on the floor to total lumens and LED wattage for a given room size and wall colour.',
    body: `<p>Link <strong>lux</strong> (light on a surface), <strong>lumens</strong> (total output) and <strong>LED watts</strong> for a floor area. Factor <strong>K</strong> accounts for wall reflectance. Edit any field — others recalculate.</p>
<p>See <a href="/en/guides/lumens-vs-watts/">lumens vs watts</a> and <a href="/en/tutorials/how-much-light-per-room-lux-foot-candles/">lux per room tutorial</a>.</p>
<h2>Calculator</h2>
<div class="mt-5 grid gap-4 sm:grid-cols-2" id="conv-lux-tool">
<label class="block text-sm font-semibold sm:col-span-2">Room type
<select id="cv-room" class="mt-1 w-full rounded-xl border border-stone-300 bg-white p-2"><option value="salon" data-lux="125" data-m2="20">Living room (125 lx, 20 m²)</option><option value="cuisine" data-lux="200" data-m2="12">Kitchen (200 lx, 12 m²)</option><option value="chambre" data-lux="100" data-m2="14">Bedroom (100 lx, 14 m²)</option><option value="sdb" data-lux="175" data-m2="6">Bathroom (175 lx, 6 m²)</option><option value="bureau" data-lux="300" data-m2="10">Office (300 lx, 10 m²)</option><option value="garage" data-lux="300" data-m2="18">Garage (300 lx, 18 m²)</option><option value="couloir" data-lux="100" data-m2="8">Hallway (100 lx, 8 m²)</option></select></label>
<label class="block text-sm font-semibold sm:col-span-2">Wall colour (reflection K)
<select id="cv-walls" class="mt-1 w-full rounded-xl border border-stone-300 bg-white p-2"><option value="blanc" data-k="2">Light / white walls (K ≈ 2)</option><option value="beige" data-k="1.85">Beige or light grey (K ≈ 1.85)</option><option value="couleur" data-k="1.55">Medium colour (K ≈ 1.55)</option><option value="sombre" data-k="1.25">Dark walls (K ≈ 1.25)</option></select></label>
<label class="block text-sm font-semibold">Target lux<input id="cv-lux" type="number" min="20" max="3000" step="5" value="125" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
<label class="block text-sm font-semibold">Floor area (m²)<input id="cv-m2" type="number" min="0.5" max="120" step="0.1" value="20" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
<label class="block text-sm font-semibold">Lumens (total flux)<input id="cv-lm" type="number" min="50" max="150000" step="50" value="5000" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
<label class="block text-sm font-semibold">LED efficacy (lm/W)<input id="cv-lmw" type="number" min="60" max="150" step="5" value="100" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
<label class="block text-sm font-semibold sm:col-span-2">Total LED power (W)<input id="cv-w" type="number" min="1" max="5000" step="1" value="50" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
</div>
<p class="mt-4 text-sm" id="cv-hint" aria-live="polite"></p>
<p class="text-xs text-stone-500">Formula: lumens ≈ lux × area × K. Assumes even distribution — single pendant leaves darker corners.</p>
<script>
(function(){var lock=null;function el(id){return document.getElementById(id);}function num(v){return parseFloat(String(v).replace(',','.'))||0;}
function fmt(n){return Math.round(n).toLocaleString('en-GB');}
function kVal(){var s=el('cv-walls');return parseFloat(s.options[s.selectedIndex].getAttribute('data-k'))||2;}
function fromLux(){var lux=num(el('cv-lux').value),m2=num(el('cv-m2').value),K=kVal(),lmw=num(el('cv-lmw').value)||100;var lm=lux*m2*K;el('cv-lm').value=Math.round(lm);el('cv-w').value=Math.max(1,Math.round(lm/lmw));el('cv-hint').textContent='≈ '+fmt(lux)+' lx × '+m2.toFixed(1)+' m² × K '+K+' → '+fmt(lm)+' lm → ≈ '+fmt(lm/lmw)+' W LED ('+lmw+' lm/W)';}
function fromLm(){var lm=num(el('cv-lm').value),m2=num(el('cv-m2').value),K=kVal(),lmw=num(el('cv-lmw').value)||100;var lux=m2>0&&K>0?lm/(m2*K):0;el('cv-lux').value=Math.round(lux);el('cv-w').value=Math.max(1,Math.round(lm/lmw));el('cv-hint').textContent=fmt(lm)+' lm → ≈ '+fmt(lux)+' lx (area '+m2.toFixed(1)+' m², K '+K+')';}
function fromW(){var w=num(el('cv-w').value),lmw=num(el('cv-lmw').value)||100;el('cv-lm').value=Math.round(w*lmw);fromLm();}
el('cv-room').addEventListener('change',function(){var o=this.options[this.selectedIndex];el('cv-lux').value=o.getAttribute('data-lux');el('cv-m2').value=o.getAttribute('data-m2');fromLux();});
el('cv-walls').addEventListener('change',function(){fromLux();});
el('cv-lmw').addEventListener('input',function(){if(lock==='w')fromW();else fromLux();});
el('cv-lux').addEventListener('input',function(){if(lock)return;lock='lux';fromLux();lock=null;});
el('cv-m2').addEventListener('input',function(){if(lock)return;lock='lux';fromLux();lock=null;});
el('cv-lm').addEventListener('input',function(){if(lock)return;lock='lm';fromLm();lock=null;});
el('cv-w').addEventListener('input',function(){if(lock)return;lock='w';fromW();lock=null;});
fromLux();})();
</script>
<ul class="mt-4"><li><a href="/en/tools/halogen-led-equivalence-gu10-e27-lumens/">Halogen → LED equivalence</a></li>
<li><a href="/en/guides/lumens-vs-watts/">Lumens vs watts</a></li>
<li><a href="https://1piece1ampoule.fr/outils/convertisseur-lux-lumens-watts-surface/">French interactive page</a></li></ul>`,
  },
  {
    path: 'tutorials',
    article: true,
    kicker: 'Tutorials',
    title: 'Lighting tutorials: lux, LED strips, GU10 and smart switches',
    description: 'Nine step-by-step tutorials in English. E26/E27 and GU10 bases for UK and North America.',
    h1: 'Tutorials',
    lead: 'Step-by-step guides for real wiring and layout. In the UK, check B22 or E27 bases; in Canada and the US, E26 is common alongside E27 — always match voltage on the bulb.',
    body: `<h2>English tutorials (full text on this site)</h2><ol>
<li><a href="/en/tutorials/how-much-light-per-room-lux-foot-candles/">Calculate room lighting in lux and lumens</a> — needs neutral understanding of room size.</li>
<li><a href="/en/tutorials/under-cabinet-led-strip-kitchen/">Fit under-cabinet LED strip in the kitchen</a> — 24 V strip, driver sizing.</li>
<li><a href="/en/tutorials/light-basement-shed-without-power/">Light a basement or shed without mains power</a> — battery and small solar.</li>
<li><a href="/en/tutorials/replace-halogen-gu10-mr16-with-led/">Replace halogen GU10 or MR16 with LED</a> — 230 V GU10 vs 12 V MR16 trap.</li>
<li><a href="/en/tutorials/smart-switch-no-neutral/">Smart switch without neutral wire</a> — bypass and LED flicker.</li>
<li><a href="/en/tutorials/pair-zigbee-no-neutral-module-sonoff-aqara/">Pair a no-neutral Zigbee module (SONOFF, Aqara)</a> — hub, routers, range.</li>
<li><a href="/en/tutorials/home-office-lighting-lux-cri-kelvin/">Home office lighting: lux, CRI, Kelvin</a> — 500 lux on the desk, no glare.</li>
<li><a href="/en/tutorials/outdoor-christmas-lights-timer-dusk-smart-plug/">Automate outdoor Christmas lights</a> — timer, dusk sensor or smart plug.</li>
<li><a href="/en/tutorials/fix-led-fairy-lights-section-out/">Fix LED fairy lights with a section out</a> — diagnosis by symptom.</li>
</ol>`,
  },
  {
    path: 'zones',
    article: true,
    kicker: 'Zone guides',
    title: 'Lighting by zone: worktop, mirror, entry, stairs, wardrobe',
    description: 'Five home zones with lux/lumen targets and product picks; table and cards.',
    h1: 'Zones & layout',
    lead: 'Numbered needs per zone — then a vetted product angle for each.',
    body: `<p>Some spots need precise light: face-level at the mirror, shadow-free worktops, automatic stairs.</p>
<table><thead><tr><th>Zone</th><th>Target</th><th>Pick</th></tr></thead><tbody>
<tr><td><a href="/en/zones/kitchen-worktop/">Kitchen worktop</a></td><td>500 lux, ≥420 lm/m, 4000 K</td><td>DA LIGHT 56 cm bar (1000 lm/m calc.) <a class="en-amz" href="https://www.amazon.co.uk/dp/B07H7HB6LG?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B07H7HB6LG" data-product="DA LIGHT bar">Check price on Amazon UK</a></td></tr>
<tr><td><a href="/en/zones/bathroom-mirror/">Bathroom mirror</a></td><td>300–500 lux face, IP44, 3000–4000 K</td><td>Lucide ONNO mirror bar <a class="en-amz" href="https://www.amazon.co.uk/dp/B07B4CPRDQ?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B07B4CPRDQ" data-product="Lucide ONNO">Check price on Amazon UK</a></td></tr>
<tr><td><a href="https://1piece1ampoule.fr/zones/entree-allee-exterieure/">Entry &amp; driveway</a></td><td>2000–3000 lm, IP65, motion</td><td>OREiN 24 W flood <a class="en-amz" href="https://www.amazon.co.uk/dp/B0BPX1ZZXJ?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0BPX1ZZXJ" data-product="OREiN flood">Check price on Amazon UK</a></td></tr>
<tr><td><a href="https://1piece1ampoule.fr/zones/escaliers/">Stairs</a></td><td>150 lux, auto at both ends</td><td>OSRAM radar E27 <a class="en-amz" href="https://www.amazon.co.uk/dp/B0FGD6H3NZ?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0FGD6H3NZ" data-product="OSRAM motion E27">Check price on Amazon UK</a></td></tr>
<tr><td><a href="https://1piece1ampoule.fr/zones/placards-dressing/">Wardrobe</a></td><td>Wireless motion bar</td><td>OUILA 60 cm rechargeable <a class="en-amz" href="https://www.amazon.co.uk/dp/B0F18462GT?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0F18462GT" data-product="OUILA bar">Check price on Amazon UK</a></td></tr>
</tbody></table>
<div class="en-grid">
<a class="en-tile" href="/en/zones/kitchen-worktop/"><strong>Kitchen worktop</strong><span>500 lux under cabinets.</span></a>
<a class="en-tile" href="/en/zones/bathroom-mirror/"><strong>Bathroom mirror</strong><span>Face-level IP44 light.</span></a>
<a class="en-tile" href="https://1piece1ampoule.fr/zones/entree-allee-exterieure/"><strong>Entry (FR)</strong><span>Driveway and porch.</span></a>
<a class="en-tile" href="https://1piece1ampoule.fr/zones/escaliers/"><strong>Stairs (FR)</strong><span>Motion automation.</span></a>
<a class="en-tile" href="https://1piece1ampoule.fr/zones/placards-dressing/"><strong>Wardrobe (FR)</strong><span>Motion bars.</span></a>
</div>
<p>Method: <a href="/en/tutorials/how-much-light-per-room-lux-foot-candles/">lux per room</a>.</p>`,
  },
  {
    path: 'zones/bathroom-mirror',
    article: true,
    kicker: 'Zone guide',
    title: 'Bathroom mirror lighting: lux, IP44, BS 7671 zones',
    description: 'Face-level mirror light levels, UK bathroom zones (BS 7671), CRI for makeup, wall bars and outlet mirrors with dated prices.',
    h1: 'Bathroom mirror lighting',
    lead: 'Ceiling downlight shadows the face. Shaving and makeup need front light at eye level.',
    body: `<h2>Essentials</h2><ul>
<li><strong>Position:</strong> bar above mirror full width, or vertical sconces at eye height (most even).</li>
<li><strong>Level:</strong> 300–500 lux at the face — <a href="/en/tutorials/how-much-light-per-room-lux-foot-candles/">lux guide</a>.</li>
<li><strong>Colour:</strong> 3000–4000 K; cooler looks flat on skin.</li>
<li><strong>CRI (colour rendering index) ≥ 90</strong> for makeup — <a href="/en/guides/cri-colour-rendering-index/">CRI guide</a>.</li>
</ul>
<h2>IP zones (UK — BS 7671 bathroom zones)</h2><ul>
<li><strong>Zone 0</strong> (inside bath/shower): SELV 12 V only — no mains lamp.</li>
<li><strong>Zone 1</strong> (above bath/shower to 2.25 m): IPX4 minimum.</li>
<li><strong>Zone 2</strong> (0.6 m around zone 1): IPX4; use a registered electrician if unsure.</li>
<li><strong>Outside zones:</strong> IP44 is prudent near splashes at the basin.</li>
</ul>
<p>In France, similar volumes exist under NF C 15-100 — this English page prioritises UK rules; French readers can use the <a href="https://1piece1ampoule.fr/zones/miroir-salle-de-bain/">French mirror zone guide</a>.</p>
<h2>Compared wall lights</h2>
<table><thead><tr><th>Product</th><th>Type</th><th>IP</th><th>K</th></tr></thead><tbody>
<tr><td>Lucide ONNO 11 W 60 cm <a class="en-amz" href="https://www.amazon.co.uk/dp/B07B4CPRDQ?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B07B4CPRDQ" data-product="Lucide ONNO">Check price on Amazon UK</a></td><td>Over-mirror bar</td><td>IP44</td><td>3000 K</td></tr>
<tr><td>SILAMP 12 W <a class="en-amz" href="https://www.amazon.co.uk/dp/B0BBLYJCFF?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0BBLYJCFF" data-product="SILAMP 12 W">Check price on Amazon UK</a></td><td>Wall</td><td>IP44</td><td>6000–8000 K (cool)</td></tr>
</tbody></table>
<h2>LED mirrors (outlet — EU prices 22/10/2026, verify local stock)</h2>
<table><thead><tr><th>Model</th><th>Size</th><th>Price</th></tr></thead><tbody>
<tr><td>Coast anti-fog LED mirror</td><td>70×50 cm</td><td><a href="https://www.awin1.com/pclick.php?p=46317416057&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€79.99</a></td></tr>
<tr><td>Mirlux round dimmable</td><td>Ø60 cm</td><td><a href="https://www.awin1.com/pclick.php?p=46246025083&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€109.00</a></td></tr>
<tr><td>Mirlux frameless 120×60</td><td>120×60 cm</td><td><a href="https://www.awin1.com/pclick.php?p=46390597656&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€139.99</a></td></tr>
</tbody></table>
<p class="en-note">Outlet mirrors sold via EU affiliate partners; prices in euros — check shipping to the UK. As an Amazon Associate I earn from qualifying purchases on Amazon links below.</p>
<p><strong>Our pick:</strong> Lucide ONNO — IP44, 3000 K, 60 cm width for a standard basin mirror.</p>
<p>Whole bathroom: <a href="/en/guides/ip-ratings-bathroom-outdoor/">IP ratings guide</a>. All zones: <a href="/en/zones/">zones hub</a>.</p>`,
  },
  {
    path: 'about',
    article: true,
    kicker: 'About',
    title: 'About 1 pièce 1 ampoule and Emmanuel Sauvage',
    description: 'Who writes the site, how products are selected, Amazon Associate disclosure.',
    h1: 'A site to light every room, without jargon',
    lead: 'Independent lighting guides for real homes — specs first, hype never.',
    body: `<p><strong>1 pièce 1 ampoule</strong> is edited by <strong>Emmanuel Sauvage</strong>. Choosing a bulb should take two minutes; between lumens, Kelvin, CRI (colour rendering index), bases and dimmers, people often end up with the wrong SKU. This site splits each room into <strong>zones</strong> (task, mood, circulation) and gives tone, power and fitting type for each.</p>
<h2>How we pick products</h2><ul>
<li>Start from the <strong>need</strong> (zone, problem, base), then find products that fit.</li>
<li>Compare <strong>manufacturer specs</strong>: lumens, Kelvin, CRI, IP, dimmer compatibility.</li>
<li>Favour established brands with a sensible budget alternative when it exists.</li>
<li>Links are <strong>checked</strong> when pages are updated.</li></ul>
<p>We do not lab-test every item. Selections rely on datasheets and lighting principles. Wrong fit? Your retailer’s returns policy applies (Amazon UK, etc.).</p>
<h2>How the site is funded</h2>
<p>As an Amazon Associate I earn from qualifying purchases via our links — <strong>no extra cost to you</strong>. Advice is not bought: a page that says “you do not need to buy anything” is a good page. Details: <a href="/en/affiliate-disclosure/">affiliate disclosure</a>.</p>
<h2>Corrections</h2>
<p>Spotted an error? <a href="/en/contact/">Contact</a> — we fix quickly.</p>`,
  },
  {
    path: 'articles',
    article: true,
    kicker: 'Articles',
    title: 'LED guides & troubleshooting — article hub',
    description: 'Compare bulbs, fix dimmer flicker and ghost glow, pick smart Wi-Fi or Zigbee — English articles with UK Amazon links where relevant.',
    h1: 'LED lighting articles',
    lead: 'Concrete guides for UK homes: B22 and E27 bases, trailing-edge dimmers, and smart bulbs — pick a section below.',
    body: `<p class="en-note">Troubleshooting entries point to our English error-code guides; compare and buying guides are fully on this site.</p>
<h2>Troubleshooting</h2><div class="en-grid"><a class="en-tile" href="/en/guides/error-code/led-dimmer-low-flicker/"><strong>LED flicker at low dim</strong><span>Phase-cut dimmer trim</span></a><a class="en-tile" href="/en/guides/error-code/led-dimmer-ghosting/"><strong>Ghost glow</strong><span>LED glows when off</span></a><a class="en-tile" href="/en/guides/error-code/wiz-bulb-dimmer-flicker/"><strong>WiZ + wall dimmer</strong><span>Smart bulb flicker</span></a><a class="en-tile" href="/en/articles/led-heat-lifespan/"><strong>LED heat & lifespan</strong><span>Heat and lifetime</span></a></div>
<h2>Compare</h2><p class="text-sm text-stone-600">Choose a radio or dimmer compatibility before you buy a bag of bulbs.</p><div class="en-grid"><a class="en-tile" href="/en/articles/smart-bulb-wifi-or-zigbee/"><strong>Wi-Fi vs Zigbee</strong><span>Connected bulb radio</span></a><a class="en-tile" href="/en/articles/dimmable-or-non-dimmable-bulb/"><strong>Dimmable or not</strong><span>Dimmer compatibility</span></a><a class="en-tile" href="/en/guides/bulb-bases-b22-e26-e27-gu10/"><strong>B22 vs E27 vs GU10</strong><span>Identify your base</span></a></div>
<h2>Best picks</h2><div class="en-grid"><a class="en-tile" href="/en/articles/oven-fridge-bulb/"><strong>Oven & fridge bulb</strong><span>300 °C oven lamp</span></a><a class="en-tile" href="/en/articles/vintage-filament-bulb/"><strong>Filament vintage</strong><span>Edison LED shapes</span></a><a class="en-tile" href="/en/articles/dusk-to-dawn-bulb/"><strong>Dusk-to-dawn</strong><span>Photocell bulb</span></a></div>
<p>More articles: <a href="/en/articles/">browse the full English list</a> · French catalogue: <a href="https://1piece1ampoule.fr/articles/" hreflang="fr">1piece1ampoule.fr/articles</a>.</p>`,
  },
  {
    path: 'articles/smart-bulb-wifi-or-zigbee',
    article: true,
    kicker: 'Article',
    title: 'Smart bulb Wi-Fi or Zigbee: Tapo vs Philips Hue',
    description: 'No-hub Wi-Fi vs Zigbee with Bridge: pros, limits, Matter, mistakes and verdict.',
    h1: 'Smart bulb: Wi-Fi (Tapo) or Zigbee (Hue)?',
    lead: 'Two radios, two budgets, two scaling models — pick before you buy a bag of bulbs.',
    body: `<p>You want phone or voice control, but <strong>Wi-Fi</strong>, <strong>Zigbee</strong> (low-power mesh), <strong>Bluetooth</strong> and <strong>Matter</strong> (common smart-home layer) blur together. Here are the two common paths: <strong>Wi-Fi without a hub</strong> (Tapo) and <strong>Zigbee with a hub</strong> (Philips Hue).</p><h2>Wi-Fi (Tapo and similar)</h2><ul><li><strong>How it works:</strong> bulb joins your router directly.</li><li><strong>Pros:</strong> no hub, low entry price, Alexa/Google.</li><li><strong>Cons:</strong> each bulb uses Wi-Fi; latency; some features need cloud.</li><li><strong>Best for:</strong> 1–6 bulbs, one room, first try.</li></ul><h2>Zigbee (Philips Hue)</h2><ul><li><strong>How it works:</strong> mesh between bulbs via <strong>Hue Bridge</strong>.</li><li><strong>Pros:</strong> fast with many devices; local control; huge catalog.</li><li><strong>Cons:</strong> higher cost; hub required (in starter kits).</li><li><strong>Best for:</strong> whole-home automation.</li></ul><h2>Matter?</h2><p>Matter lets ecosystems share devices. Recent Hue and Tapo SKUs adopt it — reduces lock-in.</p><h2>Mistakes</h2><ul><li>Smart bulb behind a wall dimmer — feed full voltage; dim in app.</li><li>Wall switch OFF — bulb unreachable; use wireless switch or leave ON.</li><li>Ignoring tunable white — often more useful than colour alone.</li></ul><h2>Verdict</h2><ul><li><strong>1–3 rooms, budget:</strong> Tapo L530E.</li><li><strong>Whole home:</strong> Hue White &amp; Color starter kit.</li></ul><h2>Verified picks</h2><div class="en-card"><p class="en-flag">Wi-Fi · no hub</p><h3>Tapo L530E E27 colour</h3><p>8.7 W, dimmable, Wi-Fi 2.4 GHz.</p><a class="en-amz" href="https://www.amazon.co.uk/dp/B08GDC99PX?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B08GDC99PX" data-product="Tapo L530E E27 colour">Check price on Amazon UK</a></div><div class="en-card"><p class="en-flag">Hue starter</p><h3>Hue White & Color kit E27</h3><p>Two bulbs, Bridge, remote; Zigbee mesh.</p><a class="en-amz" href="https://www.amazon.co.uk/dp/B099NRLRG3?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B099NRLRG3" data-product="Hue White & Color kit E27">Check price on Amazon UK</a></div><div class="en-card"><p class="en-flag">Hue tunable</p><h3>Hue White Ambiance 1100 lm</h3><p>EPREL 2187086; wake-up routines.</p><a class="en-amz" href="https://www.amazon.co.uk/dp/B0FJ8VXHRX?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0FJ8VXHRX" data-product="Hue White Ambiance 1100 lm">Check price on Amazon UK</a></div><p class="en-note">Listing data from manufacturer/Amazon pages checked 30 October 2026. Prices change — verify before buying. As an Amazon Associate I earn from qualifying purchases.</p><h2>FAQ</h2><p><strong>Smart bulb on a dimmer?</strong> No — full voltage; dim in app.</p><p><strong>Hue Bridge required?</strong> For full ecosystem and many bulbs, yes; Bluetooth works for ~10 in one room.</p>`,
  },
  {
    path: 'articles/dimmable-or-non-dimmable-bulb',
    article: true,
    kicker: 'Article',
    title: 'Dimmable or non-dimmable LED: which to buy',
    description: 'Dimmable means dimmer-compatible. When you need it, old dimmer traps, step-dim and WarmGlow.',
    h1: 'Dimmable or non-dimmable: the difference',
    lead: 'The number-one return reason for LEDs is dimmer mismatch — both sides must agree.',
    body: `<p><strong>E27</strong> (large screw cap) and <strong>GU10</strong> (twist-lock spotlight pins) bulbs must say <strong>dimmable</strong> if a wall dimmer controls them. <strong>Dimmable</strong> means the LED driver can follow a dimmer’s chopped mains waveform. <strong>Non-dimmable</strong> on a dimmer flickers, buzzes or dies early.</p><h2>When you need dimmable</h2><ul><li>Rotary or trailing-edge wall dimmer.</li><li>Evening mood in living/dining rooms.</li></ul><h2>When you do not</h2><ul><li>Simple on/off switch — dimmable works but costs more.</li><li><strong>Smart bulb</strong> — dim inside the bulb; remove or lock dimmer at 100%.</li></ul><h2>Old dimmer trap</h2><p>Halogen dimmers expect 40–60 W minimum; 7 W LEDs sit below — use LED-rated dimmer with min-load trim.</p><h2>Step dim (no dimmer wiring)</h2><p>Some bulbs cycle 100% → 50% → 10% via switch toggles (Philips SceneSwitch).</p><h2>WarmGlow</h2><p>Philips WarmGlow shifts 2700 K towards 2200 K as you dim — incandescent feel.</p><h2>Picks on dimmer circuits</h2><div class="en-card"><p class="en-flag">E27 dimmable</p><h3>Philips 100 W eq dimmable E27</h3><p>High output, dims smoothly on compatible dimmer.</p><a class="en-amz" href="https://www.amazon.co.uk/dp/B09F9MZ4PH?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B09F9MZ4PH" data-product="Philips 100 W eq dimmable E27">Check price on Amazon UK</a></div><div class="en-card"><p class="en-flag">GU10 WarmGlow</p><h3>Philips GU10 WarmGlow</h3><p>Reference for cosy dimmed spots.</p><a class="en-amz" href="https://www.amazon.co.uk/dp/B073FT1QT2?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B073FT1QT2" data-product="Philips GU10 WarmGlow">Check price on Amazon UK</a></div><div class="en-card"><p class="en-flag">Dimmer upgrade</p><h3>Legrand LED dimmer</h3><p>Replace legacy dimmer when flicker persists.</p><a class="en-amz" href="https://www.amazon.co.uk/dp/B07MRBVNWM?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B07MRBVNWM" data-product="Legrand LED dimmer">Check price on Amazon UK</a></div><p class="en-note">Listing data from manufacturer/Amazon pages checked 30 October 2026. Prices change — verify before buying. As an Amazon Associate I earn from qualifying purchases.</p><h2>FAQ</h2><p><strong>Dimmable without dimmer?</strong> Yes, always at 100%.</p><p><strong>Non-dimmable on dimmer?</strong> Never — flicker and early failure.</p><p>Still flickering? See <a href="/en/guides/error-code/led-dimmer-low-flicker/">low-end dimmer flicker guide</a> or <a href="/en/guides/gu10-led-flicker-dimmer-diagnosis/">GU10 diagnosis</a>.</p>`,
  },
  {
    path: 'articles/vintage-filament-bulb',
    article: true,
    kicker: 'Article',
    title: 'Vintage filament LED: shapes, glass, lumens',
    description: 'A60, ST64, globe; clear vs amber; glare and dimmer pitfalls; picks.',
    h1: 'Vintage filament LED bulbs',
    lead: 'Decorative filaments need the same lux math as plain LEDs — match <strong>E27</strong> screw or <strong>B22</strong> bayonet before you buy.',
    body: `<p><strong>Filament</strong> LEDs mimic Edison bulbs: visible “filament” through clear or amber glass. Pretty in open shades — but check lumens, not just shape.</p><h2>Shapes</h2><ul><li><strong>A60</strong> — versatile pear.</li><li><strong>ST64</strong> — long Edison for bare pendants.</li><li><strong>G95/G125</strong> — globe over tables.</li><li><strong>Candle E14</strong> — small screw for chandeliers.</li></ul><h2>Clear vs amber</h2><p>Clear: brighter, 2700 K. Amber: 1800–2200 K candle look — decorative, not main room light. Mount pendants high enough to avoid bare-filament glare at eye level.</p><h2>Pitfalls</h2><ol><li>Underestimate lumens — aim ≥806 lm clear glass for primary light.</li><li>Non-dimmable on dimmer — see <a href="/en/articles/dimmable-or-non-dimmable-bulb/">dimmable guide</a>.</li><li>Glare — bare filament at eye height; use globe or diffuse.</li></ol><h2>Uses</h2><p>Table pendant, open shade lamp, outdoor dusk filament for porch presence — see <a href="/en/guides/lumens-vs-watts/">lumens vs watts</a> for sizing.</p><h2>Picks</h2><div class="en-card"><p class="en-flag">Filament E27</p><h3>Philips filament E27 60 W eq (2-pack)</h3><p>Clear glass, 2700 K; <strong>CRI (colour rendering index)</strong> listed on pack.</p><a class="en-amz" href="https://www.amazon.co.uk/dp/B08HV4WG3Y?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B08HV4WG3Y" data-product="Philips filament E27 60 W eq (2-pack)">Check price on Amazon UK</a></div><div class="en-card"><p class="en-flag">ST64 dusk</p><h3>Lucide ST64 dusk E27</h3><p>Edison look + photocell for porch.</p><a class="en-amz" href="https://www.amazon.co.uk/dp/B07TSKP9JC?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B07TSKP9JC" data-product="Lucide ST64 dusk E27">Check price on Amazon UK</a></div><div class="en-card"><p class="en-flag">Dimmable ST64</p><h3>Philips dimmable filament</h3><p>For dimmed pendants.</p><a class="en-amz" href="https://www.amazon.co.uk/dp/B09F9MZ4PH?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B09F9MZ4PH" data-product="Philips dimmable filament">Check price on Amazon UK</a></div><p class="en-note">Listing data from manufacturer/Amazon pages checked 30 October 2026. Prices change — verify before buying. As an Amazon Associate I earn from qualifying purchases.</p><h2>FAQ</h2><p><strong>Enough light?</strong> Clear ≥806 lm yes; amber mostly mood.</p>`,
  },
  {
    path: 'articles/oven-fridge-bulb',
    article: true,
    kicker: 'Article',
    title: 'Oven (300 °C) and fridge bulbs: how to choose',
    description: 'Oven-specific high-temp lamp vs fridge E14 LED; safety and sizing.',
    h1: 'Oven and fridge bulbs',
    lead: 'Two appliances, two specs — heat rating matters more than lumens in the oven.',
    body: `<p>Oven or fridge bulb failed? <strong>Never</strong> a standard LED in an oven. Fridge needs a compact E14 LED.</p><h2>Oven: heat first</h2><p>Ovens reach 250–300 °C. Standard LED electronics fail above ~80–100 °C. You need an <strong>oven-rated lamp to 300 °C</strong>.</p><h3>How to match</h3><ol><li><strong>Base:</strong> usually <strong>E14</strong>, sometimes G9/E27 — read old bulb or manual.</li><li><strong>Shape:</strong> tubular T22/T25 — glass cover must refit.</li><li><strong>Power:</strong> 15–40 W halogen equivalent is plenty.</li><li>Box must say <strong>300 °C</strong>.</li></ol><h3>Safe swap</h3><ul><li>Cold oven, isolated circuit.</li><li>Remove glass cover (rubber glove helps).</li><li>Do not touch halogen glass with bare fingers.</li></ul><h2>Fridge</h2><p>Cold and humid — small <strong>E14 LED 2–4 W</strong> (200–300 lm), neutral/cool white for food colour.</p><h2>Range hood</h2><p>Often E14 or GU10/G4 — moderate heat; LED OK after checking base.</p><h2>Picks</h2><div class="en-card"><p class="en-flag">Oven E14 300°C</p><h3>YIIFELL oven E14 (4-pack)</h3><p>Rated for oven temperatures per listing.</p><a class="en-amz" href="https://www.amazon.co.uk/dp/B0DDK55MF7?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0DDK55MF7" data-product="YIIFELL oven E14 (4-pack)">Check price on Amazon UK</a></div><div class="en-card"><p class="en-flag">Oven E14</p><h3>Caldarax oven lamp (2-pack)</h3><p>300 °C oven-specific.</p><a class="en-amz" href="https://www.amazon.co.uk/dp/B0D6BJZJ56?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0D6BJZJ56" data-product="Caldarax oven lamp (2-pack)">Check price on Amazon UK</a></div><div class="en-card"><p class="en-flag">Fridge E14</p><h3>DiCUNO E14 3 W (2-pack)</h3><p>Compact fridge replacement.</p><a class="en-amz" href="https://www.amazon.co.uk/dp/B0B7W9VRB7?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0B7W9VRB7" data-product="DiCUNO E14 3 W (2-pack)">Check price on Amazon UK</a></div><p class="en-note">Listing data from manufacturer/Amazon pages checked 30 October 2026. Prices change — verify before buying. As an Amazon Associate I earn from qualifying purchases.</p><h2>FAQ</h2><p><strong>Normal LED in oven?</strong> No — driver will fail and may shatter.</p><p>Bases: <a href="https://1piece1ampoule.fr/articles/e27-ou-b22/">E27 vs B22</a> (FR).</p>`,
  },
  {
    path: 'articles/led-heat-lifespan',
    article: true,
    kicker: 'Article',
    title: 'LED heat and lifespan: normal warmth vs early failure',
    description: 'Why LEDs fail before 15,000 h: enclosed fittings, drivers, dimmers; how to choose for longevity.',
    h1: 'LED heat: normal or not, and making them last',
    lead: 'Warm to the touch is fine; too hot to hold signals the wrong lamp or fitting.',
    body: `<p>LEDs run cooler than halogen, but heat still kills drivers. About 60–70% of input power becomes heat — less total watts, so less heat overall.</p><h2>Normal temperature</h2><p>Base <strong>warm 50–70 °C</strong> after an hour is normal. Too hot to touch or smelling hot plastic is not.</p><h2>Why 15,000 h claims fail early</h2><ul><li><strong>Enclosed fitting</strong> — no airflow; pick “enclosed rated” bulbs.</li><li><strong>Downlights in insulation</strong> — leave air gap or use fire hood.</li><li><strong>Upside-down pendant</strong> — heat rises into driver.</li><li><strong>Frequent switching</strong> with wrong sensor bulb.</li><li><strong>Bad dimmer match</strong> stresses driver.</li></ul><h2>What actually fails</h2><p>The LED chip lasts; <strong>electrolytic capacitors</strong> in the driver dry out with heat.</p><h2>Buy for longevity</h2><ol><li>Brand with real warranty (Philips, Ledvance…).</li><li>Right lumens, not oversized in small globe — <a href="/en/tutorials/how-much-light-per-room-lux-foot-candles/">size the room</a>.</li><li>Special cases: <a href="/en/articles/oven-fridge-bulb/">oven bulb</a>, outdoor IP.</li><li>Motion duty: use motion-rated lamp.</li></ol><h2>L70 fade</h2><p>End of rated life = 70% of initial lumens — room feeling dimmer is real.</p><h2>Examples</h2><a class="en-amz" href="https://www.amazon.co.uk/dp/B01KHIM7OG?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B01KHIM7OG" data-product="Philips E27 806 lm">Check price on Amazon UK</a><a class="en-amz" href="https://www.amazon.co.uk/dp/B0DGPZCMG6?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0DGPZCMG6" data-product="Enclosed-rated LED example">Check price on Amazon UK</a><a class="en-amz" href="https://www.amazon.co.uk/dp/B0FGD6H3NZ?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0FGD6H3NZ" data-product="OSRAM motion E27">Check price on Amazon UK</a><p class="en-note">Listing data from manufacturer/Amazon pages checked 30 October 2026. Prices change — verify before buying. As an Amazon Associate I earn from qualifying purchases.</p><h2>FAQ</h2><p><strong>Enclosed fixture?</strong> Only if bulb says enclosed compatible.</p><p><strong>Normal warmth?</strong> Warm base yes; burning smell no.</p>`,
  },
];
