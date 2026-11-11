import React, { useState } from 'react';
import { Screen, Language } from '../types';
import { Logo } from './Logo';
import { Lock, ChevronDown, ShoppingCart, Menu, X, Phone, FileText } from 'lucide-react';
import { AdminLoginModal } from './AdminLoginModal';

interface HeaderProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenProforma: () => void;
  language: Language;
  onToggleLanguage: () => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenProforma,
  language,
  onToggleLanguage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  const productCategories = [
    { id: 'Disinfectants & Chemicals', label: 'Disinfectants & Chemicals' },
    { id: 'Waste Management', label: 'Commercial Waste Bins' },
    { id: 'Pest & Vector Control', label: 'Pest & Vector Foggers' },
    { id: 'Municipal Infrastructure', label: 'Civic Smart LED Lighting' },
    { id: 'Civic Landscaping', label: 'Artificial Green Turf' },
    { id: 'Sanitization Tools', label: 'Sanitization Tools & PPE' },
  ];

  const handleNavClick = (screen: Screen) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#0a0e17]/95 backdrop-blur-md border-b border-slate-800/80 text-white transition-all print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* 1. Left: Brand Logo matching the reference image */}
            <div className="flex items-center">
              <Logo
                variant="dark"
                className="h-8 sm:h-9 w-auto"
                onClick={() => handleNavClick('home')}
              />
            </div>

            {/* 2. Center: Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
              {/* Home */}
              <button
                onClick={() => handleNavClick('home')}
                className={`relative py-1 transition-colors cursor-pointer ${
                  currentScreen === 'home'
                    ? 'text-orange-500 font-bold after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:bg-orange-500 after:rounded-full'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Home
              </button>

              {/* About */}
              <button
                onClick={() => handleNavClick('about')}
                className={`relative py-1 transition-colors cursor-pointer ${
                  currentScreen === 'about'
                    ? 'text-orange-500 font-bold after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:bg-orange-500 after:rounded-full'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                About
              </button>

              {/* Products with Dropdown Arrow */}
              <div
                className="relative"
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNavClick('products')}
                  className={`relative flex items-center gap-1.5 py-1 transition-colors cursor-pointer ${
                    currentScreen === 'products'
                      ? 'text-orange-500 font-bold after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:bg-orange-500 after:rounded-full'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      productsDropdownOpen ? 'rotate-180 text-orange-500' : 'text-slate-400'
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {productsDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 pt-2 z-50 animate-fadeIn">
                    <div className="bg-[#0f172a] border border-slate-700 rounded-xl shadow-2xl py-2 overflow-hidden">
                      <div className="px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase text-orange-400 border-b border-slate-800">
                        Product Categories
                      </div>
                      {productCategories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setProductsDropdownOpen(false);
                            handleNavClick('products');
                          }}
                          className="w-full text-left px-3.5 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors flex items-center justify-between cursor-pointer"
                        >
                          <span>{cat.label}</span>
                          <span className="text-[10px] text-orange-400 font-mono">→</span>
                        </button>
                      ))}
                      <div className="p-2 border-t border-slate-800">
                        <button
                          onClick={() => handleNavClick('products')}
                          className="w-full text-center py-1.5 bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                        >
                          View All Products →
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Enquiry */}
              <button
                onClick={onOpenProforma}
                className="text-slate-300 hover:text-white py-1 transition-colors cursor-pointer flex items-center gap-1"
                title="Open Quotation / Proforma Invoice Generator"
              >
                <span>Enquiry</span>
              </button>

              {/* Contact */}
              <button
                onClick={() => handleNavClick('contact')}
                className={`relative py-1 transition-colors cursor-pointer ${
                  currentScreen === 'contact'
                    ? 'text-orange-500 font-bold after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:bg-orange-500 after:rounded-full'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Contact
              </button>
            </nav>

            {/* 3. Right: Admin Login + Cart & Switcher */}
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              {/* Language Switcher */}
              <button
                onClick={onToggleLanguage}
                className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-white px-2 py-1 rounded-md border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
                title="Toggle English / Telugu"
              >
                <span className={language === 'en' ? 'text-orange-400 font-bold' : ''}>EN</span>
                <span className="opacity-40">|</span>
                <span className={language === 'te' ? 'text-orange-400 font-bold' : ''}>తెలుగు</span>
              </button>

              {/* Cart Drawer Button */}
              <button
                onClick={onOpenCart}
                className="relative p-2 text-slate-300 hover:text-orange-400 rounded-full hover:bg-slate-800/80 transition-colors cursor-pointer"
                title="View RFQ Cart"
                aria-label="View RFQ Cart"
              >
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-md animate-bounce-short">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Admin Login Button matching reference design */}
              <button
                onClick={() => setIsAdminModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-slate-700/80 bg-slate-900/80 hover:bg-slate-800 hover:border-slate-500 text-slate-200 hover:text-white text-xs font-semibold shadow-xs transition-all cursor-pointer"
                title="Administrator Login"
              >
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Admin Login</span>
              </button>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0c121e] border-t border-slate-800 px-4 py-4 space-y-2 shadow-2xl animate-fadeIn">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                currentScreen === 'home'
                  ? 'bg-orange-500 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                currentScreen === 'about'
                  ? 'bg-orange-500 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('products')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                currentScreen === 'products'
                  ? 'bg-orange-500 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              Products Catalog
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProforma();
              }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-300 hover:bg-slate-800 transition-colors flex items-center justify-between"
            >
              <span>Enquiry / Proforma</span>
              <FileText className="w-4 h-4 text-orange-400" />
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                currentScreen === 'contact'
                  ? 'bg-orange-500 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              Contact
            </button>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={onToggleLanguage}
                className="text-xs text-orange-400 font-bold hover:underline"
              >
                {language === 'en' ? 'తెలుగు వెర్షన్' : 'English Version'}
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAdminModalOpen(true);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900 text-xs text-slate-300"
              >
                <Lock className="w-3 h-3 text-orange-400" />
                <span>Admin Login</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Interactive Admin Login Modal */}
      <AdminLoginModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
      />
    </>
  );
};
