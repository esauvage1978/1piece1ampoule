// Sélections Amazon.it / Amazon.es / Amazon.de (DE ajouté le 24/10/2026, tag roboteducat00-21) : ASIN contrôlés sur chaque Amazon local le 23/10/2026 (fiche active, en stock).
export const AMZ_LOCAL = {
  it: { host: 'www.amazon.it', tag: 'roboteducat0f-21', title: 'Su Amazon.it', cta: 'Vedi su Amazon.it', note: 'Link di affiliazione Amazon: se acquistate, riceviamo una piccola commissione senza costi per voi.', more: 'Maggiori informazioni', moreHref: '/it/affiliazione/' },
  es: { host: 'www.amazon.es', tag: 'roboteducat07-21', title: 'En Amazon.es', cta: 'Ver en Amazon.es', note: 'Enlace de afiliado de Amazon: si compras, recibimos una pequeña comisión sin coste para ti.', more: 'Más información', moreHref: '/es/afiliacion/' },
  de: { host: 'www.amazon.de', tag: 'roboteducat00-21', title: 'Bei Amazon.de', cta: 'Bei Amazon.de ansehen', note: 'Amazon-Partnerlink: Kaufst du darüber ein, erhalten wir eine kleine Provision, für dich ändert sich der Preis nicht.', more: 'Mehr dazu', moreHref: '/de/werbehinweis/' },
} as const;
export type AmzItem = { asin: string; name: string; text: string };
type Sel = { h: string; items: AmzItem[] };
const I = (asin: string, name: string, text: string): AmzItem => ({ asin, name, text });

