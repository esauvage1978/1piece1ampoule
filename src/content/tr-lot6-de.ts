// DE Los 6 (12.11.2026): dieselben 7 Seiten wie tr-lot6-en.ts. Fakten, Zahlen, HTML-IDs und JS-Logik unverändert.
// Natürliches Deutsch (Deutschland, Sie). Französische Preise bleiben als französische Preise gekennzeichnet.
// Amazon nur als Suche auf amazon.de. Keine Produktseiten, keine Bewertungen, kein SVG.
import type { EnPage } from './en';

const deS = (q: string, label: string) =>
  `<a class="en-amz" href="https://www.amazon.de/s?k=${encodeURIComponent(q)}&tag=roboteducat00-21" rel="nofollow sponsored noopener" target="_blank" data-product="${label}">Auf Amazon.de suchen</a>`;
const card = (flag: string, title: string, text: string, link: string) => `<div class="en-card"><p class="en-flag">${flag}</p><h3>${title}</h3><p>${text}</p>${link}</div>`;
const note = `<p class="en-note">Preise und Verfügbarkeit ändern sich: Prüfen Sie beides vor dem Kauf. Als Amazon-Partner verdiene ich an qualifizierten Käufen.</p>`;
const SAFETY = `<p class="en-note"><strong>Netzspannung:</strong> Arbeiten an einer Deckenleuchte, einem Dimmer oder dem Sicherungskasten nur <strong>im spannungsfreien Zustand</strong> (Sicherung aus, Spannungsfreiheit geprüft). Wenn Sie sich das nicht zutrauen, fassen Sie keine Netzanschlüsse an: Beauftragen Sie eine Elektrofachkraft.</p>`;

const TROUBLESHOOT_DE: EnPage = {
  path: 'ratgeber/led-flackern-brummen-nachleuchten', article: true, kicker: 'Ratgeber Fehlersuche',
  title: 'LED-Lampe flackert ausgeschaltet, brummt oder leuchtet nach: Fehlersuche',
  description: 'LED flackert im ausgeschalteten Zustand, Dimmer brummt, LED-Streifen bleibt an oder überhitzt, Steinel-Sensor schaltet nicht aus: Ursachen, Schwierigkeit, Zeit und Abhilfe.',
  h1: 'LEDs: Flackern, Brummen, Nachleuchten',
  lead: 'Eine LED-Lampe, die ausgeschaltet flackert, ein Dimmer, der brummt, ein Streifen, der an bleibt oder heiß wird, ein Steinel-Sensor, der nicht mehr ausschaltet: In den meisten Fällen ist die Ursache bekannt, und die Abhilfe dauert wenige Minuten. Die Tabelle nennt die Größenordnungen; die Abschnitte erklären, was zu tun ist.',
  body: `<p>Teil unserer <a href="https://1piece1ampoule.fr/guides/">Ratgeber zu Beleuchtung und Fehlersuche</a>.</p>
<h2>Tabelle zur Fehlersuche</h2>
<table><thead><tr><th>Problem</th><th>Schwierigkeit</th><th>Zeit</th><th>Kosten (französische Preise)</th><th>Werkzeug</th></tr></thead><tbody>
<tr><td>LED flackert oder glimmt schwach im ausgeschalteten Zustand (Reststrom)</td><td><strong>Einfach (1/5)</strong></td><td>5 min</td><td>≈ 4 €</td><td>Isolierter Schraubendreher, Bypass von Legrand oder Shelly oder ungepolter Kondensator 0,47 µF</td></tr>
<tr><td>Dimmer knistert oder brummt mit LEDs</td><td><strong>Einfach bis mittel (2/5)</strong></td><td>10–30 min</td><td>15–35 €</td><td>Schraubendreher, LED-geeigneter Dimmer „Alle Lampen“</td></tr>
<tr><td>LED-Streifen bleibt schwach an oder überhitzt</td><td><strong>Mittel (3/5)</strong></td><td>15–45 min</td><td>5–25 €</td><td>Multimeter, passend dimensioniertes LED-Netzteil, Aluminiumprofil</td></tr>
<tr><td>Steinel-Sensor (NightMatic, IS …) bleibt an oder schaltet nicht aus</td><td><strong>Einfach (2/5)</strong></td><td>5–15 min</td><td>0 €</td><td>Schraubendreher, Steinel-Anleitung, Dämmerungssensor abdecken</td></tr>
</tbody></table>
<p>Zeiten und Kosten sind Richtwerte für geübte Heimwerker. Schalten Sie den Stromkreis am Sicherungskasten immer ab, bevor Sie eine Abzweigdose oder eine Leuchte öffnen.</p>
${SAFETY}
<h2>Die Abhilfe für rund 95 % des Nachleuchtens und Flackerns im ausgeschalteten Zustand (≈ 4 €, 5 min)</h2>
<p>Wenn der Schalter eine <strong>Orientierungsleuchte</strong> hat, ein <strong>smarter Schalter ohne Neutralleiter</strong> ist oder ein Dimmer einen winzigen Strom durchlässt, fließt auch im „ausgeschalteten“ Zustand ein kleiner Strom durch die LED. Er lädt ihren internen Kondensator; danach <strong>blitzt</strong> sie auf oder bleibt schwach hell.</p>
<p>Zwei gleichwertige Möglichkeiten, eingebaut <strong>an der Deckenleuchte</strong> (zwischen Außenleiter und Neutralleiter oder laut Anleitung), bei abgeschalteter Spannung:</p>
<ul><li><strong>Bypass- oder Kompensationsmodul</strong> von Legrand oder Shelly (in Frankreich etwa 4 €): vorgesehen für Module ohne Neutralleiter und für beleuchtete Schalter; die Verdrahtung steht in der Anleitung.</li>
<li><strong>Ungepolter Kondensator</strong> 0,47 µF (450 V) parallel zur Lampe: dasselbe Prinzip, den Reststrom abzuleiten. Prüfen Sie die Verträglichkeit mit Ihrem Dimmer, falls einer vorhanden ist.</li></ul>
<p>Sie trauen sich das nicht zu? Ersetzen Sie den beleuchteten Schalter durch einen ohne Leuchte, oder nutzen Sie eine <strong>smarte Lampe</strong> und lassen Sie den Schalter eingeschaltet (siehe <a href="/de/ratgeber/smarter-schalter-ohne-neutral-kompatibilitaet/">smarte Schalter ohne Neutralleiter</a> und unseren <a href="https://1piece1ampoule.fr/meilleur/meilleure-ampoule-connectee/">Vergleich smarter Lampen</a>). Die Symptome im Detail: <a href="https://1piece1ampoule.fr/articles/ampoule-led-reste-allumee-faiblement/">Lampe glimmt schwach im ausgeschalteten Zustand</a> und <a href="https://1piece1ampoule.fr/articles/ampoule-led-qui-clignote/">Lampe flackert</a>.</p>
<h2>Dimmer: Brummen und Flackern</h2>
<p>Das Geräusch entsteht durch die angeschnittene Spannung: Die Elektronik der LED vibriert. Bei geringer Helligkeit sorgen eine <strong>nicht dimmbare</strong> Lampe oder ein Phasenanschnitt-Dimmer für Brummen und Flackern.</p>
<ul><li>Nur <strong>dimmbare</strong> Lampen.</li>
<li>Ein <strong>LED-geeigneter</strong> Dimmer (Phasenabschnitt / „Alle Lampen“) mit einstellbarem Minimum.</li>
<li>Die Gesamtlast muss über dem Minimum des Dimmers liegen (bei LEDs oft 5–10 W).</li></ul>
<p>Ausführlicher Ratgeber: <a href="/de/ratgeber/dimmbare-led-lampen/">dimmbare Lampen und Dimmer</a>. Artikel: <a href="https://1piece1ampoule.fr/articles/ampoule-led-gresille-bourdonne/">LED brummt</a>.</p>
<h2>LED-Streifen: bleibt an oder überhitzt</h2>
<p>Ein Streifen, der nach dem Ausschalten <strong>schwach an bleibt</strong>, hat meist dieselbe Ursache (Reststrom): ein Bypass an den Klemmen des Netzteils oder ein Schalter ohne Orientierungsleuchte. <strong>Überhitzung</strong> von Streifen oder Netzteil kommt dagegen von einem zu knapp bemessenen Netzteil, einem zu dünnen Kabel oder einem Streifen, der ohne <strong>Aluminiumprofil</strong> zur Wärmeabfuhr aufgeklebt ist.</p>
<ul><li>Netzteil mit <strong>125 %</strong> der Leistung des Streifens, in ordentlicher Qualität.</li>
<li>Ein durchgehendes Aluminiumprofil ist bei leistungsstarken Streifen Pflicht.</li>
<li>Einen Streifen unter Spannung niemals auf sich selbst aufwickeln (ein Knäuel bedeutet Überhitzung).</li></ul>
<p><a href="https://1piece1ampoule.fr/articles/installer-ruban-led/">LED-Streifen verlegen</a> · <a href="https://1piece1ampoule.fr/outils/calculateur-ruban-led-alimentation-24v/">Rechner für LED-Streifen</a>.</p>
<h2>Steinel-Sensor hängt (Licht schaltet nicht aus)</h2>
<p>Bei einem <strong>NightMatic 2000</strong> oder einem Unterputz-Sensor wie dem <strong>IS 360</strong> bleibt eine Lampe bei Tageslicht fast immer wegen des <strong>Dämmerungssensors</strong> an: Er „sieht“ das von der gesteuerten Lampe zurückgeworfene Licht oder die Beleuchtung in der Nähe. Eine auf Maximum gestellte Nachlaufzeit kann ebenfalls wie ein Defekt wirken.</p>
<ul><li>Richten Sie die Dämmerungszelle <strong>vom Lichtkegel der Lampe weg</strong> (Anleitung von Steinel).</li>
<li>Senken Sie die Lux-Schwelle, oder setzen Sie eine kleine Blende, wenn der Sensor Licht vom Nachbargrundstück erfasst.</li>
<li>Prüfen Sie die maximale LED-Last (zum Beispiel 350 W LED, beim IS 360 mehr als 8 W): Eine Überlast kann das Ausschalten stören.</li>
<li>Stellen Sie Nachlaufzeit und Empfindlichkeit auf das Minimum und erhöhen Sie sie dann schrittweise.</li></ul>
<p>Vergleich der Datenblätter und Kombinationen: <a href="/de/ratgeber/steinel-aussenbeleuchtung-automatisch/">Steinel-Außenbeleuchtung</a>, <a href="https://1piece1ampoule.fr/guides/detecteurs-de-mouvement/">Bewegungsmelder</a>, <a href="/de/marken/steinel/">Markenseite Steinel</a>.</p>
<h2>Produktideen</h2>
${card('Dimmer', 'LED-Dimmer „Alle Lampen“', 'Verringert das Brummen.', deS('LED Dimmer Phasenabschnitt', 'LED-Dimmer'))}
${card('Bypass', 'Bypass ohne Neutralleiter (Legrand, Shelly)', 'Gegen das Nachleuchten.', deS('Shelly Bypass LED ohne Neutralleiter', 'Bypass'))}
${card('Lampe', 'Dimmbare E27-LED-Lampe, 806 lm', 'Ein verlässlicher Ersatz.', deS('dimmbare E27 LED Lampe 806 Lumen', 'Dimmbare E27'))}
${card('Kondensator', 'LED-Kompensationskondensator 0,47 µF', 'Alternative zum Bypass.', deS('0.47uF 450V Kondensator LED', 'Kondensator 0,47 µF'))}
${note}
<h2>Weiterlesen</h2><p>Schneller Test: Setzen Sie die Lampe in eine andere Fassung. Wandert der Fehler mit der Lampe, tauschen Sie sie aus; bleibt er, prüfen Sie Schalter, Dimmer oder Netzteil. Geführte Diagnose: <a href="/de/ratgeber/gu10-led-flackern-dimmer-diagnose/">Flackern bei GU10 und E27</a>. Halogen-Spots: <a href="/de/anleitungen/halogen-gu10-mr16-durch-led-ersetzen/">GU10 und MR16 ohne Flackern</a>. Bad (IP, Zonen): <a href="/de/ratgeber/badzonen-ip44-ip65/">Badezimmer-Zonen</a>.</p>`,
};

