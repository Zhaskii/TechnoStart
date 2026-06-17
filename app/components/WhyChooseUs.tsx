"use client";

import React, { useEffect } from "react";
import { Users, ShieldCheck, Target, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Users className="h-7 w-7" />,
      title: "Expert Team",
      desc: "Our experienced developers and digital marketers focus on delivering high-quality solutions that generate measurable business results.",
    },
    {
      icon: <ShieldCheck className="h-7 w-7" />,
      title: "Transparent Process",
      desc: "From planning to delivery, we maintain clear communication, realistic timelines, and complete project transparency.",
    },
    {
      icon: <Target className="h-7 w-7" />,
      title: "Client-Centric Approach",
      desc: "Every strategy, design, and campaign is tailored to your business objectives and target audience.",
    },
  ];

  useEffect(() => {
    // 1. Header Elements Animation
    gsap.fromTo(
      ".choose-header-anim",
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
          trigger: ".choose-header-trigger",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    // 2. Trust Reason Cards Animation (Staggered entrance)
    // Optimized with force3D and clearProps to eliminate transform pipeline stuttering
    gsap.fromTo(
      ".choose-card-anim",
      {
        opacity: 0,
        y: 45,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        force3D: true,
        clearProps: "transform",
        scrollTrigger: {
          trigger: ".choose-cards-trigger",
          start: "top 78%",
        },
      },
    );

    // 3. Bottom Trust Banner Animation
    gsap.fromTo(
      ".choose-banner-anim",
      {
        opacity: 0,
        scale: 0.96,
        y: 30,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".choose-banner-trigger",
          start: "top 85%",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center choose-header-trigger">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 choose-header-anim opacity-0">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl choose-header-anim opacity-0">
            Why Businesses Trust
            <span className="block text-blue-600">Techno Star</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 choose-header-anim opacity-0">
            We combine technology, creativity, and strategy to deliver digital
            solutions that help businesses grow and succeed online.
          </p>
        </div>

        {/* Cards */}
        {/* Fixed: Replaced translation latency filters. Bound hover updates strictly to explicit design parameters */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3 choose-cards-trigger">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm will-change-transform transition-[border-color,box-shadow,transform] duration-300 transform-gpu hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl choose-card-anim opacity-0"
            >
              {/* Number */}
              <div className="absolute right-6 top-4 text-6xl font-black text-slate-100 select-none">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="relative z-10 mt-6 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="relative z-10 mt-4 leading-relaxed text-slate-600">
                {item.desc}
              </p>

              <div className="relative z-10 mt-6 flex items-center text-sm font-semibold text-blue-600">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-20 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-10 lg:p-14 choose-banner-trigger choose-banner-anim opacity-0">
          <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                Your Success Is Our Priority
              </h3>

              <p className="mt-3 max-w-2xl text-slate-600">
                We don't just build websites or run marketing campaigns. We
                create digital experiences that help businesses attract, engage,
                and convert customers.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700 shrink-0"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
