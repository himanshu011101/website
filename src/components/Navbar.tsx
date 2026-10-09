import React, { useState, useEffect } from 'react';
import { Ticket, Search, Menu, X, Compass, Clock, Waves } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (ticketId?: string) => void;
  onOpenSearch: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenSearch,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Attractions', href: '#attractions', id: 'attractions' },
    { label: 'Tickets', href: '#tickets', id: 'tickets' },
    { label: 'Experiences', href: '#experiences', id: 'experiences' },
    { label: 'Dining', href: '#dining', id: 'dining' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'About', href: '#why-aquavista', id: 'why-aquavista' },
    { label: 'Contact', href: '#visitor-info', id: 'visitor-info' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <div 
        className={`w-full max-w-[1360px] h-[72px] md:h-[80px] rounded-full px-4 sm:px-6 md:px-8 flex items-center justify-between pointer-events-auto transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#062A45]/90 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/40' 
            : 'bg-[#062A45]/70 backdrop-blur-lg border border-white/15 shadow-xl shadow-black/25'
        }`}
      >
        {/* LEFT: Aquavista Logo */}
        <a 
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC928] rounded-full py-1"
        >
          {/* Wave Icon Badge */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#087EA4] to-[#18C8E8] flex items-center justify-center shadow-md shadow-[#18C8E8]/20 group-hover:scale-105 transition-transform duration-200">
            <Waves className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.5} />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-base sm:text-lg font-extrabold tracking-wider text-white leading-tight">
              AQUAVISTA
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] font-semibold text-[#18C8E8] uppercase -mt-0.5">
              WATERPARK
            </span>
          </div>
        </a>

        {/* CENTER: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  isActive ? 'text-white font-semibold' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#FFC928] rounded-full transition-all duration-300 shadow-sm shadow-[#FFC928]/40" />
                )}
              </a>
            );
          })}
        </nav>

        {/* RIGHT: Search + Book Tickets */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Park Hours Badge (Desktop only) */}
          <div className="hidden xl:flex items-center gap-1.5 text-xs text-white/80 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
            <Clock className="w-3.5 h-3.5 text-[#FFC928]" />
            <span>Open Today: 10AM–7PM</span>
          </div>

          {/* Search Trigger */}
          <button
            type="button"
            onClick={onOpenSearch}
            aria-label="Search attractions and info"
            className="w-10 h-10 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-white/15 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC928]"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Yellow Book Tickets CTA */}
          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="group relative inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#FFC928] text-[#062A45] font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#FFC928]/25 hover:bg-[#ffd34d] hover:shadow-xl hover:shadow-[#FFC928]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FFC928]"
          >
            <Ticket className="w-4 h-4 text-[#062A45] group-hover:rotate-12 transition-transform duration-200" />
            <span>BOOK TICKETS</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-white bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC928]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-24 left-4 right-4 bg-[#062A45]/95 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl shadow-black/60 pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2 text-white">
              <Compass className="w-4 h-4 text-[#FFC928]" />
              <span className="text-xs uppercase tracking-wider text-white/70">Park Navigation</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#18C8E8]">
              <Clock className="w-3.5 h-3.5" />
              <span>10:00 AM – 7:00 PM</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 my-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-[#18C8E8]/20 text-[#18C8E8] font-bold border border-[#18C8E8]/30' 
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-full bg-[#FFC928] text-[#062A45] font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#FFC928]/30 active:scale-[0.98] transition-transform"
            >
              <Ticket className="w-4 h-4" />
              <span>BOOK YOUR TICKETS NOW</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full py-2.5 rounded-full bg-white/10 text-white font-medium text-xs flex items-center justify-center gap-2 hover:bg-white/15 transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Search park attractions & dining</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
