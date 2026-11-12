// Nederlandstalige editie (/nl/, Nederland en Vlaanderen), gegevens gecontroleerd op 22/10/2026. Geen Amazon-links (geen tag op de box).
import { TUTOS_TR } from './tr-tutos';
import { TR_PRIORITY_NL } from './tr-priority-nl';
import { TR_PRIORITY_LOT2_NL } from './tr-priority-lot2-nl';
import { TR_LOT3_NL } from './tr-lot3-nl';
import { INTENT_NL } from './intentions-gsc';
import type { EnPage } from './en';
export const NL_PAGES: EnPage[] = [
{
path: '', kicker: 'Nederlandstalige editie', title: 'Verlichtingsgidsen met echte data: fittingen, lumen, kelvin, kleurweergave | 1 pièce 1 ampoule',
description: 'Onafhankelijke LED-gidsen voor Nederland en Vlaanderen: E27/E14/GU10, lumen per ruimte, kleurtemperatuur, CRI, IP-codes en badkamerzones volgens NEN 1010 en het AREI.',
h1: 'De juiste lamp kiezen, met cijfers', lead: 'Onze Franse site helpt sinds 2020 bij het kiezen van lampen, ruimte per ruimte. Deze Nederlandstalige editie bundelt onze nuttigste gidsen, aangepast aan de regels in Nederland (NEN 1010) en België (AREI/RGIE).',
body: `<h2>Begin hier</h2>
<div class="en-grid">
<a class="en-tile" href="/nl/tools/"><strong>Lichtsimulator</strong><span>Probeer lumen, kelvin en kleurweergave in zes ruimtes.</span></a>
<a class="en-tile" href="/nl/gidsen/lampfittingen-e27-e14-gu10/"><strong>Lampfittingen</strong><span>E27, E14, GU10, GU5.3, G9 in 10 seconden herkennen.</span></a>
<a class="en-tile" href="/nl/gidsen/lumen-watt/"><strong>Lumen in plaats van watt</strong><span>Officiële tabel (EU 2019/2015).</span></a>
<a class="en-tile" href="/nl/handleidingen/lux-lumen-per-ruimte-berekenen/"><strong>Lux per ruimte</strong><span>Formule en rekenvoorbeelden.</span></a>
<a class="en-tile" href="/nl/gidsen/kleurtemperatuur-kelvin/"><strong>Kleurtemperatuur</strong><span>2700 K, 3000 K, 4000 K: welke ruimte?</span></a>
<a class="en-tile" href="/nl/gidsen/kleurweergave-cri-ra/"><strong>Kleurweergave</strong><span>Waarom Ra 90 telt in keuken en badkamer.</span></a>
<a class="en-tile" href="/nl/gidsen/ip-beschermingsgraad-badkamer-buiten/"><strong>IP-codes</strong><span>Badkamerzones in Nederland en België.</span></a>
<a class="en-tile" href="/nl/gidsen/dimbare-led-lampen/"><strong>Dimbare LED</strong><span>Fase-aansnijding, fase-afsnijding, minimale belasting.</span></a>
<a class="en-tile" href="/nl/handleidingen/halogeen-gu10-mr16-vervangen-door-led/"><strong>Halogeenspots vervangen</strong><span>GU10 en MR16 naar LED, met de trafo-valkuil.</span></a>
<a class="en-tile" href="/nl/handleidingen/ledstrip-onder-keukenkastjes/"><strong>Ledstrip onder keukenkastjes</strong><span>24 V, draaddoorsnede, voeding.</span></a>
<a class="en-tile" href="/nl/handleidingen/slimme-schakelaar-zonder-nul/"><strong>Slimme schakelaar zonder nul</strong><span>Waarom leds flikkeren, bypass.</span></a>
<a class="en-tile" href="/nl/handleidingen/kelder-schuur-zonder-stroom-verlichten/"><strong>Kelder zonder stroom</strong><span>Accu en 12V-zonne-energie, in Wh.</span></a>
</div>
<h2>Wat geldt in Nederland en België</h2>
<table><thead><tr><th></th><th>Nederland</th><th>België (Vlaanderen)</th></tr></thead><tbody>
<tr><td>Netspanning</td><td>230 V, 50 Hz</td><td>230 V, 50 Hz</td></tr>
<tr><td>Meest voorkomende fittingen</td><td>E27, E14, GU10, GU5.3</td><td>E27, E14, GU10, GU5.3</td></tr>
<tr><td>Energielabel</td><td>EU-label A–G (sinds 1/9/2021, Verordening (EU) 2019/2015)</td><td>idem</td></tr>
<tr><td>Installatievoorschrift</td><td>NEN 1010</td><td>AREI / RGIE (Algemeen Reglement op de Elektrische Installaties)</td></tr>
<tr><td>Keuring</td><td>Geen algemene verplichte keuring voor woningen</td><td>Verplichte keuring door een erkend organisme bij nieuwe installaties, grote wijzigingen en verkoop van een woning</td></tr>
</tbody></table>
<h2>Werkwijze</h2>
<p>Onze waarden komen uit normen en verordeningen (EU-ecodesign, EN 12464-1, IEC 60529, NEN 1010, AREI) of uit datasheets van fabrikanten; elke berekening wordt getoond. Sommige pagina’s hebben een partnerlink naar Amazon.nl (tag manuso0607-21) of naar een winkel via Awin (zie <a href="/nl/affiliatebeleid/">affiliatebeleid</a>).</p>`},
{
path: 'gidsen/lumen-watt', article: true, kicker: 'Gids', title: 'Watt naar lumen omrekenen: tabel energielabel LED (2026)',
description: 'Label watt naar lumen: een oude 60 W is minstens 806 lumen (EU 2019/2015). Het wattage op de LED is het verbruik, niet dat cijfer. Rekenvoorbeeld en energielabel A–G.',
h1: 'Watt naar lumen omrekenen', lead: 'Het getal in watt op een oud label is geen lichtopbrengst. Reken het om met de officiële tabel: een gloeilamp van 60 W wordt minstens 806 lumen. De LED zelf verbruikt daarna vaak 7 tot 9 W.',
body: `<h2>Officiële equivalentietabel</h2>
<p>Bron: Gedelegeerde Verordening (EU) 2019/2015, bijlage V, tabel 7 (zelfde waarden als de vroegere Verordening (EG) 244/2009, tabel 6) – minimale lichtstroom om "vervangt een gloeilamp van X W" te mogen vermelden.</p>
<table><thead><tr><th>Gloeilamp</th><th>Minimaal (lm)</th><th>Typisch LED-vermogen</th></tr></thead><tbody>
<tr><td>25 W</td><td>249</td><td>2,5–3 W</td></tr><tr><td>40 W</td><td>470</td><td>4–5 W</td></tr><tr><td>60 W</td><td>806</td><td>7–9 W</td></tr><tr><td>75 W</td><td>1.055</td><td>10–12 W</td></tr><tr><td>100 W</td><td>1.521</td><td>13–16 W</td></tr></tbody></table>
<p>Het LED-vermogen is een bereik uit actuele datasheets (bijv. Philips 8 W A60 = 806 lm, dus 100 lm/W), geen normwaarde.</p>
<h2>Lichtopbrengst en energielabel</h2>
<p>Lichtopbrengst = lumen ÷ watt. Sinds 1 september 2021 geldt het herschaalde label A–G (Verordening (EU) 2019/2015). Klasse A begint rond 210 lm/W; de meeste standaard-LED's zitten in E of F (85–135 lm/W). Elke lamp staat in de EU-databank EPREL (QR-code op het label).</p>
<h2>Formule voor de stroomkosten</h2>
<p>Kosten per jaar = watt × uren per dag × 365 ÷ 1000 × prijs per kWh.</p>
<p>Voorbeeld, 3 uur per dag: gloeilamp 60 W = 65,7 kWh/jaar; LED 8 W = 8,8 kWh/jaar. Besparing: 56,9 kWh per lamp per jaar – vermenigvuldig met het kWh-tarief op uw energierekening.</p>`},
{
path: 'gidsen/lampfittingen-e27-e14-gu10', article: true, kicker: 'Gids', title: 'Lampfittingen herkennen: E27, E14, GU10, GU5.3 (MR16), G9',
description: 'Bepaal uw lampfitting in seconden: schroeffittingen E27 en E14, pinfittingen GU10 (230 V) en GU5.3 (12 V), G9 – met diameter, spanning en gebruik.',
h1: 'Lampfittingen: E27, E14, GU10…', lead: 'De letter geeft het type (E = Edison-schroefdraad, G = pinnen, B = bajonet), het getal de diameter of pinafstand in millimeter.',
body: `<table><thead><tr><th>Fitting</th><th>Type</th><th>Maat</th><th>Gebruik</th></tr></thead><tbody>
<tr><td><strong>E27</strong></td><td>Grote schroeffitting</td><td>27 mm</td><td>Plafondlampen, staande en tafellampen – standaard</td></tr>
<tr><td><strong>E14</strong></td><td>Kleine schroeffitting</td><td>14 mm</td><td>Kaarslampen, nachtlampjes, koelkast</td></tr>
<tr><td><strong>GU10</strong></td><td>2 pinnen met voetjes, draaien</td><td>10 mm</td><td>Inbouwspots op 230 V</td></tr>
<tr><td><strong>GU5.3</strong> (MR16)</td><td>2 dunne pinnen, insteken</td><td>5,3 mm</td><td>Spots op 12 V, met transformator</td></tr>
<tr><td><strong>G9</strong></td><td>2 lusvormige pinnen</td><td>9 mm</td><td>Kleine designlampen, 230 V</td></tr>
<tr><td><strong>G4</strong></td><td>2 pinnen</td><td>4 mm</td><td>Kleine 12-V-lampjes</td></tr>
<tr><td><strong>B22</strong></td><td>Bajonet</td><td>22 mm</td><td>Oudere armaturen en Britse lampen. <a href="/nl/gidsen/e27-vs-b22/">E27 vs B22</a></td></tr></tbody></table>
<h2>GU10 of GU5.3?</h2>
<p>GU10 heeft dikke pinnen met voetjes en draait u vast: netspanning, geen trafo. GU5.3 heeft dunne rechte pinnen en steekt u in: 12 V met een trafo in het plafond. Een 230-V-lamp op een 12-V-trafo brandt niet; een 12-V-lamp op 230 V gaat stuk.</p>
<h2>Voor u koopt</h2>
<ul><li>Afmetingen: LED-lampen zijn vaak langer dan de oude lamp.</li><li>Lichtstroom in lumen (zie <a href="/nl/gidsen/lumen-watt/">lumen of watt</a>).</li><li>Kleurtemperatuur en kleurweergave (Ra ≥ 90 voor keuken en badkamer).</li><li>"Dimbaar" alleen met een geschikte dimmer.</li></ul>`},
{
path: 'gidsen/kleurtemperatuur-kelvin', article: true, kicker: 'Gids', title: 'Kleurtemperatuur: 2700 K, 3000 K, 4000 K of 6500 K – per ruimte',
description: 'Wat warm wit, neutraal wit en daglicht in kelvin betekenen, hoe u de code 827/930 leest en welke kleurtemperatuur bij welke ruimte past.',
h1: '2700 kelvin: warm wit', lead: '2700 K is warm wit, dicht bij een oude gloeilamp, voor woonkamer, slaapkamer en eettafel. Het is niet zuiniger dan 4000 K: bij dezelfde lumen verandert alleen de tint.',
body: `<table><thead><tr><th>Kelvin</th><th>Verpakking</th><th>Gebruik</th></tr></thead><tbody>
<tr><td>2200–2700 K</td><td>Extra warm wit / warm wit</td><td>Woonkamer, slaapkamer, eetkamer</td></tr>
<tr><td>3000 K</td><td>Warm wit</td><td>Keuken, gang, badkamer</td></tr>
<tr><td>4000 K</td><td>Neutraal wit</td><td>Aanrecht, werkkamer, kelder</td></tr>
<tr><td>5000–6500 K</td><td>Daglicht</td><td>Werkplaats, garage</td></tr></tbody></table>
<p>De driecijferige code combineert kleurweergave en kelvin: "827" = Ra 80+, 2700 K; "930" = Ra 90+, 3000 K; "840" = Ra 80+, 4000 K.</p>
<h2>Per ruimte</h2>
<ul><li><strong>Woon- en slaapkamer:</strong> 2700 K.</li><li><strong>Keuken:</strong> 3000 K algemeen, 4000 K onder de bovenkastjes.</li><li><strong>Badkamerspiegel:</strong> 3000–4000 K met Ra 90.</li><li><strong>Werkkamer:</strong> 4000 K aan het bureau.</li><li><strong>Kelder, werkplaats:</strong> 4000–6500 K.</li></ul>
<p>Houd één kleurtemperatuur per ruimte: 2700 K en 4000 K in hetzelfde zichtveld ogen allebei vreemd.</p>`},
{
path: 'gidsen/kleurweergave-cri-ra', article: true, kicker: 'Gids', title: 'Ra-waarde verlichting: wat betekent Ra 80, 90 of 95?',
description: 'De Ra-waarde (CRI) van verlichting loopt van 0 tot 100. Wettelijk minimum voor led: Ra 80. Ra 90 voor keuken, huid en hout. Zo leest u de code 827 of 930.',
h1: 'Ra-waarde van verlichting', lead: 'De Ra-waarde, ook CRI, zegt hoe natuurlijk kleuren ogen onder een lamp. Gloeilamp en daglicht: 100. Voor een ledlamp voor algemeen gebruik is Ra 80 het wettelijke minimum (EU 2019/2020). Voor keuken en badkamer loont Ra 90.',
body: `<table><thead><tr><th>Ra</th><th>Betekenis</th><th>Bron</th></tr></thead><tbody>
<tr><td>80</td><td>Wettelijk minimum voor LED-lampen voor algemene verlichting</td><td>Verordening (EU) 2019/2020</td></tr>
<tr><td>80</td><td>Minimum voor werkplekken binnen (kantoor)</td><td>EN 12464-1</td></tr>
<tr><td>90+</td><td>Huid, voedsel en hout ogen natuurlijk</td><td>"High CRI"-lijnen van fabrikanten</td></tr>
<tr><td>95+</td><td>Kleurkritisch werk: schilderen, foto</td><td>Speciale lampen</td></tr></tbody></table>
<h2>Wat is R9?</h2>
<p>Ra is het gemiddelde van 8 pastelkleuren. R9 meet verzadigd rood apart – vaak de zwakte van LED. Een lamp met Ra 80 kan een R9 rond nul hebben: de huid oogt grauw. Kijk bij high-CRI-lampen naar R9 &gt; 50 in de datasheet.</p>
<h2>Waar Ra 90 loont</h2><ul><li>Badkamerspiegel en kaptafel</li><li>Aanrecht</li><li>Ruimtes met kunst of hout</li></ul><p>In gang of kelder volstaat Ra 80.</p>`},
{
path: 'gidsen/ip-beschermingsgraad-badkamer-buiten', article: true, kicker: 'Gids', title: 'IP-codes voor verlichting: badkamerzones in Nederland (NEN 1010) en België (AREI)',
description: 'Wat IP44, IP65 en IP67 betekenen (IEC 60529), welke IP-code elke badkamerzone vraagt volgens NEN 1010 en het AREI/RGIE, en de Belgische keuring.',
h1: 'IP-codes: badkamer en buiten', lead: 'De IP-code (IEC/EN 60529) heeft twee cijfers: het eerste voor vaste deeltjes (0–6), het tweede voor water (0–9). "X" = niet getest.',
body: `<table><thead><tr><th>Code</th><th>Waterbescherming</th><th>Gebruik</th></tr></thead><tbody>
<tr><td>IP20</td><td>geen</td><td>Droge binnenruimtes</td></tr>
<tr><td>IP44</td><td>Spatwater uit alle richtingen</td><td>Badkamer zone 2, overdekte buitenmuur</td></tr>
<tr><td>IP65</td><td>Waterstralen</td><td>Onbeschut buiten</td></tr>
<tr><td>IP67</td><td>Tijdelijk onderdompelen tot 1 m</td><td>Badkamer zone 0, grondspots</td></tr>
<tr><td>IP68</td><td>Langdurig onderdompelen (volgens fabrikant)</td><td>Vijver, zwembad</td></tr></tbody></table>
<h2>Nederland: NEN 1010, deel 7-701</h2>
<ul><li><strong>Zone 0</strong> (binnen bad of douchebak): minimaal IPX7, alleen SELV tot 12 V AC.</li>
<li><strong>Zone 1</strong> (boven bad/douche tot 2,25 m): minimaal IPX4 (IPX5 bij reiniging met waterstralen).</li>
<li><strong>Zone 2</strong> (0,6 m rond zone 1): minimaal IPX4.</li></ul>
<p>Alle groepen in de badkamer moeten beveiligd zijn met een aardlekschakelaar van maximaal 30 mA.</p>
<h2>België: AREI / RGIE</h2>
<ul><li><strong>Volume 0</strong> (binnen bad of douchebak): ZLVS tot 12 V AC, IPX7.</li>
<li><strong>Volume 1</strong> (boven bad/douche tot 2,25 m): ZLVS tot 12 V AC, IPX4.</li>
<li><strong>Volume 2</strong> (0,6 m rond volume 1): vaste armaturen IPX4 op minstens 1,60 m hoogte, of ZLVS tot 25 V AC.</li>
<li><strong>Volume 3</strong> (2,4 m voorbij volume 2): IPX1.</li></ul>
<p>Alle elektrische uitrusting in de badkamer hangt achter een extra differentieelschakelaar van maximaal 30 mA, buiten de badkamer geplaatst. Bron: AREI Boek 1 (2020), badkamers, zoals samengevat door de erkende keuringsorganismen.</p>
<p>Een nieuwe of grondig gewijzigde huishoudelijke installatie moet vóór ingebruikname gekeurd worden door een erkend keuringsorganisme, en ook bij verkoop van een woning is een keuringsverslag verplicht. Een lamp vervangen valt daar uiteraard niet onder.</p>`},
{
path: 'gidsen/dimbare-led-lampen', article: true, kicker: 'Gids', title: 'Dimbare LED-lampen: fase-aansnijding, fase-afsnijding, flikkeren en zoemen',
description: 'Waarom LED-lampen op een dimmer flikkeren of zoemen: fase-aansnijding vs. fase-afsnijding, minimale belasting, compatibiliteitslijsten en oplossingen.',
h1: 'Dimbare LED en dimmers', lead: 'Een niet-dimbare LED op een dimmer kan flikkeren, zoemen of vroeg stukgaan. Een dimbare LED op een oude dimmer ook: beide moeten passen.',
body: `<h2>Drie controles</h2>
<ol><li><strong>De lamp is "dimbaar"</strong> volgens verpakking en datasheet.</li>
<li><strong>De dimmer is geschikt voor LED.</strong> Oude gloeilampdimmers werken meestal met fase-aansnijding en een minimale belasting van 20–60 W; drie LED's van 5 W (15 W) zitten daaronder en flikkeren. LED-dimmers werken meestal met fase-afsnijding en aanvaarden kleine belastingen.</li>
<li><strong>Belasting binnen de grenzen.</strong> Gebruik de LED-waarde op de dimmer, niet de gloeilampwaarde.</li></ol>
<p>Fabrikanten van dimmers publiceren compatibiliteitslijsten per lampmodel. Een schakelaar vervangen door een dimmer is werk aan de installatie: volg NEN 1010 (Nederland) of het AREI (België), schakel eerst de groep uit en controleer of alles spanningsloos is.</p>
<table><thead><tr><th>Symptoom</th><th>Oorzaak</th><th>Oplossing</th></tr></thead><tbody>
<tr><td>Flikkeren op lage stand</td><td>Minimale belasting niet gehaald</td><td>LED-dimmer (fase-afsnijding), minimumstand instellen</td></tr>
<tr><td>Zoemen</td><td>Fase-aansnijding met LED-driver</td><td>Fase-afsnijdingsdimmer</td></tr>
<tr><td>Nagloeien als de lamp uit is</td><td>Lekstroom via dimmer of slimme schakelaar</td><td>Dimmer met nulleider of belastingscorrector</td></tr>
<tr><td>Dimt niet onder 50 %</td><td>Combinatie niet compatibel</td><td>Compatibiliteitslijst raadplegen</td></tr></tbody></table>`},
{
path: 'handleidingen/lux-lumen-per-ruimte-berekenen', article: true, kicker: 'Handleiding', title: 'Hoeveel licht heeft een ruimte nodig? Lux en lumen berekenen (EN 12464-1)',
description: 'Aanbevolen verlichtingssterkte in lux per ruimte, gebaseerd op EN 12464-1, en de formule van lux naar lumen – met rekenvoorbeelden voor keuken en woonkamer.',
h1: 'Lux en lumen per ruimte berekenen', lead: 'Lux (lx) = lumen per vierkante meter: hoeveel licht er op een oppervlak valt.',
body: `<p>Voor woningen bestaat geen bindende norm. De waarden voor werkvlakken komen uit EN 12464-1 (verlichting van werkplekken binnen, bijv. 500 lx voor lezen en schrijven); de woonwaarden zijn gangbare ontwerpwaarden.</p>
<table><thead><tr><th>Ruimte</th><th>Lux</th></tr></thead><tbody>
<tr><td>Gang, trap</td><td>100–150</td></tr><tr><td>Woonkamer (algemeen)</td><td>100–200</td></tr><tr><td>Slaapkamer (algemeen)</td><td>100–150</td></tr><tr><td>Keuken (algemeen)</td><td>200–300</td></tr><tr><td>Aanrecht, lezen, bureau</td><td>500</td></tr><tr><td>Badkamerspiegel</td><td>300–500</td></tr><tr><td>Werkbank</td><td>500–750</td></tr></tbody></table>
<h2>De formule</h2>
<p>Benodigde lumen = gewenste lux × oppervlakte (m²) ÷ rendement.</p>
<p>Het rendement (0,5–0,6 in een gewone woning met lichte muren) houdt rekening met licht dat muren, plafond en kappen opslorpen. Bij donkere muren: 0,5.</p>
<h2>Voorbeeld keuken</h2>
<p>3 × 4 m = 12 m², doel 300 lx: 300 × 12 ÷ 0,55 = <strong>6.545 lm</strong>. Met GU10-LED's van 350 lm: 6.545 ÷ 350 ≈ <strong>19 spots</strong> – of minder spots plus LED-strips onder de bovenkastjes voor 500 lx op het aanrecht.</p>
<h2>Voorbeeld woonkamer</h2>
<p>4 × 5 m = 20 m², doel 150 lx: 150 × 20 ÷ 0,55 = <strong>5.455 lm</strong>, ongeveer 7 lampen van 806 lm (60-W-equivalent), verdeeld over plafond en staande lampen.</p>
<h2>Nameten</h2>
<p>Een luxmeter-app op de smartphone geeft een richtwaarde (±10–20 % afhankelijk van het toestel). Meet op tafel- of werkhoogte, licht aan, gordijnen dicht.</p>`},
{
path: 'handleidingen/halogeen-gu10-mr16-vervangen-door-led', article: true, kicker: 'Handleiding', title: 'Halogeenspots GU10 en MR16 (GU5.3) vervangen door LED',
description: 'Stap voor stap: GU10 (230 V) en GU5.3/MR16 (12 V) onderscheiden, lumen en stralingshoek kiezen, problemen met trafo en dimmer oplossen.',
h1: 'Halogeenspots vervangen door LED', lead: 'Om een MR16-halogeenspot van 50 W te vervangen moet een LED minstens 540 lm geven in een kegel van 90°, voor een GU10 (PAR16, 230 V) van 50 W 300 lm (Verordening (EU) 1194/2012). Vergelijk lumen, geen watt.',
body: `<h2>1. Spot herkennen</h2>
<ul><li><strong>GU10:</strong> twee korte pinnen met voetjes, vastdraaien. 230 V, geen trafo.</li><li><strong>MR16 (GU5.3):</strong> twee dunne rechte pinnen, insteken. 12 V via een trafo in het plafond.</li></ul>
<h2>2. Lichtstroom kiezen</h2>
<table><thead><tr><th>Vervangen halogeenspot</th><th>Minimale lichtstroom Φ90°</th></tr></thead><tbody><tr><td>GU10 (PAR16, 230 V), 35 W</td><td>200 lm</td></tr><tr><td>GU10 (PAR16, 230 V), 50 W</td><td>300 lm</td></tr><tr><td>MR16 (GU5.3, 12 V), 35 W</td><td>300 lm</td></tr><tr><td>MR16 (GU5.3, 12 V), 50 W</td><td>540 lm</td></tr></tbody></table>
<p>Bron: Verordening (EU) 1194/2012, bijlage III, tabel 6 (nu tabel 4 van Gedelegeerde Verordening (EU) 2019/2015); voor LED's nog maal de lumenbehoudfactor en onder 20° stralingshoek maal 0,8–0,9. Behoud de stralingshoek (meestal 36–40°) en kies 2700–3000 K voor warm halogeenlicht.</p>
<h2>3. MR16: de trafo-valkuil</h2>
<p>Oude elektronische halogeentrafo's vragen vaak 20–35 W minimale belasting. Eén LED van 4 W zit daaronder: flikkeren of geen licht. Oplossing: een LED-driver voor het totale vermogen, of overschakelen op GU10-fittingen op 230 V (werk aan de installatie: NEN 1010 / AREI).</p>
<h2>4. Dimmer</h2><p>Zie <a href="/nl/gidsen/dimbare-led-lampen/">dimbare LED</a>: dimbare LED's en een fase-afsnijdingsdimmer.</p>
<h2>5. Veiligheid</h2><p>Schakel de groep uit en laat halogeenlampen afkoelen – ze worden ruim 100 °C heet. Let bij inbouwspots in geïsoleerde plafonds op de markering voor afdekking met isolatie.</p>`},
{
path: 'affiliatebeleid', kicker: 'Transparantie', title: 'Affiliatebeleid | 1 pièce 1 ampoule', description: 'Hoe 1piece1ampoule.fr zich financiert en hoe affiliate-links worden aangeduid.',
h1: 'Affiliatebeleid', lead: 'Sommige links op de Nederlandstalige pagina’s zijn affiliate-links. Zo werken ze.',
body: `<p>1piece1ampoule.fr is een onafhankelijke website. Sommige Nederlandstalige pagina’s bevatten partnerlinks naar Amazon.nl (Amazon Associates, tag manuso0607-21) en, via Awin, naar Besselink Licht en Lampen24 (Lampen24.be voor onze lezers in België). Koop je na een klik, dan ontvangen wij een kleine commissie; de prijs voor jou verandert niet. Deze links zijn als reclame aangeduid en hebben <code>rel="sponsored nofollow"</code>. Commissies beïnvloeden onze beoordelingen niet: we kiezen op gepubliceerde gegevens (lumen, Ra, spanning, energieklasse). Zonder gecontroleerde prijs toont de knop geen bedrag.</p>`},
{
path: 'colofon', kicker: 'Juridisch', title: 'Colofon en wettelijke vermeldingen | 1 pièce 1 ampoule', description: 'Uitgever, hosting en aansprakelijkheid van 1piece1ampoule.fr (Nederlandstalige editie).',
h1: 'Colofon', lead: 'Wettelijke vermeldingen.',
body: `<h2>Uitgever</h2><p>Emmanuel Sauvage (particulier, uitgever), 59193 Erquinghem-Lys, Frankrijk.<br>E-mail: <a href="mailto:contact@1piece1ampoule.fr">contact@1piece1ampoule.fr</a><br>Website: <a href="https://emmanuelsauvage.fr/">emmanuelsauvage.fr</a></p>
<p>De uitgever is gevestigd in Frankrijk; het Franse recht is van toepassing (LCEN, art. 6).</p>
<h2>Hosting</h2><p>o2switch, Clermont-Ferrand, Frankrijk.</p>
<h2>Aansprakelijkheid</h2><p>We controleren de inhoud zorgvuldig, maar normen en producten veranderen. Werk aan de elektrische installatie hoort bij een erkend installateur.</p>`},
{
path: 'privacy', kicker: 'Juridisch', title: 'Privacyverklaring | 1 pièce 1 ampoule', description: 'Welke persoonsgegevens 1piece1ampoule.fr verwerkt (Google Analytics alleen met toestemming), rechtsgrond en uw rechten onder de AVG/GDPR.',
h1: 'Privacyverklaring', lead: 'We verzamelen zo weinig mogelijk: bezoekersstatistieken alleen met uw toestemming.',
body: `<h2>Verwerkingsverantwoordelijke</h2><p>Emmanuel Sauvage, 59193 Erquinghem-Lys, Frankrijk – <a href="mailto:contact@1piece1ampoule.fr">contact@1piece1ampoule.fr</a>.</p>
<h2>Verwerkte gegevens</h2><ul><li><strong>Bezoekersstatistieken (Google Analytics 4)</strong>, alleen na "Alles accepteren" of het aanvinken van "Statistieken". Google Consent Mode staat standaard op "denied". Gegevens: bekeken pagina's, globale locatie, type toestel, klikken op partnerlinks.</li><li><strong>Uw cookiekeuze</strong>, in uw browser (localStorage-sleutel <code>cookie_consent_v1</code>).</li><li><strong>E-mails</strong> die u ons stuurt, alleen zolang nodig om te antwoorden.</li></ul>
<h2>Rechtsgrond</h2><p>Toestemming (art. 6 lid 1 a AVG) voor statistieken; gerechtvaardigd belang (art. 6 lid 1 f) voor het beantwoorden van berichten.</p>
<h2>Bewaartermijn</h2><p>Google Analytics-gegevens: 14 maanden. Uw cookiekeuze blijft in uw browser tot u ze wist of wijzigt.</p>
<h2>Ontvangers</h2><p>Google Ireland Ltd. (Analytics).</p>
<h2>Uw rechten</h2><p>Inzage, rectificatie, wissing, beperking, bezwaar, intrekking van toestemming op elk moment (<a href="/nl/cookies/">cookie-instellingen</a>). Klacht bij de CNIL (Frankrijk), de Autoriteit Persoonsgegevens (Nederland) of de Gegevensbeschermingsautoriteit (België).</p>`},
{
path: 'cookies', kicker: 'Juridisch', title: 'Cookiebeleid | 1 pièce 1 ampoule', description: 'Welke cookies 1piece1ampoule.fr gebruikt en hoe u uw keuze wijzigt.',
h1: 'Cookiebeleid', lead: 'Vóór uw keuze wordt alleen de strikt noodzakelijke opslag gebruikt.',
body: `<table><thead><tr><th>Naam</th><th>Doel</th><th>Duur</th><th>Toestemming</th></tr></thead><tbody>
<tr><td>cookie_consent_v1 (localStorage)</td><td>Onthoudt uw keuze</td><td>tot u ze wist</td><td>niet nodig</td></tr>
<tr><td>_ga, _ga_*</td><td>Google Analytics 4 bezoekersstatistieken</td><td>tot 13 maanden</td><td>nodig</td></tr></tbody></table>
<p>"Alles accepteren" en "Alles weigeren" staan gelijkwaardig naast elkaar. Weigeren beperkt het gebruik van de website niet.</p>
<p><button type="button" class="en-amz" onclick="window.__showCookiePreferences && window.__showCookiePreferences()">Cookie-instellingen wijzigen</button></p>`},
];
NL_PAGES.splice(NL_PAGES.findIndex((p) => p.path === 'handleidingen/halogeen-gu10-mr16-vervangen-door-led') + 1, 0, ...TUTOS_TR.nl);
NL_PAGES.push(...TR_PRIORITY_NL);
NL_PAGES.push(...TR_PRIORITY_LOT2_NL);
NL_PAGES.push(...TR_LOT3_NL);
NL_PAGES.push(...INTENT_NL);
