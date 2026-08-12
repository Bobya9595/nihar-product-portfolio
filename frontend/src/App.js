import "@/App.css";
import { Suspense, lazy } from "react";
import { Toaster } from "sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { CursorGlow } from "@/components/portfolio/CursorGlow";

// Below-the-fold sections are code-split to keep the initial mobile payload small.
const About = lazy(() => import("@/components/portfolio/About").then((m) => ({ default: m.About })));
const Experience = lazy(() => import("@/components/portfolio/Experience").then((m) => ({ default: m.Experience })));
const Projects = lazy(() => import("@/components/portfolio/Projects").then((m) => ({ default: m.Projects })));
const Process = lazy(() => import("@/components/portfolio/Process").then((m) => ({ default: m.Process })));
const AIWorkflow = lazy(() => import("@/components/portfolio/AIWorkflow").then((m) => ({ default: m.AIWorkflow })));
const Skills = lazy(() => import("@/components/portfolio/Skills").then((m) => ({ default: m.Skills })));
const Contact = lazy(() => import("@/components/portfolio/Contact").then((m) => ({ default: m.Contact })));

const SectionFallback = () => <div className="min-h-[40vh]" aria-hidden />;

function App() {
  return (
    <div className="relative min-h-screen bg-[#0A0D12] text-slate-200 antialiased">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Experience />
          <Projects />
          <Process />
          <AIWorkflow />
          <Skills />
          <Contact />
        </Suspense>
      </main>
      <Toaster theme="dark" position="bottom-right" richColors />
    </div>
  );
}

export default App;
