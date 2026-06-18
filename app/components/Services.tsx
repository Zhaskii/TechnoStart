"use client";

import { useEffect } from "react";
import { Code, Megaphone, ArrowRight, Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: Code,
    title: "Website Development",
    description:
      "Custom-built websites engineered for performance, SEO, and measurable business growth.",
    features: [
      "Responsive Design",
      "SEO Optimised",
      "Fast Loading",
      "Modern UI/UX",
    ],
    link: "#webdev",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Strategic campaigns that increase visibility, generate quality leads, and grow your brand.",
    features: ["SEO Strategy", "Google Ads", "Social Media", "Lead Generation"],
    link: "#marketing",
  },
];

// ─── Component ────────────────────────────────────────────────
export const Services: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      ".svc-header-anim",
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-header-trigger",
          start: "top 80%",
        },
      },
    );
    gsap.fromTo(
      ".services-card-wrapper",
      { opacity: 0, y: 44 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: { trigger: ".services-cards-trigger", start: "top 75%" },
      },
    );
    gsap.fromTo(
      ".services-cta-anim",
      { opacity: 0, scale: 0.97, y: 28 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: ".services-cta-trigger", start: "top 85%" },
      },
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      id="services-overview"
      className="relative overflow-hidden bg-[#060b1a] py-24 lg:py-32"
    >
      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Ambient glows */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/10 blur-[96px]" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-500/8 blur-[96px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="mx-auto max-w-2xl text-center services-header-trigger mb-16 lg:mb-20">
          <span className="svc-header-anim opacity-0 inline-flex items-center gap-2 border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-400 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Our Services
          </span>

          <h2 className="svc-header-anim opacity-0 mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Solutions built for{" "}
            <span className="text-blue-400">digital growth</span>
          </h2>

          <p className="svc-header-anim opacity-0 mt-5 text-[15px] leading-relaxed text-slate-400">
            We help businesses establish a strong digital presence through
            modern web development and result-driven marketing strategies.
          </p>
        </div>

        {/* ── Service Cards ── */}
        <div className="grid gap-6 lg:grid-cols-2 services-cards-trigger">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="services-card-wrapper opacity-0 will-change-transform"
            >
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/25 hover:bg-white/[0.05]">
                {/* Hover glow */}
                <div className="pointer-events-none absolute -top-24 -right-12 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon + Title */}
                <div className="relative flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-600/15 border border-blue-500/20 flex-shrink-0 group-hover:bg-blue-600/25 group-hover:border-blue-500/35 transition-colors duration-300">
                    <svc.icon
                      className="h-6 w-6 text-blue-400"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {svc.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="relative text-[14.5px] text-slate-400 leading-relaxed mb-8">
                  {svc.description}
                </p>

                {/* Features */}
                <div className="relative grid grid-cols-2 gap-3 mb-10">
                  {svc.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-2.5 text-[13px] text-slate-300"
                    >
                      <div className="w-4 h-4 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                        <Check
                          className="h-2.5 w-2.5 text-blue-400"
                          strokeWidth={2.5}
                        />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>

                {/* CTA link */}
                <a
                  href={svc.link}
                  className="relative inline-flex items-center gap-2 text-[13px] font-semibold text-blue-400 hover:text-blue-300 transition-all duration-200 group/link"
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                </a>
              </article>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-8 services-cta-trigger">
          <div className="services-cta-anim opacity-0 will-change-transform relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] p-10 lg:p-14 text-center">
            {/* Dot texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage: "radial-gradient(white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            {/* Blue glow */}
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 bg-blue-600/20 rounded-full blur-3xl" />

            <div className="relative max-w-xl mx-auto">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-400 mb-4">
                Ready to grow?
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 leading-snug">
                Let's build something great together
              </h3>
              <p className="text-[14.5px] text-slate-400 leading-relaxed mb-8">
                Tell us about your project and we'll craft a strategy that
                drives real, measurable results for your business.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[14px] px-8 py-3.5 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_28px_rgba(37,99,235,0.55)] hover:-translate-y-px"
              >
                Get free consultation
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
