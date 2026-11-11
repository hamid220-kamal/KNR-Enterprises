import React, { useState } from 'react';
import { Screen, Language } from '../../types';
import {
  Home,
  Award,
  Handshake,
  ShieldCheck,
  Headphones,
  ArrowRight,
  User
} from 'lucide-react';

interface AboutScreenProps {
  onNavigate: (screen: Screen) => void;
  onOpenProforma?: () => void;
  language?: Language;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigate }) => {
  const [photoError, setPhotoError] = useState(false);

  const values = [
    {
      icon: Award,
      titleLine1: 'Quality',
      titleLine2: 'Products',
    },
    {
      icon: Handshake,
      titleLine1: 'Reliable',
      titleLine2: 'Partnership',
    },
    {
      icon: ShieldCheck,
      titleLine1: 'Trusted',
      titleLine2: 'Service',
    },
    {
      icon: Headphones,
      titleLine1: 'Dedicated',
      titleLine2: 'Support',
    },
  ];

  return (
    <div className="w-full bg-white text-slate-900 selection:bg-orange-500/20 selection:text-orange-600">
      {/* =========================================================================
          1. ABOUT HERO SECTION (Dark theme matching reference image)
         ========================================================================= */}
      <section className="relative bg-[#0a0e17] text-white pt-8 sm:pt-12 pb-12 sm:pb-16 border-b border-slate-800/80 overflow-hidden">
        {/* Ambient subtle warm glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-3 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                About <span className="text-orange-500">KNR Enterprises</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl font-medium text-slate-200 tracking-tight">
                Quality Supply Solutions. Built on Trust.
              </p>

              {/* Breadcrumbs matching reference: Home > About */}
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-3 sm:pt-5 select-none font-medium">
                <Home className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-orange-400 transition-colors cursor-pointer"
                >
                  Home
                </button>
                <span className="text-slate-500">&gt;</span>
                <span className="text-slate-200">About</span>
              </div>
            </div>

            {/* Right Architectural Building Exterior (5 cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-slate-800/80 bg-slate-900 group">
                <img
                  src="/about-hero-building.jpg"
                  alt="KNR Enterprises Commercial Facility"
                  className="w-full h-auto aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to the main building photography if needed
                    const target = e.target as HTMLImageElement;
                    if (target.src.indexOf('building-knr-hq.jpg') === -1) {
                      target.src = '/building-knr-hq.jpg';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e17]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. MAIN CONTENT: OUR STORY & OUR FOUNDER
         ========================================================================= */}
      <section className="bg-white py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Our Story & Values (5.5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-orange-500 font-bold text-xs sm:text-sm uppercase tracking-wider">
                Our Story
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-tight">
                About Our Company
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
                KNR Enterprises is a trusted supplier of high-quality industrial, chemical and utility products. We are committed to delivering reliable products and exceptional service to our customers.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                With a focus on quality, professionalism and customer satisfaction, KNR Enterprises continues to be a preferred partner for businesses, contractors and organizations in Chevella, Ranga Reddy and beyond.
              </p>

              {/* Company Values - 4 Small Visual Items matching reference */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-3 pt-6 border-t border-slate-100 mt-6">
                {values.map((val, idx) => {
                  const Icon = val.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2.5 sm:gap-2">
                      <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-orange-500" />
                      </div>
                      <div className="leading-tight">
                        <div className="text-xs sm:text-sm font-bold text-slate-900">
                          {val.titleLine1}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900">
                          {val.titleLine2}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Our Founder Card (7 cols) */}
            <div className="lg:col-span-7 relative">
              {/* Distinctive Orange Accent Curved Shapes hugging the card corners */}
              <div className="absolute -bottom-2 -left-2 w-32 h-32 bg-orange-500 rounded-3xl -z-10 opacity-90" />
              <div className="absolute -top-2 -right-2 w-32 h-32 bg-orange-500 rounded-3xl -z-10 opacity-90" />

              {/* Main Founder Card Container */}
              <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-xl relative z-10 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Founder Photo / Real-Photo Placeholder (5 cols) */}
                  <div className="md:col-span-5 flex justify-center">
                    <div className="relative w-full max-w-[240px] aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 flex items-center justify-center">
                      {!photoError ? (
                        <img
                          src="/founder-k-narendar-reddy.jpg"
                          alt="Mr. K. Narendar Reddy, Founder"
                          className="w-full h-full object-cover"
                          onError={() => setPhotoError(true)}
                        />
                      ) : (
                        /* Real-Photo Clean Professional Placeholder */
                        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-b from-slate-100 to-slate-200 text-slate-400">
                          <div className="w-16 h-16 rounded-full bg-white shadow-inner flex items-center justify-center mb-2">
                            <User className="w-8 h-8 text-slate-400" />
                          </div>
                          <span className="text-xs font-semibold text-slate-600">
                            K. Narendar Reddy
                          </span>
                          <span className="text-[10px] text-slate-400 mt-0.5">
                            Founder, KNR Enterprises
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Founder Details & Signature (7 cols) */}
                  <div className="md:col-span-7 space-y-2 text-left">
                    <div className="text-orange-500 font-bold text-xs sm:text-sm uppercase tracking-wider">
                      Our Founder
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-[#0f172a] tracking-tight">
                      K. Narendar Reddy
                    </h3>

                    {/* Subtle Orange Accent Divider */}
                    <div className="w-12 h-0.5 bg-orange-500 my-2" />

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
                      With a vision to provide reliable and quality supply solutions, Mr. K. Narendar Reddy founded KNR Enterprises with a commitment to serve customers with integrity and excellence.
                    </p>

                    {/* Authentic Handwritten Signature & Designation */}
                    <div className="pt-3">
                      <div className="h-10 sm:h-12 flex items-center">
                        <img
                          src="/founder-signature.png"
                          alt="K. Narendar Reddy Signature"
                          className="h-9 sm:h-11 w-auto object-contain"
                        />
                      </div>
                      <div className="text-xs text-slate-500 font-semibold mt-1">
                        Founder, KNR Enterprises
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. CONTACT US CALL-TO-ACTION SECTION (Requirement 7)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 sm:my-14">
        <div className="bg-[#0c1322] text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-slate-800">
          {/* Orange Accent Left Bar matching reference */}
          <div className="absolute left-0 top-0 bottom-0 w-3 sm:w-4 bg-orange-500 rounded-l-3xl" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pl-2 sm:pl-4">
            {/* Left Content with Handshake Graphic */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center shrink-0">
                <Handshake className="w-6 h-6 sm:w-7 sm:h-7 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                  Let's Build a <span className="text-orange-500">Stronger Partnership</span>
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Partner with KNR Enterprises for your industrial and utility supply needs.
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
