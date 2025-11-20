
import React, { useState, useEffect } from 'react';
import { ServiceType, BookingRequest } from '../types';
import { Send, CheckCircle } from 'lucide-react';

interface BookingFormProps {
  preSelectedTour?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ preSelectedTour }) => {
  const [formData, setFormData] = useState<BookingRequest>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    serviceType: ServiceType.AIRPORT,
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Auto-fill if a tour is passed via props
  useEffect(() => {
    if (preSelectedTour) {
      setFormData(prev => ({
        ...prev,
        serviceType: ServiceType.TOUR,
        notes: `I would like to book the: ${preSelectedTour}`
      }));
    }
  }, [preSelectedTour]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation of API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="book-now" className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          <div className="bg-gold-500 p-10 md:w-1/3 flex flex-col justify-between text-slate-900">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Contact Us</h3>
              <p className="font-medium mb-6">Ready for a seamless journey?</p>
              <div className="space-y-4 text-sm font-medium opacity-90">
                <p>📞 +356 9900 1234</p>
                <p>✉️ bookings@maltaprestige.com</p>
                <p>📍 Valletta, Malta</p>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-xs uppercase tracking-wider font-bold opacity-70">Availability</p>
              <p className="font-bold text-lg">24/7 with Pre-booking</p>
            </div>
          </div>

          <div className="p-10 md:w-2/3 bg-slate-50">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received</h3>
                <p className="text-slate-600">Thank you, {formData.name}. We will contact you shortly at {formData.phone} to confirm your booking.</p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData(prev => ({ ...prev, notes: '', serviceType: ServiceType.AIRPORT }));
                  }}
                  className="mt-8 text-gold-600 font-bold hover:underline"
                >
                  Make another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900">Request a Quote / Booking</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name</label>
                    <input 
                      required 
                      name="name"
                      value={formData.name} 
                      onChange={handleChange}
                      type="text" 
                      className="w-full p-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none text-slate-800"
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Phone (WhatsApp)</label>
                    <input 
                      required 
                      name="phone"
                      value={formData.phone} 
                      onChange={handleChange}
                      type="tel" 
                      className="w-full p-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none text-slate-800"
                      placeholder="+356..." 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email</label>
                    <input 
                      required 
                      name="email"
                      value={formData.email} 
                      onChange={handleChange}
                      type="email" 
                      className="w-full p-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none text-slate-800"
                      placeholder="john@example.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Service Type</label>
                    <select 
                      name="serviceType"
                      value={formData.serviceType} 
                      onChange={handleChange}
                      className="w-full p-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none text-slate-800"
                    >
                      {Object.values(ServiceType).map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Date</label>
                    <input 
                      required 
                      name="date"
                      value={formData.date} 
                      onChange={handleChange}
                      type="date" 
                      className="w-full p-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Time</label>
                    <input 
                      required 
                      name="time"
                      value={formData.time} 
                      onChange={handleChange}
                      type="time" 
                      className="w-full p-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Additional Notes</label>
                  <textarea 
                    name="notes"
                    value={formData.notes} 
                    onChange={handleChange}
                    className="w-full p-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none text-slate-800 h-24 resize-none"
                    placeholder="Flight number, hotel name, or specific requests..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
