import React, { useState } from 'react';
import { Screen, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Logo } from './Logo';
import { Phone, MapPin, Search, ShoppingCart, ArrowRight, Menu, X, FileText, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenProforma: () => void;
  language: Language;
  onToggleLanguage: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenProforma,
  language,
  onToggleLanguage,
  searchQuery,
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language];

  const navLinks: { id: Screen; label: string }[] = [
    { id: 'home', label: t.navHome },
    { id: 'products', label: t.navProducts },
    { id: 'services', label: t.navServices },
    { id: 'about', label: t.navAbout },
    { id: 'contact', label: t.navContact },
  ];

  const handleNavClick = (screen: Screen) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentScreen !== 'products') {
      onNavigate('products');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs print:hidden">
      {/* Top Banner (Orange Bar) */}
      <div className="bg-primary text-white text-xs font-medium py-1.5 px-3 sm:px-4 md:px-6">
        <div className="max-w-7xl mx-auto px-2 sm:px-3 flex flex-wrap items-center justify-between gap-2">
          {/* Left: Contact Info */}
          <div className="flex items-center space-x-2 sm:space-x-4 text-[11px] sm:text-xs">
            <a
              href="tel:8886175855"
              className="flex items-center space-x-1 hover:text-amber-100 transition-colors"
            >
              <Phone className="w-3 h-3 sm:w-3.5 h-3.5 flex-shrink-0" />
              <span className="hidden sm:inline">{t.callHotline}</span>
              <span className="sm:hidden">Call</span>
            </a>
            <span className="hidden md:inline-block text-orange-200">•</span>
            <span className="hidden md:flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-orange-200" />
              <span>{t.location}</span>
            </span>
          </div>

          {/* Right: Badges & Bilingual Switcher */}
          <div className="flex items-center space-x-2 text-[10px] sm:text-xs">
            <span className="hidden xs:inline-flex items-center gap-1 bg-orange-700/50 px-1.5 sm:px-2 py-0.5 rounded text-white font-semibold text-[10px]">
              <CheckCircle2 className="w-2.5 h-2.5 text-emerald-300 flex-shrink-0" />
              Bulk
            </span>
            <span className="hidden lg:inline text-orange-200 font-mono text-[10px]">
              GST
            </span>

            {/* Language Switcher Button */}
            <button
              onClick={onToggleLanguage}
              className="ml-1 inline-flex items-center gap-0.5 bg-white/20 hover:bg-white/30 text-white font-bold px-1.5 sm:px-2 py-0.5 rounded transition-colors text-[10px] sm:text-xs border border-white/30 cursor-pointer"
              title="Toggle English / Telugu"
            >
              <span className={language === 'en' ? 'underline font-extrabold' : 'opacity-80'}>EN</span>
              <span className="hidden sm:inline">|</span>
              <span className={`${language === 'te' ? 'underline font-extrabold' : 'opacity-80'} hidden sm:inline`}>తెలుగు</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4">
          {/* Official Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center cursor-pointer select-none group py-0.5 shrink-0"
          >
            <Logo className="h-8 sm:h-9 md:h-11 w-auto max-w-[140px] sm:max-w-[160px] md:max-w-[210px] transition-transform group-hover:scale-105" />
          </div>

          {/* Desktop Search */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden xl:flex items-center flex-1 max-w-xs relative mx-2"
          >
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                if (currentScreen !== 'products' && e.target.value.length > 1) {
                  onNavigate('products');
                }
              }}
              placeholder={t.searchPlaceholder}
              className="w-full bg-slate-100 hover:bg-slate-50 focus:bg-white text-xs pl-9 pr-3 py-2 rounded-full border border-slate-200 focus:border-primary focus:outline-none transition-all placeholder:text-slate-400"
            />
          </form>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 text-sm font-semibold">
            {navLinks.map((link) => {
              const isActive = currentScreen === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-2.5 py-1.5 rounded-md transition-all cursor-pointer text-sm ${
                    isActive
                      ? 'text-primary bg-orange-50 font-bold'
                      : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3">
            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-1.5 sm:p-2 text-slate-700 hover:text-primary rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="View Cart"
            >
              <ShoppingCart className="w-4 sm:w-5 h-4 sm:h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shadow-xs animate-bounce-short">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Quick Proforma Icon */}
            <button
              onClick={onOpenProforma}
              className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-primary border border-slate-200 hover:border-primary/40 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white shadow-2xs hover:bg-orange-50/50 transition-all cursor-pointer"
              title="Open Proforma Invoice Generator"
            >
              <FileText className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-primary flex-shrink-0" />
              <span className="hidden md:inline">Proforma</span>
            </button>

            {/* Primary Get Quote CTA */}
            <button
              onClick={() => {
                if (cartCount > 0) {
                  onOpenCart();
                } else {
                  handleNavClick('contact');
                }
              }}
              className="inline-flex items-center gap-1 bg-primary hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-xs sm:text-sm px-2.5 sm:px-3.5 md:px-4 py-1.5 sm:py-2 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap"
            >
              <span className="hidden sm:inline">{t.getQuoteBtn}</span>
              <span className="sm:hidden">Quote</span>
              <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-slate-700 hover:text-primary rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 sm:w-6 h-5 sm:h-6" /> : <Menu className="w-5 sm:w-6 h-5 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-2 xl:hidden">
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                if (currentScreen !== 'products' && e.target.value.length > 1) {
                  onNavigate('products');
                }
              }}
              placeholder={t.searchPlaceholder}
              className="w-full bg-slate-100 focus:bg-white text-xs pl-9 pr-3 py-2 rounded-full border border-slate-200 focus:border-primary focus:outline-none transition-all"
            />
          </form>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-3 sm:px-4 py-3 space-y-2 shadow-lg">
          {navLinks.map((link) => {
            const isActive = currentScreen === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2 rounded-lg font-semibold text-sm transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-600">
            <span>GST: 36CUHPK5939D1ZG</span>
            <button
              onClick={onToggleLanguage}
              className="text-primary font-bold hover:underline cursor-pointer text-xs"
            >
              {language === 'en' ? 'తెలుగు' : 'English'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
