/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Attractions } from './components/Attractions';
import { WhyAquavista } from './components/WhyAquavista';
import { Experiences } from './components/Experiences';
import { Tickets } from './components/Tickets';
import { Dining } from './components/Dining';
import { Gallery } from './components/Gallery';
import { VisitorInfo } from './components/VisitorInfo';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

import { BookingModal } from './components/BookingModal';
import { SearchModal } from './components/SearchModal';
import { AttractionModal } from './components/AttractionModal';
import { ParkMapModal } from './components/ParkMapModal';
import { ParkRulesModal } from './components/ParkRulesModal';

import { TicketCategory, Attraction } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedTicketType, setSelectedTicketType] = useState<TicketCategory>('day-pass');
  
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);
  const [parkMapOpen, setParkMapOpen] = useState(false);
  
  const [rulesModalOpen, setRulesModalOpen] = useState(false);
  const [rulesDefaultTab, setRulesDefaultTab] = useState<'rules' | 'faqs'>('rules');

  // Track active section for top navbar underline
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'attractions', 'tickets', 'experiences', 'dining', 'gallery', 'why-aquavista', 'visitor-info'];
      const scrollPos = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (ticketId?: string) => {
    if (ticketId && (ticketId === 'day-pass' || ticketId === 'family-pass' || ticketId === 'premium-pass')) {
      setSelectedTicketType(ticketId as TicketCategory);
    }
    setBookingModalOpen(true);
  };

  const handleExplorePark = () => {
    const el = document.getElementById('attractions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlanVisit = () => {
    const el = document.getElementById('visitor-info');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenFaqs = () => {
    setRulesDefaultTab('faqs');
    setRulesModalOpen(true);
  };

  const handleOpenRules = () => {
    setRulesDefaultTab('rules');
    setRulesModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F5FAFC] text-[#062A45] flex flex-col font-sans selection:bg-[#FFC928] selection:text-[#062A45]">
      {/* Floating Glassmorphism Navbar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenSearch={() => setSearchModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Page Content */}
      <main className="grow">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExplorePark={handleExplorePark}
        />

        {/* Section 2: Featured Attractions */}
        <Attractions
          onSelectAttraction={(attraction) => setSelectedAttraction(attraction)}
          onBookNow={() => handleOpenBooking()}
        />

        {/* Section 3: Why Aquavista */}
        <WhyAquavista />

        {/* Section 4: Experiences */}
        <Experiences
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Section 5: Tickets */}
        <Tickets
          onSelectTicket={(ticketId) => handleOpenBooking(ticketId)}
        />

        {/* Section 6: Dining */}
        <Dining
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Section 7: Gallery */}
        <Gallery />

        {/* Section 8: Visitor Information */}
        <VisitorInfo
          onOpenMap={() => setParkMapOpen(true)}
          onOpenRules={handleOpenRules}
        />

        {/* Section 9: Testimonials */}
        <Testimonials />

        {/* Section 10: Final CTA */}
        <FinalCTA
          onOpenBooking={() => handleOpenBooking()}
          onPlanVisit={handlePlanVisit}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenRules={handleOpenRules}
        onOpenFaq={handleOpenFaqs}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialTicketType={selectedTicketType}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectAttraction={(attraction) => setSelectedAttraction(attraction)}
        onSelectTicket={() => handleOpenBooking()}
      />

      <AttractionModal
        attraction={selectedAttraction}
        onClose={() => setSelectedAttraction(null)}
        onBookNow={() => handleOpenBooking()}
      />

      <ParkMapModal
        isOpen={parkMapOpen}
        onClose={() => setParkMapOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />

      <ParkRulesModal
        isOpen={rulesModalOpen}
        onClose={() => setRulesModalOpen(false)}
        defaultTab={rulesDefaultTab}
      />
    </div>
  );
}
