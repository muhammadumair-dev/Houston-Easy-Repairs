import { Link } from "../router";
import { COMPANY, SERVICE_CATEGORIES } from "../data";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-lg">
                🔧
              </div>
              <div className="text-white text-lg font-extrabold">
                Houston Easy Repairs
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Your trusted experts for fast, reliable home repair and maintenance
              services across the greater Houston area.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="hover:text-orange-400 transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {SERVICE_CATEGORIES.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/services"
                    className="hover:text-orange-400 transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span>{" "}
                    {s.title.replace(" Services", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="text-orange-500 text-lg">📍</span>
                <span>{COMPANY.address}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 text-lg">📞</span>
                <a href={COMPANY.phoneHref} className="hover:text-orange-400">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 text-lg">🕒</span>
                <div>
                  <div>Mon – Sat: 8:00 AM – 6:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Houston Easy Repairs. All rights reserved.
          </div>
          <div>Serving Rosenberg • Houston • Richmond • Sugar Land • Katy</div>
        </div>
      </div>
    </footer>
  );
}