// ---------- Italia ----------
const it_osram = I('B073QSXXCH', 'Osram LED Base Classic A E27, equivalente 100 W', 'Circa 1 500 lm a 4 000 K: la scelta per un lampadario principale che deve illuminare tutta la stanza.');
const it_ph40 = I('B09ZBJPNK4', 'Philips LED E27 equivalente 40 W, 2 700 K (6 pezzi)', '470 lm di luce calda: giusta per abat-jour e lampade da comodino.');
const it_ph100 = I('B0DGPZCMG6', 'Philips LED Classic E27 equivalente 100 W (6 pezzi)', 'Per soggiorni e cucine dove servono 1 500 lm per punto luce.');
const it_e14 = I('B07665DHG6', 'Philips LED oliva E14 a filamento (6 pezzi)', 'Per lampadari e applique con attacco E14 piccolo.');
const it_gu10 = I('B07665H9B7', 'Philips LED GU10 equivalente 50 W, luce calda (10 pezzi)', 'Ricambio diretto dei faretti alogeni GU10 a 230 V, senza trasformatore.');
const it_gu10d = I('B073FT1QT2', 'Philips LED GU10 dimmerabile (6 pezzi)', 'Versione dimmerabile per faretti comandati da un variatore.');
const it_dim = I('B09F9MZ4PH', 'Philips LED a filamento E27 equivalente 100 W, dimmerabile', 'Goccia a filamento compatibile con i variatori a taglio di fase.');
const it_vtac = I('B09V1N212P', 'V-TAC LED E27 8,5 W, 806 lm, 4 000 K', 'Bianco neutro a basso prezzo per cucina, bagno o studio.');
const it_huewa = I('B0FJ8VXHRX', 'Philips Hue White Ambiance E27', 'Bianco regolabile da caldo a freddo dall’app, anche senza bridge via Bluetooth.');
const it_huew = I('B099NPGWCQ', 'Philips Hue White E27 (2 pezzi)', 'Il modo più economico per entrare nell’ecosistema Hue: 806 lm, 2 700 K.');
const it_tapo = I('B08GDC99PX', 'Tapo L530E, lampadina Wi-Fi E27 multicolore', 'Wi-Fi diretto, nessun hub: compatibile con Alexa e Google, con programmazione oraria.');
const IT: Record<string, Sel> = {
  'guide/lumen-watt': { h: 'Lampadine E27 per ogni esigenza di luce', items: [it_osram, it_ph40] },
  'guide/attacchi-e27-e14-gu10': { h: 'Una lampadina affidabile per ogni attacco', items: [it_osram, it_e14, it_gu10] },
  'guide/temperatura-colore-kelvin': { h: 'Luce calda, neutra o regolabile', items: [it_ph40, it_vtac, it_huewa] },
  'guide/grado-ip-bagno-esterno': { h: 'Per lo specchio del bagno', items: [I('B0F9X4GJN4', 'Briloner lampada da specchio LED IP44, 40 cm', 'Protezione IP44 contro gli spruzzi, luce bianca calda: adatta alla zona 2 sopra il lavabo.')] },
  'guide/lampadine-led-dimmerabili': { h: 'LED dimmerabili collaudate', items: [it_dim, it_gu10d] },
  'tutorial/calcolare-lux-lumen-per-stanza': { h: 'Lampadine potenti per raggiungere i lux giusti', items: [it_ph100, it_osram] },
  'tutorial/sostituire-alogene-gu10-mr16-con-led': { h: 'Faretti GU10 LED per sostituire le alogene', items: [it_gu10, it_gu10d] },
  'tutorial/striscia-led-sotto-pensili-cucina': { h: 'Il materiale per la striscia sotto i pensili', items: [I('B08VDCXDMP', 'V-TAC striscia LED COB 24 V, 3 000 K, 5 m', 'Striscia COB senza puntini visibili, 12 W/m: abbinatela a un profilo in alluminio.'), I('B07QKJH3K8', 'LEDLUX alimentatore 24 V 60 W con spina', 'Basta per circa 4 m di striscia a 12 W/m, mantenendo il 20 % di margine.')] },
  'tutorial/interruttore-smart-senza-neutro': { h: 'Modulo smart senza neutro', items: [I('B0C5371TQL', 'SONOFF ZBMINIL2, modulo Zigbee senza neutro (4 pezzi)', 'Si installa dietro il frutto esistente; richiede un gateway Zigbee.')] },
  'tutorial/illuminare-cantina-senza-corrente': { h: 'Luci a batteria con sensore di movimento', items: [I('B0GM6WGZFN', 'AiQInu barra LED ricaricabile 30 cm con sensore', 'Ricarica USB, fissaggio magnetico: si accende al passaggio.'), I('B0FQV8PWGT', 'Blaupunkt barra LED magnetica con sensore, USB-C', '100 lm a 4 000 K, per scaffali e ripostigli.')] },
  'guide/luci-di-natale-interno-esterno': { h: 'Catene luminose per l’esterno', items: [I('B0F1D35TMT', 'SALCAR catena LED da esterno 15 m, 220 LED, IP44', 'Timer e memoria integrati, otto modalità: per balcone e siepi.'), I('B07SW396C3', 'SALCAR tenda a ghiaccioli 5 m, 40 LED, IP44', 'Bianco freddo per grondaie e ringhiere.')] },
  'guide/fototerapia-luce-mattino-inverno': { h: 'Luce del mattino in casa', items: [I('B00MOIWOAK', 'Beurer TL 30, lampada a 10 000 lux', 'Dispositivo medico, senza UV: 10 000 lux a circa 10 cm secondo Beurer.'), it_huewa] },
  'guide/serate-lunghe-luci-notturne': { h: 'Luci soffuse per la sera', items: [I('B0CB8TCRXH', 'Briloner mini lampada da tavolo ricaricabile', 'Dimmerabile e senza fili: da spostare tra divano e comodino.'), I('B0D83TX1B1', 'Diboniur luce notturna ricaricabile', 'Tre livelli di luminosità, sette colori: per la cameretta.'), it_ph40] },
  'guide/regalare-lampadine-smart': { h: 'Idee regalo verificate', items: [it_tapo, it_huew, it_huewa] },
};

