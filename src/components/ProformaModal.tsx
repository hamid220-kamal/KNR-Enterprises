import React, { useState } from 'react';
import { CartItem, Language, ProformaInvoiceData } from '../types';
import { TRANSLATIONS } from '../data/translations';
import {
  X,
  Printer,
  Download,
  Share2,
  Building,
  User,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle,
  FileText
} from 'lucide-react';

interface ProformaModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  language: Language;
}

export const ProformaModal: React.FC<ProformaModalProps> = ({
  isOpen,
  onClose,
  items,
  language,
}) => {
  if (!isOpen) return null;
  const t = TRANSLATIONS[language];

  // Default invoice metadata
  const today = new Date().toISOString().split('T')[0];
  const defaultInvoiceNo = `KNR/EST/${new Date().getFullYear()}/${Math.floor(1000 + Math.random() * 9000)}`;

  const [formData, setFormData] = useState<ProformaInvoiceData>({
    invoiceNumber: defaultInvoiceNo,
    date: today,
    panchayatName: 'Gram Panchayat Chevella',
    officerName: 'K. Rajesh',
    designation: 'Sarpanch / Authorized Officer',
    mandal: 'Chevella Mandal',
    district: 'Ranga Reddy District',
    state: 'Telangana (State Code: 36)',
    phone: '+91 98765 43210',
    email: 'panchayat.chevella@telangana.gov.in',
    buyerGstin: '36AAAAA0000A1Z5',
    deliveryTimeline: 'Within 24-48 Hours from PO confirmation',
    transportMode: 'Direct Truckload Dispatch to Mandal site',
    notes: 'Rates quoted are inclusive of packing, lab assay certification, and highway freight up to delivery location.',
  });

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const cgst = Math.round(subtotal * 0.09);
  const sgst = Math.round(subtotal * 0.09);
  const totalGst = cgst + sgst;
  const grandTotal = subtotal + totalGst;

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsAppShare = () => {
    let msg = `*KNR ENTERPRISES - PROFORMA ESTIMATE*\n`;
    msg += `Ref: ${formData.invoiceNumber} | Date: ${formData.date}\n`;
    msg += `Buyer: ${formData.panchayatName}, ${formData.mandal}\n`;
    msg += `---------------------------------------\n`;
    items.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.product.name}\n   HSN: ${item.product.hsnCode} | Qty: ${item.quantity} ${item.product.unit} @ ₹${item.product.price}\n`;
    });
    msg += `---------------------------------------\n`;
    msg += `Taxable Value: ₹${subtotal.toLocaleString('en-IN')}\n`;
    msg += `CGST (9%) + SGST (9%): ₹${totalGst.toLocaleString('en-IN')}\n`;
    msg += `Grand Total: ₹${grandTotal.toLocaleString('en-IN')}\n`;
    msg += `Supplier GSTIN: 36CUHPK5939D1ZG\n`;
    msg += `Dispatch Contact: K. Narendar Reddy (+91 8886175855)`;

    window.open(`https://wa.me/918886175855?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6">
      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Control Bar (Hidden when printing) */}
        <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-orange-400" />
            <div>
              <h3 className="font-bold text-sm tracking-wide">
                {t.proformaTitle}
              </h3>
              <p className="text-[11px] text-slate-300">
                Official GST-3B Proforma Estimate for Gram Panchayat / Civil Tenders
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 bg-primary hover:bg-orange-600 text-white font-bold text-xs px-3.5 py-1.5 rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={handleWhatsAppShare}
              className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container (Printable Area) */}
        <div id="printable-proforma" className="overflow-y-auto flex-1 p-4 sm:p-8 space-y-6 text-slate-800 printable-document">
          {/* Document Header */}
          <div className="border-b-2 border-slate-900 pb-5">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <img
                    src="/logo.png"
                    alt="KNR Enterprises - We Supply"
                    className="h-11 sm:h-12 w-auto max-w-[200px] object-contain"
                  />
                  <div className="border-l border-slate-300 pl-3">
                    <p className="text-[10px] font-bold tracking-widest text-primary uppercase">
                      GOVERNMENT & PANCHAYAT SUPPLIER
                    </p>
                    <p className="text-[11px] font-semibold text-slate-600">
                      Municipal & Sanitation Wholesale
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-2 max-w-sm leading-relaxed">
                  H.No: 1-77/6, Near HP Petrol Pump, Chevella Mandal, Ranga Reddy District, Telangana - 501503
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700 font-semibold mt-1">
                  <span>Tel: +91 8886175855 / 9640195798</span>
                  <span>Email: knrenterprises679@gmail.com</span>
                </div>
              </div>

              {/* Statutory Invoice Number Box */}
              <div className="text-left sm:text-right bg-slate-50 border border-slate-200 p-3.5 rounded-xl min-w-[240px]">
                <div className="text-[11px] font-bold text-primary uppercase tracking-wide">
                  GST-3B PROFORMA ESTIMATE
                </div>
                <div className="text-xs text-slate-500 mt-1 font-mono">
                  Ref No: <span className="font-bold text-slate-900">{formData.invoiceNumber}</span>
                </div>
                <div className="text-xs text-slate-500 font-mono">
                  Date: <span className="font-semibold text-slate-800">{formData.date}</span>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-200 text-xs">
                  <span className="font-bold text-slate-900">GSTIN: </span>
                  <span className="font-mono text-emerald-700 font-bold">36CUHPK5939D1ZG</span>
                  <span className="block text-[10px] text-slate-500">State Code: 36 (Telangana)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Buyer Details Editable Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 border border-slate-200 rounded-xl p-4">
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-primary" />
                <span>Buyer / Billed To:</span>
              </h4>
              <div className="space-y-1.5 text-xs">
                <input
                  type="text"
                  value={formData.panchayatName}
                  onChange={(e) => setFormData({ ...formData, panchayatName: e.target.value })}
                  placeholder="Gram Panchayat / Department Name"
                  className="w-full bg-white font-bold text-slate-900 px-2.5 py-1.5 rounded border border-slate-200 text-xs focus:border-primary focus:outline-none"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={formData.officerName}
                    onChange={(e) => setFormData({ ...formData, officerName: e.target.value })}
                    placeholder="Officer Name"
                    className="w-full bg-white px-2.5 py-1.5 rounded border border-slate-200 text-xs focus:border-primary focus:outline-none"
                  />
                  <input
                    type="text"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    placeholder="Designation"
                    className="w-full bg-white px-2.5 py-1.5 rounded border border-slate-200 text-xs focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={formData.mandal}
                    onChange={(e) => setFormData({ ...formData, mandal: e.target.value })}
                    placeholder="Mandal"
                    className="w-full bg-white px-2.5 py-1.5 rounded border border-slate-200 text-xs focus:border-primary focus:outline-none"
                  />
                  <input
                    type="text"
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    placeholder="District"
                    className="w-full bg-white px-2.5 py-1.5 rounded border border-slate-200 text-xs focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span>Contact & Dispatch Terms:</span>
              </h4>
              <div className="space-y-1.5 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Mobile Number"
                    className="w-full bg-white px-2.5 py-1.5 rounded border border-slate-200 text-xs focus:border-primary focus:outline-none"
                  />
                  <input
                    type="text"
                    value={formData.buyerGstin}
                    onChange={(e) => setFormData({ ...formData, buyerGstin: e.target.value })}
                    placeholder="Buyer GSTIN (if applicable)"
                    className="w-full bg-white font-mono px-2.5 py-1.5 rounded border border-slate-200 text-xs focus:border-primary focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  value={formData.deliveryTimeline}
                  onChange={(e) => setFormData({ ...formData, deliveryTimeline: e.target.value })}
                  placeholder="Delivery Timeline"
                  className="w-full bg-white px-2.5 py-1.5 rounded border border-slate-200 text-xs focus:border-primary focus:outline-none"
                />
                <input
                  type="text"
                  value={formData.transportMode}
                  onChange={(e) => setFormData({ ...formData, transportMode: e.target.value })}
                  placeholder="Transport / Dispatch Mode"
                  className="w-full bg-white px-2.5 py-1.5 rounded border border-slate-200 text-xs focus:border-primary focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Itemized Table */}
          <div className="border border-slate-200 rounded-xl overflow-x-auto shadow-2xs">
            <table className="w-full min-w-[640px] text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3 w-10 text-center">#</th>
                  <th className="py-2.5 px-3">Item Description</th>
                  <th className="py-2.5 px-3 text-center">HSN</th>
                  <th className="py-2.5 px-3 text-center">Qty</th>
                  <th className="py-2.5 px-3 text-right">Unit Rate (₹)</th>
                  <th className="py-2.5 px-3 text-right">Taxable Amt (₹)</th>
                  <th className="py-2.5 px-3 text-right">GST (18%)</th>
                  <th className="py-2.5 px-3 text-right">Total (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {items.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-8 text-center text-slate-400">
                      No items currently selected in RFQ cart.
                    </td>
                  </tr>
                ) : (
                  items.map((item, index) => {
                    const itemTaxable = item.product.price * item.quantity;
                    const itemGst = Math.round(itemTaxable * 0.18);
                    const itemTotal = itemTaxable + itemGst;

                    return (
                      <tr key={item.product.id} className="hover:bg-slate-50/50">
                        <td className="py-2.5 px-3 text-center font-mono text-slate-500">
                          {index + 1}
                        </td>
                        <td className="py-2.5 px-3">
                          <p className="font-bold text-slate-900">{item.product.name}</p>
                          <p className="text-[10px] text-slate-500">{item.product.moqDescription}</p>
                        </td>
                        <td className="py-2.5 px-3 text-center font-mono text-slate-600">
                          {item.product.hsnCode}
                        </td>
                        <td className="py-2.5 px-3 text-center font-bold text-slate-800">
                          {item.quantity} {item.product.unit}
                        </td>
                        <td className="py-2.5 px-3 text-right font-mono">
                          ₹{item.product.price.toLocaleString('en-IN')}
                        </td>
                        <td className="py-2.5 px-3 text-right font-mono font-semibold">
                          ₹{itemTaxable.toLocaleString('en-IN')}
                        </td>
                        <td className="py-2.5 px-3 text-right font-mono text-slate-600">
                          ₹{itemGst.toLocaleString('en-IN')}
                        </td>
                        <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-900">
                          ₹{itemTotal.toLocaleString('en-IN')}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Calculations Summary & Bank Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Bank RTGS / NEFT Details */}
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 text-xs">
              <h5 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Official Remittance & Bank Credentials</span>
              </h5>
              <div className="text-[11px] space-y-1 text-slate-700">
                <p><span className="text-slate-500">Account Name:</span> <strong className="font-mono">KNR ENTERPRISES</strong></p>
                <p><span className="text-slate-500">Bank:</span> State Bank of India, Chevella Branch</p>
                <p><span className="text-slate-500">Account Number:</span> <strong className="font-mono">4189201004721</strong> (Current A/c)</p>
                <p><span className="text-slate-500">IFSC Code:</span> <strong className="font-mono">SBIN0020478</strong></p>
                <p className="text-[10px] text-slate-500 pt-1">
                  * Gram Panchayat treasury tokens and cross bearer cheques accepted.
                </p>
              </div>
            </div>

            {/* Total Math */}
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">Total Taxable Value (Excl. Tax):</span>
                <span className="font-bold font-mono text-slate-900">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">Central GST (CGST @ 9%):</span>
                <span className="font-mono text-slate-700">₹{cgst.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">State GST (SGST @ 9%):</span>
                <span className="font-mono text-slate-700">₹{sgst.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between py-2 border-t-2 border-slate-900 text-sm font-black text-slate-900">
                <span>Total Amount Payable (Incl. GST):</span>
                <span className="text-primary text-base font-mono">₹{grandTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          {/* Terms & Authorized Stamp */}
          <div className="pt-4 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4 items-end text-xs">
            <div className="text-[11px] text-slate-500 space-y-1">
              <p className="font-bold text-slate-700">Statutory Proforma Declaration:</p>
              <p>1. This estimate is valid for 15 days from issue date.</p>
              <p>2. Material matches Telangana state lab assay parameters (chlorine &gt; 33%, virgin HDPE).</p>
              <p>3. Subject to Chevella jurisdiction.</p>
            </div>

            <div className="text-right">
              <p className="text-xs font-bold text-slate-900">For KNR ENTERPRISES</p>
              <div className="h-14 flex items-center justify-end">
                <div className="border border-dashed border-slate-300 rounded px-4 py-2 text-center text-[10px] text-slate-400">
                  [ Authorized Signatory & Seal ]
                </div>
              </div>
              <p className="text-xs font-semibold text-slate-700">K. Narendar Reddy, Managing Partner</p>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions (Hidden when printing) */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0 print:hidden">
          <p className="text-xs text-slate-500">
            Need customized grant line items or treasury token reference? Call <strong>+91 8886175855</strong>.
          </p>
          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handlePrint}
              className="px-5 py-2 text-xs font-bold bg-primary hover:bg-orange-600 text-white rounded-lg transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print Invoice / Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
