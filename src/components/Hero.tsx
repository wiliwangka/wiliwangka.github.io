import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="flex-grow flex items-center justify-center bg-gray-50 hero-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          <span className="block">Welcome to My Portfolio</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Showcasing my projects and skills in web development and design.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a href="#projects" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
              View Projects
            </a>
          </div>
        </div>
        <div className="mt-8 animate-bounce">
          <ArrowDown className="mx-auto h-8 w-8 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Hero;