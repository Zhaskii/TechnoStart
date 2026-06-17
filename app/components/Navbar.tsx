"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Code2, Globe, Shield, Cpu } from "lucide-react";

const services = [
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

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Explicitly typed to prevent the 'never' type compilation error
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Lock body scroll when mobile menu is open
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
            ? "bg-[#060b1a]/90 backdrop-blur-xl shadow-[0_4px_32px_rgba(0,0,0,0.4)] border-b border-white/[0.06]"
            : "bg-gradient-to-b from-[#060b1a]/95 to-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* h-16 handles clean height and items-center centers everything perfectly */}
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* ── Logo (Perfectly Centered Vertically) ── */}
            <a
              href="#home"
              className="flex items-center gap-2.5 shrink-0 my-auto"
              aria-label="TechnoStar — Home"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-[0_0_16px_rgba(37,99,235,0.5)] shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[17px] font-bold tracking-tight text-white font-sans leading-none">
                  TECHNO<span className="text-blue-400">STAR</span>
                </div>
                <div className="text-[9px] font-medium tracking-[1.4px] uppercase text-white/30 mt-1 leading-none">
                  IT Solutions
                </div>
              </div>
            </a>

            {/* ── Desktop Nav ── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.name}
                    className="relative animate-none"
                    ref={dropdownRef}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="flex items-center rounded-lg hover:bg-white/[0.06] transition-all duration-200">
                      <a
                        href={link.href}
                        className="pl-3.5 pr-1 py-2 text-[13.5px] font-medium text-white/60 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                      <button
                        className="pr-3.5 pl-1 py-2 text-white/60 hover:text-white transition-colors duration-200"
                        aria-haspopup="true"
                        aria-expanded={servicesOpen}
                        aria-label="Toggle services dropdown"
                      >
                        <ChevronDown
                          size={13}
                          className={`opacity-50 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>

                    {/* Dropdown Wrapper Container with top padding buffer to close the gap */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 -mt-3 w-64 transition-all duration-200 ${
                        servicesOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                      role="menu"
                    >
                      {/* Actual Menu Panel */}
                      <div className="mt-3 bg-[#0a1228]/98 backdrop-blur-2xl border border-white/[0.08] rounded-2xl p-2 shadow-[0_24px_64px_rgba(0,0,0,0.5)] relative">
                        {/* Arrow */}
                        <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#0a1228] border-l border-t border-white/[0.08] rotate-45" />

                        {services.map((svc) => (
                          <a
                            key={svc.name}
                            href={`/services#${svc.id}`}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.05] transition-colors duration-150 group"
                            role="menuitem"
                            onClick={() => setServicesOpen(false)}
                          >
                            <div className="w-9 h-9 rounded-lg bg-blue-600/15 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600/25 group-hover:border-blue-500/40 transition-all duration-150">
                              <svc.icon size={15} className="text-blue-400" />
                            </div>
                            <div>
                              <div className="text-[13px] font-semibold text-white/90 leading-none mb-1">
                                {svc.name}
                              </div>
                              <div className="text-[11px] text-white/40">
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
                    className="px-3.5 py-2 rounded-lg text-[13.5px] font-medium text-white/60 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
                  >
                    {link.name}
                  </a>
                ),
              )}
            </div>

            {/* ── Desktop Right ── */}
            <div className="hidden md:flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[11px] text-white/30 font-medium tracking-wide border border-white/[0.07] rounded-full px-3 py-1.5">
                🇳🇵 Kathmandu
              </span>
              <a
                href="#contact"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[13.5px] font-semibold rounded-xl shadow-[0_4px_16px_rgba(37,99,235,0.4)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.55)] hover:-translate-y-px transition-all duration-200"
              >
                Free Consultation
              </a>
            </div>

            {/* ── Mobile Toggle (Perfectly Centered Vertically) ── */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 text-white hover:bg-white/10 transition-all duration-200 my-auto"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Subtle glow line when scrolled */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent pointer-events-none" />
        )}
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed top-16 inset-x-0 bottom-0 z-40 md:hidden transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeAll}
        />

        {/* Slide-in panel — anchored below navbar */}
        <div
          id="mobile-nav"
          className={`absolute top-0 right-0 bottom-0 w-[min(300px,82vw)] bg-[#060b1a] border-l border-white/[0.08] flex flex-col transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel links */}
          <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.name}>
                  <div className="w-full flex items-center justify-between rounded-xl hover:bg-white/[0.05] transition-all duration-150">
                    <a
                      href={link.href}
                      className="flex-1 px-3.5 py-3 text-[14px] font-medium text-white/70 hover:text-white"
                      onClick={closeAll}
                    >
                      {link.name}
                    </a>
                    <button
                      className="px-3.5 py-3 text-white/70 hover:text-white"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      aria-expanded={mobileServicesOpen}
                      aria-label="Toggle services menu dropdown"
                    >
                      <ChevronDown
                        size={14}
                        className={`opacity-40 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileServicesOpen
                        ? "max-h-64 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="ml-3 pl-3 border-l border-white/[0.07] mt-1 space-y-0.5">
                      {services.map((svc) => (
                        <a
                          key={svc.name}
                          href={`/services#${svc.id}`}
                          className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] text-white/50 hover:text-white/80 hover:bg-white/[0.04] transition-all duration-150"
                          onClick={closeAll}
                        >
                          <svc.icon
                            size={14}
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
                  className="flex items-center px-3.5 py-3 rounded-xl text-[14px] font-medium text-white/70 hover:text-white hover:bg-white/[0.05] transition-all duration-150"
                  onClick={closeAll}
                >
                  {link.name}
                </a>
              ),
            )}
          </nav>

          {/* Panel footer */}
          <div className="px-4 pb-8 pt-4 border-t border-white/[0.06] shrink-0 space-y-3">
            <a
              href="#contact"
              className="block w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-[14px] font-semibold rounded-xl text-center shadow-[0_4px_16px_rgba(37,99,235,0.4)] transition-all duration-200"
              onClick={closeAll}
            >
              Free Consultation
            </a>
            <p className="text-center text-[11px] text-white/20 tracking-wide">
              🇳🇵 Proudly serving businesses across Nepal
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
