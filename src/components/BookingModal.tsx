import React, { useState } from 'react';
import { X, Calendar, Users, Ticket, Check, ShieldCheck, ArrowRight, ArrowLeft, QrCode, Sparkles, Plus, Minus } from 'lucide-react';
import { TicketCategory } from '../types';
import { TICKETS } from '../data/waterparkData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTicketType?: TicketCategory;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTicketType = 'day-pass'
}) => {
  const [ticketType, setTicketType] = useState<TicketCategory>(initialTicketType);
  const [selectedDate, setSelectedDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [addLocker, setAddLocker] = useState(false);
  const [addFastTrack, setAddFastTrack] = useState(false);
  const [addMealBands, setAddMealBands] = useState(false);

  const [step, setStep] = useState<'configure' | 'details' | 'confirmed'>('configure');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  // Selected base ticket price calculation
  const currentTicket = TICKETS.find(t => t.id === ticketType) || TICKETS[0];
  
  let basePrice = 0;
  if (ticketType === 'family-pass') {
    // Flat family pass covers 2 adults + 2 children
    basePrice = currentTicket.price;
  } else {
    // Per person pricing: adults + children ($35 child rate)
    basePrice = (adults * currentTicket.price) + (children * Math.max(25, currentTicket.price - 14));
  }

  const lockerCost = addLocker ? 12 : 0;
  const fastTrackCost = addFastTrack ? (adults + children) * 20 : 0;
  const mealCost = addMealBands ? (adults + children) * 18 : 0;
  const subtotal = basePrice + lockerCost + fastTrackCost + mealCost;
  const tax = Math.round(subtotal * 0.08 * 100) / 100;
  const grandTotal = Math.round((subtotal + tax) * 100) / 100;

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = 'AQV-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomCode);
    setStep('confirmed');
  };

  const handleResetAndClose = () => {
    setStep('configure');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200 text-left relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#062A45] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#FFC928] text-[#062A45] flex items-center justify-center font-bold">
              <Ticket className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black tracking-wide">
                BOOK PARK ADMISSION
              </h3>
              <p className="text-[11px] text-slate-300">
                Official Aquavista Waterpark Secure Reservation
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto grow">

          {/* STEP 1: CONFIGURE */}
          {step === 'configure' && (
            <div className="space-y-6">
              
              {/* Ticket Type Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  1. Select Admission Package
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {TICKETS.map((t) => {
                    const isSelected = ticketType === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTicketType(t.id)}
                        className={`p-3.5 rounded-2xl border text-left transition-all relative ${
                          isSelected
                            ? 'border-[#062A45] bg-[#062A45]/5 ring-2 ring-[#062A45]'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {t.badge && (
                          <span className="text-[9px] font-black text-[#087EA4] uppercase tracking-wider block mb-0.5">
                            {t.badge.split('·')[0]}
                          </span>
                        )}
                        <span className="text-sm font-black text-[#062A45] block">
                          {t.name}
                        </span>
                        <span className="text-base font-bold font-mono text-[#087EA4] block mt-1">
                          ${t.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  2. Choose Date of Visit
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={selectedDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#087EA4] font-medium text-sm text-[#062A45]"
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Valid for full operating hours (10:00 AM – 7:00 PM) on the selected date. Free date reschedule up to 24h before.
                </p>
              </div>

              {/* Guest Counts (if not flat family pass) */}
              {ticketType !== 'family-pass' ? (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    3. Number of Guests
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Adults */}
                    <div className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200">
                      <div>
                        <span className="text-sm font-bold text-[#062A45] block">Adults</span>
                        <span className="text-xs text-slate-500">Ages 12+ · ${currentTicket.price}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100 text-[#062A45]"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-mono font-bold text-base w-4 text-center">{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults(adults + 1)}
                          className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100 text-[#062A45]"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Children */}
                    <div className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200">
                      <div>
                        <span className="text-sm font-bold text-[#062A45] block">Children</span>
                        <span className="text-xs text-slate-500">Ages 3-11 · ${Math.max(25, currentTicket.price - 14)}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setChildren(Math.max(0, children - 1))}
                          className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100 text-[#062A45]"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-mono font-bold text-base w-4 text-center">{children}</span>
                        <button
                          type="button"
                          onClick={() => setChildren(children + 1)}
                          className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100 text-[#062A45]"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                  <span className="font-bold block mb-1">Family Pass Inclusions:</span>
                  Admits 2 Adults + up to 2 Children under 12. Includes complimentary Family XL Locker and 15% dining voucher.
                </div>
              )}

              {/* Add-ons & Extras */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  4. Add-ons & Convenience (Optional)
                </label>
                <div className="space-y-2">
                  <label className="flex items-center justify-between p-3 rounded-2xl border border-slate-200 hover:bg-slate-50 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addLocker}
                        onChange={(e) => setAddLocker(e.target.checked)}
                        className="w-4 h-4 rounded text-[#087EA4]"
                      />
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-[#062A45]">All-Day Digital Locker</span>
                        <span className="text-[11px] text-slate-500 block">Unlimited access with RFID wristband</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#062A45]">+$12</span>
                  </label>

                  {ticketType !== 'premium-pass' && (
                    <label className="flex items-center justify-between p-3 rounded-2xl border border-slate-200 hover:bg-slate-50 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={addFastTrack}
                          onChange={(e) => setAddFastTrack(e.target.checked)}
                          className="w-4 h-4 rounded text-[#087EA4]"
                        />
                        <div>
                          <span className="text-xs sm:text-sm font-bold text-[#062A45]">FastTrack Skip-The-Line</span>
                          <span className="text-[11px] text-slate-500 block">Priority queue on all top thrill slides</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#062A45]">+$20 / guest</span>
                    </label>
                  )}

                  <label className="flex items-center justify-between p-3 rounded-2xl border border-slate-200 hover:bg-slate-50 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addMealBands}
                        onChange={(e) => setAddMealBands(e.target.checked)}
                        className="w-4 h-4 rounded text-[#087EA4]"
                      />
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-[#062A45]">Resort Meal & Drink Wristband</span>
                        <span className="text-[11px] text-slate-500 block">Includes 1 meal + snack + refillable cup</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#062A45]">+$18 / guest</span>
                  </label>
                </div>
              </div>

              {/* Live Order Summary Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span>Admission ({ticketType === 'family-pass' ? 'Family Pass' : `${adults} Adults, ${children} Kids`})</span>
                  <span className="font-mono font-semibold">${basePrice.toFixed(2)}</span>
                </div>
                {(addLocker || addFastTrack || addMealBands) && (
                  <div className="flex justify-between text-xs text-slate-600 mb-1">
                    <span>Add-ons Total</span>
                    <span className="font-mono font-semibold">${(lockerCost + fastTrackCost + mealCost).toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-xs text-slate-600 mb-2">
                  <span>State Aquatic & Resort Tax (8%)</span>
                  <span className="font-mono font-semibold">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-black text-[#062A45] pt-2 border-t border-slate-200">
                  <span>Total Amount Due</span>
                  <span className="font-mono text-xl text-[#087EA4]">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Continue to Details Button */}
              <button
                type="button"
                onClick={() => setStep('details')}
                className="w-full py-4 rounded-full bg-[#FFC928] text-[#062A45] font-extrabold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-[#FFC928]/30 hover:bg-[#ffd34d] transition-all"
              >
                <span>Continue to Guest Information</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          )}

          {/* STEP 2: GUEST DETAILS */}
          {step === 'details' && (
            <form onSubmit={handleConfirmBooking} className="space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#087EA4] uppercase tracking-wider mb-2">
                <button
                  type="button"
                  onClick={() => setStep('configure')}
                  className="flex items-center gap-1 hover:underline text-slate-500"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
                <span>·</span>
                <span>Step 2 of 2: Lead Guest Contact</span>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Rivera"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#087EA4] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Email Address (for ticket delivery)
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. jordan@example.com"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#087EA4] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Mobile Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. (555) 234-5678"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#087EA4] text-sm"
                />
              </div>

              <div className="p-4 rounded-2xl bg-[#062A45]/5 border border-[#062A45]/15 text-xs text-[#062A45] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#087EA4] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Instant Digital Pass Guarantee:</span>
                  Your QR-coded e-tickets are generated immediately and backed by our flexible 24-hour weather & reschedule guarantee.
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#062A45] text-white font-extrabold text-sm tracking-wide flex items-center justify-center gap-2 shadow-xl hover:bg-[#087EA4] transition-all"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Confirm Reservation · ${grandTotal.toFixed(2)}</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: CONFIRMED */}
          {step === 'confirmed' && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <Check className="w-8 h-8" strokeWidth={3} />
              </div>

              <div>
                <span className="text-xs font-bold text-[#087EA4] uppercase tracking-wider block mb-1">
                  Reservation Confirmed!
                </span>
                <h3 className="text-2xl font-black text-[#062A45]">
                  You're Ready To Make A Splash!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  A confirmation email with barcode passes has been sent to <span className="font-semibold text-[#062A45]">{customerEmail || 'your email'}</span>.
                </p>
              </div>

              {/* Digital Boarding Pass Card */}
              <div className="p-6 rounded-3xl bg-[#062A45] text-white text-left shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#FFC928]">Aquavista Waterpark</span>
                    <h4 className="text-lg font-black">{currentTicket.name}</h4>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                    <QrCode className="w-6 h-6" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block">Date of Visit</span>
                    <span className="font-bold text-sm text-white font-mono">{selectedDate}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Booking Reference</span>
                    <span className="font-bold text-sm text-[#FFC928] font-mono">{bookingRef}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Guest Lead</span>
                    <span className="font-bold text-white">{customerName || 'Guest'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Party Size</span>
                    <span className="font-bold text-white">
                      {ticketType === 'family-pass' ? 'Family (4 Pass)' : `${adults + children} Guests`}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => alert(`Ticket ${bookingRef} downloaded to your device as PDF!`)}
                  className="w-full py-3.5 rounded-full bg-[#FFC928] text-[#062A45] font-bold text-xs uppercase tracking-wider hover:bg-[#ffd34d]"
                >
                  Download E-Ticket PDF
                </button>
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="w-full py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#062A45] font-bold text-xs"
                >
                  Back to Website
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
