"use client";

import React, { useEffect } from "react";
import { Globe, BarChart3, Users, Trophy } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const ImpactStats: React.FC = () => {
  const stats = [
    {
      value: "120+",
      label: "Websites Delivered",
      icon: <Globe className="h-7 w-7" />,
    },
    {
      value: "85",
      label: "Active Campaigns",
      icon: <BarChart3 className="h-7 w-7" />,
    },
    {
      value: "50+",
      label: "Satisfied Clients",
      icon: <Users className="h-7 w-7" />,
    },
    {
      value: "15",
      label: "Awards & Recognitions",
      icon: <Trophy className="h-7 w-7" />,
    },
  ];

  useEffect(() => {
    // 1. Heading Elements Animation
    gsap.fromTo(
      ".stats-header-anim",
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
          trigger: ".stats-header-trigger",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    // 2. Metrics Grid Layout Animation
    gsap.fromTo(
      ".stats-card-anim",
      {
        opacity: 0,
        y: 35,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stats-grid-trigger",
          start: "top 78%",
        },
      },
    );

    // 3. Bottom Success Banner Animation
    gsap.fromTo(
      ".stats-banner-anim",
      {
        opacity: 0,
        scale: 0.97,
        y: 25,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stats-banner-trigger",
          start: "top 85%",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#050816] py-24 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

        {/* Grid */}
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center stats-header-trigger">
          <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400 stats-header-anim opacity-0">
            OUR ACHIEVEMENTS
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl stats-header-anim opacity-0">
            Delivering Results
            <span className="block text-blue-400">That Matter</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-400 stats-header-anim opacity-0">
            We focus on creating meaningful digital experiences and measurable
            business growth through technology and marketing.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 stats-grid-trigger">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/[0.05] stats-card-anim opacity-0"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
              </div>

              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                  {stat.icon}
                </div>

                <h3 className="text-4xl font-bold tracking-tight text-white">
                  {stat.value}
                </h3>

                <p className="mt-3 text-sm font-medium uppercase tracking-wider text-slate-400">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-sm stats-banner-trigger stats-banner-anim opacity-0">
          <h3 className="text-2xl font-bold text-white md:text-3xl">
            Building Long-Term Digital Success
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-slate-400">
            Our commitment is not just delivering projects but helping
            businesses grow through innovative technology, strategic marketing,
            and exceptional support.
          </p>
        </div>
      </div>
    </section>
  );
};
