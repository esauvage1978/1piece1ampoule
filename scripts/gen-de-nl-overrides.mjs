import fs from 'fs';
import path from 'path';
import { COPY_DE, COPY_NL } from './priority-copy-content.mjs';

const PATH_DE = {
  'zones/kitchen-worktop': 'zonen/kuechenarbeitsplatte',
  'brands/luminaire-fr': 'marken/luminaire-fr',
  'promo-codes': 'aktionscodes',
  'guides/smart-bulb-gift-ideas': 'ratgeber/smarte-lampen-geschenkideen',
  'guides/smart-switch-no-neutral-compatibility': 'ratgeber/smarter-schalter-ohne-neutral-kompatibilitaet',
  'brands/philips-hue': 'marken/philips-hue',
  'brands/osram-ledvance': 'marken/osram-ledvance',
  'tools/halogen-led-equivalence-gu10-e27-lumens': 'werkzeuge/halogen-led-aequivalenz-gu10-e27-lumen',
  'guides/error-code/wiz-bulb-offline': 'ratgeber/fehlercode/wiz-bulb-offline',
  'guides/error-code/nanoleaf-wifi-2g': 'ratgeber/fehlercode/nanoleaf-wifi-2g',
  'guides/gu10-led-flicker-dimmer-diagnosis': 'ratgeber/gu10-led-flackern-dimmer-diagnose',
  'guides/matter-thread-matrix-philips-hue-aqara-govee': 'ratgeber/matter-thread-matrix-philips-hue-aqara-govee',
  'brands/steinel': 'marken/steinel',
  rooms: 'raeume',
  'guides/error-code/hue-bulb-blinking-reset': 'ratgeber/fehlercode/hue-lampe-blinkt-reset',
  'guides/error-code/hue-sync-box-hdmi-no-signal': 'ratgeber/fehlercode/hue-sync-box-hdmi-kein-signal',
  brands: 'marken',
  'rooms/hallway': 'raeume/flur',
  'articles/dusk-to-dawn-bulb': 'artikel/daemmerungslampe',
  'guides/error-code/schneider-wiser-offline': 'ratgeber/fehlercode/schneider-wiser-offline',
  'guides/smart-led-troubleshooting': 'ratgeber/smart-led-stoerungen',
  'rooms/dining-room': 'raeume/esszimmer',
  contact: 'kontakt',
  'guides/error-code/govee-bulb-firmware-brick': 'ratgeber/fehlercode/govee-bulb-firmware-brick',
  'guides/error-code/govee-strip-overheating': 'ratgeber/fehlercode/govee-strip-ueberhitzung',
};

const PATH_NL = {
  'zones/kitchen-worktop': 'zones/keukenblad',
  'brands/luminaire-fr': 'merken/luminaire-fr',
  'promo-codes': 'actiecodes',
  'guides/smart-bulb-gift-ideas': 'gidsen/smarte-lampen-cadeau-ideeen',
  'guides/smart-switch-no-neutral-compatibility': 'gidsen/slimme-schakelaar-zonder-nul-compatibiliteit',
  'brands/philips-hue': 'merken/philips-hue',
  'brands/osram-ledvance': 'merken/osram-ledvance',
  'tools/halogen-led-equivalence-gu10-e27-lumens': 'tools/halogen-led-equivalent-gu10-e27-lumen',
  'guides/error-code/wiz-bulb-offline': 'gidsen/foutcode/wiz-bulb-offline',
  'guides/error-code/nanoleaf-wifi-2g': 'gidsen/foutcode/nanoleaf-wifi-2g',
  'guides/gu10-led-flicker-dimmer-diagnosis': 'gidsen/gu10-led-flikker-dimmer-diagnose',
  'guides/matter-thread-matrix-philips-hue-aqara-govee': 'gidsen/matter-thread-matrix-philips-hue-aqara-govee',
  'brands/steinel': 'merken/steinel',
  rooms: 'ruimtes',
  'guides/error-code/hue-bulb-blinking-reset': 'gidsen/foutcode/hue-lamp-knippert-reset',
  'guides/error-code/hue-sync-box-hdmi-no-signal': 'gidsen/foutcode/hue-sync-box-hdmi-geen-signaal',
  brands: 'merken',
  'rooms/hallway': 'ruimtes/gang',
  'articles/dusk-to-dawn-bulb': 'artikelen/schemerlamp',
  'guides/error-code/schneider-wiser-offline': 'gidsen/foutcode/schneider-wiser-offline',
  'guides/smart-led-troubleshooting': 'gidsen/smart-led-problemen',
  'rooms/dining-room': 'ruimtes/eetkamer',
  contact: 'contact',
  'guides/error-code/govee-bulb-firmware-brick': 'gidsen/foutcode/govee-bulb-firmware-brick',
  'guides/error-code/govee-strip-overheating': 'gidsen/foutcode/govee-strip-oververhitting',
};

