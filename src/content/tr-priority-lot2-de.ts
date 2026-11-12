// Prioritätsseiten DE Lot 2 (Okt. 2026). Übersetzt aus FR/EN-Quellen, geprüft 30.10.2026.
import type { EnPage } from './en';

const amz = (asin: string, label: string) =>
  `<a class="en-amz" href="https://www.amazon.de/dp/${asin}?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="${asin}" data-product="${label}">Preis auf Amazon.de prüfen</a>`;
const note = `<p class="en-note">Produktdaten von Hersteller/Amazon, geprüft am 30.10.2026. Preise ändern sich — vor dem Kauf prüfen. Als Amazon-Partner verdienen wir an qualifizierten Käufen.</p>`;

const err = (p: Omit<EnPage, 'article'> & { kicker?: string }): EnPage => ({
  ...p,
  article: true,
  kicker: p.kicker ?? 'Fehlercode-Ratgeber',
});

export const TR_PRIORITY_LOT2_DE: EnPage[] = [
  err({
    path: 'ratgeber/fehlercode/hue-bridge-orange-led',
    title: 'Hue Bridge: orange LED (kein Internet)',
    description: 'Orange Bridge-LED: lokale Lampen ok, Cloud und Sprachassistenten fallen aus. DHCP, DNS, Kabel.',
    h1: 'Hue Bridge: orange LED ohne Internet',
    lead: 'Die Bridge-LED bleibt orange statt blau; lokale Steuerung geht oft, Cloud-Automationen nicht.',
    body: `<p><strong>Symptom:</strong> orange LED; lokale Steuerung manchmal ok; Cloud, Alexa und Google Assistant schlagen fehl.</p>
<p><strong>Wahrscheinliche Ursachen:</strong> kein DHCP (Dynamic Host Configuration Protocol — automatische IP-Vergabe) im LAN, blockiertes DNS (Domain Name System), Kindersicherungsfilter auf Signify-Servern, defektes Ethernet-Kabel.</p>
<h2>Schritte</h2><ol>
<li>Internet am gleichen LAN-Port mit einem anderen Gerät prüfen.</li>
<li>Router neu starten, Bridge dabei angeschlossen lassen.</li>
<li>Bridge-MAC im Router freigeben (Aufkleber am Gerät).</li>
<li>Öffentliche DNS testen (1.1.1.1 / 8.8.8.8), falls DNS gefiltert wird.</li>
<li>Bleibt die LED mit neuem Kabel orange: Philips-Hue-Support.</li>
</ol>
<p><strong>Werkzeug:</strong> Ersatz-Ethernetkabel.</p>
<p><strong>Sicherheit:</strong> Bridge nicht öffnen — 230 V im Inneren.</p>
<p>Schwierigkeit 2/5 · 20–40 min · 0–22 €. Support: <a href="https://www.philips-hue.com/de-de/support" rel="nofollow noopener" target="_blank">philips-hue.com</a>.</p>`,
  }),
  err({
    path: 'ratgeber/fehlercode/hue-bridge-50-geraete-limit',
    title: 'Hue Bridge: keine neuen Lampen (Zigbee-Limit)',
    description: 'Pairing scheitert nahe ~50 Leuchten: Geister löschen, nah an der Bridge pairen, Kanäle planen, zweite Bridge.',
    h1: 'Hue Bridge: Zigbee-Gerätelimit',
    lead: 'Die App verweigert das Pairing einer blinkenden Lampe, oft ab ~50 Leuchten oder zu vielen Zigbee-Routern.',
    body: `<p><strong>Symptom:</strong> Pairing schlägt fehl, während die Lampe blinkt.</p>
<p><strong>Wahrscheinliche Ursachen:</strong> Zigbee-Mesh (Funknetzwerk mit niedrigem Stromverbrauch) gesättigt; Repeater-Lampen falsch platziert; Geistereinträge in der App.</p>
<h2>Schritte</h2><ol>
<li>Ungenutzte Leuchten in den App-Einstellungen löschen.</li>
<li>Innerhalb von 3 m zur Bridge pairen, danach Lampe umsetzen.</li>
<li>Zigbee-Kanäle planen, wenn mehrere Bridges im Einsatz sind.</li>
<li>Lampe zurücksetzen und erneut versuchen (modellspezifische Folge).</li>
<li>Große Installation: zweite Hue Bridge im separaten Netz.</li>
</ol>
<p>Schwierigkeit 3/5 · 30–60 min · 0–55 €.</p>`,
  }),
  err({
    path: 'ratgeber/fehlercode/ikea-dirigera-tradfri-migration',
    title: 'DIRIGERA: TRÅDFRI-Lampen nach Migration verschwunden',
    description: 'IKEA DIRIGERA-Migration: TRÅDFRI eingeschaltet lassen, Geräte neu suchen, Waisen zurücksetzen.',
    h1: 'DIRIGERA: TRÅDFRI-Migration',
    lead: 'Nach dem Wechsel auf DIRIGERA fehlen einige TRÅDFRI-Lampen oder Sensoren in der App.',
    body: `<p><strong>Symptom:</strong> TRÅDFRI-Geräte fehlen nach der Migration.</p>
<p><strong>Wahrscheinliche Ursachen:</strong> abgebrochene Migration; zwei Hubs gleichzeitig aktiv; Geräte außer Reichweite beim Transfer.</p>
<h2>Schritte</h2><ol>
<li>IKEA-Migrationsassistenten ausführen (TRÅDFRI mit Strom).</li>
<li>Altes Gateway danach vom Strom trennen.</li>
<li>Fehlende Geräte näher heranbringen; erneut suchen.</li>
<li>Waisen zurücksetzen und neu pairen.</li>
<li>Bei zweimaligem Scheitern: IKEA-Support.</li>
</ol>
<p>Schwierigkeit 2/5 · 30–60 min · 0 €.</p>`,
  }),
  err({
    path: 'ratgeber/fehlercode/ikea-tradfri-gateway-offline',
    title: 'IKEA TRÅDFRI-Gateway offline',
    description: 'TRÅDFRI-Gateway offline: Ethernet, USB-Strom, mDNS, per QR neu hinzufügen.',
    h1: 'TRÅDFRI-Gateway offline',
    lead: 'Die IKEA-Home-smart-App zeigt das Gateway als getrennt; Wandschalter funktionieren lokal oft weiter.',
    body: `<p><strong>Symptom:</strong> Gateway in der App offline.</p>
<p><strong>Wahrscheinliche Ursachen:</strong> Ethernet abgezogen; schwache USB-Versorgung; mDNS (Multicast-DNS) am Router blockiert.</p>
<h2>Schritte</h2><ol>
<li>Power-LED prüfen.</li>
<li>Ethernet wieder am Hauptrouter einstecken.</li>
<li>Router und Gateway neu starten.</li>
<li>Per QR-Code neu hinzufügen.</li>
<li>Werkseinstellung, dann IKEA-Support falls nötig.</li>
</ol>
<p>Schwierigkeit 2/5 · 10–25 min · 0 €.</p>`,
  }),
  err({
    path: 'ratgeber/fehlercode/nanoleaf-layout-unzulaessig',
    title: 'Nanoleaf: ungültiges Layout oder fehlendes Panel',
    description: 'Nanoleaf-Layout abgelehnt: Stecker neu setzen, graues Panel finden, Firmware, Panel-Limit.',
    h1: 'Nanoleaf: ungültiges Layout',
    lead: 'Die App validiert die Form nicht oder ein Panel bleibt grau.',
    body: `<p><strong>Symptom:</strong> ungültiges Layout oder graues Panel.</p>
<p><strong>Wahrscheinliche Ursachen:</strong> lockerer Steckverbinder; defektes Panel; Panel-Limit überschritten; alte Firmware.</p>
<h2>Schritte</h2><ol>
<li>Jeden Stecker neu einrasten, bis es klickt.</li>
<li>Panels nacheinander entfernen, um den Fehler zu finden.</li>
<li>Controller-Firmware aktualisieren.</li>
<li>Maximale Panelzahl pro Set beachten.</li>
<li>Garantie bei totem Panel.</li>
</ol>
<p>Schwierigkeit 2/5 · 15–35 min · 0 €. <a href="https://help.nanoleaf.me/" rel="nofollow noopener" target="_blank">Nanoleaf-Hilfe</a>.</p>`,
  }),
  err({
    path: 'ratgeber/fehlercode/schneider-wiser-matter-thread',
    title: 'Schneider Wiser: Matter-Pairing fehlgeschlagen (Thread)',
    description: 'Wiser-Matter-QR scheitert: Firmware, Thread-Border-Router, VLAN-Isolation.',
    h1: 'Wiser Matter: Pairing in Apple Home fehlgeschlagen',
    lead: 'Der Wiser-Dimmer: Matter-QR-Code schlägt fehl oder hängt in Apple Home.',
    body: `<p><strong>Symptom:</strong> Matter-Pairing (gemeinsamer Smart-Home-Standard) schlägt fehl.</p>
<p><strong>Wahrscheinliche Ursachen:</strong> alte Firmware; kein Thread-Border-Router; Gerät bereits gekoppelt.</p>
<h2>Schritte</h2><ol>
<li>Update über Wiser by SE.</li>
<li><strong>Thread</strong>-Border-Router im LAN sicherstellen (Funkprotokoll, das Matter oft nutzt).</li>
<li>Matter am Gerät zurücksetzen.</li>
<li>VLAN-Isolation deaktivieren.</li>
<li>Schneider-Matter-Geräteliste prüfen.</li>
</ol>
<p>Schwierigkeit 3/5 · 25–45 min · 0 €.</p>`,
  }),
  err({
    path: 'ratgeber/fehlercode/shelly-dimmer-2-wifi-offline',
    title: 'Shelly Dimmer 2: Wi-Fi offline',
    description: 'Shelly Dimmer 2 offline: 2,4-GHz-Wi-Fi, AP-Modus, DHCP-Reservierung.',
    h1: 'Shelly Dimmer 2: Wi-Fi offline',
    lead: 'Modul in der App nicht erreichbar; der physische Dimmer funktioniert oft weiter.',
    body: `<p><strong>Symptom:</strong> Cloud offline.</p>
<p><strong>Wahrscheinliche Ursachen:</strong> Wi-Fi-Passwort geändert; nur 5-GHz aktiv; DHCP-IP (automatische Adresse) geändert.</p>
<h2>Schritte</h2><ol>
<li><strong>2,4-GHz-Wi-Fi</strong> aktivieren.</li>
<li>Lokale IP oder Shelly-AP-Modus nutzen.</li>
<li>Wi-Fi neu konfigurieren.</li>
<li>DHCP-Reservierung im Router setzen.</li>
<li>Lokales MQTT/Home Assistant als Backup.</li>
</ol>
<p>Schwierigkeit 2/5 · 15–30 min · 0 €.</p>`,
  }),
  err({
    path: 'ratgeber/fehlercode/variator-led-nachleuchten',
    title: 'LED-Dimmer: Nachleuchten im AUS-Zustand',
    description: 'LED leuchtet bei AUS am Dimmer: Bypass, LED-Dimmer, Neutralleiter prüfen.',
    h1: 'LED-Dimmer: Nachleuchten (Ghosting)',
    lead: 'LEDs leuchten schwach nach, wenn der Dimmer auf AUS steht.',
    body: `<p><strong>Symptom:</strong> schwaches Nachleuchten bei AUS.</p>
<p><strong>Wahrscheinliche Ursachen:</strong> Leckstrom im Dimmer; gemeinsamer Neutralleiter; empfindliche LEDs.</p>
<h2>Schritte</h2><ol>
<li>Hersteller-Bypass einbauen (~4 €).</li>
<li>Durch LED-tauglichen Dimmer ersetzen.</li>
<li>Kein Halogen-/LED-Mix auf einem Stromkreis.</li>
<li>Neutralleiter an der Decke prüfen.</li>
<li>Elektriker, wenn es anhält.</li>
</ol>
<p><strong>Sicherheit:</strong> nur LED-geeigneter bipolarer Kondensator; keine Arbeit unter Spannung.</p>
<p>Schwierigkeit 2/5 · 15–40 min · 4–22 €.</p>`,
  }),
  err({
    path: 'ratgeber/fehlercode/variator-led-flackern-niedrig',
    title: 'LED-Dimmer: Flackern bei niedriger Helligkeit',
    description: 'Flackern bei 5–25 %: Mindesthelligkeit erhöhen, Unterkante, passende Lampen.',
    h1: 'LED-Dimmer: Flackern im unteren Bereich',
    lead: 'Sichtbares Flackern zwischen 5 % und 25 % Helligkeit.',
    body: `<p><strong>Symptom:</strong> Flackern im unteren Dimmbereich.</p>
<p><strong>Wahrscheinliche Ursachen:</strong> Phasenanschnitt passt nicht; billige Treiber; Mindesttrim zu niedrig.</p>
<h2>Schritte</h2><ol>
<li>Mindesthelligkeit (Trim) erhöhen.</li>
<li>Andere dimmbare LED-Marke testen.</li>
<li>Unterkanten-Dimmung, falls unterstützt.</li>
<li>Keine LED-Streifen am Wanddimmer ohne passenden Treiber.</li>
<li>Abgestimmtes Dimmer- und Lampen-Paar wählen.</li>
</ol>
<p>Schwierigkeit 2/5 · 15–35 min · 0–30 €.</p>`,
  }),
  err({
    path: 'ratgeber/fehlercode/wiz-lampe-variator-flackern',
    title: 'WiZ-Lampe flackert am Wanddimmer',
    description: 'WiZ + Wanddimmer: Schalter auf 100 %, LED-Dimmer oder nur App-Dimmung.',
    h1: 'WiZ-Lampe: Flackern am Wanddimmer',
    lead: 'Flackern oder Aussetzer, wenn ein Wanddimmer die WiZ-Lampe steuert.',
    body: `<p><strong>Symptom:</strong> Flackern mit externem Dimmer.</p>
<p><strong>Wahrscheinliche Ursachen:</strong> inkompatibler Dimmer; Doppelsteuerung Dimmer + App.</p>
<h2>Schritte</h2><ol>
<li>Wanddimmer auf 100 %; in der WiZ-App dimmen.</li>
<li>Zertifizierten LED-Dimmer verwenden.</li>
<li>Einfacher Schalter + App.</li>
<li>Auf der Verpackung „dimmbar“ prüfen.</li>
<li>Kompensationskondensator bei Nachleuchten.</li>
</ol>
<p><strong>Sicherheit:</strong> Stromkreis sichern, bevor der Dimmer getauscht wird.</p>
<p>Schwierigkeit 2/5 · 15–35 min · 18–40 €.</p>`,
  }),
  {
    path: 'ratgeber/steinel-aussenbeleuchtung-automatisch',
    article: true,
    kicker: 'Kaufberatung',
    title: 'Steinel Außenbeleuchtung automatisch: 4 Produkte im Datenblatt-Vergleich',
    description: 'Steinel L 12 M, NightMatic 2000, IS 360-1, XSolar LH-N: IP, Lasten, Schwellen laut Hersteller.',
    h1: 'Eingangsbeleuchtung mit Steinel automatisieren',
    lead: 'Vier Steinel-Referenzen von 2echoix anhand Herstellerdaten (23.10.2026). Nur XSolar LH-N ist eine komplette Leuchte; L 12 M hat keinen Sensor.',
    body: `<h2>Unsere Empfehlung</h2>
<p>Für eine bestehende Türleuchte: <strong>L 12 M + E27-LED ~800 lm bei 2700–3000 K + NightMatic 2000</strong> (ca. 80,58 € ohne Lampe). Nur bei Bewegung: <strong>IS 360-1</strong> unter der Überdachung.</p>
<p><a href="https://www.awin1.com/pclick.php?p=46381369701&a=3127458&m=31151" rel="sponsored nofollow noopener" target="_blank">L 12 M bei 2echoix (57,19 €, 22.10.2026)</a></p>
<h2>Datenblatt-Tabelle</h2>
<table><thead><tr><th>Produkt</th><th>Funktion</th><th>Lichtstrom</th><th>IP</th><th>K</th><th>Last</th><th>Erkennung</th><th>2echoix</th></tr></thead><tbody>
<tr><td>L 12 M 069155</td><td>Wandleuchte, ohne Sensor</td><td>Je nach E27-Lampe</td><td>IP44 IK03</td><td>Lampe</td><td>max. 60 W</td><td>–</td><td><a href="https://www.awin1.com/pclick.php?p=46381369701&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">57,19 €</a></td></tr>
<tr><td>NightMatic 2000 550417</td><td>Dämmerungsschalter</td><td>Keiner</td><td>IP54</td><td>–</td><td>1000 W; max. 4 LED; 0,8 W</td><td>2–30 lx</td><td><a href="https://www.awin1.com/pclick.php?p=46359010299&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">23,39 €</a></td></tr>
<tr><td>IS 360-1 DE 032845</td><td>Decken-PIR</td><td>Keiner</td><td>IP54</td><td>–</td><td>350 W LED wenn &gt;8 W/Lampe</td><td>360° Ø8/4 m</td><td><a href="https://www.awin1.com/pclick.php?p=46381369825&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">41,99 €</a></td></tr>
<tr><td>XSolar LH-N 035730</td><td>Solar-Hausnummer</td><td>4 LED-Marker</td><td>IP44</td><td>4000 K CRI (Farbwiedergabeindex) 80–89</td><td>LiFePO4</td><td>Dämmerung 2 lx</td><td><a href="https://www.awin1.com/pclick.php?p=45843200190&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">70,59 €</a></td></tr>
</tbody></table>
<p class="en-note">Steinel-Datenblätter 23.10.2026; 2echoix-Preise 22.10.2026. Affiliate Awin. Nur XSolar LH-N liefert allein sinnvolles Licht.</p>
<h2>Kombinationen</h2>
<ul>
<li><strong>Dämmerung bis Morgen:</strong> L 12 M + NightMatic — Sensor vor Streulicht der Lampe abschirmen.</li>
<li><strong>Nur Durchgang:</strong> IS 360-1 in 2,5–4 m Höhe unter Dach.</li>
<li><strong>Hausnummer ohne Kabel:</strong> XSolar LH-N (Marker, kein Wegelicht).</li>
</ul>
<h2>Hinweise VDE / Außenbereich</h2>
<ul>
<li>Regen im Außenbereich: mindestens <strong>IP44</strong> (Schutzart) — siehe <a href="/de/ratgeber/ip-schutzarten-bad-aussen/">IP-Ratgeber</a>.</li>
<li>NightMatic / IS 360-1: Phase + Neutralleiter; 10-A-Schutz laut NightMatic-Handbuch.</li>
<li>LED-Lastgrenzen in den Datenblättern beachten.</li>
</ul>
<p><a href="/de/marken/steinel/">Steinel-Markenseite</a>.</p>`,
  },
  {
    path: 'ratgeber/weihnachtsbeleuchtung-innen-aussen',
    article: true,
    kicker: 'Saison-Ratgeber',
    title: 'Weihnachtsbeleuchtung innen und außen: IP, Trafo, Sicherheit, Verbrauch',
    description: 'Lichterketten: IP44 außen, Kleinspannung, EN 60598-2-20, FI-Schutz, Verbrauch und Timer.',
    h1: 'Weihnachtsbeleuchtung innen und außen',
    lead: 'Lichterketten brauchen die richtige IP-Schutzart, einen Trafo und sinnvolle Laufzeiten — wie jede Leuchte.',
    body: `<h2>Kurzüberblick</h2><table><thead><tr><th>Einsatz</th><th>Voraussetzung</th></tr></thead><tbody><tr><td>Baum innen</td><td>LED, CE, EN 60598-2-20</td></tr><tr><td>Außen</td><td>IP44+ (IP65 ungeschützt), Kleinspannungstrafo</td></tr><tr><td>Steckdose</td><td>FI-geschützter Außenstromkreis</td></tr></tbody></table><h2>Innen</h2><ul><li>Nur LED nahe trockener Nadeln.</li><li>Warm 2200–2700 K — <a href="/de/ratgeber/farbtemperatur-kelvin/">Kelvin</a>.</li><li>Maximale Kettenzahl laut Handbuch einhalten.</li></ul><h2>Außen</h2><ul><li>IP44 unter Überdachung; IP65 im Regen.</li><li>24-V-Trafo; Verlängerung draußen nicht aufgerollt lagern.</li></ul><h2>Verbrauch</h2><p>kWh = W × Stunden ÷ 1000. Beispiel: 6 W × 6 h × 40 Tage = 1,44 kWh.</p><h2>Beispiele</h2><div class="en-card"><p class="en-flag">Außen IP65</p><h3>ZOTOYI 15 m S14-Lichterkette</h3><p>Bruchsichere S14, IP65 laut Angebot für freistehende Fassaden.</p><a class="en-amz" href="https://www.amazon.de/dp/B0972HH7C6?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0972HH7C6" data-product="ZOTOYI 15 m S14-Lichterkette">Preis auf Amazon.de prüfen</a></div><div class="en-card"><p class="en-flag">Balkon IP44 24 V</p><h3>10 m G40-Lichterkette mit Timer</h3><p>24 V, IP44, dimmbarer Timer laut Angebot.</p><a class="en-amz" href="https://www.amazon.de/dp/B0CZ9B4C2B?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0CZ9B4C2B" data-product="10 m G40-Lichterkette mit Timer">Preis auf Amazon.de prüfen</a></div>${note}<p>FR-Anleitung: <a href="https://1piece1ampoule.fr/tutoriels/programmer-guirlande-lumineuse-exterieure/">Lichterkette bei Dämmerung schalten</a>.</p>`,
  },
  {
    path: 'ratgeber/lichttherapie-morgenlicht-winter',
    article: true,
    kicker: 'Winter & Wohlbefinden',
    title: 'Morgenlicht und Lichttherapie: 10.000 Lux, Abstand, Wecksimulation',
    description: 'Therapielampe vs. Wecksimulator vs. smarte Lampen; Lux im Abstand; Morgenroutine im Winter.',
    h1: 'Lichttherapie und Morgenlicht im Winter',
    lead: 'Drei verschiedene Werkzeuge — und Lux-Angaben gelten nur im Abstand aus dem Datenblatt.',
    body: `<h2>Drei Werkzeuge</h2><table><thead><tr><th>Werkzeug</th><th>Rolle</th><th>Stärke</th></tr></thead><tbody><tr><td>Therapielampe</td><td>Sitzung von vorn</td><td>10.000 Lux im angegebenen Abstand</td></tr><tr><td>Wecksimulator</td><td>Sanftes Aufwachen</td><td>~300 Lux max. (HF3520, Philips)</td></tr><tr><td>Smarte Lampen</td><td>Zeitplan-Rampe</td><td>Abhängig von Lumen und Abstand</td></tr></tbody></table><h2>Abstand</h2><p>Lux sinkt mit dem Quadrat des Abstands. 10.000 Lux in 10 cm Entfernung ≠ 10.000 Lux auf Armlänge.</p><h2>Nutzung der Therapielampe</h2><ul><li>Oft ~30 min bei ~10.000 Lux am Morgen — Handbuch beachten.</li><li>Blick seitlich versetzt; CE-Medizinprodukt, UV-frei.</li><li>Bei Augenerkrankung oder bipolarer Störung Arzt konsultieren.</li></ul><h2>Empfehlungen</h2><div class="en-card"><p class="en-flag">Lichttherapie</p><h3>Beurer TL 30</h3><p>10.000 Lux bei ~10 cm, 6500 K, CRI (Farbwiedergabeindex) 80, 3 Jahre Garantie.</p><a class="en-amz" href="https://www.amazon.de/dp/B00MOIWOAK?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B00MOIWOAK" data-product="Beurer TL 30">Preis auf Amazon.de prüfen</a></div><div class="en-card"><p class="en-flag">Hue-Weckroutine</p><h3>Hue White Ambiance E27 1100 lm</h3><p>EPREL 2187086: 1100 lm, 8,1 W, Klasse D; Bluetooth.</p><a class="en-amz" href="https://www.amazon.de/dp/B0FJ8VXHRX?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0FJ8VXHRX" data-product="Hue White Ambiance E27 1100 lm">Preis auf Amazon.de prüfen</a></div>${note}`,
  },
  {
    path: 'marken/tapo',
    article: true,
    kicker: 'Markenportrait',
    title: 'Tapo (TP-Link) im Test: L530E Wi-Fi-Lampe, 2 Jahre Garantie',
    description: 'Tapo L530E: 806 lm, 8,7 W, Klasse F, Wi-Fi 2,4 GHz, Vor- und Nachteile, Support-Fakten.',
    h1: 'Tapo (TP-Link): unsere Einschätzung der Marke',
    lead: 'Tapo ist TP-Links Smart-Home-Linie. Die Wi-Fi-Farblampe L530E ist die Hub-freie Alternative zu Philips Hue für den Einstieg in einem Raum.',
    body: `<h2>Offizielle L530E-Daten (TP-Link, 23.10.2026)</h2>
<table><tbody>
<tr><th>Lichtstrom / Leistung</th><td>806 lm, 8,7 W (~93 lm/W), 60-W-Äquivalent</td></tr>
<tr><th>Energieklasse</th><td>F (EPREL)</td></tr>
<tr><th>Farbe / CRI</th><td>2500–6500 K Weiß + Farbe; CRI (Farbwiedergabeindex) ≥ 80</td></tr>
<tr><th>Funk</th><td>Nur Wi-Fi 2,4 GHz — kein Zigbee-Hub</td></tr>
<tr><th>Dimmen</th><td>1–100 % in der App</td></tr>
<tr><th>Lebensdauer</th><td>15.000 h</td></tr>
</tbody></table>
<h2>Stärken</h2><ul><li>Kein Hub; Alexa/Google.</li><li>Urlaubsmodus, Zeitpläne, Sonnensynchronisation.</li><li>Merkt sich den letzten Zustand nach Stromausfall.</li><li>Günstiger Einstieg.</li></ul>
<h2>Grenzen</h2><ul><li>Klasse F vs. Hue White Ambiance Klasse D.</li><li>Jede Lampe belegt einen Wi-Fi-Slot am Router.</li><li>806 lm knapp für großes Wohnzimmer.</li><li>Wandschalter muss EIN bleiben.</li></ul>
<h2>Garantie</h2>
<p>TP-Link Tapo <strong>2 Jahre</strong> Herstellergarantie; gesetzliche Gewährleistung beim Händler (z. B. Amazon.de).</p>
<h2>Unsere Einschätzung</h2>
<p>Bester Einstieg in vernetzte Beleuchtung für 1–3 Lampen. Darüber skalieren <strong>Zigbee</strong>-Systeme (Funk-Mesh mit geringem Stromverbrauch) wie Philips Hue besser — siehe <a href="/de/artikel/smarte-lampe-wifi-oder-zigbee/">Wi-Fi vs. Zigbee</a>.</p>
<p><a class="en-amz" href="https://www.amazon.de/dp/B08GDC99PX?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B08GDC99PX" data-product="Tapo L530E E27">Preis auf Amazon.de prüfen</a> <a class="en-amz" href="https://www.amazon.de/dp/B08Z4KCJZY?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B08Z4KCJZY" data-product="Tapo L530E 2er-Pack">Preis auf Amazon.de prüfen</a></p>
${note}
<p>Vergleich: <a href="/de/marken/philips-hue/">Philips Hue</a>, <a href="/de/ratgeber/smarte-lampen-geschenkideen/">Geschenkideen</a>.</p>`,
  },
  {
    path: 'werkzeuge/lux-lumen-watt-raum-umrechner',
    article: true,
    kicker: 'Werkzeug',
    title: 'Lux ↔ Lumen ↔ LED-Watt-Umrechner nach Raumgröße',
    description: 'Rechner in beide Richtungen: Lux, Lumen und LED-Watt für m² Bodenfläche mit Wandreflexionsfaktor K.',
    h1: 'Lux ↔ Lumen ↔ LED-Watt-Umrechner',
    lead: 'Ziel-Lux auf dem Boden mit Gesamt-Lumen und LED-Leistung für Raumgröße und Wandfarbe verknüpfen.',
    body: `<p><strong>Lux</strong> (Licht auf einer Fläche), <strong>Lumen</strong> (Gesamtlichtstrom) und <strong>LED-Watt</strong> für eine Bodenfläche zusammenführen. Faktor <strong>K</strong> berücksichtigt die Wandreflexion. Ein Feld ändern — die anderen Werte passen sich an.</p>
<p>Siehe <a href="/de/ratgeber/lumen-watt/">Lumen vs. Watt</a> und <a href="/de/anleitungen/lux-lumen-pro-raum-berechnen/">Anleitung Lux pro Raum</a>.</p>
<h2>Rechner</h2>
<div class="mt-5 grid gap-4 sm:grid-cols-2" id="conv-lux-tool">
<label class="block text-sm font-semibold sm:col-span-2">Raumtyp
<select id="cv-room" class="mt-1 w-full rounded-xl border border-stone-300 bg-white p-2"><option value="salon" data-lux="125" data-m2="20">Wohnzimmer (125 lx, 20 m²)</option><option value="cuisine" data-lux="200" data-m2="12">Küche (200 lx, 12 m²)</option><option value="chambre" data-lux="100" data-m2="14">Schlafzimmer (100 lx, 14 m²)</option><option value="sdb" data-lux="175" data-m2="6">Badezimmer (175 lx, 6 m²)</option><option value="bureau" data-lux="300" data-m2="10">Büro (300 lx, 10 m²)</option><option value="garage" data-lux="300" data-m2="18">Garage (300 lx, 18 m²)</option><option value="couloir" data-lux="100" data-m2="8">Flur (100 lx, 8 m²)</option></select></label>
<label class="block text-sm font-semibold sm:col-span-2">Wandfarbe (Reflexionsfaktor K)
<select id="cv-walls" class="mt-1 w-full rounded-xl border border-stone-300 bg-white p-2"><option value="blanc" data-k="2">Hell / weiße Wände (K ≈ 2)</option><option value="beige" data-k="1.85">Beige oder hellgrau (K ≈ 1,85)</option><option value="couleur" data-k="1.55">Mittlere Farbe (K ≈ 1,55)</option><option value="sombre" data-k="1.25">Dunkle Wände (K ≈ 1,25)</option></select></label>
<label class="block text-sm font-semibold">Ziel-Lux<input id="cv-lux" type="number" min="20" max="3000" step="5" value="125" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
<label class="block text-sm font-semibold">Bodenfläche (m²)<input id="cv-m2" type="number" min="0.5" max="120" step="0.1" value="20" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
<label class="block text-sm font-semibold">Lumen (Gesamtlichtstrom)<input id="cv-lm" type="number" min="50" max="150000" step="50" value="5000" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
<label class="block text-sm font-semibold">LED-Wirkungsgrad (lm/W)<input id="cv-lmw" type="number" min="60" max="150" step="5" value="100" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
<label class="block text-sm font-semibold sm:col-span-2">Gesamt-LED-Leistung (W)<input id="cv-w" type="number" min="1" max="5000" step="1" value="50" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
</div>
<p class="mt-4 text-sm" id="cv-hint" aria-live="polite"></p>
<p class="text-xs text-stone-500">Formel: Lumen ≈ Lux × Fläche × K. Gleichmäßige Verteilung angenommen — eine Pendelleuchte lässt Ecken dunkler.</p>
<script>
(function(){var lock=null;function el(id){return document.getElementById(id);}function num(v){return parseFloat(String(v).replace(',','.'))||0;}
function fmt(n){return Math.round(n).toLocaleString('de-DE');}
function kVal(){var s=el('cv-walls');return parseFloat(s.options[s.selectedIndex].getAttribute('data-k'))||2;}
function fromLux(){var lux=num(el('cv-lux').value),m2=num(el('cv-m2').value),K=kVal(),lmw=num(el('cv-lmw').value)||100;var lm=lux*m2*K;el('cv-lm').value=Math.round(lm);el('cv-w').value=Math.max(1,Math.round(lm/lmw));el('cv-hint').textContent='≈ '+fmt(lux)+' lx × '+m2.toFixed(1)+' m² × K '+K+' → '+fmt(lm)+' lm → ≈ '+fmt(lm/lmw)+' W LED ('+lmw+' lm/W)';}
function fromLm(){var lm=num(el('cv-lm').value),m2=num(el('cv-m2').value),K=kVal(),lmw=num(el('cv-lmw').value)||100;var lux=m2>0&&K>0?lm/(m2*K):0;el('cv-lux').value=Math.round(lux);el('cv-w').value=Math.max(1,Math.round(lm/lmw));el('cv-hint').textContent=fmt(lm)+' lm → ≈ '+fmt(lux)+' lx (Fläche '+m2.toFixed(1)+' m², K '+K+')';}
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
<ul class="mt-4"><li><a href="/de/werkzeuge/halogen-led-aequivalenz-gu10-e27-lumen/">Halogen → LED-Äquivalenz</a></li>
<li><a href="/de/ratgeber/lumen-watt/">Lumen vs. Watt</a></li>
<li><a href="https://1piece1ampoule.fr/outils/convertisseur-lux-lumens-watts-surface/">Interaktive Seite (FR)</a></li></ul>`,
  },
  {
    path: 'anleitungen',
    article: true,
    kicker: 'Anleitungen',
    title: 'Beleuchtungs-Anleitungen: Lux, LED-Streifen, smarte Schalter, GU10',
    description: 'Übersicht aller Schritt-für-Schritt-Anleitungen mit Links zu deutschen Seiten, wo verfügbar.',
    h1: 'Anleitungen',
    lead: 'Praktische Anleitungen aus unserer Werkstatt — deutsche Versionen schrittweise ergänzt.',
    body: `<h2>Alle Schritt-für-Schritt-Anleitungen</h2><ul><li><a href="/de/anleitungen/lux-lumen-pro-raum-berechnen/">Raumbeleuchtung in Lux und Lumen berechnen</a></li><li><a href="/de/anleitungen/led-streifen-unter-haengeschraenken/">LED-Streifen unter Hängeschränken in der Küche</a></li><li><a href="/de/anleitungen/keller-ohne-strom-beleuchten/">Keller ohne Netzstrom beleuchten</a></li><li><a href="/de/anleitungen/halogen-gu10-mr16-durch-led-ersetzen/">Halogen GU10 oder MR16 durch LED ersetzen</a></li><li><a href="/de/anleitungen/smarter-schalter-ohne-neutralleiter/">Smarter Schalter oder Lampe ohne Neutralleiter</a></li><li><a href="https://1piece1ampoule.fr/tutoriels/appairer-module-zigbee-sans-neutre-sonoff-aqara/">Zigbee-Modul ohne Neutralleiter koppeln (SONOFF, Aqara)</a></li><li><a href="https://1piece1ampoule.fr/tutoriels/eclairage-bureau-teletravail-lux-irc-kelvin/">Homeoffice-Beleuchtung: Lux, CRI, Kelvin</a></li><li><a href="https://1piece1ampoule.fr/tutoriels/programmer-guirlande-lumineuse-exterieure/">Außen-Lichterkette bei Dämmerung schalten</a></li><li><a href="https://1piece1ampoule.fr/tutoriels/reparer-guirlande-led-partie-eteinte/">Teilweise ausgefallene LED-Lichterkette reparieren</a></li></ul><p>Fünf Anleitungen sind vollständig auf Deutsch; weitere verlinken vorerst auf die französische Seite.</p>`,
  },
  {
    path: 'zonen',
    article: true,
    kicker: 'Zonen-Ratgeber',
    title: 'Beleuchtung nach Zone: Arbeitsplatte, Spiegel, Eingang, Treppe, Kleiderschrank',
    description: 'Fünf Wohnzonen mit Lux-/Lumen-Zielen und Produkt-Tipps; Tabelle und Karten.',
    h1: 'Zonen & Planung',
    lead: 'Konkrete Anforderungen pro Zone — danach ein geprüfter Produktvorschlag.',
    body: `<p>Manche Stellen brauchen präzises Licht: Gesichtshöhe am Spiegel, schattenfreie Arbeitsplatte, automatische Treppe.</p>
<table><thead><tr><th>Zone</th><th>Ziel</th><th>Tipp</th></tr></thead><tbody>
<tr><td><a href="/de/zonen/kuechenarbeitsplatte/">Küchenarbeitsplatte</a></td><td>500 Lux, ≥420 lm/m, 4000 K</td><td>DA LIGHT 56 cm Leiste (1000 lm/m rechnerisch) <a class="en-amz" href="https://www.amazon.de/dp/B07H7HB6LG?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B07H7HB6LG" data-product="DA LIGHT Leiste">Preis auf Amazon.de prüfen</a></td></tr>
<tr><td><a href="/de/zonen/badezimmerspiegel/">Badezimmerspiegel</a></td><td>300–500 Lux im Gesicht, IP44, 3000–4000 K</td><td>Lucide ONNO Spiegelleiste <a class="en-amz" href="https://www.amazon.de/dp/B07B4CPRDQ?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B07B4CPRDQ" data-product="Lucide ONNO">Preis auf Amazon.de prüfen</a></td></tr>
<tr><td><a href="https://1piece1ampoule.fr/zones/entree-allee-exterieure/">Eingang &amp; Auffahrt</a></td><td>2000–3000 lm, IP65, Bewegung</td><td>OREiN 24 W Strahler <a class="en-amz" href="https://www.amazon.de/dp/B0BPX1ZZXJ?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0BPX1ZZXJ" data-product="OREiN Strahler">Preis auf Amazon.de prüfen</a></td></tr>
<tr><td><a href="https://1piece1ampoule.fr/zones/escaliers/">Treppe</a></td><td>150 Lux, Auto an beiden Enden</td><td>OSRAM Radar E27 <a class="en-amz" href="https://www.amazon.de/dp/B0FGD6H3NZ?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0FGD6H3NZ" data-product="OSRAM Bewegung E27">Preis auf Amazon.de prüfen</a></td></tr>
<tr><td><a href="https://1piece1ampoule.fr/zones/placards-dressing/">Kleiderschrank</a></td><td>Kabellose Bewegungsleiste</td><td>OUILA 60 cm akku <a class="en-amz" href="https://www.amazon.de/dp/B0F18462GT?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0F18462GT" data-product="OUILA Leiste">Preis auf Amazon.de prüfen</a></td></tr>
</tbody></table>
<div class="en-grid">
<a class="en-tile" href="/de/zonen/kuechenarbeitsplatte/"><strong>Küchenarbeitsplatte</strong><span>500 Lux unter Schränken.</span></a>
<a class="en-tile" href="/de/zonen/badezimmerspiegel/"><strong>Badezimmerspiegel</strong><span>IP44 auf Gesichtshöhe.</span></a>
<a class="en-tile" href="https://1piece1ampoule.fr/zones/entree-allee-exterieure/"><strong>Eingang (FR)</strong><span>Auffahrt und Vordach.</span></a>
<a class="en-tile" href="https://1piece1ampoule.fr/zones/escaliers/"><strong>Treppe (FR)</strong><span>Bewegungsautomatik.</span></a>
<a class="en-tile" href="https://1piece1ampoule.fr/zones/placards-dressing/"><strong>Kleiderschrank (FR)</strong><span>Bewegungsleisten.</span></a>
</div>
<p>Methode: <a href="/de/anleitungen/lux-lumen-pro-raum-berechnen/">Lux pro Raum</a>.</p>`,
  },
  {
    path: 'zonen/badezimmerspiegel',
    article: true,
    kicker: 'Zonen-Ratgeber',
    title: 'Beleuchtung am Badezimmerspiegel: Lux, IP44, Farbtemperatur',
    description: 'Spiegelleuchte platzieren, Badvolumen, CRI für Make-up, Wandleuchten und Outlet-Spiegel im Vergleich.',
    h1: 'Beleuchtung am Badezimmerspiegel',
    lead: 'Deckenspots werfen Schatten ins Gesicht. Rasur und Make-up brauchen Frontlicht auf Augenhöhe.',
    body: `<h2>Das Wichtigste</h2><ul>
<li><strong>Position:</strong> Leiste über die volle Spiegelbreite oder vertikale Wandleuchten auf Augenhöhe (am gleichmäßigsten).</li>
<li><strong>Stärke:</strong> 300–500 Lux im Gesicht — <a href="/de/anleitungen/lux-lumen-pro-raum-berechnen/">Lux-Ratgeber</a>.</li>
<li><strong>Farbe:</strong> 3000–4000 K; kälter wirkt flach auf der Haut.</li>
<li><strong>CRI (Farbwiedergabeindex) ≥ 90</strong> für Make-up — <a href="/de/ratgeber/farbwiedergabe-cri-ra/">CRI-Ratgeber</a>.</li>
</ul>
<h2>IP-Zonen (DIN VDE 0100-701 / Badvolumen)</h2><ul>
<li><strong>Zone 1</strong> (über Badewanne/Dusche bis 2,25 m): IPX4, nur SELV 12 V.</li>
<li><strong>Zone 2</strong> (0,6 m um Zone 1): IPX4, Schutzklasse II am 30-mA-FI oder 12 V.</li>
<li><strong>Außerhalb der Volumen:</strong> keine Pflicht-IP, aber IP44 nahe Spritzwasser sinnvoll.</li>
</ul>
<p>In Frankreich gelten ähnliche Volumen nach NF C 15-100. Im Zweifel Elektrofachbetrieb beauftragen.</p>
<h2>Wandleuchten im Vergleich</h2>
<table><thead><tr><th>Produkt</th><th>Typ</th><th>IP</th><th>K</th></tr></thead><tbody>
<tr><td>Lucide ONNO 11 W 60 cm <a class="en-amz" href="https://www.amazon.de/dp/B07B4CPRDQ?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B07B4CPRDQ" data-product="Lucide ONNO">Preis auf Amazon.de prüfen</a></td><td>Spiegelleiste</td><td>IP44</td><td>3000 K</td></tr>
<tr><td>SILAMP 12 W <a class="en-amz" href="https://www.amazon.de/dp/B0BBLYJCFF?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0BBLYJCFF" data-product="SILAMP 12 W">Preis auf Amazon.de prüfen</a></td><td>Wand</td><td>IP44</td><td>6000–8000 K (kalt)</td></tr>
</tbody></table>
<h2>LED-Spiegel (2echoix Outlet — Preise 22.10.2026)</h2>
<table><thead><tr><th>Modell</th><th>Maße</th><th>Preis</th></tr></thead><tbody>
<tr><td>Coast Anti-Beschlag LED-Spiegel</td><td>70×50 cm</td><td><a href="https://www.awin1.com/pclick.php?p=46317416057&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">79,99 €</a></td></tr>
<tr><td>Mirlux rund dimmbar</td><td>Ø60 cm</td><td><a href="https://www.awin1.com/pclick.php?p=46246025083&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">109,00 €</a></td></tr>
<tr><td>Mirlux rahmenlos 120×60</td><td>120×60 cm</td><td><a href="https://www.awin1.com/pclick.php?p=46390597656&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">139,99 €</a></td></tr>
</tbody></table>
<p class="en-note">Outlet-Spiegel nennen IP/K oft nicht — beim Verkäufer nachfragen, wenn nahe der Dusche.</p>
<p><strong>Unsere Empfehlung:</strong> Lucide ONNO — IP44, 3000 K, 60 cm Breite für Standard-Waschtischspiegel.</p>
<h2>Dusbad (Partner — DE)</h2><p>Bei Komplett-Renovierung mit neuer Dusche: <a href="https://www.awin1.com/cread.php?awinmid=116147&amp;awinaffid=3127458&amp;ued=https%3A%2F%2Fwww.dusbad.de%2F" rel="sponsored nofollow noopener" target="_blank" data-awin-link data-awin-mid="116147">Dusbad DE</a> bietet Duschsysteme und Bad-LED — danach Spiegelleuchte und IP-Zonen wie oben planen. Kein Gutscheincode geprüft.</p><p>Ganzes Bad: <a href="https://1piece1ampoule.fr/pieces/salle-de-bain/">Bad-Seite (FR)</a>. Alle Zonen: <a href="/de/zonen/">Zonen-Übersicht</a>.</p>`,
  },
  {
    path: 'ueber-uns',
    article: true,
    kicker: 'Über uns',
    title: 'Über 1 pièce 1 ampoule und Emmanuel Sauvage',
    description: 'Wer die Seite betreut, wie Produkte ausgewählt werden, Hinweis Amazon-Partnerprogramm.',
    h1: 'Eine Seite, die jeden Raum erhellt — ohne Fachchinesisch',
    lead: 'Unabhängige Beleuchtungsratgeber für echte Wohnungen — Daten zuerst, kein Marketinglärm.',
    body: `<p><strong>1 pièce 1 ampoule</strong> wird von <strong>Emmanuel Sauvage</strong> betreut. Eine Lampe wählen sollte zwei Minuten dauern; zwischen Lumen, Kelvin, CRI (Farbwiedergabeindex), Sockeln und Dimmern landen viele beim falschen Artikel. Diese Seite teilt jeden Raum in <strong>Zonen</strong> (Arbeit, Stimmung, Verkehr) und nennt Farbton, Leistung und Fassung pro Zone.</p>
<h2>So wählen wir Produkte</h2><ul>
<li>Vom <strong>Bedarf</strong> ausgehen (Zone, Problem, Sockel), dann passende Produkte suchen.</li>
<li><strong>Herstellerdaten</strong> vergleichen: Lumen, Kelvin, CRI, IP, Dimmer-Kompatibilität.</li>
<li>Etablierte Marken mit sinnvoller Budget-Alternative, wenn es sie gibt.</li>
<li>Links werden bei Aktualisierung <strong>geprüft</strong>.</li></ul>
<p>Wir testen nicht jedes Produkt im Labor. Auswahl basiert auf Datenblättern und Lichtplanungs-Grundlagen. Passt nicht? Es gilt die Rückgaberichtlinie Ihres Händlers (Amazon.de usw.).</p>
<h2>Finanzierung der Seite</h2>
<p>Als Amazon-Partner verdienen wir an qualifizierten Käufen über unsere Links — <strong>ohne Mehrkosten für Sie</strong>. Rat ist nicht käuflich: Eine Seite, die sagt „Sie müssen nichts kaufen“, ist eine gute Seite. Details: <a href="/de/werbehinweis/">Werbehinweis</a>.</p>
<h2>Korrekturen</h2>
<p>Fehler entdeckt? <a href="/de/kontakt/">Kontakt</a> — wir korrigieren schnell.</p>`,
  },
  {
    path: 'artikel',
    article: true,
    kicker: 'Artikel',
    title: 'LED-Artikel: Fehlerbehebung, Vergleiche, Ratgeber',
    description: 'Artikel-Übersicht nach Kategorie; deutsche Pfade für Lot-2-Artikel, FR-Links für den Rest.',
    h1: 'LED-Beleuchtungs-Artikel',
    lead: 'Konkrete Artikel, um Lampen zu wählen, Fehler zu vermeiden und Alltagsprobleme zu lösen.',
    body: `<h2>Fehlerbehebung</h2><div class="en-grid"><a class="en-tile" href="https://1piece1ampoule.fr/articles/ampoule-led-qui-clignote/"><strong>LED flackert: Ursachen</strong><span>Flacker-Diagnose</span></a><a class="en-tile" href="https://1piece1ampoule.fr/articles/ampoule-led-reste-allumee-faiblement/"><strong>Nachleuchten</strong><span>LED leuchtet schwach nach</span></a><a class="en-tile" href="https://1piece1ampoule.fr/articles/ampoule-led-gresille-bourdonne/"><strong>Summende LED</strong><span>Dimmer-Brummen</span></a><a class="en-tile" href="/de/artikel/led-waerme-lebensdauer/"><strong>LED-Wärme &amp; Lebensdauer</strong><span>Hitze und Haltbarkeit</span></a></div><h2>Vergleichen</h2><div class="en-grid"><a class="en-tile" href="/de/artikel/smarte-lampe-wifi-oder-zigbee/"><strong>Wi-Fi vs. Zigbee</strong><span>Funk der smarten Lampe</span></a><a class="en-tile" href="/de/artikel/dimmbare-oder-nicht-dimmbare-lampe/"><strong>Dimmbar oder nicht</strong><span>Dimmer-Kompatibilität</span></a><a class="en-tile" href="https://1piece1ampoule.fr/articles/e27-ou-b22/"><strong>E27 oder B22</strong><span>Bajonett vs. Schraubfassung</span></a><a class="en-tile" href="https://1piece1ampoule.fr/articles/gu10-ou-gu5-3/"><strong>GU10 oder GU5.3</strong><span>230-V- vs. 12-V-Spots</span></a></div><h2>Empfehlungen</h2><div class="en-grid"><a class="en-tile" href="/de/artikel/backofen-kuehlschrank-lampe/"><strong>Backofen- &amp; Kühlschranklampe</strong><span>300-°C-Ofenlampe</span></a><a class="en-tile" href="/de/artikel/vintage-filament-lampe/"><strong>Vintage-Filament</strong><span>Edison-LED-Formen</span></a><a class="en-tile" href="https://1piece1ampoule.fr/articles/ampoule-crepusculaire/"><strong>Dämmerungslampe</strong><span>Fotozelle</span></a></div><h2>Praxis-Ratgeber</h2><div class="en-grid"><a class="en-tile" href="https://1piece1ampoule.fr/articles/installer-ruban-led/"><strong>LED-Streifen montieren</strong><span>24-V-Streifen</span></a></div><p>Vollständiger FR-Index: <a href="https://1piece1ampoule.fr/articles/">Artikel-Übersicht</a>.</p>`,
  },
  {
    path: 'artikel/smarte-lampe-wifi-oder-zigbee',
    article: true,
    kicker: 'Artikel',
    title: 'Smarte Lampe Wi-Fi oder Zigbee: Tapo vs. Philips Hue',
    description: 'Wi-Fi ohne Hub vs. Zigbee mit Bridge: Vor- und Nachteile, Matter, typische Fehler, Fazit.',
    h1: 'Smarte Lampe: Wi-Fi (Tapo) oder Zigbee (Hue)?',
    lead: 'Zwei Funkarten, zwei Budgets, zwei Skalierungsmodelle — vor dem Sack voller Lampen entscheiden.',
    body: `<p>Sie wollen Steuerung per Handy oder Sprache, aber <strong>Wi-Fi</strong>, <strong>Zigbee</strong> (Funk-Mesh mit geringem Stromverbrauch), <strong>Bluetooth</strong> und <strong>Matter</strong> (gemeinsame Smart-Home-Schicht) vermischen sich. Zwei häufige Wege: <strong>Wi-Fi ohne Hub</strong> (Tapo) und <strong>Zigbee mit Hub</strong> (Philips Hue).</p><h2>Wi-Fi (Tapo und ähnlich)</h2><ul><li><strong>Funktion:</strong> Lampe verbindet sich direkt mit dem Router.</li><li><strong>Vorteile:</strong> kein Hub, günstiger Einstieg, Alexa/Google.</li><li><strong>Nachteile:</strong> jede Lampe belegt Wi-Fi; Latenz; manche Funktionen brauchen Cloud.</li><li><strong>Ideal für:</strong> 1–6 Lampen, ein Raum, erster Versuch.</li></ul><h2>Zigbee (Philips Hue)</h2><ul><li><strong>Funktion:</strong> Mesh zwischen Lampen über die <strong>Hue Bridge</strong>.</li><li><strong>Vorteile:</strong> schnell mit vielen Geräten; lokale Steuerung; großer Katalog.</li><li><strong>Nachteile:</strong> höhere Kosten; Hub nötig (in Starter-Sets).</li><li><strong>Ideal für:</strong> Automatisierung im ganzen Haus.</li></ul><h2>Matter?</h2><p>Matter lässt Ökosysteme Geräte teilen. Neuere Hue- und Tapo-Artikel unterstützen es — weniger Anbieterbindung.</p><h2>Typische Fehler</h2><ul><li>Smarte Lampe hinter Wanddimmer — volle Spannung; in der App dimmen.</li><li>Wandschalter AUS — Lampe unerreichbar; Funk-Schalter oder dauerhaft EIN.</li><li>Stufenloses Weiß ignorieren — oft nützlicher als reine Farbe.</li></ul><h2>Fazit</h2><ul><li><strong>1–3 Räume, Budget:</strong> Tapo L530E.</li><li><strong>Ganzes Haus:</strong> Hue White &amp; Color Starter-Set.</li></ul><h2>Geprüfte Tipps</h2><div class="en-card"><p class="en-flag">Wi-Fi · ohne Hub</p><h3>Tapo L530E E27 Farbe</h3><p>8,7 W, dimmbar, Wi-Fi 2,4 GHz.</p><a class="en-amz" href="https://www.amazon.de/dp/B08GDC99PX?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B08GDC99PX" data-product="Tapo L530E E27 Farbe">Preis auf Amazon.de prüfen</a></div><div class="en-card"><p class="en-flag">Hue-Starter</p><h3>Hue White & Color Set E27</h3><p>Zwei Lampen, Bridge, Fernbedienung; Zigbee-Mesh.</p><a class="en-amz" href="https://www.amazon.de/dp/B099NRLRG3?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B099NRLRG3" data-product="Hue White & Color Set E27">Preis auf Amazon.de prüfen</a></div><div class="en-card"><p class="en-flag">Hue stufenlos</p><h3>Hue White Ambiance 1100 lm</h3><p>EPREL 2187086; Weckroutinen.</p><a class="en-amz" href="https://www.amazon.de/dp/B0FJ8VXHRX?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0FJ8VXHRX" data-product="Hue White Ambiance 1100 lm">Preis auf Amazon.de prüfen</a></div>${note}<h2>FAQ</h2><p><strong>Smarte Lampe am Dimmer?</strong> Nein — volle Spannung; in der App dimmen.</p><p><strong>Hue Bridge Pflicht?</strong> Für volles Ökosystem und viele Lampen ja; Bluetooth für ~10 in einem Raum.</p>`,
  },
  {
    path: 'artikel/dimmbare-oder-nicht-dimmbare-lampe',
    article: true,
    kicker: 'Artikel',
    title: 'Dimmbare oder nicht dimmbare LED: was kaufen?',
    description: 'Dimmbar heißt dimmer-tauglich. Wann nötig, Fallen alter Dimmer, Stufen-Dimmen und WarmGlow.',
    h1: 'Dimmbar oder nicht dimmbar: der Unterschied',
    lead: 'Häufigster Rücksendegrund bei LEDs: Dimmer passt nicht — beide Seiten müssen zusammenpassen.',
    body: `<p><strong>Dimmbar</strong> heißt: Der LED-Treiber kann der angebrochenen Netzspannung des Dimmers folgen. <strong>Nicht dimmbar</strong> am Dimmer flackert, summt oder stirbt früh.</p><h2>Wann dimmbar nötig ist</h2><ul><li>Dreh- oder Unterkanten-Dimmer an der Wand.</li><li>Abendstimmung in Wohn-/Esszimmer.</li></ul><h2>Wann nicht</h2><ul><li>Einfacher Ein/Aus-Schalter — dimmbar geht, kostet aber mehr.</li><li><strong>Smarte Lampe</strong> — dimmen in der Lampe; Dimmer entfernen oder auf 100 % stellen.</li></ul><h2>Falle alter Dimmer</h2><p>Halogen-Dimmer erwarten 40–60 W Minimum; 7-W-LEDs liegen darunter — LED-Dimmer mit Mindestlast-Trim.</p><h2>Stufen-Dimmen (ohne Dimmer-Leitung)</h2><p>Manche Lampen schalten per Tippen 100 % → 50 % → 10 % (Philips SceneSwitch).</p><h2>WarmGlow</h2><p>Philips WarmGlow verschiebt 2700 K Richtung 2200 K beim Dimmen — Glühlampen-Feeling.</p><h2>Tipps für Dimmer-Stromkreise</h2><div class="en-card"><p class="en-flag">E27 dimmbar</p><h3>Philips 100-W-Äq. dimmbar E27</h3><p>Hoher Lichtstrom, sanftes Dimmen am passenden Dimmer.</p><a class="en-amz" href="https://www.amazon.de/dp/B09F9MZ4PH?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B09F9MZ4PH" data-product="Philips 100-W-Äq. dimmbar E27">Preis auf Amazon.de prüfen</a></div><div class="en-card"><p class="en-flag">GU10 WarmGlow</p><h3>Philips GU10 WarmGlow</h3><p>Referenz für gemütliche Spots.</p><a class="en-amz" href="https://www.amazon.de/dp/B073FT1QT2?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B073FT1QT2" data-product="Philips GU10 WarmGlow">Preis auf Amazon.de prüfen</a></div><div class="en-card"><p class="en-flag">Dimmer-Upgrade</p><h3>Legrand LED-Dimmer</h3><p>Alten Dimmer tauschen, wenn Flackern bleibt.</p><a class="en-amz" href="https://www.amazon.de/dp/B07MRBVNWM?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B07MRBVNWM" data-product="Legrand LED-Dimmer">Preis auf Amazon.de prüfen</a></div>${note}<h2>FAQ</h2><p><strong>Dimmbar ohne Dimmer?</strong> Ja, immer auf 100 %.</p><p><strong>Nicht dimmbar am Dimmer?</strong> Nie — Flackern und vorzeitiger Ausfall.</p><p>Immer noch Flackern? <a href="https://1piece1ampoule.fr/articles/ampoule-led-qui-clignote/">LED-Flackern-Artikel (FR)</a> oder <a href="/de/ratgeber/gu10-led-flackern-dimmer-diagnose/">Diagnose-Ratgeber</a>.</p>`,
  },
  {
    path: 'artikel/vintage-filament-lampe',
    article: true,
    kicker: 'Artikel',
    title: 'Vintage-Filament-LED: Formen, Glas, Lumen',
    description: 'A60, ST64, Globe; klar vs. bernstein; Blendung und Dimmer-Fallen; Tipps.',
    h1: 'Vintage-Filament-LED-Lampen',
    lead: 'Dekorative Filamente brauchen dieselbe Lux-Rechnung wie normale LEDs — besonders bei bernsteinfarbenem Glas.',
    body: `<p><strong>Filament</strong>-LEDs imitieren Edison-Lampen: sichtbares „Filament“ durch klares oder bernsteinfarbenes Glas. Schön in offenen Schirmen — aber Lumen prüfen, nicht nur die Form.</p><h2>Formen</h2><ul><li><strong>A60</strong> — vielseitige Birne.</li><li><strong>ST64</strong> — lange Edison für freihängende Pendel.</li><li><strong>G95/G125</strong> — Globe über Tischen.</li><li><strong>Kerze E14</strong> — Kronleuchter.</li></ul><h2>Klar vs. Bernstein</h2><p>Klar: heller, 2700 K. Bernstein: 1800–2200 K Kerzenlook — dekorativ, kein Hauptraumlicht.</p><h2>Fallen</h2><ol><li>Lumen unterschätzen — klares Glas ≥806 lm für Hauptlicht anstreben.</li><li>Nicht dimmbar am Dimmer — siehe <a href="/de/artikel/dimmbare-oder-nicht-dimmbare-lampe/">Dimmbar-Ratgeber</a>.</li><li>Blendung — nacktes Filament auf Augenhöhe; Globe oder Diffusor.</li></ol><h2>Einsatz</h2><p>Tischpendel, Lampe mit offenem Schirm, Außen-Dämmerungs-Filament für die Haustür.</p><h2>Tipps</h2><div class="en-card"><p class="en-flag">Filament E27</p><h3>Philips Filament E27 60-W-Äq. (2er)</h3><p>Klares Glas, 2700 K, zuverlässiger CRI.</p><a class="en-amz" href="https://www.amazon.de/dp/B08HV4WG3Y?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B08HV4WG3Y" data-product="Philips Filament E27 60-W-Äq. (2er)">Preis auf Amazon.de prüfen</a></div><div class="en-card"><p class="en-flag">ST64 Dämmerung</p><h3>Lucide ST64 Dämmerung E27</h3><p>Edison-Look + Fotozelle für Vordach.</p><a class="en-amz" href="https://www.amazon.de/dp/B07TSKP9JC?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B07TSKP9JC" data-product="Lucide ST64 Dämmerung E27">Preis auf Amazon.de prüfen</a></div><div class="en-card"><p class="en-flag">Dimmbares ST64</p><h3>Philips dimmbares Filament</h3><p>Für gedimmte Pendel.</p><a class="en-amz" href="https://www.amazon.de/dp/B09F9MZ4PH?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B09F9MZ4PH" data-product="Philips dimmbares Filament">Preis auf Amazon.de prüfen</a></div>${note}<h2>FAQ</h2><p><strong>Genug Licht?</strong> Klar ≥806 lm ja; Bernstein meist Stimmung.</p>`,
  },
  {
    path: 'artikel/backofen-kuehlschrank-lampe',
    article: true,
    kicker: 'Artikel',
    title: 'Backofen- (300 °C) und Kühlschranklampen: Auswahl',
    description: 'Ofenspezifische Hochtemperaturlampe vs. Kühlschrank-E14-LED; Sicherheit und Maße.',
    h1: 'Backofen- und Kühlschranklampen',
    lead: 'Zwei Geräte, zwei Datenblätter — im Ofen zählt Hitzebeständigkeit mehr als Lumen.',
    body: `<p>Lampe im Ofen oder Kühlschrank defekt? <strong>Niemals</strong> normale LED in den Ofen. Im Kühlschrank eine kompakte E14-LED.</p><h2>Backofen: Hitze zuerst</h2><p>Öfen erreichen 250–300 °C. Standard-LED-Elektronik versagt über ~80–100 °C. Sie brauchen eine <strong>ofengeeignete Lampe bis 300 °C</strong>.</p><h3>Passend finden</h3><ol><li><strong>Sockel:</strong> meist <strong>E14</strong>, manchmal G9/E27 — alte Lampe oder Handbuch lesen.</li><li><strong>Form:</strong> röhrenförmig T22/T25 — Glasabdeckung muss wieder passen.</li><li><strong>Leistung:</strong> 15–40 W Halogen-Äquivalent reicht.</li><li>Verpackung muss <strong>300 °C</strong> nennen.</li></ol><h3>Sicher tauschen</h3><ul><li>Kalter Ofen, Stromkreis gesichert.</li><li>Glasabdeckung abnehmen (Gummihandschuh hilft).</li><li>Halogen-Glas nicht mit bloßen Fingern anfassen.</li></ul><h2>Kühlschrank</h2><p>Kalt und feucht — kleine <strong>E14-LED 2–4 W</strong> (200–300 lm), neutral/kaltweiß für Lebensmittelfarben.</p><h2>Dunstabzugshaube</h2><p>Oft E14 oder GU10/G4 — moderate Hitze; LED nach Sockelprüfung ok.</p><h2>Tipps</h2><div class="en-card"><p class="en-flag">Ofen E14 300 °C</p><h3>YIIFELL Ofen E14 (4er)</h3><p>Laut Angebot ofentauglich.</p><a class="en-amz" href="https://www.amazon.de/dp/B0DDK55MF7?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0DDK55MF7" data-product="YIIFELL Ofen E14 (4er)">Preis auf Amazon.de prüfen</a></div><div class="en-card"><p class="en-flag">Ofen E14</p><h3>Caldarax Ofenlampe (2er)</h3><p>300 °C ofenspezifisch.</p><a class="en-amz" href="https://www.amazon.de/dp/B0D6BJZJ56?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0D6BJZJ56" data-product="Caldarax Ofenlampe (2er)">Preis auf Amazon.de prüfen</a></div><div class="en-card"><p class="en-flag">Kühlschrank E14</p><h3>DiCUNO E14 3 W (2er)</h3><p>Kompakter Kühlschrank-Ersatz.</p><a class="en-amz" href="https://www.amazon.de/dp/B0B7W9VRB7?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0B7W9VRB7" data-product="DiCUNO E14 3 W (2er)">Preis auf Amazon.de prüfen</a></div>${note}<h2>FAQ</h2><p><strong>Normale LED in den Ofen?</strong> Nein — Treiber versagt, Glas kann springen.</p><p>Sockel: <a href="https://1piece1ampoule.fr/articles/e27-ou-b22/">E27 vs. B22 (FR)</a>.</p>`,
  },
  {
    path: 'artikel/led-waerme-lebensdauer',
    article: true,
    kicker: 'Artikel',
    title: 'LED-Wärme und Lebensdauer: normale Wärme vs. früher Ausfall',
    description: 'Warum LEDs vor 15.000 h ausfallen: geschlossene Leuchten, Treiber, Dimmer; länger haltbar wählen.',
    h1: 'LED-Wärme: normal oder nicht — und länger leben lassen',
    lead: 'Warm anfassen ist ok; zu heiß zum Halten signalisiert falsche Lampe oder Leuchte.',
    body: `<p>LEDs laufen kühler als Halogen, aber Hitze tötet Treiber. Etwa 60–70 % der zugeführten Leistung wird Wärme — weniger Watt insgesamt, also weniger Abwärme.</p><h2>Normale Temperatur</h2><p>Fuß <strong>warm 50–70 °C</strong> nach einer Stunde ist normal. Zu heiß zum Anfassen oder nach heißem Kunststoff riechen ist es nicht.</p><h2>Warum 15.000-h-Angaben früh scheitern</h2><ul><li><strong>Geschlossene Leuchte</strong> — keine Luftzirkulation; „für geschlossene Leuchten geeignet“ wählen.</li><li><strong>Einbaustrahler in Dämmung</strong> — Luftspalt oder Brandschutzhaube.</li><li><strong>Pendel kopfüber</strong> — Wärme steigt in den Treiber.</li><li><strong>Häufiges Schalten</strong> mit falscher Sensorlampe.</li><li><strong>Schlechter Dimmer-Match</strong> belastet den Treiber.</li></ul><h2>Was wirklich kaputtgeht</h2><p>Die LED-Chip hält; <strong>Elektrolytkondensatoren</strong> im Treiber trocknen durch Hitze aus.</p><h2>Für Langlebigkeit kaufen</h2><ol><li>Marke mit echter Garantie (Philips, Ledvance …).</li><li>Richtige Lumen, nicht überdimensioniert in kleiner Kugel — <a href="/de/anleitungen/lux-lumen-pro-raum-berechnen/">Raum auslegen</a>.</li><li>Sonderfälle: <a href="/de/artikel/backofen-kuehlschrank-lampe/">Ofenlampe</a>, Außen-IP.</li><li>Bewegungsbetrieb: bewegungstaugliche Lampe.</li></ol><h2>L70-Abschwächung</h2><p>Ende der Nennlebensdauer = 70 % der Anfangslumen — dass der Raum dunkler wirkt, ist real.</p><h2>Beispiele</h2><a class="en-amz" href="https://www.amazon.de/dp/B01KHIM7OG?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B01KHIM7OG" data-product="Philips E27 806 lm">Preis auf Amazon.de prüfen</a><a class="en-amz" href="https://www.amazon.de/dp/B0DGPZCMG6?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0DGPZCMG6" data-product="LED für geschlossene Leuchte">Preis auf Amazon.de prüfen</a><a class="en-amz" href="https://www.amazon.de/dp/B0FGD6H3NZ?tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0FGD6H3NZ" data-product="OSRAM Bewegung E27">Preis auf Amazon.de prüfen</a>${note}<h2>FAQ</h2><p><strong>Geschlossene Leuchte?</strong> Nur wenn die Lampe es erlaubt.</p><p><strong>Normale Wärme?</strong> Warm am Sockel ja; Brandgeruch nein.</p>`,
  },
];