const BATH_ROOMS: [string, string, number, number][] = [
  ['living', 'Wohnzimmer', 125, 20], ['kitchen', 'Küche', 200, 12], ['bedroom', 'Schlafzimmer', 100, 14], ['bath', 'Badezimmer (allgemein)', 175, 6],
  ['mirror', 'Badezimmerspiegel', 400, 1.2], ['hallway', 'Flur', 100, 8], ['office', 'Arbeitszimmer', 300, 10], ['garage', 'Garage', 300, 18],
];
const BATH_ZONES_DE: EnPage = {
  path: 'ratgeber/badzonen-ip44-ip65', article: true, kicker: 'Technischer Ratgeber · Norm',
  title: 'Badezimmer-Zonen 0, 1, 2 (NF C 15-100) und IP44 / IP65',
  description: 'Badezimmer-Zonen 0, 1 und 2, IP44 und IP65 nach der französischen NF C 15-100, plus Umrechner Lux, Lumen und Watt. In Deutschland gilt die DIN VDE 0100-701.',
  h1: 'Badezimmer-Zonen: IP44, IP65 und NF C 15-100',
  lead: 'In Frankreich legt die NF C 15-100 (Teil 7-701, Bad oder Dusche) die Zonen fest, in denen Wasser und Strom nahe beieinanderliegen. Die IP-Schutzart einer Leuchte muss zur Einbauzone passen: Sie ist kein reines Marketing-Etikett. Dieser Ratgeber fasst die Zonen 0, 1 und 2 mit einer IP-Tabelle und einem Umrechner Lux ↔ Lumen ↔ Watt nach Raumtyp zusammen. In Deutschland gilt für diese Räume die DIN VDE 0100-701; lassen Sie die Ausführung von einer Elektrofachkraft prüfen.',
  body: `<p class="en-note">Diese Seite beschreibt die französische Norm NF C 15-100. In Deutschland gilt für Bade- und Duschräume die DIN VDE 0100-701: Lassen Sie die Installation von einer Elektrofachkraft prüfen.</p>
<h2>Die Zonen in Kürze</h2>
<p>Vereinfachte Anhaltswerte der NF C 15-100 (Juni 2015): Zone 1 reicht bis 2,25 m; Zone 2 ist ein waagerechter Streifen von 0,60 m um Zone 1. Messen Sie ab der Badewanne oder Duschtasse und lesen Sie die Anleitung der Leuchte (IP44, IP65 …). Bei ungewöhnlichem Grundriss lassen Sie eine Elektrofachkraft prüfen.</p>
<h2>Tabelle Zonen und IP</h2>
<table><thead><tr><th>Zone</th><th>Abgrenzung</th><th>Mindest-IP</th><th>Spannung / Betriebsmittel</th><th>Hinweis aus der Praxis</th></tr></thead><tbody>
<tr><td>Zone 0</td><td>Im Inneren der Badewanne oder Duschtasse</td><td><strong>IPX7</strong></td><td>SELV, max. 12 V AC oder 30 V DC, Quelle außerhalb der Zonen</td><td>230 V für die Beleuchtung verboten</td></tr>
<tr><td>Zone 1</td><td>Über Zone 0, bis 2,25 m</td><td><strong>IPX4 (IPX5 bei waagerechten Wasserstrahlen)</strong></td><td>Für Leuchten nur SELV 12 V</td><td>Kein 230 V</td></tr>
<tr><td>Zone 2</td><td>Streifen von 0,60 m um Zone 1</td><td><strong>IPX4</strong></td><td>Schutzklasse II + FI (RCD) 30 mA oder SELV 12 V</td><td>Typische IP44-Wandleuchte über dem Spiegel</td></tr>
<tr><td>Außerhalb der Zonen</td><td>Rest des Raums (die frühere Zone 3 ist 2015 entfallen)</td><td><strong>Keine IP-Vorgabe nach 7-701</strong></td><td>Allgemeine Regeln der Hausinstallation</td><td>IP44 bleibt in der Nähe des Waschbeckens eine sinnvolle Wahl</td></tr>
</tbody></table>
<p><strong>IP44</strong> = Spritzwasser; <strong>IP65</strong> = Strahlwasser, sinnvoll nahe einer Strahlbrause, im Außenbereich oder bei einem stark exponierten Strahler. Definitionen: <a href="/de/ratgeber/ip-schutzarten-bad-aussen/">Ratgeber IP-Schutzarten</a>. Spiegel und Lichtfarbe: <a href="/de/zonen/badezimmerspiegel/">den Spiegel beleuchten</a>, <a href="/de/ratgeber/farbtemperatur-kelvin/">Kelvin</a>, <a href="/de/ratgeber/farbwiedergabe-cri-ra/">CRI</a>.</p>
<h2>Umrechner Lux ↔ Lumen ↔ Watt</h2>
<p>Wählen Sie einen Raumtyp (Fläche und angenehme Lux) oder ändern Sie einen der drei Werte: Die beiden anderen werden neu berechnet (K ≈ 2 für die Allgemeinbeleuchtung, LED ≈ 100 lm/W). Die ausführliche Methode: <a href="/de/anleitungen/lux-lumen-pro-raum-berechnen/">Lux pro Raum</a>.</p>
<div id="conv-bath">
<label>Raumtyp <select id="cv-room">${BATH_ROOMS.map(([id, l, lux, m2]) => `<option data-lux="${lux}" data-m2="${m2}" value="${id}"${id === 'bath' ? ' selected' : ''}>${l} (${lux} lx, ${m2} m²)</option>`).join('')}</select></label>
<label>Lux <input id="cv-lux" max="2000" min="20" step="5" type="number" value="175"/></label>
<label>Fläche (m²) <input id="cv-m2" max="80" min="0.5" step="0.1" type="number" value="6"/></label>
<label>Lumen (Gesamtlichtstrom) <input id="cv-lm" max="100000" min="50" step="50" type="number" value="2100"/></label>
<label>LED-Leistung (W) <input id="cv-w" max="2000" min="1" step="1" type="number" value="21"/></label>
</div>
<p aria-live="polite" id="cv-hint">≈ 175 lx × 6 m² × K 2 → 2.100 lm → ≈ 21 W LED</p>
<p>Ändern Sie Lumen oder Watt, wird der Lux-Wert für die gewählte Fläche neu berechnet (K = 2). Ändern Sie Lux oder die Fläche, werden Lumen und Watt neu berechnet.</p>
<script>(function(){var K=2,LM_W=100,lock=null;function el(i){return document.getElementById(i)}function num(v){return parseFloat(String(v).replace(',','.'))||0}function fmt(n){return Math.round(n).toLocaleString('de-DE')}function fromLux(){var lux=num(el('cv-lux').value),m2=num(el('cv-m2').value),lm=lux*m2*K;el('cv-lm').value=Math.round(lm);el('cv-w').value=Math.max(1,Math.round(lm/LM_W));el('cv-hint').textContent='≈ '+fmt(lux)+' lx × '+m2.toFixed(1)+' m² × K '+K+' → '+fmt(lm)+' lm → ≈ '+fmt(lm/LM_W)+' W LED'}function fromLm(){var lm=num(el('cv-lm').value),m2=num(el('cv-m2').value),lux=m2>0?lm/(m2*K):0;el('cv-lux').value=Math.round(lux);el('cv-w').value=Math.max(1,Math.round(lm/LM_W));el('cv-hint').textContent=fmt(lm)+' lm → ≈ '+fmt(lux)+' lx (Fläche '+m2.toFixed(1)+' m²) · ≈ '+fmt(lm/LM_W)+' W LED'}function fromW(){el('cv-lm').value=Math.round(num(el('cv-w').value)*LM_W);fromLm()}el('cv-room').addEventListener('change',function(){var o=this.options[this.selectedIndex];el('cv-lux').value=o.getAttribute('data-lux');el('cv-m2').value=o.getAttribute('data-m2');fromLux()});el('cv-lux').addEventListener('input',function(){if(lock)return;lock='lux';fromLux();lock=null});el('cv-m2').addEventListener('input',function(){if(lock)return;lock='lux';fromLux();lock=null});el('cv-lm').addEventListener('input',function(){if(lock)return;lock='lm';fromLm();lock=null});el('cv-w').addEventListener('input',function(){if(lock)return;lock='w';fromW();lock=null});fromLux()})();</script>
<h2>Produktideen</h2>
${card('IP44', 'IP44-Wandleuchte für den Badezimmerspiegel', 'Zone 2 oder außerhalb der Zonen.', deS('LED Spiegelleuchte Bad IP44', 'Spiegelleuchte IP44'))}
${card('IP65', 'IP65-Einbaustrahler fürs Bad', 'Exponierte Feuchtbereiche.', deS('Einbaustrahler Bad IP65', 'Einbaustrahler IP65'))}
${card('IP44', 'IP44-LED-Spiegelleiste', 'Licht von vorn.', deS('LED Spiegelleiste IP44', 'Spiegelleiste IP44'))}
${card('SELV', 'Wasserdichter 12-V-Trafo für LEDs', 'Kleinspannung für die Zonen 0 und 1.', deS('12V LED Trafo wasserdicht IP67', 'Trafo SELV 12 V'))}
${note}
<h2>Weiterlesen</h2><p>Der ganze Raum: <a href="https://1piece1ampoule.fr/pieces/salle-de-bain/">Beleuchtung im Bad</a>. Fehlersuche bei LEDs (Nachleuchten, Brummen): <a href="/de/ratgeber/led-flackern-brummen-nachleuchten/">Ratgeber LED-Fehlersuche</a>. Lampen-Äquivalenz: <a href="/de/ratgeber/lumen-watt/">Lumen und Watt</a>.</p>`,
};

