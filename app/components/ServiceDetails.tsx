"use client";

import { useEffect } from "react";
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
import servicesBg from "@/app/assets/servicesBG.png";

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
    <div className="min-h-screen bg-linear-to-b bg-[#F9FAFC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
      <main>
        <PageBanner
          badgeText="Our Expertise"
          title="Our Services"
          subtitle="We deliver complete digital strategies designed to accelerate corporate scale: from modern codebase architectures to custom marketing engines."
          bgGlowColor="blue"
          bgImage={servicesBg}
          bgOverlayOpacity={0.7}
        />

        {/* ── SECTION 1: WEBSITE DEVELOPMENT ── */}
        <section
          id="webdev"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 scroll-mt-10 web-header-trigger"
        >
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 web-header-anim opacity-0">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50/50 backdrop-blur px-4 py-2 mb-6">
                <div className="h-2 w-2 rounded-full bg-blue-600" />
                <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">
                  Engineered to Perform
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Website <span className="text-blue-600">Development</span>
              </h2>
            </div>
            <p className="text-slate-600 max-w-md text-base">
              Custom-built scalable infrastructure using advanced React
              ecosystems to match modern operational criteria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 web-cards-trigger">
            {webServices.map((service, index) => (
              <div
                key={index}
                className="web-card-wrapper opacity-0 will-change-transform"
              >
                <article className="h-full bg-white rounded-2xl border border-blue-100/50 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-blue-200/80 transition-all duration-500 group flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full -mr-12 -mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <service.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>

                  <div className="relative">
                    <ul className="space-y-3 mb-8">
                      {service.benefits.map((benefit, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-center gap-3 text-sm font-medium text-slate-700"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-blue-600 shrink-0"
                          />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group/btn"
                    >
                      Learn More
                      <ArrowRight
                        size={16}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 2: DIGITAL MARKETING (Updated background context layout) ── */}
        <section
          id="marketing"
          className="bg-white border-y border-slate-100 py-24 scroll-mt-10 marketing-header-trigger"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 marketing-header-anim opacity-0">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50/50 backdrop-blur px-4 py-2 mb-6">
                  <div className="h-2 w-2 rounded-full bg-blue-600" />
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">
                    Data-Driven Growth
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                  Digital <span className="text-blue-600">Marketing</span>
                </h2>
              </div>
              <p className="text-slate-600 max-w-md text-base">
                Performance marketing solutions configured precisely around
                metrics, conversion architectures, and measurable ROAS values.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 marketing-cards-trigger">
              {marketingServices.map((service, index) => (
                <div
                  key={index}
                  className="marketing-card-wrapper opacity-0 will-change-transform"
                >
                  <article className="h-full bg-[#F9FAFC] rounded-2xl border border-blue-100/30 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-blue-200/80 transition-all duration-500 group flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full -mr-12 -mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <service.icon size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-base leading-relaxed mb-8">
                        {service.description}
                      </p>
                    </div>

                    <div className="relative">
                      <ul className="space-y-3 mb-8">
                        {service.benefits.map((benefit, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-center gap-3 text-sm font-medium text-slate-700"
                          >
                            <CheckCircle2
                              size={16}
                              className="text-blue-600 shrink-0"
                            />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group/btn"
                      >
                        Learn More
                        <ArrowRight
                          size={16}
                          className="group-hover/btn:translate-x-1 transition-transform"
                        />
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CALL TO ACTION BANNER ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center details-cta-trigger">
          <div className="bg-linear-to-br from-blue-900 to-blue-950 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden details-cta-anim opacity-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl -mr-48 -mt-48 pointer-events-none" />
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10 leading-tight">
              Ready to Transform Your{" "}
              <span className="text-blue-100">Business?</span>
            </h3>
            <p className="text-blue-50 text-lg max-w-2xl mx-auto mb-10 relative z-10">
              Get in touch with our tech consulting team today for a structured
              breakdown on optimization strategy options tailored to your goals.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-700 font-bold text-base px-8 py-4 rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-2xl active:scale-95 relative z-10"
            >
              Get Started Now
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
