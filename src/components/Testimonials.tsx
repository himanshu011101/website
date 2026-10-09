import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/waterparkData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 md:py-28 bg-[#F5FAFC] relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[3px] bg-[#087EA4] rounded-full" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#087EA4] uppercase">
              AUTHENTIC VISITOR REVIEWS
            </span>
            <span className="w-6 h-[3px] bg-[#087EA4] rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#062A45] tracking-tight mb-4">
            VOICES FROM THE SPLASH
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Discover why over 350,000 thrill-seekers and families choose Aquavista as their favorite coastal destination every year.
          </p>
        </div>

        {/* Carousel Card Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 md:p-16 shadow-xl shadow-slate-900/5 text-left">
            <Quote className="w-12 h-12 text-[#18C8E8]/30 mb-6" />

            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FFC928] text-[#FFC928]" />
              ))}
              <span className="text-xs font-bold text-slate-400 ml-2 font-mono">
                5.0 Verified Visit
              </span>
            </div>

            {/* Review Comment */}
            <blockquote className="text-lg sm:text-2xl font-medium text-[#062A45] leading-relaxed mb-8">
              "{current.comment}"
            </blockquote>

            {/* Author Lockup */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100 flex-wrap gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#062A45] to-[#087EA4] text-white flex items-center justify-center font-black text-sm tracking-wider shadow-md">
                  {current.avatarText}
                </div>
                <div>
                  <h4 className="text-base font-black text-[#062A45]">
                    {current.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="text-[#087EA4] font-semibold">{current.visitorType}</span>
                    <span>·</span>
                    <span>{current.role}</span>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#062A45] hover:text-white text-slate-700 flex items-center justify-center transition-colors focus:outline-none"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#062A45] hover:text-white text-slate-700 flex items-center justify-center transition-colors focus:outline-none"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-[#087EA4]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
