import React, { useState, useEffect } from 'react';
import { Screen, Language, CartItem, Product } from './types';
import { PRODUCTS } from './data/products';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProformaModal } from './components/ProformaModal';
import { HomeScreen } from './components/Screens/HomeScreen';
import { CatalogScreen } from './components/Screens/CatalogScreen';
import { ServicesScreen } from './components/Screens/ServicesScreen';
import { AboutScreen } from './components/Screens/AboutScreen';
import { FaqsScreen } from './components/Screens/FaqsScreen';
import { ContactScreen } from './components/Screens/ContactScreen';
import { MessageCircle, ArrowUp, Home, Package, Truck, ShoppingCart, PhoneCall } from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [language, setLanguage] = useState<Language>('en');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProformaOpen, setIsProformaOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Initial cart with items validated from localStorage or default mockups
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('knr_cart_items');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const validated = parsed.filter(
            (item): item is CartItem =>
              Boolean(
                item &&
                item.product &&
                typeof item.product.id === 'string' &&
                typeof item.product.price === 'number' &&
                typeof item.quantity === 'number' &&
                item.quantity > 0
              )
          );
          if (validated.length > 0) return validated;
        }
      }
    } catch {
      // fallback to defaults on corrupt storage
    }
    return [
      { product: PRODUCTS[0], quantity: 5 },
      { product: PRODUCTS[1], quantity: 4 },
      { product: PRODUCTS[2], quantity: 2 },
    ];
  });

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('knr_cart_items', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen to hash changes if user uses back/forward or direct hash links
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as Screen;
      if (['home', 'products', 'services', 'about', 'faqs', 'contact'].includes(hash)) {
        setCurrentScreen(hash);
      }
    };
    if (window.location.hash) {
      handleHash();
    }
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
    window.location.hash = screen;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: product.moq }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'te' : 'en'));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      {/* Shared Header Navigation */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenProforma={() => setIsProformaOpen(true)}
        language={language}
        onToggleLanguage={handleToggleLanguage}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Screen Views with bottom spacing for mobile web app bar */}
      <main className="flex-1 pb-20 md:pb-0">
        {currentScreen === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              handleNavigate('products');
            }}
            language={language}
          />
        )}

        {currentScreen === 'products' && (
          <CatalogScreen
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onOpenProforma={() => setIsProformaOpen(true)}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            language={language}
          />
        )}

        {currentScreen === 'services' && (
          <ServicesScreen
            onNavigate={handleNavigate}
            onOpenProforma={() => setIsProformaOpen(true)}
            language={language}
          />
        )}

        {currentScreen === 'about' && (
          <AboutScreen
            onNavigate={handleNavigate}
            onOpenProforma={() => setIsProformaOpen(true)}
            language={language}
          />
        )}

        {currentScreen === 'faqs' && (
          <FaqsScreen
            onNavigate={handleNavigate}
            language={language}
          />
        )}

        {currentScreen === 'contact' && (
          <ContactScreen
            onNavigate={handleNavigate}
            language={language}
          />
        )}
      </main>

      {/* Shared Footer (Hidden on mobile phones as requested) */}
      <Footer
        onNavigate={handleNavigate}
        language={language}
        onOpenProforma={() => setIsProformaOpen(true)}
      />

      {/* Mobile Web Application App Bar (Bottom Navigation for mobile) */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 md:hidden py-2 px-3 flex items-center justify-around shadow-2xl print:hidden">
        <button
          onClick={() => handleNavigate('home')}
          className={`flex flex-col items-center justify-center p-1 cursor-pointer transition-colors ${
            currentScreen === 'home' ? 'text-primary font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">{language === 'te' ? 'హోమ్' : 'Home'}</span>
        </button>

        <button
          onClick={() => handleNavigate('products')}
          className={`flex flex-col items-center justify-center p-1 cursor-pointer transition-colors ${
            currentScreen === 'products' ? 'text-primary font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Package className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">{language === 'te' ? 'ఉత్పత్తులు' : 'Products'}</span>
        </button>

        <button
          onClick={() => handleNavigate('services')}
          className={`flex flex-col items-center justify-center p-1 cursor-pointer transition-colors ${
            currentScreen === 'services' ? 'text-primary font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Truck className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">{language === 'te' ? 'రవాణా' : 'Services'}</span>
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center justify-center p-1 cursor-pointer text-slate-500 hover:text-primary transition-colors"
          aria-label="View RFQ Cart"
        >
          <ShoppingCart className="w-5 h-5" />
          {cartItems.length > 0 && (
            <span className="absolute -top-0.5 right-1.5 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
          <span className="text-[10px] mt-0.5">{language === 'te' ? 'కార్ట్' : 'RFQ Cart'}</span>
        </button>

        <button
          onClick={() => handleNavigate('contact')}
          className={`flex flex-col items-center justify-center p-1 cursor-pointer transition-colors ${
            currentScreen === 'contact' ? 'text-primary font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <PhoneCall className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">{language === 'te' ? 'కాంటాక్ట్' : 'Contact'}</span>
        </button>
      </nav>

      {/* Slide-over Cart & RFQ Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOpenProforma={() => {
          setIsCartOpen(false);
          setIsProformaOpen(true);
        }}
        language={language}
        onBrowseProducts={() => handleNavigate('products')}
      />

      {/* Official GST-3B Proforma Invoice Modal */}
      <ProformaModal
        isOpen={isProformaOpen}
        onClose={() => setIsProformaOpen(false)}
        items={cartItems}
        language={language}
      />

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/918886175855?text=Hello%20KNR%20Enterprises,%20we%20require%20municipal%20supplies%20quotation"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center cursor-pointer group print:hidden"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
          Chat with Us
        </span>
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-36 md:bottom-20 right-4 md:right-6 z-30 bg-slate-800/80 hover:bg-slate-900 text-white p-2.5 rounded-full shadow-md transition-all cursor-pointer print:hidden"
          title="Scroll to Top"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
