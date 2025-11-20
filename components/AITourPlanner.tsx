import React, { useState } from 'react';
import { Sparkles, MapPin, Clock, Compass, Loader2 } from 'lucide-react';
import { Island, TourInterest, GeneratedItinerary } from '../types';
import { generateTourItinerary } from '../services/geminiService';

const AITourPlanner: React.FC = () => {
  const [island, setIsland] = useState<Island>(Island.MALTA);
  const [duration, setDuration] = useState<number>(6);
  const [interest, setInterest] = useState<TourInterest>(TourInterest.HISTORY);
  
  const [itinerary, setItinerary] = useState<GeneratedItinerary | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await generateTourItinerary(island, duration, interest);
      setItinerary(result);
    } catch (err) {
      setError("Sorry, our AI planner is busy. Please try again later or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-planner" className="py-24 bg-slate-950 relative">
       {/* Decorative background elements */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-sm font-medium mb-4">
            <Sparkles size={14} />
            Powered by Google Gemini AI
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Design Your Perfect Tour
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Not sure where to go? Let our AI Concierge suggest a custom itinerary based on your interests. 
            If you like it, book us to drive you there!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls */}
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 h-fit">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <Compass size={20} className="text-gold-500" /> Tour Preferences
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-slate-400 text-sm mb-2">Select Island</label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.values(Island).map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setIsland(opt)}
                      className={`py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                        island === opt 
                          ? 'bg-gold-500 text-slate-900' 
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-sm mb-2">Duration ({duration} Hours)</label>
                <input 
                  type="range" 
                  min="4" 
                  max="10" 
                  step="1"
                  value={duration}
                  onChange={(e) => setDuration(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>4h</span>
                  <span>10h</span>
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-sm mb-2">Main Interest</label>
                <div className="space-y-2">
                  {Object.values(TourInterest).map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setInterest(opt)}
                      className={`w-full text-left py-2 px-4 rounded-lg text-sm transition-all ${
                        interest === opt 
                          ? 'bg-slate-800 border-gold-500 border text-white' 
                          : 'bg-slate-950 text-slate-400 border border-transparent hover:bg-slate-900'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
                Generate Itinerary
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-xl p-8 min-h-[500px] flex flex-col">
            {!itinerary && !loading && !error && (
              <div className="flex-1 flex flex-col items-center justify-center text-slate-500">
                <MapPin size={48} className="mb-4 opacity-20" />
                <p>Configure your preferences and click "Generate" to see a custom tour plan.</p>
              </div>
            )}

            {loading && (
              <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
                <Loader2 size={48} className="animate-spin text-gold-500 mb-4" />
                <p className="animate-pulse">Consulting the map...</p>
              </div>
            )}

            {error && (
              <div className="flex-1 flex flex-col items-center justify-center text-red-400">
                <p>{error}</p>
              </div>
            )}

            {itinerary && !loading && (
              <div className="animate-fade-in">
                <div className="flex justify-between items-start mb-8 border-b border-slate-700 pb-6">
                  <div>
                    <h3 className="text-2xl font-serif text-white mb-2">{itinerary.title}</h3>
                    <p className="text-gold-500 text-sm flex items-center gap-2">
                      <Clock size={14} /> {duration} Hours Total
                    </p>
                  </div>
                  <button 
                    onClick={() => window.location.href = '#book-now'}
                    className="bg-gold-500 text-slate-900 px-4 py-2 rounded-lg font-bold text-sm hover:bg-gold-400"
                  >
                    Book This Tour
                  </button>
                </div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                  {itinerary.stops.map((stop, idx) => (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:bg-slate-800 group-hover:border-gold-500 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow text-slate-400 group-hover:text-gold-500 z-10">
                        <span className="font-bold text-sm">{idx + 1}</span>
                      </div>
                      
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-5 rounded-lg border border-slate-700 hover:border-gold-500/30 transition-all shadow-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-white">{stop.locationName}</h4>
                          <span className="text-xs text-slate-400 bg-slate-900 px-2 py-1 rounded">{stop.estimatedDuration}</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">{stop.description}</p>
                      </div>
                    
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITourPlanner;