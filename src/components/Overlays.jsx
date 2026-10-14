import { useEffect, useMemo, useRef, useState } from 'react';
import { load, save, KEYS, navigate } from '../lib/store.js';
import { INBOX, SEARCH, SITE } from '../data/site.js';

// One island that owns the three overlays (Meetings, Inbox, Search) and the
// Inbox unread badge. Anything on the page can open a panel with
// data-open="meetings|inbox|search" (see Shell.astro) or a #meetings hash.
export default function Overlays() {
  const [panel, setPanel] = useState(null);
  const [len, setLen] = useState(15);

  useEffect(() => {
    const onOpen = (e) => {
      const { panel: p, len: l } = e.detail || {};
      if (l) setLen(Number(l));
      setPanel(p);
    };
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPanel('search');
      } else if (e.key === 'Escape') {
        setPanel(null);
      }
    };
    window.addEventListener('bj:open', onOpen);
    window.addEventListener('keydown', onKey);
    const hash = window.location.hash.replace('#', '');
    if (['meetings', 'inbox', 'search'].includes(hash)) setPanel(hash);
    return () => {
      window.removeEventListener('bj:open', onOpen);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('panel-open', !!panel);
  }, [panel]);

  const close = () => setPanel(null);
  return (
    <>
      <InboxBadge />
      {panel === 'meetings' && <Meetings len={len} setLen={setLen} onClose={close} />}
      {panel === 'inbox' && <Inbox onClose={close} />}
      {panel === 'search' && <Search onClose={close} />}
    </>
  );
}

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
);

/* ---------- Inbox badge ---------- */

// First visit: the badge shows 1, the welcome note. After that it counts
// notes posted since this visitor last opened the Inbox.
function unreadCount() {
  const read = load(KEYS.read, null);
  if (read === null) return 1;
  return INBOX.filter((n) => !read.includes(n.id)).length;
}

function InboxBadge() {
  useEffect(() => {
    const paint = () => {
      const n = unreadCount();
      document.querySelectorAll('[data-inbox-badge]').forEach((el) => {
        el.textContent = String(n);
        el.hidden = n === 0;
      });
      document.querySelectorAll('[data-inbox-label]').forEach((el) => {
        el.setAttribute('aria-label', n ? `Inbox, ${n} unread` : 'Inbox');
      });
    };
    paint();
    window.addEventListener('bj:inbox', paint);
    return () => window.removeEventListener('bj:inbox', paint);
  }, []);
  return null;
}

/* ---------- Meetings ---------- */

const LENGTHS = {
  15: { label: '☕ Intro chat', length: '15 min', blurb: 'For recruiters and hiring managers checking fit.', link: SITE.calLink15, url: SITE.cal15 },
  30: { label: '🧭 Product conversation', length: '30 min', blurb: 'A case study walkthrough or a role in detail.', link: SITE.calLink30, url: SITE.cal30 },
};

function loadCal() {
  // Cal.com's official embed loader.
  (function (C, A, L) {
    const p = function (a, ar) { a.q.push(ar); };
    const d = C.document;
    C.Cal = C.Cal || function () {
      const cal = C.Cal; const ar = arguments;
      if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement('script')).src = A; cal.loaded = true; }
      if (ar[0] === L) {
        const api = function () { p(api, arguments); };
        const namespace = ar[1]; api.q = api.q || [];
        if (typeof namespace === 'string') { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ['initNamespace', namespace]); } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window, 'https://app.cal.com/embed/embed.js', 'init');
}

