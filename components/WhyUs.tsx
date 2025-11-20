import React from 'react';
import { Check, X } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Why choose a Private Driver over Apps?
            </h2>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              While apps like Bolt or Uber are convenient for quick hops, they lack the reliability and quality required for airport transfers, tours, or professional schedules.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <div className="bg-green-500/20 p-2 rounded-full">
                  <Check className="text-green-500" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Guaranteed Pre-booking</h4>
                  <p className="text-slate-400 text-sm">Secure your ride weeks in advance. No "searching for drivers" anxiety.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <div className="bg-green-500/20 p-2 rounded-full">
                  <Check className="text-green-500" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Immaculate Vehicles</h4>
                  <p className="text-slate-400 text-sm">High-end sedans and vans, cleaned daily. No surprises.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <div className="bg-green-500/20 p-2 rounded-full">
                  <Check className="text-green-500" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Local Knowledge</h4>
                  <p className="text-slate-400 text-sm">We don't just follow GPS. We know the roads, traffic patterns, and best scenic routes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Comparison */}
          <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 shadow-2xl">
            <h3 className="text-2xl font-serif font-bold text-center text-white mb-8">The Difference</h3>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-gold-500 font-bold text-lg mb-4">Malta Prestige</div>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center justify-center gap-2">
                    <Check size={14} className="text-gold-500" /> Flight Monitoring
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Check size={14} className="text-gold-500" /> Fixed Price
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Check size={14} className="text-gold-500" /> Professional Dress
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Check size={14} className="text-gold-500" /> Meet & Greet
                  </li>
                </ul>
              </div>

              <div className="text-center border-l border-slate-800 opacity-50">
                <div className="text-slate-500 font-bold text-lg mb-4">Ride Apps</div>
                <ul className="space-y-3 text-sm text-slate-500">
                  <li className="flex items-center justify-center gap-2">
                    <X size={14} /> Variable Pricing
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <X size={14} /> Random Vehicles
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <X size={14} /> Cancellations
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <X size={14} /> Curbside Wait
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;