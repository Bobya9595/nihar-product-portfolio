import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV, PROFILE } from "../../data/portfolio";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map((n) => n.toLowerCase());
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const label = NAV.find((n) => n.toLowerCase() === e.target.id);
            if (label) setActive(label);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (label) => {
    setOpen(false);
    document.getElementById(label.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        data-testid="navbar"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 py-3 transition-all duration-500 ${
              scrolled ? "glass border border-white/10 shadow-2xl shadow-black/40" : "border border-transparent"
            }`}
          >
            <button
              data-testid="nav-logo"
              onClick={() => go("Home")}
              className="flex items-center gap-2 group"
            >
              <span className="font-display text-lg font-extrabold tracking-tight text-white">
                {PROFILE.firstName.toUpperCase()}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" />
            </button>

            <div className="hidden md:flex items-center gap-1">
              {NAV.map((n) => (
                <button
                  key={n}
                  data-testid={`nav-link-${n.toLowerCase()}`}
                  onClick={() => go(n)}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active === n ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {active === n && (
                    <span className="absolute inset-0 rounded-lg bg-white/5 border border-white/10" />
                  )}
                  <span className="relative">{n}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a
                data-testid="nav-resume-button"
                href={PROFILE.resume}
                download
                className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#04160f] px-4 py-2 text-sm font-semibold transition-colors"
              >
                Resume <ArrowUpRight className="h-4 w-4" />
              </a>
              <button
                data-testid="mobile-menu-toggle"
                onClick={() => setOpen((o) => !o)}
                className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-white"
                aria-label="Toggle menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        data-testid="mobile-menu"
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[#0A0D12]/90 backdrop-blur-xl" onClick={() => setOpen(false)} />
        <div className="relative pt-28 px-6 flex flex-col gap-2">
          {NAV.map((n, i) => (
            <button
              key={n}
              data-testid={`mobile-nav-link-${n.toLowerCase()}`}
              onClick={() => go(n)}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              className={`text-left text-2xl font-display font-semibold py-3 border-b border-white/5 transition-all duration-300 ${
                open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              } ${active === n ? "text-emerald-400" : "text-white"}`}
            >
              {n}
            </button>
          ))}
          <a
            href={PROFILE.resume}
            download
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 text-[#04160f] px-5 py-4 text-base font-semibold"
          >
            Download Resume <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </>
  );
};
