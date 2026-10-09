import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Instagram, Facebook, Youtube, Share2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/waterparkData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'slides' | 'pools' | 'family' | 'dining'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#F5FAFC] relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-1 bg-[#087EA4] rounded-full" />
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#087EA4] uppercase">
                GUEST MOMENTS & SHOTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#062A45] tracking-tight mb-4">
              MEMORIES IN MOTION
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore authentic glimpses of high-speed rushes, golden sun reflections, family smiles, and tropical fun captured across the park.
            </p>
          </div>

          {/* Gallery Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/80 rounded-full overflow-x-auto shrink-0">
            {(['all', 'slides', 'pools', 'family', 'dining'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold capitalize transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#062A45] text-white shadow-sm'
                    : 'text-slate-700 hover:text-[#062A45]'
                }`}
              >
                {cat === 'all' ? 'All Snaps' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxIndex(index);
                }
              }}
              className="group relative overflow-hidden rounded-3xl bg-slate-900 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-72 sm:h-80"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />
              
              {/* Hover overlay with zoom icon & title */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#062A45]/90 via-[#062A45]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-left">
                <div className="self-end w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFC928] block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOLLOW THE ADVENTURE Strip */}
        <div className="mt-16 pt-10 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div>
            <h4 className="text-lg font-black text-[#062A45] tracking-tight">
              FOLLOW THE ADVENTURE
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Tag <span className="font-semibold text-[#087EA4]">#AquavistaMemories</span> to be featured on our official big screen & gallery.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#062A45] hover:border-[#062A45] text-xs font-bold transition-all shadow-xs"
            >
              <Instagram className="w-4 h-4 text-pink-600" />
              <span>@aquavistawaterpark</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aquavista Facebook"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#087EA4] hover:bg-[#087EA4] hover:text-white transition-all shadow-xs"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aquavista YouTube"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-xs"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div 
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in"
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors z-20"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors z-20"
            aria-label="Next photo"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          <div 
            onClick={(e) => e.stopPropagation()} 
            className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center text-white max-w-xl">
              <span className="text-xs uppercase tracking-wider text-[#FFC928] font-bold">
                {filteredItems[lightboxIndex].category} · Photo {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="text-lg sm:text-xl font-bold mt-1">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
