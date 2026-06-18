"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Code2, Globe } from "lucide-react";

const SERVICES = [
  {
    name: "Web Development",
    icon: Code2,
    desc: "Full-stack web solutions",
    id: "webdev",
  },
  {
    name: "Digital Marketing",
    icon: Globe,
    desc: "Grow your online presence",
    id: "marketing",
  },
];

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      )
        setServicesOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeAll = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      {/* ── Navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#060b1a]/90 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "bg-[#060b1a] backdrop-blur-md"
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* ── Logo ── */}
            <a
              href="/"
              className="flex items-center gap-3 shrink-0 group"
              aria-label="TechnoStar Home"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(37,99,235,0.45)] group-hover:shadow-[0_0_28px_rgba(37,99,235,0.65)] transition-shadow duration-200">
                <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-white">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div>
                <div className="text-[16px] font-bold tracking-tight text-white leading-none">
                  TECHNO<span className="text-blue-400">STAR</span>
                </div>
                <div className="text-[8.5px] tracking-[0.2em] uppercase text-white/35 mt-0.75 font-light leading-none">
                  IT Solutions
                </div>
              </div>
            </a>

            {/* ── Desktop Nav Links ── */}
            <div className="hidden md:flex items-center gap-0.5">
              {NAV_LINKS.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.name}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div
                      className={`flex items-center rounded-xl transition-colors duration-150 ${
                        servicesOpen ? "bg-white/8" : "hover:bg-white/6"
                      }`}
                    >
                      <a
                        href={link.href}
                        className={`pl-4 pr-1.5 py-2 text-[15.5px] font-medium transition-colors duration-150 ${
                          servicesOpen
                            ? "text-white"
                            : "text-white/85 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </a>
                      <button
                        className="pr-3.5 pl-0.5 py-2 text-white/40 hover:text-white/80 transition-colors duration-150"
                        aria-haspopup="true"
                        aria-expanded={servicesOpen}
                        aria-label="Toggle services"
                      >
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-200 ${
                            servicesOpen ? "rotate-180 text-blue-400!" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* ── Dropdown ── */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64 transition-all duration-200 ${
                        servicesOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-1.5 pointer-events-none"
                      }`}
                      role="menu"
                    >
                      <div className="relative bg-[#0c1428] border border-white/10 rounded-2xl p-2 shadow-[0_24px_64px_rgba(0,0,0,0.7)]">
                        {/* Caret */}
                        <div className="absolute -top-1.25 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#0c1428] border-l border-t border-white/10 rotate-45 rounded-tl-xs" />

                        {SERVICES.map((svc) => (
                          <a
                            key={svc.name}
                            href={`/services#${svc.id}`}
                            role="menuitem"
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/6 transition-colors duration-150 group"
                          >
                            <div className="w-9 h-9 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600/25 group-hover:border-blue-500/35 transition-all duration-150">
                              <svc.icon size={15} className="text-blue-400" />
                            </div>
                            <div>
                              <div className="text-[13px] font-semibold text-white/90 leading-none mb-1.5">
                                {svc.name}
                              </div>
                              <div className="text-[11px] text-white/40 leading-none">
                                {svc.desc}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 rounded-xl text-[15.5px] font-medium text-white/85 hover:text-white hover:bg-white/6 transition-all duration-150"
                  >
                    {link.name}
                  </a>
                ),
              )}
            </div>

            {/* ── Desktop Right ── */}
            <div className="hidden md:flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[11px] text-white/40 font-light tracking-wide border border-white/8 rounded-full px-3.5 py-1.5">
                🇳🇵 Kathmandu
              </span>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-semibold tracking-wide transition-all duration-200 shadow-[0_4px_16px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_24px_rgba(37,99,235,0.55)] hover:-translate-y-px"
              >
                Free Consultation
              </a>
            </div>

            {/* ── Mobile Toggle ── */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/6 border border-white/10 text-white hover:bg-white/10 transition-all duration-150"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              {isOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>

        {/* Scroll glow line */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/35 to-transparent pointer-events-none" />
        )}
      </nav>

      {/* ── Mobile Overlay ── */}
      <div
        className={`fixed top-16 inset-x-0 bottom-0 z-40 md:hidden transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/55 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeAll}
        />

        {/* Slide panel */}
        <div
          id="mobile-nav"
          className={`absolute top-0 right-0 bottom-0 w-[min(300px,82vw)] bg-[#060b1a] border-l border-white/8 flex flex-col transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <div key={link.name}>
                  <div className="flex items-center rounded-xl hover:bg-white/5 transition-colors duration-150">
                    <a
                      href={link.href}
                      className="flex-1 px-3.5 py-3 text-[15.5px] font-medium text-white"
                      onClick={closeAll}
                    >
                      {link.name}
                    </a>
                    <button
                      className="px-3.5 py-3 text-white/45 hover:text-white transition-colors duration-150"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      aria-expanded={mobileServicesOpen}
                      aria-label="Toggle services"
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180 text-blue-400!" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileServicesOpen
                        ? "max-h-48 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="ml-3 pl-3.5 border-l border-white/6 mt-1 pb-1 space-y-0.5">
                      {SERVICES.map((svc) => (
                        <a
                          key={svc.name}
                          href={`/services#${svc.id}`}
                          className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] text-white/65 hover:text-white hover:bg-white/5 transition-all duration-150"
                          onClick={closeAll}
                        >
                          <svc.icon
                            size={13}
                            className="text-blue-400 shrink-0"
                          />
                          {svc.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center px-3.5 py-3 rounded-xl text-[15.5px] font-medium text-white hover:text-blue-300 hover:bg-white/5 transition-all duration-150"
                  onClick={closeAll}
                >
                  {link.name}
                </a>
              ),
            )}
          </nav>

          <div className="px-4 pb-8 pt-4 border-t border-white/[0.07] space-y-3 shrink-0">
            <a
              href="#contact"
              className="block w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-[13.5px] font-semibold text-center tracking-wide shadow-[0_4px_16px_rgba(37,99,235,0.35)] transition-all duration-200"
              onClick={closeAll}
            >
              Free Consultation
            </a>
            <p className="text-center text-[11px] text-white/22 tracking-wide font-light">
              🇳🇵 Proudly serving businesses across Nepal
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
