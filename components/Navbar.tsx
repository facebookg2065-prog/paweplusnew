import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ChevronDown, ChevronLeft } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Check if active logic
  const isActive = (path: string) => location.pathname === path;

  const isDashboard = location.pathname.includes('/dashboard');

  return (
    <nav className="sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-gray-900 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-black italic metallic-text tracking-wider relative group">
          <span className="relative z-10">POWER PLUS</span>
          <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Desktop Nav - Ultra Fast Hover Dropdowns */}
        <div className="hidden lg:flex items-center gap-2">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="relative group h-10 flex items-center">
              <Link 
                to={link.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                  isActive(link.path) 
                    ? 'text-red-500 bg-red-900/10' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.icon && <link.icon size={18} className={isActive(link.path) ? "text-red-500" : "text-gray-400 group-hover:text-white transition-colors"} />}
                <span>{link.label}</span>
                {link.children && (
                  <ChevronDown size={14} className="text-gray-500 group-hover:text-white transition-transform duration-300 group-hover:-rotate-180" />
                )}
              </Link>

              {/* Dropdown Menu - CSS Only for speed */}
              {link.children && (
                <div className="absolute top-full right-0 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50 w-60">
                  <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl shadow-2xl shadow-black overflow-hidden p-1.5 ring-1 ring-white/5">
                    {link.children.map((child) => (
                      <Link
                        key={child.path + child.label}
                        to={child.path}
                        className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors group/item"
                      >
                        {child.icon && (
                          <div className="p-2 rounded-md bg-gray-900 group-hover/item:bg-red-900/20 group-hover/item:text-red-500 transition-colors">
                            <child.icon size={16} />
                          </div>
                        )}
                        <span className="font-medium text-sm">{child.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/dashboard">
             <Button variant={isDashboard ? "primary" : "ghost"} className="flex items-center gap-2">
                <User size={18} />
                <span>حسابي</span>
             </Button>
          </Link>
          {!isDashboard && (
            <Link to="/login">
              <Button variant="outline" className="!px-6 border-gray-700 text-gray-300 hover:border-red-600 hover:text-red-500">تسجيل الدخول</Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-b border-gray-900 fixed w-full left-0 top-20 h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top-5 z-40 p-6">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="border-b border-gray-900 last:border-0 pb-2 mb-2">
                <Link 
                  to={link.path}
                  className={`flex items-center gap-3 text-lg font-bold py-3 ${
                    isActive(link.path) ? 'text-red-500' : 'text-gray-200'
                  }`}
                  onClick={() => !link.children && setIsOpen(false)}
                >
                    {link.icon && <link.icon size={20} />}
                    {link.label}
                </Link>
                
                {/* Mobile Submenu */}
                {link.children && (
                  <div className="mr-8 flex flex-col gap-2 border-r border-gray-800 pr-4 mt-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="flex items-center gap-3 text-gray-400 py-2 hover:text-white transition-colors text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                         {child.icon && <child.icon size={16} />}
                         {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="mt-6 space-y-4">
                <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" fullWidth className="justify-start gap-3 text-lg">
                        <User size={20} /> حسابي
                    </Button>
                </Link>
                <Link to="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="secondary" fullWidth className="justify-center">تسجيل الدخول</Button>
                </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};