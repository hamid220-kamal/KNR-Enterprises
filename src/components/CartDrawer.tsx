import React from 'react';
import { CartItem, Language } from '../types';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingCart,
  ArrowRight,
  MessageCircle
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onOpenProforma?: () => void;
  language: Language;
  onBrowseProducts: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  language,
  onBrowseProducts,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const gstAmount = Math.round(subtotal * 0.18);
  const totalAmount = subtotal + gstAmount;

  const handleWhatsAppCheckout = () => {
    let message = `*KNR ENTERPRISES - ORDER ENQUIRY*\n`;
    message += `=======================================\n`;
    items.forEach((item, index) => {
      const lineTotal = item.product.price * item.quantity;
      message += `${index + 1}. *${item.product.name}*\n   Qty: ${item.quantity} ${item.product.unit} @ ₹${item.product.price.toLocaleString('en-IN')} / ${item.product.unit}\n   Line Total: ₹${lineTotal.toLocaleString('en-IN')}\n\n`;
    });
    message += `=======================================\n`;
    message += `Subtotal: ₹${subtotal.toLocaleString('en-IN')}\n`;
    message += `Estimated GST (18%): ₹${gstAmount.toLocaleString('en-IN')}\n`;
    message += `*Total Order Amount: ₹${totalAmount.toLocaleString('en-IN')}*\n`;
    message += `=======================================\n`;
    message += `Please confirm stock availability and dispatch timeline to our location.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918886175855?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden print:hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-orange-500/10 text-orange-500 rounded-xl">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  {language === 'te' ? 'మీ కార్ట్' : 'Your Cart'}
                </h3>
                <p className="text-xs text-slate-500">
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center px-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-50 rounded-full flex items-center justify-center text-orange-500">
                  <ShoppingCart className="w-8 h-8 opacity-60" />
                </div>
                <h4 className="font-bold text-slate-800 text-base">
                  {language === 'te' ? 'కార్ట్ ఖాళీగా ఉంది' : 'Your Cart is Empty'}
                </h4>
                <p className="text-xs text-slate-500 mt-2 max-w-xs mx-auto leading-relaxed">
                  {language === 'te'
                    ? 'ఉత్పత్తుల కేటలాగ్ నుండి వస్తువులను మీ కార్ట్‌కు జోడించండి.'
                    : 'Explore our product range and add items directly to your cart for instant WhatsApp checkout.'}
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onBrowseProducts();
                  }}
                  className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md shadow-orange-500/20 transition-all cursor-pointer"
                >
                  <span>{language === 'te' ? 'ఉత్పత్తులను చూడండి' : 'Explore Products'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                    Selected Items ({items.length})
                  </span>
                  <button
                    onClick={onClearCart}
                    className="text-xs text-rose-500 hover:text-rose-700 font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear Cart</span>
                  </button>
                </div>

                {/* Items List */}
                <div className="space-y-3">
                  {items.map(({ product, quantity }) => (
                    <div
                      key={product.id}
                      className="p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all shadow-xs"
                    >
                      <div className="flex gap-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 rounded-xl object-cover bg-slate-100 shrink-0 border border-slate-200"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/hero-knr-products.jpg';
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                            {product.name}
                          </h4>
                          <div className="flex items-center justify-between mt-1.5">
                            <span className="text-xs text-slate-500">
                              ₹{product.price.toLocaleString('en-IN')}{' '}
                              <span className="text-[10px]">/ {product.unit}</span>
                            </span>
                            <span className="text-xs font-bold text-orange-600">
                              ₹{(product.price * quantity).toLocaleString('en-IN')}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Quantity Controls & Remove */}
                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50">
                          <button
                            onClick={() =>
                              onUpdateQuantity(product.id, Math.max(1, quantity - 1))
                            }
                            className="p-1.5 hover:bg-slate-200 rounded-l-lg text-slate-600 cursor-pointer transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 text-xs font-bold text-slate-800 min-w-[28px] text-center">
                            {quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(product.id, quantity + 1)
                            }
                            className="p-1.5 hover:bg-slate-200 rounded-r-lg text-slate-600 cursor-pointer transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(product.id)}
                          className="text-slate-400 hover:text-rose-500 p-1.5 rounded-lg hover:bg-rose-50 cursor-pointer transition-colors"
                          title="Remove item"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Footer Calculations & Direct WhatsApp Checkout Action */}
          {items.length > 0 && (
            <div className="p-5 bg-slate-50 border-t border-slate-200 space-y-3">
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-800">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated GST (18%)</span>
                  <span className="font-semibold text-slate-800">
                    ₹{gstAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Total Amount</span>
                  <span className="text-orange-600 text-base font-black">
                    ₹{totalAmount.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Direct WhatsApp Checkout Button */}
              <div className="pt-2">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white font-bold py-3.5 px-5 rounded-xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2.5 text-sm sm:text-base transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>Checkout on WhatsApp</span>
                </button>
              </div>

              <div className="pt-1 text-center text-[11px] text-slate-400">
                Opens WhatsApp with your prefilled order items for instant confirmation from KNR Enterprises (+91 8886175855).
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
