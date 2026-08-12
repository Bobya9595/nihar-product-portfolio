# PRD — Nihar Chopade Portfolio

## Problem Statement
Final, premium, interactive personal portfolio for Nihar Chopade (Product & Analytics professional), positioned around PRODUCT + AI + AUTOMATION + ANALYTICS. Dark-first, recruiter-friendly, Linear/Vercel/Stripe-grade. Resume is the single source of truth — no invented data.

## Architecture
- Frontend: React 19 (CRA/CRACO) single-page, framer-motion, lucide-react, sonner, Tailwind. Sections: Hero (Product Thinking System), About (capability map + education), Experience (interactive timeline), Projects (case-study modals), Process (How I Think), AI Workflow terminal, Skills + Impact, Contact + Resume CTA + Footer.
- Backend: FastAPI + MongoDB. `POST /api/contact` (validated, stored in `contact_messages`), plus template status routes.
- Assets: resume `/assets/Nihar_Chopade_CV.pdf`, portrait `/assets/nihar.jpeg`.

## Design System
Bg #0A0D12, surfaces #121824/#161E2E, emerald #10B981 accent, subtle purple/blue glow, fine grid, Outfit/Plus Jakarta Sans/JetBrains Mono. prefers-reduced-motion respected.

## Implemented (2026-06 / this session)
- Full portfolio build, all sections, real resume content only.
- Contact form with client validation + backend persistence (200/422 verified).
- Resume download (verified 200 application/pdf).
- Project case-study modals (open, Escape + X close verified).
- SEO title/description/OG meta.
- Polish pass: reduced hero top-space, "2.5+ Years Experience" badge, "Currently Building" element, auto-cycling animated Product Thinking System, floating portrait + emerald ambient glow, balanced hero, scroll reveals.
- Added LegalFormat.in as a prominent FEATURED project with "View Live Project" (https://legalformat.in/) on card + modal.

## Content (from resume — do not invent beyond)
- Pluckk (Essar Group) — Assistant Manager, Product (Feb 2025–Present)
- Sennsys Technologies — Tech Executive (Aug 2023–Feb 2025)
- MCA (SPPU/MCOE), BCA (Shivaji Univ/CIMDR)
- Contact: nihar.chopade@gmail.com, +91 8888908202, linkedin.com/in/nihar-chopade, Mumbai
- No GitHub / certifications listed → intentionally omitted.

## Backlog (P1/P2)
- P1: Email delivery for contact submissions (Resend) — currently stored in DB only.
- P2: OG image asset, resume viewer inline preview.

## Next Tasks
- Optional email notifications, analytics, blog/notes section.
