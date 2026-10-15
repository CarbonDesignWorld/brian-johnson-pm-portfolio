// Single source of truth for page metadata, projects, photos and inbox notes.
// To add a Medium post, an inbox note or a photo, edit this file.

export const SITE = {
  name: 'Brian Johnson',
  title: 'Brian Johnson · Product Manager',
  description:
    'Product Manager who takes products from a customer problem to a working prototype. Four case studies, from concept to shipped.',
  url: 'https://brianjohnson.work',
  email: 'bjohnson1041@gmail.com',
  cal15: 'https://cal.com/brian-johnson-emlcpa/15min',
  cal30: 'https://cal.com/brian-johnson-emlcpa/30min',
  calLink15: 'brian-johnson-emlcpa/15min',
  calLink30: 'brian-johnson-emlcpa/30min',
  // Set PUBLIC_CHAT_API in the hosting dashboard once the chat service is deployed.
  chatApi: import.meta.env.PUBLIC_CHAT_API || '',
};

// Every page that can appear in tabs, Recent and Search.
export const PAGES = {
  '/': { title: 'Home', emoji: '👋' },
  '/work': { title: 'Work', emoji: '🗂️' },
  '/work/prepare': { title: 'Prepare', emoji: '🌦️' },
  '/work/cot': { title: 'C.O.T', emoji: '🎓' },
  '/work/just-hair': { title: 'Just Hair', emoji: '💇🏾‍♀️' },
  '/work/gotukang': { title: 'GoTukang', emoji: '🔧' },
  '/writing': { title: 'Writing', emoji: '✍️' },
  '/photos': { title: 'Photos', emoji: '📷' },
  '/contact': { title: 'Contact', emoji: '✉️' },
  '/chat': { title: 'Ask about Brian', emoji: '💬' },
};

const TAG = {
  Shipped: { bg: '#DBEDDB', fg: '#1C3829' },
  MVP: { bg: '#D3E5EF', fg: '#183347' },
  Concept: { bg: '#E8DEEE', fg: '#412454' },
};

export const PROJECTS = [
  {
    slug: 'prepare', emoji: '🌦️', name: 'Prepare', href: '/work/prepare', cover: '/images/covers/prepare.jpg', alt: 'Prepare on a laptop',
    blurb: 'A weather app that answers what to wear and what to pack, using rules for decisions and AI for the words.',
    status: 'Shipped', type: 'Consumer AI', segment: 'Urban professionals, then travelers', result: '20 research participants using it daily', year: '2026',
  },
  {
    slug: 'cot', emoji: '🎓', name: 'C.O.T', href: '/work/cot', cover: '/images/covers/cot.jpg', alt: 'C.O.T app on a phone',
    blurb: 'A phone-and-email tutoring business rebuilt as an app with prepaid credits and recurring revenue.',
    status: 'MVP', type: 'Client · EdTech', segment: 'Students and adult learners', result: '100% of testers managed sessions unassisted', year: '2025',
  },
  {
    slug: 'just-hair', emoji: '💇🏾‍♀️', name: 'Just Hair', href: '/work/just-hair', cover: '/images/covers/just-hair.jpg', alt: 'Just Hair app on a phone',
    blurb: 'An AI hair-care assistant for textured hair that explains every recommendation before it automates.',
    status: 'MVP', type: 'Consumer AI', segment: 'Women with textured hair', result: '85% task success in unmoderated testing', year: '2025',
  },
  {
    slug: 'gotukang', emoji: '🔧', name: 'GoTukang', href: '/work/gotukang', cover: '/images/covers/gotukang.jpg', alt: 'GoTukang on a phone',
    blurb: 'A concept for a handyman marketplace inside Gojek, built on trust signals instead of word of mouth.',
    status: 'Concept', type: 'Marketplace · Feature add', segment: 'Small business and property owners in Bali', result: '100% task success in Maze testing', year: '2025',
  },
].map((p) => ({ ...p, tag: TAG[p.status] }));

export const POSTS = [
  {
    title: 'The Notion Paradox: Why the Most Flexible Product Is Also the Hardest to Sell',
    short: 'The Notion Paradox',
    snippet: 'Why the most flexible product is also the hardest to sell',
    topics: ['Sales', 'Product'], date: 'May 5, 2026', source: 'Medium',
    url: 'https://medium.com/@bjohnson1041/the-notion-paradox-why-the-most-flexible-product-is-also-the-hardest-to-sell-f51413a21ad7',
  },
  {
    title: "I've built brands in fashion and products in tech.",
    short: "I've built brands in fashion and products in tech",
    snippet: 'On moving from building brands to building products',
    topics: ['Career', 'Product'], date: 'Apr 29, 2026', source: 'Medium',
    url: 'https://medium.com/@bjohnson1041/ive-built-brands-in-fashion-and-products-in-tech-5464b1cdb19b',
  },
];

