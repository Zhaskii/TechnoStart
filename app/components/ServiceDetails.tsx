"use client";

import React, { useEffect } from "react";
import {
  Globe,
  Palette,
  ShoppingCart,
  Megaphone,
  RefreshCw,
  Smartphone,
  Search,
  FileText,
  Layers,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageBanner from "./PageBanner";
import servicesBG from "@/app/assets/servicesBG.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServiceDetails() {
  // Website Development Services Data
  const webServices = [
    {
      icon: Globe,
      title: "Business Websites",
      description:
        "Professional sites tailored specifically to company goals, brand credibility, and target audiences.",
      benefits: ["High-impact lead capture", "SEO architecture friendly"],
    },
    {
      icon: Palette,
      title: "Portfolio Websites",
      description:
        "Showcase your professional creative work with elegant, minimal, and fully interactive designs.",
      benefits: ["Visual digital storytelling", "Blazing fast performance"],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Websites",
      description:
        "Secure, highly scalable online stores optimized with conversion mechanics to drive sales.",
      benefits: ["Global payment integration", "Automated inventory sync"],
    },
    {
      icon: Megaphone,
      title: "Landing Pages",
      description:
        "High-converting standalone page builds optimized for marketing campaigns and product launches.",
      benefits: ["Hyper-optimized CTAs", "Instantaneous core web load"],
    },
    {
      icon: RefreshCw,
      title: "Website Maintenance",
      description:
        "Continuous proactive software updates, core database security patches, and performance checks.",
      benefits: ["24/7 server uptime monitoring", "Regular cloud-safe backups"],
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Mobile-first presentation frameworks engineered to render perfectly on screen configurations of any scale.",
      benefits: ["Fluid cross-device UX", "W3C accessible guidelines"],
    },
  ];

  // Digital Marketing Services Data
  const marketingServices = [
    {
      icon: Smartphone,
      title: "Social Media Marketing",
      description:
        "Comprehensive brand presence alignment, content strategy curation, and platform engagement loops.",
      benefits: ["Organic content engines", "Targeted audience growth"],
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description:
        "Elevate search engine visibility indexes and organic traffic flow utilizing white-hat core techniques.",
      benefits: ["Deep technical site SEO", "Intent keyword modeling"],
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description:
        "Strategic authoritative copy distribution assets designed to nurture consumer confidence and convert leads.",
      benefits: ["Thought leadership blogs", "Dynamic content calendar"],
    },
    {
      icon: Layers,
      title: "Google Ads Management",
      description:
        "Laser-focused paid search optimization engines configured for maximum conversion efficiency and ROAS.",
      benefits: ["Algorithmic bid tracking", "Granular conversion logic"],
    },
    {
      icon: Megaphone,
      title: "Paid Social Advertising",
      description:
        "Creative, high-impact hyper-targeted ad delivery setups tailored for Facebook, Instagram, and more.",
      benefits: [
        "Custom custom audience loops",
        "A/B creative testing variants",
      ],
    },
    {
      icon: Layers,
      title: "Brand Promotion",
      description:
        "Strategic omnichannel positioning maneuvers executed to scale public identity recognition and long-term trust.",
      benefits: ["Corporate positioning", "Distinct visual identity assets"],
    },
  ];

  useEffect(() => {
    // 1. Hero Content Entrance (Triggers instantly on mounting phase)
    gsap.fromTo(
      ".services-hero-anim",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" },
    );

    // 2. Web Development Section Header reveal
    gsap.fromTo(
      ".web-header-anim",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".web-header-trigger",
          start: "top 85%",
        },
      },
    );

    // 3. Web Development Service Cards reveal loop
    gsap.fromTo(
      ".web-card-wrapper",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".web-cards-trigger",
          start: "top 80%",
        },
      },
    );

    // 4. Digital Marketing Section Header reveal
    gsap.fromTo(
      ".marketing-header-anim",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".marketing-header-trigger",
          start: "top 85%",
        },
      },
    );

    // 5. Digital Marketing Service Cards reveal loop
    gsap.fromTo(
      ".marketing-card-wrapper",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".marketing-cards-trigger",
          start: "top 80%",
        },
      },
    );

    // 6. Bottom Banner Context Panel reveal
    gsap.fromTo(
      ".details-cta-anim",
      { opacity: 0, scale: 0.96, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".details-cta-trigger",
          start: "top 85%",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-blue-500 selection:text-white">
      <main>
        {/* ── HERO SECTION ── */}
        <PageBanner
          badgeText="Our Expertise"
          title="Our Services"
          subtitle="We deliver complete digital strategies designed to accelerate corporate scale."
          bgGlowColor="blue"
          bgImage={servicesBG}
          bgOverlayOpacity={0.7}
        />

        {/* ── SECTION 1: WEBSITE DEVELOPMENT ── */}
        <section
          id="webdev"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-10 web-header-trigger"
        >
          <div className="border-b border-slate-200 pb-6 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4 web-header-anim opacity-0">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
                Engineered to Perform
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">
                Website Development
              </h2>
            </div>
            <p className="text-slate-500 max-w-md text-sm md:text-base">
              Custom-built scalable infrastructure using advanced React
              ecosystems to match modern operational criteria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 web-cards-trigger">
            {webServices.map((service, index) => (
              /* GSAP Structural Isolation Wrapper Target */
              <div
                key={index}
                className="web-card-wrapper opacity-0 will-change-transform"
              >
                {/* Independent Component Interaction Layer */}
                <article className="h-full bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all group flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <service.icon size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                      {service.benefits.map((benefit, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-center gap-2 text-xs font-medium text-slate-500"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-emerald-500 shrink-0"
                          />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 transition-colors group/btn"
                    >
                      Learn More
                      <ArrowRight
                        size={14}
                        className="transform group-hover/btn:translate-x-0.5 transition-transform"
                      />
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 2: DIGITAL MARKETING ── */}
        <section
          id="marketing"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slate-100/50 border-y border-slate-200/60 scroll-mt-10 marketing-header-trigger"
        >
          <div className="border-b border-slate-200 pb-6 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4 marketing-header-anim opacity-0">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
                Data-Driven Growth
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">
                Digital Marketing
              </h2>
            </div>
            <p className="text-slate-500 max-w-md text-sm md:text-base">
              Performance marketing solutions configured precisely around
              metrics, conversion architectures, and measurable ROAS values.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 marketing-cards-trigger">
            {marketingServices.map((service, index) => (
              /* GSAP Structural Isolation Wrapper Target */
              <div
                key={index}
                className="marketing-card-wrapper opacity-0 will-change-transform"
              >
                {/* Independent Component Interaction Layer */}
                <article className="h-full bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all group flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <service.icon size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                      {service.benefits.map((benefit, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-center gap-2 text-xs font-medium text-slate-500"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-emerald-500 shrink-0"
                          />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 transition-colors group/btn"
                    >
                      Learn More
                      <ArrowRight
                        size={14}
                        className="transform group-hover/btn:translate-x-0.5 transition-transform"
                      />
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        {/* ── CALL TO ACTION BANNER ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center details-cta-trigger">
          <div className="bg-gradient-to-br from-[#060816] to-[#11163a] rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden details-cta-anim opacity-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
              Ready to Launch Your Next Project?
            </h3>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mb-8 relative z-10">
              Get in touch with our tech consulting group today for a structured
              breakdown on optimization strategy options.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md active:scale-98 relative z-10"
            >
              Get Started Now
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
