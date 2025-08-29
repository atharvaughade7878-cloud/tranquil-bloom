import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Youtube, Heart, Mail } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Gift Cards', href: '#gift-cards' },
    { name: 'Contact', href: '#contact' }
  ];

  const treatmentLinks = [
    { name: 'Massage Therapy', href: '#massage' },
    { name: 'Facial Care', href: '#facial' },
    { name: 'Body Treatments', href: '#body' },
    { name: 'Aromatherapy', href: '#aromatherapy' },
    { name: 'Couples Packages', href: '#couples' },
    { name: 'Wellness Sessions', href: '#wellness' }
  ];

  const socialMedia = [
    { icon: Instagram, name: 'Instagram', href: '#' },
    { icon: Facebook, name: 'Facebook', href: '#' },
    { icon: Youtube, name: 'YouTube', href: '#' },
    { icon: Heart, name: 'Wellness Blog', href: '#' }
  ];

  return (
    <footer className="bg-spa-forest text-spa-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Spa Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-playfair font-semibold mb-4 animate-gentle-pulse">
                Tranquil Bloom
              </h3>
              <p className="text-spa-white/80 leading-relaxed">
                Your sanctuary for mind, body & soul wellness
              </p>
            </div>
            
            <div className="space-y-2 text-spa-white/70">
              <p>123 Wellness Way, Spa District</p>
              <p>Peaceful City, PC 12345</p>
              <p>(555) SPA-RELX (772-7359)</p>
              <p>hello@tranquil-bloom.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-playfair font-medium mb-6 text-spa-mint">
              Explore
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-spa-white/70 hover:text-spa-white transition-colors duration-300 font-poppins"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatment Links */}
          <div>
            <h4 className="text-xl font-playfair font-medium mb-6 text-spa-mint">
              Popular Treatments
            </h4>
            <ul className="space-y-3">
              {treatmentLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-spa-white/70 hover:text-spa-white transition-colors duration-300 font-poppins"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-xl font-playfair font-medium mb-6 text-spa-mint">
              Stay Connected
            </h4>
            
            {/* Newsletter Signup */}
            <form onSubmit={handleSubscribe} className="mb-6">
              {subscribed ? (
                <div className="text-spa-mint font-poppins animate-fade-in">
                  Thank you for joining our wellness community!
                </div>
              ) : (
                <div className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for wellness tips"
                    className="w-full p-3 rounded-lg bg-spa-white/10 border border-spa-white/20 text-spa-white placeholder-spa-white/60 focus:outline-none focus:border-spa-mint transition-colors duration-300"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-spa-mint text-spa-forest hover:bg-spa-white hover:text-spa-forest transition-all duration-300"
                  >
                    Subscribe
                  </Button>
                </div>
              )}
            </form>

            {/* Social Media */}
            <div className="space-y-4">
              <div className="flex space-x-3">
                {socialMedia.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-spa-white/10 rounded-full flex items-center justify-center hover:bg-spa-mint hover:text-spa-forest transition-all duration-300 hover:scale-110 transform"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
              
              <p className="text-sm text-spa-white/60 font-poppins">
                Follow us for daily wellness inspiration
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-spa-white/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 text-center">
            <p className="text-spa-white/60 font-poppins text-sm">
              © 2024 Tranquil Bloom Spa. All rights reserved. | 
              <a href="#" className="hover:text-spa-mint transition-colors duration-300 ml-1">
                Privacy Policy
              </a> | 
              <a href="#" className="hover:text-spa-mint transition-colors duration-300 ml-1">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;