
import React from 'react';
import { Link } from 'react-router-dom';
import QuoteCalculator from '../components/QuoteCalculator';
import { SERVICES, TESTIMONIALS } from '../constants';
import { Star, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/191/1920/1080" 
            alt="Lush green landscaping in Cleveland Tennessee" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              Premier <span className="text-accent">Landscaping</span> <br /> & Lawn Care in Cleveland, TN
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-medium">
              We tame the Tennessee terrain. From precision mowing to luxury outdoor living, 
              discover why Bradley County trusts Ingram's.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#quote" 
                className="bg-accent hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg text-center transition-all transform hover:scale-105 shadow-2xl"
              >
                Get Instant Quote
              </a>
              <Link 
                to="/services" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg text-center transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Badges */}
        <div className="absolute bottom-8 right-8 hidden lg:flex gap-6 animate-in slide-in-from-right duration-1000">
          <div className="bg-white p-4 rounded-2xl flex items-center gap-3 shadow-2xl">
            <Award className="text-accent" size={32} />
            <div>
              <p className="font-black text-sm">#1 RANKED</p>
              <p className="text-xs text-gray-500 font-bold uppercase">Cleveland 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center gap-8">
          <div className="flex items-center gap-2 text-white">
            <ShieldCheck className="text-accent" />
            <span className="font-bold uppercase text-xs tracking-widest">Fully Insured</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Clock className="text-accent" />
            <span className="font-bold uppercase text-xs tracking-widest">Reliable Scheduling</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Star className="text-accent" />
            <span className="font-bold uppercase text-xs tracking-widest">Local Experts</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-accent font-black uppercase tracking-widest mb-2">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Dominating The <br /> Local Landscape</h3>
            </div>
            <Link to="/services" className="text-black font-bold flex items-center gap-2 hover:text-accent group transition-colors">
              VIEW ALL SERVICES <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map(s => (
              <div key={s.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">{s.name}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{s.description}</p>
                  <Link to="/services" className="text-accent font-bold text-sm uppercase tracking-wider hover:underline">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-black uppercase tracking-tighter leading-tight">
                No More Guessing. <br />
                <span className="text-accent">Get An Instant Quote.</span>
              </h2>
              <p className="text-lg text-gray-600">
                We've built a custom pricing engine specifically for Cleveland properties. 
                Enter your details and get an estimate for mowing, mulching, or hardscaping in under 60 seconds.
              </p>
              <ul className="space-y-4">
                {['Accurate Local Pricing', 'PDF Downloadable Estimates', 'Zero Obligation', 'Special Cleveland Resident Discounts'].map(item => (
                  <li key={item} className="flex items-center gap-3 font-bold text-gray-800 uppercase text-sm">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white">
                      <ShieldCheck size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <QuoteCalculator />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black uppercase text-center mb-16 tracking-tighter">
            What Bradley County <br /> <span className="text-accent">Is Saying About Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-gray-900 p-8 rounded-3xl border border-gray-800 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-accent mb-4">
                    {[...Array(t.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-lg italic text-gray-300">"{t.text}"</p>
                </div>
                <div className="mt-8">
                  <p className="font-bold uppercase tracking-widest">{t.name}</p>
                  <p className="text-xs text-gray-500 font-bold">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-tight">
            Ready for a yard <br /> that turns heads?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-white text-accent px-10 py-5 rounded-full font-black text-xl hover:bg-gray-100 transition-all uppercase tracking-tighter">
              Book a Consultation
            </Link>
            <a href="tel:4235550199" className="bg-black text-white px-10 py-5 rounded-full font-black text-xl hover:bg-gray-900 transition-all uppercase tracking-tighter">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
