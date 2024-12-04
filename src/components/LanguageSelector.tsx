import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'ar', name: 'العربية' }
];

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode).then(() => {
      document.documentElement.dir = languageCode === 'ar' ? 'rtl' : 'ltr';
      // Save the language preference
      localStorage.setItem('i18nextLng', languageCode);
      // Reload the page to ensure all components are properly reset
      window.location.reload();
    });
  };

  return (
    <div className="relative group">
      <button 
        type="button"
        className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
      >
        <Globe className="h-5 w-5 mr-1" />
        <span className="uppercase">{i18n.language}</span>
      </button>
      
      <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {languages.map((language) => (
          <button
            key={language.code}
            type="button"
            onClick={() => handleLanguageChange(language.code)}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
              i18n.language === language.code ? 'bg-gray-50 text-gray-900 font-medium' : 'text-gray-700'
            }`}
          >
            {language.name}
          </button>
        ))}
      </div>
    </div>
  );
}