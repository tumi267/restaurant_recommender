'use client'
import React, { useState, useEffect } from 'react';
import { CAROUSEL_ITEMS } from '../../../constants';

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-gray-900">
      {CAROUSEL_ITEMS.map((item, idx) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover scale-105"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 drop-shadow-lg">
              {item.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light">
              {item.subtitle}
            </p>
            <div className="mt-8 flex gap-4">
              <button className="px-8 py-3 bg-rose-600 text-white rounded-full font-semibold hover:bg-rose-700 transition-all transform hover:scale-105">
                Explore Now
              </button>
              <button className="px-8 py-3 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-semibold hover:bg-white/30 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {CAROUSEL_ITEMS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === current ? 'bg-white w-8' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;