export const PLACES = [
  {
    emoji: '🗽', name: 'New York City',
    caption: 'The first place I called home, where I learned to survive, take risks, build community and create. My favorite city in the world.',
    photos: [
      ['nyc-1.jpg', 'A hot dog cart under Manhattan towers'],
      ['nyc-2.jpg', 'A brick building with a fire escape against a deep blue sky'],
      ['nyc-3.jpg', 'A traffic light in front of old New York buildings'],
      ['nyc-4.jpg', 'Light and shadow under an overpass'],
    ],
  },
  {
    emoji: '🌺', name: 'Bali, Indonesia',
    caption: 'A year among warm, expressive people and traditions that have lasted. Its differences challenged what I believed, and I left changed for the better.',
    photos: [
      ['bali-1.jpg', 'A Balinese street front with a hanging offering'],
      ['bali-2.jpg', 'A stone guardian statue in front of a building'],
      ['bali-3.jpg', 'A market stall stacked with goods'],
      ['bali-4.jpg', 'Colorful offerings in rows on a table'],
    ],
  },
  {
    emoji: '🌴', name: 'Thailand',
    caption: 'Sabai sabai: peace, calm and kind, free-spirited people. I hope to return one day and open a small business.',
    photos: [
      ['thai-1.jpg', 'A temple roof seen from a shaded walkway'],
      ['thai-2.jpg', 'A pagoda framed by a dark doorway'],
      ['thai-3.jpg', 'An ornate golden temple pavilion'],
      ['thai-4.jpg', 'A giant elephant statue against a blue sky'],
    ],
  },
  {
    emoji: '🎰', name: 'Las Vegas',
    caption: 'A short trip for a best friend’s 30th. Everything was grand, especially the pool parties.',
    photos: [
      ['vegas-4.jpg', 'A neon-lit diner on Fremont Street at dusk, lined with palm trees'],
      ['vegas-1.jpg', 'A desert lot seen through a car window'],
      ['vegas-2.jpg', 'A suburban street under big clouds'],
      ['vegas-3.jpg', 'A long, empty hotel corridor'],
    ],
  },
];

// Inbox notes, newest first. Give each a unique id; a new id shows as unread.
export const INBOX = [
  {
    id: 'welcome', emoji: '👋', title: 'Hi, I’m Brian', type: 'Welcome', date: 'Oct 2026', welcome: true,
    body: 'This site works like a product workspace. Work holds four products I took from problem to prototype, and each case study leads with the decision, the trade-off and the result.\n\nShort on time? Ask the AI assistant anything about my work, or book 15 minutes and ask me directly.',
  },
  {
    id: 'relaunch-2026-10', emoji: '🚀', title: 'Site relaunched as a product workspace', type: 'Launch', date: 'Oct 2026',
    body: 'Four case studies rewritten as product briefs, plus an AI assistant, one-click booking and search.',
  },
  {
    id: 'prepare-v0-1', emoji: '🌦️', title: 'Prepare v0.1 shipped', type: 'Product update', date: 'Sep 2026',
    body: 'A weather app that tells you what to wear and what to pack. Built and shipped solo.',
    links: [
      { label: 'Try Prepare ↗', href: 'https://weather-apps-garage--today-weather-ap.us-east4.hosted.app/' },
      { label: 'Read the case study', href: '/work/prepare' },
    ],
  },
];

// Search index: what the search box can find.
export const SEARCH = [
  { g: 'Case studies', emoji: '🌦️', title: 'Prepare', snippet: 'Shipped · a weather app that tells you what to wear and pack', href: '/work/prepare', k: 'prepare weather ai gemini rules engine shipped consumer pack outfit open-meteo' },
  { g: 'Case studies', emoji: '🎓', title: 'C.O.T', snippet: 'MVP · tutoring rebuilt around prepaid credits', href: '/work/cot', k: 'cot online tutoring credits edtech client mvp parents booking gamification' },
  { g: 'Case studies', emoji: '💇🏾‍♀️', title: 'Just Hair', snippet: 'MVP · AI hair care that explains before it recommends', href: '/work/just-hair', k: 'just hair ai textured research llm multimodal women routine' },
  { g: 'Case studies', emoji: '🔧', title: 'GoTukang', snippet: 'Concept · a handyman marketplace inside Gojek', href: '/work/gotukang', k: 'gotukang gojek marketplace handyman tukang indonesia concept invite proposals commission' },
  { g: 'Pages', emoji: '👋', title: 'Home', snippet: 'About Brian, experience and selected work', href: '/', k: 'home about experience notion bravely bonusly autodesk carbon design world career how i work working style disc' },
  { g: 'Pages', emoji: '🗂️', title: 'Work', snippet: 'All four products, gallery and table', href: '/work', k: 'work projects portfolio case studies' },
  { g: 'Pages', emoji: '✉️', title: 'Contact', snippet: 'Book a call, email, LinkedIn, GitHub, resume', href: '/contact', k: 'contact email resume linkedin github meeting book call' },
  { g: 'Pages', emoji: '💬', title: 'Ask about Brian', snippet: 'An AI assistant that answers from his case studies', href: '/chat', k: 'ai chat assistant ask questions' },
  { g: 'Pages', emoji: '📷', title: 'Photos', snippet: 'New York, Bali, Thailand, Las Vegas', href: '/photos', k: 'photos travel new york bali thailand las vegas' },
  ...POSTS.map((p) => ({ g: 'Writing', emoji: '📝', title: p.short, snippet: `${p.source} · ${p.date}`, href: p.url, k: `${p.title} ${p.topics.join(' ')} writing medium`.toLowerCase(), external: true })),
];
