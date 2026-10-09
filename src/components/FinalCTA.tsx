import React from 'react';
import { Ticket, Calendar, ArrowRight, ShieldCheck, Waves } from 'lucide-react';
import heroBgImage from '@/src/assets/images/hero_waterpark_splash_1790662825674.jpg';

interface FinalCTAProps {
  onOpenBooking: () => void;
  onPlanVisit: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking, onPlanVisit }) => {
  return (
    <section className="relative py-28 md:py-36 w-full overflow-hidden flex items-center justify-center">
      {/* Background Photography Asset */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Aquavista Waterpark sunlit splash"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Dark Navy Scrim Overlay */}
        <div className="absolute inset-0 bg-[#062A45]/88 backdrop-blur-[2px]" />
        {/* Subtle accent light */}
        <div className="absolute inset-0 bg-radial from-[#18C8E8]/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center text-white">
        
        {/* Small top badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
          <Waves className="w-4 h-4 text-[#FFC928]" />
          <span className="text-xs font-extrabold uppercase tracking-widest text-white">
            READY TO DIVE IN?
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6 drop-shadow-lg">
          YOUR NEXT ADVENTURE <br className="hidden sm:block" />
          <span className="text-[#FFC928]">STARTS HERE.</span>
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow">
          Bring your family, gather your friends and make a day worth remembering.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FFC928] text-[#062A45] font-extrabold text-base tracking-wide shadow-2xl shadow-[#FFC928]/40 hover:bg-[#ffd34d] hover:-translate-y-1 active:translate-y-0 transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC928]/50"
          >
            <Ticket className="w-5 h-5 text-[#062A45]" />
            <span>BOOK YOUR TICKETS</span>
            <ArrowRight className="w-5 h-5 text-[#062A45]" />
          </button>

          <button
            type="button"
            onClick={onPlanVisit}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-base tracking-wide border border-white/40 hover:border-white backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <Calendar className="w-5 h-5 text-white" />
            <span>PLAN YOUR VISIT</span>
          </button>
        </div>

        {/* Guarantee text */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-300">
          <ShieldCheck className="w-4 h-4 text-[#18C8E8]" />
          <span>Guaranteed best rates online · 100% secure digital tickets</span>
        </div>

      </div>
    </section>
  );
};
