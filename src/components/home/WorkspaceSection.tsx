import { Eyebrow } from "../shared/Eyebrow";
import { Button } from "../shared/Button";
import { WorkspaceMockup } from "../shared/WorkspaceMockup";

export function WorkspaceSection() { return <section className="workspace-section section-paper"><div className="container"><div className="workspace-section-head"><div><Eyebrow>THE WORKSPACE</Eyebrow><h2>A clear view of every<br /><em>research activity.</em></h2></div><div><p>Less time looking for context. More time making sense of it.</p><Button to="/product">Explore the product</Button></div></div><WorkspaceMockup compact /></div></section>; }

