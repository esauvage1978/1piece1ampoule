#!/usr/bin/env python3
"""Generate src/content/tr-priority-lot2-en.ts"""
from __future__ import annotations

OUT = "/workspace/1piece1ampoule/src/content/tr-priority-lot2-en.ts"


def uk(asin: str, label: str) -> str:
    return (
        f'<a class="en-amz" href="https://www.amazon.co.uk/dp/{asin}?tag=roboteducatif-21" '
        f'rel="nofollow sponsored noopener" target="_blank" data-asin="{asin}" '
        f'data-product="{label}">Check price on Amazon UK</a>'
    )


def card(flag: str, name: str, txt: str, asin: str) -> str:
    return (
        f'<div class="en-card"><p class="en-flag">{flag}</p><h3>{name}</h3>'
        f"<p>{txt}</p>{uk(asin, name)}</div>"
    )


NOTE = (
    '<p class="en-note">Listing data from manufacturer/Amazon pages checked 30 October 2026. '
    "Prices change — verify before buying. As an Amazon Associate I earn from qualifying purchases.</p>"
)

A = lambda p: f"https://www.awin1.com/pclick.php?p={p}&a=3127458&m=31151"

HEADER = """// Priority EN pages lot 2 (Oct 2026). Sources: FR pages, hiver.ts, marques, catalog-fr.json — checked 30/10/2026.
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
"""

FOOTER = "];\n"


def esc_body(s: str) -> str:
    """Wrap body for TS template literal; escape backticks."""
    return "`" + s.replace("`", "\\`") + "`"


