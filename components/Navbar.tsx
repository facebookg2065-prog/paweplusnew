import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-lg border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black italic metallic-text tracking-wider">
          POWER PLUS
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-bold transition-colors ${
                location.pathname === link.path 
                  ? 'text-red-500' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost">تسجيل الدخول</Button>
          </Link>
          <Link to="/register">
             <Button variant="primary" className="!px-5">اشتراك</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-gray-900 p-6 absolute w-full left-0 animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-base font-bold py-2 ${
                  location.pathname === link.path ? 'text-red-500' : 'text-gray-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-gray-800 my-2" />
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button variant="secondary" fullWidth>تسجيل الدخول</Button>
            </Link>
            <Link to="/register" onClick={() => setIsOpen(false)}>
              <Button variant="primary" fullWidth>اشتراك جديد</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};