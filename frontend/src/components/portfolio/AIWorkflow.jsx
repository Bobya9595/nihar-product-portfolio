import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal, ArrowDown } from "lucide-react";
import { AI_FLOW } from "../../data/portfolio";
import { Reveal, SectionHeader } from "./shared";

const LINES = [
  { t: "$ ingest --source=inbox --type=order", c: "text-emerald-300" },
  { t: "→ document received: PO_4821.pdf", c: "text-slate-400" },
  { t: "$ ai.extract(fields=[customer, sku, qty, price])", c: "text-emerald-300" },
  { t: "→ 12 fields parsed · confidence 0.96", c: "text-slate-400" },
  { t: "$ validate --rules=pricing,address,sku_map", c: "text-emerald-300" },
  { t: "✓ validation passed · 1 exception flagged", c: "text-emerald-400" },
  { t: "$ route --exception=human_in_loop", c: "text-emerald-300" },
  { t: "→ sales_order SO-90312 created · notified", c: "text-slate-400" },
];

const useTypedLines = (active) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setCount(LINES.length); return; }
    setCount(0);
    const id = setInterval(() => setCount((c) => (c < LINES.length ? c + 1 : c)), 550);
    return () => clearInterval(id);
  }, [active]);
  return count;
};

export const AIWorkflow = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const count = useTypedLines(active);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setActive(true), { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-16 sm:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-emerald-500/[0.06] blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="AI + Automation"
          title="I Build Practical AI Systems"
          sub="A product professional who understands how AI can be applied to real business workflows — not an AI researcher, but the person who makes it work in operations."
        />
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
          {/* Terminal */}
          <Reveal>
            <div data-testid="ai-terminal-container" className="rounded-2xl border border-white/10 bg-[#0B0F16] overflow-hidden">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
                <span className="ml-3 flex items-center gap-1.5 font-mono text-xs text-slate-500">
                  <Terminal className="h-3.5 w-3.5" /> intent-to-order · pipeline
                </span>
              </div>
              <div className="p-5 font-mono text-xs sm:text-sm space-y-2 min-h-[280px]">
                {LINES.slice(0, count).map((l, i) => (
                  <motion.p key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={l.c}>
                    {l.t}
                  </motion.p>
                ))}
                {count < LINES.length && <span className="inline-block w-2 h-4 bg-emerald-400 caret align-middle" />}
              </div>
            </div>
          </Reveal>

          {/* Flow */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-[#121824]/60 p-6 h-full">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-slate-500 mb-5">data_flow</p>
              <div className="flex flex-col gap-2">
                {AI_FLOW.map((step, i) => (
                  <div key={step}>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className={`rounded-lg border px-3.5 py-2.5 text-sm ${
                        i === 5 ? "border-amber-400/30 bg-amber-500/[0.06] text-amber-200" : "border-white/10 bg-white/[0.02] text-slate-200"
                      }`}
                    >
                      {step}
                    </motion.div>
                    {i < AI_FLOW.length - 1 && (
                      <div className="flex justify-center py-0.5">
                        <ArrowDown className="h-3.5 w-3.5 text-emerald-400/60" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
