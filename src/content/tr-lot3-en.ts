// EN lot 3 (12/11/2026): 27 error-code sheets, the error-code directory and 4 tutorials.
// Source: FR pages (catalog-fr.json, tutoriels.ts and the tutorial pages). Same facts, rewritten for UK/US readers.
// Prices: parts costs are kept as shown on the French pages (EUR); no figure added.
import type { EnPage } from './en';

const uk = (asin: string, label: string) =>
  `<a class="en-amz" href="https://www.amazon.co.uk/dp/${asin}?tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-asin="${asin}" data-product="${label}">Check price on Amazon UK</a>`;
/** Search link on Amazon UK: used when the French ASIN has not been checked on amazon.co.uk. */
const ukSearch = (q: string, label: string) =>
  `<a class="en-amz" href="https://www.amazon.co.uk/s?k=${encodeURIComponent(q)}&tag=roboteducatif-21" rel="nofollow sponsored noopener" target="_blank" data-product="${label}">Search on Amazon UK</a>`;
const note = `<p class="en-note">Product notes come from the manufacturer's listing. Prices and availability change: check them before buying. As an Amazon Associate I earn from qualifying purchases.</p>`;

type Err = {
  slug: string;
  fr: string;
  brand: string;
  title: string;
  code: string;
  symptom: string;
  cause: string;
  steps: string[];
  tools: string;
  safety?: string;
  difficulty: number;
  time: string;
  cost: string;
  support: string;
  supportLabel: string;
};

const HUE = 'https://www.philips-hue.com/en-gb/support';
const SHELLY = 'https://support.shelly.cloud/';
const IKEA = 'https://www.ikea.com/gb/en/customer-service/';
const GOVEE = 'https://help.govee.com/';

