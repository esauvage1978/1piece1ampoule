// NL lot 6 (12/11/2026): de laatste 7 FR-pagina's, vanuit tr-lot6-en.ts.
// Zelfde feiten, cijfers en scripts. Kosten blijven Franse prijzen. Geen SVG.
// Amazon.nl alleen via zoek-URL. Badkamer: NF C 15-100 als bron; NEN 1010 (NL) en AREI (BE).
import type { EnPage } from './en';

const nlS = (q: string, label: string) =>
  `<a class="en-amz" href="https://www.amazon.nl/s?k=${encodeURIComponent(q)}&tag=manuso0607-21" rel="nofollow sponsored noopener" target="_blank" data-product="${label}">Zoeken op Amazon.nl</a>`;
const card = (flag: string, title: string, text: string, link: string) => `<div class="en-card"><p class="en-flag">${flag}</p><h3>${title}</h3><p>${text}</p>${link}</div>`;
const note = `<p class="en-note">Prijzen en beschikbaarheid wijzigen: controleer ze voor u koopt. Als Amazon-partner verdienen wij aan in aanmerking komende aankopen.</p>`;
const SAFETY = `<p class="en-note"><strong>Netspanning:</strong> werk aan een plafondlamp, een dimmer of de groepenkast (zekeringkast) doet u <strong>met de stroom uit</strong> (automaat uit, spanningsloosheid gecontroleerd). Bent u daar niet bekwaam voor, raak de netklemmen dan niet aan: schakel een elektricien in.</p>`;

const TROUBLESHOOT_NL: EnPage = {
  path: 'gidsen/led-flikker-zoem-nagloeien', article: true, kicker: 'Storingengids',
  title: 'Ledlamp flikkert uit, zoemt of blijft branden: storingen oplossen',
  description: 'Led die flikkert in de uit-stand, zoemende dimmer, ledstrip die blijft branden of te warm wordt, Steinel-sensor die niet uitschakelt: oorzaken, moeilijkheid, tijd en oplossingen.',
  h1: 'Led: flikkeren, zoemen, nagloeien',
  lead: 'Een ledlamp die flikkert terwijl hij uit staat, een dimmer die zoemt, een strip die blijft branden of te warm wordt, een Steinel-sensor die niet meer uitschakelt: in de meeste gevallen is de oorzaak bekend en is het een kwestie van minuten. De tabel geeft de orde van grootte; de paragrafen leggen uit wat u kunt doen.',
  body: `<p>Onderdeel van onze <a href="https://1piece1ampoule.fr/guides/">gidsen over verlichting en storingen</a>.</p>
<h2>Tabel met storingen</h2>
<table><thead><tr><th>Probleem</th><th>Moeilijkheid</th><th>Tijd</th><th>Kosten (Franse prijzen)</th><th>Gereedschap</th></tr></thead><tbody>
<tr><td>Led flikkert of gloeit zwak in de uit-stand (lekstroom)</td><td><strong>Makkelijk (1/5)</strong></td><td>5 min</td><td>≈ € 4</td><td>Geïsoleerde schroevendraaier, bypass van Legrand of Shelly, of bipolaire condensator 0,47 µF</td></tr>
<tr><td>Dimmer knettert of zoemt met leds</td><td><strong>Makkelijk tot middelmatig (2/5)</strong></td><td>10–30 min</td><td>€ 15–35</td><td>Schroevendraaier, ledgeschikte dimmer «alle lampen»</td></tr>
<tr><td>Ledstrip blijft zwak branden of wordt te warm</td><td><strong>Middelmatig (3/5)</strong></td><td>15–45 min</td><td>€ 5–25</td><td>Multimeter, ledvoeding met het juiste vermogen, aluminiumprofiel</td></tr>
<tr><td>Steinel-sensor (NightMatic, IS…) blijft aan of schakelt niet uit</td><td><strong>Makkelijk (2/5)</strong></td><td>5–15 min</td><td>€ 0</td><td>Schroevendraaier, handleiding van Steinel, schemersensor afplakken</td></tr>
</tbody></table>
<p>Tijden en kosten zijn indicatief voor een handige doe-het-zelver. Schakel altijd de groep uit in de groepenkast voor u een lasdoos of een armatuur opent.</p>
${SAFETY}
<h2>De oplossing voor circa 95 % van het nagloeien en flikkeren in de uit-stand (≈ € 4, 5 min)</h2>
<p>Heeft de schakelaar een <strong>controlelampje</strong>, is het een <strong>slimme schakelaar zonder nul</strong>, of laat een dimmer een beetje stroom door, dan loopt er ook in de stand «uit» een kleine stroom door de led. Die laadt de interne condensator op. Daarna <strong>flitst</strong> de lamp, of hij blijft zwak branden.</p>
<p>Twee gelijkwaardige oplossingen, geplaatst <strong>bij de plafondlamp</strong> (tussen fase en nul, of zoals de handleiding aangeeft), met de stroom uit:</p>
<ul><li><strong>Bypass of compensatiemodule</strong> van Legrand of Shelly (ongeveer € 4 in Frankrijk): gemaakt voor modules zonder nul en voor schakelaars met controlelampje; de aansluiting staat in de handleiding.</li>
<li><strong>Bipolaire condensator</strong> van 0,47 µF (450 V), parallel aan de lamp: hetzelfde idee, de lekstroom afleiden. Hebt u een dimmer, controleer dan of de condensator daarbij past.</li></ul>
<p>Twijfelt u? Vervang de schakelaar met controlelampje door een exemplaar zonder lampje, of gebruik een <strong>slimme lamp</strong> en laat de schakelaar aan staan (zie <a href="/nl/gidsen/slimme-schakelaar-zonder-nul-compatibiliteit/">slimme schakelaars zonder nul</a> en onze <a href="https://1piece1ampoule.fr/meilleur/meilleure-ampoule-connectee/">vergelijking van slimme lampen</a>). De symptomen in detail: <a href="https://1piece1ampoule.fr/articles/ampoule-led-reste-allumee-faiblement/">lamp die zwak blijft branden</a> en <a href="https://1piece1ampoule.fr/articles/ampoule-led-qui-clignote/">lamp die flikkert</a>.</p>
<h2>Dimmer: zoemen en flikkeren</h2>
<p>Het geluid komt van de afgekapte spanning: de elektronica van de led trilt. Op een lage stand veroorzaakt een <strong>niet-dimbare</strong> lamp, of een dimmer met fase-aansnijding, zoemen en flikkeren.</p>
<ul><li>Alleen <strong>dimbare</strong> lampen.</li><li>Een <strong>ledgeschikte</strong> dimmer (fase-afsnijding / «alle lampen») met een instelbaar minimum.</li><li>De totale belasting boven het minimum van de dimmer (bij led vaak 5–10 W).</li></ul>
<p>Volledige gids: <a href="/nl/gidsen/dimbare-led-lampen/">dimbare lampen en dimmers</a>. Artikel: <a href="https://1piece1ampoule.fr/articles/ampoule-led-gresille-bourdonne/">zoemende led</a>.</p>
<h2>Ledstrip: blijft branden of wordt te warm</h2>
<p>Een strip die <strong>zwak blijft branden</strong> na het uitschakelen heeft meestal dezelfde oorzaak (lekstroom): een bypass op de klemmen van de voeding, of een schakelaar zonder controlelampje. <strong>Oververhitting</strong> van de strip of de voeding komt ergens anders vandaan: een te krappe voeding, een te dunne kabel, of een strip die zonder <strong>aluminiumprofiel</strong> is geplakt en zijn warmte niet kwijt kan.</p>
<ul><li>Voeding op <strong>125 %</strong> van het vermogen van de strip, van degelijke kwaliteit.</li><li>Een doorlopend aluminiumprofiel is nodig bij krachtige strips.</li><li>Rol een strip nooit op terwijl hij onder spanning staat (opgerold betekent oververhitting).</li></ul>
<p><a href="https://1piece1ampoule.fr/articles/installer-ruban-led/">Een ledstrip monteren</a> · <a href="https://1piece1ampoule.fr/outils/calculateur-ruban-led-alimentation-24v/">rekenhulp voor de ledstrip</a>.</p>
<h2>Steinel-sensor die vastzit (licht dat niet uitschakelt)</h2>
<p>Bij een <strong>NightMatic 2000</strong> of een inbouwsensor zoals de <strong>IS 360</strong> is een lamp die bij klaarlichte dag aan blijft bijna altijd een kwestie van de <strong>schemersensor</strong>: die «ziet» het licht dat de lamp zelf terugkaatst, of verlichting in de buurt. Een nalooptijd op maximum kan ook op een storing lijken.</p>
<ul><li>Richt de schemercel <strong>weg</strong> van de bundel van de lamp (handleiding van Steinel).</li><li>Zet de luxdrempel lager, of plak een klein masker als de sensor licht van de buren oppikt.</li><li>Controleer de led-belasting (maximum bijvoorbeeld 350 W led; op de IS 360 meer dan 8 W): overbelasting kan het uitschakelen verstoren.</li><li>Zet nalooptijd en gevoeligheid op minimum en verhoog ze daarna stap voor stap.</li></ul>
<p>Vergelijking van de specificaties en de combinaties: <a href="/nl/gidsen/steinel-automatische-buitenverlichting/">buitenverlichting van Steinel</a>, <a href="https://1piece1ampoule.fr/guides/detecteurs-de-mouvement/">bewegingssensoren</a>, <a href="/nl/merken/steinel/">merkpagina Steinel</a>.</p>
<h2>Productideeën</h2>
${card('Dimmer', 'Ledgeschikte dimmer «alle lampen»', 'Beperkt het zoemen.', nlS('led dimmer fase-afsnijding', 'Leddimmer'))}
${card('Bypass', 'Bypass zonder nul (Legrand, Shelly)', 'Tegen nagloeien.', nlS('Shelly bypass led zonder nul', 'Bypass'))}
${card('Lamp', 'Dimbare E27-ledlamp, 806 lm', 'Een betrouwbare vervanger.', nlS('dimbare E27 ledlamp 806 lumen', 'Dimbare E27'))}
${card('Condensator', 'Compensatiecondensator voor led, 0,47 µF', 'Alternatief voor een bypass.', nlS('condensator 0.47uF 450V led', 'Condensator 0,47 µF'))}
${note}
<h2>Verder lezen</h2><p>Snelle test: zet de lamp in een ander armatuur. Volgt de storing de lamp, vervang hem dan. Zo niet, kijk naar de schakelaar, de dimmer of de voeding. Diagnose stap voor stap: <a href="/nl/gidsen/gu10-led-flikker-dimmer-diagnose/">flikkeren bij GU10 en E27</a>. Halogeenspots: <a href="/nl/handleidingen/halogeen-gu10-mr16-vervangen-door-led/">GU10 en MR16 zonder geflikker</a>. Badkamer (IP, zones): <a href="/nl/gidsen/badkamerzones-ip44-ip65/">badkamerzones</a>.</p>`,
};

