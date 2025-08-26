import React, { useState } from 'react';
import { Search, Calendar, Users, Clock, MapPin, Download, IndianRupee as Rupee } from 'lucide-react';

interface QuickBookingProps {
  language: 'en' | 'te';
}

const QuickBooking: React.FC<QuickBookingProps> = ({ language }) => {
  const [searchParams, setSearchParams] = useState({
    date: '',
    time: '',
    duration: '',
    capacity: '',
    eventType: ''
  });

  const translations = {
    en: {
      title: 'Quick Availability Search',
      subtitle: 'Find your perfect event space in seconds',
      date: 'Event Date',
      time: 'Start Time',
      duration: 'Duration',
      capacity: 'Expected Guests',
      eventType: 'Event Type',
      search: 'Check Availability',
      downloadPlans: 'Download Floor Plans',
      getQuote: 'Get Instant Quote',
      features: {
        realTime: 'Real-time Availability',
        instant: 'Instant Quotes',
        secure: 'Secure Online Payment',
        plans: '3D Floor Plans'
      }
    },
    te: {
      title: 'త్వరిత లభ్యత శోధన',
      subtitle: 'సెకన్లలో మీ పర్ఫెక్ట్ ఈవెంట్ స్పేస్‌ను కనుగొనండి',
      date: 'ఈవెంట్ తేదీ',
      time: 'ప్రారంభ సమయం',
      duration: 'వ్యవధి',
      capacity: 'ఊహించిన అతిథులు',
      eventType: 'ఈవెంట్ రకం',
      search: 'లభ్యత తనిఖీ చేయండి',
      downloadPlans: 'ఫ్లోర్ ప్లాన్‌లను డౌన్‌లోడ్ చేయండి',
      getQuote: 'తక్షణ కోట్ పొందండి',
      features: {
        realTime: 'రియల్-టైమ్ లభ్యత',
        instant: 'తక్షణ కోట్లు',
        secure: 'సురక్షిత ఆన్‌లైన్ చెల్లింపు',
        plans: '3D ఫ్లోర్ ప్లాన్లు'
      }
    }
  };

  const t = translations[language];

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                <Calendar className="inline h-4 w-4 mr-1" />
                {t.date}
              </label>
              <input
                type="date"
                value={searchParams.date}
                onChange={(e) => setSearchParams({...searchParams, date: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                <Clock className="inline h-4 w-4 mr-1" />
                {t.time}
              </label>
              <input
                type="time"
                value={searchParams.time}
                onChange={(e) => setSearchParams({...searchParams, time: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                <Clock className="inline h-4 w-4 mr-1" />
                {t.duration}
              </label>
              <select
                value={searchParams.duration}
                onChange={(e) => setSearchParams({...searchParams, duration: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="">Select Duration</option>
                <option value="half-day">Half Day (4 hours)</option>
                <option value="full-day">Full Day (8 hours)</option>
                <option value="multi-day">Multi Day</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                <Users className="inline h-4 w-4 mr-1" />
                {t.capacity}
              </label>
              <input
                type="number"
                placeholder="Number of guests"
                value={searchParams.capacity}
                onChange={(e) => setSearchParams({...searchParams, capacity: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                <MapPin className="inline h-4 w-4 mr-1" />
                {t.eventType}
              </label>
              <select
                value={searchParams.eventType}
                onChange={(e) => setSearchParams({...searchParams, eventType: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="">Select Type</option>
                <option value="classical-dance">Classical Dance Performances</option>
                <option value="classical-music">Classical Music Concerts</option>
                <option value="theatre">Theatre & Drama</option>
                <option value="art-festivals">Art Festivals & Exhibitions</option>
                <option value="government">Government Function</option>
                <option value="conference">Academic Conference</option>
                <option value="corporate">Corporate Event</option>
                <option value="social">Community Gatherings</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
              <Search className="h-5 w-5" />
              <span>{t.search}</span>
            </button>
            <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Download className="h-5 w-5" />
              <span>{t.downloadPlans}</span>
            </button>
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Rupee className="h-5 w-5" />
              <span>{t.getQuote}</span>
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(t.features).map(([key, value], index) => {
            const icons = [Search, Clock, Rupee, Download];
            const colors = ['blue', 'indigo', 'green', 'slate'];
            const Icon = icons[index];
            const color = colors[index];
            
            return (
              <div key={key} className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-l-4 border-${color}-500`}>
                <div className={`w-12 h-12 bg-gradient-to-br from-${color}-400 to-${color}-600 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value}</h3>
                <p className="text-gray-600 text-sm">Experience seamless booking with our advanced features</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickBooking;