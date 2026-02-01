
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-black tracking-tighter">INGRAM'S <span className="text-accent">LANDSCAPING</span></h3>
          <p className="text-gray-400 text-sm">
            Tennessee's premier choice for lawn maintenance and luxury landscape design. 
            Proudly serving Cleveland, Bradley County, and surrounding areas.
          </p>
          <div className="flex gap-4">
            <Facebook className="hover:text-accent cursor-pointer transition-colors" />
            <Instagram className="hover:text-accent cursor-pointer transition-colors" />
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold uppercase tracking-widest text-sm text-accent">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Project Gallery</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold uppercase tracking-widest text-sm text-accent">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Lawn Mowing</li>
            <li>Mulch & Pine Straw</li>
            <li>Paver Patios</li>
            <li>Retaining Walls</li>
            <li>Irrigation & Lighting</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold uppercase tracking-widest text-sm text-accent">Contact Info</h4>
          <div className="space-y-3 text-sm text-gray-400">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-accent shrink-0" />
              <span>{COMPANY_INFO.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-accent shrink-0" />
              <span>{COMPANY_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-accent shrink-0" />
              <span>{COMPANY_INFO.email}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
        <p>&copy; {new Date().getFullYear()} Ingram's Landscaping & Lawn Care. All Rights Reserved. Managed by Cleveland SEO Experts.</p>
      </div>
    </footer>
  );
};

export default Footer;