// ---------- España ----------
const es_osram = I('B073QSXXCH', 'Osram LED Base Classic A E27, equivalente a 100 W', 'Unos 1 500 lm a 4 000 K: para la lámpara principal de un salón o una cocina.');
const es_ph40 = I('B09ZBJPNK4', 'Philips LED E27 4,9 W (eq. 40 W), 2 700 K, pack de 6', '470 lm de luz cálida: la intensidad justa para lámparas de mesilla.');
const es_ph100 = I('B0DGPZCMG6', 'Philips LED A60 E27 1 521 lm, pack de 6', 'Equivalente a 100 W, para estancias que necesitan mucha luz.');
const es_e14 = I('B07665DHG6', 'Philips LED vela E14 4,3 W, 470 lm', 'Para lámparas de araña y apliques con casquillo E14.');
const es_gu10 = I('B07665H9B7', 'Philips LED GU10 eq. 50 W, luz cálida, pack de 10', 'Sustituto directo de los halógenos GU10 a 230 V, sin transformador.');
const es_gu10d = I('B073FT1QT2', 'Philips foco LED GU10 regulable 2 700 K, pack de 6', 'Versión regulable para focos conectados a un regulador.');
const es_dim = I('B09F9MZ4PH', 'Philips LED A60 E27 regulable, eq. 100 W', 'Compatible con reguladores de corte de fase, luz cálida.');
const es_huewa = I('B0FJ8VXHRX', 'Philips Hue White Ambiance E27 A60', 'Blanco regulable de cálido a frío desde la app, también sin puente por Bluetooth.');
const es_huew = I('B099NPGWCQ', 'Philips Hue White E27 800 lm, pack de 2', 'La entrada más barata al ecosistema Hue: 2 700 K fijos.');
const es_tapo = I('B08GDC99PX', 'Tapo L530E, bombilla Wi-Fi E27 multicolor', 'Wi-Fi directo, sin hub: compatible con Alexa y Google, con horarios.');
const ES: Record<string, Sel> = {
  'guias/lumenes-vatios': { h: 'Bombillas E27 para cada necesidad', items: [es_osram, es_ph40] },
  'guias/casquillos-e27-e14-gu10': { h: 'Una bombilla fiable para cada casquillo', items: [es_osram, es_e14, es_gu10] },
  'guias/temperatura-color-kelvin': { h: 'Luz cálida, neutra o regulable', items: [es_ph40, es_osram, es_huewa] },
  'guias/grado-ip-bano-exterior': { h: 'Para el espejo del baño', items: [I('B0F8J78MVG', 'Briloner aplique de espejo LED IP44', 'Protegido contra salpicaduras (IP44), luz cálida: apto para la zona 2 sobre el lavabo.'), I('B077N1C7F3', 'B.K.Licht lámpara de espejo LED IP44, 650 lm', 'Se fija al espejo o al mueble con pinza, luz neutra 4 000 K.')] },
  'guias/bombillas-led-regulables': { h: 'LED regulables probadas', items: [es_dim, es_gu10d] },
  'tutoriales/calcular-lux-lumenes-por-estancia': { h: 'Bombillas potentes para alcanzar los lux adecuados', items: [es_ph100, es_osram] },
  'tutoriales/sustituir-halogenos-gu10-mr16-por-led': { h: 'Focos GU10 LED para sustituir los halógenos', items: [es_gu10, es_gu10d] },
  'tutoriales/tira-led-bajo-muebles-cocina': { h: 'El material para la tira bajo los muebles', items: [I('B0D47DF8R7', 'Tira LED COB 24 V, 2 700 K, 5 m, regulable', 'Luz continua sin puntos, con mando y app.'), I('B08NWF8F99', 'Mean Well XLG-100-24-A, fuente 24 V 96 W IP67', 'Fuente de calidad para tramos largos; se conecta a la red por un electricista o con caja de conexiones.')] },
  'tutoriales/interruptor-inteligente-sin-neutro': { h: 'Módulo inteligente sin neutro', items: [I('B0C5371TQL', 'SONOFF ZBMINIL2, módulo Zigbee sin neutro (4 uds.)', 'Se instala detrás del interruptor existente; necesita una pasarela Zigbee.')] },
  'tutoriales/iluminar-trastero-sin-electricidad': { h: 'Luces a batería con sensor de movimiento', items: [I('B0FC2WZ5VT', 'OSRAM LinearLED Mobile USB 300 con sensor', 'Recargable por USB, en aluminio: para estanterías y trasteros.'), I('B0CHB8GPHW', 'Alyvisun barra LED recargable 60 cm con sensor', 'Más longitud para iluminar un pasillo de trastero.')] },
  'guias/luces-navidad-interior-exterior': { h: 'Guirnaldas para el exterior', items: [I('B0FKGR2L1M', 'Mimotec guirnalda exterior 7,5 m, 25 bombillas, IP44', 'Luz cálida 2 700 K, para terrazas y balcones.'), I('B07SW396C3', 'SALCAR cortina de carámbanos 5 m, 40 LED, IP44', 'Blanco frío para canalones y barandillas.'), I('B08BHXPXNF', 'SALCAR luces de Navidad exterior 10 + 3 m, 400 LED', 'Para setos y árboles grandes.')] },
  'guias/luminoterapia-luz-manana-invierno': { h: 'Luz de mañana en casa', items: [es_huewa] },
  'guias/noches-largas-luces-nocturnas': { h: 'Luces suaves para la noche', items: [I('B0D83TX1B1', 'Diboniur luz nocturna recargable', 'Tres niveles de brillo y siete colores: para el dormitorio infantil.'), I('B08M69ZLQ4', 'LYRIDZ luz nocturna con sensor de movimiento', 'Luz cálida que se enciende al pasar: para pasillos y baños.'), es_ph40] },
  'guias/regalar-bombillas-inteligentes': { h: 'Ideas de regalo comprobadas', items: [es_tapo, es_huew, es_huewa] },
};

