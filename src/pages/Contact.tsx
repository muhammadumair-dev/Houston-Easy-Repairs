import { useState } from "react";
import { COMPANY, SERVICE_CATEGORIES } from "../data";
import { PageHero, Section } from "../components/Section";
import { MapPin, Phone, Clock, CheckCircle2, ChevronDown } from "lucide-react";

/**
 * Handcrafted Contact page for Houston Easy Repairs.
 * Features a high-contrast dark form with precise inputs and polished feedback states.
 */
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 400, behavior: "smooth" });
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
    }, 5000);
  };

  const update = (field: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  return (
    <div className="bg-primary-bg">
      <PageHero
        breadcrumb="Get In Touch"
        title="Let's Get Your Repair Done"
        subtitle="Reach out anytime — our team typically responds within one business hour during working days."
      />

      <Section className="bg-primary-bg">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* CORPORATE INFO */}
          <div className="lg:col-span-5 space-y-10">
            <div className="relative glass-card p-12 overflow-hidden group rounded-[2.5rem] shadow-premium">
              <div className="relative z-10 flex items-start gap-8">
                <div className="w-20 h-20 bg-primary-accent flex items-center justify-center text-white shadow-premium flex-shrink-0 transition-transform duration-500 group-hover:scale-110 rounded-2xl">
                  <MapPin size={32} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-primary-text mb-3 uppercase tracking-tighter">Corporate Office</h3>
                  <p className="text-secondary-text font-bold leading-relaxed text-lg">
                    {COMPANY.address}
                  </p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-2 h-0 bg-primary-accent transition-all duration-500 group-hover:h-full" />
            </div>

            <div className="relative glass-card p-12 overflow-hidden group rounded-[2.5rem] shadow-premium">
              <div className="relative z-10 flex items-start gap-8">
                <div className="w-20 h-20 bg-primary-accent flex items-center justify-center text-white shadow-premium flex-shrink-0 transition-transform duration-500 group-hover:scale-110 rounded-2xl">
                  <Phone size={32} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-primary-text mb-3 uppercase tracking-tighter">Direct Line</h3>
                  <a
                    href={COMPANY.phoneHref}
                    className="text-3xl font-black text-primary-accent hover:text-white transition-colors tracking-tighter"
                  >
                    {COMPANY.phone}
                  </a>
                  <p className="text-[10px] text-muted-text mt-3 font-black uppercase tracking-[0.3em]">
                    Free Consultations • Fast Response
                  </p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-2 h-0 bg-primary-accent transition-all duration-500 group-hover:h-full" />
            </div>

            <div className="glass-card p-12 rounded-[2.5rem]">
              <h3 className="text-2xl font-black text-primary-text mb-10 uppercase tracking-tighter flex items-center gap-4">
                <Clock className="text-primary-accent" size={32} strokeWidth={2.5} /> Working Hours
              </h3>
              <div className="space-y-6">
                {COMPANY.hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between text-base py-4 border-b border-border/50 last:border-0"
                  >
                    <span className="text-secondary-text font-bold tracking-tight">{h.day}</span>
                    <span className="font-black text-primary-text uppercase tracking-widest text-xs">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-accent to-secondary-accent p-12 text-white rounded-[2.5rem] shadow-premium">
              <h3 className="font-black text-3xl mb-6 tracking-tighter uppercase leading-none">Emergency Service Required?</h3>
              <p className="font-bold text-lg mb-10 leading-relaxed text-white/90">
                For urgent repairs that cannot wait, please call our technical dispatch team directly.
              </p>
              <a
                href={COMPANY.phoneHref}
                className="block text-center bg-primary-bg text-white py-6 font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 hover:bg-white hover:text-primary-bg rounded-2xl shadow-xl flex items-center justify-center gap-3"
              >
                <Phone size={18} strokeWidth={3} /> CALL DISPATCH
              </a>
            </div>
          </div>

          {/* SERVICE REQUEST FORM */}
          <div className="lg:col-span-7">
            <div className="glass-card p-12 lg:p-20 relative overflow-hidden rounded-[3rem] shadow-premium">
              <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="relative z-10 mb-16">
                <div className="inline-block text-primary-accent text-[10px] font-black uppercase tracking-[0.4em] bg-primary-accent/10 border border-primary-accent/20 px-4 py-2 rounded-full mb-8">
                  Online Inquiry
                </div>
                <h2 className="text-5xl sm:text-6xl font-black text-primary-text tracking-tighter leading-[1.1] uppercase">
                  Request a Free Quote
                </h2>
                <p className="text-secondary-text mt-6 text-lg font-medium">
                  Complete the professional evaluation request below. Our specialists review all submissions promptly.
                </p>
              </div>

              {submitted ? (
                <div className="bg-primary-accent p-20 text-center shadow-premium animate-in fade-in zoom-in duration-700 rounded-[2rem] text-white">
                  <div className="flex justify-center mb-8">
                    <CheckCircle2 size={80} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-4xl font-black tracking-tighter uppercase mb-6">
                    Inquiry Received
                  </h3>
                  <p className="font-bold text-xl text-white/90">
                    A technical specialist will contact you within one business hour.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                  <div className="grid sm:grid-cols-2 gap-10">
                    <Field
                      label="Full Name"
                      required
                      value={form.name}
                      onChange={(v) => update("name", v)}
                      placeholder="EX: JANE DOE"
                    />
                    <Field
                      label="Contact Number"
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(v) => update("phone", v)}
                      placeholder="EX: (281) 000-0000"
                    />
                  </div>
                  <Field
                    label="Email Address"
                    required
                    type="email"
                    value={form.email}
                    onChange={(v) => update("email", v)}
                    placeholder="EX: CONTACT@DOMAIN.COM"
                  />
                  <div className="group">
                    <label className="block text-[11px] font-black uppercase tracking-[0.3em] text-muted-text mb-5 group-focus-within:text-primary-accent transition-colors">
                      Service Category Required <span className="text-primary-accent">*</span>
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={form.service}
                        onChange={(e) => update("service", e.target.value)}
                        className="w-full bg-secondary-bg/50 border border-border px-8 py-6 rounded-2xl text-primary-text focus:border-primary-accent focus:ring-1 focus:ring-primary-accent/20 outline-none transition-all duration-300 appearance-none font-bold shadow-sm"
                      >
                        <option value="" className="bg-secondary-bg">SELECT SEGMENT…</option>
                        {SERVICE_CATEGORIES.map((s) => (
                          <option key={s.id} value={s.title} className="bg-secondary-bg">
                            {s.title.toUpperCase()}
                          </option>
                        ))}
                        <option value="Other" className="bg-secondary-bg">OTHER SPECIALIZED REQUEST</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-muted-text">
                        <ChevronDown size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-[11px] font-black uppercase tracking-[0.3em] text-muted-text mb-5 group-focus-within:text-primary-accent transition-colors">
                      Detailed Requirements <span className="text-primary-accent">*</span>
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Specify the nature of the repair or project in detail…"
                      className="w-full bg-secondary-bg/50 border border-border px-8 py-6 rounded-2xl text-primary-text focus:border-primary-accent focus:ring-1 focus:ring-primary-accent/20 outline-none transition-all duration-300 resize-none font-bold placeholder:text-muted-text/30 shadow-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary !w-full !py-7 !text-xs !rounded-2xl"
                  >
                    TRANSMIT REQUEST
                  </button>
                  <p className="text-[10px] text-muted-text text-center font-black tracking-[0.3em] uppercase">
                    Security Encrypted • Fast Professional Response
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

function Field({
  label,
  required,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  label: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="group">
      <label className="block text-[11px] font-black uppercase tracking-[0.3em] text-muted-text mb-5 group-focus-within:text-primary-accent transition-colors">
        {label} {required && <span className="text-primary-accent">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-secondary-bg/50 border border-border px-8 py-6 rounded-2xl text-primary-text focus:border-primary-accent focus:ring-1 focus:ring-primary-accent/20 outline-none transition-all duration-300 font-bold placeholder:text-muted-text/30 shadow-sm"
      />
    </div>
  );
}
