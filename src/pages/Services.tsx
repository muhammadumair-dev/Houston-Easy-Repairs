import { Link } from "../router";
import { COMPANY, SERVICE_CATEGORIES } from "../data";
import { PageHero, Section } from "../components/Section";
import * as LucideIcons from "lucide-react";
import { Phone, MessageSquare } from "lucide-react";

/**
 * Handcrafted Services page for Houston Easy Repairs.
 * Features a structured layout with deep visual hierarchy and premium details.
 */
export default function Services() {
  return (
    <div className="bg-primary-bg">
      <PageHero
        breadcrumb="Services Catalog"
        title="Complete Repair & Maintenance"
        subtitle="From precise handyman fixes to specialized technical repairs — we handle every project with professional care."
      />

      <Section className="bg-primary-bg">
        <div className="space-y-24 lg:space-y-36">
          {SERVICE_CATEGORIES.map((category, idx) => (
            <div
              key={category.id}
              id={category.id}
              className="group relative bg-secondary-bg/20 backdrop-blur-sm border border-border/50 rounded-[3rem] overflow-hidden transition-all duration-700 hover:border-primary-accent/30 shadow-premium"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                {/* Visual Header Sidebar */}
                <div className="lg:col-span-4 bg-secondary-bg/50 p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden border-r border-border/50">
                  <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary-accent/10 rounded-full blur-[90px]" />
                  
                  <div className="relative z-10">
                    <div className="text-primary-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8 bg-primary-accent/10 py-2 px-4 inline-block rounded-full border border-primary-accent/20">
                      Segment {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div className="text-7xl mb-10 transform transition-transform duration-700 group-hover:scale-110 origin-left grayscale group-hover:grayscale-0 text-primary-accent">
                      {(() => {
                        const Icon = (LucideIcons as any)[category.icon];
                        return Icon ? <Icon size={64} strokeWidth={1.5} /> : null;
                      })()}
                    </div>
                    <h2 className="text-4xl font-black text-primary-text leading-[1.1] tracking-tighter mb-8 uppercase">
                      {category.title}
                    </h2>
                    <p className="text-secondary-text text-base leading-relaxed mb-12 font-medium">
                      {category.short}
                    </p>
                  </div>

                  <div className="relative z-10">
                    <a
                      href={COMPANY.phoneHref}
                      className="btn-primary !px-8 !py-4 !text-[11px] !rounded-xl"
                    >
                      GET ESTIMATE
                    </a>
                  </div>
                </div>

                {/* Items/Capabilities Grid */}
                <div className="lg:col-span-8 p-12 lg:p-16 bg-primary-bg/20">
                  <div className="flex items-center gap-6 mb-14">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-text">
                      Core Capabilities
                    </h3>
                    <div className="h-px flex-1 bg-border/50" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-x-16 gap-y-8">
                    {category.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-5 group/item"
                      >
                        <div className="mt-1 w-6 h-6 rounded-lg border border-border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:border-primary-accent group-hover/item:bg-primary-accent/10 shadow-sm">
                          <svg
                            className="w-3 h-3 text-primary-accent opacity-0 group-hover/item:opacity-100 transition-opacity"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={4}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-secondary-text text-base font-bold leading-snug transition-colors duration-300 group-hover/item:text-primary-text">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Subtle Decorative element */}
                  <div className="mt-20 pt-10 border-t border-border/50 flex items-center justify-between">
                    <div className="text-muted-text text-[10px] font-black uppercase tracking-[0.2em]">
                      Professional Execution Guaranteed
                    </div>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-1.5 h-1.5 bg-primary-accent/30 rounded-full group-hover:bg-primary-accent/60 transition-colors" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA SECTION */}
      <section className="bg-primary-accent py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-accent to-secondary-accent opacity-90" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl lg:text-8xl font-black text-white tracking-tighter mb-10 uppercase leading-[0.9]">
            Don't See What<br />You're Looking For?
          </h2>
          <p className="text-white/90 text-xl sm:text-2xl font-bold max-w-3xl mx-auto mb-16 leading-relaxed">
            We handle a wide variety of custom repairs and specialized technical projects. 
            Give us a call — we likely have the expert solution you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-4 bg-white text-primary-accent px-14 py-6 font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 hover:bg-primary-bg hover:text-white rounded-2xl shadow-2xl"
            >
              <Phone size={18} strokeWidth={3} /> {COMPANY.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-4 border-2 border-white text-white px-14 py-6 font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 hover:bg-white hover:text-primary-accent rounded-2xl"
            >
              <MessageSquare size={18} strokeWidth={3} /> CONTACT OUR TEAM
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
