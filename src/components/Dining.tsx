import React, { useState } from 'react';
import { Utensils, Coffee, IceCream, Wine, ArrowRight, Clock, Star, Sparkles } from 'lucide-react';
import { DINING_VENUES } from '../data/waterparkData';
import diningCoverImg from '@/src/assets/images/dining_tropical_refuel_1790662878929.jpg';

interface DiningProps {
  onOpenBooking: () => void;
}

export const Dining: React.FC<DiningProps> = ({ onOpenBooking }) => {
  const [activeVenue, setActiveVenue] = useState(DINING_VENUES[0].id);
  const [showFullMenu, setShowFullMenu] = useState(false);

  const currentVenue = DINING_VENUES.find(v => v.id === activeVenue) || DINING_VENUES[0];

  return (
    <section id="dining" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-1 bg-[#087EA4] rounded-full" />
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#087EA4] uppercase">
                RESORT CULINARY EXPERIENCES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#062A45] tracking-tight mb-4">
              REFUEL YOUR ADVENTURE
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              From gourmet poolside smash burgers and fresh coastal poke bowls to tropical smoothies and hand-churned gelato, savor elevated flavors across our sunny pavilions.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowFullMenu(true)}
            className="self-start md:self-end inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#062A45] text-white hover:bg-[#087EA4] font-bold text-sm tracking-wide shadow-md transition-all shrink-0"
          >
            <span>EXPLORE ALL DINING</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Large Image-Based Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Column: Big Hero Food Photography */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] rounded-3xl overflow-hidden shadow-xl">
            <img
              src={diningCoverImg}
              alt="Gourmet poolside burgers, golden crispy fries, tropical smoothies and coconut mocktails at Aquavista"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#062A45]/90 via-[#062A45]/30 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 text-left text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC928] text-[#062A45] font-extrabold text-xs uppercase tracking-wider mb-2">
                Fresh & Locally Sourced
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
                Artisanal Bites & Island Cocktails
              </h3>
              <p className="text-sm text-slate-200 line-clamp-2 max-w-lg">
                Enjoy open-air teak terraces with views of Wave Lagoon and the swaying palms while refuel with freshly prepared resort favorites.
              </p>
            </div>
          </div>

          {/* Right Column: Venue Tabs & Menu Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-[#F5FAFC] border border-slate-200/80 p-6 sm:p-8 text-left">
            <div>
              {/* Venue Selector Segmented Buttons */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {DINING_VENUES.map((v) => {
                  const isActive = activeVenue === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setActiveVenue(v.id)}
                      className={`p-2.5 rounded-xl text-xs font-bold transition-all text-center ${
                        isActive
                          ? 'bg-[#062A45] text-white shadow-sm'
                          : 'bg-white text-slate-700 hover:bg-slate-200/60 border border-slate-200'
                      }`}
                    >
                      {v.name.split(' ')[0]}
                    </button>
                  );
                })}
              </div>

              {/* Active Venue Details */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs text-[#087EA4] font-semibold uppercase tracking-wider mb-1">
                  <span>{currentVenue.category}</span>
                  <div className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{currentVenue.hours}</span>
                  </div>
                </div>
                <h4 className="text-xl font-black text-[#062A45] mb-2">
                  {currentVenue.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {currentVenue.description}
                </p>
              </div>

              {/* Popular Menu Items */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Featured Specialties:
                </span>
                {currentVenue.popularItems.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between gap-4">
                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#062A45]">{item.name}</span>
                        {item.tag && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#18C8E8]/15 text-[#087EA4]">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{item.description}</p>
                    </div>
                    <span className="font-mono font-bold text-sm text-[#062A45] shrink-0">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">
                Mobile order pickup available via park app
              </span>
              <button
                type="button"
                onClick={() => setShowFullMenu(true)}
                className="text-xs font-bold text-[#087EA4] hover:text-[#062A45] underline flex items-center gap-1"
              >
                <span>View Full Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Full Dining Menu Modal */}
      {showFullMenu && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl text-left relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <div>
                <span className="text-xs font-bold text-[#087EA4] uppercase tracking-wider">
                  Aquavista Resort Menus
                </span>
                <h3 className="text-2xl font-black text-[#062A45]">
                  Dining & Refreshments Directory
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowFullMenu(false)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-8">
              {DINING_VENUES.map((venue) => (
                <div key={venue.id} className="pb-6 border-b border-slate-100 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-black text-[#062A45]">{venue.name}</h4>
                    <span className="text-xs text-slate-500 font-mono">{venue.hours}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mb-4">{venue.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {venue.popularItems.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-between">
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-[#062A45]">{item.name}</div>
                          <div className="text-[11px] text-slate-500">{item.description}</div>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#087EA4] ml-2">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">All prices include local hospitality taxes. Vegetarian, halal & gluten-free options marked.</span>
              <button
                type="button"
                onClick={() => setShowFullMenu(false)}
                className="px-5 py-2.5 rounded-full bg-[#062A45] text-white text-xs font-bold"
              >
                Close Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
