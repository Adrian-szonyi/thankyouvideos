import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
              <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('/images/ZackBanner.jpg')`,
            backgroundPosition: '70% center'
          }}
        />
      
      <div className="relative z-10 max-w-lg ml-2 sm:ml-4 lg:ml-6 px-2 sm:px-4 lg:px-6 text-left">
        {/* Text Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg -m-2"></div>
        <h1 className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Transform Donor Relationships with
          <span className="block text-orange-400">Personalized Thank You Videos</span>
        </h1>
        
        <p className="relative z-10 text-lg sm:text-xl text-blue-100 mb-8 max-w-lg leading-relaxed">
          Help charities create meaningful connections with their supporters through 
          professional video content that drives engagement and increases donor retention.
        </p>
        
        <div className="relative z-10 animate-bounce mt-12">
          <ArrowDown className="h-8 w-8 text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;