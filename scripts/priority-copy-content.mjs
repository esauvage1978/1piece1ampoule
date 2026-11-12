import fs from 'fs';

const en = JSON.parse(fs.readFileSync('/tmp/tr-priority-en.json', 'utf8'));

const META_DE = {
  'zones/kitchen-worktop': {
    kicker: 'Zonen-Ratgeber',
    title: 'Küchenarbeitsplatte beleuchten: Lux, Lumen, Kelvin und LED-Leisten',
    description: 'Wie viele Lumen unter Oberschränken, welche Kelvin- und CRI-Werte, drei Netz-LED-Leisten im Vergleich (lm/m). Ziel: 500 Lux auf der Arbeitsplatte.',
    h1: 'Beleuchtung der Küchenarbeitsplatte',
    lead: 'Das Deckenlicht erhellt die Küche, aber Sie kochen mit dem Rücken zur Lampe — Ihr Körper wirft Schatten auf die Platte. Die Lösung: Licht unter den Hängeschränken, zwischen Ihnen und der Arbeitsfläche.',
  },
  'brands/luminaire-fr': {
    kicker: 'Partner-Händler',
    title: 'Luminaire.fr: Lieferung 39,90 € Sperrgut, 30 Tage Rückgabe, SAV',
    description: 'Händlersteckbrief Lampenwelt/Luminaire.fr: Katalog, DPD/GLS, 39,90 € Sperrgut, 30 Tage Rückgabe. Stand 23.10.2026.',
    h1: 'Luminaire.fr: unser Händlerüberblick',
    lead: 'Luminaire.fr ist der französische Shop der Lampenwelt GmbH (Fulda). Multimarken-Händler — größere Auswahl an Pendeln und Wandleuchten als bei Amazon, wenn ein bestimmter Stil gesucht wird.',
  },
  'promo-codes': {
    kicker: 'Aktionen',
    title: 'Aktionscodes Beleuchtung — Oktober 2026',
    description: 'Geprüfte Partner-Aktionscodes mit Enddatum. OSRAM ALLSTARS −25 % bis 31.10.2026.',
    h1: 'Aktionscodes Beleuchtung',
  },
  'guides/smart-bulb-gift-ideas': {
    kicker: 'Geschenk-Ratgeber',
    title: 'Smarte Lampen als Geschenk: Wi-Fi, Bluetooth oder Zigbee (EPREL)',
    description: 'Verbundene Lampe verschenken: Sockel, Wi-Fi 2,4 GHz oder Zigbee, mit oder ohne Bridge. Vier geprüfte Ideen (Hue, Tapo).',
    h1: 'Geschenkideen: smarte Lampen',
    lead: 'Eine smarte Lampe ist ein gutes Geschenk, wenn sie in die Leuchte passt und mit Router oder Handy der beschenkten Person funktioniert. Drei Fragen reichen.',
  },
  'guides/smart-switch-no-neutral-compatibility': {
    kicker: 'Smart-Home-Ratgeber',
    title: 'Smarter Schalter ohne Neutralleiter: Shelly, Legrand, Aqara, Sonoff, Schneider',
    description: 'Welches 2-Draht-Modul ohne N in der Schalterdose? Matrix Wi-Fi/Zigbee, Mindestlast LED, Bypass-Hinweise.',
    h1: 'Kompatibilität: smarter Schalter ohne Neutralleiter',
    lead: 'In vielen DE/AT/CH-Installationen fehlt in der Schalterdose der Neutralleiter. 2-Draht-Module führen Standby-Strom über die Lampe — bei LED oft Bypass an der Decke. Arbeiten nur durch Elektrofachbetrieb (DIN VDE).',
  },
  'brands/philips-hue': {
    kicker: 'Marken-Ratgeber',
    title: 'Philips Hue: EPREL-Daten, Bridge, 2 Jahre Garantie, Vor- und Nachteile',
    description: 'Philips Hue (Signify): White, Ambiance, Color E27, Bluetooth vs Bridge, Standby, Garantie EU.',
    h1: 'Philips Hue: unsere Markeneinschätzung',
    lead: 'Philips Hue ist Signifys verbundene Beleuchtung — Referenz für smarte Lampen in Europa. Modelle, EPREL-Zahlen, Nutzen der Hue Bridge, Garantie.',
  },
  'brands/osram-ledvance': {
    kicker: 'Marken-Ratgeber',
    title: 'OSRAM (LEDVANCE): Radarlamp, 3–5 Jahre Garantie, SMART+ Shop',
    description: 'OSRAM Star A75 Motion Sensor E27: 1055 lm, Radar 3 m, ALLSTARS −25 %.',
    h1: 'OSRAM (LEDVANCE): Markenüberblick',
    lead: 'Verbraucherlampen OSRAM werden von LEDVANCE GmbH (Garching) hergestellt und garantiert. Highlight: Radarlamp — Flur oder Keller ohne Zusatzverkabelung.',
  },
  'tools/halogen-led-equivalence-gu10-e27-lumens': {
    kicker: 'Werkzeug',
    title: 'Halogen → LED: GU10, E27, Lumen und Abstrahlwinkel',
    description: 'Umrüsten nach Lumen, nicht Watt. Tabelle 20–100 W, Rechner, CRI-Hinweis. 50 W GU10 ≈ 450 lm → ~5 W LED.',
    h1: 'Halogen oder Glühlampe → LED: gleiche Helligkeit',
    lead: 'Vergleichen Sie Lumen, nicht Watt. Ein 50-W-Halogen-GU10 liefert etwa 450 lm; eine gute 5-W-LED erreicht 400–500 lm. Der Abstrahlwinkel ändert die Wirkung: 36° fokussiert, 110° streut.',
  },
  'guides/error-code/wiz-bulb-offline': {
    title: 'WiZ-Lampe offline in der App (Wi-Fi 2,4 GHz)',
    description: 'WiZ V2 offline: Migration, WLAN-Wechsel. Pairing am 2,4-GHz-WLAN.',
    h1: 'WiZ-Lampe als offline angezeigt',
    lead: 'Die Lampe antwortet nicht mehr in WiZ V2, der Wandschalter speist sie aber noch.',
  },
  'guides/error-code/nanoleaf-wifi-2g': {
    title: 'Nanoleaf: Wi-Fi-Einrichtung schlägt fehl (2,4 GHz)',
    description: 'Nanoleaf: letzter Schritt scheitert — 2,4 GHz, AP-Isolation, Passwort testen.',
    h1: 'Nanoleaf: Wi-Fi-Verbindung fehlgeschlagen',
    lead: 'Einrichtung scheitert im letzten Schritt; nur lokale Steuerung möglich.',
  },
  'guides/gu10-led-flicker-dimmer-diagnosis': {
    kicker: 'Störungen',
    title: 'GU10/E27-LED flackert, Dimmer brummt, Nachleuchten — Diagnose',
    description: 'Systematische Diagnose: Flimmern am Dimmer, Brummen, Geisterlicht, Flackern bei 100 %. Schwierigkeit, Zeit, Kosten.',
    h1: 'GU10/E27-LED: Flimmern, Brummen, Nachleuchten',
    lead: 'Entscheidungsweg wie auf unserer französischen Seite. Bei Brandgeruch oder Verteiler: Elektriker rufen.',
  },
  'guides/matter-thread-matrix-philips-hue-aqara-govee': {
    kicker: 'Protokoll-Ratgeber',
    title: 'Matter-, Thread- und Zigbee-Matrix: Hue, Aqara, Govee, Shelly, Nanoleaf, IKEA',
    description: 'Quer-Kompatibilität smarter Lampen mit Matter, Thread, Zigbee 3.0, Home Assistant, Apple Home, Google, Alexa.',
    h1: 'Matter, Thread und Zigbee: Kompatibilitätsmatrix',
    lead: 'Matter ist eine gemeinsame Anwendungsschicht; Thread ein Energie-sparendes Funknetz; Zigbee 3.0 das Mesh von Hue und Aqara. Status hängt von der Firmware ab — SKU prüfen.',
  },
  'brands/steinel': {
    kicker: 'Marken-Ratgeber',
    title: 'Steinel: Bewegungslicht, NightMatic 2000, 3 Jahre Garantie',
    description: 'Steinel XSolar L-S ONE 150 lm, NightMatic, IS 360-1 — Datenblattwerte, 3 Jahre Garantie.',
    h1: 'Steinel: Markenüberblick',
    lead: 'Steinel (Herzebrock-Clarholz) baut Bewegungsmelder, Dämmerungsschalter und Außenleuchten — sinnvoll für Weg, Garage, Eingang.',
  },
  rooms: {
    kicker: 'Räume',
    title: 'Beleuchtung nach Raum: Küche, Flur, Esszimmer, Bad…',
    description: 'Raum wählen für Lux/Lumen-Tipps. Flur- und Esszimmer-Ratgeber in dieser Ausgabe.',
    h1: 'Räume',
    lead: 'Raumtyp wählen für Lumen, Kelvin, CRI (Farbwiedergabeindex) und typische Leuchten. Weitere Raumseiten folgen in der deutschen Ausgabe.',
  },
  'guides/error-code/hue-bulb-blinking-reset': {
    title: 'Hue-Lampe blinkt: Pairing oder Reset',
    description: 'Hue pulsiert nach Stromausfall: Zigbee-Pairing oder Reset. Kompatible Dimmer.',
    h1: 'Hue-Lampe blinkt: Pairing oder Reset',
    lead: 'Regelmäßiges Pulsieren nach Netzstörung — oft Zigbee-Pairing oder Reset nötig.',
  },
  'guides/error-code/hue-sync-box-hdmi-no-signal': {
    title: 'Hue Sync Box: schwarzes Bild oder kein Signal',
    description: 'TV schwarz mit Sync Box: HDMI-Kabel, Boot-Reihenfolge, HDCP 2.2, Dolby Vision testen.',
    h1: 'Hue Sync Box: kein HDMI-Signal',
    lead: 'TV bleibt schwarz, obwohl die Quelle direkt am TV funktioniert.',
  },
  brands: {
    kicker: 'Marken',
    title: 'Marken und Händler: Hue, OSRAM, Steinel, Tapo, Luminaire.fr',
    description: 'Übersicht: Schwerpunkt, Garantie/Rückgabe, Kurzfazit. OSRAM-Aktion auf Aktionscodes-Seite.',
    h1: 'Marken und Händler in unseren Ratgebern',
    lead: 'Vor dem Kauf: Garantie, Rückgabe und Einsatzgebiet der Marke.',
  },
  'rooms/hallway': {
    kicker: 'Raum-Ratgeber',
    title: 'Flurbeleuchtung: dunkle Ecken, Lumen, 3500–4000 K, CRI',
    description: 'Flur in Zonen: Eingang, dunkler Abschnitt, Ecke, Boden. Tunnel-Effekt vermeiden.',
    h1: 'Flurbeleuchtung',
    lead: 'Flur in Zonen teilen — Eingang, gerader dunkler Abschnitt, Ecke, Boden — dann Kelvin, CRI und Dimmen abstimmen.',
  },
  'articles/dusk-to-dawn-bulb': {
    kicker: 'Artikel',
    title: 'Dämmerungslampe: Fotzelle vs. Bewegungsmelder',
    description: 'Fotzellenlampe brennt die ganze Nacht (~5 W × 12 h). Außen mindestens IP44.',
    h1: 'Dämmerungslampe (Fotzelle)',
    lead: 'Schaltet bei Dunkelheit ein und morgens aus — ohne App-Timer, per eingebauter Fotzelle.',
  },
  'guides/error-code/schneider-wiser-offline': {
    title: 'Schneider Wiser offline: Gateway und Dimmer',
    description: 'Wiser-App offline: Gateway, 2,4-GHz-WLAN, Firmware. Support 0825 012 999.',
    h1: 'Schneider Wiser: Gerät offline',
    lead: 'Wiser by SE zeigt offline; Szenen laufen nicht mehr.',
  },
  'guides/smart-led-troubleshooting': {
    kicker: 'Störungen',
    title: 'Smarte Lampen & LED: Fehlercode-Verzeichnis',
    description: 'Einstieg Hue, Shelly, IKEA, Govee, WiZ, Nanoleaf, Dimmer — 44 Schritte auf der FR-Seite.',
    h1: 'Smarte Lampen & LED: Diagnose und Fehlercodes',
    lead: 'Ein Einstieg für Störungen: Hue Bridge, Zigbee/Wi-Fi, Shelly, Govee-Streifen, Dimmer, Flimmern.',
  },
  'rooms/dining-room': {
    kicker: 'Raum-Ratgeber',
    title: 'Esszimmer: Tisch, Sideboard, CRI und Dimmen',
    description: 'Zonen Esszimmer: Tisch, Anrichte, Stimmung, Verkehr. Warmes dimmbares Licht, CRI für natürliche Farben.',
    h1: 'Esszimmerbeleuchtung',
    lead: 'Zonen — Tisch, Anrichte, indirekte Stimmung, Laufwege — dann Kelvin/CRI für Gesichter und Speisen.',
  },
  contact: {
    kicker: 'Kontakt',
    title: 'Kontakt — Frage zur Beleuchtung',
    description: 'Fragen zu Lampen, Räumen oder Partnerschaften. Antwort meist innerhalb 24–48 Werktagen.',
    h1: 'Kontakt',
  },
  'guides/error-code/govee-bulb-firmware-brick': {
    title: 'Govee-Lampe nach Firmware-Update blockiert',
    description: 'Govee H600x hängt nach OTA: Stromzyklus, Update am 2,4-GHz-WLAN, Support.',
    h1: 'Govee-Lampe nach OTA-Update blockiert',
    lead: 'Keine Reaktion, feste Farbe oder verschwunden aus der App nach Over-the-Air-Update.',
  },
  'guides/error-code/govee-strip-overheating': {
    title: 'Govee-LED-Streifen überhitzt oder vergilbt',
    description: 'Streifen heiß: Helligkeit senken, Aluprofil, max. Länge pro Netzteil.',
    h1: 'Govee-Streifen: Überhitzung',
    lead: 'Streifen heiß, Farbe an den Enden gelblich, Kleber löst sich — oft Netzteil oder Montage.',
  },
};

