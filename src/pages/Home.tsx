import { Link } from "../router";
import { COMPANY, SERVICE_AREAS, SERVICE_CATEGORIES, WHY_CHOOSE_US } from "../data";
import { Section, SectionHeader } from "../components/Section";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange-500 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] bg-red-600 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-orange-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                Available 6 days a week
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05]">
                Houston <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Easy Repairs</span>
              </h1>
              <p className="mt-5 text-xl sm:text-2xl text-slate-200 font-semibold leading-snug">
                Your Trusted Experts for Fast, Reliable Home Repair & Maintenance Services
              </p>
              <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                From quick handyman fixes to electrical, plumbing, and full property
                maintenance — our skilled technicians deliver quality workmanship at
                fair, transparent prices for both homes and businesses.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-7 py-4 rounded-xl font-bold shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5 transition"
                >
                  📞 Call {COMPANY.phone}
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white px-7 py-4 rounded-xl font-bold hover:bg-white/20 transition"
                >
                  Request a Quote →
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-slate-300 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-orange-400">📍</span> Rosenberg, TX
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-400">⭐</span> 5-Star Service
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-400">✓</span> Licensed
                </div>
              </div>
            </div>

            {/* Right card */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/30 to-red-600/30 rounded-3xl blur-xl" />
                <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                  <div className="text-orange-600 text-xs font-bold uppercase tracking-widest mb-2">
                    What We Do
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-6">
                    Complete Repair Solutions
                  </h3>
                  <div className="space-y-4">
                    {SERVICE_CATEGORIES.slice(0, 5).map((s) => (
                      <div key={s.id} className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition">
                        <div className="text-2xl">{s.icon}</div>
                        <div>
                          <div className="font-bold text-slate-900 text-sm">
                            {s.title}
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5">
                            {s.short}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/services"
                    className="mt-6 block text-center bg-slate-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-slate-800 transition"
                  >
                    Explore All Services →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <Section className="bg-white">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Built on Trust, Powered by Experience"
          subtitle="Here's why homeowners and businesses across Houston rely on us for their repair and maintenance needs."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, i) => (
            <div
              key={i}
              className="group bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 hover:border-orange-200 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES OVERVIEW */}
      <Section className="bg-slate-50">
        <SectionHeader
          eyebrow="Our Services"
          title="One Call. Every Repair Handled."
          subtitle="We provide a wide range of repair and maintenance services for residential and commercial properties — all delivered with professionalism and care."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_CATEGORIES.map((s) => (
            <Link
              key={s.id}
              to="/services"
              className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-slate-100 hover:border-orange-200 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-2xl shadow-lg">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-tight flex-1">
                  {s.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {s.short}
              </p>
              <div className="text-orange-600 text-sm font-bold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                Learn more <span>→</span>
              </div>
            </Link>
          ))}

          {/* CTA card */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-7 text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-3xl mb-3">📞</div>
              <h3 className="text-xl font-bold mb-2">Need a Repair Today?</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Talk to our team for a free, no-obligation quote on any service.
              </p>
            </div>
            <a
              href={COMPANY.phoneHref}
              className="mt-5 inline-block text-center bg-gradient-to-r from-orange-500 to-red-600 text-white px-5 py-3 rounded-xl font-bold shadow-lg hover:shadow-orange-500/30 transition"
            >
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </Section>

      {/* SERVICE AREAS */}
      <Section className="bg-white">
        <SectionHeader
          eyebrow="Service Areas"
          title="Proudly Serving the Greater Houston Area"
          subtitle="Local, on-time service across these communities — and growing."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area}
              className="group bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-6 text-center hover:border-orange-300 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition">📍</div>
              <div className="font-bold text-slate-900">{area}</div>
              <div className="text-xs text-slate-500 mt-1">Texas</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Don't see your area? Give us a call!</p>
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition"
          >
            📞 {COMPANY.phone}
          </a>
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
                Ready to fix it the easy way?
              </h2>
              <p className="mt-2 text-white/90 text-lg">
                Get fast, reliable service from Houston's trusted repair experts.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-7 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition"
              >
                📞 Call Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-7 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition"
              >
                Send a Message →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
