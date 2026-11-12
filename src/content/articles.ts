export type Article = {
  slug: string;
  short: string;
  title: string;
  h1: string;
  description: string;
  category: 'Dépannage' | 'Comparer' | 'Meilleurs choix' | 'Guides pratiques';
  asins: string[];
  related: string[];
  faq: { q: string; a: string }[];
};

export const CATEGORIES = ['Dépannage', 'Comparer', 'Meilleurs choix', 'Guides pratiques'] as const;

export const ARTICLES: Article[] = [
  { slug: 'ampoule-led-qui-clignote', short: 'Ampoule LED qui clignote', category: 'Dépannage',
    title: 'Ampoule LED qui clignote : 6 causes et solutions (2026)', h1: 'Ampoule LED qui clignote : causes et solutions',
    description: 'Ton ampoule LED clignote, flashe ou vacille ? Douille, variateur, interrupteur témoin, driver : le diagnostic en 10 minutes et les solutions.',
    asins: ['B01KHIM7OG', 'B09F9MZ4PH', 'B07MRBVNWM'], related: ['ampoule-led-reste-allumee-faiblement', 'ampoule-dimmable-ou-non', 'ampoule-led-gresille-bourdonne'],
    faq: [
      { q: 'Pourquoi mon ampoule LED clignote quand elle est éteinte ?', a: 'Un interrupteur à voyant lumineux ou un interrupteur connecté sans neutre laisse passer un petit courant qui charge le driver de la LED, qui flashe périodiquement. Remplace l’interrupteur ou ajoute un bypass.' },
      { q: 'Une ampoule LED qui clignote est-elle dangereuse ?', a: 'Généralement non, mais une douille noircie, une odeur de chaud ou des crépitements indiquent un faux contact qui chauffe : coupe le circuit et fais vérifier.' },
      { q: 'Pourquoi ma LED clignote sur un variateur ?', a: 'Soit l’ampoule n’est pas dimmable, soit le variateur n’est pas compatible LED (charge minimale trop élevée). Il faut une ampoule dimmable et un variateur LED.' },
    ] },
  { slug: 'ampoule-led-reste-allumee-faiblement', short: 'LED qui reste allumée faiblement', category: 'Dépannage',
    title: 'Ampoule LED qui reste allumée faiblement : pourquoi et comment corriger', h1: 'Ampoule LED qui reste allumée faiblement une fois éteinte',
    description: 'Lueur résiduelle d’une LED éteinte : interrupteur lumineux, module connecté, neutre coupé, câbles longs. Les causes et les solutions simples.',
    asins: ['B01KHIM7OG', 'B08Z4KCJZY', 'B0FJ8VXHRX'], related: ['ampoule-led-qui-clignote', 'ampoule-connectee-wifi-ou-zigbee', 'ampoule-led-gresille-bourdonne'],
    faq: [
      { q: 'Est-ce que ça consomme de l’électricité ?', a: 'Très peu : quelques dixièmes de watt. Ce n’est pas un problème de facture, mais de confort (et parfois de câblage).' },
      { q: 'Mon interrupteur coupe-t-il le neutre ?', a: 'Si l’ampoule luit et que tu prends une petite décharge en la touchant éteinte, c’est possible. Fais vérifier par un électricien : c’est un défaut de sécurité.' },
    ] },
  { slug: 'ampoule-led-gresille-bourdonne', short: 'LED qui grésille ou bourdonne', category: 'Dépannage',
    title: 'Ampoule LED qui grésille ou bourdonne : causes et solutions', h1: 'Ampoule LED qui grésille ou bourdonne',
    description: 'Bruit d’une ampoule LED : variateur incompatible, transformateur 12 V, driver bas de gamme, alimentation de ruban. Comment retrouver le silence.',
    asins: ['B07MRBVNWM', 'B09F9MZ4PH', 'B073FT1QT2'], related: ['ampoule-dimmable-ou-non', 'gu10-ou-gu5-3', 'installer-ruban-led'],
    faq: [
      { q: 'Une LED qui bourdonne va-t-elle griller ?', a: 'Souvent elle vieillit plus vite, surtout si c’est une ampoule non dimmable sur variateur. Corrige la cause plutôt que d’attendre.' },
      { q: 'Pourquoi mes spots 12 V bourdonnent depuis le passage aux LED ?', a: 'Le transformateur halogène est sous sa charge minimale. Remplace-le par une alimentation LED 12 V ou passe en GU10.' },
    ] },
  { slug: 'ampoule-led-chauffe-duree-de-vie', short: 'LED qui chauffe et durée de vie', category: 'Dépannage',
    title: 'Ampoule LED qui chauffe : est-ce normal ? Durée de vie réelle', h1: 'Ampoule LED qui chauffe : normal ou pas, et comment la faire durer',
    description: 'Une LED tiède est normale, brûlante non. Luminaire fermé, spots encastrés, variateur : pourquoi tes LED lâchent avant 15 000 h et comment l’éviter.',
    asins: ['B01KHIM7OG', 'B0DGPZCMG6', 'B0FGD6H3NZ'], related: ['choisir-spots-encastrables', 'ampoule-four-frigo'],
    faq: [
      { q: 'Quelle température est normale pour une LED ?', a: 'Le culot peut atteindre 50 à 70 °C après une heure. Si tu ne peux pas la toucher une seconde ou si elle sent le plastique chaud, elle est mal adaptée au luminaire.' },
      { q: 'Peut-on mettre une LED dans un luminaire fermé ?', a: 'Oui, si l’ampoule est indiquée compatible luminaire fermé et pas surdimensionnée.' },
    ] },
  { slug: 'ampoule-dimmable-ou-non', short: 'Dimmable ou non dimmable', category: 'Comparer',
    title: 'Ampoule dimmable ou non dimmable : laquelle choisir ?', h1: 'Ampoule dimmable ou non dimmable : la différence',
    description: 'Dimmable = compatible variateur. Quand en avoir besoin, le piège du vieux variateur, les ampoules step-dim et WarmGlow. Tout pour bien choisir.',
    asins: ['B09F9MZ4PH', 'B073FT1QT2', 'B07MRBVNWM'], related: ['ampoule-led-qui-clignote', 'ampoule-connectee-wifi-ou-zigbee'],
    faq: [
      { q: 'Peut-on mettre une ampoule dimmable sans variateur ?', a: 'Oui, elle fonctionne normalement sur un interrupteur classique, toujours à 100 %.' },
      { q: 'Peut-on mettre une ampoule non dimmable sur un variateur ?', a: 'Non : elle clignote, grésille et vieillit prématurément, même variateur à fond.' },
    ] },
  { slug: 'e27-ou-b22', short: 'E27 vs B22', category: 'Comparer',
    title: 'E27 vs B22 : vis ou baïonnette, comment les reconnaître', h1: 'E27 vs B22 : vis ou baïonnette',
    description: 'E27 se visse (27 mm), B22 s’enclenche d’un quart de tour (22 mm). Ils ne sont pas interchangeables. Comment les distinguer, et quand un adaptateur gêne.',
    asins: ['B07R48JG34', 'B094YKGD5N', 'B01KHIM7OG'], related: ['gu10-ou-gu5-3', 'ampoule-connectee-wifi-ou-zigbee', 'meilleure-ampoule-g9'],
    faq: [
      { q: 'E27 vs B22 : lequel est le meilleur ?', a: 'Aucun des deux n’éclaire mieux. La douille déjà en place décide. L’E27 offre plus de choix d’ampoules si vous pouvez changer le luminaire.' },
      { q: 'Peut-on mettre une E27 dans une douille B22 ?', a: 'Seulement avec un adaptateur B22 vers E27. Il allonge l’ampoule, souvent de l’ordre de 2 à 3 cm, et ajoute un contact. Dans un globe fermé, mieux vaut changer la douille.' },
      { q: 'Quel culot est le plus courant en France ?', a: 'L’E27. Le B22 se trouve surtout dans les logements anciens et dans les luminaires d’origine britannique.' },
    ] },
  { slug: 'gu10-ou-gu5-3', short: 'GU10 ou GU5.3', category: 'Comparer',
    title: 'GU10 ou GU5.3 (MR16) : différences et lequel choisir', h1: 'GU10 ou GU5.3 : quelle ampoule pour tes spots ?',
    description: 'GU10 en 230 V ou GU5.3 en 12 V : reconnaître les broches, le problème du transformateur, l’angle d’éclairage et notre sélection.',
    asins: ['B0F62SG8Z9', 'B073FT1QT2', 'B09534N6WS', 'B08R6V74XD'], related: ['choisir-spots-encastrables', 'ampoule-led-gresille-bourdonne', 'economies-led-calcul'],
    faq: [
      { q: 'Peut-on remplacer une GU5.3 par une GU10 ?', a: 'Oui, en retirant le transformateur 12 V et en changeant la douille, puisque la GU10 fonctionne directement en 230 V.' },
      { q: 'Pourquoi mes spots GU5.3 LED clignotent ?', a: 'Le transformateur halogène n’est pas adapté à la faible consommation des LED. Une alimentation LED 12 V règle le problème.' },
    ] },
  { slug: 'meilleure-ampoule-g9', short: 'Meilleure ampoule G9', category: 'Meilleurs choix',
    title: 'Meilleure ampoule LED G9 : laquelle choisir pour un lustre ?', h1: 'Meilleure ampoule LED G9',
    description: 'Remplacer des halogènes G9 par des LED : taille, lumens, scintillement, compatibilité variateur. Notre sélection pour lustres et appliques.',
    asins: ['B0CNCDF1TD', 'B0FS651RKH'], related: ['e27-ou-b22', 'ampoule-led-chauffe-duree-de-vie'],
    faq: [
      { q: 'Quelle LED G9 pour remplacer une halogène 40 W ?', a: 'Une LED G9 d’environ 400 à 450 lumens, soit 4 à 6 W.' },
      { q: 'Les LED G9 sont-elles dimmables ?', a: 'La plupart non. Vérifie la mention dimmable si ton luminaire est sur variateur.' },
    ] },
  { slug: 'ampoule-crepusculaire', short: 'Ampoule crépusculaire', category: 'Meilleurs choix',
    title: 'Ampoule crépusculaire : allumage automatique à la nuit tombée', h1: 'Ampoule crépusculaire : comment ça marche et laquelle choisir',
    description: 'Ampoule à capteur jour/nuit pour porche et façade : différence avec un détecteur, pièges d’installation, consommation et sélection.',
    asins: ['B07TSKP9JC', 'B0B272H45X', 'B09XMP2CPQ'], related: ['eclairage-terrasse', 'ampoule-filament-vintage'],
    faq: [
      { q: 'Une ampoule crépusculaire marche-t-elle dans un couloir sans fenêtre ?', a: 'Non, le capteur restant dans le noir, elle resterait allumée en permanence.' },
    ] },
  { slug: 'ampoule-four-frigo', short: 'Ampoule de four et frigo', category: 'Meilleurs choix',
    title: 'Ampoule de four (300 °C) et ampoule de frigo : comment choisir', h1: 'Ampoule de four et de frigo : trouver la bonne référence',
    description: 'Four : ampoule spéciale 300 °C, culot E14 le plus souvent. Frigo : petite LED E14. Mesures, sécurité, remplacement et sélection.',
    asins: ['B0DDK55MF7', 'B0D6BJZJ56', 'B0B7W9VRB7'], related: ['e27-ou-b22', 'ampoule-led-chauffe-duree-de-vie'],
    faq: [
      { q: 'Peut-on mettre une LED classique dans un four ?', a: 'Non, son électronique ne supporte pas la chaleur. Il faut une ampoule spécifique four résistante à 300 °C.' },
    ] },
  { slug: 'ampoule-connectee-wifi-ou-zigbee', short: 'Connectée : Wi-Fi ou Zigbee', category: 'Comparer',
    title: 'Ampoule connectée Wi-Fi ou Zigbee : Tapo vs Philips Hue', h1: 'Ampoule connectée : Wi-Fi (Tapo) ou Zigbee (Hue) ?',
    description: 'Sans pont en Wi-Fi ou réseau Zigbee avec pont : avantages, limites, Matter, erreurs à éviter et notre verdict selon ton projet.',
    asins: ['B08Z4KCJZY', 'B099NRLRG3', 'B0FJ8VXHRX'], related: ['ampoule-dimmable-ou-non', 'ampoule-led-reste-allumee-faiblement'],
    faq: [
      { q: 'Peut-on mettre une ampoule connectée sur un variateur ?', a: 'Non, elle doit recevoir la tension complète. La variation se fait dans l’appli ou avec une télécommande compatible.' },
      { q: 'Faut-il un pont pour Philips Hue ?', a: 'Pour profiter de tout l’écosystème et de nombreuses ampoules, oui ; il est inclus dans les kits de démarrage.' },
    ] },
  { slug: 'economies-led-calcul', short: 'Économies LED : le calcul', category: 'Guides pratiques',
    title: 'Combien fait économiser la LED ? Calcul et exemples chiffrés', h1: 'Combien la LED fait-elle économiser ?',
    description: 'La formule de calcul, un tableau incandescent/halogène/LED, le cas des spots, le retour sur investissement et la vérification au wattmètre.',
    asins: ['B0BN18B6F4', 'B0BD3X5XGQ', 'B0F62SG8Z9'], related: ['gu10-ou-gu5-3'],
    faq: [
      { q: 'Combien coûte une LED allumée toute la nuit ?', a: 'Une LED de 8 W allumée 10 h consomme 0,08 kWh, soit environ 1,6 centime au tarif réglementé EDF (0,2001 € TTC/kWh, option Base, depuis le 1er août 2026).' },
    ] },
  { slug: 'installer-ruban-led', short: 'Installer un ruban LED', category: 'Guides pratiques',
    title: 'Installer un ruban LED : alimentation, profilé, pose (guide complet)', h1: 'Installer un ruban LED comme un pro',
    description: 'COB ou SMD, 12 ou 24 V, calcul de l’alimentation, profilé alu, découpe et connexion : la méthode complète pour un ruban LED qui dure.',
    asins: ['B09TQZVFY7', 'B08NWLXPMC', 'B08P8T8LN1', 'B08R8Y6Q8Y'], related: ['ampoule-led-gresille-bourdonne', 'choisir-spots-encastrables'],
    faq: [
      { q: 'Quelle alimentation pour 5 m de ruban LED ?', a: 'Multiplie la puissance au mètre par 5 puis par 1,2. Pour 10 W/m : 60 W minimum.' },
      { q: 'Le profilé aluminium est-il obligatoire ?', a: 'Pas obligatoire, mais fortement conseillé : il dissipe la chaleur, cache les points lumineux et protège le ruban.' },
    ] },
  { slug: 'choisir-spots-encastrables', short: 'Choisir ses spots encastrables', category: 'Guides pratiques',
    title: 'Comment choisir ses spots encastrables LED (perçage, IP, placement)', h1: 'Choisir ses spots encastrables LED',
    description: 'Diamètre de perçage, fixe ou orientable, intégré ou GU10, nombre et placement, indice IP et isolation : les 6 décisions avant d’acheter.',
    asins: ['B0C4LCT7J7', 'B073FT1QT2', 'B0F62SG8Z9'], related: ['gu10-ou-gu5-3', 'ampoule-led-chauffe-duree-de-vie'],
    faq: [
      { q: 'Combien de spots pour une cuisine de 10 m² ?', a: 'Environ 5 à 6 spots de 500 à 650 lumens, placés au-dessus du plan de travail, complétés par un éclairage sous meubles.' },
    ] },
  { slug: 'eclairage-terrasse', short: 'Éclairer sa terrasse', category: 'Guides pratiques',
    title: 'Éclairage de terrasse : idées, zones et solutions solaires ou filaires', h1: 'Bien éclairer sa terrasse',
    description: 'Zone repas, cheminement, façade, zone technique : solaire ou filaire, teinte, indice IP et sélection guirlande, spots et projecteurs.',
    asins: ['B0972HH7C6', 'B09XMP2CPQ', 'B0B272H45X', 'B0BPX1ZZXJ'], related: ['ampoule-crepusculaire', 'economies-led-calcul'],
    faq: [
      { q: 'Quelle teinte pour une terrasse ?', a: 'Un blanc chaud entre 2200 et 3000K, plus convivial et moins attractif pour les insectes.' },
    ] },
  { slug: 'lampe-horticole', short: 'Lampe horticole pour plantes', category: 'Guides pratiques',
    title: 'Lampe horticole LED pour plantes d’intérieur : laquelle choisir ?', h1: 'Lampe horticole LED pour plantes d’intérieur',
    description: 'Spectre complet ou rouge/bleu, distance, durée d’éclairage, ampoule E27 ou lampe à pince : faire pousser tes plantes et semis en hiver.',
    asins: ['B07ZNX36QV', 'B0B87XVX16'], related: ['economies-led-calcul'],
    faq: [
      { q: 'Combien d’heures éclairer ses plantes ?', a: '10 à 14 heures par jour pour les plantes vertes, 14 à 16 heures pour les semis, avec une période d’obscurité.' },
    ] },
  { slug: 'lampe-de-chevet', short: 'Choisir sa lampe de chevet', category: 'Guides pratiques',
    title: 'Comment choisir sa lampe de chevet (hauteur, teinte, sans fil)', h1: 'Bien choisir sa lampe de chevet',
    description: 'Hauteur idéale pour lire, teinte chaude, variation tactile, sans fil ou à induction : les critères d’une bonne lampe de chevet et notre sélection.',
    asins: ['B0DLG23BNS', 'B091HPTZYH', 'B08HV4WG3Y'], related: ['ampoule-filament-vintage', 'ampoule-dimmable-ou-non'],
    faq: [
      { q: 'Quelle puissance pour une lampe de chevet ?', a: 'Environ 470 lumens (équivalent 40 W) en 2700K suffisent pour lire au lit.' },
    ] },
  { slug: 'ampoule-filament-vintage', short: 'Ampoule filament vintage', category: 'Meilleurs choix',
    title: 'Ampoule LED filament vintage : bien la choisir (forme, verre, lumens)', h1: 'Ampoule LED à filament vintage : le guide',
    description: 'A60, ST64 Edison ou globe, verre clair ou ambré, éblouissement et variateur : bien choisir une ampoule filament LED et notre sélection.',
    asins: ['B08HV4WG3Y', 'B07TSKP9JC', 'B09F9MZ4PH'], related: ['lampe-de-chevet', 'ampoule-dimmable-ou-non', 'ampoule-crepusculaire'],
    faq: [
      { q: 'Une ampoule filament éclaire-t-elle suffisamment ?', a: 'En verre clair et à partir de 806 lumens, oui. Les versions ambrées sont surtout décoratives.' },
    ] },
  { slug: 'bon-plan-ampoule-connectee', short: 'Bon plan ampoule connectée', category: 'Guides pratiques',
    title: 'Bon plan ampoule connectée : comment reconnaître une vraie bonne affaire', h1: 'Bon plan ampoule connectée',
    description: 'Un bon plan, c’est le bon culot, le bon protocole et assez de lumens, avec une remise visible au panier. Aucun code promo vérifié au 9 novembre 2026.',
    asins: ['B08GDC99PX', 'B099NPGWCQ', 'B0FJ8VXHRX'], related: ['ampoule-connectee-wifi-ou-zigbee', 'e27-ou-b22', 'ampoule-dimmable-ou-non'],
    faq: [
      { q: 'Y a-t-il un code promo pour une ampoule connectée en novembre 2026 ?', a: 'Pas de code vérifié sur ce site au 9 novembre 2026. Le code OSRAM ALLSTARS s’est terminé le 31 octobre 2026. Une remise ne compte que si elle apparaît sur le total du panier.' },
      { q: 'Quelle ampoule connectée pour débuter sans pont ?', a: 'Une ampoule Wi-Fi, par exemple la Tapo L530E (806 lm annoncés). Le Zigbee, type Philips Hue, demande un pont dès que vous voulez des automatisations au-delà d’une pièce en Bluetooth.' },
      { q: 'Une ampoule connectée pas chère est-elle un bon plan ?', a: 'Seulement si le culot, les lumens et le protocole correspondent à votre lampe. Un mauvais culot ou un IRC 80 derrière un miroir de salle de bain ne se rattrape pas avec une remise.' },
    ] },
];
