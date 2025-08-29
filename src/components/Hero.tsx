import { Button } from '@/components/ui/button';
import heroImage from '@/assets/spa-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold text-spa-forest leading-tight animate-fade-in-left animate-delay-1000">
              Discover Your Inner Peace & Wellness
            </h1>
            
            <p className="text-lg md:text-xl text-spa-gray leading-relaxed max-w-lg animate-fade-in-left animate-delay-1400">
              Escape the everyday stress and rejuvenate your mind, body, and soul with our luxurious spa treatments and wellness therapies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-left animate-delay-1800">
              <Button variant="spa" size="xl" className="min-w-[200px]">
                Explore Our Services
              </Button>
              <Button variant="spa-outline" size="xl" className="min-w-[150px]">
                Book Now
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-right animate-delay-1000">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-gentle-float">
              <img
                src={heroImage}
                alt="Serene spa environment with peaceful wellness atmosphere"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              {/* Subtle overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-spa-forest/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;