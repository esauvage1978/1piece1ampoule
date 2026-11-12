// Catalogue de produits Amazon.fr vérifiés (ASIN existant, page produit accessible le 12/10/2026).
export type Product = {
  icon?: string;
  asin: string;
  name: string;
  brand: string;
  type: string;
  specs: string;
  usage: string;
  data?: { lm: string; w: string; k: string; irc: string; classe: string; eprel: string; source: string; sourceUrl: string };
};

export const PRODUCTS: Record<string, Product> = {
  B0B3MHF5NV: { asin: 'B0B3MHF5NV', brand: 'JZK', name: 'JZK driver LED 12V DC 30W (2,5 A) pour MR16 / G4', type: 'Alimentation LED 12V', specs: '30 W • tension constante • non dimmable', usage: 'Remplacer un transfo halogène' },
  B0C5371TQL: { asin: 'B0C5371TQL', brand: 'SONOFF', name: 'SONOFF ZBMINIL2 module interrupteur Zigbee sans neutre', type: 'Module connecté sans neutre', specs: 'Zigbee 3.0 • dès 3 W • passerelle requise', usage: 'Rendre un interrupteur connecté sans neutre' },
  B0F4XTC2G4: { asin: 'B0F4XTC2G4', brand: 'Shelly', name: 'Shelly 1L Gen3 module Wi-Fi sans neutre + bypass', type: 'Module connecté sans neutre', specs: 'Wi-Fi • 200 W • bypass inclus', usage: 'Interrupteur connecté sans passerelle' },
  B09F9MZ4PH: { asin: 'B09F9MZ4PH', brand: 'Philips', name: 'Philips LED E27 éq. 100W claire, compatible variateur', type: 'Ampoule E27 dimmable', specs: '1521 lm • 2700K • dimmable', usage: 'Salon, salle à manger sur variateur' },
  B073FT1QT2: { asin: 'B073FT1QT2', brand: 'Philips', name: 'Philips spot LED GU10 WarmGlow dimmable – lot de 6', type: 'Ampoule GU10 dimmable', specs: '345 lm • 2200–2700K • dimmable', usage: 'Spots sur variateur, ambiance' },
  B0CNCDF1TD: { asin: 'B0CNCDF1TD', brand: 'GY', name: 'GY ampoule LED G9 3,2W 3000K 520 lm', type: 'Ampoule G9', specs: '520 lm • 3000K • 16 × 50 mm', usage: 'Lustres, appliques, petites lampes' },
  B0FS651RKH: { asin: 'B0FS651RKH', brand: 'AGOTD', name: 'AGOTD ampoule LED G9 2700K 650 lm – lot de 3', type: 'Ampoule G9', specs: '650 lm • 2700K • sans scintillement', usage: 'Suspensions design, lustres' },
  B09V1N212P: { asin: 'B09V1N212P', brand: 'V-TAC', name: 'V-TAC LED E27 8,5W 806 lm 4000K', type: 'Ampoule E27 4000K', specs: '806 lm • 4000K • 200°', usage: 'Cuisine, bureau, garage' },
  B073QSXXCH: { asin: 'B073QSXXCH', brand: 'Osram', name: 'Osram Base Classic A E27 éq. 100W 4000K – lot de 3', type: 'Ampoule E27 4000K', specs: '1521 lm • 4000K', usage: 'Grande pièce, atelier' },
  B08SMN32HT: { asin: 'B08SMN32HT', brand: 'Kuuleyn', name: 'Ampoule E27 7W à détecteur de mouvement orientable', type: 'Ampoule à détecteur', specs: 'Détection 5–8 m • tête 350°', usage: 'Couloir, cave, garage' },
  B0FGD6H3NZ: { asin: 'B0FGD6H3NZ', brand: 'Osram', name: 'Osram Star A75 Motion Sensor E27 (radar)', type: 'Ampoule à détecteur', specs: '1055 lm • 4000K • radar 3 m', usage: 'Entrée, cage d’escalier, cave' },
  B07TSKP9JC: { asin: 'B07TSKP9JC', brand: 'Lucide', name: 'Lucide ST64 ampoule filament E27 crépusculaire', type: 'Ampoule crépusculaire', specs: '2200K • capteur jour/nuit', usage: 'Applique extérieure, porche' },
  B0DDK55MF7: { asin: 'B0DDK55MF7', brand: 'YIIFELL', name: 'YIIFELL ampoule four E14 300 °C – lot de 4', type: 'Ampoule four', specs: 'E14 T22 • 300 °C • 2700K', usage: 'Four, micro-ondes, lampe à sel' },
  B0D6BJZJ56: { asin: 'B0D6BJZJ56', brand: 'Caldarax', name: 'Caldarax ampoule four E14 T20 300 °C – lot de 2', type: 'Ampoule four', specs: 'E14 • 300 °C • dimmable', usage: 'Four, hotte' },
  B0B7W9VRB7: { asin: 'B0B7W9VRB7', brand: 'DiCUNO', name: 'DiCUNO ampoule LED E14 pour frigo 3W – lot de 2', type: 'Ampoule frigo', specs: '300 lm • 6000K • compacte', usage: 'Réfrigérateur, hotte' },
  B07MRBVNWM: { asin: 'B07MRBVNWM', brand: 'Legrand', name: 'Legrand dooxie variateur toutes lampes 2 fils (avec plaque)', type: 'Variateur', specs: 'Sans neutre • compatible LED', usage: 'Remplacer un interrupteur' },
  B07ZNX36QV: { asin: 'B07ZNX36QV', brand: 'SANSI', name: 'SANSI ampoule horticole LED E27 24W spectre complet', type: 'Lampe horticole', specs: 'Spectre complet • E27 • BR30', usage: 'Plantes d’intérieur, semis' },
  B0B87XVX16: { asin: 'B0B87XVX16', brand: 'SANSI', name: 'SANSI lampe horticole 20W à 2 têtes', type: 'Lampe horticole', specs: 'Spectre complet • 2 ampoules E27', usage: 'Coin plantes, étagère' },
  B07R48JG34: { asin: 'B07R48JG34', brand: 'ARUM', name: 'ARUM LED B22 8,5W 2700K – lot de 10', type: 'Ampoule B22', specs: '806 lm • 2700K', usage: 'Douilles baïonnette' },
  B094YKGD5N: { asin: 'B094YKGD5N', brand: 'Velamp', name: 'Ampoule LED B22 15W 1520 lm 4000K', type: 'Ampoule B22', specs: '1520 lm • 4000K', usage: 'Garage, cuisine (baïonnette)' },
  B08R8Y6Q8Y: { asin: 'B08R8Y6Q8Y', brand: 'REYLAX', name: 'REYLAX alimentation LED 24V 100W dimmable', type: 'Alimentation 24V', specs: '100 W • TRIAC / 0-10V', usage: 'Rubans LED sur variateur' },
  B08P8T8LN1: { asin: 'B08P8T8LN1', brand: 'REYLAX', name: 'REYLAX transformateur LED 24V 60W', type: 'Alimentation 24V', specs: '60 W • 2,5 A • tension constante', usage: 'Ruban LED jusqu’à ~4 m' },
  B0C4LCT7J7: { asin: 'B0C4LCT7J7', brand: 'Bojim', name: 'Bojim spots LED encastrables orientables – lot de 10', type: 'Spot encastrable', specs: '650 lm • dimmable • trou 68 mm', usage: 'Plafond cuisine, salon' },
  B08GDC99PX: { asin: 'B08GDC99PX', brand: 'Tapo', name: 'Tapo L530E ampoule connectée Wi-Fi E27', type: 'Ampoule connectée Wi-Fi', specs: '806 lm • couleurs • sans pont', usage: 'Premier pas en connecté' },
  B08Z4KCJZY: { asin: 'B08Z4KCJZY', brand: 'Tapo', name: 'Tapo L530E Wi-Fi E27 – lot de 2', type: 'Ampoule connectée Wi-Fi', specs: '806 lm • couleurs • Alexa/Google', usage: 'Salon, chambre' },
  B0DLG23BNS: { asin: 'B0DLG23BNS', brand: 'TRUMPETS', name: 'TRUMPETS lampe de chevet tactile sans fil', type: 'Lampe de chevet', specs: '6000 mAh • 3 teintes • variation', usage: 'Chevet, lecture' },
  B091HPTZYH: { asin: 'B091HPTZYH', brand: 'Générique', name: 'Lampe de chevet bois tactile + chargeur sans fil', type: 'Lampe de chevet', specs: 'Charge induction • horloge • 3 teintes', usage: 'Chevet connecté' },
  B09534N6WS: { asin: 'B09534N6WS', brand: 'EACLL', name: 'EACLL ampoules LED GU5.3 12V 2700K – lot de 6', type: 'Ampoule GU5.3', specs: '550 lm • 12V • 120°', usage: 'Spots basse tension' },
  B08R6V74XD: { asin: 'B08R6V74XD', brand: 'DiCUNO', name: 'DiCUNO GU5.3 MR16 12V 4000K – lot de 6', type: 'Ampoule GU5.3', specs: '500 lm • 4000K', usage: 'Spots basse tension cuisine' },
  B01ISAMUA6: { asin: 'B01ISAMUA6', brand: 'AstroAI', name: 'AstroAI multimètre numérique 2000 points', type: 'Multimètre', specs: 'Tension AC/DC • continuité sonore', usage: 'Dépanner une guirlande, un transformateur' },
  B019QJ612G: { asin: 'B019QJ612G', brand: 'ISOLATECH', name: 'ISOLATECH kit de 142 gaines thermorétractables 3:1 avec colle', type: 'Gaine thermorétractable', specs: '3:1 • colle intérieure • 3,2 à 20 mm', usage: 'Réparation étanche en basse tension' },
  B0BN18B6F4: { asin: 'B0BN18B6F4', brand: 'talifoca', name: 'talifoca wattmètre prise', type: 'Wattmètre', specs: 'kWh, coût • 3680 W', usage: 'Mesurer une consommation' },
  B0BD3X5XGQ: { asin: 'B0BD3X5XGQ', brand: 'Générique', name: 'Wattmètre prise 7 modes, écran LCD', type: 'Wattmètre', specs: 'kWh, coût • rétroéclairé', usage: 'Mesurer une consommation' },
  B01KHIM7OG: { asin: 'B01KHIM7OG', brand: 'Philips', name: 'Philips LED E27 8W (éq. 60W) 2700K – lot de 6', type: 'Ampoule E27', specs: '806 lm • 2700K • IRC 80', usage: 'Usage général, salon, chambre' },
  B09ZBJPNK4: { asin: 'B09ZBJPNK4', brand: 'Philips', name: 'Philips LED E27 4,9W (éq. 40W) 2700K – lot de 6', type: 'Ampoule E27', specs: '470 lm • 2700K', usage: 'Lampes d’appoint, chevet' },
  B0DGPZCMG6: { asin: 'B0DGPZCMG6', brand: 'Philips', name: 'Philips LED Classic A60 E27 éq. 100W – pack', type: 'Ampoule E27 puissante', specs: '≈1500 lm • blanc', usage: 'Grandes pièces, cuisine, garage' },
  B08HV4WG3Y: { asin: 'B08HV4WG3Y', brand: 'Philips', name: 'Philips LED filament E27 éq. 60W – lot de 2', type: 'Ampoule E27 filament', specs: '806 lm • blanc chaud', usage: 'Suspensions déco, lampes visibles' },
  B0FJ8VXHRX: { asin: 'B0FJ8VXHRX', brand: 'Philips Hue', name: 'Philips Hue White Ambiance E27 1100 lm', type: 'Ampoule connectée', specs: '1100 lm • blanc réglable • Bluetooth/Zigbee', usage: 'Salon, chambre, scénarios', data: { lm: '1 100 lm (à 4 000 K)', w: '8,1 W (veille 0,1 W)', k: '1 000 à 20 000 K réglable', irc: '≥ 80', classe: 'D', eprel: '2187086', source: 'Fiche produit Philips Hue FR (EAN 8720169364806), consultée le 22/10/2026', sourceUrl: 'https://eprel.ec.europa.eu/qr/2187086' } },
  B099NRLRG3: { asin: 'B099NRLRG3', brand: 'Philips Hue', name: 'Philips Hue White & Color Ambiance – kit de démarrage E27', type: 'Kit connecté couleur', specs: '1100 lm • couleurs • pont + télécommande', usage: 'Ambiance salon / TV', data: { lm: '1 055 lm utiles (360°)', w: '11 W (veille réseau 0,5 W)', k: '2 000 à 6 500 K + couleurs', irc: '80', classe: 'F', eprel: 'modèle 9290024688A', source: 'Fiche d’information produit (règlement UE 2019/2015) du modèle 9290024688A, consultée le 22/10/2026', sourceUrl: 'https://media.dustin.eu/media/d2000010011368366/hue-white-color-ambiance-e27-1100lm-2-pack-energy-document.pdf' } },
  B099NPGWCQ: { asin: 'B099NPGWCQ', brand: 'Philips Hue', name: 'Philips Hue White E27 800 lm – lot de 2', type: 'Ampoule connectée', specs: '800 lm • 2700K • dimmable', usage: 'Entrée de gamme connectée', data: { lm: '806 lm utiles (360°)', w: '7,5 W en marche (EPREL) ; 9 W max. annoncé', k: '2 700 K (fixe)', irc: '80', classe: 'F', eprel: '739280', source: 'Fiche EPREL n° 739280 (modèle 9290018886A), consultée le 22/10/2026', sourceUrl: 'https://eprel.ec.europa.eu/qr/739280' } },
  B0F62SG8Z9: { asin: 'B0F62SG8Z9', brand: 'GY', name: 'GY GU10 LED 4,5W 805 lm 4000K – lot de 12', type: 'Ampoule GU10', specs: '805 lm • 4000K • classe A • 36°', usage: 'Cuisine, plan de travail, couloir' },
  B0BNDC7BPV: { asin: 'B0BNDC7BPV', brand: 'GY', name: 'GY GU10 LED 4,9W 790 lm 4000K – lot de 10', type: 'Ampoule GU10', specs: '790 lm • 4000K • 120°', usage: 'Éclairage large et homogène' },
  B07665H9B7: { asin: 'B07665H9B7', brand: 'Philips', name: 'Philips spot LED GU10 4,6W blanc chaud – lot de 10', type: 'Ampoule GU10', specs: '355 lm • 2700K', usage: 'Salon, chambre, ambiance' },
  B0919GN6FK: { asin: 'B0919GN6FK', brand: 'DiCUNO', name: 'DiCUNO GU10 6W 550 lm 2700K – lot de 6', type: 'Ampoule GU10', specs: '550 lm • 2700K • 120°', usage: 'Spots d’ambiance' },
  B07665DHG6: { asin: 'B07665DHG6', brand: 'Philips', name: 'Philips LED flamme B35 E14 – lot de 6', type: 'Ampoule E14', specs: '470 lm • 2700K', usage: 'Lustres, appliques, chevet' },
  B084VTQWL5: { asin: 'B084VTQWL5', brand: 'Hellum', name: 'Hellum LED bougie E14 mat – lot de 5', type: 'Ampoule E14', specs: '470 lm • 2700K • IRC 90', usage: 'Petites lampes, rendu fidèle' },
  B0F18462GT: { asin: 'B0F18462GT', brand: 'OUILA', name: 'OUILA lampe de placard LED rechargeable 60 cm à détecteur', type: 'Réglette sans fil à détecteur', specs: '3000/4000/6500K • 5000 mAh • USB-C', usage: 'Placard, dressing, cave sans électricité' },
  B0D3VBP11G: { asin: 'B0D3VBP11G', brand: 'Lumic', name: 'Lumic Mouvement 3.0 réglette sans fil à détecteur', type: 'Réglette sans fil à détecteur', specs: '150 lm • 3 teintes • aimantée', usage: 'Placard, tiroir, couloir' },
  B0DYVCTSHH: { asin: 'B0DYVCTSHH', brand: 'Générique', name: 'Lampe de placard 30 cm à détecteur + télécommande – lot de 2', type: 'Réglette sans fil à détecteur', specs: 'Dimmable • télécommande • rechargeable', usage: 'Armoires, escaliers' },
  B0CRL78J86: { asin: 'B0CRL78J86', brand: 'libtit', name: 'libtit réglette sans fil 30 cm à détecteur – lot de 4', type: 'Réglette sans fil à détecteur', specs: '3 teintes • USB • aimantée', usage: 'Plusieurs placards / escalier' },
  B07H7HB6LG: { asin: 'B07H7HB6LG', brand: 'DA LIGHT', name: 'Réglette LED orientable sous meuble 56 cm (3000/4000/6000K)', type: 'Réglette sous meuble 230V', specs: '560 lm • 3 teintes • connectable', usage: 'Plan de travail cuisine' },
  B0CGRC4GQ9: { asin: 'B0CGRC4GQ9', brand: 'Oktaplex', name: 'Oktaplex Riga réglette sous meuble 28 cm 4000K', type: 'Réglette sous meuble 230V', specs: '370 lm • 4000K • extensible', usage: 'Petits plans de travail' },
  B01LZEWUT7: { asin: 'B01LZEWUT7', brand: 'SEBSON', name: 'SEBSON réglette LED cuisine 60 cm avec interrupteur', type: 'Réglette sous meuble 230V', specs: '715 lm • 3000K', usage: 'Cuisine, bureau' },
  B08NWLXPMC: { asin: 'B08NWLXPMC', brand: 'Chesbung', name: 'Chesbung profilé aluminium en V pour ruban LED (20 × 1 m)', type: 'Profilé ruban LED', specs: 'Diffuseur opale • pose en angle', usage: 'Finition “pro” du ruban' },
  B09TQZVFY7: { asin: 'B09TQZVFY7', brand: 'BTF-LIGHTING', name: 'BTF-LIGHTING ruban LED COB 24V 5 m 3000K IRC 90+', type: 'Ruban LED COB', specs: '480 LED/m • sans points • IRC 90+', usage: 'Sous meuble, TV, corniche' },
  B0B9WSBMH4: { asin: 'B0B9WSBMH4', brand: 'TOPAI', name: 'TOPAI ruban LED COB 24V 5 m 3000K IP65', type: 'Ruban LED COB étanche', specs: 'IP65 • IRC 90+', usage: 'Salle de bain, extérieur abrité' },
  B0CRL387FM: { asin: 'B0CRL387FM', brand: 'slochi', name: 'slochi plafonnier LED 24W dimmable avec télécommande', type: 'Plafonnier LED', specs: '2800 lm • 3000–6500K • veilleuse', usage: 'Salon, chambre, bureau' },
  B0DHRX4CJZ: { asin: 'B0DHRX4CJZ', brand: 'Générique', name: 'Plafonnier LED 24W 2800 lm dimmable (Ø30 cm)', type: 'Plafonnier LED', specs: '2800 lm • 3000–6500K', usage: 'Chambre enfant, couloir' },
  B07B4CPRDQ: { asin: 'B07B4CPRDQ', brand: 'Lucide', name: 'Lucide ONNO applique miroir LED 11W IP44', type: 'Applique salle de bain', specs: 'IP44 • 3000K • 60 cm', usage: 'Miroir salle de bain' },
  B0BBLYJCFF: { asin: 'B0BBLYJCFF', brand: 'SILAMP', name: 'SILAMP applique salle de bain 12W IP44', type: 'Applique salle de bain', specs: 'IP44 • blanc froid', usage: 'Miroir, toilettes' },
  B0BZ59BD65: { asin: 'B0BZ59BD65', brand: 'HOFTRONIC', name: 'HOFTRONIC réglette LED étanche 120 cm 36W – lot de 2', type: 'Réglette étanche IP65', specs: '4230 lm • 4000K • connectable', usage: 'Garage, atelier, cave' },
  B07VNNFBHV: { asin: 'B07VNNFBHV', brand: 'SILAMP', name: 'SILAMP réglette LED étanche 36W 120 cm IP65', type: 'Réglette étanche IP65', specs: '4000K • IP65', usage: 'Garage, buanderie' },
  B0FP4ZKX9Z: { asin: 'B0FP4ZKX9Z', brand: 'Générique', name: 'Projecteur LED 30W à détecteur + télécommande, 3 teintes', type: 'Projecteur extérieur', specs: '3600 lm • IP65 • 4 modes', usage: 'Entrée, allée, garage' },
  B0F1CV6R3M: { asin: 'B0F1CV6R3M', brand: 'CLY', name: 'CLY projecteur LED 60W à détecteur + télécommande', type: 'Projecteur extérieur', specs: '5640 lm • détecteur', usage: 'Parking, cour, grande façade' },
  B0BPX1ZZXJ: { asin: 'B0BPX1ZZXJ', brand: 'OREiN', name: 'OREiN projecteur LED 24W à détecteur, 3 teintes', type: 'Projecteur extérieur', specs: '2800 lm • 2700/4000/6500K • IP65', usage: 'Terrasse, jardin' },
  B09XMP2CPQ: { asin: 'B09XMP2CPQ', brand: 'Ainostone', name: 'Spots solaires extérieurs à détecteur – lot de 3', type: 'Lampe solaire', specs: 'IP65 • blanc chaud • piquets', usage: 'Allée, massif, chemin' },
  B0B272H45X: { asin: 'B0B272H45X', brand: 'STEINEL', name: 'STEINEL XSolar L-S ONE applique solaire à détecteur', type: 'Applique solaire', specs: 'Batterie LiFePO4 • détecteur orientable', usage: 'Abri, portail, façade' },
  B0972HH7C6: { asin: 'B0972HH7C6', brand: 'ZOTOYI', name: 'ZOTOYI guirlande guinguette extérieure 15 m (15+1 ampoules S14)', type: 'Guirlande extérieure', specs: '15+1 ampoules S14 • extérieur', usage: 'Pergola, terrasse' },
  B0CZ9B4C2B: { asin: 'B0CZ9B4C2B', brand: 'Générique', name: 'Guirlande guinguette 10 m G40 24V dimmable', type: 'Guirlande extérieure', specs: 'IP44 • basse tension', usage: 'Balcon, salon de jardin' },
  B0CGSLZVD6: { asin: 'B0CGSLZVD6', brand: 'KOMIGANLED', name: 'KOMIGANLED kit éclairage escalier à détecteur (16 marches)', type: 'Kit escalier automatique', specs: 'Ruban découpable • 3000K • détecteurs', usage: 'Escalier intérieur' },
  B07T4PL4LR: { asin: 'B07T4PL4LR', brand: 'Arotelicht', name: 'Arotelicht spots encastrés escalier à détecteur – lot de 4', type: 'Balisage encastré', specs: '230V • IP65', usage: 'Escalier, terrasse' },
  B08MFN1S45: { asin: 'B08MFN1S45', brand: 'Unilux', name: 'Unilux Mambo lampe de bureau LED 3000–5000K', type: 'Lampe de bureau', specs: '900 lux • pince + pied', usage: 'Bureau adulte / enfant' },
  B09QLY8QFZ: { asin: 'B09QLY8QFZ', brand: 'NovoLido', name: 'Lampe de bureau LED architecte 1000 lm à pince', type: 'Lampe de bureau', specs: '3 teintes • 10 niveaux', usage: 'Bureau, dessin' },
  B0785D93KD: { asin: 'B0785D93KD', brand: 'BenQ', name: 'BenQ ScreenBar – barre lumineuse pour écran', type: 'Barre d’écran', specs: 'Anti-reflet • variation auto', usage: 'Télétravail, gaming' },
  B0DK59YKRS: { asin: 'B0DK59YKRS', brand: 'BenQ', name: 'BenQ ScreenBar Halo 2 avec télécommande', type: 'Barre d’écran', specs: 'Éclairage avant/arrière • présence', usage: 'Bureau premium' },
  B0B1J4ZP4T: { asin: 'B0B1J4ZP4T', brand: 'Annmore', name: 'Annmore veilleuse nuage rechargeable', type: 'Veilleuse', specs: 'Rechargeable • lumière douce', usage: 'Chambre bébé / enfant' },
  B09NS944X2: { asin: 'B09NS944X2', brand: 'MediAcous', name: 'MediAcous veilleuse tactile rechargeable', type: 'Veilleuse', specs: 'Minuterie 1h • dimmable', usage: 'Chambre enfant, allaitement' },
  B093C67CNV: { asin: 'B093C67CNV', brand: 'Armytek', name: 'Armytek Wizard C2 Pro lampe frontale rechargeable', type: 'Lampe frontale', specs: '18650 • IP68', usage: 'Cave, bricolage' },
  B0CNVLRK6R: { asin: 'B0CNVLRK6R', brand: 'Abauoat', name: 'Lampe frontale LED rechargeable à capteur', type: 'Lampe frontale', specs: 'IPX5 • capteur de mouvement', usage: 'Cave, dépannage' },
};

