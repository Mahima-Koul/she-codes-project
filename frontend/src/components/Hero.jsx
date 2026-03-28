import React from 'react';

const Hero = () => {
  return (
    <section className="bg-slate-50 min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Discover Government Schemes Built For You
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          An intelligent mapping system helping women find and apply for financial aid effortlessly.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors shadow-sm">
            Check Your Eligibility
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
