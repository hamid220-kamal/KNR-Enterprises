# KNR Enterprises — Municipal & Sanitation Wholesale Supply Portal

[![React 19](https://img.shields.io/badge/React-19.0.1-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3.8-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/TailwindCSS-v4.3.3-38B2AC.svg)](https://tailwindcss.com/)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)]()

> Wholesale municipal, sanitation, and civil infrastructure supply partner for Gram Panchayats, Municipal Corporations, and EPC contractors across all 33 Telangana districts.

---

## 🏢 About KNR Enterprises

Headquartered along the Chevella–Vikarabad highway in Ranga Reddy District, **KNR Enterprises** (GSTIN: `36CUHPK5939D1ZG`) is a specialized wholesale distributor supplying:

- **Commercial Bleaching Powder Grade 1 (33%+ Active Chlorine)** & **Hydrated Lime (90%+ purity)**
- **Central Insecticides Board (CIB) Registered Malathion 5% DP** & **Temephos 50% EC Larvicide**
- **Stainless Steel SS304 Pulse-Jet Thermal Fogging Machines**
- **Heavy-Duty UV-Stabilized 240L Swachh Bharat Mission (SBM) Wheeled Dustbins**
- **IP66 Die-Cast Civic LED Streetlights (60W & 120W) with 10kV Surge Protection**
- **Sanitation Worker Safety Kits (ISI Gumboots, Nitrile Heavy Gloves, Respirators)**
- **35mm High-Density Landscape Turf for Public Parks and Playgrounds**

---

## ⚡ Key Application Features

1. **Multi-Page SPA Architecture:**
   - 6 seamlessly synchronized views: **Home**, **Products & Catalog**, **Services & Logistics**, **About Us**, **FAQs & Compliance**, and **Contact & Depot**.
   - URL hash synchronization (`#home`, `#products`, `#services`, etc.) supporting instant transitions, browser history, and deep-linking.

2. **Official GST-3B Proforma Invoice Generator:**
   - Real-time client-side calculation of Taxable Value, CGST (9%), SGST (9%), and Total Amount.
   - Fully customizable buyer Panchayat details, Mandal, District, and Delivery terms.
   - Direct browser print and PDF export with dedicated `@media print` formatting.

3. **Global Bilingual Localization:**
   - Instant switching between **English** and **తెలుగు** across navigation, category chips, trust badges, and catalog descriptions.

4. **Interactive RFQ Cart Drawer:**
   - Tracks quantities, wholesale minimum order quantities (MOQ), and alerts users when order quantities are below wholesale thresholds.
   - One-click formatted WhatsApp requirement list generation.

5. **Guaranteed Dispatch Handlers:**
   - WhatsApp fast-track desk and automated email fallback to `knrenterprises679@gmail.com`.

---

## 🛠️ Technology Stack

- **UI Framework:** React 19.0.1
- **Language:** TypeScript 5.8+ (Strict Type Checking)
- **Bundler & Dev Server:** Vite 8.3.8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Iconography:** Lucide React

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:3000`.

### 3. Type Checking & Linting
```bash
npm run lint
```
Executes `tsc --noEmit` with zero errors.

### 4. Build for Production
```bash
npm run build
```
Creates an optimized, production-ready static bundle in `dist/`.

### 5. Preview Production Build
```bash
npm run preview
```

### 6. Clean Build Artifacts
```bash
npm run clean
```

---

## 📚 Documentation Reference

Detailed engineering documentation is maintained in the `docs/` directory:

- [Product Requirements Document (PRD)](docs/PRD.md)
- [Technical Requirements Document (TRD)](docs/TRD.md)
- [Codebase Bug Report & Remediation Log](docs/BUG_REPORT.md)
- [Comprehensive Security Audit & Hardening Report](docs/SECURITY_AUDIT.md)

---

## 📞 Depot Procurement Hotlines

- **Managing Partner (Govt Relations):** K. Narendar Reddy — `+91 8886175855`
- **Logistics & Depot Incharge:** G. Siva — `+91 9640195798`
- **Official Tender Email:** `knrenterprises679@gmail.com`
- **Depot Address:** H.No: 1-77/6, Near HP Petrol Pump, Chevella Mandal, Ranga Reddy District, Telangana – 501503
- **Operating Hours:** Mon – Sat: 8:30 AM – 7:30 PM | Sunday: On-call emergency dispatch

---

© 2014–2026 KNR Enterprises. All Rights Reserved.

