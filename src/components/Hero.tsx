import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['society needs!', 'community management!', 'residential solutions!'];

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[loopNum % words.length];
      setText(isDeleting 
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Navigation Header */}
      <nav className="relative z-20 bg-transparent">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="https://servizing.com/assets/images/logo-128x128.png" 
                alt="Servizing Logo" 
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-white">SERVIZING</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1920')`
        }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight">
            One solution to your {text}
            <span className="animate-pulse text-blue-400">|</span>
          </h1>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[140px]">
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative overflow-hidden bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[140px]">
              <span className="relative z-10">Register Now</span>
            </button>

            <button className="group relative overflow-hidden bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[140px]">
              <span className="relative z-10">Partners</span>
              <div className="absolute inset-0 bg-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-white opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;