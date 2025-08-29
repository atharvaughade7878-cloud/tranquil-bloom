import { Check, Award, Heart, Users } from 'lucide-react';
import spaInteriorImage from '@/assets/spa-interior.jpg';

const About = () => {
  const certifications = [
    "Certified Spa Therapists",
    "Organic & Natural Products Only", 
    "8+ Years of Wellness Excellence",
    "Personalized Treatment Plans"
  ];

  const stats = [
    { number: "5000+", label: "Happy Clients", icon: Heart },
    { number: "8+", label: "Years Experience", icon: Award },
    { number: "15+", label: "Treatment Options", icon: Users }
  ];

  return (
    <section id="about" className="py-24 bg-spa-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-spa-forest mb-4 animate-fade-in">
                Your Journey to Wellness Begins Here
              </h2>
              <p className="text-xl font-poppins text-spa-sage animate-fade-in animate-delay-300">
                Creating Peaceful Moments Since 2015
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-spa-gray leading-relaxed animate-fade-in animate-delay-500">
                At Tranquil Bloom Spa, we believe that wellness is a journey, not a destination. Our serene sanctuary offers a perfect escape from the hustle and bustle of daily life. With over 8 years of experience, our certified therapists use only the finest natural products and time-honored techniques to help you achieve complete relaxation and rejuvenation.
              </p>

              <p className="text-spa-sage italic leading-relaxed animate-fade-in animate-delay-700">
                We are committed to providing personalized treatments that nurture your body, calm your mind, and lift your spirit. Every visit is designed to be a transformative experience.
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-3 animate-fade-in animate-delay-700">
              {certifications.map((cert, index) => (
                <div 
                  key={cert} 
                  className="flex items-center space-x-3 animate-fade-in"
                  style={{ animationDelay: `${0.9 + index * 0.15}s` }}
                >
                  <Check className="w-5 h-5 text-spa-teal" />
                  <span className="text-spa-forest font-poppins">{cert}</span>
                </div>
              ))}
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in animate-delay-1000">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <IconComponent className="w-8 h-8 text-spa-teal mx-auto mb-2" />
                    <div className="text-3xl font-playfair font-semibold text-spa-teal mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-spa-gray font-poppins">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* About Image */}
          <div className="relative animate-fade-in-right animate-delay-500">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-gentle-float">
              <img
                src={spaInteriorImage}
                alt="Peaceful spa interior with treatment room and serene wellness atmosphere"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;