// Dutch meta (abbreviated keys mirror DE)
const META_NL = {
  'zones/kitchen-worktop': {
    kicker: 'Zone-gids',
    title: 'Keukenblad verlichten: lux, lumen, kelvin en LED-balken',
    description: 'Hoeveel lumen onder bovenkastjes, kelvin en CRI, drie netwerk-LED-balken (lm/m). Doel: 500 lux op het werkblad.',
    h1: 'Verlichting keukenblad',
    lead: 'Het plafondlicht verlicht de keuken, maar u kookt met uw rug naar het licht — uw lichaam werpt schaduw op het blad. Oplossing: licht onder de bovenkastjes.',
  },
  'brands/luminaire-fr': {
    kicker: 'Partnerwinkel',
    title: 'Luminaire.fr: verzending €39,90 bulky, 30 dagen retour',
    description: 'Winkelfiche Lampenwelt/Luminaire.fr. Bijgewerkt 23/10/2026.',
    h1: 'Luminaire.fr: onze winkelbeoordeling',
    lead: 'Franse shop van Lampenwelt GmbH (Fulda). Multimerken — breder assortiment hang- en wandlampen dan op Amazon.',
  },
  'promo-codes': {
    kicker: 'Acties',
    title: 'Actiecodes verlichting — oktober 2026',
    description: 'Gecontroleerde partnercodes met einddatum.',
    h1: 'Actiecodes verlichting',
  },
  'guides/smart-bulb-gift-ideas': {
    kicker: 'Cadeau-gids',
    title: 'Slimme lampen cadeau: Wi-Fi, Bluetooth of Zigbee',
    description: 'Cadeau zonder verkeerde fitting: E27, GU10, Wi-Fi 2,4 GHz of Zigbee. Vier ideeën (Hue, Tapo).',
    h1: 'Cadeau-ideeën: slimme lampen',
    lead: 'Een slimme lamp is een goed cadeau als hij past en werkt met de router of telefoon van de ontvanger. Drie vragen volstaan.',
  },
  'guides/smart-switch-no-neutral-compatibility': {
    kicker: 'Smart-home-gids',
    title: 'Slimme schakelaar zonder nul: Shelly, Legrand, Aqara, Sonoff, Schneider',
    description: 'Welke 2-draadsmodule zonder n in de doos? Matrix Wi-Fi/Zigbee, minimale LED-last, bypass.',
    h1: 'Compatibiliteit: slimme schakelaar zonder nul',
    lead: 'In veel NL/BE-installaties ontbreekt de nul in de schakelaar. 2-draadsmodules sturen standby-stroom via de lamp — bij LED vaak bypass. Werk door erkend installateur (NEN 1010 / AREI).',
  },
  'brands/philips-hue': {
    kicker: 'Merkengids',
    title: 'Philips Hue: EPREL, bridge, 2 jaar garantie',
    description: 'Philips Hue (Signify): White, Ambiance, Color, Bluetooth vs bridge.',
    h1: 'Philips Hue: merkoverzicht',
    lead: 'Referentie voor slimme lampen in Europa. EPREL-cijfers, Hue Bridge, garantie.',
  },
  'brands/osram-ledvance': {
    kicker: 'Merkengids',
    title: 'OSRAM (LEDVANCE): radar-lamp, garantie 3–5 jaar',
    description: 'OSRAM Star A75 Motion Sensor: 1055 lm, radar 3 m.',
    h1: 'OSRAM (LEDVANCE): merkoverzicht',
    lead: 'Consumentenlampen van LEDVANCE GmbH. Radar-lamp voor gang of kelder zonder extra bedrading.',
  },
  'tools/halogen-led-equivalence-gu10-e27-lumens': {
    kicker: 'Tool',
    title: 'Halogeen → LED: GU10, E27, lumen en bundelhoek',
    description: 'Vervang op lumen, niet watt. Tabel en rekenhulp. 50 W GU10 ≈ 450 lm.',
    h1: 'Halogeen of gloeilamp → LED: zelfde helderheid',
    lead: 'Vergelijk lumen, niet watt. 50 W halogeen GU10 ≈ 450 lm; goede 5 W LED haalt 400–500 lm.',
  },
  'guides/error-code/wiz-bulb-offline': {
    title: 'WiZ-lamp offline in de app (Wi-Fi 2,4 GHz)',
    description: 'WiZ V2 offline: migratie, gewijzigd Wi-Fi. Opnieuw koppelen op 2,4 GHz.',
    h1: 'WiZ-lamp offline',
    lead: 'Geen reactie in WiZ V2; wand schakelaar staat wel aan.',
  },
  'guides/error-code/nanoleaf-wifi-2g': {
    title: 'Nanoleaf: Wi-Fi mislukt (2,4 GHz)',
    description: 'Laatste stap mislukt — alleen 2,4 GHz, AP-isolatie uit.',
    h1: 'Nanoleaf: Wi-Fi-verbinding mislukt',
    lead: 'Configuratie stopt in de laatste stap; alleen lokaal bedienbaar.',
  },
  'guides/gu10-led-flicker-dimmer-diagnosis': {
    kicker: 'Storingen',
    title: 'GU10/E27-LED flikkert, dimmer zoemt, nagleuning',
    description: 'Diagnose flikkeren, zoemen, spooklicht, flikkeren op 100 %.',
    h1: 'GU10/E27-LED: flikkeren en dimmer',
    lead: 'Zelfde logica als onze Franse interactieve gids. Brandlucht: installateur bellen.',
  },
  'guides/matter-thread-matrix-philips-hue-aqara-govee': {
    kicker: 'Protocol-gids',
    title: 'Matter-, Thread- en Zigbee-matrix: Hue, Aqara, Govee…',
    description: 'Cross-compatibiliteit Matter, Thread, Zigbee 3.0, Home Assistant, Apple Home.',
    h1: 'Matter, Thread en Zigbee: matrix',
    lead: 'Matter = applicatielaag; Thread = mesh-radio; Zigbee 3.0 = mesh van Hue/Aqara. Firmware en SKU controleren.',
  },
  'brands/steinel': {
    kicker: 'Merkengids',
    title: 'Steinel: bewegingslicht, NightMatic, 3 jaar garantie',
    description: 'XSolar L-S ONE 150 lm, NightMatic, IS 360-1 — datasheet.',
    h1: 'Steinel: merkoverzicht',
    lead: 'Duits merk voor bewegingsmelder, schemerschakelaar en buitenlampen.',
  },
  rooms: {
    kicker: 'Ruimtes',
    title: 'Verlichting per ruimte: keuken, gang, eetkamer…',
    description: 'Kies een ruimte voor lux/lumen-advies.',
    h1: 'Ruimtes',
    lead: 'Ruimtetype kiezen voor lumen, kelvin, CRI en fittingen.',
  },
  'guides/error-code/hue-bulb-blinking-reset': {
    title: 'Hue-lamp knippert: koppelen of reset',
    description: 'Hue pulseert na stroomuitval: Zigbee koppelen of reset.',
    h1: 'Hue-lamp knippert',
    lead: 'Regelmatig knipperen na netstoring — pairing of reset.',
  },
  'guides/error-code/hue-sync-box-hdmi-no-signal': {
    title: 'Hue Sync Box: geen HDMI-beeld',
    description: 'Zwart scherm met Sync Box: HDMI-kabel, opstartvolgorde, HDCP.',
    h1: 'Hue Sync Box: geen signaal',
    lead: 'TV blijft zwart terwijl bron direct op TV wel werkt.',
  },
  brands: {
    kicker: 'Merken',
    title: 'Merken: Hue, OSRAM, Steinel, Tapo, Luminaire.fr',
    description: 'Overzicht garantie en gebruik.',
    h1: 'Merken in onze gidsen',
    lead: 'Garantie, retour en toepassing vóór aankoop.',
  },
  'rooms/hallway': {
    kicker: 'Ruimte-gids',
    title: 'Gangverlichting: donkere hoeken, lumen, 3500–4000 K',
    description: 'Zones gang: entree, donker stuk, hoek, vloer.',
    h1: 'Gangverlichting',
    lead: 'Gang in zones — entree, donker stuk, hoek, vloer — kelvin en CRI afstemmen.',
  },
  'articles/dusk-to-dawn-bulb': {
    kicker: 'Artikel',
    title: 'Schemerlamp: fotocel vs. bewegingsmelder',
    description: 'Fotocel brandt hele nacht. Buiten minimaal IP44.',
    h1: 'Schemerlamp (fotocel)',
    lead: 'Schakelt bij schemer in en ’s ochtends uit — ingebouwde fotocel.',
  },
  'guides/error-code/schneider-wiser-offline': {
    title: 'Schneider Wiser offline',
    description: 'Gateway, 2,4 GHz Wi-Fi, firmware.',
    h1: 'Schneider Wiser offline',
    lead: 'App toont offline; scenario’s lopen niet.',
  },
  'guides/smart-led-troubleshooting': {
    kicker: 'Storingen',
    title: 'Slimme lampen & LED: foutcode-overzicht',
    description: 'Startpunt Hue, Govee, WiZ — 44 stappen op FR-site.',
    h1: 'Slimme lampen: diagnose',
    lead: 'Storingen verbonden verlichting: bridge, Zigbee/Wi-Fi, strips, dimmers.',
  },
  'rooms/dining-room': {
    kicker: 'Ruimte-gids',
    title: 'Eetkamer: tafel, dressoir, CRI en dimmen',
    description: 'Zones eetkamer: tafel, dressoir, sfeer, looproutes.',
    h1: 'Eetkamerverlichting',
    lead: 'Zones — tafel, dressoir, indirecte sfeer — kelvin/CRI voor gezichten en eten.',
  },
  contact: {
    kicker: 'Contact',
    title: 'Contact — vraag over verlichting',
    description: 'Antwoord meestal binnen 24–48 werkuren.',
    h1: 'Contact',
  },
  'guides/error-code/govee-bulb-firmware-brick': {
    title: 'Govee-lamp blokkeert na firmware-update',
    description: 'Na OTA: stroom reset, update op 2,4 GHz, support.',
    h1: 'Govee-lamp na update geblokkeerd',
    lead: 'Geen reactie of vaste kleur na OTA.',
  },
  'guides/error-code/govee-strip-overheating': {
    title: 'Govee-strip oververhit of vergeeld',
    description: 'Strip heet: helderheid omlaag, alu-profiel, max. lengte.',
    h1: 'Govee-strip oververhitting',
    lead: 'Strip heet, gele uiteinden, lijm los — voeding of montage.',
  },
};

