import { Link } from "../router";
import { COMPANY, SERVICE_CATEGORIES } from "../data";
import { PageHero, Section } from "../components/Section";

export default function Services() {
  return (
    <>
      <PageHero
        breadcrumb="Our Services"
        title="Complete Home Repair & Maintenance"
        subtitle="From quick fixes to full property maintenance — we've got every job covered."
      />

      <Section className="bg-white">
        <div className="space-y-10">
          {SERVICE_CATEGORIES.map((category, idx) => (
            <div
              key={category.id}
              id={category.id}
              className="bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Left header */}
                <div className="lg:col-span-1 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 lg:p-10 text-white relative overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl" />
                  <div className="relative">
                    <div className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">
                      Service {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div className="text-6xl mb-4">{category.icon}</div>
                    <h2 className="text-2xl font-extrabold leading-tight mb-3">
                      {category.title}
                    </h2>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {category.short}
                    </p>
                    <a
                      href={COMPANY.phoneHref}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-lg hover:-translate-y-0.5 transition"
                    >
                      📞 Get a Quote
                    </a>
                  </div>
                </div>

                {/* Right items */}
                <div className="lg:col-span-2 p-8 lg:p-10">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-orange-600 mb-5">
                    What's Included
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                    {category.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 group"
                      >
                        <div className="mt-1 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition">
                          <svg
                            className="w-3.5 h-3.5 text-orange-600 group-hover:text-white transition"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-slate-700 text-sm font-medium leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Don't See What You Need?
          </h2>
          <p className="mt-3 text-white/90 text-lg max-w-2xl mx-auto">
            We handle a wide variety of repairs and projects. Just give us a call —
            chances are, we can help.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-7 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition"
            >
              📞 {COMPANY.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-7 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
