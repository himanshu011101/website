import React from 'react';
import { Ticket, ArrowRight, Sun, Users, Sparkles, Droplets } from 'lucide-react';
import heroBgImage from '@/src/assets/images/hero_waterpark_splash_1790662825674.jpg';

interface HeroProps {
  onOpenBooking: () => void;
  onExplorePark: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExplorePark }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[95vh] md:min-h-screen w-full flex items-center justify-start overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20"
    >
      {/* Background Photography Asset */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Aquavista Waterpark thrilled visitors riding colorful water slides with sunny tropical palms"
          className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Cinematic Scrim & Gradient Overlay matching the reference:
            Left side dark navy gradient for high text contrast; right side luminous & vivid */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#062A45]/92 via-[#062A45]/65 to-transparent z-10" 
          aria-hidden="true"
        />
        
        {/* Soft bottom vignette to blend seamlessly into the next section */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#062A45]/80 to-transparent z-10 pointer-events-none" 
          aria-hidden="true"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="max-w-2xl lg:max-w-3xl text-left">
          
          {/* Eyebrow with short yellow horizontal line */}
          <div className="flex items-center gap-3 mb-4 sm:mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
            <span className="w-8 sm:w-12 h-[3.5px] bg-[#FFC928] rounded-full shadow-sm shadow-[#FFC928]/50" />
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.22em] text-white/95 uppercase drop-shadow-sm">
              THE ULTIMATE WATER ADVENTURE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold leading-[1.05] tracking-tight text-white mb-6 drop-shadow-md">
            <span>MAKE A SPLASH.</span>
            <br />
            <span>CREATE </span>
            <span className="font-accent text-[#FFC928] tracking-normal inline-block transform -rotate-1 hover:rotate-0 transition-transform duration-300 drop-shadow-[0_4px_12px_rgba(255,201,40,0.35)]">
              MEMORIES.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 font-normal leading-relaxed mb-8 sm:mb-10 max-w-xl drop-shadow">
            Experience thrilling slides, refreshing pools, exciting attractions and unforgettable moments for the whole family.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10 sm:mb-14">
            {/* Primary CTA: BOOK YOUR TICKETS */}
            <button
              type="button"
              onClick={onOpenBooking}
              className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-4 rounded-full bg-[#FFC928] text-[#062A45] font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-[#FFC928]/30 hover:bg-[#ffd34d] hover:shadow-2xl hover:shadow-[#FFC928]/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC928]/50"
            >
              <Ticket className="w-5 h-5 text-[#062A45] group-hover:rotate-12 transition-transform duration-200" />
              <span>BOOK YOUR TICKETS</span>
              <ArrowRight className="w-5 h-5 text-[#062A45] group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            {/* Secondary CTA: EXPLORE THE PARK */}
            <button
              type="button"
              onClick={onExplorePark}
              className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base tracking-wide border border-white/40 hover:border-white backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
            >
              <span>EXPLORE THE PARK</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Compact Feature Row: 20+ Attractions | Family Friendly | All-Day Adventure */}
          <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 text-white/95">
            {/* Feature 1 */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FFC928]/20 flex items-center justify-center text-[#FFC928]">
                <Droplets className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                20+ Attractions
              </span>
            </div>

            {/* Vertical Divider */}
            <div className="hidden sm:block w-[1px] h-6 bg-white/20" aria-hidden="true" />

            {/* Feature 2 */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FFC928]/20 flex items-center justify-center text-[#FFC928]">
                <Users className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                Family Friendly
              </span>
            </div>

            {/* Vertical Divider */}
            <div className="hidden sm:block w-[1px] h-6 bg-white/20" aria-hidden="true" />

            {/* Feature 3 */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FFC928]/20 flex items-center justify-center text-[#FFC928]">
                <Sun className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                All-Day Adventure
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
