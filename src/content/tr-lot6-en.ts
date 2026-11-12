// EN lot 6 (12/11/2026): the last 7 FR pages without EN — 4 guides (2 interactive), 2 tools (interactive), Imalent GR35 test.
// Source: src/pages/guides/*.astro, src/pages/outils/*.astro, src/pages/tests/imalent-gr35.astro. Same facts and logic;
// French cost figures are labelled as French prices. No SVG reproduced.
import type { EnPage } from './en';

const ukS = (q: string, label: string) =>
  `<a class="en-amz" href="https://www.amazon.co.uk/s?k=${encodeURIComponent(q)}&tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-product="${label}">Search on Amazon UK</a>`;
const ukDp = (asin: string, label: string) =>
  `<a class="en-amz" href="https://www.amazon.co.uk/dp/${asin}?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="${asin}" data-product="${label}">Check price on Amazon UK</a>`;
const card = (flag: string, title: string, text: string, link: string) => `<div class="en-card"><p class="en-flag">${flag}</p><h3>${title}</h3><p>${text}</p>${link}</div>`;
const note = `<p class="en-note">Prices and availability change: check them before buying. As an Amazon Associate I earn from qualifying purchases.</p>`;
const SAFETY = `<p class="en-note"><strong>Mains voltage:</strong> any work on a ceiling light, dimmer or consumer unit is done <strong>with the power off</strong> (breaker off, absence of voltage checked). If you are not competent, do not touch mains terminals: call an electrician.</p>`;

const TROUBLESHOOT_EN: EnPage = {
  path: 'guides/led-flickering-buzzing-glowing-troubleshooting', article: true, kicker: 'Troubleshooting guide',
  title: 'LED bulb flickering when off, buzzing or staying on: troubleshooting',
  description: 'LED flickering when switched off, buzzing dimmer, LED strip that stays lit or overheats, Steinel sensor that will not switch off: causes, difficulty, time and fixes.',
  h1: 'LEDs: flickering, buzzing, ghost glow',
  lead: 'An LED bulb that flickers when off, a dimmer that buzzes, a strip that stays lit or runs hot, a Steinel sensor that no longer switches off: in most cases the cause is known and the fix takes a few minutes. The table gives the orders of magnitude; the sections explain what to do.',
  body: `<p>Part of our <a href="/en/guides/">lighting and troubleshooting guides</a>.</p>
<h2>Troubleshooting table</h2>
<table><thead><tr><th>Problem</th><th>Difficulty</th><th>Time</th><th>Cost (French prices)</th><th>Tools</th></tr></thead><tbody>
<tr><td>LED flickers or glows faintly when off (residual current)</td><td><strong>Easy (1/5)</strong></td><td>5 min</td><td>≈ €4</td><td>Insulated screwdriver, Legrand/Shelly bypass or 0.47 µF bipolar capacitor</td></tr>
<tr><td>Dimmer crackling or buzzing with LEDs</td><td><strong>Easy to medium (2/5)</strong></td><td>10–30 min</td><td>€15–35</td><td>Screwdriver, LED-compatible “all lamps” dimmer</td></tr>
<tr><td>LED strip stays faintly lit or overheats</td><td><strong>Medium (3/5)</strong></td><td>15–45 min</td><td>€5–25</td><td>Multimeter, correctly sized LED power supply, aluminium profile</td></tr>
<tr><td>Steinel sensor (NightMatic, IS…) stays on or will not switch off</td><td><strong>Easy (2/5)</strong></td><td>5–15 min</td><td>€0</td><td>Screwdriver, Steinel manual, masking the dusk sensor</td></tr>
</tbody></table>
<p>Times and costs are indicative for a confident DIYer; always switch the circuit off at the consumer unit before opening a junction box or a light fitting.</p>
${SAFETY}
<h2>The fix for ~95 % of ghost glow and flicker when off (≈ €4, 5 min)</h2>
<p>When the switch has a <strong>locator light</strong>, is a <strong>no-neutral smart switch</strong>, or a dimmer lets a tiny current through, a small current flows through the LED even when it is “off”. It charges its internal capacitor, then <strong>flashes</strong> or stays faintly lit.</p>
<p>Two equivalent options, fitted <strong>at the ceiling light</strong> (across live/neutral or as per the instructions), power off:</p>
<ul><li><strong>Bypass / compensation module</strong> from Legrand or Shelly (about €4 in France): designed for no-neutral modules and illuminated switches; wiring shown in the instructions.</li>
<li><strong>Bipolar capacitor</strong> 0.47 µF (450 V) in parallel with the lamp: the same principle of diverting the ghost current; check compatibility with your dimmer if you have one.</li></ul>
<p>Not confident? Replace the illuminated switch with one without a light, or use a <strong>smart bulb</strong> with the switch left on (see <a href="/en/guides/smart-switch-no-neutral-compatibility/">no-neutral smart switches</a> and our <a href="/en/best/smart-bulb/">smart bulb comparison</a>). Symptoms in detail: <a href="/en/articles/led-bulb-glowing-when-off/">bulb glowing faintly when off</a> and <a href="/en/articles/led-bulb-flickering/">bulb flickering</a>.</p>
<h2>Dimmer: buzzing and flicker</h2>
<p>The noise comes from the chopped voltage: the LED electronics vibrate. At low brightness, a <strong>non-dimmable</strong> bulb or a leading-edge dimmer causes buzzing and flicker.</p>
<ul><li><strong>Dimmable</strong> bulbs only.</li><li>An <strong>LED-compatible</strong> dimmer (trailing edge / “all lamps”) with an adjustable minimum.</li><li>Total load above the dimmer’s minimum (often 5–10 W with LEDs).</li></ul>
<p>Full guide: <a href="/en/guides/dimmable-led-bulbs/">dimmable bulbs and dimmers</a>. Article: <a href="/en/articles/led-bulb-buzzing-humming/">LED buzzing</a>.</p>
<h2>LED strip: stays lit or overheats</h2>
<p>A strip that <strong>stays slightly lit</strong> after switching off usually shares the same cause (residual current): a bypass at the power supply terminals or a switch without a locator light. <strong>Overheating</strong> of the strip or the supply comes instead from an undersized supply, too thin a cable, or a strip stuck on without an <strong>aluminium profile</strong> to dissipate heat.</p>
<ul><li>Power supply at <strong>125 %</strong> of the strip’s power, decent quality.</li><li>A continuous aluminium profile is a must for powerful strips.</li><li>Never coil a powered strip on itself (tangled = overheating).</li></ul>
<p><a href="/en/articles/installing-led-strip/">Installing an LED strip</a> · <a href="/en/tools/led-strip-power-supply-calculator/">LED strip calculator</a>.</p>
<h2>Steinel sensor stuck (light that will not switch off)</h2>
<p>On a <strong>NightMatic 2000</strong> or a recessed sensor such as the <strong>IS 360</strong>, a lamp that stays on in broad daylight is almost always down to the <strong>dusk sensor</strong>: it “sees” the light reflected from the lamp it controls, or nearby lighting. A time delay set to maximum can also look like a fault.</p>
<ul><li>Point the dusk cell <strong>away</strong> from the lamp’s beam (Steinel manual).</li><li>Lower the lux threshold or fit a small mask if the sensor picks up light from next door.</li><li>Check the maximum LED load (e.g. 350 W LED, > 8 W on the IS 360): an overload can disturb switch-off.</li><li>Reset time delay and sensitivity to minimum, then raise them gradually.</li></ul>
<p>Spec-sheet comparison and combinations: <a href="/en/guides/steinel-automatic-outdoor-lighting/">Steinel outdoor lighting</a>, <a href="/en/guides/motion-sensors/">motion sensors</a>, <a href="/en/brands/steinel/">Steinel brand page</a>.</p>
<h2>Product ideas</h2>
${card('Dimmer', 'LED-compatible “all lamps” dimmer', 'Reduces buzzing.', ukS('LED dimmer switch trailing edge', 'LED dimmer'))}
${card('Bypass', 'No-neutral bypass (Legrand, Shelly)', 'For ghost glow.', ukS('Shelly bypass LED no neutral', 'Bypass'))}
${card('Bulb', 'Dimmable E27 LED bulb, 806 lm', 'A reliable replacement.', ukS('dimmable E27 LED bulb 806 lumens', 'Dimmable E27'))}
${card('Capacitor', 'LED compensation capacitor 0.47 µF', 'Alternative to a bypass.', ukS('0.47uF 450V capacitor LED', 'Capacitor 0.47 µF'))}
${note}
<h2>Going further</h2><p>Quick test: swap the bulb to another fitting. If the fault follows the bulb, replace it; if not, look at the switch, dimmer or power supply. Guided diagnosis: <a href="/en/guides/gu10-led-flicker-dimmer-diagnosis/">GU10 / E27 flicker</a>. Halogen spots: <a href="/en/tutorials/replace-halogen-gu10-mr16-with-led/">GU10 / MR16 without flicker</a>. Bathrooms (IP, zones): <a href="/en/guides/bathroom-zones-ip44-ip65/">bathroom zones</a>.</p>`,
};

