import React, { useState } from 'react';
import { Search, X, ArrowRight, Waves, Utensils, Ticket, Compass } from 'lucide-react';
import { ATTRACTIONS, DINING_VENUES, TICKETS, FAQS } from '../data/waterparkData';
import { Attraction } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAttraction: (attraction: Attraction) => void;
  onSelectTicket: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectAttraction,
  onSelectTicket
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const matchingAttractions = cleanQuery
    ? ATTRACTIONS.filter(a => a.name.toLowerCase().includes(cleanQuery) || a.description.toLowerCase().includes(cleanQuery) || a.categoryLabel.toLowerCase().includes(cleanQuery))
    : [];

  const matchingDining = cleanQuery
    ? DINING_VENUES.filter(d => d.name.toLowerCase().includes(cleanQuery) || d.description.toLowerCase().includes(cleanQuery) || d.popularItems.some(i => i.name.toLowerCase().includes(cleanQuery)))
    : [];

  const matchingFaqs = cleanQuery
    ? FAQS.filter(f => f.question.toLowerCase().includes(cleanQuery) || f.answer.toLowerCase().includes(cleanQuery))
    : [];

  const hasResults = matchingAttractions.length > 0 || matchingDining.length > 0 || matchingFaqs.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-20 sm:pt-24 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200 text-left"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Box */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#087EA4] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search slides, wave pools, tickets, burgers, lockers..."
            className="w-full text-base sm:text-lg font-medium text-[#062A45] placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-6 overflow-y-auto grow space-y-6">
          {!query ? (
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Popular Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {['Thunder Rush', 'Family Pass', 'Wave Lagoon', 'Lockers', 'Burgers & Grill', 'Lifeguards', 'Lazy River'].map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : !hasResults ? (
            <div className="py-12 text-center text-slate-500 text-sm">
              No results found for "{query}". Try searching for "slide", "pool", "family", or "ticket".
            </div>
          ) : (
            <div className="space-y-6">
              {/* Attractions Matches */}
              {matchingAttractions.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#087EA4] uppercase tracking-wider mb-3">
                    <Waves className="w-4 h-4" />
                    <span>Attractions ({matchingAttractions.length})</span>
                  </div>
                  <div className="space-y-2">
                    {matchingAttractions.map(attraction => (
                      <div
                        key={attraction.id}
                        onClick={() => {
                          onClose();
                          onSelectAttraction(attraction);
                        }}
                        className="p-3 rounded-2xl hover:bg-slate-50 border border-slate-100 flex items-center justify-between cursor-pointer group"
                      >
                        <div>
                          <div className="text-sm font-bold text-[#062A45] group-hover:text-[#087EA4] transition-colors">
                            {attraction.name}
                          </div>
                          <div className="text-xs text-slate-500">{attraction.tagline}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#087EA4] group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Dining Matches */}
              {matchingDining.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#087EA4] uppercase tracking-wider mb-3">
                    <Utensils className="w-4 h-4" />
                    <span>Dining Venues ({matchingDining.length})</span>
                  </div>
                  <div className="space-y-2">
                    {matchingDining.map(venue => (
                      <div
                        key={venue.id}
                        onClick={() => {
                          onClose();
                          const el = document.querySelector('#dining');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="p-3 rounded-2xl hover:bg-slate-50 border border-slate-100 flex items-center justify-between cursor-pointer group"
                      >
                        <div>
                          <div className="text-sm font-bold text-[#062A45]">{venue.name}</div>
                          <div className="text-xs text-slate-500">{venue.category}</div>
                        </div>
                        <span className="text-xs text-[#087EA4] font-semibold">View Venue</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ Matches */}
              {matchingFaqs.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#087EA4] uppercase tracking-wider mb-3">
                    <Compass className="w-4 h-4" />
                    <span>Help & Visitor FAQs ({matchingFaqs.length})</span>
                  </div>
                  <div className="space-y-2">
                    {matchingFaqs.map((faq, i) => (
                      <div key={i} className="p-3 rounded-2xl bg-slate-50 border border-slate-200/60">
                        <div className="text-xs sm:text-sm font-bold text-[#062A45]">{faq.question}</div>
                        <div className="text-xs text-slate-600 mt-1">{faq.answer}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
