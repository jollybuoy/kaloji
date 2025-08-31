import React from 'react';
import { 
  Palette, 
  Music, 
  Users, 
  Award,
  Camera,
  Utensils,
  Shield,
  Wifi,
  Car,
  Mic,
  Calendar,
  Heart
} from 'lucide-react';

interface ServicesProps {
  language: 'en' | 'te';
  onBookingClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ language, onBookingClick }) => {
  const content = {
    en: {
      title: "Our Premium Services",
      subtitle: "Comprehensive solutions for arts, cultural events, and government functions",
      mainServices: [
        {
          icon: Palette,
          title: "Arts & Cultural Events",
          description: "Specialized services for art exhibitions, cultural festivals, classical performances, and heritage celebrations with traditional stage setups and cultural ambiance.",
          features: ["Traditional Stage Design", "Cultural Lighting", "Heritage Decor", "Artist Green Rooms"]
        },
        {
          icon: Music,
          title: "Classical Performances",
          description: "Perfect acoustics and staging for classical music concerts, dance performances, and traditional art forms with professional sound engineering.",
          features: ["Acoustic Excellence", "Traditional Staging", "Artist Facilities", "Recording Services"]
        },
        {
          icon: Users,
          title: "Government Functions",
          description: "Protocol-compliant venues for official ceremonies, state functions, and diplomatic events with security arrangements and formal setups.",
          features: ["Security Protocols", "VIP Arrangements", "Official Staging", "Media Coverage"]
        },
        {
          icon: Award,
          title: "Award Ceremonies",
          description: "Elegant setups for cultural awards, recognition ceremonies, and felicitation programs with professional staging and lighting.",
          features: ["Award Stage Setup", "Professional Lighting", "Media Support", "VIP Seating"]
        }
      ],
      supportServices: [
        {
          icon: Camera,
          title: "Professional Documentation",
          description: "Complete photography and videography services for cultural events and official functions."
        },
        {
          icon: Utensils,
          title: "Traditional Catering",
          description: "Authentic Telugu cuisine and multi-cultural catering services for all types of events."
        },
        {
          icon: Shield,
          title: "Security & Protocol",
          description: "Professional security services and protocol management for government and VIP events."
        },
        {
          icon: Wifi,
          title: "Modern Amenities",
          description: "High-speed internet, air conditioning, power backup, and modern facilities."
        },
        {
          icon: Car,
          title: "Valet Parking",
          description: "Spacious parking for 500+ vehicles with professional valet services."
        },
        {
          icon: Mic,
          title: "Audio Visual Systems",
          description: "State-of-the-art sound systems, LED displays, and professional lighting."
        },
        {
          icon: Calendar,
          title: "Event Planning",
          description: "Complete event management and coordination services from planning to execution."
        },
        {
          icon: Heart,
          title: "Cultural Consultation",
          description: "Expert guidance on traditional customs, rituals, and cultural protocols."
        }
      ]
    },
    te: {
      title: "మా ప్రీమియం సేవలు",
      subtitle: "కళలు, సాంస్కృతిక కార్యక్రమాలు మరియు ప్రభుత్వ కార్యక్రమాలకు సమగ్ర పరిష్కారాలు",
      mainServices: [
        {
          icon: Palette,
          title: "కళలు మరియు సాంస్కృతిక కార్యక్రమాలు",
          description: "సాంప్రదాయ వేదిక ఏర్పాట్లు మరియు సాంస్కృతిక వాతావరణంతో కళా ప్రదర్శనలు, సాంస్కృతిక ఉత్సవాలు, శాస్త్రీయ ప్రదర్శనలు మరియు వారసత్వ వేడుకలకు ప్రత్యేక సేవలు.",
          features: ["సాంప్రదాయ వేదిక రూపకల్పన", "సాంస్కృతిక లైటింగ్", "వారసత్వ అలంకరణ", "కళాకారుల గ్రీన్ రూమ్‌లు"]
        },
        {
          icon: Music,
          title: "శాస్త్రీయ ప్రదర్శనలు",
          description: "వృత్తిపరమైన ధ్వని ఇంజనీరింగ్‌తో శాస్త్రీయ సంగీత కచేరీలు, నృత్య ప్రదర్శనలు మరియు సాంప్రదాయ కళా రూపాలకు పరిపూర్ణ ధ్వనిశాస్త్రం మరియు వేదిక.",
          features: ["ధ్వని శ్రేష్ఠత", "సాంప్రదాయ వేదిక", "కళాకార సౌకర్యాలు", "రికార్డింగ్ సేవలు"]
        },
        {
          icon: Users,
          title: "ప్రభుత్వ కార్యక్రమాలు",
          description: "భద్రతా ఏర్పాట్లు మరియు అధికారిక ఏర్పాట్లతో అధికారిక వేడుకలు, రాష్ట్ర కార్యక్రమాలు మరియు దౌత్య కార్యక్రమాలకు ప్రోటోకాల్-కంప్లైంట్ వేదికలు.",
          features: ["భద్రతా ప్రోటోకాల్‌లు", "VIP ఏర్పాట్లు", "అధికారిక వేదిక", "మీడియా కవరేజ్"]
        },
        {
          icon: Award,
          title: "పురస్కార వేడుకలు",
          description: "వృత్తిపరమైన వేదిక మరియు లైటింగ్‌తో సాంస్కృతిక పురస్కారాలు, గుర్తింపు వేడుకలు మరియు సత్కార కార్యక్రమాలకు సొగసైన ఏర్పాట్లు.",
          features: ["పురస్కార వేదిక ఏర్పాటు", "వృత్తిపరమైన లైటింగ్", "మీడియా మద్దతు", "VIP కూర్చునే వ్యవస్థ"]
        }
      ],
      supportServices: [
        {
          icon: Camera,
          title: "వృత్తిపరమైన డాక్యుమెంటేషన్",
          description: "సాంస్కృతిక కార్యక్రమాలు మరియు అధికారిక కార్యక్రమాలకు పూర్తి ఫోటోగ్రఫీ మరియు వీడియోగ్రఫీ సేవలు."
        },
        {
          icon: Utensils,
          title: "సాంప్రదాయ క్యాటరింగ్",
          description: "అన్ని రకాల కార్యక్రమాలకు ప్రామాణిక తెలుగు వంటకాలు మరియు బహుళ-సాంస్కృతిక క్యాటరింగ్ సేవలు."
        },
        {
          icon: Shield,
          title: "భద్రత మరియు ప్రోటోకాల్",
          description: "ప్రభుత్వ మరియు VIP కార్యక్రమాలకు వృత్తిపరమైన భద్రతా సేవలు మరియు ప్రోటోకాల్ నిర్వహణ."
        },
        {
          icon: Wifi,
          title: "ఆధునిక సౌకర్యాలు",
          description: "హై-స్పీడ్ ఇంటర్నెట్, ఎయిర్ కండిషనింగ్, పవర్ బ్యాకప్ మరియు ఆధునిక సౌకర్యాలు."
        },
        {
          icon: Car,
          title: "వాలెట్ పార్కింగ్",
          description: "వృత్తిపరమైన వాలెట్ సేవలతో 500+ వాహనాలకు విశాలమైన పార్కింగ్."
        },
        {
          icon: Mic,
          title: "ఆడియో విజువల్ సిస్టమ్స్",
          description: "అత్యాధునిక సౌండ్ సిస్టమ్స్, LED డిస్‌ప్లేలు మరియు వృత్తిపరమైన లైటింగ్."
        },
        {
          icon: Calendar,
          title: "ఈవెంట్ ప్లానింగ్",
          description: "ప్లానింగ్ నుండి అమలు వరకు పూర్తి ఈవెంట్ మేనేజ్‌మెంట్ మరియు కోఆర్డినేషన్ సేవలు."
        },
        {
          icon: Heart,
          title: "సాంస్కృతిక సలహా",
          description: "సాంప్రదాయ ఆచారాలు, కర్మకాండలు మరియు సాంస్కృతిక ప్రోటోకాల్‌లపై నిపుణుల మార్గదర్శకత్వం."
        }
      ]
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 px-4 py-2 rounded-full mb-4">
            <span className="text-orange-600 text-sm font-medium">
              {language === 'en' ? 'Professional Services' : 'వృత్తిపరమైన సేవలు'}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {content[language].mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Services */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {language === 'en' ? 'Additional Support Services' : 'అదనపు మద్దతు సేవలు'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content[language].supportServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              {language === 'en' 
                ? "Ready to Host Your Event?" 
                : "మీ కార్యక్రమాన్ని నిర్వహించడానికి సిద్ధంగా ఉన్నారా?"
              }
            </h3>
            <p className="text-orange-100 text-lg mb-6 max-w-2xl mx-auto">
              {language === 'en'
                ? "Contact our expert team to plan your perfect cultural event or government function"
                : "మీ పరిపూర్ణ సాంస్కృతిక కార్యక్రమం లేదా ప్రభుత్వ కార్యక్రమాన్ని ప్లాన్ చేయడానికి మా నిపుణుల బృందాన్ని సంప్రదించండి"
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onBookingClick}
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                {language === 'en' ? "Book Your Event" : "మీ కార్యక్రమాన్ని బుక్ చేయండి"}
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
              >
                {language === 'en' ? "Schedule Visit" : "సందర్శన షెడ్యూల్ చేయండి"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;