const RULES_DE = [
  [/Three numbers to remember/g, 'Drei Zahlen merken'],
  [/Three mains-powered bars compared/g, 'Drei Netz-LED-Leisten im Vergleich'],
  [/Kitchen worktop/g, 'Küchenarbeitsplatte'],
  [/colour rendering index/gi, 'Farbwiedergabeindex (CRI)'],
  [/colour temperature/gi, 'Farbtemperatur'],
  [/Error code guide/g, 'Fehlercode-Ratgeber'],
  [/Zone guide/g, 'Zonen-Ratgeber'],
  [/Partner merchant/g, 'Partner-Händler'],
  [/Gift guide/g, 'Geschenk-Ratgeber'],
  [/Smart home guide/g, 'Smart-Home-Ratgeber'],
  [/Brand guide/g, 'Marken-Ratgeber'],
  [/Tool/g, 'Werkzeug'],
  [/Troubleshooting guide/g, 'Störungen'],
  [/Protocol guide/g, 'Protokoll-Ratgeber'],
  [/Room guide/g, 'Raum-Ratgeber'],
  [/Article/g, 'Artikel'],
  [/Troubleshooting hub/g, 'Störungen'],
  [/Room guides/g, 'Räume'],
  [/Brands/g, 'Marken'],
  [/Steps/g, 'Schritte'],
  [/Symptom/g, 'Symptom'],
  [/Likely causes/g, 'Wahrscheinliche Ursachen'],
  [/Difficulty/g, 'Schwierigkeit'],
  [/Support/g, 'Support'],
  [/Safety/g, 'Sicherheit'],
  [/Pick:/g, 'Empfehlung:'],
  [/Placement/g, 'Montage'],
  [/No socket under the cabinets/g, 'Keine Steckdose unter den Schränken'],
  [/Bar or LED strip/g, 'Leiste oder LED-Streifen'],
  [/Read next/g, 'Weiterlesen'],
  [/on the worktop for chopping and reading a recipe/g, 'auf der Arbeitsplatte zum Schneiden und Lesen von Rezepten'],
  [/lux per room/g, 'Lux pro Raum'],
  [/minimum:/g, 'Mindestwert:'],
  [/Lumens per metre = stated flux/g, 'Lumen pro Meter = angegebener Lichtstrom'],
  [/manufacturer data, checked 23\/10\/2026/g, 'Herstellerangaben, geprüft 23.10.2026'],
  [/All bars exceed 420 lm\/m/g, 'Alle Leisten liegen über 420 lm/m'],
  [/the choice is mostly colour, mounting and length/g, 'entscheidend sind Farbe, Montage und Länge'],
  [/Stated flux/g, 'Lichtstrom'],
  [/Flux\/m \(calc\.\)/g, 'lm/m (berechnet)'],
  [/Daisy-chain/g, 'Verkettbar'],
  [/One bar per socket/g, 'Eine Leiste pro Steckdose'],
  [/Yes, linkable/g, 'Ja, verkettbar'],
  [/Yes, extendable/g, 'Ja, erweiterbar'],
  [/General kitchen lighting/g, 'Allgemeine Küchenbeleuchtung'],
  [/Which base\?/g, 'Welcher Sockel?'],
  [/Which radio\?/g, 'Welche Funkverbindung?'],
  [/White only or colour\?/g, 'Nur Weiß oder Farbe?'],
  [/Who gets what/g, 'Welches Geschenk für wen'],
  [/Verified picks/g, 'Geprüfte Empfehlungen'],
  [/So it works on Christmas morning/g, 'Damit es am Feiertag funktioniert'],
  [/Module matrix/g, 'Modul-Matrix'],
  [/Decision tips/g, 'Entscheidungshilfen'],
  [/Official EPREL data/g, 'Offizielle EPREL-Daten'],
  [/Strengths/g, 'Stärken'],
  [/Limits/g, 'Grenzen'],
  [/Featured product/g, 'Produkt im Fokus'],
  [/Equivalence calculator/g, 'Äquivalenz-Rechner'],
  [/Halogen → LED reference table/g, 'Referenztabelle Halogen → LED'],
  [/Quick summary/g, 'Kurzfassung'],
  [/Common mistakes/g, 'Typische Fehler'],
  [/Goals by zone/g, 'Ziele nach Zone'],
  [/Related tools/g, 'Verwandte Tools'],
  [/Priority sheets in English/g, 'Prioritäts-Ratgeber auf Deutsch'],
  [/Complete French repertoire/g, 'Vollständiges FR-Verzeichnis'],
  [/Dusk-to-dawn vs motion sensor/g, 'Dämmerungsschaltung vs. Bewegungsmelder'],
  [/Where to install/g, 'Wo montieren'],
  [/Running cost/g, 'Betriebskosten'],
];

