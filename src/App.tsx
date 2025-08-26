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
import BookingModal from './components/BookingModal';
import AdminLogin from './components/AdminLogin';

function App() {
  const [currentView, setCurrentView] = useState<'public' | 'admin'>('public');
  const [language, setLanguage] = useState<'en' | 'te' | null>(null);
  const [showLanguageSelector, setShowLanguageSelector] = useState(true);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  const handleLanguageSelect = (lang: 'en' | 'te') => {
    setLanguage(lang);
    setShowLanguageSelector(false);
  };

  const handleAdminClick = () => {
    if (isAdminAuthenticated) {
      setCurrentView('admin');
    } else {
      setShowAdminLogin(true);
    }
  };

  const handleAdminLogin = (credentials: { username: string; password: string }) => {
    // Here you would typically validate credentials with your backend
    // For demo purposes, we'll accept any non-empty credentials
    if (credentials.username && credentials.password) {
      setIsAdminAuthenticated(true);
      setShowAdminLogin(false);
      setCurrentView('admin');
    } else {
      alert('Please enter valid credentials');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    setCurrentView('public');
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

  if (showAdminLogin) {
    return (
      <AdminLogin
        onLogin={handleAdminLogin}
        onCancel={() => setShowAdminLogin(false)}
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
            onAdminClick={handleAdminClick}
          />
          <main>
            <Hero 
              language={language} 
              onBookingClick={() => setShowBookingModal(true)}
            />
            <About language={language} />
            <Services 
              language={language} 
              onBookingClick={() => setShowBookingModal(true)}
            />
            <Gallery language={language} />
            <Testimonials language={language} />
          </main>
          <Footer language={language} />
          
          <BookingModal
            isOpen={showBookingModal}
            onClose={() => setShowBookingModal(false)}
            language={language}
          />
        </>
      ) : (
        <AdminDashboard 
          onBackToPublic={() => setCurrentView('public')}
          onLogout={handleAdminLogout}
        />
      )}
    </div>
  );
}

export default App;