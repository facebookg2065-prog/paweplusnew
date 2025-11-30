import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Mock checking if user is on a protected page or "logged in" for demo purposes
  // In a real app, this would check auth state
  const isDashboard = location.pathname.includes('/dashboard');

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
          <Link to="/dashboard">
             <Button variant={isDashboard ? "primary" : "ghost"} className="flex items-center gap-2">
                <User size={18} />
                <span>حسابي</span>
             </Button>
          </Link>
          {!isDashboard && (
            <Link to="/login">
              <Button variant="outline" className="!px-5 border-gray-700 text-gray-300">تسجيل الدخول</Button>
            </Link>
          )}
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
        <div className="md:hidden bg-[#0a0a0a] border-b border-gray-900 p-6 absolute w-full left-0 top-20 animate-in slide-in-from-top-5 z-40">
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
            <Link to="/dashboard" onClick={() => setIsOpen(false)} className="text-base font-bold py-2 text-gray-300">
              حسابي
            </Link>
            <div className="h-px bg-gray-800 my-2" />
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button variant="secondary" fullWidth>تسجيل الدخول</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};