import React from 'react';
import { 
  ArrowRightCircle,
  Wrench,
  Hammer,
  Home,
  DoorOpen,
  ShieldCheck,
  Box,
  Grid3X3,
  Paintbrush,
  Droplets,
  Zap,
  PlusCircle,
  Layers
} from 'lucide-react';

const categories = [
  { name: 'Repair', icon: Wrench },
  { name: 'Drywall and Ceiling', icon: Layers },
  { name: 'Remodel', icon: Home },
  { name: 'Window and Door Services', icon: DoorOpen },
  { name: 'Safety and Mobility Services', icon: ShieldCheck },
  { name: 'Assembly Service', icon: Box },
  { name: 'Floor Installation and Repair', icon: Grid3X3 },
  { name: 'Painting', icon: Paintbrush },
  { name: 'Carpentry Installation and Repair', icon: Hammer },
  { name: 'Plumbing', icon: Droplets },
  { name: 'Lighting and Electrical', icon: Zap },
  { name: 'Other Services', icon: PlusCircle },
];

export default function ServiceCategories() {
  return (
    <section className="bg-primary-bg py-20 lg:py-32 font-sans border-b border-border">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <span className="inline-block text-primary-accent text-xs font-black uppercase tracking-[0.4em] mb-6 bg-primary-accent/10 py-2 px-5 rounded-full border border-primary-accent/20">
            Catalog
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary-text leading-[1.1] tracking-tighter uppercase">
            Full Service <span className="text-gradient">Categories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index} 
                className="flex items-center justify-between p-6 glass-card rounded-2xl shadow-premium hover:shadow-premium-hover transition-all duration-500 cursor-pointer group"
              >
                <div className="flex items-center gap-6">
                  <div className="bg-primary-accent w-14 h-14 rounded-xl flex items-center justify-center text-white shrink-0 shadow-premium transition-transform duration-500 group-hover:scale-110">
                     <Icon className="text-2xl" strokeWidth={2} />
                  </div>
                  <span className="font-black text-primary-text text-base lg:text-lg tracking-tight uppercase">
                    {category.name}
                  </span>
                </div>
                <ArrowRightCircle 
                  className="text-primary-accent text-2xl shrink-0 group-hover:translate-x-2 transition-transform duration-500 ease-in-out opacity-50 group-hover:opacity-100" 
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
