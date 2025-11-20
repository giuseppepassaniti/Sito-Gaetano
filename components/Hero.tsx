import React from 'react';
import { ArrowRight, ShieldCheck, Clock, Star } from 'lucide-react';

interface HeroProps {
  onBookNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
  return (
    <div className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-navy-900">
      {/* Background Image with High Quality Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Car Driving in Malta"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="lg:w-2/3">
          
          <div className="inline-flex items-center gap-2 border border-gold-400/30 rounded-full px-4 py-1 text-gold-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Star size={12} fill="currentColor" />
            <span>Premium Transport Malta & Gozo</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Your Private Chauffeur <br />
            <span className="text-slate-300">in Malta.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed font-light">
            Reliable airport transfers, bespoke island tours, and executive travel. 
            <strong> Pre-book your peace of mind</strong> and avoid the uncertainty of ride-sharing apps.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onBookNow}
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-400 hover:bg-gold-500 text-navy-900 text-base font-bold rounded-sm transition-all transform hover:translate-y-[-2px] shadow-lg shadow-gold-400/10"
            >
              Book Your Driver
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </button>
            <a 
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 text-base font-medium rounded-sm text-white hover:bg-slate-800 transition-all"
            >
              View Services
            </a>
          </div>

          <div className="mt-16 border-t border-slate-800 pt-8 grid grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <Clock className="text-gold-400 h-6 w-6" />
              <span className="text-sm font-medium text-slate-300">Always Punctual</span>
            </div>
            <div className="flex flex-col gap-2">
              <ShieldCheck className="text-gold-400 h-6 w-6" />
              <span className="text-sm font-medium text-slate-300">Fixed Prices</span>
            </div>
            <div className="flex flex-col gap-2">
              <Star className="text-gold-400 h-6 w-6" />
              <span className="text-sm font-medium text-slate-300">Top Rated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;