import React from 'react';
import { Link } from 'react-router-dom';
import { Notebook } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <Notebook className="h-8 w-8 text-gray-700" />
            </Link>
          </div>
          <div className="flex">
            <Link to="/" className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-700 hover:text-gray-900 focus:outline-none transition ease-in-out duration-150">
              Home
            </Link>
            <Link to="/about" className="ml-4 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-700 hover:text-gray-900 focus:outline-none transition ease-in-out duration-150">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;