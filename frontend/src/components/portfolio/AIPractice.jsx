import { Compass, Bot, Braces, Workflow, Zap, FlaskConical } from "lucide-react";
import { Reveal, SectionHeader } from "./shared";

const CARDS = [
  { icon: Compass, title: "AI Product Management", desc: "Identifying where models genuinely outperform rules, defining evaluation criteria, and designing for trust, validation, fallback and human override." },
  { icon: Bot, title: "Claude Code & AI Agents", desc: "Building and orchestrating agentic workflows and using AI-assisted development to rapidly turn validated ideas into working prototypes." },
  { icon: Braces, title: "LLMs & Prompt Engineering", desc: "Structured prompting, tool use, context engineering, and grounding model outputs in domain data for reliable business workflows." },
  { icon: Workflow, title: "MCP & Workflow Automation", desc: "Connecting AI models with real systems, tools and workflows — moving from demos to reliable automation." },
  { icon: Zap, title: "Rapid Prototyping", desc: "Using AI-assisted development to prototype concepts quickly, validate assumptions and reduce unnecessary engineering cycles." },
  { icon: FlaskConical, title: "Future AI Experiments", desc: "Exploring AI-assisted planning, intelligent monitoring, exception detection, natural-language constraints and autonomous workflow agents.", exploratory: true },
];

export const AIPractice = () => (
  <section id="ai-practice" data-testid="ai-practice-section" className="relative py-16 sm:py-28 lg:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="AI Practice"
        title="AI, in production terms"
        sub="How I apply AI to real products, workflows and business problems."
      />
      <Reveal>
        <p className="max-w-2xl -mt-6 mb-12 sm:mb-14 text-sm sm:text-base text-slate-400 leading-relaxed">
          I treat AI as a product material — something shaped around a business decision, not a feature bolted on.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
        {CARDS.map((c, i) => {
          const Icon = c.icon;
          return (
            <Reveal key={c.title} delay={(i % 2) * 0.08}>
              <div
                data-testid={`ai-practice-card-${i}`}
                className="group h-full rounded-2xl border border-white/10 bg-[#121824]/60 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-[#161E2E]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-11 w-11 grid place-items-center rounded-xl border border-white/10 text-slate-400 transition-colors group-hover:border-emerald-400/40 group-hover:text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display font-semibold text-white text-base leading-snug">{c.title}</h3>
                  {c.exploratory && (
                    <span className="ml-auto rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] tracking-wide uppercase text-slate-500">
                      Exploratory
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
