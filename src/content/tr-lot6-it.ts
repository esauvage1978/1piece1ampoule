// IT lot 6 (12/11/2026): stesse 7 pagine del lotto EN. Fatti, cifre, id HTML e logica invariati.
// Prezzi francesi indicati come tali. Nessun SVG. Ricerche Amazon.it solo /s?k= (tag roboteducat0f-21).
import type { EnPage } from './en';

const itS = (q: string, label: string) =>
  `<a class="en-amz" href="https://www.amazon.it/s?k=${encodeURIComponent(q)}&tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-product="${label}">Cerca su Amazon.it</a>`;
const card = (flag: string, title: string, text: string, link: string) => `<div class="en-card"><p class="en-flag">${flag}</p><h3>${title}</h3><p>${text}</p>${link}</div>`;
const note = `<p class="en-note">Prezzi e disponibilità cambiano: li controlli prima dell’acquisto. In qualità di Affiliato Amazon ricevo un guadagno dagli acquisti idonei.</p>`;
const SAFETY = `<p class="en-note"><strong>Tensione di rete:</strong> ogni intervento su un punto luce a soffitto, un variatore o il quadro elettrico si fa <strong>a corrente staccata</strong> (interruttore generale aperto, assenza di tensione verificata). Se non è competente, non tocchi i morsetti di rete: chiami un elettricista.</p>`;

const TROUBLESHOOT_IT: EnPage = {
  path: 'guide/led-sfarfallio-ronzio-bagliore', article: true, kicker: 'Guida al ripristino guasti',
  title: 'Lampadina LED che sfarfalla da spenta, ronza o resta accesa: cosa fare',
  description: 'LED che sfarfalla da spenta, variatore che ronza, striscia che resta accesa o scalda, sensore Steinel che non si spegne: cause, difficoltà, tempi e rimedi.',
  h1: 'LED: sfarfallio, ronzio, bagliore residuo',
  lead: 'Una lampadina LED che sfarfalla da spenta, un variatore che ronza, una striscia che resta accesa o scalda, un sensore Steinel che non si spegne più: nella maggior parte dei casi la causa è nota e il rimedio richiede pochi minuti. La tabella dà gli ordini di grandezza; le sezioni spiegano che cosa fare.',
  body: `<p>Fa parte delle nostre <a href="https://1piece1ampoule.fr/guides/">guide all’illuminazione e al ripristino guasti</a>.</p>
<h2>Tabella di diagnosi</h2>
<table><thead><tr><th>Problema</th><th>Difficoltà</th><th>Tempo</th><th>Costo (prezzi francesi)</th><th>Attrezzi</th></tr></thead><tbody>
<tr><td>Il LED sfarfalla o resta acceso debolmente da spento (corrente residua)</td><td><strong>Facile (1/5)</strong></td><td>5 min</td><td>≈ €4</td><td>Cacciavite isolato, bypass Legrand/Shelly o condensatore bipolare 0,47 µF</td></tr>
<tr><td>Variatore che crepita o ronza con i LED</td><td><strong>Da facile a medio (2/5)</strong></td><td>10–30 min</td><td>€15–35</td><td>Cacciavite, variatore «tutte le lampade» compatibile LED</td></tr>
<tr><td>La striscia LED resta accesa debolmente o si surriscalda</td><td><strong>Medio (3/5)</strong></td><td>15–45 min</td><td>€5–25</td><td>Multimetro, alimentatore LED ben dimensionato, profilo in alluminio</td></tr>
<tr><td>Sensore Steinel (NightMatic, IS…) resta acceso o non si spegne</td><td><strong>Facile (2/5)</strong></td><td>5–15 min</td><td>€0</td><td>Cacciavite, manuale Steinel, mascherare il sensore crepuscolare</td></tr>
</tbody></table>
<p>Tempi e costi sono indicativi per chi ha dimestichezza con il fai-da-te; i costi sono prezzi francesi. Stacchi sempre il circuito al quadro prima di aprire una scatola di derivazione o un apparecchio.</p>
${SAFETY}
<h2>Il rimedio per circa il 95 % del bagliore residuo e dello sfarfallio da spenta (≈ €4, 5 min)</h2>
<p>Quando l’interruttore ha una <strong>spia luminosa</strong>, è un <strong>interruttore smart senza neutro</strong>, oppure un variatore lascia passare una corrente minima, una piccola corrente attraversa il LED anche quando è «spento». Carica il condensatore interno, poi <strong>lampeggia</strong> o resta acceso debolmente.</p>
<p>Due soluzioni equivalenti, montate <strong>sul punto luce a soffitto</strong> (fra fase e neutro, o come da istruzioni), a corrente staccata:</p>
<ul><li><strong>Modulo di bypass / compensazione</strong> Legrand o Shelly (circa €4 in Francia): pensato per i moduli senza neutro e per gli interruttori con spia; lo schema è nelle istruzioni.</li>
<li><strong>Condensatore bipolare</strong> 0,47 µF (450 V) in parallelo alla lampada: stesso principio, devia la corrente residua; se ha un variatore, ne verifichi la compatibilità.</li></ul>
<p>Se non se la sente, sostituisca l’interruttore con spia con uno senza luce, oppure usi una <strong>lampadina smart</strong> lasciando l’interruttore acceso (veda gli <a href="/it/guide/compatibilita-interruttore-smart-senza-neutro/">interruttori smart senza neutro</a> e il <a href="https://1piece1ampoule.fr/meilleur/meilleure-ampoule-connectee/">confronto delle lampadine smart</a>). Sintomi nel dettaglio: <a href="https://1piece1ampoule.fr/articles/ampoule-led-reste-allumee-faiblement/">lampadina accesa debolmente da spenta</a> e <a href="https://1piece1ampoule.fr/articles/ampoule-led-qui-clignote/">lampadina che sfarfalla</a>.</p>
<h2>Variatore: ronzio e sfarfallio</h2>
<p>Il rumore viene dalla tensione tagliata: l’elettronica del LED vibra. A bassa luminosità, una lampadina <strong>non dimmerabile</strong> o un variatore leading edge provocano ronzio e sfarfallio.</p>
<ul><li>Solo lampadine <strong>dimmerabili</strong>.</li><li>Un variatore <strong>compatibile LED</strong> (trailing edge / «tutte le lampade») con minimo regolabile.</li><li>Carico totale sopra il minimo del variatore (spesso 5–10 W con i LED).</li></ul>
<p>Guida completa: <a href="/it/guide/lampadine-led-dimmerabili/">lampadine dimmerabili e variatori</a>. Articolo: <a href="https://1piece1ampoule.fr/articles/ampoule-led-gresille-bourdonne/">ronzio del LED</a>.</p>
<h2>Striscia LED: resta accesa o scalda</h2>
<p>Una striscia che <strong>resta leggermente accesa</strong> dopo lo spegnimento ha di solito la stessa causa (corrente residua): un bypass ai morsetti dell’alimentatore, oppure un interruttore senza spia. Il <strong>surriscaldamento</strong> della striscia o dell’alimentatore viene invece da un alimentatore sottodimensionato, un cavo troppo sottile, o una striscia incollata senza un <strong>profilo in alluminio</strong> che disperda il calore.</p>
<ul><li>Alimentatore al <strong>125 %</strong> della potenza della striscia, di qualità decente.</li><li>Un profilo in alluminio continuo è indispensabile per le strisce potenti.</li><li>Non avvolga mai su se stessa una striscia alimentata (arrotolata = surriscaldamento).</li></ul>
<p><a href="https://1piece1ampoule.fr/articles/installer-ruban-led/">Installare una striscia LED</a> · <a href="https://1piece1ampoule.fr/outils/calculateur-ruban-led-alimentation-24v/">calcolatore per strisce LED</a>.</p>
<h2>Sensore Steinel bloccato (luce che non si spegne)</h2>
<p>Su un <strong>NightMatic 2000</strong> o un sensore da incasso come l’<strong>IS 360</strong>, una lampada che resta accesa in pieno giorno dipende quasi sempre dal <strong>sensore crepuscolare</strong>: «vede» la luce riflessa dalla lampada che comanda, o l’illuminazione vicina. Una temporizzazione al massimo può anche sembrare un guasto.</p>
<ul><li>Orienti la cellula crepuscolare <strong>lontano</strong> dal fascio della lampada (manuale Steinel).</li><li>Abbassi la soglia in lux, o metta una piccola mascherina se il sensore prende la luce del vicino.</li><li>Controlli il carico LED massimo (per esempio 350 W LED, &gt; 8 W sull’IS 360): un sovraccarico può disturbare lo spegnimento.</li><li>Riporti temporizzazione e sensibilità al minimo, poi le alzi poco per volta.</li></ul>
<p>Confronto delle schede e combinazioni: <a href="/it/guide/illuminazione-esterna-automatica-steinel/">illuminazione esterna Steinel</a>, <a href="https://1piece1ampoule.fr/guides/detecteurs-de-mouvement/">sensori di movimento</a>, <a href="/it/marchi/steinel/">pagina del marchio Steinel</a>.</p>
<h2>Idee di prodotti</h2>
${card('Variatore', 'Variatore «tutte le lampade» compatibile LED', 'Riduce il ronzio.', itS('variatore LED trailing edge', 'Variatore LED'))}
${card('Bypass', 'Bypass senza neutro (Legrand, Shelly)', 'Per il bagliore residuo.', itS('Shelly bypass LED senza neutro', 'Bypass'))}
${card('Lampadina', 'Lampadina LED E27 dimmerabile, 806 lm', 'Una sostituzione affidabile.', itS('lampadina LED E27 dimmerabile 806 lumen', 'E27 dimmerabile'))}
${card('Condensatore', 'Condensatore di compensazione LED 0,47 µF', 'Alternativa al bypass.', itS('condensatore 0.47uF 450V LED', 'Condensatore 0,47 µF'))}
${note}
<h2>Per approfondire</h2><p>Prova rapida: sposti la lampadina su un altro portalampada. Se il difetto segue la lampadina, la sostituisca; altrimenti controlli l’interruttore, il variatore o l’alimentatore. Diagnosi guidata: <a href="/it/guide/sfarfallio-gu10-led-dimmer-diagnosi/">sfarfallio GU10 / E27</a>. Faretti alogeni: <a href="/it/tutorial/sostituire-alogene-gu10-mr16-con-led/">GU10 / MR16 senza sfarfallio</a>. Bagni (IP, zone): <a href="/it/guide/zone-bagno-ip44-ip65/">zone del bagno</a>.</p>`,
};

