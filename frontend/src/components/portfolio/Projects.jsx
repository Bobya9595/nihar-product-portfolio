import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ArrowRight, ExternalLink } from "lucide-react";
import { PROJECTS } from "../../data/portfolio";
import { Reveal, SectionHeader } from "./shared";

const FlowStrip = ({ steps, compact }) => (
  <div className="flex flex-wrap items-center gap-1.5">
    {steps.map((s, i) => (
      <div key={i} className="flex items-center gap-1.5">
        <span className={`rounded-md border border-white/10 bg-white/[0.03] font-mono ${compact ? "text-[10px] px-1.5 py-0.5" : "text-[11px] px-2 py-1"} text-slate-300`}>
          {s}
        </span>
        {i < steps.length - 1 && <ArrowRight className="h-3 w-3 text-emerald-400/60" />}
      </div>
    ))}
  </div>
);

const CaseStudyModal = ({ project, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const s = project.study;
  const rows = [
    ["Problem", s.problem], ["Context", s.context], ["My Role", s.role],
    ["Approach", s.approach], ["Solution", s.solution], ["Product Thinking", s.thinking],
    ["Outcome", s.outcome], ["Key Learning", s.learning],
  ];

  return (
    <motion.div
      data-testid="case-study-modal"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />
      <motion.div
        initial={{ y: 40, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ type: "spring", damping: 26, stiffness: 260 }}
        className="relative w-full sm:max-w-3xl max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl border border-white/10 bg-[#0F141E]"
      >
        <div className="sticky top-0 z-10 glass border-b border-white/10 px-6 sm:px-8 py-5 flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-emerald-300">{project.company}</span>
            <h3 className="mt-1 text-xl sm:text-2xl font-display font-bold text-white">{project.title}</h3>
          </div>
          <button data-testid="modal-close-button" onClick={onClose} className="h-9 w-9 grid place-items-center rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-colors">
            <X className="h-4.5 w-4.5 h-5 w-5" />
          </button>
        </div>

        <div className="px-6 sm:px-8 py-6">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 mb-6 overflow-x-auto">
            <FlowStrip steps={project.flow} />
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((t) => (
              <span key={t} className="rounded-full border border-emerald-400/25 bg-emerald-500/[0.07] px-2.5 py-1 text-xs text-emerald-300">{t}</span>
            ))}
          </div>
          {project.link && (
            <a
              data-testid="modal-live-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group mb-6 inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#04160f] px-5 py-3 text-sm font-semibold transition-colors"
            >
              View Live Project
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
          <div className="space-y-5">
            {rows.map(([label, val]) => (
              <div key={label}>
                <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-slate-500 mb-1.5">{label}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{val}</p>
              </div>
            ))}
            <div>
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-slate-500 mb-2">Technology</p>
              <div className="flex flex-wrap gap-2">
                {s.technology.map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300 font-mono">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Projects = () => {
  const [selected, setSelected] = useState(null);
  return (
    <section id="projects" className="relative py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Selected Work" title="Things I've Built" sub="Turning operational problems into scalable products and automation." />

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.08} className={p.featured ? "md:col-span-2" : ""}>
              <button
                data-testid={`project-card-${p.id}`}
                onClick={() => setSelected(p)}
                className="group relative h-full w-full text-left rounded-2xl border border-white/10 bg-[#121824]/60 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-[#161E2E] overflow-hidden"
              >
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-emerald-300">{p.company}</span>
                    {p.featured && (
                      <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] tracking-wide uppercase text-emerald-300">Featured</span>
                    )}
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate-500 transition-all group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="relative text-lg sm:text-xl font-display font-bold text-white leading-snug">{p.title}</h3>
                <p className="relative mt-2.5 text-sm text-slate-400 leading-relaxed">{p.blurb}</p>
                <div className="relative mt-5">
                  <FlowStrip steps={p.flow.slice(0, 4)} compact />
                </div>
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-300 transition-colors group-hover:border-emerald-400/30 group-hover:text-emerald-200">{t}</span>
                  ))}
                </div>
                <div className="relative mt-5 flex flex-wrap items-center gap-4">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400">
                    Read case study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  {p.link && (
                    <span
                      role="link"
                      tabIndex={0}
                      data-testid={`card-live-link-${p.id}`}
                      onClick={(e) => { e.stopPropagation(); window.open(p.link, "_blank", "noopener"); }}
                      onKeyDown={(e) => { if (e.key === "Enter") { e.stopPropagation(); window.open(p.link, "_blank", "noopener"); } }}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                    >
                      View Live Project
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  )}
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <CaseStudyModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};
