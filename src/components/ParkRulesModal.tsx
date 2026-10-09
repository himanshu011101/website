import React, { useState } from 'react';
import { X, ShieldAlert, CheckCircle2, HelpCircle, ChevronDown, ChevronUp, AlertCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data/waterparkData';

interface ParkRulesModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'rules' | 'faqs';
}

export const ParkRulesModal: React.FC<ParkRulesModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'rules'
}) => {
  const [activeTab, setActiveTab] = useState<'rules' | 'faqs'>(defaultTab);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!isOpen) return null;

  const rules = [
    {
      title: 'Swimwear Policy',
      desc: 'Proper synthetic swimwear is required on all slides and pools. Cotton shirts, jeans, and swimwear with exposed metal buckles/zippers are prohibited on body slides to protect slides and riders.'
    },
    {
      title: 'Life Jackets & Flotation',
      desc: 'US Coast Guard-approved life vests are provided free of charge for all non-swimmers and children under 48 inches. Personal Coast Guard-approved vests are permitted; inflatable arm water wings and pool noodles are prohibited in deep pools.'
    },
    {
      title: 'Food & Beverage Rules',
      desc: 'Outside coolers, commercial meals, and glass beverage bottles are not permitted inside the turnstiles. Sealed bottled water and baby formula are welcomed. Certified medical dietary exceptions can be cleared at Guest Relations.'
    },
    {
      title: 'Health & Hygiene Protocols',
      desc: 'Children who are not toilet-trained must wear approved swim diapers underneath their swimsuit at all times. Swim diapers are available for purchase at the gift shop and guest lockers.'
    },
    {
      title: 'Weather & Lightning Safety',
      desc: 'Outdoor water attractions temporarily close if lightning is detected within a 10-mile radius. In the event of prolonged operational suspension (>90 mins), complimentary Rainy Day Return Passes are issued.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200 text-left"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#062A45] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-5 h-5 text-[#FFC928]" />
            <div>
              <h3 className="text-base sm:text-lg font-black tracking-tight">
                PARK RULES & FREQUENTLY ASKED QUESTIONS
              </h3>
              <p className="text-[11px] text-slate-300">Aquavista Guest Safety & Code of Conduct</p>
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

        {/* Tab Toggle */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3">
          <button
            type="button"
            onClick={() => setActiveTab('rules')}
            className={`pb-3 px-4 font-bold text-xs sm:text-sm border-b-2 transition-all ${
              activeTab === 'rules'
                ? 'border-[#062A45] text-[#062A45]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Park Safety Rules (5)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('faqs')}
            className={`pb-3 px-4 font-bold text-xs sm:text-sm border-b-2 transition-all ${
              activeTab === 'faqs'
                ? 'border-[#062A45] text-[#062A45]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Guest FAQs ({FAQS.length})
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 grow">
          {activeTab === 'rules' ? (
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Aquavista operates under international IAAPA aquatic guidelines. Lifeguard instructions must be obeyed at all times for your safety.</span>
              </div>

              {rules.map((rule, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#087EA4]" />
                    <h4 className="text-sm font-bold text-[#062A45]">{rule.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">{rule.desc}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpenFaq = openFaqIndex === idx;
                return (
                  <div key={idx} className="rounded-2xl border border-slate-200 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpenFaq ? null : idx)}
                      className="w-full p-4 text-left font-bold text-xs sm:text-sm text-[#062A45] hover:bg-slate-50 flex items-center justify-between gap-4"
                    >
                      <span>{faq.question}</span>
                      {isOpenFaq ? (
                        <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>
                    {isOpenFaq && (
                      <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed bg-slate-50/50 border-t border-slate-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-200 flex justify-end bg-slate-50">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#062A45] text-white text-xs font-bold hover:bg-[#087EA4] transition-colors"
          >
            I Understand & Close
          </button>
        </div>

      </div>
    </div>
  );
};
