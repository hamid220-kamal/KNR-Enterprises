import React, { useState } from 'react';
import { Screen, Language } from '../../types';
import { TRANSLATIONS } from '../../data/translations';
import {
  Truck,
  ShieldAlert,
  Zap,
  FileCheck2,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  Building,
  Layers,
  Sparkles,
  FileText
} from 'lucide-react';

interface ServicesScreenProps {
  onNavigate: (screen: Screen) => void;
  onOpenProforma: () => void;
  language: Language;
}

export const ServicesScreen: React.FC<ServicesScreenProps> = ({
  onNavigate,
  onOpenProforma,
  language,
}) => {
  const t = TRANSLATIONS[language];
  const [activeStep, setActiveStep] = useState(0);

  const services = [
    {
      id: 'swachh-bharat',
      icon: Truck,
      color: 'orange',
      title: 'Gram Panchayat Swachh Bharat Bulk Fulfillment',
      teluguTitle: 'గ్రామ పంచాయతీ స్వచ్ఛ భారత్ బల్క్ సరఫరా',
      sla: '24-48 Hr Statewide Dispatch',
      desc: 'Dedicated supply pipeline for village sanitation drives, public health drains, and Swachh Telangana initiatives. We furnish tested Grade 1 bleaching powder (33% Cl), hydrated lime, and 240L SBM wheeled waste bins directly to Mandal headquarters and Gram Panchayat bhavans.',
      features: [
        'Guaranteed minimum 33% available chlorine in factory-sealed bags',
        'Direct tractor/pickup truck unloading assistance',
        'Formal MDO & Panchayat Secretary sanction paperwork',
        'Bulk wholesale slab discounts on seasonal monsoon orders'
      ]
    },
    {
      id: 'vector-control',
      icon: ShieldAlert,
      color: 'red',
      title: 'Emergency Vector & Epidemic Response Supplies',
      teluguTitle: 'అత్యవసర సీజనల్ వ్యాధులు & దోమల నివారణ సరుకులు',
      sla: 'Immediate 4-Hour Local Dispatches',
      desc: 'Rapid-deployment mosquito vector containment inventory maintained round-the-clock during monsoon surges. Equipped with ready-to-dispatch pulse-jet thermal fogging machines, Malathion 5% DP dusting powder, and Temephos 50% EC larvicide.',
      features: [
        'CIB & RC approved chemical formulations with lab test certificates',
        'On-site operator machine startup and fuel mixing training',
        'Emergency Sunday dispatch desk for seasonal dengue hot-spots',
        'Batch assay certificates provided for government health audits'
      ]
    },
    {
      id: 'civic-infra',
      icon: Zap,
      color: 'cyan',
      title: 'Civic Infrastructure & Public Illumination',
      teluguTitle: 'పౌర మౌలిక సదుపాయాలు & వీధి దీపాలు',
      sla: 'BIS Certified / 2-Year Warranty',
      desc: 'Heavy-duty LED streetlighting and civic landscaping materials engineered for high summer temperatures and volatile rural voltage. Sourced directly from premier manufacturing partners for EPC civil contractors and municipal engineers.',
      features: [
        'Die-cast aluminum IP66 fixtures with 10kV surge protection',
        'Tested against 140V to 300V rural grid fluctuations',
        '35mm UV-stabilized heavy landscape turf for public parks',
        'Complete photometric reports and test certificates on request'
      ]
    },
    {
      id: 'tender-compliance',
      icon: FileCheck2,
      color: 'emerald',
      title: 'e-Procurement & Audit Documentation Support',
      teluguTitle: 'టెండర్లు & అధికారిక ప్రభుత్వ ఆడిట్ డాక్యుమెంటేషన్',
      sla: '15-Minute Proforma Turnaround',
      desc: 'Eliminate procurement delays. We provide accurate GST-3B compliant proforma invoices, bid bond documentation, technical specification sheets, and bank remittance challans required for Treasury token approvals.',
      features: [
        'GSTIN 36CUHPK5939D1ZG registered regular taxpayer vendor',
        'Accurate HSN coding for seamless input tax credit (ITC)',
        'Treasury token and Gram Panchayat cheque acceptance',
        'Authorized bid support for GeM and state e-Procurement portals'
      ]
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Requirement Submission',
      subtitle: 'Online RFQ / Phone / WhatsApp',
      desc: 'Select supplies via our digital catalog, click "Get Quote", or call our Chevella depot desk with your required quantities and target mandal.'
    },
    {
      step: '02',
      title: 'Formal GST-3B Proforma',
      subtitle: 'Generated within 15 Minutes',
      desc: 'We provide an itemized official quotation with HSN classification, tax breakdown, and bank RTGS coordinates ready for council or MDO sanction.'
    },
    {
      step: '03',
      title: 'Depot Palletized Loading',
      subtitle: 'Chevella Highway Central Hub',
      desc: 'Supplies are picked, weighbridge verified, and loaded onto dedicated trucks or prepared for your local tractor/pickup collection at our hub.'
    },
    {
      step: '04',
      title: 'On-site Mandal Delivery',
      subtitle: '24 to 48 Hours Across Telangana',
      desc: 'Our driver delivers directly to your Gram Panchayat office or project site with delivery challans and lab assay certificates for sign-off.'
    }
  ];

  const sectors = [
    { title: 'Gram Panchayats & Rural Bodies', count: '100+ Mandals' },
    { title: 'Municipalities & Corporations (GHMC/HMDA)', count: 'Urban Civics' },
    { title: 'EPC Civil & Infrastructure Contractors', count: 'Contractor Slabs' },
    { title: 'Government Hospitals & PHC Centers', count: 'Disinfection Kits' },
    { title: 'Industrial SEZs & Warehousing Parks', count: 'Turnkey Logistics' },
    { title: 'Townships & Gated Communities', count: 'Landscape & Bins' },
  ];

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
            <span className="text-slate-900 font-semibold">Services & Logistics</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-primary mb-2">
              <Truck className="w-3.5 h-3.5" />
              <span>HIGHWAY DEPOT DISTRIBUTION</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Strategic Municipal Logistics & Fulfillment
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Serving Gram Panchayats, Municipal Corporations, Townships, and Civil Contractors across all 33 Telangana districts with verified chemicals, instant GST-3B billing, and prompt highway transit.
            </p>
          </div>
        </div>
      </section>

      {/* 2. 4 CORE SERVICE OFFERINGS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{service.sla}</span>
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {language === 'te' ? service.teluguTitle : service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Key Capabilities:
                    </p>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-orange-700 cursor-pointer"
                  >
                    <span>Request Service Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onOpenProforma}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-slate-400" />
                    <span>Get Proforma</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. INTERACTIVE 4-STEP WORKFLOW STEPPER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-2">
              SEAMLESS FULFILLMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Our 4-Step Institutional Procurement Flow
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              How we ensure error-free government compliance from initial quotation to final site unloading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {workflowSteps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800 border-primary shadow-md'
                      : 'bg-slate-800/40 border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black font-mono text-primary">
                      {step.step}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-700">
                        Active Step
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-sm text-white">{step.title}</h4>
                  <p className="text-[11px] text-orange-400 font-medium mt-0.5">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY SECTORS SERVED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Institutional Sectors Served
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Over 10 years of consistent, uninterrupted supply to civic and commercial administrations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {sectors.map((s, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-primary transition-colors"
            >
              <Building className="w-5 h-5 mx-auto text-primary mb-2" />
              <h5 className="font-bold text-xs text-slate-900 leading-snug">
                {s.title}
              </h5>
              <span className="inline-block mt-2 text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                {s.count}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. RAPID CALLOUT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h4 className="text-xl sm:text-2xl font-black tracking-tight">
              Need Emergency Vector Control or Bulk Bins Dispatched Today?
            </h4>
            <p className="text-xs sm:text-sm text-orange-100 mt-1">
              Direct highway yard loading bays active right now. Reach our Managing Partner directly.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:8886175855"
              className="bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>Call 8886175855</span>
            </a>

            <a
              href="https://wa.me/918886175855?text=Hello%20KNR%20Enterprises,%20we%20need%20urgent%20logistics%20support"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Logistics</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
