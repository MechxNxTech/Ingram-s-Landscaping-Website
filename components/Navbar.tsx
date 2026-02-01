
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-black tracking-tighter">
              INGRAM'S <span className="text-accent">LANDSCAPING</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-accent ${
                  isActive(link.path) ? 'text-accent' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-accent text-white px-5 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-red-700 transition-all shadow-lg hover:scale-105"
            >
              <Phone size={16} /> {COMPANY_INFO.phone}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-black"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-semibold uppercase ${
                  isActive(link.path) ? 'text-accent bg-gray-50' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="block px-3 py-2 text-base font-bold text-accent"
            >
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
