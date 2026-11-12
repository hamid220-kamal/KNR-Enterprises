import React from 'react';
import { Screen, Language } from '../../types';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ExternalLink,
  Users,
  Scale,
  Handshake,
  ArrowRight
} from 'lucide-react';

interface ContactScreenProps {
  onNavigate: (screen: Screen) => void;
  language?: Language;
}

export const ContactScreen: React.FC<ContactScreenProps> = () => {
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Near+HP+Petrol+Pump+Chevella+Telangana+501503';

  const contactCards = [
    {
      id: 'call-us',
      title: 'Call Us',
      icon: Phone,
      lines: ['+91 8886175855', '+91 9640195798'],
      btnText: 'Call Now',
      btnIcon: Phone,
      btnHref: 'tel:8886175855',
      isExternal: false,
    },
    {
      id: 'email-us',
      title: 'Email Us',
      icon: Mail,
      lines: ['knrenterprises679@gmail.com'],
      btnText: 'Send Email',
      btnIcon: Mail,
      btnHref: 'mailto:knrenterprises679@gmail.com',
      isExternal: false,
    },
    {
      id: 'visit-us',
      title: 'Visit Us',
      icon: MapPin,
      lines: [
        'H.No: 1-77/6, Near HP Petrol Pump,',
        'Mdl & Vill Chevella,',
        'Ranga Reddy, Telangana 501503, India.'
      ],
      btnText: 'Get Directions',
      btnIcon: MapPin,
      btnHref: googleMapsUrl,
      isExternal: true,
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      icon: MessageCircle,
      lines: [
        'Contact KNR Enterprises directly for product enquiries and business discussions.'
      ],
      btnText: 'Chat on WhatsApp',
      btnIcon: MessageCircle,
      btnHref:
        'https://wa.me/918886175855?text=Hello%20KNR%20Enterprises,%20I%20would%20like%20to%20enquire%20about%20your%20products%20and%20supplies',
      isExternal: true,
    },
  ];

  return (
    <div className="w-full bg-[#f8f9fc] text-slate-900 selection:bg-orange-500/20 selection:text-orange-600">
      {/* =========================================================================
          1. HERO SECTION (Dark theme matching reference image)
         ========================================================================= */}
      <section className="relative bg-[#0a0e17] text-white pt-8 sm:pt-12 pb-16 sm:pb-20 border-b border-slate-800/80 overflow-hidden">
        {/* Subtle ambient glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-3.5 text-left">
              {/* Overline Badge */}
              <div className="text-orange-400 font-bold text-xs sm:text-sm tracking-wider uppercase">
                GET IN TOUCH
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
                Let's Connect and<br />
                Discuss <span className="text-orange-500">Your Requirements.</span>
              </h1>

              {/* Description */}
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg pt-1">
                Have a product requirement or need more information?<br className="hidden sm:inline" />
                Get in touch with KNR Enterprises. We're ready to hear about your requirements.
              </p>

              {/* Small Orange Underline Accent Bar */}
              <div className="w-16 h-1 bg-orange-500 rounded-full mt-4" />
            </div>

            {/* Right Industrial Facility Photography (5 cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-slate-800/80 bg-slate-900 group">
                <img
                  src="/contact-hero-plant.jpg"
                  alt="KNR Enterprises Industrial Facility"
                  className="w-full h-auto aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.indexOf('building-knr-hq.jpg') === -1) {
                      target.src = '/building-knr-hq.jpg';
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
          2. FOUR CONTACT INFORMATION CARDS
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {contactCards.map((card) => {
            const Icon = card.icon;
            const BtnIcon = card.btnIcon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Top Orange Circle Icon */}
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-sm mb-3.5">
                    <Icon className="w-5 h-5 text-white stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#0f172a] tracking-tight">
                    {card.title}
                  </h3>

                  {/* Content Lines */}
                  <div className="mt-2 space-y-1">
                    {card.lines.map((line, idx) => (
                      <p
                        key={idx}
                        className={`text-xs sm:text-sm text-slate-600 leading-relaxed ${
                          card.id === 'call-us' ? 'font-semibold text-slate-800' : ''
                        } ${card.id === 'email-us' ? 'break-all font-medium' : ''}`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <a
                  href={card.btnHref}
                  target={card.isExternal ? '_blank' : undefined}
                  rel={card.isExternal ? 'noopener noreferrer' : undefined}
                  className="mt-5 w-full min-h-[44px] bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02] active:scale-95"
                >
                  <BtnIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  <span>{card.btnText}</span>
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          3. FIND US / LOCATION SECTION (Left details, right map graphic)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center">
                <span className="w-1.5 h-7 bg-orange-500 rounded-full inline-block mr-2.5" />
                <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a] tracking-tight">
                  Find Us
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm pt-1">
                H.No: 1-77/6, Near HP Petrol Pump,<br />
                Mdl &amp; Vill Chevella, Ranga Reddy,<br />
                Telangana 501503, India.
              </p>

              <div className="pt-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all cursor-pointer shadow-xs"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </a>
              </div>
            </div>

            {/* Right Map Image Graphic with Marker (7 cols) */}
            <div className="lg:col-span-7">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                title="Open KNR Enterprises on Google Maps"
              >
                <img
                  src="/contact-map-knr.jpg"
                  alt="KNR Enterprises Chevella Location Map"
                  className="w-full h-auto aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to iframe if image is missing
                    const parent = (e.target as HTMLElement).parentElement;
                    if (parent) {
                      parent.innerHTML = `<iframe src="https://maps.google.com/maps?q=HP+Petrol+Pump,+Chevella,+Telangana+501503&t=&z=14&ie=UTF8&iwloc=&output=embed" class="w-full h-64 border-0 rounded-2xl"></iframe>`;
                    }
                  }}
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs flex items-center gap-1 group-hover:text-orange-600 transition-colors">
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CTA BANNER ("Have a Requirement? Let's Talk.")
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
        <div className="bg-[#0c1322] text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-slate-800">
          {/* Background Industrial Plant Silhouette */}
          <div
            className="absolute inset-0 bg-cover bg-right opacity-20 pointer-events-none"
            style={{ backgroundImage: `url('/contact-cta-bg.jpg')` }}
          />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            {/* Left Handshake Icon + Heading */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center shrink-0">
                <Handshake className="w-6 h-6 sm:w-7 sm:h-7 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                  Have a Requirement? <span className="text-orange-500">Let's Talk.</span>
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Reach out to KNR Enterprises for product enquiries and business requirements.
                </p>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto shrink-0">
              {/* Call Us Button */}
              <a
                href="tel:8886175855"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-lg shadow-orange-500/25 flex items-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Us</span>
              </a>

              {/* WhatsApp Us Button */}
              <a
                href="https://wa.me/918886175855?text=Hello%20KNR%20Enterprises,%20I%20have%20a%20business%20requirement%20to%20discuss"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-white/60 hover:border-white hover:bg-white/10 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full flex items-center gap-2 transition-all cursor-pointer backdrop-blur-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. BUSINESS DETAILS STRIP (Bottom Credential Badges)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-16">
        <div className="border-t border-slate-200/80 pt-8 sm:pt-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Column 1: KNR Enterprises Summary (5 cols) */}
            <div className="md:col-span-5 space-y-2">
              <span className="text-orange-500 font-bold text-xs uppercase tracking-wider block">
                Business Details
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-[#0f172a] tracking-tight">
                KNR ENTERPRISES
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                A trusted supplier of industrial, municipal, sanitation, chemical and infrastructure-related supplies.
              </p>
              <div className="w-12 h-0.5 bg-orange-500 rounded-full mt-2" />
            </div>

            {/* Column 2: Contact Persons (4 cols) */}
            <div className="md:col-span-4 flex items-start gap-3.5 md:border-l md:border-slate-200 md:pl-8">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-orange-500" />
              </div>
              <div className="space-y-0.5">
                <h5 className="font-bold text-sm text-[#0f172a]">
                  Contact Persons
                </h5>
                <div className="text-xs text-slate-600 font-medium leading-relaxed pt-0.5">
                  <p>K. Narendar Reddy</p>
                  <p>G. Siva</p>
                </div>
              </div>
            </div>

            {/* Column 3: GSTIN (3 cols) */}
            <div className="md:col-span-3 flex items-start gap-3.5 md:border-l md:border-slate-200 md:pl-8">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5 text-orange-500" />
              </div>
              <div className="space-y-0.5">
                <h5 className="font-bold text-sm text-[#0f172a]">
                  GSTIN
                </h5>
                <p className="text-xs font-mono font-bold text-slate-700 tracking-wide pt-0.5">
                  36CUHPK5939D1ZG
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
