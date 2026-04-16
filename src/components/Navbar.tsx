import { useState } from "react";
import { Link, useRouter } from "../router";
import { COMPANY } from "../data";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { path } = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-xl font-bold shadow-md group-hover:scale-105 transition">
              🔧
            </div>
            <div className="leading-tight">
              <div className="text-lg sm:text-xl font-extrabold text-slate-900">
                Houston Easy Repairs
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium">
                Fast • Reliable • Affordable
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => {
              const active = path === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                    active
                      ? "text-orange-600 bg-orange-50"
                      : "text-slate-700 hover:text-orange-600 hover:bg-slate-50"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
            >
              <span>📞</span> {COMPANY.phone}
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 space-y-1">
            {NAV.map((n) => {
              const active = path === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-semibold ${
                    active
                      ? "text-orange-600 bg-orange-50"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
            <a
              href={COMPANY.phoneHref}
              className="block mt-2 text-center bg-gradient-to-r from-orange-500 to-red-600 text-white px-5 py-3 rounded-lg font-semibold text-sm shadow"
            >
              📞 {COMPANY.phone}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
