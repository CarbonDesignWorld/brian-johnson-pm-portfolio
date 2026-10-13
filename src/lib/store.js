// Small helpers around localStorage. Everything degrades gracefully when
// storage is blocked (private mode, strict browsers): the site still works,
// it just doesn't remember tabs, recent pages or read notes.

export function load(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function save(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable */
  }
}

export const KEYS = {
  tabs: 'bj:tabs',
  recent: 'bj:recent',
  read: 'bj:inbox-read',
  chat: 'bj:chat',
  visitor: 'bj:visitor',
};

// Opens a panel from anywhere: openPanel('meetings', { len: 30 })
export function openPanel(panel, detail = {}) {
  window.dispatchEvent(new CustomEvent('bj:open', { detail: { panel, ...detail } }));
}

// Page navigation from code. A preview build can override window.__bjGo.
export function navigate(path) {
  if (typeof window !== 'undefined' && window.__bjGo) window.__bjGo(path);
  else window.location.href = path;
}
