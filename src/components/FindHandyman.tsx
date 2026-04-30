import React from 'react';
import { MapPin } from 'lucide-react';
import { COMPANY } from '../data';

export default function FindHandyman() {
  return (
    <section className="bg-primary-bg w-full overflow-hidden font-sans py-12 lg:py-20 rounded-[2.5rem]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Van/Vehicle Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative group">
               <div className="absolute inset-0 bg-primary-accent/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <img
                src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=800"
                alt="Service Van"
                className="relative z-10 max-w-full h-auto object-contain rounded-2xl shadow-premium group-hover:scale-105 transition-transform duration-700"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-primary-text text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tighter uppercase leading-[1.1]">
              Find a Technical<br />Expert Near Me
            </h2>
            <p className="text-secondary-text text-lg sm:text-xl mb-12 font-medium max-w-lg mx-auto lg:mx-0">
              Enter your location to connect with our elite maintenance dispatch team in your area.
            </p>

            <form 
              className="flex flex-col sm:flex-row w-full max-w-[38rem] mb-12 shadow-premium group"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
                  <MapPin size={22} className="text-primary-accent" strokeWidth={2.5} />
                </div>
                <input
                  type="text"
                  placeholder="ENTER ZIP CODE"
                  className="w-full pl-16 pr-6 py-5 text-primary-text bg-secondary-bg/50 border border-border rounded-t-2xl sm:rounded-none sm:rounded-l-2xl outline-none focus:border-primary-accent transition-all min-h-[70px] text-xs font-black tracking-widest placeholder:text-muted-text/30"
                />
              </div>
              <button
                type="submit"
                className="btn-primary !rounded-t-none !rounded-b-2xl sm:!rounded-none sm:!rounded-r-2xl !min-h-[70px] !px-8 whitespace-nowrap !text-xs !shadow-none"
              >
                FIND MY LOCAL EXPERT
              </button>
            </form>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
               <div className="text-muted-text text-[10px] font-black uppercase tracking-[0.3em]">Direct Dispatch:</div>
               <h3 className="text-primary-text text-2xl sm:text-3xl font-black tracking-tighter uppercase">
                {COMPANY.phone}
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
