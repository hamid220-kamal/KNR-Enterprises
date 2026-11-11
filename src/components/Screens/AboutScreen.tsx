import React from 'react';
import { Screen, Language } from '../../types';
import { TRANSLATIONS } from '../../data/translations';
import {
  ShieldCheck,
  MapPin,
  Clock,
  Award,
  CheckCircle2,
  Building,
  Truck,
  Phone,
  MessageCircle,
  FileText,
  Target,
  Eye,
  HeartHandshake,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';

interface AboutScreenProps {
  onNavigate: (screen: Screen) => void;
  onOpenProforma: () => void;
  language: Language;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({
  onNavigate,
  onOpenProforma,
  language,
}) => {
  const t = TRANSLATIONS[language];

  const milestones = [
    {
      year: '2014',
      badge: 'Local Trade Phase',
      title: 'Foundation',
      desc: 'Started as a local building and agricultural supply outlet in Chevella Mandal, catering to rural panchayat construction works.'
    },
    {
      year: '2017',
      badge: 'Sanitation Specialization',
      title: 'Swachh Bharat Scale',
      desc: 'Transitioned decisively into municipal grade sanitation, bleaching powder, and bulk waste bin wholesale distribution.'
    },
    {
      year: '2019',
      badge: 'Public Health Chemicals',
      title: 'Vector Logistics',
      desc: 'Partnered with primary chemical producers to supply thermal foggers, Malathion, and larvicides across rural Ranga Reddy.'
    },
    {
      year: '2022',
      badge: 'Palletized Facility',
      title: 'Depot Expansion',
      desc: 'Commissioned multi-bay palletized warehouse near HP Petrol Pump, Chevella, onboarding dedicated freight dispatch trucks.'
    },
    {
      year: '2024-2026',
      badge: '33 Districts Network',
      title: 'Statewide Reach',
      desc: 'Serving all 33 districts with digital RFQ processing, rapid 15-minute proforma GST billing, and tender documentation.'
    }
  ];

  return (
    <div className="space-y-16 pb-16">
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
            <span className="text-slate-900 font-semibold">About Us</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-primary mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>INSTITUTIONAL PROFILE & HERITAGE</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                About <span className="text-primary">KNR Enterprises</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Telangana's dedicated wholesale distribution partner for Gram Panchayats, Municipal Corporations, Townships, and Civil Infrastructure Contractors — supplying field-tested sanitation, public health chemicals, and civic utility gear since 2014.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[260px]">
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  GST REGISTERED ENTITY
                </span>
                <span className="font-mono font-bold text-slate-900 text-sm">
                  36CUHPK5939D1ZG
                </span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  CENTRAL DEPOT LOCATION
                </span>
                <span className="font-semibold text-slate-900 text-xs">
                  Chevella, Ranga Reddy Dist.
                </span>
              </div>
            </div>
          </div>

          {/* 4-Metric Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-200">
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-primary">10+ Years</span>
                <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                  2014-2026
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-1">Municipal & Civil Service</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-slate-900">33 Districts</span>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  Statewide
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-1">Full Telangana Reach</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-slate-900">500+</span>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  Verified
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-1">Gram Panchayats & Civic Bodies</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-emerald-600">100%</span>
                <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                  Audit Ready
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-1">GST-3B & Tender Compliant</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR JOURNEY & ROOTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Photo */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl relative">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80"
                alt="Facility Operations - Chevella Central Depot"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-300 block">
                  FACILITY OPERATIONS
                </span>
                <h4 className="font-bold text-sm text-white">
                  Chevella Central Depot & Logistics Yard
                </h4>
                <div className="mt-2 inline-flex items-center gap-1.5 bg-primary/90 text-white text-[11px] font-bold px-2.5 py-1 rounded">
                  <span>ZERO MIDDLEMEN: Direct Bay-1/2 Ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* Story & Differentiators */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block">
              OUR JOURNEY & ROOTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              From a Local Depot to Telangana's Trusted Civic Supply Hub
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Founded along the Chevella Highway arterial route in Ranga Reddy District, <strong>KNR Enterprises</strong> emerged to resolve a pressing operational breakdown observed in rural and semi-urban administration: Gram Panchayats and public works contractors routinely struggled with fragmented suppliers, substandard non-ISI disinfectants, and sluggish delivery cycles during seasonal public health crises.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              By positioning our bulk warehouse directly at Chevella, we established a single-window supply conduit. We stock and immediately dispatch certified Swachh Bharat materials — from high-potency bleaching powder and slaked lime to pulse-jet thermal foggers and heavy-duty 240L wheeled garbage containers — backed by full audit trails, transparent institutional quotation frameworks, and instant GST documentation.
            </p>

            <div className="pt-2 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900">Direct Manufacturer Alliances:</strong>
                  <span className="text-slate-600 ml-1">Procured straight from primary chemical synthesizers and rotational molding plants for verified batches and uninflated rates.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900">ISI & CIB Certified Formulations:</strong>
                  <span className="text-slate-600 ml-1">Active chlorine content testing on bleaching agents and Central Insecticides Board registered vector control formulations.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900">24/7 Monsoon & Vector Outbreak Reserves:</strong>
                  <span className="text-slate-600 ml-1">Buffer stocks reserved for sudden dengue, chikungunya, or water-contamination sanitation emergencies across all 33 districts.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INSTITUTIONAL FOUNDATION: GUIDING PRINCIPLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">
            INSTITUTIONAL FOUNDATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Guiding Principles for Civic Procurement
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Ensuring public funds translate into durable public welfare through uncompromising material standards and accountable regional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mission */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-primary transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                Equipping every Gram Panchayat, urban municipal body, and contractor with certified, high-grade sanitation and municipal equipment at transparent wholesale rates, actively empowering healthier and cleaner civic habitats.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-primary">
              <CheckCircle2 className="w-4 h-4" />
              <span>Public Health First Priority</span>
            </div>
          </div>

          {/* Vision */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-primary transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                To be Telangana's benchmark single-window institutional supply gateway, seamlessly uniting rapid digital quotation workflows with extensive physical highway depot infrastructure to serve all 33 districts within 48 hours.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-blue-600">
              <CheckCircle2 className="w-4 h-4" />
              <span>Decentralized Supply Accessibility</span>
            </div>
          </div>

          {/* Commitment */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-primary transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Our Commitment</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                Strict adherence to government tender benchmarks, crystal-clear GST-compliant invoicing, rapid 15-minute proforma turnaround, and zero tolerance for degraded chemical concentrations or non-virgin plastics.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
              <CheckCircle2 className="w-4 h-4" />
              <span>Full Audit Compliance</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ENTERPRISE EVOLUTION: 2014-2026 TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">
            ENTERPRISE EVOLUTION
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            A Decade of Growth & Civic Impact
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            From supplying local contractors along the Vikarabad-Chevella stretch to executing bulk deliveries across all 33 Telangana districts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {milestones.map((item, idx) => (
            <div
              key={item.year}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl font-black font-mono text-primary">
                    {item.year}
                  </span>
                  <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                </div>
                <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ORGANIZATIONAL STEWARDSHIP: LEADERSHIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">
            ORGANIZATIONAL STEWARDSHIP
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Leadership Behind KNR Enterprises
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Direct accessibility, government procurement experience, and on-ground field execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Leader 1 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-orange-100 text-primary font-black text-xl flex items-center justify-center">
                KNR
              </div>
              <div>
                <h4 className="font-bold text-base text-slate-900">K. Narendar Reddy</h4>
                <p className="text-xs text-primary font-bold">Managing Partner & Municipal Relations</p>
                <p className="text-[11px] text-slate-500">15+ Years Public Works & Civic Supplies</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Spearheads institutional relations, municipal corporation contracting, Gram Panchayat grant-utilization workflows, and statutory tender compliance. Over fifteen years of active field procurement coordination across Telangana's local administrative machinery.
            </p>
            <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
              <p className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                <span>Tender Quotation Verification & Proforma Approvals</span>
              </p>
              <p className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                <span>Primary Manufacturer Liaison & Bulk Pricing Sourcing</span>
              </p>
            </div>
            <div className="pt-2 flex items-center gap-2">
              <a
                href="tel:8886175855"
                className="flex-1 bg-primary hover:bg-orange-600 text-white font-bold text-xs py-2 px-3 rounded-lg text-center transition-colors shadow-2xs"
              >
                +91 8886175855
              </a>
              <a
                href="https://wa.me/918886175855"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-3 rounded-lg transition-colors flex items-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Leader 2 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-700 font-black text-xl flex items-center justify-center">
                GS
              </div>
              <div>
                <h4 className="font-bold text-base text-slate-900">G. Siva</h4>
                <p className="text-xs text-blue-700 font-bold">Managing Partner & Logistics Operations Incharge</p>
                <p className="text-[11px] text-slate-500">Chevella Depot Yard & Transit Dispatch</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Directly commands the Chevella warehouse inventory control, quality inspection of incoming chemical consignments, loading docks, and rapid dispatch logistics ensuring 24 to 48-hour delivery milestones to remote mandals across the state.
            </p>
            <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
              <p className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Active Stock Availability & Pallet Management</span>
              </p>
              <p className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>FTL / LTL Highway Logistics Fleet Routing</span>
              </p>
            </div>
            <div className="pt-2 flex items-center gap-2">
              <a
                href="tel:9640195798"
                className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2 px-3 rounded-lg text-center transition-colors shadow-2xs"
              >
                +91 9640195798
              </a>
              <a
                href="https://wa.me/919640195798"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-3 rounded-lg transition-colors flex items-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LOGISTICS CORRIDOR: STRATEGIC DISTRIBUTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                LOGISTICS CORRIDOR
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Strategic Distribution Across Telangana
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Located directly along the Hyderabad-Chevella-Vikarabad transit corridor, our depot functions as a central logistical funnel, providing rapid turnaround whether you dispatch municipal pickup trucks or require onsite container delivery.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-start justify-between">
                  <div>
                    <strong className="text-xs font-bold text-slate-900 block">Chevella Central Depot (Hub)</strong>
                    <span className="text-[11px] text-slate-500">Same day contractor pickup, instant loading bay turnaround, Mon-Sat 8:30 AM to 7:30 PM.</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded shrink-0">
                    Immediate
                  </span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-start justify-between">
                  <div>
                    <strong className="text-xs font-bold text-slate-900 block">Ranga Reddy, Vikarabad & HMDA</strong>
                    <span className="text-[11px] text-slate-500">Direct truck dispatches to Moinabad, Shankarpally, Shamshabad, Rajendranagar, and Hyderabad fringe.</span>
                  </div>
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded shrink-0">
                    &lt; 4 Hours
                  </span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-start justify-between">
                  <div>
                    <strong className="text-xs font-bold text-slate-900 block">All 33 Telangana Districts</strong>
                    <span className="text-[11px] text-slate-500">Dedicated freight carrier partnerships reaching Adilabad, Nizamabad, Warangal, Khammam, and Mahabubnagar.</span>
                  </div>
                  <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded shrink-0">
                    24-48 Hours
                  </span>
                </div>
              </div>
            </div>

            {/* Stylized Transit Diagram & Hub Metrics */}
            <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-slate-200 text-center space-y-4">
              <div className="text-left border-b border-slate-100 pb-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  HUB COORDINATES
                </span>
                <span className="text-xs font-mono font-bold text-slate-900">
                  12.9270° N, 78.1364° E (Chevella)
                </span>
              </div>

              {/* Transit Network Stylized SVG */}
              <div className="relative h-44 bg-slate-900 rounded-lg overflow-hidden flex items-center justify-center p-4">
                <svg viewBox="0 0 300 160" className="w-full h-full">
                  {/* Grid Lines */}
                  <line x1="20" y1="80" x2="280" y2="80" stroke="#334155" strokeDasharray="3 3" />
                  <line x1="150" y1="20" x2="150" y2="140" stroke="#334155" strokeDasharray="3 3" />
                  {/* Hub connections */}
                  <line x1="150" y1="80" x2="50" y2="50" stroke="#F57C00" strokeWidth="2" />
                  <line x1="150" y1="80" x2="250" y2="40" stroke="#F57C00" strokeWidth="2" />
                  <line x1="150" y1="80" x2="80" y2="130" stroke="#F57C00" strokeWidth="2" />
                  <line x1="150" y1="80" x2="230" y2="120" stroke="#F57C00" strokeWidth="2" />
                  {/* Outer Nodes */}
                  <circle cx="50" cy="50" r="5" fill="#38BDF8" />
                  <text x="50" y="40" fill="#94A3B8" fontSize="8" textAnchor="middle">Vikarabad</text>

                  <circle cx="250" cy="40" r="5" fill="#38BDF8" />
                  <text x="250" y="30" fill="#94A3B8" fontSize="8" textAnchor="middle">Hyderabad/HMDA</text>

                  <circle cx="80" cy="130" r="5" fill="#38BDF8" />
                  <text x="80" y="145" fill="#94A3B8" fontSize="8" textAnchor="middle">Mahabubnagar</text>

                  <circle cx="230" cy="120" r="5" fill="#38BDF8" />
                  <text x="230" y="135" fill="#94A3B8" fontSize="8" textAnchor="middle">Warangal</text>

                  {/* Central Chevella Hub Node */}
                  <circle cx="150" cy="80" r="10" fill="#F57C00" />
                  <circle cx="150" cy="80" r="16" stroke="#F57C00" strokeWidth="1.5" fill="none" opacity="0.6" />
                  <text x="150" y="83" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">KNR</text>
                  <text x="150" y="105" fill="#F57C00" fontSize="9" fontWeight="bold" textAnchor="middle">Chevella Central</text>
                </svg>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Dispatch Lead</span>
                  <span className="font-bold text-xs text-slate-900">Same-Day</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Transit Insurance</span>
                  <span className="font-bold text-xs text-slate-900">100% Covered</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Loading Bays</span>
                  <span className="font-bold text-xs text-primary">4 Active Bays</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM ACTION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary text-white mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>RAPID INSTITUTIONAL PROCUREMENT</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Partner with KNR Enterprises for Your Next Municipal Procurement
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Whether you require 200 bags of bleaching powder for monsoon readiness, 50 wheeled community bins for Swachh Telangana drives, or high-mast LED infrastructure fixtures — receive a formal GST proforma quotation within 15 minutes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenProforma}
              className="bg-primary hover:bg-orange-600 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Generate Proforma</span>
            </button>
            <a
              href="https://wa.me/918886175855?text=Hello%20KNR%20Enterprises,%20we%20want%20to%20partner%20for%20municipal%20supply"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Request Quote on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
