import { useEffect, useState } from 'react';
import { getConsent, setConsent, subscribe, SETTINGS_EVENT } from './consent';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [chat, setChat] = useState(false);

  useEffect(() => {
    const stored = getConsent();
    setChat(stored?.analytics === true);
    setVisible(stored === null);
  }, []);

  useEffect(() => subscribe(SETTINGS_EVENT, () => { setChat(getConsent()?.analytics === true); setVisible(true); }), []);

  if (!visible) return null;
  const decide = (analytics: boolean) => { setConsent(analytics); setVisible(false); };

  return <aside className="cookie-banner" role="dialog" aria-label="Cookie preferences"><span className="cookie-label">Cookie preferences</span><h3>Cookies, kept to the useful minimum.</h3><p>Essential cookies keep this site working, including the verification on our contact form. Analytics and live chat are entirely optional.</p><div className="cookie-options"><button type="button" className={`cookie-option ${!chat ? 'on' : ''}`} aria-pressed={!chat} onClick={() => setChat(false)}><span>Essential only</span><small>Site security &amp; form verification</small></button><button type="button" className={`cookie-option ${chat ? 'on' : ''}`} aria-pressed={chat} onClick={() => setChat(true)}><span>Analytics &amp; live chat</span><small>Lets us see what is unclear, and puts chat on this page</small></button></div><div className="cookie-actions"><button type="button" className="cookie-button ghost" onClick={() => decide(false)}>Essential only</button><button type="button" className="cookie-button" onClick={() => decide(chat)}>{chat ? 'Save choices' : 'Accept all'}</button></div></aside>;
}