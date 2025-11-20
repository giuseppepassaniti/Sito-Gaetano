
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import TourSelector from './components/TourSelector';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import { ServiceType } from './types';

export type PageView = 'home' | 'services' | 'about' | 'tours' | 'contact';

function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [preSelectedTour, setPreSelectedTour] = useState<string>('');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleBookNow = () => {
    setPreSelectedTour('');
    setCurrentView('contact');
  };

  const handleBookTour = (tourName: string) => {
    setPreSelectedTour(tourName);
    setCurrentView('contact');
  };

  return (
    <div className="min-h-screen bg-navy-900 text-slate-100 flex flex-col font-sans">
      <Navbar currentView={currentView} onChangeView={setCurrentView} />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero onBookNow={handleBookNow} />
            {/* Brief previews of other sections on Home */}
            <div className="py-12 border-b border-slate-800">
              <Services limit={3} onBookService={handleBookNow} />
              <div className="text-center mt-8">
                <button onClick={() => setCurrentView('services')} className="text-gold-400 hover:text-white font-medium underline underline-offset-4">
                  View All Services
                </button>
              </div>
            </div>
            <WhyUs />
            <div className="py-12 text-center bg-slate-900">
              <h2 className="text-3xl font-serif text-white mb-4">Popular Tours</h2>
               <p className="text-slate-400 mb-8">See our top rated itineraries</p>
               <button onClick={() => setCurrentView('tours')} className="bg-slate-800 border border-slate-700 text-white px-6 py-3 rounded hover:bg-slate-700 transition">
                 Browse Tours
               </button>
            </div>
          </>
        )}

        {currentView === 'services' && (
          <div className="pt-20 animate-fade-in">
            <div className="bg-slate-800 py-12 px-4 text-center">
              <h1 className="text-4xl font-serif font-bold text-white mb-4">Our Premium Services</h1>
              <p className="text-slate-400 max-w-2xl mx-auto">Comprehensive transport solutions for leisure and business travelers in Malta.</p>
            </div>
            <Services onBookService={handleBookNow} />
            <div className="bg-navy-900 py-16 text-center">
              <h3 className="text-2xl font-serif text-white mb-6">Need something specific?</h3>
              <button onClick={handleBookNow} className="bg-gold-400 text-slate-900 px-8 py-3 rounded-md font-bold hover:bg-gold-500 transition-colors">
                Request a Custom Quote
              </button>
            </div>
          </div>
        )}

        {currentView === 'about' && (
          <div className="pt-20 animate-fade-in">
             <div className="bg-slate-800 py-12 px-4 text-center">
              <h1 className="text-4xl font-serif font-bold text-white mb-4">The Private Driver Difference</h1>
              <p className="text-slate-400 max-w-2xl mx-auto">Why discerning travelers choose us over apps and standard taxis.</p>
            </div>
            <WhyUs />
          </div>
        )}

        {currentView === 'tours' && (
           <div className="pt-20 animate-fade-in">
            <TourSelector onBookTour={handleBookTour} />
          </div>
        )}

        {currentView === 'contact' && (
          <div className="pt-20 animate-fade-in">
            <div className="bg-slate-800 py-12 px-4 text-center">
              <h1 className="text-4xl font-serif font-bold text-white mb-4">Book Your Ride</h1>
              <p className="text-slate-400 max-w-2xl mx-auto">
                {preSelectedTour ? `You are requesting: ${preSelectedTour}` : 'Secure your driver in advance. We reply within 1 hour.'}
              </p>
            </div>
            <BookingForm preSelectedTour={preSelectedTour} />
          </div>
        )}
      </main>

      <Footer onViewChange={setCurrentView} />
    </div>
  );
}

export default App;
