import React from 'react';
import { Waves, Phone, Mail, MapPin, Instagram, Facebook, Youtube, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenRules: () => void;
  onOpenFaq: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRules, onOpenFaq, onOpenBooking }) => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#041c2f] text-white pt-20 pb-12 border-t border-white/10 relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 text-left">
        
        {/* Main Grid: Brand + 3 Column Navigation/Info/Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col (2 cols wide on desktop) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#087EA4] to-[#18C8E8] flex items-center justify-center shadow-lg shadow-[#18C8E8]/20">
                <Waves className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-wider text-white">
                  AQUAVISTA
                </span>
                <span className="text-[10px] tracking-[0.25em] font-bold text-[#18C8E8] uppercase -mt-0.5">
                  WATERPARK
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-sm">
              The premier coastal water resort featuring 20+ heart-pounding slides, crystal-clear wave lagoons, family splash zones, and authentic tropical hospitality.
            </p>

            {/* Newsletter quick subscribe */}
            <div className="max-w-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFC928] block mb-2">
                Join the VIP Splash Club
              </span>
              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for joining the Aquavista Splash Club! Check your inbox for your 10% welcome coupon.'); }} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="bg-white/10 border border-white/20 rounded-full px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FFC928] grow"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-[#FFC928] text-[#062A45] text-xs font-bold hover:bg-[#ffd34d] transition-colors shrink-0"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FFC928] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <button type="button" onClick={() => scrollTo('#home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('#attractions')} className="hover:text-white transition-colors">
                  Attractions
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('#tickets')} className="hover:text-white transition-colors">
                  Tickets & Passes
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('#experiences')} className="hover:text-white transition-colors">
                  Experiences
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('#dining')} className="hover:text-white transition-colors">
                  Dining & Drinks
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('#gallery')} className="hover:text-white transition-colors">
                  Photo Gallery
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('#why-aquavista')} className="hover:text-white transition-colors">
                  About Aquavista
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('#visitor-info')} className="hover:text-white transition-colors">
                  Contact & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Information & Policies */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FFC928] mb-5">
              Information
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <button type="button" onClick={onOpenRules} className="hover:text-white transition-colors">
                  Park Rules
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenFaq} className="hover:text-white transition-colors">
                  FAQs
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenRules} className="hover:text-white transition-colors">
                  Safety Guidelines
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenRules} className="hover:text-white transition-colors">
                  Accessibility (ADA)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => alert('Privacy Policy: Aquavista Waterpark respects your personal data and never sells guest information to third parties.')} className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button type="button" onClick={() => alert('Terms of Service: All admissions subject to park rules, height safety regulations, and general operating policies.')} className="hover:text-white transition-colors">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FFC928] mb-5">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#18C8E8] shrink-0 mt-1" />
                <div>
                  <span className="block font-semibold text-white">General Inquiries</span>
                  <a href="tel:+18005557752" className="hover:text-[#FFC928] transition-colors font-mono">
                    (800) 555-SPLASH
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#18C8E8] shrink-0 mt-1" />
                <div>
                  <span className="block font-semibold text-white">Guest Relations</span>
                  <a href="mailto:info@aquavistapark.com" className="hover:text-[#FFC928] transition-colors">
                    info@aquavistapark.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#18C8E8] shrink-0 mt-1" />
                <div>
                  <span className="block font-semibold text-white">Park Grounds</span>
                  <p className="text-xs leading-relaxed text-slate-400">
                    1200 Palm Reef Boulevard<br />
                    Marina Bay Coastal District
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFC928] hover:text-[#062A45] flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFC928] hover:text-[#062A45] flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFC928] hover:text-[#062A45] flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>© 2026 Aquavista Waterpark. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Operating Season: March 15 — November 30</span>
            <span>·</span>
            <span>Official Resort Website</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