const LINK_DE = {
  '/de/tutorials/how-much-light-per-room-lux-foot-candles/': '/de/anleitungen/lux-lumen-pro-raum-berechnen/',
  '/de/guides/colour-temperature-kelvin/': '/de/ratgeber/farbtemperatur-kelvin/',
  '/de/guides/cri-colour-rendering-index/': '/de/ratgeber/farbwiedergabe-cri-ra/',
  '/de/tutorials/under-cabinet-led-strip-kitchen/': '/de/anleitungen/led-streifen-unter-haengeschraenken/',
  '/de/guides/ip-ratings-bathroom-outdoor/': '/de/ratgeber/ip-schutzarten-bad-aussen/',
  '/de/promo-codes/': '/de/aktionscodes/',
  '/de/guides/smart-switch-no-neutral-compatibility/': '/de/ratgeber/smarter-schalter-ohne-neutral-kompatibilitaet/',
  '/de/tutorials/smart-switch-no-neutral/': '/de/anleitungen/smarter-schalter-ohne-neutralleiter/',
  '/de/guides/smart-led-troubleshooting/': '/de/ratgeber/smart-led-stoerungen/',
  '/de/guides/gu10-led-flicker-dimmer-diagnosis/': '/de/ratgeber/gu10-led-flackern-dimmer-diagnose/',
  '/de/guides/bulb-bases-b22-e26-e27-gu10/': '/de/ratgeber/lampensockel-e27-e14-gu10/',
  '/de/tutorials/replace-halogen-gu10-mr16-with-led/': '/de/anleitungen/halogen-gu10-mr16-durch-led-ersetzen/',
  '/de/tools/': '/de/werkzeuge/',
  '/de/rooms/': '/de/raeume/',
  '/de/brands/': '/de/marken/',
};

const LINK_NL = {
  '/nl/tutorials/how-much-light-per-room-lux-foot-candles/': '/nl/handleidingen/lux-lumen-per-ruimte-berekenen/',
  '/nl/guides/colour-temperature-kelvin/': '/nl/gidsen/kleurtemperatuur-kelvin/',
  '/nl/guides/cri-colour-rendering-index/': '/nl/gidsen/kleurweergave-cri-ra/',
  '/nl/tutorials/under-cabinet-led-strip-kitchen/': '/nl/handleidingen/ledstrip-onder-keukenkastjes/',
  '/nl/guides/ip-ratings-bathroom-outdoor/': '/nl/gidsen/ip-beschermingsgraad-badkamer-buiten/',
  '/nl/promo-codes/': '/nl/actiecodes/',
  '/nl/guides/smart-switch-no-neutral-compatibility/': '/nl/gidsen/slimme-schakelaar-zonder-nul-compatibiliteit/',
  '/nl/tutorials/smart-switch-no-neutral/': '/nl/handleidingen/slimme-schakelaar-zonder-nul/',
  '/nl/guides/smart-led-troubleshooting/': '/nl/gidsen/smart-led-problemen/',
  '/nl/guides/gu10-led-flicker-dimmer-diagnosis/': '/nl/gidsen/gu10-led-flikker-dimmer-diagnose/',
  '/nl/guides/bulb-bases-b22-e26-e27-gu10/': '/nl/gidsen/lampfittingen-e27-e14-gu10/',
  '/nl/tutorials/replace-halogen-gu10-mr16-with-led/': '/nl/handleidingen/halogeen-gu10-mr16-vervangen-door-led/',
  '/nl/tools/': '/nl/tools/',
  '/nl/rooms/': '/nl/ruimtes/',
  '/nl/brands/': '/nl/merken/',
};

const out = { PATH_DE, PATH_NL, LINK_DE, LINK_NL, COPY_DE, COPY_NL };
fs.writeFileSync(path.join(import.meta.dirname, 'de-nl-overrides.json'), JSON.stringify(out));
console.log('de-nl-overrides.json written');
