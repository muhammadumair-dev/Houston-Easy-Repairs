import { useState } from "react";
import { COMPANY, SERVICE_CATEGORIES } from "../data";
import { PageHero, Section } from "../components/Section";

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
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
    }, 4000);
  };

  const update = (field: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  return (
    <>
      <PageHero
        breadcrumb="Contact Us"
        title="Let's Get Your Repair Done"
        subtitle="Reach out anytime — we'll respond promptly with a free, no-obligation quote."
      />

      <Section className="bg-slate-50">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info Cards */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-xl shadow-lg flex-shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Visit Us</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {COMPANY.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-xl shadow-lg flex-shrink-0">
                  📞
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                  <a
                    href={COMPANY.phoneHref}
                    className="text-sm text-orange-600 font-bold hover:underline"
                  >
                    {COMPANY.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Free quotes • Fast response
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-xl shadow-lg flex-shrink-0">
                  🕒
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-2">Business Hours</h3>
                  {COMPANY.hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-center justify-between text-sm py-1 border-b border-slate-100 last:border-0"
                    >
                      <span className="text-slate-600">{h.day}</span>
                      <span className="font-semibold text-slate-900">
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-7 text-white shadow-lg">
              <h3 className="font-bold text-lg mb-2">Need Urgent Service?</h3>
              <p className="text-sm text-slate-300 mb-4">
                Call us directly for the fastest response.
              </p>
              <a
                href={COMPANY.phoneHref}
                className="block text-center bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-xl font-bold shadow-md hover:-translate-y-0.5 transition"
              >
                📞 {COMPANY.phone}
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 lg:p-10">
              <div className="mb-7">
                <div className="inline-block text-orange-600 text-xs font-bold uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full mb-3">
                  Send a Message
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Request a Free Quote
                </h2>
                <p className="text-slate-600 mt-2 text-sm">
                  Fill out the form below and we'll get back to you within
                  one business day.
                </p>
              </div>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="text-5xl mb-3">✅</div>
                  <h3 className="text-xl font-bold text-green-900">
                    Thank you!
                  </h3>
                  <p className="text-green-700 mt-2">
                    Your message has been received. We'll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Name"
                      required
                      value={form.name}
                      onChange={(v) => update("name", v)}
                      placeholder="Your full name"
                    />
                    <Field
                      label="Phone"
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(v) => update("phone", v)}
                      placeholder="(281) 555-1234"
                    />
                  </div>
                  <Field
                    label="Email"
                    required
                    type="email"
                    value={form.email}
                    onChange={(v) => update("email", v)}
                    placeholder="you@example.com"
                  />
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Service Required <span className="text-orange-600">*</span>
                    </label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => update("service", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition text-slate-900"
                    >
                      <option value="">Select a service…</option>
                      {SERVICE_CATEGORIES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Other">Other / Not sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message <span className="text-orange-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Tell us about your repair or maintenance needs…"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition text-slate-900 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 transition"
                  >
                    Send Message →
                  </button>
                  <p className="text-xs text-slate-500 text-center">
                    By submitting, you agree to be contacted about your service request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
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
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        {label} {required && <span className="text-orange-600">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition text-slate-900"
      />
    </div>
  );
}
