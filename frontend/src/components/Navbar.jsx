import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-blue-700">
              NariSetu
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-600 hover:text-blue-700 font-medium">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-700 font-medium">
              All Schemes
            </a>
            <button className="bg-blue-700 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1 shadow-inner">
          <a href="#" className="block px-3 py-2 text-gray-600 hover:text-blue-700 font-medium">
            Home
          </a>
          <a href="#" className="block px-3 py-2 text-gray-600 hover:text-blue-700 font-medium">
            All Schemes
          </a>
          <div className="px-3 pt-2">
            <button className="w-full bg-blue-700 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
