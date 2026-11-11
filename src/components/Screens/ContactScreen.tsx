import React, { useState } from 'react';
import { Screen, Language } from '../../types';
import { TRANSLATIONS } from '../../data/translations';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Send,
  MessageCircle,
  Copy,
  Check,
  ExternalLink,
  HelpCircle,
  Truck,
  Building
} from 'lucide-react';

interface ContactScreenProps {
  onNavigate: (screen: Screen) => void;
  language: Language;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ onNavigate, language }) => {
  const t = TRANSLATIONS[language];

  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [whatsappCopy, setWhatsappCopy] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('knrenterprises679@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      if (whatsappCopy) {
        const text = `*KNR Enterprises - New Inquiry*\nFrom: ${fullName.trim()}\nPhone: ${mobileNumber.trim()}\nEmail: ${emailAddress.trim()}\nCategory: ${category}\nDetails: ${message.trim()}`;
        window.open(`https://wa.me/918886175855?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
      } else {
        const subject = encodeURIComponent(`KNR RFQ: ${category} - ${fullName.trim()}`);
        const body = encodeURIComponent(
          `Officer Name: ${fullName.trim()}\nPhone: ${mobileNumber.trim()}\nEmail: ${emailAddress.trim()}\nCategory: ${category}\nRequirement Details:\n${message.trim()}`
        );
        window.location.href = `mailto:knrenterprises679@gmail.com?subject=${subject}&body=${body}`;
      }
    }, 600);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* 1. TOP HEADER & BREADCRUMB */}
      <section className="bg-slate-50 border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-3">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Contact Us</span>
          </nav>

          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-primary">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>DIRECT PROCUREMENT & DEPOT ASSISTANCE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Get in Touch with KNR Enterprises
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Whether you need a quick government tender proforma invoice, bulk Swachh Bharat supply quotation, or Chevella depot pickup coordination — our management and logistics team is at your service.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5 text-primary">
                <span>⚡ 15-Minute RFQ Turnaround</span>
              </span>
              <span className="flex items-center gap-1.5 text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Official GST-3B Proforma Invoices</span>
              </span>
              <span className="flex items-center gap-1.5 text-blue-700">
                <Truck className="w-3.5 h-3.5" />
                <span>Statewide Telangana Dispatch</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FORM & DIRECT HOTLINES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs">
            <div className="border-b border-slate-100 pb-4 mb-6">
              <h2 className="text-xl font-bold text-slate-900">
                Send an Inquiry / Request Bulk Quotation
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Fill out the institutional procurement form below. Submissions are processed immediately and routed directly to our desk at <strong className="text-primary font-mono">knrenterprises679@gmail.com</strong>.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg text-emerald-900">
                  Procurement Inquiry Received!
                </h3>
                <p className="text-xs text-emerald-700 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Your quotation request has been sent to Managing Partner K. Narendar Reddy and Logistics desk. We will revert with a formal GST-3B proforma invoice within 15 minutes.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFullName('');
                      setMobileNumber('');
                      setEmailAddress('');
                      setMessage('');
                    }}
                    className="bg-white border border-emerald-300 text-emerald-800 font-bold text-xs px-5 py-2 rounded-lg hover:bg-emerald-100 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Full Name / Authorized Officer Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. K. Rajesh / Sarpanch / Civil Contractor"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      Official Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      Official Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        placeholder="officer@panchayat.telangana.gov.in"
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Subject / Procurement Category *
                  </label>
                  <select
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="">Select equipment or supply catalog category</option>
                    <option value="Commercial Bleaching Powder & Hydrated Lime">Commercial Bleaching Powder & Hydrated Lime</option>
                    <option value="Malathion 5% DP & Vector Insecticides">Malathion 5% DP & Vector Insecticides</option>
                    <option value="Thermal Pulse-Jet Fogging Machines">Thermal Pulse-Jet Fogging Machines</option>
                    <option value="HDPE 240L & Twin 100L Garbage Dustbins">HDPE 240L & Twin 100L Garbage Dustbins</option>
                    <option value="Civic LED Street Lights (60W/120W)">Civic LED Street Lights (60W/120W)</option>
                    <option value="High-Density Artificial Green Turf">High-Density Artificial Green Turf</option>
                    <option value="Sanitation Worker Safety Kits & Knapsack Sprayers">Sanitation Worker Safety Kits & Knapsack Sprayers</option>
                    <option value="Comprehensive Gram Panchayat Tender Package">Comprehensive Gram Panchayat Tender Package</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Message / Requirement Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Specify approximate quantities (e.g. 50 bags bleaching, 20 units 240L bins), destination mandal / gram panchayat, required delivery timeline, or GST invoicing specifications..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="whatsappCopy"
                    checked={whatsappCopy}
                    onChange={(e) => setWhatsappCopy(e.target.checked)}
                    className="rounded text-primary focus:ring-primary cursor-pointer"
                  />
                  <label htmlFor="whatsappCopy" className="text-slate-700 cursor-pointer">
                    Request instant copy & quotation details over WhatsApp (+91 WhatsApp dispatch)
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-orange-600 active:bg-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Processing RFQ...</span>
                    ) : (
                      <>
                        <span>Submit Procurement Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-2 text-center text-[11px] text-slate-400">
                  🔒 Protected & official government supply communications • Telangana GeM / Direct Invoicing
                </div>
              </form>
            )}
          </div>

          {/* Right Hotlines & Info Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Contact Hotlines Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">
                  DIRECT CONTACT HOTLINES
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-0.5">
                  Immediate verbal rate confirmation & dispatch
                </h3>
              </div>

              {/* Managing Partner */}
              <div className="p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wide block">
                    MANAGING PARTNER (GOVT RELATIONS)
                  </span>
                  <h4 className="font-bold text-sm text-slate-900">K. Narendar Reddy</h4>
                  <p className="font-mono text-xs text-slate-700 font-semibold mt-0.5">+91 8886175855</p>
                </div>
                <a
                  href="tel:8886175855"
                  className="bg-primary hover:bg-orange-600 text-white font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-2xs shrink-0"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Logistics Incharge */}
              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/80 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wide block">
                    LOGISTICS & DEPOT INCHARGE
                  </span>
                  <h4 className="font-bold text-sm text-slate-900">G. Siva</h4>
                  <p className="font-mono text-xs text-slate-700 font-semibold mt-0.5">+91 9640195798</p>
                </div>
                <a
                  href="tel:9640195798"
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-2xs shrink-0"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
              </div>

              {/* WhatsApp Fast RFQ */}
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Instant WhatsApp RFQ</span>
                </div>
                <p className="text-[11px] text-emerald-700 leading-relaxed">
                  Need an immediate quotation, stock yard photos, or sample test certificates?
                </p>
                <a
                  href="https://wa.me/918886175855?text=Hello%20KNR%20Enterprises,%20we%20need%20immediate%20quotation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp (+91 8886175855)</span>
                </a>
              </div>

              {/* Email Tender Copy */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="min-w-0 pr-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Official Tender Email
                  </span>
                  <p className="font-mono font-semibold text-slate-800 truncate">
                    knrenterprises679@gmail.com
                  </p>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-primary hover:underline font-bold text-xs shrink-0 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* GSTIN & Taxpayer Badge */}
              <div className="pt-2 border-t border-slate-100 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono">
                  <span className="font-bold text-slate-900">GSTIN: 36CUHPK5939D1ZG</span>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.2 rounded">
                    Active
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Telangana Regular Taxpayer • Authorized Govt & Panchayat Vendor
                </p>
              </div>

              {/* Depot Address */}
              <div className="pt-2 border-t border-slate-100 space-y-1 text-xs">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Chevella Depot & Warehouse</strong>
                    <span className="text-slate-600 text-[11px] leading-relaxed block">
                      H.No: 1-77/6, Near HP Petrol Pump, Chevella Mandal, Ranga Reddy District, Telangana – 501503
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-600 pt-1 text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Mon – Sat: 8:30 AM – 7:30 PM | Sunday: On-call</span>
                </div>
              </div>

              {/* Operational Perks Badges */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2 text-[10px] font-semibold text-slate-600">
                <span className="bg-slate-100 px-2 py-1 rounded">Forklift Loading Bay</span>
                <span className="bg-slate-100 px-2 py-1 rounded">FTL/LTL Truck Turnaround</span>
                <span className="bg-slate-100 px-2 py-1 rounded">Immediate Spot Billing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STRATEGIC LOGISTICS DEPOT MAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
          <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                STRATEGIC LOGISTICS DEPOT
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Visit Our Central Chevella Depot
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Conveniently located on the Chevella-Vikarabad transit highway for rapid pickup and statewide truck routing.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Chevella+Telangana+HP+Petrol+Pump"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors shrink-0 shadow-2xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* Interactive Map Embed */}
          <div className="relative w-full h-80 bg-slate-100">
            <iframe
              title="KNR Enterprises Chevella Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.5298154181954!2d78.13426027593679!3d17.30948928356779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbd8a614d9b23b%3A0x633513368291f041!2sChevella%2C%20Telangana%20501503!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-slate-200 shadow-md max-w-[calc(100%-2rem)] sm:max-w-xs text-xs pointer-events-none">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Chevella Central Hub Active</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Near HP Petrol Pump, Chevella Mandal, Ranga Reddy District. 4 loading bays open for FTL dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EMERGENCY HELPDESK FOOTER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-primary flex items-center justify-center shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Have urgent questions about e-Procurement tenders or sample testing?
              </h4>
              <p className="text-xs text-slate-300 mt-1 max-w-xl">
                Access our standardized Gram Panchayat compliance guidelines, chemical lab assay certificates, or dispatch timeline charts.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('faqs')}
              className="bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl border border-slate-700 transition-colors cursor-pointer"
            >
              View FAQs
            </button>
            <a
              href="tel:8886175855"
              className="bg-primary hover:bg-orange-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors shadow-xs"
            >
              Call Dispatch Desk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
