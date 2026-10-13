import { useEffect, useState } from 'react';
import { load, save, KEYS, openPanel, navigate } from '../lib/store.js';
import { PAGES } from '../data/site.js';

// Recent and the tab bar share one memory: the pages this visitor opened,
// newest first, kept only in their browser (up to 10).
export function recordVisit(path) {
  const list = [path, ...load(KEYS.recent, []).filter((p) => p !== path && PAGES[p])].slice(0, 10);
  save(KEYS.recent, list);
  return list;
}

export function forget(path) {
  const list = load(KEYS.recent, []).filter((p) => p !== path);
  save(KEYS.recent, list);
  window.dispatchEvent(new Event('bj:recent'));
  return list;
}

// Tab bar: the current page as the active tab plus up to 3 recent pages.
export default function TabStrip({ path }) {
  const [others, setOthers] = useState([]);

  useEffect(() => {
    const list = recordVisit(path);
    setOthers(list.filter((p) => p !== path).slice(0, 3));
    window.dispatchEvent(new Event('bj:recent'));
  }, [path]);

  function close(e, p) {
    e.preventDefault();
    e.stopPropagation();
    const list = forget(p);
    if (p === path) {
      navigate(list.find((x) => x !== path) || '/');
    } else {
      setOthers(list.filter((x) => x !== path).slice(0, 3));
    }
  }

  const tabs = [path, ...others];
  return (
    <div className="tabs">
      {tabs.map((p) => {
        const page = PAGES[p];
        const active = p === path;
        return (
          <div key={p} className={active ? 'tab-on' : 'tab-off'}>
            {active ? (
              <span className="tab-label">
                <span aria-hidden="true">{page.emoji}</span>
                <span className="tab-title">{page.title}</span>
              </span>
            ) : (
              <a className="tab-link" href={p}>
                <span aria-hidden="true">{page.emoji}</span>
                <span className="tab-title">{page.title}</span>
              </a>
            )}
            <button className="tab-close" type="button" aria-label={`Close ${page.title} tab`} onClick={(e) => close(e, p)}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
            </button>
          </div>
        );
      })}
      <button className="chrome-btn new-tab" type="button" aria-label="New tab: search the site" onClick={() => openPanel('search')}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
      </button>
    </div>
  );
}