const BATH_ROOMS: [string, string, number, number][] = [
  ['living', 'Woonkamer', 125, 20], ['kitchen', 'Keuken', 200, 12], ['bedroom', 'Slaapkamer', 100, 14], ['bath', 'Badkamer (algemeen)', 175, 6],
  ['mirror', 'Badkamerspiegel', 400, 1.2], ['hallway', 'Hal', 100, 8], ['office', 'Werkkamer', 300, 10], ['garage', 'Garage', 300, 18],
];
const BATH_ZONES_NL: EnPage = {
  path: 'gidsen/badkamerzones-ip44-ip65', article: true, kicker: 'Technische gids · norm',
  title: 'Badkamerzones 0, 1 en 2 (NF C 15-100) en IP44 / IP65',
  description: 'Badkamerzones 0, 1 en 2, IP44 en IP65 volgens de Franse NF C 15-100. In Nederland geldt de NEN 1010, in België het AREI; laat een elektricien toetsen. Plus omrekentool lux, lumen en watt.',
  h1: 'Badkamerzones: IP44, IP65 en NF C 15-100',
  lead: 'In Frankrijk legt de NF C 15-100 (deel 7-701, bad of douche) de zones vast waar water en elektriciteit elkaar raken. De IP-code van een armatuur moet bij de zone passen: het is geen marketinglabel. Deze gids vat zone 0, 1 en 2 samen, met een IP-tabel en een omrekentool van lux, lumen en watt per type ruimte. In Nederland geldt de NEN 1010, in België het AREI: laat de uitvoering door een elektricien toetsen.',
  body: `<p class="en-note">Deze pagina beschrijft de Franse norm NF C 15-100 (deel 7-701) als bron van de zonetabel. In Nederland geldt de NEN 1010, in België het AREI. Die regels lijken op de Franse indeling, maar ze zijn niet identiek. Laat de zone en het armatuur door een elektricien toetsen voor u iets aansluit.</p>
<h2>De zones in het kort</h2>
<p>Vereenvoudigde ijkpunten uit de NF C 15-100 (juni 2015): zone 1 loopt tot 2,25 m; zone 2 is een horizontale strook van 0,60 m rond zone 1. Meet vanaf de badkuip of de douchebak en lees de handleiding van het armatuur (IP44, IP65…). Laat een elektricien kijken als uw indeling afwijkt.</p>
<h2>Tabel zones en IP</h2>
<table><thead><tr><th>Zone</th><th>Grens</th><th>Minimale IP</th><th>Spanning / materiaal</th><th>In de praktijk</th></tr></thead><tbody>
<tr><td>Zone 0</td><td>In de badkuip of de douchebak</td><td><strong>IPX7</strong></td><td>SELV, maximaal 12 V wisselspanning of 30 V gelijkspanning, bron buiten de zones</td><td>230 V verboden voor verlichting</td></tr>
<tr><td>Zone 1</td><td>Boven zone 0, tot 2,25 m</td><td><strong>IPX4 (IPX5 bij horizontale waterstralen)</strong></td><td>Alleen SELV 12 V voor verlichtingsarmaturen</td><td>Geen 230 V</td></tr>
<tr><td>Zone 2</td><td>Strook van 0,60 m rond zone 1</td><td><strong>IPX4</strong></td><td>Klasse II + aardlekschakelaar 30 mA (in België: differentieelschakelaar), of SELV 12 V</td><td>Typische wandlamp IP44 boven de spiegel</td></tr>
<tr><td>Buiten de zones</td><td>De rest van de ruimte (de vroegere zone 3 is in 2015 geschrapt)</td><td><strong>Geen IP geëist door 7-701</strong></td><td>De gewone regels voor woningen</td><td>IP44 blijft een verstandige keuze bij de wastafel</td></tr>
</tbody></table>
<p><strong>IP44</strong> = spatwater; <strong>IP65</strong> = waterstralen, nuttig bij een stortdouche, buiten of bij een spot die erg bloot staat. Definities: <a href="/nl/gidsen/ip-beschermingsgraad-badkamer-buiten/">gids IP-codes</a>. Spiegel en kleur: <a href="/nl/zones/badkamerspiegel/">de spiegel verlichten</a>, <a href="/nl/gidsen/kleurtemperatuur-kelvin/">kelvin</a>, <a href="/nl/gidsen/kleurweergave-cri-ra/">CRI (Ra)</a>.</p>
<h2>Omrekentool lux, lumen en watt</h2>
<p>Kies een type ruimte (oppervlakte en comfortabele lux) of wijzig een van de drie waarden: de andere twee worden herberekend (K ≈ 2 voor algemene verlichting, led ≈ 100 lm/W). De methode in detail: <a href="/nl/handleidingen/lux-lumen-per-ruimte-berekenen/">lux per ruimte</a>.</p>
<div id="conv-bath">
<label>Type ruimte <select id="cv-room">${BATH_ROOMS.map(([id, l, lux, m2]) => `<option data-lux="${lux}" data-m2="${m2}" value="${id}"${id === 'bath' ? ' selected' : ''}>${l} (${lux} lx, ${String(m2).replace('.', ',')} m²)</option>`).join('')}</select></label>
<label>Lux <input id="cv-lux" max="2000" min="20" step="5" type="number" value="175"/></label>
<label>Oppervlakte (m²) <input id="cv-m2" max="80" min="0.5" step="0.1" type="number" value="6"/></label>
<label>Lumen (totale lichtstroom) <input id="cv-lm" max="100000" min="50" step="50" type="number" value="2100"/></label>
<label>Ledvermogen (W) <input id="cv-w" max="2000" min="1" step="1" type="number" value="21"/></label>
</div>
<p aria-live="polite" id="cv-hint">≈ 175 lx × 6 m² × K 2 → 2.100 lm → ≈ 21 W led</p>
<p>Wijzigt u lumen of watt, dan herberekent de tool de lux voor de gekozen oppervlakte (K = 2). Wijzigt u lux of de oppervlakte, dan worden lumen en watt herberekend.</p>
<script>(function(){var K=2,LM_W=100,lock=null;function el(i){return document.getElementById(i)}function num(v){return parseFloat(String(v).replace(',','.'))||0}function fmt(n){return Math.round(n).toLocaleString('nl-NL')}function fromLux(){var lux=num(el('cv-lux').value),m2=num(el('cv-m2').value),lm=lux*m2*K;el('cv-lm').value=Math.round(lm);el('cv-w').value=Math.max(1,Math.round(lm/LM_W));el('cv-hint').textContent='≈ '+fmt(lux)+' lx × '+m2.toFixed(1)+' m² × K '+K+' → '+fmt(lm)+' lm → ≈ '+fmt(lm/LM_W)+' W led'}function fromLm(){var lm=num(el('cv-lm').value),m2=num(el('cv-m2').value),lux=m2>0?lm/(m2*K):0;el('cv-lux').value=Math.round(lux);el('cv-w').value=Math.max(1,Math.round(lm/LM_W));el('cv-hint').textContent=fmt(lm)+' lm → ≈ '+fmt(lux)+' lx (oppervlakte '+m2.toFixed(1)+' m²) · ≈ '+fmt(lm/LM_W)+' W led'}function fromW(){el('cv-lm').value=Math.round(num(el('cv-w').value)*LM_W);fromLm()}el('cv-room').addEventListener('change',function(){var o=this.options[this.selectedIndex];el('cv-lux').value=o.getAttribute('data-lux');el('cv-m2').value=o.getAttribute('data-m2');fromLux()});el('cv-lux').addEventListener('input',function(){if(lock)return;lock='lux';fromLux();lock=null});el('cv-m2').addEventListener('input',function(){if(lock)return;lock='lux';fromLux();lock=null});el('cv-lm').addEventListener('input',function(){if(lock)return;lock='lm';fromLm();lock=null});el('cv-w').addEventListener('input',function(){if(lock)return;lock='w';fromW();lock=null});fromLux()})();</script>
<h2>Productideeën</h2>
${card('IP44', 'Wandlamp IP44 voor de badkamerspiegel', 'Zone 2 of buiten de zones.', nlS('led spiegellamp badkamer IP44', 'Spiegellamp IP44'))}
${card('IP65', 'Inbouwspot IP65 voor de badkamer', 'Vochtige, blootstaande plekken.', nlS('inbouwspot badkamer IP65', 'Inbouwspot IP65'))}
${card('IP44', 'Led-spiegellijst IP44', 'Licht van voren.', nlS('led spiegellamp balk IP44', 'Spiegellijst IP44'))}
${card('SELV', 'Waterdichte transformator 12 V voor led', 'Lage spanning voor zone 0 en 1.', nlS('12V led driver waterdicht IP67', 'Transformator SELV 12 V'))}
${note}
<h2>Verder lezen</h2><p>De hele ruimte: <a href="https://1piece1ampoule.fr/pieces/salle-de-bain/">verlichting in de badkamer</a>. Storingen bij led (nagloeien, zoemen): <a href="/nl/gidsen/led-flikker-zoem-nagloeien/">storingengids led</a>. Equivalentie van lampen: <a href="/nl/gidsen/lumen-watt/">lumen en watt</a>.</p>`,
};

