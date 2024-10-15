import React from 'react';
import { Linkedin, Instagram, Briefcase } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 Your Name. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Briefcase className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;