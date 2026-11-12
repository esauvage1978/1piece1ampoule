/** Libellés du widget « page utile » (manuso.fr) par locale site. */
export type RatingLang = 'fr' | 'en' | 'uk' | 'ca' | 'de' | 'nl' | 'es' | 'it';

export type RatingCopy = {
  title: string;
  thanks: string;
  avgLabel: string;
  improve: string;
  placeholder: string;
  send: string;
  reasons: { label: string; value: string }[];
};

export const PAGE_RATING: Record<RatingLang, RatingCopy> = {
  fr: {
    title: 'Cette page vous a-t-elle été utile ?',
    thanks: 'Merci !',
    avgLabel: 'Note moyenne',
    improve: 'Que devons-nous améliorer ?',
    placeholder: 'Commentaire optionnel (180 car.)',
    send: 'Envoyer',
    reasons: [
      { label: 'Info incomplète', value: 'Info incomplète' },
      { label: 'Lien / prix à jour', value: 'Lien / prix à jour' },
      { label: 'Outil / tableau à corriger', value: 'Outil / tableau à corriger' },
    ],
  },
  en: {
    title: 'Was this page helpful?',
    thanks: 'Thank you!',
    avgLabel: 'Average rating',
    improve: 'What should we improve?',
    placeholder: 'Optional comment (180 chars)',
    send: 'Send',
    reasons: [
      { label: 'Missing information', value: 'Missing information' },
      { label: 'Outdated link or price', value: 'Outdated link or price' },
      { label: 'Tool or table to fix', value: 'Tool or table to fix' },
    ],
  },
  uk: {
    title: 'Was this page helpful?',
    thanks: 'Thank you!',
    avgLabel: 'Average rating',
    improve: 'What should we improve?',
    placeholder: 'Optional comment (180 chars)',
    send: 'Send',
    reasons: [
      { label: 'Missing information', value: 'Missing information' },
      { label: 'Outdated link or price', value: 'Outdated link or price' },
      { label: 'Tool or table to fix', value: 'Tool or table to fix' },
    ],
  },
  ca: {
    title: 'Was this page helpful?',
    thanks: 'Thank you!',
    avgLabel: 'Average rating',
    improve: 'What should we improve?',
    placeholder: 'Optional comment (180 chars)',
    send: 'Send',
    reasons: [
      { label: 'Missing information', value: 'Missing information' },
      { label: 'Outdated link or price', value: 'Outdated link or price' },
      { label: 'Tool or table to fix', value: 'Tool or table to fix' },
    ],
  },
  de: {
    title: 'War diese Seite hilfreich?',
    thanks: 'Danke!',
    avgLabel: 'Durchschnittsbewertung',
    improve: 'Was sollen wir verbessern?',
    placeholder: 'Optionaler Kommentar (180 Zeichen)',
    send: 'Senden',
    reasons: [
      { label: 'Unvollständige Infos', value: 'Unvollständige Infos' },
      { label: 'Link / Preis veraltet', value: 'Link / Preis veraltet' },
      { label: 'Tool / Tabelle korrigieren', value: 'Tool / Tabelle korrigieren' },
    ],
  },
  nl: {
    title: 'Was deze pagina nuttig?',
    thanks: 'Bedankt!',
    avgLabel: 'Gemiddelde score',
    improve: 'Wat kunnen we verbeteren?',
    placeholder: 'Optionele opmerking (180 tekens)',
    send: 'Versturen',
    reasons: [
      { label: 'Info onvolledig', value: 'Info onvolledig' },
      { label: 'Link / prijs verouderd', value: 'Link / prijs verouderd' },
      { label: 'Tool / tabel corrigeren', value: 'Tool / tabel corrigeren' },
    ],
  },
  es: {
    title: '¿Te ha sido útil esta página?',
    thanks: '¡Gracias!',
    avgLabel: 'Nota media',
    improve: '¿Qué debemos mejorar?',
    placeholder: 'Comentario opcional (180 car.)',
    send: 'Enviar',
    reasons: [
      { label: 'Información incompleta', value: 'Información incompleta' },
      { label: 'Enlace o precio desactualizado', value: 'Enlace o precio desactualizado' },
      { label: 'Herramienta o tabla a corregir', value: 'Herramienta o tabla a corregir' },
    ],
  },
  it: {
    title: 'Questa pagina ti è stata utile?',
    thanks: 'Grazie!',
    avgLabel: 'Voto medio',
    improve: 'Cosa possiamo migliorare?',
    placeholder: 'Commento facoltativo (180 car.)',
    send: 'Invia',
    reasons: [
      { label: 'Informazioni incomplete', value: 'Informazioni incomplete' },
      { label: 'Link o prezzo non aggiornato', value: 'Link o prezzo non aggiornato' },
      { label: 'Strumento o tabella da correggere', value: 'Strumento o tabella da correggere' },
    ],
  },
};

export const ratingLangOf = (siteLang: string): RatingLang =>
  (siteLang in PAGE_RATING ? siteLang : 'en') as RatingLang;