const BATH_ROOMS: [string, string, number, number][] = [
  ['living', 'Soggiorno', 125, 20], ['kitchen', 'Cucina', 200, 12], ['bedroom', 'Camera', 100, 14], ['bath', 'Bagno (generale)', 175, 6],
  ['mirror', 'Specchio del bagno', 400, 1.2], ['hallway', 'Corridoio', 100, 8], ['office', 'Ufficio in casa', 300, 10], ['garage', 'Garage', 300, 18],
];
const BATH_ZONES_IT: EnPage = {
  path: 'guide/zone-bagno-ip44-ip65', article: true, kicker: 'Guida tecnica · norma',
  title: 'Zone bagno 0, 1, 2 (NF C 15-100) e IP44 / IP65',
  description: 'Zone bagno 0, 1 e 2, IP44 e IP65 secondo la NF C 15-100 francese, più un convertitore lux ↔ lumen ↔ watt per tipo di stanza. In Italia vale la CEI 64-8.',
  h1: 'Zone del bagno: IP44, IP65 e NF C 15-100',
  lead: 'In Francia, la NF C 15-100 (parte 7-701, vasca o doccia) definisce le zone in cui acqua ed elettricità si avvicinano. Il grado IP di un apparecchio deve corrispondere alla zona in cui è installato: non è solo un’etichetta commerciale. Questa guida riassume le zone 0, 1 e 2 con una tabella IP e un convertitore lux ↔ lumen ↔ watt per tipo di stanza. In Italia il testo applicabile è la norma CEI 64-8: faccia validare l’impianto da un elettricista.',
  body: `<p class="en-note">Questa pagina descrive la norma francese NF C 15-100 (parte 7-701, vasca o doccia): zone, gradi IP e distanze qui sotto sono quelli di quel testo (riferimento giugno 2015). In Italia le zone del bagno sono definite dalla norma CEI 64-8. I due testi non coincidono in ogni dettaglio: faccia validare l’impianto da un elettricista.</p>
<h2>Le zone in breve</h2>
<p>Riferimenti semplificati della NF C 15-100 (giugno 2015): la zona 1 arriva fino a 2,25 m; la zona 2 è una fascia orizzontale di 0,60 m intorno alla zona 1. Si misura dalla vasca o dal piatto doccia e si leggono le istruzioni dell’apparecchio (IP44, IP65…). Se la disposizione è insolita, la faccia controllare da un elettricista. In Italia il testo da applicare è la CEI 64-8, non la NF C 15-100.</p>
<h2>Tabella zone e IP</h2>
<table><thead><tr><th>Zona</th><th>Limite</th><th>IP minimo</th><th>Tensione / apparecchi</th><th>Nota pratica</th></tr></thead><tbody>
<tr><td>Zona 0</td><td>Interno della vasca o del piatto doccia</td><td><strong>IPX7</strong></td><td>SELV 12 V CA o 30 V CC max., sorgente fuori dalle zone</td><td>230 V vietati per l’illuminazione</td></tr>
<tr><td>Zona 1</td><td>Sopra la zona 0, fino a 2,25 m</td><td><strong>IPX4 (IPX5 per i getti orizzontali)</strong></td><td>Solo SELV 12 V per gli apparecchi di illuminazione</td><td>Niente 230 V</td></tr>
<tr><td>Zona 2</td><td>Fascia di 0,60 m intorno alla zona 1</td><td><strong>IPX4</strong></td><td>Classe II + differenziale 30 mA, oppure SELV 12 V</td><td>Applique IP44 tipica sopra lo specchio</td></tr>
<tr><td>Fuori dalle zone</td><td>Resto del locale (l’ex zona 3, soppressa nel 2015)</td><td><strong>Nessun IP richiesto dalla 7-701</strong></td><td>Regole generali degli impianti domestici</td><td>L’IP44 resta una scelta sensata vicino al lavabo</td></tr>
</tbody></table>
<p><strong>IP44</strong> = spruzzi d’acqua; <strong>IP65</strong> = getti d’acqua, utile vicino a una doccia a getto, all’esterno o per un faretto molto esposto. Definizioni: <a href="/it/guide/grado-ip-bagno-esterno/">guida ai gradi IP</a>. Specchio e colore: <a href="/it/zone/specchio-bagno/">illuminare lo specchio</a>, <a href="/it/guide/temperatura-colore-kelvin/">Kelvin</a>, <a href="/it/guide/resa-cromatica-cri-ra/">CRI</a>.</p>
<h2>Convertitore lux ↔ lumen ↔ watt</h2>
<p>Scelga un tipo di stanza (superficie e lux di comfort) oppure modifichi uno dei tre valori: gli altri due si ricalcolano (K ≈ 2 per l’illuminazione generale, LED ≈ 100 lm/W). Metodo dettagliato: <a href="/it/tutorial/calcolare-lux-lumen-per-stanza/">lux per stanza</a>.</p>
<div id="conv-bath">
<label>Tipo di stanza <select id="cv-room">${BATH_ROOMS.map(([id, l, lux, m2]) => `<option data-lux="${lux}" data-m2="${m2}" value="${id}"${id === 'bath' ? ' selected' : ''}>${l} (${lux} lx, ${m2} m²)</option>`).join('')}</select></label>
<label>Lux <input id="cv-lux" max="2000" min="20" step="5" type="number" value="175"/></label>
<label>Superficie (m²) <input id="cv-m2" max="80" min="0.5" step="0.1" type="number" value="6"/></label>
<label>Lumen (flusso totale) <input id="cv-lm" max="100000" min="50" step="50" type="number" value="2100"/></label>
<label>Potenza LED (W) <input id="cv-w" max="2000" min="1" step="1" type="number" value="21"/></label>
</div>
<p aria-live="polite" id="cv-hint">≈ 175 lx × 6 m² × K 2 → 2.100 lm → ≈ 21 W LED</p>
<p>Se modifica lumen o watt, si ricalcolano i lux per la superficie scelta (K = 2). Se modifica lux o superficie, si ricalcolano lumen e watt.</p>
<script>(function(){var K=2,LM_W=100,lock=null;function el(i){return document.getElementById(i)}function num(v){return parseFloat(String(v).replace(',','.'))||0}function fmt(n){return Math.round(n).toLocaleString('it-IT')}function fromLux(){var lux=num(el('cv-lux').value),m2=num(el('cv-m2').value),lm=lux*m2*K;el('cv-lm').value=Math.round(lm);el('cv-w').value=Math.max(1,Math.round(lm/LM_W));el('cv-hint').textContent='≈ '+fmt(lux)+' lx × '+m2.toFixed(1)+' m² × K '+K+' → '+fmt(lm)+' lm → ≈ '+fmt(lm/LM_W)+' W LED'}function fromLm(){var lm=num(el('cv-lm').value),m2=num(el('cv-m2').value),lux=m2>0?lm/(m2*K):0;el('cv-lux').value=Math.round(lux);el('cv-w').value=Math.max(1,Math.round(lm/LM_W));el('cv-hint').textContent=fmt(lm)+' lm → ≈ '+fmt(lux)+' lx (superficie '+m2.toFixed(1)+' m²) · ≈ '+fmt(lm/LM_W)+' W LED'}function fromW(){el('cv-lm').value=Math.round(num(el('cv-w').value)*LM_W);fromLm()}el('cv-room').addEventListener('change',function(){var o=this.options[this.selectedIndex];el('cv-lux').value=o.getAttribute('data-lux');el('cv-m2').value=o.getAttribute('data-m2');fromLux()});el('cv-lux').addEventListener('input',function(){if(lock)return;lock='lux';fromLux();lock=null});el('cv-m2').addEventListener('input',function(){if(lock)return;lock='lux';fromLux();lock=null});el('cv-lm').addEventListener('input',function(){if(lock)return;lock='lm';fromLm();lock=null});el('cv-w').addEventListener('input',function(){if(lock)return;lock='w';fromW();lock=null});fromLux()})();</script>
<h2>Idee di prodotti</h2>
${card('IP44', 'Applique specchio bagno IP44', 'Zona 2 / fuori dalle zone.', itS('applique LED specchio bagno IP44', 'Luce specchio IP44'))}
${card('IP65', 'Faretto da incasso bagno IP65', 'Zone umide esposte.', itS('faretto incasso bagno IP65', 'Faretto IP65'))}
${card('IP44', 'Barra LED specchio IP44', 'Luce frontale.', itS('barra LED specchio IP44', 'Barra specchio IP44'))}
${card('SELV', 'Trasformatore 12 V stagno per LED', 'Bassissima tensione per le zone 0–1.', itS('alimentatore LED 12V IP67 stagno', 'Trasformatore SELV 12 V'))}
${note}
<h2>Per approfondire</h2><p>Tutta la stanza: <a href="https://1piece1ampoule.fr/pieces/salle-de-bain/">illuminazione del bagno</a>. Ripristino guasti LED (bagliore, ronzio): <a href="/it/guide/led-sfarfallio-ronzio-bagliore/">guida al ripristino dei LED</a>. Equivalenza delle lampadine: <a href="/it/guide/lumen-watt/">lumen e watt</a>.</p>`,
};

