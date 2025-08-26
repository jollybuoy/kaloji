import React from 'react';
import { Phone, Mail, MapPin, Calendar, Users } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'te';
  onBookingClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ language, onBookingClick }) => {
  const content = {
    en: {
      title: "Kaloji Convention Centre",
      subtitle: "Premier Arts & Cultural Events Venue in Warangal",
      description:
        "A state-of-the-art convention centre dedicated to promoting Telugu arts, culture, and heritage. Perfect venue for cultural festivals, art exhibitions, classical performances, and government functions.",
      bookNow: "Book Your Event",
      contact: "Contact Us",
      features: ["Cultural Heritage Venue", "Government Approved", "Modern Facilities", "Professional Services"],
    },
    te: {
      title: "కాళోజీ కన్వెన్షన్ సెంటర్",
      subtitle: "వరంగల్‌లో ప్రముఖ కళలు మరియు సాంస్కృతిక కార్యక్రమాల వేదిక",
      description:
        "తెలుగు కళలు, సంస్కృతి మరియు వారసత్వాన్ని ప్రోత్సహించడానికి అంకితమైన అత్యాధునిక కన్వెన్షన్ సెంటర్. సాంస్కృతిక ఉత్సవాలు, కళా ప్రదర్శనలు, శాస్త్రీయ ప్రదర్శనలు మరియు ప్రభుత్వ కార్యక్రమాలకు పరిపూర్ణ వేదిక.",
      bookNow: "మీ కార్యక్రమాన్ని బుక్ చేయండి",
      contact: "మమ్మల్ని సంప్రదించండి",
      features: ["సాంస్కృతిక వారసత్వ వేదిక", "ప్రభుత్వ ఆమోదం", "ఆధునిక సౌకర్యాలు", "వృత్తిపరమైన సేవలు"],
    },
  };

  return (
    <>
      {/* Contact Info Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 870-2345-678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@kalojiconventioncentre.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Warangal, Telangana, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start justify-start pt-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/kaloji-1.jpg)' }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* changed from lg:grid-cols-2 to single column */}
          <div className="grid grid-cols-1 gap-12 items-start">
            {/* Left Content (now full width) */}
            <div className="text-white max-w-3xl">
              <div className="mb-6">
                <div className="inline-flex items-center bg-orange-600/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                  <span className="text-orange-300 text-sm font-medium">
                    {language === 'en' ? 'Government of Telangana' : 'తెలంగాణ ప్రభుత్వం'}
                  </span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                  {content[language].title}
                </h1>
                <p className="text-xl lg:text-2xl text-orange-200 mb-6 font-medium">
                  {content[language].subtitle}
                </p>
              </div>

              <p className="text-lg mb-8 leading-relaxed text-gray-200 max-w-2xl">
                {content[language].description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {content[language].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span className="text-sm text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onBookingClick}
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Calendar className="inline w-5 h-5 mr-2" />
                  {content[language].bookNow}
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  <Users className="inline w-5 h-5 mr-2" />
                  {content[language].contact}
                </button>
              </div>
            </div>

            {/* Right Content - Stats (REMOVED) */}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>
    </>
  );
};

export default Hero;
