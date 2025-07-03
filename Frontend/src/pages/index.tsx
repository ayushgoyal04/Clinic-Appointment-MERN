import React from 'react';
import Header from '@/components/Header';
import AppointmentForm from '@/components/AppointmentForm';
import Footer from '@/components/footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Content */}
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Doctor Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 h-[600px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-64 h-80 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-lg font-medium">Professional Doctor</p>
                      <p className="text-sm opacity-90">Healthcare Specialist</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <div className="w-16 h-12 bg-orange-200 rounded mx-auto mb-2"></div>
                    <p className="text-sm text-gray-600">Care Point Clipboard</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
