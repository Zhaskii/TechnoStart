"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { StaticImageData } from "next/image";

interface PageBannerProps {
  badgeText: string;
  title: string;
  subtitle: string;
  bgGlowColor?: "blue" | "indigo";
  bgImage?: StaticImageData | string;
  bgOverlayOpacity?: number;
}

export default function PageBanner({
  badgeText,
  title,
  subtitle,
  bgGlowColor = "blue",
  bgImage,
  bgOverlayOpacity = 0.7,
}: PageBannerProps) {
  const glowClasses = {
    blue: "bg-blue-500/10",
    indigo: "bg-indigo-500/10",
  };

  useEffect(() => {
    // Animate banner elements on mount
    gsap.fromTo(
      ".page-banner-anim",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" },
    );
  }, []);

  const bgImageUrl = typeof bgImage === "string" ? bgImage : bgImage?.src;

  return (
    <section
      className="relative mt-10 py-24 lg:py-32 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : "none",
        backgroundColor: bgImageUrl ? "transparent" : "#060816",
      }}
    >
      {/* Dark overlay for background image */}
      {bgImageUrl && (
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: `rgba(6, 8, 22, ${bgOverlayOpacity})`,
          }}
        />
      )}

      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-150 lg:w-200 h-64 lg:h-80 ${glowClasses[bgGlowColor]} blur-3xl rounded-full`}
        />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <span className="page-banner-anim inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-6 opacity-0">
          {badgeText}
        </span>
        <h1 className="page-banner-anim text-5xl sm:text-6xl font-black tracking-tight text-white/85 leading-none mb-6 opacity-0">
          {title}
        </h1>
        <p className="page-banner-anim text-lg text-slate-400 leading-relaxed max-w-xl mx-auto opacity-0">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
