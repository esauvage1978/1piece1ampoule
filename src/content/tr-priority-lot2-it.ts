// Pagine prioritarie IT lot 2 (ott. 2026). Tradotte da EN/FR, verificate 30/10/2026.
import type { EnPage } from './en';

const amz = (asin: string, label: string) =>
  `<a class="en-amz" href="https://www.amazon.it/dp/${asin}?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="${asin}" data-product="${label}">Vedi prezzo su Amazon.it</a>`;
const note = `<p class="en-note">Dati da scheda produttore/Amazon verificati il 30/10/2026. I prezzi cambiano — controllare prima dell'acquisto. In qualità di affiliato Amazon percepiamo commissioni sugli acquisti idonei.</p>`;

const err = (p: Omit<EnPage, 'article'> & { kicker?: string }): EnPage => ({
  ...p,
  article: true,
  kicker: p.kicker ?? 'Guida codici errore',
});

export const TR_PRIORITY_LOT2_IT: EnPage[] = [
  err({
    path: 'guide/codice-errore/hue-bridge-led-arancione',
    title: 'Hue Bridge: LED arancione (senza internet)',
    description: 'LED arancione: lampadine locali ok, cloud e assistenti vocali falliscono. DHCP, DNS, cavo Ethernet.',
    h1: 'Hue Bridge: LED arancione senza internet',
    lead: 'La LED del Bridge resta arancione invece che blu; le lampadine possono rispondere in locale ma le automazioni cloud no.',
    body: `<p><strong>Sintomo:</strong> LED arancione; controllo locale a volte ok; cloud/Alexa/Google non funzionano.</p>
<p><strong>Cause probabili:</strong> nessun indirizzo via DHCP (Dynamic Host Configuration Protocol, assegnazione automatica IP) sulla LAN, DNS (Domain Name System) bloccato, filtro parentale sui server Signify, cavo Ethernet difettoso.</p>
<h2>Passi</h2><ol>
<li>Verificare internet sulla stessa porta LAN con un altro dispositivo.</li>
<li>Riavviare il router con il Bridge collegato.</li>
<li>Autorizzare il MAC del Bridge nel router (etichetta sull’unità).</li>
<li>Provare DNS pubblici (1.1.1.1 / 8.8.8.8) se il DNS è filtrato.</li>
<li>LED ancora arancione con cavo nuovo: assistenza Philips Hue.</li>
</ol>
<p><strong>Attrezzi:</strong> cavo Ethernet di scorta.</p>
<p><strong>Sicurezza:</strong> non aprire il Bridge — 230 V all’interno.</p>
<p>Difficoltà 2/5 · 20–40 min · €0–22. Supporto: <a href="https://www.philips-hue.com/en-gb/support" rel="nofollow noopener" target="_blank">philips-hue.com</a>.</p>`,
  }),
  err({
    path: 'guide/codice-errore/hue-bridge-limite-50-dispositivi',
    title: 'Hue Bridge: impossibile aggiungere lampadine (limite Zigbee)',
    description: 'Associazione fallisce vicino a ~50 luci Hue: rimuovere fantasmi, associare vicino al Bridge, pianificare i canali.',
    h1: 'Hue Bridge: limite dispositivi Zigbee',
    lead: 'L’app rifiuta di associare una lampadina lampeggiante, spesso dopo ~50 luci o troppi router Zigbee (rete mesh a basso consumo).',
    body: `<p><strong>Sintomo:</strong> associazione fallita mentre la lampadina lampeggia.</p>
<p><strong>Cause probabili:</strong> mesh Zigbee satura; lampadine ripetitore mal posizionate; voci fantasma nell’app.</p>
<h2>Passi</h2><ol>
<li>Eliminare luci inutilizzate nelle impostazioni dell’app.</li>
<li>Associare entro 3 m dal Bridge, poi spostare la lampadina.</li>
<li>Pianificare i canali Zigbee se usate più Bridge.</li>
<li>Reset della lampadina e nuovo tentativo (sequenza specifica del modello).</li>
<li>Grande impianto: secondo Hue Bridge su rete separata.</li>
</ol>
<p>Difficoltà 3/5 · 30–60 min · €0–55.</p>`,
  }),
  err({
    path: 'guide/codice-errore/ikea-dirigera-tradfri-migrazione',
    title: 'DIRIGERA: luci TRÅDFRI assenti dopo la migrazione',
    description: 'Migrazione IKEA DIRIGERA: TRÅDFRI acceso, nuova ricerca dispositivi, reset degli orfani.',
    h1: 'DIRIGERA: migrazione TRÅDFRI',
    lead: 'Dopo il passaggio a DIRIGERA, alcune lampadine o sensori TRÅDFRI non compaiono più.',
    body: `<p><strong>Sintomo:</strong> dispositivi TRÅDFRI mancanti dopo la migrazione.</p>
<p><strong>Cause probabili:</strong> migrazione interrotta; due hub attivi; dispositivi fuori portata durante il trasferimento.</p>
<h2>Passi</h2><ol>
<li>Eseguire la procedura guidata IKEA (TRÅDFRI alimentato).</li>
<li>Spegnere il vecchio gateway al termine.</li>
<li>Avvicinare i dispositivi mancanti; cercare di nuovo.</li>
<li>Reset e riassociazione degli orfani.</li>
<li>Assistenza IKEA se la migrazione fallisce due volte.</li>
</ol>
<p>Difficoltà 2/5 · 30–60 min · €0.</p>`,
  }),
  err({
    path: 'guide/codice-errore/ikea-tradfri-gateway-offline',
    title: 'Gateway IKEA TRÅDFRI offline',
    description: 'Gateway TRÅDFRI offline: Ethernet, alimentazione USB, mDNS (Multicast DNS), riaggiunta via QR.',
    h1: 'Gateway TRÅDFRI offline',
    lead: 'L’app IKEA segnala il gateway disconnesso; gli interruttori a parete possono ancora funzionare in locale.',
    body: `<p><strong>Sintomo:</strong> gateway offline nell’app.</p>
<p><strong>Cause probabili:</strong> Ethernet scollegato; alimentazione USB insufficiente; mDNS (Multicast DNS) bloccato sul router.</p>
<h2>Passi</h2><ol>
<li>Controllare la LED di alimentazione.</li>
<li>Ricollegare l’Ethernet al router principale.</li>
<li>Riavviare router e gateway.</li>
<li>Riaggiungere con codice QR.</li>
<li>Reset di fabbrica e assistenza IKEA se necessario.</li>
</ol>
<p>Difficoltà 2/5 · 10–25 min · €0.</p>`,
  }),
  err({
    path: 'guide/codice-errore/nanoleaf-layout-non-valido',
    title: 'Nanoleaf: layout non valido o pannello mancante',
    description: 'Layout Nanoleaf rifiutato: ricollegare i connettori, trovare il pannello grigio, firmware, limite pannelli.',
    h1: 'Nanoleaf: layout non valido',
    lead: 'L’app non convalida la forma oppure un pannello resta grigio.',
    body: `<p><strong>Sintomo:</strong> layout non valido o pannello grigio.</p>
<p><strong>Cause probabili:</strong> connettore allentato; pannello guasto; superato il limite pannelli; firmware obsoleto.</p>
<h2>Passi</h2><ol>
<li>Ricollegare ogni connettore fino al clic.</li>
<li>Rimuovere i pannelli uno alla volta per individuare il guasto.</li>
<li>Aggiornare il firmware del controller.</li>
<li>Rispettare il massimo pannelli per kit.</li>
<li>Garanzia per pannello morto.</li>
</ol>
<p>Difficoltà 2/5 · 15–35 min · €0. <a href="https://help.nanoleaf.me/" rel="nofollow noopener" target="_blank">Assistenza Nanoleaf</a>.</p>`,
  }),
  err({
    path: 'guide/codice-errore/schneider-wiser-matter-thread',
    title: 'Schneider Wiser Matter: associazione fallita (Thread)',
    description: 'QR Matter Wiser fallisce: firmware, router di confine Thread, isolamento VLAN.',
    h1: 'Wiser Matter: fallimento in Apple Home',
    lead: 'Il QR Matter del dimmer Wiser fallisce o si blocca in Apple Home.',
    body: `<p><strong>Sintomo:</strong> associazione Matter fallita.</p>
<p><strong>Cause probabili:</strong> firmware obsoleto; assenza di router di confine Thread; dispositivo già associato.</p>
<h2>Passi</h2><ol>
<li>Aggiornare tramite Wiser by SE.</li>
<li>Assicurarsi un router di confine <strong>Thread</strong> (rete mesh IoT usata con Matter) sulla LAN.</li>
<li>Reset Matter sul dispositivo.</li>
<li>Disattivare l’isolamento VLAN (Virtual Local Area Network).</li>
<li>Consultare l’elenco dispositivi Matter Schneider.</li>
</ol>
<p>Difficoltà 3/5 · 25–45 min · €0.</p>`,
  }),
  err({
    path: 'guide/codice-errore/shelly-dimmer-2-wifi-offline',
    title: 'Shelly Dimmer 2 Wi-Fi offline',
    description: 'Shelly Dimmer 2 offline: Wi-Fi 2,4 GHz, modalità AP, prenotazione IP DHCP.',
    h1: 'Shelly Dimmer 2 Wi-Fi offline',
    lead: 'Modulo non risponde nell’app; il dimmer fisico può ancora funzionare.',
    body: `<p><strong>Sintomo:</strong> cloud offline.</p>
<p><strong>Cause probabili:</strong> password Wi-Fi cambiata; solo rete 5 GHz; cambio IP DHCP (Dynamic Host Configuration Protocol).</p>
<h2>Passi</h2><ol>
<li>Attivare il <strong>Wi-Fi 2,4 GHz</strong>.</li>
<li>IP locale o modalità AP Shelly.</li>
<li>Riconfigurare il Wi-Fi.</li>
<li>Prenotazione IP DHCP nel router.</li>
<li>Backup locale MQTT/Home Assistant.</li>
</ol>
<p>Difficoltà 2/5 · 15–30 min · €0.</p>`,
  }),
  err({
    path: 'guide/codice-errore/dimmer-led-luce-residua',
    title: 'Variatore LED: luce residua a spento',
    description: 'Bagliore LED a variatore OFF: bypass, variatore per LED, verifica neutro.',
    h1: 'Luce residua del variatore LED',
    lead: 'Le LED brillano debolmente quando il variatore è su OFF.',
    body: `<p><strong>Sintomo:</strong> alone fantasma a OFF.</p>
<p><strong>Cause probabili:</strong> perdite del variatore; neutro condiviso; LED sensibili.</p>
<h2>Passi</h2><ol>
<li>Installare il bypass del produttore (~€4).</li>
<li>Sostituire con variatore certificato LED.</li>
<li>Nessun mix alogeno/LED sullo stesso circuito.</li>
<li>Verificare il neutro al portalampada.</li>
<li>Elettricista se persiste.</li>
</ol>
<p><strong>Sicurezza:</strong> solo condensatore bipolare per LED; niente lavori sotto tensione.</p>
<p>Difficoltà 2/5 · 15–40 min · €4–22.</p>`,
  }),
  err({
    path: 'guide/codice-errore/dimmer-led-sfarfallio-basso',
    title: 'Variatore LED: sfarfallio a bassa luminosità',
    description: 'Sfarfallio 5–25 %: alzare il minimo, taglio di trailing edge, lampadine abbinate.',
    h1: 'Sfarfallio a bassa luminosità del variatore LED',
    lead: 'Sfarfallio visibile tra il 5 % e il 25 %.',
    body: `<p><strong>Sintomo:</strong> sfarfallio a bassa intensità.</p>
<p><strong>Cause probabili:</strong> disaccordo phase-cut; driver economici; trim minimo troppo basso.</p>
<h2>Passi</h2><ol>
<li>Alzare la regolazione del minimo.</li>
<li>Provare un’altra marca di LED dimmerabili.</li>
<li>Trailing edge (taglio di fase sul fronte di discesa) se supportato.</li>
<li>Niente strisce su variatore da parete senza driver.</li>
<li>Variatore e lampadine della stessa gamma compatibile.</li>
</ol>
<p>Difficoltà 2/5 · 15–35 min · €0–30.</p>`,
  }),
  err({
    path: 'guide/codice-errore/lampadina-wiz-sfarfallio-dimmer',
    title: 'Lampadina WiZ: sfarfallio con variatore a parete',
    description: 'WiZ + variatore: interruttore al 100 %, variatore LED o solo dimming in app.',
    h1: 'Sfarfallio WiZ con variatore a parete',
    lead: 'Sfarfallio o spegnimento quando un variatore a parete comanda la WiZ.',
    body: `<p><strong>Sintomo:</strong> sfarfallio con variatore esterno.</p>
<p><strong>Cause probabili:</strong> variatore incompatibile; doppio controllo variatore + app.</p>
<h2>Passi</h2><ol>
<li>Variatore al 100 %; regolare in app WiZ.</li>
<li>Variatore LED certificato.</li>
<li>Interruttore semplice + app.</li>
<li>Verificare «dimmerabile» sulla confezione.</li>
<li>Condensatore di compensazione se c’è luce residua.</li>
</ol>
<p><strong>Sicurezza:</strong> isolare il circuito prima di sostituire il variatore.</p>
<p>Difficoltà 2/5 · 15–35 min · €18–40.</p>`,
  }),
  {
    path: 'guide/illuminazione-esterna-automatica-steinel',
    article: true,
    kicker: 'Guida all’acquisto',
    title: 'Illuminazione esterna automatica Steinel: 4 prodotti a confronto',
    description: 'Steinel L 12 M, NightMatic 2000, IS 360-1, XSolar LH-N: IP, carichi, soglie da schede tecniche.',
    h1: 'Automatizzare l’ingresso con Steinel',
    lead: 'Quattro riferimenti Steinel da 2echoix confrontati su dati produttore (23/10/2026). Solo XSolar LH-N è una luce autonoma; L 12 M non ha sensore.',
    body: `<h2>La nostra scelta</h2>
<p>Per una applique esistente: <strong>L 12 M + LED E27 ~800 lm a 2700–3000 K + NightMatic 2000</strong> (circa €80,58 lampadina esclusa). Solo movimento: <strong>IS 360-1</strong> sotto il portico.</p>
<p><a href="https://www.awin1.com/pclick.php?p=46381369701&a=3127458&m=31151" rel="sponsored nofollow noopener" target="_blank">L 12 M su 2echoix (€57,19, 22/10/2026)</a></p>
<h2>Tabella schede tecniche</h2>
<table><thead><tr><th>Prodotto</th><th>Ruolo</th><th>Flusso</th><th>IP</th><th>K</th><th>Carico</th><th>Rilevamento</th><th>2echoix</th></tr></thead><tbody>
<tr><td>L 12 M 069155</td><td>Applique, senza sensore</td><td>Dalla lampadina E27</td><td>IP44 IK03</td><td>Lampadina</td><td>Max 60 W</td><td>–</td><td><a href="https://www.awin1.com/pclick.php?p=46381369701&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€57,19</a></td></tr>
<tr><td>NightMatic 2000 550417</td><td>Interruttore crepuscolare</td><td>Nessuno</td><td>IP54</td><td>–</td><td>1000 W; max 4 LED; 0,8 W</td><td>2–30 lx</td><td><a href="https://www.awin1.com/pclick.php?p=46359010299&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€23,39</a></td></tr>
<tr><td>IS 360-1 DE 032845</td><td>PIR (infrarossi passivi) a soffitto</td><td>Nessuno</td><td>IP54</td><td>–</td><td>350 W LED se &gt;8 W/lampadina</td><td>360° Ø8/4 m</td><td><a href="https://www.awin1.com/pclick.php?p=46381369825&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€41,99</a></td></tr>
<tr><td>XSolar LH-N 035730</td><td>Numero civico solare</td><td>4 LED segnapasso</td><td>IP44</td><td>4000 K CRI (indice di resa cromatica) 80–89</td><td>LiFePO4</td><td>Crepuscolo 2 lx</td><td><a href="https://www.awin1.com/pclick.php?p=45843200190&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€70,59</a></td></tr>
</tbody></table>
<p class="en-note">Schede Steinel 23/10/2026; prezzi 2echoix 22/10/2026. Affiliazione Awin. Solo XSolar LH-N emette luce utile da sola.</p>
<h2>Combinazioni</h2>
<ul>
<li><strong>Tramonto–alba:</strong> L 12 M + NightMatic — schermare il sensore dal riverbero della lampada.</li>
<li><strong>Solo passaggio:</strong> IS 360-1 a 2,5–4 m sotto copertura.</li>
<li><strong>Numero senza cavi:</strong> XSolar LH-N (segnapasso, non illuminazione del percorso).</li>
</ul>
<h2>Note normative (riferimento NF C 15-100 / esterno)</h2>
<ul>
<li>Pioggia esterna: minimo <strong>IP44</strong> — vedi <a href="/it/guide/grado-ip-bagno-esterno/">guida IP</a>.</li>
<li>NightMatic / IS 360-1: fase + neutro; protezione 10 A secondo il manuale NightMatic.</li>
<li>Rispettare i limiti di carico LED sulle schede.</li>
</ul>
<p><a href="/it/marchi/steinel/">Pagina marca Steinel</a>.</p>`,
  },
  {
    path: 'guide/luci-di-natale-interno-esterno',
    article: true,
    kicker: 'Guida stagionale',
    title: 'Luci di Natale interno ed esterno: IP, trasformatore, sicurezza, consumi',
    description: 'Luci natalizie: IP44 fuori, bassa tensione, EN 60598-2-20, differenziale, consumi e timer.',
    h1: 'Luci di Natale in casa e all’esterno',
    lead: 'Le ghirlande richiedono il giusto grado IP, trasformatore e durata d’uso — come ogni apparecchio.',
    body: `<h2>In sintesi</h2><table><thead><tr><th>Uso</th><th>Richiesto</th></tr></thead><tbody><tr><td>Albero in casa</td><td>LED, CE, EN 60598-2-20</td></tr><tr><td>Esterno</td><td>IP44+ (IP65 esposto), trasformatore a bassa tensione</td></tr><tr><td>Presa</td><td>Circuito esterno protetto da differenziale</td></tr></tbody></table><h2>Interno</h2><ul><li>Solo LED vicino ad aghi asciutti.</li><li>Caldo 2200–2700 K — <a href="/it/guide/temperatura-colore-kelvin/">Kelvin</a>.</li><li>Rispettare il massimo catene nel manuale.</li></ul><h2>Esterno</h2><ul><li>IP44 sotto copertura; IP65 sotto pioggia.</li><li>Trasformatore 24 V; prolunga esterna distesa.</li></ul><h2>Consumo</h2><p>kWh = W × ore ÷ 1000. Esempio: 6 W × 6 h × 40 gg = 1,44 kWh.</p><h2>Esempi</h2><div class="en-card"><p class="en-flag">Esterno IP65</p><h3>ZOTOYI 15 m festoon S14</h3><p>S14 antiurto, IP65 indicato per facciate esposte.</p><a class="en-amz" href="https://www.amazon.it/dp/B0972HH7C6?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0972HH7C6" data-product="ZOTOYI 15 m festoon S14">Vedi prezzo su Amazon.it</a></div><div class="en-card"><p class="en-flag">Balcone IP44 24 V</p><h3>Ghirlanda G40 10 m con timer</h3><p>24 V, IP44, timer dimmerabile secondo scheda.</p><a class="en-amz" href="https://www.amazon.it/dp/B0CZ9B4C2B?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0CZ9B4C2B" data-product="Ghirlanda G40 10 m con timer">Vedi prezzo su Amazon.it</a></div><p class="en-note">Dati da scheda produttore/Amazon verificati il 30/10/2026. I prezzi cambiano — controllare prima dell'acquisto. In qualità di affiliato Amazon percepiamo commissioni sugli acquisti idonei.</p><p>Tutorial FR: <a href="https://1piece1ampoule.fr/tutoriels/programmer-guirlande-lumineuse-exterieure/">programmare al crepuscolo</a>.</p>`,
  },
  {
    path: 'guide/fototerapia-luce-mattino-inverno',
    article: true,
    kicker: 'Benessere invernale',
    title: 'Luce mattutina e fototerapia: 10.000 lux, distanza, sveglia simulata',
    description: 'Lampada terapeutica vs simulatore alba vs lampadine smart; lux a distanza; routine invernale.',
    h1: 'Fototerapia e luce del mattino in inverno',
    lead: 'Tre strumenti diversi — e i lux indicati valgono solo alla distanza della scheda tecnica.',
    body: `<h2>Tre strumenti</h2><table><thead><tr><th>Strumento</th><th>Ruolo</th><th>Livello</th></tr></thead><tbody><tr><td>Lampada terapeutica</td><td>Sessione frontale</td><td>10.000 lux alla distanza indicata</td></tr><tr><td>Simulatore alba</td><td>Risveglio graduale</td><td>~300 lux max (HF3520, Philips)</td></tr><tr><td>Lampadine smart</td><td>Rampa programmata</td><td>Dipende da lm e distanza</td></tr></tbody></table><h2>Distanza</h2><p>I lux diminuiscono con il quadrato della distanza. 10.000 lux a 10 cm ≠ 10.000 lux a distanza del braccio.</p><h2>Uso lampada terapeutica</h2><ul><li>Spesso ~30 min a ~10.000 lux al mattino — seguire il manuale.</li><li>Sguardo leggermente di lato; dispositivo medico CE, senza UV.</li><li>Consultare un medico in caso di patologie oculari o disturbo bipolare.</li></ul><h2>Scelte</h2><div class="en-card"><p class="en-flag">Fototerapia</p><h3>Beurer TL 30</h3><p>10.000 lux a ~10 cm, 6500 K, CRI (indice di resa cromatica) 80, garanzia 3 anni.</p><a class="en-amz" href="https://www.amazon.it/dp/B00MOIWOAK?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B00MOIWOAK" data-product="Beurer TL 30">Vedi prezzo su Amazon.it</a></div><div class="en-card"><p class="en-flag">Sveglia Hue</p><h3>Hue White Ambiance E27 1100 lm</h3><p>EPREL 2187086: 1100 lm, 8,1 W, classe D; Bluetooth.</p><a class="en-amz" href="https://www.amazon.it/dp/B0FJ8VXHRX?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0FJ8VXHRX" data-product="Hue White Ambiance E27 1100 lm">Vedi prezzo su Amazon.it</a></div><p class="en-note">Dati da scheda produttore/Amazon verificati il 30/10/2026. I prezzi cambiano — controllare prima dell'acquisto. In qualità di affiliato Amazon percepiamo commissioni sugli acquisti idonei.</p>`,
  },
  {
    path: 'marchi/tapo',
    article: true,
    kicker: 'Marca',
    title: 'Tapo (TP-Link): lampadina L530E Wi-Fi, garanzia 2 anni',
    description: 'Tapo L530E: 806 lm, 8,7 W, classe F, Wi-Fi 2,4 GHz, pro/contro e assistenza.',
    h1: 'Tapo (TP-Link): la nostra opinione sul marchio',
    lead: 'Tapo è la linea smart home di TP-Link. La L530E a colori Wi-Fi è l’alternativa senza hub a Philips Hue per la prima stanza.',
    body: `<h2>Dati ufficiali L530E (TP-Link, 23/10/2026)</h2>
<table><tbody>
<tr><th>Flusso / potenza</th><td>806 lm, 8,7 W (~93 lm/W), equivalente 60 W</td></tr>
<tr><th>Classe energetica</th><td>F (EPREL)</td></tr>
<tr><th>Colore / CRI</th><td>Bianco 2500–6500 K + colori; CRI (indice di resa cromatica) ≥ 80</td></tr>
<tr><th>Radio</th><td>Solo Wi-Fi 2,4 GHz — nessun hub Zigbee</td></tr>
<tr><th>Dimming</th><td>1–100 % in app</td></tr>
<tr><th>Durata</th><td>15.000 h</td></tr>
</tbody></table>
<h2>Punti di forza</h2><ul><li>Nessun hub; Alexa/Google.</li><li>Modalità vacanza, programmi, sync sole.</li><li>Ricorda lo stato dopo black-out.</li><li>Prezzo d’ingresso basso.</li></ul>
<h2>Limiti</h2><ul><li>Classe F vs Hue White Ambiance classe D.</li><li>Ogni lampadina occupa uno slot Wi-Fi sul router.</li><li>806 lm stretti per un soggiorno grande.</li><li>L’interruttore a parete deve restare acceso.</li></ul>
<h2>Garanzia</h2>
<p>TP-Link Tapo <strong>2 anni</strong> di garanzia commerciale; verificare i termini sul venditore italiano.</p>
<h2>La nostra opinione</h2>
<p>Miglior ingresso all’illuminazione connessa per 1–3 lampadine. Oltre, i sistemi <strong>Zigbee</strong> (protocollo mesh a basso consumo) come Philips Hue scalano meglio — vedi <a href="/it/articoli/lampadina-smart-wifi-o-zigbee/">Wi-Fi vs Zigbee</a>.</p>
<p><a class="en-amz" href="https://www.amazon.it/dp/B08GDC99PX?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B08GDC99PX" data-product="Tapo L530E E27">Vedi prezzo su Amazon.it</a> <a class="en-amz" href="https://www.amazon.it/dp/B08Z4KCJZY?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B08Z4KCJZY" data-product="Tapo L530E confezione 2">Vedi prezzo su Amazon.it</a></p>
<p class="en-note">Dati da scheda produttore/Amazon verificati il 30/10/2026. I prezzi cambiano — controllare prima dell'acquisto. In qualità di affiliato Amazon percepiamo commissioni sugli acquisti idonei.</p>
<p>Confronta: <a href="/it/marchi/philips-hue/">Philips Hue</a>, <a href="/it/guide/regalare-lampadine-smart/">guida regali</a>.</p>`,
  },
  {
    path: 'strumenti/convertitore-lux-lumen-watt-superficie',
    article: true,
    kicker: 'Strumento',
    title: 'Convertitore lux ↔ lumen ↔ watt LED per superficie',
    description: 'Calcolatrice bidirezionale: lux, lumen e watt LED per m² con fattore di riflessione K.',
    h1: 'Convertitore lux ↔ lumen ↔ watt LED',
    lead: 'Collega i lux desiderati sul pavimento a lumen totali e potenza LED in base a superficie e colore delle pareti.',
    body: `<p>Collega <strong>lux</strong> (luce su una superficie), <strong>lumen</strong> (flusso totale) e <strong>watt LED</strong> per una superficie. Il fattore <strong>K</strong> tiene conto della riflessione delle pareti. Modifica un campo — gli altri si ricalcolano.</p>
<p>Vedi <a href="/it/guide/lumen-watt/">lumen vs watt</a> e <a href="/it/tutorial/calcolare-lux-lumen-per-stanza/">tutorial lux per stanza</a>.</p>
<h2>Calcolatrice</h2>
<div class="mt-5 grid gap-4 sm:grid-cols-2" id="conv-lux-tool">
<label class="block text-sm font-semibold sm:col-span-2">Tipo di stanza
<select id="cv-room" class="mt-1 w-full rounded-xl border border-stone-300 bg-white p-2"><option value="salon" data-lux="125" data-m2="20">Soggiorno (125 lx, 20 m²)</option><option value="cuisine" data-lux="200" data-m2="12">Cucina (200 lx, 12 m²)</option><option value="chambre" data-lux="100" data-m2="14">Camera (100 lx, 14 m²)</option><option value="sdb" data-lux="175" data-m2="6">Bagno (175 lx, 6 m²)</option><option value="bureau" data-lux="300" data-m2="10">Ufficio (300 lx, 10 m²)</option><option value="garage" data-lux="300" data-m2="18">Garage (300 lx, 18 m²)</option><option value="couloir" data-lux="100" data-m2="8">Corridoio (100 lx, 8 m²)</option></select></label>
<label class="block text-sm font-semibold sm:col-span-2">Colore pareti (riflessione K)
<select id="cv-walls" class="mt-1 w-full rounded-xl border border-stone-300 bg-white p-2"><option value="blanc" data-k="2">Pareti chiare / bianche (K ≈ 2)</option><option value="beige" data-k="1.85">Beige o grigio chiaro (K ≈ 1,85)</option><option value="couleur" data-k="1.55">Colore medio (K ≈ 1,55)</option><option value="sombre" data-k="1.25">Pareti scure (K ≈ 1,25)</option></select></label>
<label class="block text-sm font-semibold">Lux obiettivo<input id="cv-lux" type="number" min="20" max="3000" step="5" value="125" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
<label class="block text-sm font-semibold">Superficie (m²)<input id="cv-m2" type="number" min="0.5" max="120" step="0.1" value="20" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
<label class="block text-sm font-semibold">Lumen (flusso totale)<input id="cv-lm" type="number" min="50" max="150000" step="50" value="5000" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
<label class="block text-sm font-semibold">Efficacia LED (lm/W)<input id="cv-lmw" type="number" min="60" max="150" step="5" value="100" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
<label class="block text-sm font-semibold sm:col-span-2">Potenza LED totale (W)<input id="cv-w" type="number" min="1" max="5000" step="1" value="50" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
</div>
<p class="mt-4 text-sm" id="cv-hint" aria-live="polite"></p>
<p class="text-xs text-stone-500">Formula: lumen ≈ lux × superficie × K. Distribuzione uniforme ipotizzata — un solo plafon lascia angoli più scuri.</p>
<script>
(function(){var lock=null;function el(id){return document.getElementById(id);}function num(v){return parseFloat(String(v).replace(',','.'))||0;}
function fmt(n){return Math.round(n).toLocaleString('it-IT');}
function kVal(){var s=el('cv-walls');return parseFloat(s.options[s.selectedIndex].getAttribute('data-k'))||2;}
function fromLux(){var lux=num(el('cv-lux').value),m2=num(el('cv-m2').value),K=kVal(),lmw=num(el('cv-lmw').value)||100;var lm=lux*m2*K;el('cv-lm').value=Math.round(lm);el('cv-w').value=Math.max(1,Math.round(lm/lmw));el('cv-hint').textContent='≈ '+fmt(lux)+' lx × '+m2.toFixed(1)+' m² × K '+K+' → '+fmt(lm)+' lm → ≈ '+fmt(lm/lmw)+' W LED ('+lmw+' lm/W)';}
function fromLm(){var lm=num(el('cv-lm').value),m2=num(el('cv-m2').value),K=kVal(),lmw=num(el('cv-lmw').value)||100;var lux=m2>0&&K>0?lm/(m2*K):0;el('cv-lux').value=Math.round(lux);el('cv-w').value=Math.max(1,Math.round(lm/lmw));el('cv-hint').textContent=fmt(lm)+' lm → ≈ '+fmt(lux)+' lx (superficie '+m2.toFixed(1)+' m², K '+K+')';}
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
<ul class="mt-4"><li><a href="/it/strumenti/equivalenza-alogeno-led-gu10-e27-lumen/">Equivalenza alogeno → LED</a></li>
<li><a href="/it/guide/lumen-watt/">Lumen vs watt</a></li>
<li><a href="https://1piece1ampoule.fr/outils/convertisseur-lux-lumens-watts-surface/">Pagina interattiva (FR)</a></li></ul>`,
  },
  {
    path: 'tutorial',
    article: true,
    kicker: 'Tutorial',
    title: 'Tutorial illuminazione: lux, strisce LED, interruttori smart, GU10',
    description: 'Indice di tutti i tutorial passo passo con link alle pagine italiane dove disponibili.',
    h1: 'Tutorial',
    lead: 'Guide pratiche dal nostro laboratorio — versioni italiane aggiunte progressivamente.',
    body: `<h2>Tutti i tutorial passo passo</h2><ul><li><a href="/it/tutorial/calcolare-lux-lumen-per-stanza/">Calcolare l’illuminazione in lux e lumen</a></li><li><a href="/it/tutorial/striscia-led-sotto-pensili-cucina/">Installare striscia LED sotto i pensili</a></li><li><a href="/it/tutorial/illuminare-cantina-senza-corrente/">Illuminare una cantina senza rete</a></li><li><a href="/it/tutorial/sostituire-alogene-gu10-mr16-con-led/">Sostituire alogene GU10 o MR16 con LED</a></li><li><a href="/it/tutorial/interruttore-smart-senza-neutro/">Interruttore smart o lampadina senza neutro</a></li><li><a href="https://1piece1ampoule.fr/tutoriels/appairer-module-zigbee-sans-neutre-sonoff-aqara/">Associare modulo Zigbee senza neutro (SONOFF, Aqara)</a></li><li><a href="https://1piece1ampoule.fr/tutoriels/eclairage-bureau-teletravail-lux-irc-kelvin/">Ufficio in casa: lux, CRI, Kelvin</a></li><li><a href="https://1piece1ampoule.fr/tutoriels/programmer-guirlande-lumineuse-exterieure/">Programmare ghirlande esterne al crepuscolo</a></li><li><a href="https://1piece1ampoule.fr/tutoriels/reparer-guirlande-led-partie-eteinte/">Riparare una ghirlanda LED parzialmente spenta</a></li></ul><p>Cinque tutorial sono tradotti in italiano; gli altri rimandano al sito francese finché non pubblicati.</p>`,
  },
  {
    path: 'zone',
    article: true,
    kicker: 'Guide per zone',
    title: 'Illuminazione per zona: piano lavoro, specchio, ingresso, scale, armadio',
    description: 'Cinque zone con obiettivi lux/lumen e prodotti; tabella e schede.',
    h1: 'Zone e layout',
    lead: 'Esigenze numerate per zona — poi un prodotto verificato per ciascuna.',
    body: `<p>Alcuni punti richiedono luce precisa: viso allo specchio, piano senza ombre, scale automatiche.</p>
<table><thead><tr><th>Zona</th><th>Obiettivo</th><th>Scelta</th></tr></thead><tbody>
<tr><td><a href="/it/zone/piano-lavoro-cucina/">Piano lavoro cucina</a></td><td>500 lux, ≥420 lm/m, 4000 K</td><td>Barra DA LIGHT 56 cm (1000 lm/m calc.) <a class="en-amz" href="https://www.amazon.it/dp/B07H7HB6LG?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B07H7HB6LG" data-product="Barra DA LIGHT">Vedi prezzo su Amazon.it</a></td></tr>
<tr><td><a href="/it/zone/specchio-bagno/">Specchio bagno</a></td><td>300–500 lux viso, IP44, 3000–4000 K</td><td>Barra specchio Lucide ONNO <a class="en-amz" href="https://www.amazon.it/dp/B07B4CPRDQ?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B07B4CPRDQ" data-product="Lucide ONNO">Vedi prezzo su Amazon.it</a></td></tr>
<tr><td><a href="https://1piece1ampoule.fr/zones/entree-allee-exterieure/">Ingresso e vialetto</a></td><td>2000–3000 lm, IP65, movimento</td><td>Faro OREiN 24 W <a class="en-amz" href="https://www.amazon.it/dp/B0BPX1ZZXJ?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0BPX1ZZXJ" data-product="Faro OREiN">Vedi prezzo su Amazon.it</a></td></tr>
<tr><td><a href="https://1piece1ampoule.fr/zones/escaliers/">Scale</a></td><td>150 lux, auto alle estremità</td><td>OSRAM radar E27 <a class="en-amz" href="https://www.amazon.it/dp/B0FGD6H3NZ?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0FGD6H3NZ" data-product="OSRAM movimento E27">Vedi prezzo su Amazon.it</a></td></tr>
<tr><td><a href="https://1piece1ampoule.fr/zones/placards-dressing/">Armadio</a></td><td>Barra a movimento senza fili</td><td>OUILA 60 cm ricaricabile <a class="en-amz" href="https://www.amazon.it/dp/B0F18462GT?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0F18462GT" data-product="Barra OUILA">Vedi prezzo su Amazon.it</a></td></tr>
</tbody></table>
<div class="en-grid">
<a class="en-tile" href="/it/zone/piano-lavoro-cucina/"><strong>Piano lavoro</strong><span>500 lux sotto i pensili.</span></a>
<a class="en-tile" href="/it/zone/specchio-bagno/"><strong>Specchio bagno</strong><span>Luce IP44 a livello viso.</span></a>
<a class="en-tile" href="https://1piece1ampoule.fr/zones/entree-allee-exterieure/"><strong>Ingresso (FR)</strong><span>Vialetto e portico.</span></a>
<a class="en-tile" href="https://1piece1ampoule.fr/zones/escaliers/"><strong>Scale (FR)</strong><span>Automazione movimento.</span></a>
<a class="en-tile" href="https://1piece1ampoule.fr/zones/placards-dressing/"><strong>Armadio (FR)</strong><span>Barre a sensore.</span></a>
</div>
<p>Metodo: <a href="/it/tutorial/calcolare-lux-lumen-per-stanza/">lux per stanza</a>.</p>`,
  },
  {
    path: 'zone/specchio-bagno',
    article: true,
    kicker: 'Guida zona',
    title: 'Illuminazione specchio bagno: lux, IP44, temperatura colore',
    description: 'Posizione luce, volumi bagno, CRI per trucco, applique e specchi a confronto.',
    h1: 'Illuminazione dello specchio bagno',
    lead: 'Un downlight a soffitto ombreggia il viso. Rasatura e trucco richiedono luce frontale all’altezza degli occhi.',
    body: `<h2>Essenziale</h2><ul>
<li><strong>Posizione:</strong> barra sopra lo specchio a tutta larghezza, o applique verticali all’altezza degli occhi (più uniforme).</li>
<li><strong>Livello:</strong> 300–500 lux sul viso — <a href="/it/tutorial/calcolare-lux-lumen-per-stanza/">guida lux</a>.</li>
<li><strong>Colore:</strong> 3000–4000 K; più freddo appiattisce la pelle.</li>
<li><strong>CRI (indice di resa cromatica) ≥ 90</strong> per il trucco — <a href="/it/guide/resa-cromatica-cri-ra/">guida CRI</a>.</li>
</ul>
<h2>Zone IP (riferimento volumi bagno — CEI 64-8 / norme locali)</h2><ul>
<li><strong>Zona 1</strong> (sopra vasca/docce fino a 2,25 m): IPX4, solo SELV (Separated Extra-Low Voltage) 12 V.</li>
<li><strong>Zona 2</strong> (0,6 m intorno alla zona 1): IPX4, classe II su differenziale 30 mA o 12 V.</li>
<li><strong>Esterno ai volumi:</strong> IP non obbligatorio, ma IP44 prudente vicino agli schizzi.</li>
</ul>
<p>In Italia seguire CEI 64-8 e le istruzioni dell’installatore; tenere la rete fuori dalle zone a schizzi. In dubbio, elettricista qualificato.</p>
<h2>Applique a confronto</h2>
<table><thead><tr><th>Prodotto</th><th>Tipo</th><th>IP</th><th>K</th></tr></thead><tbody>
<tr><td>Lucide ONNO 11 W 60 cm <a class="en-amz" href="https://www.amazon.it/dp/B07B4CPRDQ?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B07B4CPRDQ" data-product="Lucide ONNO">Vedi prezzo su Amazon.it</a></td><td>Barra sopra specchio</td><td>IP44</td><td>3000 K</td></tr>
<tr><td>SILAMP 12 W <a class="en-amz" href="https://www.amazon.it/dp/B0BBLYJCFF?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0BBLYJCFF" data-product="SILAMP 12 W">Vedi prezzo su Amazon.it</a></td><td>Parete</td><td>IP44</td><td>6000–8000 K (freddo)</td></tr>
</tbody></table>
<h2>Specchi LED (outlet 2echoix — prezzi 22/10/2026)</h2>
<table><thead><tr><th>Modello</th><th>Dimensione</th><th>Prezzo</th></tr></thead><tbody>
<tr><td>Specchio LED Coast antiappannamento</td><td>70×50 cm</td><td><a href="https://www.awin1.com/pclick.php?p=46317416057&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€79,99</a></td></tr>
<tr><td>Mirlux rotondo dimmerabile</td><td>Ø60 cm</td><td><a href="https://www.awin1.com/pclick.php?p=46246025083&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€109,00</a></td></tr>
<tr><td>Mirlux senza cornice 120×60</td><td>120×60 cm</td><td><a href="https://www.awin1.com/pclick.php?p=46390597656&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€139,99</a></td></tr>
</tbody></table>
<p class="en-note">Gli specchi outlet possono omettere IP/K in scheda — confermare col venditore se vicino alla doccia.</p>
<p><strong>La nostra scelta:</strong> Lucide ONNO — IP44, 3000 K, 60 cm per uno specchio lavabo standard.</p>
<p>Stanza intera: <a href="https://1piece1ampoule.fr/pieces/salle-de-bain/">pagina bagno (FR)</a>. Tutte le zone: <a href="/it/zone/">indice zone</a>.</p>`,
  },
  {
    path: 'chi-siamo',
    article: true,
    kicker: 'Chi siamo',
    title: 'Chi siamo: 1 pièce 1 ampoule e Emmanuel Sauvage',
    description: 'Chi scrive il sito, come selezioniamo i prodotti, informativa affiliato Amazon.',
    h1: 'Un sito per illuminare ogni stanza, senza gergo',
    lead: 'Guide indipendenti per case reali — schede tecniche prima, hype mai.',
    body: `<p><strong>1 pièce 1 ampoule</strong> è curato da <strong>Emmanuel Sauvage</strong>. Scegliere una lampadina dovrebbe richiedere due minuti; tra lumen, Kelvin, CRI (indice di resa cromatica), attacchi e dimmer, spesso si finisce con il codice sbagliato. Questo sito divide ogni stanza in <strong>zone</strong> (lavoro, atmosfera, circolazione) e indica tono, potenza e tipo di apparecchio per ciascuna.</p>
<h2>Come selezioniamo i prodotti</h2><ul>
<li>Partiamo dal <strong>bisogno</strong> (zona, problema, attacco), poi cerchiamo prodotti adatti.</li>
<li>Confrontiamo le <strong>schede produttore</strong>: lumen, Kelvin, CRI, IP, compatibilità dimmer.</li>
<li>Preferiamo marche consolidate con alternative economiche sensate quando esistono.</li>
<li>I link sono <strong>verificati</strong> quando aggiorniamo le pagine.</li></ul>
<p>Non testiamo in laboratorio ogni articolo. Le scelte si basano su schede tecniche e principi di illuminotecnica. Prodotto sbagliato? Vale la politica resi del venditore (Amazon.it, ecc.).</p>
<h2>Come finanziamo il sito</h2>
<p>In qualità di affiliato Amazon percepiamo commissioni sugli acquisti idonei tramite i nostri link — <strong>senza costo aggiuntivo per voi</strong>. I consigli non si comprano: una pagina che dice «non serve comprare nulla» è una buona pagina. Dettagli: <a href="/it/affiliazione/">pagina affiliazione</a>.</p>
<h2>Correzioni</h2>
<p>Avete trovato un errore? <a href="/it/contatti/">Contatti</a> — correggiamo rapidamente.</p>`,
  },
  {
    path: 'articoli',
    article: true,
    kicker: 'Articoli',
    title: 'Articoli illuminazione LED: risoluzione problemi, confronti, guide',
    description: 'Indice articoli per categoria; percorsi IT per il lot 2, link FR per il resto.',
    h1: 'Articoli illuminazione LED',
    lead: 'Articoli concreti per scegliere lampadine, evitare errori e risolvere problemi quotidiani.',
    body: `<h2>Risoluzione problemi</h2><div class="en-grid"><a class="en-tile" href="https://1piece1ampoule.fr/articles/ampoule-led-qui-clignote/"><strong>LED che sfarfalla</strong><span>Diagnosi sfarfallio</span></a><a class="en-tile" href="https://1piece1ampoule.fr/articles/ampoule-led-reste-allumee-faiblement/"><strong>Luce residua</strong><span>LED accesa debolmente a spento</span></a><a class="en-tile" href="https://1piece1ampoule.fr/articles/ampoule-led-gresille-bourdonne/"><strong>LED che ronzia</strong><span>Rumore col dimmer</span></a><a class="en-tile" href="/it/articoli/lampadina-led-calore-durata/"><strong>Calore e durata LED</strong><span>Temperatura e vita utile</span></a></div><h2>Confronta</h2><div class="en-grid"><a class="en-tile" href="/it/articoli/lampadina-smart-wifi-o-zigbee/"><strong>Wi-Fi vs Zigbee</strong><span>Radio lampadina connessa</span></a><a class="en-tile" href="/it/articoli/lampadina-dimmerabile-o-no/"><strong>Dimmerabile o no</strong><span>Compatibilità dimmer</span></a><a class="en-tile" href="https://1piece1ampoule.fr/articles/e27-ou-b22/"><strong>E27 o B22</strong><span>Filettatura vs baionetta</span></a><a class="en-tile" href="https://1piece1ampoule.fr/articles/gu10-ou-gu5-3/"><strong>GU10 o GU5.3</strong><span>230 V vs spot 12 V</span></a></div><h2>Migliori scelte</h2><div class="en-grid"><a class="en-tile" href="/it/articoli/lampadina-forno-frigo/"><strong>Lampadina forno e frigo</strong><span>Lampada forno 300 °C</span></a><a class="en-tile" href="/it/articoli/lampadina-filamento-vintage/"><strong>Filamento vintage</strong><span>Forme Edison LED</span></a><a class="en-tile" href="/it/articoli/lampadina-creatore/"><strong>Crepuscolare</strong><span>Lampadina a fotocellula</span></a></div><h2>Guide pratiche</h2><div class="en-grid"><a class="en-tile" href="https://1piece1ampoule.fr/articles/installer-ruban-led/"><strong>Installare striscia LED</strong><span>Guida striscia 24 V</span></a></div><p>Indice completo (FR): <a href="https://1piece1ampoule.fr/articles/">hub articoli</a>.</p>`,
  },
  {
    path: 'articoli/lampadina-smart-wifi-o-zigbee',
    article: true,
    kicker: 'Articolo',
    title: 'Lampadina smart Wi-Fi o Zigbee: Tapo vs Philips Hue',
    description: 'Wi-Fi senza hub vs Zigbee con Bridge: pro, limiti, Matter, errori e verdetto.',
    h1: 'Lampadina smart: Wi-Fi (Tapo) o Zigbee (Hue)?',
    lead: 'Due radio, due budget, due modelli di scalabilità — scegliere prima di comprare a pacchi.',
    body: `<p>Volete controllo da telefono o voce, ma <strong>Wi-Fi</strong>, <strong>Zigbee</strong> (mesh a basso consumo), <strong>Bluetooth</strong> e <strong>Matter</strong> (layer comune smart home) si confondono. Ecco i due percorsi frequenti: <strong>Wi-Fi senza hub</strong> (Tapo) e <strong>Zigbee con hub</strong> (Philips Hue).</p><h2>Wi-Fi (Tapo e simili)</h2><ul><li><strong>Funzionamento:</strong> la lampadina si collega direttamente al router.</li><li><strong>Pro:</strong> nessun hub, prezzo basso, Alexa/Google.</li><li><strong>Contro:</strong> ogni lampadina usa Wi-Fi; latenza; alcune funzioni richiedono cloud.</li><li><strong>Ideale per:</strong> 1–6 lampadine, una stanza, primo test.</li></ul><h2>Zigbee (Philips Hue)</h2><ul><li><strong>Funzionamento:</strong> mesh tra lampadine via <strong>Hue Bridge</strong>.</li><li><strong>Pro:</strong> veloce con molti dispositivi; controllo locale; catalogo vasto.</li><li><strong>Contro:</strong> costo più alto; hub obbligatorio (nei kit).</li><li><strong>Ideale per:</strong> automazione di tutta la casa.</li></ul><h2>Matter?</h2><p>Matter permette agli ecosistemi di condividere dispositivi. Hue e Tapo recenti lo adottano — meno lock-in.</p><h2>Errori</h2><ul><li>Smart dietro variatore — tensione piena; dimming in app.</li><li>Interruttore OFF — lampadina irraggiungibile; interruttore wireless o lasciare ON.</li><li>Ignorare bianco tunable — spesso più utile del solo colore.</li></ul><h2>Verdetto</h2><ul><li><strong>1–3 stanze, budget:</strong> Tapo L530E.</li><li><strong>Casa intera:</strong> kit Hue White &amp; Color.</li></ul><h2>Scelte verificate</h2><div class="en-card"><p class="en-flag">Wi-Fi · senza hub</p><h3>Tapo L530E E27 colore</h3><p>8,7 W, dimmerabile, Wi-Fi 2,4 GHz.</p><a class="en-amz" href="https://www.amazon.it/dp/B08GDC99PX?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B08GDC99PX" data-product="Tapo L530E E27 colore">Vedi prezzo su Amazon.it</a></div><div class="en-card"><p class="en-flag">Kit Hue</p><h3>Hue White & Color kit E27</h3><p>Due lampadine, Bridge, telecomando; mesh Zigbee.</p><a class="en-amz" href="https://www.amazon.it/dp/B099NRLRG3?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B099NRLRG3" data-product="Hue White & Color kit E27">Vedi prezzo su Amazon.it</a></div><div class="en-card"><p class="en-flag">Hue tunable</p><h3>Hue White Ambiance 1100 lm</h3><p>EPREL 2187086; routine sveglia.</p><a class="en-amz" href="https://www.amazon.it/dp/B0FJ8VXHRX?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0FJ8VXHRX" data-product="Hue White Ambiance 1100 lm">Vedi prezzo su Amazon.it</a></div><p class="en-note">Dati da scheda produttore/Amazon verificati il 30/10/2026. I prezzi cambiano — controllare prima dell'acquisto. In qualità di affiliato Amazon percepiamo commissioni sugli acquisti idonei.</p><h2>FAQ</h2><p><strong>Smart su variatore?</strong> No — tensione piena; dimming in app.</p><p><strong>Hue Bridge obbligatorio?</strong> Per ecosistema completo e molte lampadine sì; Bluetooth ~10 in una stanza.</p>`,
  },
  {
    path: 'articoli/lampadina-dimmerabile-o-no',
    article: true,
    kicker: 'Articolo',
    title: 'LED dimmerabile o no: quale comprare',
    description: 'Dimmerabile significa compatibile col variatore. Quando serve, trappole vecchi dimmer, step-dim e WarmGlow.',
    h1: 'Dimmerabile o non dimmerabile: la differenza',
    lead: 'La prima causa di reso LED è l’incompatibilità col variatore — entrambi devono concordare.',
    body: `<p><strong>Dimmerabile</strong> significa che il driver LED segue l’onda tagliata del variatore. <strong>Non dimmerabile</strong> su variatore sfarfalla, ronzia o muore presto.</p><h2>Quando serve dimmerabile</h2><ul><li>Variatore a parete rotativo o trailing edge.</li><li>Atmosfera serale in soggiorno/sala da pranzo.</li></ul><h2>Quando no</h2><ul><li>Interruttore semplice — dimmerabile funziona ma costa di più.</li><li><strong>Smart</strong> — dimming nella lampadina; togliere o bloccare variatore al 100 %.</li></ul><h2>Trappola vecchio dimmer</h2><p>I dimmer alogeni vogliono 40–60 W minimo; LED da 7 W restano sotto — variatore LED con trim carico minimo.</p><h2>Step dim (senza cablaggio dimmer)</h2><p>Alcune lampadine ciclan 100 % → 50 % → 10 % con click sull’interruttore (Philips SceneSwitch).</p><h2>WarmGlow</h2><p>Philips WarmGlow sposta 2700 K verso 2200 K col dimming — effetto incandescenza.</p><h2>Scelte su circuito dimmer</h2><div class="en-card"><p class="en-flag">E27 dimmerabile</p><h3>Philips 100 W eq dimmerabile E27</h3><p>Alta uscita, dimming fluido su variatore compatibile.</p><a class="en-amz" href="https://www.amazon.it/dp/B09F9MZ4PH?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B09F9MZ4PH" data-product="Philips 100 W eq dimmerabile E27">Vedi prezzo su Amazon.it</a></div><div class="en-card"><p class="en-flag">GU10 WarmGlow</p><h3>Philips GU10 WarmGlow</h3><p>Riferimento per spot caldi dimmati.</p><a class="en-amz" href="https://www.amazon.it/dp/B073FT1QT2?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B073FT1QT2" data-product="Philips GU10 WarmGlow">Vedi prezzo su Amazon.it</a></div><div class="en-card"><p class="en-flag">Upgrade dimmer</p><h3>Variatore LED Legrand</h3><p>Sostituire il vecchio dimmer se lo sfarfallio persiste.</p><a class="en-amz" href="https://www.amazon.it/dp/B07MRBVNWM?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B07MRBVNWM" data-product="Variatore LED Legrand">Vedi prezzo su Amazon.it</a></div><p class="en-note">Dati da scheda produttore/Amazon verificati il 30/10/2026. I prezzi cambiano — controllare prima dell'acquisto. In qualità di affiliato Amazon percepiamo commissioni sugli acquisti idonei.</p><h2>FAQ</h2><p><strong>Dimmerabile senza variatore?</strong> Sì, sempre al 100 %.</p><p><strong>Non dimmerabile su variatore?</strong> Mai — sfarfallio e guasto precoce.</p><p>Ancora sfarfallio? <a href="https://1piece1ampoule.fr/articles/ampoule-led-qui-clignote/">articolo sfarfallio (FR)</a> o <a href="/it/guide/sfarfallio-gu10-led-dimmer-diagnosi/">guida diagnosi</a>.</p>`,
  },
  {
    path: 'articoli/lampadina-filamento-vintage',
    article: true,
    kicker: 'Articolo',
    title: 'LED filamento vintage: forme, vetro, lumen',
    description: 'A60, ST64, globo; vetro chiaro vs ambra; abbagliamento e trappole dimmer; scelte.',
    h1: 'Lampadine LED filamento vintage',
    lead: 'I filamenti decorativi richiedono lo stesso calcolo lux delle LED classiche — soprattutto in vetro ambra.',
    body: `<p>Le LED <strong>filamento</strong> imitano Edison: «filamento» visibile in vetro chiaro o ambra. Belle in parabole aperte — ma controllate i lumen, non solo la forma.</p><h2>Forme</h2><ul><li><strong>A60</strong> — pera versatile.</li><li><strong>ST64</strong> — Edison lungo per sospensioni nude.</li><li><strong>G95/G125</strong> — globo sopra i tavoli.</li><li><strong>Candle E14</strong> — lampadari.</li></ul><h2>Chiaro vs ambra</h2><p>Chiaro: più luminoso, 2700 K. Ambra: 1800–2200 K effetto candela — decorativo, non luce principale.</p><h2>Trappole</h2><ol><li>Sottostimare i lumen — puntare ≥806 lm vetro chiaro per luce principale.</li><li>Non dimmerabile su variatore — vedi <a href="/it/articoli/lampadina-dimmerabile-o-no/">guida dimmerabile</a>.</li><li>Abbagliamento — filamento a livello occhi; globo o diffusore.</li></ol><h2>Usi</h2><p>Sospensione tavolo, lampada parabola aperta, filamento crepuscolare esterno per presenza portico.</p><h2>Scelte</h2><div class="en-card"><p class="en-flag">Filamento E27</p><h3>Philips filamento E27 eq 60 W (2 pz)</h3><p>Vetro chiaro, 2700 K, CRI affidabile.</p><a class="en-amz" href="https://www.amazon.it/dp/B08HV4WG3Y?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B08HV4WG3Y" data-product="Philips filamento E27 eq 60 W (2 pz)">Vedi prezzo su Amazon.it</a></div><div class="en-card"><p class="en-flag">ST64 crepuscolare</p><h3>Lucide ST64 crepuscolare E27</h3><p>Look Edison + fotocellula per portico.</p><a class="en-amz" href="https://www.amazon.it/dp/B07TSKP9JC?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B07TSKP9JC" data-product="Lucide ST64 crepuscolare E27">Vedi prezzo su Amazon.it</a></div><div class="en-card"><p class="en-flag">ST64 dimmerabile</p><h3>Philips filamento dimmerabile</h3><p>Per sospensioni dimmate.</p><a class="en-amz" href="https://www.amazon.it/dp/B09F9MZ4PH?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B09F9MZ4PH" data-product="Philips filamento dimmerabile">Vedi prezzo su Amazon.it</a></div><p class="en-note">Dati da scheda produttore/Amazon verificati il 30/10/2026. I prezzi cambiano — controllare prima dell'acquisto. In qualità di affiliato Amazon percepiamo commissioni sugli acquisti idonei.</p><h2>FAQ</h2><p><strong>Luce sufficiente?</strong> Chiaro ≥806 lm sì; ambra soprattutto atmosfera.</p>`,
  },
  {
    path: 'articoli/lampadina-forno-frigo',
    article: true,
    kicker: 'Articolo',
    title: 'Lampadine forno (300 °C) e frigo: come scegliere',
    description: 'Lampada forno ad alta temperatura vs LED E14 frigo; sicurezza e dimensioni.',
    h1: 'Lampadine forno e frigorifero',
    lead: 'Due elettrodomestici, due schede — in forno conta più la temperatura che i lumen.',
    body: `<p>Lampadina forno o frigo guasta? <strong>Mai</strong> una LED standard in forno. Il frigo vuole un LED E14 compatto.</p><h2>Forno: calore prima</h2><p>I forni raggiungono 250–300 °C. L’elettronica LED standard cede sopra ~80–100 °C. Serve una <strong>lampada forno fino a 300 °C</strong>.</p><h3>Come abbinare</h3><ol><li><strong>Attacco:</strong> di solito <strong>E14</strong>, a volte G9/E27 — leggere la vecchia lampadina o il manuale.</li><li><strong>Forma:</strong> tubolare T22/T25 — il vetro di copertura deve richiudere.</li><li><strong>Potenza:</strong> equivalente alogeno 15–40 W basta.</li><li>Sulla confezione deve esserci <strong>300 °C</strong>.</li></ol><h3>Sostituzione sicura</h3><ul><li>Forno freddo, circuito isolato.</li><li>Rimuovere il vetro (guanto in gomma aiuta).</li><li>Non toccare il vetro alogeno a dita nude.</li></ul><h2>Frigorifero</h2><p>Freddo e umido — piccola <strong>LED E14 2–4 W</strong> (200–300 lm), bianco neutro/freddo per il colore degli alimenti.</p><h2>Cappa</h2><p>Spesso E14 o GU10/G4 — calore moderato; LED ok dopo verifica attacco.</p><h2>Scelte</h2><div class="en-card"><p class="en-flag">Forno E14 300 °C</p><h3>YIIFELL forno E14 (4 pz)</h3><p>Indicata per temperature forno secondo scheda.</p><a class="en-amz" href="https://www.amazon.it/dp/B0DDK55MF7?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0DDK55MF7" data-product="YIIFELL forno E14 (4 pz)">Vedi prezzo su Amazon.it</a></div><div class="en-card"><p class="en-flag">Forno E14</p><h3>Caldarax lampada forno (2 pz)</h3><p>Specifica forno 300 °C.</p><a class="en-amz" href="https://www.amazon.it/dp/B0D6BJZJ56?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0D6BJZJ56" data-product="Caldarax lampada forno (2 pz)">Vedi prezzo su Amazon.it</a></div><div class="en-card"><p class="en-flag">Frigo E14</p><h3>DiCUNO E14 3 W (2 pz)</h3><p>Sostituto compatto frigo.</p><a class="en-amz" href="https://www.amazon.it/dp/B0B7W9VRB7?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0B7W9VRB7" data-product="DiCUNO E14 3 W (2 pz)">Vedi prezzo su Amazon.it</a></div><p class="en-note">Dati da scheda produttore/Amazon verificati il 30/10/2026. I prezzi cambiano — controllare prima dell'acquisto. In qualità di affiliato Amazon percepiamo commissioni sugli acquisti idonei.</p><h2>FAQ</h2><p><strong>LED normale in forno?</strong> No — il driver cede e può rompersi.</p><p>Attacchi: <a href="https://1piece1ampoule.fr/articles/e27-ou-b22/">E27 vs B22</a> (FR).</p>`,
  },
  {
    path: 'articoli/lampadina-led-calore-durata',
    article: true,
    kicker: 'Articolo',
    title: 'Calore e durata LED: caldo normale vs guasto precoce',
    description: 'Perché i LED falliscono prima di 15.000 h: plafoni chiusi, driver, dimmer; scegliere per longevità.',
    h1: 'Calore LED: normale o no, e farli durare',
    lead: 'Caldo al tatto va bene; troppo caldo da tenere segnala lampada o apparecchio sbagliato.',
    body: `<p>I LED scaldano meno delle alogene, ma il calore uccide i driver. Circa il 60–70 % della potenza in ingresso diventa calore — meno watt totali, quindi meno calore.</p><h2>Temperatura normale</h2><p>Base <strong>calda 50–70 °C</strong> dopo un’ora è normale. Troppo calda da toccare o odore di plastica calda no.</p><h2>Perché i 15.000 h falliscono presto</h2><ul><li><strong>Plafoniera chiusa</strong> — niente circolazione; lampadine «per chiuso».</li><li><strong>Downlight in isolamento</strong> — lasciare gap o uso hood antincendio.</li><li><strong>Sospensione capovolta</strong> — calore sale nel driver.</li><li><strong>Commutazioni frequenti</strong> con lampada sensore sbagliata.</li><li><strong>Dimmer incompatibile</strong> stressa il driver.</li></ul><h2>Cosa si guasta davvero</h2><p>Il chip LED dura; i <strong>condensatori elettrolitici</strong> nel driver si seccano col calore.</p><h2>Acquistare per durata</h2><ol><li>Marca con garanzia reale (Philips, Ledvance…).</li><li>Giusti lumen, non sovradimensionati in globo piccolo — <a href="/it/tutorial/calcolare-lux-lumen-per-stanza/">dimensionare la stanza</a>.</li><li>Casi speciali: <a href="/it/articoli/lampadina-forno-frigo/">lampada forno</a>, IP esterno.</li><li>Uso a sensore: lampada adatta al movimento.</li></ol><h2>Decadimento L70</h2><p>Fine vita nominale = 70 % lumen iniziali — la stanza più scura è reale.</p><h2>Esempi</h2><a class="en-amz" href="https://www.amazon.it/dp/B01KHIM7OG?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B01KHIM7OG" data-product="Philips E27 806 lm">Vedi prezzo su Amazon.it</a><a class="en-amz" href="https://www.amazon.it/dp/B0DGPZCMG6?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0DGPZCMG6" data-product="LED per plafoniera chiusa">Vedi prezzo su Amazon.it</a><a class="en-amz" href="https://www.amazon.it/dp/B0FGD6H3NZ?tag=roboteducat0f-21" rel="nofollow sponsored noopener" target="_blank" data-asin="B0FGD6H3NZ" data-product="OSRAM movimento E27">Vedi prezzo su Amazon.it</a><p class="en-note">Dati da scheda produttore/Amazon verificati il 30/10/2026. I prezzi cambiano — controllare prima dell'acquisto. In qualità di affiliato Amazon percepiamo commissioni sugli acquisti idonei.</p><h2>FAQ</h2><p><strong>Plafoniera chiusa?</strong> Solo se la lampadina dice compatibile chiuso.</p><p><strong>Calore normale?</strong> Base calda sì; odore bruciato no.</p>`,
  },
];
