import React from 'react';
import { Check, X, Ticket, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { TICKETS } from '../data/waterparkData';
import { TicketCategory } from '../types';

interface TicketsProps {
  onSelectTicket: (ticketId: TicketCategory) => void;
}

export const Tickets: React.FC<TicketsProps> = ({ onSelectTicket }) => {
  return (
    <section id="tickets" className="py-20 md:py-28 bg-[#F5FAFC] relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[3px] bg-[#087EA4] rounded-full" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#087EA4] uppercase">
              TICKETS & ADMISSION
            </span>
            <span className="w-6 h-[3px] bg-[#087EA4] rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#062A45] tracking-tight mb-4">
            CHOOSE YOUR PERFECT DAY
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Book online in advance to guarantee park entry, unlock exclusive digital savings, and skip gate ticket lines.
          </p>
        </div>

        {/* 3 Ticket Options Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TICKETS.map((ticket) => {
            const isPopular = ticket.popular;

            return (
              <div
                key={ticket.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 sm:p-10 transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#062A45] text-white shadow-2xl shadow-[#062A45]/30 ring-2 ring-[#FFC928] lg:-translate-y-3'
                    : 'bg-white text-[#062A45] border border-slate-200 shadow-lg shadow-slate-900/5 hover:-translate-y-1'
                }`}
              >
                {/* Popular Highlight Badge */}
                {ticket.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FFC928] text-[#062A45] text-xs font-black uppercase tracking-wider shadow-md">
                    {ticket.badge}
                  </div>
                )}

                <div>
                  {/* Card Title & Description */}
                  <div className="text-left mb-6">
                    <h3 className={`text-2xl font-black mb-2 ${isPopular ? 'text-white' : 'text-[#062A45]'}`}>
                      {ticket.name}
                    </h3>
                    <p className={`text-sm leading-relaxed ${isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                      {ticket.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="text-left mb-8 pb-6 border-b border-current/15">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-bold font-mono">$</span>
                      <span className="text-5xl sm:text-6xl font-black font-mono tracking-tight tabular-nums">
                        {ticket.price}
                      </span>
                    </div>
                    <span className={`text-xs uppercase tracking-wider font-semibold block mt-1 ${
                      isPopular ? 'text-[#FFC928]' : 'text-[#087EA4]'
                    }`}>
                      {ticket.period}
                    </span>
                  </div>

                  {/* Inclusions Feature List */}
                  <div className="space-y-3.5 mb-8 text-left">
                    <span className={`text-xs font-bold uppercase tracking-wider block mb-2 ${
                      isPopular ? 'text-slate-300' : 'text-slate-500'
                    }`}>
                      Package Inclusions:
                    </span>
                    {ticket.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isPopular ? 'bg-[#FFC928]/20 text-[#FFC928]' : 'bg-[#087EA4]/10 text-[#087EA4]'
                        }`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className={isPopular ? 'text-slate-100 font-medium' : 'text-slate-700'}>
                          {feature}
                        </span>
                      </div>
                    ))}

                    {/* Non-included features */}
                    {ticket.notIncluded && ticket.notIncluded.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm opacity-50">
                        <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center shrink-0 mt-0.5 text-slate-500">
                          <X className="w-3.5 h-3.5" />
                        </div>
                        <span className={isPopular ? 'text-slate-400' : 'text-slate-500'}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA: BOOK NOW */}
                <button
                  type="button"
                  onClick={() => onSelectTicket(ticket.id)}
                  className={`w-full py-4 rounded-full font-extrabold text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-lg focus:outline-none focus-visible:ring-4 ${
                    isPopular
                      ? 'bg-[#FFC928] text-[#062A45] hover:bg-[#ffd34d] hover:shadow-xl hover:shadow-[#FFC928]/40 active:translate-y-0.5'
                      : 'bg-[#062A45] text-white hover:bg-[#087EA4] hover:shadow-xl active:translate-y-0.5'
                  }`}
                >
                  <Ticket className="w-4 h-4" />
                  <span>BOOK NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Guarantees Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-slate-600 text-xs sm:text-sm font-semibold">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#087EA4]" />
            <span>Rainy Day Guarantee Included</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#087EA4]" />
            <span>Free Date Changes Up to 24h Prior</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#087EA4]" />
            <span>Instant Digital Mobile Tickets</span>
          </div>
        </div>

      </div>
    </section>
  );
};
