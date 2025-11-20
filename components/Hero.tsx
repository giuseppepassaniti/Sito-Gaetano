import React from 'react';
import { ArrowRight, ShieldCheck, Clock, Star } from 'lucide-react';

interface HeroProps {
  onBookNow: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-navy-900">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Car Driving in Malta"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-navy-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-12">
        <div className="lg:w-3/4 xl:w-2/3">
          
          <div className="inline-flex items-center gap-2 border border-gold-400/30 bg-navy-900/50 backdrop-blur-sm rounded-full px-4 py-1 text-gold-400 text-xs font-bold uppercase tracking-widest mb-8 shadow-lg">
            <Star size={12} fill="currentColor" />
            <span>Premium Transport Malta & Gozo</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 drop-shadow-xl">
            Your Private Chauffeur <br />
            <span className="text-slate-300">in Malta.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed font-light drop-shadow-md">
            Reliable airport transfers, bespoke island tours, and executive travel. 
            <strong className="text-white"> Pre-book your peace of mind</strong> and avoid the uncertainty of ride-sharing apps.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onBookNow}
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-400 hover:bg-gold-500 text-navy-900 text-base font-bold rounded-sm transition-all transform hover:-translate-y-1 hover:shadow-gold-400/20 shadow-lg"
            >
              Book Your Driver
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </button>
            <a 
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 bg-navy-900/30 backdrop-blur-sm text-base font-medium rounded-sm text-white hover:bg-white hover:text-navy-900 transition-all"
            >
              View Services
            </a>
          </div>

          <div className="mt-16 border-t border-slate-700/50 pt-8 grid grid-cols-3 gap-8">
            <div className="flex flex-col gap-2 group cursor-default">
              <Clock className="text-gold-400 h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Always Punctual</span>
            </div>
            <div className="flex flex-col gap-2 group cursor-default">
              <ShieldCheck className="text-gold-400 h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Fixed Prices</span>
            </div>
            <div className="flex flex-col gap-2 group cursor-default">
              <Star className="text-gold-400 h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Top Rated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;