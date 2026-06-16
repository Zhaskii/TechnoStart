"use client";

import React, { useEffect } from "react";
import { Code, Megaphone, ArrowRight, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-7 w-7 text-blue-400" />,
      title: "Website Development",
      description:
        "Custom-built websites designed for performance, user experience, SEO, and business growth.",
      features: [
        "Responsive Design",
        "SEO Friendly",
        "Fast Loading",
        "Modern UI/UX",
      ],
      link: "#webdev",
    },
    {
      icon: <Megaphone className="h-7 w-7 text-blue-400" />,
      title: "Digital Marketing",
      description:
        "Strategic marketing campaigns that increase visibility, generate leads, and grow your brand online.",
      features: [
        "SEO Optimization",
        "Google Ads",
        "Social Media Marketing",
        "Lead Generation",
      ],
      link: "#marketing",
    },
  ];

  useEffect(() => {
    // 1. Section Header Animation
    gsap.fromTo(
      ".services-header-anim",
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
          trigger: ".services-header-trigger",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    // 2. Service Cards Animation (Targeting the clean wrapper class)
    gsap.fromTo(
      ".services-card-wrapper",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-cards-trigger",
          start: "top 75%",
        },
      },
    );

    // 3. Bottom CTA Panel Animation (Soft scale and fade-up)
    gsap.fromTo(
      ".services-cta-anim",
      {
        opacity: 0,
        scale: 0.97,
        y: 30,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-cta-trigger",
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
      id="services-overview"
      className="relative overflow-hidden bg-[#050816] py-24 lg:py-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center services-header-trigger">
          <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400 services-header-anim opacity-0">
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl services-header-anim opacity-0">
            Solutions Designed for
            <span className="block text-blue-400">Digital Growth</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-400 services-header-anim opacity-0">
            We help businesses establish a strong digital presence through
            modern web development and result-driven digital marketing
            strategies that generate measurable growth.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2 services-cards-trigger">
          {services.map((service, index) => (
            /* GSAP Isolation Wrapper Target */
            <div
              key={index}
              className="services-card-wrapper opacity-0 will-change-transform"
            >
              {/* Native CSS Interactive Layer */}
              <article className="group h-full relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/[0.05]">
                {/* Hover Glow Background */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
                </div>

                {/* Top Section */}
                <div className="relative z-10 flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="relative z-10 mt-6 text-slate-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list items */}
                <div className="relative z-10 mt-8 grid grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="h-4 w-4 text-blue-400" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Direct Action Link */}
                <div className="relative z-10 mt-10">
                  <a
                    href={service.link}
                    className="inline-flex items-center gap-2 font-semibold text-blue-400 transition-all duration-300 hover:gap-3 hover:text-blue-300"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Bottom CTA Panel container */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-10 lg:p-14 text-center services-cta-trigger services-cta-anim opacity-0">
          <h3 className="text-3xl font-bold text-white">
            Ready to Grow Your Business Online?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Let's build a website and marketing strategy that helps your
            business attract more customers and achieve sustainable growth.
          </p>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
