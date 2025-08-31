import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface GalleryProps {
  language: 'en' | 'te';
}

const Gallery: React.FC<GalleryProps> = ({ language }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const content = {
    en: {
      title: "Arts & Cultural Gallery",
      subtitle: "Showcasing the rich heritage of Telangana through memorable events",
      categories: {
        all: "All Events",
        cultural: "Cultural Programs",
        government: "Government Events",
        arts: "Arts & Exhibitions",
        festivals: "Festivals"
      }
    },
    te: {
      title: "కళలు మరియు సాంస్కృతిక గ్యాలరీ",
      subtitle: "గుర్తుండిపోయే కార్యక్రమాల ద్వారా తెలంగాణ యొక్క గొప్ప వారసత్వాన్ని ప్రదర్శిస్తోంది",
      categories: {
        all: "అన్ని కార్యక్రమాలు",
        cultural: "సాంస్కృతిక కార్యక్రమాలు",
        government: "ప్రభుత్వ కార్యక్రమాలు",
        arts: "కళలు మరియు ప్రదర్శనలు",
        festivals: "ఉత్సవాలు"
      }
    }
  };

  // Using actual images from public folder
  const galleryImages = [
    {
      url: "/1863603-17-puli-1e.webp",
      category: "government",
      title: language === 'en' ? "Government Cultural Event" : "ప్రభుత్వ సాంస్కృతిక కార్యక్రమం",
      description: language === 'en' ? "Official government cultural program" : "అధికారిక ప్రభుత్వ సాంస్కృతిక కార్యక్రమం"
    },
    {
      url: "/portfolios-of-telangana-new-ministers_b_0912231137.jpg",
      category: "government",
      title: language === 'en' ? "Telangana Ministers Event" : "తెలంగాణ మంత్రుల కార్యక్రమం",
      description: language === 'en' ? "Official ministerial gathering" : "అధికారిక మంత్రుల సమావేశం"
    },
    {
      url: "/197.jpg",
      category: "cultural",
      title: language === 'en' ? "Traditional Cultural Performance" : "సాంప్రదాయ సాంస్కృతిక ప్రదర్శన",
      description: language === 'en' ? "Classical dance and music performance" : "శాస్త్రీయ నృత్యం మరియు సంగీత ప్రదర్శన"
    },
    {
      url: "/67039ffadd4a2-6703a369255db.jpg",
      category: "arts",
      title: language === 'en' ? "Art Exhibition" : "కళా ప్రదర్శన",
      description: language === 'en' ? "Contemporary art showcase" : "సమకాలీన కళా ప్రదర్శన"
    },
    {
      url: "/FINAL-KV-01.jpg",
      category: "festivals",
      title: language === 'en' ? "Cultural Festival" : "సాంస్కృతిక ఉత్సవం",
      description: language === 'en' ? "Grand cultural celebration" : "గ్రాండ్ సాంస్కృతిక వేడుక"
    },
    {
      url: "/1280px-The_tableau_of_Telangana_passes_through_the_Rajpath_during_the_full_dress_rehearsal_for_the_Republic_Day_Parade-2015,_in_New_Delhi_on_January_23,_2015.jpg",
      category: "government",
      title: language === 'en' ? "Republic Day Tableau" : "గణతంత్ర దినోత్సవ ఊరేగింపు",
      description: language === 'en' ? "Telangana's Republic Day parade tableau" : "తెలంగాణ గణతంత్ర దినోత్సవ ఊరేగింపు"
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 px-4 py-2 rounded-full mb-4">
            <span className="text-orange-600 text-sm font-medium">
              {language === 'en' ? 'Visual Heritage' : 'దృశ్య వారసత్వం'}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(content[language].categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-100 hover:text-orange-600 shadow-md'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onClick={() => openModal(index)}
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-gray-200 text-sm">{image.description}</p>
                </div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {content[language].categories[image.category as keyof typeof content[typeof language]['categories']]}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'en' 
                ? "Host Your Cultural Event" 
                : "మీ సాంస్కృతిక కార్యక్రమాన్ని నిర్వహించండి"
              }
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'en'
                ? "Join the legacy of memorable cultural events at Kaloji Convention Centre"
                : "కాళోజీ కన్వెన్షన్ సెంటర్‌లో గుర్తుండిపోయే సాంస్కృతిక కార్యక్రమాల వారసత్వంలో చేరండి"
              }
            </p>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('openBookingModal'))}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              {language === 'en' ? "Book Your Event" : "మీ కార్యక్రమాన్ని బుక్ చేయండి"}
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-orange-400 z-10 bg-black/50 rounded-full p-2"
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <div className="flex items-center justify-center h-full">
              <img
                src={filteredImages[selectedImage].url}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
            
            {/* Image Info */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center bg-black/50 backdrop-blur-sm rounded-lg p-4 max-w-2xl">
              <h3 className="text-xl font-bold mb-2">{filteredImages[selectedImage].title}</h3>
              <p className="text-gray-200 mb-2">{filteredImages[selectedImage].description}</p>
              <p className="text-sm text-orange-300">
                {selectedImage + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;