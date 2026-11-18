/** Shared TOC, FAQ, affiliate picks and depth blocks for GSC priority guides (8 locales). */

export type GuideLocale = 'en' | 'de' | 'nl' | 'es' | 'it' | 'fr';

type Shop = { host: string; tag: string; cta: string; aff: string };

const SHOP: Record<Exclude<GuideLocale, 'fr'>, Shop> = {
  en: {
    host: 'www.amazon.co.uk',
    tag: 'roboteducatif-21',
    cta: 'Check price on Amazon UK',
    aff: 'As an Amazon Associate I earn from qualifying purchases — <a href="/en/affiliate-disclosure/">affiliate disclosure</a>.',
  },
  de: {
    host: 'www.amazon.de',
    tag: 'roboteducat00-21',
    cta: 'Preis auf Amazon.de',
    aff: 'Als Amazon-Partner verdienen wir an qualifizierten Verkäufen.',
  },
  nl: {
    host: 'www.amazon.nl',
    tag: 'manuso0607-21',
    cta: 'Prijs op Amazon.nl',
    aff: 'Als Amazon-partner verdienen wij aan in aanmerking komende aankopen.',
  },
  es: {
    host: 'www.amazon.es',
    tag: 'roboteducat07-21',
    cta: 'Ver precio en Amazon.es',
    aff: 'Como Asociado de Amazon, ganamos con las compras que cumplen los requisitos.',
  },
  it: {
    host: 'www.amazon.it',
    tag: 'roboteducat0f-21',
    cta: 'Vedi prezzo su Amazon.it',
    aff: 'In qualità di Affiliato Amazon riceviamo un compenso sugli acquisti idonei.',
  },
};

const FR_SHOP = {
  host: 'www.amazon.fr',
  tag: 'manuso06-21',
  cta: 'Voir le prix sur Amazon',
  aff: 'Liens partenaires Amazon : une commission peut nous être versée — <a href="/affiliation-amazon/">transparence affiliation</a>.',
};

function amz(locale: GuideLocale, asin: string, label: string) {
  const s = locale === 'fr' ? FR_SHOP : SHOP[locale];
  return `<a class="en-amz" href="https://${s.host}/dp/${asin}?tag=${s.tag}" rel="nofollow sponsored noopener" target="_blank" data-asin="${asin}" data-product="${label}">${s.cta}</a>`;
}

function toc(label: string, items: [string, string][]) {
  const lis = items.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('');
  return `<nav class="en-toc" aria-label="${label}"><p class="en-toc-title"><strong>${label}</strong></p><ul>${lis}</ul></nav>`;
}

const E27_FIG: Record<GuideLocale, { alt: string; cap: string }> = {
  en: {
    alt: 'E27 screw base versus B22 bayonet: how each bulb locks into the lampholder',
    cap: 'E27 screws in; B22 pushes in then locks with a quarter turn — they are not interchangeable.',
  },
  de: {
    alt: 'E27-Gewinde versus B22-Bajonett: wie die Lampe in der Fassung sitzt',
    cap: 'E27 wird geschraubt; B22 wird eingedrückt und um eine Vierteldrehung verriegelt — nicht austauschbar.',
  },
  nl: {
    alt: 'E27-schroef versus B22-bajonet: hoe de lamp in de fitting zit',
    cap: 'E27 schroeft u in; B22 duwt u in en draait u een kwartslag — niet uitwisselbaar.',
  },
  es: {
    alt: 'Rosca E27 frente a bayoneta B22: cómo encaja la bombilla',
    cap: 'La E27 se enrosca; la B22 se empuja y gira un cuarto de vuelta — no son intercambiables.',
  },
  it: {
    alt: 'Attacco E27 a vite versus baionetta B22',
    cap: 'L’E27 si avvita; il B22 si spinge e si blocca con un quarto di giro — non intercambiabili.',
  },
  fr: {
    alt: 'Culot E27 à vis face à la baïonnette B22 : comment chaque ampoule se fixe',
    cap: 'L’E27 se visse ; le B22 s’enfonce puis se verrouille d’un quart de tour — pas interchangeables.',
  },
};

function e27Figure(locale: GuideLocale) {
  const f = E27_FIG[locale];
  return `<figure class="en-fig"><img src="/pins/e27-b22.png" alt="${f.alt}" width="560" height="320" loading="lazy" decoding="async" /><figcaption class="en-note">${f.cap}</figcaption></figure>`;
}

type L = GuideLocale;

const E27_LINKS: Record<
  L,
  {
    bases: string;
    lumens: string;
    kelvin: string;
    culots?: string;
    e27best?: string;
    dimmer?: string;
    gu10?: string;
    affiliate: string;
    reg: string;
  }
> = {
  en: {
    bases: '/en/guides/bulb-bases-b22-e26-e27-gu10/',
    lumens: '/en/guides/lumens-vs-watts/',
    kelvin: '/en/guides/colour-temperature-kelvin/',
    e27best: '/en/best/e27-led-bulb/',
    dimmer: '/en/guides/dimmable-led-bulbs/',
    gu10: '/en/articles/gu10-or-gu5-3/',
    affiliate: '/en/affiliate-disclosure/',
    reg: 'Figures for the 806 lm equivalence come from Commission Delegated Regulation (EU) 2019/2015, Annex V, table 7. Cap names follow IEC 60061 (E27, B22d). Listing data from Amazon manufacturer pages checked 22 October 2026.',
  },
  de: {
    bases: '/de/ratgeber/lampensockel-e27-e14-gu10/',
    lumens: '/de/ratgeber/lumen-watt/',
    kelvin: '/de/ratgeber/farbtemperatur-kelvin/',
    culots: '/de/ratgeber/lampensockel-e27-e14-gu10/',
    dimmer: '/de/ratgeber/dimmbare-led-lampen/',
    gu10: '/de/artikel/gu10-oder-gu5-3/',
    affiliate: '/de/werbehinweis/',
    reg: '806 lm: Delegierte Verordnung (EU) 2019/2015, Anhang V, Tabelle 7. Sockel nach IEC 60061 (E27, B22d). Amazon-Angaben vom 22. Oktober 2026.',
  },
  nl: {
    bases: '/nl/gidsen/lampfittingen-e27-e14-gu10/',
    lumens: '/nl/gidsen/lumen-watt/',
    kelvin: '/nl/gidsen/kleurtemperatur-kelvin/',
    dimmer: '/nl/gidsen/dimbare-led-lampen/',
    gu10: '/nl/artikelen/gu10-of-gu5-3/',
    affiliate: '/nl/affiliatebeleid/',
    reg: '806 lm: Gedelegeerde Verordening (EU) 2019/2015, bijlage V, tabel 7. Fittingnamen IEC 60061 (E27, B22d). Amazon-gegevens 22 oktober 2026.',
  },
  es: {
    bases: '/es/guias/casquillos-e27-e14-gu10/',
    lumens: '/es/guias/lumenes-vatios/',
    kelvin: '/es/guias/temperatura-color-kelvin/',
    dimmer: '/es/guias/bombillas-led-regulables/',
    gu10: '/es/articulos/gu10-o-gu5-3/',
    affiliate: '/es/afiliacion/',
    reg: '806 lm: Reglamento Delegado (UE) 2019/2015, anexo V, tabla 7. Casquillos IEC 60061 (E27, B22d). Datos Amazon 22 octubre 2026.',
  },
  it: {
    bases: '/it/guide/attacchi-e27-e14-gu10/',
    lumens: '/it/guide/lumen-watt/',
    kelvin: '/it/guide/temperatura-colore-kelvin/',
    dimmer: '/it/guide/lampadine-led-dimmerabili/',
    gu10: '/it/articoli/gu10-o-gu5-3/',
    affiliate: '/it/affiliazione/',
    reg: '806 lm: regolamento delegato (UE) 2019/2015, allegato V, tabella 7. Attacchi IEC 60061 (E27, B22d). Dati Amazon 22 ottobre 2026.',
  },
  fr: {
    bases: '/guides/culots-e27-e14-gu10/',
    lumens: '/guides/lumens-vs-watts/',
    kelvin: '/guides/kelvin-temperature-couleur/',
    e27best: '/meilleur/meilleure-ampoule-led-e27/',
    dimmer: '/guides/ampoules-dimmables-variateur/',
    gu10: '/articles/gu10-ou-gu5-3/',
    affiliate: '/affiliation-amazon/',
    reg: '806 lm : règlement délégué (UE) 2019/2015, annexe V, tableau 7. Culots IEC 60061 (E27, B22d). Données fabricant Amazon, lecture du 22 octobre 2026.',
  },
};