const BATH_ROOMS: [string, string, number, number][] = [
  ['living', 'Living room', 125, 20], ['kitchen', 'Kitchen', 200, 12], ['bedroom', 'Bedroom', 100, 14], ['bath', 'Bathroom (general)', 175, 6],
  ['mirror', 'Bathroom mirror', 400, 1.2], ['hallway', 'Hallway', 100, 8], ['office', 'Home office', 300, 10], ['garage', 'Garage', 300, 18],
];
const BATH_ZONES_EN: EnPage = {
  path: 'guides/bathroom-zones-ip44-ip65', article: true, kicker: 'Technical guide · standard',
  title: 'Bathroom zones 0, 1, 2 (NF C 15-100) and IP44 / IP65',
  description: 'Bathroom zones 0, 1 and 2, IP44 and IP65 under France’s NF C 15-100, plus a lux ↔ lumens ↔ watts converter by room type.',
  h1: 'Bathroom zones: IP44, IP65 and NF C 15-100',
  lead: 'In France, NF C 15-100 (part 7-701, bath or shower) defines zones where water and electricity come close. The IP rating of a fitting must match the zone where it is installed: it is not just a marketing label. This guide summarises zones 0, 1 and 2 with an IP table and a lux ↔ lumens ↔ watts converter by room type.',
  body: `<p class="en-note">This page describes the French standard. In the UK, bathroom zones are set by BS 7671 (section 701), and in other countries by local wiring rules: check them, and have an electrician validate your installation.</p>
<h2>The zones in brief</h2>
<p>Simplified NF C 15-100 benchmarks (June 2015): zone 1 goes up to 2.25 m; zone 2 is a 0.60 m horizontal band around zone 1. Measure from the bath or shower tray and read the fitting’s instructions (IP44, IP65…). Have an electrician check if your layout is unusual.</p>
<h2>Zones and IP table</h2>
<table><thead><tr><th>Zone</th><th>Boundary</th><th>Minimum IP</th><th>Voltage / equipment</th><th>Practical note</th></tr></thead><tbody>
<tr><td>Zone 0</td><td>Inside the bath or shower tray</td><td><strong>IPX7</strong></td><td>SELV 12 V AC or 30 V DC max., source outside the zones</td><td>230 V forbidden for lighting</td></tr>
<tr><td>Zone 1</td><td>Above zone 0, up to 2.25 m</td><td><strong>IPX4 (IPX5 for horizontal jets)</strong></td><td>SELV 12 V only for light fittings</td><td>No 230 V</td></tr>
<tr><td>Zone 2</td><td>0.60 m band around zone 1</td><td><strong>IPX4</strong></td><td>Class II + 30 mA RCD, or SELV 12 V</td><td>Typical IP44 wall light above the mirror</td></tr>
<tr><td>Outside the zones</td><td>Rest of the room (former zone 3 removed in 2015)</td><td><strong>No IP required by 7-701</strong></td><td>General household rules</td><td>IP44 is still a sensible choice near the basin</td></tr>
</tbody></table>
<p><strong>IP44</strong> = splashing water; <strong>IP65</strong> = water jets, useful near a jet shower, outdoors or for a very exposed spotlight. Definitions: <a href="/en/guides/ip-ratings-bathroom-outdoor/">IP ratings guide</a>. Mirror and colour: <a href="/en/zones/bathroom-mirror/">lighting the mirror</a>, <a href="/en/guides/colour-temperature-kelvin/">Kelvin</a>, <a href="/en/guides/cri-colour-rendering-index/">CRI</a>.</p>
<h2>Lux ↔ lumens ↔ watts converter</h2>
<p>Choose a room type (area and comfortable lux) or change one of the three values: the other two are recalculated (K ≈ 2 for general lighting, LED ≈ 100 lm/W). Detailed method: <a href="/en/tutorials/how-much-light-per-room-lux-foot-candles/">lux per room</a>.</p>
<div id="conv-bath">
<label>Room type <select id="cv-room">${BATH_ROOMS.map(([id, l, lux, m2]) => `<option data-lux="${lux}" data-m2="${m2}" value="${id}"${id === 'bath' ? ' selected' : ''}>${l} (${lux} lx, ${m2} m²)</option>`).join('')}</select></label>
<label>Lux <input id="cv-lux" max="2000" min="20" step="5" type="number" value="175"/></label>
<label>Area (m²) <input id="cv-m2" max="80" min="0.5" step="0.1" type="number" value="6"/></label>
<label>Lumens (total flux) <input id="cv-lm" max="100000" min="50" step="50" type="number" value="2100"/></label>
<label>LED power (W) <input id="cv-w" max="2000" min="1" step="1" type="number" value="21"/></label>
</div>
<p aria-live="polite" id="cv-hint">≈ 175 lx × 6 m² × K 2 → 2,100 lm → ≈ 21 W LED</p>
<p>Changing lumens or watts recalculates the lux for the chosen area (K = 2). Changing lux or area recalculates lumens and watts.</p>
<script>(function(){var K=2,LM_W=100,lock=null;function el(i){return document.getElementById(i)}function num(v){return parseFloat(String(v).replace(',','.'))||0}function fmt(n){return Math.round(n).toLocaleString('en-GB')}function fromLux(){var lux=num(el('cv-lux').value),m2=num(el('cv-m2').value),lm=lux*m2*K;el('cv-lm').value=Math.round(lm);el('cv-w').value=Math.max(1,Math.round(lm/LM_W));el('cv-hint').textContent='≈ '+fmt(lux)+' lx × '+m2.toFixed(1)+' m² × K '+K+' → '+fmt(lm)+' lm → ≈ '+fmt(lm/LM_W)+' W LED'}function fromLm(){var lm=num(el('cv-lm').value),m2=num(el('cv-m2').value),lux=m2>0?lm/(m2*K):0;el('cv-lux').value=Math.round(lux);el('cv-w').value=Math.max(1,Math.round(lm/LM_W));el('cv-hint').textContent=fmt(lm)+' lm → ≈ '+fmt(lux)+' lx (area '+m2.toFixed(1)+' m²) · ≈ '+fmt(lm/LM_W)+' W LED'}function fromW(){el('cv-lm').value=Math.round(num(el('cv-w').value)*LM_W);fromLm()}el('cv-room').addEventListener('change',function(){var o=this.options[this.selectedIndex];el('cv-lux').value=o.getAttribute('data-lux');el('cv-m2').value=o.getAttribute('data-m2');fromLux()});el('cv-lux').addEventListener('input',function(){if(lock)return;lock='lux';fromLux();lock=null});el('cv-m2').addEventListener('input',function(){if(lock)return;lock='lux';fromLux();lock=null});el('cv-lm').addEventListener('input',function(){if(lock)return;lock='lm';fromLm();lock=null});el('cv-w').addEventListener('input',function(){if(lock)return;lock='w';fromW();lock=null});fromLux()})();</script>
<h2>Product ideas</h2>
${card('IP44', 'IP44 bathroom mirror wall light', 'Zone 2 / outside the zones.', ukS('LED bathroom mirror wall light IP44', 'IP44 mirror light'))}
${card('IP65', 'IP65 recessed bathroom spotlight', 'Exposed damp areas.', ukS('bathroom downlight IP65', 'IP65 downlight'))}
${card('IP44', 'IP44 LED mirror bar', 'Light from the front.', ukS('LED mirror light bar IP44', 'IP44 mirror bar'))}
${card('SELV', 'Waterproof 12 V transformer for LEDs', 'Low voltage for zones 0–1.', ukS('12V LED driver waterproof IP67', '12 V SELV transformer'))}
${note}
<h2>Going further</h2><p>Whole room: <a href="/en/rooms/bathroom/">bathroom lighting</a>. LED troubleshooting (glow, buzzing): <a href="/en/guides/led-flickering-buzzing-glowing-troubleshooting/">LED troubleshooting guide</a>. Bulb equivalence: <a href="/en/guides/lumens-vs-watts/">lumens vs watts</a>.</p>`,
};