const DIM_ROWS: [string, string, string, string, string, string, string][] = [
  ['leading', 'Phasenanschnitt (schneidet den Anfang der Welle ab)', 'gu10', 'Dimmbare GU10-LED', 'risk', 'Hoch', 'Alte Halogen-Dimmer: häufiges Flackern. Durch einen Phasenabschnitt-Dimmer ersetzen.'],
  ['leading', 'Phasenanschnitt', 'e27', 'Dimmbare E27-LED', 'risk', 'Hoch', 'Dasselbe Problem; „dimmergeeignete“ Lampen funktionieren manchmal, aber nur bei hoher Last.'],
  ['leading', 'Phasenanschnitt', 'e14', 'Dimmbare E14-LED', 'risk', 'Hoch', 'Kleine Lasten: oft unter dem Minimum des Dimmers → Flackern am unteren Ende des Bereichs.'],
  ['trailing', 'Phasenabschnitt (schneidet das Ende der Welle ab)', 'gu10', 'Dimmbare GU10-LED', 'ok', 'Niedrig', 'Empfohlene Kombination für Spots in Küche und Wohnzimmer.'],
  ['trailing', 'Phasenabschnitt', 'e27', 'Dimmbare E27-LED', 'ok', 'Niedrig', 'Stellen Sie das Minimum des Dimmers nach dem Einbau ein.'],
  ['trailing', 'Phasenabschnitt', 'e14', 'Dimmbare E14-LED', 'ok', 'Niedrig bis mittel', 'Addieren Sie die Last mehrerer Lampen, um das Minimum von 5–10 W zu überschreiten.'],
  ['universal', 'LED-Dimmer „Alle Lampen“', 'gu10', 'Dimmbare GU10-LED', 'ok', 'Sehr niedrig', 'Die zuverlässigste Wahl als Ersatz für einen alten Dimmer.'],
  ['universal', 'Alle Lampen, LED', 'e27', 'Dimmbare E27-LED', 'ok', 'Sehr niedrig', 'Mischen Sie an einem Dimmer keine Lampen verschiedener Marken.'],
  ['universal', 'Alle Lampen, LED', 'e14', 'Dimmbare E14-LED', 'ok', 'Niedrig', 'Prüfen Sie die Höchstlast des Dimmers (Kronleuchter mit vielen Lampen).'],
  ['trailing', 'Phasenabschnitt', 'gu10', 'Nicht dimmbare GU10-LED', 'no', 'entfällt', 'Nicht dimmbar: Risiko von Flackern oder frühem Ausfall. Nicht verwenden.'],
];
const SCORE: Record<string, string> = { ok: '✓ Gute Wahl', risk: '⚠ Risiko', no: '✗ Vermeiden' };
const btn = (cls: string, attr: string, v: string, label: string, on = false) => `<button type="button" class="${cls}" ${attr}="${v}" aria-pressed="${on}" style="margin:.15rem;padding:.2rem .6rem;border:1px solid #d6d3d1;border-radius:.4rem;${on ? 'font-weight:600;background:#fef3c7' : ''}">${label}</button>`;
const DIMMER_MATRIX_DE: EnPage = {
  path: 'ratgeber/dimmer-led-matrix-gu10-e27-e14', article: true, kicker: 'Technischer Ratgeber · Dimmer',
  title: 'Dimmer-Matrix (Phasenanschnitt / Phasenabschnitt) × LED-Lampe: GU10, E14, E27',
  description: 'Phasenanschnitt- oder Phasenabschnitt-Dimmer und dimmbare LED-Lampen GU10, E27 und E14: Flackerrisiko und die guten Kombinationen, mit interaktiven Filtern.',
  h1: 'Dimmer × LED-Lampe: Matrix gegen Flackern',
  lead: 'Phasenanschnitt (aus der Halogenzeit) und Phasenabschnitt (für LED) steuern nicht dieselbe Elektronik. Diese Matrix kreuzt den Dimmertyp mit dem Sockel (GU10, E27, E14), um das Flackerrisiko einzuschätzen.',
  body: `<p>Ausführlicher Ratgeber: <a href="/de/ratgeber/dimmbare-led-lampen/">dimmbare Lampen</a>.</p>
<h2>Interaktive Filter</h2>
<div id="dim-filters"><span>Dimmer:</span> ${btn('dim-f', 'data-d', 'all', 'Alle', true)}${btn('dim-f', 'data-d', 'leading', 'Phasenanschnitt')}${btn('dim-f', 'data-d', 'trailing', 'Phasenabschnitt')}${btn('dim-f', 'data-d', 'universal', 'Alle Lampen')}<br/><span>Lampe:</span> ${btn('bulb-f', 'data-b', 'all', 'Alle', true)}${btn('bulb-f', 'data-b', 'gu10', 'GU10')}${btn('bulb-f', 'data-b', 'e27', 'E27')}${btn('bulb-f', 'data-b', 'e14', 'E14')}</div>
<table><thead><tr><th>Dimmer</th><th>Lampe</th><th>Kompatibilität</th><th>Flackern</th><th>Hinweis</th></tr></thead><tbody>
${DIM_ROWS.map(([d, dl, b, bl, s, f, n]) => `<tr class="dim-row" data-dimmer="${d}" data-bulb="${b}" data-score="${s}"><td>${dl}</td><td>${bl}</td><td><strong>${SCORE[s]}</strong></td><td>${f}</td><td>${n}</td></tr>`).join('\n')}
</tbody></table>
<script>(function(){var dSel='all',bSel='all';function paint(b,on){b.style.fontWeight=on?'600':'';b.style.background=on?'#fef3c7':'';b.setAttribute('aria-pressed',on?'true':'false')}function apply(){document.querySelectorAll('.dim-row').forEach(function(tr){var show=(dSel==='all'||dSel===tr.getAttribute('data-dimmer'))&&(bSel==='all'||bSel===tr.getAttribute('data-bulb'));tr.style.display=show?'':'none'})}document.querySelectorAll('.dim-f').forEach(function(b){b.addEventListener('click',function(){dSel=b.getAttribute('data-d');document.querySelectorAll('.dim-f').forEach(function(x){paint(x,x===b)});apply()})});document.querySelectorAll('.bulb-f').forEach(function(b){b.addEventListener('click',function(){bSel=b.getAttribute('data-b');document.querySelectorAll('.bulb-f').forEach(function(x){paint(x,x===b)});apply()})});apply()})();</script>
<h2>Produktideen</h2>
${card('Dimmer', 'LED-Dimmer mit Phasenabschnitt', 'Ersetzt einen Halogen-Dimmer mit Phasenanschnitt.', deS('LED Dimmer Phasenabschnitt', 'Dimmer Phasenabschnitt'))}
${card('GU10', 'Dimmbare GU10-LED-Spots', 'Geeignet für Phasenabschnitt.', deS('dimmbare GU10 LED Lampen', 'Dimmbare GU10'))}
${note}
<h2>Verwandte Werkzeuge und Ratgeber</h2><ul><li><a href="/de/werkzeuge/halogen-led-aequivalenz-gu10-e27-lumen/">Äquivalenz Halogen → LED</a></li><li><a href="/de/ratgeber/gu10-led-flackern-dimmer-diagnose/">Interaktive Flacker-Diagnose</a></li><li><a href="/de/ratgeber/smarter-schalter-ohne-neutral-kompatibilitaet/">Smarter Schalter ohne Neutralleiter</a></li><li><a href="/de/ratgeber/led-flackern-brummen-nachleuchten/">Fehlersuche bei Brummen</a></li><li><a href="/de/ratgeber/lampensockel-e27-e14-gu10/">Lampensockel</a></li></ul>`,
};

