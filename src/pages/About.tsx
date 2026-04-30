import { Link } from "../router";
import { COMPANY } from "../data";
import { PageHero, Section, SectionHeader } from "../components/Section";
import { Users, ShieldCheck, Trophy, Banknote, Target, Phone } from "lucide-react";

const COMMITMENTS = [
  {
    icon: Users,
    title: "Professional Service",
    desc: "Courteous, uniformed technicians who respect your home and your time.",
  },
  {
    icon: ShieldCheck,
    title: "Honesty First",
    desc: "Straightforward assessments and recommendations — never pushy upsells.",
  },
  {
    icon: Trophy,
    title: "Quality Workmanship",
    desc: "We use the right tools and materials to make every repair last.",
  },
  {
    icon: Banknote,
    title: "Fair Pricing",
    desc: "Transparent, upfront quotes with no hidden fees or surprise charges.",
  },
];

/**
 * Handcrafted About page for Houston Easy Repairs.
 * Emphasizes heritage, mission, and professional standard.
 */
export default function About() {
  return (
    <div className="bg-primary-bg">
      <PageHero
        breadcrumb="Our Heritage"
        title="Repair Experts You Can Count On"
        subtitle="Locally owned and operated, Houston Easy Repairs has built its reputation one quality repair at a time."
      />

      {/* INTRO SECTION */}
      <Section className="bg-primary-bg">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <div>
            <div className="inline-block text-primary-accent text-[10px] font-black uppercase tracking-[0.3em] bg-primary-accent/5 border border-primary-accent/20 px-5 py-2.5 rounded-full mb-10">
              Corporate Overview
            </div>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-primary-text leading-[0.9] tracking-tighter mb-12 uppercase">
              HOUSTON'S ELITE TEAM<br />
              FOR <span className="text-gradient">HOME REPAIR</span>
            </h2>
            <div className="space-y-8 text-secondary-text leading-relaxed font-medium text-lg">
              <p>
                Houston Easy Repairs is a full-service maintenance firm proudly serving 
                Rosenberg, Houston, Richmond, Sugar Land, Katy, and surrounding communities. 
                We started with a singular objective: redefine the standard for 
                professional repair services.
              </p>
              <p>
                Whether you require a surgical handyman fix, complex technical 
                integration, or comprehensive property maintenance, our 
                experienced technicians deliver results that stand the test of time.
              </p>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row gap-6">
              <Link
                to="/services"
                className="btn-primary !px-12 !py-6"
              >
                OUR SERVICES
              </Link>
              <a
                href={COMPANY.phoneHref}
                className="btn-outline !px-12 !py-6 flex items-center justify-center gap-3"
              >
                <Phone size={18} strokeWidth={3} /> {COMPANY.phone}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:gap-10">
            {[
              { num: "10+", label: "Years Experience" },
              { num: "5K+", label: "Projects Completed" },
              { num: "05", label: "Primary Areas" },
              { num: "100%", label: "Satisfaction Rate" },
            ].map((s) => (
              <div
                key={s.label}
                className="group relative glass-card p-12 flex flex-col items-center justify-center rounded-3xl transition-all duration-500 hover:border-primary-accent/50 overflow-hidden"
              >
                <div className="text-5xl lg:text-7xl font-black text-primary-accent mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                  {s.num}
                </div>
                <div className="text-[10px] font-black text-muted-text uppercase tracking-[0.2em] text-center">
                  {s.label}
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r from-primary-accent to-secondary-accent transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* MISSION BLOCK */}
      <Section className="bg-secondary-bg/20 border-y border-border py-24 lg:py-48">
        <div className="max-w-6xl mx-auto">
          <div className="relative p-12 lg:p-28 text-center overflow-hidden group">
            <div className="absolute inset-0 bg-card-bg/40 backdrop-blur-xl border border-border/50 rounded-[4rem] shadow-premium" />
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-accent/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary-accent/5 rounded-full blur-[120px]" />
            
            <div className="relative z-10">
              <div className="flex justify-center mb-12 transform transition-transform duration-700 group-hover:scale-110 text-primary-accent">
                <Target size={80} strokeWidth={1.5} />
              </div>
              <div className="text-primary-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8 bg-primary-accent/10 py-2 px-4 inline-block rounded-full border border-primary-accent/20">
                Strategic Mission
              </div>
              <h3 className="text-4xl lg:text-7xl font-black text-primary-text mb-12 leading-[1.1] tracking-tighter uppercase">
                TO DELIVER UNCOMPROMISING QUALITY THAT MAKES LIFE EASIER FOR EVERYONE WE SERVE.
              </h3>
              <p className="text-secondary-text text-xl sm:text-2xl font-medium max-w-4xl mx-auto leading-relaxed">
                We aim to be the definitive choice for home and commercial repair 
                by combining elite craftsmanship with transparent, honest communication.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* COMMITMENT GRID */}
      <Section className="bg-primary-bg">
        <SectionHeader
          eyebrow="The Commitment"
          title="What Defines Our Service"
          subtitle="Every project we execute is guided by these four foundational principles that ensure a premium experience."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {COMMITMENTS.map((c) => (
            <div
              key={c.title}
              className="group relative glass-card p-12 transition-all duration-500 hover:-translate-y-3 rounded-[2.5rem]"
            >
              <div className="w-20 h-20 bg-primary-bg border border-border rounded-2xl flex items-center justify-center text-primary-accent mb-10 shadow-premium transition-all duration-500 group-hover:bg-primary-accent group-hover:text-white group-hover:border-primary-accent group-hover:shadow-primary-accent/20">
                <c.icon size={40} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-black text-primary-text mb-5 uppercase tracking-tight">{c.title}</h3>
              <p className="text-secondary-text text-base leading-relaxed font-medium">{c.desc}</p>
              <div className="absolute top-10 right-10 w-2 h-2 bg-primary-accent rounded-full opacity-0 transition-all duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
