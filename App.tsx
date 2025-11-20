import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import AITourPlanner from './components/AITourPlanner';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

export type PageView = 'home' | 'services' | 'about' | 'planner' | 'contact';

function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen bg-navy-900 text-slate-100 flex flex-col">
      <Navbar currentView={currentView} onChangeView={setCurrentView} />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero onBookNow={() => setCurrentView('contact')} />
            {/* Brief previews of other sections on Home */}
            <div className="py-12 border-b border-slate-800">
              <Services limit={3} />
              <div className="text-center mt-8">
                <button onClick={() => setCurrentView('services')} className="text-gold-400 hover:text-white font-medium underline underline-offset-4">
                  View All Services
                </button>
              </div>
            </div>
            <WhyUs />
          </>
        )}

        {currentView === 'services' && (
          <div className="pt-20 animate-fade-in">
            <div className="bg-slate-800 py-12 px-4 text-center">
              <h1 className="text-4xl font-serif font-bold text-white mb-4">Our Premium Services</h1>
              <p className="text-slate-400 max-w-2xl mx-auto">Comprehensive transport solutions for leisure and business travelers in Malta.</p>
            </div>
            <Services />
            <div className="bg-navy-900 py-16 text-center">
              <h3 className="text-2xl font-serif text-white mb-6">Need something specific?</h3>
              <button onClick={() => setCurrentView('contact')} className="bg-gold-400 text-slate-900 px-8 py-3 rounded-md font-bold hover:bg-gold-500 transition-colors">
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
            {/* Additional About Content could go here */}
          </div>
        )}

        {currentView === 'planner' && (
           <div className="pt-20 animate-fade-in">
            <AITourPlanner />
          </div>
        )}

        {currentView === 'contact' && (
          <div className="pt-20 animate-fade-in">
            <div className="bg-slate-800 py-12 px-4 text-center">
              <h1 className="text-4xl font-serif font-bold text-white mb-4">Book Your Ride</h1>
              <p className="text-slate-400 max-w-2xl mx-auto">Secure your driver in advance. We reply within 1 hour.</p>
            </div>
            <BookingForm />
          </div>
        )}
      </main>

      <Footer onViewChange={setCurrentView} />
    </div>
  );
}

export default App;