export const ERR_LOT3: Err[] = [
  {
    slug: 'hue-bridge-not-found-in-app', fr: 'hue-bridge-introuvable-app', brand: 'Philips Hue',
    title: 'Hue Bridge not found in the Philips Hue app', code: '“No bridge found”',
    symptom: 'The Hue app says no Bridge was found, or keeps searching, even though the Bridge is powered and its LEDs are blue (steady or flashing).',
    cause: 'The phone is on a guest Wi-Fi network that isolates devices, the router firewall blocks multicast discovery, the Bridge sits on a different subnet, or the Ethernet cable is faulty.',
    steps: [
      'Plug the Bridge straight into the router with Ethernet, not into a mesh satellite or extender that isolates clients.',
      'Take the phone off guest Wi-Fi for now, or allow local discovery (mDNS/Bonjour) in the router settings.',
      'Restart the router and the Bridge: unplug both for 30 seconds.',
      'Reinstall the Hue app, or use “Add Bridge” and type the code printed under the Bridge.',
      'If the LED stays orange, try another LAN port on the router.',
    ],
    tools: 'smartphone, a spare Ethernet cable for testing, router with 2.4 GHz Wi-Fi',
    difficulty: 2, time: '15–30 min', cost: 'free', support: HUE, supportLabel: 'Philips Hue support',
  },
  {
    slug: 'hue-bulb-unreachable', fr: 'hue-ampoule-hors-ligne', brand: 'Philips Hue',
    title: 'Hue bulb shows as “unreachable” in the app', code: 'Bulb unreachable / offline',
    symptom: 'One or more Hue bulbs are greyed out and ignore scenes, while the Bridge LEDs are blue.',
    cause: 'The wall switch is off, the bulb is too far from the rest of the Zigbee mesh, an incompatible dimmer causes micro power cuts, or a firmware update is pending.',
    steps: [
      'Leave the wall switch on at all times (or fit a Hue wall switch module so the bulb stays powered).',
      'Move the bulb temporarily closer to another Hue light that is switched on.',
      'In the app, open the bulb settings; delete it and add it again if needed.',
      'Update the firmware (Settings, then Software update).',
      'If this one bulb fails in several different fittings, the bulb itself may be faulty.',
    ],
    tools: 'wall switch, Hue app',
    difficulty: 2, time: '10–25 min', cost: 'free', support: HUE, supportLabel: 'Philips Hue support',
  },
  {
    slug: 'hue-bulb-dimmer-buzzing', fr: 'hue-ampoule-variateur-grésille', brand: 'Philips Hue',
    title: 'Hue bulb buzzing or flickering on a wall dimmer', code: 'Buzzing / flicker on a dimmer',
    symptom: 'The dimmer hums, the light flickers at low brightness, or the bulb switches itself off halfway down.',
    cause: 'A phase-cut dimmer that is not LED-compatible, a circuit below the dimmer’s minimum load, or an old rotary dimmer with no bypass.',
    steps: [
      'Check whether your dimmer is listed as compatible with LED or Hue bulbs on the manufacturer’s website.',
      'Swap it for an LED dimmer, or for the wireless Hue Dimmer Switch with the mains switch left permanently on.',
      'Do not mix halogen and Hue bulbs on the same dimmer.',
      'If the dimmer feeds several lights, make sure the total load reaches its minimum (often around 40 W of LED in total).',
      'If it still buzzes, have the wiring checked by an electrician.',
    ],
    tools: 'an LED-compatible dimmer or the Hue Dimmer Switch',
    safety: 'Switch off the circuit at the consumer unit before replacing a wall dimmer. Mains (230 V) work is for competent people only.',
    difficulty: 2, time: '15–40 min', cost: '€25–55 in France for a new dimmer', support: HUE, supportLabel: 'Philips Hue support',
  },
  {
    slug: 'hue-sync-box-lights-not-syncing', fr: 'hue-sync-box-pas-de-sync', brand: 'Philips Hue',
    title: 'Hue Sync Box: lights do not follow the TV picture', code: 'No light/TV sync',
    symptom: 'The video plays but the Hue lights stay still or off; the Hue Sync app sometimes shows “No entertainment area”.',
    cause: 'No entertainment area has been created, HDMI-CEC is off, 4K120 is not supported on that signal path, or the lights are not entertainment-capable.',
    steps: [
      'Create an entertainment area in the Hue app and add the lights to it.',
      'Connect the TV box or console to an HDMI IN port on the Sync Box, and HDMI OUT to the TV (an ARC soundbar alone, without the Sync Box in the chain, will not work).',
      'Turn on HDMI-CEC on the TV so everything powers on together.',
      'Test at 1080p to rule out a bandwidth problem.',
      'Check that the bulbs are colour models and that their firmware is up to date.',
    ],
    tools: 'HDMI 2.0 cable, Hue Sync app',
    difficulty: 2, time: '20–35 min', cost: 'free', support: HUE, supportLabel: 'Philips Hue support',
  },
  {
    slug: 'hue-sync-box-lag', fr: 'hue-sync-box-latence', brand: 'Philips Hue',
    title: 'Hue Sync Box: visible delay between picture and lights', code: 'Lag / light delay',
    symptom: 'Colours arrive 200–500 ms late, which is distracting in fast games.',
    cause: 'An “intense” sync mode with heavy smoothing, slow TV picture processing (motion smoothing), or a busy Bridge.',
    steps: [
      'In Hue Sync, lower the sync intensity or use the game / low-latency mode.',
      'Turn on game mode on the TV and switch off motion smoothing.',
      'Keep fewer lights in the entertainment area.',
      'Connect the Bridge to the router with Ethernet.',
      'If the delay is extreme, test with a single bulb close to the Bridge.',
    ],
    tools: 'Hue Sync app (advanced settings)',
    difficulty: 1, time: '10–20 min', cost: 'free', support: HUE, supportLabel: 'Philips Hue support',
  },
  {
    slug: 'shelly-dimmer-2-overheating', fr: 'shelly-dimmer-2-surchauffe', brand: 'Shelly',
    title: 'Shelly Dimmer 2 getting hot or switching off', code: 'Overheating / automatic shutdown',
    symptom: 'The module gets very hot, the dimmer cuts out, or the Shelly app shows a temperature warning.',
    cause: 'Too much LED load, no room for air in a sealed back box, a no-neutral setup that is poorly compensated, or non-dimmable bulbs.',
    steps: [
      'Switch off the power and add up the wattage of the bulbs: stay within the 200 W of LED stated for the module.',
      'Use only dimmable bulbs that suit the leading-edge or trailing-edge mode selected in the Shelly settings.',
      'Leave some air around the module in the back box; do not pack it in.',
      'Turn on overheating protection in the app and lower the minimum calibration.',
      'If it runs hot on a small load, contact Shelly support or an electrician.',
    ],
    tools: 'insulated screwdriver, multimeter',
    safety: 'Never install it live: switch off at the consumer unit. Maximum load 200 W of LED; overloading it is a fire risk.',
    difficulty: 3, time: '30–60 min', cost: '€0–80 in France', support: SHELLY, supportLabel: 'Shelly support',
  },
  {
    slug: 'shelly-dimmer-2-flicker-low-brightness', fr: 'shelly-dimmer-2-clignote-min', brand: 'Shelly',
    title: 'Shelly Dimmer 2: LEDs flicker at low brightness', code: 'Flicker at low brightness',
    symptom: 'At 5–15 % the bulbs flicker or go out; at 100 % everything is fine.',
    cause: 'Wrong minimum/maximum calibration, the wrong dimming mode for the bulb (trailing vs leading edge), or too little load with a single bulb.',
    steps: [
      'Run auto-calibration in the Shelly app (dimmer settings, then Calibrate).',
      'Switch between leading and trailing edge according to the bulb’s instructions.',
      'Add load: another bulb, or a Shelly Dimmer Bypass if there is only one LED.',
      'Raise the minimum brightness setting in the app.',
      'If nothing works, replace the bulbs with models certified as dimmable.',
    ],
    tools: 'Shelly app, dimmable bulbs',
    difficulty: 2, time: '15–35 min', cost: '€0–20 in France', support: SHELLY, supportLabel: 'Shelly support',
  },
  {
    slug: 'shelly-dimmer-2-no-neutral', fr: 'shelly-dimmer-2-neutre-absent', brand: 'Shelly',
    title: 'Shelly Dimmer 2 with no neutral at the ceiling light', code: 'No neutral / module will not start',
    symptom: 'The module does not start, its Wi-Fi LED stays off, or the bulb glows faintly after being switched off.',
    cause: 'A no-neutral installation without the Shelly Bypass, the capacitive load of LEDs, or a misidentified switched live.',
    steps: [
      'Check whether there is a neutral (blue) in the box. If not, fit the Shelly Bypass at the light, as shown in Shelly’s diagram.',
      'Follow Shelly’s official no-neutral wiring diagram exactly.',
      'Do not use non-dimmable bulbs with it.',
      'For two-way switching or any doubt, have an electrician run a neutral.',
      'If you are unsure which wire is which, stop and call a professional.',
    ],
    tools: 'Shelly Bypass; an electrician if a neutral has to be run',
    safety: 'This is 230 V work at the ceiling rose. Without a neutral, the bypass must follow Shelly’s official diagram; a mistake can cause a shock or a fire.',
    difficulty: 4, time: '45–90 min', cost: '€15–120 in France', support: SHELLY, supportLabel: 'Shelly support',
  },
  {
    slug: 'shelly-plus-1pm-overload', fr: 'shelly-plus-1pm-surcharge', brand: 'Shelly',
    title: 'Shelly Plus 1PM keeps tripping or the lights flicker', code: 'Overload / relay cutting out',
    symptom: 'The relay keeps cutting out, the power reading shows spikes, or there is a hot-component smell.',
    cause: 'An inductive load (an old halogen transformer), a partial short circuit, or an LED fitting with a failing driver.',
    steps: [
      'Switch off and inspect the light fitting, especially its LED driver.',
      'Check the maximum power and alerts in the app.',
      'Remove old 12 V transformers if you have moved to native 230 V LED bulbs.',
      'Replace any fitting you suspect.',
      'If the Shelly itself is faulty, use the Shelly warranty.',
    ],
    tools: 'Shelly app (power reading)',
    safety: 'Do not exceed 16 A or the rated load. Switch off at the consumer unit before working on it.',
    difficulty: 3, time: '20–40 min', cost: '€0–50 in France', support: SHELLY, supportLabel: 'Shelly support',
  },
  {
    slug: 'shelly-plus-1pm-reads-zero-watts', fr: 'shelly-plus-1pm-mesure-zero', brand: 'Shelly',
    title: 'Shelly Plus 1PM shows 0 W while the light is on', code: 'Power reading stuck at 0 W',
    symptom: 'The power reading stays at zero or far too low, so power-based automations never fire.',
    cause: 'Energy metering not calibrated, LEDs drawing less than the measuring threshold, or live and neutral swapped on the metering side.',
    steps: [
      'Check the wiring against the manual (live in and live out for metering).',
      'Test with a known resistive load, such as a 60 W halogen lamp.',
      'LEDs under about 5 W can fall below the threshold; that is normal with some firmware.',
      'Update the Shelly firmware.',
      'If you need accurate LED readings, use a plug-in power meter as a reference.',
    ],
    tools: 'Shelly app, a known load (incandescent or halogen test lamp)',
    difficulty: 2, time: '10–25 min', cost: 'free', support: SHELLY, supportLabel: 'Shelly support',
  },
  {
    slug: 'shelly-plus-1pm-ghosting', fr: 'shelly-plus-1pm-ghosting', brand: 'Shelly',
    title: 'Shelly Plus 1PM: LED bulb still glows when off', code: 'Ghosting / faint glow',
    symptom: 'After switching off from the app, the LEDs keep a faint glow.',
    cause: 'Leakage current through the relay circuit, very sensitive LEDs, or a neutral shared with another circuit.',
    steps: [
      'Turn on the “turn off after” or zero-cross option if your firmware has it.',
      'Fit an LED suppression (anti-ghosting) capacitor as described by Shelly or the switch maker.',
      'Use bulbs that are less sensitive to residual current.',
      'Avoid circuits shared with electronic timers.',
      'If the glow is strong, have an electrician check the neutral wiring.',
    ],
    tools: 'anti-ghosting capacitor or compatible bulbs',
    difficulty: 2, time: '15–30 min', cost: '€4–15 in France', support: SHELLY, supportLabel: 'Shelly support',
  },
  {
    slug: 'ikea-tradfri-pairing-failed', fr: 'ikea-tradfri-pairing-echoue', brand: 'IKEA',
    title: 'TRÅDFRI gateway: bulb pairing fails', code: 'Pairing failed / bulb not found',
    symptom: 'The app keeps searching or fails at 90 %; the bulb blinks but never appears.',
    cause: 'Out-of-date gateway, a bulb still linked to another hub, too much Zigbee distance, or the phone on a guest network.',
    steps: [
      'Update the gateway firmware from the app.',
      'Reset the bulb (six quick off/on cycles on most TRÅDFRI models).',
      'Hold the bulb right next to the gateway while pairing.',
      'Keep the phone on the same Wi-Fi as the gateway, not a guest network.',
      'A second-hand bulb must be reset first.',
    ],
    tools: 'IKEA Home smart app, TRÅDFRI bulb about 10 cm from the gateway',
    difficulty: 2, time: '15–35 min', cost: 'free', support: IKEA, supportLabel: 'IKEA customer service',
  },
  {
    slug: 'ikea-tradfri-dimmer-flicker', fr: 'ikea-tradfri-variateur-incompatible', brand: 'IKEA',
    title: 'TRÅDFRI dimmer: flicker or a very short dimming range', code: 'TRÅDFRI dimmer not dimming properly',
    symptom: 'The IKEA wall dimmer only works over the last few percent, or makes the lights flicker.',
    cause: 'Non-TRÅDFRI or non-dimmable bulbs on the circuit, out-of-date dimmer firmware, or the minimum load not reached.',
    steps: [
      'Use dimmable TRÅDFRI bulbs on that circuit.',
      'Update the dimmer through the gateway.',
      'Avoid mixing brands on the same wired dimmer.',
      'Test without the dimmer (app only) to isolate the problem.',
      'Outside the IKEA ecosystem, use a dimmer certified for your bulbs.',
    ],
    tools: 'TRÅDFRI dimmer or dimmable IKEA bulbs',
    difficulty: 2, time: '15–30 min', cost: '€0–35 in France', support: IKEA, supportLabel: 'IKEA customer service',
  },
  {
    slug: 'ikea-dirigera-matter-pairing-failed', fr: 'ikea-dirigera-matter-echec', brand: 'IKEA',
    title: 'DIRIGERA: cannot add a Matter device', code: 'Matter / HomeKit pairing failed',
    symptom: 'The Matter QR code fails, or the device stays “pending” in Apple Home or Google Home.',
    cause: 'Out-of-date DIRIGERA firmware, a Matter device already paired elsewhere, no Thread border router, or an isolated Wi-Fi VLAN.',
    steps: [
      'Update DIRIGERA and the IKEA app.',
      'Factory-reset the Matter device (maker’s procedure) before trying again.',
      'Stay on the same 2.4 GHz network and avoid client isolation.',
      'For Thread devices, make sure there is a border router (DIRIGERA or a HomePod mini).',
      'Check IKEA’s compatibility list for that model.',
    ],
    tools: 'IKEA Home smart app, an iPhone for HomeKit',
    difficulty: 3, time: '20–45 min', cost: 'free', support: IKEA, supportLabel: 'IKEA customer service',
  },
  {
    slug: 'ikea-dirigera-red-light-offline', fr: 'ikea-dirigera-wifi-rouge', brand: 'IKEA',
    title: 'DIRIGERA: red light or no cloud connection', code: 'Red LED / no Internet',
    symptom: 'The hub blinks red; cloud automations and remote control stop working.',
    cause: 'Wi-Fi set up wrongly, a faulty Ethernet cable, filtered DNS, or an IKEA service outage.',
    steps: [
      'Test with a wired Ethernet connection to the router.',
      'Set up the 2.4 GHz Wi-Fi again in the app.',
      'Restart the router.',
      'Check whether IKEA’s online services are down.',
      'Factory reset only as a last resort: everything will need pairing again.',
    ],
    tools: 'Ethernet or 2.4 GHz Wi-Fi',
    difficulty: 2, time: '15–30 min', cost: 'free', support: IKEA, supportLabel: 'IKEA customer service',
  },
  {
    slug: 'govee-strip-wifi-offline', fr: 'govee-strip-wifi-offline', brand: 'Govee',
    title: 'Govee RGBIC strip offline in the app', code: 'Device offline in Govee Home',
    symptom: 'The strip no longer responds and shows “offline”, although it is plugged in.',
    cause: 'The router only offers 5 GHz, the Wi-Fi password changed, unstable mains power, or a Govee server problem.',
    steps: [
      'Check the LED on the controller to see whether Wi-Fi is configured.',
      'Set up 2.4 GHz Wi-Fi again in the app (manual add).',
      'Avoid timer power strips that cut standby power.',
      'Update the firmware in Govee Home.',
      'If the model supports it, test local Bluetooth control.',
    ],
    tools: 'Govee Home app, 2.4 GHz Wi-Fi',
    difficulty: 2, time: '10–25 min', cost: 'free', support: GOVEE, supportLabel: 'Govee help centre',
  },
  {
    slug: 'govee-strip-wrong-segment-colours', fr: 'govee-strip-couleurs-decalees', brand: 'Govee',
    title: 'Govee strip: RGBIC colours on the wrong segments', code: 'Shifted colours / reversed segments',
    symptom: 'Effects do not match the physical zones of the strip (red where blue should be on a segment).',
    cause: 'Segment order not set after cutting or reconnecting the strip, a connector fitted the wrong way round, or the wrong profile in the app.',
    steps: [
      'In the app, open the strip settings and run the segment calibration / order setting.',
      'Check the arrows on the connector (signal direction).',
      'If you cut the strip, set the new number of segments.',
      'Reset the controller with its reset button.',
      'Clean or replace an oxidised connector or Govee extension kit.',
    ],
    tools: 'Govee app (segment calibration)',
    difficulty: 2, time: '15–30 min', cost: 'free', support: GOVEE, supportLabel: 'Govee help centre',
  },
  {
    slug: 'govee-bulb-pairing-failed', fr: 'govee-bulb-pairing-bluetooth', brand: 'Govee',
    title: 'Govee bulb will not add to the app', code: 'Bluetooth / Wi-Fi pairing failed',
    symptom: 'The app cannot find the bulb, or pairing fails at the last step.',
    cause: 'Bluetooth or location permission refused, the bulb too far away, or the bulb still linked to another Govee account.',
    steps: [
      'Give Govee Home Bluetooth and location permission.',
      'Switch off other phones nearby that run the Govee app.',
      'Reset the bulb (three quick off/on cycles on H600x models).',
      'Pair over Bluetooth first, close to the bulb, then add Wi-Fi.',
      'Remove the bulb from the previous owner’s account if needed.',
    ],
    tools: 'Bluetooth on, location on (Android)',
    difficulty: 2, time: '10–20 min', cost: 'free', support: GOVEE, supportLabel: 'Govee help centre',
  },
  {
    slug: 'govee-bulb-music-sync-lag', fr: 'govee-bulb-music-sync-lag', brand: 'Govee',
    title: 'Govee bulb: music mode reacts poorly', code: 'Music sync lagging / not reacting',
    symptom: 'The colours barely follow the sound, or follow it with a long delay.',
    cause: 'The phone’s microphone is used instead of the bulb’s own (when it has one), the volume is too low, or Bluetooth adds latency.',
    steps: [
      'Pick the right music mode (bulb microphone or phone microphone, depending on the model).',
      'Turn the source volume up, without distortion.',
      'Bring the phone closer if its microphone is the one listening.',
      'Use Wi-Fi rather than Bluetooth alone.',
      'Turn off battery saving for the Govee app.',
    ],
    tools: 'phone microphone, Govee music mode',
    difficulty: 1, time: '5–15 min', cost: 'free', support: GOVEE, supportLabel: 'Govee help centre',
  },
  {
    slug: 'nanoleaf-alexa-google-not-responding', fr: 'nanoleaf-alexa-hors-sync', brand: 'Nanoleaf',
    title: 'Nanoleaf: voice commands do nothing', code: 'Alexa / Google no longer control it',
    symptom: '“Hey Google” or Alexa no longer turns the panels on, although the Nanoleaf app works.',
    cause: 'The cloud link broke after an account change, the skill was disabled, or the panels are offline on the cloud side.',
    steps: [
      'In Alexa or Google Home, disable and re-enable the Nanoleaf skill.',
      'Link your Nanoleaf account again.',
      'Check that the panels show as online in the Nanoleaf app.',
      'Rename the device without special characters.',
      'After moving accounts, allow up to 24 hours for the cloud to catch up.',
    ],
    tools: 'Alexa or Google Home app',
    difficulty: 2, time: '10–20 min', cost: 'free', support: 'https://help.nanoleaf.me/', supportLabel: 'Nanoleaf help',
  },
  {
    slug: 'wiz-bulb-local-mode-only', fr: 'wiz-bulb-pilotage-local', brand: 'WiZ',
    title: 'WiZ: “local mode” only, no remote control', code: 'Local mode only / no cloud',
    symptom: 'The app works at home but not when you are out; the cloud icon is crossed out.',
    cause: 'No WiZ account linked, outgoing traffic blocked by a firewall, or the home Internet connection down.',
    steps: [
      'Create or sign back in to a WiZ account.',
      'Check that the router has Internet access.',
      'Allow the bulb’s outgoing connections (an isolated IoT VLAN with no Internet blocks the cloud).',
      'Turn off any VPN on the phone while testing.',
      'For local-only control, third-party integrations (for example over MQTT) are an option.',
    ],
    tools: 'WiZ app, same home network',
    difficulty: 1, time: '5–15 min', cost: 'free', support: 'https://www.wizconnected.com/en-gb/support', supportLabel: 'WiZ support',
  },
  {
    slug: 'legrand-netatmo-dimmer-offline', fr: 'legrand-netatmo-hors-ligne', brand: 'Legrand Netatmo',
    title: 'Legrand Céliane with Netatmo dimmer offline', code: 'Netatmo module offline',
    symptom: 'The module has vanished from the app; the physical button sometimes still works.',
    cause: '2.4 GHz Wi-Fi issue, a new router, a no-neutral module set up wrongly, or an app update.',
    steps: [
      'Check the live and neutral supply at the module.',
      'Set up the Wi-Fi again from the Legrand Home + Control app.',
      'Move the router closer while testing.',
      'Update the module firmware from the app.',
      'If an error LED stays lit, contact Legrand support.',
    ],
    tools: 'Legrand Home + Control app',
    difficulty: 2, time: '15–30 min', cost: 'free', support: 'https://www.legrand.fr/nous-contacter', supportLabel: 'Legrand support (French site)',
  },
  {
    slug: 'legrand-netatmo-dimmer-buzzing', fr: 'legrand-netatmo-variateur-grésille', brand: 'Legrand Netatmo',
    title: 'Céliane with Netatmo: dimmer buzzing with LEDs', code: 'Céliane dimmer buzzing',
    symptom: 'A hum from the switch plate, and LEDs that flicker at low brightness.',
    cause: 'Non-dimmable bulbs, minimum load not reached, or no neutral without the matching Legrand accessory.',
    steps: [
      'Use bulbs listed as compatible with the Legrand dimmer.',
      'Check the wiring diagram (neutral present).',
      'Add a minimum-load module if there is only one LED.',
      'Run the calibration in the app if your model offers it.',
      'Have the installation checked by an approved Legrand installer.',
    ],
    tools: 'dimmable bulbs approved by Legrand, a bypass if needed',
    safety: '230 V electrical work: switch off at the consumer unit first, and follow the Céliane instructions for the neutral.',
    difficulty: 3, time: '25–50 min', cost: '€15–60 in France', support: 'https://www.legrand.fr/nous-contacter', supportLabel: 'Legrand support (French site)',
  },
  {
    slug: 'legrand-netatmo-voice-assistant-not-found', fr: 'legrand-netatmo-alex', brand: 'Legrand Netatmo',
    title: 'Céliane with Netatmo: voice assistant cannot see the light', code: 'Alexa / Google cannot find the module',
    symptom: 'The dimmer works in the Legrand app but does not show up in Alexa or Google Home.',
    cause: 'Netatmo cloud link not enabled, skill not linked, or a different Netatmo account.',
    steps: [
      'Turn on Alexa / Google compatibility in Home + Control.',
      'Link the same Netatmo account.',
      'Run device discovery in the voice assistant.',
      'Rename the light without accents or special characters.',
      'Syncing can take up to an hour.',
    ],
    tools: 'Home + Control and Alexa apps',
    difficulty: 2, time: '10–25 min', cost: 'free', support: 'https://www.legrand.fr/nous-contacter', supportLabel: 'Legrand support (French site)',
  },
  {
    slug: 'schneider-wiser-dimming-range', fr: 'schneider-wiser-calibration', brand: 'Schneider Wiser',
    title: 'Wiser: LEDs do not dim fully, or flicker', code: 'Wrong dimming range',
    symptom: 'The light will not go below about 30 %, or it flickers.',
    cause: 'Wrong load type selected in the app, incompatible bulbs, or the dimmer minimum set too low.',
    steps: [
      'Select the lamp type (LED) in the Wiser app.',
      'Adjust the minimum dimming level.',
      'Replace the bulbs with dimmable models recommended by Schneider Electric.',
      'Avoid old 12 V transformers on the same circuit.',
      'Call an electrician if you are unsure about the wiring.',
    ],
    tools: 'dimmable bulbs, Wiser app',
    safety: 'Switch off at the consumer unit before touching the dimmer connections.',
    difficulty: 2, time: '20–35 min', cost: '€0–40 in France', support: 'https://www.se.com/fr/fr/work/support/', supportLabel: 'Schneider Electric support (French site)',
  },
  {
    slug: 'led-dimmer-buzzing', fr: 'variateur-led-bourdonnement', brand: 'Generic LED dimmer',
    title: 'Wall dimmer buzzing or humming with LED bulbs', code: 'Buzzing / humming',
    symptom: 'The dimmer vibrates or whines, mostly at mid-range; the LEDs may flicker.',
    cause: 'A phase-cut dimmer designed for halogen, a load under the dimmer’s minimum, or non-dimmable bulbs.',
    steps: [
      'Replace it with a dimmer certified for LEDs (leading or trailing edge to suit the bulbs).',
      'Increase the load: more bulbs, or enough total wattage.',
      'Use only bulbs marked dimmable.',
      'With the power off, tighten the connections at the dimmer.',
      'If you smell burning, stop using it at once and replace it.',
    ],
    tools: 'universal LED dimmer, dimmable bulbs',
    safety: 'Switch off at the consumer unit. A dimmer that gets hot or smells of burning must be replaced immediately.',
    difficulty: 2, time: '20–45 min', cost: '€25–55 in France', support: '', supportLabel: '',
  },
  {
    slug: 'led-dimmer-minimum-load', fr: 'variateur-led-charge-min', brand: 'Generic LED dimmer',
    title: 'LED dimmer switching off by itself (minimum load)', code: 'Dimmer cuts out or flickers on its own',
    symptom: 'The dimmer switches off by itself, or only turns on if you push the level up sharply.',
    cause: 'A single 4–6 W bulb is below the dimmer’s minimum load (often the equivalent of 40–60 W is required).',
    steps: [
      'Check the minimum load printed on the dimmer.',
      'Add more LED lights on the same circuit, or use a brighter bulb.',
      'Use a low-load dimmer or a suitable smart module (Shelly, Legrand…).',
      'For a single spotlight, a plain switch with a non-dimmed bulb is simpler.',
      'Ask an electrician to rework the circuit if needed.',
    ],
    tools: 'multimeter, extra bulbs or a purpose-made LED load accessory',
    safety: 'Never improvise a load resistor: use accessories designed for LEDs.',
    difficulty: 3, time: '25–50 min', cost: '€10–50 in France', support: '', supportLabel: '',
  },
];

