import { useEffect, useRef, useState } from "react";

export const CursorGlow = () => {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    const move = (e) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
      }
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  if (!enabled) return null;
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[5] h-[500px] w-[500px] rounded-full opacity-60 will-change-transform"
      style={{ background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 60%)" }}
    />
  );
};
