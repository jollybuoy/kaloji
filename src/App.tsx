import React, { useState } from 'react';
import LanguageSelector from './components/LanguageSelector';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [currentView, setCurrentView] = useState<'public' | 'admin'>('public');
  const [language, setLanguage] = useState<'en' | 'te' | null>(null);
  const [showLanguageSelector, setShowLanguageSelector] = useState(true);

  const handleLanguageSelect = (lang: 'en' | 'te') => {
    setLanguage(lang);
    setShowLanguageSelector(false);
  };

  if (language === null) {
    return (
      <LanguageSelector
        isOpen={showLanguageSelector}
        onClose={() => setShowLanguageSelector(false)}
        onLanguageSelect={handleLanguageSelect}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {currentView === 'public' ? (
        <>
          <Header 
            language={language} 
            setLanguage={setLanguage}
            onAdminClick={() => setCurrentView('admin')}
          />
          <main>
            <Hero language={language} />
            <About language={language} />
            <Services language={language} />
            <Gallery language={language} />
            <Testimonials language={language} />
          </main>
          <Footer language={language} />
        </>
      ) : (
        <AdminDashboard onBackToPublic={() => setCurrentView('public')} />
      )}
    </div>
  );
}

export default App;