export function e27GuideBody(locale: L): string {
  const Lk = E27_LINKS[locale];
  const shop = locale === 'fr' ? FR_SHOP : SHOP[locale];
  const copy = {
    en: {
      toc: 'On this page',
      items: [
        ['compare', 'Tell them apart'],
        ['choose', 'Which one to buy'],
        ['adapter', 'B22 to E27 adapters'],
        ['confuse', 'Do not confuse with E26 or B15'],
        ['mistakes', 'Common buying mistakes'],
        ['picks', 'Bulbs once you know the base'],
        ['faq', 'Frequently asked questions'],
      ],
      compare: 'Tell them apart',
      choose: 'Which one to buy',
      chooseBody: `<p>You do not pick a cap type for brightness — lumens and kelvin are the same on E27 and B22. You pick the cap because the <strong>lampholder already in the ceiling or lamp</strong> is cut for one system only.</p>
<h3>Match the bulb you remove</h3>
<p>Take out the old lamp still fitted. If it screws, you need E27 (or E14 if the thread is smaller). If it pushes and twists a quarter turn with two side lugs, you need B22. Photograph the holder before you throw the bulb away — sellers still mix the labels on packaging.</p>
<h3>New fitting or full rewire</h3>
<p>On a new pendant in continental Europe, E27 is the default: wider choice of smart, filament and dimmable LEDs. In a UK home, many ceiling roses are still B22 — stay on B22 unless you plan to change the lampholder (Part P applies in England and Wales for fixed wiring).</p>
<p>Brightness is lumens, not the cap. The official swap for an old 60 W incandescent is at least <strong>806 lm</strong> on either base — see <a href="${Lk.lumens}">lumens vs watts</a>. Warm white for a living room is usually <a href="${Lk.kelvin}">2700 K</a>.</p>`,
      adapter: 'B22 to E27 adapters',
      adapterBody: `<p>The adapter locks into the B22 holder and you screw an E27 bulb into it. It adds length, often on the order of <strong>2 to 3 cm</strong> depending on the model, and it adds a metal contact in series. In a closed shade that already runs warm, changing the lampholder is cleaner than stacking an adapter.</p>
<h3>When an adapter is reasonable</h3>
<p>Use a certified B22→E27 adapter only if the shade or globe has clearance for the extra length, the lamp is open or well ventilated, and you need a bulb sold E27-only (some smart colour lamps). Do not use an adapter on a dimmed circuit unless the bulb is marked dimmable — see <a href="${Lk.dimmer}">dimmable LEDs</a>.</p>
<h3>When to change the lampholder instead</h3>
<p>Closed globes, tight HR pendants, or rental properties where you must not alter wiring: stay on B22 bulbs. If you own the fitting and an electrician can swap the lampholder, E27 opens the catalogue without stacking parts.</p>`,
      confuse: 'Do not confuse them with E26, B15 or GU10',
      confuseBody: `<p><strong>E26</strong> is the US medium screw, 26 mm, built for 120 V. It almost fits an E27 socket; a 120 V bulb on UK 230 V fails fast. Only 100–240 V marked LEDs are safe to move between countries.</p>
<p><strong>B15</strong> is a small bayonet (15 mm). It does not lock into B22.</p>
<p><strong>GU10</strong> is a mains spotlight with two thick pins — nothing to do with B22. See <a href="${Lk.gu10}">GU10 or GU5.3</a> and the full list on <a href="${Lk.bases}">bulb bases</a>.</p>`,
      mistakes: 'Common buying mistakes',
      mistakesBody: `<h3>Ordering by diameter only</h3>
<p>E14 is 14 mm screw — smaller than E27. Guessing from photos on a marketplace listing is how people receive the wrong parcel.</p>
<h3>Forcing the wrong cap</h3>
<p>Screwing an E27 into a B22 holder damages the contact springs and can leave live metal exposed. Stop before you crack the plastic.</p>
<h3>Adapter plus non-dimmable LED on a dimmer</h3>
<p>An adapter does not fix dimmer flicker. You still need a dimmable bulb and a trailing-edge LED dimmer on that circuit.</p>
<h3>Ignoring voltage on imported bulbs</h3>
<p>US A19 E26 packages ship to the UK by mistake. Read <strong>220–240 V</strong> on the cap before you screw it in.</p>`,
      picks: 'Bulbs once you know the base',
      picksIntro:
        'Three references we cite for typical UK homes once the cap is confirmed — verify lumens and voltage on the listing before checkout.',
      faq: 'Frequently asked questions',
      faqItems: [
        ['E27 or B22 — which is brighter?', 'Neither cap shines more light. Lumens on the box decide brightness. Pick the cap that fits your holder.'],
        ['Can I put an E27 in a B22 holder?', 'Only with a B22→E27 adapter or after changing the lampholder. The adapter adds length and a contact — avoid in tight closed shades.'],
        ['Is B22 only for the UK?', 'B22 is standard on many UK ceiling pendants. You also see B22 on older continental fittings and lamps imported from Britain.'],
        ['Does a smart bulb care about E27 vs B22?', 'Yes — the cap must match. Many smart lines exist in both; check the SKU, not only “Edison” in the title.'],
      ],
    },
    de: {
      toc: 'Inhalt',
      items: [
        ['compare', 'Unterscheiden'],
        ['choose', 'Was Sie kaufen'],
        ['adapter', 'Adapter B22 auf E27'],
        ['confuse', 'Nicht verwechseln'],
        ['mistakes', 'Typische Fehler'],
        ['picks', 'Lampen nach Sockel'],
        ['faq', 'Häufige Fragen'],
      ],
      compare: 'Unterscheiden',
      choose: 'Was Sie kaufen',
      chooseBody: `<p>Sie wählen den Sockel nicht wegen der Helligkeit — Lumen und Kelvin gelten für E27 und B22 gleichermaßen. Entscheidend ist die <strong>Fassung am Leuchtmittel</strong>.</p>
<h3>Wie die alte Lampe</h3>
<p>Schrauben = E27 (oder E14 bei kleinem Gewinde). Eindrücken und Vierteldrehung mit zwei Nasen = B22.</p>
<h3>Neue Leuchte</h3>
<p>In Deutschland ist E27 der Normalfall — mehr Auswahl an smart, Filament und dimmbar. Mindestens <strong>806 lm</strong> für eine alte 60-W-Glühlampe: <a href="${Lk.lumens}">Lumen statt Watt</a>. Wohnzimmer oft <a href="${Lk.kelvin}">2700 K</a>.</p>`,
      adapter: 'Adapter B22 auf E27',
      adapterBody: `<p>Der Adapter rastet in B22, darauf schrauben Sie E27. Er verlängert um oft <strong>2–3 cm</strong>. In geschlossenen Kappen lieber Fassung tauschen lassen.</p>
<h3>Dimmer</h3>
<p>Adapter macht keine Lampe dimmbar — <a href="${Lk.dimmer}">dimmbare LEDs</a> und passender LED-Dimmer nötig.</p>`,
      confuse: 'E26, B15, GU10',
      confuseBody: `<p><strong>E26</strong> (USA, 120 V) passt mechanisch fast in E27 — nur 220–240-V-Lampen an deutschem Netz.</p>
<p><strong>GU10</strong>: <a href="${Lk.gu10}">GU10 oder GU5.3</a>, Übersicht <a href="${Lk.bases}">Lampensockel</a>.</p>`,
      mistakes: 'Typische Fehler',
      mistakesBody: `<h3>Nur Durchmesser lesen</h3><p>E14 ist die kleine Schraube — nicht mit E27 verwechseln.</p>
<h3>Falschen Sockel erzwingen</h3><p>Beschädigt Kontakte und Isolation.</p>
<h3>US-Lampen ohne Spannungsprüfung</h3><p>220–240 V auf dem Sockel lesen.</p>`,
      picks: 'Lampen nach Sockel',
      picksIntro: 'Typische Referenzen nach bestätigtem Sockel — Angaben auf der Verpackung prüfen.',
      faq: 'Häufige Fragen',
      faqItems: [
        ['E27 oder B22 heller?', 'Nein — Lumen zählen, nicht der Sockel.'],
        ['E27 in B22?', 'Nur mit Adapter oder neuem Sockel — Adapter verlängert.'],
        ['Nur in UK?', 'B22 auch in älteren EU-Leuchten und britischen Importen.'],
        ['Smart-Lampe?', 'Sockel muss passen — gleiche Serie oft in E27 und B22.'],
      ],
    },
    nl: {
      toc: 'Op deze pagina',
      items: [
        ['compare', 'Herkennen'],
        ['choose', 'Wat u koopt'],
        ['adapter', 'Verloop B22 naar E27'],
        ['confuse', 'Niet verwarren'],
        ['mistakes', 'Veelgemaakte fouten'],
        ['picks', 'Lampen per fitting'],
        ['faq', 'Veelgestelde vragen'],
      ],
      compare: 'Herkennen',
      choose: 'Wat u koopt',
      chooseBody: `<p>U kiest de fitting niet voor meer licht — lumen en Kelvin zijn gelijk. De <strong>bestaande fitting</strong> bepaalt alles.</p>
<h3>Zelfde als de oude lamp</h3><p>Schroef = E27; indrukken + kwartslag met nokken = B22.</p>
<h3>Nieuw armatuur</h3><p>In de Benelux meestal E27. Vervanging 60 W: minstens <strong>806 lm</strong> — <a href="${Lk.lumens}">watt naar lumen</a>, woonkamer <a href="${Lk.kelvin}">2700 K</a>.</p>`,
      adapter: 'Verloop B22 naar E27',
      adapterBody: `<p>Verloop in B22, daarna E27 erin — vaak <strong>2–3 cm</strong> langer. Dichte kap: beter fitting vervangen.</p><h3>Dimmer</h3><p><a href="${Lk.dimmer}">Dimbare LED</a> kiezen als er een dimmer hangt.</p>`,
      confuse: 'E26, B15, GU10',
      confuseBody: `<p><strong>E26</strong> (VS): alleen 220–240 V op Nederlands net. <strong>GU10</strong>: <a href="${Lk.gu10}">GU10 of GU5.3</a>, <a href="${Lk.bases}">overzicht fittingen</a>.</p>`,
      mistakes: 'Veelgemaakte fouten',
      mistakesBody: `<h3>Verkeerde maat</h3><p>E14 is kleiner dan E27.</p><h3>Forceren</h3><p>Beschadigt contacten.</p>`,
      picks: 'Lampen per fitting',
      picksIntro: 'Referenties na controle van de fitting — controleer lumen op de doos.',
      faq: 'Veelgestelde vragen',
      faqItems: [
        ['E27 of B22 feller?', 'Nee — lumen tellen.'],
        ['E27 in B22?', 'Alleen met verloop of nieuwe fitting.'],
        ['Alleen UK?', 'B22 komt voor in Britse lampen en oude armaturen.'],
        ['Slimme lamp?', 'Zelfde fitting als het armatuur.'],
      ],
    },
    es: {
      toc: 'En esta página',
      items: [
        ['compare', 'Distinguirlas'],
        ['choose', 'Qué comprar'],
        ['adapter', 'Adaptador B22 a E27'],
        ['confuse', 'No confundir'],
        ['mistakes', 'Errores frecuentes'],
        ['picks', 'Bombillas según casquillo'],
        ['faq', 'Preguntas frecuentes'],
      ],
      compare: 'Distinguirlas',
      choose: 'Qué comprar',
      chooseBody: `<p>El casquillo no cambia los lúmenes — elija el que ya tiene el portalámparas.</p>
<h3>Igual que la bombilla vieja</h3><p>Rosca = E27; empujar y cuarto de vuelta = B22.</p>
<h3>Instalación nueva</h3><p>En España lo habitual es E27. Sustituto 60 W: mínimo <strong>806 lm</strong> — <a href="${Lk.lumens}">lúmenes y vatios</a>, salón <a href="${Lk.kelvin}">2700 K</a>.</p>`,
      adapter: 'Adaptador B22 a E27',
      adapterBody: `<p>Alarga unos <strong>2–3 cm</strong>. En pantalla cerrada, mejor cambiar portalámparas. Con regulador: bombilla <a href="${Lk.dimmer}">regulable</a>.</p>`,
      confuse: 'E26, B15, GU10',
      confuseBody: `<p><strong>E26</strong> (EE. UU., 120 V). <strong>GU10</strong>: <a href="${Lk.gu10}">GU10 o GU5.3</a>, <a href="${Lk.bases}">casquillos</a>.</p>`,
      mistakes: 'Errores frecuentes',
      mistakesBody: `<h3>Solo mirar el diámetro</h3><p>E14 es rosca pequeña.</p><h3>Forzar</h3><p>Daña contactos.</p>`,
      picks: 'Bombillas según casquillo',
      picksIntro: 'Referencias tras confirmar el casquillo — compruebe lúmenes en la caja.',
      faq: 'Preguntas frecuentes',
      faqItems: [
        ['¿E27 o B22 más luminoso?', 'No — mandan los lúmenes.'],
        ['¿E27 en B22?', 'Solo con adaptador o cambio de portalámparas.'],
        ['¿Solo Reino Unido?', 'B22 también en lámparas británicas y antiguas.'],
        ['¿Bombilla inteligente?', 'El casquillo debe coincidir.'],
      ],
    },
    it: {
      toc: 'In questa pagina',
      items: [
        ['compare', 'Riconoscerli'],
        ['choose', 'Cosa comprare'],
        ['adapter', 'Adattatore B22 verso E27'],
        ['confuse', 'Non confondere'],
        ['mistakes', 'Errori comuni'],
        ['picks', 'Lampadine per attacco'],
        ['faq', 'Domande frequenti'],
      ],
      compare: 'Riconoscerli',
      choose: 'Cosa comprare',
      chooseBody: `<p>L’attacco non cambia i lumen — conta il <strong>portalampada esistente</strong>.</p>
<h3>Come la lampadina rimossa</h3><p>Vite = E27; spinta + quarto di giro = B22.</p>
<h3>Nuovo apparecchio</h3><p>In Italia standard E27. Ex 60 W: almeno <strong>806 lm</strong> — <a href="${Lk.lumens}">lumen e watt</a>, soggiorno <a href="${Lk.kelvin}">2700 K</a>.</p>`,
      adapter: 'Adattatore B22 verso E27',
      adapterBody: `<p>Allunga di circa <strong>2–3 cm</strong>. Paralume chiuso: meglio sostituire il portalampada. Su dimmer: <a href="${Lk.dimmer}">LED dimmerabili</a>.</p>`,
      confuse: 'E26, B15, GU10',
      confuseBody: `<p><strong>E26</strong> (USA, 120 V). <strong>GU10</strong>: <a href="${Lk.gu10}">GU10 o GU5.3</a>, <a href="${Lk.bases}">attacchi</a>.</p>`,
      mistakes: 'Errori comuni',
      mistakesBody: `<h3>Solo il diametro</h3><p>E14 è la vite piccola.</p><h3>Forzare</h3><p>Rovina i contatti.</p>`,
      picks: 'Lampadine per attacco',
      picksIntro: 'Riferimenti con attacco confermato — verificare i lumen sulla confezione.',
      faq: 'Domande frequenti',
      faqItems: [
        ['E27 o B22 più luminoso?', 'No — contano i lumen.'],
        ['E27 nel B22?', 'Solo adattatore o nuovo portalampada.'],
        ['Solo UK?', 'B22 su lampade britanniche e vecchie.'],
        ['Lampadina smart?', 'Stesso attacco del portalampada.'],
      ],
    },
    fr: {
      toc: 'Sommaire',
      items: [
        ['compare', 'Les distinguer'],
        ['choose', 'Lequel choisir'],
        ['adapter', 'Adaptateur B22 vers E27'],
        ['confuse', 'Ne pas confondre'],
        ['mistakes', 'Erreurs d’achat'],
        ['picks', 'Ampoules selon le culot'],
        ['faq', 'Questions fréquentes'],
      ],
      compare: 'Comment les distinguer',
      choose: 'Lequel choisir',
      chooseBody: `<p>Vous ne choisissez pas le culot pour la puissance — les lumens et le Kelvin sont identiques sur E27 et B22. C’est la <strong>douille déjà en place</strong> qui impose le culot.</p>
<h3>Reprenez l’ampoule retirée</h3><p>Vis = E27 (ou E14 si le filetage est plus fin). Baïonnette à deux ergots = B22.</p>
<h3>Luminaire neuf</h3><p>En France, l’E27 domine : plus de choix filament, dimmable et connecté. Pour remplacer une ancienne 60 W : au moins <strong>806 lm</strong> — <a href="${Lk.lumens}">lumens et watts</a>, salon souvent <a href="${Lk.kelvin}">2700 K</a>.</p>`,
      adapter: 'Adaptateur B22 vers E27',
      adapterBody: `<p>L’adaptateur s’enclenche en B22, puis vous vissez une E27 dessus. Il allonge souvent de <strong>2 à 3 cm</strong>. Dans un globe fermé, préférez changer la douille. Sur variateur : ampoule <a href="${Lk.dimmer}">dimmable</a> obligatoire.</p>`,
      confuse: 'E26, B15, GU10',
      confuseBody: `<p><strong>E26</strong> : vis US 120 V. <strong>GU10</strong> : <a href="${Lk.gu10}">GU10 ou GU5.3</a>, liste dans le <a href="${Lk.bases}">guide des culots</a>.</p>`,
      mistakes: 'Erreurs d’achat fréquentes',
      mistakesBody: `<h3>Acheter au diamètre seul</h3><p>L’E14 est la petite vis — pas interchangeable avec l’E27.</p>
<h3>Forcer le mauvais culot</h3><p>Abîme les contacts et peut laisser des parties sous tension visibles.</p>
<h3>Adaptateur sur variateur sans ampoule dimmable</h3><p>L’adaptateur ne corrige pas un clignotement — voir <a href="/guides/diagnostic-flicker-gu10-variateur-led/">diagnostic flicker</a> si besoin.</p>`,
      picks: 'Ampoules une fois le culot connu',
      picksIntro: 'Trois références citées après identification du culot — vérifiez lumens et tension sur la fiche marchand.',
      faq: 'Questions fréquentes',
      faqItems: [
        ['E27 ou B22 : lequel est plus lumineux ?', 'Ni l’un ni l’autre : ce sont les lumens sur la boîte qui comptent.'],
        ['Peut-on mettre une E27 dans une douille B22 ?', 'Uniquement avec adaptateur ou en changeant la douille — l’adaptateur allonge.'],
        ['Le B22 est-il réservé au Royaume-Uni ?', 'Non : on le trouve surtout là-bas, mais aussi sur des luminaires anciens ou britanniques en France.'],
        ['Une ampoule connectée impose-t-elle un culot ?', 'Oui — repérez E27 ou B22 sur la fiche, pas seulement « Edison » dans le titre.'],
      ],
    },
  }[locale];

  const tableRow = {
    en: [
      ['Also called', 'ES, Edison screw', 'BC, bayonet cap'],
      ['How it fits', 'Screw', 'Push, then quarter turn'],
      ['What you see', 'Metal thread', 'Smooth cap, two side lugs'],
      ['Diameter', '27 mm', '22 mm'],
      ['Typical home', 'Continental Europe, newer UK lamps', 'UK pendants, older fittings'],
    ],
    de: [
      ['Bezeichnung', 'Edisongewinde', 'Bajonett'],
      ['Bewegung', 'Schrauben', 'Drücken, Vierteldrehung'],
      ['Sichtbar', 'Metallgewinde', 'Glatter Sockel, zwei Nasen'],
      ['Durchmesser', '27 mm', '22 mm'],
      ['Typisch', 'EU, neue UK-Leuchten', 'UK-Decken, alte Fassungen'],
    ],
    nl: [
      ['Naam', 'Edisonschroef', 'Bajonet'],
      ['Beweging', 'Schroeven', 'Indrukken, kwartslag'],
      ['Zichtbaar', 'Schroefdraad', 'Glad, twee nokken'],
      ['Diameter', '27 mm', '22 mm'],
      ['Typisch', 'EU, nieuwere UK-lampen', 'UK-plafonds'],
    ],
    es: [
      ['Nombre', 'Rosca Edison', 'Bayoneta'],
      ['Gesto', 'Enroscar', 'Empujar, cuarto de vuelta'],
      ['Aspecto', 'Rosca metálica', 'Casquillo liso, dos tetones'],
      ['Diámetro', '27 mm', '22 mm'],
      ['Hogar', 'Europa continental', 'Techos UK, antiguos'],
    ],
    it: [
      ['Nome', 'Vite Edison', 'Baionetta'],
      ['Gesto', 'Avvitare', 'Spingere, quarto di giro'],
      ['Aspetto', 'Filetto', 'Calotta liscia, due nottolini'],
      ['Diametro', '27 mm', '22 mm'],
      ['Casa', 'Europa continentale', 'Soffitti UK, vecchi'],
    ],
    fr: [
      ['Autre nom', 'Vis Edison', 'Baïonnette BC'],
      ['Geste', 'Visser', 'Enfoncer, quart de tour'],
      ['Vue', 'Filetage métal', 'Culot lisse, deux ergots'],
      ['Diamètre', '27 mm', '22 mm'],
      ['Chez vous', 'France, Europe', 'Plafonds UK, ancien'],
    ],
  }[locale];

  const rows = tableRow
    .map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`)
    .join('');

  const picks = `<h2 id="picks">${copy.picks}</h2>
<p>${copy.picksIntro}</p>
<table><thead><tr><th></th><th>E27</th><th>B22</th></tr></thead><tbody>
<tr><td>806 lm warm white (≈60 W)</td><td>${amz(locale, 'B01KHIM7OG', 'Philips E27 806 lm')}</td><td>${amz(locale, 'B0CDC1ZV8B', 'Philips B22 806 lm')}</td></tr>
<tr><td>Brighter bayonet (kitchen)</td><td>—</td><td>${amz(locale, 'B07R48JG34', 'ARUM B22 warm white')}</td></tr>
</tbody></table>
<div class="en-card"><p class="en-flag">E27</p><h3>Philips LED E27 806 lm 2700K</h3><p>General replacement for a living room or bedroom pendant on screw fittings.</p>${amz(locale, 'B01KHIM7OG', 'Philips E27 806 lm')}</div>
<div class="en-card"><p class="en-flag">B22</p><h3>Philips Ultra Efficient B22 806 lm</h3><p>Bayonet option when the ceiling rose is B22 — same lumen target as a 60 W incandescent.</p>${amz(locale, 'B0CDC1ZV8B', 'Philips B22 806 lm')}</div>
<p class="en-note">${shop.aff} ${Lk.reg}</p>`;

  const faqBlock = `<h2 id="faq">${copy.faq}</h2>${copy.faqItems
    .map(([q, a]) => `<h3>${q}</h3><p>${a}</p>`)
    .join('')}`;

  const more =
    locale === 'fr'
      ? `<p>Repères par pièce : <a href="/pieces/">éclairage pièce par pièce</a>. Comparatif E27 : <a href="${Lk.e27best}">meilleure ampoule LED E27</a>.</p>`
      : locale === 'en'
        ? `<p>Room-by-room targets: <a href="/en/rooms/">room guides</a>. Once on E27, see <a href="${Lk.e27best}">best E27 LED bulbs</a> if published.</p>`
        : '';

  return `${e27Figure(locale)}
${toc(copy.toc, copy.items)}
<h2 id="compare">${copy.compare}</h2>
<table><thead><tr><th></th><th>E27</th><th>B22</th></tr></thead><tbody>${rows}</tbody></table>
<p>E14 is a 14 mm screw. GU10 uses two pins — full list: <a href="${Lk.bases}">${locale === 'fr' ? 'guide des culots' : locale === 'de' ? 'Lampensockel' : 'bases'}</a>.</p>
<h2 id="choose">${copy.choose}</h2>
${copy.chooseBody}
<h2 id="adapter">${copy.adapter}</h2>
${copy.adapterBody}
<h2 id="confuse">${copy.confuse}</h2>
${copy.confuseBody}
<h2 id="mistakes">${copy.mistakes}</h2>
${copy.mistakesBody}
${picks}
${faqBlock}
${more}`;
}

const GU10_LINKS: Record<Exclude<L, 'fr'>, Record<string, string>> = {
  en: {
    dimmer: '/en/guides/dimmer-led-bulb-matrix-gu10-e27-e14/',
    dimmable: '/en/guides/dimmable-led-bulbs/',
    troubleshoot: '/en/guides/led-flickering-buzzing-glowing-troubleshooting/',
    nonneutral: '/en/guides/smart-switch-no-neutral-compatibility/',
    halogen: '/en/tutorials/replace-halogen-gu10-mr16-with-led/',
    bases: '/en/guides/bulb-bases-b22-e26-e27-gu10/',
    frTree: 'https://1piece1ampoule.fr/guides/diagnostic-flicker-gu10-variateur-led/',
  },
  de: {
    dimmer: 'https://1piece1ampoule.fr/guides/matrice-variateur-dimmer-ampoule-led-gu10-e27/',
    dimmable: '/de/ratgeber/dimmbare-led-lampen/',
    troubleshoot: '/de/ratgeber/led-flackern-brummen-nachleuchten/',
    nonneutral: '/de/ratgeber/smarter-schalter-ohne-neutral-kompatibilitaet/',
    halogen: '/de/anleitungen/halogen-gu10-mr16-durch-led-ersetzen/',
    bases: '/de/ratgeber/lampensockel-e27-e14-gu10/',
    frTree: 'https://1piece1ampoule.fr/guides/diagnostic-flicker-gu10-variateur-led/',
  },
  nl: {
    dimmer: 'https://1piece1ampoule.fr/guides/matrice-variateur-dimmer-ampoule-led-gu10-e27/',
    dimmable: '/nl/gidsen/dimbare-led-lampen/',
    troubleshoot: '/nl/gidsen/led-flikker-zoem-nagloeien/',
    nonneutral: '/nl/gidsen/slimme-schakelaar-zonder-nul-compatibiliteit/',
    halogen: '/nl/handleidingen/halogeen-gu10-mr16-vervangen-door-led/',
    bases: '/nl/gidsen/lampfittingen-e27-e14-gu10/',
    frTree: 'https://1piece1ampoule.fr/guides/diagnostic-flicker-gu10-variateur-led/',
  },
  es: {
    dimmer: 'https://1piece1ampoule.fr/guides/matrice-variateur-dimmer-ampoule-led-gu10-e27/',
    dimmable: '/es/guias/bombillas-led-regulables/',
    troubleshoot: '/es/guias/led-parpadeo-zumbido-brillo-residual/',
    nonneutral: '/es/guias/compatibilidad-interruptor-inteligente-sin-neutro/',
    halogen: '/es/tutoriales/sustituir-halogenos-gu10-mr16-por-led/',
    bases: '/es/guias/casquillos-e27-e14-gu10/',
    frTree: 'https://1piece1ampoule.fr/guides/diagnostic-flicker-gu10-variateur-led/',
  },
  it: {
    dimmer: 'https://1piece1ampoule.fr/guides/matrice-variateur-dimmer-ampoule-led-gu10-e27/',
    dimmable: '/it/guide/lampadine-led-dimmerabili/',
    troubleshoot: '/it/guide/led-sfarfallio-ronzio-luce-residua/',
    nonneutral: '/it/guide/compatibilita-interruttore-smart-senza-neutro/',
    halogen: '/it/tutorial/sostituire-alogeni-gu10-mr16-con-led/',
    bases: '/it/guide/attacchi-e27-e14-gu10/',
    frTree: 'https://1piece1ampoule.fr/guides/diagnostic-flicker-gu10-variateur-led/',
  },
};

function gu10Figure(locale: L) {
  const alt = {
    en: 'LED flicker on a dimmer: diagnostic illustration',
    de: 'LED-Flimmern am Dimmer: Diagnose',
    nl: 'LED-flikkeren op een dimmer',
    es: 'Parpadeo LED con regulador',
    it: 'Sfarfallio LED con variatore',
    fr: 'Ampoule LED qui scintille avec un variateur',
  }[locale];
  return `<figure class="en-fig"><img src="/pins/led-clignote.png" alt="${alt}" width="520" height="320" loading="lazy" decoding="async" /></figure>`;
}

export function gu10FlickerBody(locale: Exclude<L, 'fr'>): string {
  const u = GU10_LINKS[locale];
  const shop = SHOP[locale];
  const t = {
    en: {
      toc: 'On this page',
      nav: [
        ['symptom', 'Pick your main symptom'],
        ['dimmer-types', 'Leading vs trailing edge'],
        ['min-load', 'Minimum load trap'],
        ['fixes', 'Typical fixes'],
        ['products', 'Dimmable replacements'],
        ['steps', 'Step-by-step checks'],
        ['faq', 'Frequently asked questions'],
      ],
      s1: '1 — Pick your main symptom',
      bullets: [
        '<strong>Flicker when on</strong>, worst at low dimmer setting → bulb not dimmable, leading-edge dimmer, or load below dimmer minimum.',
        '<strong>Buzz from dimmer or lamp</strong> → halogen-era dimmer on LED, mixed dimmable/non-dimmable lamps, under-minimum load.',
        '<strong>Glow or flash when “off”</strong> → standby current via illuminated switch, smart switch without neutral, or dimmer leakage.',
        '<strong>Flicker at 100 %</strong> on a plain switch → loose lamp, failing LED driver, or worn GU10 lampholder.',
      ],
      dimmer: 'Leading edge vs trailing edge',
      dimmerBody: `<p>Most halogen dimmers are <strong>leading edge</strong> (cut at the start of the AC wave). Many LED drivers prefer <strong>trailing edge</strong> (cut at the end). Same phase-cut family, different timing — the mismatch shows up as flicker between about 5 % and 25 % brightness.</p>
<h3>Quick test</h3>
<p>Set the dimmer to 100 %. If flicker stops, the bulb may be fine but the dimmer curve is wrong. If it flickers at 100 % on a simple switch, suspect the lamp or holder first.</p>
<p>Full compatibility table: <a href="${u.dimmer}">dimmer × LED matrix</a>. Background: <a href="${u.dimmable}">dimmable LED bulbs</a>.</p>`,
      min: 'Minimum load trap',
      minBody: `<p>A halogen dimmer often expects <strong>40–60 W</strong> total on the circuit. A single 5–7 W LED sits below that floor — the dimmer never “sees” enough load and chops the wave unevenly.</p>
<h3>Fix paths</h3>
<ul><li>Add more dimmable LED load on the same dimmer until you exceed the minimum (same model bulbs behave more consistently).</li><li>Replace with an LED-rated dimmer that lists a low minimum (sometimes 3–5 W per lamp).</li><li>Use a “neutral bypass” only for ghosting on smart switches — not for minimum load on a rotary dimmer.</li></ul>`,
      fixes: 'Typical fixes (from our decision tree)',
      products: 'Dimmable replacements we cite',
      productsIntro:
        'If the diagnosis points to incompatible hardware, these are manufacturer-listed examples — confirm “dimmable” and voltage on the box.',
      steps: 'Step-by-step before you buy a new dimmer',
      stepsBody: `<ol>
<li>Label every lamp on the circuit: dimmable or not? Mixed sets flicker even with a good dimmer.</li>
<li>Photograph the dimmer model number behind the plate (isolated circuit first).</li>
<li>Swap one suspect bulb to another circuit. If the fault follows the bulb, replace the bulb; if not, the dimmer or switch is the lead.</li>
<li>On smart switches, read <a href="${u.nonneutral}">no-neutral compatibility</a> before you add a bypass.</li>
<li>Still stuck? Use the interactive tree on our <a href="${u.frTree}">French flicker guide</a> (same logic, more branches).</li>
</ol>
<p>More symptoms: <a href="${u.troubleshoot}">LED buzzing and ghost glow</a>. GU10 retrofit: <a href="${u.halogen}">replace halogen GU10/MR16</a>. Bases: <a href="${u.bases}">bulb bases</a>.</p>`,
      faq: 'Frequently asked questions',
      faqQ: [
        ['Can I use any LED on a dimmer?', 'No — the bulb and dimmer must both be dimmable and compatible. Non-dimmable LEDs flicker and fail early.'],
        ['Why does only one spot flicker?', 'Often a loose GU10 contact or one bad driver. Swap bulbs to see if the fault moves.'],
        ['Will a smart bulb fix dimmer flicker?', 'No — keep the wall switch ON and dim in the app, or remove/bypass the dimmer and run the circuit at full voltage.'],
        ['When do I need an electrician?', 'Burning smell, hot dimmer faceplate, crackling in the ceiling rose, or work at the consumer unit.'],
      ],
    },
    de: {
      toc: 'Inhalt',
      nav: [
        ['symptom', 'Hauptsymptom'],
        ['dimmer-types', 'Leading vs Trailing'],
        ['min-load', 'Mindestlast'],
        ['fixes', 'Typische Lösungen'],
        ['products', 'Dimmbare Lampen'],
        ['steps', 'Schritt für Schritt'],
        ['faq', 'FAQ'],
      ],
      s1: '1 — Hauptsymptom',
      bullets: [
        '<strong>Flimmern bei Betrieb</strong>, unten am Dimmer → nicht dimmbar, Leading-Edge, Mindestlast.',
        '<strong>Summen</strong> → alter Halogen-Dimmer, Mischbestückung.',
        '<strong>Nachleuchten bei Aus</strong> → Standby-Strom, smarter Schalter ohne Neutralleiter.',
        '<strong>Flimmern bei 100 %</strong> → lose Lampe, defekter Treiber, GU10-Fassung.',
      ],
      dimmer: 'Leading edge vs trailing edge',
      dimmerBody: `<p>Halogen-Dimmer schneiden oft am <strong>Wellenanfang</strong> (leading). Viele LED-Treiber wollen <strong>trailing edge</strong>. Test: bei 100 % kein Flimmern? Dimmer-Kurve prüfen. Matrix: <a href="${u.dimmer}">Dimmer × LED</a>, Hintergrund <a href="${u.dimmable}">dimmbare LEDs</a>.</p>`,
      min: 'Mindestlast-Falle',
      minBody: `<p>Oft <strong>40–60 W</strong> Minimum — ein 7-W-LED reicht nicht. Mehr dimmbare Last oder LED-Dimmer mit niedriger Mindestlast.</p>`,
      fixes: 'Typische Lösungen',
      products: 'Zitierte dimmbare Lampen',
      productsIntro: 'Herstellerangaben prüfen — „dimmbar“ und 230 V auf der Verpackung.',
      steps: 'Schritte vor dem Dimmertausch',
      stepsBody: `<ol><li>Alle Lampen am Dimmer als dimmbar markieren?</li><li>Dimmer-Typ und Referenz notieren.</li><li>Lampe in andere Fassung testen.</li><li><a href="${u.nonneutral}">Schalter ohne Neutralleiter</a> bei Smart-Schaltern.</li><li>Interaktiver Baum: <a href="${u.frTree}">französische Diagnose</a>.</li></ol>
<p><a href="${u.troubleshoot}">Brummen und Nachleuchten</a>, <a href="${u.halogen}">GU10/MR16 tauschen</a>.</p>`,
      faq: 'FAQ',
      faqQ: [
        ['Jede LED am Dimmer?', 'Nein — Lampen und Dimmer müssen dimmbar und passend sein.'],
        ['Nur ein Spot flimmert?', 'Oft Kontakt oder Treiber — Lampe tauschen und beobachten.'],
        ['Smarte Lampe?', 'Schalter dauernd EIN, dimmen in der App, oder Dimmer entfernen.'],
        ['Elektriker?', 'Brandgeruch, heißer Dimmer, Knistern in der Dose.'],
      ],
    },
    nl: {
      toc: 'Op deze pagina',
      nav: [
        ['symptom', 'Symptoom'],
        ['dimmer-types', 'Leading vs trailing'],
        ['min-load', 'Minimumbelasting'],
        ['fixes', 'Oplossingen'],
        ['products', 'Dimbaarbare lampen'],
        ['steps', 'Stappen'],
        ['faq', 'FAQ'],
      ],
      s1: '1 — Symptoom',
      bullets: [
        '<strong>Flikkeren aan</strong>, laag op de dimmer → niet dimbaar, leading edge, te weinig load.',
        '<strong>Zoem</strong> → oude halogeen-dimmer.',
        '<strong>Nagloeien uit</strong> → sluipstroom, slimme schakelaar zonder nul.',
        '<strong>Flikkeren op 100 %</strong> → losse lamp of GU10-contact.',
      ],
      dimmer: 'Leading vs trailing edge',
      dimmerBody: `<p>Halogeen-dimmers snijden vaak aan het <strong>begin</strong> van de golf. LED wil vaak <strong>trailing</strong>. Matrix: <a href="${u.dimmer}">dimmer × LED</a>, <a href="${u.dimmable}">dimbare LED</a>.</p>`,
      min: 'Minimumbelasting',
      minBody: `<p>Vaak <strong>40–60 W</strong> nodig — een 7 W LED is te weinig. Meer dimbare lampen of LED-dimmer met lage minimumtrim.</p>`,
      fixes: 'Typische oplossingen',
      products: 'Dimbaarbare vervangers',
      productsIntro: 'Controleer „dimbaar“ en 230 V op de doos.',
      steps: 'Stappen',
      stepsBody: `<ol><li>Alle lampen op de dimmer dimbaar?</li><li>Dimmer-type noteren.</li><li>Lamp in andere fitting testen.</li><li><a href="${u.nonneutral}">Schakelaar zonder nul</a>.</li><li><a href="${u.frTree}">Interactieve FR-gids</a>.</li></ol>`,
      faq: 'FAQ',
      faqQ: [
        ['Elke LED op dimmer?', 'Nee — beide moeten dimbaar en compatibel zijn.'],
        ['Eén spot flikkert?', 'Vaak contact — lamp wisselen.'],
        ['Slimme lamp?', 'Schakelaar aan, dimmen in app of dimmer weg.'],
        ['Elektricien?', 'Brandlucht, hete dimmer.'],
      ],
    },
    es: {
      toc: 'En esta página',
      nav: [
        ['symptom', 'Síntoma'],
        ['dimmer-types', 'Leading vs trailing'],
        ['min-load', 'Carga mínima'],
        ['fixes', 'Soluciones'],
        ['products', 'Bombillas regulables'],
        ['steps', 'Pasos'],
        ['faq', 'FAQ'],
      ],
      s1: '1 — Síntoma principal',
      bullets: [
        '<strong>Parpadeo encendido</strong>, regulador bajo → no regulable, leading edge, carga mínima.',
        '<strong>Zumbido</strong> → regulador halógeno, mezcla de bombillas.',
        '<strong>Brillo apagado</strong> → corriente residual, interruptor sin neutro.',
        '<strong>Parpadeo al 100 %</strong> → portalámparas o driver defectuoso.',
      ],
      dimmer: 'Leading edge y trailing edge',
      dimmerBody: `<p>Reguladores halógenos suelen cortar al <strong>inicio</strong> de la onda. Muchos LED prefieren <strong>trailing edge</strong>. Matriz: <a href="${u.dimmer}">regulador × LED</a>, <a href="${u.dimmable}">LED regulables</a>.</p>`,
      min: 'Carga mínima',
      minBody: `<p>A menudo <strong>40–60 W</strong> mínimos. Un LED de 7 W queda corto. Añada carga regulable o regulador LED con mínimo bajo.</p>`,
      fixes: 'Soluciones habituales',
      products: 'Sustitutos regulables citados',
      productsIntro: 'Compruebe «regulable» y 230 V en la caja.',
      steps: 'Pasos antes de cambiar el regulador',
      stepsBody: `<ol><li>¿Todas las bombillas del circuito son regulables?</li><li>Anote el modelo del regulador.</li><li>Pruebe la bombilla en otro portalámparas.</li><li><a href="${u.nonneutral}">Interruptor sin neutro</a>.</li><li><a href="${u.frTree}">Árbol interactivo (FR)</a>.</li></ol>`,
      faq: 'Preguntas frecuentes',
      faqQ: [
        ['¿Cualquier LED con regulador?', 'No — regulable y compatible.'],
        ['¿Un solo foco parpadea?', 'A menudo contacto GU10 — intercambie bombillas.'],
        ['¿Bombilla inteligente?', 'Interruptor siempre ON o quite el regulador.'],
        ['¿Electricista?', 'Olor a quemado, regulador caliente.'],
      ],
    },
    it: {
      toc: 'In questa pagina',
      nav: [
        ['symptom', 'Sintomo'],
        ['dimmer-types', 'Leading vs trailing'],
        ['min-load', 'Carico minimo'],
        ['fixes', 'Soluzioni'],
        ['products', 'Lampadine dimmerabili'],
        ['steps', 'Passi'],
        ['faq', 'FAQ'],
      ],
      s1: '1 — Sintomo principale',
      bullets: [
        '<strong>Sfarfallio acceso</strong>, variatore basso → non dimmerabile, leading edge, carico minimo.',
        '<strong>Ronzio</strong> → variatore alogeno, mix di lampadine.',
        '<strong>Luce residua spento</strong> → corrente di standby, interruttore senza neutro.',
        '<strong>Sfarfallio al 100 %</strong> → portalampada GU10 o driver guasto.',
      ],
      dimmer: 'Leading edge e trailing edge',
      dimmerBody: `<p>I dimmer alogeni tagliano all’<strong>inizio</strong> dell’onda. Molti LED vogliono <strong>trailing edge</strong>. Matrice: <a href="${u.dimmer}">variatore × LED</a>, <a href="${u.dimmable}">LED dimmerabili</a>.</p>`,
      min: 'Trappola del carico minimo',
      minBody: `<p>Spesso servono <strong>40–60 W</strong> minimi. Un LED da 7 W resta sotto soglia.</p>`,
      fixes: 'Soluzioni tipiche',
      products: 'Sostituti dimmerabili citati',
      productsIntro: 'Verificare «dimmable» e 230 V sulla confezione.',
      steps: 'Passi prima di cambiare il variatore',
      stepsBody: `<ol><li>Tutte le lampadine sul variatore sono dimmerabili?</li><li>Modello del variatore.</li><li>Prova la lampadina in altro portalampada.</li><li><a href="${u.nonneutral}">Interruttore senza neutro</a>.</li><li><a href="${u.frTree}">Albero interattivo (FR)</a>.</li></ol>`,
      faq: 'Domande frequenti',
      faqQ: [
        ['Qualsiasi LED sul dimmer?', 'No — lampadina e dimmer dimmerabili e compatibili.'],
        ['Solo un faretto sfarfalla?', 'Spesso contatto GU10.'],
        ['Lampadina smart?', 'Interruttore sempre ON o togliere il variatore.'],
        ['Elettricista?', 'Odore di bruciato, dimmer caldo.'],
      ],
    },
  }[locale];

  const table = `<h2 id="fixes">${t.fixes}</h2>
<table><thead><tr><th>Case</th><th>Difficulty</th><th>Time</th><th>Cost</th></tr></thead><tbody>
<tr><td>Non-dimmable LED on dimmer → swap for dimmable or remove dimmer</td><td>1</td><td>5–15 min</td><td>£5–25 / €5–25</td></tr>
<tr><td>Leading-edge dimmer + dimmable LED → trailing-edge LED dimmer</td><td>2–3</td><td>20–45 min</td><td>£25–55 / €25–55</td></tr>
<tr><td>Single low-power LED below minimum → add load or low-load dimmer</td><td>2–3</td><td>25–50 min</td><td>£10–50</td></tr>
<tr><td>Smart switch without neutral + ghosting → manufacturer bypass</td><td>3–4</td><td>30–90 min</td><td>parts + electrician</td></tr>
</tbody></table>`;

  const products = `<h2 id="products">${t.products}</h2>
<p>${t.productsIntro}</p>
<div class="en-grid">
<div class="en-card"><p class="en-flag">GU10</p><h3>Philips CorePro GU10 dimmable</h3><p>Listed 350 lm, 4000K, for kitchen spots on a compatible trailing-edge dimmer.</p>${amz(locale, 'B09N8W4DMT', 'Philips GU10 dimmable')}</div>
<div class="en-card"><p class="en-flag">GU10</p><h3>Philips WarmGlow GU10 dimmable</h3><p>Warm-dimming filament look — still needs a matching dimmer.</p>${amz(locale, 'B073FT1QT2', 'Philips WarmGlow GU10')}</div>
<div class="en-card"><p class="en-flag">E27</p><h3>Philips E27 dimmable 806 lm</h3><p>Pendant circuits on dimmers — verify dimmable on the box.</p>${amz(locale, 'B09F9MZ4PH', 'Philips E27 dimmable')}</div>
<div class="en-card"><p class="en-flag">Wall</p><h3>Legrand universal LED dimmer (2-wire)</h3><p>When the fault is the dimmer itself — check minimum load in the leaflet.</p>${amz(locale, 'B07MRBVNWM', 'Legrand LED dimmer')}</div>
</div>
<p class="en-note">${shop.aff}</p>`;

  const faq = `<h2 id="faq">${t.faq}</h2>${t.faqQ.map(([q, a]) => `<h3>${q}</h3><p>${a}</p>`).join('')}`;

  return `${gu10Figure(locale)}
${toc(t.toc, t.nav)}
<h2 id="symptom">${t.s1}</h2>
<ul>${t.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>
<h2 id="dimmer-types">${t.dimmer}</h2>
${t.dimmerBody}
<h2 id="min-load">${t.min}</h2>
${t.minBody}
${table}
${products}
<h2 id="steps">${t.steps}</h2>
${t.stepsBody}
${faq}`;
}

/** FR static blocks for diagnostic-flicker-gu10-variateur-led.astro */
export const FR_GU10_STATIC = {
  toc: `<nav class="en-toc" aria-label="Sommaire"><p class="en-toc-title"><strong>Sommaire</strong></p><ul>
<li><a href="#symptomes">Symptômes</a></li>
<li><a href="#variateur">Leading / trailing edge</a></li>
<li><a href="#charge-min">Charge minimale</a></li>
<li><a href="#produits">Ampoules et variateur</a></li>
<li><a href="#faq-flicker">FAQ</a></li>
<li><a href="#flicker-tree">Arbre interactif</a></li>
</ul></nav>`,
  intro: gu10Figure('fr'),
  sections: `<h2 id="symptomes">Symptômes : par où commencer</h2>
<ul>
<li><strong>Scintillement à l’allumage</strong>, surtout bas sur le variateur → ampoule non dimmable, variateur leading edge ou charge sous le minimum.</li>
<li><strong>Grésillement</strong> → vieux variateur halogène, mélange dimmable / non dimmable.</li>
<li><strong>Lueur ou flash à l’arrêt</strong> → courant de veille (interrupteur témoin, connecté sans neutre).</li>
<li><strong>Scintillement à 100 %</strong> sur interrupteur simple → douille GU10, driver ou contact.</li>
</ul>
<h2 id="variateur">Variateur : début ou fin d’onde</h2>
<p>Les variateurs halogène coupent souvent au <strong>début</strong> de la sinusoïde (leading edge). Beaucoup de drivers LED préfèrent la <strong>fin d’onde</strong> (trailing edge). À 100 %, le scintillement disparaît ? Le problème vient souvent de la courbe basse du variateur. Matrice : <a href="/guides/matrice-variateur-dimmer-ampoule-led-gu10-e27/">variateur × ampoule LED</a>, repères <a href="/guides/ampoules-dimmables-variateur/">ampoules dimmables</a>.</p>
<h2 id="charge-min">Charge minimale du variateur</h2>
<p>Un variateur halogène attend souvent <strong>40 à 60 W</strong> sur le circuit. Un spot LED de 7 W reste en dessous — le variateur « ne voit » pas assez de charge. Ajoutez des LED dimmables compatibles ou posez un variateur LED avec minimum bas (souvent 3–5 W par lampe).</p>
<h2 id="produits">Ampoules et variateur (sélection citée)</h2>
<div class="en-grid">
<div class="en-card"><p class="en-flag">GU10</p><h3>Philips CorePro GU10 dimmable</h3><p>350 lm annoncés — uniquement avec variateur compatible trailing edge.</p>${amz('fr', 'B09N8W4DMT', 'Philips GU10 dimmable')}</div>
<div class="en-card"><p class="en-flag">GU10</p><h3>Philips WarmGlow GU10 dimmable</h3><p>Effet halogène en basse lumière.</p>${amz('fr', 'B073FT1QT2', 'WarmGlow GU10')}</div>
<div class="en-card"><p class="en-flag">E27</p><h3>Philips E27 dimmable 1521 lm</h3><p>Suspensions sur variateur — vérifier « dimmable » sur la boîte.</p>${amz('fr', 'B09F9MZ4PH', 'E27 dimmable')}</div>
<div class="en-card"><p class="en-flag">Mur</p><h3>Legrand variateur toutes lampes 2 fils</h3><p>Si le variateur est en cause — lire la charge minimale sur la notice.</p>${amz('fr', 'B07MRBVNWM', 'Variateur Legrand')}</div>
</div>
<p class="en-note">${FR_SHOP.aff}</p>
<h2 id="faq-flicker">Questions fréquentes</h2>
<h3>Toute ampoule LED sur un variateur ?</h3><p>Non : l’ampoule et le variateur doivent être dimmables et compatibles. Une LED non dimmable clignote et vieillit vite.</p>
<h3>Un seul spot clignote ?</h3><p>Souvent un mauvais contact GU10 ou un driver défaillant — échangez les ampoules pour voir si le défaut suit la lampe.</p>
<h3>Une ampoule connectée suffit-elle ?</h3><p>Non : laissez l’interrupteur sur ON et dimmez dans l’appli, ou retirez le variateur et alimentez à plein régime.</p>
<h3>Appeler un électricien ?</h3><p>Odeur de brûlé, variateur chaud, crépitement dans la boîte DCL, ou travail au tableau — coupez le circuit.</p>`,
};

export const FR_E27_MD_PREFIX = `${e27Figure('fr')}
<nav class="en-toc" aria-label="Sommaire"><p class="en-toc-title"><strong>Sommaire</strong></p><ul>
<li><a href="#comment-les-distinguer-en-dix-secondes">Distinguer E27 et B22</a></li>
<li><a href="#lequel-choisir">Lequel choisir</a></li>
<li><a href="#adaptateur-b22-vers-e27">Adaptateur</a></li>
<li><a href="#ce-qu-il-ne-faut-pas-confondre">Ne pas confondre</a></li>
<li><a href="#quelle-ampoule-une-fois-le-culot-connu">Ampoules selon le culot</a></li>
</ul></nav>
`;