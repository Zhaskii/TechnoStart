"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Subtle accent lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50/40 rounded-full blur-3xl -z-10" />
      
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-20 sm:px-8 lg:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
            Build Your Digital Presence
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            We help businesses grow online through web development, SEO optimization, and digital marketing solutions.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Free Quote
            </a>

            <a
              href="#services"
              className="border border-slate-300 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
            >
              Learn More
            </a>
          </div>

          <div className="mt-12">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
              Our Services
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {["Web Development", "SEO", "Digital Marketing"].map((service) => (
                <span
                  key={service}
                  className="text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="rounded-xl border border-blue-200 bg-white p-8 w-96 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Why Choose Us?</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                <span className="text-slate-700">Proven track record of successful projects</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                <span className="text-slate-700">Expert team of developers and marketers</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                <span className="text-slate-700">Transparent communication and results</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                <span className="text-slate-700">Affordable pricing with no hidden costs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".hero-card", {
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.to(".orb-1", {
        x: 40,
        y: -30,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".orb-2", {
        x: -30,
        y: 40,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#050816] text-white"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Gradient Orbs */}
      <div className="orb-1 absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="orb-2 absolute -bottom-40 -left-20 h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-8 mt-20 md:mt-2">
        <div className="grid w-full items-center gap-20 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="hero-content">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Techno Start Pvt Ltd
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Build Your
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Presence
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              We help businesses grow online through modern web development, SEO
              optimization, and digital marketing solutions designed to generate
              real results.
            </p>

            {/* Services */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Web Development",
                "SEO",
                "Google Ads",
                "Social Media Marketing",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Free Quote
              </a>

              <a
                href="#services"
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-slate-300 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hero-card flex justify-center lg:justify-end md:mb-1 mb-10">
            <div className="relative w-full max-w-[520px]">
              {/* Glow */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-blue-500/20 to-violet-500/20 blur-3xl" />

              {/* Main Card */}
              <div className="relative rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
                {/* Browser Top */}
                <div className="mb-8 flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <h3 className="mb-6 text-2xl font-semibold">
                  Digital Solutions
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
                      🌐
                    </div>

                    <div>
                      <h4 className="font-semibold">Web Development</h4>
                      <p className="mt-1 text-sm text-slate-400">
                        Fast, responsive, and SEO-friendly websites.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-xl">
                      🔍
                    </div>

                    <div>
                      <h4 className="font-semibold">SEO Optimization</h4>
                      <p className="mt-1 text-sm text-slate-400">
                        Improve rankings and increase organic traffic.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-xl">
                      📈
                    </div>

                    <div>
                      <h4 className="font-semibold">Digital Marketing</h4>
                      <p className="mt-1 text-sm text-slate-400">
                        Reach the right audience and grow your business.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 rounded-2xl border border-blue-500/10 bg-blue-500/5 p-5">
                  <p className="text-sm text-slate-400">
                    Helping businesses establish a strong digital presence
                    through modern technology and strategic marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
