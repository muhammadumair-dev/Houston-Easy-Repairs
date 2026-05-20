import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "../router";
import { SERVICE_CATEGORIES } from "../data";
import {
  ArrowUpRight,
  TrendingUp,
  Users,
  ShieldCheck,
  Sparkles,
  CalendarDays,
  DollarSign,
  BarChart3,
  CheckCircle,
} from "lucide-react";

const budgetSegments = [
  { label: "Cold Ads", percent: 65, color: "from-blue-500 to-cyan-400" },
  { label: "Retargeting", percent: 25, color: "from-cyan-400 to-blue-500" },
  { label: "Testing", percent: 10, color: "from-slate-500 to-slate-400" },
];

const audienceCards = [
  {
    title: "Cold Audience Targeting",
    items: [
      "Homeowners aged 30-55",
      "Renovation interest signals",
      "Local service intent profiles",
    ],
    icon: Sparkles,
  },
  {
    title: "Warm Retargeting Audience",
    items: [
      "Website visitors",
      "Lead form engagers",
      "Past job estimate viewers",
    ],
    icon: ShieldCheck,
  },
];

const campaignStructure = [
  {
    title: "Ad Set 1",
    subtitle: "Cold audience",
    detail: "Broad reach across homeowners near Houston with repair intent.",
  },
  {
    title: "Ad Set 2",
    subtitle: "Retargeting",
    detail: "High-converting follow-ups for engaged prospects.",
  },
];

const creativeCards = [
  {
    title: "Before / After Ads",
    detail: "Visual storytelling that makes repair outcomes irresistible.",
    icon: CheckCircle,
  },
  {
    title: "Social Proof Ads",
    detail: "Trust drivers with real reviews, testimonials, and job snapshots.",
    icon: Users,
  },
  {
    title: "Urgency Ads",
    detail: "Time-sensitive offers for immediate service bookings.",
    icon: Sparkles,
  },
];

const projections = [
  { label: "Conservative", cpl: "$18.20", leads: "140", roi: "210%" },
  { label: "Target", cpl: "$16.40", leads: "220", roi: "280%" },
  { label: "Best Case", cpl: "$13.50", leads: "260", roi: "360%" },
];

const timelineSteps = [
  { week: "Week 1", title: "Launch", detail: "Campaign setup, creative testing, and audience rollout.", icon: CalendarDays },
  { week: "Week 2", title: "Analyze", detail: "Performance review, conversion signals, and pacing checks.", icon: BarChart3 },
  { week: "Week 3", title: "Optimize", detail: "Creative refresh, bid efficiency, and retargeting tuning.", icon: TrendingUp },
  { week: "Week 4", title: "Scale", detail: "Budget expansion and scaled lead delivery for growth.", icon: ArrowUpRight },
];