const RULES_NL = [
  [/Three numbers to remember/g, 'Drie cijfers onthouden'],
  [/Three mains-powered bars compared/g, 'Drie netwerk-LED-balken vergeleken'],
  [/Kitchen worktop/g, 'Keukenblad'],
  [/colour rendering index/gi, 'kleurweergave-index (CRI)'],
  [/colour temperature/gi, 'kleurtemperatuur'],
  [/Error code guide/g, 'Foutcode-gids'],
  [/Zone guide/g, 'Zone-gids'],
  [/Steps/g, 'Stappen'],
  [/Symptom/g, 'Symptoom'],
  [/Likely causes/g, 'Waarschijnlijke oorzaken'],
  [/Pick:/g, 'Keuze:'],
  [/Placement/g, 'Plaatsing'],
];

function applyRules(s, rules) {
  let out = s;
  for (const [re, rep] of rules) out = out.replace(re, rep);
  return out;
}

const BODY_OVERRIDES_DE = {
  'guides/error-code/wiz-bulb-offline': `<p><strong>Symptom:</strong> Status offline in WiZ V2.</p>
<p><strong>Ursachen:</strong> unvollständige Migration V1→V2, neues WLAN, Teil-Reset.</p>
<h2>Schritte</h2><ol>
<li>App <strong>WiZ V2</strong> verwenden.</li>
<li>WLAN der Lampe neu einrichten (Pairing).</li>
<li>Wandschalter auf EIN lassen.</li>
<li>Router sendet <strong>2,4-GHz-WLAN</strong> (Wi-Fi).</li>
<li>Mehrere Lampen offline: Router neu starten.</li>
</ol>
<p>Schwierigkeit 2/5 · ca. 10–20 min · 0 €.</p>`,
  'guides/error-code/nanoleaf-wifi-2g': `<p><strong>Ursachen:</strong> nur 5-GHz, Sonderzeichen im Passwort, AP-Isolation.</p>
<h2>Schritte</h2><ol>
<li>Nur <strong>2,4 GHz</strong> für die Einrichtung.</li>
<li>Passwort zum Test vereinfachen.</li>
<li>Client-Isolation deaktivieren.</li>
<li>Controller näher an den Router.</li>
<li>Reset (5 s) und erneut versuchen.</li>
</ol>
<p>Schwierigkeit 2/5 · 10–25 min.</p>`,
};

const BODY_OVERRIDES_NL = {
  'guides/error-code/wiz-bulb-offline': `<p><strong>Symptoom:</strong> offline in WiZ V2.</p>
<h2>Stappen</h2><ol>
<li>App <strong>WiZ V2</strong> gebruiken.</li>
<li>Wi-Fi opnieuw instellen (koppelen).</li>
<li>Wandschakelaar aan laten.</li>
<li><strong>2,4 GHz Wi-Fi</strong> op de router.</li>
<li>Meerdere lampen offline: router herstarten.</li>
</ol>
<p>Moeilijkheid 2/5 · 10–20 min.</p>`,
};

function buildCopy(meta, rules, bodyOverrides = {}) {
  const copy = {};
  for (const p of en) {
    if (p.template) {
      copy[p.path] = { ...meta[p.path] };
      continue;
    }
    copy[p.path] = {
      ...meta[p.path],
      body: bodyOverrides[p.path] ?? applyRules(p.body, rules),
    };
  }
  return copy;
}

export const COPY_DE = buildCopy(META_DE, RULES_DE, BODY_OVERRIDES_DE);
export const COPY_NL = buildCopy(META_NL, RULES_NL, BODY_OVERRIDES_NL);
