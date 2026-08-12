import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronDown } from "lucide-react";
import { EXPERIENCE } from "../../data/portfolio";
import { Reveal, SectionHeader } from "./shared";

export const Experience = () => {
  const [open, setOpen] = useState(0);
  return (
    <section id="experience" className="relative py-16 sm:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10 grid-bg grid-fade opacity-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Career" title="Experience" sub="An interactive timeline of roles where I turned operations into products and automation." />

        <div data-testid="experience-timeline" className="relative pl-6 sm:pl-8">
          <div className="absolute left-[9px] sm:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald-400/60 via-white/10 to-transparent" />
          <div className="space-y-5">
            {EXPERIENCE.map((exp, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="relative">
                    <span className={`absolute -left-6 sm:-left-8 top-5 h-3.5 w-3.5 rounded-full border-2 transition-colors ${isOpen ? "border-emerald-400 bg-emerald-400/30" : "border-white/25 bg-[#0A0D12]"}`} />
                    <button
                      data-testid={`experience-item-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className={`group w-full text-left rounded-2xl border px-5 sm:px-7 py-5 transition-all duration-300 ${
                        isOpen ? "border-emerald-400/40 bg-[#161E2E] emerald-glow" : "border-white/10 bg-[#121824]/60 hover:border-white/25 hover:-translate-y-0.5"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-emerald-300">{exp.tag}</span>
                          <h3 className="mt-2 text-lg sm:text-xl font-display font-bold text-white">{exp.role}</h3>
                          <p className="text-sm text-slate-300 mt-0.5">{exp.company}</p>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-slate-500">
                            <span className="font-mono text-emerald-300/80">{exp.period}</span>
                            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {exp.location}</span>
                          </div>
                        </div>
                        <ChevronDown className={`h-5 w-5 text-slate-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-emerald-400" : ""}`} />
                      </div>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35 }}
                            className="overflow-hidden mt-5 space-y-3"
                          >
                            {exp.highlights.map((h, j) => (
                              <li key={j} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400/70 shrink-0" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