const bars = (n: number) => '●'.repeat(n) + '○'.repeat(5 - n);

const errPage = (e: Err): EnPage => ({
  path: `guides/error-code/${e.slug}`,
  article: true,
  kicker: 'Error code guide',
  title: `${e.title}: step-by-step fix`,
  description: `${e.code}: ${e.symptom}`.slice(0, 158),
  h1: e.title,
  lead: e.symptom,
  body: `<p><strong>Error or symptom:</strong> ${e.code} · <strong>Difficulty</strong> ${bars(e.difficulty)} (${e.difficulty}/5) · <strong>Time</strong> ${e.time} · <strong>Cost</strong> ${e.cost} · <strong>Tools</strong> ${e.tools}</p>
<h2>Likely cause</h2><p>${e.cause}</p>
<h2>Fix it step by step</h2><ol>${e.steps.map((s) => `<li>${s}</li>`).join('')}</ol>
${e.safety ? `<p><strong>Safety:</strong> ${e.safety}</p>` : ''}
<p class="en-note">These steps do not involve opening the product. If it is still under warranty, contact the manufacturer before any repair.</p>
${e.support ? `<p>Official help: <a href="${e.support}" rel="nofollow noopener" target="_blank">${e.supportLabel}</a>.</p>` : ''}
<p><a href="/en/guides/error-codes/">← All error codes</a> · <a href="/en/guides/smart-led-troubleshooting/">Troubleshooting hub</a></p>`,
});

