import React from 'react';
import { Search, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Care</h1>
              <p className="text-xs text-blue-600 font-medium">Point</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Doctors</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Departments</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Appointments</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">News</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              BUY
            </button>
            <Search className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;