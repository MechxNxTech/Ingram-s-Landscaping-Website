
import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';
import { Send, Phone, Mail, Clock, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-in fade-in duration-700 pb-32">
      <div className="bg-accent text-white py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">Contact <span className="text-black">Us</span></h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90 px-4 font-bold">
          Ready to dominate your neighborhood's curb appeal? Drop us a line.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-6">
              <div className="w-14 h-14 bg-red-50 text-accent rounded-2xl flex items-center justify-center shrink-0">
                <Phone size={28} />
              </div>
              <div>
                <p className="text-xs font-black uppercase text-gray-400 tracking-widest">Phone</p>
                <p className="text-xl font-bold">{COMPANY_INFO.phone}</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-6">
              <div className="w-14 h-14 bg-red-50 text-accent rounded-2xl flex items-center justify-center shrink-0">
                <Mail size={28} />
              </div>
              <div>
                <p className="text-xs font-black uppercase text-gray-400 tracking-widest">Email</p>
                <p className="text-xl font-bold break-all">{COMPANY_INFO.email}</p>
              </div>
            </div>
            <div className="bg-black text-white p-8 rounded-3xl shadow-xl flex items-center gap-6">
              <div className="w-14 h-14 bg-accent/20 text-accent rounded-2xl flex items-center justify-center shrink-0">
                <Clock size={28} />
              </div>
              <div>
                <p className="text-xs font-black uppercase text-gray-400 tracking-widest">Hours</p>
                <p className="text-lg font-bold">{COMPANY_INFO.hours}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Send size={48} />
                </div>
                <h2 className="text-3xl font-black uppercase">Message Sent!</h2>
                <p className="text-gray-600">Thank you for reaching out. A Cleveland landscape expert will contact you within 24 business hours.</p>
                <button onClick={() => setSubmitted(false)} className="text-accent font-bold uppercase tracking-widest">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <h2 className="text-3xl font-black uppercase tracking-tight">Send an Inquiry</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500">Full Name</label>
                    <input required className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-accent p-4 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500">Phone</label>
                    <input required className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-accent p-4 outline-none transition-all" placeholder="(423) 000-0000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Service Needed</label>
                  <select className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-accent p-4 outline-none transition-all">
                    <option>Weekly Lawn Mowing</option>
                    <option>Landscape Design</option>
                    <option>Hardscaping (Patio/Wall)</option>
                    <option>Mulching / Pine Straw</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Your Message</label>
                  <textarea rows={4} className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-accent p-4 outline-none transition-all" placeholder="Tell us about your property..."></textarea>
                </div>
                <button type="submit" className="w-full bg-black text-white py-6 rounded-2xl font-black text-xl uppercase tracking-tighter hover:bg-accent transition-all flex items-center justify-center gap-3">
                  Submit Request <Send size={24} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
