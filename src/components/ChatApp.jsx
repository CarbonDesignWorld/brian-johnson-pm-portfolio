import { useEffect, useRef, useState } from 'react';
import { load, save, KEYS, openPanel } from '../lib/store.js';
import { SITE } from '../data/site.js';

const DAILY_LIMIT = 10;
const AVATAR = '/images/assistant-avatar.jpg';

// Approved answers for the four starter chips. They are answered instantly,
// don't count against the daily limit, and work even if the service is down.
const STARTERS = [
  {
    key: 'pm', icon: '🧭', label: 'PM or designer?', q: 'What makes Brian a PM, not just a designer?',
    a: 'Brian leads with the problem, the segment and the business case, then designs to prove it. Across four products he chose who to build for, decided what to cut, and set a north-star metric for each.\n\nAt C.O.T he shipped the top two of six research needs and deferred gamification so booking and payment came first. His decade in enterprise SaaS sales means he is used to revenue, stakeholders and saying no.',
    sources: [{ title: 'C.O.T case study', href: '/work/cot' }],
  },
  {
    key: 'prepare', icon: '🌦️', label: 'Prepare in 60 seconds', q: 'Walk me through Prepare in 60 seconds',
    a: 'Prepare answers what to wear and what to pack today, instead of showing raw weather data. Brian built and shipped v0.1 himself, and 20 research participants used it daily.\n\nThe key decision: a rules engine makes every clothing call, and Gemini only writes the words, so advice can’t be made up. He cut most weather data, extra pack items and avatars to ship fast.',
    sources: [{ title: 'Prepare case study', href: '/work/prepare' }],
  },
  {
    key: 'tradeoffs', icon: '⚖️', label: 'How he makes trade-offs', q: 'How does Brian make trade-offs?',
    a: 'He ranks user needs, checks them against business goals, and cuts whatever doesn’t serve the core loop.\n\nAt GoTukang he chose bidding over instant booking to give tukangs control and attract supply, accepting slower booking for customers. He also cut in-app payment because the trades still run on cash, delaying commission revenue on purpose.',
    sources: [{ title: 'GoTukang case study', href: '/work/gotukang' }],
  },
  {
    key: 'role', icon: '🎯', label: 'What he’s looking for', q: 'What kind of role is he looking for?',
    a: 'Product Manager roles, ideally on 0-to-1 or early-stage products. Brian is based in New York City and open to remote, hybrid and on-site roles.',
    sources: [{ title: 'Contact', href: '/contact' }],
  },
];

function today() {
  return new Date().toISOString().slice(0, 10);
}
function usedToday() {
  const u = load('bj:chat-usage', {});
  return u.date === today() ? u.used : 0;
}
function visitorId() {
  let id = load(KEYS.visitor, null);
  if (!id) {
    id = (crypto.randomUUID && crypto.randomUUID()) || String(Math.random()).slice(2);
    save(KEYS.visitor, id);
  }
  return id;
}

export function loadThreads() {
  return load(KEYS.chat, []);
}

