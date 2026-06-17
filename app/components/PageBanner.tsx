import React from "react";

interface PageBannerProps {
  badgeText: string;
  title: string;
  subtitle: string;
  bgGlowColor?: "blue" | "indigo";
}

export default function PageBanner({
  badgeText,
  title,
  subtitle,
  bgGlowColor = "blue",
}: PageBannerProps) {
  const glowClasses = {
    blue: "bg-blue-500/10",
    indigo: "bg-indigo-500/10",
  };

  return (
    <section className="relative py-24 lg:py-32 bg-[#060816] overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] lg:w-[800px] h-64 lg:h-80 ${glowClasses[bgGlowColor]} blur-3xl rounded-full`}
        />
      </div>
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-6 opacity-0 animate-in fade-in slide-in-from-bottom-3 duration-500">
          {badgeText}
        </span>
        <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-white mb-6 opacity-0 animate-in fade-in slide-in-from-bottom-3 duration-500 delay-100">
          {title}
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto opacity-0 animate-in fade-in slide-in-from-bottom-3 duration-500 delay-200">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
