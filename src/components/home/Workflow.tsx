import { Eyebrow } from "../shared/Eyebrow";

const photos = {
  network: "https://images.pexels.com/photos/14314638/pexels-photo-14314638.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
};
export function Workflow() { const steps = ["Frame the question", "Collect the signal", "Connect the evidence", "Validate the finding", "Preserve the history"]; return <section className="workflow section-dark"><div className="container"><div className="section-intro dark-intro"><div><Eyebrow light>THE WORKFLOW</Eyebrow><h2>From research question<br />to <em>verified finding.</em></h2></div><p>A clear path through the work, without flattening the complexity that makes research valuable.</p></div><div className="workflow-line">{steps.map((step, i) => <div className="workflow-step" key={step}><span>{String(i + 1).padStart(2, "0")}</span><i className={i < steps.length - 1 ? "has-line" : ""} /><strong>{step}</strong><small>{["Create a focused space", "Sources with context", "Notes become relationships", "Review with confidence", "A record that compounds"][i]}</small></div>)}</div><div className="workflow-image"><img src={photos.network} alt="Abstract interconnected digital spheres" /><div className="workflow-image-label"><span>Evidence graph / 04</span><strong>Relationships reveal<br />what search misses.</strong></div></div></div></section>; }

