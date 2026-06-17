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
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-32"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-blue-400/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-indigo-400/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto about-header-trigger mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50/50 backdrop-blur-sm px-4 py-2 mb-8 about-header-anim opacity-0">
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-sm font-semibold text-blue-700">
              About Techno Star
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight about-header-anim opacity-0">
            Building Digital Experiences{" "}
            <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              That Drive Business Growth
            </span>
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto about-header-anim opacity-0">
            We are a forward-thinking IT company helping businesses establish a
            strong digital presence through modern websites, strategic SEO, and
            result-driven digital marketing solutions that transform vision into
            reality.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3 about-cards-trigger mb-20">
          {/* Card 1: Web Development */}
          <div className="about-card-wrapper opacity-0 will-change-transform">
            <div className="group relative h-full rounded-2xl border border-slate-200/50 bg-white/80 backdrop-blur-sm p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              {/* Gradient background on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(59, 130, 246, 0.1), transparent)",
                }}
              />

              <div className="relative z-10">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  <Code2 size={32} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  Web Development
                </h3>

                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Fast, responsive, and scalable websites built with modern
                  technologies to help your business stand out in the digital
                  landscape.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn more <span>→</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: SEO Optimization */}
          <div className="about-card-wrapper opacity-0 will-change-transform">
            <div className="group relative h-full rounded-2xl border border-slate-200/50 bg-white/80 backdrop-blur-sm p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              {/* Gradient background on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(167, 139, 250, 0.1), transparent)",
                }}
              />

              <div className="relative z-10">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-50 to-violet-100 text-violet-600 group-hover:scale-110 transition-transform duration-300">
                  <Search size={32} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  SEO Optimization
                </h3>

                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Improve search visibility and attract high-intent visitors
                  through effective, data-backed SEO strategies that drive
                  results.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-violet-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn more <span>→</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Digital Marketing */}
          <div className="about-card-wrapper opacity-0 will-change-transform">
            <div className="group relative h-full rounded-2xl border border-slate-200/50 bg-white/80 backdrop-blur-sm p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              {/* Gradient background on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(99, 102, 241, 0.1), transparent)",
                }}
              />

              <div className="relative z-10">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp size={32} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  Digital Marketing
                </h3>

                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Data-driven marketing campaigns designed to increase reach,
                  engagement, and sustainable business growth over time.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn more <span>→</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement Section */}
        <div className="about-mission-trigger about-mission-anim opacity-0">
          <div className="rounded-3xl border border-slate-200/50 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 backdrop-blur-sm p-12 md:p-16 text-center overflow-hidden relative">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 h-40 w-40 bg-blue-400/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 h-40 w-40 bg-indigo-400/5 rounded-full blur-3xl -z-10" />

            <p className="text-sm md:text-base font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Our Mission
            </p>

            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              Help businesses grow through{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                technology, creativity, and digital innovation.
              </span>
            </h3>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We partner with organizations to transform their digital presence
              and drive meaningful business impact through strategic solutions
              and ongoing support.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-slate-200/50">
                <div className="h-3 w-3 rounded-full bg-blue-500" />
                <span className="text-sm font-medium text-slate-700">
                  Strategic Innovation
                </span>
              </div>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-slate-200/50">
                <div className="h-3 w-3 rounded-full bg-indigo-500" />
                <span className="text-sm font-medium text-slate-700">
                  Results-Driven
                </span>
              </div>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-slate-200/50">
                <div className="h-3 w-3 rounded-full bg-violet-500" />
                <span className="text-sm font-medium text-slate-700">
                  Client Success
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