const KIT_MODULES = [
  { id: 'shelly-1l', name: 'Shelly 1L', neutre: false, dim: false, minW: 3, bypassLed: true, proto: 'Wi-Fi' },
  { id: 'shelly-d2', name: 'Shelly Dimmer 2', neutre: true, dim: true, minW: 1, bypassLed: false, proto: 'Wi-Fi' },
  { id: 'legrand', name: 'Legrand Céliane with Netatmo', neutre: false, dim: true, minW: 5, bypassLed: true, proto: 'Zigbee' },
  { id: 'aqara-h1', name: 'Aqara H1 (ohne Neutralleiter)', neutre: false, dim: false, minW: 3, bypassLed: true, proto: 'Zigbee' },
  { id: 'hue', name: 'Philips Hue (Lampen)', neutre: null, dim: true, minW: 0, bypassLed: false, proto: 'Zigbee / BT' },
  { id: 'sonoff-l2', name: 'Sonoff ZBMini-L2', neutre: false, dim: false, minW: 3, bypassLed: true, proto: 'Zigbee' },
];
const KIT_ROOMS = ['Wohnzimmer', 'Küche', 'Schlafzimmer', 'Flur', 'Badezimmer', 'Arbeitszimmer', 'Garage'];
const KIT_SCRIPT = `(function(){var modules=${JSON.stringify(KIT_MODULES)},rooms=${JSON.stringify(KIT_ROOMS)};var tbody=document.getElementById('kit-tbody');var modOpts=modules.map(function(m){return '<option value="'+m.id+'">'+m.name+'</option>'}).join('');var roomOpts=rooms.map(function(p){return '<option>'+p+'</option>'}).join('');function rowHtml(){return '<tr class="kit-row"><td><select class="kit-piece">'+roomOpts+'</select></td><td><input class="kit-n" type="number" min="1" value="2" style="width:4.5rem"/></td><td><input class="kit-w" type="number" min="1" step="0.5" value="5" style="width:4.5rem"/></td><td><select class="kit-neutre"><option value="non">Nein</option><option value="oui">Ja</option><option value="?">Nicht sicher</option></select></td><td><select class="kit-dim"><option value="non">Nein</option><option value="oui">Ja</option></select></td><td><select class="kit-mod">'+modOpts+'</select></td><td><button type="button" class="kit-del">Entfernen</button></td></tr>'}function modById(id){for(var i=0;i<modules.length;i++)if(modules[i].id===id)return modules[i]}function recalc(){var counts={},bypass=0,warns=[],hue=false,netatmo=false,aqara=false,eco=document.getElementById('kit-eco').value;document.querySelectorAll('.kit-row').forEach(function(tr){var n=+tr.querySelector('.kit-n').value||1,w=+tr.querySelector('.kit-w').value||5,P=n*w,neutre=tr.querySelector('.kit-neutre').value,wantDim=tr.querySelector('.kit-dim').value==='oui',mid=tr.querySelector('.kit-mod').value,m=modById(mid),room=tr.querySelector('.kit-piece').value;if(!m)return;counts[mid]=(counts[mid]||0)+1;if(m.id==='hue')hue=true;if(m.id==='legrand')netatmo=true;if(m.id==='aqara-h1')aqara=true;if(m.neutre===true&&neutre==='non')warns.push('“'+room+'”: '+m.name+' braucht einen Neutralleiter. Wählen Sie Shelly 1L, Legrand 2-Draht, Aqara H1 oder Sonoff L2.');if(m.neutre===false&&neutre==='oui'&&mid==='shelly-1l')warns.push('“'+room+'”: Wenn ein Neutralleiter vorhanden ist, sind ein Shelly Dimmer 2 oder ein fest verdrahteter Dimmer oft stabiler.');if(wantDim&&!m.dim&&m.id!=='hue')warns.push('“'+room+'”: Dimmen ist gewünscht, '+m.name+' schaltet aber nur ein und aus.');if(m.minW&&P<m.minW)warns.push('“'+room+'”: Last '+P+' W < Minimum '+m.minW+' W für '+m.name+'. Ergänzen Sie Lichtpunkte, einen Bypass oder eine stärkere Lampe.');if(m.bypassLed&&(neutre==='non'||neutre==='?')&&P<8)bypass+=1});if(eco==='hue'&&!counts.hue&&Object.keys(counts).length)warns.push('Hue-Ökosystem gewählt: Planen Sie Hue-Lampen oder eine Bridge für Zigbee-Module von Drittanbietern.');if(eco==='wifi'&&(counts['legrand']||counts['aqara-h1']||counts['sonoff-l2']))warns.push('Shelly-WLAN-Ökosystem: Zigbee-Module (Legrand, Aqara, Sonoff) brauchen einen eigenen Hub.');document.getElementById('kit-modules-out').innerHTML=Object.keys(counts).map(function(id){var m=modById(id);return '<li><strong>'+counts[id]+'×</strong> '+(m?m.name:id)+'</li>'}).join('')||'<li>Fügen Sie mindestens einen Stromkreis hinzu.</li>';document.getElementById('kit-bypass-out').textContent=bypass?'Geschätzte Bypässe gegen Flackern: '+bypass+' (einer je LED-Leuchte unter ca. 8 W an einem 2-Draht-Modul).':'Für die aktuelle Konfiguration ist kein Bypass nötig.';var hubs=[];if(hue)hubs.push('Philips Hue Bridge (bei mehr als 10 Bluetooth-Lampen oder bei Automationen)');if(netatmo)hubs.push('Legrand-Netatmo-Gateway');if(aqara)hubs.push('Aqara-Hub oder Apple TV / HomePod (Thread)');document.getElementById('kit-hub-out').textContent=hubs.length?'Gateways zum Einplanen: '+hubs.join(' · '):'';document.getElementById('kit-warn-out').innerHTML=warns.length?warns.map(function(w){return '<li>⚠ '+w+'</li>'}).join(''):'<li>Keine sperrende Warnung für die eingetragenen Zeilen.</li>'}function bindRow(tr){tr.querySelectorAll('input, select').forEach(function(e){e.addEventListener('input',recalc);e.addEventListener('change',recalc)});tr.querySelector('.kit-del').addEventListener('click',function(){tr.remove();recalc()})}document.getElementById('kit-add').addEventListener('click',function(){tbody.insertAdjacentHTML('beforeend',rowHtml());bindRow(tbody.lastElementChild);recalc()});document.getElementById('kit-eco').addEventListener('change',recalc);tbody.insertAdjacentHTML('beforeend',rowHtml());bindRow(tbody.firstElementChild);recalc()})();`;
const KIT_CONFIG_DE: EnPage = {
  path: 'ratgeber/konfigurator-smart-beleuchtung-ohne-neutral', article: true, kicker: 'Interaktiver Ratgeber · Smart Home',
  title: 'Konfigurator für smartes Beleuchtungs-Kit: ohne Neutralleiter, Bypässe, Shelly, Hue, Aqara',
  description: 'Stellen Sie Ihr smartes Beleuchtungs-Kit Raum für Raum zusammen, mit oder ohne Neutralleiter: Module, Bypässe gegen Flackern, Gateways und Kompatibilitätshinweise.',
  h1: 'Smartes Beleuchtungs-Kit Raum für Raum zusammenstellen',
  lead: 'Tragen Sie jeden Lichtpunkt ein: LED-Leistung, ob in der Schalterdose ein Neutralleiter liegt, und den Modultyp. Der Konfigurator schätzt die Zahl der Bypässe gegen Flackern (Bereitschaftsstrom der 2-Draht-Module) und markiert Module, die nicht zu Ihrer Verdrahtung passen.',
  body: `<p>Ergänzen Sie das mit der <a href="/de/ratgeber/smarter-schalter-ohne-neutral-kompatibilitaet/">Kompatibilitätsmatrix ohne Neutralleiter</a>.</p>
<h2>Modulübersicht</h2>
<table><thead><tr><th>Modul</th><th>Funktioniert ohne Neutralleiter</th><th>Dimmen</th><th>Mindestlast</th><th>LED-Bypass</th><th>Protokoll</th></tr></thead><tbody>
${KIT_MODULES.map((m) => `<tr><td>${m.name}</td><td>${m.neutre === null ? '— (Lampen)' : m.neutre ? 'Nein (Neutralleiter erforderlich)' : 'Ja (2-Draht)'}</td><td>${m.dim ? 'Ja' : 'Ein/Aus'}</td><td>${m.minW ? `${m.minW} W` : '—'}</td><td>${m.bypassLed ? 'Oft' : 'Selten / nein'}</td><td>${m.proto}</td></tr>`).join('\n')}
</tbody></table>
<h2>Ihre Räume und Lichtpunkte</h2>
<p>Eine Zeile steht für einen Stromkreis oder eine Leuchte, die ein einziges Modul schaltet. Schalten Sie am Sicherungskasten ab, bevor Sie etwas einbauen.</p>
<p><label>Ziel-Ökosystem <select id="kit-eco"><option value="any">Keine Vorgabe</option><option value="hue">Philips Hue</option><option value="apple">Apple Home / Aqara</option><option value="wifi">Lokales WLAN (Shelly)</option><option value="zigbee">Offenes Zigbee</option></select></label></p>
<table id="kit-table"><thead><tr><th>Raum</th><th>Lichtpunkte</th><th>LED-W / Punkt</th><th>Neutralleiter in der Dose?</th><th>Dimmer?</th><th>Modul</th><th></th></tr></thead><tbody id="kit-tbody"></tbody></table>
<p><button id="kit-add" type="button" style="padding:.3rem .8rem;border:1px solid #d6d3d1;border-radius:.4rem">+ Raum / Stromkreis hinzufügen</button></p>
<div aria-live="polite" id="kit-summary" class="en-card"><h3>Hardware-Übersicht</h3><ul id="kit-modules-out"></ul><p id="kit-bypass-out"></p><p id="kit-hub-out"></p><h3>Kompatibilitätshinweise</h3><ul id="kit-warn-out"></ul></div>
<script>${KIT_SCRIPT}</script>
<h2>Produktideen</h2>
${card('Shelly', 'Shelly-Modul ohne Neutralleiter', '2-Draht-Mikromodul.', deS('Shelly 1L ohne Neutralleiter', 'Shelly 1L'))}
${card('Bypass', 'LED-Bypass für Module ohne Neutralleiter', 'Stoppt das Nachleuchten.', deS('Shelly Bypass LED ohne Neutralleiter', 'Bypass'))}
${card('Smart', 'Zigbee-Set mit E27-Lampen', 'Ein gemeinsames Ökosystem.', deS('Zigbee smarte Lampe E27', 'Zigbee E27'))}
${card('Hub', 'Zigbee-Hub fürs Smart Home', 'Zentrale für mehrere Marken.', deS('Zigbee Hub Smart Home', 'Zigbee-Hub'))}
${note}
<h2>Verwandte Werkzeuge und Ratgeber</h2><ul><li><a href="/de/ratgeber/smarter-schalter-ohne-neutral-kompatibilitaet/">Matrix Schalter ohne Neutralleiter</a></li><li><a href="/de/ratgeber/gu10-led-flackern-dimmer-diagnose/">Flacker-Diagnose GU10 und E27</a></li><li><a href="/de/ratgeber/matter-thread-matrix-philips-hue-aqara-govee/">Matrix Matter, Thread, Zigbee</a></li><li><a href="/de/werkzeuge/">Beleuchtungswerkzeuge</a></li><li><a href="/de/marken/philips-hue/">Ökosystem Philips Hue</a></li></ul>`,
};

