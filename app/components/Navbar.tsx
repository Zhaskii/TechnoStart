"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Code2, Globe } from "lucide-react";

const services = [
  { name: "Web Development", icon: Code2, desc: "Full-stack solutions" },
  { name: "Digital Marketing", icon: Globe, desc: "Online presence" },
];

const navLinks = [
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenus = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50"
            : "bg-white border-b border-gray-200/30"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-3 shrink-0"
              aria-label="TechnoStart — Home"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-md">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900 tracking-tight">
                  TECHNOSTART
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  Solutions
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 ml-8">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.name}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-20">
                        {services.map((svc) => (
                          <a
                            key={svc.name}
                            href={`/services#${svc.name.toLowerCase().replace(" ", "-")}`}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0 group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                              <svc.icon size={16} className="text-blue-600" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900">
                                {svc.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                {svc.desc}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </a>
                ),
              )}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block ml-auto">
              <a
                href="#contact"
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeMenus}
          />
          <div className="relative bg-white border-b border-gray-200 max-h-[calc(100vh-64px)] overflow-y-auto">
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.name}>
                    <button
                      className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-3 py-1 space-y-1 border-l-2 border-blue-600">
                        {services.map((svc) => (
                          <a
                            key={svc.name}
                            href={`/services#${svc.name.toLowerCase().replace(" ", "-")}`}
                            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            onClick={closeMenus}
                          >
                            <svc.icon size={14} className="text-blue-600" />
                            {svc.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={closeMenus}
                  >
                    {link.name}
                  </a>
                ),
              )}
            </nav>
            <div className="px-4 py-4 border-t border-gray-200">
              <a
                href="#contact"
                className="block w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg text-center transition-colors"
                onClick={closeMenus}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
