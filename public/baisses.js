/* Affiche le relevé du jour s'il est plus récent que le HTML. Amazon est refusé. */
(function () {
  var MIDS = /* MIDS_REGISTRE */{'31151':1,'125144':1,'127129':1,'107822':1,'129487':1,'31431':1,'130113':1,'116147':1,'82955':1,'128393':1,'130027':1,'130023':1,'130025':1,'62217':1,'52725':1,'59747':1,'17430':1,'129497':1,'37928':1,'119935':1,'130277':1,'94223':1,'10404':1,'10548':1,'10152':1,'8151':1,'9292':1,'9373':1,'7619':1,'131044':1,'5723':1,'7574':1,'10896':1,'106979':1,'129963':1,'117907':1,'7498':1,'17547':1,'49385':1,'131679':1,'102989':1,'71031':1,'98739':1,'127767':1,'46127':1,'128973':1,'121796':1,'5190':1,'89797':1,'122030':1,'123694':1,'117285':1,'496':1,'101825':1,'62319':1,'115365':1,'115373':1,'14288':1,'28833':1,'118433':1,'118431':1,'28839':1,'28831':1}/* MIDS_REGISTRE */;
  var AFFID = /* AFFID_REGISTRE */'3127458'/* AFFID_REGISTRE */;
  var el = document.getElementById('liste-baisses');
  var textes = document.getElementById('baisses-i18n');
  if (!el || !textes) return;
  var T = JSON.parse(textes.textContent);
  var lang = el.getAttribute('data-lang') || 'fr';

  function aujourdhui() {
    return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  }
  function frais(iso, auj) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(iso || '')) return false;
    var j = (Date.parse(auj + 'T00:00:00Z') - Date.parse(iso + 'T00:00:00Z')) / 86400000;
    return j >= 0 && j <= 2;
  }
  function visible(p) {
    if (p.langue && p.langue !== lang) return false;
    if (p.marche === 'de') return lang === 'de';
    if (p.marche === 'us') return lang === 'en';
    return p.marche === 'eu';
  }
  function imageOk(url) {
    try {
      var u = new URL(url);
      var h = u.hostname.toLowerCase();
      if (u.protocol !== 'https:') return false;
      if (h === 'amazon' || h.indexOf('amazon') !== -1 || h.indexOf('amzn.') !== -1) return false;
      return true;
    } catch (e) {
      return false;
    }
  }
  function hrefOk(href) {
    try {
      var u = new URL(href);
      if (u.protocol !== 'https:' || u.hostname !== 'www.awin1.com') return false;
      if (u.searchParams.get('awinaffid') !== AFFID || !MIDS[u.searchParams.get('awinmid') || '']) return false;
      var dest = u.searchParams.get('ued');
      if (!dest) return false;
      var d = new URL(dest);
      var h = d.hostname.toLowerCase();
      if (d.protocol !== 'https:') return false;
      if (h === 'amazon' || h.indexOf('amazon.') !== -1 || h.indexOf('.amazon.') !== -1 || h.indexOf('amzn.') !== -1) return false;
      return true;
    } catch (e) {
      return false;
    }
  }
  function locale() {
    return { fr: 'fr-FR', en: 'en-GB', de: 'de-DE', it: 'it-IT', es: 'es-ES', nl: 'nl-NL' }[lang] || 'fr-FR';
  }
  function montant(n, devise) {
    return new Intl.NumberFormat(locale(), { style: 'currency', currency: devise }).format(n);
  }
  function dateLongue(iso) {
    return new Intl.DateTimeFormat(locale(), { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(iso + 'T00:00:00Z'));
  }
  function pourcent(ratio) {
    var pct = Math.round(ratio * 1000) / 10;
    var s = Number.isInteger(pct) ? String(pct) : pct.toFixed(1);
    return lang === 'en' ? s : s.replace('.', ',');
  }
  function base(p) {
    if (p.signal === 'releve') return T.baseReleve.replace('{date}', dateLongue(p.dateReference));
    if (p.signal === 'sale_price') return T.baseSale;
    return T.baseOld;
  }
  function nomMarque(data, p) {
    var meta = (data.partenaires || []).filter(function (x) { return x.mid === p.mid; })[0];
    return meta ? meta.nom : p.marque;
  }
  function normaliser(s) {
    return String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  function appliquerFiltres() {
    var marque = document.getElementById('filtre-marque');
    var champ = document.getElementById('filtre-produit');
    var grille = document.getElementById('grille-baisses');
    var vide = document.getElementById('baisses-filtre-vide');
    if (!grille) return;
    var m = marque ? marque.value : '';
    var texte = normaliser(champ ? champ.value : '');
    var n = 0;
    grille.querySelectorAll('.carte-baisse').forEach(function (carte) {
      var ok = (!m || carte.getAttribute('data-marque') === m) && (!texte || normaliser(carte.getAttribute('data-produit')).indexOf(texte) !== -1);
      carte.hidden = !ok;
      if (ok) n += 1;
    });
    if (vide) vide.hidden = n !== 0 || !grille.querySelector('.carte-baisse');
  }
  function syncMarques() {
    var sel = document.getElementById('filtre-marque');
    var grille = document.getElementById('grille-baisses');
    if (!sel || !grille) return;
    var courant = sel.value;
    var vus = {};
    grille.querySelectorAll('.carte-baisse').forEach(function (carte) {
      var nom = carte.getAttribute('data-marque') || '';
      if (nom) vus[nom] = 1;
    });
    var noms = Object.keys(vus).sort(function (a, b) { return a.localeCompare(b, lang); });
    var toutes = sel.options[0] ? sel.options[0].textContent : '';
    sel.replaceChildren();
    var opt0 = document.createElement('option');
    opt0.value = '';
    opt0.textContent = toutes;
    sel.appendChild(opt0);
    noms.forEach(function (nom) {
      var opt = document.createElement('option');
      opt.value = nom;
      opt.textContent = nom;
      sel.appendChild(opt);
    });
    sel.value = noms.indexOf(courant) !== -1 ? courant : '';
  }
  function majFlux(data) {
    document.querySelectorAll('[data-flux-mid]').forEach(function (cell) {
      var mid = cell.getAttribute('data-flux-mid');
      var info = (data.partenaires || []).filter(function (x) { return x.mid === mid; })[0];
      if (!info) return;
      var lib = { 'non-interroge': T.fluxNon, absent: T.fluxAbsent, ok: T.fluxOk, erreur: T.fluxErr }[info.flux] || T.fluxErr;
      if (info.flux === 'ok') lib = lib.replace('{lus}', String(info.lus)).replace('{retenus}', String(info.retenus));
      cell.textContent = lib;
    });
  }
  function rendre(data, produits) {
    var etat = document.getElementById('baisses-etat');
    var grille = document.getElementById('grille-baisses');
    var form = document.getElementById('filtres-baisses');
    majFlux(data);
    if (!grille) return;
    produits = produits.slice().sort(function (a, b) { return b.ratio - a.ratio || b.ecart - a.ecart || String(a.nom).localeCompare(b.nom, lang); });
    grille.replaceChildren();
    if (form) form.hidden = produits.length === 0;
    if (!produits.length) {
      if (etat) etat.textContent = !data || !data.genereLe ? (T.majVide || T.vide) : !frais(data.genereLe, aujourdhui()) ? T.perime : T.vide;
      appliquerFiltres();
      return;
    }
    if (etat) etat.textContent = '';
    produits.forEach(function (p) {
      var nom = nomMarque(data, p);
      var li = document.createElement('li');
      li.className = 'carte-baisse';
      li.setAttribute('data-marque', nom);
      li.setAttribute('data-produit', p.nom);
      var pct = document.createElement('p');
      pct.className = 'baisse-pct';
      var badge = document.createElement('span');
      badge.textContent = '−' + pourcent(p.ratio) + ' %';
      pct.appendChild(badge);
      li.appendChild(pct);
      if (imageOk(p.image)) {
        var img = document.createElement('img');
        img.className = 'photo-baisse';
        img.src = p.image;
        img.alt = p.nom;
        img.width = 480;
        img.height = 360;
        img.loading = 'lazy';
        li.appendChild(img);
      }
      var marque = document.createElement('p');
      marque.className = 'baisse-marque';
      marque.textContent = nom;
      li.appendChild(marque);
      var h = document.createElement('p');
      h.className = 'baisse-nom';
      h.textContent = p.nom + (p.variantes > 1 ? ' · ' + T.coloris.replace('{n}', String(p.variantes)) : '');
      li.appendChild(h);
      var prix = document.createElement('p');
      prix.className = 'baisse-prix';
      prix.textContent = montant(p.prix, p.devise) + (p.stock === '1' ? ' · ' + T.stock : '');
      li.appendChild(prix);
      var compare = document.createElement('p');
      compare.className = 'baisse-comparaison';
      compare.textContent = montant(p.reference, p.devise) + ' — ' + base(p) + '. ' + T.ecart.replace('{montant}', montant(p.ecart, p.devise)).replace('{pct}', pourcent(p.ratio));
      li.appendChild(compare);
      if (p.marche === 'us') {
        var note = document.createElement('p');
        note.className = 'baisse-marche';
        note.textContent = T.us;
        li.appendChild(note);
      }
      var a = document.createElement('a');
      a.href = p.href;
      a.rel = 'sponsored noopener';
      a.target = '_blank';
      a.className = 'lien-baisse';
      a.setAttribute('data-affilie', 'oui');
      a.setAttribute('data-merchant', p.marque);
      a.setAttribute('data-product', p.id);
      a.setAttribute('data-product-category', 'baisse-prix');
      a.setAttribute('data-page-type', 'baisses');
      a.setAttribute('data-cta-placement', 'carte');
      a.textContent = T.voir.replace('{nom}', nom) + ' · ' + T.lienAff;
      li.appendChild(a);
      grille.appendChild(li);
    });
    syncMarques();
    appliquerFiltres();
  }

  var filtreMarque = document.getElementById('filtre-marque');
  var filtreProduit = document.getElementById('filtre-produit');
  if (filtreMarque) filtreMarque.addEventListener('change', appliquerFiltres);
  if (filtreProduit) filtreProduit.addEventListener('input', appliquerFiltres);

  var auj = aujourdhui();
  if (el.getAttribute('data-genere') && !frais(el.getAttribute('data-genere'), auj)) {
    var etat = document.getElementById('baisses-etat');
    var grille = document.getElementById('grille-baisses');
    var form = document.getElementById('filtres-baisses');
    if (etat) etat.textContent = T.perime;
    if (grille) grille.replaceChildren();
    if (form) form.hidden = true;
  }
  fetch('/prix-du-jour.json', { cache: 'no-store' })
    .then(function (res) { if (!res.ok) throw new Error('http'); return res.json(); })
    .then(function (data) {
      if (!data || data.version !== 1 || data.amazonExclu !== true) return;
      var produits = (data.produits || []).filter(function (p) { return frais(p.releve, auj) && visible(p) && hrefOk(p.href); });
      if ((data.genereLe || '') === (el.getAttribute('data-genere') || '') && el.getAttribute('data-genere')) {
        majFlux(data);
        return;
      }
      rendre(data, produits);
      if (data.genereLe) el.setAttribute('data-genere', data.genereLe);
    })
    .catch(function () {});
})();