const inp = (id: string, label: string, attrs: string, extra = '') => `<label${extra}>${label} <input id="${id}" type="number" ${attrs} style="width:7rem"/></label><br/>`;
const ROI_SCRIPT = `(function(){var SITE_HOURS={retail:14,office:10,workshop:16,communal:11};function el(i){return document.getElementById(i)}function num(v){return parseFloat(String(v).replace(',','.'))||0}function cur(){return el('roi-cur').value}function money(n,d){return cur()+n.toLocaleString('de-DE',{minimumFractionDigits:d,maximumFractionDigits:d})}function applyPreset(){var f=el('roi-fix'),o=f.options[f.selectedIndex];['old','new','life-old','life-new','cost-old','cost-new'].forEach(function(k){var id={'old':'roi-old-w','new':'roi-new-w'}[k]||('roi-'+k);el(id).value=o.getAttribute('data-'+k)});var park=f.value==='parking';el('roi-detect-wrap').style.display=park?'':'none';if(!park)el('roi-detect').value='0'}function calc(){var n=num(el('roi-n').value),oldW=num(el('roi-old-w').value),newW=num(el('roi-new-w').value),days=num(el('roi-days').value),effH=num(el('roi-h').value)*(1-num(el('roi-detect').value)/100),price=num(el('roi-kwh').value),inv=num(el('roi-inv').value),costOld=num(el('roi-cost-old').value),costNew=num(el('roi-cost-new').value),lifeOld=num(el('roi-life-old').value),lifeNew=num(el('roi-life-new').value),labor=num(el('roi-labor').value);var hy=effH*days,kOld=n*oldW*hy/1000,kNew=n*newW*hy/1000,kSave=kOld-kNew,eSave=kSave*price;var rOld=lifeOld>0?(n*hy)/lifeOld:0,rNew=lifeNew>0?(n*hy)/lifeNew:0,crew=Math.max(1,Math.ceil(n/20));var mOld=rOld*costOld+(rOld>=1?Math.floor(rOld)*(labor/crew):0),mNew=rNew*costNew+(rNew>=1?Math.floor(rNew)*(labor/crew*0.3):0),mSave=Math.max(0,mOld-mNew),total=eSave+mSave,pb=total>0?inv/total:Infinity;var pbTxt=!isFinite(pb)?'—':pb<1?Math.round(pb*12)+' Monate':pb.toFixed(1)+' Jahre';el('roi-result').innerHTML='<p><strong>Aktueller Verbrauch:</strong> ≈ '+Math.round(kOld).toLocaleString('de-DE')+' kWh/Jahr · <strong>nach der LED-Umrüstung:</strong> ≈ '+Math.round(kNew).toLocaleString('de-DE')+' kWh/Jahr.</p><p><strong>Eingesparte kWh:</strong> ≈ <strong>'+Math.round(kSave).toLocaleString('de-DE')+' kWh/Jahr</strong> ('+money(eSave,2)+' weniger auf der Rechnung bei '+money(price,2)+'/kWh).</p><p><strong>Vermiedene Wartung (Schätzung):</strong> ≈ '+money(mSave,2)+' / Jahr (Lampen plus Anteil der Arbeitszeit; alt ≈ '+rOld.toFixed(1)+' Wechsel/Jahr, LED ≈ '+rNew.toFixed(2)+').</p><p><strong>Jährlicher Gesamtgewinn:</strong> '+money(total,2)+' · <strong>Amortisation:</strong> <strong>'+pbTxt+'</strong> bei einer Investition von '+money(inv,0)+'.</p><p>'+n+' Leuchten, '+effH.toFixed(1)+' effektive h/Tag ('+days+' Tage/Jahr). Leistung: '+oldW+' W → '+newW+' W (−'+Math.round((1-newW/oldW)*100)+' %).</p>'}el('roi-site').addEventListener('change',function(){var h=SITE_HOURS[this.value];if(h)el('roi-h').value=h;if(this.value==='communal')el('roi-days').value=365;calc()});el('roi-fix').addEventListener('change',function(){applyPreset();calc()});['roi-cur','roi-n','roi-h','roi-days','roi-detect','roi-old-w','roi-new-w','roi-kwh','roi-inv','roi-cost-old','roi-cost-new','roi-life-old','roi-life-new','roi-labor'].forEach(function(i){el(i).addEventListener('input',calc);el(i).addEventListener('change',calc)});applyPreset();calc()})();`;
const ROI_DE: EnPage = {
  path: 'werkzeuge/led-relamping-roi', article: true, kicker: 'Werkzeuge · Rechner',
  title: 'ROI-Rechner für professionelles LED-Relamping (kWh, Wartung, Amortisation)',
  description: 'Lohnt sich LED-Relamping für Laden, Büro, Werkstatt oder Mehrfamilienhaus? T8-Röhren, Panels 600×600, Halogen-Spots, Parkhaus-Strahler: eingesparte kWh, vermiedene Wartung und Amortisationszeit.',
  h1: 'Amortisation von LED-Relamping (Gewerbe und Gemeinschaftsflächen)',
  lead: 'Schätzen Sie die eingesparten kWh, die vermiedene Wartung (Lebensdauer der LED gegenüber den alten Lampen) und die Amortisationszeit für einen Laden, ein Büro, eine Werkstatt oder die Gemeinschaftsflächen eines Mehrfamilienhauses. Leuchten: T8-Röhren, Panels 600×600, Halogen-Spots, Parkhaus-Strahler mit Bewegungsmelder.',
  body: `<p>Strompreis, Währung und Installationskosten lassen sich ändern. Siehe auch <a href="/de/ratgeber/lumen-watt/">Lumen und Watt</a>, <a href="/de/ratgeber/steinel-aussenbeleuchtung-automatisch/">Außenbeleuchtung mit Sensoren</a> und <a href="/de/marken/steinel/">Steinel-Strahler</a>.</p>
<h2>Rechner</h2>
<div id="roi-tool">
<label>Art des Standorts <select id="roi-site"><option value="retail">Laden / Einzelhandel</option><option value="office">Büro / Großraum</option><option value="workshop">Werkstatt / Lager</option><option value="communal">Mehrfamilienhaus (Gemeinschaftsflächen)</option></select></label><br/>
<label>Leuchtenfamilie <select id="roi-fix">
<option value="t8" data-old="58" data-new="18" data-life-old="12000" data-life-new="50000" data-cost-old="4" data-cost-new="12">T8-Leuchtstoffröhre 58 W → LED 18 W</option>
<option value="panel" data-old="72" data-new="36" data-life-old="15000" data-life-new="50000" data-cost-old="25" data-cost-new="45">Leuchtstoffpanel 600×600, 4×18 W → LED-Panel 36 W</option>
<option value="gu10" data-old="50" data-new="6" data-life-old="2000" data-life-new="25000" data-cost-old="3" data-cost-new="8">GU10-Halogen-Spot 50 W → LED 6 W</option>
<option value="parking" data-old="250" data-new="80" data-life-old="8000" data-life-new="50000" data-cost-old="80" data-cost-new="120">Parkhaus-Strahler 250 W → LED 80 W + Sensor</option>
</select></label><br/>
<label>Währung <select id="roi-cur"><option selected value="€">€</option><option value="£">£</option><option value="$">$</option></select></label><br/>
${inp('roi-n', 'Anzahl der Leuchten', 'min="1" max="5000" step="1" value="40"')}
${inp('roi-h', 'Betriebsstunden pro Tag', 'min="0.5" max="24" step="0.5" value="12"')}
${inp('roi-days', 'Tage pro Jahr', 'min="200" max="365" step="1" value="300"')}
${inp('roi-detect', 'Reduzierung durch den Sensor (%)', 'min="0" max="90" step="5" value="55" title="Anteil der Zeit, in der das Licht aus bleibt oder gedimmt ist"', ' id="roi-detect-wrap"')}
${inp('roi-old-w', 'Aktuelle Leistung (W je Leuchte)', 'min="1" max="2000" step="1" value="58"')}
${inp('roi-new-w', 'LED-Leistung (W je Leuchte)', 'min="1" max="500" step="1" value="18"')}
${inp('roi-kwh', 'Strompreis (je kWh, inkl. Steuern)', 'min="0.05" max="0.8" step="0.01" value="0.22"')}
${inp('roi-inv', 'Gesamtinvestition (Material + Montage)', 'min="100" max="500000" step="50" value="3200"')}
${inp('roi-cost-old', 'Kosten einer alten Lampe', 'min="0" max="500" step="0.5" value="4"')}
${inp('roi-cost-new', 'Kosten eines LED-Moduls', 'min="0" max="500" step="0.5" value="12"')}
${inp('roi-life-old', 'Lebensdauer der alten Lampe (h)', 'min="500" max="50000" step="100" value="12000"')}
${inp('roi-life-new', 'Lebensdauer der LED (h)', 'min="10000" max="100000" step="1000" value="50000"')}
${inp('roi-labor', 'Arbeitskosten für den Austausch (je Einsatz vor Ort)', 'min="0" max="5000" step="25" value="150"')}
</div>
<div id="roi-result" class="en-card" aria-live="polite"></div>
<p>Die Vorgabewerte sind Beispiele auf Basis französischer Preise: Ersetzen Sie sie durch Ihren Tarif und Ihre Angebote. Die Standortprofile füllen typische Betriebsstunden vor. Das Parkhaus mit Sensor kürzt die äquivalenten Stunden (HF- oder Infrarot-Sensor). Das sind Richtwerte: Holen Sie ein Angebot von einem Installateur ein, besonders wenn Sie eine Förderung für Energieeffizienz beantragen.</p>
<script>${ROI_SCRIPT}</script>
<h2>Verwandte Werkzeuge und Ratgeber</h2><ul><li><a href="/de/werkzeuge/lux-lumen-watt-raum-umrechner/">Umrechner Lux ↔ Lumen</a></li><li><a href="/de/werkzeuge/kuechenbeleuchtung-plan-pdf/">Plan der Küchenbeleuchtung (PDF)</a></li><li><a href="https://1piece1ampoule.fr/pieces/parking/">Beleuchtung von Auffahrt und Parkplatz</a></li><li><a href="https://1piece1ampoule.fr/meilleur/meilleur-projecteur-led-exterieur-detecteur/">LED-Strahler mit Sensor</a></li><li><a href="https://1piece1ampoule.fr/guides/detecteurs-de-mouvement/">Bewegungsmelder</a></li><li><a href="https://1piece1ampoule.fr/articles/economies-led-calcul/">LED-Ersparnis zu Hause</a></li></ul>`,
};

