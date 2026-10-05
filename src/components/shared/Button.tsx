import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function Button({ children, to, href, light = false }: { children: React.ReactNode; to?: string; href?: string; light?: boolean }) { const content = <>{children}<ArrowRight size={16} /></>; return to ? <Link className={`button ${light ? "button-light" : ""}`} to={to}>{content}</Link> : <a className={`button ${light ? "button-light" : ""}`} href={href}>{content}</a>; }

