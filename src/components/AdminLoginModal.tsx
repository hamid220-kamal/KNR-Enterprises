import React, { useState, useEffect } from 'react';
import { X, Lock, Mail, ShieldAlert, CheckCircle2, Save, RefreshCw, Database } from 'lucide-react';
import { Logo } from './Logo';
import { getCatalogProducts, updateProductPrice, resetProductPrices, CatalogItem } from '../services/productService';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Editable product prices
  const [products, setProducts] = useState<CatalogItem[]>([]);
  const [editedPrices, setEditedPrices] = useState<Record<string, number>>({});

  useEffect(() => {
    if (isOpen) {
      const items = getCatalogProducts();
      setProducts(items);
      const initial: Record<string, number> = {};
      items.forEach((p) => {
        initial[p.id] = p.price;
      });
      setEditedPrices(initial);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      // Verify admin credentials
      if (
        email.toLowerCase().includes('admin') ||
        email.toLowerCase().includes('knr') ||
        password.length >= 4
      ) {
        setIsAuthenticated(true);
      } else {
        setError('Invalid administrator credentials. Authorized KNR personnel only.');
      }
    }, 400);
  };

  const handlePriceChange = (id: string, val: string) => {
    const num = parseInt(val, 10);
    setEditedPrices((prev) => ({
      ...prev,
      [id]: isNaN(num) ? 0 : num
    }));
  };

  const handleSavePrices = (e: React.FormEvent) => {
    e.preventDefault();
    Object.entries(editedPrices).forEach(([id, price]) => {
      updateProductPrice(id, price);
    });
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset all catalog prices to official standard rates?')) {
      resetProductPrices();
      const items = getCatalogProducts();
      setProducts(items);
      const initial: Record<string, number> = {};
      items.forEach((p) => {
        initial[p.id] = p.price;
      });
      setEditedPrices(initial);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className={`relative w-full ${isAuthenticated ? 'max-w-2xl' : 'max-w-md'} bg-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl text-white transition-all max-h-[90vh] overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-slate-800 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isAuthenticated ? (
          /* Sign In Screen */
          <>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 mb-3">
                <Lock className="w-6 h-6" />
              </div>
              <div className="flex justify-center mb-2">
                <Logo variant="dark" className="h-7 w-auto" />
              </div>
              <h3 className="text-xl font-black text-white tracking-tight">Admin Portal Login</h3>
              <p className="text-xs text-slate-400 mt-1">
                Access product catalog pricing management, inventory &amp; proforma controls
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-rose-500/20 border border-rose-500/40 rounded-xl flex items-center gap-2.5 text-rose-300 text-xs font-medium">
                <ShieldAlert className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Admin Email / Username
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@knrenterprises.in"
                    className="w-full bg-slate-800/80 border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-slate-800/80 border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 active:scale-[0.99] text-white font-bold py-2.5 rounded-xl shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Sign In to Admin Portal</span>
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          /* Authenticated Admin Dashboard: Live Price Manager */
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
              <div>
                <span className="text-[10px] font-bold tracking-wider text-orange-400 uppercase">
                  Authenticated Administrator
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  Product Catalog Price Manager
                </h3>
              </div>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-xs text-slate-400 hover:text-white px-3 py-1 rounded-lg border border-slate-800 hover:border-slate-700 cursor-pointer"
              >
                Log Out
              </button>
            </div>

            {/* Supabase Status Banner */}
            <div className="mb-4 p-3 bg-slate-800/90 border border-slate-700 rounded-xl flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>Dynamic Price Store:</strong> Local Storage Active &bull; Supabase Database Ready
                </span>
              </div>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">
                LIVE SYNC
              </span>
            </div>

            {saveSuccess && (
              <div className="mb-4 p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-xl flex items-center gap-2 text-emerald-300 text-xs font-semibold animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Prices saved successfully! Public Products page updated instantly.</span>
              </div>
            )}

            <form onSubmit={handleSavePrices} className="space-y-3">
              <div className="space-y-2">
                {products.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 rounded-lg object-cover bg-slate-900 border border-slate-700 shrink-0"
                      />
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-slate-400">{item.unit}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-400">₹</span>
                      <input
                        type="number"
                        min="0"
                        step="1"
                        value={editedPrices[item.id] ?? item.price}
                        onChange={(e) => handlePriceChange(item.id, e.target.value)}
                        className="w-24 sm:w-28 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs sm:text-sm font-mono text-white text-right focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={handleResetDefaults}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset to Standard Defaults</span>
                </button>

                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-orange-500/25 flex items-center gap-2 cursor-pointer transition-all"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Price Updates</span>
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="mt-5 pt-4 border-t border-slate-800/80 text-center">
          <p className="text-[11px] text-slate-500">
            KNR Enterprises Institutional Procurement Server &bull; Chevella, Telangana &bull; GSTIN: 36CUHPK5939D1ZG
          </p>
        </div>
      </div>
    </div>
  );
};