const DIM_ROWS: [string, string, string, string, string, string, string][] = [
  ['leading', 'Fase-aansnijding (kapt het begin van de golf)', 'gu10', 'Dimbare GU10-led', 'risk', 'Hoog', 'Oude halogeendimmers: vaak geflikker. Vervang door fase-afsnijding.'],
  ['leading', 'Fase-aansnijding', 'e27', 'Dimbare E27-led', 'risk', 'Hoog', 'Zelfde probleem. Lampen «geschikt voor dimmer» werken soms, maar alleen bij een hoge belasting.'],
  ['leading', 'Fase-aansnijding', 'e14', 'Dimbare E14-led', 'risk', 'Hoog', 'Kleine lasten: vaak onder het minimum van de dimmer, dus geflikker onderaan het bereik.'],
  ['trailing', 'Fase-afsnijding (kapt het einde van de golf)', 'gu10', 'Dimbare GU10-led', 'ok', 'Laag', 'Aanbevolen combinatie voor spots in keuken en woonkamer.'],
  ['trailing', 'Fase-afsnijding', 'e27', 'Dimbare E27-led', 'ok', 'Laag', 'Stel het minimum van de dimmer in na de montage.'],
  ['trailing', 'Fase-afsnijding', 'e14', 'Dimbare E14-led', 'ok', 'Laag tot middelmatig', 'Tel de belasting op (meerdere lampen) om boven het minimum van 5–10 W te komen.'],
  ['universal', 'Leddimmer «alle lampen»', 'gu10', 'Dimbare GU10-led', 'ok', 'Zeer laag', 'De betrouwbaarste keuze om een oude dimmer te vervangen.'],
  ['universal', 'Alle lampen, led', 'e27', 'Dimbare E27-led', 'ok', 'Zeer laag', 'Meng geen lampmerken op dezelfde dimmer.'],
  ['universal', 'Alle lampen, led', 'e14', 'Dimbare E14-led', 'ok', 'Laag', 'Controleer de maximale belasting van de dimmer (een kroon met veel lampen).'],
  ['trailing', 'Fase-afsnijding', 'gu10', 'Niet-dimbare GU10-led', 'no', 'n.v.t.', 'Niet dimbaar: risico op geflikker of vroegtijdige uitval. Niet gebruiken.'],
];
const SCORE: Record<string, string> = { ok: '✓ Goede keuze', risk: '⚠ Risico', no: '✗ Vermijden' };
const btn = (cls: string, attr: string, v: string, label: string, on = false) => `<button type="button" class="${cls}" ${attr}="${v}" aria-pressed="${on}" style="margin:.15rem;padding:.2rem .6rem;border:1px solid #d6d3d1;border-radius:.4rem;${on ? 'font-weight:600;background:#fef3c7' : ''}">${label}</button>`;
const DIMMER_MATRIX_NL: EnPage = {
  path: 'gidsen/dimmer-led-matrix-gu10-e27-e14', article: true, kicker: 'Technische gids · dimmers',
  title: 'Matrix dimmer (fase-aansnijding / fase-afsnijding) × ledlamp: GU10, E14, E27',
  description: 'Dimmer met fase-aansnijding of fase-afsnijding en dimbare ledlampen GU10, E27 en E14: flikkerrisico en de goede combinaties, met filters.',
  h1: 'Dimmer × ledlamp: matrix tegen geflikker',
  lead: 'Fase-aansnijding (overgeërfd van halogeen) en fase-afsnijding (led) sturen niet dezelfde elektronica aan. Deze matrix kruist het type dimmer met de fitting (GU10, E27, E14) om het risico op geflikker in te schatten.',
  body: `<p>Uitgebreide gids: <a href="/nl/gidsen/dimbare-led-lampen/">dimbare lampen</a>.</p>
<h2>Filters</h2>
<div id="dim-filters"><span>Dimmer:</span> ${btn('dim-f', 'data-d', 'all', 'Alles', true)}${btn('dim-f', 'data-d', 'leading', 'Fase-aansnijding')}${btn('dim-f', 'data-d', 'trailing', 'Fase-afsnijding')}${btn('dim-f', 'data-d', 'universal', 'Alle lampen')}<br/><span>Lamp:</span> ${btn('bulb-f', 'data-b', 'all', 'Alles', true)}${btn('bulb-f', 'data-b', 'gu10', 'GU10')}${btn('bulb-f', 'data-b', 'e27', 'E27')}${btn('bulb-f', 'data-b', 'e14', 'E14')}</div>
<table><thead><tr><th>Dimmer</th><th>Lamp</th><th>Compatibiliteit</th><th>Flikkeren</th><th>Advies</th></tr></thead><tbody>
${DIM_ROWS.map(([d, dl, b, bl, s, f, n]) => `<tr class="dim-row" data-dimmer="${d}" data-bulb="${b}" data-score="${s}"><td>${dl}</td><td>${bl}</td><td><strong>${SCORE[s]}</strong></td><td>${f}</td><td>${n}</td></tr>`).join('\n')}
</tbody></table>
<script>(function(){var dSel='all',bSel='all';function paint(b,on){b.style.fontWeight=on?'600':'';b.style.background=on?'#fef3c7':'';b.setAttribute('aria-pressed',on?'true':'false')}function apply(){document.querySelectorAll('.dim-row').forEach(function(tr){var show=(dSel==='all'||dSel===tr.getAttribute('data-dimmer'))&&(bSel==='all'||bSel===tr.getAttribute('data-bulb'));tr.style.display=show?'':'none'})}document.querySelectorAll('.dim-f').forEach(function(b){b.addEventListener('click',function(){dSel=b.getAttribute('data-d');document.querySelectorAll('.dim-f').forEach(function(x){paint(x,x===b)});apply()})});document.querySelectorAll('.bulb-f').forEach(function(b){b.addEventListener('click',function(){bSel=b.getAttribute('data-b');document.querySelectorAll('.bulb-f').forEach(function(x){paint(x,x===b)});apply()})});apply()})();</script>
<h2>Productideeën</h2>
${card('Dimmer', 'Leddimmer met fase-afsnijding', 'Vervangt een halogeendimmer met fase-aansnijding.', nlS('led dimmer fase-afsnijding', 'Dimmer fase-afsnijding'))}
${card('GU10', 'Dimbare GU10-ledspots', 'Geschikt voor fase-afsnijding.', nlS('dimbare GU10 ledlamp', 'Dimbare GU10'))}
${note}
<h2>Gerelateerde tools en gidsen</h2><ul><li><a href="/nl/tools/halogen-led-equivalent-gu10-e27-lumen/">Equivalentie halogeen naar led</a></li><li><a href="/nl/gidsen/gu10-led-flikker-dimmer-diagnose/">Interactieve flikkerdiagnose</a></li><li><a href="/nl/gidsen/slimme-schakelaar-zonder-nul-compatibiliteit/">Slimme schakelaar zonder nul</a></li><li><a href="/nl/gidsen/led-flikker-zoem-nagloeien/">Storingen: zoemen en nagloeien</a></li><li><a href="/nl/gidsen/lampfittingen-e27-e14-gu10/">Lampfittingen</a></li></ul>`,
};

