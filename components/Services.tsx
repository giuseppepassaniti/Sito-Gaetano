import React from 'react';
import { Plane, Map, Clock, ShieldCheck, Star } from 'lucide-react';

interface ServicesProps {
  limit?: number;
}

const Services: React.FC<ServicesProps> = ({ limit }) => {
  const services = [
    {
      title: 'Airport Transfers',
      price: 'From €35',
      description: 'Meet & Greet service at MLA International Airport. We track your flight to ensure we are there exactly when you land. No waiting, no stress.',
      icon: Plane,
    },
    {
      title: 'Full Day Island Tours',
      price: 'From €140 (6 hours)',
      description: 'Experience Malta or Gozo with a local expert. Customize your itinerary or let us guide you to the hidden gems and historical sites.',
      icon: Map,
    },
    {
      title: 'Point-to-Point',
      price: 'Fixed Quote',
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
             <div className="mb-12 border-l-2 border-gold-400 pl-6">
                <h3 className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-2">Our Expertise</h3>
                <h2 className="text-3xl text-white font-serif font-bold">Professional Transport for Every Need</h2>
             </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-slate-900/50 p-8 border border-slate-800 hover:border-gold-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center text-gold-400">
                  <service.icon size={20} />
                </div>
                {limit === undefined && (
                    <span className="text-xs font-bold text-slate-400 border border-slate-700 px-2 py-1 rounded">
                        {service.price}
                    </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;