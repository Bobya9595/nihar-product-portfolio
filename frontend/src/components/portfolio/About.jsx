import { useState } from "react";
import { GraduationCap, Sparkles } from "lucide-react";
import { PROFILE, CAPABILITIES, EDUCATION } from "../../data/portfolio";
import { Reveal, SectionHeader } from "./shared";

const CapabilityMap = () => {
  const [hover, setHover] = useState("product");
  const active = CAPABILITIES.find((c) => c.id === hover) || CAPABILITIES[1];
  return (
    <div className="rounded-2xl border border-white/10 bg-[#121824]/60 p-6 sm:p-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {CAPABILITIES.map((c) => (
          <button
            key={c.id}
            data-testid={`capability-${c.id}`}
            onMouseEnter={() => setHover(c.id)}
            onFocus={() => setHover(c.id)}
            onClick={() => setHover(c.id)}
            className={`rounded-xl border px-4 py-4 text-left transition-all duration-300 ${
              hover === c.id
                ? "border-emerald-400/50 bg-emerald-500/[0.08] emerald-glow"
                : "border-white/10 bg-white/[0.02] hover:border-white/25"
            } ${c.id === "ai" ? "col-span-2 sm:col-span-1" : ""}`}
          >
            <span className={`font-display font-semibold text-sm ${hover === c.id ? "text-emerald-300" : "text-white"}`}>
              {c.label}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-5 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4">
        <Sparkles className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
        <p className="text-sm text-slate-300 leading-relaxed">
          <span className="font-semibold text-white">{active.label}:</span> {active.desc}
        </p>
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <section id="about" className="relative py-16 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About"
          title="Product Thinker. Technology Builder."
        />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <Reveal>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {PROFILE.summary}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 text-sm sm:text-base text-slate-400 leading-relaxed">
                I work at the intersection of <span className="text-white font-medium">business, product, technology, data and AI</span> — connecting operational problems to practical automation. My focus is turning messy, manual workflows into reliable products that teams can trust.
              </p>
            </Reveal>

            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-4 w-4 text-emerald-400" />
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-slate-500">Education</span>
              </div>
              <div className="space-y-3">
                {EDUCATION.map((e, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5">
                      <div>
                        <p className="text-sm font-semibold text-white">{e.degree}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{e.school}</p>
                      </div>
                      <span className="font-mono text-xs text-emerald-300 whitespace-nowrap">{e.period}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <Reveal delay={0.1}>
            <CapabilityMap />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
