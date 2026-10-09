import React, { useState } from 'react';
import { X, MapPin, Compass, Navigation, Waves, Utensils, Shield, HeartPulse, Sparkles } from 'lucide-react';

interface ParkMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ParkMapModal: React.FC<ParkMapModalProps> = ({ isOpen, onClose, onOpenBooking }) => {
  const [activeZone, setActiveZone] = useState<'all' | 'thrill' | 'lagoon' | 'kids' | 'dining'>('all');

  if (!isOpen) return null;

  const zones = [
    {
      id: 'thrill',
      name: 'Thrill Mountain',
      color: 'bg-red-500',
      badgeColor: 'text-red-600 bg-red-50',
      description: 'Home to our 75-foot vertical drops: Thunder Rush, Ocean Drop launch pods, and Aqua Racer.',
      rides: ['Thunder Rush Drop', 'Ocean Drop Pods', 'Aqua Racer Multi-Lane', 'Cyclone Vortex']
    },
    {
      id: 'lagoon',
      name: 'Oasis Wave Lagoon & River',
      color: 'bg-blue-500',
      badgeColor: 'text-blue-600 bg-blue-50',
      description: 'The scenic heart of Aquavista with the mega 4-foot wave surge pool and the botanical lazy river.',
      rides: ['Mega Wave Lagoon', 'Botanical Lazy River', 'Sunset Sun Deck', 'Private Teak Cabanas']
    },
    {
      id: 'kids',
      name: 'Splash Fortress & Toddler Reef',
      color: 'bg-amber-500',
      badgeColor: 'text-amber-600 bg-amber-50',
      description: 'Zero-depth interactive splash ground with 1,000-gallon tipping bucket and shallow spray jets.',
      rides: ['Interactive Fortress', '12 Family Slides', 'Tot Splash Lagoon', 'Stroller Parking Hub']
    },
    {
      id: 'dining',
      name: 'The Palm Promenade & Dining',
      color: 'bg-emerald-500',
      badgeColor: 'text-emerald-600 bg-emerald-50',
      description: 'Open-air culinary pavilion with burgers, cocktails, Italian gelato, lockers, and guest services.',
      rides: ['Wavefront Grill', 'Palm Tiki Bar', 'Splash Gelato Stand', 'Central Locker Building']
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200 text-left"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#062A45] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <Compass className="w-5 h-5 text-[#FFC928]" />
            <div>
              <h3 className="text-lg font-black tracking-tight">AQUAVISTA RESORT PARK MAP</h3>
              <p className="text-xs text-slate-300">Interactive Navigation & Grounds Directory</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Interactive Stylized Grounds Map */}
          <div className="relative w-full h-64 sm:h-80 rounded-2xl bg-gradient-to-tr from-[#062A45] via-[#087EA4] to-[#18C8E8] p-6 text-white flex flex-col justify-between overflow-hidden shadow-inner border border-white/20">
            {/* Ambient Water Rings */}
            <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full border border-white/20 pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full border border-white/10 pointer-events-none" />

            {/* Zone Map Pins / Hotspots */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold">
                <Navigation className="w-3.5 h-3.5 text-[#FFC928]" />
                <span>North Entrance & Main Turnstiles</span>
              </div>
              <span className="text-xs text-white/80 font-mono">Scale: 45 Acres Resort Grounds</span>
            </div>

            {/* Visual Zone Markers */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 my-auto">
              {zones.map((zone) => (
                <button
                  key={zone.id}
                  type="button"
                  onClick={() => setActiveZone(zone.id as any)}
                  className={`p-3 rounded-2xl backdrop-blur-md border text-left transition-all ${
                    activeZone === zone.id || activeZone === 'all'
                      ? 'bg-white/25 border-white shadow-lg scale-[1.02]'
                      : 'bg-black/20 border-white/10 opacity-70'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`w-2.5 h-2.5 rounded-full ${zone.color}`} />
                    <span className="text-[11px] font-black uppercase tracking-wider text-white">
                      {zone.name.split(' ')[0]}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-200 line-clamp-1 block">
                    {zone.rides[0]}
                  </span>
                </button>
              ))}
            </div>

            <div className="relative z-10 flex items-center justify-between text-xs text-white/90">
              <span className="flex items-center gap-1.5">
                <HeartPulse className="w-4 h-4 text-rose-300" />
                First Aid Stations at Zone 1 & 4
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#FFC928]" />
                Guard towers every 40 meters
              </span>
            </div>
          </div>

          {/* Zones Directory List */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Resort Zones & Attractions List
              </h4>
              <button
                type="button"
                onClick={() => setActiveZone('all')}
                className="text-xs font-semibold text-[#087EA4] hover:underline"
              >
                Show All Zones
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {zones
                .filter(z => activeZone === 'all' || z.id === activeZone)
                .map((zone) => (
                  <div key={zone.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-3 h-3 rounded-full ${zone.color}`} />
                      <h5 className="font-bold text-sm text-[#062A45]">{zone.name}</h5>
                    </div>
                    <p className="text-xs text-slate-600 mb-3">{zone.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {zone.rides.map((ride, idx) => (
                        <span key={idx} className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                          {ride}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Printed physical waterproof maps are available free at the Guest Services counter.
            </span>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#FFC928] text-[#062A45] font-extrabold text-xs uppercase tracking-wider hover:bg-[#ffd34d] transition-colors"
            >
              Book Admission Tickets
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