export default function MetaAds() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-primary-bg selection:bg-primary-accent selection:text-white">
      <section className="relative overflow-hidden pt-28 pb-16 lg:pb-20">
        <div className="absolute inset-x-0 top-0 h-[340px] bg-gradient-to-b from-blue-950/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-24 top-24 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute right-0 top-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-secondary-bg/60 border border-border px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-muted-text">
                Agency dashboard for Meta Ads
              </div>
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-primary-text leading-tight">
                  Meta Ads Strategy <span className="text-primary-accent">2026</span>
                </h1>
                <p className="max-w-2xl text-lg sm:text-xl text-secondary-text leading-relaxed">
                  Facebook & Instagram Lead Generation for Local Businesses. A premium SaaS-style dashboard that visualizes budget, audiences, campaign structure, and growth projections.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn-primary !py-4 !px-8 !text-sm">
                    Book Consultation
                  </Link>
                  <Link to="/contact" className="btn-outline !py-4 !px-8 !text-sm">
                    Request Campaign Plan
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="glass-card border border-border/70 p-8 rounded-[2rem] shadow-premium">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-muted-text font-black">Budget</p>
                      <p className="mt-4 text-4xl font-black text-primary-text">$500 / month</p>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-500/10 text-blue-300">
                      <DollarSign size={24} />
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-secondary-text">Smart allocation across cold ads, retargeting, and creative testing for local home repair campaigns.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }} className="glass-card border border-border/70 p-8 rounded-[2rem] shadow-premium">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-muted-text font-black">Campaign Status</p>
                      <p className="mt-4 text-4xl font-black text-primary-text">Live & Optimizing</p>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                      <TrendingUp size={24} />
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-secondary-text">Ongoing performance improvements with real-time retargeting and creative refresh cycles.</p>
                </motion.div>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="glass-card rounded-[2rem] border border-border/70 p-8 shadow-premium">
              <div className="flex items-center justify-between gap-6 mb-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-text font-black">KPI overview</p>
                  <h2 className="mt-4 text-3xl font-black text-primary-text">Campaign performance at a glance</h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary-accent bg-blue-500/10">
                  SaaS analytics
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[1.75rem] bg-slate-950/80 border border-border p-6">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-muted-text font-black">Baseline conversions</p>
                      <p className="mt-3 text-3xl font-black text-primary-text">220 leads</p>
                    </div>
                    <div className="text-sm uppercase tracking-[0.25em] text-emerald-400 font-black">+18.2%</div>
                  </div>
                  <div className="relative h-3 rounded-full bg-blue-500/10 overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-3/4 rounded-full bg-gradient-to-r from-primary-accent to-secondary-accent" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.75rem] bg-slate-950/80 border border-border p-6">
                    <p className="text-sm uppercase tracking-[0.25em] text-muted-text font-black">Lead Funnel Depth</p>
                    <p className="mt-4 text-3xl font-black text-primary-text">4 stages</p>
                    <p className="mt-4 text-sm text-secondary-text leading-relaxed">Intercept interest, engage, convert and nurture high-value service clients.</p>
                  </div>
                  <div className="rounded-[1.75rem] bg-slate-950/80 border border-border p-6">
                    <p className="text-sm uppercase tracking-[0.25em] text-muted-text font-black">Budget Efficiency</p>
                    <p className="mt-4 text-3xl font-black text-primary-text">$0.98 CPC</p>
                    <p className="mt-4 text-sm text-secondary-text leading-relaxed">Performance-backed spend pacing for steady lead delivery.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-10">
        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="glass-card border border-border/50 p-8 rounded-[2.5rem] shadow-premium">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-text font-black">Budget Allocation</p>
                  <h2 className="mt-4 text-4xl font-black text-primary-text">$500 / month plan</h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.3em] text-secondary-text">
                  Optimized spend mix
                </div>
              </div>

              <div className="space-y-6">
                {budgetSegments.map((segment) => (
                  <div key={segment.label} className="space-y-3">
                    <div className="flex items-center justify-between text-sm uppercase tracking-[0.25em] font-black text-secondary-text">
                      <span>{segment.label}</span>
                      <span>{segment.percent}%</span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-900 overflow-hidden">
                      <div className={`h-full rounded-full bg-gradient-to-r ${segment.color}`} style={{ width: `${segment.percent}%` }} />
                    </div>
                  </div>
                ))}
                <div className="rounded-[2rem] bg-slate-950/80 border border-border p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-muted-text font-black">Breakdown</p>
                  <ul className="mt-6 space-y-4 text-secondary-text">
                    <li>Cold awareness ads drive new homeowner interest.</li>
                    <li>Retargeting reconnects warm leads with service offers.</li>
                    <li>Testing funds creative, messaging, and audience experiments.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-card border border-border/50 p-8 rounded-[2.5rem] shadow-premium">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-text font-black">Audience</p>
                  <h2 className="mt-4 text-4xl font-black text-primary-text">Cold & warm targeting</h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.3em] text-secondary-text">
                  Smart segmenting
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {audienceCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div key={card.title} className="rounded-[2rem] bg-slate-950/80 border border-border p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-500/10 text-primary-accent">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl font-black text-primary-text">{card.title}</h3>
                          <p className="text-xs uppercase tracking-[0.25em] text-muted-text font-black">Targeted segments</p>
                        </div>
                      </div>
                      <ul className="space-y-3 text-secondary-text">
                        {card.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card border border-border/50 p-8 rounded-[2.5rem] shadow-premium">
              <div className="flex flex-col gap-6 mb-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-text font-black">Campaign Structure</p>
                  <h2 className="mt-4 text-4xl font-black text-primary-text">Ad sets & funnel flow</h2>
                </div>
                <div className="rounded-[2rem] bg-slate-950/80 border border-border p-6 space-y-4">
                  {campaignStructure.map((item) => (
                    <div key={item.title} className="space-y-2">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm uppercase tracking-[0.25em] text-muted-text font-black">{item.subtitle}</p>
                          <h3 className="text-2xl font-black text-primary-text">{item.title}</h3>
                        </div>
                        <div className="rounded-full bg-primary-accent/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary-accent">Live</div>
                      </div>
                      <p className="text-secondary-text text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-[2rem] bg-slate-950/80 border border-border p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-muted-text font-black">Conversion Funnel</p>
                  <div className="mt-6 grid gap-4">
                    {[
                      "Discovery",
                      "Warm engagement",
                      "Lead capture",
                      "Booking conversion",
                    ].map((step, index) => (
                      <div key={step} className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-accent/10 text-primary-accent font-black">{index + 1}</div>
                        <div>
                          <p className="font-black text-primary-text">{step}</p>
                          <p className="text-sm text-secondary-text">{index === 0 ? "Top funnel awareness is built with cold creative." : index === 1 ? "Engagement campaigns build interest and trust." : index === 2 ? "Forms and lead magnets collect contact data." : "Retargeting closes the booked service."}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card border border-border/50 p-8 rounded-[2.5rem] shadow-premium">
              <div className="flex items-center justify-between mb-8 gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-text font-black">Creative Strategy</p>
                  <h2 className="mt-4 text-4xl font-black text-primary-text">Assets built for conversion</h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.3em] text-secondary-text">
                  Visual cadence
                </div>
              </div>
              <div className="grid gap-4">
                {creativeCards.map((card) => (
                  <div key={card.title} className="rounded-[2rem] bg-slate-950/80 border border-border p-6 flex items-start gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                      <card.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-primary-text">{card.title}</h3>
                      <p className="text-secondary-text text-sm leading-relaxed">{card.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] mt-10">
          <div className="glass-card border border-border/50 p-8 rounded-[2.5rem] shadow-premium">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-8">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-muted-text font-black">Performance Projections</p>
                <h2 className="mt-4 text-4xl font-black text-primary-text">Forecast dashboard</h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.3em] text-secondary-text">
                Forecast table
              </div>
            </div>
            <div className="grid gap-6 xl:grid-cols-3">
              {projections.map((item) => (
                <div key={item.label} className="rounded-[2rem] bg-slate-950/80 border border-border p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-muted-text font-black mb-4">{item.label}</p>
                  <p className="text-3xl font-black text-primary-text">{item.leads} leads</p>
                  <p className="mt-2 text-secondary-text text-sm">CPL {item.cpl} · ROI {item.roi}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-border bg-slate-950/80 p-6">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm uppercase tracking-[0.25em] text-muted-text font-black">Chart preview</p>
                <p className="text-xs uppercase tracking-[0.2em] text-primary-accent">Strong momentum</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Leads", value: 72, accent: "from-blue-500 to-cyan-400" },
                  { label: "Engagement", value: 84, accent: "from-cyan-400 to-blue-500" },
                  { label: "Conversion", value: 56, accent: "from-emerald-400 to-teal-400" },
                ].map((item) => (
                  <div key={item.label} className="space-y-3">
                    <div className="flex items-center justify-between text-sm uppercase tracking-[0.25em] text-secondary-text font-black">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-900 overflow-hidden">
                      <div className={`h-full rounded-full bg-gradient-to-r ${item.accent}`} style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card border border-border/50 p-8 rounded-[2.5rem] shadow-premium">
            <div className="flex items-center justify-between gap-4 mb-8">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-muted-text font-black">Lead Form</p>
                <h2 className="mt-4 text-4xl font-black text-primary-text">Client capture panel</h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.3em] text-secondary-text">
                Live demo
              </div>
            </div>

            {submitted ? (
              <div className="rounded-[2rem] bg-slate-950/80 border border-border p-10 text-center">
                <p className="text-primary-accent uppercase tracking-[0.2em] text-xs font-black mb-4">Submitted</p>
                <h3 className="text-3xl font-black text-primary-text mb-4">Thanks, we’ll reach out soon.</h3>
                <p className="text-secondary-text">Your campaign brief is ready for our Houston team to review.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-muted-text uppercase tracking-widest">Name</label>
                  <input className="w-full bg-secondary-bg/50 border border-border px-5 py-4 rounded-2xl text-primary-text text-sm font-bold focus:border-primary-accent outline-none transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-muted-text uppercase tracking-widest">Phone</label>
                  <input className="w-full bg-secondary-bg/50 border border-border px-5 py-4 rounded-2xl text-primary-text text-sm font-bold focus:border-primary-accent outline-none transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-muted-text uppercase tracking-widest">Service type</label>
                  <select className="w-full bg-secondary-bg/50 border border-border px-5 py-4 rounded-2xl text-primary-text text-sm font-bold focus:border-primary-accent outline-none transition-all" required>
                    <option value="">Choose service</option>
                    {SERVICE_CATEGORIES.map((service) => (
                      <option key={service.id} value={service.id}>{service.title}</option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-muted-text uppercase tracking-widest">ZIP code</label>
                    <input className="w-full bg-secondary-bg/50 border border-border px-5 py-4 rounded-2xl text-primary-text text-sm font-bold focus:border-primary-accent outline-none transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-muted-text uppercase tracking-widest">Call timing</label>
                    <select className="w-full bg-secondary-bg/50 border border-border px-5 py-4 rounded-2xl text-primary-text text-sm font-bold focus:border-primary-accent outline-none transition-all" required>
                      <option value="">Anytime</option>
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="evening">Evening</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full btn-primary !py-5 !rounded-2xl text-sm font-black uppercase tracking-[0.18em]">Submit Request</button>
              </form>
            )}
          </div>
        </div>

        <div className="glass-card border border-border/50 p-8 rounded-[2.5rem] shadow-premium mt-10">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-text font-black">30-Day Plan</p>
              <h2 className="mt-4 text-4xl font-black text-primary-text">Weekly growth timeline</h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-4">
              {timelineSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.week} className="rounded-[2rem] bg-slate-950/80 border border-border p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary-accent/10 text-primary-accent">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-muted-text font-black">{step.week}</p>
                        <h3 className="text-xl font-black text-primary-text">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-secondary-text text-sm leading-relaxed">{step.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
