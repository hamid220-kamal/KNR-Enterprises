import React from 'react';
import { Screen, Language, Product } from '../../types';
import {
  ShieldCheck,
  Handshake,
  Truck,
  Headphones,
  ArrowRight,
  MessageCircle,
  Check
} from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
  onAddToCart?: (product: Product) => void;
  onSelectCategory: (category: string) => void;
  language?: Language;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onSelectCategory,
}) => {
  const handleScrollToExplore = () => {
    const aboutElem = document.getElementById('about-section');
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const productCards = [
    {
      id: 'Disinfectants & Chemicals',
      titleLine1: 'Disinfectants',
      titleLine2: '& Chemicals',
      image: '/product-card-chemicals.jpg',
      category: 'Disinfectants & Chemicals',
    },
    {
      id: 'Waste Management',
      titleLine1: 'Commercial',
      titleLine2: 'Waste Bins',
      image: '/product-card-bins.jpg',
      category: 'Waste Management',
    },
    {
      id: 'Pest & Vector Control',
      titleLine1: 'Pest & Vector',
      titleLine2: 'Equipment',
      image: '/product-card-foggers.jpg',
      category: 'Pest & Vector Control',
    },
    {
      id: 'Municipal Infrastructure',
      titleLine1: 'Civic LED',
      titleLine2: '& Infrastructure',
      image: '/product-card-led.jpg',
      category: 'Municipal Infrastructure',
    },
  ];

  const whyChoosePoints = [
    'High-Quality Products',
    'Competitive Pricing',
    'Timely Delivery',
    'Customer-Centric Approach',
  ];

  return (
    <div className="w-full bg-[#f8f9fc] text-slate-900 selection:bg-orange-500/20 selection:text-orange-600">
      {/* =========================================================================
          1. HERO SECTION (Dark theme with glowing neon halo and 3D industrial showcase)
         ========================================================================= */}
      <section className="relative bg-[#0a0e17] text-white pt-8 sm:pt-14 pb-20 sm:pb-28 overflow-hidden">
        {/* Ambient background glow & industrial light bokeh */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (6.5 cols) */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left">
              {/* Badge / Overline */}
              <div className="inline-block text-orange-400 font-semibold text-xs sm:text-sm tracking-wide">
                Building Stronger Tomorrow
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
                KNR <span className="text-orange-500">Enterprises</span>
              </h1>

              {/* Subheading */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
                Quality Products. Trusted Partnership.
              </h2>

              {/* Paragraph Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
                Your one-stop destination for premium industrial products with unmatched quality and service.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                {/* Explore Products Button */}
                <button
                  onClick={() => onNavigate('products')}
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm sm:text-base px-6 sm:px-7 py-3 rounded-full shadow-lg shadow-orange-500/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/918886175855?text=Hello%20KNR%20Enterprises,%20we%20require%20industrial%20products%20quotation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-white/60 hover:border-white hover:bg-white/10 text-white font-semibold text-sm sm:text-base px-5 sm:px-6 py-3 rounded-full transition-all flex items-center gap-2 cursor-pointer backdrop-blur-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Scroll to Explore Indicator */}
              <div
                onClick={handleScrollToExplore}
                className="flex items-center gap-2.5 text-slate-400 hover:text-orange-400 text-xs pt-6 sm:pt-10 cursor-pointer select-none transition-colors w-fit group"
              >
                <div className="w-4 h-7 border border-slate-400 group-hover:border-orange-400 rounded-full flex justify-center pt-1 transition-colors">
                  <div className="w-1 h-1.5 bg-orange-400 rounded-full animate-bounce" />
                </div>
                <span>Scroll to explore</span>
              </div>
            </div>

            {/* Right Showcase: 3D Platform with Glowing Neon Orange Ring Halo (6 cols) */}
            <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center">
              {/* Outer Circular Neon Ring Halo with ambient orange glow */}
              <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full border-4 border-orange-500/70 shadow-[0_0_80px_rgba(249,115,22,0.5)] -z-10 animate-pulse pointer-events-none" />

              {/* 3D Hero Image on Reflective Metallic Platform */}
              <div className="relative w-full max-w-lg lg:max-w-xl group">
                <img
                  src="/hero-knr-products.jpg"
                  alt="KNR Enterprises Industrial Products Showcase"
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FLOATING TRUST / FEATURES PILL BAR (Overlapping Hero & About)
         ========================================================================= */}
      <div className="relative -mt-10 sm:-mt-12 z-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0e1626]/95 backdrop-blur-md border border-slate-700/80 rounded-2xl sm:rounded-full py-4 sm:py-5 px-6 sm:px-8 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center">
            {/* Feature 1: Premium Quality Guaranteed */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-orange-500" />
              </div>
              <div className="leading-tight">
                <div className="text-white font-bold text-xs sm:text-sm">Premium Quality</div>
                <div className="text-slate-400 text-[11px] sm:text-xs">Guaranteed</div>
              </div>
            </div>

            {/* Feature 2: Trusted by Professionals */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center shrink-0">
                <Handshake className="w-5 h-5 text-orange-500" />
              </div>
              <div className="leading-tight">
                <div className="text-white font-bold text-xs sm:text-sm">Trusted by</div>
                <div className="text-slate-400 text-[11px] sm:text-xs">Professionals</div>
              </div>
            </div>

            {/* Feature 3: Reliable Supply On Time */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 text-orange-500" />
              </div>
              <div className="leading-tight">
                <div className="text-white font-bold text-xs sm:text-sm">Reliable Supply</div>
                <div className="text-slate-400 text-[11px] sm:text-xs">On Time</div>
              </div>
            </div>

            {/* Feature 4: Dedicated Support Always */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center shrink-0">
                <Headphones className="w-5 h-5 text-orange-500" />
              </div>
              <div className="leading-tight">
                <div className="text-white font-bold text-xs sm:text-sm">Dedicated Support</div>
                <div className="text-slate-400 text-[11px] sm:text-xs">Always</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. ABOUT SECTION ("Building Trust Through Quality")
         ========================================================================= */}
      <section id="about-section" className="bg-white pt-20 sm:pt-28 pb-16 sm:pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-orange-500 font-bold text-xs sm:text-sm uppercase tracking-wider">
                About KNR Enterprises
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-[1.12]">
                Building Trust<br />Through Quality
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg pt-1">
                At KNR Enterprises, we are committed to deliver high-quality industrial products, innovative solutions and exceptional service to{' '}
                <span className="underline decoration-slate-400 underline-offset-4">
                  help your business grow
                </span>
                .
              </p>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 border border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all cursor-pointer shadow-xs"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Architectural Building Image with decorative orange backdrop card (6 cols) */}
            <div className="lg:col-span-6 relative">
              {/* Distinctive Orange Accent Backdrop Card peeking from bottom-right */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-4/5 h-4/5 bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600 rounded-3xl -z-10 shadow-lg shadow-orange-500/20" />

              {/* Main Corporate Headquarters Facility Photograph */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100">
                <img
                  src="/building-knr-hq.jpg"
                  alt="KNR Enterprises Headquarters & Logistics Facility"
                  className="w-full h-auto aspect-[16/10] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. PRODUCTS SECTION ("Explore Our Product Range")
         ========================================================================= */}
      <section className="bg-[#f8f9fc] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <div className="text-orange-500 font-bold text-xs sm:text-sm uppercase tracking-wider mb-1">
                Our Products
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f172a] tracking-tight">
                Explore Our Product Range
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Premium quality products for your industrial needs
              </p>
            </div>

            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-1.5 border border-orange-400 text-orange-600 hover:bg-orange-500 hover:text-white px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer self-start sm:self-auto shrink-0"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4 Product Cards Grid matching reference layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {productCards.map((card) => (
              <div
                key={card.id}
                onClick={() => onSelectCategory(card.category)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-slate-900 border border-slate-800/80"
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={`${card.titleLine1} ${card.titleLine2}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay for razor-sharp typography contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-white font-black text-sm sm:text-base leading-tight">
                        {card.titleLine1}
                      </div>
                      <div className="text-white font-black text-sm sm:text-base leading-tight flex items-center gap-1.5">
                        <span>{card.titleLine2}</span>
                        <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. WHY CHOOSE KNR ENTERPRISES BANNER
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 sm:my-16">
        <div className="bg-[#0c1322] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Headline & Description (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                <span className="text-white">Why Choose </span>
                <span className="text-orange-500">KNR Enterprises</span>?
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                We combine quality, reliability and innovation to deliver the best for your business.
              </p>
            </div>

            {/* Middle: 4 Checkmark Points (4 cols) */}
            <div className="lg:col-span-4 space-y-3">
              {whyChoosePoints.map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm font-semibold text-white">
                  <div className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0 text-xs shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Right: Orange Gradient "Growing Together" Card (3 cols) */}
            <div className="lg:col-span-3 flex justify-center lg:justify-end">
              <div className="w-full max-w-xs bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600 rounded-2xl p-5 sm:p-6 shadow-xl shadow-orange-500/25 flex items-center justify-between gap-4 text-white hover:scale-105 transition-transform duration-300">
                <div className="text-xl sm:text-2xl font-black leading-tight tracking-tight">
                  Growing<br />Together
                </div>
                {/* Precision White Growth Upward Arrow Graphic matching reference */}
                <svg
                  className="w-12 h-12 text-white shrink-0"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 50 L26 34 L38 42 L54 18" />
                  <path d="M38 18 H54 V34" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
