// ES lot 6 (12/11/2026): las mismas 7 páginas del lote EN. Hechos, cifras, id HTML y lógica sin cambios.
// Precios franceses indicados como tales. Sin SVG. Búsquedas Amazon.es solo /s?k= (tag roboteducat07-21).
import type { EnPage } from './en';

const esS = (q: string, label: string) =>
  `<a class="en-amz" href="https://www.amazon.es/s?k=${encodeURIComponent(q)}&tag=roboteducat07-21" rel="nofollow sponsored noopener" target="_blank" data-product="${label}">Buscar en Amazon.es</a>`;
const card = (flag: string, title: string, text: string, link: string) => `<div class="en-card"><p class="en-flag">${flag}</p><h3>${title}</h3><p>${text}</p>${link}</div>`;
const note = `<p class="en-note">Los precios y la disponibilidad cambian: compruébelos antes de comprar. Como Asociado de Amazon, obtengo ingresos por las compras que cumplen los requisitos.</p>`;
const SAFETY = `<p class="en-note"><strong>Tensión de red:</strong> cualquier trabajo en una luminaria de techo, un regulador o el cuadro eléctrico se hace <strong>con la corriente cortada</strong> (magnetotérmico abierto, ausencia de tensión comprobada). Si no es competente, no toque los bornes de red: llame a un electricista.</p>`;

const TROUBLESHOOT_ES: EnPage = {
  path: 'guias/led-parpadeo-zumbido-brillo-residual', article: true, kicker: 'Guía de diagnóstico',
  title: 'Bombilla LED que parpadea apagada, zumba o se queda encendida: qué hacer',
  description: 'LED que parpadea apagado, regulador que zumba, tira que se queda encendida o se calienta, sensor Steinel que no se apaga: causas, dificultad, tiempo y remedios.',
  h1: 'LED: parpadeo, zumbido, brillo residual',
  lead: 'Una bombilla LED que parpadea apagada, un regulador que zumba, una tira que se queda encendida o se calienta, un sensor Steinel que ya no se apaga: en la mayoría de los casos la causa se conoce y el remedio lleva unos minutos. La tabla da los órdenes de magnitud; las secciones explican qué hacer.',
  body: `<p>Forma parte de nuestras <a href="https://1piece1ampoule.fr/guides/">guías de iluminación y de diagnóstico</a>.</p>
<h2>Tabla de diagnóstico</h2>
<table><thead><tr><th>Problema</th><th>Dificultad</th><th>Tiempo</th><th>Coste (precios franceses)</th><th>Herramientas</th></tr></thead><tbody>
<tr><td>El LED parpadea o queda encendido débilmente apagado (corriente residual)</td><td><strong>Fácil (1/5)</strong></td><td>5 min</td><td>≈ €4</td><td>Destornillador aislado, bypass Legrand/Shelly o condensador bipolar de 0,47 µF</td></tr>
<tr><td>Regulador que crepita o zumba con los LED</td><td><strong>De fácil a medio (2/5)</strong></td><td>10–30 min</td><td>€15–35</td><td>Destornillador, regulador «todas las lámparas» compatible con LED</td></tr>
<tr><td>La tira LED se queda encendida débilmente o se sobrecalienta</td><td><strong>Medio (3/5)</strong></td><td>15–45 min</td><td>€5–25</td><td>Multímetro, fuente de alimentación LED bien dimensionada, perfil de aluminio</td></tr>
<tr><td>Sensor Steinel (NightMatic, IS…) se queda encendido o no se apaga</td><td><strong>Fácil (2/5)</strong></td><td>5–15 min</td><td>€0</td><td>Destornillador, manual Steinel, enmascarar el sensor crepuscular</td></tr>
</tbody></table>
<p>Los tiempos y los costes son orientativos para quien tiene práctica en el bricolaje; los costes son precios franceses. Corte siempre el circuito en el cuadro antes de abrir una caja de derivación o una luminaria.</p>
${SAFETY}
<h2>El remedio para cerca del 95 % del brillo residual y del parpadeo apagado (≈ €4, 5 min)</h2>
<p>Cuando el interruptor tiene un <strong>piloto luminoso</strong>, es un <strong>interruptor inteligente sin neutro</strong>, o un regulador deja pasar una corriente mínima, una pequeña corriente atraviesa el LED incluso «apagado». Carga su condensador interno y luego <strong>destella</strong> o se queda encendido débilmente.</p>
<p>Dos opciones equivalentes, montadas <strong>en la luminaria de techo</strong> (entre fase y neutro, o según las instrucciones), con la corriente cortada:</p>
<ul><li><strong>Módulo de bypass / compensación</strong> de Legrand o Shelly (unos €4 en Francia): pensado para los módulos sin neutro y los interruptores con piloto; el esquema está en las instrucciones.</li>
<li><strong>Condensador bipolar</strong> de 0,47 µF (450 V) en paralelo con la lámpara: el mismo principio, desvía la corriente residual; si tiene un regulador, compruebe la compatibilidad.</li></ul>
<p>Si no se ve capaz, sustituya el interruptor con piloto por uno sin luz, o use una <strong>bombilla inteligente</strong> dejando el interruptor encendido (vea los <a href="/es/guias/compatibilidad-interruptor-inteligente-sin-neutro/">interruptores inteligentes sin neutro</a> y la <a href="https://1piece1ampoule.fr/meilleur/meilleure-ampoule-connectee/">comparativa de bombillas inteligentes</a>). Síntomas con detalle: <a href="https://1piece1ampoule.fr/articles/ampoule-led-reste-allumee-faiblement/">bombilla encendida débilmente apagada</a> y <a href="https://1piece1ampoule.fr/articles/ampoule-led-qui-clignote/">bombilla que parpadea</a>.</p>
<h2>Regulador: zumbido y parpadeo</h2>
<p>El ruido viene de la tensión recortada: la electrónica del LED vibra. Con poca luz, una bombilla <strong>no regulable</strong> o un regulador leading edge provocan zumbido y parpadeo.</p>
<ul><li>Solo bombillas <strong>regulables</strong>.</li><li>Un regulador <strong>compatible con LED</strong> (trailing edge / «todas las lámparas») con mínimo ajustable.</li><li>Carga total por encima del mínimo del regulador (a menudo 5–10 W con LED).</li></ul>
<p>Guía completa: <a href="/es/guias/bombillas-led-regulables/">bombillas regulables y reguladores</a>. Artículo: <a href="https://1piece1ampoule.fr/articles/ampoule-led-gresille-bourdonne/">zumbido del LED</a>.</p>
<h2>Tira LED: se queda encendida o se calienta</h2>
<p>Una tira que <strong>se queda ligeramente encendida</strong> después de apagar suele tener la misma causa (corriente residual): un bypass en los bornes de la fuente, o un interruptor sin piloto. El <strong>sobrecalentamiento</strong> de la tira o de la fuente viene, en cambio, de una fuente escasa, un cable demasiado fino o una tira pegada sin un <strong>perfil de aluminio</strong> que disipe el calor.</p>
<ul><li>Fuente al <strong>125 %</strong> de la potencia de la tira, de calidad decente.</li><li>Un perfil de aluminio continuo es imprescindible en las tiras potentes.</li><li>No enrolle nunca una tira alimentada sobre sí misma (enrollada = sobrecalentamiento).</li></ul>
<p><a href="https://1piece1ampoule.fr/articles/installer-ruban-led/">Instalar una tira LED</a> · <a href="https://1piece1ampoule.fr/outils/calculateur-ruban-led-alimentation-24v/">calculadora de tiras LED</a>.</p>
<h2>Sensor Steinel bloqueado (luz que no se apaga)</h2>
<p>En un <strong>NightMatic 2000</strong> o un sensor empotrado como el <strong>IS 360</strong>, una lámpara que se queda encendida a plena luz del día depende casi siempre del <strong>sensor crepuscular</strong>: «ve» la luz reflejada por la lámpara que controla, o la iluminación cercana. Una temporización al máximo también puede parecer una avería.</p>
<ul><li>Oriente la célula crepuscular <strong>lejos</strong> del haz de la lámpara (manual Steinel).</li><li>Baje el umbral en lux, o ponga una pequeña máscara si el sensor recibe luz del vecino.</li><li>Compruebe la carga LED máxima (por ejemplo 350 W LED, &gt; 8 W en el IS 360): una sobrecarga puede estorbar el apagado.</li><li>Vuelva a poner la temporización y la sensibilidad al mínimo, y súbalas poco a poco.</li></ul>
<p>Comparación de fichas y combinaciones: <a href="/es/guias/iluminacion-exterior-automatica-steinel/">iluminación exterior Steinel</a>, <a href="https://1piece1ampoule.fr/guides/detecteurs-de-mouvement/">sensores de movimiento</a>, <a href="/es/marcas/steinel/">página de la marca Steinel</a>.</p>
<h2>Ideas de productos</h2>
${card('Regulador', 'Regulador «todas las lámparas» compatible con LED', 'Reduce el zumbido.', esS('regulador LED trailing edge', 'Regulador LED'))}
${card('Bypass', 'Bypass sin neutro (Legrand, Shelly)', 'Para el brillo residual.', esS('Shelly bypass LED sin neutro', 'Bypass'))}
${card('Bombilla', 'Bombilla LED E27 regulable, 806 lm', 'Un recambio fiable.', esS('bombilla LED E27 regulable 806 lumenes', 'E27 regulable'))}
${card('Condensador', 'Condensador de compensación LED 0,47 µF', 'Alternativa al bypass.', esS('condensador 0.47uF 450V LED', 'Condensador 0,47 µF'))}
${note}
<h2>Para ir más lejos</h2><p>Prueba rápida: cambie la bombilla a otro portalámparas. Si el fallo sigue a la bombilla, sustitúyala; si no, mire el interruptor, el regulador o la fuente. Diagnóstico guiado: <a href="/es/guias/parpadeo-gu10-led-regulador-diagnostico/">parpadeo GU10 / E27</a>. Focos halógenos: <a href="/es/tutoriales/sustituir-halogenos-gu10-mr16-por-led/">GU10 / MR16 sin parpadeo</a>. Baños (IP, zonas): <a href="/es/guias/zonas-bano-ip44-ip65/">zonas del baño</a>.</p>`,
};

