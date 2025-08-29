import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';

const Booking = () => {
  const [selectedTreatment, setSelectedTreatment] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    therapist: '',
    specialRequests: '',
    firstVisit: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const treatments = [
    { id: 'massage', name: 'Relaxing Massage', duration: '60/90 min' },
    { id: 'facial', name: 'Facial & Skincare Treatment', duration: '75 min' },
    { id: 'body', name: 'Body Treatment & Wraps', duration: '90 min' },
    { id: 'aromatherapy', name: 'Aromatherapy Session', duration: '60 min' },
    { id: 'couples', name: 'Couples Spa Package', duration: '120 min' },
    { id: 'meditation', name: 'Meditation & Wellness', duration: '45 min' },
    { id: 'custom', name: 'Custom Treatment Plan', duration: 'Varies' }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  const therapists = [
    'No Preference',
    'Sarah - Massage Specialist', 
    'Maria - Facial Expert',
    'Jennifer - Wellness Coach',
    'Michael - Body Treatment Specialist'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate booking process
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Auto-hide success message after 6 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 6000);

    // Reset form
    setSelectedTreatment('');
    setSelectedDate('');
    setSelectedTime('');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      therapist: '',
      specialRequests: '',
      firstVisit: false
    });
  };

  const isFormValid = selectedTreatment && selectedDate && selectedTime && 
                     formData.fullName && formData.email && formData.phone;

  return (
    <section id="booking" className="py-24 bg-spa-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-spa-forest mb-6 animate-fade-in">
            Book Your Wellness Experience
          </h2>
          <p className="text-xl text-spa-gray animate-fade-in animate-delay-300">
            Choose your preferred treatment and schedule your peaceful escape
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-8 p-6 bg-spa-mint text-spa-white rounded-2xl text-center animate-fade-in">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Calendar className="w-6 h-6" />
              <span className="text-lg font-poppins font-medium">Appointment Scheduled!</span>
            </div>
            <p>Your wellness appointment has been scheduled! We'll send you a confirmation email shortly.</p>
          </div>
        )}

        {/* Booking Form */}
        <div className="bg-spa-cream rounded-3xl p-8 md:p-12 shadow-soft border border-spa-sage/20">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Step 1: Treatment Selection */}
            <div className="space-y-6">
              <h3 className="text-2xl font-playfair font-medium text-spa-forest flex items-center">
                <User className="w-6 h-6 mr-3 text-spa-teal" />
                Select Your Treatment
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {treatments.map((treatment) => (
                  <button
                    key={treatment.id}
                    type="button"
                    onClick={() => setSelectedTreatment(treatment.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                      selectedTreatment === treatment.id
                        ? 'border-spa-teal bg-spa-white shadow-soft scale-105'
                        : 'border-spa-sage/30 bg-spa-white hover:border-spa-mint hover:-translate-y-1'
                    }`}
                  >
                    <div className="font-poppins font-medium text-spa-forest mb-1">
                      {treatment.name}
                    </div>
                    <div className="text-sm text-spa-gray">
                      {treatment.duration}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Date & Time Selection */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-playfair font-medium text-spa-forest flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-spa-teal" />
                  Choose Date
                </h3>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-4 rounded-xl border-2 border-spa-sage/30 focus:border-spa-teal focus:outline-none transition-colors duration-300 bg-spa-white"
                  required
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-playfair font-medium text-spa-forest flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-spa-teal" />
                  Choose Time
                </h3>
                <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 text-sm rounded-lg border transition-all duration-300 ${
                        selectedTime === time
                          ? 'border-spa-teal bg-spa-teal text-spa-white'
                          : 'border-spa-sage/30 bg-spa-white hover:border-spa-mint hover:bg-spa-mint/10'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Personal Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-playfair font-medium text-spa-forest flex items-center">
                <Mail className="w-6 h-6 mr-3 text-spa-teal" />
                Personal Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-spa-forest font-poppins mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    placeholder="Enter your full name"
                    className="w-full p-4 rounded-xl border-2 border-spa-sage/30 focus:border-spa-teal focus:outline-none transition-colors duration-300 bg-spa-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-spa-forest font-poppins mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="(555) 123-4567"
                    className="w-full p-4 rounded-xl border-2 border-spa-sage/30 focus:border-spa-teal focus:outline-none transition-colors duration-300 bg-spa-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-spa-forest font-poppins mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your@email.com"
                    className="w-full p-4 rounded-xl border-2 border-spa-sage/30 focus:border-spa-teal focus:outline-none transition-colors duration-300 bg-spa-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-spa-forest font-poppins mb-2">
                    Preferred Therapist
                  </label>
                  <select
                    value={formData.therapist}
                    onChange={(e) => setFormData({...formData, therapist: e.target.value})}
                    className="w-full p-4 rounded-xl border-2 border-spa-sage/30 focus:border-spa-teal focus:outline-none transition-colors duration-300 bg-spa-white"
                  >
                    <option value="">Select therapist</option>
                    {therapists.map((therapist) => (
                      <option key={therapist} value={therapist}>
                        {therapist}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-spa-forest font-poppins mb-2">
                  Special Requests
                </label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                  placeholder="Any special requests or health considerations..."
                  rows={4}
                  className="w-full p-4 rounded-xl border-2 border-spa-sage/30 focus:border-spa-teal focus:outline-none transition-colors duration-300 bg-spa-white resize-none"
                />
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="firstVisit"
                  checked={formData.firstVisit}
                  onChange={(e) => setFormData({...formData, firstVisit: e.target.checked})}
                  className="w-5 h-5 text-spa-teal focus:ring-spa-teal border-spa-sage rounded"
                />
                <label htmlFor="firstVisit" className="text-spa-forest font-poppins">
                  This is my first visit to Tranquil Bloom Spa
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <Button
                type="submit"
                variant="spa"
                size="xl"
                disabled={!isFormValid || isSubmitting}
                className="w-full md:w-auto min-w-[300px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-spa-white/30 border-t-spa-white rounded-full animate-spin"></div>
                    <span>Scheduling...</span>
                  </div>
                ) : (
                  'Book My Treatment'
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;