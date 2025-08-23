import React from 'react';
import { Smartphone, Download } from 'lucide-react';

const AppDownload = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Get The Servizing Mobile App
            </h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Access all society features on the go. Manage visitors, pay bills, book amenities, 
              and stay connected with your community anytime, anywhere.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#"
                className="group flex items-center justify-center bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="mr-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <Download className="w-5 h-5 text-black" />
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="group flex items-center justify-center bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="mr-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <Download className="w-5 h-5 text-black" />
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.8★</div>
                <div className="text-sm text-gray-200">App Store Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm text-gray-200">Downloads</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <div className="animate-float">
                <div className="relative mx-auto w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl shadow-2xl flex items-center justify-center transform rotate-12 hover:rotate-6 transition-transform duration-500">
                  <Smartphone className="w-32 h-32 text-white animate-pulse" />
                </div>
              </div>

              {/* Floating Feature Icons */}
              <div className="absolute -top-6 -left-6 bg-white rounded-full p-3 shadow-lg animate-bounce">
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-3 shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              </div>
              <div className="absolute top-1/2 -right-8 bg-white rounded-full p-3 shadow-lg animate-bounce" style={{ animationDelay: '2s' }}>
                <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;