const BATH_ROOMS: [string, string, number, number][] = [
  ['living', 'Salón', 125, 20], ['kitchen', 'Cocina', 200, 12], ['bedroom', 'Dormitorio', 100, 14], ['bath', 'Baño (general)', 175, 6],
  ['mirror', 'Espejo del baño', 400, 1.2], ['hallway', 'Pasillo', 100, 8], ['office', 'Despacho en casa', 300, 10], ['garage', 'Garaje', 300, 18],
];
const BATH_ZONES_ES: EnPage = {
  path: 'guias/zonas-bano-ip44-ip65', article: true, kicker: 'Guía técnica · norma',
  title: 'Zonas de baño 0, 1, 2 (NF C 15-100) e IP44 / IP65',
  description: 'Zonas de baño 0, 1 y 2, IP44 e IP65 según la NF C 15-100 francesa, más un conversor lux ↔ lúmenes ↔ vatios por tipo de estancia. En España rige el REBT.',
  h1: 'Zonas del baño: IP44, IP65 y NF C 15-100',
  lead: 'En Francia, la NF C 15-100 (parte 7-701, bañera o ducha) define las zonas en las que el agua y la electricidad se acercan. El grado IP de una luminaria debe corresponder a la zona en la que se instala: no es solo una etiqueta comercial. Esta guía resume las zonas 0, 1 y 2 con una tabla de IP y un conversor lux ↔ lúmenes ↔ vatios por tipo de estancia. En España el texto aplicable es el REBT: haga validar la instalación por un electricista.',
  body: `<p class="en-note">Esta página describe la norma francesa NF C 15-100 (parte 7-701, bañera o ducha): las zonas, los grados IP y las distancias de abajo son los de ese texto (referencia de junio de 2015). En España, las zonas del cuarto de baño las fija el REBT (Reglamento Electrotécnico para Baja Tensión). Los dos textos no coinciden en cada detalle: haga validar la instalación por un electricista.</p>
<h2>Las zonas en breve</h2>
<p>Referencias simplificadas de la NF C 15-100 (junio de 2015): la zona 1 llega hasta 2,25 m; la zona 2 es una franja horizontal de 0,60 m alrededor de la zona 1. Se mide desde la bañera o el plato de ducha y se leen las instrucciones de la luminaria (IP44, IP65…). Si la distribución es poco habitual, hágala comprobar por un electricista. En España el texto que hay que aplicar es el REBT, no la NF C 15-100.</p>
<h2>Tabla de zonas e IP</h2>
<table><thead><tr><th>Zona</th><th>Límite</th><th>IP mínimo</th><th>Tensión / aparatos</th><th>Nota práctica</th></tr></thead><tbody>
<tr><td>Zona 0</td><td>Interior de la bañera o del plato de ducha</td><td><strong>IPX7</strong></td><td>SELV 12 V CA o 30 V CC máx., fuente fuera de las zonas</td><td>230 V prohibidos para la iluminación</td></tr>
<tr><td>Zona 1</td><td>Por encima de la zona 0, hasta 2,25 m</td><td><strong>IPX4 (IPX5 para chorros horizontales)</strong></td><td>Solo SELV de 12 V para las luminarias</td><td>Sin 230 V</td></tr>
<tr><td>Zona 2</td><td>Franja de 0,60 m alrededor de la zona 1</td><td><strong>IPX4</strong></td><td>Clase II + diferencial de 30 mA, o SELV de 12 V</td><td>Aplique IP44 típico sobre el espejo</td></tr>
<tr><td>Fuera de las zonas</td><td>Resto de la estancia (la antigua zona 3, suprimida en 2015)</td><td><strong>Sin IP exigido por la 7-701</strong></td><td>Reglas generales de las instalaciones domésticas</td><td>El IP44 sigue siendo una elección sensata junto al lavabo</td></tr>
</tbody></table>
<p><strong>IP44</strong> = salpicaduras de agua; <strong>IP65</strong> = chorros de agua, útil junto a una ducha de chorro, en exterior o para un foco muy expuesto. Definiciones: <a href="/es/guias/grado-ip-bano-exterior/">guía de los grados IP</a>. Espejo y color: <a href="/es/zonas/espejo-bano/">iluminar el espejo</a>, <a href="/es/guias/temperatura-color-kelvin/">Kelvin</a>, <a href="/es/guias/reproduccion-cromatica-cri-ra/">CRI</a>.</p>
<h2>Conversor lux ↔ lúmenes ↔ vatios</h2>
<p>Elija un tipo de estancia (superficie y lux de confort) o cambie uno de los tres valores: los otros dos se recalculan (K ≈ 2 para la iluminación general, LED ≈ 100 lm/W). Método detallado: <a href="/es/tutoriales/calcular-lux-lumenes-por-estancia/">lux por estancia</a>.</p>
<div id="conv-bath">
<label>Tipo de estancia <select id="cv-room">${BATH_ROOMS.map(([id, l, lux, m2]) => `<option data-lux="${lux}" data-m2="${m2}" value="${id}"${id === 'bath' ? ' selected' : ''}>${l} (${lux} lx, ${m2} m²)</option>`).join('')}</select></label>
<label>Lux <input id="cv-lux" max="2000" min="20" step="5" type="number" value="175"/></label>
<label>Superficie (m²) <input id="cv-m2" max="80" min="0.5" step="0.1" type="number" value="6"/></label>
<label>Lúmenes (flujo total) <input id="cv-lm" max="100000" min="50" step="50" type="number" value="2100"/></label>
<label>Potencia LED (W) <input id="cv-w" max="2000" min="1" step="1" type="number" value="21"/></label>
</div>
<p aria-live="polite" id="cv-hint">≈ 175 lx × 6 m² × K 2 → 2.100 lm → ≈ 21 W LED</p>
<p>Si cambia los lúmenes o los vatios, se recalculan los lux de la superficie elegida (K = 2). Si cambia los lux o la superficie, se recalculan los lúmenes y los vatios.</p>
<script>(function(){var K=2,LM_W=100,lock=null;function el(i){return document.getElementById(i)}function num(v){return parseFloat(String(v).replace(',','.'))||0}function fmt(n){return Math.round(n).toLocaleString('es-ES')}function fromLux(){var lux=num(el('cv-lux').value),m2=num(el('cv-m2').value),lm=lux*m2*K;el('cv-lm').value=Math.round(lm);el('cv-w').value=Math.max(1,Math.round(lm/LM_W));el('cv-hint').textContent='≈ '+fmt(lux)+' lx × '+m2.toFixed(1)+' m² × K '+K+' → '+fmt(lm)+' lm → ≈ '+fmt(lm/LM_W)+' W LED'}function fromLm(){var lm=num(el('cv-lm').value),m2=num(el('cv-m2').value),lux=m2>0?lm/(m2*K):0;el('cv-lux').value=Math.round(lux);el('cv-w').value=Math.max(1,Math.round(lm/LM_W));el('cv-hint').textContent=fmt(lm)+' lm → ≈ '+fmt(lux)+' lx (superficie '+m2.toFixed(1)+' m²) · ≈ '+fmt(lm/LM_W)+' W LED'}function fromW(){el('cv-lm').value=Math.round(num(el('cv-w').value)*LM_W);fromLm()}el('cv-room').addEventListener('change',function(){var o=this.options[this.selectedIndex];el('cv-lux').value=o.getAttribute('data-lux');el('cv-m2').value=o.getAttribute('data-m2');fromLux()});el('cv-lux').addEventListener('input',function(){if(lock)return;lock='lux';fromLux();lock=null});el('cv-m2').addEventListener('input',function(){if(lock)return;lock='lux';fromLux();lock=null});el('cv-lm').addEventListener('input',function(){if(lock)return;lock='lm';fromLm();lock=null});el('cv-w').addEventListener('input',function(){if(lock)return;lock='w';fromW();lock=null});fromLux()})();</script>
<h2>Ideas de productos</h2>
${card('IP44', 'Aplique de espejo de baño IP44', 'Zona 2 / fuera de las zonas.', esS('aplique LED espejo baño IP44', 'Luz espejo IP44'))}
${card('IP65', 'Foco empotrado de baño IP65', 'Zonas húmedas expuestas.', esS('foco empotrado baño IP65', 'Foco IP65'))}
${card('IP44', 'Regleta LED de espejo IP44', 'Luz de frente.', esS('regleta LED espejo IP44', 'Regleta espejo IP44'))}
${card('SELV', 'Transformador de 12 V estanco para LED', 'Muy baja tensión para las zonas 0–1.', esS('transformador LED 12V IP67 estanco', 'Transformador SELV 12 V'))}
${note}
<h2>Para ir más lejos</h2><p>Toda la estancia: <a href="https://1piece1ampoule.fr/pieces/salle-de-bain/">iluminación del baño</a>. Diagnóstico LED (brillo, zumbido): <a href="/es/guias/led-parpadeo-zumbido-brillo-residual/">guía de diagnóstico de los LED</a>. Equivalencia de bombillas: <a href="/es/guias/lumenes-vatios/">lúmenes y vatios</a>.</p>`,
};

