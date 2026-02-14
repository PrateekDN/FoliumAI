import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/10 h-16 md:h-20 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo Section */}
          <div 
            onClick={() => onNavigate('home')} 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Leaf className="h-5 w-5 md:h-6 md:w-6 text-green-400" />
            <span className="text-white font-bold text-lg md:text-xl tracking-tight">FoliumAI</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              <button onClick={() => onNavigate('home')} className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
                Home
              </button>
              
              {['About', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300">
                  {item}
                </a>
              ))}
            </div>

            {/* UPDATED: Login Button with onNavigate */}
            <button 
              onClick={() => onNavigate('login')}
              className="bg-lime-400 text-black px-5 py-2 rounded-md text-sm font-bold transition-all duration-300 hover:scale-105 hover:bg-lime-300 hover:shadow-[0_0_15px_rgba(163,230,53,0.5)]"
            >
              Login
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white p-2">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <button onClick={() => { onNavigate('home'); setIsOpen(false); }} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm font-medium w-full text-left">
               Home
             </button>
            {['About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">
                {item}
              </a>
            ))}
            
            {/* UPDATED: Mobile Login Button */}
            <button 
              onClick={() => { onNavigate('login'); setIsOpen(false); }}
              className="w-full mt-4 bg-lime-400 text-black px-3 py-2 rounded-md text-sm font-bold hover:bg-lime-300 transition-colors"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;