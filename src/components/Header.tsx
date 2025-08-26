import React, { useState } from 'react';
import { Menu, X, Globe, Shield } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'te';
  setLanguage: (lang: 'en' | 'te') => void;
  onAdminClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, onAdminClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const content = {
    en: {
      home: "Home",
      about: "About",
      services: "Services", 
      gallery: "Gallery",
      contact: "Contact",
      admin: "Admin Portal"
    },
    te: {
      home: "హోమ్",
      about: "గురించి",
      services: "సేవలు",
      gallery: "గ్యాలరీ", 
      contact: "సంప్రదింపు",
      admin: "అడ్మిన్ పోర్టల్"
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Government Header Bar */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/Emblem_of_Telangana.svg.png" 
                alt="Telangana Government" 
                className="h-8 w-8"
              />
              <span className="text-sm font-medium">
                {language === 'en' ? 'Government of Telangana' : 'తెలంగాణ ప్రభుత్వం'}
              </span>
            </div>
            <div className="text-sm">
              {language === 'en' ? 'Official Convention Centre' : 'అధికారిక కన్వెన్షన్ సెంటర్'}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src="/Emblem_of_Telangana.svg.png" 
                  alt="Telangana Emblem" 
                  className="h-16 w-16"
                />
               # <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                #  <span className="text-white font-bold text-xs"></span>
                # </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {language === 'en' ? 'Kaloji Convention Centre' : 'కాళోజీ కన్వెన్షన్ సెంటర్'}
                </h1>
                <p className="text-sm text-orange-600 font-medium">
                  {language === 'en' ? 'Arts & Cultural Events Venue' : 'కళలు మరియు సాంస్కృతిక కార్యక్రమాల వేదిక'}
                </p>
                <p className="text-xs text-gray-500">
                  {language === 'en' ? 'Warangal, Telangana' : 'వరంగల్, తెలంగాణ'}
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                {content[language].home}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                {content[language].about}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                {content[language].services}
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                {content[language].gallery}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                {content[language].contact}
              </button>
              
              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'te' : 'en')}
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'తెలుగు' : 'English'}</span>
              </button>

              {/* Admin Portal */}
              <button
                onClick={onAdminClick}
                className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Shield className="w-4 h-4" />
                <span>{content[language].admin}</span>
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-orange-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-left text-gray-700 hover:text-orange-600 font-medium transition-colors"
                >
                  {content[language].home}
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left text-gray-700 hover:text-orange-600 font-medium transition-colors"
                >
                  {content[language].about}
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-left text-gray-700 hover:text-orange-600 font-medium transition-colors"
                >
                  {content[language].services}
                </button>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-left text-gray-700 hover:text-orange-600 font-medium transition-colors"
                >
                  {content[language].gallery}
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-gray-700 hover:text-orange-600 font-medium transition-colors"
                >
                  {content[language].contact}
                </button>
                
                <button
                  onClick={() => setLanguage(language === 'en' ? 'te' : 'en')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 font-medium transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === 'en' ? 'తెలుగు' : 'English'}</span>
                </button>

                <button
                  onClick={onAdminClick}
                  className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg w-fit"
                >
                  <Shield className="w-4 h-4" />
                  <span>{content[language].admin}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
