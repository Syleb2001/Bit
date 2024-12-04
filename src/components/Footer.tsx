import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t border-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <span className="text-2xl font-light text-gray-900 mb-4 block">BITOPIA</span>
            <p className="text-gray-600 mb-4 font-light">{t('footer.description')}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-gray-900 transition-colors duration-300">About Us</Link></li>
              <li><Link to="/kyc-policy" className="hover:text-gray-900 transition-colors duration-300">KYC/AML Policy</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-gray-900 transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-gray-900 transition-colors duration-300">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 font-light">
              <li>Dubai International Financial Centre (DIFC)</li>
              <li>Dubai, United Arab Emirates</li>
              <li>contact@bitopia.com</li>
              <li>+971 4 XXX XXXX</li>
              <li>Sunday - Thursday: 9am - 6pm GST</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">{t('footer.newsletter.title')}</h3>
            <p className="text-gray-600 mb-4 font-light">{t('footer.newsletter.description')}</p>
            <div className="flex">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1 px-4 py-2 bg-white border border-gray-200 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
              <button className="px-4 py-2 bg-gray-900 text-white rounded-r-md hover:bg-gray-800 transition-colors duration-300">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 text-center">
          <p className="font-light">&copy; {new Date().getFullYear()} Bitopia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}