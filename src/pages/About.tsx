import { Link } from "../router";
import { COMPANY } from "../data";
import { PageHero, Section, SectionHeader } from "../components/Section";

const COMMITMENTS = [
  {
    icon: "🤝",
    title: "Professional Service",
    desc: "Courteous, uniformed technicians who respect your home and your time.",
  },
  {
    icon: "💯",
    title: "Honesty First",
    desc: "Straightforward assessments and recommendations — never pushy upsells.",
  },
  {
    icon: "🏆",
    title: "Quality Workmanship",
    desc: "We use the right tools and materials to make every repair last.",
  },
  {
    icon: "💵",
    title: "Fair Pricing",
    desc: "Transparent, upfront quotes with no hidden fees or surprise charges.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        breadcrumb="About Us"
        title="Repair Experts You Can Count On"
        subtitle="Locally owned and operated, Houston Easy Repairs has built its reputation one quality repair at a time."
      />

      {/* INTRO */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block text-orange-600 text-xs font-bold uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full mb-4">
              Who We Are
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Houston's Go-To Team for Reliable Home Repairs
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Houston Easy Repairs is a full-service home repair and maintenance
                company proudly serving Rosenberg, Houston, Richmond, Sugar Land,
                Katy, and surrounding communities. We started with a simple goal:
                make professional repair services <strong>easy, affordable, and
                stress-free</strong> for every homeowner and business in our area.
              </p>
              <p>
                Whether you need a small handyman fix, a complex electrical or
                plumbing repair, or ongoing property maintenance, our experienced
                technicians bring skill, integrity, and pride to every job. We
                treat your property like our own — and we don't consider a job
                done until you're completely satisfied.
              </p>
              <p>
                With years of hands-on experience and a commitment to excellence,
                we've become the trusted name local families and businesses turn
                to when they need it done right the first time.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:-translate-y-0.5 transition"
              >
                See Our Services →
              </Link>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-200 transition"
              >
                📞 {COMPANY.phone}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "10+", label: "Years of Experience" },
              { num: "5,000+", label: "Repairs Completed" },
              { num: "5", label: "Cities Served" },
              { num: "100%", label: "Satisfaction Goal" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg transition"
              >
                <div className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  {s.num}
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-700">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* MISSION */}
      <Section className="bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 lg:p-14 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-600/20 rounded-full blur-3xl" />
            <div className="relative">
              <div className="text-5xl mb-4">🎯</div>
              <div className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">
                Our Mission
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-5 leading-tight">
                To deliver dependable, high-quality repair and maintenance services
                that make life easier for every customer we serve.
              </h3>
              <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
                We aim to be the most trusted name in home and commercial repair
                across the greater Houston area — by combining skilled craftsmanship,
                honest communication, and genuine care for our community.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* COMMITMENT */}
      <Section className="bg-white">
        <SectionHeader
          eyebrow="Our Commitment"
          title="What You Can Expect From Us"
          subtitle="Every job we take on is guided by these four principles."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMITMENTS.map((c) => (
            <div
              key={c.title}
              className="bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 hover:border-orange-200 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center text-3xl mb-5">
                {c.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{c.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
