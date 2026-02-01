
import React from 'react';
import { COMPANY_INFO } from '../constants';
import { MapPin, Users, History, TreeDeciduous } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="bg-black text-white py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/20 skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
            Born & Raised in <br /><span className="text-accent">Cleveland</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <p className="text-xl text-gray-300 leading-relaxed font-medium">
              Ingram's Landscaping isn't just a business—it's a family legacy rooted in the 
              Bradley County soil. We founded this company with one goal: providing high-end 
              outdoor aesthetics for hard-working Tennessee families.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white/5 rounded-3xl border border-white/10">
                <div className="text-4xl font-black text-accent mb-2">15+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Years Exp</div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-3xl border border-white/10">
                <div className="text-4xl font-black text-accent mb-2">500+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gray-50 flex items-center justify-center rounded-2xl">
                <Users size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-black uppercase">Local Team</h3>
              <p className="text-gray-600">Our crews live right here in Bradley County. We understand the community and the local standards for curb appeal.</p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gray-50 flex items-center justify-center rounded-2xl">
                <History size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-black uppercase">Modern Method</h3>
              <p className="text-gray-600">While we respect tradition, we use state-of-the-art equipment and digital estimating to ensure speed and precision.</p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gray-50 flex items-center justify-center rounded-2xl">
                <TreeDeciduous size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-black uppercase">Eco-Focused</h3>
              <p className="text-gray-600">We utilize native plantings and organic amendments whenever possible to keep Tennessee beautiful for generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 grid grid-cols-1 lg:grid-cols-2">
            <div className="p-16 space-y-8">
              <h2 className="text-4xl font-black uppercase tracking-tighter">Visit Our <br /> <span className="text-accent">Home Base</span></h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-accent shrink-0" />
                  <div>
                    <p className="font-bold">{COMPANY_INFO.address}</p>
                    <p className="text-sm text-gray-500">Cleveland, TN 37311</p>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <p className="text-gray-600 mb-6 italic">"Serving all of Cleveland, Athens, Ooltewah, and the greater Bradley County area since 2009."</p>
                <div className="h-1 bg-accent w-24"></div>
              </div>
            </div>
            <div className="h-[400px] lg:h-auto bg-gray-200">
              {/* Placeholder for Google Map Embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m10!1m3!1d13054.54226154564!2d-84.887204!3d35.159518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885e347890a5d625%3A0x6a2c28646f254b42!2sCleveland%2C%20TN!5e0!3m2!1sen!2sus!4v1715421234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
