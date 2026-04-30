import { useState, useEffect } from "react";
import { Link, useRouter } from "../router";
import { COMPANY } from "../data";
import { Wrench, Phone, Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  { to: "/services", label: "SERVICES" },
  { to: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const { path } = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-primary-bg/95 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-primary-accent flex items-center justify-center text-white shadow-premium group-hover:scale-110 transition-transform duration-300 rounded-lg">
              <Wrench size={24} strokeWidth={2.5} />
            </div>
            <div className="leading-none">
              <div className="text-xl sm:text-2xl font-black text-primary-text tracking-tighter uppercase">
                HOUSTON <span className="text-primary-accent">EASY REPAIRS</span>
              </div>
              <div className="text-[10px] text-muted-text font-black tracking-[0.2em] mt-1 uppercase">
                Fast • Reliable • Local
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            {NAV.map((n) => {
              const active = path === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`px-6 py-2 text-xs font-black tracking-widest transition-all duration-300 relative group ${
                    active ? "text-primary-accent" : "text-secondary-text hover:text-primary-accent"
                  }`}
                >
                  {n.label}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-accent transition-all duration-300 group-hover:w-full ${active ? "w-full" : ""}`} />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href={COMPANY.phoneHref}
              className="btn-primary flex items-center gap-3 !py-3 !px-6"
            >
              <Phone size={16} strokeWidth={3} /> {COMPANY.phone}
            </a>
          </div>

          <button
            className="lg:hidden p-3 bg-secondary-bg border border-border text-primary-text hover:bg-primary-accent hover:text-white transition-all duration-300 rounded-lg"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`lg:hidden fixed inset-0 top-[72px] bg-primary-bg/98 backdrop-blur-xl transition-all duration-500 transform ${
            open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <div className="p-8 space-y-4">
            {NAV.map((n) => {
              const active = path === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-4 text-lg font-black tracking-widest border-b border-border ${
                    active ? "text-primary-accent" : "text-primary-text"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
            <a
              href={COMPANY.phoneHref}
              className="block mt-8 text-center btn-primary"
            >
              <Phone size={18} strokeWidth={3} className="inline-block mr-2" /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
