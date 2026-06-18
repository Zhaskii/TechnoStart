"use client";

import React, { useEffect } from "react";
import {
  Target,
  Eye,
  Shield,
  Users,
  Award,
  Zap,
  ChevronRight,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageBanner from "./PageBanner";
import aboutBg from "@/app/assets/aboutBG.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const values = [
  {
    icon: Shield,
    title: "Integrity",
    desc: "We act ethically and transparently in everything we do.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    desc: "Client outcomes and success drive our daily decisions.",
  },
  {
    icon: Award,
    title: "Quality",
    desc: "We deliver durable, high-performance, and maintainable solutions.",
  },
  {
    icon: Zap,
    title: "Innovation",
    desc: "Embracing continuous improvement, modern tech, and learning.",
  },
];

const timeline = [
  { year: "2016", desc: "Founded with a small team of passionate developers." },
  {
    year: "2018",
    desc: "Expanded into comprehensive digital marketing services.",
  },
  {
    year: "2020",
    desc: "Crossed the 100+ successfully delivered projects milestone.",
  },
  {
    year: "2023",
    desc: "Launched enterprise-grade solutions for global clients.",
  },
];

const team = [
  {
    initials: "AS",
    name: "Asha Singh",
    role: "CEO & Founder",
    color: "bg-blue-600",
  },
  {
    initials: "RK",
    name: "Rohit Kumar",
    role: "Head of Development",
    color: "bg-indigo-500",
  },
  {
    initials: "ML",
    name: "Maria Lopez",
    role: "Head of Marketing",
    color: "bg-blue-500",
  },
];