def main() -> None:
    pages: list[str] = []

    # --- 10 error codes ---
    err_pages = [
        (
            "guides/error-code/hue-bridge-orange-led",
            "Hue Bridge orange LED (no Internet link)",
            "Orange Bridge LED: local bulbs may work but cloud and voice assistants fail. DHCP, DNS, cable.",
            "Hue Bridge orange LED (no Internet)",
            "The Bridge LED stays orange instead of blue; bulbs may respond locally but cloud automations fail.",
            """<p><strong>Symptom:</strong> orange LED; local control sometimes OK; cloud/Alexa/Google fail.</p>
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
<p>Difficulty 2/5 · 20–40 min · £0–22. Support: <a href="https://www.philips-hue.com/en-gb/support" rel="nofollow noopener" target="_blank">philips-hue.com</a>.</p>""",
        ),
        (
            "guides/error-code/hue-bridge-50-device-limit",
            "Hue Bridge: cannot add new bulbs (Zigbee limit)",
            "Pairing fails near ~50 Hue lights: remove ghosts, pair near Bridge, plan channels, second Bridge.",
            "Hue Bridge: Zigbee device limit",
            "The app refuses to pair a blinking bulb, often after ~50 lights or too many Zigbee routers.",
            """<p><strong>Symptom:</strong> pairing failure while bulb blinks.</p>
<p><strong>Likely causes:</strong> Zigbee mesh saturated; misplaced repeater bulbs; ghost entries in app.</p>
<h2>Steps</h2><ol>
<li>Delete unused lights in app settings.</li>
<li>Pair within 3 m of Bridge, then relocate bulb.</li>
<li>Plan Zigbee channels if using multiple Bridges.</li>
<li>Reset bulb and retry (model-specific sequence).</li>
<li>Large install: second Hue Bridge on separate network.</li>
</ol>
<p>Difficulty 3/5 · 30–60 min · £0–55.</p>""",
        ),
        (
            "guides/error-code/ikea-dirigera-tradfri-migration",
            "DIRIGERA: TRÅDFRI lights missing after migration",
            "IKEA DIRIGERA migration: keep TRÅDFRI on, re-search devices, reset orphans.",
            "DIRIGERA: TRÅDFRI migration",
            "After moving to DIRIGERA, some TRÅDFRI bulbs or sensors no longer appear.",
            """<p><strong>Symptom:</strong> missing TRÅDFRI devices post-migration.</p>
<p><strong>Likely causes:</strong> interrupted migration; two hubs active; out-of-range during transfer.</p>
<h2>Steps</h2><ol>
<li>Run IKEA migration wizard (TRÅDFRI powered).</li>
<li>Power off old gateway when done.</li>
<li>Move missing devices closer; search again.</li>
<li>Reset and re-pair orphans.</li>
<li>IKEA support if migration fails twice.</li>
</ol>
<p>Difficulty 2/5 · 30–60 min · £0.</p>""",
        ),
        (
            "guides/error-code/ikea-tradfri-gateway-offline",
            "IKEA TRÅDFRI gateway offline",
            "TRÅDFRI gateway offline: Ethernet, USB power, mDNS, QR re-add.",
            "TRÅDFRI gateway offline",
            "IKEA app shows gateway disconnected; wall switches may still work locally.",
            """<p><strong>Symptom:</strong> gateway offline in app.</p>
<p><strong>Likely causes:</strong> Ethernet unplugged; weak USB supply; mDNS blocked on router.</p>
<h2>Steps</h2><ol>
<li>Check power LED.</li>
<li>Replug Ethernet to main router.</li>
<li>Reboot router and gateway.</li>
<li>Re-add with QR code.</li>
<li>Factory reset then IKEA support if needed.</li>
</ol>
<p>Difficulty 2/5 · 10–25 min · £0.</p>""",
        ),
        (
            "guides/error-code/nanoleaf-invalid-layout",
            "Nanoleaf: invalid layout or missing panel",
            "Nanoleaf layout rejected: reseat links, find grey panel, firmware, panel limit.",
            "Nanoleaf: invalid layout",
            "App will not validate the shape or one panel stays grey.",
            """<p><strong>Symptom:</strong> invalid layout or grey panel.</p>
<p><strong>Likely causes:</strong> loose link; dead panel; over panel limit; old firmware.</p>
<h2>Steps</h2><ol>
<li>Reseat every connector until click.</li>
<li>Remove panels one-by-one to find fault.</li>
<li>Update controller firmware.</li>
<li>Respect max panels per kit.</li>
<li>Warranty for dead panel.</li>
</ol>
<p>Difficulty 2/5 · 15–35 min · £0. <a href="https://help.nanoleaf.me/" rel="nofollow noopener" target="_blank">Nanoleaf help</a>.</p>""",
        ),
        (
            "guides/error-code/schneider-wiser-matter-thread",
            "Schneider Wiser Matter pairing failed (Thread)",
            "Wiser Matter QR fails: firmware, Thread border router, VLAN isolation.",
            "Wiser Matter: Apple Home failed",
            "Wiser dimmer Matter QR fails or hangs in Apple Home.",
            """<p><strong>Symptom:</strong> Matter pairing failure.</p>
<p><strong>Likely causes:</strong> old firmware; no Thread border router; device already paired.</p>
<h2>Steps</h2><ol>
<li>Update via Wiser by SE.</li>
<li>Ensure <strong>Thread</strong> border router on LAN (radio used with Matter).</li>
<li>Reset Matter on device.</li>
<li>Disable VLAN isolation.</li>
<li>Check Schneider Matter device list.</li>
</ol>
<p>Difficulty 3/5 · 25–45 min · £0.</p>""",
        ),
        (
            "guides/error-code/shelly-dimmer-2-wifi-offline",
            "Shelly Dimmer 2 Wi-Fi offline",
            "Shelly Dimmer 2 offline: 2.4 GHz Wi-Fi, AP mode, DHCP reservation.",
            "Shelly Dimmer 2 Wi-Fi offline",
            "Module unresponsive in app; physical dimmer may still work.",
            """<p><strong>Symptom:</strong> cloud offline.</p>
<p><strong>Likely causes:</strong> Wi-Fi password change; 5 GHz only; DHCP IP change.</p>
<h2>Steps</h2><ol>
<li>Enable <strong>2.4 GHz Wi-Fi</strong>.</li>
<li>Local IP or Shelly AP mode.</li>
<li>Reconfigure Wi-Fi.</li>
<li>DHCP reservation in router.</li>
<li>Local MQTT/Home Assistant backup.</li>
</ol>
<p>Difficulty 2/5 · 15–30 min · £0.</p>""",
        ),
        (
            "guides/error-code/led-dimmer-ghosting",
            "LED dimmer ghosting when off",
            "LED glow when dimmer OFF: bypass, LED dimmer, neutral check.",
            "LED dimmer ghosting",
            "LEDs glow faintly when dimmer is OFF.",
            """<p><strong>Symptom:</strong> ghost glow at OFF.</p>
<p><strong>Likely causes:</strong> dimmer leakage; shared neutral; sensitive LEDs.</p>
<h2>Steps</h2><ol>
<li>Install manufacturer bypass (~£4).</li>
<li>Replace with LED-rated dimmer.</li>
<li>No halogen/LED mix on circuit.</li>
<li>Check neutral at rose.</li>
<li>Electrician if persists.</li>
</ol>
<p><strong>Safety:</strong> LED-rated bipolar capacitor only; no live work.</p>
<p>Difficulty 2/5 · 15–40 min · £4–22.</p>""",
        ),
        (
            "guides/error-code/led-dimmer-low-flicker",
            "LED dimmer flicker at low brightness",
            "Flicker 5–25%: raise minimum, trailing edge, matched bulbs.",
            "LED dimmer low-end flicker",
            "Visible flicker between 5% and 25%.",
            """<p><strong>Symptom:</strong> low-end flicker.</p>
<p><strong>Likely causes:</strong> phase-cut mismatch; cheap drivers; min trim too low.</p>
<h2>Steps</h2><ol>
<li>Raise minimum trim.</li>
<li>Try other dimmable LED brand.</li>
<li>Trailing edge if supported.</li>
<li>No strips on wall dimmer without driver.</li>
<li>Matched dimmer + bulb range.</li>
</ol>
<p>Difficulty 2/5 · 15–35 min · £0–30.</p>""",
        ),
        (
            "guides/error-code/wiz-bulb-dimmer-flicker",
            "WiZ bulb flicker with wall dimmer",
            "WiZ + wall dimmer: 100% on switch, LED dimmer, or app-only dimming.",
            "WiZ bulb wall dimmer flicker",
            "Flicker or dropout when a wall dimmer controls WiZ.",
            """<p><strong>Symptom:</strong> flicker with external dimmer.</p>
<p><strong>Likely causes:</strong> incompatible dimmer; dual dimmer + app control.</p>
<h2>Steps</h2><ol>
<li>Wall dimmer at 100%; dim in WiZ app.</li>
<li>Certified LED dimmer.</li>
<li>Simple switch + app.</li>
<li>Check “dimmable” on box.</li>
<li>Compensation capacitor if ghosting.</li>
</ol>
<p><strong>Safety:</strong> isolate circuit before dimmer swap.</p>
<p>Difficulty 2/5 · 15–35 min · £18–40.</p>""",
        ),
    ]

    for path, title, desc, h1, lead, body in err_pages:
        pages.append(
            f"""  err({{
    path: '{path}',
    title: {repr(title)},
    description: {repr(desc)},
    h1: {repr(h1)},
    lead: {repr(lead)},
    body: {esc_body(body)},
  }}),"""
        )

    # Steinel guide
    steinel_body = f"""<h2>Our pick</h2>
<p>For an existing door light: <strong>L 12 M + E27 LED ~800 lm at 2700–3000 K + NightMatic 2000</strong> (about €80.58 excl. bulb). For motion only: <strong>IS 360-1</strong> under porch.</p>
<p><a href="{A('46381369701')}" rel="sponsored nofollow noopener" target="_blank">L 12 M at 2echoix (€57.19, 22/10/2026)</a></p>
<h2>Datasheet table</h2>
<table><thead><tr><th>Product</th><th>Role</th><th>Flux</th><th>IP</th><th>K</th><th>Load</th><th>Detection</th><th>2echoix</th></tr></thead><tbody>
<tr><td>L 12 M 069155</td><td>Wall lamp, no sensor</td><td>From E27 bulb</td><td>IP44 IK03</td><td>Bulb</td><td>Max 60 W</td><td>–</td><td><a href="{A('46381369701')}" rel="sponsored nofollow" target="_blank">€57.19</a></td></tr>
<tr><td>NightMatic 2000 550417</td><td>Dusk switch</td><td>None</td><td>IP54</td><td>–</td><td>1000 W; 4 LED max; 0.8 W</td><td>2–30 lx</td><td><a href="{A('46359010299')}" rel="sponsored nofollow" target="_blank">€23.39</a></td></tr>
<tr><td>IS 360-1 DE 032845</td><td>Ceiling PIR</td><td>None</td><td>IP54</td><td>–</td><td>350 W LED if &gt;8 W/bulb</td><td>360° Ø8/4 m</td><td><a href="{A('46381369825')}" rel="sponsored nofollow" target="_blank">€41.99</a></td></tr>
<tr><td>XSolar LH-N 035730</td><td>Solar house number</td><td>4 LED marker</td><td>IP44</td><td>4000 K CRI 80–89</td><td>LiFePO4</td><td>Dusk 2 lx</td><td><a href="{A('45843200190')}" rel="sponsored nofollow" target="_blank">€70.59</a></td></tr>
</tbody></table>
<p class="en-note">Steinel datasheets 23/10/2026; 2echoix prices 22/10/2026. Affiliate Awin. Only XSolar LH-N emits useful light alone.</p>
<h2>Combinations</h2>
<ul>
<li><strong>Dusk to dawn:</strong> L 12 M + NightMatic — shield sensor from lamp spill.</li>
<li><strong>Passage only:</strong> IS 360-1 at 2.5–4 m under cover.</li>
<li><strong>Number without wiring:</strong> XSolar LH-N (marker, not path lighting).</li>
</ul>
<h2>NF C 15-100 notes</h2>
<ul>
<li>Outdoor rain: minimum <strong>IP44</strong> — see <a href="/en/guides/ip-ratings-bathroom-outdoor/">IP guide</a>.</li>
<li>NightMatic / IS 360-1: live + neutral; 10 A protection per NightMatic manual.</li>
<li>Respect LED load limits on datasheets.</li>
</ul>
<p><a href="/en/brands/steinel/">Steinel brand page</a>.</p>"""
    pages.append(
        f"""  {{
    path: 'guides/steinel-automatic-outdoor-lighting',
    article: true,
    kicker: 'Buying guide',
    title: 'Steinel automatic outdoor lighting: 4 datasheet products compared',
    description: 'Steinel L 12 M, NightMatic 2000, IS 360-1, XSolar LH-N: IP, loads, thresholds from manufacturer sheets.',
    h1: 'Automate entrance lighting with Steinel',
    lead: 'Four Steinel refs from 2echoix compared on manufacturer data (23/10/2026). Only XSolar LH-N is a self-contained light; L 12 M has no detector.',
    body: {esc_body(steinel_body)},
  }},"""
    )

    # Christmas + luminotherapy
    xmas_body = (
        "<h2>At a glance</h2><table><thead><tr><th>Use</th><th>Require</th></tr></thead><tbody>"
        "<tr><td>Indoor tree</td><td>LED, CE, EN 60598-2-20</td></tr>"
        "<tr><td>Outdoors</td><td>IP44+ (IP65 exposed), low-voltage transformer</td></tr>"
        "<tr><td>Socket</td><td>RCD-protected outdoor circuit</td></tr></tbody></table>"
        "<h2>Indoors</h2><ul><li>LED only near dry needles.</li>"
        "<li>Warm 2200–2700 K — <a href=\"/en/guides/colour-temperature-kelvin/\">Kelvin</a>.</li>"
        "<li>Respect max chains in manual.</li></ul>"
        "<h2>Outdoors</h2><ul><li>IP44 under cover; IP65 in rain.</li>"
        "<li>24 V transformer; uncoiled outdoor extension.</li></ul>"
        "<h2>Consumption</h2><p>kWh = W × hours ÷ 1000. Example: 6 W × 6 h × 40 d = 1.44 kWh.</p>"
        "<h2>Examples</h2>"
        + card(
            "Outdoor IP65",
            "ZOTOYI 15 m S14 festoon",
            "Shatterproof S14, IP65 claimed for exposed façades.",
            "B0972HH7C6",
        )
        + card(
            "Balcony IP44 24 V",
            "10 m G40 festoon with timer",
            "24 V, IP44, dimmable timer per listing.",
            "B0CZ9B4C2B",
        )
        + NOTE
        + "<p>FR tutorials: "
        '<a href="https://1piece1ampoule.fr/tutoriels/programmer-guirlande-lumineuse-exterieure/">program at dusk</a>.</p>'
    )
    pages.append(
        f"""  {{
    path: 'guides/christmas-lights-indoor-outdoor',
    article: true,
    kicker: 'Seasonal guide',
    title: 'Christmas lights indoors and out: IP, transformer, safety, consumption',
    description: 'Christmas lights: IP44 outdoors, low voltage, EN 60598-2-20, RCD, consumption and timers.',
    h1: 'Christmas lights indoors and outdoors',
    lead: 'Fairy lights need the right IP rating, transformer and runtime — same as any luminaire.',
    body: {esc_body(xmas_body)},
  }},"""
    )

    lumi_body = (
        "<h2>Three tools</h2><table><thead><tr><th>Tool</th><th>Role</th><th>Level</th></tr></thead><tbody>"
        "<tr><td>Therapy lamp</td><td>Face-on session</td><td>10,000 lux at stated distance</td></tr>"
        "<tr><td>Dawn simulator</td><td>Gradual wake</td><td>~300 lux max (HF3520, Philips)</td></tr>"
        "<tr><td>Smart bulbs</td><td>Scheduled ramp</td><td>Depends on lm and distance</td></tr></tbody></table>"
        "<h2>Distance</h2><p>Lux falls with distance squared. 10,000 lux at 10 cm ≠ 10,000 lux at arm's length.</p>"
        "<h2>Therapy lamp use</h2><ul><li>Often ~30 min at ~10,000 lux in morning — follow manual.</li>"
        "<li>Offset gaze; CE medical device, UV-free.</li><li>See a doctor if eye disease or bipolar disorder.</li></ul>"
        "<h2>Picks</h2>"
        + card(
            "Light therapy",
            "Beurer TL 30",
            "10,000 lux at ~10 cm, 6500 K, CRI 80, 3-year warranty.",
            "B00MOIWOAK",
        )
        + card(
            "Hue wake-up",
            "Hue White Ambiance E27 1100 lm",
            "EPREL 2187086: 1100 lm, 8.1 W, class D; Bluetooth.",
            "B0FJ8VXHRX",
        )
        + NOTE
    )
    pages.append(
        f"""  {{
    path: 'guides/morning-light-therapy-winter',
    article: true,
    kicker: 'Winter wellbeing',
    title: 'Morning light and light therapy: 10,000 lux, distance, dawn alarms',
    description: 'Therapy lamp vs dawn simulator vs smart bulbs; lux at distance; winter morning routine.',
    h1: 'Light therapy and morning light in winter',
    lead: 'Three different tools — and lux numbers only hold at the distance in the datasheet.',
    body: {esc_body(lumi_body)},
  }},"""
    )

    # Tapo brand
    tapo_body = f"""<h2>Official L530E data (TP-Link France, 23/10/2026)</h2>
<table><tbody>
<tr><th>Flux / power</th><td>806 lm, 8.7 W (~93 lm/W), 60 W equivalent</td></tr>
<tr><th>Energy class</th><td>F (EPREL)</td></tr>
<tr><th>Colour / CRI</th><td>2500–6500 K white + colour; CRI (colour rendering index) ≥ 80</td></tr>
<tr><th>Radio</th><td>Wi-Fi 2.4 GHz only — no Zigbee hub</td></tr>
<tr><th>Dimming</th><td>1–100% in app</td></tr>
<tr><th>Lifetime</th><td>15,000 h</td></tr>
</tbody></table>
<h2>Strengths</h2><ul><li>No hub; Alexa/Google.</li><li>Holiday mode, schedules, sun sync.</li><li>Remembers last state after outage.</li><li>Low entry price.</li></ul>
<h2>Limits</h2><ul><li>Class F efficiency vs Hue White Ambiance class D.</li><li>Each bulb uses a Wi-Fi slot on the router.</li><li>806 lm tight for a large living room.</li><li>Wall switch must stay ON.</li></ul>
<h2>Warranty (France terms — check UK seller)</h2>
<p>TP-Link Tapo <strong>2-year</strong> commercial warranty; support France 01 82 88 35 35. Statutory UK rights apply against your retailer.</p>
<h2>Our view</h2>
<p>Best entry to connected lighting for 1–3 bulbs. Beyond that, <strong>Zigbee</strong> (low-power mesh protocol) systems like Philips Hue scale better — see <a href="/en/articles/smart-bulb-wifi-or-zigbee/">Wi-Fi vs Zigbee</a>.</p>
<p>{uk('B08GDC99PX', 'Tapo L530E E27')} {uk('B08Z4KCJZY', 'Tapo L530E 2-pack')}</p>
{NOTE}
<p>Compare: <a href="/en/brands/philips-hue/">Philips Hue</a>, <a href="/en/guides/smart-bulb-gift-ideas/">gift guide</a>.</p>"""
    pages.append(
        f"""  {{
    path: 'brands/tapo',
    article: true,
    kicker: 'Brand guide',
    title: 'Tapo (TP-Link) review: L530E Wi-Fi bulb, 2-year warranty',
    description: 'Tapo L530E: 806 lm, 8.7 W, class F, Wi-Fi 2.4 GHz, pros/cons and support facts.',
    h1: 'Tapo (TP-Link): our view of the brand',
    lead: 'Tapo is TP-Link’s smart home line. The Wi-Fi colour L530E is the no-hub alternative to Philips Hue for a first room.',
    body: {esc_body(tapo_body)},
  }},"""
    )

    # Lux converter tool - full calculator from FR page
    calc_body = """<p>Link <strong>lux</strong> (light on a surface), <strong>lumens</strong> (total output) and <strong>LED watts</strong> for a floor area. Factor <strong>K</strong> accounts for wall reflectance. Edit any field — others recalculate.</p>
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
<li><a href="https://1piece1ampoule.fr/outils/convertisseur-lux-lumens-watts-surface/">French interactive page</a></li></ul>"""
    pages.append(
        f"""  {{
    path: 'tools/lux-lumen-watt-room-converter',
    article: true,
    kicker: 'Tool',
    title: 'Lux ↔ lumens ↔ LED watts converter by room size',
    description: 'Bidirectional calculator: lux, lumens and LED watts for m² floor area with wall reflection factor K.',
    h1: 'Lux ↔ lumens ↔ LED watts converter',
    lead: 'Relate target lux on the floor to total lumens and LED wattage for a given room size and wall colour.',
    body: {esc_body(calc_body)},
  }},"""
    )

    # Tutorials hub
    tuto_map = {
        "calculer-eclairage-piece-lux": "/en/tutorials/how-much-light-per-room-lux-foot-candles/",
        "poser-ruban-led-sous-meuble-cuisine": "/en/tutorials/under-cabinet-led-strip-kitchen/",
        "eclairer-cave-sans-electricite": "/en/tutorials/light-basement-shed-without-power/",
        "remplacer-halogene-gu10-mr16-par-led": "/en/tutorials/replace-halogen-gu10-mr16-with-led/",
        "interrupteur-connecte-sans-neutre": "/en/tutorials/smart-switch-no-neutral/",
    }
    tuto_items = [
        ("calculer-eclairage-piece-lux", "Calculate room lighting in lux and lumens"),
        ("poser-ruban-led-sous-meuble-cuisine", "Fit under-cabinet LED strip in the kitchen"),
        ("eclairer-cave-sans-electricite", "Light a basement without mains power"),
        ("remplacer-halogene-gu10-mr16-par-led", "Replace halogen GU10 or MR16 with LED"),
        ("interrupteur-connecte-sans-neutre", "Smart switch or bulb without neutral wire"),
        ("appairer-module-zigbee-sans-neutre-sonoff-aqara", "Pair Zigbee no-neutral module (SONOFF, Aqara)"),
        ("eclairage-bureau-teletravail-lux-irc-kelvin", "Home office lighting: lux, CRI, Kelvin"),
        ("programmer-guirlande-lumineuse-exterieure", "Program outdoor fairy lights at dusk"),
        ("reparer-guirlande-led-partie-eteinte", "Fix a partly dead LED light chain"),
    ]
    tuto_lis = []
    for slug, label in tuto_items:
        en = tuto_map.get(slug)
        href = en if en else f"https://1piece1ampoule.fr/tutoriels/{slug}/"
        tuto_lis.append(f'<li><a href="{href}">{label}</a></li>')
    tuto_body = "<h2>All step-by-step tutorials</h2><ul>" + "".join(tuto_lis) + "</ul><p>Five tutorials are fully translated in English; others link to the French site until published.</p>"
    pages.append(
        f"""  {{
    path: 'tutorials',
    article: true,
    kicker: 'Tutorials',
    title: 'Lighting tutorials: lux, LED strips, smart switches, GU10',
    description: 'Hub listing all step-by-step tutorials with links to English pages where available.',
    h1: 'Tutorials',
    lead: 'Practical how-tos from our French workshop — English versions added progressively.',
    body: {esc_body(tuto_body)},
  }},"""
    )

    # Zones hub
    zones_body = """<p>Some spots need precise light: face-level at the mirror, shadow-free worktops, automatic stairs.</p>
<table><thead><tr><th>Zone</th><th>Target</th><th>Pick</th></tr></thead><tbody>
<tr><td><a href="/en/zones/kitchen-worktop/">Kitchen worktop</a></td><td>500 lux, ≥420 lm/m, 4000 K</td><td>DA LIGHT 56 cm bar (1000 lm/m calc.) """ + uk("B07H7HB6LG", "DA LIGHT bar") + """</td></tr>
<tr><td><a href="/en/zones/bathroom-mirror/">Bathroom mirror</a></td><td>300–500 lux face, IP44, 3000–4000 K</td><td>Lucide ONNO mirror bar """ + uk("B07B4CPRDQ", "Lucide ONNO") + """</td></tr>
<tr><td><a href="https://1piece1ampoule.fr/zones/entree-allee-exterieure/">Entry &amp; driveway</a></td><td>2000–3000 lm, IP65, motion</td><td>OREiN 24 W flood """ + uk("B0BPX1ZZXJ", "OREiN flood") + """</td></tr>
<tr><td><a href="https://1piece1ampoule.fr/zones/escaliers/">Stairs</a></td><td>150 lux, auto at both ends</td><td>OSRAM radar E27 """ + uk("B0FGD6H3NZ", "OSRAM motion E27") + """</td></tr>
<tr><td><a href="https://1piece1ampoule.fr/zones/placards-dressing/">Wardrobe</a></td><td>Wireless motion bar</td><td>OUILA 60 cm rechargeable """ + uk("B0F18462GT", "OUILA bar") + """</td></tr>
</tbody></table>
<div class="en-grid">
<a class="en-tile" href="/en/zones/kitchen-worktop/"><strong>Kitchen worktop</strong><span>500 lux under cabinets.</span></a>
<a class="en-tile" href="/en/zones/bathroom-mirror/"><strong>Bathroom mirror</strong><span>Face-level IP44 light.</span></a>
<a class="en-tile" href="https://1piece1ampoule.fr/zones/entree-allee-exterieure/"><strong>Entry (FR)</strong><span>Driveway and porch.</span></a>
<a class="en-tile" href="https://1piece1ampoule.fr/zones/escaliers/"><strong>Stairs (FR)</strong><span>Motion automation.</span></a>
<a class="en-tile" href="https://1piece1ampoule.fr/zones/placards-dressing/"><strong>Wardrobe (FR)</strong><span>Motion bars.</span></a>
</div>
<p>Method: <a href="/en/tutorials/how-much-light-per-room-lux-foot-candles/">lux per room</a>.</p>"""
    pages.append(
        f"""  {{
    path: 'zones',
    article: true,
    kicker: 'Zone guides',
    title: 'Lighting by zone: worktop, mirror, entry, stairs, wardrobe',
    description: 'Five home zones with lux/lumen targets and product picks; table and cards.',
    h1: 'Zones & layout',
    lead: 'Numbered needs per zone — then a vetted product angle for each.',
    body: {esc_body(zones_body)},
  }},"""
    )

    # Bathroom mirror zone
    bath_body = """<h2>Essentials</h2><ul>
<li><strong>Position:</strong> bar above mirror full width, or vertical sconces at eye height (most even).</li>
<li><strong>Level:</strong> 300–500 lux at the face — <a href="/en/tutorials/how-much-light-per-room-lux-foot-candles/">lux guide</a>.</li>
<li><strong>Colour:</strong> 3000–4000 K; cooler looks flat on skin.</li>
<li><strong>CRI (colour rendering index) ≥ 90</strong> for makeup — <a href="/en/guides/cri-colour-rendering-index/">CRI guide</a>.</li>
</ul>
<h2>IP zones (NF C 15-100 — French bathroom volumes)</h2><ul>
<li><strong>Zone 1</strong> (over bath/shower to 2.25 m): IPX4, SELV 12 V only.</li>
<li><strong>Zone 2</strong> (0.6 m around zone 1): IPX4, class II on 30 mA RCD or 12 V.</li>
<li><strong>Outside volumes:</strong> no mandatory IP, but IP44 is prudent near splashes.</li>
</ul>
<p>UK bathrooms: follow BS 7671 zones; principle is similar — keep mains out of splash zones. When in doubt, use a registered electrician.</p>
<h2>Compared wall lights</h2>
<table><thead><tr><th>Product</th><th>Type</th><th>IP</th><th>K</th></tr></thead><tbody>
<tr><td>Lucide ONNO 11 W 60 cm """ + uk("B07B4CPRDQ", "Lucide ONNO") + """</td><td>Over-mirror bar</td><td>IP44</td><td>3000 K</td></tr>
<tr><td>SILAMP 12 W """ + uk("B0BBLYJCFF", "SILAMP 12 W") + """</td><td>Wall</td><td>IP44</td><td>6000–8000 K (cool)</td></tr>
</tbody></table>
<h2>LED mirrors (2echoix outlet — prices 22/10/2026)</h2>
<table><thead><tr><th>Model</th><th>Size</th><th>Price</th></tr></thead><tbody>
<tr><td>Coast anti-fog LED mirror</td><td>70×50 cm</td><td><a href="https://www.awin1.com/pclick.php?p=46317416057&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€79.99</a></td></tr>
<tr><td>Mirlux round dimmable</td><td>Ø60 cm</td><td><a href="https://www.awin1.com/pclick.php?p=46246025083&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€109.00</a></td></tr>
<tr><td>Mirlux frameless 120×60</td><td>120×60 cm</td><td><a href="https://www.awin1.com/pclick.php?p=46390597656&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€139.99</a></td></tr>
</tbody></table>
<p class="en-note">Outlet mirrors may omit IP/K on listing — confirm with seller if near shower zone.</p>
<p><strong>Our pick:</strong> Lucide ONNO — IP44, 3000 K, 60 cm width for a standard basin mirror.</p>
<p>Whole room: French <a href="https://1piece1ampoule.fr/pieces/salle-de-bain/">bathroom page</a>. All zones: <a href="/en/zones/">zones hub</a>.</p>"""
    pages.append(
        f"""  {{
    path: 'zones/bathroom-mirror',
    article: true,
    kicker: 'Zone guide',
    title: 'Bathroom mirror lighting: lux, IP44, colour temperature',
    description: 'Where to place mirror light, NF C 15-100 volumes, CRI for makeup, wall lights and outlet mirrors compared.',
    h1: 'Bathroom mirror lighting',
    lead: 'Ceiling downlight shadows the face. Shaving and makeup need front light at eye level.',
    body: {esc_body(bath_body)},
  }},"""
    )

    # About
    about_body = """<p><strong>1 pièce 1 ampoule</strong> is edited by <strong>Emmanuel Sauvage</strong>. Choosing a bulb should take two minutes; between lumens, Kelvin, CRI (colour rendering index), bases and dimmers, people often end up with the wrong SKU. This site splits each room into <strong>zones</strong> (task, mood, circulation) and gives tone, power and fitting type for each.</p>
<h2>How we pick products</h2><ul>
<li>Start from the <strong>need</strong> (zone, problem, base), then find products that fit.</li>
<li>Compare <strong>manufacturer specs</strong>: lumens, Kelvin, CRI, IP, dimmer compatibility.</li>
<li>Favour established brands with a sensible budget alternative when it exists.</li>
<li>Links are <strong>checked</strong> when pages are updated.</li></ul>
<p>We do not lab-test every item. Selections rely on datasheets and lighting principles. Wrong fit? Your retailer’s returns policy applies (Amazon UK, etc.).</p>
<h2>How the site is funded</h2>
<p>As an Amazon Associate I earn from qualifying purchases via our links — <strong>no extra cost to you</strong>. Advice is not bought: a page that says “you do not need to buy anything” is a good page. Details: <a href="https://1piece1ampoule.fr/affiliation-amazon/">affiliation page</a> (FR).</p>
<h2>Corrections</h2>
<p>Spotted an error? <a href="/en/contact/">Contact</a> — we fix quickly.</p>"""
    pages.append(
        f"""  {{
    path: 'about',
    article: true,
    kicker: 'About',
    title: 'About 1 pièce 1 ampoule and Emmanuel Sauvage',
    description: 'Who writes the site, how products are selected, Amazon Associate disclosure.',
    h1: 'A site to light every room, without jargon',
    lead: 'Independent lighting guides for real homes — specs first, hype never.',
    body: {esc_body(about_body)},
  }},"""
    )

    # Articles hub
    en_article = {
        "ampoule-connectee-wifi-ou-zigbee": "smart-bulb-wifi-or-zigbee",
        "ampoule-dimmable-ou-non": "dimmable-or-non-dimmable-bulb",
        "ampoule-filament-vintage": "vintage-filament-bulb",
        "ampoule-four-frigo": "oven-fridge-bulb",
        "ampoule-led-chauffe-duree-de-vie": "led-heat-lifespan",
        "ampoule-crepusculaire": "dusk-to-dawn-bulb",
    }
    cat_en = {
        "Dépannage": "Troubleshooting",
        "Comparer": "Compare",
        "Meilleurs choix": "Best picks",
        "Guides pratiques": "Practical guides",
    }
    articles_meta = [
        ("ampoule-led-qui-clignote", "Dépannage", "LED flicker: causes", "Flicker diagnosis"),
        ("ampoule-led-reste-allumee-faiblement", "Dépannage", "Ghost glow", "LED glows when off"),
        ("ampoule-led-gresille-bourdonne", "Dépannage", "Buzzing LED", "Dimmer buzz"),
        ("ampoule-led-chauffe-duree-de-vie", "Dépannage", "LED heat & lifespan", "Heat and lifetime"),
        ("ampoule-connectee-wifi-ou-zigbee", "Comparer", "Wi-Fi vs Zigbee", "Connected bulb radio"),
        ("ampoule-dimmable-ou-non", "Comparer", "Dimmable or not", "Dimmer compatibility"),
        ("e27-ou-b22", "Comparer", "E27 or B22", "Bayonet vs screw"),
        ("gu10-ou-gu5-3", "Comparer", "GU10 or GU5.3", "Mains vs 12 V spots"),
        ("ampoule-four-frigo", "Meilleurs choix", "Oven & fridge bulb", "300 °C oven lamp"),
        ("ampoule-filament-vintage", "Meilleurs choix", "Filament vintage", "Edison LED shapes"),
        ("ampoule-crepusculaire", "Meilleurs choix", "Dusk-to-dawn", "Photocell bulb"),
        ("installer-ruban-led", "Guides pratiques", "Install LED strip", "24 V strip guide"),
    ]
    sections: dict[str, list[str]] = {}
    for slug, cat, title, desc in articles_meta:
        if cat not in sections:
            sections[cat] = []
        if slug in en_article:
            href = f"/en/articles/{en_article[slug]}/"
        else:
            href = f"https://1piece1ampoule.fr/articles/{slug}/"
        sections[cat].append(
            f'<a class="en-tile" href="{href}"><strong>{title}</strong><span>{desc}</span></a>'
        )
    art_parts = []
    for cat_fr in ["Dépannage", "Comparer", "Meilleurs choix", "Guides pratiques"]:
        art_parts.append(f"<h2>{cat_en[cat_fr]}</h2><div class=\"en-grid\">{''.join(sections[cat_fr])}</div>")
    articles_hub_body = "".join(art_parts) + "<p>Full French index: <a href=\"https://1piece1ampoule.fr/articles/\">articles hub</a>.</p>"
    pages.append(
        f"""  {{
    path: 'articles',
    article: true,
    kicker: 'Articles',
    title: 'LED lighting articles: troubleshooting, comparisons, guides',
    description: 'Article hub by category; English paths for lot-2 articles, French links for the rest.',
    h1: 'LED lighting articles',
    lead: 'Concrete articles to choose bulbs, avoid mistakes and fix everyday problems.',
    body: {esc_body(articles_hub_body)},
  }},"""
    )

    # --- 5 full articles ---
    wifi_body = (
        "<p>You want phone or voice control, but <strong>Wi-Fi</strong>, <strong>Zigbee</strong> (low-power mesh), "
        "<strong>Bluetooth</strong> and <strong>Matter</strong> (common smart-home layer) blur together. "
        "Here are the two common paths: <strong>Wi-Fi without a hub</strong> (Tapo) and <strong>Zigbee with a hub</strong> (Philips Hue).</p>"
        "<h2>Wi-Fi (Tapo and similar)</h2><ul>"
        "<li><strong>How it works:</strong> bulb joins your router directly.</li>"
        "<li><strong>Pros:</strong> no hub, low entry price, Alexa/Google.</li>"
        "<li><strong>Cons:</strong> each bulb uses Wi-Fi; latency; some features need cloud.</li>"
        "<li><strong>Best for:</strong> 1–6 bulbs, one room, first try.</li></ul>"
        "<h2>Zigbee (Philips Hue)</h2><ul>"
        "<li><strong>How it works:</strong> mesh between bulbs via <strong>Hue Bridge</strong>.</li>"
        "<li><strong>Pros:</strong> fast with many devices; local control; huge catalog.</li>"
        "<li><strong>Cons:</strong> higher cost; hub required (in starter kits).</li>"
        "<li><strong>Best for:</strong> whole-home automation.</li></ul>"
        "<h2>Matter?</h2><p>Matter lets ecosystems share devices. Recent Hue and Tapo SKUs adopt it — reduces lock-in.</p>"
        "<h2>Mistakes</h2><ul>"
        "<li>Smart bulb behind a wall dimmer — feed full voltage; dim in app.</li>"
        "<li>Wall switch OFF — bulb unreachable; use wireless switch or leave ON.</li>"
        "<li>Ignoring tunable white — often more useful than colour alone.</li></ul>"
        "<h2>Verdict</h2><ul>"
        "<li><strong>1–3 rooms, budget:</strong> Tapo L530E.</li>"
        "<li><strong>Whole home:</strong> Hue White &amp; Color starter kit.</li></ul>"
        "<h2>Verified picks</h2>"
        + card("Wi-Fi · no hub", "Tapo L530E E27 colour", "8.7 W, dimmable, Wi-Fi 2.4 GHz.", "B08GDC99PX")
        + card("Hue starter", "Hue White & Color kit E27", "Two bulbs, Bridge, remote; Zigbee mesh.", "B099NRLRG3")
        + card("Hue tunable", "Hue White Ambiance 1100 lm", "EPREL 2187086; wake-up routines.", "B0FJ8VXHRX")
        + NOTE
        + "<h2>FAQ</h2><p><strong>Smart bulb on a dimmer?</strong> No — full voltage; dim in app.</p>"
        "<p><strong>Hue Bridge required?</strong> For full ecosystem and many bulbs, yes; Bluetooth works for ~10 in one room.</p>"
    )
    pages.append(
        f"""  {{
    path: 'articles/smart-bulb-wifi-or-zigbee',
    article: true,
    kicker: 'Article',
    title: 'Smart bulb Wi-Fi or Zigbee: Tapo vs Philips Hue',
    description: 'No-hub Wi-Fi vs Zigbee with Bridge: pros, limits, Matter, mistakes and verdict.',
    h1: 'Smart bulb: Wi-Fi (Tapo) or Zigbee (Hue)?',
    lead: 'Two radios, two budgets, two scaling models — pick before you buy a bag of bulbs.',
    body: {esc_body(wifi_body)},
  }},"""
    )

    dim_body = (
        "<p><strong>Dimmable</strong> means the LED driver can follow a dimmer’s chopped mains waveform. "
        "<strong>Non-dimmable</strong> on a dimmer flickers, buzzes or dies early.</p>"
        "<h2>When you need dimmable</h2><ul>"
        "<li>Rotary or trailing-edge wall dimmer.</li><li>Evening mood in living/dining rooms.</li></ul>"
        "<h2>When you do not</h2><ul>"
        "<li>Simple on/off switch — dimmable works but costs more.</li>"
        "<li><strong>Smart bulb</strong> — dim inside the bulb; remove or lock dimmer at 100%.</li></ul>"
        "<h2>Old dimmer trap</h2><p>Halogen dimmers expect 40–60 W minimum; 7 W LEDs sit below — use LED-rated dimmer with min-load trim.</p>"
        "<h2>Step dim (no dimmer wiring)</h2><p>Some bulbs cycle 100% → 50% → 10% via switch toggles (Philips SceneSwitch).</p>"
        "<h2>WarmGlow</h2><p>Philips WarmGlow shifts 2700 K towards 2200 K as you dim — incandescent feel.</p>"
        "<h2>Picks on dimmer circuits</h2>"
        + card("E27 dimmable", "Philips 100 W eq dimmable E27", "High output, dims smoothly on compatible dimmer.", "B09F9MZ4PH")
        + card("GU10 WarmGlow", "Philips GU10 WarmGlow", "Reference for cosy dimmed spots.", "B073FT1QT2")
        + card("Dimmer upgrade", "Legrand LED dimmer", "Replace legacy dimmer when flicker persists.", "B07MRBVNWM")
        + NOTE
        + "<h2>FAQ</h2><p><strong>Dimmable without dimmer?</strong> Yes, always at 100%.</p>"
        "<p><strong>Non-dimmable on dimmer?</strong> Never — flicker and early failure.</p>"
        + '<p>Still flickering? <a href="https://1piece1ampoule.fr/articles/ampoule-led-qui-clignote/">LED flicker article</a> (FR) or '
        '<a href="/en/guides/gu10-led-flicker-dimmer-diagnosis/">diagnosis guide</a>.</p>'
    )
    pages.append(
        f"""  {{
    path: 'articles/dimmable-or-non-dimmable-bulb',
    article: true,
    kicker: 'Article',
    title: 'Dimmable or non-dimmable LED: which to buy',
    description: 'Dimmable means dimmer-compatible. When you need it, old dimmer traps, step-dim and WarmGlow.',
    h1: 'Dimmable or non-dimmable: the difference',
    lead: 'The number-one return reason for LEDs is dimmer mismatch — both sides must agree.',
    body: {esc_body(dim_body)},
  }},"""
    )

    fil_body = (
        "<p><strong>Filament</strong> LEDs mimic Edison bulbs: visible “filament” through clear or amber glass. "
        "Pretty in open shades — but check lumens, not just shape.</p>"
        "<h2>Shapes</h2><ul>"
        "<li><strong>A60</strong> — versatile pear.</li>"
        "<li><strong>ST64</strong> — long Edison for bare pendants.</li>"
        "<li><strong>G95/G125</strong> — globe over tables.</li>"
        "<li><strong>Candle E14</strong> — chandeliers.</li></ul>"
        "<h2>Clear vs amber</h2><p>Clear: brighter, 2700 K. Amber: 1800–2200 K candle look — decorative, not main room light.</p>"
        "<h2>Pitfalls</h2><ol>"
        "<li>Underestimate lumens — aim ≥806 lm clear glass for primary light.</li>"
        "<li>Non-dimmable on dimmer — see <a href=\"/en/articles/dimmable-or-non-dimmable-bulb/\">dimmable guide</a>.</li>"
        "<li>Glare — bare filament at eye height; use globe or diffuse.</li></ol>"
        "<h2>Uses</h2><p>Table pendant, open shade lamp, outdoor dusk filament for porch presence.</p>"
        "<h2>Picks</h2>"
        + card("Filament E27", "Philips filament E27 60 W eq (2-pack)", "Clear glass, 2700 K, reliable CRI.", "B08HV4WG3Y")
        + card("ST64 dusk", "Lucide ST64 dusk E27", "Edison look + photocell for porch.", "B07TSKP9JC")
        + card("Dimmable ST64", "Philips dimmable filament", "For dimmed pendants.", "B09F9MZ4PH")
        + NOTE
        + "<h2>FAQ</h2><p><strong>Enough light?</strong> Clear ≥806 lm yes; amber mostly mood.</p>"
    )
    pages.append(
        f"""  {{
    path: 'articles/vintage-filament-bulb',
    article: true,
    kicker: 'Article',
    title: 'Vintage filament LED: shapes, glass, lumens',
    description: 'A60, ST64, globe; clear vs amber; glare and dimmer pitfalls; picks.',
    h1: 'Vintage filament LED bulbs',
    lead: 'Decorative filaments need the same lux math as plain LEDs — especially in amber glass.',
    body: {esc_body(fil_body)},
  }},"""
    )

    oven_body = (
        "<p>Oven or fridge bulb failed? <strong>Never</strong> a standard LED in an oven. Fridge needs a compact E14 LED.</p>"
        "<h2>Oven: heat first</h2><p>Ovens reach 250–300 °C. Standard LED electronics fail above ~80–100 °C. "
        "You need an <strong>oven-rated lamp to 300 °C</strong>.</p>"
        "<h3>How to match</h3><ol>"
        "<li><strong>Base:</strong> usually <strong>E14</strong>, sometimes G9/E27 — read old bulb or manual.</li>"
        "<li><strong>Shape:</strong> tubular T22/T25 — glass cover must refit.</li>"
        "<li><strong>Power:</strong> 15–40 W halogen equivalent is plenty.</li>"
        "<li>Box must say <strong>300 °C</strong>.</li></ol>"
        "<h3>Safe swap</h3><ul>"
        "<li>Cold oven, isolated circuit.</li>"
        "<li>Remove glass cover (rubber glove helps).</li>"
        "<li>Do not touch halogen glass with bare fingers.</li></ul>"
        "<h2>Fridge</h2><p>Cold and humid — small <strong>E14 LED 2–4 W</strong> (200–300 lm), neutral/cool white for food colour.</p>"
        "<h2>Range hood</h2><p>Often E14 or GU10/G4 — moderate heat; LED OK after checking base.</p>"
        "<h2>Picks</h2>"
        + card("Oven E14 300°C", "YIIFELL oven E14 (4-pack)", "Rated for oven temperatures per listing.", "B0DDK55MF7")
        + card("Oven E14", "Caldarax oven lamp (2-pack)", "300 °C oven-specific.", "B0D6BJZJ56")
        + card("Fridge E14", "DiCUNO E14 3 W (2-pack)", "Compact fridge replacement.", "B0B7W9VRB7")
        + NOTE
        + "<h2>FAQ</h2><p><strong>Normal LED in oven?</strong> No — driver will fail and may shatter.</p>"
        + '<p>Bases: <a href="https://1piece1ampoule.fr/articles/e27-ou-b22/">E27 vs B22</a> (FR).</p>'
    )
    pages.append(
        f"""  {{
    path: 'articles/oven-fridge-bulb',
    article: true,
    kicker: 'Article',
    title: 'Oven (300 °C) and fridge bulbs: how to choose',
    description: 'Oven-specific high-temp lamp vs fridge E14 LED; safety and sizing.',
    h1: 'Oven and fridge bulbs',
    lead: 'Two appliances, two specs — heat rating matters more than lumens in the oven.',
    body: {esc_body(oven_body)},
  }},"""
    )

    heat_body = (
        "<p>LEDs run cooler than halogen, but heat still kills drivers. "
        "About 60–70% of input power becomes heat — less total watts, so less heat overall.</p>"
        "<h2>Normal temperature</h2><p>Base <strong>warm 50–70 °C</strong> after an hour is normal. "
        "Too hot to touch or smelling hot plastic is not.</p>"
        "<h2>Why 15,000 h claims fail early</h2><ul>"
        "<li><strong>Enclosed fitting</strong> — no airflow; pick “enclosed rated” bulbs.</li>"
        "<li><strong>Downlights in insulation</strong> — leave air gap or use fire hood.</li>"
        "<li><strong>Upside-down pendant</strong> — heat rises into driver.</li>"
        "<li><strong>Frequent switching</strong> with wrong sensor bulb.</li>"
        "<li><strong>Bad dimmer match</strong> stresses driver.</li></ul>"
        "<h2>What actually fails</h2><p>The LED chip lasts; <strong>electrolytic capacitors</strong> in the driver dry out with heat.</p>"
        "<h2>Buy for longevity</h2><ol>"
        "<li>Brand with real warranty (Philips, Ledvance…).</li>"
        "<li>Right lumens, not oversized in small globe — <a href=\"/en/tutorials/how-much-light-per-room-lux-foot-candles/\">size the room</a>.</li>"
        "<li>Special cases: <a href=\"/en/articles/oven-fridge-bulb/\">oven bulb</a>, outdoor IP.</li>"
        "<li>Motion duty: use motion-rated lamp.</li></ol>"
        "<h2>L70 fade</h2><p>End of rated life = 70% of initial lumens — room feeling dimmer is real.</p>"
        "<h2>Examples</h2>"
        + uk("B01KHIM7OG", "Philips E27 806 lm")
        + uk("B0DGPZCMG6", "Enclosed-rated LED example")
        + uk("B0FGD6H3NZ", "OSRAM motion E27")
        + NOTE
        + "<h2>FAQ</h2><p><strong>Enclosed fixture?</strong> Only if bulb says enclosed compatible.</p>"
        "<p><strong>Normal warmth?</strong> Warm base yes; burning smell no.</p>"
    )
    pages.append(
        f"""  {{
    path: 'articles/led-heat-lifespan',
    article: true,
    kicker: 'Article',
    title: 'LED heat and lifespan: normal warmth vs early failure',
    description: 'Why LEDs fail before 15,000 h: enclosed fittings, drivers, dimmers; how to choose for longevity.',
    h1: 'LED heat: normal or not, and making them last',
    lead: 'Warm to the touch is fine; too hot to hold signals the wrong lamp or fitting.',
    body: {esc_body(heat_body)},
  }},"""
    )

    if len(pages) != 25:
        raise SystemExit(f"Expected 25 pages, got {len(pages)}")

    content = HEADER + "\n".join(pages) + "\n" + FOOTER
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Wrote {OUT} ({len(content)} bytes, {len(pages)} pages)")


if __name__ == "__main__":
    main()
