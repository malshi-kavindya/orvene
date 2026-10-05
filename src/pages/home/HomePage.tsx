import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Hero } from "../../components/home/Hero";
import { Overview } from "../../components/home/Overview";
import { Features } from "../../components/home/Features";
import { Workflow } from "../../components/home/Workflow";
import { WorkspaceSection } from "../../components/home/WorkspaceSection";
import { Architecture } from "../../components/home/Architecture";
import { UseCases } from "../../components/home/UseCases";
import { Testimonials } from "../../components/home/Testimonials";
import { Pricing } from "../../components/home/Pricing";
import { About } from "../../components/home/About";
import { Contact } from "../../components/home/Contact";

export function HomePage() { return <><Header /><main><Hero /><Overview /><Features /><Workflow /><WorkspaceSection /><Architecture /><UseCases /><Testimonials /><Pricing /><About /><Contact /></main><Footer /></>; }