export default function About() {
  useEffect(() => {
    // 2. Mission & Vision Grid Animation
    gsap.fromTo(
      ".about-mv-wrapper",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-mv-trigger",
          start: "top 80%",
        },
      },
    );

    // 3. Core Values Section Animation
    gsap.fromTo(
      ".about-values-wrapper",
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-values-trigger",
          start: "top 80%",
        },
      },
    );

    // 4. Enhanced History Timeline Animation
    gsap.fromTo(
      ".about-timeline-line",
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".about-timeline-trigger",
          start: "top 75%",
        },
      },
    );

    const timelineItems = document.querySelectorAll(".about-timeline-wrapper");
    timelineItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: index % 2 === 0 ? -40 : 40,
          scale: 0.98,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.85,
          ease: "back.out(1.1)",
          scrollTrigger: {
            trigger: item,
            start: "top 82%",
          },
        },
      );
    });

    // 5. Team Section Animation
    gsap.fromTo(
      ".about-team-wrapper",
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-team-trigger",
          start: "top 80%",
        },
      },
    );

    // 6. Bottom CTA Panel Animation
    gsap.fromTo(
      ".about-cta-anim",
      { opacity: 0, scale: 0.96, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-cta-trigger",
          start: "top 85%",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b bg-white">
      <main>
        <PageBanner
          badgeText="Who We Are"
          title="About Us"
          subtitle="We combine creativity, technical expertise, and data-driven marketing to deliver digital solutions that truly matter."
          bgGlowColor="blue"
          bgImage={aboutBg}
          bgOverlayOpacity={0.7}
        />

        {/* ── Mission & Vision ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 about-mv-trigger">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                label: "Our Mission",
                color: "from-blue-600 to-blue-500",
                text: "To empower businesses with innovative digital products and data-driven marketing that accelerate sustainable growth.",
              },
              {
                icon: Eye,
                label: "Our Vision",
                color: "from-blue-500 to-indigo-500",
                text: "To be the trusted partner for organizations seeking measurable digital transformation and long-term evolutionary growth.",
              },
            ].map(({ icon: Icon, label, color, text }) => (
              <div
                key={label}
                className="about-mv-wrapper opacity-0 will-change-transform"
              >
                <div className="group relative h-full rounded-2xl overflow-hidden bg-white border border-blue-100/50 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-8 lg:p-10">
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-linear-to-br ${color} opacity-10 -mr-16 -mt-16`}
                  />
                  <div className="relative">
                    <div
                      className={`w-14 h-14 rounded-xl bg-linear-to-br ${color} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <Icon size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                      {label}
                    </h2>
                    <p className="text-slate-600 leading-relaxed">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Core Values ── */}
        <section className="py-20 lg:py-28 about-values-trigger bg-linear-to-br bg-[#F9FAFF]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 about-values-wrapper opacity-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50/50 backdrop-blur px-4 py-2 mb-6">
                <div className="h-2 w-2 rounded-full bg-blue-600" />
                <span className="text-sm font-bold text-blue-700">
                  Our Core Values
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                Principles That <span className="text-blue-600">Drive Us</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="about-values-wrapper opacity-0 will-change-transform"
                >
                  <div className="bg-white h-full rounded-2xl border border-blue-100/50 p-7 hover:-translate-y-2 hover:shadow-xl hover:border-blue-200/80 transition-all duration-500 group">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-blue-500 flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="bg-linear-to-br bg-[#0a122a] py-20 lg:py-28 about-timeline-trigger relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-2 mb-6">
                <div className="h-2 w-2 rounded-full bg-blue-400" />
                <span className="text-sm font-bold text-blue-300">
                  Our Journey
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                A Timeline of <span className="text-blue-400">Growth</span>
              </h2>
            </div>

            <div className="relative pl-8 space-y-10">
              {/* Dynamic Animated Line Path Accent */}
              <div className="about-timeline-line absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-blue-400 via-blue-500 to-indigo-600 origin-top transform" />

              {timeline.map((item, i) => (
                <div
                  key={i}
                  className="about-timeline-wrapper opacity-0 will-change-transform"
                >
                  {/* Enhanced interactive hover layout trigger class applied below */}
                  <div className="relative group cursor-default p-4 -ml-4 rounded-xl  transition-all duration-300">
                    <div className="absolute -left-5.25 top-6 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500/60 group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-blue-600 group-hover:border-transparent group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.6)] transition-all duration-300" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                      <span className="text-3xl font-black bg-linear-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent tabular-nums shrink-0 transition-all duration-300 group-hover:from-blue-300 group-hover:to-white group-hover:drop-shadow-[0_2px_8px_rgba(59,130,246,0.3)]">
                        {item.year}
                      </span>
                      <p className="text-slate-300 leading-relaxed pt-1 transition-colors duration-300 group-hover:text-white">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 about-team-trigger">
          <div className="text-center mb-16 about-team-wrapper opacity-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50/50 backdrop-blur px-4 py-2 mb-6">
              <div className="h-2 w-2 rounded-full bg-blue-600" />
              <span className="text-sm font-bold text-blue-700">Team</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
              Meet the <span className="text-blue-600">Talent</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map(({ initials, name, role, color }) => (
              <div
                key={name}
                className="about-team-wrapper opacity-0 will-change-transform"
              >
                <div className="bg-white h-full rounded-2xl border border-blue-100/50 p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-blue-200/80 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div
                    className={`w-20 h-20 rounded-2xl mx-auto flex items-center justify-center text-2xl font-bold text-white ${color} mb-6 group-hover:scale-110 transition-transform shadow-lg select-none relative z-10`}
                  >
                    {initials}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {name}
                  </h4>
                  <p className="text-sm text-blue-600 font-semibold">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 about-cta-trigger">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-900 to-blue-950 px-8 py-16 sm:px-16 text-center text-white about-cta-anim opacity-0 shadow-2xl">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl -mr-48 -mt-48" />
            </div>
            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                Ready to Transform Your{" "}
                <span className="text-blue-200">Digital Presence?</span>
              </h2>
              <p className="text-blue-50 leading-relaxed mb-10 text-lg">
                Our proven track record, transparent processes, and
                uncompromising focus on ROI make us a dependable long-term
                partner for your growth.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 hover:shadow-lg active:scale-95 transition-all shadow-xl text-base"
              >
                Work With Us <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
