import "@/App.css";
import { Toaster } from "sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Process } from "@/components/portfolio/Process";
import { AIWorkflow } from "@/components/portfolio/AIWorkflow";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { CursorGlow } from "@/components/portfolio/CursorGlow";

function App() {
  return (
    <div className="relative min-h-screen bg-[#0A0D12] text-slate-200 antialiased">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Process />
        <AIWorkflow />
        <Skills />
        <Contact />
      </main>
      <Toaster theme="dark" position="bottom-right" richColors />
    </div>
  );
}

export default App;