const DIM_ROWS: [string, string, string, string, string, string, string][] = [
  ['leading', 'Leading edge (cuts the start of the wave)', 'gu10', 'Dimmable GU10 LED', 'risk', 'High', 'Old halogen dimmers: frequent flicker. Replace with trailing edge.'],
  ['leading', 'Leading edge', 'e27', 'Dimmable E27 LED', 'risk', 'High', 'Same problem; “dimmer-compatible” bulbs sometimes work, but only at high load.'],
  ['leading', 'Leading edge', 'e14', 'Dimmable E14 LED', 'risk', 'High', 'Small loads: often below the dimmer’s minimum → flicker at the bottom of the range.'],
  ['trailing', 'Trailing edge (cuts the end of the wave)', 'gu10', 'Dimmable GU10 LED', 'ok', 'Low', 'Recommended combination for kitchen / living room spotlights.'],
  ['trailing', 'Trailing edge', 'e27', 'Dimmable E27 LED', 'ok', 'Low', 'Set the dimmer’s minimum after installation.'],
  ['trailing', 'Trailing edge', 'e14', 'Dimmable E14 LED', 'ok', 'Low to medium', 'Add up the load (several bulbs) to exceed the 5–10 W minimum.'],
  ['universal', 'LED “all lamps” dimmer', 'gu10', 'Dimmable GU10 LED', 'ok', 'Very low', 'The most reliable choice to replace an old dimmer.'],
  ['universal', 'All lamps LED', 'e27', 'Dimmable E27 LED', 'ok', 'Very low', 'Do not mix bulb brands on the same dimmer.'],
  ['universal', 'All lamps LED', 'e14', 'Dimmable E14 LED', 'ok', 'Low', 'Check the dimmer’s maximum load (chandeliers with many bulbs).'],
  ['trailing', 'Trailing edge', 'gu10', 'Non-dimmable GU10 LED', 'no', 'N/A', 'Not dimmable: risk of flicker or early failure. Do not use.'],
];
const SCORE: Record<string, string> = { ok: '✓ Good choice', risk: '⚠ Risk', no: '✗ Avoid' };
const btn = (cls: string, attr: string, v: string, label: string, on = false) => `<button type="button" class="${cls}" ${attr}="${v}" aria-pressed="${on}" style="margin:.15rem;padding:.2rem .6rem;border:1px solid #d6d3d1;border-radius:.4rem;${on ? 'font-weight:600;background:#fef3c7' : ''}">${label}</button>`;
const DIMMER_MATRIX_EN: EnPage = {
  path: 'guides/dimmer-led-bulb-matrix-gu10-e27-e14', article: true, kicker: 'Technical guide · dimmers',
  title: 'Dimmer (leading / trailing edge) × LED bulb matrix: GU10, E14, E27',
  description: 'Leading or trailing edge dimmer and dimmable GU10, E27, E14 LED bulbs: flicker risk and the good combinations, with interactive filters.',
  h1: 'Dimmer × LED bulb: anti-flicker matrix',
  lead: 'Leading edge (inherited from halogen) and trailing edge (LED) do not drive the same electronics. This matrix crosses the type of dimmer with the base (GU10, E27, E14) to estimate the risk of flicker.',
  body: `<p>Detailed guide: <a href="/en/guides/dimmable-led-bulbs/">dimmable bulbs</a>.</p>
<h2>Interactive filters</h2>
<div id="dim-filters"><span>Dimmer:</span> ${btn('dim-f', 'data-d', 'all', 'All', true)}${btn('dim-f', 'data-d', 'leading', 'Leading edge')}${btn('dim-f', 'data-d', 'trailing', 'Trailing edge')}${btn('dim-f', 'data-d', 'universal', 'All lamps')}<br/><span>Bulb:</span> ${btn('bulb-f', 'data-b', 'all', 'All', true)}${btn('bulb-f', 'data-b', 'gu10', 'GU10')}${btn('bulb-f', 'data-b', 'e27', 'E27')}${btn('bulb-f', 'data-b', 'e14', 'E14')}</div>
<table><thead><tr><th>Dimmer</th><th>Bulb</th><th>Compatibility</th><th>Flicker</th><th>Advice</th></tr></thead><tbody>
${DIM_ROWS.map(([d, dl, b, bl, s, f, n]) => `<tr class="dim-row" data-dimmer="${d}" data-bulb="${b}" data-score="${s}"><td>${dl}</td><td>${bl}</td><td><strong>${SCORE[s]}</strong></td><td>${f}</td><td>${n}</td></tr>`).join('\n')}
</tbody></table>
<script>(function(){var dSel='all',bSel='all';function paint(b,on){b.style.fontWeight=on?'600':'';b.style.background=on?'#fef3c7':'';b.setAttribute('aria-pressed',on?'true':'false')}function apply(){document.querySelectorAll('.dim-row').forEach(function(tr){var show=(dSel==='all'||dSel===tr.getAttribute('data-dimmer'))&&(bSel==='all'||bSel===tr.getAttribute('data-bulb'));tr.style.display=show?'':'none'})}document.querySelectorAll('.dim-f').forEach(function(b){b.addEventListener('click',function(){dSel=b.getAttribute('data-d');document.querySelectorAll('.dim-f').forEach(function(x){paint(x,x===b)});apply()})});document.querySelectorAll('.bulb-f').forEach(function(b){b.addEventListener('click',function(){bSel=b.getAttribute('data-b');document.querySelectorAll('.bulb-f').forEach(function(x){paint(x,x===b)});apply()})});apply()})();</script>
<h2>Product ideas</h2>
${card('Dimmer', 'Trailing-edge LED dimmer', 'Replaces a leading-edge halogen dimmer.', ukS('trailing edge LED dimmer switch', 'Trailing-edge dimmer'))}
${card('GU10', 'Dimmable GU10 LED spotlights', 'Trailing-edge compatible.', ukS('dimmable GU10 LED bulbs', 'Dimmable GU10'))}
${note}
<h2>Related tools and guides</h2><ul><li><a href="/en/tools/halogen-led-equivalence-gu10-e27-lumens/">Halogen → LED equivalence</a></li><li><a href="/en/guides/gu10-led-flicker-dimmer-diagnosis/">Interactive flicker diagnosis</a></li><li><a href="/en/guides/smart-switch-no-neutral-compatibility/">No-neutral smart switch</a></li><li><a href="/en/guides/led-flickering-buzzing-glowing-troubleshooting/">Buzzing troubleshooting</a></li><li><a href="/en/guides/bulb-bases-b22-e26-e27-gu10/">Bulb bases</a></li></ul>`,
};

