const SITE = 'https://1piece1ampoule.fr';

export function techArticle({ titre, description, url, publie }) {
  const iso = publie instanceof Date ? publie.toISOString().slice(0, 10) : publie;
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: titre,
    description,
    url: `${SITE}${url}`,
    datePublished: iso,
    dateModified: iso,
    author: { '@type': 'Person', name: 'Emmanuel Sauvage', url: `${SITE}/a-propos/` },
    publisher: { '@type': 'Organization', name: '1 pièce 1 ampoule', url: `${SITE}/` },
    inLanguage: 'fr-FR',
  };
}

export function faqPage(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: { '@type': 'Answer', text: it.reponse },
    })),
  };
}
