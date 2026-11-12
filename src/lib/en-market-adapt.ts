import type { EnPage } from '../content/en';

export type EnMarket = 'en' | 'uk' | 'ca';

const PREFIX: Record<EnMarket, string> = { en: '/en/', uk: '/uk/', ca: '/ca/' };

/** Adapte le HTML anglais partagé pour /uk/ ou /ca/ (liens internes, Amazon, devises). */
export function adaptEnHtml(html: string, market: EnMarket): string {
  if (market === 'en') return html;
  let out = html;
  const prefix = PREFIX[market];
  out = out.replace(/href="\/en\//g, `href="${prefix}`);
  out = out.replace(/href='\/en\//g, `href='${prefix}`);

  if (market === 'ca') {
    out = out.replace(/www\.amazon\.co\.uk/g, 'www.amazon.ca');
    out = out.replace(/tag=roboteducatif-21/g, 'tag=roboteducatif-20');
    out = out.replace(/Check price on Amazon UK/g, 'Check price on Amazon.ca');
    out = out.replace(/Amazon Associate I earn/g, 'Amazon Associate I earn');
    out = out.replace(/· £/g, '· approx. CA$ ');
    out = out.replace(/£(\d)/g, 'approx. CA$ $1');
    out = out.replace(/~£/g, '~CA$ ');
    out = out.replace(
      /2echoix/gi,
      'EU outlet (2echoix.fr — verify shipping to Canada)',
    );
    out = out.replace(
      /NF C 15-100/g,
      'Canadian Electrical Code (CEC) bathroom zones',
    );
    out = out.replace(
      /href="https:\/\/1piece1ampoule\.fr\/affiliation-amazon\/"/g,
      'href="/ca/affiliate-disclosure/"',
    );
    out = out.replace(
      /href="https:\/\/1piece1ampoule\.fr\/articles\/ampoule-led-qui-clignote\/"/g,
      'href="/ca/guides/error-code/led-dimmer-low-flicker/"',
    );
    out = out.replace(
      /href="https:\/\/1piece1ampoule\.fr\/articles\/ampoule-led-reste-allumee-faiblement\/"/g,
      'href="/ca/guides/error-code/led-dimmer-ghosting/"',
    );
  }

  if (market === 'uk') {
    out = out.replace(
      /href="https:\/\/1piece1ampoule\.fr\/affiliation-amazon\/"/g,
      'href="/uk/affiliate-disclosure/"',
    );
    out = out.replace(/French bathroom page/g, 'Full bathroom lighting guide');
    out = out.replace(
      /href="https:\/\/1piece1ampoule\.fr\/pieces\/salle-de-bain\/"/g,
      'href="/uk/guides/ip-ratings-bathroom-outdoor/"',
    );
    out = out.replace(/Full French index/g, 'Browse all UK articles');
    out = out.replace(
      /href="https:\/\/1piece1ampoule\.fr\/articles\/"/g,
      'href="/uk/articles/"',
    );
  }

  return out;
}

export function adaptEnPage(page: EnPage, market: EnMarket): EnPage {
  if (market === 'en') return page;
  return {
    ...page,
    body: adaptEnHtml(page.body, market),
    lead: adaptEnHtml(page.lead, market),
    description: market === 'ca' ? adaptEnHtml(page.description, market) : page.description,
  };
}
