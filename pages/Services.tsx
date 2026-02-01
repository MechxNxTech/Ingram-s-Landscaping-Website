
import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-gray-50 py-20 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">Our <span className="text-accent">Services</span></h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From basic maintenance to full-scale outdoor renovations, Ingram's provides 
            Cleveland, TN with the highest quality landscaping solutions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        {SERVICES.map((s, idx) => (
          <div key={s.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-black uppercase tracking-tight">{s.name}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{s.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {s.features.map(f => (
                  <div key={f} className="flex items-center gap-2 font-bold text-sm uppercase text-gray-800">
                    <CheckCircle2 className="text-accent" size={18} />
                    {f}
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <a href="#/contact" className="inline-block bg-black text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-accent transition-colors">
                  Inquire About {s.name.split(' ')[0]}
                </a>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-accent/10 rounded-3xl group-hover:bg-accent/20 transition-all -rotate-3"></div>
                <img src={s.image} alt={s.name} className="relative z-10 w-full rounded-2xl shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Local Pain Points Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-accent font-black uppercase tracking-widest mb-4">Cleveland Specific</h2>
          <h3 className="text-4xl font-black uppercase mb-12">How We Handle The Tennessee Terrain</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div className="p-8 border border-gray-800 rounded-3xl">
              <h4 className="text-xl font-bold mb-4 text-accent uppercase">The Red Clay Challenge</h4>
              <p className="text-gray-400">Our native clay is nutrient-dense but suffers from poor drainage. We specialize in soil aeration and compost-based amendments to ensure your turf stays green through July.</p>
            </div>
            <div className="p-8 border border-gray-800 rounded-3xl">
              <h4 className="text-xl font-bold mb-4 text-accent uppercase">Heat & Humidity</h4>
              <p className="text-gray-400">Cleveland summers are brutal on cool-season grasses. We offer precision fertilization and disease control specifically for fescue blends common in Bradley County.</p>
            </div>
            <div className="p-8 border border-gray-800 rounded-3xl">
              <h4 className="text-xl font-bold mb-4 text-accent uppercase">Stormwater Solutions</h4>
              <p className="text-gray-400">Bradley County sees intense rain. We design retaining walls and French drains that don't just look good—they save your foundation and prevent yard erosion.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