const KIT_MODULES = [
  { id: 'shelly-1l', name: 'Shelly 1L', neutre: false, dim: false, minW: 3, bypassLed: true, proto: 'Wi-Fi' },
  { id: 'shelly-d2', name: 'Shelly Dimmer 2', neutre: true, dim: true, minW: 1, bypassLed: false, proto: 'Wi-Fi' },
  { id: 'legrand', name: 'Legrand Céliane met Netatmo', neutre: false, dim: true, minW: 5, bypassLed: true, proto: 'Zigbee' },
  { id: 'aqara-h1', name: 'Aqara H1 (zonder nul)', neutre: false, dim: false, minW: 3, bypassLed: true, proto: 'Zigbee' },
  { id: 'hue', name: 'Philips Hue (lampen)', neutre: null, dim: true, minW: 0, bypassLed: false, proto: 'Zigbee / Bluetooth' },
  { id: 'sonoff-l2', name: 'Sonoff ZBMini-L2', neutre: false, dim: false, minW: 3, bypassLed: true, proto: 'Zigbee' },
];
const KIT_ROOMS = ['Woonkamer', 'Keuken', 'Slaapkamer', 'Hal', 'Badkamer', 'Werkkamer', 'Garage'];
const KIT_SCRIPT = `(function(){var modules=${JSON.stringify(KIT_MODULES)},rooms=${JSON.stringify(KIT_ROOMS)};var tbody=document.getElementById('kit-tbody');var modOpts=modules.map(function(m){return '<option value="'+m.id+'">'+m.name+'</option>'}).join('');var roomOpts=rooms.map(function(p){return '<option>'+p+'</option>'}).join('');function rowHtml(){return '<tr class="kit-row"><td><select class="kit-piece">'+roomOpts+'</select></td><td><input class="kit-n" type="number" min="1" value="2" style="width:4.5rem"/></td><td><input class="kit-w" type="number" min="1" step="0.5" value="5" style="width:4.5rem"/></td><td><select class="kit-neutre"><option value="non">Nee</option><option value="oui">Ja</option><option value="?">Weet ik niet</option></select></td><td><select class="kit-dim"><option value="non">Nee</option><option value="oui">Ja</option></select></td><td><select class="kit-mod">'+modOpts+'</select></td><td><button type="button" class="kit-del">Verwijderen</button></td></tr>'}function modById(id){for(var i=0;i<modules.length;i++)if(modules[i].id===id)return modules[i]}function recalc(){var counts={},bypass=0,warns=[],hue=false,netatmo=false,aqara=false,eco=document.getElementById('kit-eco').value;document.querySelectorAll('.kit-row').forEach(function(tr){var n=+tr.querySelector('.kit-n').value||1,w=+tr.querySelector('.kit-w').value||5,P=n*w,neutre=tr.querySelector('.kit-neutre').value,wantDim=tr.querySelector('.kit-dim').value==='oui',mid=tr.querySelector('.kit-mod').value,m=modById(mid),room=tr.querySelector('.kit-piece').value;if(!m)return;counts[mid]=(counts[mid]||0)+1;if(m.id==='hue')hue=true;if(m.id==='legrand')netatmo=true;if(m.id==='aqara-h1')aqara=true;if(m.neutre===true&&neutre==='non')warns.push('«'+room+'»: '+m.name+' heeft een nuldraad nodig. Kies Shelly 1L, Legrand 2-draads, Aqara H1 of Sonoff L2.');if(m.neutre===false&&neutre==='oui'&&mid==='shelly-1l')warns.push('«'+room+'»: met een nuldraad is een Shelly Dimmer 2 of een bedrade dimmer vaak stabieler.');if(wantDim&&!m.dim&&m.id!=='hue')warns.push('«'+room+'»: u wilt dimmen, maar '+m.name+' kan alleen aan/uit.');if(m.minW&&P<m.minW)warns.push('«'+room+'»: belasting '+P+' W ligt onder het minimum van '+m.minW+' W voor '+m.name+'. Voeg lichtpunten toe, een bypass of een sterkere lamp.');if(m.bypassLed&&(neutre==='non'||neutre==='?')&&P<8)bypass+=1});if(eco==='hue'&&!counts.hue&&Object.keys(counts).length)warns.push('Hue-ecosysteem gekozen: reken op Hue-lampen, of een Bridge voor Zigbee-modules van andere merken.');if(eco==='wifi'&&(counts['legrand']||counts['aqara-h1']||counts['sonoff-l2']))warns.push('Wifi-ecosysteem van Shelly: Zigbee-modules (Legrand, Aqara, Sonoff) hebben een aparte hub nodig.');document.getElementById('kit-modules-out').innerHTML=Object.keys(counts).map(function(id){var m=modById(id);return '<li><strong>'+counts[id]+'×</strong> '+(m?m.name:id)+'</li>'}).join('')||'<li>Voeg minstens één stroomkring toe.</li>';document.getElementById('kit-bypass-out').textContent=bypass?'Geschatte anti-flikker-bypasses: '+bypass+' (één per ledarmatuur onder circa 8 W op een 2-draadsmodule).':'Geen bypass nodig bij deze opstelling.';var hubs=[];if(hue)hubs.push('Philips Hue Bridge (bij meer dan 10 Bluetooth-lampen of automatiseringen)');if(netatmo)hubs.push('Legrand Netatmo-gateway');if(aqara)hubs.push('Aqara-hub of Apple TV / HomePod (Thread)');document.getElementById('kit-hub-out').textContent=hubs.length?'Te voorzien gateways: '+hubs.join(' · '):'';document.getElementById('kit-warn-out').innerHTML=warns.length?warns.map(function(w){return '<li>⚠ '+w+'</li>'}).join(''):'<li>Geen blokkerende melding bij de ingevoerde rijen.</li>'}function bindRow(tr){tr.querySelectorAll('input, select').forEach(function(e){e.addEventListener('input',recalc);e.addEventListener('change',recalc)});tr.querySelector('.kit-del').addEventListener('click',function(){tr.remove();recalc()})}document.getElementById('kit-add').addEventListener('click',function(){tbody.insertAdjacentHTML('beforeend',rowHtml());bindRow(tbody.lastElementChild);recalc()});document.getElementById('kit-eco').addEventListener('change',recalc);tbody.insertAdjacentHTML('beforeend',rowHtml());bindRow(tbody.firstElementChild);recalc()})();`;
const KIT_CONFIG_NL: EnPage = {
  path: 'gidsen/configurator-kit-slimme-verlichting-zonder-nul', article: true, kicker: 'Interactieve gids · slim huis',
  title: 'Configurator slim verlichtingspakket: zonder nul, bypass en modules Shelly, Hue, Aqara',
  description: 'Stel uw slimme verlichtingspakket ruimte per ruimte samen, met of zonder nuldraad: modules, anti-flikker-bypass, gateways en compatibiliteitsmeldingen.',
  h1: 'Stel uw slimme verlichtingspakket ruimte per ruimte samen',
  lead: 'Voeg elk lichtpunt toe: het ledvermogen, of er een nul in de schakeldoos zit, en het type module. De configurator schat het aantal anti-flikker-bypasses (ruststroom van 2-draadsmodules) en meldt modules die niet bij uw bedrading passen.',
  body: `<p>Vul aan met de <a href="/nl/gidsen/slimme-schakelaar-zonder-nul-compatibiliteit/">compatibiliteitsmatrix zonder nul</a>.</p>
<h2>Referentie van de modules</h2>
<table><thead><tr><th>Module</th><th>Werkt zonder nuldraad</th><th>Dimmen</th><th>Min. belasting</th><th>Led-bypass</th><th>Protocol</th></tr></thead><tbody>
${KIT_MODULES.map((m) => `<tr><td>${m.name}</td><td>${m.neutre === null ? '— (lampen)' : m.neutre ? 'Nee (nuldraad verplicht)' : 'Ja (2-draads)'}</td><td>${m.dim ? 'Ja' : 'Aan/uit'}</td><td>${m.minW ? `${m.minW} W` : '—'}</td><td>${m.bypassLed ? 'Vaak' : 'Zelden / nee'}</td><td>${m.proto}</td></tr>`).join('\n')}
</tbody></table>
<h2>Uw ruimtes en lichtpunten</h2>
<p>Eén rij is één stroomkring of één armatuur op één module. Schakel de groep uit in de groepenkast voor u iets monteert.</p>
<p><label>Gewenst ecosysteem <select id="kit-eco"><option value="any">Geen voorkeur</option><option value="hue">Philips Hue</option><option value="apple">Apple Home / Aqara</option><option value="wifi">Lokaal Wi-Fi (Shelly)</option><option value="zigbee">Open Zigbee</option></select></label></p>
<table id="kit-table"><thead><tr><th>Ruimte</th><th>Punten</th><th>Led W / punt</th><th>Nul in de doos?</th><th>Dimmer?</th><th>Module</th><th></th></tr></thead><tbody id="kit-tbody"></tbody></table>
<p><button id="kit-add" type="button" style="padding:.3rem .8rem;border:1px solid #d6d3d1;border-radius:.4rem">+ Ruimte / stroomkring toevoegen</button></p>
<div aria-live="polite" id="kit-summary" class="en-card"><h3>Overzicht van het materiaal</h3><ul id="kit-modules-out"></ul><p id="kit-bypass-out"></p><p id="kit-hub-out"></p><h3>Compatibiliteitsmeldingen</h3><ul id="kit-warn-out"></ul></div>
<script>${KIT_SCRIPT}</script>
<h2>Productideeën</h2>
${card('Shelly', 'Shelly-module zonder nul', 'Micromodule met twee draden.', nlS('Shelly 1L zonder nul', 'Shelly 1L'))}
${card('Bypass', 'Led-bypass voor modules zonder nul', 'Stopt het nagloeien.', nlS('Shelly bypass led zonder nul', 'Bypass'))}
${card('Slim', 'Set Zigbee-lampen E27', 'Eén ecosysteem.', nlS('Zigbee slimme lamp E27', 'Zigbee E27'))}
${card('Hub', 'Zigbee-hub voor het slimme huis', 'Hub voor meerdere merken.', nlS('Zigbee hub slim huis', 'Zigbee-hub'))}
${note}
<h2>Gerelateerde tools en gidsen</h2><ul><li><a href="/nl/gidsen/slimme-schakelaar-zonder-nul-compatibiliteit/">Matrix schakelaar zonder nul</a></li><li><a href="/nl/gidsen/gu10-led-flikker-dimmer-diagnose/">Flikkerdiagnose GU10 en E27</a></li><li><a href="/nl/gidsen/matter-thread-matrix-philips-hue-aqara-govee/">Matrix Matter, Thread en Zigbee</a></li><li><a href="/nl/tools/">Tools voor verlichting</a></li><li><a href="/nl/merken/philips-hue/">Ecosysteem Philips Hue</a></li></ul>`,
};

