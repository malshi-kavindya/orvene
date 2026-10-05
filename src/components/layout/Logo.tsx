import { Link } from "react-router-dom";

export function Logo() {
  return <Link to="/" className="logo" aria-label="Orvene home"><img src="/logo.png" alt="Orvene" className="logo-image" /></Link>;
}

