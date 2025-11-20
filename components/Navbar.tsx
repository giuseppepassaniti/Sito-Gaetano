
import React, { useState } from 'react';
import { Menu, X, Car, Phone } from 'lucide-react';
import { PageView } from '../App';

interface NavbarProps {
  currentView: PageView;
  onChangeView: (view: PageView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onChangeView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { name: string; view: PageView }[] = [
    { name: 'Home', view: 'home' },
    { name: 'Services', view: 'services' },
    { name: 'Tours', view: 'tours' },
    { name: 'About', view: 'about' },
  ];

  const handleNav = (view: PageView) => {
    onChangeView(view);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-navy-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNav('home')}
          >
            <div className="bg-slate-800 p-2 rounded-full group-hover:bg-slate-700 transition-colors">
              <Car className="h-6 w-6 text-gold-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-white tracking-wide leading-none">
                Malta Prestige
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400">Private Chauffeur</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.view)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    currentView === link.view 
                      ? 'text-gold-400' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNav('contact')}
                className="bg-gold-400 text-navy-900 px-6 py-2.5 rounded-sm text-sm font-bold hover:bg-gold-500 transition-all flex items-center gap-2"
              >
                <Phone size={16} />
                Book Now
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-900 border-b border-slate-800 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNav(link.view)}
                className={`block w-full text-left px-3 py-4 border-b border-slate-800 text-base font-medium ${
                   currentView === link.view ? 'text-gold-400' : 'text-slate-300'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNav('contact')}
              className="w-full mt-4 bg-gold-400 text-navy-900 px-3 py-3 rounded-sm text-base font-bold text-center"
            >
              Book Your Driver
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