const DIM_ROWS: [string, string, string, string, string, string, string][] = [
  ['leading', 'Leading edge (taglio a inizio onda)', 'gu10', 'LED GU10 dimmerabile', 'risk', 'Alto', 'Vecchi variatori per alogene: sfarfallio frequente. Li sostituisca con un trailing edge.'],
  ['leading', 'Leading edge', 'e27', 'LED E27 dimmerabile', 'risk', 'Alto', 'Stesso problema; le lampadine «compatibili con variatore» a volte funzionano, ma solo a carico alto.'],
  ['leading', 'Leading edge', 'e14', 'LED E14 dimmerabile', 'risk', 'Alto', 'Carichi piccoli: spesso sotto il minimo del variatore → sfarfallio in fondo alla corsa.'],
  ['trailing', 'Trailing edge (taglio a fine onda)', 'gu10', 'LED GU10 dimmerabile', 'ok', 'Basso', 'Combinazione consigliata per i faretti di cucina e soggiorno.'],
  ['trailing', 'Trailing edge', 'e27', 'LED E27 dimmerabile', 'ok', 'Basso', 'Regoli il minimo del variatore dopo la posa.'],
  ['trailing', 'Trailing edge', 'e14', 'LED E14 dimmerabile', 'ok', 'Da basso a medio', 'Sommi il carico (più lampadine) per superare il minimo di 5–10 W.'],
  ['universal', 'Variatore LED «tutte le lampade»', 'gu10', 'LED GU10 dimmerabile', 'ok', 'Molto basso', 'La scelta più affidabile per sostituire un vecchio variatore.'],
  ['universal', 'Tutte le lampade LED', 'e27', 'LED E27 dimmerabile', 'ok', 'Molto basso', 'Non mescoli marche di lampadine sullo stesso variatore.'],
  ['universal', 'Tutte le lampade LED', 'e14', 'LED E14 dimmerabile', 'ok', 'Basso', 'Controlli il carico massimo del variatore (lampadari con molte lampadine).'],
  ['trailing', 'Trailing edge', 'gu10', 'LED GU10 non dimmerabile', 'no', 'n.a.', 'Non dimmerabile: rischio di sfarfallio o guasto precoce. Non la usi.'],
];
const SCORE: Record<string, string> = { ok: '✓ Buona scelta', risk: '⚠ Rischio', no: '✗ Da evitare' };
const btn = (cls: string, attr: string, v: string, label: string, on = false) => `<button type="button" class="${cls}" ${attr}="${v}" aria-pressed="${on}" style="margin:.15rem;padding:.2rem .6rem;border:1px solid #d6d3d1;border-radius:.4rem;${on ? 'font-weight:600;background:#fef3c7' : ''}">${label}</button>`;
const DIMMER_MATRIX_IT: EnPage = {
  path: 'guide/dimmer-led-matrice-gu10-e27-e14', article: true, kicker: 'Guida tecnica · variatori',
  title: 'Matrice variatore (leading / trailing edge) × lampadina LED: GU10, E14, E27',
  description: 'Variatore leading o trailing edge e lampadine LED GU10, E27, E14 dimmerabili: rischio di sfarfallio e combinazioni giuste, con filtri interattivi.',
  h1: 'Variatore × lampadina LED: matrice anti-sfarfallio',
  lead: 'Il leading edge (eredità delle alogene) e il trailing edge (LED) non pilotano la stessa elettronica. Questa matrice incrocia il tipo di variatore con l’attacco (GU10, E27, E14) per stimare il rischio di sfarfallio.',
  body: `<p>Guida dettagliata: <a href="/it/guide/lampadine-led-dimmerabili/">lampadine dimmerabili</a>.</p>
<h2>Filtri interattivi</h2>
<div id="dim-filters"><span>Variatore:</span> ${btn('dim-f', 'data-d', 'all', 'Tutti', true)}${btn('dim-f', 'data-d', 'leading', 'Leading edge')}${btn('dim-f', 'data-d', 'trailing', 'Trailing edge')}${btn('dim-f', 'data-d', 'universal', 'Tutte le lampade')}<br/><span>Lampadina:</span> ${btn('bulb-f', 'data-b', 'all', 'Tutte', true)}${btn('bulb-f', 'data-b', 'gu10', 'GU10')}${btn('bulb-f', 'data-b', 'e27', 'E27')}${btn('bulb-f', 'data-b', 'e14', 'E14')}</div>
<table><thead><tr><th>Variatore</th><th>Lampadina</th><th>Compatibilità</th><th>Sfarfallio</th><th>Consiglio</th></tr></thead><tbody>
${DIM_ROWS.map(([d, dl, b, bl, s, f, n]) => `<tr class="dim-row" data-dimmer="${d}" data-bulb="${b}" data-score="${s}"><td>${dl}</td><td>${bl}</td><td><strong>${SCORE[s]}</strong></td><td>${f}</td><td>${n}</td></tr>`).join('\n')}
</tbody></table>
<script>(function(){var dSel='all',bSel='all';function paint(b,on){b.style.fontWeight=on?'600':'';b.style.background=on?'#fef3c7':'';b.setAttribute('aria-pressed',on?'true':'false')}function apply(){document.querySelectorAll('.dim-row').forEach(function(tr){var show=(dSel==='all'||dSel===tr.getAttribute('data-dimmer'))&&(bSel==='all'||bSel===tr.getAttribute('data-bulb'));tr.style.display=show?'':'none'})}document.querySelectorAll('.dim-f').forEach(function(b){b.addEventListener('click',function(){dSel=b.getAttribute('data-d');document.querySelectorAll('.dim-f').forEach(function(x){paint(x,x===b)});apply()})});document.querySelectorAll('.bulb-f').forEach(function(b){b.addEventListener('click',function(){bSel=b.getAttribute('data-b');document.querySelectorAll('.bulb-f').forEach(function(x){paint(x,x===b)});apply()})});apply()})();</script>
<h2>Idee di prodotti</h2>
${card('Variatore', 'Variatore LED trailing edge', 'Sostituisce un variatore alogeno leading edge.', itS('variatore LED trailing edge', 'Variatore trailing edge'))}
${card('GU10', 'Faretti LED GU10 dimmerabili', 'Compatibili trailing edge.', itS('faretti LED GU10 dimmerabili', 'GU10 dimmerabili'))}
${note}
<h2>Strumenti e guide collegati</h2><ul><li><a href="/it/strumenti/equivalenza-alogeno-led-gu10-e27-lumen/">Equivalenza alogena → LED</a></li><li><a href="/it/guide/sfarfallio-gu10-led-dimmer-diagnosi/">Diagnosi interattiva dello sfarfallio</a></li><li><a href="/it/guide/compatibilita-interruttore-smart-senza-neutro/">Interruttore smart senza neutro</a></li><li><a href="/it/guide/led-sfarfallio-ronzio-bagliore/">Ripristino del ronzio</a></li><li><a href="/it/guide/attacchi-e27-e14-gu10/">Attacchi delle lampadine</a></li></ul>`,
};