const KIT_MODULES = [
  { id: 'shelly-1l', name: 'Shelly 1L', neutre: false, dim: false, minW: 3, bypassLed: true, proto: 'Wi-Fi' },
  { id: 'shelly-d2', name: 'Shelly Dimmer 2', neutre: true, dim: true, minW: 1, bypassLed: false, proto: 'Wi-Fi' },
  { id: 'legrand', name: 'Legrand Céliane with Netatmo', neutre: false, dim: true, minW: 5, bypassLed: true, proto: 'Zigbee' },
  { id: 'aqara-h1', name: 'Aqara H1 (no neutral)', neutre: false, dim: false, minW: 3, bypassLed: true, proto: 'Zigbee' },
  { id: 'hue', name: 'Philips Hue (bulbs)', neutre: null, dim: true, minW: 0, bypassLed: false, proto: 'Zigbee / BT' },
  { id: 'sonoff-l2', name: 'Sonoff ZBMini-L2', neutre: false, dim: false, minW: 3, bypassLed: true, proto: 'Zigbee' },
];
const KIT_ROOMS = ['Living room', 'Kitchen', 'Bedroom', 'Hallway', 'Bathroom', 'Home office', 'Garage'];
const KIT_SCRIPT = `(function(){var modules=${JSON.stringify(KIT_MODULES)},rooms=${JSON.stringify(KIT_ROOMS)};var tbody=document.getElementById('kit-tbody');var modOpts=modules.map(function(m){return '<option value="'+m.id+'">'+m.name+'</option>'}).join('');var roomOpts=rooms.map(function(p){return '<option>'+p+'</option>'}).join('');function rowHtml(){return '<tr class="kit-row"><td><select class="kit-piece">'+roomOpts+'</select></td><td><input class="kit-n" type="number" min="1" value="2" style="width:4.5rem"/></td><td><input class="kit-w" type="number" min="1" step="0.5" value="5" style="width:4.5rem"/></td><td><select class="kit-neutre"><option value="non">No</option><option value="oui">Yes</option><option value="?">Not sure</option></select></td><td><select class="kit-dim"><option value="non">No</option><option value="oui">Yes</option></select></td><td><select class="kit-mod">'+modOpts+'</select></td><td><button type="button" class="kit-del">Remove</button></td></tr>'}function modById(id){for(var i=0;i<modules.length;i++)if(modules[i].id===id)return modules[i]}function recalc(){var counts={},bypass=0,warns=[],hue=false,netatmo=false,aqara=false,eco=document.getElementById('kit-eco').value;document.querySelectorAll('.kit-row').forEach(function(tr){var n=+tr.querySelector('.kit-n').value||1,w=+tr.querySelector('.kit-w').value||5,P=n*w,neutre=tr.querySelector('.kit-neutre').value,wantDim=tr.querySelector('.kit-dim').value==='oui',mid=tr.querySelector('.kit-mod').value,m=modById(mid),room=tr.querySelector('.kit-piece').value;if(!m)return;counts[mid]=(counts[mid]||0)+1;if(m.id==='hue')hue=true;if(m.id==='legrand')netatmo=true;if(m.id==='aqara-h1')aqara=true;if(m.neutre===true&&neutre==='non')warns.push('“'+room+'”: '+m.name+' needs a neutral. Choose Shelly 1L, Legrand 2-wire, Aqara H1 or Sonoff L2.');if(m.neutre===false&&neutre==='oui'&&mid==='shelly-1l')warns.push('“'+room+'”: with a neutral available, a Shelly Dimmer 2 or a wired dimmer is often more stable.');if(wantDim&&!m.dim&&m.id!=='hue')warns.push('“'+room+'”: dimming requested but '+m.name+' is on/off only.');if(m.minW&&P<m.minW)warns.push('“'+room+'”: load '+P+' W < '+m.minW+' W minimum for '+m.name+'. Add light points, a bypass or a more powerful bulb.');if(m.bypassLed&&(neutre==='non'||neutre==='?')&&P<8)bypass+=1});if(eco==='hue'&&!counts.hue&&Object.keys(counts).length)warns.push('Hue ecosystem selected: plan Hue bulbs, or a Bridge for third-party Zigbee modules.');if(eco==='wifi'&&(counts['legrand']||counts['aqara-h1']||counts['sonoff-l2']))warns.push('Shelly Wi-Fi ecosystem: Zigbee modules (Legrand, Aqara, Sonoff) need a separate hub.');document.getElementById('kit-modules-out').innerHTML=Object.keys(counts).map(function(id){var m=modById(id);return '<li><strong>'+counts[id]+'×</strong> '+(m?m.name:id)+'</li>'}).join('')||'<li>Add at least one circuit.</li>';document.getElementById('kit-bypass-out').textContent=bypass?'Estimated anti-flicker bypasses: '+bypass+' (one per LED fitting under ~8 W on a 2-wire module).':'No bypass required for the current configuration.';var hubs=[];if(hue)hubs.push('Philips Hue Bridge (if more than 10 Bluetooth bulbs or automations)');if(netatmo)hubs.push('Legrand Netatmo gateway');if(aqara)hubs.push('Aqara hub or Apple TV / HomePod (Thread)');document.getElementById('kit-hub-out').textContent=hubs.length?'Gateways to plan: '+hubs.join(' · '):'';document.getElementById('kit-warn-out').innerHTML=warns.length?warns.map(function(w){return '<li>⚠ '+w+'</li>'}).join(''):'<li>No blocking alert for the rows entered.</li>'}function bindRow(tr){tr.querySelectorAll('input, select').forEach(function(e){e.addEventListener('input',recalc);e.addEventListener('change',recalc)});tr.querySelector('.kit-del').addEventListener('click',function(){tr.remove();recalc()})}document.getElementById('kit-add').addEventListener('click',function(){tbody.insertAdjacentHTML('beforeend',rowHtml());bindRow(tbody.lastElementChild);recalc()});document.getElementById('kit-eco').addEventListener('change',recalc);tbody.insertAdjacentHTML('beforeend',rowHtml());bindRow(tbody.firstElementChild);recalc()})();`;
const KIT_CONFIG_EN: EnPage = {
  path: 'guides/smart-lighting-kit-configurator-no-neutral', article: true, kicker: 'Interactive guide · smart home',
  title: 'Smart lighting kit configurator: no neutral, bypasses and Shelly, Hue, Aqara modules',
  description: 'Build your smart lighting kit room by room, with or without a neutral wire: modules, anti-flicker bypasses, gateways and compatibility alerts.',
  h1: 'Build your smart lighting kit room by room',
  lead: 'Add each light point: LED power, whether there is a neutral in the switch box, and the type of module. The configurator estimates the number of anti-flicker bypasses (standby current of 2-wire modules) and flags modules that do not suit your wiring.',
  body: `<p>Complete it with the <a href="/en/guides/smart-switch-no-neutral-compatibility/">no-neutral compatibility matrix</a>.</p>
<h2>Module reference</h2>
<table><thead><tr><th>Module</th><th>Works without neutral</th><th>Dimming</th><th>Min. load</th><th>LED bypass</th><th>Protocol</th></tr></thead><tbody>
${KIT_MODULES.map((m) => `<tr><td>${m.name}</td><td>${m.neutre === null ? '— (bulbs)' : m.neutre ? 'No (neutral required)' : 'Yes (2-wire)'}</td><td>${m.dim ? 'Yes' : 'On/off'}</td><td>${m.minW ? `${m.minW} W` : '—'}</td><td>${m.bypassLed ? 'Often' : 'Rarely / no'}</td><td>${m.proto}</td></tr>`).join('\n')}
</tbody></table>
<h2>Your rooms and light points</h2>
<p>One row = one circuit or one fitting controlled by a single module. Switch off at the consumer unit before fitting anything.</p>
<p><label>Target ecosystem <select id="kit-eco"><option value="any">No preference</option><option value="hue">Philips Hue</option><option value="apple">Apple Home / Aqara</option><option value="wifi">Local Wi-Fi (Shelly)</option><option value="zigbee">Open Zigbee</option></select></label></p>
<table id="kit-table"><thead><tr><th>Room</th><th>Points</th><th>LED W / point</th><th>Neutral in box?</th><th>Dimmer?</th><th>Module</th><th></th></tr></thead><tbody id="kit-tbody"></tbody></table>
<p><button id="kit-add" type="button" style="padding:.3rem .8rem;border:1px solid #d6d3d1;border-radius:.4rem">+ Add a room / circuit</button></p>
<div aria-live="polite" id="kit-summary" class="en-card"><h3>Hardware summary</h3><ul id="kit-modules-out"></ul><p id="kit-bypass-out"></p><p id="kit-hub-out"></p><h3>Compatibility alerts</h3><ul id="kit-warn-out"></ul></div>
<script>${KIT_SCRIPT}</script>
<h2>Product ideas</h2>
${card('Shelly', 'Shelly no-neutral module', '2-wire micromodule.', ukS('Shelly 1L no neutral', 'Shelly 1L'))}
${card('Bypass', 'LED bypass for no-neutral modules', 'Stops ghost glow.', ukS('Shelly bypass LED no neutral', 'Bypass'))}
${card('Smart', 'Zigbee E27 smart bulb kit', 'One unified ecosystem.', ukS('Zigbee smart bulb E27', 'Zigbee E27 bulbs'))}
${card('Hub', 'Zigbee smart home hub', 'Multi-brand hub.', ukS('Zigbee hub smart home', 'Zigbee hub'))}
${note}
<h2>Related tools and guides</h2><ul><li><a href="/en/guides/smart-switch-no-neutral-compatibility/">No-neutral switch matrix</a></li><li><a href="/en/guides/gu10-led-flicker-dimmer-diagnosis/">GU10 / E27 flicker diagnosis</a></li><li><a href="/en/guides/matter-thread-matrix-philips-hue-aqara-govee/">Matter, Thread, Zigbee matrix</a></li><li><a href="/en/tools/">Lighting tools</a></li><li><a href="/en/brands/philips-hue/">Philips Hue ecosystem</a></li></ul>`,
};

