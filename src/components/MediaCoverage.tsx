import React from 'react';

const MediaCoverage = () => {
  const mediaLogos = [
    { name: "Times of India", logo: "https://via.placeholder.com/150x60/1a73e8/white?text=Times+of+India" },
    { name: "Bloomberg", logo: "https://via.placeholder.com/150x60/000000/white?text=Bloomberg" },
    { name: "YourStory", logo: "https://via.placeholder.com/150x60/ff6b35/white?text=YourStory" },
    { name: "Economic Times", logo: "https://via.placeholder.com/150x60/ff9900/white?text=Economic+Times" },
    { name: "TechCrunch", logo: "https://via.placeholder.com/150x60/00d084/white?text=TechCrunch" },
    { name: "Business Standard", logo: "https://via.placeholder.com/150x60/c41e3a/white?text=Business+Standard" }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-gray-900 to-blue-900 w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Featured In Leading Media
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Recognition from top media outlets for our innovative approach to society management
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-slide-right">
            {[...mediaLogos, ...mediaLogos].map((media, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-4"
              >
                <img
                  src={media.logo}
                  alt={media.name}
                  className="h-8 sm:h-10 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 text-base sm:text-lg">
            "Servizing is revolutionizing the way residential communities manage their operations" - Tech Industry Analyst
          </p>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;