const KIT_MODULES = [
  { id: 'shelly-1l', name: 'Shelly 1L', neutre: false, dim: false, minW: 3, bypassLed: true, proto: 'Wi-Fi' },
  { id: 'shelly-d2', name: 'Shelly Dimmer 2', neutre: true, dim: true, minW: 1, bypassLed: false, proto: 'Wi-Fi' },
  { id: 'legrand', name: 'Legrand Céliane con Netatmo', neutre: false, dim: true, minW: 5, bypassLed: true, proto: 'Zigbee' },
  { id: 'aqara-h1', name: 'Aqara H1 (senza neutro)', neutre: false, dim: false, minW: 3, bypassLed: true, proto: 'Zigbee' },
  { id: 'hue', name: 'Philips Hue (lampadine)', neutre: null, dim: true, minW: 0, bypassLed: false, proto: 'Zigbee / BT' },
  { id: 'sonoff-l2', name: 'Sonoff ZBMini-L2', neutre: false, dim: false, minW: 3, bypassLed: true, proto: 'Zigbee' },
];
const KIT_ROOMS = ['Soggiorno', 'Cucina', 'Camera', 'Corridoio', 'Bagno', 'Ufficio', 'Garage'];
const KIT_SCRIPT = `(function(){var modules=${JSON.stringify(KIT_MODULES)},rooms=${JSON.stringify(KIT_ROOMS)};var tbody=document.getElementById('kit-tbody');var modOpts=modules.map(function(m){return '<option value="'+m.id+'">'+m.name+'</option>'}).join('');var roomOpts=rooms.map(function(p){return '<option>'+p+'</option>'}).join('');function rowHtml(){return '<tr class="kit-row"><td><select class="kit-piece">'+roomOpts+'</select></td><td><input class="kit-n" type="number" min="1" value="2" style="width:4.5rem"/></td><td><input class="kit-w" type="number" min="1" step="0.5" value="5" style="width:4.5rem"/></td><td><select class="kit-neutre"><option value="non">No</option><option value="oui">Sì</option><option value="?">Non so</option></select></td><td><select class="kit-dim"><option value="non">No</option><option value="oui">Sì</option></select></td><td><select class="kit-mod">'+modOpts+'</select></td><td><button type="button" class="kit-del">Rimuovi</button></td></tr>'}function modById(id){for(var i=0;i<modules.length;i++)if(modules[i].id===id)return modules[i]}function recalc(){var counts={},bypass=0,warns=[],hue=false,netatmo=false,aqara=false,eco=document.getElementById('kit-eco').value;document.querySelectorAll('.kit-row').forEach(function(tr){var n=+tr.querySelector('.kit-n').value||1,w=+tr.querySelector('.kit-w').value||5,P=n*w,neutre=tr.querySelector('.kit-neutre').value,wantDim=tr.querySelector('.kit-dim').value==='oui',mid=tr.querySelector('.kit-mod').value,m=modById(mid),room=tr.querySelector('.kit-piece').value;if(!m)return;counts[mid]=(counts[mid]||0)+1;if(m.id==='hue')hue=true;if(m.id==='legrand')netatmo=true;if(m.id==='aqara-h1')aqara=true;if(m.neutre===true&&neutre==='non')warns.push('“'+room+'”: '+m.name+' richiede il neutro. Scelga Shelly 1L, Legrand a 2 fili, Aqara H1 o Sonoff L2.');if(m.neutre===false&&neutre==='oui'&&mid==='shelly-1l')warns.push('“'+room+'”: con il neutro disponibile, uno Shelly Dimmer 2 o un variatore cablato è spesso più stabile.');if(wantDim&&!m.dim&&m.id!=='hue')warns.push('“'+room+'”: regolazione richiesta, ma '+m.name+' fa solo acceso e spento.');if(m.minW&&P<m.minW)warns.push('“'+room+'”: carico '+P+' W < '+m.minW+' W minimi per '+m.name+'. Aggiunga punti luce, un bypass o una lampadina più potente.');if(m.bypassLed&&(neutre==='non'||neutre==='?')&&P<8)bypass+=1});if(eco==='hue'&&!counts.hue&&Object.keys(counts).length)warns.push('Ecosistema Hue selezionato: preveda lampadine Hue, oppure un Bridge per i moduli Zigbee di terze parti.');if(eco==='wifi'&&(counts['legrand']||counts['aqara-h1']||counts['sonoff-l2']))warns.push('Ecosistema Wi-Fi Shelly: i moduli Zigbee (Legrand, Aqara, Sonoff) hanno bisogno di un hub separato.');document.getElementById('kit-modules-out').innerHTML=Object.keys(counts).map(function(id){var m=modById(id);return '<li><strong>'+counts[id]+'×</strong> '+(m?m.name:id)+'</li>'}).join('')||'<li>Aggiunga almeno un circuito.</li>';document.getElementById('kit-bypass-out').textContent=bypass?'Bypass anti-sfarfallio stimati: '+bypass+' (uno per apparecchio LED sotto ~8 W su un modulo a 2 fili).':'Nessun bypass necessario con la configurazione attuale.';var hubs=[];if(hue)hubs.push('Philips Hue Bridge (se più di 10 lampadine Bluetooth o automazioni)');if(netatmo)hubs.push('Gateway Legrand Netatmo');if(aqara)hubs.push('Hub Aqara oppure Apple TV / HomePod (Thread)');document.getElementById('kit-hub-out').textContent=hubs.length?'Gateway da prevedere: '+hubs.join(' · '):'';document.getElementById('kit-warn-out').innerHTML=warns.length?warns.map(function(w){return '<li>⚠ '+w+'</li>'}).join(''):'<li>Nessun avviso bloccante per le righe inserite.</li>'}function bindRow(tr){tr.querySelectorAll('input, select').forEach(function(e){e.addEventListener('input',recalc);e.addEventListener('change',recalc)});tr.querySelector('.kit-del').addEventListener('click',function(){tr.remove();recalc()})}document.getElementById('kit-add').addEventListener('click',function(){tbody.insertAdjacentHTML('beforeend',rowHtml());bindRow(tbody.lastElementChild);recalc()});document.getElementById('kit-eco').addEventListener('change',recalc);tbody.insertAdjacentHTML('beforeend',rowHtml());bindRow(tbody.firstElementChild);recalc()})();`;
const KIT_CONFIG_IT: EnPage = {
  path: 'guide/configuratore-kit-smart-senza-neutro', article: true, kicker: 'Guida interattiva · casa smart',
  title: 'Configuratore di kit di illuminazione smart: senza neutro, bypass e moduli Shelly, Hue, Aqara',
  description: 'Costruisca il kit di illuminazione smart stanza per stanza, con o senza filo del neutro: moduli, bypass anti-sfarfallio, gateway e avvisi di compatibilità.',
  h1: 'Costruisca il kit di illuminazione smart stanza per stanza',
  lead: 'Aggiunga ogni punto luce: potenza LED, presenza del neutro nella scatola dell’interruttore e tipo di modulo. Il configuratore stima il numero di bypass anti-sfarfallio (corrente di riposo dei moduli a 2 fili) e segnala i moduli che non si adattano al cablaggio.',
  body: `<p>Lo completi con la <a href="/it/guide/compatibilita-interruttore-smart-senza-neutro/">matrice di compatibilità senza neutro</a>.</p>
<h2>Riferimento moduli</h2>
<table><thead><tr><th>Modulo</th><th>Funziona senza neutro</th><th>Regolazione</th><th>Carico min.</th><th>Bypass LED</th><th>Protocollo</th></tr></thead><tbody>
${KIT_MODULES.map((m) => `<tr><td>${m.name}</td><td>${m.neutre === null ? '— (lampadine)' : m.neutre ? 'No (neutro richiesto)' : 'Sì (2 fili)'}</td><td>${m.dim ? 'Sì' : 'Acceso/spento'}</td><td>${m.minW ? `${m.minW} W` : '—'}</td><td>${m.bypassLed ? 'Spesso' : 'Raramente / no'}</td><td>${m.proto}</td></tr>`).join('\n')}
</tbody></table>
<h2>Stanze e punti luce</h2>
<p>Una riga = un circuito o un apparecchio comandato da un solo modulo. Stacchi la corrente al quadro prima di installare qualsiasi cosa.</p>
<p><label>Ecosistema desiderato <select id="kit-eco"><option value="any">Nessuna preferenza</option><option value="hue">Philips Hue</option><option value="apple">Apple Home / Aqara</option><option value="wifi">Wi-Fi locale (Shelly)</option><option value="zigbee">Zigbee aperto</option></select></label></p>
<table id="kit-table"><thead><tr><th>Stanza</th><th>Punti</th><th>W LED / punto</th><th>Neutro nella scatola?</th><th>Variatore?</th><th>Modulo</th><th></th></tr></thead><tbody id="kit-tbody"></tbody></table>
<p><button id="kit-add" type="button" style="padding:.3rem .8rem;border:1px solid #d6d3d1;border-radius:.4rem">+ Aggiungi una stanza / un circuito</button></p>
<div aria-live="polite" id="kit-summary" class="en-card"><h3>Riepilogo materiale</h3><ul id="kit-modules-out"></ul><p id="kit-bypass-out"></p><p id="kit-hub-out"></p><h3>Avvisi di compatibilità</h3><ul id="kit-warn-out"></ul></div>
<script>${KIT_SCRIPT}</script>
<h2>Idee di prodotti</h2>
${card('Shelly', 'Modulo Shelly senza neutro', 'Micromodulo a 2 fili.', itS('Shelly 1L senza neutro', 'Shelly 1L'))}
${card('Bypass', 'Bypass LED per moduli senza neutro', 'Ferma il bagliore residuo.', itS('Shelly bypass LED senza neutro', 'Bypass'))}
${card('Smart', 'Kit lampadine smart Zigbee E27', 'Un solo ecosistema.', itS('lampadina smart Zigbee E27', 'Lampadine Zigbee E27'))}
${card('Hub', 'Hub Zigbee per la casa smart', 'Hub multimarca.', itS('hub Zigbee domotica', 'Hub Zigbee'))}
${note}
<h2>Strumenti e guide collegati</h2><ul><li><a href="/it/guide/compatibilita-interruttore-smart-senza-neutro/">Matrice interruttori senza neutro</a></li><li><a href="/it/guide/sfarfallio-gu10-led-dimmer-diagnosi/">Diagnosi sfarfallio GU10 / E27</a></li><li><a href="/it/guide/matter-thread-matrice-philips-hue-aqara-govee/">Matrice Matter, Thread, Zigbee</a></li><li><a href="/it/strumenti/">Strumenti per l’illuminazione</a></li><li><a href="/it/marchi/philips-hue/">Ecosistema Philips Hue</a></li></ul>`,
};