const inp = (id: string, label: string, attrs: string, extra = '') => `<label${extra}>${label} <input id="${id}" type="number" ${attrs} style="width:7rem"/></label><br/>`;
const ROI_SCRIPT = `(function(){var SITE_HOURS={retail:14,office:10,workshop:16,communal:11};function el(i){return document.getElementById(i)}function num(v){return parseFloat(String(v).replace(',','.'))||0}function cur(){return el('roi-cur').value}function money(n,d){return cur()+n.toLocaleString('en-GB',{minimumFractionDigits:d,maximumFractionDigits:d})}function applyPreset(){var f=el('roi-fix'),o=f.options[f.selectedIndex];['old','new','life-old','life-new','cost-old','cost-new'].forEach(function(k){var id={'old':'roi-old-w','new':'roi-new-w'}[k]||('roi-'+k);el(id).value=o.getAttribute('data-'+k)});var park=f.value==='parking';el('roi-detect-wrap').style.display=park?'':'none';if(!park)el('roi-detect').value='0'}function calc(){var n=num(el('roi-n').value),oldW=num(el('roi-old-w').value),newW=num(el('roi-new-w').value),days=num(el('roi-days').value),effH=num(el('roi-h').value)*(1-num(el('roi-detect').value)/100),price=num(el('roi-kwh').value),inv=num(el('roi-inv').value),costOld=num(el('roi-cost-old').value),costNew=num(el('roi-cost-new').value),lifeOld=num(el('roi-life-old').value),lifeNew=num(el('roi-life-new').value),labor=num(el('roi-labor').value);var hy=effH*days,kOld=n*oldW*hy/1000,kNew=n*newW*hy/1000,kSave=kOld-kNew,eSave=kSave*price;var rOld=lifeOld>0?(n*hy)/lifeOld:0,rNew=lifeNew>0?(n*hy)/lifeNew:0,crew=Math.max(1,Math.ceil(n/20));var mOld=rOld*costOld+(rOld>=1?Math.floor(rOld)*(labor/crew):0),mNew=rNew*costNew+(rNew>=1?Math.floor(rNew)*(labor/crew*0.3):0),mSave=Math.max(0,mOld-mNew),total=eSave+mSave,pb=total>0?inv/total:Infinity;var pbTxt=!isFinite(pb)?'—':pb<1?Math.round(pb*12)+' months':pb.toFixed(1)+' year(s)';el('roi-result').innerHTML='<p><strong>Current consumption:</strong> ≈ '+Math.round(kOld).toLocaleString('en-GB')+' kWh/year · <strong>after LED:</strong> ≈ '+Math.round(kNew).toLocaleString('en-GB')+' kWh/year.</p><p><strong>kWh saved:</strong> ≈ <strong>'+Math.round(kSave).toLocaleString('en-GB')+' kWh/year</strong> ('+money(eSave,2)+' off the bill at '+money(price,2)+'/kWh).</p><p><strong>Maintenance avoided (estimate):</strong> ≈ '+money(mSave,2)+' / year (lamps + share of labour; old ≈ '+rOld.toFixed(1)+' replacements/year vs LED ≈ '+rNew.toFixed(2)+').</p><p><strong>Total annual gain:</strong> '+money(total,2)+' · <strong>Payback:</strong> <strong>'+pbTxt+'</strong> for '+money(inv,0)+' invested.</p><p>'+n+' fittings, '+effH.toFixed(1)+' effective h/day ('+days+' days/year). Power: '+oldW+' W → '+newW+' W (−'+Math.round((1-newW/oldW)*100)+' %).</p>'}el('roi-site').addEventListener('change',function(){var h=SITE_HOURS[this.value];if(h)el('roi-h').value=h;if(this.value==='communal')el('roi-days').value=365;calc()});el('roi-fix').addEventListener('change',function(){applyPreset();calc()});['roi-cur','roi-n','roi-h','roi-days','roi-detect','roi-old-w','roi-new-w','roi-kwh','roi-inv','roi-cost-old','roi-cost-new','roi-life-old','roi-life-new','roi-labor'].forEach(function(i){el(i).addEventListener('input',calc);el(i).addEventListener('change',calc)});applyPreset();calc()})();`;
const ROI_EN: EnPage = {
  path: 'tools/led-relamping-roi-calculator', article: true, kicker: 'Tools · calculator',
  title: 'Professional LED relamping ROI calculator (kWh, maintenance, payback)',
  description: 'Is LED relamping worth it for a shop, office, workshop or block of flats? T8 tubes, 600×600 panels, halogen spots, car park floodlights: kWh saved, maintenance avoided and payback time.',
  h1: 'LED relamping payback (business & communal areas)',
  lead: 'Estimate the kWh saved, the maintenance avoided (LED lifetime vs old lamps) and the payback time for a shop, an office, a workshop or the communal areas of a block of flats. Fittings: T8 tubes, 600×600 panels, halogen spots, car park floodlights with a motion sensor.',
  body: `<p>Electricity price, currency and installation cost are editable. See also <a href="/en/guides/lumens-vs-watts/">lumens vs watts</a>, <a href="/en/guides/steinel-automatic-outdoor-lighting/">outdoor lighting with sensors</a> and <a href="/en/brands/steinel/">Steinel floodlights</a>.</p>
<h2>Calculator</h2>
<div id="roi-tool">
<label>Type of site <select id="roi-site"><option value="retail">Shop / retail</option><option value="office">Office / open-plan</option><option value="workshop">Workshop / warehouse</option><option value="communal">Block of flats (communal areas)</option></select></label><br/>
<label>Fitting family <select id="roi-fix">
<option value="t8" data-old="58" data-new="18" data-life-old="12000" data-life-new="50000" data-cost-old="4" data-cost-new="12">T8 fluorescent tube 58 W → LED 18 W</option>
<option value="panel" data-old="72" data-new="36" data-life-old="15000" data-life-new="50000" data-cost-old="25" data-cost-new="45">600×600 fluorescent panel 4×18 W → LED panel 36 W</option>
<option value="gu10" data-old="50" data-new="6" data-life-old="2000" data-life-new="25000" data-cost-old="3" data-cost-new="8">GU10 halogen spot 50 W → LED 6 W</option>
<option value="parking" data-old="250" data-new="80" data-life-old="8000" data-life-new="50000" data-cost-old="80" data-cost-new="120">Car park floodlight 250 W → LED 80 W + sensor</option>
</select></label><br/>
<label>Currency <select id="roi-cur"><option value="€">€</option><option value="£">£</option><option value="$">$</option></select></label><br/>
${inp('roi-n', 'Number of fittings', 'min="1" max="5000" step="1" value="40"')}
${inp('roi-h', 'Hours on per day', 'min="0.5" max="24" step="0.5" value="12"')}
${inp('roi-days', 'Days per year', 'min="200" max="365" step="1" value="300"')}
${inp('roi-detect', 'Reduction thanks to the sensor (%)', 'min="0" max="90" step="5" value="55" title="Share of the time the light stays off or dimmed"', ' id="roi-detect-wrap"')}
${inp('roi-old-w', 'Current power (W per fitting)', 'min="1" max="2000" step="1" value="58"')}
${inp('roi-new-w', 'LED power (W per fitting)', 'min="1" max="500" step="1" value="18"')}
${inp('roi-kwh', 'Electricity price (per kWh, incl. tax)', 'min="0.05" max="0.8" step="0.01" value="0.22"')}
${inp('roi-inv', 'Total investment (equipment + installation)', 'min="100" max="500000" step="50" value="3200"')}
${inp('roi-cost-old', 'Cost of an old lamp', 'min="0" max="500" step="0.5" value="4"')}
${inp('roi-cost-new', 'Cost of an LED module', 'min="0" max="500" step="0.5" value="12"')}
${inp('roi-life-old', 'Old lamp lifetime (h)', 'min="500" max="50000" step="100" value="12000"')}
${inp('roi-life-new', 'LED lifetime (h)', 'min="10000" max="100000" step="1000" value="50000"')}
${inp('roi-labor', 'Replacement labour (per site visit)', 'min="0" max="5000" step="25" value="150"')}
</div>
<div id="roi-result" class="en-card" aria-live="polite"></div>
<p>The default figures are examples based on French prices: replace them with your own tariff and quotes. The “site” profiles pre-fill typical hours of use. The car park with a sensor applies a reduction in equivalent hours (HF or infrared sensor). Indicative figures: ask an installer for a quote, especially if you apply for an energy-efficiency grant.</p>
<script>${ROI_SCRIPT}</script>
<h2>Related tools and guides</h2><ul><li><a href="/en/tools/lux-lumen-watt-room-converter/">Lux ↔ lumens converter</a></li><li><a href="/en/tools/kitchen-lighting-plan-generator-pdf/">Kitchen lighting plan (PDF)</a></li><li><a href="/en/rooms/parking/">Driveway and car park lighting</a></li><li><a href="/en/best/outdoor-led-floodlight-motion-sensor/">LED floodlights with sensor</a></li><li><a href="/en/guides/motion-sensors/">Motion sensors</a></li><li><a href="/en/articles/led-savings-calculation/">LED savings at home</a></li></ul>`,
};

