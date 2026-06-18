"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { StaticImageData } from "next/image";
import { Globe, Search, TrendingUp } from "lucide-react";

const SERVICES = ["Web Development", "SEO", "Google Ads", "Social Media"];

const STATS = [
  { value: "98%", label: "Client satisfaction" },
  { value: "3×", label: "Avg. traffic growth" },
  { value: "48h", label: "Project kickoff" },
];

interface HeroProps {
  bgImage?: StaticImageData | string;
  bgOverlayOpacity?: number;
}

export default function Hero({ bgImage, bgOverlayOpacity = 0.6 }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.09,
        ease: "power3.out",
        delay: 0.1,
      });
      gsap.from(".hero-card", {
        opacity: 0,
        y: 16,
        duration: 0.7,
        delay: 0.45,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const bgImageUrl = typeof bgImage === "string" ? bgImage : bgImage?.src;

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : "none",
        backgroundColor: bgImageUrl ? "transparent" : "#0D0D0D",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for background image */}
      {bgImageUrl && (
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: `rgba(13, 13, 13, ${bgOverlayOpacity})`,
          }}
        />
      )}

      {/* Faint dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff0a 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Blue brand glow */}
      <div className="pointer-events-none absolute -top-20 right-0 h-90 w-90 rounded-full bg-blue-600/20 blur-[100px]" />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 lg:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* ── LEFT ── */}
          <div className="hero-content flex flex-col items-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-600/30 bg-blue-600/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Techno Star Pvt Ltd
            </span>

            <h1 className="mt-6 text-[2.6rem] font-bold leading-[1.08] tracking-tight md:text-[3.4rem] lg:text-[3.8rem]">
              Your business,
              <br />
              <span className="text-blue-400">visible online.</span>
            </h1>

            <p className="mt-5 max-w-115 text-[15px] leading-relaxed text-[#A0A0A0] md:text-base">
              We build fast websites, run SEO campaigns, and manage ads that
              bring real customers — not just clicks.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-blue-500 active:scale-95"
              >
                Get a free quote
              </a>
              <a
                href="/services"
                className="rounded-lg border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/70 transition-colors duration-150 hover:bg-white/10 hover:text-white active:scale-95"
              >
                See our work →
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 border-t border-white/8 pt-8">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="mt-0.5 text-xs text-white/40">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="hero-card flex justify-center lg:justify-end md:mb-1 mb-10">
            <div className="relative w-full max-w-130">
              {/* Glow — blue only */}
              <div className="absolute inset-0 rounded-4xl bg-blue-500/15 blur-3xl" />

              {/* Main Card */}
              <div className="relative rounded-4xl border border-white/10 bg-white/4 p-8 backdrop-blur-xl">
                {/* Browser dots — blue/white palette */}
                <div className="mb-8 flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                <h3 className="mb-6 text-2xl font-semibold">
                  Digital Solutions
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <Globe size={22} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Web Development</h4>
                      <p className="mt-1 text-sm text-white/50">
                        Fast, responsive, and SEO-friendly websites.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <Search size={22} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-semibold">SEO Optimization</h4>
                      <p className="mt-1 text-sm text-white/50">
                        Improve rankings and increase organic traffic.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <TrendingUp size={22} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Digital Marketing</h4>
                      <p className="mt-1 text-sm text-white/50">
                        Reach the right audience and grow your business.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 rounded-2xl border border-blue-500/15 bg-blue-500/5 p-5">
                  <p className="text-sm text-white/50">
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
