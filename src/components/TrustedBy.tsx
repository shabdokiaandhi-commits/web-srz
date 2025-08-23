import React from 'react';

const TrustedBy = () => {
  const societies = [
    "Prestige Group", "DLF Communities", "Brigade Group", "Godrej Properties", 
    "Lodha Developers", "Sobha Limited", "Puravankara", "Embassy Group",
    "Phoenix Mills", "Shriram Properties", "Century Real Estate", "Mantri Developers"
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50 w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Trusted by Leading Societies
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of residential communities that trust Servizing for their management needs
          </p>
        </div>

        <div className="relative w-full">
          <div className="flex animate-slide-left">
            {[...societies, ...societies].map((society, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 px-4 py-3"
              >
                <div className="text-sm sm:text-base font-semibold text-gray-700 whitespace-nowrap">
                  {society}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Societies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50,000+</div>
              <div className="text-gray-600">Happy Residents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">1M+</div>
              <div className="text-gray-600">Visitor Entries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;