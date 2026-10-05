import { useEffect } from 'react';
import { getConsent, subscribe, CONSENT_EVENT, type Consent } from './consent';

const TAWK_SRC = 'https://embed.tawk.to/6abf758bb3f0aa3446b433cb/1k3tu6aqm';

type TawkWindow = Window & { Tawk_API?: Record<string, unknown>; Tawk_LoadStart?: Date };

function loadTawk() {
  if (document.querySelector(`script[src="${TAWK_SRC}"]`)) return;
  const tawk = window as TawkWindow;
  tawk.Tawk_API = tawk.Tawk_API || {};
  tawk.Tawk_LoadStart = new Date();
  const script = document.createElement('script');
  script.async = true;
  script.src = TAWK_SRC;
  script.charset = 'UTF-8';
  script.setAttribute('crossorigin', '*');
  const anchor = document.getElementsByTagName('script')[0];
  anchor?.parentNode?.insertBefore(script, anchor);
}

export function useTawkTo() {
  useEffect(() => {
    if (getConsent()?.analytics === true) loadTawk();
    return subscribe<Consent>(CONSENT_EVENT, (consent) => { if (consent?.analytics === true) loadTawk(); });
  }, []);
}