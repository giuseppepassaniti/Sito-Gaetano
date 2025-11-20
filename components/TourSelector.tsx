
import React, { useState } from 'react';
import { Clock, ArrowRight, CheckCircle2, Compass } from 'lucide-react';
import { StaticTour } from '../types';

interface TourSelectorProps {
  onBookTour: (tourName: string) => void;
}

const TOURS: StaticTour[] = [
  {
    id: 'malta-highlights',
    title: 'Best of Malta (Full Day)',
    island: 'Malta',
    duration: '8 Hours',
    description: 'The ultimate introduction to the island. We start at the silent city of Mdina, proceed to the breathtaking Dingli Cliffs, visit the artisan crafts village, and finish with the capital city, Valletta.',
    highlights: ['Mdina & Rabat', 'Dingli Cliffs', 'Ta’ Qali Crafts Village', 'Valletta & St. John’s Co-Cathedral'],
    priceEstimate: '€160',
    image: 'https://images.unsplash.com/photo-1548678650-431d18365f55?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'gozo-explorer',
    title: 'Gozo: The Hidden Gem',
    island: 'Gozo',
    duration: '7-8 Hours',
    description: 'A ferry crossing takes us to the greener, slower-paced sister island. We explore ancient citadels, red sandy beaches, and dramatic coastal formations.',
    highlights: ['Ferry Crossing included', 'Cittadella (Victoria)', 'Dwejra (Inland Sea)', 'Ramla Bay & Calypso Cave'],
    priceEstimate: '€180',
    image: 'https://images.unsplash.com/photo-1593346356996-373896522c88?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'south-market',
    title: 'South Malta & Blue Grotto',
    island: 'Malta',
    duration: '5 Hours',
    description: 'Discover the authentic fishing village of Marsaxlokk with its colorful Luzzu boats, followed by a boat trip to the stunning Blue Grotto caves.',
    highlights: ['Marsaxlokk Fishing Village', 'Blue Grotto (Boat Optional)', 'Hagar Qim Temples', 'Wied iz-Zurrieq'],
    priceEstimate: '€120',
    image: 'https://images.unsplash.com/photo-1523531294919-943c3f67120b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'three-cities',
    title: 'The Three Cities & Knights',
    island: 'Malta',
    duration: '4 Hours',
    description: 'Walk in the footsteps of the Knights of St. John. We explore Vittoriosa, Senglea, and Cospicua, offering the best views of the Grand Harbour.',
    highlights: ['Fort St. Angelo', 'Gardjola Gardens', 'Birgu Waterfront', 'Maritime Museum area'],
    priceEstimate: '€100',
    image: 'https://images.unsplash.com/photo-1630338454207-398b10b7b475?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'prehistoric-malta',
    title: 'Ancient Temples Tour',
    island: 'Malta',
    duration: '5 Hours',
    description: 'Malta has freestanding structures older than the Pyramids. This tour focuses on archaeology and ancient history.',
    highlights: ['Ggantija (if Gozo)', 'Hagar Qim & Mnajdra', 'Tarxien Temples', 'Ghar Dalam Cave'],
    priceEstimate: '€130',
    image: 'https://images.unsplash.com/photo-1598611940281-d8632d175055?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'night-tour',
    title: 'Malta by Night',
    island: 'Malta',
    duration: '4 Hours',
    description: 'See the island beautifully illuminated. Perfect for a romantic evening or a relaxed drive after dinner.',
    highlights: ['Valletta Waterfront', 'Mdina Bastions at Night', 'St. Julian’s Promenade', 'Popeye Village Viewpoint'],
    priceEstimate: '€110',
    image: 'https://images.unsplash.com/photo-1629727295272-74c3d88e5f01?q=80&w=1000&auto=format&fit=crop'
  }
];

const TourSelector: React.FC<TourSelectorProps> = ({ onBookTour }) => {
  const [filterIsland, setFilterIsland] = useState<'All' | 'Malta' | 'Gozo'>('All');

  const filteredTours = filterIsland === 'All' 
    ? TOURS 
    : TOURS.filter(t => t.island === filterIsland);

  return (
    <section id="tours" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-gold-400 font-bold uppercase tracking-widest text-xs mb-2 block">Discover the Islands</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Curated Private Tours
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Skip the crowded buses. Enjoy a private, air-conditioned Mercedes vehicle with a knowledgeable local driver.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {['All', 'Malta', 'Gozo'].map((island) => (
            <button
              key={island}
              onClick={() => setFilterIsland(island as any)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                filterIsland === island 
                  ? 'bg-gold-400 border-gold-400 text-navy-900' 
                  : 'bg-transparent border-slate-700 text-slate-300 hover:border-gold-400 hover:text-gold-400'
              }`}
            >
              {island}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <div key={tour.id} className="group bg-navy-900 border border-slate-800 hover:border-gold-400/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-400/10 flex flex-col">
              
              {/* Image Header - INCREASED HEIGHT for better visibility */}
              <div className="h-64 overflow-hidden relative bg-slate-800">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    // Could show a placeholder div here instead
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-80"></div>
                <div className="absolute top-4 left-4">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-lg ${tour.island === 'Gozo' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'}`}>
                        {tour.island}
                    </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white font-serif group-hover:text-gold-400 transition-colors">
                    {tour.title}
                    </h3>
                </div>
                
                <div className="flex items-center gap-2 mb-4 text-gold-400 text-xs font-bold">
                    <Clock size={14} />
                    {tour.duration}
                </div>

                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {tour.description}
                </p>

                <div className="space-y-2 mb-8 flex-grow border-t border-slate-800 pt-4">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Highlights:</p>
                  {tour.highlights.slice(0, 3).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 size={14} className="text-gold-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-4">
                   <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 uppercase">Vehicle & Driver</span>
                    <span className="text-lg font-bold text-white">{tour.priceEstimate}</span>
                  </div>
                  <button 
                    onClick={() => onBookTour(tour.title)}
                    className="flex items-center gap-2 bg-white text-navy-900 hover:bg-gold-400 px-4 py-2 rounded-lg font-bold transition-all text-sm"
                  >
                    Book
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-br from-slate-900 to-navy-900 p-8 rounded-2xl border border-slate-800 max-w-3xl mx-auto shadow-2xl">
          <Compass className="mx-auto text-gold-400 mb-4 animate-pulse" size={32} />
          <h3 className="text-xl font-bold text-white mb-2">Create Your Own Itinerary</h3>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            We are flexible. Rent a driver by the hour (€25-35/hr) and you decide where to stop and for how long.
          </p>
          <button 
            onClick={() => onBookTour('Custom Hourly Service')}
            className="inline-flex items-center gap-2 text-gold-400 font-bold hover:text-white transition-colors border-b border-gold-400 pb-1 hover:border-white"
          >
            Request Hourly Quote <ArrowRight size={14}/>
          </button>
        </div>

      </div>
    </section>
  );
};

export default TourSelector;