const KP_SCRIPT = `(function(){var ZONES=[{key:'bench',label:'Worktop',lux:500},{key:'island',label:'Island / peninsula',lux:300},{key:'cook',label:'Cooking area (ceiling)',lux:500},{key:'table',label:'Dining table',lux:200},{key:'circ',label:'Circulation',lux:100}];var K_CEIL=1.55,K_BENCH=1.4;function el(i){return document.getElementById(i)}function num(v){return parseFloat(String(v).replace(',','.'))||0}function fmt(n){return Math.round(n).toLocaleString('en-GB')}function calc(){var name=(el('kp-name').value||'').trim(),len=num(el('kp-bench-len').value),d=num(el('kp-bench-d').value),areas={island:num(el('kp-island').value),cook:num(el('kp-cook').value),table:num(el('kp-table').value),circ:num(el('kp-circ').value)},k=el('kp-k').value,per=num(el('kp-gu10-lm').value)||500,cri=el('kp-irc90').checked;var benchLm=500*len*d*K_BENCH,lmPerM=len>0?benchLm/len:0,total=0,rows='';ZONES.forEach(function(z){if(z.key==='bench'){if(len<=0)return;rows+='<tr><td>'+z.label+'</td><td>'+z.lux+' lx</td><td>24 V LED strip under the wall units (CRI '+(cri?'≥ 90':'≥ 80, 90 advised')+')</td><td>'+len.toFixed(1)+' m run · ≈ '+Math.round(lmPerM)+' lm/m target</td></tr>';return}var m2=areas[z.key];if(m2<=0)return;var need=z.lux*m2*K_CEIL,n=Math.max(0,Math.ceil(need/per));total+=n;rows+='<tr><td>'+z.label+' ('+m2.toFixed(1)+' m²)</td><td>'+z.lux+' lx</td><td>GU10 spots '+k+' K, 36–60° beam</td><td>'+n+' spot'+(n>1?'s':'')+' (≈ '+fmt(need)+' lm)</td></tr>'});el('kp-tbody').innerHTML=rows;el('kp-title').textContent=name||'Kitchen lighting plan';el('kp-meta').textContent='Target colour: '+k+' K · CRI '+(cri?'≥ 90 on every fitting':'≥ 80 minimum, 90 advised on the worktop')+' · Generated on '+new Date().toLocaleDateString('en-GB');el('kp-summary').innerHTML='<p><strong>Total GU10 ceiling spots:</strong> '+total+'</p><p><strong>24 V strip under units:</strong> '+len.toFixed(1)+' m (power supply: see the 24 V calculator)</p><p><strong>Suggested circuits:</strong> one dimmed circuit for the dining / ambient area, one bright circuit for worktop + cooking; put the island on its own circuit if possible to avoid shadows on the worktop.</p>';el('kp-footnote').textContent='Estimate based on usual lux levels (worktop 500 lx, circulation 100 lx) and a ceiling factor K ≈ '+K_CEIL+'. Evenness depends on ceiling height and finishes. Have an electrician validate the layout for wet areas (sink) and circuit loads.'}el('kp-recalc').addEventListener('click',calc);el('kp-print').addEventListener('click',function(){calc();window.print()});['kp-bench-len','kp-bench-d','kp-island','kp-cook','kp-table','kp-circ','kp-k','kp-gu10-lm','kp-irc90','kp-name'].forEach(function(i){el(i).addEventListener('input',calc);el(i).addEventListener('change',calc)});calc()})();`;
const KITCHEN_PLAN_EN: EnPage = {
  path: 'tools/kitchen-lighting-plan-generator-pdf', article: true, kicker: 'Tools · configurator',
  title: 'Kitchen lighting plan, zone by zone (printable PDF)',
  description: 'Plan your kitchen lighting: 500 lux on the worktop, island, cooking area, dining table. Number of GU10 spots, 24 V LED strip length, Kelvin and CRI, ready to print.',
  h1: 'Kitchen lighting plan (printable)',
  lead: 'Enter the areas and lengths: the tool suggests a zone-by-zone plan (500 lux on the worktop, island, cooking, dining table, circulation), the number of GU10 spots, the length of 24 V LED strip under the wall units, a consistent colour temperature and CRI ≥ 90 sources. Print the summary for your electrician or your project.',
  body: `<p>See also <a href="/en/zones/kitchen-worktop/">lighting the worktop</a>, <a href="/en/articles/installing-led-strip/">installing an LED strip</a> and <a href="/en/tools/led-strip-power-supply-calculator/">sizing the 24 V power supply</a>.</p>
<h2>Configurator</h2>
<div id="kitchen-plan-tool">
<label>Project name (printed on the sheet) <input id="kp-name" maxlength="80" placeholder="e.g. 12 m² kitchen, renovation" type="text"/></label><br/>
${inp('kp-bench-len', 'Worktop length (m)', 'max="12" min="1" step="0.1" value="3.6"')}
${inp('kp-bench-d', 'Worktop depth (m)', 'max="1" min="0.5" step="0.05" value="0.6"')}
${inp('kp-island', 'Island / peninsula area (m²)', 'max="8" min="0" step="0.1" value="2"')}
${inp('kp-cook', 'Cooking area on the ceiling (m²)', 'max="6" min="0" step="0.1" value="1.2"')}
${inp('kp-table', 'Dining table area (m²)', 'max="12" min="0" step="0.1" value="2.4"')}
${inp('kp-circ', 'Circulation area (m²)', 'max="25" min="2" step="0.1" value="6"')}
<label>Target colour temperature <select id="kp-k"><option value="3000">3000 K, warm white (convivial)</option><option selected value="4000">4000 K, neutral white (kitchen, tasks)</option><option value="2700">2700 K, very warm (dining corner)</option></select></label><br/>
${inp('kp-gu10-lm', 'Output per GU10 spot (lm)', 'max="800" min="250" step="25" value="500"')}
<label><input checked id="kp-irc90" type="checkbox"/> Require CRI ≥ 90 on every source (food, finishes)</label>
</div>
<p class="no-print"><button id="kp-recalc" type="button" style="padding:.3rem .8rem;border:1px solid #d6d3d1;border-radius:.4rem">Update the plan</button> <button id="kp-print" type="button" style="padding:.3rem .8rem;border:1px solid #d6d3d1;border-radius:.4rem">Print / PDF</button></p>
<div id="kp-print-area" class="print-plan-wrap en-card" aria-live="polite"><p>1piece1ampoule.fr · indicative plan</p><h3 id="kp-title">Kitchen lighting plan</h3><p id="kp-meta"></p>
<table id="kp-table-out"><thead><tr><th>Zone</th><th>Target lux</th><th>Solution</th><th>Quantity</th></tr></thead><tbody id="kp-tbody"></tbody></table>
<div id="kp-summary"></div><p id="kp-footnote"></p></div>
<style>@media print{body *{visibility:hidden}.print-plan-wrap,.print-plan-wrap *{visibility:visible}.print-plan-wrap{position:absolute;left:0;top:0;width:100%;margin:0;padding:0;box-shadow:none!important}}</style>
<script>${KP_SCRIPT}</script>
<h2>Related tools and guides</h2><ul><li><a href="/en/tools/lux-lumen-watt-room-converter/">Lux ↔ lumens converter</a></li><li><a href="/en/tools/halogen-led-equivalence-gu10-e27-lumens/">Halogen GU10 equivalence</a></li><li><a href="/en/tools/led-strip-power-supply-calculator/">24 V LED strip calculator</a></li><li><a href="/en/guides/colour-temperature-kelvin/">Kelvin</a> · <a href="/en/guides/cri-colour-rendering-index/">CRI</a></li><li><a href="/en/best/gu10-led-bulb/">GU10 spotlight comparison</a></li><li><a href="/en/rooms/kitchen/">Kitchen lighting</a></li><li><a href="/en/tools/led-relamping-roi-calculator/">LED relamping ROI (business)</a></li></ul>`,
};

