import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      treatment: "Deep Relaxation Massage",
      quote: "The most relaxing experience I've ever had. The aromatherapy massage melted away all my stress. I feel completely renewed!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Maria Rodriguez", 
      treatment: "Rejuvenating Facial",
      quote: "The facial treatment was amazing! My skin has never looked better. The staff is so knowledgeable and caring.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David & Jennifer",
      treatment: "Couples Spa Package", 
      quote: "My couples massage with my partner was perfect. The ambiance and service exceeded our expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Johnson",
      treatment: "Regular Wellness Client",
      quote: "I come here monthly for my wellness routine. It's my sanctuary away from the busy world.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Robert Kim",
      treatment: "Meditation & Mindfulness",
      quote: "The meditation session helped me find inner peace. This place truly understands holistic wellness.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emma Thompson",
      treatment: "Spa Regular",
      quote: "Every visit feels like a mini vacation. The attention to detail and personalized care is exceptional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Get visible testimonials based on screen size
  const getVisibleTestimonials = () => {
    const isLarge = window.innerWidth >= 1024;
    const isMedium = window.innerWidth >= 768;
    
    const count = isLarge ? 3 : isMedium ? 2 : 1;
    const result = [];
    
    for (let i = 0; i < count; i++) {
      const index = (currentSlide + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    
    return result;
  };

  const [visibleTestimonials, setVisibleTestimonials] = useState(getVisibleTestimonials());

  useEffect(() => {
    const handleResize = () => {
      setVisibleTestimonials(getVisibleTestimonials());
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [currentSlide]);

  return (
    <section id="testimonials" className="py-24 bg-spa-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-semibold text-spa-forest mb-6 animate-fade-in">
            What Our Clients Say
          </h2>
          <p className="text-xl text-spa-gray animate-fade-in animate-delay-300">
            Real experiences from our wellness community
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-spa-white shadow-soft hover:bg-spa-mint hover:text-spa-white transition-all duration-300 -translate-x-4"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-spa-white shadow-soft hover:bg-spa-mint hover:text-spa-white transition-all duration-300 translate-x-4"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${currentSlide}-${index}`}
                className="bg-spa-white rounded-2xl p-8 shadow-soft border border-spa-sage/20 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Client Photo */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover border-3 border-spa-teal"
                  />
                </div>

                {/* Client Name */}
                <h3 className="text-xl font-playfair font-medium text-spa-forest mb-3">
                  {testimonial.name}
                </h3>

                {/* Star Rating */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-spa-gold fill-current animate-fade-in"
                      style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-spa-gray italic leading-relaxed mb-6 relative">
                  <span className="text-3xl text-spa-sage absolute -top-2 -left-2">"</span>
                  {testimonial.quote}
                  <span className="text-3xl text-spa-sage absolute -bottom-4 right-0">"</span>
                </blockquote>

                {/* Treatment Type */}
                <p className="text-sm font-poppins text-spa-sage">
                  After {testimonial.treatment}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-spa-teal scale-125'
                    : 'bg-spa-gray hover:bg-spa-mint hover:scale-110'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;