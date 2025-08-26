import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'te';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    en: {
      title: "Kaloji Convention Centre",
      subtitle: "Preserving Telangana's cultural heritage through world-class events",
      contact: "Contact Information",
      hours: "Operating Hours",
      services: "Our Services",
      quickLinks: "Quick Links",
      social: "Follow Us",
      copyright: "© 2024 Kaloji Convention Centre. All rights reserved.",
      address: "Warangal, Telangana, India",
      tagline: "Government of Telangana Official Convention Centre",
      operatingHours: [
        "Monday - Sunday: 6:00 AM - 11:00 PM",
        "Event Planning: 9:00 AM - 6:00 PM",
        "24/7 Emergency Support Available"
      ],
      servicesList: [
        "Cultural Events & Festivals",
        "Government Functions", 
        "Art Exhibitions",
        "Classical Performances",
        "Award Ceremonies",
        "Official Meetings"
      ],
      links: [
        "Home",
        "About Us",
        "Services",
        "Gallery", 
        "Contact",
        "Admin Portal"
      ]
    },
    te: {
      title: "కాళోజీ కన్వెన్షన్ సెంటర్",
      subtitle: "ప్రపంచ స్థాయి కార్యక్రమాల ద్వారా తెలంగాణ సాంస్కృతిక వారసత్వాన్ని కాపాడుతోంది",
      contact: "సంప్రదింపు సమాచారం",
      hours: "పనిచేసే గంటలు",
      services: "మా సేవలు",
      quickLinks: "త్వరిత లింక్‌లు",
      social: "మమ్మల్ని అనుసరించండి",
      copyright: "© 2024 కాళోజీ కన్వెన్షన్ సెంటర్. అన్ని హక్కులు రక్షించబడ్డాయి.",
      address: "వరంగల్, తెలంగాణ, భారతదేశం",
      tagline: "తెలంగాణ ప్రభుత్వ అధికారిక కన్వెన్షన్ సెంటర్",
      operatingHours: [
        "సోమవారం - ఆదివారం: ఉదయం 6:00 - రాత్రి 11:00",
        "ఈవెంట్ ప్లానింగ్: ఉదయం 9:00 - సాయంత్రం 6:00",
        "24/7 అత్యవసర మద్దతు అందుబాటులో"
      ],
      servicesList: [
        "సాంస్కృతిక కార్యక్రమాలు మరియు ఉత్సవాలు",
        "ప్రభుత్వ కార్యక్రమాలు",
        "కళా ప్రదర్శనలు",
        "శాస్త్రీయ ప్రదర్శనలు", 
        "పురస్కార వేడుకలు",
        "అధికారిక సమావేశాలు"
      ],
      links: [
        "హోమ్",
        "మా గురించి",
        "సేవలు",
        "గ్యాలరీ",
        "సంప్రదింపు", 
        "అడ్మిన్ పోర్టల్"
      ]
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <img 
                  src="/Emblem_of_Telangana.svg.png" 
                  alt="Telangana Government" 
                  className="h-12 w-12"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xs">KC</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">{content[language].title}</h3>
                <p className="text-orange-400 text-sm font-medium">{content[language].tagline}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {content[language].subtitle}
            </p>
            
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{content[language].social}</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-colors">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 cursor-pointer transition-colors">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 cursor-pointer transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 cursor-pointer transition-colors">
                  <Youtube className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{content[language].contact}</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">+91 870-2345-678</p>
                  <p className="text-gray-400 text-sm">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">info@kalojiconventioncentre.com</p>
                  <p className="text-gray-400 text-sm">Official Email</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">{content[language].address}</p>
                  <p className="text-gray-400 text-sm">Prime Location</p>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{content[language].hours}</h4>
            <div className="space-y-3">
              {content[language].operatingHours.map((hour, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm leading-relaxed">{hour}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services & Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{content[language].services}</h4>
            <ul className="space-y-2 mb-8">
              {content[language].servicesList.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm hover:text-orange-400 cursor-pointer transition-colors flex items-center">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                  {service}
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-4">{content[language].quickLinks}</h4>
            <ul className="space-y-2">
              {content[language].links.map((link, index) => (
                <li key={index} className="text-gray-300 text-sm hover:text-orange-400 cursor-pointer transition-colors">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {content[language].copyright}
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>for Telangana Culture</span>
              </div>
              <div className="text-orange-400 font-medium">
                JollyBuoy Technology Services Pvt. Ltd.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;