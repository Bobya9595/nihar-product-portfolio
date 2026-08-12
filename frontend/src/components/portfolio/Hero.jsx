import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Mail, MapPin, Hammer } from "lucide-react";
import { PROFILE, THINKING_NODES } from "../../data/portfolio";
import { Reveal } from "./shared";

const ProductThinkingSystem = () => {
  const [hovered, setHovered] = useState(null);
  const [auto, setAuto] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || hovered) return;
    const id = setInterval(() => setAuto((a) => (a + 1) % THINKING_NODES.length), 2200);
    return () => clearInterval(id);
  }, [hovered]);

  const active = hovered || THINKING_NODES[auto].id;
  const activeIndex = THINKING_NODES.findIndex((n) => n.id === active);
  return (
    <div
      className="relative rounded-2xl border border-white/10 bg-[#121824]/60 p-6 sm:p-8"
      role="region"
      aria-label="Product Thinking System"
    >
      <div className="absolute -inset-px rounded-2xl pointer-events-none emerald-glow opacity-40" />
      <div className="relative flex items-center justify-between mb-6">
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-slate-500">
          product_thinking.system
        </span>
        <span className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/60" />
        </span>
      </div>

      <div className="relative flex flex-col gap-2.5">
        {THINKING_NODES.map((node, i) => (
          <div key={node.id} className="relative">
            <motion.button
              data-testid={`product-thinking-node-${node.id}`}
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(node.id)}
              onBlur={() => setHovered(null)}
              onClick={() => setHovered((a) => (a === node.id ? null : node.id))}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group w-full flex items-center gap-4 rounded-xl border px-4 py-3 text-left transition-all duration-300 ${
                active === node.id
                  ? "border-emerald-400/50 bg-emerald-500/[0.07] emerald-glow"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <span
                className={`font-mono text-xs w-6 h-6 shrink-0 rounded-md grid place-items-center border transition-colors ${
                  active === node.id
                    ? "border-emerald-400/60 text-emerald-300"
                    : "border-white/10 text-slate-500"
                }`}
              >
                {i + 1}
              </span>
              <span className="font-display font-semibold text-white text-sm sm:text-base flex-1 uppercase tracking-wide">
                {node.label}
              </span>
              <span
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  active === node.id ? "bg-emerald-400 pulse-dot" : "bg-white/15"
                }`}
              />
            </motion.button>

            {active === node.id && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="overflow-hidden px-4 pt-2 text-xs sm:text-sm text-slate-400 leading-relaxed"
              >
                {node.desc}
              </motion.p>
            )}

            {i < THINKING_NODES.length - 1 && (
              <div className="flex justify-start pl-[26px] py-0.5">
                <svg width="2" height="14" className="overflow-visible">
                  <line
                    x1="1" y1="0" x2="1" y2="14"
                    stroke={i === activeIndex ? "#10B981" : "rgba(255,255,255,0.12)"}
                    strokeWidth="2"
                    className={i === activeIndex ? "flow-line" : ""}
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="relative mt-6 text-xs text-slate-500 leading-relaxed">
        Hover a stage to see how I move a problem from insight to measurable impact.
      </p>
    </div>
  );
};

export const Hero = () => {
  return (
    <section id="home" data-testid="hero-section" className="relative pt-24 sm:pt-28 pb-20 sm:pb-28 overflow-hidden">
      {/* background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg grid-fade" />
        <div className="absolute top-0 left-1/4 h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="absolute top-40 right-0 h-[420px] w-[420px] rounded-full bg-violet-500/[0.07] blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-start">
          {/* Left */}
          <div>
            <Reveal>
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/5 px-3 sm:px-3.5 py-1.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 pulse-dot" />
                <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.22em] uppercase text-emerald-300">
                  {PROFILE.eyebrow}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1
                data-testid="hero-headline"
                className="mt-6 hero-headline font-extrabold tracking-tight text-white"
              >
                {PROFILE.heroLine[0]}{" "}
                <span className="text-gradient-emerald">{PROFILE.heroLine[1]}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-slate-400">
                {PROFILE.heroSupport}
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-300">
                <span className="font-medium text-white">{PROFILE.title}</span>
                <span className="h-1 w-1 rounded-full bg-slate-600" />
                <span className="text-slate-400">{PROFILE.company}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] tracking-wide text-emerald-300">
                  {PROFILE.experienceBadge}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.19}>
              <div className="mt-4 inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#121824]/60 px-3.5 py-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 pulse-dot" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-slate-500">Currently Building</span>
                <span className="text-xs sm:text-sm text-slate-300">{PROFILE.currentlyBuilding}</span>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
                <button
                  data-testid="hero-cta-primary"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#04160f] px-5 py-3 text-sm font-semibold transition-colors"
                >
                  Explore My Work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  data-testid="hero-cta-resume"
                  href={PROFILE.resume}
                  download
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/15 hover:border-white/30 bg-white/[0.03] hover:bg-white/[0.06] text-white px-5 py-3 text-sm font-semibold transition-colors"
                >
                  Download Resume
                  <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-3">
                  <a data-testid="hero-linkedin" href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-emerald-400/40 transition-colors">
                    <Linkedin className="h-4.5 w-4.5 h-5 w-5" />
                  </a>
                  <a data-testid="hero-email" href={`mailto:${PROFILE.email}`} className="h-10 w-10 grid place-items-center rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-emerald-400/40 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="h-3.5 w-3.5" /> {PROFILE.location}
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/5 px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 pulse-dot" />
                  <span className="text-xs font-medium text-emerald-300">Open to Product & AI Opportunities</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: portrait + system */}
          <div className="flex flex-col gap-6">
            <Reveal delay={0.1} className="relative mx-auto lg:mx-0">
              <div className="relative w-60 h-[19rem] sm:w-72 sm:h-[22rem] group float-soft">
                <div className="absolute -inset-4 rounded-3xl bg-emerald-500/25 blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 ring-1 ring-emerald-400/20 transition-transform duration-500 group-hover:-translate-y-1">
                  <img
                    src={PROFILE.photo}
                    alt={`${PROFILE.name} portrait`}
                    width={640}
                    height={640}
                    className="h-full w-full object-cover object-top"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl glass border border-white/10 px-3 py-2">
                    <p className="text-sm font-semibold text-white leading-tight">{PROFILE.name}</p>
                    <p className="text-[11px] text-emerald-300">{PROFILE.title}</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <ProductThinkingSystem />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