const DIM_ROWS: [string, string, string, string, string, string, string][] = [
  ['leading', 'Leading edge (corte al inicio de la onda)', 'gu10', 'LED GU10 regulable', 'risk', 'Alto', 'Reguladores antiguos para halógenos: parpadeo frecuente. Sustitúyalos por un trailing edge.'],
  ['leading', 'Leading edge', 'e27', 'LED E27 regulable', 'risk', 'Alto', 'El mismo problema; las bombillas «compatibles con regulador» a veces funcionan, pero solo con carga alta.'],
  ['leading', 'Leading edge', 'e14', 'LED E14 regulable', 'risk', 'Alto', 'Cargas pequeñas: a menudo por debajo del mínimo del regulador → parpadeo al final del recorrido.'],
  ['trailing', 'Trailing edge (corte al final de la onda)', 'gu10', 'LED GU10 regulable', 'ok', 'Bajo', 'Combinación recomendada para los focos de cocina y salón.'],
  ['trailing', 'Trailing edge', 'e27', 'LED E27 regulable', 'ok', 'Bajo', 'Ajuste el mínimo del regulador después de la instalación.'],
  ['trailing', 'Trailing edge', 'e14', 'LED E14 regulable', 'ok', 'De bajo a medio', 'Sume la carga (varias bombillas) para superar el mínimo de 5–10 W.'],
  ['universal', 'Regulador LED «todas las lámparas»', 'gu10', 'LED GU10 regulable', 'ok', 'Muy bajo', 'La opción más fiable para sustituir un regulador antiguo.'],
  ['universal', 'Todas las lámparas LED', 'e27', 'LED E27 regulable', 'ok', 'Muy bajo', 'No mezcle marcas de bombillas en el mismo regulador.'],
  ['universal', 'Todas las lámparas LED', 'e14', 'LED E14 regulable', 'ok', 'Bajo', 'Compruebe la carga máxima del regulador (lámparas de araña con muchas bombillas).'],
  ['trailing', 'Trailing edge', 'gu10', 'LED GU10 no regulable', 'no', 'n.a.', 'No regulable: riesgo de parpadeo o fallo prematuro. No la use.'],
];
const SCORE: Record<string, string> = { ok: '✓ Buena elección', risk: '⚠ Riesgo', no: '✗ Evitar' };
const btn = (cls: string, attr: string, v: string, label: string, on = false) => `<button type="button" class="${cls}" ${attr}="${v}" aria-pressed="${on}" style="margin:.15rem;padding:.2rem .6rem;border:1px solid #d6d3d1;border-radius:.4rem;${on ? 'font-weight:600;background:#fef3c7' : ''}">${label}</button>`;
const DIMMER_MATRIX_ES: EnPage = {
  path: 'guias/regulador-led-matriz-gu10-e27-e14', article: true, kicker: 'Guía técnica · reguladores',
  title: 'Matriz regulador (leading / trailing edge) × bombilla LED: GU10, E14, E27',
  description: 'Regulador leading o trailing edge y bombillas LED GU10, E27, E14 regulables: riesgo de parpadeo y combinaciones acertadas, con filtros interactivos.',
  h1: 'Regulador × bombilla LED: matriz antiparpadeo',
  lead: 'El leading edge (herencia de los halógenos) y el trailing edge (LED) no gobiernan la misma electrónica. Esta matriz cruza el tipo de regulador con el casquillo (GU10, E27, E14) para estimar el riesgo de parpadeo.',
  body: `<p>Guía detallada: <a href="/es/guias/bombillas-led-regulables/">bombillas regulables</a>.</p>
<h2>Filtros interactivos</h2>
<div id="dim-filters"><span>Regulador:</span> ${btn('dim-f', 'data-d', 'all', 'Todos', true)}${btn('dim-f', 'data-d', 'leading', 'Leading edge')}${btn('dim-f', 'data-d', 'trailing', 'Trailing edge')}${btn('dim-f', 'data-d', 'universal', 'Todas las lámparas')}<br/><span>Bombilla:</span> ${btn('bulb-f', 'data-b', 'all', 'Todas', true)}${btn('bulb-f', 'data-b', 'gu10', 'GU10')}${btn('bulb-f', 'data-b', 'e27', 'E27')}${btn('bulb-f', 'data-b', 'e14', 'E14')}</div>
<table><thead><tr><th>Regulador</th><th>Bombilla</th><th>Compatibilidad</th><th>Parpadeo</th><th>Consejo</th></tr></thead><tbody>
${DIM_ROWS.map(([d, dl, b, bl, s, f, n]) => `<tr class="dim-row" data-dimmer="${d}" data-bulb="${b}" data-score="${s}"><td>${dl}</td><td>${bl}</td><td><strong>${SCORE[s]}</strong></td><td>${f}</td><td>${n}</td></tr>`).join('\n')}
</tbody></table>
<script>(function(){var dSel='all',bSel='all';function paint(b,on){b.style.fontWeight=on?'600':'';b.style.background=on?'#fef3c7':'';b.setAttribute('aria-pressed',on?'true':'false')}function apply(){document.querySelectorAll('.dim-row').forEach(function(tr){var show=(dSel==='all'||dSel===tr.getAttribute('data-dimmer'))&&(bSel==='all'||bSel===tr.getAttribute('data-bulb'));tr.style.display=show?'':'none'})}document.querySelectorAll('.dim-f').forEach(function(b){b.addEventListener('click',function(){dSel=b.getAttribute('data-d');document.querySelectorAll('.dim-f').forEach(function(x){paint(x,x===b)});apply()})});document.querySelectorAll('.bulb-f').forEach(function(b){b.addEventListener('click',function(){bSel=b.getAttribute('data-b');document.querySelectorAll('.bulb-f').forEach(function(x){paint(x,x===b)});apply()})});apply()})();</script>
<h2>Ideas de productos</h2>
${card('Regulador', 'Regulador LED trailing edge', 'Sustituye un regulador halógeno leading edge.', esS('regulador LED trailing edge', 'Regulador trailing edge'))}
${card('GU10', 'Focos LED GU10 regulables', 'Compatibles con trailing edge.', esS('bombillas LED GU10 regulables', 'GU10 regulables'))}
${note}
<h2>Herramientas y guías relacionadas</h2><ul><li><a href="/es/herramientas/equivalencia-halogeno-led-gu10-e27-lumenes/">Equivalencia halógeno → LED</a></li><li><a href="/es/guias/parpadeo-gu10-led-regulador-diagnostico/">Diagnóstico interactivo del parpadeo</a></li><li><a href="/es/guias/compatibilidad-interruptor-inteligente-sin-neutro/">Interruptor inteligente sin neutro</a></li><li><a href="/es/guias/led-parpadeo-zumbido-brillo-residual/">Diagnóstico del zumbido</a></li><li><a href="/es/guias/casquillos-e27-e14-gu10/">Casquillos de las bombillas</a></li></ul>`,
};