const GR35_BUY = 'https://www.awin1.com/cread.php?awinmid=94223&awinaffid=3127458&ued=https%3A%2F%2Fwww.imalentstore.com%2Fproducts%2Fimalent-gr35-4-in-1-edc-flashlight';
const img = (f: string, alt: string, w: number, h: number) => `<img src="/images/tests/imalent-gr35/${f}" alt="${alt}" width="${w}" height="${h}" loading="lazy" style="max-width:100%;height:auto" />`;
const GR35_FAQ: [string, string][] = [
  ['Does the torch get hot in use?', 'Yes. At full power you clearly feel the heat on your hand when you shine it on your palm. That is consistent with a very bright torch: part of the electrical energy turns into heat in the LED and the body.'],
  ['Is the green laser steady?', 'Yes: the green laser pointer stays constant during use.'],
  ['Can the laser be used safely?', 'A laser must never be aimed at eyes, people, animals, vehicles or aircraft. Keep the torch out of children’s reach and use the laser only to point at things briefly, never at anyone.'],
  ['Is the manual in French?', 'No, on the unit we tested it was not translated into French. That is not mandatory, but it was the main downside of the pack for us as a French site.'],
  ['What comes with the torch?', 'Besides the torch, the case includes a powerbank and a grey fabric storage pouch: two accessories we appreciated.'],
];
const GR35_TEST_EN: EnPage = {
  path: 'tests/imalent-gr35', article: true, kicker: 'Product test · updated 2 November 2026',
  title: 'Imalent GR35 test: torch, green laser and powerbank case',
  description: 'Imalent GR35 tested: a very powerful torch, easy dimmer, green laser, powerbank case and pouch. Manual not in French. Torch supplied free; independent review.',
  h1: 'Imalent GR35 test: torch, green laser and powerbank case',
  lead: 'The Imalent GR35 is not a living-room bulb: it is a compact torch with a green laser, a dimmer and a case that doubles as a powerbank. Here is what we took away after trying it.',
  body: `<p class="en-note"><strong>Torch supplied free by Imalent for this test; no say over the content of the review.</strong></p>
<p><img src="/images/tests/imalent-gr35/imalent-gr35-contenu-pochette-powerbank-torche.webp" alt="Contents of the Imalent GR35 box on a table: grey fabric pouch, powerbank and torch" width="1600" height="1200" style="max-width:100%;height:auto" /></p>
<h2>Unboxing</h2>
<p>In the box: the torch, the charging and storage case, the grey fabric pouch and its powerbank. The black and blue case is well made; the pouch fits inside with its press stud.</p>
<p>${img('imalent-gr35-torche-dans-son-coffret.webp', 'Imalent GR35 torch in its black and blue case, as opened', 1600, 1200)}</p>
<p>${img('imalent-gr35-coffret-ouvert-vide.webp', 'Imalent case open and empty, black and blue interior', 1600, 1200)}</p>
<p>${img('imalent-gr35-coffret-ferme-vue-dessus.webp', 'Imalent GR35 case seen from above, grey fabric pouch in the box', 1200, 1600)}</p>
<p>${img('imalent-gr35-torche-pochette-tissu-dans-coffret.webp', 'Imalent GR35 grey fabric storage pouch with its press stud, in the case', 1200, 1600)}</p>
<h2>First impressions</h2><p>The quality feels right and the torch is easy to use.</p>
<h2>Output, dimmer and green laser</h2>
<p>The torch is <strong>very powerful</strong>. Shine the beam on the palm of your hand and you feel the heat, which is no small thing for a pocket torch. Imalent states a maximum output of <strong>2,800 lumens</strong> and a range of <strong>426 m</strong> (manufacturer figures, not measured by us). For scale: a typical living-room LED bulb is around <strong>800 lm</strong>, so 2,800 lm is several times that in a concentrated beam. Hence its use for lighting far away, and hence the warmth: part of the energy used by the LED becomes heat in the body of the torch, especially at full power.</p>
<p>The <strong>dimmer is easy</strong> to use to adjust brightness without cycling through fixed modes each time. The <strong>green laser</strong> pointer stays <strong>steady</strong> during use. Safety reminder: never aim at eyes, people, animals, vehicles or aircraft; keep the device out of children’s reach.</p>
<h2>Powerbank and pouch</h2><p>Apart from the torch itself, what we liked most in the pack is the <strong>powerbank + storage pouch</strong> combination built into the case.</p>
<h2>The downside: the manual</h2><p>Our only real regret: the manual was not translated into French. That is not mandatory, but a French version would have been welcome for our readers.</p>
<h2>Strengths</h2><ul><li>Good perceived quality, simple to use.</li><li>Powerbank and pouch well thought out in the case.</li><li>Very powerful; easy dimmer.</li><li>Steady green laser.</li></ul>
<h2>Limits</h2><ul><li>Manual not in French.</li><li>Noticeable heat at high power.</li></ul>
<div class="en-card"><p class="en-flag">Where to buy</p><h3>Buy the Imalent GR35</h3>
<p>Price noted on 2 November 2026 on <strong>imalentstore.com</strong>: <strong>US$72.95</strong> (US$94.95 crossed out); it may have changed. Shipping, VAT and customs depend on the seller.</p>
<p>Awin promo code published for France: <code>DZYJ10YHM</code> (−10 % on the IMALENT shop, valid until 27 March 2027, source Awin); it may not apply in your country.</p>
<p><a href="${GR35_BUY}" rel="sponsored nofollow noopener" target="_blank" data-awin-link data-awin-mid="94223" data-product="Imalent GR35" data-placement="test-gr35-en">See the GR35 on the official shop</a></p>
<p class="en-note">Affiliate link: we may earn a commission at no extra cost to you.</p></div>
<h2>Who is it for?</h2>
<p>Someone who wants a powerful torch, rechargeable from its case, with a green laser and adjustable brightness. Less suitable if you need a complete French manual. To light a cellar, see our <a href="/en/rooms/vaulted-cellar/">vaulted cellar</a> and <a href="/en/rooms/wine-cellar/">wine cellar</a> guides; for a path, the <a href="/en/zones/outdoor-entrance-path/">entrance and path guide</a>. To compare with fixed lighting, see our <a href="/en/guides/lumens-vs-watts/">lumens vs watts guide</a>, the <a href="/en/brands/imalent/">Imalent brand page</a> and <a href="/en/brands/">all the brands we follow</a>.</p>
<h2>Specifications stated by Imalent</h2>
<p>Figures taken from the manufacturer’s product page (not measured by us):</p>
<ul><li>Stated maximum output: <strong>2,800 lumens</strong>.</li><li>Stated range: <strong>426 m</strong>.</li><li>Charging case: <strong>6,700 mAh</strong>.</li></ul>
<p>Source: <a href="${GR35_BUY}" rel="sponsored nofollow noopener" target="_blank">Imalent GR35 page on imalentstore.com</a>, checked 2 November 2026.</p>
<h2>Frequently asked questions</h2>
${GR35_FAQ.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('\n')}`,
};

