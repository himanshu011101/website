import React, { useState } from 'react';
import { Clock, Car, Lock, ShowerHead, HeartPulse, Shield, Utensils, MapPin, Navigation, Compass, Info } from 'lucide-react';

interface VisitorInfoProps {
  onOpenMap: () => void;
  onOpenRules: () => void;
}

export const VisitorInfo: React.FC<VisitorInfoProps> = ({ onOpenMap, onOpenRules }) => {
  const facilities = [
    { name: 'Digital Lockers', desc: 'RFID wristband access', icon: Lock },
    { name: 'Changing Rooms', desc: 'Spacious & climate-controlled', icon: Navigation },
    { name: 'Heated Showers', desc: 'Private indoor stalls', icon: ShowerHead },
    { name: 'First Aid Station', desc: 'Paramedics on-site', icon: HeartPulse },
    { name: 'Certified Lifeguards', desc: 'Red Cross certified', icon: Shield },
    { name: 'Restaurants & Cafes', desc: 'Poolside dining pavilions', icon: Utensils }
  ];

  return (
    <section id="visitor-info" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-8 h-1 bg-[#087EA4] rounded-full" />
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#087EA4] uppercase">
              PLAN YOUR VISIT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#062A45] tracking-tight mb-4">
            VISITOR INFORMATION
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Everything you need for a frictionless, stress-free day of adventure in the sun.
          </p>
        </div>

        {/* 4 Core Pillars: Hours, Parking, Location, Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          
          {/* Pillar 1: Hours */}
          <div className="p-7 rounded-3xl bg-[#F5FAFC] border border-slate-200/80 text-left flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#087EA4]/10 text-[#087EA4] flex items-center justify-center mb-5">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#087EA4] uppercase tracking-wider block mb-1">
                Daily Operations
              </span>
              <h3 className="text-xl font-black text-[#062A45] mb-2">
                OPENING HOURS
              </h3>
              <p className="text-2xl font-bold font-mono text-[#062A45] mb-3">
                10:00 AM — 7:00 PM
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Open 7 days a week. Sunset Splash extended sessions on Friday & Saturday until 9:00 PM.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-semibold text-emerald-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Park Open Today</span>
            </div>
          </div>

          {/* Pillar 2: Parking */}
          <div className="p-7 rounded-3xl bg-[#F5FAFC] border border-slate-200/80 text-left flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFC928]/20 text-[#062A45] flex items-center justify-center mb-5">
                <Car className="w-6 h-6 text-[#062A45]" />
              </div>
              <span className="text-xs font-bold text-[#087EA4] uppercase tracking-wider block mb-1">
                Guest Arrival
              </span>
              <h3 className="text-xl font-black text-[#062A45] mb-2">
                PARKING
              </h3>
              <p className="text-2xl font-bold font-mono text-[#062A45] mb-3">
                FREE VISITOR PARKING
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Over 2,500 complimentary parking bays. Dedicated handicap stalls, bus parking, and 16 EV rapid charging stations.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-slate-600">
              Easy highway off-ramp access
            </div>
          </div>

          {/* Pillar 3: Location */}
          <div className="p-7 rounded-3xl bg-[#F5FAFC] border border-slate-200/80 text-left flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#18C8E8]/20 text-[#087EA4] flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#087EA4] uppercase tracking-wider block mb-1">
                Destination
              </span>
              <h3 className="text-xl font-black text-[#062A45] mb-2">
                LOCATION
              </h3>
              <p className="text-base font-bold text-[#062A45] mb-1">
                Aquavista Waterpark
              </p>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                1200 Palm Reef Boulevard, Marina Coastal Bay, CA 90291
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Just 20 minutes from the airport and 10 minutes from coastal resort hotels.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#087EA4] hover:text-[#062A45] underline flex items-center gap-1"
              >
                <span>Get Driving Directions</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Pillar 4: Park Map & Guide Action */}
          <div className="p-7 rounded-3xl bg-[#062A45] text-white text-left flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#FFC928] flex items-center justify-center mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#FFC928] uppercase tracking-wider block mb-1">
                Explore The Grounds
              </span>
              <h3 className="text-xl font-black text-white mb-2">
                INTERACTIVE MAP
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Navigate all 4 zones: Thrill Mountain, Oasis Lagoon, Kids Splash Fortress, and Palm Promenade.
              </p>
            </div>
            <div className="space-y-2 mt-4">
              <button
                type="button"
                onClick={onOpenMap}
                className="w-full py-3 rounded-full bg-[#FFC928] text-[#062A45] font-extrabold text-xs uppercase tracking-wider hover:bg-[#ffd34d] transition-colors"
              >
                View Park Map
              </button>
              <button
                type="button"
                onClick={onOpenRules}
                className="w-full py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-xs transition-colors"
              >
                Park Rules & Safety
              </button>
            </div>
          </div>

        </div>

        {/* Facilities Grid */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-black text-[#062A45]">
                RESORT FACILITIES & AMENITIES
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Designed for optimal comfort and accessibility during your visit.
              </p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#087EA4]/10 text-[#087EA4]">
              ADA Accessible
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {facilities.map((fac, idx) => {
              const Icon = fac.icon;
              return (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-[#087EA4]/10 text-[#087EA4] flex items-center justify-center mb-2.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#062A45] mb-0.5">
                    {fac.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    {fac.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
