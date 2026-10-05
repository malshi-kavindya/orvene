import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, CircleDot, Menu, X } from 'lucide-react';
import { openCookieSettings } from './consent';

const navItems = [
  { label: 'Home', href: '#home' }, { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' }, { label: 'About', href: '#about' }, { label: 'Contact', href: '#contact' },
];

const sectionIds = navItems.map((item) => item.href.slice(1));
const HEADER_OFFSET = 140;

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState('');
  useEffect(() => {
    if (!enabled) { setActive(''); return; }
    let frame = 0;
    const update = () => {
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= HEADER_OFFSET) current = id;
      }
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 4) current = sectionIds[sectionIds.length - 1];
      setActive(current);
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, [enabled]);
  return active;
}

export function RouteScroll() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);
  return null;
}

export function Logo() {
  return <Link to="/" className="logo" aria-label="Orvene home"><span className="logo-mark"><CircleDot size={17} /></span><span>orvene</span></Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const home = location.pathname === '/';
  const active = useActiveSection(home);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  useEffect(() => { setOpen(false); }, [location.pathname, location.hash]);
  const target = (hash: string) => ({ pathname: '/', hash });
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}><div className="container nav-wrap"><Logo /><nav className="desktop-nav" aria-label="Main navigation">
    {navItems.map((item) => <Link key={item.label} to={target(item.href)} className={home && active === item.href.slice(1) ? 'active' : ''}>{item.label}</Link>)}
    <Link className="nav-product" to="/product">Product <ArrowUpRight size={15} /></Link>
  </nav><button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button></div>
    {open && <nav className="mobile-nav">{navItems.map((item) => <Link key={item.label} to={target(item.href)} onClick={() => setOpen(false)}>{item.label}</Link>)}<Link to="/product" onClick={() => setOpen(false)}>Product <ArrowUpRight size={15} /></Link></nav>}
  </header>;
}

export function Footer() {
  const location = useLocation();
  const to = (hash: string) => location.pathname === '/' ? hash : `/${hash}`;
  return <footer className="footer"><div className="container footer-grid"><div><Logo /><p className="footer-copy">A structured research environment for the questions that shape what comes next.</p><p className="footer-small">© 2026 Orvene. Research, connected.</p></div><div><p className="footer-label">Explore</p><a href={to('#features')}>Capabilities</a><a href={to('#pricing')}>Plans</a><a href={to('#about')}>Our approach</a><Link to="/product">Product tour</Link></div><div><p className="footer-label">Resources</p><a href={to('#contact')}>Contact sales</a><a href={to('#contact')}>Documentation</a><Link to="/privacy">Privacy policy</Link><Link to="/terms">Terms</Link><button type="button" className="footer-settings" onClick={openCookieSettings}>Cookie settings</button></div><div><p className="footer-label">Connect</p><a href="mailto:hello@orvene.net">hello@orvene.net</a><a href={to('#contact')}>Request a walkthrough <ArrowUpRight size={14} /></a><div className="socials"><span>in</span><span>◎</span><span>↗</span></div></div></div></footer>;
}