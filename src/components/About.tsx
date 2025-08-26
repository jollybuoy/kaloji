import React from 'react';
import { Users, Award, Calendar, MapPin, Heart, Star, Shield, Zap } from 'lucide-react';

interface AboutProps {
  language: 'en' | 'te';
}

const About: React.FC<AboutProps> = ({ language }) => {
  const content = {
    en: {
      title: "About Kaloji Convention Centre",
      subtitle: "Preserving Telangana's Cultural Heritage Through Modern Excellence",
      description: "Kaloji Convention Centre stands as a premier venue dedicated to promoting and preserving the rich cultural heritage of Telangana. Named in honor of the great Telugu poet and freedom fighter, our state-of-the-art facility serves as a bridge between traditional values and modern conveniences.",
      mission: "Our Mission",
      missionText: "To provide a world-class platform for arts, culture, and official functions while maintaining the highest standards of service and preserving the cultural essence of Telangana. We are committed to supporting artists, cultural organizations, and government institutions in their endeavors.",
      vision: "Our Vision",
      visionText: "To become the most preferred venue for cultural events and government functions in Telangana, setting new benchmarks in hospitality and cultural preservation.",
      stats: [
        { icon: Users, number: "5000+", label: "Seating Capacity" },
        { icon: Award, number: "100+", label: "Cultural Events Hosted" },
        { icon: Calendar, number: "365", label: "Days Available" },
        { icon: MapPin, number: "1", label: "Prime Location in Warangal" }
      ],
      features: [
        {
          icon: Heart,
          title: "Cultural Heritage Focus",
          description: "Dedicated spaces and setups for traditional Telugu arts and cultural programs"
        },
        {
          icon: Star,
          title: "Premium Facilities",
          description: "State-of-the-art amenities with traditional architectural elements"
        },
        {
          icon: Shield,
          title: "Government Approved",
          description: "Official venue for government functions and state ceremonies"
        },
        {
          icon: Zap,
          title: "Modern Technology",
          description: "Advanced audio-visual systems and digital infrastructure"
        }
      ],
      facilities: [
        "Multiple halls for different event capacities",
        "Traditional stage designs for cultural performances",
        "VIP lounges and green rooms for artists",
        "Professional lighting and sound systems",
        "Spacious parking for 500+ vehicles",
        "In-house catering with traditional Telugu cuisine",
        "24/7 security and power backup systems",
        "Accessibility features for all guests"
      ]
    },
    te: {
      title: "కాళోజీ కన్వెన్షన్ సెంటర్ గురించి",
      subtitle: "ఆధునిక శ్రేష్ఠత్వం ద్వారా తెలంగాణ సాంస్కృతిక వారసత్వాన్ని కాపాడటం",
      description: "కాళోజీ కన్వెన్షన్ సెంటర్ తెలంగాణ యొక్క గొప్ప సాంస్కృతిక వారసత్వాన్ని ప్రోత్సహించడానికి మరియు కాపాడటానికి అంకితమైన ప్రముఖ వేదికగా నిలుస్తుంది. గొప్ప తెలుగు కవి మరియు స్వాతంత్ర్య సమరయోధుడి గౌరవార్థం పేరు పెట్టబడిన మా అత్యాధునిక సౌకర్యం సాంప్రదాయ విలువలు మరియు ఆధునిక సౌకర్యాల మధ్య వారధిగా పనిచేస్తుంది.",
      mission: "మా లక్ష్యం",
      missionText: "తెలంగాణ యొక్క సాంస్కృతిక సారాన్ని కాపాడుతూ అత్యున్నత సేవా ప్రమాణాలను నిర్వహిస్తూ కళలు, సంస్కృతి మరియు అధికారిక కార్యక్రమాలకు ప్రపంచ స్థాయి వేదికను అందించడం. కళాకారులు, సాంస్కృతిక సంస్థలు మరియు ప్రభుత్వ సంస్థలను వారి ప్రయత్నాలలో మద్దతు ఇవ్వడానికి మేము కట్టుబడి ఉన్నాము.",
      vision: "మా దృష్టి",
      visionText: "ఆతిథ్యం మరియు సాంస్కృతిక పరిరక్షణలో కొత్త ప్రమాణాలను నిర్దేశిస్తూ తెలంగాణలో సాంస్కృతిక కార్యక్రమాలు మరియు ప్రభుత్వ కార్యక్రమాలకు అత్యంత ప్రాధాన్య వేదికగా మారడం.",
      stats: [
        { icon: Users, number: "5000+", label: "కూర్చునే సామర్థ్యం" },
        { icon: Award, number: "100+", label: "నిర్వహించిన సాంస్కృతిక కార్యక్రమాలు" },
        { icon: Calendar, number: "365", label: "రోజులు అందుబాటులో" },
        { icon: MapPin, number: "1", label: "వరంగల్‌లో ప్రధాన స్థానం" }
      ],
      features: [
        {
          icon: Heart,
          title: "సాంస్కృతిక వారసత్వ దృష్టి",
          description: "సాంప్రదాయ తెలుగు కళలు మరియు సాంస్కృతిక కార్యక్రమాలకు అంకితమైన స్థలాలు మరియు ఏర్పాట్లు"
        },
        {
          icon: Star,
          title: "ప్రీమియం సౌకర్యాలు",
          description: "సాంప్రదాయ వాస్తు శిల్ప అంశాలతో అత్యాధునిక సౌకర్యాలు"
        },
        {
          icon: Shield,
          title: "ప్రభుత్వ ఆమోదం",
          description: "ప్రభుత్వ కార్యక్రమాలు మరియు రాష్ట్ర వేడుకలకు అధికారిక వేదిక"
        },
        {
          icon: Zap,
          title: "ఆధునిక సాంకేతికత",
          description: "అధునాతన ఆడియో-విజువల్ సిస్టమ్స్ మరియు డిజిటల్ మౌలిక సదుపాయాలు"
        }
      ],
      facilities: [
        "వివిధ కార్యక్రమ సామర్థ్యాలకు బహుళ హాళ్లు",
        "సాంస్కృతిక ప్రదర్శనలకు సాంప్రదాయ వేదిక రూపకల్పనలు",
        "కళాకారుల కోసం VIP లాంజ్‌లు మరియు గ్రీన్ రూమ్‌లు",
        "వృత్తిపరమైన లైటింగ్ మరియు సౌండ్ సిస్టమ్స్",
        "500+ వాహనాలకు విశాలమైన పార్కింగ్",
        "సాంప్రదాయ తెలుగు వంటకాలతో ఇన్-హౌస్ క్యాటరింగ్",
        "24/7 భద్రత మరియు పవర్ బ్యాకప్ సిస్టమ్స్",
        "అన్ని అతిథుల కోసం ప్రవేశ సౌకర్యాలు"
      ]
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 px-4 py-2 rounded-full mb-4">
            <span className="text-orange-600 text-sm font-medium">
              {language === 'en' ? 'About Us' : 'మా గురించి'}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {content[language].title}
          </h2>
          <p className="text-xl text-orange-600 font-medium mb-6">
            {content[language].subtitle}
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {content[language].description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Content */}
          <div className="space-y-12">
            {/* Mission */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                {content[language].mission}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {content[language].missionText}
              </p>
            </div>

            {/* Vision */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <Star className="w-4 h-4 text-white" />
                </div>
                {content[language].vision}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {content[language].visionText}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {content[language].stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/1863603-17-puli-1e.webp"
                alt="Kaloji Convention Centre"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full"></div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {language === 'en' ? 'Why Choose Kaloji Convention Centre' : 'కాళోజీ కన్వెన్షన్ సెంటర్‌ను ఎందుకు ఎంచుకోవాలి'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content[language].features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Facilities */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            {language === 'en' ? 'Our Facilities' : 'మా సౌకర్యాలు'}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {content[language].facilities.map((facility, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-50 transition-colors duration-200">
                <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;