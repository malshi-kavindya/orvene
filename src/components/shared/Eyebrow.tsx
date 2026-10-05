export function Eyebrow({ children, light = false }: { children: string; light?: boolean }) { return <p className={`eyebrow ${light ? "light" : ""}`}><span className="eyebrow-line" />{children}</p>; }

