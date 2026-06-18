"use client";

import { useEffect } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import connectBG from "@/app/assets/connectBG.jpg";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const SERVICES = ["Web Development", "SEO Optimisation", "Digital Marketing"];

export const CTA: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      ".cta-anim-item",
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.14,
        ease: "power2.out",
        scrollTrigger: { trigger: ".cta-panel-trigger", start: "top 82%" },
      },
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      {/* ── Foundational Background Color Layer ── */}
      <div className="absolute inset-0 z-0 bg-[#060b1a]" />

      {/* ── Background Image Layer (Dimmed opacity) ── */}
      <div
        className="absolute inset-0 z-10 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url(${connectBG.src})`,
        }}
      />

      {/* ── Dark Overlay to Further Subdue Image Brightness ── */}
      <div className="absolute inset-0 z-15 bg-black/40 pointer-events-none" />

      {/* ── Background Overlays ── */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,.9) 1px,transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute -top-40 -left-40 h-120 w-120 rounded-full bg-blue-600/15 blur-[100px]" />
        <div className="absolute -bottom-40 -right-40 h-120 w-120 rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="relative z-30 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="cta-panel-trigger relative overflow-hidden rounded-2xl border border-white/] bg-white/3 p-10 text-center lg:p-16">
          {/* Inner top glow */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 rounded-full bg-blue-600/20 blur-3xl" />

          {/* Eyebrow */}
          <span className="cta-anim-item opacity-0 inline-flex items-center gap-2 border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-400 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Let's work together
          </span>

          {/* Heading */}
          <h2 className="cta-anim-item opacity-0 mt-7 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
            Ready to grow your{" "}
            <span className="text-blue-400">business online?</span>
          </h2>

          {/* Description */}
          <p className="cta-anim-item opacity-0 mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-slate-400">
            Whether you need a professional website, SEO strategy, or digital
            marketing support — we're here to bring your ideas to life.
          </p>

          {/* Buttons */}
          <div className="cta-anim-item opacity-0 mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[14px] px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_4px_24px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_32px_rgba(37,99,235,0.55)] hover:-translate-y-px group w-full sm:w-auto justify-center"
            >
              Get free consultation
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </a>

            <a
              href="tel:+9779800000000"
              className="inline-flex items-center gap-2.5 border border-white/12 bg-white/4 hover:bg-white/8 hover:border-white/20 text-white font-semibold text-[14px] px-8 py-4 rounded-xl transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <Phone className="h-4 w-4" strokeWidth={1.75} />
              Call us now
            </a>
          </div>

          {/* Service tags */}
          <div className="cta-anim-item opacity-0 mt-10 pt-8 border-t border-white/[0.07] flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {SERVICES.map((s, i) => (
              <span
                key={s}
                className="flex items-center gap-2 text-[12px] text-slate-500 font-light"
              >
                {i > 0 && (
                  <span className="w-1 h-1 rounded-full bg-slate-700" />
                )}
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
