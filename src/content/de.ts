// Deutsche Ausgabe (/de/), Daten geprüft am 22.10.2026. Keine erfundenen Zahlen. Keine Amazon-Links (kein Amazon.de-Partner-Tag vorhanden).
import { TUTOS_TR } from './tr-tutos';
import { TR_PRIORITY_DE } from './tr-priority-de';
import { TR_PRIORITY_LOT2_DE } from './tr-priority-lot2-de';
import { TR_LOT3_DE } from './tr-lot3-de';
import { INTENT_DE } from './intentions-gsc';
import type { EnPage } from './en';
export const DE_PAGES: EnPage[] = [
{
path: '', kicker: 'Deutsche Ausgabe', title: 'Lichtratgeber mit echten Daten: Sockel, Lumen, Kelvin, Farbwiedergabe | 1 pièce 1 ampoule',
description: 'Unabhängige LED-Ratgeber für Deutschland, Österreich und die Schweiz: E27/E14/GU10, Lumen pro Raum nach DIN EN 12464-1, Farbtemperatur, CRI, IP-Schutzarten und Badzonen nach DIN VDE 0100-701.',
h1: 'Die richtige Lampe – mit Zahlen', lead: 'Unsere französische Website hilft seit 2020 bei der Lampenwahl, Raum für Raum. Diese deutsche Ausgabe bündelt unsere nützlichsten Ratgeber, angepasst an die Regeln in Deutschland, Österreich und der Schweiz (230 V, EU-Energielabel, DIN/VDE).',
body: `<h2>Hier starten</h2>
<div class="en-grid">
<a class="en-tile" href="/de/werkzeuge/"><strong>Lichtsimulator</strong><span>Lumen, Kelvin und Farbwiedergabe in sechs Räumen ausprobieren.</span></a>
<a class="en-tile" href="/de/ratgeber/lampensockel-e27-e14-gu10/"><strong>Lampensockel</strong><span>E27, E14, GU10, GU5.3, G9 in 10 Sekunden erkennen.</span></a>
<a class="en-tile" href="/de/ratgeber/lumen-watt/"><strong>Lumen statt Watt</strong><span>Offizielle Äquivalenztabelle (EU 2019/2015).</span></a>
<a class="en-tile" href="/de/anleitungen/lux-lumen-pro-raum-berechnen/"><strong>Lux pro Raum</strong><span>Formel und Rechenbeispiel.</span></a>
<a class="en-tile" href="/de/ratgeber/farbtemperatur-kelvin/"><strong>Farbtemperatur</strong><span>2700 K, 3000 K, 4000 K: welcher Raum?</span></a>
<a class="en-tile" href="/de/ratgeber/farbwiedergabe-cri-ra/"><strong>Farbwiedergabe</strong><span>Warum Ra 90 in Küche und Bad zählt.</span></a>
<a class="en-tile" href="/de/ratgeber/ip-schutzarten-bad-aussen/"><strong>IP-Schutzarten</strong><span>Badbereiche 0, 1, 2 nach DIN VDE 0100-701.</span></a>
<a class="en-tile" href="/de/ratgeber/dimmbare-led-lampen/"><strong>Dimmbare LED</strong><span>Phasenanschnitt, Phasenabschnitt, Mindestlast.</span></a>
<a class="en-tile" href="/de/anleitungen/halogen-gu10-mr16-durch-led-ersetzen/"><strong>Halogenspots ersetzen</strong><span>GU10 und MR16 auf LED, Trafo-Falle inklusive.</span></a>
<a class="en-tile" href="/de/anleitungen/led-streifen-unter-haengeschraenken/"><strong>LED-Streifen unter Hängeschränken</strong><span>24 V, Querschnitt, Netzteil.</span></a>
<a class="en-tile" href="/de/anleitungen/smarter-schalter-ohne-neutralleiter/"><strong>Smarter Schalter ohne N</strong><span>Warum LEDs flackern, Bypass.</span></a>
<a class="en-tile" href="/de/anleitungen/keller-ohne-strom-beleuchten/"><strong>Keller ohne Strom</strong><span>Akku und 12-V-Solar, in Wh.</span></a>
</div>
<h2>Was in DACH gilt</h2>
<table><thead><tr><th></th><th>Deutschland / Österreich / Schweiz</th></tr></thead><tbody>
<tr><td>Netzspannung</td><td>230 V, 50 Hz</td></tr>
<tr><td>Häufigste Sockel</td><td>E27, E14, GU10 (Netzspannung), GU5.3 (12 V)</td></tr>
<tr><td>Effizienz</td><td>EU-Energielabel A–G (seit 1.9.2021, VO (EU) 2019/2015); Schweiz: gleichwertige Etikette nach Energieeffizienzverordnung (EnEV)</td></tr>
<tr><td>Elektroinstallation</td><td>DE: DIN VDE 0100; AT: ÖVE/ÖNORM E 8101; CH: NIN (SN 411000)</td></tr>
</tbody></table>
<h2>Arbeitsweise</h2>
<p>Unsere Werte stammen aus Normen und Verordnungen (EU-Ökodesign, DIN EN 12464-1, IEC 60529, DIN VDE 0100-701) oder aus Herstellerdatenblättern; jede Rechnung wird gezeigt. Einige Seiten enthalten gekennzeichnete Partnerlinks zu Amazon.de und Lampenwelt.ch (siehe <a href="/de/werbehinweis/">Werbehinweis</a>).</p>`},
{
path: 'ratgeber/lumen-watt', article: true, kicker: 'Ratgeber', title: 'Watt in Lumen umrechnen: LED-Äquivalenztabelle und Energielabel (2026)',
description: 'Wie viele Lumen ersetzen eine 40-, 60-, 75- oder 100-W-Glühlampe? Offizielle Tabelle nach EU 2019/2015, Lichtausbeute (lm/W), EU-Energielabel A–G und Stromkosten-Formel.',
h1: 'Lumen statt Watt', lead: 'Watt misst die aufgenommene Leistung, Lumen den abgegebenen Lichtstrom. LEDs liefern 5- bis 10-mal mehr Licht pro Watt als Glühlampen: Kaufen Sie nach Lumen.',
body: `<h2>Offizielle Äquivalenztabelle</h2>
<p>Quelle: Delegierte Verordnung (EU) 2019/2015, Anhang V, Tabelle 7 (gleiche Werte wie die frühere Verordnung (EG) 244/2009, Tabelle 6) – Mindestlichtstrom, ab dem eine LED-Lampe „ersetzt eine Glühlampe von X W“ angeben darf.</p>
<table><thead><tr><th>Glühlampe</th><th>Mindestens (lm)</th><th>Typische LED-Leistung</th></tr></thead><tbody>
<tr><td>25 W</td><td>249</td><td>2,5–3 W</td></tr>
<tr><td>40 W</td><td>470</td><td>4–5 W</td></tr>
<tr><td>60 W</td><td>806</td><td>7–9 W</td></tr>
<tr><td>75 W</td><td>1.055</td><td>10–12 W</td></tr>
<tr><td>100 W</td><td>1.521</td><td>13–16 W</td></tr></tbody></table>
<p>Die LED-Leistung ist eine Spanne aus aktuellen Herstellerdatenblättern (z. B. Philips 8 W A60 = 806 lm, also 100 lm/W), kein Normwert.</p>
<h2>Lichtausbeute und EU-Energielabel</h2>
<p>Lichtausbeute = Lumen ÷ Watt. Seit 1. September 2021 gilt das neu skalierte Label A–G (Verordnung (EU) 2019/2015). Klasse A beginnt bei rund 210 lm/W; die meisten heutigen Standard-LEDs liegen in E oder F (85–135 lm/W). Jede Lampe hat einen EPREL-Eintrag (QR-Code auf dem Label) mit den geprüften Werten.</p>
<h2>Stromkosten-Formel</h2>
<p>Jahreskosten = Watt × Stunden pro Tag × 365 ÷ 1000 × Preis pro kWh.</p>
<p>Beispiel, 3 Stunden täglich: Glühlampe 60 W = 65,7 kWh/Jahr; LED 8 W = 8,8 kWh/Jahr. Ersparnis: 56,9 kWh pro Lampe und Jahr – mit dem Arbeitspreis Ihres Tarifs (ct/kWh) multiplizieren.</p>
<p>Weiter: <a href="/de/anleitungen/lux-lumen-pro-raum-berechnen/">Wie viele Lumen braucht ein Raum?</a></p>`},
{
path: 'ratgeber/lampensockel-e27-e14-gu10', article: true, kicker: 'Ratgeber', title: 'Lampensockel erkennen: E27, E14, GU10, GU5.3 (MR16), G9, B22',
description: 'Lampensockel in Sekunden bestimmen: Schraubsockel E27 und E14, Stiftsockel GU10 (230 V) und GU5.3 (12 V), G9 – mit Durchmesser, Spannung und typischem Einsatz.',
h1: 'Lampensockel: E27, E14, GU10…', lead: 'Der Buchstabe nennt die Bauart (E = Edison-Schraube, G = Stifte, B = Bajonett), die Zahl den Durchmesser bzw. Stiftabstand in Millimetern.',
body: `<h2>Übersicht</h2>
<table><thead><tr><th>Sockel</th><th>Bauart</th><th>Maß</th><th>Typischer Einsatz</th></tr></thead><tbody>
<tr><td><strong>E27</strong></td><td>Schraubsockel</td><td>27 mm</td><td>Deckenleuchten, Steh- und Tischleuchten – Standard in DACH</td></tr>
<tr><td><strong>E14</strong></td><td>Kleiner Schraubsockel</td><td>14 mm</td><td>Kerzenlampen, Nachttischleuchten, Kühlschrank</td></tr>
<tr><td><strong>GU10</strong></td><td>2 Stifte mit Füßchen, drehen</td><td>10 mm</td><td>Einbaustrahler mit 230 V</td></tr>
<tr><td><strong>GU5.3</strong> (MR16)</td><td>2 dünne Stifte, stecken</td><td>5,3 mm</td><td>12-V-Strahler, braucht Trafo</td></tr>
<tr><td><strong>G9</strong></td><td>2 Ösen-Stifte</td><td>9 mm</td><td>Kleine Designleuchten, 230 V</td></tr>
<tr><td><strong>G4</strong></td><td>2 Stifte</td><td>4 mm</td><td>12-V-Kleinleuchten</td></tr>
<tr><td><strong>B22</strong></td><td>Bajonett</td><td>22 mm</td><td>In DACH selten (britischer Standard)</td></tr></tbody></table>
<h2>GU10 oder GU5.3?</h2>
<p>GU10 hat dicke Stifte mit Füßchen und wird eingedreht: Netzspannung, kein Trafo. GU5.3 hat dünne gerade Stifte und wird gesteckt: 12 V, mit Trafo in der Decke. Nicht verwechseln – eine 230-V-Lampe am 12-V-Trafo leuchtet nicht, eine 12-V-Lampe an 230 V wird zerstört.</p>
<h2>Vor dem Kauf prüfen</h2>
<ul><li>Abmessungen: LED-Lampen sind oft länger als die alte Glühlampe.</li><li>Lichtstrom in Lumen (siehe <a href="/de/ratgeber/lumen-watt/">Lumen statt Watt</a>).</li><li>Farbtemperatur und Farbwiedergabe (Ra ≥ 90 für Küche und Bad).</li><li>„Dimmbar“ nur, wenn ein passender Dimmer vorhanden ist.</li></ul>`},
{
path: 'ratgeber/farbtemperatur-kelvin', article: true, kicker: 'Ratgeber', title: 'Farbtemperatur: 2700 K, 3000 K, 4000 K oder 6500 K – Raum für Raum',
description: 'Was Warmweiß, Neutralweiß und Tageslichtweiß in Kelvin bedeuten, wie Sie den Code 827/930 lesen und welche Farbtemperatur in welchen Raum gehört.',
h1: '2700 Kelvin: Warmweiß', lead: '2700 K ist Warmweiß, nah an der alten Glühlampe, für Wohnzimmer, Schlafzimmer und Esstisch. Es ist nicht sparsamer als 4000 K: bei gleichen Lumen ändert sich nur der Farbton.',
body: `<h2>Bezeichnungen</h2>
<table><thead><tr><th>Kelvin</th><th>Verpackung</th><th>Einsatz</th></tr></thead><tbody>
<tr><td>2200–2700 K</td><td>Extra-warmweiß / Warmweiß</td><td>Wohn-, Schlaf-, Esszimmer</td></tr>
<tr><td>3000 K</td><td>Warmweiß</td><td>Küche, Flur, Bad</td></tr>
<tr><td>4000 K</td><td>Neutralweiß</td><td>Arbeitsplatte, Arbeitszimmer, Keller</td></tr>
<tr><td>5000–6500 K</td><td>Tageslichtweiß</td><td>Werkstatt, Garage</td></tr></tbody></table>
<p>Der dreistellige Code kombiniert Farbwiedergabe und Kelvin: „827“ = Ra 80+, 2700 K; „930“ = Ra 90+, 3000 K; „840“ = Ra 80+, 4000 K.</p>
<h2>Raum für Raum</h2>
<ul><li><strong>Wohn- und Schlafzimmer:</strong> 2700 K.</li><li><strong>Küche:</strong> 3000 K Grundlicht, 4000 K unter den Hängeschränken.</li><li><strong>Badspiegel:</strong> 3000–4000 K mit Ra 90.</li><li><strong>Arbeitszimmer:</strong> 4000 K am Schreibtisch.</li><li><strong>Keller, Werkstatt:</strong> 4000–6500 K.</li></ul>
<p>Pro Raum möglichst eine Farbtemperatur: 2700 K und 4000 K im selben Blickfeld wirken beide falsch.</p>`},
{
path: 'ratgeber/farbwiedergabe-cri-ra', article: true, kicker: 'Ratgeber', title: 'Ra-Wert der Beleuchtung: was Ra 80, 90 oder 95 bedeutet',
description: 'Der Farbwiedergabeindex Ra zeigt, wie natürlich Farben wirken. Gesetzliches Minimum Ra 80 (EU 2019/2020), wann sich Ra 90+ lohnt und wie Sie den Code 927/930 lesen.',
h1: 'Ra-Wert der Beleuchtung', lead: 'Der Ra-Wert (auch CRI) sagt, wie natürlich Farben unter einer Lampe wirken. Glühlampe und Tageslicht: 100. Für LED-Allgemeinbeleuchtung ist Ra 80 das gesetzliche Minimum (EU 2019/2020). Für Küche und Bad lohnt Ra 90.',
body: `<h2>Die wichtigen Schwellen</h2>
<table><thead><tr><th>Ra</th><th>Bedeutung</th><th>Quelle</th></tr></thead><tbody>
<tr><td>80</td><td>Gesetzliches Minimum für LED-Lampen für allgemeine Beleuchtung</td><td>Verordnung (EU) 2019/2020 (Ökodesign)</td></tr>
<tr><td>80</td><td>Mindestwert für Arbeitsplätze in Innenräumen (Büro)</td><td>DIN EN 12464-1</td></tr>
<tr><td>90+</td><td>Hauttöne, Lebensmittel und Holz wirken natürlich</td><td>„High-CRI“-Produktlinien der Hersteller</td></tr>
<tr><td>95+</td><td>Farbkritische Arbeiten: Malen, Foto</td><td>Speziallampen</td></tr></tbody></table>
<h2>Was ist R9?</h2>
<p>Ra mittelt 8 Pastellfarben. R9 bewertet gesättigtes Rot getrennt – oft die Schwäche von LEDs. Eine Lampe mit Ra 80 kann ein R9 nahe null haben: Haut wirkt fahl. Bei High-CRI-Lampen auf R9 &gt; 50 im Datenblatt achten.</p>
<h2>Wo sich Ra 90 lohnt</h2>
<ul><li>Badspiegel und Schminktisch</li><li>Küchenarbeitsplatte</li><li>Räume mit Bildern oder Holzoberflächen</li></ul><p>Im Flur oder Keller reicht Ra 80.</p>`},
{
path: 'ratgeber/ip-schutzarten-bad-aussen', article: true, kicker: 'Ratgeber', title: 'IP-Schutzarten für Leuchten: Badbereiche nach DIN VDE 0100-701 und außen',
description: 'Was IP44, IP65 und IP67 bedeuten (IEC 60529 / DIN EN 60529), welche Schutzart die Bereiche 0, 1 und 2 im Bad nach DIN VDE 0100-701 verlangen und was in Österreich und der Schweiz gilt.',
h1: 'IP-Schutzarten: Bad und Außenbereich', lead: 'Der IP-Code (DIN EN 60529) hat zwei Ziffern: die erste für Fremdkörper (0–6), die zweite für Wasser (0–9). „X“ = nicht geprüft.',
body: `<h2>Übliche Schutzarten</h2>
<table><thead><tr><th>Schutzart</th><th>Wasserschutz</th><th>Einsatz</th></tr></thead><tbody>
<tr><td>IP20</td><td>keiner</td><td>Trockene Innenräume</td></tr>
<tr><td>IP44</td><td>Spritzwasser aus allen Richtungen</td><td>Bad Bereich 2, überdachte Außenwand</td></tr>
<tr><td>IP65</td><td>Strahlwasser</td><td>Freiliegend außen</td></tr>
<tr><td>IP67</td><td>Zeitweiliges Untertauchen bis 1 m</td><td>Bad Bereich 0, Bodenstrahler</td></tr>
<tr><td>IP68</td><td>Dauerndes Untertauchen (Herstellerangaben)</td><td>Teich, Pool</td></tr></tbody></table>
<h2>Badbereiche nach DIN VDE 0100-701</h2>
<ul><li><strong>Bereich 0</strong> (Innenraum von Wanne oder Duschtasse): mindestens IPX7, nur SELV bis 12 V AC.</li>
<li><strong>Bereich 1</strong> (über Wanne/Dusche bis 2,25 m): mindestens IPX4 (IPX5 bei Strahlwasser zur Reinigung).</li>
<li><strong>Bereich 2</strong> (0,6 m um Bereich 1): mindestens IPX4.</li>
<li><strong>Außerhalb:</strong> keine IP-Vorgabe, über dem Waschbecken ist IP44 trotzdem sinnvoll.</li></ul>
<p>Alle Stromkreise im Bad brauchen einen Fehlerstromschutzschalter (RCD) mit max. 30 mA. Arbeiten an der Elektroinstallation darf in Deutschland nur ein in das Installateurverzeichnis eingetragener Elektrofachbetrieb ausführen (NAV § 13). Eine Lampe zu wechseln ist jederzeit erlaubt.</p>
<h2>Österreich und Schweiz</h2>
<p>Österreich: ÖVE/ÖNORM E 8101 übernimmt die Bereichseinteilung der IEC 60364-7-701. Schweiz: NIN (SN 411000), Abschnitt 7.01, mit gleicher Logik; Installationen regelt die Niederspannungs-Installationsverordnung (NIV).</p>`},
{
path: 'ratgeber/dimmbare-led-lampen', article: true, kicker: 'Ratgeber', title: 'Dimmbare LED-Lampen: Phasenanschnitt, Phasenabschnitt, Flackern und Brummen',
description: 'Warum LEDs am Dimmer flackern oder brummen: Phasenanschnitt vs. Phasenabschnitt, Mindestlast, Kompatibilitätslisten und typische Fehler mit Lösung.',
h1: 'Dimmbare LED und Dimmer', lead: 'Eine nicht dimmbare LED am Dimmer kann flackern, brummen oder früh ausfallen. Eine dimmbare LED an einem alten Dimmer ebenso: beide Seiten müssen passen.',
body: `<h2>Drei Prüfungen</h2>
<ol><li><strong>Lampe als „dimmbar“ gekennzeichnet</strong> (Verpackung, Datenblatt).</li>
<li><strong>Dimmer für LED geeignet.</strong> Alte Glühlampen-Dimmer arbeiten meist mit Phasenanschnitt und einer Mindestlast von 20–60 W; drei 5-W-LEDs (15 W) liegen darunter und flackern. LED-Dimmer arbeiten meist mit Phasenabschnitt und vertragen kleine Lasten.</li>
<li><strong>Last im zulässigen Bereich.</strong> Den LED-Wert auf dem Dimmer verwenden, nicht den Glühlampenwert – Hersteller geben für LED oft nur einen Bruchteil an.</li></ol>
<p>Dimmer-Hersteller (z. B. Busch-Jaeger, Gira, Jung) veröffentlichen Kompatibilitätslisten nach Lampenmodell. Der Tausch eines Schalters gegen einen Dimmer ist Arbeit an der Elektroinstallation: in Deutschland Elektrofachbetrieb (NAV § 13).</p>
<h2>Symptome und Lösungen</h2>
<table><thead><tr><th>Symptom</th><th>Ursache</th><th>Lösung</th></tr></thead><tbody>
<tr><td>Flackern bei kleiner Stufe</td><td>Mindestlast unterschritten</td><td>LED-Dimmer (Phasenabschnitt), Grundhelligkeit einstellen</td></tr>
<tr><td>Brummen</td><td>Phasenanschnitt mit LED-Treiber</td><td>Phasenabschnittdimmer</td></tr>
<tr><td>Nachglimmen im Aus-Zustand</td><td>Leckstrom über Dimmer/Smart-Schalter</td><td>Dimmer mit Neutralleiter oder Grundlastelement</td></tr>
<tr><td>Dimmt nicht unter 50 %</td><td>Kombination nicht kompatibel</td><td>Kompatibilitätsliste prüfen</td></tr></tbody></table>`},
{
path: 'anleitungen/lux-lumen-pro-raum-berechnen', article: true, kicker: 'Anleitung', title: 'Wie viel Licht braucht ein Raum? Lux und Lumen berechnen (DIN EN 12464-1)',
description: 'Empfohlene Beleuchtungsstärken in Lux pro Raum, angelehnt an DIN EN 12464-1, und die Formel von Lux zu Lumen – mit Rechenbeispiel für Küche und Wohnzimmer.',
h1: 'Lux und Lumen pro Raum berechnen', lead: 'Lux (lx) = Lumen pro Quadratmeter. Die Beleuchtungsstärke misst, wie viel Licht auf einer Fläche ankommt.',
body: `<h2>Empfohlene Werte</h2>
<p>Für Wohnräume gibt es keine verbindliche Norm. Die Werte für Arbeitsflächen stammen aus DIN EN 12464-1 (Arbeitsstätten in Innenräumen, z. B. 500 lx für Schreiben und Lesen); die Wohnwerte sind gängige Planungswerte.</p>
<table><thead><tr><th>Bereich</th><th>Lux</th></tr></thead><tbody>
<tr><td>Flur, Treppe</td><td>100–150</td></tr>
<tr><td>Wohnzimmer (Grundlicht)</td><td>100–200</td></tr>
<tr><td>Schlafzimmer (Grundlicht)</td><td>100–150</td></tr>
<tr><td>Küche (allgemein)</td><td>200–300</td></tr>
<tr><td>Arbeitsplatte, Lesen, Schreibtisch</td><td>500</td></tr>
<tr><td>Badspiegel</td><td>300–500</td></tr>
<tr><td>Werkbank</td><td>500–750</td></tr></tbody></table>
<h2>Die Formel</h2>
<p>Benötigte Lumen = Ziel-Lux × Fläche (m²) ÷ Wirkungsgrad.</p>
<p>Der Wirkungsgrad (0,5–0,6 in einer üblichen Wohnung mit hellen Wänden) berücksichtigt das Licht, das Wände, Decke und Schirme schlucken. Bei dunklen Wänden 0,5 ansetzen.</p>
<h2>Rechenbeispiel Küche</h2>
<p>3 × 4 m = 12 m², Ziel 300 lx: 300 × 12 ÷ 0,55 = <strong>6.545 lm</strong>. Mit GU10-LEDs zu 350 lm sind das 6.545 ÷ 350 ≈ <strong>19 Spots</strong> – oder weniger Spots plus LED-Leisten unter den Hängeschränken für 500 lx auf der Arbeitsplatte.</p>
<h2>Rechenbeispiel Wohnzimmer</h2>
<p>4 × 5 m = 20 m², Ziel 150 lx: 150 × 20 ÷ 0,55 = <strong>5.455 lm</strong>, also etwa 7 Lampen zu 806 lm (60-W-Äquivalent), verteilt auf Decke und Stehleuchten.</p>
<h2>Nachmessen</h2>
<p>Eine Luxmeter-App auf dem Smartphone liefert einen Richtwert (±10–20 % je nach Gerät). In Tisch- oder Arbeitshöhe messen, Licht an, Vorhänge zu.</p>`},
{
path: 'anleitungen/halogen-gu10-mr16-durch-led-ersetzen', article: true, kicker: 'Anleitung', title: 'Halogenspots GU10 und MR16 (GU5.3) durch LED ersetzen',
description: 'Schritt für Schritt: GU10 (230 V) von GU5.3/MR16 (12 V) unterscheiden, Lumen und Abstrahlwinkel wählen, Trafo- und Dimmerprobleme lösen.',
h1: 'Halogenspots durch LED ersetzen', lead: 'Um einen 50-W-Halogenspot MR16 zu ersetzen, muss eine LED mindestens 540 lm im 90°-Kegel liefern, für einen 50-W-GU10 (PAR16, 230 V) 300 lm (VO (EU) 1194/2012). Lumen vergleichen, nicht Watt.',
body: `<h2>1. Spot bestimmen</h2>
<ul><li><strong>GU10:</strong> zwei kurze Stifte mit Füßchen, eindrehen. 230 V, kein Trafo.</li><li><strong>MR16 (GU5.3):</strong> zwei dünne gerade Stifte, stecken. 12 V über Trafo in der Decke.</li></ul>
<h2>2. Lichtstrom wählen</h2>
<table><thead><tr><th>Ersetzter Halogenspot</th><th>Mindestlichtstrom Φ90°</th></tr></thead><tbody>
<tr><td>GU10 (PAR16, 230 V), 35 W</td><td>200 lm</td></tr><tr><td>GU10 (PAR16, 230 V), 50 W</td><td>300 lm</td></tr>
<tr><td>MR16 (GU5.3, 12 V), 35 W</td><td>300 lm</td></tr><tr><td>MR16 (GU5.3, 12 V), 50 W</td><td>540 lm</td></tr></tbody></table>
<p>Quelle: Verordnung (EU) 1194/2012, Anhang III, Tabelle 6 (heute Tabelle 4 der Delegierten Verordnung (EU) 2019/2015); bei LEDs zusätzlich mal Lichtstromerhalt-Faktor und unter 20° Abstrahlwinkel mal 0,8–0,9. Abstrahlwinkel beibehalten (meist 36–40°), 2700–3000 K für warmes Halogenlicht.</p>
<h2>3. MR16: die Trafo-Falle</h2>
<p>Alte elektronische Halogentrafos brauchen oft 20–35 W Mindestlast. Eine einzelne 4-W-LED liegt darunter: Flackern oder gar kein Licht. Lösung: LED-Konstantspannungstreiber für die Gesamtleistung, oder Umbau auf GU10-Fassungen mit 230 V (Elektroinstallation: Fachbetrieb).</p>
<h2>4. Dimmer</h2>
<p>Siehe <a href="/de/ratgeber/dimmbare-led-lampen/">Dimmbare LED</a>: dimmbare LEDs und Phasenabschnittdimmer verwenden.</p>
<h2>5. Sicherheit</h2>
<p>Sicherung ausschalten und Halogenlampen abkühlen lassen – sie werden deutlich über 100 °C heiß. Bei Einbauleuchten in gedämmten Decken auf die Kennzeichnung für Abdeckung mit Dämmstoff achten.</p>`},
{
path: 'werbehinweis', kicker: 'Transparenz', title: 'Werbehinweis und Affiliate-Links | 1 pièce 1 ampoule', description: 'Wie sich 1piece1ampoule.fr finanziert und wie Affiliate-Links gekennzeichnet werden.',
h1: 'Werbehinweis', lead: 'Einige Links auf den deutschen Seiten sind Affiliate-Links. So funktionieren sie.',
body: `<p>1piece1ampoule.fr ist eine unabhängige Website. Als Teilnehmer des Partnerprogramms von Amazon EU verdienen wir an qualifizierten Verkäufen über Links zu amazon.de (Partner-ID roboteducat00-21). Außerdem enthalten einige deutsche Seiten Partnerlinks über Awin, derzeit zu Lampenwelt.ch für unsere Leserinnen und Leser in der Schweiz. Kaufst du nach einem Klick ein, erhalten wir eine kleine Provision; der Preis für dich ändert sich nicht. Diese Links sind als Werbung gekennzeichnet und tragen <code>rel="sponsored nofollow"</code>. Provisionen beeinflussen unsere Bewertungen nicht: Auswahlkriterien sind veröffentlichte Daten (Lumen, Ra, Spannung, Energieklasse).</p>`},
{
path: 'impressum', kicker: 'Rechtliches', title: 'Impressum | 1 pièce 1 ampoule', description: 'Angaben zum Anbieter von 1piece1ampoule.fr (deutsche Ausgabe).',
h1: 'Impressum', lead: 'Angaben zum Diensteanbieter.',
body: `<h2>Anbieter (§ 5 DDG)</h2><p>Emmanuel SAUVAGE<br>10 rue des Acacias<br>59193 Erquinghem-Lys, Frankreich<br>E-Mail: <a href="mailto:contact@1piece1ampoule.fr">contact@1piece1ampoule.fr</a><br>Website: <a href="https://emmanuelsauvage.fr/">emmanuelsauvage.fr</a></p>
<p>Der Anbieter hat seinen Sitz in Frankreich; es gilt französisches Recht (LCEN, Art. 6).</p>
<h2>Hosting</h2><p>o2switch, Clermont-Ferrand, Frankreich.</p>
<h2>Verantwortlich für den Inhalt</h2><p>Emmanuel Sauvage, Anschrift wie oben.</p>
<h2>Haftung</h2><p>Wir prüfen Inhalte sorgfältig, Normen und Produkte ändern sich jedoch. Arbeiten an der Elektroinstallation gehören in die Hände eines Elektrofachbetriebs.</p>`},
{
path: 'datenschutz', kicker: 'Rechtliches', title: 'Datenschutzerklärung | 1 pièce 1 ampoule', description: 'Welche personenbezogenen Daten 1piece1ampoule.fr verarbeitet (Google Analytics nur mit Einwilligung), Rechtsgrundlage und Ihre Rechte nach DSGVO.',
h1: 'Datenschutzerklärung', lead: 'Wir erheben so wenig wie möglich: Reichweitenstatistik nur mit Ihrer Einwilligung.',
body: `<h2>Verantwortlicher</h2><p>Emmanuel Sauvage, 59193 Erquinghem-Lys, Frankreich – <a href="mailto:contact@1piece1ampoule.fr">contact@1piece1ampoule.fr</a>.</p>
<h2>Verarbeitete Daten</h2><ul><li><strong>Reichweitenmessung (Google Analytics 4)</strong>, nur nach „Alle akzeptieren“ oder Auswahl „Statistik“. Google Consent Mode steht standardmäßig auf „denied“. Daten: aufgerufene Seiten, ungefährer Standort, Gerätetyp, Klicks auf Partnerlinks.</li><li><strong>Ihre Cookie-Entscheidung</strong> im Browser (localStorage-Schlüssel <code>cookie_consent_v1</code>).</li><li><strong>E-Mails</strong>, die Sie uns senden, nur so lange wie für die Antwort nötig.</li></ul>
<h2>Rechtsgrundlage</h2><p>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 TDDDG) für Statistik; berechtigtes Interesse (Art. 6 Abs. 1 lit. f) für die Beantwortung von Nachrichten.</p>
<h2>Speicherdauer</h2><p>Google-Analytics-Daten: 14 Monate. Ihre Cookie-Entscheidung bleibt im Browser, bis Sie sie löschen oder ändern.</p>
<h2>Empfänger</h2><p>Google Ireland Ltd. (Analytics).</p>
<h2>Ihre Rechte</h2><p>Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Widerruf der Einwilligung jederzeit (<a href="/de/cookies/">Cookie-Einstellungen</a>). Beschwerde bei der CNIL (Frankreich) oder Ihrer örtlichen Aufsichtsbehörde.</p>`},
{
path: 'cookies', kicker: 'Rechtliches', title: 'Cookie-Richtlinie | 1 pièce 1 ampoule', description: 'Welche Cookies 1piece1ampoule.fr verwendet und wie Sie Ihre Auswahl ändern.',
h1: 'Cookie-Richtlinie', lead: 'Vor Ihrer Entscheidung wird nur die technisch notwendige Speicherung genutzt.',
body: `<table><thead><tr><th>Name</th><th>Zweck</th><th>Dauer</th><th>Einwilligung</th></tr></thead><tbody>
<tr><td>cookie_consent_v1 (localStorage)</td><td>Speichert Ihre Auswahl</td><td>bis zur Löschung</td><td>nicht erforderlich</td></tr>
<tr><td>_ga, _ga_*</td><td>Google Analytics 4 Reichweitenmessung</td><td>bis 13 Monate</td><td>erforderlich</td></tr></tbody></table>
<p>„Alle akzeptieren“ und „Alle ablehnen“ sind gleichwertig nebeneinander angeordnet. Ablehnen schränkt die Nutzung der Website nicht ein.</p>
<p><button type="button" class="en-amz" onclick="window.__showCookiePreferences && window.__showCookiePreferences()">Cookie-Einstellungen ändern</button></p>`},
];
DE_PAGES.splice(DE_PAGES.findIndex((p) => p.path === 'anleitungen/halogen-gu10-mr16-durch-led-ersetzen') + 1, 0, ...TUTOS_TR.de);
DE_PAGES.push(...TR_PRIORITY_DE);
DE_PAGES.push(...TR_PRIORITY_LOT2_DE);
DE_PAGES.push(...TR_LOT3_DE);
DE_PAGES.push(...INTENT_DE);
