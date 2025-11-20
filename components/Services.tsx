
import React from 'react';
import { Plane, Map, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

interface ServicesProps {
  limit?: number;
  onBookService?: () => void;
}

const Services: React.FC<ServicesProps> = ({ limit, onBookService }) => {
  const services = [
    {
      title: 'Airport Transfers',
      price: 'Fixed Rates',
      description: 'Meet & Greet service at MLA International Airport. We track your flight to ensure we are there exactly when you land. No waiting, no stress.',
      icon: Plane,
    },
    {
      title: 'Full Day Island Tours',
      price: 'From €140',
      description: 'Experience Malta or Gozo with a local expert. Customize your itinerary or let us guide you to the hidden gems and historical sites.',
      icon: Map,
    },
    {
      title: 'Point-to-Point',
      price: 'Get Quote',
      description: 'Dinner reservations? Business meeting? Get from A to B comfortably. Perfect for those who want a reliable return trip secured.',
      icon: ShieldCheck,
    },
    {
      title: 'Hourly Chauffeur',
      price: 'From €25/hr',
      description: 'Ultimate flexibility. Keep the driver and vehicle at your disposal for shopping, meetings, or exploring at your own pace.',
      icon: Clock,
    },
  ];

  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-12 md:py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!limit && (
             <div className="mb-12 text-center">
                <h3 className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-2">Our Expertise</h3>
                <h2 className="text-3xl md:text-4xl text-white font-serif font-bold">Professional Transport for Every Need</h2>
             </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-slate-900 p-8 border border-slate-800 hover:border-gold-400/50 transition-all duration-300 hover:-translate-y-1 flex flex-col rounded-xl group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:text-navy-900 transition-colors">
                  <service.icon size={24} />
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gold-400 text-xs font-bold uppercase tracking-wider mb-4">{service.price}</p>
              
              <p className="text-slate-400 leading-relaxed text-sm mb-6 flex-grow border-t border-slate-800 pt-4">
                {service.description}
              </p>
              
              {onBookService && (
                  <button 
                    onClick={onBookService}
                    className="mt-auto w-full py-2 rounded border border-slate-700 text-slate-300 text-sm font-bold hover:bg-gold-400 hover:text-navy-900 hover:border-gold-400 transition-all flex items-center justify-center gap-2"
                  >
                    Book Now <ArrowRight size={14} />
                  </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