const inp = (id: string, label: string, attrs: string, extra = '') => `<label${extra}>${label} <input id="${id}" type="number" ${attrs} style="width:7rem"/></label><br/>`;
const ROI_SCRIPT = `(function(){var SITE_HOURS={retail:14,office:10,workshop:16,communal:11};function el(i){return document.getElementById(i)}function num(v){return parseFloat(String(v).replace(',','.'))||0}function cur(){return el('roi-cur').value}function money(n,d){return cur()+n.toLocaleString('nl-NL',{minimumFractionDigits:d,maximumFractionDigits:d})}function applyPreset(){var f=el('roi-fix'),o=f.options[f.selectedIndex];['old','new','life-old','life-new','cost-old','cost-new'].forEach(function(k){var id={'old':'roi-old-w','new':'roi-new-w'}[k]||('roi-'+k);el(id).value=o.getAttribute('data-'+k)});var park=f.value==='parking';el('roi-detect-wrap').style.display=park?'':'none';if(!park)el('roi-detect').value='0'}function calc(){var n=num(el('roi-n').value),oldW=num(el('roi-old-w').value),newW=num(el('roi-new-w').value),days=num(el('roi-days').value),effH=num(el('roi-h').value)*(1-num(el('roi-detect').value)/100),price=num(el('roi-kwh').value),inv=num(el('roi-inv').value),costOld=num(el('roi-cost-old').value),costNew=num(el('roi-cost-new').value),lifeOld=num(el('roi-life-old').value),lifeNew=num(el('roi-life-new').value),labor=num(el('roi-labor').value);var hy=effH*days,kOld=n*oldW*hy/1000,kNew=n*newW*hy/1000,kSave=kOld-kNew,eSave=kSave*price;var rOld=lifeOld>0?(n*hy)/lifeOld:0,rNew=lifeNew>0?(n*hy)/lifeNew:0,crew=Math.max(1,Math.ceil(n/20));var mOld=rOld*costOld+(rOld>=1?Math.floor(rOld)*(labor/crew):0),mNew=rNew*costNew+(rNew>=1?Math.floor(rNew)*(labor/crew*0.3):0),mSave=Math.max(0,mOld-mNew),total=eSave+mSave,pb=total>0?inv/total:Infinity;var pbTxt=!isFinite(pb)?'—':pb<1?Math.round(pb*12)+' maanden':pb.toFixed(1)+' jaar';el('roi-result').innerHTML='<p><strong>Huidig verbruik:</strong> ≈ '+Math.round(kOld).toLocaleString('nl-NL')+' kWh/jaar · <strong>na led:</strong> ≈ '+Math.round(kNew).toLocaleString('nl-NL')+' kWh/jaar.</p><p><strong>Bespaarde kWh:</strong> ≈ <strong>'+Math.round(kSave).toLocaleString('nl-NL')+' kWh/jaar</strong> ('+money(eSave,2)+' minder op de rekening, bij '+money(price,2)+'/kWh).</p><p><strong>Uitgespaard onderhoud (schatting):</strong> ≈ '+money(mSave,2)+' / jaar (lampen plus een deel van de arbeid; oud ≈ '+rOld.toFixed(1)+' vervangingen/jaar, led ≈ '+rNew.toFixed(2)+').</p><p><strong>Totale winst per jaar:</strong> '+money(total,2)+' · <strong>Terugverdientijd:</strong> <strong>'+pbTxt+'</strong> voor '+money(inv,0)+' geïnvesteerd.</p><p>'+n+' armaturen, '+effH.toFixed(1)+' effectieve uur/dag ('+days+' dagen/jaar). Vermogen: '+oldW+' W → '+newW+' W (−'+Math.round((1-newW/oldW)*100)+' %).</p>'}el('roi-site').addEventListener('change',function(){var h=SITE_HOURS[this.value];if(h)el('roi-h').value=h;if(this.value==='communal')el('roi-days').value=365;calc()});el('roi-fix').addEventListener('change',function(){applyPreset();calc()});['roi-cur','roi-n','roi-h','roi-days','roi-detect','roi-old-w','roi-new-w','roi-kwh','roi-inv','roi-cost-old','roi-cost-new','roi-life-old','roi-life-new','roi-labor'].forEach(function(i){el(i).addEventListener('input',calc);el(i).addEventListener('change',calc)});applyPreset();calc()})();`;
const ROI_NL: EnPage = {
  path: 'tools/roi-relamping-led', article: true, kicker: 'Tools · rekenhulp',
  title: 'ROI-calculator voor professionele ledrelamping (kWh, onderhoud, terugverdientijd)',
  description: 'Loont ledrelamping voor een winkel, kantoor, werkplaats of appartementencomplex? Tl-buizen T8, panelen 600×600, halogeenspots en schijnwerpers op een parkeerterrein: bespaarde kWh, uitgespaard onderhoud en terugverdientijd.',
  h1: 'Terugverdientijd van ledrelamping (bedrijf en gemeenschappelijke ruimten)',
  lead: 'Schat de bespaarde kWh, het uitgespaarde onderhoud (levensduur van led tegenover de oude lampen) en de terugverdientijd voor een winkel, een kantoor, een werkplaats of de gemeenschappelijke ruimten van een appartementencomplex. Armaturen: tl-buizen T8, panelen 600×600, halogeenspots, schijnwerpers op een parkeerterrein met bewegingssensor.',
  body: `<p>Stroomprijs, valuta en montagekosten kunt u aanpassen. Zie ook <a href="/nl/gidsen/lumen-watt/">lumen en watt</a>, <a href="/nl/gidsen/steinel-automatische-buitenverlichting/">buitenverlichting met sensoren</a> en <a href="/nl/merken/steinel/">schijnwerpers van Steinel</a>.</p>
<h2>Rekenhulp</h2>
<div id="roi-tool">
<label>Type locatie <select id="roi-site"><option value="retail">Winkel / detailhandel</option><option value="office">Kantoor / kantoortuin</option><option value="workshop">Werkplaats / magazijn</option><option value="communal">Appartementencomplex (gemeenschappelijke ruimten)</option></select></label><br/>
<label>Type armatuur <select id="roi-fix">
<option value="t8" data-old="58" data-new="18" data-life-old="12000" data-life-new="50000" data-cost-old="4" data-cost-new="12">Tl-buis T8 58 W → led 18 W</option>
<option value="panel" data-old="72" data-new="36" data-life-old="15000" data-life-new="50000" data-cost-old="25" data-cost-new="45">Tl-paneel 600×600, 4×18 W → ledpaneel 36 W</option>
<option value="gu10" data-old="50" data-new="6" data-life-old="2000" data-life-new="25000" data-cost-old="3" data-cost-new="8">Halogeenspot GU10 50 W → led 6 W</option>
<option value="parking" data-old="250" data-new="80" data-life-old="8000" data-life-new="50000" data-cost-old="80" data-cost-new="120">Schijnwerper parkeerterrein 250 W → led 80 W + sensor</option>
</select></label><br/>
<label>Valuta <select id="roi-cur"><option value="€">€</option><option value="£">£</option><option value="$">$</option></select></label><br/>
${inp('roi-n', 'Aantal armaturen', 'min="1" max="5000" step="1" value="40"')}
${inp('roi-h', 'Branduren per dag', 'min="0.5" max="24" step="0.5" value="12"')}
${inp('roi-days', 'Dagen per jaar', 'min="200" max="365" step="1" value="300"')}
${inp('roi-detect', 'Vermindering door de sensor (%)', 'min="0" max="90" step="5" value="55" title="Aandeel van de tijd dat het licht uit of gedimd blijft"', ' id="roi-detect-wrap"')}
${inp('roi-old-w', 'Huidig vermogen (W per armatuur)', 'min="1" max="2000" step="1" value="58"')}
${inp('roi-new-w', 'Ledvermogen (W per armatuur)', 'min="1" max="500" step="1" value="18"')}
${inp('roi-kwh', 'Stroomprijs (per kWh, inclusief btw)', 'min="0.05" max="0.8" step="0.01" value="0.22"')}
${inp('roi-inv', 'Totale investering (materiaal + montage)', 'min="100" max="500000" step="50" value="3200"')}
${inp('roi-cost-old', 'Prijs van een oude lamp', 'min="0" max="500" step="0.5" value="4"')}
${inp('roi-cost-new', 'Prijs van een ledmodule', 'min="0" max="500" step="0.5" value="12"')}
${inp('roi-life-old', 'Levensduur oude lamp (u)', 'min="500" max="50000" step="100" value="12000"')}
${inp('roi-life-new', 'Levensduur led (u)', 'min="10000" max="100000" step="1000" value="50000"')}
${inp('roi-labor', 'Arbeid voor vervanging (per bezoek)', 'min="0" max="5000" step="25" value="150"')}
</div>
<div id="roi-result" class="en-card" aria-live="polite"></div>
<p>De standaardcijfers zijn voorbeelden op basis van Franse prijzen: vervang ze door uw eigen tarief en offertes. De profielen per locatie vullen typische branduren in. Bij een parkeerterrein met sensor past de tool een korting toe op de equivalente uren (hoogfrequente sensor, HF, of infraroodsensor). De cijfers zijn indicatief: vraag een installateur om een offerte, zeker als u een subsidie of premie voor energiebesparing aanvraagt.</p>
<script>${ROI_SCRIPT}</script>
<h2>Gerelateerde tools en gidsen</h2><ul><li><a href="/nl/tools/lux-lumen-watt-ruimte-omrekenen/">Omrekentool lux en lumen</a></li><li><a href="/nl/tools/keukenverlichting-plan-pdf/">Verlichtingsplan keuken (pdf)</a></li><li><a href="https://1piece1ampoule.fr/pieces/parking/">Verlichting van oprit en parkeerterrein</a></li><li><a href="https://1piece1ampoule.fr/meilleur/meilleur-projecteur-led-exterieur-detecteur/">Ledschijnwerpers met sensor</a></li><li><a href="https://1piece1ampoule.fr/guides/detecteurs-de-mouvement/">Bewegingssensoren</a></li><li><a href="https://1piece1ampoule.fr/articles/economies-led-calcul/">Ledbesparing thuis</a></li></ul>`,
};