const inp = (id: string, label: string, attrs: string, extra = '') => `<label${extra}>${label} <input id="${id}" type="number" ${attrs} style="width:7rem"/></label><br/>`;
const ROI_SCRIPT = `(function(){var SITE_HOURS={retail:14,office:10,workshop:16,communal:11};function el(i){return document.getElementById(i)}function num(v){return parseFloat(String(v).replace(',','.'))||0}function cur(){return el('roi-cur').value}function money(n,d){return cur()+n.toLocaleString('it-IT',{minimumFractionDigits:d,maximumFractionDigits:d})}function applyPreset(){var f=el('roi-fix'),o=f.options[f.selectedIndex];['old','new','life-old','life-new','cost-old','cost-new'].forEach(function(k){var id={'old':'roi-old-w','new':'roi-new-w'}[k]||('roi-'+k);el(id).value=o.getAttribute('data-'+k)});var park=f.value==='parking';el('roi-detect-wrap').style.display=park?'':'none';if(!park)el('roi-detect').value='0'}function calc(){var n=num(el('roi-n').value),oldW=num(el('roi-old-w').value),newW=num(el('roi-new-w').value),days=num(el('roi-days').value),effH=num(el('roi-h').value)*(1-num(el('roi-detect').value)/100),price=num(el('roi-kwh').value),inv=num(el('roi-inv').value),costOld=num(el('roi-cost-old').value),costNew=num(el('roi-cost-new').value),lifeOld=num(el('roi-life-old').value),lifeNew=num(el('roi-life-new').value),labor=num(el('roi-labor').value);var hy=effH*days,kOld=n*oldW*hy/1000,kNew=n*newW*hy/1000,kSave=kOld-kNew,eSave=kSave*price;var rOld=lifeOld>0?(n*hy)/lifeOld:0,rNew=lifeNew>0?(n*hy)/lifeNew:0,crew=Math.max(1,Math.ceil(n/20));var mOld=rOld*costOld+(rOld>=1?Math.floor(rOld)*(labor/crew):0),mNew=rNew*costNew+(rNew>=1?Math.floor(rNew)*(labor/crew*0.3):0),mSave=Math.max(0,mOld-mNew),total=eSave+mSave,pb=total>0?inv/total:Infinity;var pbTxt=!isFinite(pb)?'—':pb<1?Math.round(pb*12)+' mesi':pb.toFixed(1)+' anni';el('roi-result').innerHTML='<p><strong>Consumo attuale:</strong> ≈ '+Math.round(kOld).toLocaleString('it-IT')+' kWh/anno · <strong>dopo i LED:</strong> ≈ '+Math.round(kNew).toLocaleString('it-IT')+' kWh/anno.</p><p><strong>kWh risparmiati:</strong> ≈ <strong>'+Math.round(kSave).toLocaleString('it-IT')+' kWh/anno</strong> ('+money(eSave,2)+' in meno in bolletta a '+money(price,2)+'/kWh).</p><p><strong>Manutenzione evitata (stima):</strong> ≈ '+money(mSave,2)+' / anno (lampade + quota di manodopera; vecchie ≈ '+rOld.toFixed(1)+' sostituzioni/anno contro LED ≈ '+rNew.toFixed(2)+').</p><p><strong>Guadagno annuo totale:</strong> '+money(total,2)+' · <strong>Rientro:</strong> <strong>'+pbTxt+'</strong> per '+money(inv,0)+' investiti.</p><p>'+n+' apparecchi, '+effH.toFixed(1)+' h effettive/giorno ('+days+' giorni/anno). Potenza: '+oldW+' W → '+newW+' W (−'+Math.round((1-newW/oldW)*100)+' %).</p>'}el('roi-site').addEventListener('change',function(){var h=SITE_HOURS[this.value];if(h)el('roi-h').value=h;if(this.value==='communal')el('roi-days').value=365;calc()});el('roi-fix').addEventListener('change',function(){applyPreset();calc()});['roi-cur','roi-n','roi-h','roi-days','roi-detect','roi-old-w','roi-new-w','roi-kwh','roi-inv','roi-cost-old','roi-cost-new','roi-life-old','roi-life-new','roi-labor'].forEach(function(i){el(i).addEventListener('input',calc);el(i).addEventListener('change',calc)});applyPreset();calc()})();`;
const ROI_IT: EnPage = {
  path: 'strumenti/roi-relamping-led', article: true, kicker: 'Strumenti · calcolatore',
  title: 'Calcolatore ROI del relamping LED professionale (kWh, manutenzione, rientro)',
  description: 'Il relamping LED conviene per un negozio, un ufficio, un’officina o un condominio? Tubi T8, pannelli 600×600, faretti alogeni, proiettori da parcheggio: kWh risparmiati, manutenzione evitata e tempo di rientro.',
  h1: 'Rientro del relamping LED (attività e parti comuni)',
  lead: 'Stimare i kWh risparmiati, la manutenzione evitata (durata dei LED rispetto alle lampade vecchie) e il tempo di rientro per un negozio, un ufficio, un’officina o le parti comuni di un condominio. Apparecchi: tubi T8, pannelli 600×600, faretti alogeni, proiettori da parcheggio con sensore di movimento.',
  body: `<p>Prezzo dell’elettricità, valuta e costo di installazione si possono modificare. Veda anche <a href="/it/guide/lumen-watt/">lumen e watt</a>, <a href="/it/guide/illuminazione-esterna-automatica-steinel/">illuminazione esterna con sensori</a> e i <a href="/it/marchi/steinel/">proiettori Steinel</a>.</p>
<h2>Calcolatore</h2>
<div id="roi-tool">
<label>Tipo di sito <select id="roi-site"><option value="retail">Negozio / commercio</option><option value="office">Ufficio / open space</option><option value="workshop">Officina / magazzino</option><option value="communal">Condominio (parti comuni)</option></select></label><br/>
<label>Famiglia di apparecchi <select id="roi-fix">
<option value="t8" data-old="58" data-new="18" data-life-old="12000" data-life-new="50000" data-cost-old="4" data-cost-new="12">Tubo fluorescente T8 58 W → LED 18 W</option>
<option value="panel" data-old="72" data-new="36" data-life-old="15000" data-life-new="50000" data-cost-old="25" data-cost-new="45">Pannello fluorescente 600×600 4×18 W → pannello LED 36 W</option>
<option value="gu10" data-old="50" data-new="6" data-life-old="2000" data-life-new="25000" data-cost-old="3" data-cost-new="8">Faretto alogeno GU10 50 W → LED 6 W</option>
<option value="parking" data-old="250" data-new="80" data-life-old="8000" data-life-new="50000" data-cost-old="80" data-cost-new="120">Proiettore parcheggio 250 W → LED 80 W + sensore</option>
</select></label><br/>
<label>Valuta <select id="roi-cur"><option selected value="€">€</option><option value="£">£</option><option value="$">$</option></select></label><br/>
${inp('roi-n', 'Numero di apparecchi', 'min="1" max="5000" step="1" value="40"')}
${inp('roi-h', 'Ore di accensione al giorno', 'min="0.5" max="24" step="0.5" value="12"')}
${inp('roi-days', 'Giorni all’anno', 'min="200" max="365" step="1" value="300"')}
${inp('roi-detect', 'Riduzione grazie al sensore (%)', 'min="0" max="90" step="5" value="55" title="Quota di tempo in cui la luce resta spenta o attenuata"', ' id="roi-detect-wrap"')}
${inp('roi-old-w', 'Potenza attuale (W per apparecchio)', 'min="1" max="2000" step="1" value="58"')}
${inp('roi-new-w', 'Potenza LED (W per apparecchio)', 'min="1" max="500" step="1" value="18"')}
${inp('roi-kwh', 'Prezzo dell’elettricità (al kWh, tasse incluse)', 'min="0.05" max="0.8" step="0.01" value="0.22"')}
${inp('roi-inv', 'Investimento totale (materiale + installazione)', 'min="100" max="500000" step="50" value="3200"')}
${inp('roi-cost-old', 'Costo di una lampada vecchia', 'min="0" max="500" step="0.5" value="4"')}
${inp('roi-cost-new', 'Costo di un modulo LED', 'min="0" max="500" step="0.5" value="12"')}
${inp('roi-life-old', 'Durata della lampada vecchia (h)', 'min="500" max="50000" step="100" value="12000"')}
${inp('roi-life-new', 'Durata del LED (h)', 'min="10000" max="100000" step="1000" value="50000"')}
${inp('roi-labor', 'Manodopera di sostituzione (per intervento)', 'min="0" max="5000" step="25" value="150"')}
</div>
<div id="roi-result" class="en-card" aria-live="polite"></div>
<p>Le cifre predefinite sono esempi basati sui prezzi francesi: le sostituisca con la propria tariffa e i propri preventivi. I profili «sito» precompilano le ore di utilizzo tipiche. Il parcheggio con sensore applica una riduzione delle ore equivalenti (sensore HF o a infrarossi). Cifre indicative: chieda un preventivo a un installatore, soprattutto se richiede un incentivo per l’efficienza energetica.</p>
<script>${ROI_SCRIPT}</script>
<h2>Strumenti e guide collegati</h2><ul><li><a href="/it/strumenti/convertitore-lux-lumen-watt-superficie/">Convertitore lux ↔ lumen</a></li><li><a href="/it/strumenti/piano-illuminazione-cucina-pdf/">Piano di illuminazione della cucina (PDF)</a></li><li><a href="https://1piece1ampoule.fr/pieces/parking/">Illuminazione di vialetto e parcheggio</a></li><li><a href="https://1piece1ampoule.fr/meilleur/meilleur-projecteur-led-exterieur-detecteur/">Proiettori LED con sensore</a></li><li><a href="https://1piece1ampoule.fr/guides/detecteurs-de-mouvement/">Sensori di movimento</a></li><li><a href="https://1piece1ampoule.fr/articles/economies-led-calcul/">Risparmio LED in casa</a></li></ul>`,
};

