import React from 'react';
import { Sprout } from 'lucide-react';
import heroBg from '../assets/hero-bg.webp';

const Hero = ({ onStart }) => {
  return (
    // FIX: Changed from 'relative h-screen' to 'fixed inset-0 overscroll-none'
    // 'fixed inset-0': Locks the element to the viewport edges, making it impossible to scroll away.
    // 'overscroll-none': Disables the rubber-band bounce effect on iOS/Android.
    <div className="fixed inset-0 w-full h-full overflow-hidden overscroll-none">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Main Content Group */}
      {/* Kept md:space-y-8 for desktop. Mobile margins handled manually inside. */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8 md:space-y-8">
        
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight max-w-5xl">
          <span className="block md:mb-2">AI-Powered Tea</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">
            Disease Detector
          </span>
        </h1>

        {/* Subtitle */}
        {/* Mobile: mt-2, mb-8. Desktop: Reset to default. */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light px-4 mt-2 mb-8 md:mt-0 md:mb-0">
          Upload a leaf. Get diagnosis. Take action.
        </p>

        {/* Button Container */}
        <div className="w-full flex justify-center md:pt-4">
          <button 
            onClick={onStart} 
            className="group flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 hover:scale-105 hover:border-green-400/50 hover:shadow-[0_0_30px_-5px_rgba(132,204,22,0.6)] w-auto max-w-xs sm:max-w-md whitespace-nowrap"
          >
            <div className="text-right">
              <p className="text-base md:text-lg font-bold">Check Leaf Quality</p>
            </div>
            <div className="p-1.5 md:p-2 bg-green-500/20 rounded-full group-hover:bg-green-500/30">
              <Sprout className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
            </div>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;