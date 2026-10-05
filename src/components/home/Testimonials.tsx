import { ArrowRight, Quote } from "lucide-react";
import { Eyebrow } from "../shared/Eyebrow";
import { Button } from "../shared/Button";

const testimonials = [
  { quote: "Orvene replaced a trail of tabs, shared docs, and hunches with one reviewable record of how we reached each finding.", name: "Maya Chen", role: "Head of Research, Helix Materials", avatar: "/avatar-1.png", featured: true },
  { quote: "We walk into steering reviews with evidence attached, not a promise to follow up.", name: "Daniel Okafor", role: "Principal Analyst, Northbridge Capital", avatar: "/avatar-2.png" },
  { quote: "The first tool our consultants all agreed on. Every other system became a source inside it.", name: "Elena Vargas", role: "Engagement Lead, Halden & Co.", avatar: "/avatar-3.png" },
  { quote: "Onboarding a researcher used to mean weeks of archaeology. It now takes an afternoon.", name: "Tom�s Ferreira", role: "Research Program Manager, Vantage Grid", avatar: "/avatar-4.png" },
];

export function Testimonials() { return <section id="testimonials" className="testimonials section-sage"><div className="container"><div className="section-intro"><div><Eyebrow>TESTIMONIALS</Eyebrow><h2>What research teams <em>tell us.</em></h2></div><p>Evidence-first teams use Orvene to keep every question, source, and conclusion in one place.</p></div><div className="testimonial-grid">{testimonials.map(({ quote, name, role, avatar, featured }) => <figure className={`testimonial-card ${featured ? "featured" : ""}`} key={name}><Quote className="quote-mark" size={26} strokeWidth={1.2} /><blockquote>{quote}</blockquote><figcaption><img className="testimonial-avatar" src={avatar} alt={name} /><span className="testimonial-person"><strong>{name}</strong><small>{role}</small></span></figcaption></figure>)}<div className="testimonial-cta"><div><Eyebrow>YOUR TURN</Eyebrow><h3>See it on your own questions.</h3><p>Bring one live investigation. We will show you how it holds up.</p></div><Button to="/product">Explore the platform</Button></div></div><div className="testimonial-metrics">{[["1,200+", "Research projects tracked"], ["38%", "Less time hunting for context"], ["4.9 / 5", "Onboarding satisfaction"]].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></div></section>; }

