import { Button } from '@/components/ui/button';
import massageImage from '@/assets/massage-therapy.jpg';
import facialImage from '@/assets/facial-treatment.jpg';
import bodyImage from '@/assets/body-treatment.jpg';
import aromatherapyImage from '@/assets/aromatherapy.jpg';
import meditationImage from '@/assets/meditation.jpg';
import couplesImage from '@/assets/couples-spa.jpg';

const Services = () => {
  const services = [
    {
      title: "Relaxing Massage Therapy",
      description: "Unwind with our signature massage treatments designed to release tension and restore balance to your body.",
      image: massageImage,
      price: "From $120"
    },
    {
      title: "Facial Treatments & Skincare",
      description: "Reveal your natural glow with our customized facial treatments using organic, nourishing ingredients.",
      image: facialImage,
      price: "From $95"
    },
    {
      title: "Body Treatments & Wraps",
      description: "Detoxify and nourish your skin with our luxurious body wraps and exfoliating treatments.",
      image: bodyImage,
      price: "From $140"
    },
    {
      title: "Aromatherapy Sessions",
      description: "Immerse yourself in the healing power of essential oils for complete mind and body relaxation.",
      image: aromatherapyImage,
      price: "From $85"
    },
    {
      title: "Meditation & Wellness",
      description: "Find inner peace and mental clarity through our guided meditation and mindfulness sessions.",
      image: meditationImage,
      price: "From $60"
    },
    {
      title: "Couples Spa Packages",
      description: "Share a peaceful wellness journey with your loved one in our romantic couples treatment rooms.",
      image: couplesImage,
      price: "From $280"
    }
  ];

  return (
    <section id="services" className="py-24 bg-spa-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-spa-forest mb-6 animate-fade-in">
            Our Spa & Wellness Services
          </h2>
          <p className="text-xl text-spa-gray max-w-2xl mx-auto animate-fade-in animate-delay-300">
            Rejuvenate your body, calm your mind, and restore your spirit
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-spa-white rounded-2xl overflow-hidden shadow-soft hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Service Content */}
              <div className="p-8">
                <h3 className="text-xl font-playfair font-medium text-spa-forest mb-3 group-hover:text-spa-mint transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-spa-gray leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-poppins font-semibold text-spa-gold">
                    {service.price}
                  </span>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-spa-teal border-spa-teal hover:bg-spa-mint hover:text-spa-white hover:border-spa-mint"
                  >
                    Learn More →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button variant="spa" size="xl" className="animate-fade-in animate-delay-1000">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;