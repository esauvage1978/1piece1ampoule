// Groupes de pages traduites (fr / en / de) pour hreflang, sélecteur de langue.
import { PRIORITY_GROUPS } from './i18n-priority';
import { LOT3_EN_GROUPS } from './tr-lot3-en';
import { LOT3_NL_GROUPS } from './tr-lot3-nl';
import { LOT3_DE_GROUPS } from './tr-lot3-de';
import { LOT3_IT_GROUPS } from './tr-lot3-it';
import { LOT3_ES_GROUPS } from './tr-lot3-es';
import { LOT4_EN_GROUPS } from './tr-lot4-en';
import { LOT5_EN_GROUPS_ALL } from './tr-lot5-en';
import { LOT6_EN_GROUPS } from './tr-lot6-en';
import { PAIRES_PARTENAIRES } from '../data/partenaires/registre.mjs';
export type Group = { fr: string; en?: string; uk?: string; ca?: string; de?: string; nl?: string; es?: string; it?: string };
export const GROUPS: Group[] = [
  { fr: '/', en: '/en/', de: '/de/', nl: '/nl/', es: '/es/', it: '/it/' },
  { fr: '/accessoires/', en: '/en/accessories/', uk: '/uk/accessories/', ca: '/ca/accessories/', de: '/de/zubehoer/', nl: '/nl/accessoires/', es: '/es/accesorios/', it: '/it/accessori/' },
  {
    fr: '/black-friday-2026/',
    en: '/en/black-friday-2026/',
    uk: '/uk/black-friday-2026/',
    ca: '/ca/black-friday-2026/',
    de: '/de/black-friday-2026/',
    nl: '/nl/black-friday-2026/',
    es: '/es/black-friday-2026/',
    it: '/it/black-friday-2026/',
  },
  {
    fr: '/baisses-de-prix/',
    en: '/en/price-drops/',
    uk: '/uk/price-drops/',
    ca: '/ca/price-drops/',
    de: '/de/preissenkungen/',
    nl: '/nl/prijsdalingen/',
    es: '/es/bajadas-de-precio/',
    it: '/it/ribassi-prezzo/',
  },
  {
    fr: '/baisses-de-prix/comment-nous-mesurons/',
    en: '/en/price-drops/how-we-measure/',
    uk: '/uk/price-drops/how-we-measure/',
    ca: '/ca/price-drops/how-we-measure/',
    de: '/de/preissenkungen/wie-wir-messen/',
    nl: '/nl/prijsdalingen/hoe-we-meten/',
    es: '/es/bajadas-de-precio/como-medimos/',
    it: '/it/ribassi-prezzo/come-misuriamo/',
  },
  { fr: '/guides/lumens-vs-watts/', en: '/en/guides/lumens-vs-watts/', de: '/de/ratgeber/lumen-watt/', nl: '/nl/gidsen/lumen-watt/', es: '/es/guias/lumenes-vatios/', it: '/it/guide/lumen-watt/' },
  { fr: '/guides/culots-e27-e14-gu10/', en: '/en/guides/bulb-bases-b22-e26-e27-gu10/', de: '/de/ratgeber/lampensockel-e27-e14-gu10/', nl: '/nl/gidsen/lampfittingen-e27-e14-gu10/', es: '/es/guias/casquillos-e27-e14-gu10/', it: '/it/guide/attacchi-e27-e14-gu10/' },
  { fr: '/articles/e27-ou-b22/', en: '/en/guides/e27-vs-b22/', uk: '/uk/guides/e27-vs-b22/', ca: '/ca/guides/e27-vs-b22/', de: '/de/ratgeber/e27-oder-b22/', nl: '/nl/gidsen/e27-vs-b22/', es: '/es/guias/e27-o-b22/', it: '/it/guide/e27-o-b22/' },
  { fr: '/articles/bon-plan-ampoule-connectee/', en: '/en/guides/smart-bulb-deal/', uk: '/uk/guides/smart-bulb-deal/', ca: '/ca/guides/smart-bulb-deal/', de: '/de/ratgeber/smarte-lampe-angebot/', nl: '/nl/gidsen/slimme-lamp-aanbieding/', es: '/es/guias/oferta-bombilla-inteligente/', it: '/it/guide/offerta-lampadina-smart/' },
  { fr: '/guides/kelvin-temperature-couleur/', en: '/en/guides/colour-temperature-kelvin/', de: '/de/ratgeber/farbtemperatur-kelvin/', nl: '/nl/gidsen/kleurtemperatuur-kelvin/', es: '/es/guias/temperatura-color-kelvin/', it: '/it/guide/temperatura-colore-kelvin/' },
  { fr: '/guides/irc-indice-rendu-couleur/', en: '/en/guides/cri-colour-rendering-index/', de: '/de/ratgeber/farbwiedergabe-cri-ra/', nl: '/nl/gidsen/kleurweergave-cri-ra/', es: '/es/guias/reproduccion-cromatica-cri-ra/', it: '/it/guide/resa-cromatica-cri-ra/' },
  { fr: '/guides/ip-indice-protection/', en: '/en/guides/ip-ratings-bathroom-outdoor/', de: '/de/ratgeber/ip-schutzarten-bad-aussen/', nl: '/nl/gidsen/ip-beschermingsgraad-badkamer-buiten/', es: '/es/guias/grado-ip-bano-exterior/', it: '/it/guide/grado-ip-bagno-esterno/' },
  { fr: '/guides/ampoules-dimmables-variateur/', en: '/en/guides/dimmable-led-bulbs/', de: '/de/ratgeber/dimmbare-led-lampen/', nl: '/nl/gidsen/dimbare-led-lampen/', es: '/es/guias/bombillas-led-regulables/', it: '/it/guide/lampadine-led-dimmerabili/' },
  { fr: '/tutoriels/calculer-eclairage-piece-lux/', en: '/en/tutorials/how-much-light-per-room-lux-foot-candles/', de: '/de/anleitungen/lux-lumen-pro-raum-berechnen/', nl: '/nl/handleidingen/lux-lumen-per-ruimte-berekenen/', es: '/es/tutoriales/calcular-lux-lumenes-por-estancia/', it: '/it/tutorial/calcolare-lux-lumen-per-stanza/' },
  { fr: '/tutoriels/remplacer-halogene-gu10-mr16-par-led/', en: '/en/tutorials/replace-halogen-gu10-mr16-with-led/', de: '/de/anleitungen/halogen-gu10-mr16-durch-led-ersetzen/', nl: '/nl/handleidingen/halogeen-gu10-mr16-vervangen-door-led/', es: '/es/tutoriales/sustituir-halogenos-gu10-mr16-por-led/', it: '/it/tutorial/sostituire-alogene-gu10-mr16-con-led/' },
  { fr: '/tutoriels/poser-ruban-led-sous-meuble-cuisine/', en: '/en/tutorials/under-cabinet-led-strip-kitchen/', de: '/de/anleitungen/led-streifen-unter-haengeschraenken/', nl: '/nl/handleidingen/ledstrip-onder-keukenkastjes/', es: '/es/tutoriales/tira-led-bajo-muebles-cocina/', it: '/it/tutorial/striscia-led-sotto-pensili-cucina/' },
  { fr: '/tutoriels/interrupteur-connecte-sans-neutre/', en: '/en/tutorials/smart-switch-no-neutral/', de: '/de/anleitungen/smarter-schalter-ohne-neutralleiter/', nl: '/nl/handleidingen/slimme-schakelaar-zonder-nul/', es: '/es/tutoriales/interruptor-inteligente-sin-neutro/', it: '/it/tutorial/interruttore-smart-senza-neutro/' },
  { fr: '/tutoriels/eclairer-cave-sans-electricite/', en: '/en/tutorials/light-basement-shed-without-power/', de: '/de/anleitungen/keller-ohne-strom-beleuchten/', nl: '/nl/handleidingen/kelder-schuur-zonder-stroom-verlichten/', es: '/es/tutoriales/iluminar-trastero-sin-electricidad/', it: '/it/tutorial/illuminare-cantina-senza-corrente/' },
  {
    fr: '/guides/eclairage-noel-guirlandes-interieur-exterieur/',
    en: '/en/guides/christmas-lights-indoor-outdoor/',
    de: '/de/ratgeber/weihnachtsbeleuchtung-innen-aussen/',
    nl: '/nl/gidsen/kerstverlichting-binnen-buiten/',
    es: '/es/guias/luces-navidad-interior-exterior/',
    it: '/it/guide/luci-di-natale-interno-esterno/',
  },
  {
    fr: '/guides/luminotherapie-lumiere-matin-hiver/',
    en: '/en/guides/morning-light-therapy-winter/',
    de: '/de/ratgeber/lichttherapie-morgenlicht-winter/',
    nl: '/nl/gidsen/lichttherapie-ochtendlicht-winter/',
    es: '/es/guias/luminoterapia-luz-manana-invierno/',
    it: '/it/guide/fototerapia-luce-mattino-inverno/',
  },
  { fr: '/guides/eclairage-soirees-longues-veilleuses/', en: '/en/guides/long-winter-evenings-night-lights/', es: '/es/guias/noches-largas-luces-nocturnas/', it: '/it/guide/serate-lunghe-luci-notturne/' },
  { fr: '/outils/', en: '/en/tools/', de: '/de/werkzeuge/', nl: '/nl/tools/', es: '/es/herramientas/', it: '/it/strumenti/' },
  { fr: '/affiliation-amazon/', en: '/en/affiliate-disclosure/', de: '/de/werbehinweis/', nl: '/nl/affiliatebeleid/', es: '/es/afiliacion/', it: '/it/affiliazione/' },
  { fr: '/politique-de-confidentialite/', en: '/en/privacy/', de: '/de/datenschutz/', nl: '/nl/privacy/', es: '/es/privacidad/', it: '/it/privacy/' },
  { fr: '/mentions-legales/', en: '/en/legal-notice/', de: '/de/impressum/', nl: '/nl/colofon/', es: '/es/aviso-legal/', it: '/it/note-legali/' },
  { fr: '/politique-de-cookies/', en: '/en/cookies/', de: '/de/cookies/', nl: '/nl/cookies/', es: '/es/cookies/', it: '/it/cookie/' },
  ...PRIORITY_GROUPS,
  ...LOT3_EN_GROUPS.map((g) => {
    const nl = LOT3_NL_GROUPS.find((x) => x.fr === g.fr)?.nl;
    const de = LOT3_DE_GROUPS.find((x) => x.fr === g.fr)?.de;
    const it = LOT3_IT_GROUPS.find((x) => x.fr === g.fr)?.it;
    const es = LOT3_ES_GROUPS.find((x) => x.fr === g.fr)?.es;
    return { ...g, ...(nl ? { nl } : {}), ...(de ? { de } : {}), ...(it ? { it } : {}), ...(es ? { es } : {}) };
  }),
  ...LOT4_EN_GROUPS,
  ...LOT5_EN_GROUPS_ALL,
  ...LOT6_EN_GROUPS,
  ...(PAIRES_PARTENAIRES as Group[]),
];
export const langOf = (p: string) =>
  p.startsWith('/uk/') || p === '/uk'
    ? 'uk'
    : p.startsWith('/ca/') || p === '/ca'
      ? 'ca'
      : p.startsWith('/en/')
        ? 'en'
        : p.startsWith('/de/')
          ? 'de'
          : p.startsWith('/nl/')
            ? 'nl'
            : p.startsWith('/es/')
              ? 'es'
              : p.startsWith('/it/')
                ? 'it'
                : 'fr';
export const groupOf = (p: string) =>
  GROUPS.find(
    (g) =>
      g.fr === p ||
      g.en === p ||
      g.uk === p ||
      g.ca === p ||
      g.de === p ||
      g.nl === p ||
      g.es === p ||
      g.it === p,
  );
