import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { openCookieSettings } from "../../consent";
import { Logo } from "./Logo";

export function Footer() {
  const location = useLocation();
  const to = (hash: string) => location.pathname === "/" ? hash : `/${hash}`;
  return <footer className="footer"><div className="container footer-grid"><div><Logo /><p className="footer-copy">A structured research environment for the questions that shape what comes next.</p><p className="footer-small">Ac 2026 Orvene. Research, connected.</p></div><div><p className="footer-label">Explore</p><a href={to("#features")}>Capabilities</a><a href={to("#pricing")}>Plans</a><a href={to("#about")}>Our approach</a><Link to="/product">Product tour</Link></div><div><p className="footer-label">Resources</p><a href={to("#contact")}>Contact sales</a><a href={to("#contact")}>Documentation</a><Link to="/privacy">Privacy policy</Link><Link to="/terms">Terms</Link><button type="button" className="footer-settings" onClick={openCookieSettings}>Cookie settings</button></div><div><p className="footer-label">Connect</p><a href="mailto:hello@orvene.net">hello@orvene.net</a><a href={to("#contact")}>Request a walkthrough <ArrowUpRight size={14} /></a><div className="socials"><span>in</span><span>-Z</span><span>+-</span></div></div></div></footer>;
}

