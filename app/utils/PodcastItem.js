module.exports = class PodcastItem {
  constructor(data) {
    this.data = data;
  }

  getTitle() {
    return this.data.title
  }

  getUid() {
    return this.data.guid
  }

  getDate() {
    return this.data.pubDate
  }

  getDescription() {
    return this.data.description
  }

  getFileUrl() {
    return this.data.enclosures[0].url
  }
}


// {
//   date: 2014-03-20T16:09:19.000Z,
//   pubdate: 2014-03-20T16:09:19.000Z,
//   pubDate: 2014-03-20T16:09:19.000Z,
//   link: 'http://www.mundofreak.com.br/2014/03/20/mundo-freak-confidencial-06-caso-edificio-joelma/',
//   guid: 'http://www.mundofreak.com.br/?p=5024',
//   author: 'www.mundofreak.com.br',
//   comments: 'http://www.mundofreak.com.br/2014/03/20/mundo-freak-confidencial-06-caso-edificio-joelma/#comments',
//   origlink: null,
//   image: {},
//   source: {},
//   categories:
//    [ 'MundoFreak Confidencial',
//      'Podcast',
//      '13',
//      'alma',
//      'almas',
//      'caso',
//      'chico xavier',
//      'espírito',
//      'fantasma',
//      'Filme',
//      'joelma',
//      'mistério',
//      'podcast',
//      'Sobrenatural' ],
//   enclosures:
//    [ { url: 'http://media.blubrry.com/mundofreak/www.mundofreak.com.br/wp-content/uploads/2014/03/MFC-Caso-ed-Joelma.mp3',
//        type: 'audio/mpeg',
//        length: '50275584' } ],
//   'rss:@': {},
//   'rss:title':
//    { '@': {},
//      '#': 'Mundo Freak Confidencial 06 – Caso edifício Joelma' },
//   'rss:link':
//    { '@': {},
//      '#': 'http://www.mundofreak.com.br/2014/03/20/mundo-freak-confidencial-06-caso-edificio-joelma/' },
//   'rss:pubdate': { '@': {}, '#': 'Thu, 20 Mar 2014 16:09:19 +0000' },
//   'rss:guid':
//    { '@': { ispermalink: 'false' },
//      '#': 'http://www.mundofreak.com.br/?p=5024' },
//   'rss:comments':
//    { '@': {},
//      '#': 'http://www.mundofreak.com.br/2014/03/20/mundo-freak-confidencial-06-caso-edificio-joelma/#comments' },
//   'wfw:commentrss':
//    { '@': {},
//      '#': 'http://www.mundofreak.com.br/2014/03/20/mundo-freak-confidencial-06-caso-edificio-joelma/feed/' },
//   'slash:comments': { '@': {}, '#': '7' },
//   'rss:category':
//    [ { '@': {}, '#': 'MundoFreak Confidencial' },
//      { '@': {}, '#': 'Podcast' },
//      { '@': {}, '#': '13' },
//      { '@': {}, '#': 'alma' },
//      { '@': {}, '#': 'almas' },
//      { '@': {}, '#': 'caso' },
//      { '@': {}, '#': 'chico xavier' },
//      { '@': {}, '#': 'espírito' },
//      { '@': {}, '#': 'fantasma' },
//      { '@': {}, '#': 'Filme' },
//      { '@': {}, '#': 'joelma' },
//      { '@': {}, '#': 'mistério' },
//      { '@': {}, '#': 'podcast' },
//      { '@': {}, '#': 'Sobrenatural' } ],
//   'rss:description':
//    { '@': {},
//      '#': '<p>Uma tragédia que matou centenas poderia ter sido causada por circunstâncias sobrenaturais? Será que algumas almas ainda ecooam, pedindo por ajuda, no prédio que pegou fogo a mais de 20 anos? Esse é o caso do edifício Joelma. Investigadores: Andrei, Rafael Jacaúna, Leo Mitocôndrias   Cole esse link no seu agregador de feed, ou no iTunes coloque no “Assinar Podcast” na aba […]</p>\n<p>O post <a rel="nofollow" href="http://www.mundofreak.com.br/2014/03/20/mundo-freak-confidencial-06-caso-edificio-joelma/">Mundo Freak Confidencial 06 – Caso edifício Joelma</a> apareceu primeiro em <a rel="nofollow" href="http://www.mundofreak.com.br">Mundo Freak</a>.</p>' },
//   'rss:enclosure':
//    { '@':
//       { url: 'http://media.blubrry.com/mundofreak/www.mundofreak.com.br/wp-content/uploads/2014/03/MFC-Caso-ed-Joelma.mp3',
//         length: '50275584',
//         type: 'audio/mpeg' } },
//   'itunes:subtitle':
//    { '@': {},
//      '#': 'Uma tragédia que matou centenas poderia ter sido causada por circunstâncias sobrenaturais? Será que algumas almas ainda ecooam, pedindo por ajuda, no prédio que pegou fogo a mais de 20 anos? Esse é o caso do edifício Joelma. Investigadores: Andrei,' },
//   'itunes:summary':
//    { '@': {},
//      '#': 'Uma tragédia que matou centenas poderia ter sido causada por circunstâncias sobrenaturais? Será que algumas almas ainda ecooam, pedindo por ajuda, no prédio que pegou fogo a mais de 20 anos? Esse é o caso do edifício Joelma. Investigadores: Andrei, Rafael Jacaúna, Leo Mitocôndrias   Cole esse link no seu agregador de feed, ou no iTunes coloque no “Assinar Podcast” na aba […]' },
//   'itunes:author': { '@': {}, '#': 'www.mundofreak.com.br' },
//   'itunes:explicit': { '@': {}, '#': 'clean' },
//   meta:
//    { '#ns':
//       [ [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object] ],
//      '@':
//       [ [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object],
//         [Object] ],
//      '#xml': { version: '1.0', encoding: 'UTF-8' },
//      '#type': 'rss',
//      '#version': '2.0',
//      title: 'Mundo Freak Confidencial',
//      description: 'Mundo Freak Confidencial é o único podcast de casos insólitos e paranormalidade da podosfera brasileira. Apresentado geralmente por três integrantes, procuram balancear o papo leve e divertido entre céticos, crédulos (believers) e o meio termo.',
//      date: 2017-11-23T18:45:29.000Z,
//      pubdate: 2017-11-23T18:45:29.000Z,
//      pubDate: 2017-11-23T18:45:29.000Z,
//      link: 'http://www.mundofreak.com.br',
//      xmlurl: 'http://www.mundofreak.com.br/feed/podcast/',
//      xmlUrl: 'http://www.mundofreak.com.br/feed/podcast/',
//      author: 'www.mundofreak.com.br',
//      language: 'pt-BR',
//      favicon: null,
//      copyright: 'Copyright © Mundo Freak 2011',
//      generator: 'https://wordpress.org/?v=4.7.7',
//      cloud: {},
//      image:
//       { url: 'http://www.mundofreak.com.br/wp-content/uploads/powerpress/mfc.jpg',
//         title: 'Mundo Freak Confidencial' },
//      categories: [ 'Comedy', 'TV & Film', 'Religion & Spirituality/Spirituality' ],
//      'rss:@': {},
//      'rss:title': { '@': {}, '#': 'Mundo Freak Confidencial' },
//      'atom:link': { '@': [Object] },
//      'rss:link': { '@': {}, '#': 'http://www.mundofreak.com.br' },
//      'rss:description':
//       { '@': {},
//         '#': 'Mundo Freak Confidencial é o único podcast de casos insólitos e paranormalidade da podosfera brasileira. Apresentado geralmente por três integrantes, procuram balancear o papo leve e divertido entre céticos, crédulos (believers) e o meio termo.' },
//      'rss:lastbuilddate': { '@': {}, '#': 'Thu, 23 Nov 2017 18:45:29 +0000' },
//      'rss:language': { '@': {}, '#': 'pt-BR' },
//      'syn:updateperiod': { '@': {}, '#': 'hourly' },
//      'syn:updatefrequency': { '@': {}, '#': '1' },
//      'rss:generator': { '@': {}, '#': 'https://wordpress.org/?v=4.7.7' },
//      'itunes:summary':
//       { '@': {},
//         '#': 'Mundo Freak é um ambiente único, a abordagem de filmes, games, livros, animes e de diversas outras mídias sendo feita de maneira divertida, informal e inovadora. Além de um podcast informativo (ou quase lá) sobre tudo desse mundo freak.' },
//      'itunes:author': { '@': {}, '#': 'www.mundofreak.com.br' },
//      'itunes:explicit': { '@': {}, '#': 'clean' },
//      'itunes:image': { '@': [Object] },
//      'itunes:type': { '@': {}, '#': 'episodic' },
//      'itunes:owner': { '@': {}, 'itunes:name': [Object], 'itunes:email': [Object] },
//      'rss:managingeditor':
//       { '@': {},
//         '#': 'contato@mundofreak.com.br (www.mundofreak.com.br)',
//         name: 'www.mundofreak.com.br',
//         email: 'contato@mundofreak.com.br' },
//      'rss:copyright': { '@': {}, '#': 'Copyright © Mundo Freak 2011' },
//      'itunes:subtitle': { '@': {}, '#': 'O Arquivo X dos podcasts.' },
//      'rss:image': { '@': {}, title: [Object], url: [Object], link: [Object] },
//      'itunes:category': [ [Object], [Object], [Object] ],
//      'googleplay:image': { '@': [Object] },
//      'rawvoice:rating': { '@': {}, '#': 'TV-G' },
//      'rawvoice:frequency': { '@': {}, '#': 'Semanal' } } }
// ========================================
