import { useState } from "react";
import { Boxes, Brain, LineChart, Workflow, Package } from "lucide-react";
import { SKILLS, IMPACT } from "../../data/portfolio";
import { Reveal, SectionHeader } from "./shared";

const ICONS = {
  Product: Boxes,
  "AI & Gen-AI": Brain,
  Analytics: LineChart,
  Execution: Workflow,
  Domain: Package,
};

export const Skills = () => {
  const [activeGroup, setActiveGroup] = useState("Product");
  return (
    <section id="skills" className="relative py-16 sm:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10 grid-bg grid-fade opacity-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Toolkit" title="Skills & Capabilities" sub="Clusters spanning product, data, AI, execution and domain expertise." />

        <div data-testid="skills-cluster-section" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SKILLS.map((cluster, i) => {
            const Icon = ICONS[cluster.group] || Boxes;
            const active = activeGroup === cluster.group;
            return (
              <Reveal key={cluster.group} delay={i * 0.06}>
                <div
                  data-testid={`skill-cluster-${i}`}
                  onMouseEnter={() => setActiveGroup(cluster.group)}
                  className={`h-full rounded-2xl border p-5 transition-all duration-300 ${
                    active ? "border-emerald-400/40 bg-[#161E2E] emerald-glow" : "border-white/10 bg-[#121824]/60 hover:border-white/25"
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className={`h-9 w-9 grid place-items-center rounded-lg border ${active ? "border-emerald-400/40 text-emerald-300" : "border-white/10 text-slate-400"}`}>
                      <Icon className="h-4.5 w-4.5 h-5 w-5" />
                    </span>
                    <h3 className="font-display font-semibold text-white text-sm">{cluster.group}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cluster.items.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300 transition-colors hover:border-emerald-400/40 hover:text-emerald-200 hover:-translate-y-0.5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Impact */}
        <div className="mt-20">
          <SectionHeader eyebrow="Results" title="From Problem → Impact" sub="Real operational problems, analysed and solved. Every metric is from my own work." />
          <div className="grid md:grid-cols-3 gap-5">
            {IMPACT.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-[#121824]/60 p-6 transition-all duration-300 hover:border-emerald-400/40 hover:-translate-y-1">
                  {[["Problem", item.problem], ["Analysis", item.analysis], ["Solution", item.solution]].map(([l, v], j) => (
                    <div key={l} className="pb-3 mb-3 border-b border-white/5">
                      <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-500 mb-1">{l}</p>
                      <p className="text-sm text-slate-300 leading-snug">{v}</p>
                    </div>
                  ))}
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-emerald-400 mb-1">Impact</p>
                    <p className="text-sm font-semibold text-white leading-snug">{item.result}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
