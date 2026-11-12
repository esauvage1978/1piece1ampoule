// Páginas prioritarias ES lot 2 (oct. 2026). Traducidas desde FR/EN, comprobadas 30/10/2026.
import type { EnPage } from './en';

const amz = (asin: string, label: string) =>
  `<a class="en-amz" href="https://www.amazon.es/dp/${asin}?tag=roboteducat07-21" rel="nofollow sponsored noopener" target="_blank" data-asin="${asin}" data-product="${label}">Ver precio en Amazon.es</a>`;
const note = `<p class="en-note">Datos de fabricante/Amazon comprobados el 30/10/2026. Los precios cambian — verifique antes de comprar. Como afiliado de Amazon obtenemos ingresos por compras cualificadas.</p>`;

const err = (p: Omit<EnPage, 'article'> & { kicker?: string }): EnPage => ({
  ...p,
  article: true,
  kicker: p.kicker ?? 'Guía de código de error',
});

export const TR_PRIORITY_LOT2_ES: EnPage[] = [
  err({
    path: 'guias/codigo-error/hue-bridge-led-naranja',
    title: 'Hue Bridge: LED naranja (sin internet)',
    description: 'LED naranja: bombillas locales ok, nube y asistentes fallan. DHCP, DNS, cable.',
    h1: 'Hue Bridge: LED naranja sin internet',
    lead: 'La LED del Bridge permanece naranja; el control local a veces funciona, pero las automatizaciones en la nube no.',
    body: `<p><strong>Síntoma:</strong> LED naranja; control local a veces correcto; nube, Alexa y Google fallan.</p>
<p><strong>Causas probables:</strong> sin <strong>DHCP</strong> (protocolo de configuración dinámica de host) en la red local, <strong>DNS</strong> (sistema de nombres de dominio) bloqueado, filtro parental sobre servidores Signify, cable Ethernet defectuoso.</p>
<h2>Pasos</h2><ol>
<li>Compruebe Internet en el mismo puerto LAN con otro dispositivo.</li>
<li>Reinicie el router con el Bridge conectado.</li>
<li>Autorice la MAC del Bridge en el router (etiqueta en el aparato).</li>
<li>Pruebe DNS públicos (1.1.1.1 / 8.8.8.8) si el DNS está filtrado.</li>
<li>Sigue naranja con cable nuevo: soporte Philips Hue.</li>
</ol>
<p><strong>Herramientas:</strong> cable Ethernet de repuesto.</p>
<p><strong>Seguridad:</strong> no abra el Bridge — 230 V en el interior.</p>
<p>Dificultad 2/5 · 20–40 min · €0–22. Soporte: <a href="https://www.philips-hue.com/en-gb/support" rel="nofollow noopener" target="_blank">philips-hue.com</a>.</p>`,
  }),
  err({
    path: 'guias/codigo-error/hue-bridge-limite-50-dispositivos',
    title: 'Hue Bridge: no se pueden añadir bombillas (límite Zigbee)',
    description: 'Emparejamiento falla cerca de ~50 luces: borrar fantasmas, emparejar cerca del Bridge, planificar canales, segundo Bridge.',
    h1: 'Hue Bridge: límite de dispositivos Zigbee',
    lead: 'La app rechaza emparejar una bombilla parpadeando, a menudo tras ~50 luces o demasiados repetidores Zigbee.',
    body: `<p><strong>Síntoma:</strong> fallo de emparejamiento mientras la bombilla parpadea.</p>
<p><strong>Causas probables:</strong> malla <strong>Zigbee</strong> (red en malla de bajo consumo) saturada; bombillas repetidoras mal colocadas; entradas fantasma en la app.</p>
<h2>Pasos</h2><ol>
<li>Elimine luces no usadas en ajustes de la app.</li>
<li>Empareje a menos de 3 m del Bridge, luego reubique la bombilla.</li>
<li>Planifique canales Zigbee si usa varios Bridges.</li>
<li>Resetee la bombilla y reintente (secuencia según modelo).</li>
<li>Instalación grande: segundo Hue Bridge en red separada.</li>
</ol>
<p>Dificultad 3/5 · 30–60 min · €0–55.</p>`,
  }),
  err({
    path: 'guias/codigo-error/ikea-dirigera-tradfri-migracion',
    title: 'DIRIGERA: luces TRÅDFRI ausentes tras la migración',
    description: 'Migración IKEA DIRIGERA: mantener TRÅDFRI encendido, volver a buscar dispositivos, resetear huérfanos.',
    h1: 'DIRIGERA: migración TRÅDFRI',
    lead: 'Tras pasar a DIRIGERA, algunas bombillas o sensores TRÅDFRI ya no aparecen.',
    body: `<p><strong>Síntoma:</strong> dispositivos TRÅDFRI ausentes después de la migración.</p>
<p><strong>Causas probables:</strong> migración interrumpida; dos hubs activos; fuera de alcance durante la transferencia.</p>
<h2>Pasos</h2><ol>
<li>Ejecute el asistente de migración IKEA (TRÅDFRI alimentado).</li>
<li>Apague la gateway antigua al terminar.</li>
<li>Acérquese los dispositivos faltantes; busque de nuevo.</li>
<li>Resetee y empareje los huérfanos.</li>
<li>Soporte IKEA si la migración falla dos veces.</li>
</ol>
<p>Dificultad 2/5 · 30–60 min · €0.</p>`,
  }),
  err({
    path: 'guias/codigo-error/ikea-tradfri-gateway-offline',
    title: 'Gateway IKEA TRÅDFRI sin conexión',
    description: 'Gateway TRÅDFRI offline: Ethernet, alimentación USB, mDNS, reañadir con QR.',
    h1: 'Gateway TRÅDFRI sin conexión',
    lead: 'La app IKEA muestra la gateway desconectada; los interruptores de pared pueden seguir funcionando en local.',
    body: `<p><strong>Síntoma:</strong> gateway offline en la app.</p>
<p><strong>Causas probables:</strong> Ethernet desenchufado; alimentación USB débil; <strong>mDNS</strong> (descubrimiento en red local) bloqueado en el router.</p>
<h2>Pasos</h2><ol>
<li>Compruebe la LED de alimentación.</li>
<li>Vuelva a conectar el Ethernet al router principal.</li>
<li>Reinicie router y gateway.</li>
<li>Reañada con código QR.</li>
<li>Reset de fábrica y soporte IKEA si hace falta.</li>
</ol>
<p>Dificultad 2/5 · 10–25 min · €0.</p>`,
  }),
  err({
    path: 'guias/codigo-error/nanoleaf-diseno-invalido',
    title: 'Nanoleaf: diseño no válido o panel ausente',
    description: 'Diseño Nanoleaf rechazado: reconectar enlaces, localizar panel gris, firmware, límite de paneles.',
    h1: 'Nanoleaf: diseño no válido',
    lead: 'La app no valida la forma o un panel permanece gris.',
    body: `<p><strong>Síntoma:</strong> diseño no válido o panel gris.</p>
<p><strong>Causas probables:</strong> enlace suelto; panel muerto; límite de paneles superado; firmware antiguo.</p>
<h2>Pasos</h2><ol>
<li>Reencaje cada conector hasta oír el clic.</li>
<li>Retire paneles uno a uno para localizar el fallo.</li>
<li>Actualice el firmware del controlador.</li>
<li>Respete el máximo de paneles por kit.</li>
<li>Garantía para panel muerto.</li>
</ol>
<p>Dificultad 2/5 · 15–35 min · €0. <a href="https://help.nanoleaf.me/" rel="nofollow noopener" target="_blank">Ayuda Nanoleaf</a>.</p>`,
  }),
  err({
    path: 'guias/codigo-error/schneider-wiser-matter-thread',
    title: 'Schneider Wiser Matter: emparejamiento fallido (Thread)',
    description: 'QR Matter Wiser falla: firmware, router frontera Thread, aislamiento VLAN.',
    h1: 'Wiser Matter: fallo en Apple Home',
    lead: 'El QR Matter del regulador Wiser falla o se queda colgado en Apple Home.',
    body: `<p><strong>Síntoma:</strong> fallo de emparejamiento Matter.</p>
<p><strong>Causas probables:</strong> firmware antiguo; sin router frontera <strong>Thread</strong> (radio usada con Matter); dispositivo ya emparejado.</p>
<h2>Pasos</h2><ol>
<li>Actualice vía Wiser by SE.</li>
<li>Asegure un router frontera Thread en la LAN.</li>
<li>Resetee Matter en el dispositivo.</li>
<li>Desactive el aislamiento VLAN.</li>
<li>Consulte la lista Matter de Schneider.</li>
</ol>
<p>Dificultad 3/5 · 25–45 min · €0.</p>`,
  }),
  err({
    path: 'guias/codigo-error/shelly-dimmer-2-wifi-offline',
    title: 'Shelly Dimmer 2 Wi-Fi sin conexión',
    description: 'Shelly Dimmer 2 offline: Wi-Fi 2,4 GHz, modo AP, reserva DHCP.',
    h1: 'Shelly Dimmer 2 Wi-Fi sin conexión',
    lead: 'Módulo no responde en la app; el regulador físico puede seguir funcionando.',
    body: `<p><strong>Síntoma:</strong> nube offline.</p>
<p><strong>Causas probables:</strong> cambio de contraseña Wi-Fi; solo 5 GHz; cambio de IP DHCP.</p>
<h2>Pasos</h2><ol>
<li>Active <strong>Wi-Fi 2,4 GHz</strong>.</li>
<li>IP local o modo AP Shelly.</li>
<li>Reconfigure el Wi-Fi.</li>
<li>Reserva DHCP en el router.</li>
<li>Copia de seguridad MQTT/Home Assistant local.</li>
</ol>
<p>Dificultad 2/5 · 15–30 min · €0.</p>`,
  }),
  err({
    path: 'guias/codigo-error/regulador-led-brillo-residual',
    title: 'Regulador LED: brillo residual apagado',
    description: 'Brillo LED con regulador OFF: derivación, regulador LED, comprobar neutro.',
    h1: 'Brillo residual con regulador LED',
    lead: 'Los LED brillan débilmente con el regulador en OFF.',
    body: `<p><strong>Síntoma:</strong> resplandor fantasma en OFF.</p>
<p><strong>Causas probables:</strong> fuga del regulador; neutro compartido; LED sensibles.</p>
<h2>Pasos</h2><ol>
<li>Instale derivación del fabricante (~€4).</li>
<li>Sustituya por regulador apto para LED.</li>
<li>No mezcle halógeno y LED en el mismo circuito.</li>
<li>Compruebe el neutro en la roseta.</li>
<li>Electricista si persiste.</li>
</ol>
<p><strong>Seguridad:</strong> solo condensador bipolar apto para LED; no trabaje bajo tensión.</p>
<p>Dificultad 2/5 · 15–40 min · €4–22.</p>`,
  }),
  err({
    path: 'guias/codigo-error/regulador-led-parpadeo-bajo',
    title: 'Regulador LED: parpadeo a baja intensidad',
    description: 'Parpadeo 5–25 %: subir mínimo, corte por trailing edge, bombillas compatibles.',
    h1: 'Parpadeo del regulador LED al mínimo',
    lead: 'Parpadeo visible entre el 5 % y el 25 %.',
    body: `<p><strong>Síntoma:</strong> parpadeo en el rango bajo.</p>
<p><strong>Causas probables:</strong> desajuste de corte de fase; drivers baratos; mínimo demasiado bajo.</p>
<h2>Pasos</h2><ol>
<li>Suba el ajuste de mínimo.</li>
<li>Pruebe otra marca de LED regulable.</li>
<li>Trailing edge si está soportado.</li>
<li>No conecte tiras al regulador de pared sin driver.</li>
<li>Regulador y bombillas de la misma gama.</li>
</ol>
<p>Dificultad 2/5 · 15–35 min · €0–30.</p>`,
  }),
  err({
    path: 'guias/codigo-error/bombilla-wiz-parpadeo-regulador',
    title: 'Bombilla WiZ: parpadeo con regulador de pared',
    description: 'WiZ + regulador: interruptor al 100 %, regulador LED o atenuación solo en app.',
    h1: 'Parpadeo WiZ con regulador de pared',
    lead: 'Parpadeo o corte cuando un regulador de pared controla WiZ.',
    body: `<p><strong>Síntoma:</strong> parpadeo con regulador externo.</p>
<p><strong>Causas probables:</strong> regulador incompatible; doble regulación + app.</p>
<h2>Pasos</h2><ol>
<li>Regulador de pared al 100 %; atenúe en la app WiZ.</li>
<li>Regulador LED certificado.</li>
<li>Interruptor simple + app.</li>
<li>Compruebe «regulable» en la caja.</li>
<li>Condensador de compensación si hay brillo residual.</li>
</ol>
<p><strong>Seguridad:</strong> aísle el circuito antes de cambiar el regulador.</p>
<p>Dificultad 2/5 · 15–35 min · €18–40.</p>`,
  }),
  {
    path: 'guias/iluminacion-exterior-automatica-steinel',
    article: true,
    kicker: 'Guía de compra',
    title: 'Iluminación exterior automática Steinel: 4 productos comparados',
    description: 'Steinel L 12 M, NightMatic 2000, IS 360-1, XSolar LH-N: IP, cargas y umbrales según fichas.',
    h1: 'Automatizar la entrada con Steinel',
    lead: 'Cuatro referencias Steinel de 2echoix comparadas con datos de fabricante (23/10/2026). Solo XSolar LH-N es luminaria autónoma; L 12 M no lleva detector.',
    body: `<h2>Nuestra elección</h2>
<p>Para una farola existente: <strong>L 12 M + LED E27 ~800 lm a 2700–3000 K + NightMatic 2000</strong> (unos €80,58 sin bombilla). Solo movimiento: <strong>IS 360-1</strong> bajo porche.</p>
<p><a href="https://www.awin1.com/pclick.php?p=46381369701&a=3127458&m=31151" rel="sponsored nofollow noopener" target="_blank">L 12 M en 2echoix (€57,19, 22/10/2026)</a></p>
<h2>Tabla de fichas técnicas</h2>
<table><thead><tr><th>Producto</th><th>Función</th><th>Flujo</th><th>IP</th><th>K</th><th>Carga</th><th>Detección</th><th>2echoix</th></tr></thead><tbody>
<tr><td>L 12 M 069155</td><td>Aplique, sin sensor</td><td>Según bombilla E27</td><td>IP44 IK03</td><td>Bombilla</td><td>Máx. 60 W</td><td>–</td><td><a href="https://www.awin1.com/pclick.php?p=46381369701&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€57,19</a></td></tr>
<tr><td>NightMatic 2000 550417</td><td>Interruptor crepuscular</td><td>Ninguno</td><td>IP54</td><td>–</td><td>1000 W; 4 LED máx.; 0,8 W</td><td>2–30 lx</td><td><a href="https://www.awin1.com/pclick.php?p=46359010299&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€23,39</a></td></tr>
<tr><td>IS 360-1 DE 032845</td><td>PIR de techo</td><td>Ninguno</td><td>IP54</td><td>–</td><td>350 W LED si &gt;8 W/bombilla</td><td>360° Ø8/4 m</td><td><a href="https://www.awin1.com/pclick.php?p=46381369825&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€41,99</a></td></tr>
<tr><td>XSolar LH-N 035730</td><td>Número solar</td><td>4 LED señalizadores</td><td>IP44</td><td>4000 K IRC 80–89</td><td>LiFePO4</td><td>Crepúsculo 2 lx</td><td><a href="https://www.awin1.com/pclick.php?p=45843200190&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€70,59</a></td></tr>
</tbody></table>
<p class="en-note">Fichas Steinel 23/10/2026; precios 2echoix 22/10/2026. Afiliado Awin. Solo XSolar LH-N emite luz útil por sí solo.</p>
<h2>Combinaciones</h2>
<ul>
<li><strong>De noche a mañana:</strong> L 12 M + NightMatic — proteja el sensor del resplandor de la lámpara.</li>
<li><strong>Solo paso:</strong> IS 360-1 a 2,5–4 m bajo cubierta.</li>
<li><strong>Número sin cableado:</strong> XSolar LH-N (señalizador, no iluminación de camino).</li>
</ul>
<h2>Notas REBT / zonas húmedas</h2>
<ul>
<li>Lluvia exterior: mínimo <strong>IP44</strong> — véase la <a href="/es/guias/grado-ip-bano-exterior/">guía IP</a>.</li>
<li>NightMatic / IS 360-1: fase + neutro; protección 10 A según manual NightMatic.</li>
<li>Respete los límites de carga LED de las fichas.</li>
</ul>
<p><a href="/es/marcas/steinel/">Página de marca Steinel</a>.</p>`,
  },
  {
    path: 'guias/luces-navidad-interior-exterior',
    article: true,
    kicker: 'Guía de temporada',
    title: 'Luces de Navidad interior y exterior: IP, transformador, seguridad, consumo',
    description: 'Guirnaldas: IP44 fuera, baja tensión, EN 60598-2-20, diferencial, consumo y temporizadores.',
    h1: 'Luces de Navidad en interior y exterior',
    lead: 'Las guirnaldas exigen el IP, transformador y tiempo de encendido adecuados — como cualquier luminaria.',
    body: `<h2>Resumen</h2><table><thead><tr><th>Uso</th><th>Requisito</th></tr></thead><tbody><tr><td>Árbol interior</td><td>LED, CE, EN 60598-2-20</td></tr><tr><td>Exterior</td><td>IP44+ (IP65 expuesto), transformador de baja tensión</td></tr><tr><td>Enchufe</td><td>Circuito exterior con diferencial</td></tr></tbody></table><h2>Interior</h2><ul><li>Solo LED cerca de agujas secas.</li><li>Cálido 2200–2700 K — <a href="/es/guias/temperatura-color-kelvin/">Kelvin</a>.</li><li>Respete el máximo de series del manual.</li></ul><h2>Exterior</h2><ul><li>IP44 bajo cubierta; IP65 bajo lluvia.</li><li>Transformador 24 V; prolongador exterior sin enrollar.</li></ul><h2>Consumo</h2><p>kWh = W × horas ÷ 1000. Ejemplo: 6 W × 6 h × 40 d = 1,44 kWh.</p><h2>Ejemplos</h2><div class="en-card"><p class="en-flag">Exterior IP65</p><h3>Guirnalda ZOTOYI 15 m S14</h3><p>S14 irrompible, IP65 según ficha para fachadas expuestas.</p>${amz('B0972HH7C6', 'Guirnalda ZOTOYI 15 m S14')}</div><div class="en-card"><p class="en-flag">Balcón IP44 24 V</p><h3>Guirnalda G40 10 m con temporizador</h3><p>24 V, IP44, temporizador regulable según ficha.</p>${amz('B0CZ9B4C2B', 'Guirnalda G40 10 m con temporizador')}</div>${note}<p>Tutorial FR: <a href="https://1piece1ampoule.fr/tutoriels/programmer-guirlande-lumineuse-exterieure/">programar al anochecer</a>.</p>`,
  },
  {
    path: 'guias/luminoterapia-luz-manana-invierno',
    article: true,
    kicker: 'Bienestar invernal',
    title: 'Luz matinal y luminoterapia: 10 000 lux, distancia, despertadores',
    description: 'Lámpara de terapia vs simulador de amanecer vs bombillas inteligentes; lux a distancia; rutina invernal.',
    h1: 'Luminoterapia y luz matinal en invierno',
    lead: 'Tres herramientas distintas — y los lux solo son válidos a la distancia indicada en la ficha.',
    body: `<h2>Tres herramientas</h2><table><thead><tr><th>Herramienta</th><th>Función</th><th>Nivel</th></tr></thead><tbody><tr><td>Lámpara de terapia</td><td>Sesión de frente</td><td>10 000 lux a la distancia indicada</td></tr><tr><td>Simulador de amanecer</td><td>Despertar gradual</td><td>~300 lux máx. (HF3520, Philips)</td></tr><tr><td>Bombillas inteligentes</td><td>Rampa programada</td><td>Depende de lm y distancia</td></tr></tbody></table><h2>Distancia</h2><p>Los lux caen con el cuadrado de la distancia. 10 000 lux a 10 cm ≠ 10 000 lux a un brazo.</p><h2>Uso de la lámpara de terapia</h2><ul><li>A menudo ~30 min a ~10 000 lux por la mañana — siga el manual.</li><li>Mire de reojo; dispositivo médico CE, sin UV.</li><li>Consulte al médico si enfermedad ocular o trastorno bipolar.</li></ul><h2>Selección</h2><div class="en-card"><p class="en-flag">Luminoterapia</p><h3>Beurer TL 30</h3><p>10 000 lux a ~10 cm, 6500 K, IRC 80, garantía 3 años.</p>${amz('B00MOIWOAK', 'Beurer TL 30')}</div><div class="en-card"><p class="en-flag">Despertar Hue</p><h3>Hue White Ambiance E27 1100 lm</h3><p>EPREL 2187086: 1100 lm, 8,1 W, clase D; Bluetooth.</p>${amz('B0FJ8VXHRX', 'Hue White Ambiance E27 1100 lm')}</div>${note}`,
  },
  {
    path: 'marcas/tapo',
    article: true,
    kicker: 'Guía de marca',
    title: 'Tapo (TP-Link): opinión, bombilla L530E Wi-Fi, garantía 2 años',
    description: 'Tapo L530E: 806 lm, 8,7 W, clase F, Wi-Fi 2,4 GHz, pros, contras y datos de soporte.',
    h1: 'Tapo (TP-Link): nuestra opinión de la marca',
    lead: 'Tapo es la línea domótica de TP-Link. La L530E Wi-Fi a color es la alternativa sin hub a Philips Hue para una primera estancia.',
    body: `<h2>Datos oficiales L530E (TP-Link Francia, 23/10/2026)</h2>
<table><tbody>
<tr><th>Flujo / potencia</th><td>806 lm, 8,7 W (~93 lm/W), equivalente 60 W</td></tr>
<tr><th>Clase energética</th><td>F (EPREL)</td></tr>
<tr><th>Color / IRC</th><td>2500–6500 K blanco + color; <strong>IRC</strong> (índice de reproducción cromática) ≥ 80</td></tr>
<tr><th>Radio</th><td>Solo Wi-Fi 2,4 GHz — sin hub Zigbee</td></tr>
<tr><th>Regulación</th><td>1–100 % en app</td></tr>
<tr><th>Vida útil</th><td>15 000 h</td></tr>
</tbody></table>
<h2>Ventajas</h2><ul><li>Sin hub; Alexa/Google.</li><li>Modo vacaciones, horarios, sincronización solar.</li><li>Recuerda el último estado tras un corte.</li><li>Precio de entrada bajo.</li></ul>
<h2>Límites</h2><ul><li>Clase F frente a Hue White Ambiance clase D.</li><li>Cada bombilla ocupa un slot Wi-Fi en el router.</li><li>806 lm justos para un salón grande.</li><li>El interruptor de pared debe permanecer ON.</li></ul>
<h2>Garantía (condiciones Francia — compruebe vendedor ES)</h2>
<p>TP-Link Tapo <strong>2 años</strong> de garantía comercial; soporte Francia 01 82 88 35 35. En España aplican sus derechos frente al vendedor.</p>
<h2>Nuestra opinión</h2>
<p>Mejor entrada a la iluminación conectada para 1–3 bombillas. Más allá, sistemas <strong>Zigbee</strong> (protocolo de malla de bajo consumo) como Philips Hue escalan mejor — véase <a href="/es/articulos/bombilla-inteligente-wifi-o-zigbee/">Wi-Fi vs Zigbee</a>.</p>
<p>${amz('B08GDC99PX', 'Tapo L530E E27')} ${amz('B08Z4KCJZY', 'Tapo L530E pack 2')}</p>
${note}
<p>Compare: <a href="/es/marcas/philips-hue/">Philips Hue</a>, <a href="/es/guias/regalar-bombillas-inteligentes/">guía de regalos</a>.</p>`,
  },
  {
    path: 'herramientas/convertidor-lux-lumen-vatio-superficie',
    article: true,
    kicker: 'Herramienta',
    title: 'Convertidor lux ↔ lúmenes ↔ vatios LED por superficie',
    description: 'Calculadora bidireccional: lux, lúmenes y vatios LED para m² de suelo con factor de reflexión K.',
    h1: 'Convertidor lux ↔ lúmenes ↔ vatios LED',
    lead: 'Relacione los lux objetivo en el suelo con lúmenes totales y vatios LED según tamaño de estancia y color de pared.',
    body: `<p>Relaciona <strong>lux</strong> (luz en una superficie), <strong>lúmenes</strong> (flujo total) y <strong>vatios LED</strong> para una superficie. El factor <strong>K</strong> tiene en cuenta la reflexión de paredes. Edite cualquier campo — los demás se recalculan.</p>
<p>Véase <a href="/es/guias/lumenes-vatios/">lúmenes vs vatios</a> y el <a href="/es/tutoriales/calcular-lux-lumenes-por-estancia/">tutorial lux por estancia</a>.</p>
<h2>Calculadora</h2>
<div class="mt-5 grid gap-4 sm:grid-cols-2" id="conv-lux-tool">
<label class="block text-sm font-semibold sm:col-span-2">Tipo de estancia
<select id="cv-room" class="mt-1 w-full rounded-xl border border-stone-300 bg-white p-2"><option value="salon" data-lux="125" data-m2="20">Salón (125 lx, 20 m²)</option><option value="cuisine" data-lux="200" data-m2="12">Cocina (200 lx, 12 m²)</option><option value="chambre" data-lux="100" data-m2="14">Dormitorio (100 lx, 14 m²)</option><option value="sdb" data-lux="175" data-m2="6">Baño (175 lx, 6 m²)</option><option value="bureau" data-lux="300" data-m2="10">Despacho (300 lx, 10 m²)</option><option value="garage" data-lux="300" data-m2="18">Garaje (300 lx, 18 m²)</option><option value="couloir" data-lux="100" data-m2="8">Pasillo (100 lx, 8 m²)</option></select></label>
<label class="block text-sm font-semibold sm:col-span-2">Color de paredes (reflexión K)
<select id="cv-walls" class="mt-1 w-full rounded-xl border border-stone-300 bg-white p-2"><option value="blanc" data-k="2">Paredes claras / blancas (K ≈ 2)</option><option value="beige" data-k="1.85">Beige o gris claro (K ≈ 1,85)</option><option value="couleur" data-k="1.55">Color medio (K ≈ 1,55)</option><option value="sombre" data-k="1.25">Paredes oscuras (K ≈ 1,25)</option></select></label>
<label class="block text-sm font-semibold">Lux objetivo<input id="cv-lux" type="number" min="20" max="3000" step="5" value="125" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
<label class="block text-sm font-semibold">Superficie (m²)<input id="cv-m2" type="number" min="0.5" max="120" step="0.1" value="20" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
<label class="block text-sm font-semibold">Lúmenes (flujo total)<input id="cv-lm" type="number" min="50" max="150000" step="50" value="5000" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
<label class="block text-sm font-semibold">Eficacia LED (lm/W)<input id="cv-lmw" type="number" min="60" max="150" step="5" value="100" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
<label class="block text-sm font-semibold sm:col-span-2">Potencia LED total (W)<input id="cv-w" type="number" min="1" max="5000" step="1" value="50" class="mt-1 w-full rounded-xl border border-stone-300 p-2"/></label>
</div>
<p class="mt-4 text-sm" id="cv-hint" aria-live="polite"></p>
<p class="text-xs text-stone-500">Fórmula: lúmenes ≈ lux × superficie × K. Supone reparto uniforme — un solo punto de luz deja rincones más oscuros.</p>
<script>
(function(){var lock=null;function el(id){return document.getElementById(id);}function num(v){return parseFloat(String(v).replace(',','.'))||0;}
function fmt(n){return Math.round(n).toLocaleString('es-ES');}
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
<ul class="mt-4"><li><a href="/es/herramientas/equivalencia-halogeno-led-gu10-e27-lumenes/">Equivalencia halógeno → LED</a></li>
<li><a href="/es/guias/lumenes-vatios/">Lúmenes vs vatios</a></li>
<li><a href="https://1piece1ampoule.fr/outils/convertisseur-lux-lumens-watts-surface/">Página interactiva (FR)</a></li></ul>`,
  },
  {
    path: 'tutoriales',
    article: true,
    kicker: 'Tutoriales',
    title: 'Tutoriales de iluminación: lux, tiras LED, interruptores inteligentes, GU10',
    description: 'Índice de tutoriales paso a paso con enlaces a páginas en español cuando existen.',
    h1: 'Tutoriales',
    lead: 'Guías prácticas de nuestro taller — versiones en español añadidas progresivamente.',
    body: `<h2>Todos los tutoriales paso a paso</h2><ul><li><a href="/es/tutoriales/calcular-lux-lumenes-por-estancia/">Calcular la iluminación de una estancia en lux y lúmenes</a></li><li><a href="/es/tutoriales/tira-led-bajo-muebles-cocina/">Instalar tira LED bajo muebles de cocina</a></li><li><a href="/es/tutoriales/iluminar-trastero-sin-electricidad/">Iluminar un trastero sin red eléctrica</a></li><li><a href="/es/tutoriales/sustituir-halogenos-gu10-mr16-por-led/">Sustituir halógenos GU10 o MR16 por LED</a></li><li><a href="/es/tutoriales/interruptor-inteligente-sin-neutro/">Interruptor inteligente o bombilla sin neutro</a></li><li><a href="https://1piece1ampoule.fr/tutoriels/appairer-module-zigbee-sans-neutre-sonoff-aqara/">Emparejar módulo Zigbee sin neutro (SONOFF, Aqara)</a></li><li><a href="https://1piece1ampoule.fr/tutoriels/eclairage-bureau-teletravail-lux-irc-kelvin/">Iluminación teletrabajo: lux, IRC, Kelvin</a></li><li><a href="https://1piece1ampoule.fr/tutoriels/programmer-guirlande-lumineuse-exterieure/">Programar guirnalda exterior al anochecer</a></li><li><a href="https://1piece1ampoule.fr/tutoriels/reparer-guirlande-led-partie-eteinte/">Reparar una guirnalda LED parcialmente apagada</a></li></ul><p>Cinco tutoriales están traducidos al español; el resto enlaza al sitio francés hasta su publicación.</p>`,
  },
  {
    path: 'zonas',
    article: true,
    kicker: 'Guías por zona',
    title: 'Iluminación por zona: encimera, espejo, entrada, escalera, armario',
    description: 'Cinco zonas del hogar con objetivos lux/lumen y productos; tabla y fichas.',
    h1: 'Zonas y distribución',
    lead: 'Necesidades cuantificadas por zona — y un producto contrastado para cada una.',
    body: `<p>Algunos puntos exigen luz precisa: rostro a la altura del espejo, encimera sin sombras, escalera automática.</p>
<table><thead><tr><th>Zona</th><th>Objetivo</th><th>Elección</th></tr></thead><tbody>
<tr><td><a href="/es/zonas/encimera-cocina/">Encimera cocina</a></td><td>500 lux, ≥420 lm/m, 4000 K</td><td>Barra DA LIGHT 56 cm (1000 lm/m calc.) ${amz('B07H7HB6LG', 'Barra DA LIGHT')}</td></tr>
<tr><td><a href="/es/zonas/espejo-bano/">Espejo baño</a></td><td>300–500 lux rostro, IP44, 3000–4000 K</td><td>Barra espejo Lucide ONNO ${amz('B07B4CPRDQ', 'Lucide ONNO')}</td></tr>
<tr><td><a href="https://1piece1ampoule.fr/zones/entree-allee-exterieure/">Entrada y acceso</a></td><td>2000–3000 lm, IP65, movimiento</td><td>Proyector OREiN 24 W ${amz('B0BPX1ZZXJ', 'Proyector OREiN')}</td></tr>
<tr><td><a href="https://1piece1ampoule.fr/zones/escaliers/">Escalera</a></td><td>150 lux, auto en ambos extremos</td><td>OSRAM radar E27 ${amz('B0FGD6H3NZ', 'OSRAM movimiento E27')}</td></tr>
<tr><td><a href="https://1piece1ampoule.fr/zones/placards-dressing/">Armario</a></td><td>Barra inalámbrica con movimiento</td><td>OUILA 60 cm recargable ${amz('B0F18462GT', 'Barra OUILA')}</td></tr>
</tbody></table>
<div class="en-grid">
<a class="en-tile" href="/es/zonas/encimera-cocina/"><strong>Encimera cocina</strong><span>500 lux bajo muebles.</span></a>
<a class="en-tile" href="/es/zonas/espejo-bano/"><strong>Espejo baño</strong><span>Luz IP44 a la altura del rostro.</span></a>
<a class="en-tile" href="https://1piece1ampoule.fr/zones/entree-allee-exterieure/"><strong>Entrada (FR)</strong><span>Acceso y porche.</span></a>
<a class="en-tile" href="https://1piece1ampoule.fr/zones/escaliers/"><strong>Escalera (FR)</strong><span>Automatización por movimiento.</span></a>
<a class="en-tile" href="https://1piece1ampoule.fr/zones/placards-dressing/"><strong>Armario (FR)</strong><span>Barras con sensor.</span></a>
</div>
<p>Método: <a href="/es/tutoriales/calcular-lux-lumenes-por-estancia/">lux por estancia</a>.</p>`,
  },
  {
    path: 'zonas/espejo-bano',
    article: true,
    kicker: 'Guía de zona',
    title: 'Iluminación del espejo de baño: lux, IP44, temperatura de color',
    description: 'Dónde colocar la luz, volúmenes REBT, IRC para maquillaje, apliques y espejos outlet comparados.',
    h1: 'Iluminación del espejo de baño',
    lead: 'Un downlight de techo sombrea el rostro. Afeitado y maquillaje necesitan luz frontal a la altura de los ojos.',
    body: `<h2>Esenciales</h2><ul>
<li><strong>Posición:</strong> barra sobre el espejo a todo lo ancho, o apliques verticales a la altura de los ojos (más uniforme).</li>
<li><strong>Nivel:</strong> 300–500 lux en el rostro — <a href="/es/tutoriales/calcular-lux-lumenes-por-estancia/">guía lux</a>.</li>
<li><strong>Color:</strong> 3000–4000 K; tonos más fríos aplanan la piel.</li>
<li><strong>IRC (índice de reproducción cromática) ≥ 90</strong> para maquillaje — <a href="/es/guias/reproduccion-cromatica-cri-ra/">guía IRC</a>.</li>
</ul>
<h2>Zonas IP (volúmenes de baño — referencia REBT)</h2><ul>
<li><strong>Volumen 1</strong> (sobre bañera/ducha hasta 2,25 m): IPX4, solo <strong>SELV</strong> (seguridad extra baja tensión) 12 V.</li>
<li><strong>Volumen 2</strong> (0,6 m alrededor del volumen 1): IPX4, clase II con diferencial 30 mA o 12 V.</li>
<li><strong>Fuera de volúmenes:</strong> IP no obligatorio, pero IP44 prudente cerca de salpicaduras.</li>
</ul>
<p>En España aplique la REBT y las zonas de baño; el principio es similar — mantenga la red fuera de zonas de salpicadura. En duda, electricista autorizado.</p>
<h2>Apliques comparados</h2>
<table><thead><tr><th>Producto</th><th>Tipo</th><th>IP</th><th>K</th></tr></thead><tbody>
<tr><td>Lucide ONNO 11 W 60 cm ${amz('B07B4CPRDQ', 'Lucide ONNO')}</td><td>Barra sobre espejo</td><td>IP44</td><td>3000 K</td></tr>
<tr><td>SILAMP 12 W ${amz('B0BBLYJCFF', 'SILAMP 12 W')}</td><td>Pared</td><td>IP44</td><td>6000–8000 K (frío)</td></tr>
</tbody></table>
<h2>Espejos LED (outlet 2echoix — precios 22/10/2026)</h2>
<table><thead><tr><th>Modelo</th><th>Tamaño</th><th>Precio</th></tr></thead><tbody>
<tr><td>Espejo LED anti-vaho Coast</td><td>70×50 cm</td><td><a href="https://www.awin1.com/pclick.php?p=46317416057&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€79,99</a></td></tr>
<tr><td>Mirlux redondo regulable</td><td>Ø60 cm</td><td><a href="https://www.awin1.com/pclick.php?p=46246025083&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€109,00</a></td></tr>
<tr><td>Mirlux sin marco 120×60</td><td>120×60 cm</td><td><a href="https://www.awin1.com/pclick.php?p=46390597656&a=3127458&m=31151" rel="sponsored nofollow" target="_blank">€139,99</a></td></tr>
</tbody></table>
<p class="en-note">Los espejos outlet pueden omitir IP/K en la ficha — confirme con el vendedor si está cerca de la ducha.</p>
<p><strong>Nuestra elección:</strong> Lucide ONNO — IP44, 3000 K, 60 cm de ancho para un espejo de lavabo estándar.</p>
<p>Estancia completa: <a href="https://1piece1ampoule.fr/pieces/salle-de-bain/">página baño (FR)</a>. Todas las zonas: <a href="/es/zonas/">índice zonas</a>.</p>`,
  },
  {
    path: 'sobre-nosotros',
    article: true,
    kicker: 'Sobre nosotros',
    title: 'Sobre 1 pièce 1 ampoule y Emmanuel Sauvage',
    description: 'Quién escribe el sitio, cómo se eligen productos, aviso de afiliado Amazon.',
    h1: 'Un sitio para iluminar cada estancia, sin jerga',
    lead: 'Guías de iluminación independientes para hogares reales — fichas técnicas primero, marketing nunca.',
    body: `<p><strong>1 pièce 1 ampoule</strong> está editado por <strong>Emmanuel Sauvage</strong>. Elegir una bombilla debería llevar dos minutos; entre lúmenes, Kelvin, IRC (índice de reproducción cromática), casquillos y reguladores, a menudo se acaba con la referencia equivocada. Este sitio divide cada estancia en <strong>zonas</strong> (tarea, ambiente, circulación) e indica tono, potencia y tipo de casquillo para cada una.</p>
<h2>Cómo elegimos productos</h2><ul>
<li>Partimos de la <strong>necesidad</strong> (zona, problema, casquillo), luego buscamos productos que encajen.</li>
<li>Comparamos <strong>fichas de fabricante</strong>: lúmenes, Kelvin, IRC, IP, compatibilidad con regulador.</li>
<li>Priorizamos marcas consolidadas con alternativa económica razonable cuando existe.</li>
<li>Los enlaces se <strong>comprueban</strong> al actualizar las páginas.</li></ul>
<p>No probamos en laboratorio cada artículo. La selección se basa en fichas y principios de iluminación. ¿No encaja? Aplique la política de devolución de su vendedor (Amazon.es, etc.).</p>
<h2>Cómo se financia el sitio</h2>
<p>Como afiliado de Amazon obtenemos ingresos por compras cualificadas vía nuestros enlaces — <strong>sin coste extra para usted</strong>. El consejo no se compra: una página que dice «no hace falta comprar nada» es una buena página. Detalles: <a href="/es/afiliacion/">página de afiliación</a>.</p>
<h2>Correcciones</h2>
<p>¿Ha visto un error? <a href="/es/contacto/">Contacto</a> — lo corregimos con prontitud.</p>`,
  },
  {
    path: 'articulos',
    article: true,
    kicker: 'Artículos',
    title: 'Artículos sobre iluminación LED: averías, comparativas, guías',
    description: 'Índice de artículos por categoría; rutas en español del lote 2, enlaces FR para el resto.',
    h1: 'Artículos de iluminación LED',
    lead: 'Artículos concretos para elegir bombillas, evitar errores y resolver problemas cotidianos.',
    body: `<h2>Diagnóstico</h2><div class="en-grid"><a class="en-tile" href="https://1piece1ampoule.fr/articles/ampoule-led-qui-clignote/"><strong>Parpadeo LED: causas</strong><span>Diagnóstico de parpadeo</span></a><a class="en-tile" href="https://1piece1ampoule.fr/articles/ampoule-led-reste-allumee-faiblement/"><strong>Brillo residual</strong><span>LED encendida débilmente apagada</span></a><a class="en-tile" href="https://1piece1ampoule.fr/articles/ampoule-led-gresille-bourdonne/"><strong>LED que zumba</strong><span>Zumbido del regulador</span></a><a class="en-tile" href="/es/articulos/bombilla-led-calor-vida-util/"><strong>Calor y vida útil LED</strong><span>Calor y duración</span></a></div><h2>Comparar</h2><div class="en-grid"><a class="en-tile" href="/es/articulos/bombilla-inteligente-wifi-o-zigbee/"><strong>Wi-Fi vs Zigbee</strong><span>Radio de bombilla conectada</span></a><a class="en-tile" href="/es/articulos/bombilla-regulable-o-no/"><strong>¿Regulable o no?</strong><span>Compatibilidad con regulador</span></a><a class="en-tile" href="https://1piece1ampoule.fr/articles/e27-ou-b22/"><strong>E27 o B22</strong><span>Baioneta vs rosca</span></a><a class="en-tile" href="https://1piece1ampoule.fr/articles/gu10-ou-gu5-3/"><strong>GU10 o GU5.3</strong><span>230 V vs 12 V</span></a></div><h2>Mejores opciones</h2><div class="en-grid"><a class="en-tile" href="/es/articulos/bombilla-horno-nevera/"><strong>Bombilla horno y nevera</strong><span>Lámpara horno 300 °C</span></a><a class="en-tile" href="/es/articulos/bombilla-filamento-vintage/"><strong>Filamento vintage</strong><span>Formas Edison LED</span></a><a class="en-tile" href="https://1piece1ampoule.fr/articles/ampoule-crepusculaire/"><strong>Crepuscular</strong><span>Bombilla con fotocélula</span></a></div><h2>Guías prácticas</h2><div class="en-grid"><a class="en-tile" href="https://1piece1ampoule.fr/articles/installer-ruban-led/"><strong>Instalar tira LED</strong><span>Guía tira 24 V</span></a></div><p>Índice completo (FR): <a href="https://1piece1ampoule.fr/articles/">artículos</a>.</p>`,
  },
  {
    path: 'articulos/bombilla-inteligente-wifi-o-zigbee',
    article: true,
    kicker: 'Artículo',
    title: 'Bombilla inteligente Wi-Fi o Zigbee: Tapo vs Philips Hue',
    description: 'Wi-Fi sin hub vs Zigbee con Bridge: pros, límites, Matter, errores y veredicto.',
    h1: 'Bombilla inteligente: ¿Wi-Fi (Tapo) o Zigbee (Hue)?',
    lead: 'Dos radios, dos presupuestos, dos formas de escalar — elija antes de comprar un lote de bombillas.',
    body: `<p>Quiere control por móvil o voz, pero <strong>Wi-Fi</strong>, <strong>Zigbee</strong> (malla de bajo consumo), <strong>Bluetooth</strong> y <strong>Matter</strong> (capa común del hogar conectado) se mezclan. Dos caminos habituales: <strong>Wi-Fi sin hub</strong> (Tapo) y <strong>Zigbee con hub</strong> (Philips Hue).</p><h2>Wi-Fi (Tapo y similares)</h2><ul><li><strong>Funcionamiento:</strong> la bombilla se conecta directamente al router.</li><li><strong>Ventajas:</strong> sin hub, precio bajo, Alexa/Google.</li><li><strong>Inconvenientes:</strong> cada bombilla usa Wi-Fi; latencia; algunas funciones requieren nube.</li><li><strong>Ideal para:</strong> 1–6 bombillas, una estancia, primera prueba.</li></ul><h2>Zigbee (Philips Hue)</h2><ul><li><strong>Funcionamiento:</strong> malla entre bombillas vía <strong>Hue Bridge</strong>.</li><li><strong>Ventajas:</strong> rápido con muchos dispositivos; control local; catálogo amplio.</li><li><strong>Inconvenientes:</strong> coste mayor; hub necesario (en kits de inicio).</li><li><strong>Ideal para:</strong> automatización de toda la vivienda.</li></ul><h2>¿Matter?</h2><p>Matter permite compartir dispositivos entre ecosistemas. SKU recientes de Hue y Tapo lo adoptan — reduce el bloqueo.</p><h2>Errores frecuentes</h2><ul><li>Bombilla inteligente tras regulador de pared — alimente a tensión plena; atenúe en app.</li><li>Interruptor OFF — bombilla inalcanzable; use interruptor inalámbrico o deje ON.</li><li>Ignorar blanco regulable — a menudo más útil que solo color.</li></ul><h2>Veredicto</h2><ul><li><strong>1–3 estancias, presupuesto:</strong> Tapo L530E.</li><li><strong>Toda la casa:</strong> kit Hue White &amp; Color.</li></ul><h2>Productos contrastados</h2><div class="en-card"><p class="en-flag">Wi-Fi · sin hub</p><h3>Tapo L530E E27 color</h3><p>8,7 W, regulable, Wi-Fi 2,4 GHz.</p>${amz('B08GDC99PX', 'Tapo L530E E27 color')}</div><div class="en-card"><p class="en-flag">Kit Hue</p><h3>Kit Hue White & Color E27</h3><p>Dos bombillas, Bridge, mando; malla Zigbee.</p>${amz('B099NRLRG3', 'Kit Hue White & Color E27')}</div><div class="en-card"><p class="en-flag">Hue blanco regulable</p><h3>Hue White Ambiance 1100 lm</h3><p>EPREL 2187086; rutinas de despertar.</p>${amz('B0FJ8VXHRX', 'Hue White Ambiance 1100 lm')}</div>${note}<h2>Preguntas frecuentes</h2><p><strong>¿Bombilla inteligente con regulador?</strong> No — tensión plena; atenúe en app.</p><p><strong>¿Hue Bridge obligatorio?</strong> Para ecosistema completo y muchas bombillas, sí; Bluetooth sirve para ~10 en una estancia.</p>`,
  },
  {
    path: 'articulos/bombilla-regulable-o-no',
    article: true,
    kicker: 'Artículo',
    title: 'LED regulable o no regulable: qué comprar',
    description: 'Regulable significa compatible con regulador. Cuándo hace falta, trampas del regulador antiguo, SceneSwitch y WarmGlow.',
    h1: 'Regulable o no regulable: la diferencia',
    lead: 'La principal causa de devolución de LED es el desajuste con el regulador — ambos lados deben coincidir.',
    body: `<p><strong>Regulable</strong> significa que el driver LED puede seguir la forma de onda recortada del regulador. <strong>No regulable</strong> con regulador parpadea, zumba o muere pronto.</p><h2>Cuándo necesita regulable</h2><ul><li>Regulador de pared rotativo o trailing edge.</li><li>Ambiente nocturno en salón/comedor.</li></ul><h2>Cuándo no</h2><ul><li>Interruptor simple — regulable funciona pero cuesta más.</li><li><strong>Bombilla inteligente</strong> — atenúe dentro de la bombilla; retire o bloquee el regulador al 100 %.</li></ul><h2>Trampa del regulador antiguo</h2><p>Reguladores halógenos esperan 40–60 W mínimos; LED de 7 W quedan por debajo — use regulador LED con ajuste de carga mínima.</p><h2>Regulación por pulsos (sin cable de regulador)</h2><p>Algunas bombillas ciclan 100 % → 50 % → 10 % con pulsaciones (Philips SceneSwitch).</p><h2>WarmGlow</h2><p>Philips WarmGlow baja de 2700 K hacia 2200 K al atenuar — sensación incandescente.</p><h2>Selección en circuitos con regulador</h2><div class="en-card"><p class="en-flag">E27 regulable</p><h3>Philips 100 W eq regulable E27</h3><p>Alto flujo, atenuación suave con regulador compatible.</p>${amz('B09F9MZ4PH', 'Philips 100 W eq regulable E27')}</div><div class="en-card"><p class="en-flag">GU10 WarmGlow</p><h3>Philips GU10 WarmGlow</h3><p>Referencia para focos acogedores atenuados.</p>${amz('B073FT1QT2', 'Philips GU10 WarmGlow')}</div><div class="en-card"><p class="en-flag">Cambio de regulador</p><h3>Regulador LED Legrand</h3><p>Sustituya el regulador antiguo si persiste el parpadeo.</p>${amz('B07MRBVNWM', 'Regulador LED Legrand')}</div>${note}<h2>Preguntas frecuentes</h2><p><strong>¿Regulable sin regulador?</strong> Sí, siempre al 100 %.</p><p><strong>¿No regulable con regulador?</strong> Nunca — parpadeo y fallo prematuro.</p><p>¿Sigue parpadeando? <a href="https://1piece1ampoule.fr/articles/ampoule-led-qui-clignote/">artículo parpadeo (FR)</a> o <a href="/es/guias/parpadeo-gu10-led-regulador-diagnostico/">guía de diagnóstico</a>.</p>`,
  },
  {
    path: 'articulos/bombilla-filamento-vintage',
    article: true,
    kicker: 'Artículo',
    title: 'LED filamento vintage: formas, cristal, lúmenes',
    description: 'A60, ST64, globo; transparente vs ámbar; deslumbramiento y trampas del regulador; selección.',
    h1: 'Bombillas LED filamento vintage',
    lead: 'Los filamentos decorativos exigen el mismo cálculo de lux que un LED clásico — sobre todo con cristal ámbar.',
    body: `<p>Los LED <strong>filamento</strong> imitan las bombillas Edison: «filamento» visible tras cristal transparente o ámbar. Bonitos en pantallas abiertas — pero mire los lúmenes, no solo la forma.</p><h2>Formas</h2><ul><li><strong>A60</strong> — pera versátil.</li><li><strong>ST64</strong> — Edison alargada para colgantes descubiertos.</li><li><strong>G95/G125</strong> — globo sobre mesa.</li><li><strong>Vela E14</strong> — candelabros.</li></ul><h2>Transparente vs ámbar</h2><p>Transparente: más brillante, 2700 K. Ámbar: 1800–2200 K estilo vela — decorativo, no luz principal.</p><h2>Trampas</h2><ol><li>Subestimar lúmenes — apunte a ≥806 lm en cristal transparente para luz principal.</li><li>No regulable con regulador — véase la <a href="/es/articulos/bombilla-regulable-o-no/">guía regulable</a>.</li><li>Deslumbramiento — filamento a la altura de los ojos; use globo o difusor.</li></ol><h2>Usos</h2><p>Colgante de mesa, lámpara de pantalla abierta, filamento crepuscular exterior para presencia en porche.</p><h2>Selección</h2><div class="en-card"><p class="en-flag">Filamento E27</p><h3>Philips filamento E27 eq. 60 W (pack 2)</h3><p>Cristal transparente, 2700 K, IRC fiable.</p>${amz('B08HV4WG3Y', 'Philips filamento E27 eq. 60 W (pack 2)')}</div><div class="en-card"><p class="en-flag">ST64 crepuscular</p><h3>Lucide ST64 crepuscular E27</h3><p>Look Edison + fotocélula para porche.</p>${amz('B07TSKP9JC', 'Lucide ST64 crepuscular E27')}</div><div class="en-card"><p class="en-flag">ST64 regulable</p><h3>Philips filamento regulable</h3><p>Para colgantes atenuados.</p>${amz('B09F9MZ4PH', 'Philips filamento regulable')}</div>${note}<h2>Preguntas frecuentes</h2><p><strong>¿Luz suficiente?</strong> Transparente ≥806 lm sí; ámbar sobre todo ambiente.</p>`,
  },
  {
    path: 'articulos/bombilla-horno-nevera',
    article: true,
    kicker: 'Artículo',
    title: 'Bombillas de horno (300 °C) y nevera: cómo elegir',
    description: 'Lámpara específica de horno vs LED E14 nevera; seguridad y dimensiones.',
    h1: 'Bombillas de horno y nevera',
    lead: 'Dos electrodomésticos, dos especificaciones — en el horno importa más la temperatura que los lúmenes.',
    body: `<p>¿Ha fallado la bombilla del horno o nevera? <strong>Nunca</strong> un LED estándar en el horno. La nevera necesita un LED E14 compacto.</p><h2>Horno: calor primero</h2><p>Los hornos alcanzan 250–300 °C. La electrónica LED estándar falla por encima de ~80–100 °C. Necesita una <strong>lámpara apta para horno hasta 300 °C</strong>.</p><h3>Cómo acertar</h3><ol><li><strong>Casquillo:</strong> normalmente <strong>E14</strong>, a veces G9/E27 — lea la bombilla antigua o el manual.</li><li><strong>Forma:</strong> tubular T22/T25 — la cubierta de cristal debe volver a encajar.</li><li><strong>Potencia:</strong> equivalente halógeno 15–40 W basta.</li><li>La caja debe indicar <strong>300 °C</strong>.</li></ol><h3>Cambio seguro</h3><ul><li>Horno frío, circuito aislado.</li><li>Retire la cubierta de cristal (guante de goma ayuda).</li><li>No toque el cristal halógeno con los dedos.</li></ul><h2>Nevera</h2><p>Frío y humedad — <strong>LED E14 2–4 W</strong> compacto (200–300 lm), blanco neutro/frío para el color de los alimentos.</p><h2>Campana extractora</h2><p>A menudo E14 o GU10/G4 — calor moderado; LED OK tras comprobar casquillo.</p><h2>Selección</h2><div class="en-card"><p class="en-flag">Horno E14 300 °C</p><h3>YIIFELL horno E14 (pack 4)</h3><p>Apta para temperaturas de horno según ficha.</p>${amz('B0DDK55MF7', 'YIIFELL horno E14 (pack 4)')}</div><div class="en-card"><p class="en-flag">Horno E14</p><h3>Caldarax lámpara horno (pack 2)</h3><p>Específica horno 300 °C.</p>${amz('B0D6BJZJ56', 'Caldarax lámpara horno (pack 2)')}</div><div class="en-card"><p class="en-flag">Nevera E14</p><h3>DiCUNO E14 3 W (pack 2)</h3><p>Sustituto compacto nevera.</p>${amz('B0B7W9VRB7', 'DiCUNO E14 3 W (pack 2)')}</div>${note}<h2>Preguntas frecuentes</h2><p><strong>¿LED normal en horno?</strong> No — el driver fallará y puede romperse.</p><p>Casquillos: <a href="https://1piece1ampoule.fr/articles/e27-ou-b22/">E27 vs B22</a> (FR).</p>`,
  },
  {
    path: 'articulos/bombilla-led-calor-vida-util',
    article: true,
    kicker: 'Artículo',
    title: 'Calor y vida útil del LED: calor normal vs fallo prematuro',
    description: 'Por qué los LED fallan antes de 15 000 h: apliques cerrados, drivers, reguladores; elegir para durar.',
    h1: 'Calor LED: ¿normal o no, y hacerlos durar',
    lead: 'Caliente al tacto está bien; demasiado caliente para sostener indica bombilla o aplique incorrectos.',
    body: `<p>Los LED van más frescos que los halógenos, pero el calor sigue matando drivers. Unos 60–70 % de la potencia de entrada se convierte en calor — menos vatios totales, menos calor global.</p><h2>Temperatura normal</h2><p>Base <strong>tibia 50–70 °C</strong> tras una hora es normal. Demasiado caliente para tocar o olor a plástico quemado no lo es.</p><h2>Por qué fallan antes de 15 000 h</h2><ul><li><strong>Aplique cerrado</strong> — sin ventilación; elija bombillas «aptas para cerrado».</li><li><strong>Downlights en aislamiento</strong> — deje hueco de aire o use campana ignífuga.</li><li><strong>Colgante invertido</strong> — el calor sube hacia el driver.</li><li><strong>Conmutación frecuente</strong> con bombilla de sensor inadecuada.</li><li><strong>Desajuste con regulador</strong> estresa el driver.</li></ul><h2>Qué falla en realidad</h2><p>El chip LED dura; los <strong>condensadores electrolíticos</strong> del driver se secan con el calor.</p><h2>Comprar para durar</h2><ol><li>Marca con garantía real (Philips, Ledvance…).</li><li>Lúmenes adecuados, no sobredimensionados en globo pequeño — <a href="/es/tutoriales/calcular-lux-lumenes-por-estancia/">dimensione la estancia</a>.</li><li>Casos especiales: <a href="/es/articulos/bombilla-horno-nevera/">bombilla horno</a>, IP exterior.</li><li>Uso con detector: bombilla apta para movimiento.</li></ol><h2>Decaimiento L70</h2><p>Fin de vida nominal = 70 % de lúmenes iniciales — notar la estancia más oscura es real.</p><h2>Ejemplos</h2>${amz('B01KHIM7OG', 'Philips E27 806 lm')}${amz('B0DGPZCMG6', 'Ejemplo LED apto cerrado')}${amz('B0FGD6H3NZ', 'OSRAM movimiento E27')}${note}<h2>Preguntas frecuentes</h2><p><strong>¿Aplique cerrado?</strong> Solo si la bombilla indica compatible con cerrado.</p><p><strong>¿Calor normal?</strong> Base tibia sí; olor a quemado no.</p>`,
  },
];