const KP_SCRIPT = `(function(){var ZONES=[{key:'bench',label:'Piano di lavoro',lux:500},{key:'island',label:'Isola / penisola',lux:300},{key:'cook',label:'Zona cottura (soffitto)',lux:500},{key:'table',label:'Tavolo da pranzo',lux:200},{key:'circ',label:'Circolazione',lux:100}];var K_CEIL=1.55,K_BENCH=1.4;function el(i){return document.getElementById(i)}function num(v){return parseFloat(String(v).replace(',','.'))||0}function fmt(n){return Math.round(n).toLocaleString('it-IT')}function calc(){var name=(el('kp-name').value||'').trim(),len=num(el('kp-bench-len').value),d=num(el('kp-bench-d').value),areas={island:num(el('kp-island').value),cook:num(el('kp-cook').value),table:num(el('kp-table').value),circ:num(el('kp-circ').value)},k=el('kp-k').value,per=num(el('kp-gu10-lm').value)||500,cri=el('kp-irc90').checked;var benchLm=500*len*d*K_BENCH,lmPerM=len>0?benchLm/len:0,total=0,rows='';ZONES.forEach(function(z){if(z.key==='bench'){if(len<=0)return;rows+='<tr><td>'+z.label+'</td><td>'+z.lux+' lx</td><td>Striscia LED 24 V sotto i pensili (CRI '+(cri?'≥ 90':'≥ 80, 90 consigliato')+')</td><td>'+len.toFixed(1)+' m di sviluppo · ≈ '+Math.round(lmPerM)+' lm/m obiettivo</td></tr>';return}var m2=areas[z.key];if(m2<=0)return;var need=z.lux*m2*K_CEIL,n=Math.max(0,Math.ceil(need/per));total+=n;rows+='<tr><td>'+z.label+' ('+m2.toFixed(1)+' m²)</td><td>'+z.lux+' lx</td><td>Faretti GU10 '+k+' K, fascio 36–60°</td><td>'+n+' faretto'+(n>1?'i':'')+' (≈ '+fmt(need)+' lm)</td></tr>'});el('kp-tbody').innerHTML=rows;el('kp-title').textContent=name||'Piano illuminazione cucina';el('kp-meta').textContent='Colore obiettivo: '+k+' K · CRI '+(cri?'≥ 90 su ogni apparecchio':'≥ 80 minimo, 90 consigliato sul piano di lavoro')+' · Generato il '+new Date().toLocaleDateString('it-IT');el('kp-summary').innerHTML='<p><strong>Faretti GU10 a soffitto, totale:</strong> '+total+'</p><p><strong>Striscia 24 V sotto i pensili:</strong> '+len.toFixed(1)+' m (alimentatore: veda il calcolatore 24 V)</p><p><strong>Circuiti suggeriti:</strong> un circuito dimmerato per pranzo e ambiente, un circuito intenso per piano di lavoro e cottura; se possibile, metta l’isola su un circuito a parte per evitare ombre sul piano.</p>';el('kp-footnote').textContent='Stima basata sui lux abituali (piano di lavoro 500 lx, circolazione 100 lx) e su un fattore soffitto K ≈ '+K_CEIL+'. L’uniformità dipende dall’altezza del soffitto e dalle finiture. Faccia validare la disposizione da un elettricista per le zone umide (lavello) e i carichi dei circuiti.'}el('kp-recalc').addEventListener('click',calc);el('kp-print').addEventListener('click',function(){calc();window.print()});['kp-bench-len','kp-bench-d','kp-island','kp-cook','kp-table','kp-circ','kp-k','kp-gu10-lm','kp-irc90','kp-name'].forEach(function(i){el(i).addEventListener('input',calc);el(i).addEventListener('change',calc)});calc()})();`;
const KITCHEN_PLAN_IT: EnPage = {
  path: 'strumenti/piano-illuminazione-cucina-pdf', article: true, kicker: 'Strumenti · configuratore',
  title: 'Piano di illuminazione della cucina, zona per zona (PDF stampabile)',
  description: 'Progetti l’illuminazione della cucina: 500 lux sul piano di lavoro, isola, zona cottura, tavolo. Numero di faretti GU10, lunghezza della striscia LED 24 V, Kelvin e CRI, pronti da stampare.',
  h1: 'Piano di illuminazione della cucina (stampabile)',
  lead: 'Inserisca superfici e lunghezze: lo strumento propone un piano zona per zona (500 lux sul piano di lavoro, isola, cottura, tavolo, circolazione), il numero di faretti GU10, la lunghezza della striscia LED 24 V sotto i pensili, una temperatura di colore coerente e sorgenti con CRI ≥ 90. Stampi il riepilogo per l’elettricista o per il progetto.',
  body: `<p>Veda anche <a href="/it/zone/piano-lavoro-cucina/">illuminare il piano di lavoro</a>, <a href="https://1piece1ampoule.fr/articles/installer-ruban-led/">installare una striscia LED</a> e <a href="https://1piece1ampoule.fr/outils/calculateur-ruban-led-alimentation-24v/">dimensionare l’alimentatore 24 V</a>.</p>
<h2>Configuratore</h2>
<div id="kitchen-plan-tool">
<label>Nome del progetto (stampato sul foglio) <input id="kp-name" maxlength="80" placeholder="es. cucina 12 m², ristrutturazione" type="text"/></label><br/>
${inp('kp-bench-len', 'Lunghezza del piano di lavoro (m)', 'max="12" min="1" step="0.1" value="3.6"')}
${inp('kp-bench-d', 'Profondità del piano di lavoro (m)', 'max="1" min="0.5" step="0.05" value="0.6"')}
${inp('kp-island', 'Superficie isola / penisola (m²)', 'max="8" min="0" step="0.1" value="2"')}
${inp('kp-cook', 'Zona cottura a soffitto (m²)', 'max="6" min="0" step="0.1" value="1.2"')}
${inp('kp-table', 'Superficie del tavolo da pranzo (m²)', 'max="12" min="0" step="0.1" value="2.4"')}
${inp('kp-circ', 'Superficie di circolazione (m²)', 'max="25" min="2" step="0.1" value="6"')}
<label>Temperatura di colore obiettivo <select id="kp-k"><option value="3000">3000 K, bianco caldo (conviviale)</option><option selected value="4000">4000 K, bianco neutro (cucina, compiti visivi)</option><option value="2700">2700 K, molto caldo (angolo pranzo)</option></select></label><br/>
${inp('kp-gu10-lm', 'Flusso per faretto GU10 (lm)', 'max="800" min="250" step="25" value="500"')}
<label><input checked id="kp-irc90" type="checkbox"/> Richiedere CRI ≥ 90 su ogni sorgente (alimenti, finiture)</label>
</div>
<p class="no-print"><button id="kp-recalc" type="button" style="padding:.3rem .8rem;border:1px solid #d6d3d1;border-radius:.4rem">Aggiorna il piano</button> <button id="kp-print" type="button" style="padding:.3rem .8rem;border:1px solid #d6d3d1;border-radius:.4rem">Stampa / PDF</button></p>
<div id="kp-print-area" class="print-plan-wrap en-card" aria-live="polite"><p>1piece1ampoule.fr · piano indicativo</p><h3 id="kp-title">Piano illuminazione cucina</h3><p id="kp-meta"></p>
<table id="kp-table-out"><thead><tr><th>Zona</th><th>Lux obiettivo</th><th>Soluzione</th><th>Quantità</th></tr></thead><tbody id="kp-tbody"></tbody></table>
<div id="kp-summary"></div><p id="kp-footnote"></p></div>
<style>@media print{body *{visibility:hidden}.print-plan-wrap,.print-plan-wrap *{visibility:visible}.print-plan-wrap{position:absolute;left:0;top:0;width:100%;margin:0;padding:0;box-shadow:none!important}}</style>
<script>${KP_SCRIPT}</script>
<h2>Strumenti e guide collegati</h2><ul><li><a href="/it/strumenti/convertitore-lux-lumen-watt-superficie/">Convertitore lux ↔ lumen</a></li><li><a href="/it/strumenti/equivalenza-alogeno-led-gu10-e27-lumen/">Equivalenza alogena GU10</a></li><li><a href="https://1piece1ampoule.fr/outils/calculateur-ruban-led-alimentation-24v/">Calcolatore striscia LED 24 V</a></li><li><a href="/it/guide/temperatura-colore-kelvin/">Kelvin</a> · <a href="/it/guide/resa-cromatica-cri-ra/">CRI</a></li><li><a href="https://1piece1ampoule.fr/meilleur/meilleur-spot-gu10/">Confronto dei faretti GU10</a></li><li><a href="https://1piece1ampoule.fr/pieces/cuisine/">Illuminazione della cucina</a></li><li><a href="/it/strumenti/roi-relamping-led/">ROI del relamping LED (attività)</a></li></ul>`,
};