export default function ChatApp() {
  const [threadId, setThreadId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [remaining, setRemaining] = useState(DAILY_LIMIT);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setRemaining(Math.max(0, DAILY_LIMIT - usedToday()));
    const q = new URLSearchParams(window.location.search).get('q');
    if (q) setInput(q);
    const onLoad = (e) => {
      const t = loadThreads().find((x) => x.id === e.detail);
      if (t) { setThreadId(t.id); setMessages(t.messages); }
    };
    const onReset = () => { setThreadId(null); setMessages([]); setInput(''); inputRef.current?.focus(); };
    window.addEventListener('bj:chat-load', onLoad);
    window.addEventListener('bj:chat-reset', onReset);
    return () => {
      window.removeEventListener('bj:chat-load', onLoad);
      window.removeEventListener('bj:chat-reset', onReset);
    };
  }, []);

  useEffect(() => {
    if (messages.length) endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, busy]);

  function persist(next, id) {
    const threads = loadThreads().filter((t) => t.id !== id);
    const title = next.find((m) => m.role === 'user')?.text || 'New chat';
    save(KEYS.chat, [{ id, title, ts: Date.now(), messages: next }, ...threads].slice(0, 10));
    window.dispatchEvent(new Event('bj:chats'));
  }

  function push(userText, reply) {
    const id = threadId || String(Date.now());
    if (!threadId) setThreadId(id);
    setMessages((prev) => {
      const next = [...prev, { role: 'user', text: userText }, ...(reply ? [reply] : [])];
      persist(next, id);
      return next;
    });
    return id;
  }

  function pickStarter(s) {
    push(s.q, { role: 'assistant', text: s.a, sources: s.sources, book: true });
  }

  async function send(e) {
    e?.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    setInput('');

    if (remaining <= 0) {
      push(text, { role: 'assistant', text: 'That’s the 10 questions for today. The best next step is a quick call with Brian himself.', book: true, notice: true });
      return;
    }
    if (!SITE.chatApi) {
      push(text, { role: 'assistant', text: 'The assistant isn’t switched on yet, so it can only answer the starter questions below. For anything else, Brian is happy to talk.', book: true, notice: true });
      return;
    }

    const id = threadId || String(Date.now());
    if (!threadId) setThreadId(id);
    const history = messages.slice(-6).map((m) => ({ role: m.role, text: m.text }));
    setMessages((prev) => [...prev, { role: 'user', text }]);
    setBusy(true);
    let reply;
    try {
      const res = await fetch(`${SITE.chatApi.replace(/\/$/, '')}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: text, history, visitor: visitorId() }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        reply = { role: 'assistant', text: data.answer, sources: data.sources || [], book: true };
        const used = usedToday() + 1;
        save('bj:chat-usage', { date: today(), used });
        setRemaining(typeof data.remaining === 'number' ? data.remaining : Math.max(0, DAILY_LIMIT - used));
      } else if (res.status === 429) {
        setRemaining(0);
        reply = { role: 'assistant', text: data.message || 'That’s the 10 questions for today. The best next step is a quick call with Brian himself.', book: true, notice: true };
      } else {
        reply = { role: 'assistant', text: data.message || 'The assistant is taking a break right now. Sorry about that. You can still book time with Brian directly.', book: true, notice: true };
      }
    } catch {
      reply = { role: 'assistant', text: 'The assistant can’t be reached right now. Sorry about that. You can still book time with Brian directly.', book: true, notice: true };
    }
    setBusy(false);
    setMessages((prev) => {
      const next = [...prev, reply];
      persist(next, id);
      return next;
    });
  }

  const empty = messages.length === 0;
  return (
    <div className="chat">
      <div className="chat-inner">
        {empty ? (
          <div className="chat-hero">
            <div aria-hidden="true" className="chat-avatar-lg"><img src={AVATAR} alt="" /></div>
            <h1>What would you like to know about Brian?</h1>
          </div>
        ) : (
          <div className="chat-thread" aria-live="polite">
            {messages.map((m, i) =>
              m.role === 'user' ? (
                <div key={i} className="msg-user">{m.text}</div>
              ) : (
                <div key={i} className="msg-ai">
                  <div aria-hidden="true" className="chat-avatar-sm"><img src={AVATAR} alt="" /></div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="msg-who">Brian's AI assistant <span className="ai-tag">AI</span></div>
                    <div className="msg-text">{m.text}</div>
                    {m.sources?.length > 0 && (
                      <div className="msg-src">Source: {m.sources.map((s, j) => (
                        <span key={s.href}>{j > 0 && ', '}<a href={s.href}>{s.title}</a></span>
                      ))}</div>
                    )}
                    {m.book && (
                      <div className="handoff">
                        <span>{m.notice ? 'Talk to Brian directly: 15 minutes is enough for a first conversation.' : 'Want the full story from Brian? A 15-minute intro is the fastest way.'}</span>
                        <button type="button" className="book" onClick={() => openPanel('meetings', { len: 15 })}>Book a meeting</button>
                      </div>
                    )}
                  </div>
                </div>
              )
            )}
            {busy && (
              <div className="msg-ai">
                <div aria-hidden="true" className="chat-avatar-sm"><img src={AVATAR} alt="" /></div>
                <div className="msg-typing" aria-label="The assistant is writing"><span /><span /><span /></div>
              </div>
            )}
            <div ref={endRef} />
          </div>
        )}

        <form className="composer" onSubmit={send}>
          <div className="composer-note"><span className="ai-tag ai-tag-white">AI</span>Answers come from Brian's case studies and resume. Questions are saved anonymously to improve answers.</div>
          <div className="composer-box">
            <label htmlFor="ask" className="sr-only">Ask about Brian</label>
            <input ref={inputRef} id="ask" type="text" value={input} maxLength={500} onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Brian's work, skills or experience…" autoComplete="off" />
            <div className="composer-row">
              <span>{remaining} of {DAILY_LIMIT} questions left today</span>
              <button className="send" type="submit" aria-label="Send" disabled={busy || !input.trim()}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" /></svg>
              </button>
            </div>
          </div>
          <div className="chips">
            {STARTERS.map((s) => (
              <button key={s.key} className="chip" type="button" onClick={() => pickStarter(s)}>{s.icon} {s.label}</button>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}