const KP_SCRIPT = `(function(){var ZONES=[{key:'bench',label:'Arbeitsplatte',lux:500},{key:'island',label:'Insel / Halbinsel',lux:300},{key:'cook',label:'Kochbereich (Decke)',lux:500},{key:'table',label:'Esstisch',lux:200},{key:'circ',label:'Laufwege',lux:100}];var K_CEIL=1.55,K_BENCH=1.4;function el(i){return document.getElementById(i)}function num(v){return parseFloat(String(v).replace(',','.'))||0}function fmt(n){return Math.round(n).toLocaleString('de-DE')}function calc(){var name=(el('kp-name').value||'').trim(),len=num(el('kp-bench-len').value),d=num(el('kp-bench-d').value),areas={island:num(el('kp-island').value),cook:num(el('kp-cook').value),table:num(el('kp-table').value),circ:num(el('kp-circ').value)},k=el('kp-k').value,per=num(el('kp-gu10-lm').value)||500,cri=el('kp-irc90').checked;var benchLm=500*len*d*K_BENCH,lmPerM=len>0?benchLm/len:0,total=0,rows='';ZONES.forEach(function(z){if(z.key==='bench'){if(len<=0)return;rows+='<tr><td>'+z.label+'</td><td>'+z.lux+' lx</td><td>24-V-LED-Streifen unter den Hängeschränken (CRI '+(cri?'≥ 90':'≥ 80, 90 empfohlen')+')</td><td>'+len.toFixed(1)+' m Länge · ≈ '+Math.round(lmPerM)+' lm/m Ziel</td></tr>';return}var m2=areas[z.key];if(m2<=0)return;var need=z.lux*m2*K_CEIL,n=Math.max(0,Math.ceil(need/per));total+=n;rows+='<tr><td>'+z.label+' ('+m2.toFixed(1)+' m²)</td><td>'+z.lux+' lx</td><td>GU10-Spots '+k+' K, Abstrahlwinkel 36–60°</td><td>'+n+' Spot'+(n>1?'s':'')+' (≈ '+fmt(need)+' lm)</td></tr>'});el('kp-tbody').innerHTML=rows;el('kp-title').textContent=name||'Plan der Küchenbeleuchtung';el('kp-meta').textContent='Zielfarbtemperatur: '+k+' K · CRI '+(cri?'≥ 90 an jeder Leuchte':'≥ 80 mindestens, 90 an der Arbeitsplatte empfohlen')+' · Erstellt am '+new Date().toLocaleDateString('de-DE');el('kp-summary').innerHTML='<p><strong>GU10-Deckenspots insgesamt:</strong> '+total+'</p><p><strong>24-V-Streifen unter den Schränken:</strong> '+len.toFixed(1)+' m (Netzteil: siehe den 24-V-Rechner)</p><p><strong>Vorgeschlagene Stromkreise:</strong> ein gedimmter Stromkreis für Essen und Ambiente, ein heller Stromkreis für Arbeitsplatte und Kochbereich; die Insel nach Möglichkeit auf einen eigenen Stromkreis legen, damit auf der Arbeitsplatte keine Schatten fallen.</p>';el('kp-footnote').textContent='Schätzung auf Basis üblicher Lux-Werte (Arbeitsplatte 500 lx, Laufwege 100 lx) und eines Deckenfaktors K ≈ '+K_CEIL+'. Die Gleichmäßigkeit hängt von Deckenhöhe und Oberflächen ab. Lassen Sie die Anordnung in Feuchtbereichen (Spüle) und die Stromkreisbelastung von einer Elektrofachkraft prüfen.'}el('kp-recalc').addEventListener('click',calc);el('kp-print').addEventListener('click',function(){calc();window.print()});['kp-bench-len','kp-bench-d','kp-island','kp-cook','kp-table','kp-circ','kp-k','kp-gu10-lm','kp-irc90','kp-name'].forEach(function(i){el(i).addEventListener('input',calc);el(i).addEventListener('change',calc)});calc()})();`;
const KITCHEN_PLAN_DE: EnPage = {
  path: 'werkzeuge/kuechenbeleuchtung-plan-pdf', article: true, kicker: 'Werkzeuge · Konfigurator',
  title: 'Küchenbeleuchtung planen, Zone für Zone (druckbares PDF)',
  description: 'Planen Sie Ihre Küchenbeleuchtung: 500 Lux auf der Arbeitsplatte, Insel, Kochbereich, Esstisch. Anzahl der GU10-Spots, Länge des 24-V-LED-Streifens, Kelvin und CRI, druckfertig.',
  h1: 'Plan der Küchenbeleuchtung (druckbar)',
  lead: 'Geben Sie Flächen und Längen ein: Das Werkzeug schlägt einen Plan Zone für Zone vor (500 Lux auf der Arbeitsplatte, Insel, Kochbereich, Esstisch, Laufwege), die Anzahl der GU10-Spots, die Länge des 24-V-LED-Streifens unter den Hängeschränken, eine einheitliche Farbtemperatur und Quellen mit CRI ≥ 90. Drucken Sie die Zusammenfassung für Ihre Elektrofachkraft oder für Ihr Projekt.',
  body: `<p>Siehe auch <a href="/de/zonen/kuechenarbeitsplatte/">die Arbeitsplatte beleuchten</a>, <a href="https://1piece1ampoule.fr/articles/installer-ruban-led/">einen LED-Streifen verlegen</a> und <a href="https://1piece1ampoule.fr/outils/calculateur-ruban-led-alimentation-24v/">das 24-V-Netzteil auslegen</a>.</p>
<h2>Konfigurator</h2>
<div id="kitchen-plan-tool">
<label>Projektname (wird auf das Blatt gedruckt) <input id="kp-name" maxlength="80" placeholder="z. B. Küche 12 m², Renovierung" type="text"/></label><br/>
${inp('kp-bench-len', 'Länge der Arbeitsplatte (m)', 'max="12" min="1" step="0.1" value="3.6"')}
${inp('kp-bench-d', 'Tiefe der Arbeitsplatte (m)', 'max="1" min="0.5" step="0.05" value="0.6"')}
${inp('kp-island', 'Fläche Insel / Halbinsel (m²)', 'max="8" min="0" step="0.1" value="2"')}
${inp('kp-cook', 'Kochbereich an der Decke (m²)', 'max="6" min="0" step="0.1" value="1.2"')}
${inp('kp-table', 'Fläche des Esstischs (m²)', 'max="12" min="0" step="0.1" value="2.4"')}
${inp('kp-circ', 'Fläche der Laufwege (m²)', 'max="25" min="2" step="0.1" value="6"')}
<label>Ziel-Farbtemperatur <select id="kp-k"><option value="3000">3000 K, Warmweiß (gemütlich)</option><option selected value="4000">4000 K, Neutralweiß (Küche, Arbeiten)</option><option value="2700">2700 K, sehr warm (Essecke)</option></select></label><br/>
${inp('kp-gu10-lm', 'Lichtstrom je GU10-Spot (lm)', 'max="800" min="250" step="25" value="500"')}
<label><input checked id="kp-irc90" type="checkbox"/> CRI ≥ 90 an jeder Quelle verlangen (Lebensmittel, Oberflächen)</label>
</div>
<p class="no-print"><button id="kp-recalc" type="button" style="padding:.3rem .8rem;border:1px solid #d6d3d1;border-radius:.4rem">Plan aktualisieren</button> <button id="kp-print" type="button" style="padding:.3rem .8rem;border:1px solid #d6d3d1;border-radius:.4rem">Drucken / PDF</button></p>
<div id="kp-print-area" class="print-plan-wrap en-card" aria-live="polite"><p>1piece1ampoule.fr · unverbindlicher Plan</p><h3 id="kp-title">Plan der Küchenbeleuchtung</h3><p id="kp-meta"></p>
<table id="kp-table-out"><thead><tr><th>Zone</th><th>Ziel-Lux</th><th>Lösung</th><th>Menge</th></tr></thead><tbody id="kp-tbody"></tbody></table>
<div id="kp-summary"></div><p id="kp-footnote"></p></div>
<style>@media print{body *{visibility:hidden}.print-plan-wrap,.print-plan-wrap *{visibility:visible}.print-plan-wrap{position:absolute;left:0;top:0;width:100%;margin:0;padding:0;box-shadow:none!important}}</style>
<script>${KP_SCRIPT}</script>
<h2>Verwandte Werkzeuge und Ratgeber</h2><ul><li><a href="/de/werkzeuge/lux-lumen-watt-raum-umrechner/">Umrechner Lux ↔ Lumen</a></li><li><a href="/de/werkzeuge/halogen-led-aequivalenz-gu10-e27-lumen/">Äquivalenz Halogen-GU10</a></li><li><a href="https://1piece1ampoule.fr/outils/calculateur-ruban-led-alimentation-24v/">Rechner für 24-V-LED-Streifen</a></li><li><a href="/de/ratgeber/farbtemperatur-kelvin/">Kelvin</a> · <a href="/de/ratgeber/farbwiedergabe-cri-ra/">CRI</a></li><li><a href="https://1piece1ampoule.fr/meilleur/meilleur-spot-gu10/">Vergleich GU10-Spots</a></li><li><a href="https://1piece1ampoule.fr/pieces/cuisine/">Beleuchtung in der Küche</a></li><li><a href="/de/werkzeuge/led-relamping-roi/">ROI des LED-Relamping (Gewerbe)</a></li></ul>`,
};

