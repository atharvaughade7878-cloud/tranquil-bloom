import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    preferredContact: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: '',
      preferredContact: 'email'
    });

    // Auto-hide success message
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Find Our Sanctuary",
      value: "123 Wellness Way, Spa District\nPeaceful City, PC 12345",
      link: null
    },
    {
      icon: Phone,
      label: "Call for Bookings",
      value: "(555) SPA-RELX (772-7359)",
      link: "tel:+15557727359"
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "hello@tranquil-bloom.com",
      link: "mailto:hello@tranquil-bloom.com"
    }
  ];

  const socialMedia = [
    { icon: Instagram, name: "Instagram", link: "#" },
    { icon: Facebook, name: "Facebook", link: "#" },
    { icon: Youtube, name: "YouTube", link: "#" }
  ];

  const interests = [
    "General Information",
    "Treatment Booking", 
    "Spa Packages",
    "Gift Certificates",
    "Wellness Programs",
    "Private Events"
  ];

  return (
    <section id="contact" className="py-24 bg-spa-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-spa-forest mb-6 animate-fade-in">
            Visit Our Wellness Sanctuary
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-spa-white rounded-2xl p-8 shadow-soft">
              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={info.label} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className="flex items-start space-x-4">
                        <IconComponent className="w-6 h-6 text-spa-teal mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-playfair font-medium text-spa-forest mb-2">
                            {info.label}
                          </h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-spa-teal hover:text-spa-mint transition-colors duration-300"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-spa-gray whitespace-pre-line">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Spa Hours */}
                <div className="animate-fade-in animate-delay-700">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-spa-teal mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-playfair font-medium text-spa-forest mb-2">
                        Wellness Hours
                      </h3>
                      <div className="space-y-1 text-spa-gray">
                        <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                        <p>Saturday: 8:00 AM - 6:00 PM</p>
                        <p>Sunday: 10:00 AM - 6:00 PM</p>
                        <p className="text-sm text-spa-sage mt-2">
                          Extended hours for couples treatments
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="animate-fade-in animate-delay-1000">
                  <h3 className="font-playfair font-medium text-spa-forest mb-4">
                    Follow Our Journey
                  </h3>
                  <div className="flex space-x-4">
                    {socialMedia.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.link}
                          className="w-12 h-12 bg-spa-teal rounded-full flex items-center justify-center text-spa-white hover:bg-spa-mint transition-colors duration-300 hover:scale-110 transform"
                          aria-label={social.name}
                        >
                          <IconComponent className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-spa-white rounded-2xl p-8 shadow-soft">
              {/* Success Message */}
              {showSuccess && (
                <div className="mb-6 p-4 bg-spa-mint text-spa-white rounded-xl text-center animate-fade-in">
                  <p className="font-poppins">Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-spa-forest font-poppins mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your full name"
                      className="w-full p-4 rounded-xl border-2 border-spa-sage/30 focus:border-spa-teal focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-spa-forest font-poppins mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      className="w-full p-4 rounded-xl border-2 border-spa-sage/30 focus:border-spa-teal focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-spa-forest font-poppins mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="(555) 123-4567"
                      className="w-full p-4 rounded-xl border-2 border-spa-sage/30 focus:border-spa-teal focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-spa-forest font-poppins mb-2">
                      Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      className="w-full p-4 rounded-xl border-2 border-spa-sage/30 focus:border-spa-teal focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select your interest</option>
                      {interests.map((interest) => (
                        <option key={interest} value={interest}>
                          {interest}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-spa-forest font-poppins mb-2">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us how we can help you on your wellness journey..."
                    rows={5}
                    className="w-full p-4 rounded-xl border-2 border-spa-sage/30 focus:border-spa-teal focus:outline-none transition-colors duration-300 resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-spa-forest font-poppins mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-6">
                    {['email', 'phone', 'text'].map((method) => (
                      <label key={method} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                          className="text-spa-teal focus:ring-spa-teal"
                        />
                        <span className="text-spa-forest font-poppins capitalize">
                          {method}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="spa"
                  size="xl"
                  disabled={!formData.name || !formData.email || !formData.message || isSubmitting}
                  className="w-full disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-spa-white/30 border-t-spa-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <div className="bg-spa-white rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-playfair font-medium text-spa-forest mb-6 text-center">
              Find Us
            </h3>
            <div className="bg-spa-cream rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-spa-gray">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-spa-teal" />
                <p className="font-poppins">Interactive map would be embedded here</p>
                <p className="text-sm">123 Wellness Way, Spa District</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;