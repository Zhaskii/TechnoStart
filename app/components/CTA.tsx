"use client";

import React, { useEffect } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const CTA: React.FC = () => {
  useEffect(() => {
    // Staggered slide up for all the elements inside the main CTA panel container
    gsap.fromTo(
      ".cta-anim-item",
      {
        opacity: 0,
        y: 35,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cta-panel-trigger",
          start: "top 82%",
          toggleActions: "play none none none",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] py-24 lg:py-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-10 text-center backdrop-blur-sm lg:p-16 cta-panel-trigger">
          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400 cta-anim-item opacity-0">
            LET'S WORK TOGETHER
          </span>

          {/* Heading */}
          <h2 className="mt-8 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl cta-anim-item opacity-0">
            Ready to Grow Your
            <span className="block text-blue-400">Business Online?</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 cta-anim-item opacity-0">
            Whether you need a professional website, SEO strategy, or digital
            marketing support, we're here to help bring your ideas to life.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row cta-anim-item opacity-0">
            <a
              href="contact.html"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="tel:+9779800000000"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/[0.08]"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>
          </div>

          {/* Bottom Trust Text */}
          <div className="mt-10 border-t border-white/10 pt-8 cta-anim-item opacity-0">
            <p className="text-sm text-slate-500">
              Web Development • SEO Optimization • Digital Marketing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
