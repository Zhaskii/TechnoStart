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
import aboutBG from "@/app/assets/aboutBG.jpg";
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
    // 1. Hero Animation (Plays immediately on load)
    gsap.fromTo(
      ".about-hero-anim",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" },
    );

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

    // 4. History Timeline Animation
    gsap.fromTo(
      ".about-timeline-wrapper",
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.18,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-timeline-trigger",
          start: "top 78%",
        },
      },
    );

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
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      <main>
        {/* ── Hero ── */}
        <PageBanner
          badgeText="Who We Are"
          title="About Techno Star"
          subtitle="We combine creativity, technical expertise, and data-driven marketing to deliver digital solutions that truly matter."
          bgGlowColor="blue"
          bgImage={aboutBG}
          bgOverlayOpacity={0.7}
        />

        {/* ── Mission & Vision ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 about-mv-trigger">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                label: "Our Mission",
                color: "bg-blue-50 text-blue-600",
                text: "To empower businesses with innovative digital products and data-driven marketing that accelerate sustainable growth.",
              },
              {
                icon: Eye,
                label: "Our Vision",
                color: "bg-indigo-50 text-indigo-600",
                text: "To be the trusted partner for organizations seeking measurable digital transformation and long-term evolutionary growth.",
              },
            ].map(({ icon: Icon, label, color, text }) => (
              /* GSAP Outer Wrapper Layer */
              <div
                key={label}
                className="about-mv-wrapper opacity-0 will-change-transform"
              >
                {/* CSS Transition Layout Shell */}
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${color}`}
                  >
                    <Icon size={22} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3">
                    {label}
                  </h2>
                  <p className="text-slate-500 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Core Values ── */}
        <section className="bg-[#f8faff] py-20 lg:py-24 about-values-trigger">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 about-values-wrapper opacity-0">
              <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">
                Values
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Our Core Values
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map(({ icon: Icon, title, desc }) => (
                /* GSAP Outer Wrapper Layer */
                <div
                  key={title}
                  className="about-values-wrapper opacity-0 will-change-transform"
                >
                  {/* CSS Transition Layout Shell */}
                  <div className="bg-white h-full rounded-2xl border border-slate-200 p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                      <Icon size={18} className="text-blue-600" />
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="bg-[#060b1a] py-20 lg:py-28 about-timeline-trigger">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 about-timeline-wrapper opacity-0">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
                History
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Our Journey
              </h2>
            </div>

            <div className="relative pl-8 border-l border-white/10 space-y-12">
              {timeline.map((item, i) => (
                /* GSAP Outer Wrapper Layer */
                <div
                  key={i}
                  className="about-timeline-wrapper opacity-0 will-change-transform"
                >
                  {/* CSS Context Container */}
                  <div className="relative group">
                    {/* Dot */}
                    <div className="absolute -left-9.25 top-1 w-3.5 h-3.5 rounded-full bg-blue-500 border-4 border-[#060b1a] group-hover:scale-125 transition-transform" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                      <span className="text-2xl font-black text-blue-400 tabular-nums shrink-0">
                        {item.year}
                      </span>
                      <p className="text-slate-400 leading-relaxed">
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
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 about-team-trigger">
          <div className="text-center mb-14 about-team-wrapper opacity-0">
            <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">
              Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Meet the Team
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map(({ initials, name, role, color }) => (
              /* GSAP Outer Wrapper Layer */
              <div
                key={name}
                className="about-team-wrapper opacity-0 will-change-transform"
              >
                {/* CSS Transition Layout Shell */}
                <div className="bg-white h-full rounded-2xl border border-slate-200 p-8 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                  <div
                    className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-lg font-bold text-white ${color} mb-5 group-hover:scale-105 transition-transform shadow-md select-none`}
                  >
                    {initials}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {name}
                  </h4>
                  <p className="text-sm text-slate-400">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 about-cta-trigger">
          <div className="relative overflow-hidden rounded-3xl bg-blue-600 px-8 py-14 sm:px-14 text-center text-white about-cta-anim opacity-0">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [bg-size-24px_24px]" />
            <div className="relative max-w-xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Why Clients Trust Us
              </h2>
              <p className="text-blue-100 leading-relaxed mb-8">
                Our proven track record, transparent processes, and
                uncompromising focus on ROI make us a dependable long-term
                digital partner.
              </p>
              <a
                href="contact.html"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 active:scale-95 transition-all shadow-md text-sm"
              >
                Work With Us <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
