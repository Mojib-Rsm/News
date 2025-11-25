import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, X, User, Bell, Facebook, Twitter, Youtube } from 'lucide-react';
import { CATEGORIES } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const currentDate = new Date().toLocaleDateString('bn-BD', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="flex flex-col border-b border-gray-200">
      {/* Top Bar: Date, Socials, Login */}
      <div className="bg-gray-100 text-sm py-1 px-4 hidden md:flex justify-between items-center text-gray-600">
        <div>{currentDate}</div>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2 border-r border-gray-300 pr-4">
            <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-600" />
            <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-400" />
            <Youtube className="w-4 h-4 cursor-pointer hover:text-red-600" />
          </div>
          <button className="flex items-center hover:text-primary">
            <User className="w-4 h-4 mr-1" />
            লগইন
          </button>
        </div>
      </div>

      {/* Main Header: Logo and Ad Placeholder */}
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link to="/" className="flex flex-col items-center md:items-start">
          <div className="bg-primary text-white px-2 py-1 text-xs font-bold uppercase tracking-widest mb-1">
            ২৪ ঘণ্টা লাইভ
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">
            ডেইলি দেশ<span className="text-primary">২৪</span>
          </h1>
        </Link>

        {/* Ad Placeholder 728x90 */}
        <div className="hidden lg:flex w-[728px] h-[90px] bg-gray-200 items-center justify-center text-gray-400 text-sm border border-dashed border-gray-300">
          বিজ্ঞাপন (728x90)
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-secondary text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-12">
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-1 h-full items-center">
              <Link to="/" className="px-3 h-full flex items-center hover:bg-primary font-medium">হোম</Link>
              {CATEGORIES.slice(0, 8).map(cat => (
                <Link 
                  key={cat.id} 
                  to={`/category/${cat.id}`}
                  className="px-3 h-full flex items-center hover:bg-primary text-gray-300 hover:text-white transition-colors"
                >
                  {cat.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:text-primary relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              </button>
              <div className="relative">
                <button 
                  className="p-2 hover:text-primary"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <Search className="w-5 h-5" />
                </button>
                {/* Search Dropdown */}
                {isSearchOpen && (
                  <div className="absolute right-0 top-full mt-2 w-72 bg-white shadow-lg p-2 rounded text-gray-900 border border-gray-200">
                    <div className="flex">
                      <input 
                        type="text" 
                        placeholder="খুঁজুন..." 
                        className="flex-1 p-2 border border-gray-300 rounded-l focus:outline-none focus:border-primary"
                      />
                      <button className="bg-primary text-white px-4 py-2 rounded-r hover:bg-red-700">
                        <Search className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-700">
            <nav className="flex flex-col py-2">
              <Link to="/" className="px-4 py-3 border-b border-gray-800 hover:text-primary" onClick={() => setIsMenuOpen(false)}>হোম</Link>
              {CATEGORIES.map(cat => (
                <Link 
                  key={cat.id} 
                  to={`/category/${cat.id}`}
                  className="px-4 py-3 border-b border-gray-800 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {cat.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;