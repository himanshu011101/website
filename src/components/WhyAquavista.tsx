import React from 'react';
import { Waves, Shield, Users, UtensilsCrossed, Sparkles, Clock, CheckCircle2, Award } from 'lucide-react';

export const WhyAquavista: React.FC = () => {
  const benefits = [
    {
      icon: Waves,
      title: '20+ World-Class Attractions',
      subtitle: 'Engineered for every thrill tier',
      description: 'From 75-foot near-vertical launch pods to gentle botanical lazy rivers, our attractions are designed by world-renowned waterpark architects.'
    },
    {
      icon: Shield,
      title: 'Certified Lifeguards',
      subtitle: 'Red Cross & Ellis certified aquatic team',
      description: 'Over 80 licensed safety professionals stationed across every pool, slide entry, and splash basin, with proactive scanning and first-aid response.'
    },
    {
      icon: Users,
      title: 'Family-Friendly Facilities',
      subtitle: 'Designed with parents & kids in mind',
      description: 'Complimentary Coast Guard-approved life vests in all sizes, private family nursing suites, climate-controlled locker rooms, and zero-entry pools.'
    },
    {
      icon: UtensilsCrossed,
      title: 'Premium Dining',
      subtitle: 'Beyond standard theme park snacks',
      description: 'Handcrafted brioche smash burgers, fresh poke bowls, authentic stone-baked pizza, tropical fruit smoothies, and artisan gelato made daily.'
    },
    {
      icon: Sparkles,
      title: 'Clean & Safe Environment',
      subtitle: 'Advanced multi-stage UV & salt filtration',
      description: 'Our water recirculates through hospital-grade UV purifiers every 90 minutes, maintaining crystal clear purity without harsh chlorine odors.'
    },
    {
      icon: Clock,
      title: 'Full-Day Entertainment',
      subtitle: 'From morning sunshine to sunset wave parties',
      description: 'Non-stop interactive music, wave surge countdowns, kids foam dance parties, and evening twilight splash sessions under tropical illumination.'
    }
  ];

  return (
    <section id="why-aquavista" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[3px] bg-[#087EA4] rounded-full" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#087EA4] uppercase">
              THE AQUAVISTA DIFFERENCE
            </span>
            <span className="w-6 h-[3px] bg-[#087EA4] rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#062A45] tracking-tight mb-5">
            WHY AQUAVISTA?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We combined world-class hydraulic engineering, pristine tropical landscaping, and uncompromising guest hospitality to build the coast's premier water paradise.
          </p>
        </div>

        {/* 6 Clean Editorial Benefits with Whitespace & Minimal Line Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-14">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group flex flex-col text-left transition-all duration-200"
              >
                {/* Minimal line icon in clean circular container */}
                <div className="w-13 h-13 rounded-2xl bg-[#087EA4]/10 text-[#087EA4] flex items-center justify-center mb-5 group-hover:bg-[#062A45] group-hover:text-[#FFC928] transition-colors duration-300">
                  <Icon className="w-6 h-6" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#062A45] mb-1.5 tracking-tight group-hover:text-[#087EA4] transition-colors">
                  {benefit.title}
                </h3>

                {/* Subtitle kicker */}
                <p className="text-xs font-semibold text-[#087EA4] uppercase tracking-wider mb-2.5">
                  {benefit.subtitle}
                </p>

                {/* Body prose */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Concrete Proof Bar (Adjacent evidence compliant with design skill) */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <span className="block text-3xl sm:text-4xl font-extrabold text-[#062A45] font-mono tabular-nums tracking-tight">
              2.5M+
            </span>
            <span className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1 block">
              Gallons Filtered Daily
            </span>
          </div>
          <div>
            <span className="block text-3xl sm:text-4xl font-extrabold text-[#062A45] font-mono tabular-nums tracking-tight">
              100%
            </span>
            <span className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1 block">
              Red Cross Certified Staff
            </span>
          </div>
          <div>
            <span className="block text-3xl sm:text-4xl font-extrabold text-[#062A45] font-mono tabular-nums tracking-tight">
              4.9 / 5
            </span>
            <span className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1 block">
              Guest Satisfaction Rate
            </span>
          </div>
          <div>
            <span className="block text-3xl sm:text-4xl font-extrabold text-[#062A45] font-mono tabular-nums tracking-tight">
              #1
            </span>
            <span className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1 block">
              Family Water Resort 2026
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
