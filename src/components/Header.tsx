import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const location = useLocation();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-stone-700 bg-clip-text text-transparent">
              BITOPIA
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/cars" 
              className={`text-gray-700 hover:text-gray-900 transition ${location.pathname === '/cars' ? 'text-gray-900 font-medium' : ''}`}
            >
              {t('header.cars')}
            </Link>
            <Link 
              to="/real-estate" 
              className={`text-gray-700 hover:text-gray-900 transition ${location.pathname === '/real-estate' ? 'text-gray-900 font-medium' : ''}`}
            >
              {t('header.realEstate')}
            </Link>
            <Link 
              to="/watches" 
              className={`text-gray-700 hover:text-gray-900 transition ${location.pathname === '/watches' ? 'text-gray-900 font-medium' : ''}`}
            >
              {t('header.watches')}
            </Link>
            <Link 
              to="/art" 
              className={`text-gray-700 hover:text-gray-900 transition ${location.pathname === '/art' ? 'text-gray-900 font-medium' : ''}`}
            >
              Art
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-700 hover:text-gray-900 transition ${location.pathname === '/about' ? 'text-gray-900 font-medium' : ''}`}
            >
              {t('header.about')}
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-700 hover:text-gray-900 transition ${location.pathname === '/contact' ? 'text-gray-900 font-medium' : ''}`}
            >
              {t('header.contact')}
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <button className="flex items-center px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition">
              <User className="h-4 w-4 mr-2" />
              <span>{t('header.login')}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-2 space-y-1">
              <Link 
                to="/cars"
                onClick={closeMenu}
                className={`block py-2 px-4 rounded-lg ${
                  location.pathname === '/cars' 
                    ? 'bg-gray-100 text-gray-900 font-medium' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {t('header.cars')}
              </Link>
              <Link 
                to="/real-estate"
                onClick={closeMenu}
                className={`block py-2 px-4 rounded-lg ${
                  location.pathname === '/real-estate' 
                    ? 'bg-gray-100 text-gray-900 font-medium' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {t('header.realEstate')}
              </Link>
              <Link 
                to="/watches"
                onClick={closeMenu}
                className={`block py-2 px-4 rounded-lg ${
                  location.pathname === '/watches' 
                    ? 'bg-gray-100 text-gray-900 font-medium' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {t('header.watches')}
              </Link>
              <Link 
                to="/art"
                onClick={closeMenu}
                className={`block py-2 px-4 rounded-lg ${
                  location.pathname === '/art' 
                    ? 'bg-gray-100 text-gray-900 font-medium' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Art
              </Link>
              <Link 
                to="/about"
                onClick={closeMenu}
                className={`block py-2 px-4 rounded-lg ${
                  location.pathname === '/about' 
                    ? 'bg-gray-100 text-gray-900 font-medium' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {t('header.about')}
              </Link>
              <Link 
                to="/contact"
                onClick={closeMenu}
                className={`block py-2 px-4 rounded-lg ${
                  location.pathname === '/contact' 
                    ? 'bg-gray-100 text-gray-900 font-medium' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {t('header.contact')}
              </Link>
            </div>
            
            <div className="px-4 py-4 border-t border-gray-100 space-y-4">
              <LanguageSelector />
              <button className="w-full flex items-center justify-center px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition">
                <User className="h-4 w-4 mr-2" />
                <span>{t('header.login')}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}