/** EN error sheets that existed before lot 3, listed in the directory. */
const EXISTING: { brand: string; path: string; label: string }[] = [
  { brand: 'Philips Hue', path: 'hue-bridge-orange-led', label: 'Hue Bridge orange LED (no Internet)' },
  { brand: 'Philips Hue', path: 'hue-bridge-50-device-limit', label: 'Hue Bridge: Zigbee device limit' },
  { brand: 'Philips Hue', path: 'hue-bulb-blinking-reset', label: 'Hue bulb blinking / reset' },
  { brand: 'Philips Hue', path: 'hue-sync-box-hdmi-no-signal', label: 'Hue Sync Box: HDMI no signal' },
  { brand: 'Shelly', path: 'shelly-dimmer-2-wifi-offline', label: 'Shelly Dimmer 2 Wi-Fi offline' },
  { brand: 'IKEA', path: 'ikea-dirigera-tradfri-migration', label: 'Moving TRÅDFRI to DIRIGERA' },
  { brand: 'IKEA', path: 'ikea-tradfri-gateway-offline', label: 'TRÅDFRI gateway offline' },
  { brand: 'Govee', path: 'govee-bulb-firmware-brick', label: 'Govee bulb dead after a firmware update' },
  { brand: 'Govee', path: 'govee-strip-overheating', label: 'Govee strip overheating' },
  { brand: 'Nanoleaf', path: 'nanoleaf-invalid-layout', label: 'Nanoleaf invalid layout' },
  { brand: 'Nanoleaf', path: 'nanoleaf-wifi-2g', label: 'Nanoleaf Wi-Fi (2.4 GHz)' },
  { brand: 'WiZ', path: 'wiz-bulb-offline', label: 'WiZ bulb offline' },
  { brand: 'WiZ', path: 'wiz-bulb-dimmer-flicker', label: 'WiZ bulb flickering on a dimmer' },
  { brand: 'Schneider Wiser', path: 'schneider-wiser-offline', label: 'Schneider Wiser offline' },
  { brand: 'Schneider Wiser', path: 'schneider-wiser-matter-thread', label: 'Schneider Wiser with Matter / Thread' },
  { brand: 'Generic LED dimmer', path: 'led-dimmer-ghosting', label: 'LED glowing when off (ghosting)' },
  { brand: 'Generic LED dimmer', path: 'led-dimmer-low-flicker', label: 'LED flicker at low dimming' },
];

const BRAND_ORDER = ['Philips Hue', 'Shelly', 'IKEA', 'Govee', 'Nanoleaf', 'WiZ', 'Legrand Netatmo', 'Schneider Wiser', 'Generic LED dimmer'];

const directory = (): string => {
  const all = [
    ...EXISTING.map((x) => ({ brand: x.brand, href: `/en/guides/error-code/${x.path}/`, label: x.label })),
    ...ERR_LOT3.map((e) => ({ brand: e.brand, href: `/en/guides/error-code/${e.slug}/`, label: e.title })),
  ];
  return BRAND_ORDER.map((b) => {
    const items = all.filter((x) => x.brand === b);
    return items.length ? `<h2>${b}</h2><ul>${items.map((x) => `<li><a href="${x.href}">${x.label}</a></li>`).join('')}</ul>` : '';
  }).join('\n');
};

export const ERROR_DIRECTORY_EN: EnPage = {
  path: 'guides/error-codes',
  article: true,
  kicker: 'Troubleshooting',
  title: 'Smart lighting and LED error codes: 44 step-by-step fixes',
  description: 'Philips Hue, Shelly, IKEA TRÅDFRI and DIRIGERA, Govee, Nanoleaf, WiZ, Legrand Netatmo, Schneider Wiser and LED dimmers: every fault sheet, by brand.',
  h1: 'Error codes and faults: smart lighting and LEDs',
  lead: 'Hue Bridge, Zigbee and Wi-Fi bulbs, Shelly modules, IKEA hubs, Govee strips, Legrand and Schneider dimmers, flickering LEDs: find the sheet for your symptom, with the likely cause, difficulty, time and the fix step by step.',
  body: `<p>Start with the brand, then the symptom. For flicker, buzzing or a faint glow whatever the brand, see also the <a href="/en/guides/gu10-led-flicker-dimmer-diagnosis/">flicker diagnosis</a> and <a href="/en/guides/smart-switch-no-neutral-compatibility/">smart switches without neutral</a>.</p>
${directory()}`,
};

const tutoBox = (time: string, budget: string, level: string) =>
  `<p><strong>Time</strong> ${time} · <strong>Budget</strong> ${budget} · <strong>Level</strong> ${level}</p>`;

