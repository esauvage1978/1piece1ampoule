// Edición en español (/es/, España), datos comprobados el 22/10/2026. Enlaces Amazon.es en amz-local.ts, Awin Lampara.es en awin.ts.
import { TUTOS_TR } from './tr-tutos';
import { HIVER_TR } from './tr-hiver';
import { TR_PRIORITY_ES } from './tr-priority-es';
import { TR_PRIORITY_LOT2_ES } from './tr-priority-lot2-es';
import { TR_LOT3_ES } from './tr-lot3-es';
import { TR_LOT6_ES } from './tr-lot6-es';
import { INTENT_ES } from './intentions-gsc';
import type { EnPage } from './en';
export const ES_PAGES: EnPage[] = [
{
path: '', kicker: 'Edición en español', title: 'Guías de iluminación con datos reales: casquillos, lúmenes, kelvin, CRI | 1 pièce 1 ampoule',
description: 'Guías LED independientes para España: E27/E14/GU10, lúmenes por estancia según UNE-EN 12464-1, temperatura de color, CRI, grados IP y volúmenes del baño según la ITC-BT-27 del REBT.',
h1: 'Elegir la bombilla adecuada, con cifras', lead: 'Nuestra web francesa ayuda desde 2020 a elegir bombillas estancia por estancia. Esta edición en español reúne nuestras guías más útiles, adaptadas a la normativa española (REBT, ITC-BT-27, UNE-EN 12464-1).',
body: `<h2>Empiece aquí</h2>
<div class="en-grid">
<a class="en-tile" href="/es/herramientas/"><strong>Simulador de luz</strong><span>Pruebe lúmenes, kelvin y CRI en seis estancias.</span></a>
<a class="en-tile" href="/es/guias/casquillos-e27-e14-gu10/"><strong>Casquillos</strong><span>E27, E14, GU10, GU5.3, G9: identifíquelo en 10 segundos.</span></a>
<a class="en-tile" href="/es/guias/lumenes-vatios/"><strong>Lúmenes, no vatios</strong><span>Tabla oficial de equivalencias (UE 2019/2015).</span></a>
<a class="en-tile" href="/es/tutoriales/calcular-lux-lumenes-por-estancia/"><strong>Lux por estancia</strong><span>Fórmula y ejemplos de cálculo.</span></a>
<a class="en-tile" href="/es/guias/temperatura-color-kelvin/"><strong>Temperatura de color</strong><span>2700 K, 3000 K, 4000 K: ¿qué estancia?</span></a>
<a class="en-tile" href="/es/guias/reproduccion-cromatica-cri-ra/"><strong>Reproducción cromática</strong><span>Por qué Ra 90 importa en cocina y baño.</span></a>
<a class="en-tile" href="/es/guias/grado-ip-bano-exterior/"><strong>Grados IP</strong><span>Volúmenes 0 a 3 del baño (ITC-BT-27).</span></a>
<a class="en-tile" href="/es/guias/bombillas-led-regulables/"><strong>LED regulables</strong><span>Corte de fase al inicio o al final, carga mínima.</span></a>
<a class="en-tile" href="/es/tutoriales/sustituir-halogenos-gu10-mr16-por-led/"><strong>Sustituir halógenos</strong><span>GU10 y MR16 a LED, con la trampa del transformador.</span></a>
<a class="en-tile" href="/es/tutoriales/tira-led-bajo-muebles-cocina/"><strong>Tira LED bajo los muebles</strong><span>24 V, sección de cable, fuente.</span></a>
<a class="en-tile" href="/es/tutoriales/interruptor-inteligente-sin-neutro/"><strong>Interruptor sin neutro</strong><span>Por qué parpadean los LED, bypass.</span></a>
<a class="en-tile" href="/es/tutoriales/iluminar-trastero-sin-electricidad/"><strong>Trastero sin electricidad</strong><span>Baterías y kit solar 12 V, cálculo en Wh.</span></a>
<a class="en-tile" href="/es/guias/luces-navidad-interior-exterior/"><strong>Luces de Navidad</strong><span>IP44, baja tensión, consumo.</span></a>
<a class="en-tile" href="/es/guias/luminoterapia-luz-manana-invierno/"><strong>Luz de la mañana</strong><span>10.000 lux: por qué importa la distancia.</span></a>
<a class="en-tile" href="/es/guias/noches-largas-luces-nocturnas/"><strong>Noches y luces nocturnas</strong><span>Blanco cálido bajo 3000 K, seguridad.</span></a>
<a class="en-tile" href="/es/guias/regalar-bombillas-inteligentes/"><strong>Regalar bombillas inteligentes</strong><span>Wi-Fi o Zigbee, datos EPREL.</span></a>
</div>
<h2>Lo que rige en España</h2>
<table><thead><tr><th></th><th>España</th></tr></thead><tbody>
<tr><td>Tensión de red</td><td>230 V, 50 Hz</td></tr>
<tr><td>Casquillos más habituales</td><td>E27, E14, GU10 (230 V), GU5.3 (12 V)</td></tr>
<tr><td>Etiqueta energética</td><td>Etiqueta UE A–G (desde el 1/9/2021, Reglamento (UE) 2019/2015)</td></tr>
<tr><td>Instalación eléctrica</td><td>Reglamento Electrotécnico para Baja Tensión (REBT, RD 842/2002) y sus ITC; baños: ITC-BT-27</td></tr>
<tr><td>Iluminación de puestos de trabajo</td><td>UNE-EN 12464-1</td></tr>
</tbody></table>
<h2>Método</h2>
<p>Nuestros valores proceden de normas y reglamentos (ecodiseño UE, UNE-EN 12464-1, UNE-EN 60529, REBT) o de fichas técnicas de fabricantes, y cada cálculo se muestra. Esta edición no contiene por ahora enlaces de afiliación (véase <a href="/es/afiliacion/">afiliación</a>).</p>`},
{
path: 'guias/lumenes-vatios', article: true, kicker: 'Guía técnica', title: 'Lúmenes o vatios: tabla de equivalencias LED y etiqueta energética (2026)',
description: '¿Cuántos lúmenes sustituyen a una incandescente de 40, 60, 75 o 100 W? Tabla oficial según el Reglamento Delegado UE 2019/2015, eficacia (lm/W), etiqueta energética A–G y fórmula del coste eléctrico.',
h1: 'Lúmenes, no vatios', lead: 'Los vatios miden la potencia consumida; los lúmenes, la luz emitida. Un LED da de 5 a 10 veces más luz por vatio que una incandescente: compre por lúmenes.',
body: `<h2>Tabla oficial de equivalencias</h2>
<p>Fuente: Reglamento Delegado (UE) 2019/2015, anexo V, tabla 7 (mismos valores que el antiguo Reglamento (CE) 244/2009, tabla 6) – flujo luminoso mínimo para poder indicar «equivale a una incandescente de X W».</p>
<table><thead><tr><th>Incandescente</th><th>Mínimo (lm)</th><th>Potencia LED típica</th></tr></thead><tbody>
<tr><td>25 W</td><td>249</td><td>2,5–3 W</td></tr><tr><td>40 W</td><td>470</td><td>4–5 W</td></tr><tr><td>60 W</td><td>806</td><td>7–9 W</td></tr><tr><td>75 W</td><td>1.055</td><td>10–12 W</td></tr><tr><td>100 W</td><td>1.521</td><td>13–16 W</td></tr></tbody></table>
<p>La potencia LED es un rango tomado de fichas técnicas actuales (p. ej. Philips 8 W A60 = 806 lm, es decir 100 lm/W), no un valor normativo.</p>
<h2>Eficacia y etiqueta energética</h2>
<p>Eficacia = lúmenes ÷ vatios. Desde el 1 de septiembre de 2021 se aplica la etiqueta reescalada A–G (Reglamento (UE) 2019/2015). La clase A empieza en torno a 210 lm/W; la mayoría de los LED estándar actuales están en E o F (85–135 lm/W). Cada bombilla figura en la base de datos europea EPREL (código QR de la etiqueta).</p>
<h2>Fórmula del coste eléctrico</h2>
<p>Coste anual = vatios × horas al día × 365 ÷ 1000 × precio del kWh.</p>
<p>Ejemplo, 3 horas al día: incandescente de 60 W = 65,7 kWh/año; LED de 8 W = 8,8 kWh/año. Ahorro: 56,9 kWh por bombilla y año; multiplíquelo por el precio del kWh de su factura (en PVPC varía cada hora).</p>`},
{
path: 'guias/casquillos-e27-e14-gu10', article: true, kicker: 'Guía técnica', title: 'Identificar el casquillo: E27, E14, GU10, GU5.3 (MR16), G9',
description: 'Identifique el casquillo en segundos: rosca E27 y E14, pines GU10 (230 V) y GU5.3 (12 V), G9 – con diámetro, tensión y uso habitual.',
h1: 'Casquillos: E27, E14, GU10…', lead: 'La letra indica el tipo (E = rosca Edison, G = pines, B = bayoneta) y el número, el diámetro o la separación de los pines en milímetros.',
body: `<table><thead><tr><th>Casquillo</th><th>Tipo</th><th>Medida</th><th>Uso</th></tr></thead><tbody>
<tr><td><strong>E27</strong></td><td>Rosca gruesa</td><td>27 mm</td><td>Plafones, lámparas de pie y de mesa – el estándar</td></tr>
<tr><td><strong>E14</strong></td><td>Rosca fina</td><td>14 mm</td><td>Bombillas vela, mesillas, frigorífico</td></tr>
<tr><td><strong>GU10</strong></td><td>2 pines con tope, girar</td><td>10 mm</td><td>Focos empotrables a 230 V</td></tr>
<tr><td><strong>GU5.3</strong> (MR16)</td><td>2 pines finos, insertar</td><td>5,3 mm</td><td>Focos a 12 V, con transformador</td></tr>
<tr><td><strong>G9</strong></td><td>2 pines en bucle</td><td>9 mm</td><td>Lámparas de diseño pequeñas, 230 V</td></tr>
<tr><td><strong>G4</strong></td><td>2 pines</td><td>4 mm</td><td>Pequeñas lámparas de 12 V</td></tr>
<tr><td><strong>B22</strong></td><td>Bayoneta</td><td>22 mm</td><td>Poco habitual en España (estándar británico)</td></tr></tbody></table>
<h2>¿GU10 o GU5.3?</h2>
<p>El GU10 tiene pines gruesos con tope y se gira: tensión de red, sin transformador. El GU5.3 tiene pines finos y rectos y se inserta: 12 V con transformador en el falso techo. Una bombilla de 230 V en un transformador de 12 V no enciende; una de 12 V a 230 V se destruye.</p>
<h2>Antes de comprar</h2>
<ul><li>Dimensiones: las LED suelen ser más largas que la bombilla antigua.</li><li>Flujo en lúmenes (véase <a href="/es/guias/lumenes-vatios/">lúmenes o vatios</a>).</li><li>Temperatura de color y reproducción cromática (Ra ≥ 90 para cocina y baño).</li><li>«Regulable» solo si tiene un regulador compatible.</li></ul>`},
{
path: 'guias/temperatura-color-kelvin', article: true, kicker: 'Guía técnica', title: 'Temperatura de color: 2700 K, 3000 K, 4000 K o 6500 K – por estancia',
description: 'Qué significan luz cálida, neutra y fría en kelvin, cómo leer el código 827/930 y qué temperatura de color conviene a cada estancia.',
h1: '2700 kelvin: blanco cálido', lead: '2700 K es blanco cálido, cerca de una bombilla incandescente, para salón, dormitorio y mesa. No gasta menos que 4000 K: a los mismos lúmenes solo cambia el tono.',
body: `<table><thead><tr><th>Kelvin</th><th>En el envase</th><th>Uso</th></tr></thead><tbody>
<tr><td>2200–2700 K</td><td>Luz extra cálida / cálida</td><td>Salón, dormitorio, comedor</td></tr>
<tr><td>3000 K</td><td>Luz cálida</td><td>Cocina, pasillo, baño</td></tr>
<tr><td>4000 K</td><td>Luz neutra</td><td>Encimera, despacho, trastero</td></tr>
<tr><td>5000–6500 K</td><td>Luz fría / luz día</td><td>Taller, garaje</td></tr></tbody></table>
<p>El código de tres cifras combina reproducción cromática y kelvin: «827» = Ra 80+, 2700 K; «930» = Ra 90+, 3000 K; «840» = Ra 80+, 4000 K.</p>
<h2>Por estancia</h2>
<ul><li><strong>Salón y dormitorio:</strong> 2700 K.</li><li><strong>Cocina:</strong> 3000 K general, 4000 K bajo los muebles altos.</li><li><strong>Espejo del baño:</strong> 3000–4000 K con Ra 90.</li><li><strong>Despacho:</strong> 4000 K en el escritorio.</li><li><strong>Trastero, taller:</strong> 4000–6500 K.</li></ul>
<p>Mantenga una sola temperatura por estancia: 2700 K y 4000 K en el mismo campo visual parecen ambas extrañas.</p>`},
{
path: 'guias/reproduccion-cromatica-cri-ra', article: true, kicker: 'Guía técnica', title: 'Reproducción cromática (CRI/Ra): por qué Ra 90 importa – y qué es R9',
description: 'El índice de reproducción cromática Ra indica lo naturales que se ven los colores. Mínimo legal Ra 80 (UE 2019/2020), cuándo compensa Ra 90+ y cómo leer el código 927/930.',
h1: 'Bombilla LED e IRC (Ra)', lead: 'El IRC, o valor Ra, dice si los colores se ven naturales. Incandescente y luz natural: 100. El mínimo legal de una bombilla LED de uso general es Ra 80 (UE 2019/2020). Para cocina y baño, Ra 90.',
body: `<table><thead><tr><th>Ra</th><th>Significado</th><th>Fuente</th></tr></thead><tbody>
<tr><td>80</td><td>Mínimo legal para lámparas LED de iluminación general</td><td>Reglamento (UE) 2019/2020</td></tr>
<tr><td>80</td><td>Mínimo para puestos de trabajo en interiores (oficina)</td><td>UNE-EN 12464-1</td></tr>
<tr><td>90+</td><td>Piel, alimentos y madera se ven naturales</td><td>Gamas «alto CRI» de los fabricantes</td></tr>
<tr><td>95+</td><td>Trabajos críticos de color: pintura, fotografía</td><td>Lámparas especiales</td></tr></tbody></table>
<h2>¿Qué es R9?</h2>
<p>Ra promedia 8 colores pastel. R9 mide aparte el rojo saturado, el punto débil de muchos LED. Una lámpara Ra 80 puede tener un R9 cercano a cero: la piel se ve apagada. En lámparas de alto CRI, busque R9 &gt; 50 en la ficha técnica.</p>
<h2>Dónde compensa Ra 90</h2><ul><li>Espejo del baño y tocador</li><li>Encimera de cocina</li><li>Estancias con cuadros o madera</li></ul><p>En un pasillo o trastero basta Ra 80.</p>`},
{
path: 'guias/grado-ip-bano-exterior', article: true, kicker: 'Guía técnica', title: 'Grados IP en iluminación: volúmenes del baño según la ITC-BT-27 (REBT) y exterior',
description: 'Qué significan IP44, IP65 e IP67 (UNE-EN 60529), qué grado IP exige cada volumen del baño según la ITC-BT-27 del REBT y qué trabajos requieren un instalador habilitado.',
h1: 'Grados IP: baño y exterior', lead: 'El código IP (UNE-EN 60529) tiene dos cifras: la primera para sólidos (0–6) y la segunda para el agua (0–9). «X» = no ensayado.',
body: `<table><thead><tr><th>Grado</th><th>Protección contra el agua</th><th>Uso</th></tr></thead><tbody>
<tr><td>IP20</td><td>ninguna</td><td>Interiores secos</td></tr>
<tr><td>IP44</td><td>Salpicaduras desde cualquier dirección</td><td>Volúmenes 1 y 2 del baño, fachada cubierta</td></tr>
<tr><td>IP65</td><td>Chorros de agua</td><td>Exterior expuesto</td></tr>
<tr><td>IP67</td><td>Inmersión temporal hasta 1 m</td><td>Volumen 0 del baño, focos de suelo</td></tr>
<tr><td>IP68</td><td>Inmersión continua (según fabricante)</td><td>Estanques, piscinas</td></tr></tbody></table>
<h2>Volúmenes del baño (ITC-BT-27)</h2>
<ul><li><strong>Volumen 0</strong> (interior de la bañera o plato de ducha): IPX7; solo aparatos previstos para instalarse en el volumen 0.</li>
<li><strong>Volumen 1</strong> (sobre la bañera o ducha hasta 2,25 m): IPX4 (IPX2 por encima del difusor fijo más alto; IPX5 en baños comunes limpiados con chorros). Aparatos a MBTS de 12 V CA o 30 V CC como máximo.</li>
<li><strong>Volumen 2</strong> (0,6 m alrededor del volumen 1): IPX4 (mismas excepciones). Luminarias permitidas si su circuito tiene un diferencial de 30 mA como máximo.</li>
<li><strong>Volumen 3</strong> (2,4 m más allá del volumen 2): sin grado IP específico salvo IPX5 en baños comunes con chorros de limpieza.</li></ul>
<p>Fuente: REBT, ITC-BT-27, apartado 2.1 y tabla 1.</p>
<p>En una vivienda, todos los circuitos ya cuentan con un interruptor diferencial de 30 mA (ITC-BT-25). Las modificaciones de la instalación deben realizarlas empresas instaladoras habilitadas, que emiten el certificado de instalación (antiguo «boletín»). Cambiar una bombilla no requiere nada de esto.</p>`},
{
path: 'guias/bombillas-led-regulables', article: true, kicker: 'Guía técnica', title: 'Bombillas LED regulables: corte de fase, parpadeo y zumbido',
description: 'Por qué los LED parpadean o zumban con un regulador: corte al inicio o al final de fase, carga mínima, listas de compatibilidad y soluciones.',
h1: 'LED regulables y reguladores', lead: 'Un LED no regulable en un regulador puede parpadear, zumbar o estropearse pronto. Un LED regulable en un regulador antiguo, también: ambos deben ser compatibles.',
body: `<h2>Tres comprobaciones</h2>
<ol><li><strong>La bombilla es «regulable»</strong> según el envase y la ficha técnica.</li>
<li><strong>El regulador admite LED.</strong> Los reguladores antiguos para incandescencia suelen cortar al inicio de fase (TRIAC) con una carga mínima de 20–60 W; tres LED de 5 W (15 W) quedan por debajo y parpadean. Los reguladores LED suelen cortar al final de fase y admiten cargas pequeñas.</li>
<li><strong>Carga dentro de límites.</strong> Use el valor LED indicado en el regulador, no el de incandescencia.</li></ol>
<p>Los fabricantes de reguladores publican listas de compatibilidad por modelo de bombilla. Sustituir un interruptor por un regulador es trabajo en la instalación: según el REBT, corte el circuito en el cuadro y compruebe la ausencia de tensión, o recurra a un instalador habilitado.</p>
<table><thead><tr><th>Síntoma</th><th>Causa</th><th>Solución</th></tr></thead><tbody>
<tr><td>Parpadeo en nivel bajo</td><td>Carga mínima no alcanzada</td><td>Regulador LED (corte al final de fase), ajustar el mínimo</td></tr>
<tr><td>Zumbido</td><td>Corte al inicio de fase con driver LED</td><td>Regulador de corte al final de fase</td></tr>
<tr><td>Brillo residual apagado</td><td>Corriente de fuga por el regulador o interruptor inteligente</td><td>Regulador con neutro o compensador de carga</td></tr>
<tr><td>No regula por debajo del 50 %</td><td>Combinación incompatible</td><td>Consultar la lista de compatibilidad</td></tr></tbody></table>`},
{
path: 'tutoriales/calcular-lux-lumenes-por-estancia', article: true, kicker: 'Tutorial', title: '¿Cuánta luz necesita una estancia? Calcular lux y lúmenes (UNE-EN 12464-1)',
description: 'Niveles de iluminancia recomendados en lux por estancia, basados en la UNE-EN 12464-1, y la fórmula para pasar de lux a lúmenes, con ejemplos para cocina y salón.',
h1: 'Calcular lux y lúmenes por estancia', lead: 'Lux (lx) = lúmenes por metro cuadrado: la luz que llega a una superficie.',
body: `<p>No existe norma obligatoria para viviendas. Los valores de superficies de trabajo proceden de la UNE-EN 12464-1 (iluminación de lugares de trabajo en interiores, p. ej. 500 lx para leer y escribir); los valores domésticos son valores de diseño habituales.</p>
<table><thead><tr><th>Estancia</th><th>Lux</th></tr></thead><tbody>
<tr><td>Pasillo, escalera</td><td>100–150</td></tr><tr><td>Salón (general)</td><td>100–200</td></tr><tr><td>Dormitorio (general)</td><td>100–150</td></tr><tr><td>Cocina (general)</td><td>200–300</td></tr><tr><td>Encimera, lectura, escritorio</td><td>500</td></tr><tr><td>Espejo del baño</td><td>300–500</td></tr><tr><td>Banco de trabajo</td><td>500–750</td></tr></tbody></table>
<h2>La fórmula</h2>
<p>Lúmenes necesarios = lux objetivo × superficie (m²) ÷ rendimiento.</p>
<p>El rendimiento (0,5–0,6 en una vivienda normal con paredes claras) tiene en cuenta la luz que absorben paredes, techo y pantallas. Con paredes oscuras, use 0,5.</p>
<h2>Ejemplo: cocina</h2>
<p>3 × 4 m = 12 m², objetivo 300 lx: 300 × 12 ÷ 0,55 = <strong>6.545 lm</strong>. Con focos GU10 LED de 350 lm: 6.545 ÷ 350 ≈ <strong>19 focos</strong>, o menos focos más tiras LED bajo los muebles altos para 500 lx en la encimera.</p>
<h2>Ejemplo: salón</h2>
<p>4 × 5 m = 20 m², objetivo 150 lx: 150 × 20 ÷ 0,55 = <strong>5.455 lm</strong>, unas 7 bombillas de 806 lm (equivalente a 60 W) repartidas entre techo y lámparas de pie.</p>
<h2>Comprobarlo</h2>
<p>Una app de luxómetro en el móvil da un valor orientativo (±10–20 % según el teléfono). Mida a la altura de la mesa o encimera, con la luz encendida y las cortinas corridas.</p>`},
{
path: 'tutoriales/sustituir-halogenos-gu10-mr16-por-led', article: true, kicker: 'Tutorial', title: 'Sustituir focos halógenos GU10 y MR16 (GU5.3) por LED',
description: 'Paso a paso: distinguir GU10 (230 V) de GU5.3/MR16 (12 V), elegir lúmenes y ángulo de apertura, resolver problemas de transformador y regulador.',
h1: 'Sustituir halógenos por LED', lead: 'Para declararse equivalente a un halógeno MR16 de 50 W, un LED debe dar al menos 540 lm en un cono de 90°; para un GU10 (PAR16, 230 V) de 50 W, 300 lm (Reglamento (UE) 1194/2012). Compare lúmenes, no vatios.',
body: `<h2>1. Identificar el foco</h2>
<ul><li><strong>GU10:</strong> dos pines cortos con tope, se gira. 230 V, sin transformador.</li><li><strong>MR16 (GU5.3):</strong> dos pines finos y rectos, se inserta. 12 V mediante transformador en el falso techo.</li></ul>
<h2>2. Elegir el flujo</h2>
<table><thead><tr><th>Halógeno sustituido</th><th>Flujo mínimo Φ90°</th></tr></thead><tbody><tr><td>GU10 (PAR16, 230 V), 35 W</td><td>200 lm</td></tr><tr><td>GU10 (PAR16, 230 V), 50 W</td><td>300 lm</td></tr><tr><td>MR16 (GU5.3, 12 V), 35 W</td><td>300 lm</td></tr><tr><td>MR16 (GU5.3, 12 V), 50 W</td><td>540 lm</td></tr></tbody></table>
<p>Fuente: Reglamento (UE) 1194/2012, anexo III, tabla 6 (hoy tabla 4 del Reglamento Delegado (UE) 2019/2015); en LED se multiplica además por el factor de mantenimiento del flujo y, por debajo de 20° de apertura, por 0,8–0,9. Mantenga el ángulo de apertura (normalmente 36–40°) y elija 2700–3000 K para una luz cálida como la halógena.</p>
<h2>3. MR16: la trampa del transformador</h2>
<p>Los transformadores electrónicos antiguos suelen necesitar 20–35 W de carga mínima. Un solo LED de 4 W queda por debajo: parpadeo o nada. Solución: un driver LED para la potencia total, o pasar a portalámparas GU10 a 230 V (trabajo en la instalación: REBT, instalador habilitado).</p>
<h2>4. Regulador</h2><p>Véase <a href="/es/guias/bombillas-led-regulables/">LED regulables</a>: bombillas regulables y regulador de corte al final de fase.</p>
<h2>5. Seguridad</h2><p>Corte el circuito en el cuadro y deje enfriar los halógenos: superan con creces los 100 °C. En empotrables en techos aislados, compruebe que la luminaria admite contacto con material aislante.</p>`},
{
path: 'afiliacion', kicker: 'Transparencia', title: 'Afiliación y publicidad | 1 pièce 1 ampoule', description: 'Cómo se financia 1piece1ampoule.fr y cómo se señalan los enlaces de afiliación.',
h1: 'Afiliación', lead: 'Algunos enlaces de las páginas en español son enlaces de afiliado: así funcionan.',
body: `<p>1piece1ampoule.fr es un sitio independiente. Para financiarlo, algunas páginas incluyen enlaces de afiliado:</p><ul><li><strong>Amazon.es</strong>: como Afiliado de Amazon, obtenemos ingresos por las compras adscritas que cumplen los requisitos aplicables. Los botones «Ver en Amazon.es» llevan a productos comprobados en la tienda española.</li><li><strong>Awin</strong>: enlaces a la tienda Lampara.es.</li></ul><p>Si compras tras hacer clic, el vendedor nos paga una pequeña comisión; el precio para ti no cambia. Estos enlaces se indican bajo cada recuadro y llevan el atributo <code>rel="sponsored nofollow"</code>. Las comisiones no influyen en nuestras valoraciones: elegimos según datos publicados (lúmenes, Ra, tensión, clase energética). Precios y disponibilidad pueden cambiar: vale lo que indique la página del vendedor.</p>`},
{
path: 'aviso-legal', kicker: 'Legal', title: 'Aviso legal | 1 pièce 1 ampoule', description: 'Editor, alojamiento y responsabilidad de 1piece1ampoule.fr (edición en español).',
h1: 'Aviso legal', lead: 'Información del titular del sitio web.',
body: `<h2>Titular</h2><p>Emmanuel Sauvage (particular, editor), 59193 Erquinghem-Lys, Francia.<br>Correo: <a href="mailto:contact@1piece1ampoule.fr">contact@1piece1ampoule.fr</a><br>Web: <a href="https://emmanuelsauvage.fr/">emmanuelsauvage.fr</a></p>
<p>El titular está establecido en Francia; se aplica el derecho francés (LCEN, art. 6).</p>
<h2>Alojamiento</h2><p>o2switch, Clermont-Ferrand, Francia.</p>
<h2>Responsabilidad</h2><p>Revisamos el contenido con cuidado, pero las normas y los productos cambian. Los trabajos en la instalación eléctrica corresponden a un instalador habilitado.</p>`},
{
path: 'privacidad', kicker: 'Legal', title: 'Política de privacidad | 1 pièce 1 ampoule', description: 'Qué datos personales trata 1piece1ampoule.fr (Google Analytics solo con consentimiento), base jurídica y sus derechos según el RGPD.',
h1: 'Política de privacidad', lead: 'Recogemos lo mínimo: estadísticas de audiencia solo con su consentimiento.',
body: `<h2>Responsable</h2><p>Emmanuel Sauvage, 59193 Erquinghem-Lys, Francia – <a href="mailto:contact@1piece1ampoule.fr">contact@1piece1ampoule.fr</a>.</p>
<h2>Datos tratados</h2><ul><li><strong>Estadísticas de audiencia (Google Analytics 4)</strong>, solo tras «Aceptar todo» o marcar «Estadísticas». Google Consent Mode está en «denied» por defecto. Datos: páginas vistas, ubicación aproximada, tipo de dispositivo, clics en enlaces de socios.</li><li><strong>Su elección sobre cookies</strong>, en su navegador (clave localStorage <code>cookie_consent_v1</code>).</li><li><strong>Correos</strong> que nos envíe, solo el tiempo necesario para responder.</li></ul>
<h2>Base jurídica</h2><p>Consentimiento (art. 6.1.a RGPD) para las estadísticas; interés legítimo (art. 6.1.f) para responder mensajes.</p>
<h2>Conservación</h2><p>Datos de Google Analytics: 14 meses. Su elección de cookies permanece en el navegador hasta que la borre o la cambie.</p>
<h2>Destinatarios</h2><p>Google Ireland Ltd. (Analytics).</p>
<h2>Sus derechos</h2><p>Acceso, rectificación, supresión, limitación, oposición y retirada del consentimiento en cualquier momento (<a href="/es/cookies/">configuración de cookies</a>). Puede reclamar ante la CNIL (Francia) o la Agencia Española de Protección de Datos (AEPD).</p>`},
{
path: 'cookies', kicker: 'Legal', title: 'Política de cookies | 1 pièce 1 ampoule', description: 'Qué cookies usa 1piece1ampoule.fr y cómo cambiar su elección.',
h1: 'Política de cookies', lead: 'Antes de su elección solo se usa el almacenamiento estrictamente necesario.',
body: `<table><thead><tr><th>Nombre</th><th>Finalidad</th><th>Duración</th><th>Consentimiento</th></tr></thead><tbody>
<tr><td>cookie_consent_v1 (localStorage)</td><td>Recuerda su elección</td><td>hasta que la borre</td><td>no necesario</td></tr>
<tr><td>_ga, _ga_*</td><td>Estadísticas de audiencia Google Analytics 4</td><td>hasta 13 meses</td><td>necesario</td></tr></tbody></table>
<p>«Aceptar todo» y «Rechazar todo» se muestran al mismo nivel. Rechazar no limita el uso del sitio.</p>
<p><button type="button" class="en-amz" onclick="window.__showCookiePreferences && window.__showCookiePreferences()">Cambiar la configuración de cookies</button></p>`},
];
ES_PAGES.splice(ES_PAGES.findIndex((p) => p.path === 'tutoriales/sustituir-halogenos-gu10-mr16-por-led') + 1, 0, ...TUTOS_TR.es);

ES_PAGES.splice(ES_PAGES.findIndex((p) => p.path === 'guias/bombillas-led-regulables') + 1, 0, ...HIVER_TR.es);

ES_PAGES.push(...TR_PRIORITY_ES);
ES_PAGES.push(...TR_PRIORITY_LOT2_ES);
ES_PAGES.push(...TR_LOT3_ES);
ES_PAGES.push(...TR_LOT6_ES);
ES_PAGES.push(...INTENT_ES);
