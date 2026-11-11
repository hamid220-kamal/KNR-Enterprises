import React, { useState, useMemo } from 'react';
import { Screen, Language, Product, CatalogFilterState } from '../../types';
import { PRODUCTS, CATEGORIES } from '../../data/products';
import { TRANSLATIONS } from '../../data/translations';
import {
  Search,
  SlidersHorizontal,
  RotateCcw,
  Star,
  CheckCircle2,
  Clock,
  FileText,
  Phone,
  MessageCircle,
  Download,
  Grid,
  List,
  ChevronDown,
  ShieldCheck,
  Check
} from 'lucide-react';

interface CatalogScreenProps {
  onNavigate: (screen: Screen) => void;
  onAddToCart: (product: Product) => void;
  onOpenProforma: () => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  language: Language;
}

export const CatalogScreen: React.FC<CatalogScreenProps> = ({
  onNavigate,
  onAddToCart,
  onOpenProforma,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  language,
}) => {
  const t = TRANSLATIONS[language];
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [maxPrice, setMaxPrice] = useState<number>(35000);
  const [inStockOnly, setInStockOnly] = useState<boolean>(true);
  const [selectedMoqTier, setSelectedMoqTier] = useState<string>('all');
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<'popularity' | 'price-asc' | 'price-desc' | 'rating'>('popularity');

  const handleResetFilters = () => {
    onSelectCategory('all');
    onSearchChange('');
    setMaxPrice(35000);
    setInStockOnly(false);
    setSelectedMoqTier('all');
    setMinRating(0);
    setSortBy('popularity');
  };

  // Filter products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesTelugu = product.teluguName.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        const matchesHsn = product.hsnCode.toLowerCase().includes(query);
        const matchesBadge = product.badge?.toLowerCase().includes(query);
        if (!matchesName && !matchesTelugu && !matchesCategory && !matchesHsn && !matchesBadge) {
          return false;
        }
      }
      // Price filter
      if (product.price > maxPrice) {
        return false;
      }
      // Stock
      if (inStockOnly && !product.inStock) {
        return false;
      }
      // Rating
      if (minRating > 0 && product.rating < minRating) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.reviewCount - a.reviewCount; // popularity
    });
  }, [selectedCategory, searchQuery, maxPrice, inStockOnly, minRating, sortBy]);

  const categoryPills = [
    { id: 'all', label: 'All Products (12)' },
    { id: 'Disinfectants & Chemicals', label: 'Disinfectants & Chemicals (2)' },
    { id: 'Pest & Vector Control', label: 'Pest & Vector Control (3)' },
    { id: 'Waste Management', label: 'Waste Management (2)' },
    { id: 'Municipal Infrastructure', label: 'Municipal Infrastructure (1)' },
    { id: 'Sanitization Tools', label: 'Sanitization Tools (3)' },
    { id: 'Civic Landscaping', label: 'Civic Landscaping (1)' },
  ];

  return (
    <div className="space-y-8 pb-16">
      {/* 1. TOP HEADER & BREADCRUMB */}
      <section className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-3">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">
              Municipal Sanitation & Civil Supplies Catalog
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-primary mb-2">
                <FileText className="w-3.5 h-3.5" />
                <span>12 Certified Products Available</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Municipal & Institutional Catalog
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                Contractor-grade wholesale pricing for Gram Panchayats, Municipal Corporations, and civil infrastructure EPC projects across all 33 Telangana districts.
              </p>
              <div className="flex items-center gap-2 mt-2 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>GST-3B Compliant • Direct Chevella Depot Dispatch</span>
              </div>
            </div>

            {/* Quick Action Cards */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenProforma}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-2xs transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-primary" />
                <span>Download Rate Card</span>
              </button>

              <a
                href="tel:8886175855"
                className="inline-flex items-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Depot Hotline: 8886175855</span>
              </a>
            </div>
          </div>

          {/* Category Filter Horizontal Pills */}
          <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categoryPills.map((pill) => {
              const isActive = selectedCategory === pill.id;
              return (
                <button
                  key={pill.id}
                  onClick={() => onSelectCategory(pill.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {pill.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. MAIN CATALOG BODY (SIDEBAR + PRODUCT GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Sticky Filter Sidebar (3 cols) */}
          <div className="lg:col-span-3 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                <SlidersHorizontal className="w-4 h-4 text-primary" />
                <span>Filter Supplies</span>
              </div>
              <button
                onClick={handleResetFilters}
                className="text-xs text-primary hover:underline font-bold flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>RESET ALL</span>
              </button>
            </div>

            {/* Category Select Radio/Check */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Catalog Category
              </h4>
              <div className="space-y-2 text-xs">
                {CATEGORIES.map((c) => (
                  <label
                    key={c.id}
                    className="flex items-center justify-between cursor-pointer group"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="catalogCat"
                        checked={selectedCategory === c.id}
                        onChange={() => onSelectCategory(c.id)}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-slate-700 group-hover:text-primary transition-colors">
                        {c.name}
                      </span>
                    </div>
                    <span className="text-slate-400 font-mono text-[11px]">{c.count}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Max Price Range Slider */}
            <div className="space-y-2 pt-4 border-t border-slate-100">
              <div className="flex justify-between items-center text-xs font-bold text-slate-900">
                <span>Max Price (₹)</span>
                <span className="text-primary font-mono">₹{maxPrice.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="500"
                max="35000"
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-primary cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>₹500</span>
                <span>₹18,000</span>
                <span>₹35,000+</span>
              </div>
            </div>

            {/* Depot Stock Status */}
            <div className="space-y-2 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Depot Stock Status
              </h4>
              <div className="space-y-2 text-xs">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="rounded text-primary focus:ring-primary"
                  />
                  <span className="text-slate-700 font-semibold">In Stock (Immediate Dispatch)</span>
                </label>
              </div>
            </div>

            {/* Minimum Rating Filter */}
            <div className="space-y-2 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Contractor Rating
              </h4>
              <div className="space-y-1.5 text-xs">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="minRating"
                    checked={minRating === 4.5}
                    onChange={() => setMinRating(4.5)}
                    className="text-primary focus:ring-primary"
                  />
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="text-slate-700">4.5 & above</span>
                  </div>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="minRating"
                    checked={minRating === 4.0}
                    onChange={() => setMinRating(4.0)}
                    className="text-primary focus:ring-primary"
                  />
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="text-slate-700">4.0 & above</span>
                  </div>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="minRating"
                    checked={minRating === 0}
                    onChange={() => setMinRating(0)}
                    className="text-primary focus:ring-primary"
                  />
                  <span className="text-slate-700">All Ratings</span>
                </label>
              </div>
            </div>

            {/* Standards & Certifications Badges */}
            <div className="space-y-2 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Standards & Regulatory
              </h4>
              <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-600">
                <span className="bg-slate-100 px-2 py-1 rounded">ISI Certified</span>
                <span className="bg-slate-100 px-2 py-1 rounded">CIB Registered</span>
                <span className="bg-slate-100 px-2 py-1 rounded">Swachh Bharat Std</span>
                <span className="bg-slate-100 px-2 py-1 rounded">IP66 Weatherproof</span>
              </div>
            </div>

            {/* Custom G.O. Estimates Help Card */}
            <div className="p-3.5 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 text-xs space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Custom G.O. Estimates?</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Need special council approval specs or formal Panchayat Quotation format? Contact our Managing Partner directly.
              </p>
              <div className="pt-1 space-y-1">
                <p className="font-semibold text-slate-800">K. Narendar Reddy</p>
                <a
                  href="tel:8886175855"
                  className="font-mono text-primary font-bold hover:underline block"
                >
                  8886175855
                </a>
                <a
                  href="https://wa.me/918886175855?text=Hello%20KNR%20Enterprises,%20we%20need%20custom%20estimates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-700 hover:underline font-semibold pt-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Quotation</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Product Grid Area (9 cols) */}
          <div className="lg:col-span-9 space-y-6">
            {/* Top Toolbar (Search, Sort, View Toggle) */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Product Search Input */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Search by product, ISI standard, HSN..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 focus:bg-white border border-slate-200 focus:border-primary rounded-xl text-xs focus:outline-none transition-colors"
                />
              </div>

              {/* Sort By & View Toggle */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-500 font-semibold whitespace-nowrap">Sort By:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 font-semibold focus:outline-none focus:border-primary cursor-pointer"
                  >
                    <option value="popularity">Popularity / Best Match</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>

                <div className="hidden sm:flex items-center border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 ${viewMode === 'grid' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'} cursor-pointer`}
                    title="Grid View"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 ${viewMode === 'list' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'} cursor-pointer`}
                    title="List View"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filter Chips */}
            {(selectedCategory !== 'all' || searchQuery || maxPrice < 35000 || inStockOnly || minRating > 0) && (
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold text-slate-500">Active Filters:</span>
                {selectedCategory !== 'all' && (
                  <span className="bg-orange-100 text-primary px-2.5 py-1 rounded-md font-medium">
                    Category: {selectedCategory}
                  </span>
                )}
                {searchQuery && (
                  <span className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-md font-medium">
                    Query: "{searchQuery}"
                  </span>
                )}
                {maxPrice < 35000 && (
                  <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                    Max ₹{maxPrice.toLocaleString('en-IN')}
                  </span>
                )}
                {inStockOnly && (
                  <span className="bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md font-medium">
                    In Stock Only
                  </span>
                )}
                {minRating > 0 && (
                  <span className="bg-amber-100 text-amber-800 px-2.5 py-1 rounded-md font-medium">
                    Rating ≥ {minRating}
                  </span>
                )}
                <button
                  onClick={handleResetFilters}
                  className="text-primary hover:underline font-bold ml-2 cursor-pointer"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* Empty State */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-50 text-primary rounded-full flex items-center justify-center">
                  <Search className="w-8 h-8 opacity-60" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  No matching municipal supplies found
                </h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Try adjusting your price range, clearing category filters, or search for broader keywords like "bleaching", "dustbin", or "light".
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-5 bg-primary hover:bg-orange-600 text-white font-bold text-xs px-5 py-2.5 rounded-lg shadow-xs cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              /* Product Listing (Grid / List) */
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'
                    : 'space-y-4'
                }
              >
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className={`bg-white rounded-2xl border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-lg transition-all flex overflow-hidden group ${
                      viewMode === 'grid' ? 'flex-col justify-between' : 'flex-col sm:flex-row items-center p-4 gap-4'
                    }`}
                  >
                    {/* Media */}
                    <div
                      className={
                        viewMode === 'grid'
                          ? 'relative aspect-4/3 overflow-hidden bg-slate-100 m-3 rounded-xl'
                          : 'relative w-full sm:w-44 h-40 overflow-hidden bg-slate-100 rounded-xl shrink-0'
                      }
                    >
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

                    {/* Content */}
                    <div className={viewMode === 'grid' ? 'p-4 pt-0 flex-1 flex flex-col justify-between' : 'flex-1 min-w-0'}>
                      <div>
                        {/* Rating */}
                        <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-1.5">
                          <div className="flex text-amber-400">
                            <Star className="w-3.5 h-3.5 fill-current" />
                          </div>
                          <span className="font-bold text-slate-800">{product.rating}</span>
                          <span className="text-slate-400">({product.reviewCount})</span>
                          <span className="text-slate-300">•</span>
                          <span className="font-mono text-[11px] text-slate-500">HSN {product.hsnCode}</span>
                        </div>

                        {/* Title */}
                        <h3 className="font-bold text-sm text-slate-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {language === 'te' ? product.teluguName : product.name}
                        </h3>

                        {/* Description in List mode */}
                        {viewMode === 'list' && (
                          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                            {product.description}
                          </p>
                        )}

                        {/* Price & MOQ */}
                        <div className="mt-3 pt-2 border-t border-slate-100">
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
                            <Clock className="w-3 h-3 text-primary shrink-0" />
                            <span>MOQ: {product.moqDescription}</span>
                          </p>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-2 mt-4 pt-2">
                        <button
                          onClick={() => onAddToCart(product)}
                          className="bg-primary hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-xs py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-2xs"
                        >
                          <span>{t.addToCart}</span>
                        </button>
                        <button
                          onClick={() => {
                            onAddToCart(product);
                            onOpenProforma();
                          }}
                          className="border border-slate-200 hover:border-primary text-slate-700 hover:text-primary font-semibold text-xs py-2 px-3 rounded-lg transition-colors flex items-center justify-center cursor-pointer"
                        >
                          <span>{t.quoteOnly}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <p>
                Showing <strong className="text-slate-900">1-{filteredProducts.length}</strong> of{' '}
                <strong className="text-slate-900">{PRODUCTS.length}</strong> certified catalog items
              </p>
              <div className="flex items-center space-x-1">
                <button
                  disabled
                  className="px-3 py-1.5 rounded-md border border-slate-200 text-slate-400 cursor-not-allowed"
                >
                  Prev
                </button>
                <button className="px-3 py-1.5 rounded-md bg-primary text-white font-bold">
                  1
                </button>
                <button
                  disabled
                  className="px-3 py-1.5 rounded-md border border-slate-200 text-slate-400 cursor-not-allowed"
                >
                  2
                </button>
                <button
                  disabled
                  className="px-3 py-1.5 rounded-md border border-slate-200 text-slate-400 cursor-not-allowed"
                >
                  3
                </button>
                <button
                  disabled
                  className="px-3 py-1.5 rounded-md border border-slate-200 text-slate-400 cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
