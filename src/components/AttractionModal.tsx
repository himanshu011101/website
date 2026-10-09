import React from 'react';
import { X, Zap, Gauge, ArrowRight, ShieldCheck, Ticket, Ruler, Check } from 'lucide-react';
import { Attraction } from '../types';

interface AttractionModalProps {
  attraction: Attraction | null;
  onClose: () => void;
  onBookNow: () => void;
}

export const AttractionModal: React.FC<AttractionModalProps> = ({
  attraction,
  onClose,
  onBookNow
}) => {
  if (!attraction) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200 text-left relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Cover Image & Header */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0">
          <img
            src={attraction.image}
            alt={attraction.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#062A45] via-[#062A45]/40 to-transparent" />
          
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors z-10"
            aria-label="Close attraction view"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-6 right-6 text-white text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFC928] block mb-1">
              {attraction.categoryLabel} · {attraction.thrillLevel} Thrill
            </span>
            <h3 className="text-3xl font-black tracking-tight">{attraction.name}</h3>
            <p className="text-xs sm:text-sm text-slate-200 mt-1">{attraction.tagline}</p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Key Metric Gauges */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Top Speed
              </span>
              <span className="font-mono font-black text-base text-[#062A45]">
                {attraction.speed}
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Min. Height
              </span>
              <span className="font-mono font-bold text-xs text-[#062A45]">
                {attraction.minHeight}
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Thrill Level
              </span>
              <span className="font-bold text-xs text-[#087EA4]">
                {attraction.thrillLevel}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Ride Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {attraction.description}
            </p>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Engineering & Experience Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {attraction.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-[#062A45] font-semibold p-2.5 rounded-xl bg-slate-50">
                  <div className="w-5 h-5 rounded-full bg-[#087EA4]/15 text-[#087EA4] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Notice */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">Safety Guideline:</span>
              Riders must follow lifeguard entry instructions. Loose jewelry, glasses, and phones must be secured in lockers prior to queueing.
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookNow();
              }}
              className="w-full py-4 rounded-full bg-[#FFC928] text-[#062A45] font-extrabold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg hover:bg-[#ffd34d] transition-colors"
            >
              <Ticket className="w-4 h-4" />
              <span>Book Admission For This Ride</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
