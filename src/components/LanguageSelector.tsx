import React from 'react';
import { Globe, X } from 'lucide-react';

interface LanguageSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onLanguageSelect: (lang: 'en' | 'te') => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ isOpen, onClose, onLanguageSelect }) => {
  if (!isOpen) return null;

  const handleLanguageSelect = (lang: 'en' | 'te') => {
    onLanguageSelect(lang);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Globe className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Language / భాష ఎంచుకోండి</h2>
          <p className="text-gray-600">Choose your preferred language</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleLanguageSelect('te')}
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            తెలుగు (Telugu)
          </button>
          <button
            onClick={() => handleLanguageSelect('en')}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            English
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            You can change language anytime from the header
          </p>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;