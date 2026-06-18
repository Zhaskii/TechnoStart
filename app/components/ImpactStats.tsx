"use client";

import { useEffect } from "react";
import { Globe, BarChart3, Users, Trophy } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────
const STATS = [
  { value: "120+", label: "Websites Delivered", icon: Globe },
  { value: "85", label: "Active Campaigns", icon: BarChart3 },
  { value: "50+", label: "Satisfied Clients", icon: Users },
  { value: "15", label: "Awards & Recognitions", icon: Trophy },
];

// ─── Component ────────────────────────────────────────────────
export const ImpactStats: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      ".stats-header-anim",
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: { trigger: ".stats-header-trigger", start: "top 80%" },
      },
    );
    gsap.fromTo(
      ".stats-card-anim",
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: ".stats-grid-trigger", start: "top 78%" },
      },
    );
    gsap.fromTo(
      ".stats-banner-anim",
      { opacity: 0, scale: 0.97, y: 24 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: ".stats-banner-trigger", start: "top 85%" },
      },
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#060b1a] py-24 lg:py-32">
      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,.9) 1px,transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/10 blur-[96px]" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-500/8 blur-[96px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-20 stats-header-trigger">
          <span className="stats-header-anim opacity-0 inline-flex items-center gap-2 border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-400 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Our Achievements
          </span>

          <h2 className="stats-header-anim opacity-0 mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Delivering results{" "}
            <span className="text-blue-400">that matter</span>
          </h2>

          <p className="stats-header-anim opacity-0 mt-5 text-[15px] leading-relaxed text-slate-400">
            Meaningful digital experiences and measurable business growth
            through technology and strategic marketing.
          </p>
        </div>

        {/* ── Stats Grid ── */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 stats-grid-trigger">
          {STATS.map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="stats-card-anim opacity-0 group relative overflow-hidden rounded-2xl border border-white/8 bg-white/3 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/25 hover:bg-white/6"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Icon */}
              <div className="relative z-10 w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-blue-600/25 group-hover:border-blue-500/35">
                <Icon className="h-5 w-5 text-blue-400" strokeWidth={1.75} />
              </div>

              {/* Value */}
              <p className="relative z-10 text-[40px] font-bold text-white tracking-tight leading-none mb-3">
                {value}
              </p>

              {/* Label */}
              <p className="relative z-10 text-[11.5px] font-medium uppercase tracking-[0.14em] text-slate-500">
                {label}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* ── Bottom Banner ── */}
        <div className="mt-6 stats-banner-trigger">
          <div className="stats-banner-anim opacity-0 will-change-transform relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/3 px-10 py-12 lg:px-14 text-center">
            {/* Dot texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage: "radial-gradient(white 1px,transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            {/* Top glow */}
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-36 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative max-w-2xl mx-auto">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-400 mb-4">
                Our commitment
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 leading-snug">
                Building long-term digital success
              </h3>
              <p className="text-[14.5px] text-slate-400 leading-relaxed">
                Our commitment goes beyond project delivery — we help businesses
                grow through innovative technology, strategic marketing, and
                exceptional ongoing support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
