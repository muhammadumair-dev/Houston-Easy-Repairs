import { Link } from "../router";
import { COMPANY, SERVICE_CATEGORIES } from "../data";
import { Wrench, MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-bg text-primary-text border-t border-border">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-20">
          {/* Company */}
          <div className="space-y-6 sm:space-y-10">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-accent flex items-center justify-center text-white shadow-premium transition-transform duration-300 group-hover:scale-110 rounded-lg">
                <Wrench className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
              </div>
              <div className="leading-none">
                <div className="text-lg sm:text-xl font-black tracking-tighter uppercase">
                  HOUSTON <span className="text-primary-accent">EASY REPAIRS</span>
                </div>
              </div>
            </Link>
            <p className="text-sm sm:text-base leading-relaxed text-secondary-text font-medium max-w-xs">
              Houston's trusted experts for premium home repair and maintenance
              services. Quality craftsmanship delivered with integrity and professional care.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              {[Mail, Phone, MapPin, Clock].map((Icon, idx) => (
                <div key={idx} className="w-9 h-9 sm:w-10 sm:h-10 border border-border flex items-center justify-center hover:bg-primary-accent hover:border-primary-accent hover:text-white transition-all cursor-pointer rounded-lg bg-secondary-bg/50">
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-accent font-black text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-6 sm:mb-10">Navigation</h4>
            <ul className="space-y-3 sm:space-y-5 text-[12px] sm:text-sm font-black tracking-widest">
              {[
                { to: "/", label: "HOME" },
                { to: "/about", label: "ABOUT" },
                { to: "/services", label: "SERVICES" },
                { to: "/meta-ads", label: "META ADS" },
                { to: "/contact", label: "CONTACT" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="hover:text-primary-accent transition-colors flex items-center gap-3 sm:gap-4 group text-secondary-text"
                  >
                    <span className="w-1.5 sm:w-2 h-0.5 bg-primary-accent transition-all group-hover:w-4 sm:group-hover:w-5" /> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-primary-accent font-black text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-6 sm:mb-10">Expertise</h4>
            <ul className="space-y-3 sm:space-y-5 text-[12px] sm:text-sm font-black tracking-widest text-secondary-text">
              {SERVICE_CATEGORIES.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/services"
                    className="hover:text-primary-text transition-colors flex items-center gap-3 sm:gap-4 group"
                  >
                    <span className="w-1.5 h-1.5 border border-primary-accent rounded-full group-hover:bg-primary-accent transition-all shrink-0" /> 
                    {s.title.toUpperCase().replace(" SERVICES", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-accent font-black text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-6 sm:mb-10">Contact Info</h4>
            <ul className="space-y-6 sm:space-y-8 text-sm">
              <li className="flex gap-4 sm:gap-5">
                <MapPin className="text-primary-accent shrink-0 w-5 h-5" strokeWidth={2.5} />
                <span className="text-secondary-text font-bold leading-relaxed">{COMPANY.address}</span>
              </li>
              <li className="flex gap-4 sm:gap-5">
                <Phone className="text-primary-accent shrink-0 w-5 h-5" strokeWidth={2.5} />
                <a href={COMPANY.phoneHref} className="text-primary-text font-black hover:text-primary-accent transition-colors tracking-widest text-base sm:text-lg">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-4 sm:gap-5">
                <Clock className="text-primary-accent shrink-0 w-5 h-5" strokeWidth={2.5} />
                <div className="text-secondary-text font-bold space-y-1 sm:space-y-2 text-[12px] sm:text-sm">
                  <div>MON – SAT: 8:00 AM – 6:00 PM</div>
                  <div className="text-muted-text/50">SUNDAY: CLOSED</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-8 sm:py-12 bg-secondary-bg/30">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-[8px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.3em] text-muted-text uppercase text-center md:text-left">
          <div>
            © {new Date().getFullYear()} HOUSTON EASY REPAIRS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-8 gap-y-2">
            <span>ROSENBERG</span>
            <span className="text-primary-accent">/</span>
            <span>HOUSTON</span>
            <span className="text-primary-accent">/</span>
            <span>RICHMOND</span>
            <span className="text-primary-accent">/</span>
            <span>SUGAR LAND</span>
            <span className="text-primary-accent">/</span>
            <span>KATY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