function Meetings({ len, setLen, onClose }) {
  const box = useRef(null);
  const [embedFailed, setEmbedFailed] = useState(false);
  const cur = LENGTHS[len];

  useEffect(() => {
    setEmbedFailed(false);
    const el = box.current;
    if (!el) return;
    el.innerHTML = '';
    const id = `cal-inline-${len}`;
    const target = document.createElement('div');
    target.id = id;
    target.style.cssText = 'width:100%;min-height:520px;overflow:auto';
    el.appendChild(target);
    try {
      loadCal();
      const ns = `bj${len}`;
      window.Cal('init', ns, { origin: 'https://cal.com' });
      window.Cal.ns[ns]('inline', { elementOrSelector: `#${id}`, calLink: cur.link, config: { layout: 'month_view' } });
      window.Cal.ns[ns]('ui', { hideEventTypeDetails: true, layout: 'month_view' });
    } catch {
      setEmbedFailed(true);
    }
    // If the calendar hasn't drawn after 8 seconds, offer the booking page instead.
    const t = setTimeout(() => { if (!target.querySelector('iframe')) setEmbedFailed(true); }, 8000);
    return () => clearTimeout(t);
  }, [len]);

  return (
    <div className="overlay">
      <button className="scrim" type="button" aria-label="Close booking" onClick={onClose} />
      <section className="sheet sheet-right" role="dialog" aria-modal="true" aria-label="Book a meeting with Brian">
        <div className="sheet-head">
          <div style={{ flex: 1 }}>
            <div className="sheet-title">Book time with Brian</div>
            <div className="sheet-sub">Video call · invite sent by email</div>
          </div>
          <button className="close" type="button" aria-label="Close" onClick={onClose}><CloseIcon /></button>
        </div>
        <div className="sheet-body">
          <div role="group" aria-label="Meeting length" className="segs">
            {[15, 30].map((n) => (
              <button key={n} className={`seg${len === n ? ' seg-on' : ''}`} type="button" aria-pressed={len === n} onClick={() => setLen(n)}>
                <span className="seg-name">{LENGTHS[n].label}</span>
                <span className="seg-len">{LENGTHS[n].length}</span>
              </button>
            ))}
          </div>
          <div className="sheet-note">{cur.blurb}</div>
          <div ref={box} className="cal-box" />
          {embedFailed && (
            <a className="cta" href={cur.url} target="_blank" rel="noopener">Pick a time on Cal.com</a>
          )}
          <div className="sheet-foot">
            Scheduling by Cal.com · <a href={cur.url} target="_blank" rel="noopener">open the booking page ↗</a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Inbox ---------- */

function Inbox({ onClose }) {
  // Opening the Inbox clears the badge. Notes that were new on this opening
  // keep their blue dot until the visitor opens them or closes the Inbox.
  const [fresh, setFresh] = useState(() => {
    const read = load(KEYS.read, null);
    if (read === null) return ['welcome'];
    return INBOX.filter((n) => !read.includes(n.id)).map((n) => n.id);
  });
  const [open, setOpen] = useState(() => {
    const read = load(KEYS.read, []);
    return read.includes('welcome') ? null : 'welcome';
  });

  useEffect(() => {
    save(KEYS.read, INBOX.map((n) => n.id));
    window.dispatchEvent(new Event('bj:inbox'));
  }, []);

  function toggle(id) {
    setOpen(open === id ? null : id);
    setFresh((f) => f.filter((x) => x !== id));
  }
  const read = INBOX.map((n) => n.id).filter((id) => !fresh.includes(id));

  return (
    <div className="overlay">
      <button className="scrim scrim-light" type="button" aria-label="Close inbox" onClick={onClose} />
      <section className="sheet sheet-left" role="dialog" aria-modal="true" aria-label="Inbox: notes from Brian">
        <div className="sheet-head">
          <div style={{ flex: 1 }}>
            <div className="sheet-title" style={{ fontSize: 16 }}>Inbox</div>
            <div className="sheet-sub">Notes from Brian</div>
          </div>
          <button className="close" type="button" aria-label="Close inbox" onClick={onClose}><CloseIcon /></button>
        </div>
        {INBOX.map((n) => {
          const unread = !read.includes(n.id);
          const isOpen = open === n.id;
          return (
            <div key={n.id}>
              <button className={`item${isOpen ? ' open' : ''}`} type="button" aria-expanded={isOpen} onClick={() => toggle(n.id)}>
                <span aria-hidden="true" className="item-icon">{n.emoji}</span>
                <span className="item-text">
                  <span className="item-row">
                    <span style={{ fontSize: 14, fontWeight: unread ? 700 : 500 }}>{n.title}</span>
                    {unread && <span aria-label="Unread" className="dot" />}
                  </span>
                  <span className="item-meta">{n.type} · {n.date}</span>
                </span>
              </button>
              {isOpen && (
                <div className="item-body">
                  <div style={{ whiteSpace: 'pre-line' }}>{n.body}</div>
                  {n.welcome && (
                    <div className="item-actions">
                      <a className="book" href="/contact" data-open="meetings" data-len="15">Book 15 minutes</a>
                      <a className="ghost" href="/chat">Ask the AI assistant</a>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}

/* ---------- Search ---------- */

function Search({ onClose }) {
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);
  const input = useRef(null);
  useEffect(() => { input.current?.focus(); }, []);

  const query = q.trim().toLowerCase();
  const groups = useMemo(() => {
    if (!query) return [{ name: 'Suggested', items: [...SEARCH.slice(0, 4), SEARCH[4], SEARCH[6]] }];
    const words = query.split(/\s+/);
    const hits = SEARCH.filter((r) => {
      const hay = `${r.title} ${r.snippet} ${r.k}`.toLowerCase();
      return words.every((w) => hay.includes(w));
    });
    return ['Case studies', 'Pages', 'Writing']
      .map((name) => ({ name, items: hits.filter((r) => r.g === name) }))
      .filter((g) => g.items.length);
  }, [query]);
  const flat = groups.flatMap((g) => g.items);

  useEffect(() => setSel(0), [query]);

  function go(r) {
    if (!r) return;
    if (r.external) window.open(r.href, '_blank', 'noopener');
    else navigate(r.href);
  }

  function onKey(e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSel((s) => Math.min(s + 1, flat.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
    if (e.key === 'Enter') { e.preventDefault(); go(flat[sel]); }
  }

  let i = -1;
  return (
    <div className="overlay">
      <button className="scrim" type="button" aria-label="Close search" onClick={onClose} />
      <section className="search" role="dialog" aria-modal="true" aria-label="Search Brian's site">
        <div className="search-head">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#91918E" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></svg>
          <label htmlFor="q" className="sr-only">Search</label>
          <input ref={input} id="q" type="text" value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={onKey}
            placeholder="Search Brian's work, pages and writing…" autoComplete="off" />
          <button type="button" className="kbd kbd-btn" onClick={onClose}>esc</button>
        </div>
        <div className="search-body">
          {groups.map((g) => (
            <div key={g.name} style={{ padding: '4px 0 8px' }}>
              <div className="nav-label" style={{ padding: '6px 12px' }}>{g.name}</div>
              {g.items.map((r) => {
                i += 1;
                const idx = i;
                return (
                  <a key={r.href} className={`res${idx === sel ? ' res-sel' : ''}`} href={r.href}
                    {...(r.external ? { target: '_blank', rel: 'noopener' } : {})}
                    onMouseEnter={() => setSel(idx)} onClick={() => r.external && onClose()}>
                    <span aria-hidden="true" className="res-icon">{r.emoji}</span>
                    <span className="res-text">
                      <span style={{ fontSize: 14, fontWeight: 500 }}>{r.title}</span>
                      <span className="res-snippet">{r.snippet}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          ))}
          {query && !flat.length && (
            <div className="search-empty">
              <div>No pages match “{q.trim()}”.</div>
              <a className="book" href={`/chat?q=${encodeURIComponent(q.trim())}`}>Ask the AI instead</a>
            </div>
          )}
        </div>
        <div className="search-foot">
          <span><span className="kbd">↑</span><span className="kbd">↓</span> Move</span>
          <span><span className="kbd">↵</span> Open</span>
          <span><span className="kbd">⌘K</span> Search anywhere</span>
        </div>
      </section>
    </div>
  );
}