const KIT_MODULES = [
  { id: 'shelly-1l', name: 'Shelly 1L', neutre: false, dim: false, minW: 3, bypassLed: true, proto: 'Wi-Fi' },
  { id: 'shelly-d2', name: 'Shelly Dimmer 2', neutre: true, dim: true, minW: 1, bypassLed: false, proto: 'Wi-Fi' },
  { id: 'legrand', name: 'Legrand Céliane con Netatmo', neutre: false, dim: true, minW: 5, bypassLed: true, proto: 'Zigbee' },
  { id: 'aqara-h1', name: 'Aqara H1 (sin neutro)', neutre: false, dim: false, minW: 3, bypassLed: true, proto: 'Zigbee' },
  { id: 'hue', name: 'Philips Hue (bombillas)', neutre: null, dim: true, minW: 0, bypassLed: false, proto: 'Zigbee / BT' },
  { id: 'sonoff-l2', name: 'Sonoff ZBMini-L2', neutre: false, dim: false, minW: 3, bypassLed: true, proto: 'Zigbee' },
];
const KIT_ROOMS = ['Salón', 'Cocina', 'Dormitorio', 'Pasillo', 'Baño', 'Despacho', 'Garaje'];
const KIT_SCRIPT = `(function(){var modules=${JSON.stringify(KIT_MODULES)},rooms=${JSON.stringify(KIT_ROOMS)};var tbody=document.getElementById('kit-tbody');var modOpts=modules.map(function(m){return '<option value="'+m.id+'">'+m.name+'</option>'}).join('');var roomOpts=rooms.map(function(p){return '<option>'+p+'</option>'}).join('');function rowHtml(){return '<tr class="kit-row"><td><select class="kit-piece">'+roomOpts+'</select></td><td><input class="kit-n" type="number" min="1" value="2" style="width:4.5rem"/></td><td><input class="kit-w" type="number" min="1" step="0.5" value="5" style="width:4.5rem"/></td><td><select class="kit-neutre"><option value="non">No</option><option value="oui">Sí</option><option value="?">No lo sé</option></select></td><td><select class="kit-dim"><option value="non">No</option><option value="oui">Sí</option></select></td><td><select class="kit-mod">'+modOpts+'</select></td><td><button type="button" class="kit-del">Quitar</button></td></tr>'}function modById(id){for(var i=0;i<modules.length;i++)if(modules[i].id===id)return modules[i]}function recalc(){var counts={},bypass=0,warns=[],hue=false,netatmo=false,aqara=false,eco=document.getElementById('kit-eco').value;document.querySelectorAll('.kit-row').forEach(function(tr){var n=+tr.querySelector('.kit-n').value||1,w=+tr.querySelector('.kit-w').value||5,P=n*w,neutre=tr.querySelector('.kit-neutre').value,wantDim=tr.querySelector('.kit-dim').value==='oui',mid=tr.querySelector('.kit-mod').value,m=modById(mid),room=tr.querySelector('.kit-piece').value;if(!m)return;counts[mid]=(counts[mid]||0)+1;if(m.id==='hue')hue=true;if(m.id==='legrand')netatmo=true;if(m.id==='aqara-h1')aqara=true;if(m.neutre===true&&neutre==='non')warns.push('“'+room+'”: '+m.name+' necesita el neutro. Elija Shelly 1L, Legrand de 2 hilos, Aqara H1 o Sonoff L2.');if(m.neutre===false&&neutre==='oui'&&mid==='shelly-1l')warns.push('“'+room+'”: con el neutro disponible, un Shelly Dimmer 2 o un regulador cableado suele ser más estable.');if(wantDim&&!m.dim&&m.id!=='hue')warns.push('“'+room+'”: ha pedido regulación, pero '+m.name+' solo enciende y apaga.');if(m.minW&&P<m.minW)warns.push('“'+room+'”: carga '+P+' W < '+m.minW+' W mínimos para '+m.name+'. Añada puntos de luz, un bypass o una bombilla más potente.');if(m.bypassLed&&(neutre==='non'||neutre==='?')&&P<8)bypass+=1});if(eco==='hue'&&!counts.hue&&Object.keys(counts).length)warns.push('Ecosistema Hue seleccionado: prevea bombillas Hue, o un Bridge para los módulos Zigbee de otras marcas.');if(eco==='wifi'&&(counts['legrand']||counts['aqara-h1']||counts['sonoff-l2']))warns.push('Ecosistema Wi-Fi Shelly: los módulos Zigbee (Legrand, Aqara, Sonoff) necesitan un hub aparte.');document.getElementById('kit-modules-out').innerHTML=Object.keys(counts).map(function(id){var m=modById(id);return '<li><strong>'+counts[id]+'×</strong> '+(m?m.name:id)+'</li>'}).join('')||'<li>Añada al menos un circuito.</li>';document.getElementById('kit-bypass-out').textContent=bypass?'Bypass antiparpadeo estimados: '+bypass+' (uno por luminaria LED por debajo de ~8 W en un módulo de 2 hilos).':'No hace falta bypass con la configuración actual.';var hubs=[];if(hue)hubs.push('Philips Hue Bridge (si hay más de 10 bombillas Bluetooth o automatizaciones)');if(netatmo)hubs.push('Pasarela Legrand Netatmo');if(aqara)hubs.push('Hub Aqara o Apple TV / HomePod (Thread)');document.getElementById('kit-hub-out').textContent=hubs.length?'Pasarelas a prever: '+hubs.join(' · '):'';document.getElementById('kit-warn-out').innerHTML=warns.length?warns.map(function(w){return '<li>⚠ '+w+'</li>'}).join(''):'<li>Ninguna alerta bloqueante en las filas introducidas.</li>'}function bindRow(tr){tr.querySelectorAll('input, select').forEach(function(e){e.addEventListener('input',recalc);e.addEventListener('change',recalc)});tr.querySelector('.kit-del').addEventListener('click',function(){tr.remove();recalc()})}document.getElementById('kit-add').addEventListener('click',function(){tbody.insertAdjacentHTML('beforeend',rowHtml());bindRow(tbody.lastElementChild);recalc()});document.getElementById('kit-eco').addEventListener('change',recalc);tbody.insertAdjacentHTML('beforeend',rowHtml());bindRow(tbody.firstElementChild);recalc()})();`;
const KIT_CONFIG_ES: EnPage = {
  path: 'guias/configurador-kit-sin-neutro', article: true, kicker: 'Guía interactiva · casa inteligente',
  title: 'Configurador de kit de iluminación inteligente: sin neutro, bypass y módulos Shelly, Hue, Aqara',
  description: 'Monte su kit de iluminación inteligente estancia por estancia, con o sin hilo de neutro: módulos, bypass antiparpadeo, pasarelas y avisos de compatibilidad.',
  h1: 'Monte su kit de iluminación inteligente estancia por estancia',
  lead: 'Añada cada punto de luz: potencia LED, si hay neutro en la caja del interruptor y el tipo de módulo. El configurador estima el número de bypass antiparpadeo (corriente de reposo de los módulos de 2 hilos) y señala los módulos que no encajan con su cableado.',
  body: `<p>Complételo con la <a href="/es/guias/compatibilidad-interruptor-inteligente-sin-neutro/">matriz de compatibilidad sin neutro</a>.</p>
<h2>Referencia de módulos</h2>
<table><thead><tr><th>Módulo</th><th>Funciona sin neutro</th><th>Regulación</th><th>Carga mín.</th><th>Bypass LED</th><th>Protocolo</th></tr></thead><tbody>
${KIT_MODULES.map((m) => `<tr><td>${m.name}</td><td>${m.neutre === null ? '— (bombillas)' : m.neutre ? 'No (neutro necesario)' : 'Sí (2 hilos)'}</td><td>${m.dim ? 'Sí' : 'Encendido/apagado'}</td><td>${m.minW ? `${m.minW} W` : '—'}</td><td>${m.bypassLed ? 'A menudo' : 'Casi nunca / no'}</td><td>${m.proto}</td></tr>`).join('\n')}
</tbody></table>
<h2>Estancias y puntos de luz</h2>
<p>Una fila = un circuito o una luminaria mandada por un solo módulo. Corte la corriente en el cuadro antes de instalar nada.</p>
<p><label>Ecosistema deseado <select id="kit-eco"><option value="any">Sin preferencia</option><option value="hue">Philips Hue</option><option value="apple">Apple Home / Aqara</option><option value="wifi">Wi-Fi local (Shelly)</option><option value="zigbee">Zigbee abierto</option></select></label></p>
<table id="kit-table"><thead><tr><th>Estancia</th><th>Puntos</th><th>W LED / punto</th><th>¿Neutro en la caja?</th><th>¿Regulador?</th><th>Módulo</th><th></th></tr></thead><tbody id="kit-tbody"></tbody></table>
<p><button id="kit-add" type="button" style="padding:.3rem .8rem;border:1px solid #d6d3d1;border-radius:.4rem">+ Añadir una estancia / un circuito</button></p>
<div aria-live="polite" id="kit-summary" class="en-card"><h3>Resumen de material</h3><ul id="kit-modules-out"></ul><p id="kit-bypass-out"></p><p id="kit-hub-out"></p><h3>Avisos de compatibilidad</h3><ul id="kit-warn-out"></ul></div>
<script>${KIT_SCRIPT}</script>
<h2>Ideas de productos</h2>
${card('Shelly', 'Módulo Shelly sin neutro', 'Micromódulo de 2 hilos.', esS('Shelly 1L sin neutro', 'Shelly 1L'))}
${card('Bypass', 'Bypass LED para módulos sin neutro', 'Corta el brillo residual.', esS('Shelly bypass LED sin neutro', 'Bypass'))}
${card('Smart', 'Kit de bombillas inteligentes Zigbee E27', 'Un solo ecosistema.', esS('bombilla inteligente Zigbee E27', 'Bombillas Zigbee E27'))}
${card('Hub', 'Hub Zigbee para el hogar', 'Hub multimarca.', esS('hub Zigbee hogar inteligente', 'Hub Zigbee'))}
${note}
<h2>Herramientas y guías relacionadas</h2><ul><li><a href="/es/guias/compatibilidad-interruptor-inteligente-sin-neutro/">Matriz de interruptores sin neutro</a></li><li><a href="/es/guias/parpadeo-gu10-led-regulador-diagnostico/">Diagnóstico de parpadeo GU10 / E27</a></li><li><a href="/es/guias/matter-thread-matriz-philips-hue-aqara-govee/">Matriz Matter, Thread, Zigbee</a></li><li><a href="/es/herramientas/">Herramientas de iluminación</a></li><li><a href="/es/marcas/philips-hue/">Ecosistema Philips Hue</a></li></ul>`,
};