// ---------- Deutschland (Amazon.de, gleiche EU-ASIN) ----------
const de_osram = I('B073QSXXCH', 'Osram LED Base Classic A E27, ersetzt 100 W', 'Rund 1 521 lm bei 4 000 K: für die Hauptleuchte in Wohnzimmer oder Küche.');
const de_ph40 = I('B09ZBJPNK4', 'Philips LED E27, ersetzt 40 W, 2 700 K (6er-Pack)', '470 lm warmweiß: passend für Nachttisch- und Tischleuchten.');
const de_ph100 = I('B0DGPZCMG6', 'Philips LED Classic E27, ersetzt 100 W (6er-Pack)', 'Für Räume, die pro Leuchte rund 1 500 lm brauchen.');
const de_e14 = I('B07665DHG6', 'Philips LED Kerze E14 Filament (6er-Pack)', 'Für Kronleuchter und Wandleuchten mit kleinem E14-Sockel.');
const de_gu10 = I('B07665H9B7', 'Philips LED GU10, ersetzt 50 W, warmweiß (10er-Pack)', 'Direkter Ersatz für 230-V-Halogenspots GU10, ohne Trafo.');
const de_gu10d = I('B073FT1QT2', 'Philips LED GU10 dimmbar (6er-Pack)', 'Dimmbare Variante für Spots am Dimmer.');
const de_dim = I('B09F9MZ4PH', 'Philips LED Filament E27, ersetzt 100 W, dimmbar', 'Für Phasenabschnitt-Dimmer geeignet, warmweißes Licht.');
const de_huewa = I('B0FJ8VXHRX', 'Philips Hue White Ambiance E27', 'Weißton von warm bis kalt per App einstellbar, auch ohne Bridge über Bluetooth.');
const DE: Record<string, Sel> = {
  'ratgeber/lumen-watt': { h: 'E27-Lampen für jeden Lichtbedarf', items: [de_osram, de_ph40] },
  'ratgeber/lampensockel-e27-e14-gu10': { h: 'Eine bewährte Lampe für jeden Sockel', items: [de_osram, de_e14, de_gu10] },
  'ratgeber/farbtemperatur-kelvin': { h: 'Warmweiß, neutralweiß oder einstellbar', items: [de_ph40, de_osram, de_huewa] },
  'ratgeber/dimmbare-led-lampen': { h: 'Dimmbare LED, die am Dimmer funktionieren', items: [de_dim, de_gu10d] },
  'anleitungen/lux-lumen-pro-raum-berechnen': { h: 'Helle Lampen für die richtige Beleuchtungsstärke', items: [de_ph100, de_osram] },
  'anleitungen/halogen-gu10-mr16-durch-led-ersetzen': { h: 'GU10-LED-Spots als Halogenersatz', items: [de_gu10, de_gu10d] },
};
export const AMZ_SEL: Record<'it' | 'es' | 'de', Record<string, Sel>> = { it: IT, es: ES, de: DE };
