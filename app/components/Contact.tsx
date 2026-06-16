"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  // Form State handling
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  useEffect(() => {
    // 1. Hero Content Entrance (Plays instantly on mount)
    gsap.fromTo(
      ".contact-hero-anim",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" },
    );

    // 2. Main Layout Grid Elements Reveal
    gsap.fromTo(
      ".contact-grid-wrapper",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-grid-trigger",
          start: "top 85%",
        },
      },
    );

    // 3. Bottom Office Map Section Reveal
    gsap.fromTo(
      ".contact-map-wrapper",
      { opacity: 0, scale: 0.97, y: 35 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-map-trigger",
          start: "top 85%",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Mimic API post delay
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus({
        type: "success",
        message:
          "Thank you! Your message has been successfully sent. We'll be in touch within one business day.",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setSubmitStatus({
        type: "error",
        message:
          "Something went wrong. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-blue-500 selection:text-white">
      <main>
        {/* ── HERO SECTION ── */}
        <section className="relative py-24 lg:py-32 bg-[#060816] overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            {/* Soft tech ambient ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-72 bg-indigo-500/10 blur-3xl rounded-full" />
          </div>
          <div className="relative max-w-3xl mx-auto px-4 text-center">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-6 contact-hero-anim opacity-0">
              Connect
            </span>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-white mb-6 contact-hero-anim opacity-0">
              Contact Us
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto contact-hero-anim opacity-0">
              Reach out for a consultation or custom quote. We typically respond
              within one business day.
            </p>
          </div>
        </section>

        {/* ── CONTACT GRID & DETAILS ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-10 relative z-10 contact-grid-trigger">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Contact Info Card Wrapper */}
            <div className="lg:col-span-5 contact-grid-wrapper opacity-0 will-change-transform">
              <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Get in touch
                  </h2>
                  <p className="text-sm text-slate-500">
                    Have an ambitious project idea? Let's turn it into reality
                    together.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                        Email
                      </h4>
                      <p className="text-slate-800 font-medium hover:text-blue-600 transition-colors">
                        <a href="mailto:info@technostart.com">
                          info@technostart.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                        Phone
                      </h4>
                      <p className="text-slate-800 font-medium hover:text-blue-600 transition-colors">
                        <a href="tel:+15550100">+1 555 0100</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                        Address
                      </h4>
                      <p className="text-slate-600 leading-relaxed font-medium">
                        123 Business Ave, City, Country
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-slate-100" />

                {/* Social links */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Follow Our Journey
                  </h4>
                  <div className="flex gap-3">
                    {/* LinkedIn SVG */}
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all active:scale-95"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>

                    {/* Twitter / X SVG */}
                    <a
                      href="#"
                      aria-label="Twitter"
                      className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all active:scale-95"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>

                    {/* Facebook SVG */}
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all active:scale-95"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form Wrapper */}
            <div className="lg:col-span-7 contact-grid-wrapper opacity-0 will-change-transform">
              <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Status Banner */}
                  {submitStatus.type === "success" && (
                    <div className="flex gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-sm animate-in fade-in slide-in-from-top-2 duration-300">
                      <CheckCircle2
                        size={20}
                        className="text-emerald-600 shrink-0 mt-0.5"
                      />
                      <p>{submitStatus.message}</p>
                    </div>
                  )}

                  {submitStatus.type === "error" && (
                    <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-800 text-sm">
                      <p>{submitStatus.message}</p>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-bold uppercase tracking-wider text-slate-500"
                      >
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-bold uppercase tracking-wider text-slate-500"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="text-xs font-bold uppercase tracking-wider text-slate-500"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                        placeholder="+1 (555) 0100"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="subject"
                        className="text-xs font-bold uppercase tracking-wider text-slate-500"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                        placeholder="Project Partnership"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-bold uppercase tracking-wider text-slate-500"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all outline-none resize-none"
                      placeholder="Tell us about your digital goals or requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-md shadow-blue-200 active:scale-98 text-sm cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ── MAP CONTAINER ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 contact-map-trigger">
          {/* GSAP Outer Wrapper Layer */}
          <div className="contact-map-wrapper opacity-0 will-change-transform">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 inline-block"></span>{" "}
                Our Office Headquarters
              </h3>

              {/* Map Box Container */}
              <div className="w-full h-80 sm:h-96 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200/60 relative flex flex-col justify-center items-center text-center p-4">
                <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                <MapPin
                  size={36}
                  className="text-blue-600 animate-bounce mb-3 relative z-10"
                />
                <p className="text-slate-600 font-semibold relative z-10">
                  Google Maps Interactive Engine Location
                </p>
                <p className="text-xs text-slate-400 max-w-xs mt-1 relative z-10">
                  Embed an active `&lt;iframe&gt;` link here to generate
                  customized geographical direction routers for visitors.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
