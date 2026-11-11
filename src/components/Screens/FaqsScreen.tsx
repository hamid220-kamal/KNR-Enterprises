import React, { useState, useMemo } from 'react';
import { Screen, Language } from '../../types';
import { FAQS_DATA } from '../../data/products';
import { TRANSLATIONS } from '../../data/translations';
import {
  Search,
  HelpCircle,
  Plus,
  Minus,
  MessageCircle,
  Phone,
  Clock,
  MapPin,
  FileText,
  CheckCircle2,
  Tag
} from 'lucide-react';

interface FaqsScreenProps {
  onNavigate: (screen: Screen) => void;
  language: Language;
}

export const FaqsScreen: React.FC<FaqsScreenProps> = ({ onNavigate, language }) => {
  const t = TRANSLATIONS[language];
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const categories = [
    'All',
    'Bulk Orders & MOQ',
    'Tenders & Billing',
    'Delivery & Logistics',
    'Payments & Support',
  ];

  const toggleAccordion = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFaqs = useMemo(() => {
    return FAQS_DATA.filter((faq) => {
      if (activeCategory !== 'All' && faq.category !== activeCategory) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesQ = faq.question.toLowerCase().includes(q);
        const matchesTeluguQ = faq.questionTelugu.toLowerCase().includes(q);
        const matchesA = faq.answer.toLowerCase().includes(q);
        const matchesCat = faq.category.toLowerCase().includes(q);
        const matchesTags = faq.tags.some((tag) => tag.toLowerCase().includes(q));
        return matchesQ || matchesTeluguQ || matchesA || matchesCat || matchesTags;
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="space-y-12 pb-16">
      {/* 1. TOP HEADER & BREADCRUMB */}
      <section className="bg-slate-50 border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-3">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">FAQs</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-primary">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>DEPOT HELP & PROCUREMENT KNOWLEDGE BASE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Clear, transparent answers regarding government tenders, bulk municipal pricing, GST invoices, logistics delivery schedules, and payment terms for institutional buyers across Telangana.
            </p>

            {/* Search Input */}
            <div className="pt-4 max-w-xl mx-auto">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions or keywords (e.g. GST, MOQ, Tenders, Bleaching, Delivery)..."
                  aria-label="Search frequently asked questions"
                  className="w-full pl-11 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-2xs transition-all"
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => {
                const isSelected = activeCategory === cat;
                const count =
                  cat === 'All'
                    ? FAQS_DATA.length
                    : FAQS_DATA.filter((f) => f.category === cat).length;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. ACCORDION LIST */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        {filteredFaqs.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
            <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-3 opacity-60" />
            <h3 className="font-bold text-slate-800 text-base">No questions found matching your query</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try searching with different terms or contact our Chevella desk directly for immediate answers.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-3.5">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIds.includes(faq.id);
              const numberStr = (index + 1).toString().padStart(2, '0');

              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all shadow-2xs ${
                    isOpen ? 'border-primary ring-1 ring-primary/20' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-base font-black text-primary shrink-0 mt-0.5">
                        {numberStr}
                      </span>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          {faq.category}
                        </span>
                        <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                          {language === 'te' ? faq.questionTelugu : faq.question}
                        </h3>
                      </div>
                    </div>

                    <div className="p-1 rounded-full bg-slate-100 text-slate-600 shrink-0 mt-1">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      className="px-6 pb-6 pt-0 border-t border-slate-100 mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed"
                    >
                      <p className="pt-3">{faq.answer}</p>

                      {faq.tags && faq.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-slate-100">
                          {faq.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 text-[11px] font-medium px-2.5 py-1 rounded-md"
                            >
                              <Tag className="w-3 h-3 text-primary" />
                              <span>{tag}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 3. BOTTOM CHEVELLA DIRECT HELPDESK CARD */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wider block">
              CHEVELLA DIRECT HELPDESK
            </span>
            <h4 className="text-lg font-bold text-slate-900">
              Still have questions or need tender documents?
            </h4>
            <p className="text-xs text-slate-600 max-w-md leading-relaxed">
              Direct procurement assistance from Managing Partner <strong>K. Narendar Reddy</strong> (8886175855) and Logistics Incharge <strong>G. Siva</strong> (9640195798). We provide fast turnaround on compliance paperwork.
            </p>
            <div className="flex items-center gap-4 text-[11px] text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>Chevella Depot, Telangana</span>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>15-Min Response</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0 w-full sm:w-auto">
            <a
              href="https://wa.me/918886175855?text=Hello%20KNR%20Enterprises,%20I%20have%20a%20question%20about%20procurement"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-2xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="tel:8886175855"
              className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-xs px-4 py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>Call Depot (+91 8886175855)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
