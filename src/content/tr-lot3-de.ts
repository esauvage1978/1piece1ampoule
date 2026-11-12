import { PATH_EN_TO_DE } from './i18n-priority-lot2-pathmaps';
import { buildErrorSheets, type SheetUi } from './tr-lot3-build';
import { ERR_DE, EXISTING_DE, UI_DE } from './tr-lot3-de-data';

const KNOWN: Record<string, string> = {
  'hue-bulb-blinking-reset': 'ratgeber/fehlercode/hue-lampe-blinkt-reset',
  'hue-sync-box-hdmi-no-signal': 'ratgeber/fehlercode/hue-sync-box-hdmi-kein-signal',
  'govee-bulb-firmware-brick': 'ratgeber/fehlercode/govee-bulb-firmware-brick',
  'govee-strip-overheating': 'ratgeber/fehlercode/govee-strip-ueberhitzung',
  'nanoleaf-wifi-2g': 'ratgeber/fehlercode/nanoleaf-wifi-2g',
  'wiz-bulb-offline': 'ratgeber/fehlercode/wiz-bulb-offline',
  'schneider-wiser-offline': 'ratgeber/fehlercode/schneider-wiser-offline',
};

const ui: SheetUi = { ...UI_DE, directoryKicker: 'Störungen', genericBrand: 'LED-Dimmer (allgemein)' };
const built = buildErrorSheets({
  locale: 'de',
  ui,
  errors: ERR_DE,
  existing: EXISTING_DE,
  resolveExisting: (slug) => PATH_EN_TO_DE[`guides/error-code/${slug}`] || KNOWN[slug] || `${UI_DE.sheetPrefix}/${slug}`,
  hubPath: 'ratgeber/smart-led-stoerungen',
});

export const TR_LOT3_DE = built.pages;
export const LOT3_DE_GROUPS = built.groups.map((g) => ({ fr: g.fr, de: g.href }));
