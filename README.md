# brianjohnson.work

Brian Johnson's portfolio: a Notion-style product workspace built with Astro and React.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs the static site to dist/
```

## Where things live

| To change | Edit |
| --- | --- |
| Case study cards, Work table, Photos, Inbox notes, Writing list, Search results | `src/data/site.js` |
| Home, case study, Writing and Contact page content | `src/fragments/*.html` |
| Sidebar, tabs, breadcrumb bar | `src/layouts/Shell.astro` |
| Meetings, Inbox and Search panels | `src/components/Overlays.jsx` |
| AI chat page | `src/components/ChatApp.jsx`, `src/pages/chat.astro` |
| Colors and responsive rules | `src/styles/site.css` |
| The chat service (Gemini) | `chat-service/` (see its README) |

**Post an Inbox note:** add an entry at the top of `INBOX` in `src/data/site.js` with a new `id`.
Every visitor who hasn't seen that id gets the red badge.

**Add a Medium post:** add it to `POSTS` in `src/data/site.js`, and add a row to
`src/fragments/writing.html` and the Writing section of `src/fragments/home.html`.

## Hosting (free)

Works on Cloudflare Pages, Netlify or Vercel. Connect this GitHub repo and use:

- Build command: `npm run build`
- Output folder: `dist`
- Environment variable (once the chat service is live): `PUBLIC_CHAT_API` = the Cloud Run URL

Then add `brianjohnson.work` as a custom domain in the host's dashboard and follow its DNS instructions.

## Interactive features, in short

- **Meetings:** a right-side panel with Cal.com's inline scheduler (15 or 30 minutes). Any element with
  `data-open="meetings"` opens it; `data-len="30"` picks the 30-minute meeting.
- **Inbox:** notes from `INBOX`; read state lives in the visitor's browser.
- **Search:** `Ctrl/Cmd + K`, the sidebar search icon or the + tab button. Index is `SEARCH` in `site.js`.
- **Recent and tabs:** the visitor's own trail through the site, kept in their browser.
- **AI chat:** starter questions are answered instantly from approved text; anything else goes to the
  chat service. Without `PUBLIC_CHAT_API` set, free-text questions get a friendly "not switched on yet"
  reply with a booking card.
