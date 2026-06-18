"use client";

import { ArrowLeft, Home, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full bg-[#0B0F19] flex items-center justify-center px-5 py-16 overflow-hidden">
      {/* ── Custom Component Injection Style Sheet (For precise sequential orchestration) ── */}
      <style>{`
        @keyframes terminalFadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-terminal-line {
          opacity: 0;
          animation: terminalFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Subtle dot grid — structural, not decorative */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Vertical accent line — left edge */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px bg-[#1E2A45] origin-top animate-[scaleY_0.8s_ease-out_forwards]"
        style={{ transform: "scaleY(0)" }}
      />

      <div className="relative z-10 w-full max-w-lg">
        {/* ── Terminal Error Block ── */}
        <div className="border border-[#1E2A45] bg-[#0D1220] mb-8 shadow-[0_24px_60px_rgba(0,0,0,0.5)] transform transition-transform duration-500 animate-[terminalFadeIn_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          {/* Terminal chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E2A45]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1E2A45]/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#1E2A45]/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#1E2A45]/60" />
            </div>
            <span className="ml-2 text-[10px] tracking-[0.15em] uppercase text-white/20 font-mono">
              system.log
            </span>
          </div>

          {/* Log lines (Staggered orchestration via custom utilities) */}
          <div className="px-5 py-5 space-y-2 font-mono">
            <div
              className="flex items-start gap-3 text-[12px] animate-terminal-line"
              style={{ animationDelay: "150ms" }}
            >
              <span className="text-white/20 select-none shrink-0">01</span>
              <span className="text-white/30">
                <span className="text-blue-500/70">GET</span> /requested-route
                HTTP/1.1
              </span>
            </div>
            <div
              className="flex items-start gap-3 text-[12px] animate-terminal-line"
              style={{ animationDelay: "300ms" }}
            >
              <span className="text-white/20 select-none shrink-0">02</span>
              <span className="text-white/30">
                <span className="text-red-400/80">ERR</span> Route not
                registered in manifest
              </span>
            </div>
            <div
              className="flex items-start gap-3 text-[12px] animate-terminal-line"
              style={{ animationDelay: "450ms" }}
            >
              <span className="text-white/20 select-none shrink-0">03</span>
              <span className="text-white/30">
                <span className="text-yellow-400/70">WRN</span> Fallback handler
                invoked
              </span>
            </div>
            <div
              className="flex items-start gap-3 text-[12px] animate-terminal-line"
              style={{ animationDelay: "600ms" }}
            >
              <span className="text-white/20 select-none shrink-0">04</span>
              <span className="text-white/30">
                Status:{" "}
                <span className="text-white/70 font-semibold">
                  404 Not Found
                </span>
              </span>
            </div>
            <div
              className="flex items-start gap-3 text-[12px] pt-1 animate-terminal-line"
              style={{ animationDelay: "750ms" }}
            >
              <span className="text-white/20 select-none shrink-0">&gt;_</span>
              <span className="text-blue-400/80 animate-[pulse_1s_infinite]">
                █
              </span>
            </div>
          </div>
        </div>

        {/* ── Status number + message ── */}
        <div
          className="mb-8 pl-1 transform opacity-0 animate-[terminalFadeIn_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          style={{ animationDelay: "450ms" }}
        >
          <div className="flex items-baseline gap-4 mb-3">
            <span className="text-[72px] sm:text-[88px] font-light text-white leading-none tracking-tighter">
              404
            </span>
            <div
              className="h-px flex-1 bg-[#1E2A45] mb-2 origin-left scale-x-0 animate-[scaleX_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]"
              style={{ animationDelay: "600ms" }}
            />
          </div>

          <h1 className="text-[18px] sm:text-[20px] font-medium text-white tracking-tight mb-2">
            Page not found
          </h1>
          <p className="text-[13px] text-white/40 font-light leading-relaxed max-w-sm">
            This route doesn't exist or has been moved. Head back to base or use
            the navigation below.
          </p>
        </div>

        {/* ── Actions ── */}
        <div
          className="flex flex-col sm:flex-row gap-3 mb-12 transform opacity-0 animate-[terminalFadeIn_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          style={{ animationDelay: "600ms" }}
        >
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-5 py-3.5 border border-[#1E2A45] text-white/60 hover:text-white hover:border-white/30 text-[11px] tracking-[0.12em] uppercase font-semibold bg-transparent active:scale-[0.99] transition-all duration-150 sm:flex-1"
          >
            <ArrowLeft size={14} strokeWidth={1.8} />
            Go back
          </button>

          <a
            href="/"
            className="flex items-center justify-center gap-2 px-5 py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-[11px] tracking-[0.12em] uppercase font-semibold active:scale-[0.99] shadow-[0_4px_20px_rgba(37,99,235,0.15)] hover:shadow-[0_6px_24px_rgba(37,99,235,0.3)] transition-all duration-150 sm:flex-1 text-center"
          >
            <Home size={14} strokeWidth={1.8} />
            Return home
          </a>
        </div>

        {/* ── Footer note ── */}
        <div
          className="border-t border-[#1E2A45] pt-6 flex items-center gap-2 text-[11px] text-white/25 font-light transform opacity-0 animate-[terminalFadeIn_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          style={{ animationDelay: "750ms" }}
        >
          <HelpCircle
            size={12}
            strokeWidth={1.5}
            className="text-blue-500/50 shrink-0"
          />
          <span>
            Need help?{" "}
            <a
              href="/contact"
              className="text-blue-400/70 hover:text-blue-400 transition-colors underline underline-offset-2"
            >
              Contact support
            </a>
          </span>
        </div>
      </div>
    </main>
  );
}
