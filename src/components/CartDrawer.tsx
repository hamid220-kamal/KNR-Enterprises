import React from 'react';
import { CartItem, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import {
  X,
  Plus,
  Minus,
  Trash2,
  FileText,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onOpenProforma: () => void;
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
  onOpenProforma,
  language,
  onBrowseProducts,
}) => {
  if (!isOpen) return null;
  const t = TRANSLATIONS[language];

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const gstAmount = Math.round(subtotal * 0.18);
  const totalAmount = subtotal + gstAmount;

  // Check if any items are under MOQ
  const hasMoqWarning = items.some((item) => item.quantity < item.product.moq);

  const handleWhatsAppSend = () => {
    let message = `*KNR Enterprises - RFQ Requirement List*\n`;
    message += `Chevella Highway Depot, Telangana\n`;
    message += `---------------------------------------\n`;
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name}\n   Qty: ${item.quantity} ${item.product.unit}(s) @ ₹${item.product.price.toLocaleString('en-IN')}\n`;
    });
    message += `---------------------------------------\n`;
    message += `Estimated Subtotal: ₹${subtotal.toLocaleString('en-IN')}\n`;
    message += `Estimated GST (18%): ₹${gstAmount.toLocaleString('en-IN')}\n`;
    message += `Total Estimated: ₹${totalAmount.toLocaleString('en-IN')}\n\n`;
    message += `Please provide formal GST proforma quote and delivery dispatch time to our mandal.`;

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
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-orange-100 text-primary rounded-lg">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  {t.cartTitle}
                </h3>
                <p className="text-xs text-slate-500">
                  {items.length} {t.cartItems} • GSTIN: 36CUHPK5939D1ZG
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="py-14 text-center px-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-50 rounded-full flex items-center justify-center text-primary">
                  <FileText className="w-8 h-8 opacity-60" />
                </div>
                <h4 className="font-bold text-slate-800 text-base">
                  {t.emptyCartTitle}
                </h4>
                <p className="text-xs text-slate-500 mt-2 max-w-xs mx-auto leading-relaxed">
                  {t.emptyCartDesc}
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onBrowseProducts();
                  }}
                  className="mt-6 inline-flex items-center gap-2 bg-primary hover:bg-orange-600 text-white font-bold text-xs px-5 py-2.5 rounded-lg shadow-sm transition-all cursor-pointer"
                >
                  <span>{t.shopProducts}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                    Selected Supplies
                  </span>
                  <button
                    onClick={onClearCart}
                    className="text-xs text-rose-500 hover:text-rose-700 font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear All</span>
                  </button>
                </div>

                {/* Items List */}
                <div className="space-y-3">
                  {items.map(({ product, quantity }) => {
                    const isUnderMoq = quantity < product.moq;

                    return (
                      <div
                        key={product.id}
                        className={`p-3 rounded-xl border transition-all ${
                          isUnderMoq
                            ? 'border-amber-300 bg-amber-50/40'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                      >
                        <div className="flex gap-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-16 h-16 rounded-lg object-cover bg-slate-100 shrink-0 border border-slate-200"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-bold text-slate-900 leading-snug line-clamp-2">
                              {language === 'te' ? product.teluguName : product.name}
                            </h4>
                            <p className="text-[11px] text-slate-500 mt-0.5">
                              HSN: <span className="font-mono">{product.hsnCode}</span>
                            </p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs font-bold text-slate-900">
                                ₹{product.price.toLocaleString('en-IN')}{' '}
                                <span className="text-[10px] text-slate-500 font-normal">
                                  / {product.unit}
                                </span>
                              </span>
                              <span className="text-xs font-bold text-primary">
                                ₹{(product.price * quantity).toLocaleString('en-IN')}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Controls & MOQ warning */}
                        <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                          <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50">
                            <button
                              onClick={() =>
                                onUpdateQuantity(product.id, Math.max(1, quantity - 1))
                              }
                              className="p-1 hover:bg-slate-200 rounded-l-lg text-slate-600 cursor-pointer"
                              aria-label="Decrease"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-3 text-xs font-bold text-slate-800">
                              {quantity}
                            </span>
                            <button
                              onClick={() =>
                                onUpdateQuantity(product.id, quantity + 1)
                              }
                              className="p-1 hover:bg-slate-200 rounded-r-lg text-slate-600 cursor-pointer"
                              aria-label="Increase"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(product.id)}
                            className="text-slate-400 hover:text-rose-500 p-1 cursor-pointer transition-colors"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {isUnderMoq && (
                          <div className="mt-2 text-[11px] text-amber-700 bg-amber-100/70 px-2 py-1 rounded flex items-center gap-1 font-medium">
                            <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                            <span>
                              MOQ is {product.moq} {product.unit}s ({product.moqDescription})
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {hasMoqWarning && (
                  <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs">
                    <p className="font-semibold flex items-center gap-1">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      Notice: Some items are under bulk MOQ
                    </p>
                    <p className="text-[11px] mt-0.5 text-amber-700">
                      We still allow generating proforma estimates, but rate slabs apply at recommended wholesale MOQ.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Footer Calculations & Actions */}
          {items.length > 0 && (
            <div className="p-5 bg-slate-50 border-t border-slate-200 space-y-3">
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>{t.subtotal}</span>
                  <span className="font-semibold text-slate-800">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{t.gstEstimate}</span>
                  <span className="font-semibold text-slate-800">
                    ₹{gstAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-200">
                  <span>{t.totalEstimate}</span>
                  <span className="text-primary text-base">
                    ₹{totalAmount.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenProforma();
                  }}
                  className="w-full bg-primary hover:bg-orange-600 active:bg-orange-700 text-white font-bold py-2.5 px-4 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>{t.generateProforma}</span>
                </button>

                <button
                  onClick={handleWhatsAppSend}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm shadow-xs cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t.orderOnWhatsApp}</span>
                </button>
              </div>

              <div className="pt-1 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Authorized for Gram Panchayat Treasury submission</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
