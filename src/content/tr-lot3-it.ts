import { PATH_EN_TO_IT } from './i18n-priority-lot2-pathmaps';
import { buildErrorSheets, type SheetUi } from './tr-lot3-build';
import { ERR_IT, EXISTING_IT, UI_IT } from './tr-lot3-it-data';

const KNOWN: Record<string, string> = {
  'hue-bulb-blinking-reset': 'guide/codice-errore/hue-lampadina-lampeggia-reset',
  'hue-sync-box-hdmi-no-signal': 'guide/codice-errore/hue-sync-box-hdmi-nessun-segnale',
  'govee-bulb-firmware-brick': 'guide/codice-errore/govee-bulb-firmware-brick',
  'govee-strip-overheating': 'guide/codice-errore/govee-striscia-surriscaldamento',
  'nanoleaf-wifi-2g': 'guide/codice-errore/nanoleaf-wifi-2g',
  'wiz-bulb-offline': 'guide/codice-errore/wiz-bulb-offline',
  'schneider-wiser-offline': 'guide/codice-errore/schneider-wiser-offline',
};

const ui: SheetUi = { ...UI_IT, directoryKicker: 'Guasti', genericBrand: 'Dimmer LED (generico)' };
const built = buildErrorSheets({
  locale: 'it',
  ui,
  errors: ERR_IT,
  existing: EXISTING_IT,
  resolveExisting: (slug) => PATH_EN_TO_IT[`guides/error-code/${slug}`] || KNOWN[slug] || `${UI_IT.sheetPrefix}/${slug}`,
  hubPath: 'guide/risoluzione-lampadine-smart-led',
});

export const TR_LOT3_IT = built.pages;
export const LOT3_IT_GROUPS = built.groups.map((g) => ({ fr: g.fr, it: g.href }));
