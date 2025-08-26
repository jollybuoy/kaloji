import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  language: 'en' | 'te';
}

const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  const content = {
    en: {
      title: "What Our Clients Say",
      subtitle: "Testimonials from satisfied customers",
      testimonials: [
        {
          name: "Dr. Rajesh Kumar",
          role: "Event Organizer",
          organization: "Hyderabad Cultural Society",
          text: "Kaloji Convention Centre provided exceptional service for our Telangana cultural festival. The facilities were world-class and the staff was incredibly professional.",
          rating: 5
        },
        {
          name: "Mrs. Priya Sharma",
          role: "Wedding Planner",
          organization: "Elite Events",
          text: "The venue's blend of modern amenities with Telangana cultural aesthetics made our client's wedding truly memorable. Highly recommended!",
          rating: 5
        },
        {
          name: "Prof. K. Viswanath",
          role: "Cultural Director",
          organization: "Telangana Film & Cultural Heritage Foundation",
          text: "This convention centre has become a cornerstone of Telangana cultural renaissance. Their commitment to preserving our heritage is commendable.",
          rating: 5
        }
      ]
    },
    te: {
      title: "మా కస్టమర్లు చెప్పేది",
      subtitle: "సంతృప్త కస్టమర్ల నుండి సాక్ష్యాలు",
      testimonials: [
        {
          name: "డాక్టర్ రాజేష్ కుమార్",
          role: "ఈవెంట్ ఆర్గనైజర్",
          organization: "హైదరాబాద్ కల్చరల్ సొసైటీ",
          text: "కాళోజీ కన్వెన్షన్ సెంటర్ మా తెలంగాణ సాంస్కృతిక ఉత్సవానికి అద్భుతమైన సేవలు అందించింది. సౌకర్యాలు ప్రపంచ స్థాయిలో ఉన్నాయి మరియు సిబ్బంది చాలా వృత్తిపరంగా ఉన్నారు.",
          rating: 5
        },
        {
          name: "శ్రీమతి ప్రియా శర్మ",
          role: "వెడ్డింగ్ ప్లానర్",
          organization: "ఎలైట్ ఈవెంట్స్",
          text: "ఆధునిక సౌకర్యాలతో తెలంగాణ సాంస్కృతిక సౌందర్యం కలిపిన ఈ వేదిక మా క్లయింట్ వివాహాన్ని నిజంగా గుర్తుండిపోయేలా చేసింది. బాగా సిఫార్సు చేస్తున్నాను!",
          rating: 5
        },
        {
          name: "ప్రొఫెసర్ కె. విశ్వనాథ్",
          role: "సాంస్కృతిక దర్శకుడు",
          organization: "తెలంగాణ చలనచిత్ర మరియు సాంస్కృతిక వారసత్వ ఫౌండేషన్",
          text: "ఈ కన్వెన్షన్ సెంటర్ తెలంగాణ సాంస్కృతిక పునరుజ్జీవనానికి మూలస్తంభంగా మారింది. మా వారసత్వాన్ని కాపాడటంలో వారి నిబద్ధత ప్రశంసనీయం.",
          rating: 5
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentContent.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-orange-500 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-orange-600 font-medium">
                  {testimonial.role}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonial.organization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;