type Rule = { re: RegExp; not?: RegExp; asins: [string, string?] };

// Règles de correspondance mots-clés -> produit vérifié (la première qui matche gagne).
const RULES: Rule[] = [
  { re: /escalier.*(balisage|encastr|spot)|(balisage|encastr|spot).*escalier/, asins: ['B07T4PL4LR', 'B0CGSLZVD6'] },
  { re: /escalier|marche/, asins: ['B0CGSLZVD6', 'B07T4PL4LR'] },
  { re: /placard|dressing|armoire|tiroir|sans fil|rechargeable.*(detect|mouvement)|(detect|mouvement).*rechargeable/, not: /exterieur|projecteur|frontale|veilleuse|ruban|profil|interrupteur/, asins: ['B0F18462GT', 'B0D3VBP11G'] },
  { re: /solaire/, asins: ['B09XMP2CPQ', 'B0B272H45X'] },
  { re: /guirlande|guinguette/, asins: ['B0972HH7C6', 'B0CZ9B4C2B'] },
  { re: /projecteur.*(exterieur|parking|ip65|detect)|exterieur.*(detect|mouvement)/, not: /^detecteur|interieur|cave|batterie|etabli/, asins: ['B0FP4ZKX9Z', 'B0F1CV6R3M'] },
  { re: /frontale|torche|baladeuse/, asins: ['B093C67CNV', 'B0CNVLRK6R'] },
  { re: /veilleuse/, asins: ['B0B1J4ZP4T', 'B09NS944X2'] },
  { re: /ecran|screenbar|barre lumineuse/, asins: ['B0785D93KD', 'B0DK59YKRS'] },
  { re: /lampe (de )?bureau|architecte/, asins: ['B08MFN1S45', 'B09QLY8QFZ'] },
  { re: /miroir|applique.*(ip44|salle de bain)|(ip44|salle de bain).*applique/, asins: ['B07B4CPRDQ', 'B0BBLYJCFF'] },
  { re: /reglette.*(etanche|garage|atelier|cave|120)|tube led|neon/, asins: ['B0BZ59BD65', 'B07VNNFBHV'] },
  { re: /sous meuble|reglette/, asins: ['B07H7HB6LG', 'B0CGRC4GQ9'] },
  { re: /ruban.*(etanche|ip65)/, not: /variateur/, asins: ['B0B9WSBMH4', 'B09TQZVFY7'] },
  { re: /ruban|bande led|strip/, not: /variateur|escalier/, asins: ['B09TQZVFY7', 'B08NWLXPMC'] },
  { re: /profil/, asins: ['B08NWLXPMC', 'B09TQZVFY7'] },
  { re: /plafonnier/, not: /spot|ip44|ip65|detect|variateur/, asins: ['B0CRL387FM', 'B0DHRX4CJZ'] },
  { re: /connect|hue|wifi|zigbee|intelligent/, asins: ['B0FJ8VXHRX', 'B099NRLRG3'] },
  { re: /gu10/, not: /encastr|support|kit|luminaire|rail|dimmable|variateur/, asins: ['B0F62SG8Z9', 'B0BNDC7BPV'] },
  { re: /e14|flamme|bougie/, not: /luminaire|lustre|applique|lampe |dimmable|variateur|refrigerateur|frigo|four/, asins: ['B07665DHG6', 'B084VTQWL5'] },
  { re: /filament/, asins: ['B08HV4WG3Y', 'B01KHIM7OG'] },
  { re: /ampoule.*e27|e27.*ampoule|ampoule led$/, not: /luminaire|suspension|lampadaire|applique|exterieur|ip6|dimmable|variateur|4000|6500|irc/, asins: ['B01KHIM7OG', 'B0DGPZCMG6'] },
];

