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
        <div className="space-y-12 sm:space-y-24 lg:space-y-36">
          {SERVICE_CATEGORIES.map((category, idx) => (
            <div
              key={category.id}
              id={category.id}
              className="group relative bg-secondary-bg/20 backdrop-blur-sm border border-border/50 rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden transition-all duration-700 hover:border-primary-accent/30 shadow-premium"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                {/* Visual Header Sidebar */}
                <div className="lg:col-span-4 bg-secondary-bg/50 p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-border/50">
                  <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary-accent/10 rounded-full blur-[90px]" />
                  
                  <div className="relative z-10">
                    <div className="text-primary-accent text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-6 sm:mb-8 bg-primary-accent/10 py-1.5 sm:py-2 px-3 sm:px-4 inline-block rounded-full border border-primary-accent/20">
                      Segment {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div className="mb-6 sm:mb-10 transform transition-transform duration-700 group-hover:scale-110 origin-left grayscale group-hover:grayscale-0 text-primary-accent">
                      {(() => {
                        const Icon = (LucideIcons as any)[category.icon];
                        return Icon ? <Icon className="w-12 h-12 sm:w-16 sm:h-16" strokeWidth={1.5} /> : null;
                      })()}
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-black text-primary-text leading-[1.1] tracking-tighter mb-4 sm:mb-8 uppercase">
                      {category.title}
                    </h2>
                    <p className="text-sm sm:text-base text-secondary-text leading-relaxed mb-8 sm:mb-12 font-medium">
                      {category.short}
                    </p>
                  </div>

                  <div className="relative z-10">
                    <a
                      href={COMPANY.phoneHref}
                      className="btn-primary !px-8 !py-4 !text-[10px] sm:!text-[11px] !rounded-lg sm:!rounded-xl w-full sm:w-auto inline-block text-center"
                    >
                      GET ESTIMATE
                    </a>
                  </div>
                </div>

                {/* Items/Capabilities Grid */}
                <div className="lg:col-span-8 p-8 sm:p-12 lg:p-16 bg-primary-bg/20">
                  <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-14">
                    <h3 className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-muted-text">
                      Core Capabilities
                    </h3>
                    <div className="h-px flex-1 bg-border/50" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-4 sm:gap-y-8">
                    {category.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-4 sm:gap-5 group/item"
                      >
                        <div className="mt-1 w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg border border-border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:border-primary-accent group-hover/item:bg-primary-accent/10 shadow-sm">
                          <svg
                            className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary-accent opacity-0 group-hover/item:opacity-100 transition-opacity"
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
                        <span className="text-sm sm:text-base text-secondary-text font-bold leading-snug transition-colors duration-300 group-hover/item:text-primary-text">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Subtle Decorative element */}
                  <div className="mt-12 sm:mt-20 pt-6 sm:pt-10 border-t border-border/50 flex items-center justify-between">
                    <div className="text-muted-text text-[8px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                      Professional Execution Guaranteed
                    </div>
                    <div className="flex gap-1.5 sm:gap-2">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-primary-accent/30 rounded-full group-hover:bg-primary-accent/60 transition-colors" />
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
      <section className="bg-primary-accent py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-accent to-secondary-accent opacity-90" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl lg:text-8xl font-black text-white tracking-tighter mb-8 sm:mb-10 uppercase leading-[1] sm:leading-[0.9]">
            Don't See What<br />You're Looking For?
          </h2>
          <p className="text-white/90 text-base sm:text-xl lg:text-2xl font-bold max-w-3xl mx-auto mb-10 sm:mb-16 leading-relaxed">
            We handle a wide variety of custom repairs and specialized technical projects. 
            Give us a call — we likely have the expert solution you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-3 sm:gap-4 bg-white text-primary-accent px-8 sm:px-14 py-4 sm:py-6 font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs transition-all duration-500 hover:bg-primary-bg hover:text-white rounded-xl sm:rounded-2xl shadow-2xl w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} /> {COMPANY.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 sm:gap-4 border-2 border-white text-white px-8 sm:px-14 py-4 sm:py-6 font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs transition-all duration-500 hover:bg-white hover:text-primary-accent rounded-xl sm:rounded-2xl w-full sm:w-auto"
            >
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} /> CONTACT OUR TEAM
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
