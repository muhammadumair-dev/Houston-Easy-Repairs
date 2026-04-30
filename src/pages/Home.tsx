import { useState } from "react";
import { Link } from "../router";
import { COMPANY, SERVICE_AREAS, SERVICE_CATEGORIES, WHY_CHOOSE_US } from "../data";
import { Section, SectionHeader, ExpertiseSection, ServiceGridCard } from "../components/Section";
import FindHandyman from "../components/FindHandyman";
import ServiceCategories from "../components/ServiceCategories";
import { Phone, FileText, CheckCircle2, ChevronDown, MessageSquare } from "lucide-react";

/**
 * Handcrafted Home page for Houston Easy Repairs.
 */
export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  
  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const serviceImages: Record<string, string> = {
    handyman: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    electrical: "https://images.unsplash.com/photo-162105251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    plumbing: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    maintenance: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    installation: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  };

  const expertiseServices = [
    {
      title: 'Residential Roofing',
      description:
        'Invest in a high-quality roof to protect and enhance your home in Houston, TX. Our expert team will help you choose the perfect roofing solution for lasting durability.',
      image:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      buttonText: 'Technical Specs',
    },
    {
      title: 'Commercial Roofing',
      description:
        'Safeguard your business with our professional roofing services. Our maintenance programs ensure long-term savings and optimal roof performance.',
      image:
        'https://images.unsplash.com/photo-1541888040713-3929428cc58d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      buttonText: 'Enterprise Solutions',
    },
    {
      title: 'Remodeling Services',
      description:
        'Transform your space with expert remodeling that adds value, comfort, and modern style to your home or business. From kitchens to full interior makeovers.',
      image:
        'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      buttonText: 'View Portfolio',
    },
  ];

  return (
    <div className="bg-primary-bg selection:bg-primary-accent selection:text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[70rem] h-[70rem] bg-primary-accent/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/4 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-secondary-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-bg/50 to-primary-bg" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 bg-secondary-bg/50 border border-border/50 px-5 py-2.5 rounded-full mb-10 backdrop-blur-md">
                <div className="flex h-2.5 w-2.5 relative">
                  <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-accent opacity-75"></div>
                  <div className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-accent"></div>
                </div>
                <span className="text-primary-text text-[10px] font-black uppercase tracking-[0.2em]">Licensed • Insured • Rosenberg TX</span>
              </div>
              
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-primary-text leading-[0.9] mb-10 tracking-tighter uppercase">
                HOUSTON<br />
                <span className="text-gradient">EASY REPAIRS</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-secondary-text font-medium leading-relaxed mb-12 max-w-2xl mx-auto lg:mx-0">
                Premium Home Repair & Maintenance Solutions. <br className="hidden sm:block" />
                Experience the ease of professional property care delivered by experts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <a
                  href={COMPANY.phoneHref}
                  className="btn-primary !px-12 !py-6 !text-base flex items-center justify-center gap-3"
                >
                  <Phone size={20} strokeWidth={3} /> CALL {COMPANY.phone}
                </a>
                <Link
                  to="/contact"
                  className="btn-outline !px-12 !py-6 !text-base flex items-center justify-center gap-3"
                >
                  <FileText size={20} strokeWidth={3} /> REQUEST QUOTE
                </Link>
              </div>

              <div className="mt-20 flex items-center gap-12 justify-center lg:justify-start text-muted-text text-[10px] font-black tracking-[0.2em] uppercase">
                <div className="flex flex-col gap-2">
                  <div className="text-primary-text text-3xl font-black tracking-tighter">5.0</div>
                  <div>Google Rating</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="flex flex-col gap-2">
                  <div className="text-primary-text text-3xl font-black tracking-tighter">100%</div>
                  <div>Reliability</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="flex flex-col gap-2">
                  <div className="text-primary-text text-3xl font-black tracking-tighter">6</div>
                  <div>Days A Week</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-6 border border-primary-accent/10 rounded-[2.5rem] pointer-events-none z-0" />
              
              <div className="relative glass-card p-10 shadow-premium overflow-hidden group rounded-[2rem] border-border/50">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary-accent to-secondary-accent" />
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-black text-primary-text tracking-tighter uppercase mb-2">
                    Quick Quote
                  </h3>
                  <p className="text-muted-text text-[10px] font-black uppercase tracking-[0.2em] mb-10">
                    Get an estimate in minutes
                  </p>

                  {submitted ? (
                    <div className="py-16 text-center animate-in fade-in zoom-in duration-500">
                      <div className="flex justify-center mb-6 text-primary-accent">
                        <CheckCircle2 size={64} strokeWidth={1.5} />
                      </div>
                      <h4 className="text-2xl font-black text-primary-text mb-3 uppercase tracking-tight">Request Sent!</h4>
                      <p className="text-secondary-text text-base">Our specialist will call you shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleHeroSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-muted-text uppercase tracking-widest ml-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="EX: JOHN DOE" 
                          className="w-full bg-secondary-bg/50 border border-border px-6 py-4 text-primary-text text-xs font-bold tracking-widest focus:border-primary-accent outline-none transition-all rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-muted-text uppercase tracking-widest ml-1">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          placeholder="EX: (555) 000-0000" 
                          className="w-full bg-secondary-bg/50 border border-border px-6 py-4 text-primary-text text-xs font-bold tracking-widest focus:border-primary-accent outline-none transition-all rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-muted-text uppercase tracking-widest ml-1">Service Needed</label>
                        <div className="relative">
                          <select 
                            required
                            className="w-full bg-secondary-bg/50 border border-border px-6 py-4 text-primary-text text-xs font-bold tracking-widest focus:border-primary-accent outline-none transition-all rounded-xl appearance-none"
                          >
                            <option value="">CHOOSE A SERVICE</option>
                            {SERVICE_CATEGORIES.map(s => (
                              <option key={s.id} value={s.id}>{s.title.toUpperCase()}</option>
                            ))}
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-text">
                            <ChevronDown size={16} />
                          </div>
                        </div>
                      </div>
                      <button 
                        type="submit"
                        className="w-full btn-primary !mt-8 !rounded-xl"
                      >
                        GET FREE QUOTE
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <ExpertiseSection 
        eyebrow="Areas of Expertise"
        title="We Specialize in Roofing & Interior Renovations"
        services={expertiseServices}
      />

      {/* SERVICE CATEGORIES CATALOG */}
      <ServiceCategories />

      {/* WHY CHOOSE US */}
      <Section className="bg-secondary-bg/30 border-y border-border">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Built on Trust, Powered by Experience"
          subtitle="Discover why Houston homeowners and businesses consistently choose our expert repair services for their most critical property needs."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, i) => (
            <div
              key={i}
              className="group relative glass-card p-12 hover:bg-card-bg/80 transition-all duration-500 rounded-[2rem]"
            >
              <div className="w-20 h-20 bg-primary-accent/10 border border-primary-accent/20 rounded-2xl flex items-center justify-center text-primary-accent mb-10 transition-transform duration-500 group-hover:-translate-y-2 shadow-premium">
                {/* Dynamically render Why Choose Us icons if they were components, but since they are in data.ts as strings, we need a renderer or just direct component if we change data.ts */}
                {/* For now, I'll use a direct lookup map here for speed */}
                {(() => {
                  const Icon = (LucideIcons as any)[item.icon];
                  return Icon ? <Icon size={40} strokeWidth={2} /> : null;
                })()}
              </div>
              <h3 className="text-2xl font-black text-primary-text mb-5 uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-secondary-text text-base leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES GRID */}
      <Section className="bg-primary-bg">
        <SectionHeader
          eyebrow="Our Services"
          title="One Call. Every Repair Handled."
          subtitle="Our comprehensive service suite handles residential and commercial property maintenance with technical precision."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICE_CATEGORIES.map((s) => (
            <Link
              key={s.id}
              to="/services"
              className="h-full"
            >
              <ServiceGridCard 
                title={s.title}
                description={s.short}
                icon={s.icon}
                image={serviceImages[s.id] || serviceImages.handyman}
              />
            </Link>
          ))}

          {/* CTA Block */}
          <div className="relative bg-gradient-to-br from-primary-accent to-secondary-accent rounded-[2rem] p-12 flex flex-col justify-between group overflow-hidden shadow-premium transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex mb-10 text-white">
                <Phone size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl font-black text-white mb-6 uppercase leading-[1.1] tracking-tighter">
                Need A Technical<br />Expert Today?
              </h3>
              <p className="text-white/90 text-lg font-bold leading-relaxed mb-12">
                Talk to our technical dispatch team for a professional evaluation of your project.
              </p>
            </div>
            <a
              href={COMPANY.phoneHref}
              className="relative z-10 inline-flex items-center justify-center gap-4 bg-white text-primary-accent px-10 py-6 font-black uppercase tracking-widest text-sm transition-all duration-500 hover:bg-primary-bg hover:text-white rounded-xl shadow-xl"
            >
              <Phone size={18} strokeWidth={3} /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </Section>

      {/* SERVICE AREAS */}
      <Section className="bg-secondary-bg/30 border-t border-border">
        <SectionHeader
          eyebrow="Market Presence"
          title="Greater Houston Area"
          subtitle="Professional local maintenance specialists serving the region's premier communities with dedicated care."
        />
        <div className="glass-card p-4 rounded-[2.5rem]">
          <FindHandyman />
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-primary-bg py-32 lg:py-48 relative overflow-hidden text-center border-t border-border">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[80rem] bg-primary-accent/5 rounded-full blur-[160px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-6xl lg:text-8xl font-black text-primary-text leading-[0.9] mb-10 uppercase tracking-tighter">
            READY TO FIX IT<br />
            <span className="text-gradient">THE EASY WAY?</span>
          </h2>
          <p className="text-secondary-text text-xl sm:text-2xl font-bold max-w-3xl mx-auto mb-16 leading-relaxed">
            Professional service. Transparent pricing. Expert execution. <br />
            Join thousands of satisfied Houstonians.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={COMPANY.phoneHref}
              className="btn-primary !px-16 !py-7 !text-base !rounded-2xl shadow-2xl flex items-center justify-center gap-4"
            >
              <Phone size={20} strokeWidth={3} /> CALL {COMPANY.phone}
            </a>
            <Link
              to="/contact"
              className="btn-outline !px-16 !py-7 !text-base !rounded-2xl flex items-center justify-center gap-4"
            >
              <MessageSquare size={20} strokeWidth={3} /> SEND MESSAGE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
import * as LucideIcons from "lucide-react";
