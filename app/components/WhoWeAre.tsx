"use client";

import React, { useEffect } from "react";
import { Code2, TrendingUp, Search } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin safely for Next.js / React
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Component Configurations ─────────────────────────────────
interface FeatureCard {
  icon: React.ElementType;
  title: string;
  description: string;
  accentColor: string;
  bgColorClass: string;
  radialColor: string;
}

const CARD_DATA: FeatureCard[] = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, responsive, and scalable websites built with modern technologies to help your business stand out in the digital landscape.",
    accentColor: "text-[#165DFC]",
    bgColorClass: "from-blue-50 to-blue-100",
    radialColor: "rgba(22, 93, 252, 0.1)",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improve search visibility and attract high-intent visitors through effective, data-backed SEO strategies that drive long-term business results.",
    accentColor: "text-[#165DFC]",
    bgColorClass: "from-blue-50 to-blue-100",
    radialColor: "rgba(22, 93, 252, 0.1)",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven marketing campaigns designed to increase reach, engagement, and sustainable business growth over time.",
    accentColor: "text-[#165DFC]",
    bgColorClass: "from-blue-50 to-blue-100",
    radialColor: "rgba(22, 93, 252, 0.1)",
  },
];

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
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    // 2. Feature Cards Animation
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50 py-32"
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
            <div className="h-2 w-2 rounded-full bg-[#165DFC]" />
            <span className="text-sm font-semibold text-[#165DFC]">
              About Techno Star
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight about-header-anim opacity-0">
            Building Digital Experiences{" "}
            <span className="block bg-linear-to-r text-[#165DFC] bg-clip-text ">
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

        {/* ── MAPPED FEATURE CARDS GRID ── */}
        <div className="grid gap-8 md:grid-cols-3 about-cards-trigger mb-20">
          {CARD_DATA.map((card, index) => {
            const CardIcon = card.icon;
            return (
              <div
                key={index}
                className="about-card-wrapper opacity-0 will-change-transform"
              >
                <div className="group relative h-full rounded-2xl border border-slate-200/50 bg-white/80 backdrop-blur-sm p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                  {/* Dynamic Gradient background on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top right, ${card.radialColor}, transparent)`,
                    }}
                  />

                  <div className="relative z-10">
                    <div
                      className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${card.bgColorClass} ${card.accentColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <CardIcon size={32} />
                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-slate-900">
                      {card.title}
                    </h3>

                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission Statement Section */}
        <div className="about-mission-trigger about-mission-anim opacity-0">
          <div className="rounded-3xl border border-slate-200/50 bg-linear-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 backdrop-blur-sm p-12 md:p-16 text-center overflow-hidden relative">
            <div className="absolute top-0 right-0 h-40 w-40 bg-blue-400/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 h-40 w-40 bg-indigo-400/5 rounded-full blur-3xl -z-10" />

            <p className="text-sm md:text-base font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Our Mission
            </p>

            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              Help businesses grow through{" "}
              <span className="bg-linear-to-r text-[#165DFC] bg-clip-text">
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
                <div className="h-3 w-3 rounded-full bg-[#165DFC]" />
                <span className="text-sm font-medium text-slate-700">
                  Strategic Innovation
                </span>
              </div>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-slate-200/50">
                <div className="h-3 w-3 rounded-full bg-[#165DFC]" />
                <span className="text-sm font-medium text-slate-700">
                  Results-Driven
                </span>
              </div>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-slate-200/50">
                <div className="h-3 w-3 rounded-full bg-[#165DFC]" />
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