export const TUTOS_LOT3_EN: EnPage[] = [
  {
    path: 'tutorials/pair-zigbee-no-neutral-module-sonoff-aqara',
    article: true,
    kicker: 'Tutorial',
    title: 'Pair a no-neutral Zigbee module (SONOFF ZBMINIL2, Aqara): hub, Home Assistant, range',
    description: 'Your no-neutral Zigbee switch module is wired but will not pair, or drops out at night? Choosing the hub, pairing mode, Zigbee routers and switch settings, step by step.',
    h1: 'Pair a no-neutral Zigbee module (SONOFF, Aqara) and make it reliable',
    lead: 'A no-neutral Zigbee module does not talk to your home Wi-Fi. It needs a Zigbee hub and, very often, a mains-powered Zigbee router within 5–8 m, because it never relays signals itself. Most pairing failures come from that, not from the wiring.',
    body: `${tutoBox('20–40 min', 'free to about €60 (hub, French prices)', 'Beginner')}
<p>A no-neutral Zigbee module that will not pair is rarely faulty. Nine times out of ten, it is missing a suitable hub or a device to relay the signal to it. Before you take the switch apart again, these checks will save you time. This tutorial picks up where the wiring stops: see <a href="/en/tutorials/smart-switch-no-neutral/">smart switch without neutral</a> for the wiring itself.</p>
<h2>What you need</h2><ul>
<li>The no-neutral Zigbee module already wired behind the switch (for example SONOFF ZBMINIL2 or an Aqara H1/T1 no-neutral switch).</li>
<li>A Zigbee 3.0 hub: the brand’s own hub, or a USB Zigbee dongle on Home Assistant.</li>
<li>Optional: a Zigbee smart plug that stays powered, to act as a router.</li>
<li>A phone with the hub’s app (Aqara Home, eWeLink, Home Assistant…), a paperclip for the pairing button, and optionally a 1 m USB extension lead for the dongle.</li></ul>
<h2>Before you start</h2><ul>
<li>The module is wired and works: the light turns on from the wall switch. If not, sort out the wiring first.</li>
<li>The hub is up to date and already set up in its app.</li>
<li>You know whether your switch is a rocker (stays in position) or a push button (springs back): the setting differs.</li></ul>
<h2>Which hub for which module</h2>
<table><thead><tr><th>Hub</th><th>Best for</th><th>Strengths</th><th>Limits</th></tr></thead><tbody>
<tr><td>The brand’s hub (Aqara, SONOFF)</td><td>Hardware from that brand</td><td>Simplest setup</td><td>Not friendly with other brands</td></tr>
<tr><td>Philips Hue Bridge</td><td>Hue bulbs, a few certified Zigbee switches</td><td>Very stable, already in many homes</td><td>Does not handle most no-neutral modules</td></tr>
<tr><td>Home Assistant + USB dongle (ZHA)</td><td>Mixed brands, local automations</td><td>Open, no cloud, built into Home Assistant</td><td>Needs a mini PC or Raspberry Pi running all the time</td></tr>
<tr><td>Home Assistant + Zigbee2MQTT</td><td>Large networks, new or unusual devices</td><td>The widest list of supported devices</td><td>A little more technical to set up</td></tr>
</tbody></table>
<p class="en-note">Already have a hub? Start with it: most Zigbee 3.0 modules will pair, even if you lose a minor feature.</p>
<h2>Step by step</h2><ol>
<li><strong>Bring the hub close for the first pairing.</strong> Pairing needs a stronger signal than daily use. Put the hub (or a laptop with the dongle) within 3 m of the switch, or pair a Zigbee plug halfway first. A dongle plugged straight into a computer suffers from USB 3 interference: a 1 m extension lead fixes that.</li>
<li><strong>Start “add device” in the app.</strong> In Home Assistant: Settings › Devices › Add Zigbee device (ZHA), or <em>Permit join</em> in Zigbee2MQTT. The window stays open for 60 to 254 seconds depending on the hub, so move on straight away.</li>
<li><strong>Put the module in pairing mode.</strong> On the SONOFF ZBMINIL2, hold its button for about 5 seconds until the LED flashes. Without access to the button, most modules also reset if you flick the wall switch several times in a row (the manual gives the exact number, often 5 to 10). On Aqara switches, holding the switch itself for 8–10 seconds starts pairing.</li>
<li><strong>Check the model detected and name it.</strong> The module should appear with its real reference (for example “ZBMINIL2”). An unknown model in Zigbee2MQTT or ZHA means the hub software needs updating, not that the module is broken. Name it by room and light (“Hallway ceiling”): you will use that name in automations and by voice.</li>
<li><strong>Set the switch type.</strong> Choose rocker or push button to match your switch. The wrong setting causes the most common fault: you have to press twice, or on and off are reversed. Also set the power-on behaviour to “last state” or “off”, so the light does not come on by itself at 3 a.m. after a power cut.</li>
<li><strong>Put the hub back and add a router if needed.</strong> Move the hub to its final place and wait ten minutes. If the module shows as unavailable or responds slowly, add a Zigbee plug, an always-powered Zigbee bulb or a repeater in between. Mains-powered devices are <strong>routers</strong>; a no-neutral module never is.</li>
<li><strong>Test at night with the light off.</strong> With the light off, the module has the least current to live on. Switch off, wait five minutes, then turn the light on from the app and from an automation. If it works at the wall but not remotely, it is a range problem; if the LED glows or flashes, it is a load problem: fit a bypass or use a brighter bulb (see <a href="/en/guides/smart-led-troubleshooting/">LED troubleshooting</a>).</li></ol>
<h2>The mesh network, simply explained</h2>
<p>In Zigbee, every device that is powered all the time acts as a relay. A no-neutral module lives on a few milliamps flowing through the bulb, so it cannot afford to relay anything. It must find either the hub or a router within reach. In practice, through one or two walls, count on <strong>5 to 8 m</strong> of reliable range; a concrete floor or a load-bearing wall cuts that further. One Zigbee plug in the hallway often fixes a whole floor.</p>
<h2>Settings that avoid surprises</h2><ul>
<li><strong>Input type:</strong> rocker or push button, to match your wall switch.</li>
<li><strong>Power-on state:</strong> “off” or “last state”, never “on” for a hallway or bedroom.</li>
<li><strong>Decoupled mode</strong> (if offered): the switch no longer powers the light directly but triggers a scene. Useful with a smart bulb that must stay powered.</li>
<li><strong>Clear names:</strong> room plus light, for voice assistants and automations.</li></ul>
<h2>Common mistakes</h2><ul>
<li>Looking for the module on your Wi-Fi: a Zigbee module only appears in the hub’s app.</li>
<li>Relying on other no-neutral modules to relay the signal: they do not route. You need always-powered Zigbee devices.</li>
<li>Mixing ecosystems and expecting everything to show up: an Aqara module on a SONOFF hub often loses features. An open hub (Home Assistant) accepts more brands.</li>
<li>Leaving the dongle against a USB 3 port or an external hard drive: 2.4 GHz interference cuts range sharply.</li>
<li>If dropouts persist, change the Wi-Fi channel (1, 6 or 11) rather than the Zigbee channel, which would force you to pair everything again.</li></ul>
<h2>Troubleshooting</h2>
<p><strong>The module never appears in the app.</strong> Check it is really in pairing mode (fast-flashing LED), bring the hub within 1–2 m and search again. If it was paired elsewhere before, reset it first.</p>
<p><strong>It works at the wall but shows “unavailable” in the app.</strong> That is range: the module has lost its route to the hub. Add a Zigbee router (a mains-powered plug) in between and give the network ten minutes to reorganise.</p>
<p><strong>It drops out mostly when the light is off.</strong> The standby current through the LED is not enough to power its radio. Fit the bypass at the ceiling rose or use a brighter bulb (at least 5 W).</p>
<p><strong>Do I need one hub per brand?</strong> No. One Zigbee 3.0 hub handles most modules. Home Assistant with a USB dongle accepts SONOFF, Aqara, IKEA and Hue; brand hubs are simpler but less tolerant of other brands.</p>
<p><strong>Zigbee or Wi-Fi for a no-neutral switch?</strong> Zigbee uses less power and often works from 3 W of LED, but needs a hub. Wi-Fi does without a hub but almost always needs a bypass. See <a href="/en/articles/smart-bulb-wifi-or-zigbee/">Wi-Fi or Zigbee</a>.</p>
<h2>Products mentioned</h2>
<div class="en-card"><p class="en-flag">Zigbee 3.0 · no neutral</p><h3>SONOFF ZBMINIL2</h3><p>No-neutral Zigbee 3.0 module, works with Home Assistant (ZHA and Zigbee2MQTT) and SONOFF hubs. The easiest to get recognised.</p>${ukSearch('SONOFF ZBMINIL2', 'SONOFF ZBMINIL2')}</div>
<div class="en-card"><p class="en-flag">Zigbee router</p><h3>Philips Hue White Ambiance E27</h3><p>A Zigbee bulb that stays powered also works as a router to strengthen the network in the next room.</p>${uk('B0FJ8VXHRX', 'Philips Hue White Ambiance E27')}</div>
${note}
<h2>Sources</h2><ul>
<li><a href="https://help.sonoff.tech/docs/zbminil2" rel="nofollow noopener" target="_blank">SONOFF ZBMINIL2 documentation</a>: pairing, Zigbee 3.0, 3 W minimum load.</li>
<li><a href="https://www.zigbee2mqtt.io/devices/ZBMINIL2.html" rel="nofollow noopener" target="_blank">Zigbee2MQTT, SONOFF ZBMINIL2 page</a>: end device, exposed settings.</li>
<li><a href="https://www.home-assistant.io/integrations/zha/" rel="nofollow noopener" target="_blank">Home Assistant ZHA integration</a>: routers, USB 3 interference, channels.</li></ul>
<p>Related: <a href="/en/guides/smart-switch-no-neutral-compatibility/">no-neutral module matrix</a> · <a href="/en/guides/matter-thread-matrix-philips-hue-aqara-govee/">Matter, Thread, Zigbee compatibility</a> · <a href="/en/tools/">lighting simulator</a></p>`,
  },
  {
    path: 'tutorials/home-office-lighting-lux-cri-kelvin',
    article: true,
    kicker: 'Tutorial',
    title: 'Home office lighting without eye strain: lux, CRI and Kelvin',
    description: 'How many lux on a home office desk, which CRI and which colour temperature in winter? A 6-step method, where to put the lamp and screen, glare, and a worked example for a 9 m² room.',
    h1: 'Light a home office without tiring your eyes',
    lead: 'Aim for 500 lux on the desk, about 200–300 lux in the rest of the room, a light source with a CRI of at least 90, and 4000K by day moving to 3000K in the evening. Put the lamp on the side opposite your writing hand, never facing the screen.',
    body: `${tutoBox('30–45 min', 'about €30–150 (French prices)', 'Beginner')}
<p>Working from home usually means working in a room designed for something else: a spare bedroom, a corner of the living room, a landing. Its lighting is set for relaxing, around 100–200 lux. For eight hours at a screen, two things must change: far more light on the desk, and a room that does not sit in the gloom around it. In winter, when it is dark by 5 p.m., this is what separates a comfortable end of day from stinging eyes.</p>
<h2>What you need</h2><ul>
<li>An adjustable LED desk lamp, ideally with adjustable colour and brightness, or a monitor light bar for a small desk.</li>
<li>For the rest of the room: a ceiling light or neutral-white bulbs (3000–4000K), CRI 90 if possible.</li>
<li>A tape measure and a lux-meter app on your phone (rough but fine for comparisons), or a basic lux meter.</li></ul>
<h2>The right light levels</h2>
<table><thead><tr><th>Zone</th><th>Target</th><th>Colour</th><th>CRI</th></tr></thead><tbody>
<tr><td>Desk (keyboard, documents)</td><td>500 lux</td><td>4000K by day, 3000K in the evening</td><td>≥ 90 advised (≥ 80 minimum)</td></tr>
<tr><td>Rest of the room</td><td>200–300 lux</td><td>3000–4000K</td><td>≥ 80</td></tr>
<tr><td>Video calls (face)</td><td>300–500 lux on the face, from the front or side</td><td>Same as the room</td><td>≥ 90 for natural skin tones</td></tr>
<tr><td>Breaks, late evening</td><td>100–150 lux</td><td>2700K</td><td>≥ 80</td></tr>
</tbody></table>
<p class="en-note">Based on EN 12464-1 (lighting of indoor workplaces) for screen work, adapted to a home office.</p>
<h2>Step by step</h2><ol>
<li><strong>Measure the light on your desk now.</strong> In the evening, with your usual lights on, lay the phone flat in the middle of the desk, sensor facing the ceiling. Most home desks get 100–250 lux: enough to walk around, not to read for eight hours. Also measure in the middle of the room at 80 cm high: if the desk is more than three times brighter, your eyes tire from constantly adapting.</li>
<li><strong>Set your target in lux.</strong> The European workplace standard EN 12464-1 sets <strong>500 lux</strong> for writing, reading and screen work, with a CRI of at least 80. At home, aim for the same on the desk and 200–300 lux around it. The <a href="/en/tools/">simulator</a> gives the lumens needed for the whole room.</li>
<li><strong>Pick a desk lamp that does the job on its own.</strong> A good desk lamp gives 500–1,000 lux 40 cm below its head. Look for that figure in the spec sheet rather than lumens: lux on the desk is what counts. Prefer an adjustable arm, a wide head (to avoid a harsh pool of light) and adjustable colour. Monitor light bars light the keyboard and papers well without glare on a shallow desk.</li>
<li><strong>Put the lamp on the right side.</strong> Lamp <strong>on the left if you are right-handed</strong>, on the right if you are left-handed, otherwise your hand shades the page. Aim the head at the desk, not at the screen. Sit down and check that no light source is directly in your field of view or reflected in the switched-off screen: the best glare test there is.</li>
<li><strong>Change the colour with the time of day.</strong> By day, 4000K matches daylight and keeps you alert. From late afternoon in winter, move towards 3000K and dim the room a little for a gentler transition to the evening. Above 5000K at home, light quickly feels clinical. See the <a href="/en/guides/colour-temperature-kelvin/">Kelvin guide</a>.</li>
<li><strong>Light the rest of the room.</strong> A brightly lit desk in a dark room is as tiring as a dark desk. Add a ceiling light or an uplighter to reach 200–300 lux around you, and set the screen brightness close to that of a sheet of paper next to it. Measure again: the desk should be clearly brighter than the room, but no more than three times brighter.</li></ol>
<h2>Where to put the lamp and the screen</h2>
<p>The golden rule: <strong>no light source in line with the screen</strong>, neither in front of you (glare) nor behind you (reflections). Keep the window to your side. If that is not possible, a sheer curtain or a blind is enough to tame the backlight during the day. Left-handed? Simply put the lamp on the other side.</p>
<h2>Worked example: a 9 m² home office</h2>
<table><tbody>
<tr><th>Area</th><td>3 m × 3 m = 9 m²</td></tr>
<tr><th>Room target</th><td>250 lux</td></tr>
<tr><th>K factor (light walls, 2.50 m ceiling)</th><td>2.5</td></tr>
<tr><th>Lumens for the room</th><td>250 × 9 × 2.5 ≈ 5,600 lm</td></tr>
<tr><th>Solution</th><td>a 2,800 lm ceiling light plus a 2,500 lm uplighter, or 4 GU10 spots of 450 lm plus an uplighter</td></tr>
<tr><th>Desk</th><td>a desk lamp giving 500–900 lux at 40 cm, on top of the room light</td></tr>
</tbody></table>
<p>The figure often surprises people: 5,600 lumens is five or six old 100 W bulbs. Yet that is what it takes for the whole room to feel pleasant in winter, when daylight fades mid-afternoon. The method and the K factor are explained in <a href="/en/tutorials/how-much-light-per-room-lux-foot-candles/">how much light per room</a>.</p>
<h2>Common mistakes</h2><ul>
<li>Putting the lamp behind the screen or facing you: direct glare and too much contrast with the screen.</li>
<li>Working at a lit screen in a dark room: your eyes keep adapting between the bright screen and the dark around it.</li>
<li>Choosing a bulb on lumens alone: CRI 80 makes papers and faces look dull; CRI 90 or more is noticeably more restful.</li>
<li>Staying at 6500K in the evening: bluish light feels cold and makes the end of the day harder.</li>
<li>Putting up with flicker: film the light in your phone’s video mode; rolling bands reveal a poor dimmer or driver.</li></ul>
<h2>Quick answers</h2>
<p><strong>How many lux for a home office?</strong> 500 lux on the desk, as for a professional workstation (EN 12464-1), and 200–300 lux in the rest of the room. A good desk lamp alone can reach the 500 lux.</p>
<p><strong>Which colour temperature for working in winter?</strong> 4000K during the day to stay focused, then 3000K from late afternoon. A lamp with adjustable colour saves you choosing.</p>
<p><strong>Which CRI to avoid eye strain?</strong> At least 80 under the standard, but 90 or more is better: truer colours and contrast, more comfortable reading. See the <a href="/en/guides/cri-colour-rendering-index/">CRI guide</a>.</p>
<p><strong>Monitor light bar or desk lamp?</strong> The bar lights the keyboard and nearby papers without glare and takes no space; a desk lamp covers a larger area and is better for writing or drawing. On a desk deeper than 70 cm, the lamp works better.</p>
<p><strong>I get reflections on the screen.</strong> A light is behind or above you, in line with the screen. Move the lamp to the side, tilt the screen down slightly, or replace the ceiling light with indirect light.</p>
<h2>Products mentioned</h2>
<div class="en-card"><p class="en-flag">Desk lamp</p><h3>Unilux Mambo LED desk lamp, 3000–5000K</h3><p>Clamp and base, adjustable colour from 3000 to 5000K: reaches the 500 lux target on a standard desk.</p>${ukSearch('Unilux Mambo LED desk lamp', 'Unilux Mambo')}</div>
<div class="en-card"><p class="en-flag">Monitor light bar</p><h3>BenQ ScreenBar</h3><p>Anti-glare light bar: lights the keyboard and papers without taking space, ideal on a small desk.</p>${ukSearch('BenQ ScreenBar', 'BenQ ScreenBar')}</div>
<div class="en-card"><p class="en-flag">Architect lamp</p><h3>Clamp-on LED architect lamp, 3 colours, 10 levels</h3><p>Long arm for a large desk.</p>${ukSearch('LED architect desk lamp clamp 3 colour 10 brightness', 'LED architect lamp')}</div>
${note}
<h2>Sources</h2><ul>
<li>EN 12464-1, lighting of indoor workplaces: 500 lux and CRI ≥ 80 for writing, reading and screen work.</li>
<li>INRS (French occupational health and safety institute), workplace lighting file: glare, contrast and light positions.</li>
<li>ANSES (French health agency), opinion on the health effects of LEDs (2019): limit blue-rich light in the evening.</li></ul>`,
  },
  {
    path: 'tutorials/outdoor-christmas-lights-timer-dusk-smart-plug',
    article: true,
    kicker: 'Tutorial',
    title: 'Automate outdoor Christmas lights: timer, dusk sensor or smart plug',
    description: 'Switch outdoor fairy lights on at sunset and off by themselves: timer, dusk-to-dawn switch or outdoor smart plug, weatherproof connections, the right extension lead and the energy used in a season.',
    h1: 'Put outdoor Christmas lights on a timer (timer, dusk sensor or smart plug)',
    lead: 'The simplest setup is an outdoor-rated timer or smart plug (IP44 at least) on a socket protected by a 30 mA RCD, with a rubber H05RN-F or H07RN-F extension lead. Switch on at sunset rather than at a fixed time, and off around 11 p.m.',
    body: `${tutoBox('30–45 min', 'about €10–40 (French prices)', 'Beginner')}
<p>Façade or balcony lights that you have to plug in every evening and unplug before bed always end up on all night, or not on at all. Automating them takes half an hour and costs little. The real challenge is keeping the setup working all winter, through rain and frost, without tripping the RCD.</p>
<h2>What you need</h2><ul>
<li>Lights designed for outdoor use (IP44 at least, ideally with a low-voltage transformer).</li>
<li>A timer, a dusk-to-dawn switch or an outdoor smart plug (IP44 or better).</li>
<li>If the socket is far away: an outdoor extension lead with a rubber sheath (H05RN-F or H07RN-F); 1.5 mm² is plenty.</li>
<li>Optional: a weatherproof box for the lead/transformer connection, a plug-in power meter, and clips or hooks suited to the surface (no nails or staples through the cable).</li></ul>
<h2>Before you start</h2><ul>
<li>Check that the outdoor socket is protected by a 30 mA RCD (test button on the consumer unit): it cuts the power if damp causes current leakage.</li>
<li>Read the transformer label: IP rating, output voltage (often 24 V or 31 V) and wattage. Lights with no IP rating are for indoor use only.</li>
<li>If your lights have a built-in timer (6 hours on, 18 off) or several flashing modes, note how they behave after a power cut: that is what will happen every evening with an external timer.</li></ul>
<h2>Timer, dusk sensor or smart plug</h2>
<table><thead><tr><th>Option</th><th>Switches on</th><th>Strengths</th><th>Limits</th></tr></thead><tbody>
<tr><td>Outdoor mechanical timer</td><td>At a fixed time (15-minute segments)</td><td>Very reliable, no network, cheap</td><td>Needs resetting with the seasons and after a power cut (it falls behind)</td></tr>
<tr><td>Digital timer</td><td>At fixed times, several slots, random mode</td><td>Accurate, keeps time with a battery</td><td>Fiddly buttons, rarely weatherproof: keep it sheltered</td></tr>
<tr><td>Dusk-to-dawn switch</td><td>At nightfall (light sensor)</td><td>Follows the seasons by itself</td><td>Switches off at daybreak or after a fixed time; the sensor must be away from any light</td></tr>
<tr><td>Outdoor smart plug</td><td>At sunset or a fixed time, from your phone</td><td>Follows the seasons, precise switch-off, remote control</td><td>Needs decent Wi-Fi outside; small standby consumption</td></tr>
</tbody></table>
<p class="en-note">Outdoors, choose IP44 at least, valid with the plug inserted. A smart plug that offers “on at sunset, off at a fixed time” gives you the best of both. Check the plug format too: many outdoor sockets sold online use the continental Schuko standard (type F), not the UK three-pin plug.</p>
<h2>Step by step</h2><ol>
<li><strong>Choose how to automate.</strong> A timer switches on and off at fixed times; a dusk-to-dawn switch turns on at nightfall thanks to a light sensor; a smart plug is set from your phone and, in most apps, can trigger at sunset and switch off at a fixed time. That last combination is the most practical for a façade.</li>
<li><strong>Test the Wi-Fi exactly where the plug will go.</strong> For a smart plug, stand at the outdoor socket with your phone, turn off mobile data and open a web page. If it takes several seconds, the plug may drop out. Almost all smart plugs use 2.4 GHz Wi-Fi, which carries further than 5 GHz, but a stone wall can still block it. In that case, an indoor extender near the window, or a plain timer, is more reliable.</li>
<li><strong>Prepare the circuit.</strong> Plug the timer or smart plug straight into the outdoor socket, with no outdoor multi-way adaptor in between. If the socket is too far, use a rubber outdoor extension lead (H05RN-F for seasonal use, H07RN-F for a tougher cable). Fully unwind a cable reel. Keep the lead/transformer connection <strong>off the ground</strong>, out of direct rain, ideally in a weatherproof box.</li>
<li><strong>Hang the lights with a drip loop.</strong> Fix the lights with hooks or clips, never with nails or staples through the cable. Just before each connection and before the transformer, let the cable dip lower than the box and rise again: water running along the cable drips off at the low point instead of entering the connection. Mount the transformer cable-down.</li>
<li><strong>Set the lights to “steady on”.</strong> If the lights have their own timer, turn it off: two timers will fight each other. On lights with 8 modes, check which mode they restart in after a power cut. Many controllers go back to a default, often flashing, mode: if so, choose that mode, or use lights without effects.</li>
<li><strong>Program on and off times.</strong> Smart plug: create a “sunset” schedule (with a 0 to +20 min offset to switch on at full dark) and a fixed off time, say 11 p.m. Mechanical timer: push in the segments for your chosen period (usually 15 minutes each) based on your local sunset time, then set the clock. Dusk sensor: point the sensor at the sky, away from the lights and street lamps, or it will see its own light and switch off.</li>
<li><strong>Check on the first evening.</strong> Check the actual on and off times. On a smart plug, make sure the time zone is right: a wrong time zone shifts everything by an hour. After the first rain, check that the RCD has not tripped and that no water sits in the connection box.</li></ol>
<h2>Sunset times: why a fixed time rarely works</h2>
<p>Sunset times vary a lot with longitude and latitude: across France alone, the gap in late December reaches about 50 minutes between east and west. An on time copied from a forum is rarely right for your home. Two practical points: the earliest sunsets fall around mid-December, not on the solstice (after 21 December evenings are already drawing out, while mornings keep getting darker until early January); and an offset of +15 to +20 minutes after sunset roughly matches full darkness, a good setting for a smart plug.</p>
<h2>Weatherproof connections</h2>
<p>An extension lead is identified by the code printed on its sheath. <strong>H05VV-F</strong>: PVC sheath, for indoors. <strong>H05RN-F</strong>: rubber sheath, for light, temporary outdoor use, which is what Christmas lights are. <strong>H07RN-F</strong>: thicker rubber, for a cable that stays outside or may be walked on. LED lights draw a few watts: 1.5 mm² is more than enough, whatever the length.</p>
<h2>What a season uses</h2>
<table><thead><tr><th>Case (40 evenings, early December to mid-January)</th><th>Energy</th></tr></thead><tbody>
<tr><td>6 W LED lights, on 5 p.m.–11 p.m.</td><td>6 W × 6 h × 40 = 1.44 kWh</td></tr>
<tr><td>The same, left on day and night</td><td>6 W × 24 h × 40 = 5.76 kWh</td></tr>
<tr><td>Smart plug standby (0.5 W)</td><td>0.5 W × 24 h × 40 = 0.48 kWh</td></tr>
<tr><td>Old set of 100 incandescent mini bulbs (≈ 40 W), 5 p.m.–11 p.m.</td><td>40 W × 6 h × 40 = 9.6 kWh</td></tr>
</tbody></table>
<p class="en-note">Energy (kWh) = power (W) × hours ÷ 1,000. Multiply by the unit rate on your bill, and use the wattage printed on your own transformer.</p>
<p>With LEDs, the bill is no longer the point: programmed lights use about 1.4 kWh a season. Automation is mainly about not lighting the street all night and sparing the transformer. Fun fact: a smart plug’s standby can use almost as much as the programmed lights themselves.</p>
<h2>Common mistakes</h2><ul>
<li>Using an indoor extension lead (white PVC, H05VV-F) outside: it stiffens in the cold, cracks and is not made for damp.</li>
<li>Leaving the lead/transformer connection on the grass or in a puddle.</li>
<li>Combining the lights’ built-in timer with an external timer: the lights end up on in the afternoon, or not at all.</li>
<li>Placing a dusk sensor under the lights: their glow makes it think it is daytime.</li>
<li>Using an indoor smart plug outside, even under a porch: without an IP rating, winter condensation is enough to damage it.</li></ul>
<h2>Troubleshooting</h2>
<p><strong>The RCD trips when it rains.</strong> Water is getting into a connection: the lead, the transformer or a joint between light sets. Unplug, let it dry, refit each connection off the ground with a drip loop and a weatherproof box. If it continues, connect the parts one at a time to find the culprit.</p>
<p><strong>The smart plug disconnects in the evening.</strong> The Wi-Fi signal outside is too weak. Move the router or add an extender on the façade side. Schedules are usually stored in the plug itself, so it often keeps following them even when offline; you just cannot control it remotely.</p>
<p><strong>The lights come on flashing although I set them to steady.</strong> The controller returns to its default mode at every power-up. Check the manual: some models remember the last mode if you hold the button for a few seconds. Otherwise keep that mode or choose lights without effects.</p>
<p><strong>What time should they go off?</strong> There is no ideal time. Switching off between 10:30 and 11 p.m. lets you enjoy the evening, avoids lighting the neighbours’ bedrooms and limits consumption.</p>
<p><strong>IP44 or IP65 smart plug?</strong> IP44 protects against splashing water, enough under a porch or against a sheltered wall. IP65 resists water jets and suits a plug exposed in the garden. Either way, check that the rating applies with the plug inserted.</p>
<h2>Products mentioned</h2>
<div class="en-card"><p class="en-flag">Outdoor · 24 V · IP44</p><h3>10 m G40 festoon lights, 24 V, dimmable</h3><p>Low voltage after the transformer limits the risks outdoors.</p>${uk('B0CZ9B4C2B', '10 m G40 festoon lights 24V')}</div>
<div class="en-card"><p class="en-flag">Measure</p><h3>Plug-in power meter</h3><p>Plugged in for one evening between the socket and the lights, it gives the real wattage for your own calculation.</p>${ukSearch('plug in power meter energy monitor', 'plug-in power meter')}</div>
${note}
<h2>Sources</h2><ul>
<li>EN 60598-2-20: luminaires, particular requirements, lighting chains.</li>
<li>EN 60529: degrees of protection provided by enclosures (IP codes).</li>
<li>30 mA RCD protection of socket circuits: NF C 15-100 in France; BS 7671 sets the same requirement for sockets in the UK.</li></ul>
<p>Related: <a href="/en/guides/christmas-lights-indoor-outdoor/">Christmas lights indoors and out</a> · <a href="/en/tutorials/fix-led-fairy-lights-section-out/">fix LED lights with a section out</a></p>`,
  },
  {
    path: 'tutorials/fix-led-fairy-lights-section-out',
    article: true,
    kicker: 'Tutorial',
    title: 'LED fairy lights partly out: diagnose and fix the fault',
    description: 'Every other LED out, a block dark in the middle, or everything dark after one point: each symptom has its own cause. Step-by-step diagnosis, multimeter and coin-cell tests, repairs and safety limits.',
    h1: 'LED fairy lights partly out: find the fault and fix it',
    lead: 'Look at which LEDs are out: it is the best clue. Every other LED points to the controller or the mode, not the LEDs. A block of neighbouring LEDs means a break in that group. Everything after one point means the cable or a joint is damaged there. Only repair the low-voltage side, unplugged.',
    body: `${tutoBox('20 min to 1 hour', 'free to about €25 (French prices)', 'Intermediate')}
<p>It is the December unpacking classic: the lights you put away working perfectly last year now only half light up. Before throwing them out, look closely at which part is dark. LED lights do not fail at random: the way the LEDs are wired together means each fault leaves a recognisable signature.</p>
<h2>What you need</h2><ul>
<li>Depending on the fault: adhesive-lined heat-shrink tubing, crimp or solder connectors, or a replacement controller (same voltage, same number of wires).</li>
<li>A CR2032 coin cell (3 V) to test a single LED; for battery lights, white vinegar, cotton buds and fresh batteries.</li>
<li>A basic multimeter (continuity, diode test, DC voltage), side cutters and wire strippers, optionally a soldering iron, and a lighter or heat gun for the tubing.</li></ul>
<h2>Before you start</h2><ul>
<li><strong>Unplug the lights</strong> before handling them, and only plug them back in for voltage readings, without touching bare wires.</li>
<li>Read the transformer label: a <strong>24 V or 31 V</strong> output (extra-low voltage) means the light chain itself can be repaired. If there is no transformer, or the lights are marked 230 V throughout, do not repair them: replace them.</li>
<li>Identify the type: LEDs on fine copper wire (“micro LED”), LEDs moulded on a flexible cable, screw-in festoon bulbs, or battery lights. The diagnosis differs.</li></ul>
<h2>Symptom table</h2>
<table><thead><tr><th>What you see</th><th>Most likely cause</th><th>What to do</th><th>Repairable?</th></tr></thead><tbody>
<tr><td>Every other LED out, in every mode</td><td>One of the controller’s two outputs has failed</td><td>Replace the controller (same voltage, same connector)</td><td>Yes</td></tr>
<tr><td>A group of neighbouring LEDs out in the middle</td><td>An LED or solder joint broken in a series group</td><td>Find the break with a multimeter (continuity)</td><td>Sometimes (accessible LEDs)</td></tr>
<tr><td>Everything out after one point</td><td>Cable cut or joint corroded just before the first dark LED</td><td>Clean the joint or repair the cable (low voltage)</td><td>Yes</td></tr>
<tr><td>Everything out</td><td>Transformer, controller, batteries or socket</td><td>Measure the transformer output</td><td>Yes (part replacement)</td></tr>
<tr><td>Goes out or flickers when it rains</td><td>Water in a joint or the transformer</td><td>Dry, check the seals, protect the joints</td><td>Yes</td></tr>
<tr><td>Dimmer towards the end</td><td>Too many sets connected, or a corroded contact</td><td>Stick to the number of sets stated, clean</td><td>Yes</td></tr>
<tr><td>A single LED out</td><td>Dead LED on a parallel-wired chain</td><td>Nothing, it is not dangerous</td><td>No need</td></tr>
</tbody></table>
<p class="en-note">Before any diagnosis: steady mode, fresh batteries for battery lights, and check the socket with another appliance.</p>
<h2>Step by step</h2><ol>
<li><strong>Look at what is out.</strong> Switch on the lights fully unwound, ideally at night, and note exactly what does not light: every other LED, a group of neighbours, everything after a certain point, or one LED. Take a photo, then compare with the symptom table.</li>
<li><strong>Rule out simple causes.</strong> Change the mode: on 8-mode lights, some modes deliberately light every other LED. Go back to steady mode (often by pressing the controller button several times). On battery lights, fit new batteries and look at the contacts: white or greenish powder means a leak. On festoon lights, tighten each bulb and try a working bulb in the suspect holder.</li>
<li><strong>Measure the transformer output.</strong> Multimeter on DC volts, probes on the two output contacts of the transformer or controller, with the light chain disconnected. You should read close to the label value (slightly more with no load). Zero means the transformer is dead: replace it with one of the same voltage and at least the same wattage. On a controller with effects, the reading can vary with the mode: switch to steady to measure.</li>
<li><strong>Every other LED out: check the controller.</strong> On two-wire lights with effects, the LEDs are wired back to back: half light when current flows one way, half the other way, and the controller alternates so fast that everything looks lit. If every other LED stays dark in all modes, one of the controller’s outputs has failed. A replacement with the same voltage, connector and number of wires fixes it. The LEDs are almost always fine.</li>
<li><strong>A block out in the middle: find the break in the group.</strong> On 24 V or 31 V lights, the LEDs are wired in small series groups: if one LED or solder joint in a group breaks, that whole group goes dark, and only that group. Multimeter on continuity, lights unplugged, look for the point where current stops; check crushed LEDs first, and cable pinched by a hook or staple. If the LEDs are moulded into the cable, repair is often impossible: keep them for ambience or replace them.</li>
<li><strong>Everything out after one point: repair the cable or joint.</strong> The cable is cut just before the first dark LED, or a joint between connectable sets is corroded. For a joint: unscrew the ring, dry, clean the contacts and refit with the seal in place. For a cut cable on the low-voltage side: cut cleanly, strip, join wire to wire (solder or connector), and cover each wire and then the whole joint with adhesive-lined heat-shrink to keep it watertight.</li>
<li><strong>Test a single LED with a coin cell.</strong> On lights with accessible LEDs (copper wire, LEDs on legs), hold a CR2032 across the two contacts of an LED: a good LED lights one way round and not the other. The multimeter diode test also works, but many meters do not supply enough voltage to light a white LED; a reading of about 2.5–3 V in one direction is enough to show it conducts.</li>
<li><strong>Check before hanging them back up.</strong> Plug in and leave running for an hour indoors on a non-flammable surface. Touch the repair: it must not get warm. For outdoor lights, check each heat-shrink is watertight before putting them back outside, and hang them with a drip loop before each joint.</li></ol>
<h2>Why LEDs go out in groups</h2>
<p>A white LED needs about 3 V to light. With a 31 V transformer, the maker therefore wires LEDs in small series groups, then connects all the groups in parallel across the two main wires. If one LED in a group is broken, current stops flowing in that group, and only that one. Counting the dark LEDs in a row often confirms the diagnosis:</p>
<table><thead><tr><th>Transformer voltage</th><th>LEDs per series group</th><th>Calculation</th></tr></thead><tbody>
<tr><td>24 V</td><td>about 7</td><td>24 ÷ 3.2 ≈ 7, keeping a margin for the resistor</td></tr>
<tr><td>31 V</td><td>about 9–10</td><td>31 ÷ 3.2 ≈ 9.7</td></tr>
<tr><td>4.5 V (3 AA batteries)</td><td>All in parallel</td><td>A white LED needs about 3 V: no room for two in series</td></tr>
</tbody></table>
<p class="en-note">Orders of magnitude: each maker chooses its own groups. Red, orange or yellow LEDs (about 2 V) make longer groups.</p>
<h2>What not to repair</h2>
<p>Everything before the transformer is at mains voltage: the supply cable, the plug and the transformer itself. They are not opened or repaired, even with heat-shrink. Lights with no transformer, plugged straight into the socket, are at mains voltage throughout: a damaged cable makes them dangerous, so replace them. For outdoor use, the repair must be as watertight as the original cable; if it cannot be, keep the lights indoors. To put them back on the façade, see <a href="/en/tutorials/outdoor-christmas-lights-timer-dusk-smart-plug/">automate outdoor Christmas lights</a> for weatherproof connections.</p>
<h2>Common mistakes</h2><ul>
<li>Replacing LEDs when the controller has failed: the “every other LED” pattern does not lie.</li>
<li>Repairing outdoor lights with electrical tape: it peels off in the cold and lets water in. Adhesive-lined heat-shrink is made for this.</li>
<li>Replacing a transformer with one of a different voltage just because the plug fits: a 31 V unit instead of a 24 V one burns out the LEDs within minutes.</li>
<li>Opening the transformer or repairing the mains side: that is the dangerous part, and it cannot be repaired properly.</li>
<li>Connecting more sets than the transformer label allows: the last ones are dimmer and the transformer heats up.</li></ul>
<h2>Quick answers</h2>
<p><strong>Every other LED no longer lights.</strong> Check the mode first. If half stay dark in steady mode, one of the controller’s two channels has failed: replace the controller (same voltage, same connector).</p>
<p><strong>The lights go out only when it rains.</strong> Water is getting into a joint or the transformer. Let them dry indoors for several days, clean the contacts, check the seals are there and protect the joints under cover or in a weatherproof box.</p>
<p><strong>The LEDs flicker or dim towards the end.</strong> Too many sets for the transformer’s power, or a corroded contact heating up. Remove sets down to the number on the label and clean the joints.</p>
<p><strong>My battery lights do not light at all.</strong> Leaking alkaline batteries leave a deposit: clean the contacts with a cotton bud barely dampened with white vinegar, dry well, then fit new batteries. A wire broken right at the box is easy to resolder.</p>
<p><strong>Only one LED is out.</strong> On parallel-wired micro LED lights, a dead LED only switches itself off. It is not dangerous: you can leave it.</p>
<h2>Products mentioned</h2>
<div class="en-card"><p class="en-flag">Diagnosis</p><h3>Basic digital multimeter</h3><p>A simple meter with an audible continuity test is enough to find a break or measure the transformer output.</p>${ukSearch('digital multimeter continuity buzzer', 'digital multimeter')}</div>
<div class="en-card"><p class="en-flag">Repair</p><h3>3:1 adhesive-lined heat-shrink kit</h3><p>Makes a low-voltage repair watertight, unlike tape.</p>${ukSearch('heat shrink tubing 3:1 adhesive lined kit', 'adhesive heat shrink kit')}</div>
${note}
<h2>Sources</h2><ul>
<li>EN 60598-2-20: luminaires, particular requirements, lighting chains (including safety extra-low voltage for outdoor chains).</li>
<li>White LED manufacturer data sheets (typical forward voltage 2.8–3.2 V): basis for the LEDs-per-group estimate.</li>
<li>EN 60529: IP codes.</li></ul>
<p>Related: <a href="/en/guides/christmas-lights-indoor-outdoor/">Christmas lights indoors and out</a> · <a href="/en/tutorials/outdoor-christmas-lights-timer-dusk-smart-plug/">automate outdoor Christmas lights</a></p>`,
  },
];