const KP_SCRIPT = `(function(){var ZONES=[{key:'bench',label:'Werkblad',lux:500},{key:'island',label:'Eiland / schiereiland',lux:300},{key:'cook',label:'Kookzone (plafond)',lux:500},{key:'table',label:'Eettafel',lux:200},{key:'circ',label:'Looproute',lux:100}];var K_CEIL=1.55,K_BENCH=1.4;function el(i){return document.getElementById(i)}function num(v){return parseFloat(String(v).replace(',','.'))||0}function fmt(n){return Math.round(n).toLocaleString('nl-NL')}function calc(){var name=(el('kp-name').value||'').trim(),len=num(el('kp-bench-len').value),d=num(el('kp-bench-d').value),areas={island:num(el('kp-island').value),cook:num(el('kp-cook').value),table:num(el('kp-table').value),circ:num(el('kp-circ').value)},k=el('kp-k').value,per=num(el('kp-gu10-lm').value)||500,cri=el('kp-irc90').checked;var benchLm=500*len*d*K_BENCH,lmPerM=len>0?benchLm/len:0,total=0,rows='';ZONES.forEach(function(z){if(z.key==='bench'){if(len<=0)return;rows+='<tr><td>'+z.label+'</td><td>'+z.lux+' lx</td><td>24 V-ledstrip onder de bovenkastjes (CRI '+(cri?'≥ 90':'≥ 80, 90 aanbevolen')+')</td><td>'+len.toFixed(1)+' m lengte · ≈ '+Math.round(lmPerM)+' lm/m als richtwaarde</td></tr>';return}var m2=areas[z.key];if(m2<=0)return;var need=z.lux*m2*K_CEIL,n=Math.max(0,Math.ceil(need/per));total+=n;rows+='<tr><td>'+z.label+' ('+m2.toFixed(1)+' m²)</td><td>'+z.lux+' lx</td><td>GU10-spots '+k+' K, bundel 36–60°</td><td>'+n+' spot'+(n>1?'s':'')+' (≈ '+fmt(need)+' lm)</td></tr>'});el('kp-tbody').innerHTML=rows;el('kp-title').textContent=name||'Verlichtingsplan keuken';el('kp-meta').textContent='Gewenste kleur: '+k+' K · CRI '+(cri?'≥ 90 op elk armatuur':'minimaal ≥ 80, 90 aanbevolen op het werkblad')+' · Opgesteld op '+new Date().toLocaleDateString('nl-NL');el('kp-summary').innerHTML='<p><strong>Totaal GU10-spots aan het plafond:</strong> '+total+'</p><p><strong>24 V-strip onder de kastjes:</strong> '+len.toFixed(1)+' m (voeding: zie de 24 V-calculator)</p><p><strong>Voorgestelde groepen:</strong> één gedimde groep voor eettafel en sfeer, één heldere groep voor werkblad en koken; zet het eiland zo mogelijk op een eigen groep, zodat het werkblad geen schaduw krijgt.</p>';el('kp-footnote').textContent='Schatting op basis van gebruikelijke luxniveaus (werkblad 500 lx, looproute 100 lx) en een plafondfactor K ≈ '+K_CEIL+'. De gelijkmatigheid hangt af van de plafondhoogte en de afwerking. Laat een elektricien de indeling toetsen voor natte zones (gootsteen) en voor de belasting van de groepen.'}el('kp-recalc').addEventListener('click',calc);el('kp-print').addEventListener('click',function(){calc();window.print()});['kp-bench-len','kp-bench-d','kp-island','kp-cook','kp-table','kp-circ','kp-k','kp-gu10-lm','kp-irc90','kp-name'].forEach(function(i){el(i).addEventListener('input',calc);el(i).addEventListener('change',calc)});calc()})();`;
const KITCHEN_PLAN_NL: EnPage = {
  path: 'tools/keukenverlichting-plan-pdf', article: true, kicker: 'Tools · configurator',
  title: 'Verlichtingsplan keuken, zone per zone (afdrukbare pdf)',
  description: 'Plan de keukenverlichting: 500 lux op het werkblad, eiland, kookzone en eettafel. Aantal GU10-spots, lengte van de 24 V-ledstrip, kelvin en CRI, klaar om af te drukken.',
  h1: 'Verlichtingsplan keuken (afdrukbaar)',
  lead: 'Vul oppervlaktes en lengtes in: de tool stelt een plan per zone voor (500 lux op het werkblad, eiland, koken, eettafel, looproute), het aantal GU10-spots, de lengte van de 24 V-ledstrip onder de bovenkastjes, één kleurtemperatuur en bronnen met CRI ≥ 90. Druk de samenvatting af voor uw elektricien of voor het project.',
  body: `<p>Zie ook <a href="/nl/zones/keukenblad/">het werkblad verlichten</a>, <a href="https://1piece1ampoule.fr/articles/installer-ruban-led/">een ledstrip monteren</a> en <a href="https://1piece1ampoule.fr/outils/calculateur-ruban-led-alimentation-24v/">de 24 V-voeding berekenen</a>.</p>
<h2>Configurator</h2>
<div id="kitchen-plan-tool">
<label>Projectnaam (komt op het blad) <input id="kp-name" maxlength="80" placeholder="bijv. keuken van 12 m², renovatie" type="text"/></label><br/>
${inp('kp-bench-len', 'Lengte werkblad (m)', 'max="12" min="1" step="0.1" value="3.6"')}
${inp('kp-bench-d', 'Diepte werkblad (m)', 'max="1" min="0.5" step="0.05" value="0.6"')}
${inp('kp-island', 'Oppervlak eiland / schiereiland (m²)', 'max="8" min="0" step="0.1" value="2"')}
${inp('kp-cook', 'Kookzone aan het plafond (m²)', 'max="6" min="0" step="0.1" value="1.2"')}
${inp('kp-table', 'Oppervlak eettafel (m²)', 'max="12" min="0" step="0.1" value="2.4"')}
${inp('kp-circ', 'Oppervlak looproute (m²)', 'max="25" min="2" step="0.1" value="6"')}
<label>Gewenste kleurtemperatuur <select id="kp-k"><option value="3000">3000 K, warmwit (gezellig)</option><option selected value="4000">4000 K, neutraalwit (keuken, taken)</option><option value="2700">2700 K, extra warm (eethoek)</option></select></label><br/>
${inp('kp-gu10-lm', 'Lichtstroom per GU10-spot (lm)', 'max="800" min="250" step="25" value="500"')}
<label><input checked id="kp-irc90" type="checkbox"/> CRI (Ra) ≥ 90 eisen op elke bron (voedsel, afwerking)</label>
</div>
<p class="no-print"><button id="kp-recalc" type="button" style="padding:.3rem .8rem;border:1px solid #d6d3d1;border-radius:.4rem">Plan bijwerken</button> <button id="kp-print" type="button" style="padding:.3rem .8rem;border:1px solid #d6d3d1;border-radius:.4rem">Afdrukken / PDF</button></p>
<div id="kp-print-area" class="print-plan-wrap en-card" aria-live="polite"><p>1piece1ampoule.fr · indicatief plan</p><h3 id="kp-title">Verlichtingsplan keuken</h3><p id="kp-meta"></p>
<table id="kp-table-out"><thead><tr><th>Zone</th><th>Streefwaarde</th><th>Oplossing</th><th>Aantal</th></tr></thead><tbody id="kp-tbody"></tbody></table>
<div id="kp-summary"></div><p id="kp-footnote"></p></div>
<style>@media print{body *{visibility:hidden}.print-plan-wrap,.print-plan-wrap *{visibility:visible}.print-plan-wrap{position:absolute;left:0;top:0;width:100%;margin:0;padding:0;box-shadow:none!important}}</style>
<script>${KP_SCRIPT}</script>
<h2>Gerelateerde tools en gidsen</h2><ul><li><a href="/nl/tools/lux-lumen-watt-ruimte-omrekenen/">Omrekentool lux en lumen</a></li><li><a href="/nl/tools/halogen-led-equivalent-gu10-e27-lumen/">Equivalentie halogeen GU10</a></li><li><a href="https://1piece1ampoule.fr/outils/calculateur-ruban-led-alimentation-24v/">Calculator 24 V-ledstrip</a></li><li><a href="/nl/gidsen/kleurtemperatuur-kelvin/">Kelvin</a> · <a href="/nl/gidsen/kleurweergave-cri-ra/">CRI (Ra)</a></li><li><a href="https://1piece1ampoule.fr/meilleur/meilleur-spot-gu10/">Vergelijking GU10-spots</a></li><li><a href="https://1piece1ampoule.fr/pieces/cuisine/">Verlichting in de keuken</a></li><li><a href="/nl/tools/roi-relamping-led/">ROI van ledrelamping (bedrijf)</a></li></ul>`,
};

