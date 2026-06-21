import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Website Development", href: "services#webdev" },
    { label: "Digital Marketing", href: "services#marketing" },
  ];

  const contactItems = [
    {
      href: "mailto:technostar@gmail.com ",
      label: "technostar@gmail.com ",
      sublabel: "Email us",
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-blue-400">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
    {
      href: "tel:+977980-3100213",
      label: "+977 980-3100213",
      sublabel: "Call us",
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-blue-400">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      ),
    },
    {
      href: null,
      label: " New Baneshwor, Kathmandu, Nepal",
      sublabel: "Office",
      icon: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-blue-400">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
    },
  ];

  const socials = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      label: "Twitter / X",
      href: "https://www.x.com/",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#0a1628] text-slate-400 font-sans w-full">
      {/* Top Info Bar */}
      <div className="bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-3">
            <div className="flex items-center gap-2 text-blue-200 text-xs">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-blue-400 shrink-0"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              technostar@gmail.com
            </div>
            <div className="flex items-center gap-2 text-blue-200 text-xs">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-blue-400 shrink-0"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              +977 980-3100213
            </div>
            <div className="flex items-center gap-2 text-blue-200 text-xs">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-blue-400 shrink-0"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              New Baneshwor, Kathmandu, Nepal
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                TECHNO<span className="text-blue-400">STAR</span>
              </span>
            </div>

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-[#0c2350] border border-[#1e3a6e] rounded-md px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0"></span>
              <span className="text-xs text-blue-300">
                Actively taking projects
              </span>
            </div>

            <p className="text-sm leading-relaxed max-w-sm text-slate-500">
              Empowering businesses through digital innovation — delivering
              robust IT solutions that drive scalable and sustainable growth.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  target="_blank"
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-[#0f2044] border border-[#1e3a6e] flex items-center justify-center text-slate-500 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-400 transition-colors duration-200"
                  >
                    {label}
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3 h-3 stroke-current fill-none stroke-2 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Get in touch
            </h4>
            <ul className="space-y-4">
              {contactItems.map(({ href, label, sublabel, icon }) => (
                <li key={label} className="flex items-start gap-3">
                  {href ? (
                    <Link
                      href={href}
                      className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#0c2350] border border-[#1e3a6e] flex items-center justify-center shrink-0 mt-0.5">
                        {icon}
                      </div>
                    </Link>
                  ) : (
                    <div className="w-8 h-8 rounded-lg bg-[#0c2350] border border-[#1e3a6e] flex items-center justify-center shrink-0 mt-0.5">
                      {icon}
                    </div>
                  )}
                  <div>
                    <p className="text-xs text-slate-600 leading-none mb-1">
                      {sublabel}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200"
                      >
                        {label}
                      </a>
                    ) : (
                      <span className="text-sm text-slate-400">{label}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#1a2e4a]" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-600">
          <p>© {currentYear} Techno Star Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            <a
              href="#privacy"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#sitemap"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
