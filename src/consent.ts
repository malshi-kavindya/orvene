const STORAGE_KEY = 'orvene.consent';
const MAX_AGE_DAYS = 180;
const DAY = 86400000;

export const CONSENT_EVENT = 'orvene:consent';
export const SETTINGS_EVENT = 'orvene:cookie-settings';

export type Consent = { analytics: boolean; savedAt: number };

function read(): Consent | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored) as Partial<Consent>;
    if (typeof parsed.analytics !== 'boolean' || typeof parsed.savedAt !== 'number') return null;
    if (Date.now() - parsed.savedAt > MAX_AGE_DAYS * DAY) { localStorage.removeItem(STORAGE_KEY); return null; }
    return { analytics: parsed.analytics, savedAt: parsed.savedAt };
  } catch { return null; }
}

export function getConsent(): Consent | null { return typeof window === 'undefined' ? null : read(); }

export function setConsent(analytics: boolean) {
  const next: Consent = { analytics, savedAt: Date.now() };
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* storage unavailable */ }
  window.dispatchEvent(new CustomEvent<Consent>(CONSENT_EVENT, { detail: next }));
}

export function openCookieSettings() { window.dispatchEvent(new CustomEvent(SETTINGS_EVENT)); }

export function subscribe<T>(event: string, handler: (detail: T) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<T>).detail);
  window.addEventListener(event, listener);
  return () => window.removeEventListener(event, listener);
}