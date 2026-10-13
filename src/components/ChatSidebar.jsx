import { useEffect, useState } from 'react';
import { load, KEYS } from '../lib/store.js';

// Sidebar in Chat mode: the assistant, "New chat", and this visitor's
// earlier conversations (stored only in their browser).
export default function ChatSidebar() {
  const [threads, setThreads] = useState([]);
  useEffect(() => {
    const read = () => setThreads(load(KEYS.chat, []));
    read();
    window.addEventListener('bj:chats', read);
    return () => window.removeEventListener('bj:chats', read);
  }, []);

  return (
    <>
      <div className="nav-label" style={{ paddingBottom: 0 }}>AI assistant</div>
      <div style={{ display: 'flex', gap: 18, padding: '0 8px' }}>
        <div className="assistant-tile">
          <div aria-hidden="true" className="chat-avatar-md"><img src="/images/assistant-avatar.jpg" alt="" /></div>
          Brian's assistant
        </div>
        <button type="button" className="assistant-tile assistant-new" onClick={() => window.dispatchEvent(new Event('bj:chat-reset'))}>
          <span aria-hidden="true" className="new-circle">+</span>
          New chat
        </button>
      </div>
      <div className="nav-group">
        <div className="nav-label">Recent chats</div>
        {threads.length === 0 ? (
          <div style={{ fontSize: 13, color: '#91918E', padding: '4px 8px' }}>Your chats with the assistant appear here. They stay in this browser.</div>
        ) : (
          threads.slice(0, 6).map((t) => (
            <button key={t.id} type="button" className="nav-item" onClick={() => window.dispatchEvent(new CustomEvent('bj:chat-load', { detail: t.id }))}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 11.5c0 4.14-3.58 7.5-8 7.5a8.6 8.6 0 0 1-3.36-.68L4 19.5l1.2-3.6A7.1 7.1 0 0 1 4 11.5C4 7.36 7.58 4 12 4s8 3.36 8 7.5z" /></svg>
              <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.title}</span>
            </button>
          ))
        )}
      </div>
    </>
  );
}
