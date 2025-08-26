import React from 'react';
import { 
  Shield, 
  Globe, 
  Users, 
  Award,
  FileText,
  Video,
  Heart,
  Zap
} from 'lucide-react';

interface GovernmentServicesProps {
  language: 'en' | 'te';
}

const GovernmentServices: React.FC<GovernmentServicesProps> = ({ language }) => {
  const content = {
    en: {
      title: "Government & Cultural Services",
      subtitle: "Specialized services for official functions and cultural preservation",
      mainService: {
        title: "Global Telangana Cultural Services",
        description: "Connecting Telangana diaspora worldwide through cultural events and digital platforms",
        slogan: "Preserving Telangana Heritage through Digital Innovation"
      },
      services: [
        {
          icon: Shield,
          title: "Official Government Functions",
          description: "Secure, protocol-compliant venues for state ceremonies, diplomatic events, and official meetings with full security arrangements."
        },
        {
          icon: Globe,
          title: "International Cultural Exchange",
          description: "Facilitating cultural diplomacy and international partnerships to showcase Telangana heritage on global platforms."
        },
        {
          icon: Users,
          title: "Community Outreach Programs",
          description: "Organizing public awareness campaigns, citizen engagement sessions, and community development initiatives."
        },
        {
          icon: Award,
          title: "State Awards & Recognition",
          description: "Hosting prestigious state award ceremonies, cultural honors, and recognition events with traditional protocols."
        },
        {
          icon: FileText,
          title: "Policy Launch Events",
          description: "Professional venues for government policy announcements, public consultations, and stakeholder meetings."
        },
        {
          icon: Video,
          title: "Digital Archive Services",
          description: "Creating and maintaining digital records of cultural events, government functions, and historical documentation."
        },
        {
          icon: Heart,
          title: "Social Welfare Events",
          description: "Supporting government welfare programs, health campaigns, and social development initiatives through event management."
        },
        {
          icon: Zap,
          title: "Emergency Response Coordination",
          description: "Rapid deployment of facilities for disaster relief coordination, emergency meetings, and crisis management."
        }
      ]
    },
    te: {
      title: "ప్రభుత్వ & సాంస్కృతిక సేవలు",
      subtitle: "అధికారిక కార్యక్రమాలు మరియు సాంస్కృతిక పరిరక్షణ కోసం ప్రత్యేక సేవలు",
      mainService: {
        title: "గ్లోబల్ తెలంగాణ సాంస్కృతిక సేవలు",
        description: "సాంస్కృతిక కార్యక్రమాలు మరియు డిజిటల్ ప్లాట్‌ఫారమ్‌ల ద్వారా ప్రపంచవ్యాప్తంగా తెలంగాణ డయాస్పోరాను కనెక్ట్ చేయడం",
        slogan: "డిజిటల్ ఇన్నోవేషన్ ద్వారా తెలంగాణ వారసత్వాన్ని కాపాడటం"
      },
      services: [
        {
          icon: Shield,
          title: "అధికారిక ప్రభుత్వ కార్యక్రమాలు",
          description: "పూర్తి భద్రతా ఏర్పాట్లతో రాష్ట్ర వేడుకలు, దౌత్య కార్యక్రమాలు మరియు అధికారిక సమావేశాలకు సురక్షిత, ప్రోటోకాల్-కంప్లైంట్ వేదికలు."
        },
        {
          icon: Globe,
          title: "అంతర్జాతీయ సాంస్కృతిక మార్పిడి",
          description: "గ్లోబల్ ప్లాట్‌ఫారమ్‌లలో తెలంగాణ వారసత్వాన్ని ప్రదర్శించడానికి సాంస్కృతిక దౌత్యం మరియు అంతర్జాతీయ భాగస్వామ్యాలను సులభతరం చేయడం."
        },
        {
          icon: Users,
          title: "కమ్యూనిటీ ఔట్‌రీచ్ ప్రోగ్రామ్‌లు",
          description: "ప్రజా అవగాహన ప్రచారాలు, పౌర ప్రమేయ సెషన్‌లు మరియు కమ్యూనిటీ అభివృద్ధి కార్యక్రమాలను నిర్వహించడం."
        },
        {
          icon: Award,
          title: "రాష్ట్ర పురస్కారాలు & గుర్తింపు",
          description: "సంప్రదాయ ప్రోటోకాల్‌లతో ప్రతిష్టాత్మక రాష్ట్ర పురస్కార వేడుకలు, సాంస్కృతిక గౌరవాలు మరియు గుర్తింపు కార్యక్రమాలను నిర్వహించడం."
        },
        {
          icon: FileText,
          title: "పాలసీ లాంచ్ ఈవెంట్‌లు",
          description: "ప్రభుత్వ విధాన ప్రకటనలు, ప్రజా సంప్రదింపులు మరియు వాటాదారుల సమావేశాలకు వృత్తిపరమైన వేదికలు."
        },
        {
          icon: Video,
          title: "డిజిటల్ ఆర్కైవ్ సేవలు",
          description: "సాంస్కృతిక కార్యక్రమాలు, ప్రభుత్వ కార్యక్రమాలు మరియు చారిత్రక డాక్యుమెంటేషన్ యొక్క డిజిటల్ రికార్డులను సృష్టించడం మరియు నిర్వహించడం."
        },
        {
          icon: Heart,
          title: "సామాజిక సంక్షేమ కార్యక్రమాలు",
          description: "ఈవెంట్ మేనేజ్‌మెంట్ ద్వారా ప్రభుత్వ సంక్షేమ కార్యక్రమాలు, ఆరోగ్య ప్రచారాలు మరియు సామాజిక అభివృద్ధి కార్యక్రమాలకు మద్దతు ఇవ్వడం."
        },
        {
          icon: Zap,
          title: "అత్యవసర ప్రతిస్పందన సమన్వయం",
          description: "విపత్తు ఉపశమన సమన్వయం, అత్యవసర సమావేశాలు మరియు సంక్షోభ నిర్వహణ కోసం సౌకర్యాల వేగవంతమైన విస్తరణ."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t.subtitle}
          </p>
          
          {/* Featured Service */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white mb-12">
            <h3 className="text-3xl font-bold mb-4">{t.mainService.title}</h3>
            <p className="text-blue-100 text-lg mb-4">{t.mainService.description}</p>
            <div className="inline-block bg-white/20 px-6 py-2 rounded-full">
              <span className="text-blue-100 font-semibold">{t.mainService.slogan}</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'en' 
                ? "Partner with Us for Official Events" 
                : "అధికారిక కార్యక్రమాల కోసం మాతో భాగస్వామ్యం చేయండి"
              }
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'en'
                ? "Contact our government liaison team for specialized requirements and protocol-compliant event planning."
                : "ప్రత్యేక అవసరాలు మరియు ప్రోటోకాల్-కంప్లైంట్ ఈవెంట్ ప్లానింగ్ కోసం మా ప్రభుత్వ లైజన్ టీమ్‌ను సంప్రదించండి."
              }
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              {language === 'en' ? "Contact Government Services" : "ప్రభుత్వ సేవలను సంప్రదించండి"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentServices;