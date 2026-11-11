import React, { useState } from 'react';
import { Screen, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  ShieldCheck,
  Send,
  Download,
  Building,
  CheckCircle,
  FileCheck
} from 'lucide-react';

interface FooterProps {
  onNavigate: (screen: Screen) => void;
  language: Language;
  onOpenProforma: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, language, onOpenProforma }) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const t = TRANSLATIONS[language];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmailInput('');
      }, 4000);
    }
  };

  return (
    <footer className="hidden md:block bg-navy text-slate-300 pt-12 md:pt-14 pb-6 md:pb-8 border-t-4 border-primary print:hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Municipal Procurement Bulletins Subscription Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-navy-light to-slate-900 p-4 sm:p-6 md:p-8 mb-12 border border-slate-700/60 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-orange-400 border border-primary/30 mb-2">
                <FileCheck className="w-3.5 h-3.5" />
                <span>BULLETIN & TENDER NOTICES</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                {t.subscribeTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {t.subscribeSubtitle}
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-md">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder={t.enterEmail}
                    className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-slate-800/80 border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary hover:bg-orange-600 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer whitespace-nowrap"
                >
                  {subscribed ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-emerald-300" />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <span>{t.subscribeBtn}</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-emerald-400 mt-2">
                  Thank you! Your email is enrolled for seasonal rates & tender updates.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* 4 Main Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 pb-10 md:pb-12 border-b border-slate-700/80">
          {/* Col 1: Identity & Statutory (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/95 p-2.5 rounded-xl inline-block shadow-sm">
              <img
                src="/logo.png"
                alt="KNR Enterprises"
                className="h-8 sm:h-9 md:h-10 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
              {t.footerAbout}
            </p>

            <div className="inline-flex items-center gap-2 bg-slate-800/90 border border-slate-700 px-3 py-1.5 rounded-md text-xs font-mono text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>GSTIN: 36CUHPK5939D1ZG</span>
            </div>

            <div className="pt-2">
              <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-2">
                Institutional Accreditations
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs text-slate-300">
                <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700">Telangana Panchayat Vendor</span>
                <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700">GeM Verified Supplier</span>
                <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700">ISI & CIB Formulations</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  • Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  • About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  • Featured Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  • Municipal Logistics
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenProforma}
                  className="hover:text-primary transition-colors cursor-pointer text-orange-400 font-medium"
                >
                  • Tender Proforma Generator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faqs')}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  • FAQs & Compliance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  • Contact Depot
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenProforma}
                  className="inline-flex items-center gap-1 text-primary hover:underline font-semibold pt-1 cursor-pointer text-xs sm:text-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Rate Card (PDF)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Catalog Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2">
              {t.catalogCategories}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  • Commercial Bleaching Powder & Lime
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  • Vector & Insecticide (Malathion 5% DP)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  • Thermal Pulse-Jet Fogging Machines
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  • HDPE Wheeled Dustbins (240L & Twin 100L)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  • Civic LED Street Lights (IP66 60W/120W)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  • High-Density Artificial Green Turf
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  • Knapsack Sprayers & Sanitation PPE Kits
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Depot & Procurement (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-2">
              {t.depotAndProcurement}
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {t.depotAddress}
                </span>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.depotHours}</span>
              </div>

              <div className="pt-1 space-y-1.5 border-t border-slate-700/60">
                <div className="flex items-start gap-2">
                  <Phone className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-slate-400 block">{t.managingPartner}:</span>
                    <a href="tel:8886175855" className="font-semibold text-white hover:text-primary text-xs sm:text-sm">
                      K. Narendar Reddy (+91 8886175855)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Phone className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-slate-400 block">{t.logisticsIncharge}:</span>
                    <a href="tel:9640195798" className="font-semibold text-white hover:text-primary text-xs sm:text-sm">
                      G. Siva (+91 9640195798)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                  <a
                    href="mailto:knrenterprises679@gmail.com"
                    className="text-slate-300 hover:text-primary truncate text-xs sm:text-sm"
                  >
                    knrenterprises679@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/918886175855?text=Hello%20KNR%20Enterprises,%20we%20require%20municipal%20supplies%20quotation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-3 rounded-lg text-xs transition-colors shadow-xs"
                >
                  <span>WhatsApp RFQ Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-6 md:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p className="text-xs sm:text-sm">{t.copyright}</p>
            <p className="text-[11px] text-slate-300 mt-0.5">
              • {t.govtAuthorizedVendor}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] w-full sm:w-auto">
            <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">UPI</span>
            <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">NEFT / RTGS</span>
            <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">RuPay</span>
            <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">Visa / Mastercard</span>
            <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">Treasury Challans</span>
          </div>

          <div className="flex flex-wrap items-center space-x-3 sm:space-x-4 text-[11px] w-full sm:w-auto">
            <button onClick={() => onNavigate('about')} className="hover:text-primary transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('services')} className="hover:text-primary transition-colors cursor-pointer">
              Transit Policy
            </button>
            <button onClick={() => onNavigate('faqs')} className="hover:text-primary transition-colors cursor-pointer">
              Tender Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