const GR35_BUY = 'https://www.awin1.com/cread.php?awinmid=94223&awinaffid=3127458&ued=https%3A%2F%2Fwww.imalentstore.com%2Fproducts%2Fimalent-gr35-4-in-1-edc-flashlight';
const img = (f: string, alt: string, w: number, h: number) => `<img src="/images/tests/imalent-gr35/${f}" alt="${alt}" width="${w}" height="${h}" loading="lazy" style="max-width:100%;height:auto" />`;
const GR35_FAQ: [string, string][] = [
  ['La torcia scalda durante l’uso?', 'Sì. A piena potenza si sente chiaramente il calore sulla mano quando si illumina il palmo. È coerente con una torcia molto luminosa: parte dell’energia elettrica diventa calore nel LED e nel corpo.'],
  ['Il laser verde è stabile?', 'Sì: il puntatore laser verde resta costante durante l’uso.'],
  ['Il laser si può usare in sicurezza?', 'Un laser non va mai puntato verso occhi, persone, animali, veicoli o aeromobili. Tenga la torcia fuori dalla portata dei bambini e usi il laser solo per indicare oggetti per breve tempo, mai verso qualcuno.'],
  ['Il manuale è in francese?', 'No: sull’esemplare provato non era tradotto in francese. Non è obbligatorio, ma è stato il principale limite della confezione per noi, che siamo un sito francese.'],
  ['Che cosa è incluso con la torcia?', 'Oltre alla torcia, la custodia comprende un power bank e una pochette in tessuto grigio: due accessori che abbiamo apprezzato.'],
];
const GR35_TEST_IT: EnPage = {
  path: 'test/imalent-gr35', article: true, kicker: 'Prova prodotto · aggiornata il 2 novembre 2026',
  title: 'Prova Imalent GR35: torcia, laser verde e custodia power bank',
  description: 'Imalent GR35 provata: torcia molto potente, variatore semplice, laser verde, custodia power bank e pochette. Manuale non in francese. Torcia fornita gratis; prova indipendente.',
  h1: 'Prova Imalent GR35: torcia, laser verde e custodia power bank',
  lead: 'L’Imalent GR35 non è una lampadina da soggiorno: è una torcia compatta con laser verde, variatore e una custodia che fa anche da power bank. Ecco che cosa ne abbiamo ricavato dopo averla provata.',
  body: `<p class="en-note"><strong>Torcia fornita gratuitamente da Imalent per questa prova; nessun diritto sul contenuto della recensione.</strong></p>
<p><img src="/images/tests/imalent-gr35/imalent-gr35-contenu-pochette-powerbank-torche.webp" alt="Contenuto della scatola Imalent GR35 su un tavolo: pochette in tessuto grigio, power bank e torcia" width="1600" height="1200" style="max-width:100%;height:auto" /></p>
<h2>Apertura della scatola</h2>
<p>Nella scatola: la torcia, la custodia di ricarica e di trasporto, la pochette in tessuto grigio e il suo power bank. La custodia nera e blu è ben fatta; la pochette ci sta dentro, con il bottone a pressione.</p>
<p>${img('imalent-gr35-torche-dans-son-coffret.webp', 'Torcia Imalent GR35 nella custodia nera e blu, appena aperta', 1600, 1200)}</p>
<p>${img('imalent-gr35-coffret-ouvert-vide.webp', 'Custodia Imalent aperta e vuota, interno nero e blu', 1600, 1200)}</p>
<p>${img('imalent-gr35-coffret-ferme-vue-dessus.webp', 'Custodia Imalent GR35 vista dall’alto, pochette in tessuto grigio nella scatola', 1200, 1600)}</p>
<p>${img('imalent-gr35-torche-pochette-tissu-dans-coffret.webp', 'Pochette in tessuto grigio Imalent GR35 con il bottone a pressione, nella custodia', 1200, 1600)}</p>
<h2>Prime impressioni</h2><p>La qualità si sente e la torcia è semplice da usare.</p>
<h2>Flusso, variatore e laser verde</h2>
<p>La torcia è <strong>molto potente</strong>. Se si punta il fascio sul palmo della mano si sente il calore, e non è poco per una torcia da tasca. Imalent dichiara un flusso massimo di <strong>2.800 lumen</strong> e una portata di <strong>426 m</strong> (dati del costruttore, non misurati da noi). Per dare un ordine di grandezza: una lampadina LED da soggiorno tipica è intorno agli <strong>800 lm</strong>, quindi 2.800 lm sono diverse volte tanto, in un fascio concentrato. Da qui l’uso per illuminare lontano, e da qui il calore: parte dell’energia usata dal LED diventa calore nel corpo della torcia, soprattutto a piena potenza.</p>
<p>Il <strong>variatore è semplice</strong> da usare per regolare la luminosità senza scorrere ogni volta modalità fisse. Il puntatore <strong>laser verde</strong> resta <strong>stabile</strong> durante l’uso. Promemoria di sicurezza: non puntarlo mai verso occhi, persone, animali, veicoli o aeromobili; tenga l’apparecchio fuori dalla portata dei bambini.</p>
<h2>Power bank e pochette</h2><p>A parte la torcia, ciò che ci è piaciuto di più nella confezione è la combinazione <strong>power bank + pochette</strong> integrata nella custodia.</p>
<h2>Il limite: il manuale</h2><p>L’unico vero rammarico: il manuale non era tradotto in francese. Non è obbligatorio, ma una versione francese sarebbe stata gradita ai lettori del sito.</p>
<h2>Punti di forza</h2><ul><li>Buona qualità percepita, semplice da usare.</li><li>Power bank e pochette ben pensati nella custodia.</li><li>Molto potente; variatore semplice.</li><li>Laser verde stabile.</li></ul>
<h2>Limiti</h2><ul><li>Manuale non in francese.</li><li>Calore avvertibile ad alta potenza.</li></ul>
<div class="en-card"><p class="en-flag">Dove acquistare</p><h3>Acquistare l’Imalent GR35</h3>
<p>Prezzo annotato il 2 novembre 2026 su <strong>imalentstore.com</strong>: <strong>72,95 US$</strong> (94,95 US$ barrati); potrebbe essere cambiato. Spedizione, IVA e dogana dipendono dal venditore.</p>
<p>Codice promo Awin pubblicato per la Francia: <code>DZYJ10YHM</code> (−10 % sul negozio IMALENT, valido fino al 27 marzo 2027, fonte Awin); potrebbe non valere nel suo Paese.</p>
<p><a href="${GR35_BUY}" rel="sponsored nofollow noopener" target="_blank" data-awin-link data-awin-mid="94223" data-product="Imalent GR35" data-placement="test-gr35-it">Veda la GR35 sul negozio ufficiale</a></p>
<p class="en-note">Link di affiliazione: potremmo percepire una commissione senza costi aggiuntivi per lei.</p></div>
<h2>A chi è destinata?</h2>
<p>A chi vuole una torcia potente, ricaricabile dalla custodia, con laser verde e luminosità regolabile. Meno adatta se le serve un manuale completo in francese. Per illuminare una cantina, veda le guide <a href="https://1piece1ampoule.fr/pieces/cave-voutee/">cantina a volta</a> e <a href="https://1piece1ampoule.fr/pieces/cave-a-vin/">cantina da vino</a>; per un vialetto, la <a href="https://1piece1ampoule.fr/zones/entree-allee-exterieure/">guida a ingresso e vialetto</a>. Per confrontarla con l’illuminazione fissa, veda la <a href="/it/guide/lumen-watt/">guida lumen e watt</a>, la <a href="https://1piece1ampoule.fr/marques/imalent/">pagina del marchio Imalent</a> e <a href="/it/marchi/">tutti i marchi che seguiamo</a>.</p>
<h2>Dati dichiarati da Imalent</h2>
<p>Cifre prese dalla pagina prodotto del costruttore (non misurate da noi):</p>
<ul><li>Flusso massimo dichiarato: <strong>2.800 lumen</strong>.</li><li>Portata dichiarata: <strong>426 m</strong>.</li><li>Custodia di ricarica: <strong>6.700 mAh</strong>.</li></ul>
<p>Fonte: <a href="${GR35_BUY}" rel="sponsored nofollow noopener" target="_blank">pagina Imalent GR35 su imalentstore.com</a>, controllata il 2 novembre 2026.</p>
<h2>Domande frequenti</h2>
${GR35_FAQ.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('\n')}`,
};

