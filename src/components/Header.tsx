import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 w-full bg-spa-white/95 backdrop-blur-sm z-50 border-b border-spa-sage/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-playfair font-semibold text-spa-forest animate-gentle-pulse">
              Tranquil Bloom
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-spa-gray hover:text-spa-mint transition-colors duration-300 font-poppins font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Book Treatment Button */}
          <div className="hidden md:block">
            <Button variant="spa" size="lg" className="font-medium">
              Book Treatment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-spa-forest"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-spa-white/96 backdrop-blur-md z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-2xl font-poppins text-spa-forest hover:text-spa-mint transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="spa" 
              size="xl" 
              className="mt-8 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Book Treatment
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;