// Prioriteitspagina’s NL lot 2 (okt. 2026). Vertaald uit FR/EN-bronnen, gecontroleerd 30/10/2026.
import type { EnPage } from './en';

const amz = (asin: string, label: string) =>
  `<a class="en-amz" href="https://www.amazon.nl/dp/${asin}?tag=manuso0607-21" rel="nofollow sponsored noopener" target="_blank" data-asin="${asin}" data-product="${label}">Prijs op Amazon.nl bekijken</a>`;
const note = `<p class="en-note">Productgegevens van fabrikant/Amazon, gecontroleerd op 30/10/2026. Prijzen wijzigen — controleer vóór aankoop. Als Amazon-partner verdienen wij aan in aanmerking komende aankopen.</p>`;

const err = (p: Omit<EnPage, 'article'> & { kicker?: string }): EnPage => ({
  ...p,
  article: true,
  kicker: p.kicker ?? 'Foutcode-gids',
});

export const TR_PRIORITY_LOT2_NL: EnPage[] = [
  err({
    path: 'gidsen/foutcode/hue-bridge-oranje-led',
    title: 'Hue Bridge: oranje LED (geen internet)',
    description: 'Oranje Bridge-LED: lokale lampen ok, cloud en spraakassistenten falen. DHCP, DNS, kabel.',
    h1: 'Hue Bridge: oranje LED zonder internet',
    lead: 'De Bridge-LED blijft oranje in plaats of blauw; lampen reageren soms lokaal, cloudautomatiseringen niet.',
    body: `<p><strong>Symptoom:</strong> oranje LED; lokale bediening soms oké; cloud/Alexa/Google falen.</p>
<p><strong>Waarschijnlijke oorzaken:</strong> geen DHCP (Dynamic Host Configuration Protocol — automatische IP-toewijzing) op het LAN, geblokkeerde DNS (Domain Name System), ouderlijk filter op Signify-servers, slechte Ethernetkabel.</p>
<h2>Stappen</h2><ol>
<li>Controleer internet op dezelfde LAN-poort met een ander apparaat.</li>
<li>Start de router opnieuw op met de Bridge aangesloten.</li>
<li>Sta het MAC-adres van de Bridge toe in de router (label op het apparaat).</li>
<li>Probeer openbare DNS (1.1.1.1 / 8.8.8.8) als DNS wordt gefilterd.</li>
<li>Blijft oranje met nieuwe kabel: Philips Hue-support.</li>
</ol>
<p><strong>Gereedschap:</strong> reserve-Ethernetkabel.</p>
<p><strong>Veiligheid:</strong> open de Bridge niet — 230 V aanwezig.</p>
<p>Moeilijkheid 2/5 · 20–40 min · €0–22. Support: <a href="https://www.philips-hue.com/en-gb/support" rel="nofollow noopener" target="_blank">philips-hue.com</a>.</p>`,
  }),
  err({
    path: 'gidsen/foutcode/hue-bridge-50-apparaatlimiet',
    title: 'Hue Bridge: geen nieuwe lampen (Zigbee-limiet)',
    description: 'Koppelen mislukt rond ~50 lampen: spookapparaten wissen, dicht bij Bridge koppelen, kanalen plannen, tweede Bridge.',
    h1: 'Hue Bridge: Zigbee-apparaatlimiet',
    lead: 'De app weigert een knipperende lamp te koppelen, vaak na ~50 lampen of te veel Zigbee-routers.',
    body: `<p><strong>Symptoom:</strong> koppelen mislukt terwijl de lamp knippert.</p>
<p><strong>Waarschijnlijke oorzaken:</strong> Zigbee-mesh verzadigd; repeaterlampen op verkeerde plek; spookitems in de app.</p>
<h2>Stappen</h2><ol>
<li>Verwijder ongebruikte lampen in app-instellingen.</li>
<li>Koppel binnen 3 m van de Bridge, verplaats daarna de lamp.</li>
<li>Plan Zigbee-kanalen bij meerdere Bridges.</li>
<li>Reset de lamp en probeer opnieuw (volgorde per model).</li>
<li>Grote installatie: tweede Hue Bridge op apart netwerk.</li>
</ol>
<p>Moeilijkheid 3/5 · 30–60 min · €0–55.</p>`,
  }),
  err({
    path: 'gidsen/foutcode/ikea-dirigera-tradfri-migratie',
    title: 'DIRIGERA: TRÅDFRI-lampen verdwenen na migratie',
    description: 'IKEA DIRIGERA-migratie: TRÅDFRI aan laten, opnieuw zoeken, wezen resetten.',
    h1: 'DIRIGERA: TRÅDFRI-migratie',
    lead: 'Na overstap naar DIRIGERA verschijnen sommige TRÅDFRI-lampen of -sensoren niet meer.',
    body: `<p><strong>Symptoom:</strong> TRÅDFRI-apparaten ontbreken na migratie.</p>
<p><strong>Waarschijnlijke oorzaken:</strong> onderbroken migratie; twee hubs tegelijk actief; buiten bereik tijdens overdracht.</p>
<h2>Stappen</h2><ol>
<li>Voer de IKEA-migratiewizard uit (TRÅDFRI onder stroom).</li>
<li>Schakel de oude gateway uit als u klaar bent.</li>
<li>Plaats ontbrekende apparaten dichterbij; zoek opnieuw.</li>
<li>Reset en koppel wezen opnieuw.</li>
<li>IKEA-support als migratie twee keer faalt.</li>
</ol>
<p>Moeilijkheid 2/5 · 30–60 min · €0.</p>`,
  }),
  err({
    path: 'gidsen/foutcode/ikea-tradfri-gateway-offline',
    title: 'IKEA TRÅDFRI-gateway offline',
    description: 'TRÅDFRI-gateway offline: Ethernet, USB-voeding, mDNS, opnieuw toevoegen via QR.',
    h1: 'TRÅDFRI-gateway offline',
    lead: 'De IKEA-app toont de gateway als losgekoppeld; wandschakelaars werken soms nog lokaal.',
    body: `<p><strong>Symptoom:</strong> gateway offline in de app.</p>
<p><strong>Waarschijnlijke oorzaken:</strong> Ethernet los; zwakke USB-voeding; mDNS (Multicast DNS) geblokkeerd op router.</p>
<h2>Stappen</h2><ol>
<li>Controleer de voedings-LED.</li>
<li>Steek Ethernet opnieuw in de hoofdrouter.</li>
<li>Herstart router en gateway.</li>
<li>Voeg opnieuw toe met QR-code.</li>
<li>Factory reset en IKEA-support indien nodig.</li>
</ol>
<p>Moeilijkheid 2/5 · 10–25 min · €0.</p>`,
  }),
  err({
    path: 'gidsen/foutcode/nanoleaf-ongeldige-indeling',
    title: 'Nanoleaf: ongeldige indeling of ontbrekend paneel',
    description: 'Nanoleaf-indeling geweigerd: verbindingen opnieuw klikken, grijs paneel vinden, firmware, panellimiet.',
    h1: 'Nanoleaf: ongeldige indeling',
    lead: 'De app valideert de vorm niet of één paneel blijft grijs.',
    body: `<p><strong>Symptoom:</strong> ongeldige indeling of grijs paneel.</p>
<p><strong>Waarschijnlijke oorzaken:</strong> losse verbinder; defect paneel; panellimiet overschreden; oude firmware.</p>
<h2>Stappen</h2><ol>
<li>Zet elke verbinder opnieuw tot het klikt.</li>
<li>Verwijder panelen één voor één om de fout te vinden.</li>
<li>Werk firmware van de controller bij.</li>
<li>Respecteer max. panelen per set.</li>
<li>Garantie bij defect paneel.</li>
</ol>
<p>Moeilijkheid 2/5 · 15–35 min · €0. <a href="https://help.nanoleaf.me/" rel="nofollow noopener" target="_blank">Nanoleaf-help</a>.</p>`,
  }),
  err({
    path: 'gidsen/foutcode/schneider-wiser-matter-thread',
    title: 'Schneider Wiser Matter: koppelen mislukt (Thread)',
    description: 'Wiser Matter-QR faalt: firmware, Thread border router, VLAN-isolatie.',
    h1: 'Wiser Matter: koppelen in Apple Home mislukt',
    lead: 'Wiser-dimmer Matter-QR faalt of blijft hangen in Apple Home.',
    body: `<p><strong>Symptoom:</strong> Matter-koppelen mislukt.</p>
<p><strong>Waarschijnlijke oorzaken:</strong> oude firmware; geen Thread border router; apparaat al gekoppeld.</p>
<h2>Stappen</h2><ol>
<li>Update via Wiser by SE.</li>
<li>Zorg voor een <strong>Thread</strong> border router op het LAN (radio gebruikt met Matter).</li>
<li>Reset Matter op het apparaat.</li>
<li>Schakel VLAN-isolatie uit.</li>
<li>Controleer de Schneider Matter-apparatenlijst.</li>
</ol>
<p>Moeilijkheid 3/5 · 25–45 min · €0.</p>`,
  }),
  err({
    path: 'gidsen/foutcode/shelly-dimmer-2-wifi-offline',
    title: 'Shelly Dimmer 2 Wi-Fi offline',
    description: 'Shelly Dimmer 2 offline: 2,4 GHz Wi-Fi, AP-modus, DHCP-reservering.',
    h1: 'Shelly Dimmer 2 Wi-Fi offline',
    lead: 'Module reageert niet in de app; fysieke dimmer werkt soms nog.',
    body: `<p><strong>Symptoom:</strong> cloud offline.</p>
<p><strong>Waarschijnlijke oorzaken:</strong> Wi-Fi-wachtwoord gewijzigd; alleen 5 GHz; DHCP-IP gewijzigd.</p>
<h2>Stappen</h2><ol>
<li>Schakel <strong>2,4 GHz Wi-Fi</strong> in.</li>
<li>Lokaal IP of Shelly AP-modus.</li>
<li>Configureer Wi-Fi opnieuw.</li>
<li>DHCP-reservering in de router.</li>
<li>Lokaal MQTT/Home Assistant als backup.</li>
</ol>
<p>Moeilijkheid 2/5 · 15–30 min · €0.</p>`,
  }),
  err({
    path: 'gidsen/foutcode/led-dimmer-naslagen',
    title: 'LED-dimmer: naschijnen uit',
    description: 'LED gloeit bij dimmer UIT: bypass, LED-dimmer, nul controleren.',
    h1: 'LED-dimmer: naschijnen',
    lead: 'LED’s gloeien zwak wanneer de dimmer op UIT staat.',
    body: `<p><strong>Symptoom:</strong> zwak naschijnen bij UIT.</p>
<p><strong>Waarschijnlijke oorzaken:</strong> lekstroom dimmer; gedeelde nul; gevoelige LED’s.</p>
<h2>Stappen</h2><ol>
<li>Plaats fabrikant-bypass (~€4).</li>
<li>Vervang door LED-geschikte dimmer.</li>
<li>Geen halogeen/LED-mix op dezelfde groep.</li>
<li>Controleer nul op de aansluitdoos.</li>
<li>Elektricien als het aanhoudt.</li>
</ol>
<p><strong>Veiligheid:</strong> alleen LED-geschikte bipolaire condensator; geen werk onder spanning.</p>
<p>Moeilijkheid 2/5 · 15–40 min · €4–22.</p>`,
  }),
  err({
    path: 'gidsen/foutcode/led-dimmer-flikker-laag',
    title: 'LED-dimmer: flikkeren bij lage helderheid',
    description: 'Flikkeren 5–25 %: minimum verhogen, trailing edge, passende lampen.',
    h1: 'LED-dimmer: flikkeren aan lage kant',
    lead: 'Zichtbaar flikkeren tussen 5 % en 25 %.',
    body: `<p><strong>Symptoom:</strong> flikkeren aan lage kant.</p>
<p><strong>Waarschijnlijke oorzaken:</strong> fase-aansnijding mismatch; goedkope drivers; minimumtrim te laag.</p>
<h2>Stappen</h2><ol>
<li>Verhoog minimumtrim.</li>
<li>Probeer ander dimbare LED-merk.</li>
<li>Trailing edge (achterkantsnijding) indien ondersteund.</li>
<li>Geen strips op wanddimmer zonder driver.</li>
<li>Afgestemd dimmer- + lampenbereik.</li>
</ol>
<p>Moeilijkheid 2/5 · 15–35 min · €0–30.</p>`,
  }),
  err({
    path: 'gidsen/foutcode/wiz-lamp-flikker-dimmer',
    title: 'WiZ-lamp flikkert met wanddimmer',
    description: 'WiZ + wanddimmer: schakelaar 100 %, LED-dimmer, of alleen dimmen in app.',
    h1: 'WiZ-lamp en wanddimmer: flikkeren',
    lead: 'Flikkeren of uitvallen wanneer een wanddimmer de WiZ bedient.',
    body: `<p><strong>Symptoom:</strong> flikkeren met externe dimmer.</p>
<p><strong>Waarschijnlijke oorzaken:</strong> incompatible dimmer; dubbele dimming (wandschakelaar + app).</p>
<h2>Stappen</h2><ol>
<li>Wanddimmer op 100 %; dimmen in WiZ-app.</li>
<li>Gecertificeerde LED-dimmer.</li>
<li>Eenvoudige schakelaar + app.</li>
<li>Controleer «dimbare» op de verpakking.</li>
<li>Compensatiecondensator bij naschijnen.</li>
</ol>
<p><strong>Veiligheid:</strong> groep spanningsvrij maken vóór dimmerwissel.</p>
<p>Moeilijkheid 2/5 · 15–35 min · €18–40.</p>`,
  }),
  {
    path: 'gidsen/steinel-automatische-buitenverlichting',
    article: true,
    kicker: 'Koopgids',
    title: 'Steinel automatische buitenverlichting: 4 producten uit datasheets vergeleken',
    description: 'Steinel L 12 M, NightMatic 2000, IS 360-1, XSolar LH-N: IP, belasting, drempels uit fabrieksdocumenten.',
    h1: 'Entreeverlichting automatiseren met Steinel',
    lead: 'Vier Steinel-referenties van 2echoix vergeleken op fabrieksdata (23/10/2026). Alleen XSolar LH-N is een complete lamp; L 12 M heeft geen detector.',
    body: `<h2>Onze keuze</h2>
<p>Voor bestaande buitenlamp: <strong>L 12 M + E27 LED ~800 lm bij 2700–3000 K + NightMatic 2000</strong> (ca. €80,58 excl. lamp). Alleen beweging: <strong>IS 360-1</strong> onder overkapping.</p>
<p><a href="https://www.awin1.com/pclick.php?p=46381369701&a=3127458&m=31151" rel="sponsored nofollow noopener" target="_blank">L 12 M bij 2echoix (€57,19, 22/10/2026)</a></p>
<h2>Datasheet-tabel</h2>
<table><thead><tr><th>Product</th><th>Rol</th><th>Flux</th><th>IP</th><th>K</th><th>Belasting</th><th>Detectie</th><th>2echoix</th></tr></thead><tbody>
<tr><td>L 12 M 069155</td><td>Wandlamp, geen sensor</td><td>Via E27-lamp</td><td>IP44 IK03</td><td>Lamp</td><td>Max. 60 W</td><td>–</td><td><a href="https://www.awin1.com/pclick.php?p=46381369701&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€57,19</a></td></tr>
<tr><td>NightMatic 2000 550417</td><td>Schemerschakelaar</td><td>Geen</td><td>IP54</td><td>–</td><td>1000 W; max. 4 LED; 0,8 W</td><td>2–30 lx</td><td><a href="https://www.awin1.com/pclick.php?p=46359010299&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€23,39</a></td></tr>
<tr><td>IS 360-1 DE 032845</td><td>PIR plafond</td><td>Geen</td><td>IP54</td><td>–</td><td>350 W LED bij &gt;8 W/lamp</td><td>360° Ø8/4 m</td><td><a href="https://www.awin1.com/pclick.php?p=46381369825&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€41,99</a></td></tr>
<tr><td>XSolar LH-N 035730</td><td>Zonnahuisnummer</td><td>4 LED-markering</td><td>IP44</td><td>4000 K CRI 80–89</td><td>LiFePO4</td><td>Schemer 2 lx</td><td><a href="https://www.awin1.com/pclick.php?p=45843200190&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€70,59</a></td></tr>
</tbody></table>
<p class="en-note">Steinel-datasheets 23/10/2026; 2echoix-prijzen 22/10/2026. Affiliate Awin. Alleen XSolar LH-N levert alleen nuttig licht.</p>
<h2>Combinaties</h2>
<ul>
<li><strong>Schemer tot ochtend:</strong> L 12 M + NightMatic — bescherm sensor tegen lichtspill van lamp.</li>
<li><strong>Alleen passage:</strong> IS 360-1 op 2,5–4 m onder dak.</li>
<li><strong>Huisnummer zonder bekabeling:</strong> XSolar LH-N (markering, geen padverlichting).</li>
</ul>
<h2>Opmerkingen NEN / IP</h2>
<ul>
<li>Buiten in regen: minimaal <strong>IP44</strong> — zie <a href="/nl/gidsen/ip-beschermingsgraad-badkamer-buiten/">IP-gids</a>.</li>
<li>NightMatic / IS 360-1: fase + nul; 10 A-beveiliging volgens NightMatic-handleiding.</li>
<li>Respecteer LED-belastingslimieten op datasheets.</li>
</ul>
<p><a href="/nl/merken/steinel/">Steinel-merkpagina</a>.</p>`,
  },
  {
    path: 'gidsen/kerstverlichting-binnen-buiten',
    article: true,
    kicker: 'Seizoensgids',
    title: 'Kerstverlichting binnen en buiten: IP, transformator, veiligheid, verbruik',
    description: 'Kerstverlichting: IP44 buiten, laagspanning, EN 60598-2-20, aardlekschakelaar, verbruik en timers.',
    h1: 'Kerstverlichting binnen en buiten',
    lead: 'Lichtsnoeren vragen de juiste IP, transformator en gebruiksduur — net als elk armatuur.',
    body: `<h2>In het kort</h2><table><thead><tr><th>Gebruik</th><th>Vereist</th></tr></thead><tbody><tr><td>Boom binnen</td><td>LED, CE, EN 60598-2-20</td></tr><tr><td>Buiten</td><td>IP44+ (IP65 blootgesteld), laagspanningstransformator</td></tr><tr><td>Stopcontact</td><td>Buitengroep met aardlekschakelaar</td></tr></tbody></table><h2>Binnen</h2><ul><li>Alleen LED bij droge naalden.</li><li>Warm 2200–2700 K — <a href="/nl/gidsen/kleurtemperatur-kelvin/">Kelvin</a>.</li><li>Respecteer max. aantal snoeren in handleiding.</li></ul><h2>Buiten</h2><ul><li>IP44 onder overkapping; IP65 in regen.</li><li>24 V-transformator; verlengsnoer buiten niet opgerold.</li></ul><h2>Verbruik</h2><p>kWh = W × uren ÷ 1000. Voorbeeld: 6 W × 6 u × 40 d = 1,44 kWh.</p><h2>Voorbeelden</h2><div class="en-card"><p class="en-flag">Buiten IP65</p><h3>ZOTOYI 15 m S14 festoon</h3><p>Stootvaste S14, IP65 volgens listing voor blootgestelde gevels.</p>${amz('B0972HH7C6', 'ZOTOYI 15 m S14 festoon')}</div><div class="en-card"><p class="en-flag">Balkon IP44 24 V</p><h3>10 m G40 festoon met timer</h3><p>24 V, IP44, dimbare timer volgens listing.</p>${amz('B0CZ9B4C2B', '10 m G40 festoon met timer')}</div>${note}<p>FR-handleiding: <a href="https://1piece1ampoule.fr/tutoriels/programmer-guirlande-lumineuse-exterieure/">programmeren bij schemer</a>.</p>`,
  },
  {
    path: 'gidsen/lichttherapie-ochtendlicht-winter',
    article: true,
    kicker: 'Winter & welzijn',
    title: 'Ochtendlicht en lichttherapie: 10.000 lux, afstand, weklicht',
    description: 'Therapielamp vs weksimulator vs slimme lampen; lux op afstand; ochtendroutine in winter.',
    h1: 'Lichttherapie en ochtendlicht in de winter',
    lead: 'Drie verschillende hulpmiddelen — lux-waarden gelden alleen op de afstand in de datasheet.',
    body: `<h2>Drie hulpmiddelen</h2><table><thead><tr><th>Hulpmiddel</th><th>Rol</th><th>Niveau</th></tr></thead><tbody><tr><td>Therapielamp</td><td>Sessie naar het gezicht</td><td>10.000 lux op vermelde afstand</td></tr><tr><td>Weksimulator</td><td>Geleidelijk wakker</td><td>~300 lux max. (HF3520, Philips)</td></tr><tr><td>Slimme lampen</td><td>Geplande opbouw</td><td>Afhankelijk van lm en afstand</td></tr></tbody></table><h2>Afstand</h2><p>Lux daalt met het kwadraat van de afstand. 10.000 lux op 10 cm ≠ 10.000 lux op armlengte.</p><h2>Therapielamp gebruiken</h2><ul><li>Vaak ~30 min bij ~10.000 lux ’s ochtends — volg handleiding.</li><li>Blik iets naast de lamp; CE-medisch hulpmiddel, UV-vrij.</li><li>Raadpleeg arts bij oogziekte of bipolaire stoornis.</li></ul><h2>Keuzes</h2><div class="en-card"><p class="en-flag">Lichttherapie</p><h3>Beurer TL 30</h3><p>10.000 lux op ~10 cm, 6500 K, CRI (Colour Rendering Index) 80, 3 jaar garantie.</p>${amz('B00MOIWOAK', 'Beurer TL 30')}</div><div class="en-card"><p class="en-flag">Hue wekken</p><h3>Hue White Ambiance E27 1100 lm</h3><p>EPREL 2187086: 1100 lm, 8,1 W, klasse D; Bluetooth.</p>${amz('B0FJ8VXHRX', 'Hue White Ambiance E27 1100 lm')}</div>${note}`,
  },
  {
    path: 'merken/tapo',
    article: true,
    kicker: 'Merkgids',
    title: 'Tapo (TP-Link) review: L530E Wi-Fi-lamp, 2 jaar garantie',
    description: 'Tapo L530E: 806 lm, 8,7 W, klasse F, Wi-Fi 2,4 GHz, voor- en nadelen en support.',
    h1: 'Tapo (TP-Link): ons beeld van het merk',
    lead: 'Tapo is TP-Links smart home-lijn. De Wi-Fi-kleurlamp L530E is het hubloze alternatief voor Philips Hue in één kamer.',
    body: `<h2>Officiële L530E-data (TP-Link, 23/10/2026)</h2>
<table><tbody>
<tr><th>Flux / vermogen</th><td>806 lm, 8,7 W (~93 lm/W), equivalent 60 W</td></tr>
<tr><th>Energieklasse</th><td>F (EPREL)</td></tr>
<tr><th>Kleur / CRI</th><td>2500–6500 K wit + kleur; CRI (Colour Rendering Index — kleurweergave) ≥ 80</td></tr>
<tr><th>Radio</th><td>Alleen Wi-Fi 2,4 GHz — geen Zigbee-hub</td></tr>
<tr><th>Dimmen</th><td>1–100 % in app</td></tr>
<tr><th>Levensduur</th><td>15.000 u</td></tr>
</tbody></table>
<h2>Voordelen</h2><ul><li>Geen hub; Alexa/Google.</li><li>Vakantiemodus, schema’s, zon-sync.</li><li>Onthoudt laatste stand na stroomuitval.</li><li>Lage instapprijs.</li></ul>
<h2>Beperkingen</h2><ul><li>Klasse F vs Hue White Ambiance klasse D.</li><li>Elke lamp gebruikt een Wi-Fi-slot op de router.</li><li>806 lm krap voor grote woonkamer.</li><li>Wandschakelaar moet AAN blijven.</li></ul>
<h2>Garantie</h2>
<p>TP-Link Tapo <strong>2 jaar</strong> commerciële garantie; support via TP-Link NL. Wettelijke garantie via uw verkoper.</p>
<h2>Ons oordeel</h2>
<p>Beste instap connected verlichting voor 1–3 lampen. Daarboven schalen <strong>Zigbee</strong> (mesh-protocol met laag verbruik) systemen zoals Philips Hue beter — zie <a href="/nl/artikelen/smarte-lamp-wifi-of-zigbee/">Wi-Fi vs Zigbee</a>.</p>
<p>${amz('B08GDC99PX', 'Tapo L530E E27')} ${amz('B08Z4KCJZY', 'Tapo L530E 2-pack')}</p>
${note}
<p>Vergelijk: <a href="/nl/merken/philips-hue/">Philips Hue</a>, <a href="/nl/gidsen/smarte-lampen-cadeau-ideeen/">cadeaugids</a>.</p>`,
  },
  {
    path: 'tools/lux-lumen-watt-ruimte-omrekenen',
    article: true,
    kicker: 'Tool',
    title: 'Lux ↔ lumen ↔ LED-watt omrekenen per ruimtegrootte',
    description: 'Tweerichtingscalculator: lux, lumen en LED-watt voor m² vloeroppervlak met reflectiefactor K.',
    h1: 'Lux ↔ lumen ↔ LED-watt omrekenen',
    lead: 'Koppel streeflux op de vloer aan totale lumen en LED-vermogen voor ruimtegrootte en muurkleur.',
    body: `<p>Koppel <strong>lux</strong> (licht op een oppervlak), <strong>lumen</strong> (totale lichtstroom) en <strong>LED-watt</strong> voor een vloeroppervlak. Factor <strong>K</strong> houdt rekening met muurreflectie. Wijzig elk veld — de rest herberekent.</p>
<p>Zie <a href="/nl/gidsen/lumen-watt/">lumen vs watt</a> en <a href="/nl/handleidingen/lux-lumen-per-ruimte-berekenen/">lux per ruimte</a>.</p>
<h2>Calculator</h2>
<div class="mt-5 grid gap-4 sm:grid-cols-2" id="conv-lux-tool">
<label class="block text-sm font-semibold sm:col-span-2">Ruimtetype
<select id="cv-room" class="mt-1 w-full rounded-xl border border-stone-300 bg-white p-2"><option value="salon" data-lux="125" data-m2="20">Woonkamer (125 lx, 20 m²)</option><option value="cuisine" data-lux="200" data-m2="12">Keuken (200 lx, 12 m²)</option><option value="chambre" data-lux="100" data-m2="14">Slaapkamer (100 lx, 14 m²)</option><option value="sdb" data-lux="175" data-m2="6">Badkamer (175 lx, 6 m²)</option><option value="bureau" data-lux="300" data-m2="10">Kantoor / thuiswerk (300 lx, 10 m²)</option><option value="garage" data-lux="300" data-m2="18">Garage (300 lx, 18 m²)</option><option value="couloir" data-lux="100" data-m2="8">Hal (100 lx, 8 m²)</option></select></label>
<label class="block text-sm font-semibold sm:col-span-2">Muurkleur (reflectie K)
<select id="cv-walls" class="mt-1 w-full rounded-xl border border-stone-300 bg-white p-2"><option value="blanc" data-k="2">Licht / witte muren (K ≈ 2)</option><option value="beige" data-k="1.85">Beige of lichtgrijs (K ≈ 1,85)</option><option value="couleur" data-k="1.55">Gemiddelde kleur (K ≈ 1,55)</option><option value="sombre" data-k="1.25">Donkere muren (K ≈ 1,25)</option></select></label>
<label class="block text-sm font-semibold">Streeflux (lux)<input id="cv-lux" type="number" min="20" max="3000" step="5" value="125" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
<label class="block text-sm font-semibold">Vloeroppervlak (m²)<input id="cv-m2" type="number" min="0.5" max="120" step="0.1" value="20" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
<label class="block text-sm font-semibold">Lumen (totale lichtstroom)<input id="cv-lm" type="number" min="50" max="150000" step="50" value="5000" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
<label class="block text-sm font-semibold">LED-rendement (lm/W)<input id="cv-lmw" type="number" min="60" max="150" step="5" value="100" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
<label class="block text-sm font-semibold sm:col-span-2">Totaal LED-vermogen (W)<input id="cv-w" type="number" min="1" max="5000" step="1" value="50" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
</div>
<p class="mt-4 text-sm" id="cv-hint" aria-live="polite"></p>
<p class="text-xs text-stone-500">Formule: lumen ≈ lux × oppervlak × K. Gaat uit van gelijkmatige verdeling — één pendel laat donkere hoeken.</p>
<script>
(function(){var lock=null;function el(id){return document.getElementById(id);}function num(v){return parseFloat(String(v).replace(',','.'))||0;}
function fmt(n){return Math.round(n).toLocaleString('nl-NL');}
function kVal(){var s=el('cv-walls');return parseFloat(s.options[s.selectedIndex].getAttribute('data-k'))||2;}
function fromLux(){var lux=num(el('cv-lux').value),m2=num(el('cv-m2').value),K=kVal(),lmw=num(el('cv-lmw').value)||100;var lm=lux*m2*K;el('cv-lm').value=Math.round(lm);el('cv-w').value=Math.max(1,Math.round(lm/lmw));el('cv-hint').textContent='≈ '+fmt(lux)+' lx × '+m2.toFixed(1)+' m² × K '+K+' → '+fmt(lm)+' lm → ≈ '+fmt(lm/lmw)+' W LED ('+lmw+' lm/W)';}
function fromLm(){var lm=num(el('cv-lm').value),m2=num(el('cv-m2').value),K=kVal(),lmw=num(el('cv-lmw').value)||100;var lux=m2>0&&K>0?lm/(m2*K):0;el('cv-lux').value=Math.round(lux);el('cv-w').value=Math.max(1,Math.round(lm/lmw));el('cv-hint').textContent=fmt(lm)+' lm → ≈ '+fmt(lux)+' lx (oppervlak '+m2.toFixed(1)+' m², K '+K+')';}
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
<ul class="mt-4"><li><a href="/nl/tools/halogen-led-equivalent-gu10-e27-lumen/">Halogeen → LED-equivalent</a></li>
<li><a href="/nl/gidsen/lumen-watt/">Lumen vs watt</a></li>
<li><a href="https://1piece1ampoule.fr/outils/convertisseur-lux-lumens-watts-surface/">Interactieve pagina (FR)</a></li></ul>`,
  },
  {
    path: 'handleidingen',
    article: true,
    kicker: 'Handleidingen',
    title: 'Verlichtingshandleidingen: lux, LED-strips, slimme schakelaars, GU10',
    description: 'Overzicht van stap-voor-stap-handleidingen met links naar Nederlandse pagina’s waar beschikbaar.',
    h1: 'Handleidingen',
    lead: 'Praktische how-to’s uit onze werkplaats — Nederlandse versies worden stap voor stap toegevoegd.',
    body: `<h2>Alle stap-voor-stap-handleidingen</h2><ul><li><a href="/nl/handleidingen/lux-lumen-per-ruimte-berekenen/">Verlichting per ruimte berekenen in lux en lumen</a></li><li><a href="/nl/handleidingen/ledstrip-onder-keukenkastjes/">LED-strip onder keukenkastjes monteren</a></li><li><a href="/nl/handleidingen/kelder-schuur-zonder-stroom-verlichten/">Kelder verlichten zonder netstroom</a></li><li><a href="/nl/handleidingen/halogeen-gu10-mr16-vervangen-door-led/">Halogeen GU10 of MR16 vervangen door LED</a></li><li><a href="/nl/handleidingen/slimme-schakelaar-zonder-nul/">Slimme schakelaar of lamp zonder nul</a></li><li><a href="https://1piece1ampoule.fr/tutoriels/appairer-module-zigbee-sans-neutre-sonoff-aqara/">Zigbee-module zonder nul koppelen (SONOFF, Aqara)</a></li><li><a href="https://1piece1ampoule.fr/tutoriels/eclairage-bureau-teletravail-lux-irc-kelvin/">Thuiswerkbureau: lux, CRI, Kelvin</a></li><li><a href="https://1piece1ampoule.fr/tutoriels/programmer-guirlande-lumineuse-exterieure/">Buitenlichtsnoer programmeren bij schemer</a></li><li><a href="https://1piece1ampoule.fr/tutoriels/reparer-guirlande-led-partie-eteinte/">Deels dode LED-lichtsnoer repareren</a></li></ul><p>Vijf handleidingen zijn volledig in het Nederlands; andere linken naar de Franse site tot publicatie.</p>`,
  },
  {
    path: 'zones',
    article: true,
    kicker: 'Zonegidsen',
    title: 'Verlichting per zone: werkblad, spiegel, entree, trap, kast',
    description: 'Vijf woonzones met lux/lumen-doelen en productkeuzes; tabel en tegels.',
    h1: 'Zones & indeling',
    lead: 'Per zone een concreet lichtdoel — daarna een getoetste producttip.',
    body: `<p>Sommige plekken vragen precies licht: gezichtshoogte bij de spiegel, schaduwvrij werkblad, automatische trap.</p>
<table><thead><tr><th>Zone</th><th>Doel</th><th>Keuze</th></tr></thead><tbody>
<tr><td><a href="/nl/zones/keukenblad/">Keukenblad</a></td><td>500 lux, ≥420 lm/m, 4000 K</td><td>DA LIGHT 56 cm bar (1000 lm/m berek.) ${amz('B07H7HB6LG', 'DA LIGHT bar')}</td></tr>
<tr><td><a href="/nl/zones/badkamerspiegel/">Badkamerspiegel</a></td><td>300–500 lux gezicht, IP44, 3000–4000 K</td><td>Lucide ONNO spiegelbar ${amz('B07B4CPRDQ', 'Lucide ONNO')}</td></tr>
<tr><td><a href="https://1piece1ampoule.fr/zones/entree-allee-exterieure/">Entree &amp; oprit</a></td><td>2000–3000 lm, IP65, beweging</td><td>OREiN 24 W flood ${amz('B0BPX1ZZXJ', 'OREiN flood')}</td></tr>
<tr><td><a href="https://1piece1ampoule.fr/zones/escaliers/">Trap</a></td><td>150 lux, auto aan beide uiteinden</td><td>OSRAM radar E27 ${amz('B0FGD6H3NZ', 'OSRAM beweging E27')}</td></tr>
<tr><td><a href="https://1piece1ampoule.fr/zones/placards-dressing/">Kledingkast</a></td><td>Draadloze bewegingsstrip</td><td>OUILA 60 cm oplaadbaar ${amz('B0F18462GT', 'OUILA bar')}</td></tr>
</tbody></table>
<div class="en-grid">
<a class="en-tile" href="/nl/zones/keukenblad/"><strong>Keukenblad</strong><span>500 lux onder kastjes.</span></a>
<a class="en-tile" href="/nl/zones/badkamerspiegel/"><strong>Badkamerspiegel</strong><span>IP44 op gezichtshoogte.</span></a>
<a class="en-tile" href="https://1piece1ampoule.fr/zones/entree-allee-exterieure/"><strong>Entree (FR)</strong><span>Oprit en portiek.</span></a>
<a class="en-tile" href="https://1piece1ampoule.fr/zones/escaliers/"><strong>Trap (FR)</strong><span>Bewegingsautomatisering.</span></a>
<a class="en-tile" href="https://1piece1ampoule.fr/zones/placards-dressing/"><strong>Kledingkast (FR)</strong><span>Bewegingsstrips.</span></a>
</div>
<p>Methode: <a href="/nl/handleidingen/lux-lumen-per-ruimte-berekenen/">lux per ruimte</a>.</p>`,
  },
  {
    path: 'zones/badkamerspiegel',
    article: true,
    kicker: 'Zonegids',
    title: 'Badkamerspiegel verlichten: lux, IP44, kleurtemperatur',
    description: 'Plaatsing spiegellicht, badkamervolumes, CRI voor make-up, wandlampen en outlet-spiegels vergeleken.',
    h1: 'Verlichting badkamerspiegel',
    lead: 'Plafondspot schaduwt het gezicht. Scheren en make-up vragen frontlicht op ooghoogte.',
    body: `<h2>Essentieel</h2><ul>
<li><strong>Plaatsing:</strong> bar over volle spiegelbreedte, of verticale wandarmaturen op ooghoogte (meest gelijkmatig).</li>
<li><strong>Niveau:</strong> 300–500 lux op het gezicht — <a href="/nl/handleidingen/lux-lumen-per-ruimte-berekenen/">lux-gids</a>.</li>
<li><strong>Kleur:</strong> 3000–4000 K; kouder wit maakt huid vlak.</li>
<li><strong>CRI (Colour Rendering Index — kleurweergave) ≥ 90</strong> voor make-up — <a href="/nl/gidsen/kleurweergave-cri-ra/">CRI-gids</a>.</li>
</ul>
<h2>IP-zones (NEN 1010 / badkamervolumes)</h2><ul>
<li><strong>Zone 1</strong> (boven bad/douche tot 2,25 m): IPX4, alleen SELV 12 V.</li>
<li><strong>Zone 2</strong> (0,6 m rond zone 1): IPX4, klasse II op 30 mA aardlek of 12 V.</li>
<li><strong>Buiten volumes:</strong> geen verplichte IP, maar IP44 verstandig bij spatten.</li>
</ul>
<p>Principe: houd netvoeding uit spatzones. Bij twijfel: erkend installateur.</p>
<h2>Wandlampen vergeleken</h2>
<table><thead><tr><th>Product</th><th>Type</th><th>IP</th><th>K</th></tr></thead><tbody>
<tr><td>Lucide ONNO 11 W 60 cm ${amz('B07B4CPRDQ', 'Lucide ONNO')}</td><td>Bar boven spiegel</td><td>IP44</td><td>3000 K</td></tr>
<tr><td>SILAMP 12 W ${amz('B0BBLYJCFF', 'SILAMP 12 W')}</td><td>Wand</td><td>IP44</td><td>6000–8000 K (koud)</td></tr>
</tbody></table>
<h2>LED-spiegels (2echoix outlet — prijzen 22/10/2026)</h2>
<table><thead><tr><th>Model</th><th>Maat</th><th>Prijs</th></tr></thead><tbody>
<tr><td>Coast anti-fog LED-spiegel</td><td>70×50 cm</td><td><a href="https://www.awin1.com/pclick.php?p=46317416057&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€79,99</a></td></tr>
<tr><td>Mirlux rond dimbaar</td><td>Ø60 cm</td><td><a href="https://www.awin1.com/pclick.php?p=46246025083&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€109,00</a></td></tr>
<tr><td>Mirlux frameless 120×60</td><td>120×60 cm</td><td><a href="https://www.awin1.com/pclick.php?p=46390597656&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€139,99</a></td></tr>
</tbody></table>
<p class="en-note">Outlet-spiegels vermelden soms geen IP/K — bevestig bij verkoper als dicht bij douchezone.</p>
<p><strong>Onze keuze:</strong> Lucide ONNO — IP44, 3000 K, 60 cm breedte voor standaard wastafelspiegel.</p>
<p>Hele badkamer: Franse <a href="https://1piece1ampoule.fr/pieces/salle-de-bain/">badkamerpagina</a>. Alle zones: <a href="/nl/zones/">zone-overzicht</a>.</p>`,
  },
  {
    path: 'over-ons',
    article: true,
    kicker: 'Over ons',
    title: 'Over 1 pièce 1 ampoule en Emmanuel Sauvage',
    description: 'Wie schrijft de site, hoe producten worden gekozen, Amazon-partnervermelding.',
    h1: 'Een site om elke kamer te verlichten, zonder jargon',
    lead: 'Onafhankelijke verlichtingsgidsen voor echte woningen — specs eerst, geen hype.',
    body: `<p><strong>1 pièce 1 ampoule</strong> wordt geredigeerd door <strong>Emmanuel Sauvage</strong>. Een lamp kiezen zou twee minuten moeten duren; tussen lumen, Kelvin, CRI (Colour Rendering Index), fittingen en dimmers eindigen mensen vaak met het verkeerde artikel. Deze site splitst elke kamer in <strong>zones</strong> (taak, sfeer, circulatie) en geeft per zone toon, vermogen en fittingtype.</p>
<h2>Hoe we producten kiezen</h2><ul>
<li>Start bij de <strong>behoefte</strong> (zone, probleem, fitting), daarna passende producten.</li>
<li>Vergelijk <strong>fabrieksspecificaties</strong>: lumen, Kelvin, CRI, IP, dimmercompatibiliteit.</li>
<li>Voorkeur voor gevestigde merken met een verstandig budgetalternatief waar het bestaat.</li>
<li>Links worden <strong>gecontroleerd</strong> bij updates.</li></ul>
<p>We lab-testen niet elk item. Selectie steunt op datasheets en verlichtingsprincipes. Verkeerde keuze? Retourbeleid van uw verkoper (Amazon.nl, enz.).</p>
<h2>Hoe de site wordt gefinancierd</h2>
<p>Als Amazon-partner verdienen wij aan in aanmerking komende aankopen via onze links — <strong>zonder extra kosten voor u</strong>. Advies is niet koopbaar: een pagina die zegt «u hoeft niets te kopen» is een goede pagina. Details: <a href="/nl/affiliatebeleid/">affiliatebeleid</a>.</p>
<h2>Correcties</h2>
<p>Fout gezien? <a href="/nl/contact/">Contact</a> — we lossen het snel op.</p>`,
  },
  {
    path: 'artikelen',
    article: true,
    kicker: 'Artikelen',
    title: 'LED-artikelen: troubleshooting, vergelijkingen, gidsen',
    description: 'Artikelhub per categorie; Nederlandse paden voor lot-2-artikelen, Franse links voor de rest.',
    h1: 'LED-verlichtingsartikelen',
    lead: 'Concrete artikelen om lampen te kiezen, fouten te vermijden en dagelijkse problemen op te lossen.',
    body: `<h2>Probleemoplossing</h2><div class="en-grid"><a class="en-tile" href="https://1piece1ampoule.fr/articles/ampoule-led-qui-clignote/"><strong>LED flikkert: oorzaken</strong><span>Flikkerdiagnose</span></a><a class="en-tile" href="https://1piece1ampoule.fr/articles/ampoule-led-reste-allumee-faiblement/"><strong>Naschijnen</strong><span>LED gloeit uit</span></a><a class="en-tile" href="https://1piece1ampoule.fr/articles/ampoule-led-gresille-bourdonne/"><strong>Zoemende LED</strong><span>Dimmerzoem</span></a><a class="en-tile" href="/nl/artikelen/led-warmte-levensduur/"><strong>LED-warmte & levensduur</strong><span>Hitte en levensduur</span></a></div><h2>Vergelijken</h2><div class="en-grid"><a class="en-tile" href="/nl/artikelen/smarte-lamp-wifi-of-zigbee/"><strong>Wi-Fi vs Zigbee</strong><span>Radio slimme lamp</span></a><a class="en-tile" href="/nl/artikelen/dimbare-of-niet-dimbare-lamp/"><strong>Dimbaar of niet</strong><span>Dimmercompatibiliteit</span></a><a class="en-tile" href="https://1piece1ampoule.fr/articles/e27-ou-b22/"><strong>E27 of B22</strong><span>Schroef vs bayonet</span></a><a class="en-tile" href="https://1piece1ampoule.fr/articles/gu10-ou-gu5-3/"><strong>GU10 of GU5.3</strong><span>230 V vs 12 V spots</span></a></div><h2>Beste keuzes</h2><div class="en-grid"><a class="en-tile" href="/nl/artikelen/oven-koelkast-lamp/"><strong>Oven- & koelkastlamp</strong><span>300 °C ovenlamp</span></a><a class="en-tile" href="/nl/artikelen/vintage-filament-lamp/"><strong>Vintage filament</strong><span>Edison LED-vormen</span></a><a class="en-tile" href="/nl/artikelen/schemerlamp/"><strong>Schemerlamp</strong><span>Fotocel-lamp</span></a></div><h2>Praktische gidsen</h2><div class="en-grid"><a class="en-tile" href="https://1piece1ampoule.fr/articles/installer-ruban-led/"><strong>LED-strip installeren</strong><span>24 V strip-gids</span></a></div><p>Volledige Franse index: <a href="https://1piece1ampoule.fr/articles/">artikelhub</a>.</p>`,
  },
  {
    path: 'artikelen/smarte-lamp-wifi-of-zigbee',
    article: true,
    kicker: 'Artikel',
    title: 'Slimme lamp Wi-Fi of Zigbee: Tapo vs Philips Hue',
    description: 'Hubloos Wi-Fi vs Zigbee met Bridge: voor- en nadelen, Matter, fouten en oordeel.',
    h1: 'Slimme lamp: Wi-Fi (Tapo) of Zigbee (Hue)?',
    lead: 'Twee radio’s, twee budgetten, twee schaalmodellen — kies vóór u een stapel lampen koopt.',
    body: `<p>U wilt bediening via telefoon of spraak, maar <strong>Wi-Fi</strong>, <strong>Zigbee</strong> (mesh met laag verbruik), <strong>Bluetooth</strong> en <strong>Matter</strong> (gemeenschappelijke smart home-laag) lopen door elkaar. Twee gangbare paden: <strong>Wi-Fi zonder hub</strong> (Tapo) en <strong>Zigbee met hub</strong> (Philips Hue).</p><h2>Wi-Fi (Tapo en vergelijkbaar)</h2><ul><li><strong>Werking:</strong> lamp verbindt direct met router.</li><li><strong>Voordelen:</strong> geen hub, lage instapprijs, Alexa/Google.</li><li><strong>Nadelen:</strong> elke lamp gebruikt Wi-Fi; latentie; sommige functies vragen cloud.</li><li><strong>Geschikt voor:</strong> 1–6 lampen, één kamer, eerste proef.</li></ul><h2>Zigbee (Philips Hue)</h2><ul><li><strong>Werking:</strong> mesh tussen lampen via <strong>Hue Bridge</strong>.</li><li><strong>Voordelen:</strong> snel met veel apparaten; lokale bediening; groot catalogus.</li><li><strong>Nadelen:</strong> hogere kosten; hub verplicht (in starterkits).</li><li><strong>Geschikt voor:</strong> automatisering hele woning.</li></ul><h2>Matter?</h2><p>Matter laat ecosystemen apparaten delen. Recente Hue- en Tapo-SKU’s ondersteunen het — minder vendor lock-in.</p><h2>Veelgemaakte fouten</h2><ul><li>Slimme lamp achter wanddimmer — volle spanning; dimmen in app.</li><li>Wandschakelaar UIT — lamp onbereikbaar; draadloze schakelaar of AAN laten.</li><li>Tunable white negeren — vaak nuttiger dan alleen kleur.</li></ul><h2>Oordeel</h2><ul><li><strong>1–3 kamers, budget:</strong> Tapo L530E.</li><li><strong>Hele woning:</strong> Hue White &amp; Color starterkit.</li></ul><h2>Getoetste keuzes</h2><div class="en-card"><p class="en-flag">Wi-Fi · geen hub</p><h3>Tapo L530E E27 kleur</h3><p>8,7 W, dimbaar, Wi-Fi 2,4 GHz.</p>${amz('B08GDC99PX', 'Tapo L530E E27 kleur')}</div><div class="en-card"><p class="en-flag">Hue starter</p><h3>Hue White & Color kit E27</h3><p>Twee lampen, Bridge, afstandsbediening; Zigbee-mesh.</p>${amz('B099NRLRG3', 'Hue White & Color kit E27')}</div><div class="en-card"><p class="en-flag">Hue tunable</p><h3>Hue White Ambiance 1100 lm</h3><p>EPREL 2187086; wekroutines.</p>${amz('B0FJ8VXHRX', 'Hue White Ambiance 1100 lm')}</div>${note}<h2>FAQ</h2><p><strong>Slimme lamp op dimmer?</strong> Nee — volle spanning; dimmen in app.</p><p><strong>Hue Bridge verplicht?</strong> Voor volledig ecosysteem en veel lampen ja; Bluetooth ~10 in één kamer.</p>`,
  },
  {
    path: 'artikelen/dimbare-of-niet-dimbare-lamp',
    article: true,
    kicker: 'Artikel',
    title: 'Dimbaar of niet-dimbaar LED: wat kopen',
    description: 'Dimbaar betekent dimmercompatibel. Wanneer nodig, oude dimmer-valkuil, stapdimmen en WarmGlow.',
    h1: 'Dimbaar of niet-dimbaar: het verschil',
    lead: 'De belangrijkste retourreden bij LED’s is dimmer-mismatch — beide kanten moeten het eens zijn.',
    body: `<p><strong>Dimbaar</strong> betekent dat de LED-driver de gesneden netgolf van een dimmer kan volgen. <strong>Niet-dimbaar</strong> op een dimmer flikkert, zoemt of faalt vroeg.</p><h2>Wanneer dimbaar nodig</h2><ul><li>Draai- of trailing-edge wanddimmer.</li><li>Avondsfeer in woon-/eetkamer.</li></ul><h2>Wanneer niet</h2><ul><li>Eenvoudige aan/uit-schakelaar — dimbaar werkt maar kost meer.</li><li><strong>Slimme lamp</strong> — dimmen in de lamp; dimmer op 100 % of verwijderen.</li></ul><h2>Oude dimmer-valkuil</h2><p>Halogeen-dimmers verwachten 40–60 W minimum; 7 W LED’s zitten eronder — LED-dimmer met minimumtrim.</p><h2>Stapdimmen (zonder dimmerbedrading)</h2><p>Sommige lampen wisselen 100 % → 50 % → 10 % via schakelaar (Philips SceneSwitch).</p><h2>WarmGlow</h2><p>Philips WarmGlow verschuift 2700 K richting 2200 K bij dimmen — gloeilampgevoel.</p><h2>Keuzes op dimmergroepen</h2><div class="en-card"><p class="en-flag">E27 dimbaar</p><h3>Philips 100 W eq dimbaar E27</h3><p>Hoge output, vloeiend dimmen op compatibele dimmer.</p>${amz('B09F9MZ4PH', 'Philips 100 W eq dimbaar E27')}</div><div class="en-card"><p class="en-flag">GU10 WarmGlow</p><h3>Philips GU10 WarmGlow</h3><p>Referentie voor gezellig gedimde spots.</p>${amz('B073FT1QT2', 'Philips GU10 WarmGlow')}</div><div class="en-card"><p class="en-flag">Dimmer upgrade</p><h3>Legrand LED-dimmer</h3><p>Vervang oude dimmer bij aanhoudend flikkeren.</p>${amz('B07MRBVNWM', 'Legrand LED-dimmer')}</div>${note}<h2>FAQ</h2><p><strong>Dimbaar zonder dimmer?</strong> Ja, altijd op 100 %.</p><p><strong>Niet-dimbaar op dimmer?</strong> Nooit — flikkeren en vroeg falen.</p><p>Nog flikkeren? <a href="https://1piece1ampoule.fr/articles/ampoule-led-qui-clignote/">LED-flikkerartikel</a> (FR) of <a href="/nl/gidsen/gu10-led-flikker-dimmer-diagnose/">diagnosegids</a>.</p>`,
  },
  {
    path: 'artikelen/vintage-filament-lamp',
    article: true,
    kicker: 'Artikel',
    title: 'Vintage filament-LED: vormen, glas, lumen',
    description: 'A60, ST64, globe; helder vs amber; glare en dimmer-valkuilen; keuzes.',
    h1: 'Vintage filament-LED-lampen',
    lead: 'Decoratieve filamenten vragen dezelfde lux-rekening als gewone LED’s — vooral in amber glas.',
    body: `<p><strong>Filament</strong>-LED’s imiteren gloeilampen: zichtbaar «draad» door helder of amber glas. Mooi in open kap — maar controleer lumen, niet alleen vorm.</p><h2>Vormen</h2><ul><li><strong>A60</strong> — veelzijdige peer.</li><li><strong>ST64</strong> — lange Edison voor open pendels.</li><li><strong>G95/G125</strong> — globe boven tafels.</li><li><strong>Kaars E14</strong> — kroonluchters.</li></ul><h2>Helder vs amber</h2><p>Helder: feller, 2700 K. Amber: 1800–2200 K kaarslook — decoratief, geen hoofdverlichting.</p><h2>Valkuilen</h2><ol><li>Lumen onderschatten — mik op ≥806 lm helder glas voor hoofdlicht.</li><li>Niet-dimbaar op dimmer — zie <a href="/nl/artikelen/dimbare-of-niet-dimbare-lamp/">dimbaar-gids</a>.</li><li>Blendings — bloot filament op ooghoogte; globe of diffuus.</li></ol><h2>Gebruik</h2><p>Tafelpendel, open kap, buiten schemer-filament voor portiek.</p><h2>Keuzes</h2><div class="en-card"><p class="en-flag">Filament E27</p><h3>Philips filament E27 60 W eq (2-pack)</h3><p>Helder glas, 2700 K, betrouwbare CRI.</p>${amz('B08HV4WG3Y', 'Philips filament E27 60 W eq (2-pack)')}</div><div class="en-card"><p class="en-flag">ST64 schemer</p><h3>Lucide ST64 schemer E27</h3><p>Edison-look + fotocel voor portiek.</p>${amz('B07TSKP9JC', 'Lucide ST64 schemer E27')}</div><div class="en-card"><p class="en-flag">Dimbaar ST64</p><h3>Philips dimbaar filament</h3><p>Voor gedimde pendels.</p>${amz('B09F9MZ4PH', 'Philips dimbaar filament')}</div>${note}<h2>FAQ</h2><p><strong>Genoeg licht?</strong> Helder ≥806 lm ja; amber vooral sfeer.</p>`,
  },
  {
    path: 'artikelen/oven-koelkast-lamp',
    article: true,
    kicker: 'Artikel',
    title: 'Oven (300 °C) en koelkastlampen: hoe kiezen',
    description: 'Ovenspecifieke hittelamp vs koelkast E14 LED; veiligheid en maat.',
    h1: 'Oven- en koelkastlampen',
    lead: 'Twee apparaten, twee specs — hittetolerantie telt in de oven meer dan lumen.',
    body: `<p>Oven- of koelkastlamp defect? <strong>Nooit</strong> een standaard LED in de oven. Koelkast vraagt compacte E14 LED.</p><h2>Oven: hitte eerst</h2><p>Ovens bereiken 250–300 °C. Standaard LED-elektronica faalt boven ~80–100 °C. U heeft een <strong>ovenlamp tot 300 °C</strong> nodig.</p><h3>Passend maken</h3><ol><li><strong>Fitting:</strong> meestal <strong>E14</strong>, soms G9/E27 — lees oude lamp of handleiding.</li><li><strong>Vorm:</strong> buis T22/T25 — glazen kap moet passen.</li><li><strong>Vermogen:</strong> 15–40 W halogeen-equivalent is genoeg.</li><li>Doos moet <strong>300 °C</strong> vermelden.</li></ol><h3>Veilig wisselen</h3><ul><li>Koude oven, groep uit.</li><li>Verwijder glazen kap (rubberen handschoen helpt).</li><li>Raak halogeen glas niet met blote vingers aan.</li></ul><h2>Koelkast</h2><p>Koud en vochtig — kleine <strong>E14 LED 2–4 W</strong> (200–300 lm), neutraal/koel wit voor voedselkleur.</p><h2>Afzuigkap</h2><p>Vaak E14 of GU10/G4 — matige hitte; LED oké na fitting te controleren.</p><h2>Keuzes</h2><div class="en-card"><p class="en-flag">Oven E14 300 °C</p><h3>YIIFELL oven E14 (4-pack)</h3><p>Geschikt voor oventemperaturen volgens listing.</p>${amz('B0DDK55MF7', 'YIIFELL oven E14 (4-pack)')}</div><div class="en-card"><p class="en-flag">Oven E14</p><h3>Caldarax ovenlamp (2-pack)</h3><p>300 °C ovenspecifiek.</p>${amz('B0D6BJZJ56', 'Caldarax ovenlamp (2-pack)')}</div><div class="en-card"><p class="en-flag">Koelkast E14</p><h3>DiCUNO E14 3 W (2-pack)</h3><p>Compacte koelkastvervanger.</p>${amz('B0B7W9VRB7', 'DiCUNO E14 3 W (2-pack)')}</div>${note}<h2>FAQ</h2><p><strong>Normale LED in oven?</strong> Nee — driver faalt en kan barsten.</p><p>Fittingen: <a href="https://1piece1ampoule.fr/articles/e27-ou-b22/">E27 vs B22</a> (FR).</p>`,
  },
  {
    path: 'artikelen/led-warmte-levensduur',
    article: true,
    kicker: 'Artikel',
    title: 'LED-warmte en levensduur: normale warmte vs vroeg falen',
    description: 'Waarom LED’s vóór 15.000 u falen: gesloten armaturen, drivers, dimmers; kiezen voor levensduur.',
    h1: 'LED-warmte: normaal of niet, en langer laten meegaan',
    lead: 'Warm aanvoelen is oké; te heet om vast te houden wijst op verkeerde lamp of armatuur.',
    body: `<p>LED’s worden koeler dan halogeen, maar hitte doodt drivers. Ongeveer 60–70 % van ingangsvermogen wordt warmte — minder watt totaal, dus minder hitte.</p><h2>Normale temperatuur</h2><p>Fitting <strong>warm 50–70 °C</strong> na een uur is normaal. Te heet om vast te houden of geur van heet plastic niet.</p><h2>Waarom 15.000 u-claims vroeg falen</h2><ul><li><strong>Gesloten armatuur</strong> — geen luchtstroming; kies «enclosed rated» lampen.</li><li><strong>Inbouwspots in isolatie</strong> — luchtkier of brandwerende kap.</li><li><strong>Hangpendel ondersteboven</strong> — warmte stijgt naar driver.</li><li><strong>Vaak schakelen</strong> met verkeerde sensorlamp.</li><li><strong>Slechte dimmer-match</strong> belast driver.</li></ul><h2>Wat faalt echt</h2><p>De LED-chip houdt; <strong>elektrolytische condensatoren</strong> in de driver drogen uit door hitte.</p><h2>Kopen voor levensduur</h2><ol><li>Merk met echte garantie (Philips, Ledvance…).</li><li>Juiste lumen, niet oversized in kleine globe — <a href="/nl/handleidingen/lux-lumen-per-ruimte-berekenen/">dimensioneer ruimte</a>.</li><li>Speciale gevallen: <a href="/nl/artikelen/oven-koelkast-lamp/">ovenlamp</a>, buiten IP.</li><li>Bewegingscyclus: bewegingsgeschikte lamp.</li></ol><h2>L70-vervaging</h2><p>Einde nominale levensduur = 70 % van startlumen — donkerder gevoel is reëel.</p><h2>Voorbeelden</h2>${amz('B01KHIM7OG', 'Philips E27 806 lm')}${amz('B0DGPZCMG6', 'Enclosed-rated LED voorbeeld')}${amz('B0FGD6H3NZ', 'OSRAM beweging E27')}${note}<h2>FAQ</h2><p><strong>Gesloten armatuur?</strong> Alleen als lamp «enclosed compatible» vermeldt.</p><p><strong>Normale warmte?</strong> Warme fitting ja; brandgeur nee.</p>`,
  },
];