export const TR_LOT6_IT: EnPage[] = [TROUBLESHOOT_IT, BATH_ZONES_IT, DIMMER_MATRIX_IT, KIT_CONFIG_IT, ROI_IT, KITCHEN_PLAN_IT, GR35_TEST_IT];
export const LOT6_IT_GROUPS: { fr: string; it: string }[] = [
  { fr: '/guides/ampoule-led-clignote-eteinte-gresille-depannage/', it: '/it/guide/led-sfarfallio-ronzio-bagliore/' },
  { fr: '/guides/zones-salle-de-bain-ip44-ip65-norme-nfc-15-100/', it: '/it/guide/zone-bagno-ip44-ip65/' },
  { fr: '/guides/matrice-variateur-dimmer-ampoule-led-gu10-e27/', it: '/it/guide/dimmer-led-matrice-gu10-e27-e14/' },
  { fr: '/guides/configurateur-kit-eclairage-connecte-sans-neutre/', it: '/it/guide/configuratore-kit-smart-senza-neutro/' },
  { fr: '/outils/calculateur-roi-relamping-led-professionnel/', it: '/it/strumenti/roi-relamping-led/' },
  { fr: '/outils/generateur-plan-eclairage-cuisine-pdf/', it: '/it/strumenti/piano-illuminazione-cucina-pdf/' },
  { fr: '/tests/imalent-gr35/', it: '/it/test/imalent-gr35/' },
];
