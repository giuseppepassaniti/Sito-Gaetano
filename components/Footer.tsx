
import React from 'react';
import { Car, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { PageView } from '../App';

interface FooterProps {
    onViewChange: (view: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onViewChange }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <Car className="h-6 w-6 text-gold-400" />
                <span className="font-serif text-lg font-bold text-white tracking-wide">
                  Malta Prestige
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Professional private chauffeur services in Malta and Gozo. 
                Reliability, discretion, and comfort for the discerning traveler.
              </p>
              <div className="flex space-x-4">
               <a href="#" className="text-slate-400 hover:text-gold-400 transition-colors"><Facebook size={18} /></a>
               <a href="#" className="text-slate-400 hover:text-gold-400 transition-colors"><Instagram size={18} /></a>
               <a href="#" className="text-slate-400 hover:text-gold-400 transition-colors"><Twitter size={18} /></a>
             </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-serif font-bold mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><button onClick={() => onViewChange('home')} className="hover:text-gold-400 transition-colors">Home</button></li>
              <li><button onClick={() => onViewChange('services')} className="hover:text-gold-400 transition-colors">Our Services</button></li>
              <li><button onClick={() => onViewChange('tours')} className="hover:text-gold-400 transition-colors">Island Tours</button></li>
              <li><button onClick={() => onViewChange('about')} className="hover:text-gold-400 transition-colors">Why Choose Us</button></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-1 md:col-span-2">
             <h4 className="text-white font-serif font-bold mb-6">Contact Info</h4>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-400">
                <div className="flex items-start gap-3">
                    <MapPin className="text-gold-400 shrink-0" size={18} />
                    <span>Valletta, Malta<br/>Operating Island-wide</span>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="text-gold-400 shrink-0" size={18} />
                    <span>+356 9900 1234 (WhatsApp Available)</span>
                </div>
                <div className="flex items-center gap-3">
                    <Mail className="text-gold-400 shrink-0" size={18} />
                    <span>bookings@maltaprestige.com</span>
                </div>
             </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Malta Prestige Drive. Licensed Public Transport Operator.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