const GR35_BUY = 'https://www.awin1.com/cread.php?awinmid=94223&awinaffid=3127458&ued=https%3A%2F%2Fwww.imalentstore.com%2Fproducts%2Fimalent-gr35-4-in-1-edc-flashlight';
const img = (f: string, alt: string, w: number, h: number) => `<img src="/images/tests/imalent-gr35/${f}" alt="${alt}" width="${w}" height="${h}" loading="lazy" style="max-width:100%;height:auto" />`;
const GR35_FAQ: [string, string][] = [
  ['Wird die Taschenlampe im Betrieb heiß?', 'Ja. Bei voller Leistung spüren Sie die Wärme deutlich in der Hand, wenn Sie den Strahl auf die Handfläche richten. Das passt zu einer sehr hellen Taschenlampe: Ein Teil der elektrischen Energie wird in der LED und im Gehäuse zu Wärme.'],
  ['Ist der grüne Laser stabil?', 'Ja: Der grüne Laserpointer bleibt während der Nutzung konstant.'],
  ['Lässt sich der Laser gefahrlos nutzen?', 'Ein Laser darf niemals auf Augen, Menschen, Tiere, Fahrzeuge oder Luftfahrzeuge gerichtet werden. Bewahren Sie die Taschenlampe außerhalb der Reichweite von Kindern auf und nutzen Sie den Laser nur, um kurz auf Dinge zu zeigen, niemals auf Personen.'],
  ['Ist die Anleitung auf Französisch?', 'Nein. Am von uns getesteten Gerät war sie nicht ins Französische übersetzt. Das ist nicht vorgeschrieben, war für uns als französische Website aber der Hauptnachteil des Sets.'],
  ['Was liegt der Taschenlampe bei?', 'Neben der Taschenlampe enthält der Koffer eine Powerbank und eine graue Stofftasche zur Aufbewahrung: zwei Zubehörteile, die uns gefallen haben.'],
];
const GR35_TEST_DE: EnPage = {
  path: 'tests/imalent-gr35', article: true, kicker: 'Produkttest · aktualisiert am 2. November 2026',
  title: 'Imalent GR35 im Test: Taschenlampe, grüner Laser und Powerbank-Koffer',
  description: 'Imalent GR35 getestet: sehr starke Taschenlampe, einfacher Dimmer, grüner Laser, Powerbank-Koffer und Tasche. Anleitung nicht auf Französisch. Taschenlampe kostenlos gestellt; unabhängiger Test.',
  h1: 'Imalent GR35 im Test: Taschenlampe, grüner Laser und Powerbank-Koffer',
  lead: 'Die Imalent GR35 ist keine Wohnzimmerlampe: Sie ist eine kompakte Taschenlampe mit grünem Laser, einem Dimmer und einem Koffer, der zugleich als Powerbank dient. Das haben wir nach dem Ausprobieren mitgenommen.',
  body: `<p class="en-note"><strong>Taschenlampe von Imalent für diesen Test kostenlos zur Verfügung gestellt; kein Einfluss auf den Inhalt des Tests.</strong></p>
<p><img src="/images/tests/imalent-gr35/imalent-gr35-contenu-pochette-powerbank-torche.webp" alt="Inhalt der Imalent-GR35-Schachtel auf einem Tisch: graue Stofftasche, Powerbank und Taschenlampe" width="1600" height="1200" style="max-width:100%;height:auto" /></p>
<h2>Auspacken</h2>
<p>In der Schachtel: die Taschenlampe, der Lade- und Aufbewahrungskoffer, die graue Stofftasche und ihre Powerbank. Der schwarz-blaue Koffer ist sauber verarbeitet; die Tasche passt mit ihrem Druckknopf hinein.</p>
<p>${img('imalent-gr35-torche-dans-son-coffret.webp', 'Imalent-GR35-Taschenlampe in ihrem schwarz-blauen Koffer, so wie er geöffnet wurde', 1600, 1200)}</p>
<p>${img('imalent-gr35-coffret-ouvert-vide.webp', 'Geöffneter leerer Imalent-Koffer, schwarz-blaues Inneres', 1600, 1200)}</p>
<p>${img('imalent-gr35-coffret-ferme-vue-dessus.webp', 'Imalent-GR35-Koffer von oben, graue Stofftasche in der Schachtel', 1200, 1600)}</p>
<p>${img('imalent-gr35-torche-pochette-tissu-dans-coffret.webp', 'Graue Stofftasche der Imalent GR35 mit Druckknopf, im Koffer', 1200, 1600)}</p>
<h2>Erster Eindruck</h2><p>Die Verarbeitung wirkt stimmig, und die Taschenlampe lässt sich einfach bedienen.</p>
<h2>Lichtstrom, Dimmer und grüner Laser</h2>
<p>Die Taschenlampe ist <strong>sehr stark</strong>. Richten Sie den Strahl auf die Handfläche, spüren Sie die Wärme — für eine Taschenlampe im Taschenformat keine Kleinigkeit. Imalent gibt einen maximalen Lichtstrom von <strong>2.800 Lumen</strong> und eine Reichweite von <strong>426 m</strong> an (Herstellerangaben, von uns nicht gemessen). Zum Vergleich: Eine typische LED-Lampe im Wohnzimmer liegt bei etwa <strong>800 lm</strong>. 2.800 lm sind also ein Mehrfaches davon in einem gebündelten Strahl. Daher der Einsatz, um weit entfernte Stellen auszuleuchten, und daher die Wärme: Ein Teil der Energie, die die LED aufnimmt, wird im Gehäuse der Taschenlampe zu Wärme, besonders bei voller Leistung.</p>
<p>Der <strong>Dimmer lässt sich einfach</strong> bedienen, um die Helligkeit einzustellen, ohne jedes Mal feste Modi durchzuschalten. Der Zeiger des <strong>grünen Lasers</strong> bleibt während der Nutzung <strong>stabil</strong>. Sicherheitshinweis: niemals auf Augen, Menschen, Tiere, Fahrzeuge oder Luftfahrzeuge richten; das Gerät außerhalb der Reichweite von Kindern aufbewahren.</p>
<h2>Powerbank und Tasche</h2><p>Abgesehen von der Taschenlampe selbst hat uns im Set vor allem die Kombination aus <strong>Powerbank und Aufbewahrungstasche</strong> im Koffer gefallen.</p>
<h2>Der Nachteil: die Anleitung</h2><p>Unser einziges echtes Bedauern: Die Anleitung war nicht ins Französische übersetzt. Das ist nicht vorgeschrieben, eine französische Fassung wäre für unsere Leserinnen und Leser aber willkommen gewesen.</p>
<h2>Stärken</h2><ul><li>Gute wahrgenommene Qualität, einfache Bedienung.</li><li>Powerbank und Tasche im Koffer durchdacht.</li><li>Sehr stark; einfacher Dimmer.</li><li>Stabiler grüner Laser.</li></ul>
<h2>Grenzen</h2><ul><li>Anleitung nicht auf Französisch.</li><li>Spürbare Wärme bei hoher Leistung.</li></ul>
<div class="en-card"><p class="en-flag">Bezugsquelle</p><h3>Imalent GR35 kaufen</h3>
<p>Preis notiert am 2. November 2026 auf <strong>imalentstore.com</strong>: <strong>72,95 US$</strong> (94,95 US$ durchgestrichen); er kann sich geändert haben. Versand, Mehrwertsteuer und Zoll hängen vom Verkäufer ab.</p>
<p>Von Awin für Frankreich veröffentlichter Aktionscode: <code>DZYJ10YHM</code> (−10 % im IMALENT-Shop, gültig bis zum 27. März 2027, Quelle Awin); er gilt in Ihrem Land möglicherweise nicht.</p>
<p><a href="${GR35_BUY}" rel="sponsored nofollow noopener" target="_blank" data-awin-link data-awin-mid="94223" data-product="Imalent GR35" data-placement="test-gr35-en">GR35 im offiziellen Shop ansehen</a></p>
<p class="en-note">Partnerlink: Wir erhalten möglicherweise eine Provision, für Sie ohne Mehrkosten.</p></div>
<h2>Für wen ist sie gedacht?</h2>
<p>Für jemanden, der eine starke Taschenlampe sucht, die sich über den Koffer laden lässt, mit grünem Laser und einstellbarer Helligkeit. Weniger geeignet, wenn Sie eine vollständige französische Anleitung brauchen. Für die Beleuchtung eines Kellers siehe unsere Ratgeber zum <a href="https://1piece1ampoule.fr/pieces/cave-voutee/">Gewölbekeller</a> und zum <a href="https://1piece1ampoule.fr/pieces/cave-a-vin/">Weinkeller</a>; für einen Weg den Ratgeber zu <a href="https://1piece1ampoule.fr/zones/entree-allee-exterieure/">Eingang und Weg</a>. Zum Vergleich mit fest eingebauter Beleuchtung der Ratgeber <a href="/de/ratgeber/lumen-watt/">Lumen und Watt</a>, die <a href="https://1piece1ampoule.fr/marques/imalent/">Markenseite Imalent</a> und <a href="/de/marken/">alle Marken, denen wir folgen</a>.</p>
<h2>Von Imalent angegebene Daten</h2>
<p>Angaben von der Produktseite des Herstellers (von uns nicht gemessen):</p>
<ul><li>Angegebener maximaler Lichtstrom: <strong>2.800 Lumen</strong>.</li><li>Angegebene Reichweite: <strong>426 m</strong>.</li><li>Ladekoffer: <strong>6.700 mAh</strong>.</li></ul>
<p>Quelle: <a href="${GR35_BUY}" rel="sponsored nofollow noopener" target="_blank">Seite der Imalent GR35 auf imalentstore.com</a>, geprüft am 2. November 2026.</p>
<h2>Häufige Fragen</h2>
${GR35_FAQ.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('\n')}`,
};