const inp = (id: string, label: string, attrs: string, extra = '') => `<label${extra}>${label} <input id="${id}" type="number" ${attrs} style="width:7rem"/></label><br/>`;
const ROI_SCRIPT = `(function(){var SITE_HOURS={retail:14,office:10,workshop:16,communal:11};function el(i){return document.getElementById(i)}function num(v){return parseFloat(String(v).replace(',','.'))||0}function cur(){return el('roi-cur').value}function money(n,d){return cur()+n.toLocaleString('es-ES',{minimumFractionDigits:d,maximumFractionDigits:d})}function applyPreset(){var f=el('roi-fix'),o=f.options[f.selectedIndex];['old','new','life-old','life-new','cost-old','cost-new'].forEach(function(k){var id={'old':'roi-old-w','new':'roi-new-w'}[k]||('roi-'+k);el(id).value=o.getAttribute('data-'+k)});var park=f.value==='parking';el('roi-detect-wrap').style.display=park?'':'none';if(!park)el('roi-detect').value='0'}function calc(){var n=num(el('roi-n').value),oldW=num(el('roi-old-w').value),newW=num(el('roi-new-w').value),days=num(el('roi-days').value),effH=num(el('roi-h').value)*(1-num(el('roi-detect').value)/100),price=num(el('roi-kwh').value),inv=num(el('roi-inv').value),costOld=num(el('roi-cost-old').value),costNew=num(el('roi-cost-new').value),lifeOld=num(el('roi-life-old').value),lifeNew=num(el('roi-life-new').value),labor=num(el('roi-labor').value);var hy=effH*days,kOld=n*oldW*hy/1000,kNew=n*newW*hy/1000,kSave=kOld-kNew,eSave=kSave*price;var rOld=lifeOld>0?(n*hy)/lifeOld:0,rNew=lifeNew>0?(n*hy)/lifeNew:0,crew=Math.max(1,Math.ceil(n/20));var mOld=rOld*costOld+(rOld>=1?Math.floor(rOld)*(labor/crew):0),mNew=rNew*costNew+(rNew>=1?Math.floor(rNew)*(labor/crew*0.3):0),mSave=Math.max(0,mOld-mNew),total=eSave+mSave,pb=total>0?inv/total:Infinity;var pbTxt=!isFinite(pb)?'—':pb<1?Math.round(pb*12)+' meses':pb.toFixed(1)+' años';el('roi-result').innerHTML='<p><strong>Consumo actual:</strong> ≈ '+Math.round(kOld).toLocaleString('es-ES')+' kWh/año · <strong>después del LED:</strong> ≈ '+Math.round(kNew).toLocaleString('es-ES')+' kWh/año.</p><p><strong>kWh ahorrados:</strong> ≈ <strong>'+Math.round(kSave).toLocaleString('es-ES')+' kWh/año</strong> ('+money(eSave,2)+' menos en la factura a '+money(price,2)+'/kWh).</p><p><strong>Mantenimiento evitado (estimación):</strong> ≈ '+money(mSave,2)+' / año (lámparas + parte de la mano de obra; antiguas ≈ '+rOld.toFixed(1)+' sustituciones/año frente a LED ≈ '+rNew.toFixed(2)+').</p><p><strong>Ganancia anual total:</strong> '+money(total,2)+' · <strong>Amortización:</strong> <strong>'+pbTxt+'</strong> para '+money(inv,0)+' invertidos.</p><p>'+n+' luminarias, '+effH.toFixed(1)+' h efectivas/día ('+days+' días/año). Potencia: '+oldW+' W → '+newW+' W (−'+Math.round((1-newW/oldW)*100)+' %).</p>'}el('roi-site').addEventListener('change',function(){var h=SITE_HOURS[this.value];if(h)el('roi-h').value=h;if(this.value==='communal')el('roi-days').value=365;calc()});el('roi-fix').addEventListener('change',function(){applyPreset();calc()});['roi-cur','roi-n','roi-h','roi-days','roi-detect','roi-old-w','roi-new-w','roi-kwh','roi-inv','roi-cost-old','roi-cost-new','roi-life-old','roi-life-new','roi-labor'].forEach(function(i){el(i).addEventListener('input',calc);el(i).addEventListener('change',calc)});applyPreset();calc()})();`;
const ROI_ES: EnPage = {
  path: 'herramientas/roi-relamping-led', article: true, kicker: 'Herramientas · calculadora',
  title: 'Calculadora de ROI del relamping LED profesional (kWh, mantenimiento, amortización)',
  description: '¿Compensa el relamping LED en una tienda, una oficina, un taller o una comunidad? Tubos T8, paneles 600×600, focos halógenos, proyectores de aparcamiento: kWh ahorrados, mantenimiento evitado y plazo de amortización.',
  h1: 'Amortización del relamping LED (negocios y zonas comunes)',
  lead: 'Estime los kWh ahorrados, el mantenimiento evitado (vida útil del LED frente a las lámparas antiguas) y el plazo de amortización para una tienda, una oficina, un taller o las zonas comunes de una comunidad de vecinos. Luminarias: tubos T8, paneles 600×600, focos halógenos, proyectores de aparcamiento con sensor de movimiento.',
  body: `<p>El precio de la electricidad, la moneda y el coste de instalación se pueden modificar. Vea también <a href="/es/guias/lumenes-vatios/">lúmenes y vatios</a>, <a href="/es/guias/iluminacion-exterior-automatica-steinel/">iluminación exterior con sensores</a> y los <a href="/es/marcas/steinel/">proyectores Steinel</a>.</p>
<h2>Calculadora</h2>
<div id="roi-tool">
<label>Tipo de sitio <select id="roi-site"><option value="retail">Tienda / comercio</option><option value="office">Oficina / planta abierta</option><option value="workshop">Taller / almacén</option><option value="communal">Comunidad de vecinos (zonas comunes)</option></select></label><br/>
<label>Familia de luminarias <select id="roi-fix">
<option value="t8" data-old="58" data-new="18" data-life-old="12000" data-life-new="50000" data-cost-old="4" data-cost-new="12">Tubo fluorescente T8 58 W → LED 18 W</option>
<option value="panel" data-old="72" data-new="36" data-life-old="15000" data-life-new="50000" data-cost-old="25" data-cost-new="45">Panel fluorescente 600×600 4×18 W → panel LED 36 W</option>
<option value="gu10" data-old="50" data-new="6" data-life-old="2000" data-life-new="25000" data-cost-old="3" data-cost-new="8">Foco halógeno GU10 50 W → LED 6 W</option>
<option value="parking" data-old="250" data-new="80" data-life-old="8000" data-life-new="50000" data-cost-old="80" data-cost-new="120">Proyector de aparcamiento 250 W → LED 80 W + sensor</option>
</select></label><br/>
<label>Moneda <select id="roi-cur"><option selected value="€">€</option><option value="£">£</option><option value="$">$</option></select></label><br/>
${inp('roi-n', 'Número de luminarias', 'min="1" max="5000" step="1" value="40"')}
${inp('roi-h', 'Horas encendidas al día', 'min="0.5" max="24" step="0.5" value="12"')}
${inp('roi-days', 'Días al año', 'min="200" max="365" step="1" value="300"')}
${inp('roi-detect', 'Reducción gracias al sensor (%)', 'min="0" max="90" step="5" value="55" title="Parte del tiempo en que la luz permanece apagada o atenuada"', ' id="roi-detect-wrap"')}
${inp('roi-old-w', 'Potencia actual (W por luminaria)', 'min="1" max="2000" step="1" value="58"')}
${inp('roi-new-w', 'Potencia LED (W por luminaria)', 'min="1" max="500" step="1" value="18"')}
${inp('roi-kwh', 'Precio de la electricidad (por kWh, impuestos incluidos)', 'min="0.05" max="0.8" step="0.01" value="0.22"')}
${inp('roi-inv', 'Inversión total (material + instalación)', 'min="100" max="500000" step="50" value="3200"')}
${inp('roi-cost-old', 'Coste de una lámpara antigua', 'min="0" max="500" step="0.5" value="4"')}
${inp('roi-cost-new', 'Coste de un módulo LED', 'min="0" max="500" step="0.5" value="12"')}
${inp('roi-life-old', 'Vida útil de la lámpara antigua (h)', 'min="500" max="50000" step="100" value="12000"')}
${inp('roi-life-new', 'Vida útil del LED (h)', 'min="10000" max="100000" step="1000" value="50000"')}
${inp('roi-labor', 'Mano de obra de sustitución (por visita)', 'min="0" max="5000" step="25" value="150"')}
</div>
<div id="roi-result" class="en-card" aria-live="polite"></div>
<p>Las cifras por defecto son ejemplos basados en precios franceses: sustitúyalas por su tarifa y sus presupuestos. Los perfiles de «sitio» rellenan las horas de uso habituales. El aparcamiento con sensor aplica una reducción de las horas equivalentes (sensor HF o de infrarrojos). Cifras orientativas: pida un presupuesto a un instalador, sobre todo si solicita una ayuda a la eficiencia energética.</p>
<script>${ROI_SCRIPT}</script>
<h2>Herramientas y guías relacionadas</h2><ul><li><a href="/es/herramientas/convertidor-lux-lumen-vatio-superficie/">Conversor lux ↔ lúmenes</a></li><li><a href="/es/herramientas/plan-iluminacion-cocina-pdf/">Plan de iluminación de la cocina (PDF)</a></li><li><a href="https://1piece1ampoule.fr/pieces/parking/">Iluminación de acceso y aparcamiento</a></li><li><a href="https://1piece1ampoule.fr/meilleur/meilleur-projecteur-led-exterieur-detecteur/">Proyectores LED con sensor</a></li><li><a href="https://1piece1ampoule.fr/guides/detecteurs-de-mouvement/">Sensores de movimiento</a></li><li><a href="https://1piece1ampoule.fr/articles/economies-led-calcul/">Ahorro LED en casa</a></li></ul>`,
};

