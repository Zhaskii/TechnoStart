"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
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

export const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Structural Intro Animations
    gsap.fromTo(
      ".testimonials-header-anim",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonials-header-trigger",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      ".testimonials-card-trigger",
      {
        opacity: 0,
        y: 35,
      },
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // 2. Continuous State-driven Slide Transitions
  const animateSlideChange = (
    nextIndex: number,
    direction: "left" | "right",
  ) => {
    if (!contentRef.current) return;

    const xOffset = direction === "right" ? 40 : -40;

    // Outgoing timeline step
    gsap.to(contentRef.current, {
      opacity: 0,
      x: -xOffset,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        setActive(nextIndex);
        // Reset incoming placement state values
        gsap.fromTo(
          contentRef.current,
          {
            opacity: 0,
            x: xOffset,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            ease: "power2.out",
          },
        );
      },
    });
  };

  const prev = () => {
    const targetIndex =
      (active - 1 + testimonials.length) % testimonials.length;
    animateSlideChange(targetIndex, "left");
  };

  const next = () => {
    const targetIndex = (active + 1) % testimonials.length;
    animateSlideChange(targetIndex, "right");
  };

  const jumpTo = (index: number) => {
    if (index === active) return;
    const direction = index > active ? "right" : "left";
    animateSlideChange(index, direction);
  };

  return (
    <section className="relative overflow-hidden bg-[#f8faff] py-24 lg:py-32">
      {/* Soft blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center testimonials-header-trigger">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 testimonials-header-anim opacity-0">
            Testimonials
          </span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl testimonials-header-anim opacity-0">
            Trusted by our clients
          </h2>
          <p className="mt-4 text-base text-slate-500 max-w-xl mx-auto testimonials-header-anim opacity-0">
            Real feedback from businesses we've helped grow through technology
            and digital innovation.
          </p>
        </div>

        {/* Card */}
        <div className="mt-16 relative testimonials-card-trigger opacity-0">
          {/* Decorative quote mark */}
          <div
            className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9rem] leading-none text-blue-100 select-none font-serif"
            aria-hidden="true"
          >
            "
          </div>

          <div className="relative rounded-3xl border border-slate-200/80 bg-white px-8 py-12 shadow-[0_8px_40px_rgba(0,0,0,0.06)] sm:px-14 sm:py-14">
            {/* Animating wrapper target */}
            <div ref={contentRef}>
              {/* Quote */}
              <p className="text-center text-xl font-medium leading-relaxed text-slate-700 sm:text-2xl">
                {t.quote}
              </p>

              {/* Divider */}
              <div className="mx-auto mt-10 h-px w-16 bg-blue-200" />

              {/* Author */}
              <div className="mt-8 flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-base font-bold text-white shadow-md shadow-blue-200 select-none">
                  {initials(t.author)}
                </div>
                <div className="text-center">
                  <p className="text-[15px] font-semibold text-slate-900">
                    {t.author}
                  </p>
                  <p className="text-sm text-slate-400">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation controls */}
            <div className="mt-10 flex items-center justify-center gap-5">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 focus:outline-none"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => jumpTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                      active === i
                        ? "w-7 bg-blue-600"
                        : "w-1.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 focus:outline-none"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Trust company raw list controls */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {testimonials.map((item, i) => (
            <button
              key={i}
              onClick={() => jumpTo(i)}
              className={`text-sm font-medium transition-colors duration-200 focus:outline-none ${
                active === i
                  ? "text-blue-600"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {item.company}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