export const TR_LOT6_DE: EnPage[] = [TROUBLESHOOT_DE, BATH_ZONES_DE, DIMMER_MATRIX_DE, KIT_CONFIG_DE, ROI_DE, KITCHEN_PLAN_DE, GR35_TEST_DE];
export const LOT6_DE_GROUPS: { fr: string; de: string }[] = [
  { fr: '/guides/ampoule-led-clignote-eteinte-gresille-depannage/', de: '/de/ratgeber/led-flackern-brummen-nachleuchten/' },
  { fr: '/guides/zones-salle-de-bain-ip44-ip65-norme-nfc-15-100/', de: '/de/ratgeber/badzonen-ip44-ip65/' },
  { fr: '/guides/matrice-variateur-dimmer-ampoule-led-gu10-e27/', de: '/de/ratgeber/dimmer-led-matrix-gu10-e27-e14/' },
  { fr: '/guides/configurateur-kit-eclairage-connecte-sans-neutre/', de: '/de/ratgeber/konfigurator-smart-beleuchtung-ohne-neutral/' },
  { fr: '/outils/calculateur-roi-relamping-led-professionnel/', de: '/de/werkzeuge/led-relamping-roi/' },
  { fr: '/outils/generateur-plan-eclairage-cuisine-pdf/', de: '/de/werkzeuge/kuechenbeleuchtung-plan-pdf/' },
  { fr: '/tests/imalent-gr35/', de: '/de/tests/imalent-gr35/' },
];
