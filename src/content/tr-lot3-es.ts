import { PATH_EN_TO_ES } from './i18n-priority-lot2-pathmaps';
import { buildErrorSheets, type SheetUi } from './tr-lot3-build';
import { ERR_ES, EXISTING_ES, UI_ES } from './tr-lot3-es-data';

const KNOWN: Record<string, string> = {
  'hue-bulb-blinking-reset': 'guias/codigo-error/hue-bombilla-parpadea-reset',
  'hue-sync-box-hdmi-no-signal': 'guias/codigo-error/hue-sync-box-hdmi-sin-senal',
  'govee-bulb-firmware-brick': 'guias/codigo-error/govee-bulb-firmware-brick',
  'govee-strip-overheating': 'guias/codigo-error/govee-tira-sobrecalentamiento',
  'nanoleaf-wifi-2g': 'guias/codigo-error/nanoleaf-wifi-2g',
  'wiz-bulb-offline': 'guias/codigo-error/wiz-bulb-offline',
  'schneider-wiser-offline': 'guias/codigo-error/schneider-wiser-offline',
};

const ui: SheetUi = { ...UI_ES, directoryKicker: 'Averías', genericBrand: 'Regulador LED (genérico)' };
const built = buildErrorSheets({
  locale: 'es',
  ui,
  errors: ERR_ES,
  existing: EXISTING_ES,
  resolveExisting: (slug) => PATH_EN_TO_ES[`guides/error-code/${slug}`] || KNOWN[slug] || `${UI_ES.sheetPrefix}/${slug}`,
  hubPath: 'guias/averias-bombillas-inteligentes-led',
});

export const TR_LOT3_ES = built.pages;
export const LOT3_ES_GROUPS = built.groups.map((g) => ({ fr: g.fr, es: g.href }));