const GR35_BUY = 'https://www.awin1.com/cread.php?awinmid=94223&awinaffid=3127458&ued=https%3A%2F%2Fwww.imalentstore.com%2Fproducts%2Fimalent-gr35-4-in-1-edc-flashlight';
const img = (f: string, alt: string, w: number, h: number) => `<img src="/images/tests/imalent-gr35/${f}" alt="${alt}" width="${w}" height="${h}" loading="lazy" style="max-width:100%;height:auto" />`;
const GR35_FAQ: [string, string][] = [
  ['Wordt de zaklamp warm in gebruik?', 'Ja. Op vol vermogen voelt u de warmte duidelijk in de hand als u de bundel op uw handpalm richt. Dat past bij een zeer felle zaklamp: een deel van de elektrische energie wordt warmte in de led en in de behuizing.'],
  ['Blijft de groene laser stabiel?', 'Ja: de groene laserpointer blijft tijdens het gebruik constant.'],
  ['Kunt u de laser veilig gebruiken?', 'Richt een laser nooit op ogen, personen, dieren, voertuigen of luchtvaartuigen. Houd de zaklamp buiten het bereik van kinderen en gebruik de laser alleen om kort iets aan te wijzen, nooit om op iemand te richten.'],
  ['Is de handleiding in het Frans?', 'Nee. Bij het exemplaar dat wij testten was die niet in het Frans vertaald. Dat is niet verplicht, maar voor ons als Franse site was het het belangrijkste minpunt van de set.'],
  ['Wat zit er bij de zaklamp?', 'Naast de zaklamp zitten in de koffer een powerbank en een grijze stoffen opbergetui: twee accessoires die we goed vonden.'],
];
const GR35_TEST_NL: EnPage = {
  path: 'tests/imalent-gr35', article: true, kicker: 'Producttest · bijgewerkt 2 november 2026',
  title: 'Test Imalent GR35: zaklamp, groene laser en powerbankkoffer',
  description: 'Imalent GR35 getest: zeer sterke zaklamp, eenvoudige dimmer, groene laser, powerbankkoffer en etui. Handleiding niet in het Frans. Zaklamp gratis geleverd; onafhankelijke test.',
  h1: 'Test Imalent GR35: zaklamp, groene laser en powerbankkoffer',
  lead: 'De Imalent GR35 is geen woonkamerlamp. Het is een compacte zaklamp met een groene laser, een dimmer en een koffer die ook als powerbank dient. Dit is wat ons bijbleef na de test.',
  body: `<p class="en-note"><strong>Zaklamp gratis ter beschikking gesteld door Imalent voor deze test; geen zeggenschap over de inhoud van de recensie.</strong></p>
<p><img src="/images/tests/imalent-gr35/imalent-gr35-contenu-pochette-powerbank-torche.webp" alt="Inhoud van de doos van de Imalent GR35 op een tafel: grijze stoffen etui, powerbank en zaklamp" width="1600" height="1200" style="max-width:100%;height:auto" /></p>
<h2>Uitpakken</h2>
<p>In de doos: de zaklamp, de laad- en opbergkoffer, de grijze stoffen etui en de powerbank. De zwart-blauwe koffer is degelijk afgewerkt; de etui past erin, met een drukknoop.</p>
<p>${img('imalent-gr35-torche-dans-son-coffret.webp', 'Zaklamp Imalent GR35 in de zwart-blauwe koffer, net geopend', 1600, 1200)}</p>
<p>${img('imalent-gr35-coffret-ouvert-vide.webp', 'Imalent-koffer open en leeg, zwart-blauw interieur', 1600, 1200)}</p>
<p>${img('imalent-gr35-coffret-ferme-vue-dessus.webp', 'Koffer van de Imalent GR35 van boven, grijze stoffen etui in de doos', 1200, 1600)}</p>
<p>${img('imalent-gr35-torche-pochette-tissu-dans-coffret.webp', 'Grijze stoffen opbergetui van de Imalent GR35 met drukknoop, in de koffer', 1200, 1600)}</p>
<h2>Eerste indruk</h2><p>De afwerking voelt in orde en de zaklamp is eenvoudig in gebruik.</p>
<h2>Lichtopbrengst, dimmer en groene laser</h2>
<p>De zaklamp is <strong>zeer sterk</strong>. Richt de bundel op uw handpalm en u voelt de warmte. Voor een zaklamp uit de broekzak is dat niet niks. Imalent noemt een maximale lichtstroom van <strong>2.800 lumen</strong> en een reikwijdte van <strong>426 m</strong> (cijfers van de fabrikant, niet door ons gemeten). Ter vergelijking: een gewone ledlamp voor de woonkamer zit rond <strong>800 lm</strong>, dus 2.800 lm is een veelvoud daarvan in een gebundelde straal. Vandaar het gebruik om ver te verlichten, en vandaar de warmte: een deel van de energie die de led verbruikt, wordt warmte in de behuizing, vooral op vol vermogen.</p>
<p>De <strong>dimmer is eenvoudig</strong> in gebruik: u regelt de helderheid zonder telkens vaste standen langs te lopen. De pointer met <strong>groene laser</strong> blijft tijdens het gebruik <strong>stabiel</strong>. Veiligheid: richt nooit op ogen, personen, dieren, voertuigen of luchtvaartuigen, en houd het toestel buiten het bereik van kinderen.</p>
<h2>Powerbank en etui</h2><p>Los van de zaklamp zelf vonden we in de set de combinatie van <strong>powerbank en opbergetui</strong> in de koffer het sterkst.</p>
<h2>Het minpunt: de handleiding</h2><p>Ons enige echte minpunt: de handleiding was niet in het Frans vertaald. Dat is niet verplicht, maar een Franse versie was welkom geweest voor onze lezers.</p>
<h2>Sterke punten</h2><ul><li>Degelijke indruk van de afwerking, eenvoudig in gebruik.</li><li>Powerbank en etui doordacht in de koffer verwerkt.</li><li>Zeer sterk; eenvoudige dimmer.</li><li>Stabiele groene laser.</li></ul>
<h2>Grenzen</h2><ul><li>Handleiding niet in het Frans.</li><li>Duidelijk voelbare warmte op hoog vermogen.</li></ul>
<div class="en-card"><p class="en-flag">Waar te koop</p><h3>De Imalent GR35 kopen</h3>
<p>Prijs genoteerd op 2 november 2026 op <strong>imalentstore.com</strong>: <strong>72,95 US$</strong> (94,95 US$ doorgestreept). Die kan intussen veranderd zijn. Verzending, btw en douane hangen af van de verkoper.</p>
<p>Awin-promotiecode gepubliceerd voor Frankrijk: <code>DZYJ10YHM</code> (−10 % in de shop van IMALENT, geldig tot 27 maart 2027, bron Awin). Hij geldt mogelijk niet in uw land.</p>
<p><a href="${GR35_BUY}" rel="sponsored nofollow noopener" target="_blank" data-awin-link data-awin-mid="94223" data-product="Imalent GR35" data-placement="test-gr35-nl">Bekijk de GR35 in de officiële shop</a></p>
<p class="en-note">Partnerlink: wij kunnen een commissie ontvangen, zonder extra kosten voor u.</p></div>
<h2>Voor wie is hij bedoeld?</h2>
<p>Voor wie een sterke zaklamp wil, oplaadbaar vanuit de koffer, met een groene laser en regelbare helderheid. Minder geschikt als u een volledige Franse handleiding nodig hebt. Om een kelder te verlichten, zie onze gidsen over de <a href="https://1piece1ampoule.fr/pieces/cave-voutee/">gewelfde kelder</a> en de <a href="https://1piece1ampoule.fr/pieces/cave-a-vin/">wijnkelder</a>. Voor een pad: de gids <a href="https://1piece1ampoule.fr/zones/entree-allee-exterieure/">entree en pad</a>. Om te vergelijken met vaste verlichting: onze gids <a href="/nl/gidsen/lumen-watt/">lumen en watt</a>, de <a href="https://1piece1ampoule.fr/marques/imalent/">merkpagina van Imalent</a> en <a href="/nl/merken/">alle merken die we volgen</a>.</p>
<h2>Specificaties volgens Imalent</h2>
<p>Cijfers van de productpagina van de fabrikant (niet door ons gemeten):</p>
<ul><li>Opgegeven maximale lichtstroom: <strong>2.800 lumen</strong>.</li><li>Opgegeven reikwijdte: <strong>426 m</strong>.</li><li>Laadkoffer: <strong>6.700 mAh</strong>.</li></ul>
<p>Bron: <a href="${GR35_BUY}" rel="sponsored nofollow noopener" target="_blank">pagina van de Imalent GR35 op imalentstore.com</a>, gecontroleerd op 2 november 2026.</p>
<h2>Veelgestelde vragen</h2>
${GR35_FAQ.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('\n')}`,
};