const KP_SCRIPT = `(function(){var ZONES=[{key:'bench',label:'Encimera',lux:500},{key:'island',label:'Isla / península',lux:300},{key:'cook',label:'Zona de cocción (techo)',lux:500},{key:'table',label:'Mesa del comedor',lux:200},{key:'circ',label:'Circulación',lux:100}];var K_CEIL=1.55,K_BENCH=1.4;function el(i){return document.getElementById(i)}function num(v){return parseFloat(String(v).replace(',','.'))||0}function fmt(n){return Math.round(n).toLocaleString('es-ES')}function calc(){var name=(el('kp-name').value||'').trim(),len=num(el('kp-bench-len').value),d=num(el('kp-bench-d').value),areas={island:num(el('kp-island').value),cook:num(el('kp-cook').value),table:num(el('kp-table').value),circ:num(el('kp-circ').value)},k=el('kp-k').value,per=num(el('kp-gu10-lm').value)||500,cri=el('kp-irc90').checked;var benchLm=500*len*d*K_BENCH,lmPerM=len>0?benchLm/len:0,total=0,rows='';ZONES.forEach(function(z){if(z.key==='bench'){if(len<=0)return;rows+='<tr><td>'+z.label+'</td><td>'+z.lux+' lx</td><td>Tira LED de 24 V bajo los muebles altos (CRI '+(cri?'≥ 90':'≥ 80, 90 aconsejado')+')</td><td>'+len.toFixed(1)+' m de recorrido · ≈ '+Math.round(lmPerM)+' lm/m objetivo</td></tr>';return}var m2=areas[z.key];if(m2<=0)return;var need=z.lux*m2*K_CEIL,n=Math.max(0,Math.ceil(need/per));total+=n;rows+='<tr><td>'+z.label+' ('+m2.toFixed(1)+' m²)</td><td>'+z.lux+' lx</td><td>Focos GU10 '+k+' K, haz de 36–60°</td><td>'+n+' foco'+(n>1?'s':'')+' (≈ '+fmt(need)+' lm)</td></tr>'});el('kp-tbody').innerHTML=rows;el('kp-title').textContent=name||'Plan de iluminación de la cocina';el('kp-meta').textContent='Color objetivo: '+k+' K · CRI '+(cri?'≥ 90 en cada luminaria':'≥ 80 como mínimo, 90 aconsejado en la encimera')+' · Generado el '+new Date().toLocaleDateString('es-ES');el('kp-summary').innerHTML='<p><strong>Focos GU10 de techo, total:</strong> '+total+'</p><p><strong>Tira de 24 V bajo los muebles altos:</strong> '+len.toFixed(1)+' m (fuente: consulte la calculadora de 24 V)</p><p><strong>Circuitos sugeridos:</strong> un circuito regulado para comedor y ambiente, un circuito intenso para encimera y cocción; si es posible, ponga la isla en un circuito propio para evitar sombras en la encimera.</p>';el('kp-footnote').textContent='Estimación basada en los lux habituales (encimera 500 lx, circulación 100 lx) y en un factor de techo K ≈ '+K_CEIL+'. La uniformidad depende de la altura del techo y de los acabados. Haga validar la disposición por un electricista en las zonas húmedas (fregadero) y las cargas de los circuitos.'}el('kp-recalc').addEventListener('click',calc);el('kp-print').addEventListener('click',function(){calc();window.print()});['kp-bench-len','kp-bench-d','kp-island','kp-cook','kp-table','kp-circ','kp-k','kp-gu10-lm','kp-irc90','kp-name'].forEach(function(i){el(i).addEventListener('input',calc);el(i).addEventListener('change',calc)});calc()})();`;
const KITCHEN_PLAN_ES: EnPage = {
  path: 'herramientas/plan-iluminacion-cocina-pdf', article: true, kicker: 'Herramientas · configurador',
  title: 'Plan de iluminación de la cocina, zona por zona (PDF para imprimir)',
  description: 'Planifique la iluminación de la cocina: 500 lux en la encimera, isla, zona de cocción, mesa. Número de focos GU10, longitud de la tira LED de 24 V, Kelvin y CRI, listos para imprimir.',
  h1: 'Plan de iluminación de la cocina (para imprimir)',
  lead: 'Introduzca superficies y longitudes: la herramienta propone un plan zona por zona (500 lux en la encimera, isla, cocción, mesa, circulación), el número de focos GU10, la longitud de la tira LED de 24 V bajo los muebles altos, una temperatura de color coherente y fuentes con CRI ≥ 90. Imprima el resumen para el electricista o para el proyecto.',
  body: `<p>Vea también <a href="/es/zonas/encimera-cocina/">iluminar la encimera</a>, <a href="https://1piece1ampoule.fr/articles/installer-ruban-led/">instalar una tira LED</a> y <a href="https://1piece1ampoule.fr/outils/calculateur-ruban-led-alimentation-24v/">dimensionar la fuente de 24 V</a>.</p>
<h2>Configurador</h2>
<div id="kitchen-plan-tool">
<label>Nombre del proyecto (impreso en la hoja) <input id="kp-name" maxlength="80" placeholder="p. ej. cocina de 12 m², reforma" type="text"/></label><br/>
${inp('kp-bench-len', 'Longitud de la encimera (m)', 'max="12" min="1" step="0.1" value="3.6"')}
${inp('kp-bench-d', 'Fondo de la encimera (m)', 'max="1" min="0.5" step="0.05" value="0.6"')}
${inp('kp-island', 'Superficie de isla / península (m²)', 'max="8" min="0" step="0.1" value="2"')}
${inp('kp-cook', 'Zona de cocción en el techo (m²)', 'max="6" min="0" step="0.1" value="1.2"')}
${inp('kp-table', 'Superficie de la mesa del comedor (m²)', 'max="12" min="0" step="0.1" value="2.4"')}
${inp('kp-circ', 'Superficie de circulación (m²)', 'max="25" min="2" step="0.1" value="6"')}
<label>Temperatura de color objetivo <select id="kp-k"><option value="3000">3000 K, blanco cálido (acogedor)</option><option selected value="4000">4000 K, blanco neutro (cocina, tareas)</option><option value="2700">2700 K, muy cálido (rincón del comedor)</option></select></label><br/>
${inp('kp-gu10-lm', 'Flujo por foco GU10 (lm)', 'max="800" min="250" step="25" value="500"')}
<label><input checked id="kp-irc90" type="checkbox"/> Exigir un CRI ≥ 90 en cada fuente (alimentos, acabados)</label>
</div>
<p class="no-print"><button id="kp-recalc" type="button" style="padding:.3rem .8rem;border:1px solid #d6d3d1;border-radius:.4rem">Actualizar el plan</button> <button id="kp-print" type="button" style="padding:.3rem .8rem;border:1px solid #d6d3d1;border-radius:.4rem">Imprimir / PDF</button></p>
<div id="kp-print-area" class="print-plan-wrap en-card" aria-live="polite"><p>1piece1ampoule.fr · plan orientativo</p><h3 id="kp-title">Plan de iluminación de la cocina</h3><p id="kp-meta"></p>
<table id="kp-table-out"><thead><tr><th>Zona</th><th>Lux objetivo</th><th>Solución</th><th>Cantidad</th></tr></thead><tbody id="kp-tbody"></tbody></table>
<div id="kp-summary"></div><p id="kp-footnote"></p></div>
<style>@media print{body *{visibility:hidden}.print-plan-wrap,.print-plan-wrap *{visibility:visible}.print-plan-wrap{position:absolute;left:0;top:0;width:100%;margin:0;padding:0;box-shadow:none!important}}</style>
<script>${KP_SCRIPT}</script>
<h2>Herramientas y guías relacionadas</h2><ul><li><a href="/es/herramientas/convertidor-lux-lumen-vatio-superficie/">Conversor lux ↔ lúmenes</a></li><li><a href="/es/herramientas/equivalencia-halogeno-led-gu10-e27-lumenes/">Equivalencia halógeno GU10</a></li><li><a href="https://1piece1ampoule.fr/outils/calculateur-ruban-led-alimentation-24v/">Calculadora de tira LED de 24 V</a></li><li><a href="/es/guias/temperatura-color-kelvin/">Kelvin</a> · <a href="/es/guias/reproduccion-cromatica-cri-ra/">CRI</a></li><li><a href="https://1piece1ampoule.fr/meilleur/meilleur-spot-gu10/">Comparativa de focos GU10</a></li><li><a href="https://1piece1ampoule.fr/pieces/cuisine/">Iluminación de la cocina</a></li><li><a href="/es/herramientas/roi-relamping-led/">ROI del relamping LED (negocios)</a></li></ul>`,
};