const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export function matchProducts(keywords: string): Product[] {
  const k = norm(keywords);
  for (const r of RULES) {
    if (r.re.test(k) && !(r.not && r.not.test(k))) {
      let list = r.asins.filter(Boolean).map((a) => PRODUCTS[a as string]);
      // GU10 : privilégier blanc chaud si demandé
      if (/gu10/.test(k) && /2700|chaud|ambiance/.test(k)) list = [PRODUCTS.B07665H9B7, PRODUCTS.B0919GN6FK];
      return list;
    }
  }
  return [];
}

/** Icône à afficher pour un type de produit. */
export function productIcon(type: string): string {
  const t = type.toLowerCase();
  if (/connect/.test(t)) return 'smart';
  if (/gu10|gu5|spot/.test(t)) return 'spot';
  if (/ruban|profil/.test(t)) return 'strip';
  if (/réglette|reglette|barre|tube/.test(t)) return 'bar';
  if (/plafonnier/.test(t)) return 'ceiling';
  if (/applique/.test(t)) return 'wall';
  if (/projecteur/.test(t)) return 'flood';
  if (/solaire/.test(t)) return 'solar';
  if (/guirlande/.test(t)) return 'garland';
  if (/veilleuse/.test(t)) return 'moon';
  if (/frontale/.test(t)) return 'headlamp';
  if (/bureau|chevet/.test(t)) return 'desk';
  if (/escalier|balisage/.test(t)) return 'stairs';
  if (/horticole/.test(t)) return 'plant';
  if (/wattm|variateur|alimentation/.test(t)) return 'plug';
  if (/détecteur|detecteur/.test(t)) return 'sensor';
  return 'bulb';
}
