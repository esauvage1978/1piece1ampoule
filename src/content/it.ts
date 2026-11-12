// Edizione italiana (/it/, Italia), dati verificati il 23/10/2026. Link Amazon.it in amz-local.ts, Awin Lampade.it in awin.ts.
import { TUTOS_TR } from './tr-tutos';
import { HIVER_TR } from './tr-hiver';
import { TR_PRIORITY_IT } from './tr-priority-it';
import { TR_PRIORITY_LOT2_IT } from './tr-priority-lot2-it';
import { TR_LOT3_IT } from './tr-lot3-it';
import { TR_LOT6_IT } from './tr-lot6-it';
import { INTENT_IT } from './intentions-gsc';
import type { EnPage } from './en';
export const IT_PAGES: EnPage[] = [
{
path: '', kicker: 'Edizione italiana', title: 'Guide all’illuminazione con dati reali: attacchi, lumen, kelvin, CRI | 1 pièce 1 ampoule',
description: 'Guide LED indipendenti per l’Italia: E27/E14/GU10, lumen per ambiente secondo la UNI EN 12464-1, temperatura di colore, CRI, gradi IP e zone del bagno secondo la CEI 64-8 (Sezione 701).',
h1: 'Scegliere la lampadina giusta, con i numeri', lead: 'Il nostro sito francese aiuta dal 2020 a scegliere le lampadine stanza per stanza. Questa edizione italiana propone le nostre guide più utili, adattate alle norme italiane (CEI 64-8, DM 37/2008, UNI EN 12464-1).',
body: `<h2>Da dove iniziare</h2>
<div class="en-grid">
<a class="en-tile" href="/it/strumenti/"><strong>Simulatore di luce</strong><span>Provate lumen, kelvin e CRI in sei stanze.</span></a>
<a class="en-tile" href="/it/guide/attacchi-e27-e14-gu10/"><strong>Attacchi</strong><span>E27, E14, GU10, GU5.3, G9: riconoscerli in 10 secondi.</span></a>
<a class="en-tile" href="/it/guide/lumen-watt/"><strong>Lumen, non watt</strong><span>Tabella ufficiale delle equivalenze (UE 2019/2015).</span></a>
<a class="en-tile" href="/it/tutorial/calcolare-lux-lumen-per-stanza/"><strong>Lux per stanza</strong><span>Formula ed esempi di calcolo.</span></a>
<a class="en-tile" href="/it/guide/temperatura-colore-kelvin/"><strong>Temperatura di colore</strong><span>2700 K, 3000 K, 4000 K: per quale stanza?</span></a>
<a class="en-tile" href="/it/guide/resa-cromatica-cri-ra/"><strong>Resa cromatica</strong><span>Perché Ra 90 conta in cucina e in bagno.</span></a>
<a class="en-tile" href="/it/guide/grado-ip-bagno-esterno/"><strong>Gradi IP</strong><span>Zone 0–3 del bagno (CEI 64-8/7-701).</span></a>
<a class="en-tile" href="/it/guide/lampadine-led-dimmerabili/"><strong>LED dimmerabili</strong><span>Taglio di fase all’inizio o alla fine, carico minimo.</span></a>
<a class="en-tile" href="/it/tutorial/sostituire-alogene-gu10-mr16-con-led/"><strong>Sostituire le alogene</strong><span>Da GU10 e MR16 a LED, con la trappola del trasformatore.</span></a>
<a class="en-tile" href="/it/tutorial/striscia-led-sotto-pensili-cucina/"><strong>Striscia LED sotto i pensili</strong><span>24 V, sezione dei cavi, alimentatore.</span></a>
<a class="en-tile" href="/it/tutorial/interruttore-smart-senza-neutro/"><strong>Interruttore smart senza neutro</strong><span>Perché le LED sfarfallano, bypass.</span></a>
<a class="en-tile" href="/it/tutorial/illuminare-cantina-senza-corrente/"><strong>Cantina senza corrente</strong><span>Batterie e kit solare 12 V, calcoli in Wh.</span></a>
<a class="en-tile" href="/it/guide/luci-di-natale-interno-esterno/"><strong>Luci di Natale</strong><span>IP44, bassa tensione, consumi.</span></a>
<a class="en-tile" href="/it/guide/fototerapia-luce-mattino-inverno/"><strong>Luce del mattino</strong><span>10.000 lux: perché conta la distanza.</span></a>
<a class="en-tile" href="/it/guide/serate-lunghe-luci-notturne/"><strong>Serate e luci notturne</strong><span>Bianco caldo sotto 3000 K, sicurezza.</span></a>
<a class="en-tile" href="/it/guide/regalare-lampadine-smart/"><strong>Regalare lampadine smart</strong><span>Wi-Fi o Zigbee, dati EPREL.</span></a>
</div>
<h2>Cosa vale in Italia</h2>
<table><thead><tr><th></th><th>Italia</th></tr></thead><tbody>
<tr><td>Tensione di rete</td><td>230 V, 50 Hz</td></tr>
<tr><td>Attacchi più diffusi</td><td>E27, E14, GU10 (230 V), GU5.3 (12 V)</td></tr>
<tr><td>Etichetta energetica</td><td>Etichetta UE A–G (dal 1/9/2021, Regolamento (UE) 2019/2015)</td></tr>
<tr><td>Impianti elettrici</td><td>Norma CEI 64-8; bagni: Parte 7, Sezione 701</td></tr>
<tr><td>Chi può modificare l’impianto</td><td>Impresa abilitata ai sensi del DM 37/2008, con dichiarazione di conformità</td></tr>
<tr><td>Illuminazione dei posti di lavoro</td><td>UNI EN 12464-1</td></tr>
</tbody></table>
<h2>Metodo</h2>
<p>I nostri valori provengono da norme e regolamenti (ecodesign ed etichettatura UE, UNI EN 12464-1, CEI EN 60529, CEI 64-8) o da schede tecniche dei produttori, e ogni calcolo è mostrato. Questa edizione per ora non contiene link di affiliazione (vedi <a href="/it/affiliazione/">affiliazione</a>).</p>`},
{
path: 'guide/lumen-watt', article: true, kicker: 'Guida tecnica', title: 'Lumen o watt: tabella di equivalenza LED ed etichetta energetica (2026)',
description: 'Quanti lumen sostituiscono un’incandescenza da 40, 60, 75 o 100 W? Tabella ufficiale del Regolamento delegato UE 2019/2015, efficienza (lm/W), etichetta energetica A–G e formula del costo elettrico.',
h1: 'Lumen, non watt', lead: 'I watt misurano la potenza assorbita, i lumen la luce emessa. Un LED produce da 5 a 10 volte più luce per watt di un’incandescenza: si compra in lumen.',
body: `<h2>Tabella ufficiale delle equivalenze</h2>
<p>Fonte: Regolamento delegato (UE) 2019/2015, allegato V, tabella 7 (stessi valori del precedente Regolamento (CE) 244/2009, tabella 6) – flusso luminoso per poter dichiarare «equivale a un’incandescenza da X W» per le sorgenti non direzionali.</p>
<table><thead><tr><th>Incandescenza</th><th>Minimo (lm)</th><th>Potenza LED tipica</th></tr></thead><tbody>
<tr><td>25 W</td><td>249</td><td>2,5–3 W</td></tr><tr><td>40 W</td><td>470</td><td>4–5 W</td></tr><tr><td>60 W</td><td>806</td><td>7–9 W</td></tr><tr><td>75 W</td><td>1.055</td><td>10–12 W</td></tr><tr><td>100 W</td><td>1.521</td><td>13–16 W</td></tr></tbody></table>
<p>La potenza LED è un intervallo ricavato da schede tecniche attuali (es. Philips 8 W A60 = 806 lm, cioè 100 lm/W), non un valore normativo.</p>
<h2>Efficienza ed etichetta energetica</h2>
<p>Efficienza = lumen ÷ watt. Dal 1° settembre 2021 vale l’etichetta riscalata A–G (Regolamento (UE) 2019/2015). La classe A parte da circa 210 lm/W; la maggior parte dei LED standard attuali è in classe E o F (85–135 lm/W). Ogni lampadina è registrata nella banca dati europea EPREL (codice QR sull’etichetta).</p>
<h2>Formula del costo elettrico</h2>
<p>Costo annuo = watt × ore al giorno × 365 ÷ 1000 × prezzo del kWh.</p>
<p>Esempio, 3 ore al giorno: incandescenza da 60 W = 65,7 kWh/anno; LED da 8 W = 8,8 kWh/anno. Risparmio: 56,9 kWh per lampadina all’anno; moltiplicatelo per il prezzo del kWh indicato in bolletta.</p>`},
{
path: 'guide/attacchi-e27-e14-gu10', article: true, kicker: 'Guida tecnica', title: 'Riconoscere l’attacco: E27, E14, GU10, GU5.3 (MR16), G9',
description: 'Riconoscete l’attacco in pochi secondi: a vite E27 ed E14, a perni GU10 (230 V) e GU5.3 (12 V), G9 – con diametro, tensione e uso tipico.',
h1: 'Attacchi: E27, E14, GU10…', lead: 'La lettera indica il tipo (E = vite Edison, G = perni, B = baionetta) e il numero il diametro o la distanza tra i perni in millimetri.',
body: `<table><thead><tr><th>Attacco</th><th>Tipo</th><th>Misura</th><th>Uso</th></tr></thead><tbody>
<tr><td><strong>E27</strong></td><td>Vite grande</td><td>27 mm</td><td>Plafoniere, lampade da terra e da tavolo – lo standard</td></tr>
<tr><td><strong>E14</strong></td><td>Vite piccola (“mignon”)</td><td>14 mm</td><td>Lampadine a candela, comodini, frigorifero</td></tr>
<tr><td><strong>GU10</strong></td><td>2 perni con testa, a rotazione</td><td>10 mm</td><td>Faretti da incasso a 230 V</td></tr>
<tr><td><strong>GU5.3</strong> (MR16)</td><td>2 perni sottili, a innesto</td><td>5,3 mm</td><td>Faretti a 12 V, con trasformatore</td></tr>
<tr><td><strong>G9</strong></td><td>2 perni ad ansa</td><td>9 mm</td><td>Piccole lampade di design, 230 V</td></tr>
<tr><td><strong>G4</strong></td><td>2 perni</td><td>4 mm</td><td>Piccole lampade a 12 V</td></tr>
<tr><td><strong>B22</strong></td><td>Baionetta</td><td>22 mm</td><td>Raro in Italia (standard britannico)</td></tr></tbody></table>
<h2>GU10 o GU5.3?</h2>
<p>Il GU10 ha perni spessi con testa e si ruota: tensione di rete, niente trasformatore. Il GU5.3 ha perni sottili e dritti e si innesta: 12 V con trasformatore nel controsoffitto. Una lampadina a 230 V su un trasformatore a 12 V non si accende; una a 12 V collegata a 230 V si distrugge.</p>
<h2>Prima di comprare</h2>
<ul><li>Dimensioni: i LED sono spesso più lunghi della vecchia lampadina.</li><li>Flusso in lumen (vedi <a href="/it/guide/lumen-watt/">lumen o watt</a>).</li><li>Temperatura di colore e resa cromatica (Ra ≥ 90 per cucina e bagno, vedi <a href="/it/guide/resa-cromatica-cri-ra/">resa cromatica</a>).</li><li>«Dimmerabile» solo con un dimmer compatibile (vedi <a href="/it/guide/lampadine-led-dimmerabili/">LED dimmerabili</a>).</li></ul>`},
{
path: 'guide/temperatura-colore-kelvin', article: true, kicker: 'Guida tecnica', title: 'Temperatura di colore: 2700 K, 3000 K, 4000 K o 6500 K – stanza per stanza',
description: 'Cosa significano luce calda, naturale e fredda in kelvin, come leggere il codice 827/930 e quale temperatura di colore scegliere per ogni stanza.',
h1: '2700 kelvin: bianco caldo', lead: '2700 K è bianco caldo, vicino a una vecchia lampadina a incandescenza, per soggiorno, camera e tavolo. Non consuma meno di 4000 K: a parità di lumen cambia solo la tinta.',
body: `<table><thead><tr><th>Kelvin</th><th>Sulla confezione</th><th>Uso</th></tr></thead><tbody>
<tr><td>2200–2700 K</td><td>Luce extra calda / calda</td><td>Soggiorno, camera, sala da pranzo</td></tr>
<tr><td>3000 K</td><td>Luce calda</td><td>Cucina, corridoio, bagno</td></tr>
<tr><td>4000 K</td><td>Luce naturale</td><td>Piano di lavoro, studio, ripostiglio</td></tr>
<tr><td>5000–6500 K</td><td>Luce fredda / luce diurna</td><td>Laboratorio, garage</td></tr></tbody></table>
<p>Il codice a tre cifre combina resa cromatica e kelvin: «827» = Ra 80+, 2700 K; «930» = Ra 90+, 3000 K; «840» = Ra 80+, 4000 K.</p>
<h2>Stanza per stanza</h2>
<ul><li><strong>Soggiorno e camera:</strong> 2700 K.</li><li><strong>Cucina:</strong> 3000 K generale, 4000 K sotto i pensili.</li><li><strong>Specchio del bagno:</strong> 3000–4000 K con Ra 90.</li><li><strong>Studio:</strong> 4000 K sulla scrivania.</li><li><strong>Ripostiglio, laboratorio:</strong> 4000–6500 K.</li></ul>
<p>Tenete una sola temperatura per stanza: 2700 K e 4000 K nello stesso campo visivo sembrano entrambe strane.</p>`},
{
path: 'guide/resa-cromatica-cri-ra', article: true, kicker: 'Guida tecnica', title: 'Resa cromatica (CRI/Ra): perché Ra 90 conta – e cos’è R9',
description: 'L’indice di resa cromatica Ra indica quanto appaiono naturali i colori. Minimo di legge Ra 80 (UE 2019/2020), quando conviene Ra 90+ e come leggere il codice 927/930.',
h1: 'Lampadina LED e IRC (Ra)', lead: 'L’IRC, o valore Ra, dice se i colori appaiono naturali. Incandescenza e luce naturale: 100. Il minimo di legge per una lampadina LED di uso generale è Ra 80 (UE 2019/2020). Per cucina e bagno, Ra 90.',
body: `<table><thead><tr><th>Ra</th><th>Significato</th><th>Fonte</th></tr></thead><tbody>
<tr><td>80</td><td>Minimo di legge per le lampade LED per illuminazione generale</td><td>Regolamento (UE) 2019/2020</td></tr>
<tr><td>80</td><td>Minimo per i posti di lavoro interni (ufficio)</td><td>UNI EN 12464-1</td></tr>
<tr><td>90+</td><td>Pelle, cibi e legno appaiono naturali</td><td>Gamme «alto CRI» dei produttori</td></tr>
<tr><td>95+</td><td>Lavori critici sul colore: pittura, fotografia</td><td>Lampade speciali</td></tr></tbody></table>
<h2>Cos’è R9?</h2>
<p>Ra fa la media di 8 colori pastello. R9 misura a parte il rosso saturo, il punto debole di molti LED. Una lampada Ra 80 può avere un R9 vicino a zero: la pelle appare spenta. Per le lampade ad alto CRI, cercate R9 &gt; 50 nella scheda tecnica.</p>
<h2>Dove conviene Ra 90</h2><ul><li>Specchio del bagno e toeletta</li><li>Piano di lavoro della cucina</li><li>Stanze con quadri o legno</li></ul><p>In corridoio o ripostiglio basta Ra 80. Per la tonalità della luce, vedi <a href="/it/guide/temperatura-colore-kelvin/">temperatura di colore</a>.</p>`},
{
path: 'guide/grado-ip-bagno-esterno', article: true, kicker: 'Guida tecnica', title: 'Gradi IP nell’illuminazione: zone del bagno secondo la CEI 64-8 (Sezione 701) ed esterno',
description: 'Cosa significano IP44, IP65 e IP67 (CEI EN 60529), quale grado IP richiede ogni zona del bagno secondo la CEI 64-8/7 Sezione 701 e quali lavori spettano a un’impresa abilitata (DM 37/2008).',
h1: 'Gradi IP: bagno ed esterno', lead: 'Il codice IP (CEI EN 60529) ha due cifre: la prima per i solidi (0–6), la seconda per l’acqua (0–9). «X» = non provato.',
body: `<table><thead><tr><th>Grado</th><th>Protezione dall’acqua</th><th>Uso</th></tr></thead><tbody>
<tr><td>IP20</td><td>nessuna</td><td>Interni asciutti</td></tr>
<tr><td>IP44</td><td>Spruzzi da ogni direzione</td><td>Zone 1 e 2 del bagno, facciata riparata</td></tr>
<tr><td>IP65</td><td>Getti d’acqua</td><td>Esterno esposto</td></tr>
<tr><td>IP67</td><td>Immersione temporanea fino a 1 m</td><td>Zona 0 del bagno, faretti a pavimento</td></tr>
<tr><td>IP68</td><td>Immersione continua (secondo il produttore)</td><td>Laghetti, piscine</td></tr></tbody></table>
<h2>Zone del bagno (CEI 64-8/7, Sezione 701)</h2>
<ul><li><strong>Zona 0</strong> (interno della vasca o del piatto doccia): IPX7, solo SELV fino a 12 V c.a.</li>
<li><strong>Zona 1</strong> (sopra la vasca o la doccia fino a 2,25 m dal pavimento): IPX4 (IPX5 se si pulisce con getti d’acqua).</li>
<li><strong>Zona 2</strong> (fascia di 0,6 m attorno alla zona 1): IPX4 (IPX5 con getti d’acqua).</li>
<li><strong>Zona 3</strong> (fino a 2,40 m oltre la zona 2, o oltre la zona 1 per le docce senza piatto, fino a 2,25 m di altezza): IPX1 (IPX5 con getti d’acqua).</li></ul>
<p>Per le docce senza piatto non esiste una zona 2: la zona 1 si estende a 1,20 m dal soffione. I circuiti del bagno devono essere protetti da un interruttore differenziale con Idn ≤ 30 mA. Le modifiche all’impianto spettano a un’impresa abilitata ai sensi del DM 22 gennaio 2008, n. 37, che rilascia la dichiarazione di conformità. Cambiare una lampadina non richiede nulla di tutto questo.</p>
<p class="en-note">Fonti: Norma CEI 64-8, Parte 7, Sezione 701 (art. 701.2.2–701.2.5); Norma CEI EN 60529; DM 37/2008 (art. 7, dichiarazione di conformità).</p>`},
{
path: 'guide/lampadine-led-dimmerabili', article: true, kicker: 'Guida tecnica', title: 'Lampadine LED dimmerabili: taglio di fase, sfarfallio e ronzio',
description: 'Perché i LED sfarfallano o ronzano con un dimmer: taglio all’inizio o alla fine della fase, carico minimo, liste di compatibilità e soluzioni.',
h1: 'LED dimmerabili e dimmer', lead: 'Un LED non dimmerabile su un dimmer può sfarfallare, ronzare o guastarsi presto. Anche un LED dimmerabile su un vecchio dimmer: i due devono essere compatibili.',
body: `<h2>Tre verifiche</h2>
<ol><li><strong>La lampadina è «dimmerabile»</strong> secondo confezione e scheda tecnica.</li>
<li><strong>Il dimmer accetta i LED.</strong> I vecchi dimmer per incandescenza tagliano spesso all’inizio della fase (TRIAC) con un carico minimo di 20–60 W; tre LED da 5 W (15 W) restano sotto e sfarfallano. I dimmer per LED tagliano di solito alla fine della fase e accettano carichi piccoli.</li>
<li><strong>Carico entro i limiti.</strong> Usate il valore LED indicato sul dimmer, non quello per incandescenza.</li></ol>
<p>I produttori di dimmer pubblicano liste di compatibilità per modello di lampadina. Sostituire un interruttore con un dimmer è un intervento sull’impianto: togliete tensione dal quadro e verificatene l’assenza, oppure rivolgetevi a un’impresa abilitata (DM 37/2008).</p>
<table><thead><tr><th>Sintomo</th><th>Causa</th><th>Soluzione</th></tr></thead><tbody>
<tr><td>Sfarfallio a bassa intensità</td><td>Carico minimo non raggiunto</td><td>Dimmer per LED (taglio alla fine della fase), regolare il minimo</td></tr>
<tr><td>Ronzio</td><td>Taglio all’inizio della fase con driver LED</td><td>Dimmer a taglio alla fine della fase</td></tr>
<tr><td>Luce residua a spento</td><td>Corrente di dispersione attraverso dimmer o interruttore smart</td><td>Dimmer con neutro o compensatore di carico</td></tr>
<tr><td>Non scende sotto il 50 %</td><td>Combinazione incompatibile</td><td>Consultare la lista di compatibilità</td></tr></tbody></table>`},
{
path: 'tutorial/calcolare-lux-lumen-per-stanza', article: true, kicker: 'Tutorial', title: 'Quanta luce serve in una stanza? Calcolare lux e lumen (UNI EN 12464-1)',
description: 'Livelli di illuminamento consigliati in lux per stanza, basati sulla UNI EN 12464-1, e la formula per passare dai lux ai lumen, con esempi per cucina e soggiorno.',
h1: 'Calcolare lux e lumen per stanza', lead: 'Lux (lx) = lumen per metro quadrato: la luce che arriva su una superficie.',
body: `<p>Non esiste una norma obbligatoria per le abitazioni. I valori per le superfici di lavoro derivano dalla UNI EN 12464-1 (illuminazione dei posti di lavoro interni, es. 500 lx per leggere e scrivere); i valori domestici sono valori di progetto abituali.</p>
<table><thead><tr><th>Stanza</th><th>Lux</th></tr></thead><tbody>
<tr><td>Corridoio, scale</td><td>100–150</td></tr><tr><td>Soggiorno (generale)</td><td>100–200</td></tr><tr><td>Camera (generale)</td><td>100–150</td></tr><tr><td>Cucina (generale)</td><td>200–300</td></tr><tr><td>Piano di lavoro, lettura, scrivania</td><td>500</td></tr><tr><td>Specchio del bagno</td><td>300–500</td></tr><tr><td>Banco da lavoro</td><td>500–750</td></tr></tbody></table>
<h2>La formula</h2>
<p>Lumen necessari = lux obiettivo × superficie (m²) ÷ fattore di utilizzazione.</p>
<p>Il fattore (0,5–0,6 in una casa normale con pareti chiare) tiene conto della luce assorbita da pareti, soffitto e paralumi. Con pareti scure, usate 0,5.</p>
<h2>Esempio: cucina</h2>
<p>3 × 4 m = 12 m², obiettivo 300 lx: 300 × 12 ÷ 0,55 = <strong>6.545 lm</strong>. Con faretti GU10 LED da 350 lm: 6.545 ÷ 350 ≈ <strong>19 faretti</strong>, oppure meno faretti e strisce LED sotto i pensili per 500 lx sul piano di lavoro.</p>
<h2>Esempio: soggiorno</h2>
<p>4 × 5 m = 20 m², obiettivo 150 lx: 150 × 20 ÷ 0,55 = <strong>5.455 lm</strong>, circa 7 lampadine da 806 lm (equivalenti a 60 W) distribuite tra soffitto e lampade da terra.</p>
<h2>Verificarlo</h2>
<p>Un’app luxmetro sullo smartphone dà un valore indicativo (±10–20 % a seconda del telefono). Misurate all’altezza del tavolo o del piano di lavoro, con la luce accesa e le tende chiuse.</p>`},
{
path: 'tutorial/sostituire-alogene-gu10-mr16-con-led', article: true, kicker: 'Tutorial', title: 'Sostituire i faretti alogeni GU10 e MR16 (GU5.3) con LED',
description: 'Passo per passo: distinguere GU10 (230 V) da GU5.3/MR16 (12 V), scegliere lumen e angolo del fascio, risolvere i problemi di trasformatore e dimmer.',
h1: 'Sostituire le alogene con LED', lead: 'Per dichiararsi equivalente a un’alogena MR16 da 50 W, un LED deve emettere almeno 540 lm in un cono di 90° (UE 2019/2015). Confrontate sempre i lumen, non i watt.',
body: `<h2>1. Riconoscere il faretto</h2>
<ul><li><strong>GU10:</strong> due perni corti con testa, si ruota. 230 V, senza trasformatore.</li><li><strong>MR16 (GU5.3):</strong> due perni sottili e dritti, si innesta. 12 V tramite trasformatore nel controsoffitto.</li></ul>
<p>Dettagli e altri attacchi: <a href="/it/guide/attacchi-e27-e14-gu10/">riconoscere l’attacco</a>.</p>
<h2>2. Scegliere il flusso</h2>
<table><thead><tr><th>Alogena sostituita</th><th>Flusso minimo Φ90° per dichiarare l’equivalenza</th></tr></thead><tbody><tr><td>MR16 GU5.3, 35 W</td><td>300 lm</td></tr><tr><td>MR16 GU5.3, 50 W</td><td>540 lm</td></tr><tr><td>PAR16 a tensione di rete (GU10), 35 W</td><td>200 lm</td></tr><tr><td>PAR16 a tensione di rete (GU10), 50 W</td><td>300 lm</td></tr></tbody></table>
<p>Fonte: Regolamento (UE) 1194/2012, allegato III, tabella 6, ripresa nel Regolamento delegato (UE) 2019/2015, tabella 4; per i LED il valore va moltiplicato per il fattore di mantenimento del flusso e, sotto i 20° di apertura, per un fattore da 0,8 a 0,9. Confrontate il flusso Φ90° indicato nella scheda del LED. Mantenete l’angolo del fascio (di solito 36–40°) e scegliete 2700–3000 K per una luce calda come l’alogena.</p>
<h2>3. MR16: la trappola del trasformatore</h2>
<p>I vecchi trasformatori elettronici richiedono spesso un carico minimo di 20–35 W. Un solo LED da 4 W resta sotto: sfarfallio o niente. Soluzione: un driver LED per la potenza totale, oppure passare a portalampade GU10 a 230 V (intervento sull’impianto: impresa abilitata, DM 37/2008).</p>
<h2>4. Dimmer</h2><p>Vedi <a href="/it/guide/lampadine-led-dimmerabili/">LED dimmerabili</a>: lampadine dimmerabili e dimmer a taglio alla fine della fase.</p>
<h2>5. Sicurezza</h2><p>Togliete tensione dal quadro e lasciate raffreddare le alogene: superano ampiamente i 100 °C. Per gli incassi in soffitti isolati, verificate che l’apparecchio ammetta il contatto con materiale isolante.</p>`},
{
path: 'affiliazione', kicker: 'Trasparenza', title: 'Affiliazione e pubblicità | 1 pièce 1 ampoule', description: 'Come si finanzia 1piece1ampoule.fr e come sono segnalati i link di affiliazione.',
h1: 'Affiliazione', lead: 'Alcuni link delle pagine in italiano sono link di affiliazione: ecco come funzionano.',
body: `<p>1piece1ampoule.fr è un sito indipendente. Per finanziarlo, alcune pagine contengono link di affiliazione:</p><ul><li><strong>Amazon.it</strong>: in qualità di Affiliato Amazon, riceviamo un guadagno dagli acquisti idonei. I pulsanti «Vedi su Amazon.it» portano a prodotti controllati sul sito italiano.</li><li><strong>Awin</strong>: link verso il negozio Lampade.it.</li></ul><p>Se acquistate dopo aver cliccato, il venditore ci versa una piccola commissione; il prezzo per voi non cambia. Questi link sono segnalati sotto ogni riquadro e portano l’attributo <code>rel="sponsored nofollow"</code>. Le commissioni non influenzano le nostre valutazioni: scegliamo in base a dati pubblicati (lumen, Ra, tensione, classe energetica). Prezzi e disponibilità possono cambiare: fa fede la pagina del venditore.</p>`},
{
path: 'note-legali', kicker: 'Legale', title: 'Note legali | 1 pièce 1 ampoule', description: 'Editore, hosting e responsabilità di 1piece1ampoule.fr (edizione italiana).',
h1: 'Note legali', lead: 'Informazioni sul titolare del sito.',
body: `<h2>Editore</h2><p>Emmanuel Sauvage (privato, editore), Erquinghem-Lys, Francia.<br>E-mail: <a href="mailto:contact@1piece1ampoule.fr">contact@1piece1ampoule.fr</a><br>Sito: <a href="https://emmanuelsauvage.fr/">emmanuelsauvage.fr</a></p>
<p>L’editore ha sede in Francia; si applica il diritto francese (LCEN, art. 6).</p>
<h2>Hosting</h2><p>o2switch, Clermont-Ferrand, Francia.</p>
<h2>Responsabilità</h2><p>Controlliamo i contenuti con cura, ma norme e prodotti cambiano. Gli interventi sull’impianto elettrico spettano a un’impresa abilitata.</p>`},
{
path: 'privacy', kicker: 'Legale', title: 'Informativa sulla privacy | 1 pièce 1 ampoule', description: 'Quali dati personali tratta 1piece1ampoule.fr (Google Analytics solo con consenso), base giuridica e diritti secondo il GDPR.',
h1: 'Informativa sulla privacy', lead: 'Raccogliamo il minimo: statistiche di visita solo con il vostro consenso.',
body: `<h2>Titolare del trattamento</h2><p>Emmanuel Sauvage, Erquinghem-Lys, Francia – <a href="mailto:contact@1piece1ampoule.fr">contact@1piece1ampoule.fr</a>.</p>
<h2>Dati trattati</h2><ul><li><strong>Statistiche di visita (Google Analytics 4)</strong>, solo dopo «Accetta tutto» o selezionando «Statistiche». Google Consent Mode è su «denied» per impostazione predefinita. Dati: pagine viste, posizione approssimativa, tipo di dispositivo, clic sui link dei partner.</li><li><strong>La vostra scelta sui cookie</strong>, nel browser (chiave localStorage <code>cookie_consent_v1</code>).</li><li><strong>E-mail</strong> che ci inviate, solo per il tempo necessario a rispondere.</li></ul>
<h2>Base giuridica</h2><p>Consenso (art. 6.1.a GDPR) per le statistiche; legittimo interesse (art. 6.1.f) per rispondere ai messaggi.</p>
<h2>Conservazione</h2><p>Dati di Google Analytics: 14 mesi. La scelta sui cookie resta nel browser finché non la cancellate o modificate.</p>
<h2>Destinatari</h2><p>Google Ireland Ltd. (Analytics).</p>
<h2>I vostri diritti</h2><p>Accesso, rettifica, cancellazione, limitazione, opposizione e revoca del consenso in qualsiasi momento (<a href="/it/cookie/">impostazioni cookie</a>). Potete proporre reclamo alla CNIL (Francia) o al Garante per la protezione dei dati personali.</p>`},
{
path: 'cookie', kicker: 'Legale', title: 'Cookie policy | 1 pièce 1 ampoule', description: 'Quali cookie usa 1piece1ampoule.fr e come modificare la vostra scelta.',
h1: 'Cookie policy', lead: 'Prima della vostra scelta si usa solo l’archiviazione strettamente necessaria.',
body: `<table><thead><tr><th>Nome</th><th>Finalità</th><th>Durata</th><th>Consenso</th></tr></thead><tbody>
<tr><td>cookie_consent_v1 (localStorage)</td><td>Ricorda la vostra scelta</td><td>finché non la cancellate</td><td>non necessario</td></tr>
<tr><td>_ga, _ga_*</td><td>Statistiche di visita Google Analytics 4</td><td>fino a 13 mesi</td><td>necessario</td></tr></tbody></table>
<p>«Accetta tutto» e «Rifiuta tutto» sono mostrati allo stesso livello. Rifiutare non limita l’uso del sito.</p>
<p><button type="button" class="en-amz" onclick="window.__showCookiePreferences && window.__showCookiePreferences()">Modifica le impostazioni dei cookie</button></p>`},
];
IT_PAGES.splice(IT_PAGES.findIndex((p) => p.path === 'tutorial/sostituire-alogene-gu10-mr16-con-led') + 1, 0, ...TUTOS_TR.it);

IT_PAGES.splice(IT_PAGES.findIndex((p) => p.path === 'guide/lampadine-led-dimmerabili') + 1, 0, ...HIVER_TR.it);

IT_PAGES.push(...TR_PRIORITY_IT);
IT_PAGES.push(...TR_PRIORITY_LOT2_IT);
IT_PAGES.push(...TR_LOT3_IT);
IT_PAGES.push(...TR_LOT6_IT);
IT_PAGES.push(...INTENT_IT);
