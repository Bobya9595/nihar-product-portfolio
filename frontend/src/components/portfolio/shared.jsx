import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 24, className = "", ...props }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const SectionHeader = ({ eyebrow, title, sub }) => (
  <div className="max-w-2xl mb-12 sm:mb-16">
    {eyebrow && (
      <Reveal>
        <span className="font-mono text-xs tracking-[0.25em] uppercase text-emerald-400">
          {eyebrow}
        </span>
      </Reveal>
    )}
    <Reveal delay={0.05}>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.05]">
        {title}
      </h2>
    </Reveal>
    {sub && (
      <Reveal delay={0.1}>
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400">{sub}</p>
      </Reveal>
    )}
  </div>
);
