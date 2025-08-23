import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'FAQs', href: '#faqs' }
  ];

  const features = [
    { name: 'Visitor Management', href: '#visitor' },
    { name: 'Billing & Payments', href: '#billing' },
    { name: 'Amenities Booking', href: '#amenities' },
    { name: 'Emergency Alerts', href: '#emergency' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="https://servizing.com/assets/images/logo-128x128.png" 
                alt="Servizing Logo" 
                className="w-10 h-10 mr-3"
              />
              <span className="text-2xl font-bold">Servizing</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Smart Society Management Platform that transforms residential communities 
              through innovative technology and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="group p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-5 h-5 group-hover:animate-bounce" />
              </a>
              <a href="#" className="group p-2 bg-sky-500 hover:bg-sky-600 rounded-full transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-5 h-5 group-hover:animate-bounce" />
              </a>
              <a href="#" className="group p-2 bg-pink-600 hover:bg-pink-700 rounded-full transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-5 h-5 group-hover:animate-bounce" />
              </a>
              <a href="#" className="group p-2 bg-blue-700 hover:bg-blue-800 rounded-full transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-5 h-5 group-hover:animate-bounce" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gradient">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gradient">Features</h3>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature.name}>
                  <a 
                    href={feature.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {feature.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gradient">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">1800-123-2046</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@servizing.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-400" />
                <span className="text-gray-300">Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2017-18 Premises Experts Pvt. Ltd. All rights reserved.
            </div>
            
            <div className="flex flex-wrap space-x-6">
              {legalLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;