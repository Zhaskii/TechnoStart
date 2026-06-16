"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white text-slate-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-20 sm:px-8 lg:py-32">
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
          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 p-12 w-96">
            <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Proven track record of successful projects</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Expert team of developers and marketers</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Transparent communication and results</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Affordable pricing with no hidden costs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
