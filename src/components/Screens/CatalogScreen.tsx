import React, { useState, useEffect, useMemo } from 'react';
import { Screen, Language, Product } from '../../types';
import {
  Search,
  ChevronDown,
  Mail,
  CheckCircle2,
  Handshake,
  ArrowRight,
  ExternalLink,
  ShoppingCart
} from 'lucide-react';
import {
  getCatalogProducts,
  formatINR,
  CatalogItem
} from '../../services/productService';
import { PRODUCTS } from '../../data/products';

interface CatalogScreenProps {
  onNavigate: (screen: Screen) => void;
  onAddToCart?: (product: Product | CatalogItem) => void;
  onOpenProforma?: () => void;
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  language?: Language;
}

export const CatalogScreen: React.FC<CatalogScreenProps> = ({
  onNavigate,
  onAddToCart,
  selectedCategory: initialCategory = 'all',
  searchQuery: initialSearch = ''
}) => {
  const [products, setProducts] = useState<CatalogItem[]>(getCatalogProducts());
  const [searchTerm, setSearchTerm] = useState<string>(initialSearch);
  const [categoryFilter, setCategoryFilter] = useState<string>(
    initialCategory === 'all' ? 'All Products' : initialCategory
  );

  // Listen for admin live price updates via custom event
  useEffect(() => {
    const handlePriceUpdate = () => {
      setProducts(getCatalogProducts());
    };
    window.addEventListener('knr_product_price_updated', handlePriceUpdate);
    return () => {
      window.removeEventListener('knr_product_price_updated', handlePriceUpdate);
    };
  }, []);

  const categories = [
    'All Products',
    'Disinfectants & Chemicals',
    'Pest & Vector Control',
    'Municipal Infrastructure',
    'Waste Management',
    'Civic Landscaping',
    'Sanitization Tools'
  ];

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      // Category check
      if (categoryFilter !== 'All Products' && prod.category !== categoryFilter) {
        return false;
      }
      // Search term check
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchesName = prod.name.toLowerCase().includes(query);
        const matchesDesc = prod.description.toLowerCase().includes(query);
        const matchesCat = prod.category.toLowerCase().includes(query);
        return matchesName || matchesDesc || matchesCat;
      }
      return true;
    });
  }, [products, searchTerm, categoryFilter]);

  // Handle Enquiry on WhatsApp directly using configured KNR contact number
  const handleEnquire = (product: CatalogItem) => {
    const formattedPrice = `${formatINR(product.price)} ${product.unit}`;
    const text = `Hello KNR Enterprises,\nI am interested in the following product:\nProduct: ${product.name}\nDisplayed Price: ${formattedPrice}\nPlease share more details and availability.`;
    window.open(
      `https://wa.me/918886175855?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="w-full bg-[#f8f9fc] text-slate-900 selection:bg-orange-500/20 selection:text-orange-600">
      {/* =========================================================================
          1. PRODUCTS HERO SECTION (Dark theme matching reference image)
         ========================================================================= */}
      <section className="relative bg-[#0a0e17] text-white pt-8 sm:pt-12 pb-16 sm:pb-20 border-b border-slate-800/80 overflow-hidden">
        {/* Ambient subtle warm glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-4 text-left">
              {/* Overline Badge */}
              <div className="inline-block bg-orange-500 text-white font-bold text-[10px] sm:text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                OUR CATALOGUE
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
                Products That Support<br />
                <span className="text-orange-500">Better Communities.</span>
              </h1>

              {/* Description */}
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg">
                Explore our range of industrial, sanitation, chemical and infrastructure supplies for diverse operational requirements.
              </p>

              {/* Small Orange Underline Accent Bar */}
              <div className="w-16 h-1 bg-orange-500 rounded-full mt-4" />
            </div>

            {/* Right Column: Hero Products Composition Visual (5 cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-slate-800/80 bg-slate-900 group">
                <img
                  src="/products-hero-composition.jpg"
                  alt="KNR Enterprises Flagship Supplies"
                  className="w-full h-auto aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.indexOf('hero-knr-products.jpg') === -1) {
                      target.src = '/hero-knr-products.jpg';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e17]/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FLOATING SEARCH & FILTER TOOLBAR
         ========================================================================= */}
      <div className="relative -mt-6 sm:-mt-7 z-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-slate-200/90 p-2 sm:p-2.5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Input Bar */}
          <div className="flex items-center gap-2.5 flex-1 px-2">
            <Search className="w-4 sm:w-5 h-4 sm:h-5 text-slate-400 shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              aria-label="Search products"
              className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-xs text-slate-400 hover:text-slate-600 font-bold px-1"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Vertical Divider */}
          <div className="h-6 w-[1px] bg-slate-200 hidden sm:block" />

          {/* Category Dropdown */}
          <div className="relative min-w-[180px] sm:min-w-[200px] border-t sm:border-t-0 pt-2 sm:pt-0">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              aria-label="Filter by product category"
              className="w-full text-xs sm:text-sm font-semibold text-slate-700 bg-transparent py-1 pl-2 pr-8 focus:outline-none cursor-pointer appearance-none"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-slate-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. PRODUCT GRID (Desktop 4 cols x 2 rows, Tablet 2 cols, Mobile 1-2 cols)
         ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-16">
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center my-8 shadow-sm">
            <div className="w-14 h-14 mx-auto mb-3 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              No products found matching "{searchTerm}"
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search keywords or resetting the category filter to view all products.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setCategoryFilter('All Products');
              }}
              className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-sm cursor-pointer transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between p-4 group"
              >
                {/* Product Card Top: Image & Details */}
                <div>
                  {/* Image Container with 4:3 Aspect Ratio */}
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 mb-3.5 border border-slate-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        // Fallback placeholder if image not found
                        target.src = '/hero-knr-products.jpg';
                      }}
                    />
                  </div>

                  {/* Product Title */}
                  <h3 className="text-sm sm:text-base font-bold text-[#0f172a] tracking-tight leading-snug">
                    {product.name}
                  </h3>

                  {/* Product Description */}
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1 min-h-[32px] leading-relaxed">
                    {product.description}
                  </p>

                  {/* Dynamic Price in INR with Unit */}
                  <div className="mt-2.5 flex items-baseline gap-1">
                    <span className="text-base sm:text-lg font-black text-[#0f172a]">
                      {formatINR(product.price)}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {product.unit}
                    </span>
                  </div>

                  {/* Availability Indicator */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                    <span>In Stock</span>
                  </div>
                </div>

                {/* Add to Cart Action Button */}
                <button
                  onClick={() => onAddToCart && onAddToCart(product)}
                  className="w-full mt-3.5 min-h-[44px] bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02] active:scale-95"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* =========================================================================
          4. BULK ENQUIRY CTA SECTION (matching reference image)
         ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 my-10 sm:my-14">
        <div className="bg-[#0c1322] text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
            {/* Left Content with Handshake Icon */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center shrink-0">
                <Handshake className="w-6 h-6 sm:w-7 sm:h-7 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                  Need <span className="text-orange-500">Bulk Orders</span> or{' '}
                  <span className="text-orange-500">Custom Requirements</span>?
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Get in touch with KNR Enterprises to discuss your requirements.
                </p>
              </div>
            </div>

            {/* Right Action Button */}
            <button
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full shadow-lg shadow-orange-500/25 flex items-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95 shrink-0 whitespace-nowrap self-start sm:self-auto"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
