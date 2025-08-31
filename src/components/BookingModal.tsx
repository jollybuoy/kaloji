import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, Phone, Mail, User, CreditCard, Check } from 'lucide-react';
import { bookingService } from '../lib/database';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'te';
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, language }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Event Details
    eventType: '',
    eventName: '',
    eventDate: '',
    startTime: '',
    endTime: '',
    expectedGuests: '',
    
    // Contact Information
    organizerName: '',
    organization: '',
    phone: '',
    email: '',
    address: '',
    
    // Additional Services
    catering: false,
    decoration: false,
    photography: false,
    security: false,
    parking: false,
    
    // Special Requirements
    specialRequirements: ''
  });

  const content = {
    en: {
      title: "Book Your Event",
      steps: ["Event Details", "Contact Info", "Services", "Confirmation"],
      eventDetails: {
        eventType: "Event Type",
        eventName: "Event Name",
        eventDate: "Event Date",
        startTime: "Start Time",
        endTime: "End Time",
        expectedGuests: "Expected Guests"
      },
      contactInfo: {
        organizerName: "Organizer Name",
        organization: "Organization",
        phone: "Phone Number",
        email: "Email Address",
        address: "Address"
      },
      services: {
        title: "Additional Services",
        catering: "Traditional Catering",
        decoration: "Cultural Decoration",
        photography: "Professional Photography",
        security: "Security Services",
        parking: "Valet Parking"
      },
      specialRequirements: "Special Requirements",
      buttons: {
        next: "Next",
        previous: "Previous",
        submit: "Submit Booking",
        close: "Close"
      },
      eventTypes: [
        "Cultural Festival",
        "Classical Performance",
        "Art Exhibition",
        "Government Function",
        "Award Ceremony",
        "Corporate Event",
        "Literary Event",
        "Conference",
        "Theatre Performance",
        "Music Concert"
      ]
    },
    te: {
      title: "మీ కార్యక్రమాన్ని బుక్ చేయండి",
      steps: ["కార్యక్రమ వివరాలు", "సంప్రదింపు సమాచారం", "సేవలు", "నిర్ధారణ"],
      eventDetails: {
        eventType: "కార్యక్రమ రకం",
        eventName: "కార్యక్రమ పేరు",
        eventDate: "కార్యక్రమ తేదీ",
        startTime: "ప్రారంభ సమయం",
        endTime: "ముగింపు సమయం",
        expectedGuests: "ఊహించిన అతిథులు"
      },
      contactInfo: {
        organizerName: "నిర్వాహకుడి పేరు",
        organization: "సంస్థ",
        phone: "ఫోన్ నంబర్",
        email: "ఇమెయిల్ చిరునామా",
        address: "చిరునామా"
      },
      services: {
        title: "అదనపు సేవలు",
        catering: "సాంప్రదాయ క్యాటరింగ్",
        decoration: "సాంస్కృతిక అలంకరణ",
        photography: "వృత్తిపరమైన ఫోటోగ్రఫీ",
        security: "భద్రతా సేవలు",
        parking: "వాలెట్ పార్కింగ్"
      },
      specialRequirements: "ప్రత్యేక అవసరాలు",
      buttons: {
        next: "తదుపరి",
        previous: "మునుపటి",
        submit: "బుకింగ్ సమర్పించండి",
        close: "మూసివేయండి"
      },
      eventTypes: [
        "సాంస్కృతిక ఉత్సవం",
        "శాస్త్రీయ ప్రదర్శన",
        "కళా ప్రదర్శన",
        "ప్రభుత్వ కార్యక్రమం",
        "పురస్కార వేడుక",
        "కార్పొరేట్ ఈవెంట్",
        "సాహిత్య కార్యక్రమం",
        "సమావేశం",
        "థియేటర్ ప్రదర్శన",
        "సంగీత కచేరీ"
      ]
    }
  };

  const t = content[language];

  if (!isOpen) return null;

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    handleBookingSubmit();
  };

  const handleBookingSubmit = async () => {
    const setIsLoading = useState(false)[1]; // Add loading state
    setIsLoading(true);
    
    try {
      const bookingData = {
        event_type: formData.eventType,
        event_name: formData.eventName,
        event_date: formData.eventDate,
        start_time: formData.startTime,
        end_time: formData.endTime,
        expected_guests: parseInt(formData.expectedGuests),
        organizer_name: formData.organizerName,
        organization: formData.organization || undefined,
        phone: formData.phone,
        email: formData.email,
        address: formData.address || undefined,
        catering: formData.catering,
        decoration: formData.decoration,
        photography: formData.photography,
        security: formData.security,
        parking: formData.parking,
        special_requirements: formData.specialRequirements || undefined,
        status: 'pending' as const
      };

      await bookingService.createBooking(bookingData);
      
      alert(language === 'en' ? 'Booking submitted successfully! We will contact you soon.' : 'బుకింగ్ విజయవంతంగా సమర్పించబడింది! మేము త్వరలో మిమ్మల్ని సంప్రదిస్తాము.');
      onClose();
      setCurrentStep(1);
      // Reset form
      setFormData({
        eventType: '',
        eventName: '',
        eventDate: '',
        startTime: '',
        endTime: '',
        expectedGuests: '',
        organizerName: '',
        organization: '',
        phone: '',
        email: '',
        address: '',
        catering: false,
        decoration: false,
        photography: false,
        security: false,
        parking: false,
        specialRequirements: ''
      });
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert(language === 'en' ? 'Error submitting booking. Please try again.' : 'బుకింగ్ సమర్పించడంలో లోపం. దయచేసి మళ్లీ ప్రయత్నించండి.');
    } finally {
      setIsLoading(false);
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">{t.title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4 border-b">
          <div className="flex items-center justify-between">
            {t.steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep > index + 1 
                    ? 'bg-green-500 text-white' 
                    : currentStep === index + 1 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > index + 1 ? <Check className="w-4 h-4" /> : index + 1}
                </div>
                <span className={`ml-2 text-sm ${currentStep === index + 1 ? 'text-orange-600 font-medium' : 'text-gray-600'}`}>
                  {step}
                </span>
                {index < t.steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-4 ${currentStep > index + 1 ? 'bg-green-500' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {/* Step 1: Event Details */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.steps[0]}</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="inline w-4 h-4 mr-1" />
                    {t.eventDetails.eventType}
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => handleInputChange('eventType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select Event Type</option>
                    {t.eventTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.eventDetails.eventName}
                  </label>
                  <input
                    type="text"
                    value={formData.eventName}
                    onChange={(e) => handleInputChange('eventName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter event name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="inline w-4 h-4 mr-1" />
                    {t.eventDetails.eventDate}
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => handleInputChange('eventDate', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Users className="inline w-4 h-4 mr-1" />
                    {t.eventDetails.expectedGuests}
                  </label>
                  <input
                    type="number"
                    value={formData.expectedGuests}
                    onChange={(e) => handleInputChange('expectedGuests', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Number of guests"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="inline w-4 h-4 mr-1" />
                    {t.eventDetails.startTime}
                  </label>
                  <input
                    type="time"
                    value={formData.startTime}
                    onChange={(e) => handleInputChange('startTime', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="inline w-4 h-4 mr-1" />
                    {t.eventDetails.endTime}
                  </label>
                  <input
                    type="time"
                    value={formData.endTime}
                    onChange={(e) => handleInputChange('endTime', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Contact Information */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.steps[1]}</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="inline w-4 h-4 mr-1" />
                    {t.contactInfo.organizerName}
                  </label>
                  <input
                    type="text"
                    value={formData.organizerName}
                    onChange={(e) => handleInputChange('organizerName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contactInfo.organization}
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => handleInputChange('organization', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Organization name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="inline w-4 h-4 mr-1" />
                    {t.contactInfo.phone}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="inline w-4 h-4 mr-1" />
                    {t.contactInfo.email}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contactInfo.address}
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Complete address"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Additional Services */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.services.title}</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { key: 'catering', label: t.services.catering, icon: '🍽️' },
                  { key: 'decoration', label: t.services.decoration, icon: '🎨' },
                  { key: 'photography', label: t.services.photography, icon: '📸' },
                  { key: 'security', label: t.services.security, icon: '🛡️' },
                  { key: 'parking', label: t.services.parking, icon: '🚗' }
                ].map((service) => (
                  <div key={service.key} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <input
                      type="checkbox"
                      id={service.key}
                      checked={formData[service.key as keyof typeof formData] as boolean}
                      onChange={(e) => handleInputChange(service.key, e.target.checked)}
                      className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <label htmlFor={service.key} className="flex items-center space-x-2 cursor-pointer">
                      <span className="text-xl">{service.icon}</span>
                      <span className="text-gray-700">{service.label}</span>
                    </label>
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.specialRequirements}
                </label>
                <textarea
                  value={formData.specialRequirements}
                  onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder={language === 'en' ? "Any special requirements or notes..." : "ఏవైనా ప్రత్యేక అవసరాలు లేదా గమనికలు..."}
                />
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.steps[3]}</h3>
              
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Event Type:</span>
                    <p className="text-gray-900">{formData.eventType}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Event Name:</span>
                    <p className="text-gray-900">{formData.eventName}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Date & Time:</span>
                    <p className="text-gray-900">{formData.eventDate} | {formData.startTime} - {formData.endTime}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Expected Guests:</span>
                    <p className="text-gray-900">{formData.expectedGuests}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Organizer:</span>
                    <p className="text-gray-900">{formData.organizerName}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Contact:</span>
                    <p className="text-gray-900">{formData.phone}</p>
                  </div>
                </div>
                
                {(formData.catering || formData.decoration || formData.photography || formData.security || formData.parking) && (
                  <div>
                    <span className="font-medium text-gray-700">Additional Services:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.catering && <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Catering</span>}
                      {formData.decoration && <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Decoration</span>}
                      {formData.photography && <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Photography</span>}
                      {formData.security && <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Security</span>}
                      {formData.parking && <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Parking</span>}
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm">
                  {language === 'en' 
                    ? "Our team will contact you within 24 hours to confirm availability and discuss pricing details."
                    : "మా బృందం లభ్యతను నిర్ధారించడానికి మరియు ధర వివరాలను చర్చించడానికి 24 గంటలలోపు మిమ్మల్ని సంప్రదిస్తుంది."
                  }
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="flex items-center justify-between p-6 border-t bg-gray-50">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`px-6 py-2 rounded-lg font-medium ${
              currentStep === 1 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
            }`}
          >
            {t.buttons.previous}
          </button>

          <div className="flex space-x-3">
            {currentStep < 4 ? (
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-red-700 transition-all duration-200"
              >
                {t.buttons.next}
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center space-x-2"
              >
                <CreditCard className="w-4 h-4" />
                <span>{t.buttons.submit}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;