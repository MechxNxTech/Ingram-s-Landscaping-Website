
import React from 'react';

const Gallery: React.FC = () => {
  const projects = [
    { title: "Luxury Patio Install", location: "Cleveland, TN", img: "https://picsum.photos/id/101/800/600" },
    { title: "Segmental Retaining Wall", location: "Bradley County", img: "https://picsum.photos/id/102/800/600" },
    { title: "Residential Mowing Contract", location: "Hopewell", img: "https://picsum.photos/id/103/800/600" },
    { title: "Spring Mulch Refresh", location: "Cleveland, TN", img: "https://picsum.photos/id/104/800/600" },
    { title: "Custom Stone Walkway", location: "Charleston, TN", img: "https://picsum.photos/id/106/800/600" },
    { title: "Commercial Groundskeeping", location: "Cleveland North", img: "https://picsum.photos/id/107/800/600" },
    { title: "Modern Landscape Design", location: "Cleveland Hills", img: "https://picsum.photos/id/108/800/600" },
    { title: "Irrigation Setup", location: "Bradley County", img: "https://picsum.photos/id/109/800/600" },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <div className="py-20 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">Completed <span className="text-accent">Projects</span></h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of high-end landscaping and lawn care transformations 
            across the Cleveland area.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-gray-100">
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-50"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none mb-2">{p.title}</h3>
                <p className="text-accent font-bold uppercase tracking-widest text-sm">{p.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-12 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200 text-center">
          <h2 className="text-3xl font-black uppercase mb-4">Your Project Could Be Next</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">We're currently booking for the upcoming season in Bradley County. Secure your spot on our schedule today.</p>
          <a href="#/contact" className="inline-block bg-accent text-white px-10 py-5 rounded-full font-black text-xl hover:scale-105 transition-all uppercase tracking-tighter shadow-xl">
            Request a Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