export const TR_LOT6_NL: EnPage[] = [TROUBLESHOOT_NL, BATH_ZONES_NL, DIMMER_MATRIX_NL, KIT_CONFIG_NL, ROI_NL, KITCHEN_PLAN_NL, GR35_TEST_NL];
export const LOT6_NL_GROUPS: { fr: string; nl: string }[] = [
  { fr: '/guides/ampoule-led-clignote-eteinte-gresille-depannage/', nl: '/nl/gidsen/led-flikker-zoem-nagloeien/' },
  { fr: '/guides/zones-salle-de-bain-ip44-ip65-norme-nfc-15-100/', nl: '/nl/gidsen/badkamerzones-ip44-ip65/' },
  { fr: '/guides/matrice-variateur-dimmer-ampoule-led-gu10-e27/', nl: '/nl/gidsen/dimmer-led-matrix-gu10-e27-e14/' },
  { fr: '/guides/configurateur-kit-eclairage-connecte-sans-neutre/', nl: '/nl/gidsen/configurator-kit-slimme-verlichting-zonder-nul/' },
  { fr: '/outils/calculateur-roi-relamping-led-professionnel/', nl: '/nl/tools/roi-relamping-led/' },
  { fr: '/outils/generateur-plan-eclairage-cuisine-pdf/', nl: '/nl/tools/keukenverlichting-plan-pdf/' },
  { fr: '/tests/imalent-gr35/', nl: '/nl/tests/imalent-gr35/' },
];