export const TR_LOT3_EN: EnPage[] = [ERROR_DIRECTORY_EN, ...ERR_LOT3.map(errPage), ...TUTOS_LOT3_EN];

/** hreflang FR ↔ EN pairs for lot 3 (no DE/IT/ES/NL yet). */
export const LOT3_EN_GROUPS: { fr: string; en: string }[] = [
  { fr: '/guides/codes-erreurs-eclairage-connecte-depannage/', en: '/en/guides/error-codes/' },
  ...ERR_LOT3.map((e) => ({ fr: `/guides/code-erreur/${e.fr}/`, en: `/en/guides/error-code/${e.slug}/` })),
  { fr: '/tutoriels/appairer-module-zigbee-sans-neutre-sonoff-aqara/', en: '/en/tutorials/pair-zigbee-no-neutral-module-sonoff-aqara/' },
  { fr: '/tutoriels/eclairage-bureau-teletravail-lux-irc-kelvin/', en: '/en/tutorials/home-office-lighting-lux-cri-kelvin/' },
  { fr: '/tutoriels/programmer-guirlande-lumineuse-exterieure/', en: '/en/tutorials/outdoor-christmas-lights-timer-dusk-smart-plug/' },
  { fr: '/tutoriels/reparer-guirlande-led-partie-eteinte/', en: '/en/tutorials/fix-led-fairy-lights-section-out/' },
];
