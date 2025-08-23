import React, { useState, useEffect } from 'react';
import { Search, Play } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Smart Society Management Platform', 'Complete Community Solution', 'Digital Society Management'];

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[loopNum % words.length];
      setText(isDeleting 
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-16 w-72 h-72 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-1/2 -left-16 w-48 h-48 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-36 h-36 bg-orange-400 rounded-full opacity-20 animate-ping"></div>
        <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-red-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="floating-shape bg-blue-300 opacity-30"></div>
        <div className="floating-shape-delayed bg-green-300 opacity-30"></div>
        <div className="floating-shape-slow bg-purple-300 opacity-30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-8 pb-16 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[90vh]">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-8">
              <img 
                src="https://servizing.com/assets/images/logo-128x128.png" 
                alt="Servizing Logo" 
                className="w-16 h-16 mx-auto lg:mx-0 mb-4 animate-pulse"
              />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
                {text}
                <span className="animate-pulse text-yellow-400">|</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-xl text-gray-100 mb-6 max-w-2xl leading-relaxed">
                Enrich the joy of living in the community by connecting, collaborating, and communicating along with enhanced security with Servizing solutions
              </p>
            </div>

            {/* Property Search Bar */}
            <div className="relative mb-6 max-w-md mx-auto lg:mx-0">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search apartments, societies, or communities..."
                  className="w-full pl-12 pr-4 py-3 rounded-full border-0 shadow-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-300 transform hover:scale-105 text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <span className="relative z-10">Get Started Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative">
              <div className="animate-float">
                <img 
                  src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Modern Society" 
                  className="rounded-2xl shadow-2xl w-full max-w-sm mx-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded-2xl shadow-xl animate-bounce">
                <div className="text-white text-center">
                  <div className="font-bold text-xl">500+</div>
                  <div className="text-sm">Societies Trust Us</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;