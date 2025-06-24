import React from 'react';

export const HeroBanner: React.FC = () => {
  return (
    <section 
      className="relative w-full h-[90vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-left bg-no-repeat"
      style={{ backgroundImage: `url(/public/hero.jpg)` }}
    >
      <div className="absolute inset-0 bg-black/20 dark:bg-black/60 transition-colors duration-500"></div>
      <div className="relative z-10 text-white w-full h-full">
        <img
          src="/public/indiamap.gif"
          alt="Hero Image"
          className="absolute right-0 bottom-20 h-1/2 lg:h-auto lg:w-1/3 rounded-xl shadow-lg dark:brightness-75 transition-all duration-500"
        />
      </div>
    </section>
  );
};