import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/thankyouvideos/images/Vidzero.png" 
                alt="Vidzero Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold">Vidzero</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Helping charities create meaningful connections with their supporters 
              through professional video content.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Video Production Training</li>
              <li>Professional Video Editing</li>
              <li>AI Personalized Videos</li>
              <li>Donor Engagement Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>adrian@vidzero.com.au</p>
              <p>0408 887 232</p>
              <p>Level 36, 1 Macquarie Place</p>
              <p>Sydney, 2000, Australia</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Vidzero. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-sm mt-4 sm:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for charities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;