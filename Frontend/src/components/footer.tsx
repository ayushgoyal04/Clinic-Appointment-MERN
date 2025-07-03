import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Contact */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">CARE</h3>
                <p className="text-xs text-blue-600 font-medium">POINT</p>
              </div>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <p>katol road, 440013</p>
              <p>Nagpur, INDIA</p>
              <p className="mt-3">Tel: +91 (65) 9999999999</p>
              <p>Mail: info@Carepoint.com</p>
            </div>
            <div className="flex space-x-3 mt-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
            </div>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Departments</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Cardiology</a></li>
              <li><a href="#" className="hover:text-blue-600">Dentistry</a></li>
              <li><a href="#" className="hover:text-blue-600">Dermatology</a></li>
              <li><a href="#" className="hover:text-blue-600">Gynecology</a></li>
              <li><a href="#" className="hover:text-blue-600">Pediatrics</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Radiology</a></li>
              <li><a href="#" className="hover:text-blue-600">Gynecology</a></li>
              <li><a href="#" className="hover:text-blue-600">Nephrology</a></li>
              <li><a href="#" className="hover:text-blue-600">Oncology</a></li>
              <li><a href="#" className="hover:text-blue-600">Podiatry</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Useful Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Our story</a></li>
              <li><a href="#" className="hover:text-blue-600">Patients</a></li>
              <li><a href="#" className="hover:text-blue-600">Doctors</a></li>
              <li><a href="#" className="hover:text-blue-600">Facilities</a></li>
              <li><a href="#" className="hover:text-blue-600">Appointments</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© Copyright 2018 | Carepoint Theme by Laborator | All Rights Reserved</p>
          <p>Free call 24/7 | 9999999999</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;