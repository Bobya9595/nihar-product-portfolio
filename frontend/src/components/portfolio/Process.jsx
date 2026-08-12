import { PROCESS } from "../../data/portfolio";
import { Reveal, SectionHeader } from "./shared";

export const Process = () => (
  <section className="relative py-20 sm:py-28 lg:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Method" title="How I Turn Problems Into Products" />
      <div className="relative">
        <div className="hidden lg:block absolute top-[42px] left-0 right-0 h-px">
          <svg width="100%" height="2" className="overflow-visible">
            <line x1="0" y1="1" x2="100%" y2="1" stroke="rgba(16,185,129,0.35)" strokeWidth="2" strokeDasharray="6 6" className="flow-line" />
          </svg>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <div className="group relative rounded-2xl border border-white/10 bg-[#121824]/60 p-5 sm:p-6 h-full transition-all duration-300 hover:border-emerald-400/40 hover:-translate-y-1">
                <div className="relative z-10 h-11 w-11 grid place-items-center rounded-xl border border-emerald-400/30 bg-[#0A0D12] font-mono text-sm font-semibold text-emerald-300 group-hover:emerald-glow transition-shadow">
                  {p.n}
                </div>
                <h3 className="mt-4 font-display font-bold text-white text-base">{p.title}</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
