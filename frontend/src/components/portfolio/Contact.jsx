import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Download, Mail, Linkedin, ArrowRight, Loader2, MapPin, Phone } from "lucide-react";
import { PROFILE, NAV } from "../../data/portfolio";
import { Reveal, SectionHeader } from "./shared";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent — I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please email me directly.");
    } finally {
      setLoading(false);
    }
  };

  const field = (k) => ({
    value: form[k],
    onChange: (e) => setForm((f) => ({ ...f, [k]: e.target.value })),
  });

  return (
    <>
      {/* Resume CTA */}
      <section className="relative py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121824] px-6 sm:px-12 py-12 sm:py-16 text-center">
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-emerald-500/12 blur-[110px]" />
              <h2 className="relative text-2xl sm:text-4xl font-display font-extrabold text-white">Want the full story?</h2>
              <p className="relative mt-3 text-sm sm:text-base text-slate-400 max-w-lg mx-auto">
                Explore my experience, projects and product journey in one page.
              </p>
              <a
                data-testid="resume-download-button"
                href={PROFILE.resume}
                download
                className="relative mt-7 group inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#04160f] px-6 py-3.5 text-sm font-semibold transition-colors"
              >
                Download Resume
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-16 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Contact" title="Let's Build Something Useful." sub="Open to conversations around Product, AI, Automation, Analytics and Technology." />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="space-y-3">
              <a data-testid="contact-email-link" href={`mailto:${PROFILE.email}`} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#121824]/60 px-5 py-4 hover:border-emerald-400/40 transition-colors">
                <span className="h-11 w-11 grid place-items-center rounded-xl border border-white/10 text-emerald-300 group-hover:emerald-glow"><Mail className="h-5 w-5" /></span>
                <div><p className="text-xs text-slate-500">Email</p><p className="text-sm font-medium text-white">{PROFILE.email}</p></div>
              </a>
              <a data-testid="contact-linkedin-link" href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#121824]/60 px-5 py-4 hover:border-emerald-400/40 transition-colors">
                <span className="h-11 w-11 grid place-items-center rounded-xl border border-white/10 text-emerald-300 group-hover:emerald-glow"><Linkedin className="h-5 w-5" /></span>
                <div><p className="text-xs text-slate-500">LinkedIn</p><p className="text-sm font-medium text-white">/in/nihar-chopade</p></div>
              </a>
              <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#121824]/60 px-5 py-4 hover:border-emerald-400/40 transition-colors">
                <span className="h-11 w-11 grid place-items-center rounded-xl border border-white/10 text-emerald-300 group-hover:emerald-glow"><Phone className="h-5 w-5" /></span>
                <div><p className="text-xs text-slate-500">Phone</p><p className="text-sm font-medium text-white">{PROFILE.phone}</p></div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#121824]/60 px-5 py-4">
                <span className="h-11 w-11 grid place-items-center rounded-xl border border-white/10 text-emerald-300"><MapPin className="h-5 w-5" /></span>
                <div><p className="text-xs text-slate-500">Location</p><p className="text-sm font-medium text-white">{PROFILE.location}</p></div>
              </div>
            </div>

            <form data-testid="contact-form" onSubmit={submit} noValidate className="rounded-2xl border border-white/10 bg-[#121824]/60 p-6 sm:p-8 space-y-4">
              {[
                { k: "name", label: "Name", type: "text", ph: "Your name" },
                { k: "email", label: "Email", type: "email", ph: "you@company.com" },
              ].map(({ k, label, type, ph }) => (
                <div key={k}>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">{label}</label>
                  <input
                    data-testid={`contact-input-${k}`}
                    type={type}
                    placeholder={ph}
                    {...field(k)}
                    className="w-full rounded-xl border border-white/10 bg-[#0A0D12] px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-emerald-400/50 focus-visible:ring-2 focus-visible:ring-emerald-500/40 transition-colors"
                  />
                  {errors[k] && <p className="mt-1.5 text-xs text-red-400" data-testid={`error-${k}`}>{errors[k]}</p>}
                </div>
              ))}
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">Message</label>
                <textarea
                  data-testid="contact-input-message"
                  rows={4}
                  placeholder="What would you like to build together?"
                  {...field("message")}
                  className="w-full rounded-xl border border-white/10 bg-[#0A0D12] px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-emerald-400/50 focus-visible:ring-2 focus-visible:ring-emerald-500/40 transition-colors resize-none"
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-400" data-testid="error-message">{errors.message}</p>}
              </div>
              <button
                data-testid="contact-submit-button"
                type="submit"
                disabled={loading}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 text-[#04160f] px-5 py-3.5 text-sm font-semibold transition-colors"
              >
                {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <>Send Message <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="font-display text-lg font-extrabold text-white">{PROFILE.name}</p>
              <p className="mt-1 font-mono text-xs tracking-[0.18em] uppercase text-slate-500">Product • AI • Automation • Analytics</p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV.map((n) => (
                <button key={n} onClick={() => document.getElementById(n.toLowerCase())?.scrollIntoView({ behavior: "smooth" })} className="text-sm text-slate-400 hover:text-white transition-colors">
                  {n}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="h-9 w-9 grid place-items-center rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-emerald-400/40 transition-colors"><Linkedin className="h-4 w-4" /></a>
              <a href={`mailto:${PROFILE.email}`} className="h-9 w-9 grid place-items-center rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-emerald-400/40 transition-colors"><Mail className="h-4 w-4" /></a>
            </div>
          </div>
          <p className="mt-10 text-xs text-slate-600">© 2026 {PROFILE.name}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};
