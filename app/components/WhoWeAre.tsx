"use client";

import React, { useEffect } from "react";
import { Code2, TrendingUp, Search } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin safely for Next.js / React
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const WhoWeAre: React.FC = () => {
  useEffect(() => {
    // 1. Header Elements Animation (Badge, Title, Paragraph)
    gsap.fromTo(
      ".about-header-anim",
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
          trigger: ".about-header-trigger",
          start: "top 80%", // Animates when the top of the header hits 80% of the viewport height
          toggleActions: "play none none none", // Plays once upon entering scroll view
        },
      },
    );

    // 2. Feature Cards Animation (Targeting the outer wrappers now for peak performance)
    gsap.fromTo(
      ".about-card-wrapper",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-cards-trigger",
          start: "top 78%",
        },
      },
    );

    // 3. Bottom Mission Statement Animation
    gsap.fromTo(
      ".about-mission-anim",
      {
        opacity: 0,
        scale: 0.96,
        y: 25,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".about-mission-trigger",
          start: "top 85%",
        },
      },
    );

    // Clean up triggers on unmount to prevent memory leaks or duplicates on reload
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="about" className="relative overflow-hidden bg-white py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header (Trigger Container) */}
        <div className="text-center max-w-3xl mx-auto about-header-trigger">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 about-header-anim opacity-0">
            About Techno Start
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl about-header-anim opacity-0">
            Building Digital Experiences{" "}
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              That Drive Business Growth
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-500 about-header-anim opacity-0">
            We are a forward-thinking IT company helping businesses establish a
            strong digital presence through modern websites, strategic SEO, and
            result-driven digital marketing solutions.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 about-cards-trigger">
          {/* Card 1: Web Development */}
          <div className="about-card-wrapper opacity-0 will-change-transform">
            <div className="group h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Code2 size={28} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Web Development
              </h3>

              <p className="mt-3 text-slate-500 leading-relaxed">
                Fast, responsive, and scalable websites built with modern
                technologies to help your business stand out.
              </p>
            </div>
          </div>

          {/* Card 2: SEO Optimization */}
          <div className="about-card-wrapper opacity-0 will-change-transform">
            <div className="group h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                <Search size={28} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                SEO Optimization
              </h3>

              <p className="mt-3 text-slate-500 leading-relaxed">
                Improve search visibility and attract high-intent visitors
                through effective SEO strategies.
              </p>
            </div>
          </div>

          {/* Card 3: Digital Marketing */}
          <div className="about-card-wrapper opacity-0 will-change-transform">
            <div className="group h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <TrendingUp size={28} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Digital Marketing
              </h3>

              <p className="mt-3 text-slate-500 leading-relaxed">
                Data-driven marketing campaigns designed to increase reach,
                engagement, and business growth.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50 p-8 text-center about-mission-trigger about-mission-anim opacity-0">
          <p className="text-lg font-medium text-slate-700">
            Our mission is simple:
          </p>

          <p className="mt-3 text-2xl font-bold text-slate-900">
            Help businesses grow through technology, creativity, and digital
            innovation.
          </p>
        </div>
      </div>
    </section>
  );
};
