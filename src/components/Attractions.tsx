import React, { useState } from 'react';
import { ArrowRight, Zap, Users, Waves, ShieldCheck, Compass, Sparkles } from 'lucide-react';
import { ATTRACTIONS } from '../data/waterparkData';
import { Attraction } from '../types';

interface AttractionsProps {
  onSelectAttraction: (attraction: Attraction) => void;
  onBookNow: () => void;
}

export const Attractions: React.FC<AttractionsProps> = ({ onSelectAttraction, onBookNow }) => {
  const [filter, setFilter] = useState<'all' | 'thrill' | 'family' | 'pool'>('all');

  const filteredAttractions = filter === 'all' 
    ? ATTRACTIONS 
    : ATTRACTIONS.filter(item => item.category === filter);

  return (
    <section id="attractions" className="py-20 md:py-28 bg-[#F5FAFC] relative overflow-hidden">
      {/* Decorative background water waves / subtle textures */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#062A45]/10 to-transparent pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-1 bg-[#087EA4] rounded-full" />
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#087EA4] uppercase">
                WORLD-CLASS WATER RIDES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#062A45] tracking-tight mb-4">
              UNLEASH THE ADVENTURE
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              From high-speed slides to relaxing family pools, discover an attraction for every kind of adventurer.
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented Control conforming to skill guidelines) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/80 rounded-full overflow-x-auto shrink-0 max-w-full">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-[#062A45] text-white shadow-md'
                  : 'text-slate-700 hover:text-[#062A45] hover:bg-slate-300/60'
              }`}
            >
              All Attractions ({ATTRACTIONS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('thrill')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                filter === 'thrill'
                  ? 'bg-[#062A45] text-white shadow-md'
                  : 'text-slate-700 hover:text-[#062A45] hover:bg-slate-300/60'
              }`}
            >
              Thrill Rides
            </button>
            <button
              type="button"
              onClick={() => setFilter('family')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                filter === 'family'
                  ? 'bg-[#062A45] text-white shadow-md'
                  : 'text-slate-700 hover:text-[#062A45] hover:bg-slate-300/60'
              }`}
            >
              Family Fun
            </button>
            <button
              type="button"
              onClick={() => setFilter('pool')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                filter === 'pool'
                  ? 'bg-[#062A45] text-white shadow-md'
                  : 'text-slate-700 hover:text-[#062A45] hover:bg-slate-300/60'
              }`}
            >
              Pools & Float
            </button>
          </div>
        </div>

        {/* Asymmetric Grid: First item large marquee card, remaining cards in dynamic responsive columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredAttractions.map((attraction, index) => {
            const isMarquee = index === 0 && filter === 'all';

            return (
              <div
                key={attraction.id}
                onClick={() => onSelectAttraction(attraction)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectAttraction(attraction);
                  }
                }}
                className={`group relative overflow-hidden rounded-3xl bg-[#062A45] shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#087EA4]/20 cursor-pointer flex flex-col justify-end ${
                  isMarquee ? 'md:col-span-2 min-h-[460px] lg:min-h-[500px]' : 'min-h-[400px]'
                }`}
              >
                {/* Background Image with subtle zoom on hover */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* High contrast gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062A45] via-[#062A45]/60 to-transparent opacity-95 group-hover:opacity-90 transition-opacity" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end text-left h-full">
                  
                  {/* Clean unboxed metadata row */}
                  <div className="flex items-center gap-2.5 text-xs text-[#18C8E8] font-semibold uppercase tracking-wider mb-2.5">
                    <span>{attraction.categoryLabel}</span>
                    <span aria-hidden="true" className="text-white/40">·</span>
                    <span className="text-white/80">{attraction.thrillLevel} Thrill</span>
                    <span aria-hidden="true" className="text-white/40">·</span>
                    <span className="text-white/80">Min: {attraction.minHeight}</span>
                  </div>

                  {/* Attraction Name */}
                  <h3 className={`font-black text-white tracking-tight mb-2 ${
                    isMarquee ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'
                  }`}>
                    {attraction.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed mb-6 line-clamp-2 max-w-xl">
                    {attraction.description}
                  </p>

                  {/* Card Bottom: Feature highlights + interactive arrow CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/15">
                    <div className="flex items-center gap-2 text-xs font-semibold text-white/80">
                      <span className="text-[#FFC928]">Top Speed:</span>
                      <span className="text-white font-mono">{attraction.speed}</span>
                    </div>

                    <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FFC928] group-hover:text-white transition-colors">
                      <span>Explore Attraction</span>
                      <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-[#FFC928] group-hover:text-[#062A45] transition-all duration-200">
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Quick Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#087EA4]/10 text-[#087EA4] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#062A45]">
                Need Height & Safety Information?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                All 20+ rides are inspected daily by international aquatic certified engineers. Free life jackets provided.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onBookNow}
            className="w-full md:w-auto px-6 py-3 rounded-full bg-[#062A45] text-white hover:bg-[#087EA4] text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md shrink-0 flex items-center justify-center gap-2"
          >
            <span>Book Tickets For All Rides</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
