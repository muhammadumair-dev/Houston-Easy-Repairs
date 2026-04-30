import { cn } from "../utils/cn";
import { ReactNode } from "react";
import * as LucideIcons from "lucide-react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

/**
 * Helper to render Lucide icon by name string
 */
const IconRenderer = ({ name, size = 24, className = "", strokeWidth }: { name: string, size?: number, className?: string, strokeWidth?: number }) => {
  const IconComponent = (LucideIcons as any)[name];
  if (!IconComponent) return null;
  return <IconComponent size={size} strokeWidth={strokeWidth} className={className} />;
};

/**
 * Standardized Section component.
 */
export function Section({ children, className, id, containerClassName }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn("py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-primary-bg overflow-hidden", className)}
    >
      <div className={cn("max-w-[1400px] mx-auto", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

/**
 * SectionHeader with standard typography.
 */
export function SectionHeader({ 
  eyebrow, 
  title, 
  subtitle, 
  className, 
  align = "center" 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "max-w-4xl mb-16 lg:mb-24",
      align === "center" ? "mx-auto text-center" : "text-left",
      className
    )}>
      {eyebrow && (
        <span className="inline-block text-primary-accent text-xs font-black uppercase tracking-[0.2em] mb-6 py-2 px-4 border border-primary-accent/20 bg-primary-accent/5 rounded-full">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary-text leading-[1.1] mb-8 tracking-tighter">
        {title}
      </h2>
      {subtitle && (
        <p className="text-secondary-text text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/**
 * ServiceGridCard with standard typography.
 */
export function ServiceGridCard({ 
  title, 
  description, 
  image, 
  icon 
}: { 
  title: string; 
  description: string; 
  image: string; 
  icon: string;
}) {
  return (
    <div className="group relative glass-card rounded-3xl p-8 h-full flex flex-col shadow-premium hover:shadow-premium-hover">
      <div className="overflow-hidden rounded-2xl bg-secondary-bg mb-8 aspect-[16/10] flex-shrink-0 relative border border-border/50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-4 mb-4">
           <div className="text-primary-accent grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
             <IconRenderer name={icon} size={32} strokeWidth={2.5} />
           </div>
           <h3 className="text-2xl font-black text-primary-text tracking-tight uppercase">
            {title}
          </h3>
        </div>
        <p className="text-secondary-text text-base leading-relaxed mb-8">
          {description}
        </p>
      </div>

      <div className="mt-auto">
        <div className="flex items-center gap-2 font-black text-xs uppercase text-primary-accent group-hover:gap-4 transition-all duration-300">
          <span>Explore Service</span>
          <span className="text-lg">→</span>
        </div>
      </div>
    </div>
  );
}

/**
 * ExpertiseCard with standard typography.
 */
export const ExpertiseCard = ({
  title,
  description,
  image,
  buttonText,
}: {
  title: string;
  description: string;
  image: string;
  buttonText: string;
}) => {
  return (
    <div className="flex flex-col w-full group">
      <div className="relative aspect-[4/3] mb-10 overflow-hidden bg-secondary-bg border-4 border-border/50 shadow-premium transition-all duration-500 group-hover:-translate-y-2 group-hover:border-primary-accent/30 rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg to-transparent opacity-40" />
      </div>
      
      <div className="flex flex-col items-start px-2">
        <h3 className="text-2xl font-black text-primary-text mb-4 group-hover:text-primary-accent transition-colors duration-300 uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-secondary-text text-base leading-relaxed mb-8 line-clamp-3">
          {description}
        </p>
        <button className="btn-primary !py-3 !px-6 !text-[10px]">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export function ExpertiseSection({ 
  eyebrow, 
  title, 
  services 
}: { 
  eyebrow: string; 
  title: string; 
  services: any[] 
}) {
  return (
    <Section className="bg-primary-bg">
      <SectionHeader eyebrow={eyebrow} title={title} align="center" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {services.map((service, index) => (
          <ExpertiseCard key={index} {...service} />
        ))}
      </div>
    </Section>
  );
}

/**
 * PageHero with standard typography.
 */
export function PageHero({ breadcrumb, title, subtitle }: { breadcrumb: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-primary-bg pt-40 pb-24 lg:pt-52 lg:pb-36 relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60rem] h-[60rem] bg-primary-accent/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-secondary-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-primary-accent text-xs font-black uppercase tracking-[0.3em] mb-10 bg-primary-accent/10 py-2 px-5 rounded-full border border-primary-accent/20">
          {breadcrumb}
        </span>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-primary-text mb-10 leading-[1.1] tracking-tighter">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl sm:text-2xl text-secondary-text max-w-3xl mx-auto leading-relaxed font-medium">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
