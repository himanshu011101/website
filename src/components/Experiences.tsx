import React, { useState } from 'react';
import { ArrowRight, Check, Compass, Users } from 'lucide-react';
import { EXPERIENCES } from '../data/waterparkData';
import { Experience } from '../types';

interface ExperiencesProps {
  onOpenBooking: () => void;
}

export const Experiences: React.FC<ExperiencesProps> = ({ onOpenBooking }) => {
  const [activeExperience, setActiveExperience] = useState<string>(EXPERIENCES[0].id);

  const selected = EXPERIENCES.find(e => e.id === activeExperience) || EXPERIENCES[0];

  return (
    <section id="experiences" className="py-20 md:py-28 bg-[#062A45] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#087EA4]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#18C8E8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16 text-left">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-8 h-1 bg-[#FFC928] rounded-full" />
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#FFC928] uppercase">
              TAILORED PARK EXPERIENCES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            MORE THAN A WATERPARK
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Whether you crave high-altitude adrenaline, gentle sun-soaked relaxation, or joyful splashes with toddlers, our curated zones make every visit unforgettable.
          </p>
        </div>

        {/* Dynamic Experience Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {EXPERIENCES.map((exp) => {
            const isActive = activeExperience === exp.id;
            return (
              <button
                key={exp.id}
                type="button"
                onClick={() => setActiveExperience(exp.id)}
                className={`px-5 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all whitespace-nowrap flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#FFC928] text-[#062A45] shadow-lg shadow-[#FFC928]/30 scale-105'
                    : 'bg-white/10 text-white/80 hover:bg-white/15 hover:text-white border border-white/10'
                }`}
              >
                <span>{exp.title}</span>
              </button>
            );
          })}
        </div>

        {/* Large Featured Editorial Experience Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl bg-white/[0.04] border border-white/10 p-6 sm:p-8 lg:p-10 backdrop-blur-sm">
          
          {/* Left Column: Editorial Details */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#18C8E8] mb-3">
                <Users className="w-4 h-4" />
                <span>{selected.audience}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
                {selected.title}
              </h3>
              <p className="text-lg text-[#FFC928] font-medium mb-4">
                {selected.subtitle}
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                {selected.description}
              </p>

              {/* Highlights checklist */}
              <div className="space-y-3 mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  What’s Included in this Experience:
                </span>
                {selected.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-[#18C8E8]/20 text-[#18C8E8] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-full bg-[#FFC928] text-[#062A45] font-extrabold text-sm tracking-wide shadow-lg shadow-[#FFC928]/30 hover:bg-[#ffd34d] hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <span>Book This Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-slate-400">
                Included with all General & Family Passes
              </span>
            </div>
          </div>

          {/* Right Column: Visual Large Image with Overlay */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[440px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#062A45]/85 via-transparent to-black/20" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 text-left">
              <span className="text-xs text-[#FFC928] font-bold uppercase tracking-wider block">
                Featured Zone
              </span>
              <span className="text-white font-semibold text-sm sm:text-base">
                Discover thrilling rides, tranquil watercourses & shaded cabanas.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
