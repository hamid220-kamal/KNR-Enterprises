import React, { useState } from 'react';
import { Screen, Language, Product } from '../../types';
import { PRODUCTS, CATEGORIES, TESTIMONIALS, GOVERNMENT_BODIES } from '../../data/products';
import { TRANSLATIONS } from '../../data/translations';
import {
  ShieldCheck,
  Truck,
  CheckCircle2,
  Award,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  Phone,
  MessageCircle,
  FileText,
  Clock,
  Sparkles,
  Layers,
  ChevronDown,
  Building2
} from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
  onAddToCart: (product: Product) => void;
  onSelectCategory: (category: string) => void;
  language: Language;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onAddToCart,
  onSelectCategory,
  language,
}) => {
  const t = TRANSLATIONS[language];
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [bestsellerIndex, setBestsellerIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const featuredList = PRODUCTS.slice(0, 4);
  const bestsellersList = PRODUCTS.slice(2, 6);

  const homeFaqs = [
    {
      q: 'Do you supply in bulk for Gram Panchayats and Municipal Corporations?',
      a: 'Yes, absolutely. KNR Enterprises specializes in institutional, bulk, and depot-level supplies. We cater to Gram Panchayats, Municipal Councils (GHMC, HMDA peripheries), Townships, and EPC civil contractors across all 33 Telangana districts.'
    },
    {
      q: 'Do you provide official GST invoices for government audit compliance?',
      a: 'Yes. Every consignment is invoiced under GSTIN 36CUHPK5939D1ZG with correct HSN classification and formal GST-3B proforma invoices suitable for treasury token releases and panchayat audit approvals.'
    },
    {
      q: 'Which areas do you deliver to and what are the transit timelines?',
      a: 'We deliver directly across all 33 districts of Telangana. For Ranga Reddy, Vikarabad, and Hyderabad fringes, dispatches reach in under 4 hours. For other districts, delivery takes 24 to 48 hours.'
    },
    {
      q: 'How can I get an instant bulk quote or proforma invoice?',
      a: 'You can use the built-in "Get Quote" button in the header, or generate a full GST proforma invoice in our cart drawer, or contact Managing Partner K. Narendar Reddy on WhatsApp.'
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-orange-50/70 via-white to-white pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{t.verifiedSupplier}</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                <span className="text-primary block">{language === 'te' ? 'పరిశుభ్ర నగరాలు & గ్రామాలు' : 'Cleaner'}</span>
                <span>{language === 'te' ? 'నిర్మాణం విశ్వసనీయ మున్సిపల్ సరుకులతో' : 'Cities Start With Reliable Municipal Supply.'}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {t.heroSubtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('products')}
                  className="bg-primary hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{t.shopProducts}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="border-2 border-slate-300 hover:border-primary text-slate-800 hover:text-primary font-bold text-sm sm:text-base px-5 py-3 rounded-xl transition-all flex items-center gap-2 bg-white cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-primary" />
                  <span>{t.getBulkQuote}</span>
                </button>
              </div>

              {/* Key Metric Counters */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-primary">500+</div>
                  <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide mt-0.5">
                    {t.depotOrders}
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900">100+</div>
                  <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide mt-0.5">
                    {t.activeClients}
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-600">8+</div>
                  <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide mt-0.5">
                    {t.productLines}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Photo Grid (5 cols) */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3.5 p-3.5 bg-white/80 backdrop-blur-xs rounded-2xl border border-slate-200/90 shadow-xl">
                {/* 240L Dustbin */}
                <div
                  onClick={() => onNavigate('products')}
                  className="group relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200 aspect-square cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=500&auto=format&fit=crop&q=80"
                    alt="240L Wheeled Bin"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-3 text-white">
                    <span className="text-[11px] font-bold">240L Dustbin</span>
                    <span className="text-[10px] text-emerald-300 font-mono">₹2,850 • SBM Std</span>
                  </div>
                </div>

                {/* Delta Thermal Fogger */}
                <div
                  onClick={() => onNavigate('products')}
                  className="group relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200 aspect-square cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=500&auto=format&fit=crop&q=80"
                    alt="Delta Thermal Fogger"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-3 text-white">
                    <span className="text-[11px] font-bold">Delta Thermal Fogger</span>
                    <span className="text-[10px] text-orange-300 font-mono">SS304 Pulse Jet</span>
                  </div>
                </div>

                {/* Bleaching Powder */}
                <div
                  onClick={() => onNavigate('products')}
                  className="group relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200 aspect-square cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80"
                    alt="Bleaching Powder"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-3 text-white">
                    <span className="text-[11px] font-bold">Bleaching Powder</span>
                    <span className="text-[10px] text-amber-300 font-mono">33% Active Chlorine</span>
                  </div>
                </div>

                {/* Civic LED Luminaire */}
                <div
                  onClick={() => onNavigate('products')}
                  className="group relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200 aspect-square cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=500&auto=format&fit=crop&q=80"
                    alt="Civic LED Luminaire"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-3 text-white">
                    <span className="text-[11px] font-bold">Civic LED Luminaire</span>
                    <span className="text-[10px] text-cyan-300 font-mono">10kV Surge IP66</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR-COLUMN TRUST STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-2xs">
          {/* Card 1 */}
          <div className="flex items-start gap-3.5 p-2">
            <div className="p-2.5 rounded-xl bg-orange-100 text-primary shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">{t.gstRegisteredTitle}</h4>
              <p className="text-xs text-slate-500 mt-0.5">{t.gstRegisteredSub}</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-3.5 p-2">
            <div className="p-2.5 rounded-xl bg-blue-100 text-blue-600 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">{t.bulkOrdersTitle}</h4>
              <p className="text-xs text-slate-500 mt-0.5">{t.bulkOrdersSub}</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start gap-3.5 p-2">
            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-600 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">{t.fastDeliveryTitle}</h4>
              <p className="text-xs text-slate-500 mt-0.5">{t.fastDeliverySub}</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-start gap-3.5 p-2">
            <div className="p-2.5 rounded-xl bg-purple-100 text-purple-600 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">{t.qualityAssuredTitle}</h4>
              <p className="text-xs text-slate-500 mt-0.5">{t.qualityAssuredSub}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPLORE CATEGORIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
              BULK CATALOG
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {t.exploreCategories}
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              {t.exploreCategoriesSub}
            </p>
          </div>

          <button
            onClick={() => onNavigate('products')}
            className="text-xs font-bold text-primary hover:text-orange-700 flex items-center gap-1.5 cursor-pointer group whitespace-nowrap self-start md:self-auto"
          >
            <span>{t.viewAllCategories}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6 Core Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.id);
                onNavigate('products');
              }}
              className="group bg-white rounded-xl border border-slate-200 hover:border-primary p-3 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="aspect-4/3 rounded-lg overflow-hidden bg-slate-100 mb-2.5">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-primary transition-colors line-clamp-1">
                  {language === 'te' ? cat.teluguName : cat.name}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {cat.count} Certified Products
                </p>
              </div>
              <div className="mt-2 text-right">
                <span className="text-primary text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  View →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED MUNICIPAL PRODUCTS CAROUSEL / GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-orange-100 text-primary mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DEPOT HIGHLIGHTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {t.featuredProducts}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              {t.featuredProductsSub}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => onNavigate('products')}
              className="text-xs font-bold text-slate-600 hover:text-primary mr-2 cursor-pointer hidden sm:inline"
            >
              {t.viewAllProducts}
            </button>
            <button
              onClick={() => setFeaturedIndex(Math.max(0, featuredIndex - 1))}
              disabled={featuredIndex === 0}
              className="p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setFeaturedIndex(Math.min(featuredList.length - 2, featuredIndex + 1))}
              disabled={featuredIndex >= featuredList.length - 2}
              className="p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredList.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-3">
                {/* Image & Badge */}
                <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-slate-100 mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                      {product.badge}
                    </div>
                  )}
                  <div className="absolute bottom-2.5 left-2.5 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                    {t.inStock}
                  </div>
                </div>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-1.5">
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="font-bold text-slate-800">{product.rating}</span>
                  <span className="text-slate-400">({product.reviewCount} reviews)</span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-sm text-slate-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {language === 'te' ? product.teluguName : product.name}
                </h3>

                {/* Price & MOQ */}
                <div className="mt-2.5 pt-2 border-t border-slate-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-black text-slate-900">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-600">
                      {product.discountPercent}% OFF
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-primary" />
                    <span>MOQ: {product.moqDescription}</span>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-3 pt-0 grid grid-cols-2 gap-2 mt-2">
                <button
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-primary hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-xs py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-2xs"
                >
                  <span>{t.addToCart}</span>
                </button>
                <button
                  onClick={() => {
                    onAddToCart(product);
                    onNavigate('contact');
                  }}
                  className="w-full border border-slate-200 hover:border-primary text-slate-700 hover:text-primary font-semibold text-xs py-2 px-3 rounded-lg transition-colors flex items-center justify-center cursor-pointer"
                >
                  <span>{t.quoteOnly}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TOP BESTSELLERS ACROSS TELANGANA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 mb-1">
              <Award className="w-3.5 h-3.5" />
              <span>PANCHAYAT & INSTITUTIONAL FAVORITES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {t.bestsellersTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              {t.bestsellersSub}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => onNavigate('products')}
              className="text-xs font-bold text-slate-600 hover:text-primary mr-2 cursor-pointer hidden sm:inline"
            >
              Explore Full List →
            </button>
            <button
              onClick={() => setBestsellerIndex(Math.max(0, bestsellerIndex - 1))}
              disabled={bestsellerIndex === 0}
              className="p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 disabled:opacity-40 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setBestsellerIndex(Math.min(bestsellersList.length - 2, bestsellerIndex + 1))}
              disabled={bestsellerIndex >= bestsellersList.length - 2}
              className="p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 disabled:opacity-40 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bestseller Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellersList.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-3">
                <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-slate-100 mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                      {product.badge}
                    </div>
                  )}
                  <div className="absolute bottom-2.5 left-2.5 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                    {t.inStock}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-1.5">
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="font-bold text-slate-800">{product.rating}</span>
                  <span className="text-slate-400">({product.reviewCount} reviews)</span>
                </div>

                <h3 className="font-bold text-sm text-slate-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {language === 'te' ? product.teluguName : product.name}
                </h3>

                <div className="mt-2.5 pt-2 border-t border-slate-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-black text-slate-900">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-600">
                      {product.discountPercent}% OFF
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-primary" />
                    <span>MOQ: {product.moqDescription}</span>
                  </p>
                </div>
              </div>

              <div className="p-3 pt-0 grid grid-cols-2 gap-2 mt-2">
                <button
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-primary hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-xs py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-2xs"
                >
                  <span>{t.addToCart}</span>
                </button>
                <button
                  onClick={() => {
                    onAddToCart(product);
                    onNavigate('contact');
                  }}
                  className="w-full border border-slate-200 hover:border-primary text-slate-700 hover:text-primary font-semibold text-xs py-2 px-3 rounded-lg transition-colors flex items-center justify-center cursor-pointer"
                >
                  <span>{t.quoteOnly}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WHY CHOOSE KNR ENTERPRISES (Dark Navy Section matching mockups) */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-2">
              INSTITUTIONAL EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Why Choose <span className="text-primary">KNR Enterprises</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              {t.whyChooseSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Depot Image & 10+ Years Badge (4 cols) */}
            <div className="lg:col-span-4 relative">
              <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80"
                  alt="KNR Chevella Central Depot"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* 10+ Years Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-md p-4 rounded-xl border border-slate-700/80 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-primary">10+ Years</span>
                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                      2014-2026
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-white mt-1">
                    Trusted Municipal & Institutional Supply
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {t.tenYearsSub}
                  </p>
                </div>
              </div>
            </div>

            {/* Right 6 Feature Boxes (8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Feature 1 */}
              <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-primary/60 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 text-primary flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">{t.genuineProducts}</h4>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  {t.genuineProductsDesc}
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-primary/60 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">{t.competitivePricing}</h4>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  {t.competitivePricingDesc}
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-primary/60 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                  <Truck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">{t.onTimeDelivery}</h4>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  {t.onTimeDeliveryDesc}
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-primary/60 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">{t.gstInvoice}</h4>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  {t.gstInvoiceDesc}
                </p>
              </div>

              {/* Feature 5 */}
              <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-primary/60 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">{t.govtTenderExp}</h4>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  {t.govtTenderExpDesc}
                </p>
              </div>

              {/* Feature 6 */}
              <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-primary/60 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">{t.dedicatedSupport}</h4>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  {t.dedicatedSupportDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
            PANCHAYAT TESTIMONIALS & TRUST
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            {t.trustedByTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            {t.trustedBySub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{item.verifiedBadge}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-primary font-bold text-sm flex items-center justify-center">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.role}</p>
                  <p className="text-[11px] text-slate-400">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. GOVERNMENT BODIES SCROLLING MARQUEE */}
      <section className="bg-slate-100 py-6 border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-2 text-center">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Government Bodies & Institutional Procurement Partners
          </p>
        </div>
        <div className="flex space-x-8 whitespace-nowrap animate-marquee">
          {GOVERNMENT_BODIES.concat(GOVERNMENT_BODIES).map((body, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs"
            >
              <Building2 className="w-3.5 h-3.5 text-primary" />
              <span>{body}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. GOT QUESTIONS? ACCORDION PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {t.faqTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            {t.faqSubtitle}
          </p>
        </div>

        <div className="space-y-3">
          {homeFaqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-primary transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-primary font-mono text-xs">0{index + 1}</span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('faqs')}
            className="inline-flex items-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <span>{t.viewAllFaqs}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 10. READY TO ORDER CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-slate-950 via-navy to-slate-950 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-slate-800 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/20 text-orange-400 border border-primary/30 uppercase tracking-wider">
              HIGHWAY WAREHOUSE DISPATCH
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              {t.readyToOrderTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.readyToOrderSub}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <a
                href="tel:8886175855"
                className="bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors flex items-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>{t.callDirect}</span>
              </a>

              <a
                href="https://wa.me/918886175855?text=Hello%20KNR%20Enterprises,%20we%20need%20a%20municipal%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors flex items-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.whatsappFastRfq}</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="bg-primary hover:bg-orange-600 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>{t.requestCallQuota}</span>
              </button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.gstPanchayatAccepted}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-primary" />
                <span>{t.transitTime}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.specialPricing}</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
