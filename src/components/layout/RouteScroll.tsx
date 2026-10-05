import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function RouteScroll() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);
  return null;
}

