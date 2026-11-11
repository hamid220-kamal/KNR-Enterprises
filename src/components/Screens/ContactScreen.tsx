import React, { useState } from 'react';
import { Screen, Language } from '../../types';
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
  Home,
  UserCheck
} from 'lucide-react';

interface ContactScreenProps {
  onNavigate: (screen: Screen) => void;
  language?: Language;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ onNavigate }) => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('knrenterprises679@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `Hello KNR Enterprises,\n\nGeneral Enquiry from Website:\nName: ${fullName.trim()}\nPhone: ${mobileNumber.trim()}\nEmail: ${emailAddress.trim()}\nSubject: ${subject.trim()}\nMessage:\n${message.trim()}`;

    // Open WhatsApp with prefilled message
    window.open(
      `https://wa.me/918886175855?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="w-full bg-[#f8f9fc] text-slate-900 selection:bg-orange-500/20 selection:text-orange-600">
      {/* =========================================================================
          1. HERO HEADER (Dark Theme matching Home & About)
         ========================================================================= */}
      <section className="relative bg-[#0a0e17] text-white pt-8 sm:pt-12 pb-12 sm:pb-16 border-b border-slate-800/80 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Contact <span className="text-orange-500">KNR Enterprises</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 tracking-tight">
              Single destination for bulk procurement, tenders, and general enquiries.
            </p>

            {/* Breadcrumb: Home > Contact */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-3 select-none font-medium">
              <Home className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-orange-400 transition-colors cursor-pointer"
              >
                Home
              </button>
              <span className="text-slate-500">&gt;</span>
              <span className="text-slate-200">Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. MAIN CONTENT: STATUTORY CONTACTS & SIMPLE ENQUIRY FORM
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contacts & Company Details (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Company Credentials Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-500 block">
                  AUTHORIZED PROCUREMENT PARTNER
                </span>
                <h2 className="text-xl font-black text-[#0f172a] mt-0.5">
                  KNR ENTERPRISES
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-mono text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                    GSTIN: <strong>36CUHPK5939D1ZG</strong>
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Active Taxpayer
                  </span>
                </div>
              </div>

              {/* Contact Person 1: K. Narendar Reddy */}
              <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wide block">
                      MANAGING PARTNER
                    </span>
                    <h3 className="font-bold text-base text-slate-900">K. Narendar Reddy</h3>
                    <p className="font-mono text-sm text-slate-800 font-bold mt-0.5">
                      +91 8886175855
                    </p>
                  </div>
                  <UserCheck className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a
                    href="tel:8886175855"
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/918886175855?text=Hello%20Mr.%20K.%20Narendar%20Reddy,%20I%20would%20like%20to%20enquire%20about%20KNR%20Enterprises%20supplies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Contact Person 2: G. Siva */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wide block">
                      LOGISTICS &amp; DEPOT INCHARGE
                    </span>
                    <h3 className="font-bold text-base text-slate-900">G. Siva</h3>
                    <p className="font-mono text-sm text-slate-800 font-bold mt-0.5">
                      +91 9640195798
                    </p>
                  </div>
                  <UserCheck className="w-5 h-5 text-slate-500 shrink-0 mt-1" />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a
                    href="tel:9640195798"
                    className="flex-1 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/919640195798?text=Hello%20Mr.%20G.%20Siva,%20I%20would%20like%20to%20enquire%20about%20dispatch%20and%20logistics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Official Email */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Official Email
                  </span>
                  <a
                    href="mailto:knrenterprises679@gmail.com"
                    className="font-mono font-semibold text-slate-800 hover:text-orange-500 transition-colors"
                  >
                    knrenterprises679@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:knrenterprises679@gmail.com"
                    className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-2.5 py-1 rounded transition-colors"
                  >
                    Email Us
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs text-orange-600 hover:underline font-semibold cursor-pointer"
                  >
                    {copiedEmail ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Business Depot Address */}
              <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Central Depot &amp; Warehouse Address</strong>
                    <span className="text-slate-600 text-xs leading-relaxed block mt-0.5">
                      H.No: 1-77/6, Near HP Petrol Pump, Mdl &amp; Vill Chevella, Ranga Reddy, Telangana 501503.
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-600 pt-1 text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Mon &ndash; Sat: 8:30 AM &ndash; 7:30 PM | Sunday: On-Call</span>
                </div>

                {/* Google Maps Link */}
                <div className="pt-2">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Near+HP+Petrol+Pump+Chevella+Telangana+501503"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 hover:underline"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Verified Embed */}
            <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm aspect-[16/9] relative">
              <iframe
                title="KNR Enterprises Location Map"
                src="https://maps.google.com/maps?q=HP+Petrol+Pump,+Chevella,+Telangana+501503&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: General Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
            <div className="border-b border-slate-100 pb-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-500 block">
                GENERAL ENQUIRY DESK
              </span>
              <h2 className="text-2xl font-black text-[#0f172a] mt-1">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Have questions about municipal supplies, delivery timelines, or bulk orders? Fill out the details below to start a direct enquiry on WhatsApp.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg text-emerald-900">
                  Enquiry Prepared for WhatsApp Dispatch!
                </h3>
                <p className="text-xs text-emerald-700 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Your message has been formatted and opened in WhatsApp for manual review and sending to KNR Enterprises.
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFullName('');
                      setMobileNumber('');
                      setEmailAddress('');
                      setSubject('');
                      setMessage('');
                    }}
                    className="bg-white border border-emerald-300 text-emerald-800 font-bold text-xs px-5 py-2.5 rounded-lg hover:bg-emerald-100 transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. K. Rajesh / Gram Panchayat Sarpanch / Contractor"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-orange-500 focus:outline-none transition-colors text-xs sm:text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-orange-500 focus:outline-none transition-colors text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">
                      Email Address (Optional)
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        placeholder="yourname@gmail.com"
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-orange-500 focus:outline-none transition-colors text-xs sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Enquiry Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Bulk Bleaching Powder & Bins for Panchayat"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-orange-500 focus:outline-none transition-colors text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Requirement Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please specify product quantities, location in Telangana, or any GST invoicing details required..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-orange-500 focus:outline-none transition-colors text-xs sm:text-sm"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md shadow-orange-500/25 flex items-center justify-center gap-2 text-sm cursor-pointer hover:scale-[1.01] active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Enquiry on WhatsApp (+91 8886175855)</span>
                  </button>
                </div>

                <div className="pt-1 text-center text-[11px] text-slate-400">
                  Sends directly to KNR Enterprises official WhatsApp desk for prompt reply.
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