const GR35_BUY = 'https://www.awin1.com/cread.php?awinmid=94223&awinaffid=3127458&ued=https%3A%2F%2Fwww.imalentstore.com%2Fproducts%2Fimalent-gr35-4-in-1-edc-flashlight';
const img = (f: string, alt: string, w: number, h: number) => `<img src="/images/tests/imalent-gr35/${f}" alt="${alt}" width="${w}" height="${h}" loading="lazy" style="max-width:100%;height:auto" />`;
const GR35_FAQ: [string, string][] = [
  ['¿La linterna se calienta al usarla?', 'Sí. A plena potencia se nota claramente el calor en la mano cuando se ilumina la palma. Es coherente con una linterna muy luminosa: parte de la energía eléctrica se convierte en calor en el LED y en el cuerpo.'],
  ['¿El láser verde es estable?', 'Sí: el puntero láser verde se mantiene constante durante el uso.'],
  ['¿Se puede usar el láser con seguridad?', 'Un láser no debe apuntarse nunca a los ojos, a personas, animales, vehículos o aeronaves. Mantenga la linterna fuera del alcance de los niños y use el láser solo para señalar objetos un momento, nunca hacia nadie.'],
  ['¿El manual está en francés?', 'No: en la unidad que probamos no estaba traducido al francés. No es obligatorio, pero fue el principal inconveniente del pack para nosotros, que somos un sitio francés.'],
  ['¿Qué incluye la linterna?', 'Además de la linterna, el estuche incluye un power bank y una funda de tela gris: dos accesorios que apreciamos.'],
];
const GR35_TEST_ES: EnPage = {
  path: 'pruebas/imalent-gr35', article: true, kicker: 'Prueba de producto · actualizada el 2 de noviembre de 2026',
  title: 'Prueba Imalent GR35: linterna, láser verde y estuche power bank',
  description: 'Imalent GR35 probada: linterna muy potente, regulador sencillo, láser verde, estuche power bank y funda. Manual no en francés. Linterna cedida gratis; prueba independiente.',
  h1: 'Prueba Imalent GR35: linterna, láser verde y estuche power bank',
  lead: 'La Imalent GR35 no es una bombilla de salón: es una linterna compacta con láser verde, regulador y un estuche que también hace de power bank. Esto es lo que nos quedó después de probarla.',
  body: `<p class="en-note"><strong>Linterna cedida gratis por Imalent para esta prueba; sin control sobre el contenido de la reseña.</strong></p>
<p><img src="/images/tests/imalent-gr35/imalent-gr35-contenu-pochette-powerbank-torche.webp" alt="Contenido de la caja Imalent GR35 sobre una mesa: funda de tela gris, power bank y linterna" width="1600" height="1200" style="max-width:100%;height:auto" /></p>
<h2>Apertura de la caja</h2>
<p>En la caja: la linterna, el estuche de carga y de transporte, la funda de tela gris y su power bank. El estuche negro y azul está bien hecho; la funda cabe dentro, con su botón de presión.</p>
<p>${img('imalent-gr35-torche-dans-son-coffret.webp', 'Linterna Imalent GR35 en su estuche negro y azul, recién abierto', 1600, 1200)}</p>
<p>${img('imalent-gr35-coffret-ouvert-vide.webp', 'Estuche Imalent abierto y vacío, interior negro y azul', 1600, 1200)}</p>
<p>${img('imalent-gr35-coffret-ferme-vue-dessus.webp', 'Estuche Imalent GR35 visto desde arriba, funda de tela gris en la caja', 1200, 1600)}</p>
<p>${img('imalent-gr35-torche-pochette-tissu-dans-coffret.webp', 'Funda de tela gris Imalent GR35 con su botón de presión, dentro del estuche', 1200, 1600)}</p>
<h2>Primeras impresiones</h2><p>La calidad se nota y la linterna es sencilla de usar.</p>
<h2>Flujo, regulador y láser verde</h2>
<p>La linterna es <strong>muy potente</strong>. Si se apunta el haz a la palma de la mano se nota el calor, y no es poco para una linterna de bolsillo. Imalent declara un flujo máximo de <strong>2.800 lúmenes</strong> y un alcance de <strong>426 m</strong> (datos del fabricante, no medidos por nosotros). Para situarlo: una bombilla LED típica de salón ronda los <strong>800 lm</strong>, así que 2.800 lm son varias veces eso, en un haz concentrado. De ahí su uso para alumbrar lejos, y de ahí el calor: parte de la energía que usa el LED se convierte en calor en el cuerpo de la linterna, sobre todo a plena potencia.</p>
<p>El <strong>regulador es sencillo</strong> de usar para ajustar el brillo sin recorrer cada vez modos fijos. El puntero <strong>láser verde</strong> se mantiene <strong>estable</strong> durante el uso. Recordatorio de seguridad: no lo apunte nunca a los ojos, a personas, animales, vehículos o aeronaves; mantenga el aparato fuera del alcance de los niños.</p>
<h2>Power bank y funda</h2><p>Aparte de la linterna, lo que más nos gustó del pack es la combinación <strong>power bank + funda</strong> integrada en el estuche.</p>
<h2>El inconveniente: el manual</h2><p>El único reparo de verdad: el manual no estaba traducido al francés. No es obligatorio, pero una versión en francés habría sido bienvenida para los lectores del sitio.</p>
<h2>Puntos fuertes</h2><ul><li>Buena calidad percibida, sencillo de usar.</li><li>Power bank y funda bien pensados en el estuche.</li><li>Muy potente; regulador sencillo.</li><li>Láser verde estable.</li></ul>
<h2>Límites</h2><ul><li>Manual no en francés.</li><li>Calor notable a alta potencia.</li></ul>
<div class="en-card"><p class="en-flag">Dónde comprar</p><h3>Comprar la Imalent GR35</h3>
<p>Precio anotado el 2 de noviembre de 2026 en <strong>imalentstore.com</strong>: <strong>72,95 US$</strong> (94,95 US$ tachados); puede haber cambiado. El envío, el IVA y la aduana dependen del vendedor.</p>
<p>Código promocional de Awin publicado para Francia: <code>DZYJ10YHM</code> (−10 % en la tienda IMALENT, válido hasta el 27 de marzo de 2027, fuente Awin); puede que no se aplique en su país.</p>
<p><a href="${GR35_BUY}" rel="sponsored nofollow noopener" target="_blank" data-awin-link data-awin-mid="94223" data-product="Imalent GR35" data-placement="test-gr35-es">Vea la GR35 en la tienda oficial</a></p>
<p class="en-note">Enlace de afiliado: podemos recibir una comisión sin coste adicional para usted.</p></div>
<h2>¿Para quién es?</h2>
<p>Para quien quiere una linterna potente, recargable desde el estuche, con láser verde y brillo ajustable. Menos adecuada si necesita un manual completo en francés. Para alumbrar una bodega, vea las guías de <a href="https://1piece1ampoule.fr/pieces/cave-voutee/">bodega abovedada</a> y <a href="https://1piece1ampoule.fr/pieces/cave-a-vin/">bodega de vino</a>; para un camino, la <a href="https://1piece1ampoule.fr/zones/entree-allee-exterieure/">guía de entrada y camino</a>. Para compararla con la iluminación fija, vea la <a href="/es/guias/lumenes-vatios/">guía de lúmenes y vatios</a>, la <a href="https://1piece1ampoule.fr/marques/imalent/">página de la marca Imalent</a> y <a href="/es/marcas/">todas las marcas que seguimos</a>.</p>
<h2>Datos declarados por Imalent</h2>
<p>Cifras tomadas de la página de producto del fabricante (no medidas por nosotros):</p>
<ul><li>Flujo máximo declarado: <strong>2.800 lúmenes</strong>.</li><li>Alcance declarado: <strong>426 m</strong>.</li><li>Estuche de carga: <strong>6.700 mAh</strong>.</li></ul>
<p>Fuente: <a href="${GR35_BUY}" rel="sponsored nofollow noopener" target="_blank">página Imalent GR35 en imalentstore.com</a>, consultada el 2 de noviembre de 2026.</p>
<h2>Preguntas frecuentes</h2>
${GR35_FAQ.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('\n')}`,
};

