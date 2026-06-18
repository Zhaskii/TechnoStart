"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote:
      "Techno Star transformed our online presence and delivered a website that perfectly represents our brand.",
    author: "Priya Sharma",
    role: "CEO",
    company: "RetailCo",
  },
  {
    quote:
      "Professional communication, clean design, and a smooth development process from start to finish.",
    author: "Ahmed Khan",
    role: "Founder",
    company: "FinTechX",
  },
  {
    quote:
      "Their team understood our requirements and provided practical digital solutions that added real value to our business.",
    author: "Sarah Lee",
    role: "Director",
    company: "HealthPlus",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

// ─── Component ────────────────────────────────────────────────
export const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const t = TESTIMONIALS[active];

  useEffect(() => {
    gsap.fromTo(
      ".testimonials-header-anim",
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonials-header-trigger",
          start: "top 80%",
        },
      },
    );
    gsap.fromTo(
      ".testimonials-card-trigger",
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonials-card-trigger",
          start: "top 78%",
        },
      },
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const animateSlide = (nextIndex: number, direction: "left" | "right") => {
    if (!contentRef.current) return;
    const xOut = direction === "right" ? 36 : -36;
    gsap.to(contentRef.current, {
      opacity: 0,
      x: -xOut,
      duration: 0.22,
      ease: "power2.in",
      onComplete: () => {
        setActive(nextIndex);
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, x: xOut },
          { opacity: 1, x: 0, duration: 0.38, ease: "power2.out" },
        );
      },
    });
  };

  const prev = () =>
    animateSlide(
      (active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
      "left",
    );
  const next = () => animateSlide((active + 1) % TESTIMONIALS.length, "right");
  const jumpTo = (i: number) => {
    if (i !== active) animateSlide(i, i > active ? "right" : "left");
  };

  return (
    <section className="relative overflow-hidden bg-[#f8faff] py-24 lg:py-32">
      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-16 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -right-32 -bottom-16 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: "radial-gradient(#94a3b8 1px,transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="text-center mb-14 testimonials-header-trigger">
          <span className="testimonials-header-anim opacity-0 inline-flex items-center gap-2 border border-blue-100 bg-blue-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Testimonials
          </span>
          <h2 className="testimonials-header-anim opacity-0 mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Trusted by our clients
          </h2>
          <p className="testimonials-header-anim opacity-0 mt-4 text-[15px] text-slate-500 leading-relaxed max-w-md mx-auto">
            Real feedback from businesses we've helped grow through technology
            and digital innovation.
          </p>
        </div>

        {/* ── Card ── */}
        <div className="testimonials-card-trigger opacity-0 relative">
          {/* Decorative quote mark */}
          <div
            className="pointer-events-none select-none absolute -top-8 left-1/2 -translate-x-1/2 text-[120px] leading-none text-blue-100 font-serif"
            aria-hidden="true"
          >
            "
          </div>

          <div className="relative rounded-2xl border border-slate-200/80 bg-white px-8 py-12 sm:px-14 sm:py-14 shadow-[0_8px_48px_rgba(0,0,0,0.07)]">
            {/* Animating content */}
            <div ref={contentRef}>
              <p className="text-center text-[18px] sm:text-[20px] font-medium leading-relaxed text-slate-700">
                "{t.quote}"
              </p>

              {/* Divider */}
              <div className="mx-auto mt-9 h-px w-12 bg-blue-200" />

              {/* Author */}
              <div className="mt-7 flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-[15px] font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.3)] select-none">
                  {initials(t.author)}
                </div>
                <div className="text-center">
                  <p className="text-[14.5px] font-semibold text-slate-900">
                    {t.author}
                  </p>
                  <p className="text-[12.5px] text-slate-400 mt-0.5">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Nav controls */}
            <div className="mt-10 flex items-center justify-center gap-5">
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-10 h-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all duration-150 focus:outline-none"
              >
                <ChevronLeft size={17} strokeWidth={2} />
              </button>

              {/* Dot indicators */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => jumpTo(i)}
                    aria-label={`Go to ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                      active === i
                        ? "w-7 bg-blue-600"
                        : "w-1.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next"
                className="w-10 h-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all duration-150 focus:outline-none"
              >
                <ChevronRight size={17} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Company pills ── */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {TESTIMONIALS.map(({ company }, i) => (
            <button
              key={i}
              onClick={() => jumpTo(i)}
              className={`px-4 py-1.5 rounded-full text-[12px] font-medium border transition-all duration-200 focus:outline-none ${
                active === i
                  ? "bg-blue-600 border-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.3)]"
                  : "bg-white border-slate-200 text-slate-400 hover:border-blue-200 hover:text-blue-600"
              }`}
            >
              {company}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