export const TR_LOT6_EN: EnPage[] = [TROUBLESHOOT_EN, BATH_ZONES_EN, DIMMER_MATRIX_EN, KIT_CONFIG_EN, ROI_EN, KITCHEN_PLAN_EN, GR35_TEST_EN];
export const LOT6_EN_GROUPS: { fr: string; en: string }[] = [
  { fr: '/guides/ampoule-led-clignote-eteinte-gresille-depannage/', en: '/en/guides/led-flickering-buzzing-glowing-troubleshooting/' },
  { fr: '/guides/zones-salle-de-bain-ip44-ip65-norme-nfc-15-100/', en: '/en/guides/bathroom-zones-ip44-ip65/' },
  { fr: '/guides/matrice-variateur-dimmer-ampoule-led-gu10-e27/', en: '/en/guides/dimmer-led-bulb-matrix-gu10-e27-e14/' },
  { fr: '/guides/configurateur-kit-eclairage-connecte-sans-neutre/', en: '/en/guides/smart-lighting-kit-configurator-no-neutral/' },
  { fr: '/outils/calculateur-roi-relamping-led-professionnel/', en: '/en/tools/led-relamping-roi-calculator/' },
  { fr: '/outils/generateur-plan-eclairage-cuisine-pdf/', en: '/en/tools/kitchen-lighting-plan-generator-pdf/' },
  { fr: '/tests/imalent-gr35/', en: '/en/tests/imalent-gr35/' },
];
