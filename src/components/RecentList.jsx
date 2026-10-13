import { useEffect, useState } from 'react';
import { load, KEYS } from '../lib/store.js';
import { PAGES } from '../data/site.js';

// Sidebar "Recent": the last 3 pages visited, newest first, excluding the
// current page. A first-time visitor sees two suggestions instead.
const SUGGESTED = ['/work/prepare', '/work'];

export default function RecentList({ path }) {
  const [items, setItems] = useState(SUGGESTED.filter((p) => p !== path));

  useEffect(() => {
    const read = () => {
      const seen = load(KEYS.recent, []).filter((p) => p !== path && PAGES[p]).slice(0, 3);
      setItems(seen.length ? seen : SUGGESTED.filter((p) => p !== path));
    };
    read();
    window.addEventListener('bj:recent', read);
    return () => window.removeEventListener('bj:recent', read);
  }, [path]);

  return (
    <div className="nav-group">
      <div className="nav-label">Recent</div>
      {items.map((p) => (
        <a key={p} className="nav-item" href={p}>
          <span aria-hidden="true">{PAGES[p].emoji}</span>
          {PAGES[p].title}
        </a>
      ))}
    </div>
  );
}