export const TR_LOT6_ES: EnPage[] = [TROUBLESHOOT_ES, BATH_ZONES_ES, DIMMER_MATRIX_ES, KIT_CONFIG_ES, ROI_ES, KITCHEN_PLAN_ES, GR35_TEST_ES];
export const LOT6_ES_GROUPS: { fr: string; es: string }[] = [
  { fr: '/guides/ampoule-led-clignote-eteinte-gresille-depannage/', es: '/es/guias/led-parpadeo-zumbido-brillo-residual/' },
  { fr: '/guides/zones-salle-de-bain-ip44-ip65-norme-nfc-15-100/', es: '/es/guias/zonas-bano-ip44-ip65/' },
  { fr: '/guides/matrice-variateur-dimmer-ampoule-led-gu10-e27/', es: '/es/guias/regulador-led-matriz-gu10-e27-e14/' },
  { fr: '/guides/configurateur-kit-eclairage-connecte-sans-neutre/', es: '/es/guias/configurador-kit-sin-neutro/' },
  { fr: '/outils/calculateur-roi-relamping-led-professionnel/', es: '/es/herramientas/roi-relamping-led/' },
  { fr: '/outils/generateur-plan-eclairage-cuisine-pdf/', es: '/es/herramientas/plan-iluminacion-cocina-pdf/' },
  { fr: '/tests/imalent-gr35/', es: '/es/pruebas/imalent-gr35/' },
];
