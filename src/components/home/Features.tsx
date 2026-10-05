import { ArrowRight, ArrowUpRight, FileSearch, FolderKanban, Network, ShieldCheck, LockKeyhole } from "lucide-react";
import { Eyebrow } from "../shared/Eyebrow";

const photos = {
  notes: "https://images.pexels.com/photos/8085931/pexels-photo-8085931.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
};

const features = [
  { icon: FolderKanban, no: "01", title: "Research registry", text: "Keep every question, owner, priority, and deadline in view.", wide: true },
  { icon: FileSearch, no: "02", title: "Source management", text: "Register references, understand their status, and connect them to evidence." },
  { icon: Network, no: "03", title: "Discovery workspace", text: "Move from scattered notes to a living map of related ideas." },
  { icon: ShieldCheck, no: "04", title: "Findings & validation", text: "Make insights reviewable, supportable, and ready to act on." },
  { icon: LockKeyhole, no: "05", title: "Governance & access", text: "Clear ownership, permissions, and a history you can trust." },
];
export function Features() { return <section id="features" className="features section-paper"><div className="container"><div className="section-intro"><div><Eyebrow>THE PLATFORM</Eyebrow><h2>Everything your research workflow <em>needs.</em></h2></div><p>From the first question to the final finding, Orvene gives research a place to take shape �?" and a thread to follow.</p></div><div className="feature-grid">{features.map(({ icon: Icon, no, title, text, wide }) => <article className={`feature-card ${wide ? "wide" : ""}`} key={title}><div className="feature-top"><span className="feature-no">{no}</span><Icon size={21} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="feature-arrow" size={17} /></article>)}<article className="feature-card photo-card"><img src={photos.notes} alt="Research notes and a laptop on a desk" /><div className="photo-overlay"><span>Capture the context</span><ArrowUpRight size={17} /></div></article></div></div></section>; }

