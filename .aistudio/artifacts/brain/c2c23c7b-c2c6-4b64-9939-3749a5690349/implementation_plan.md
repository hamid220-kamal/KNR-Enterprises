# KNR Enterprises — Municipal Commerce & Supply Portal

A complete, production-grade wholesale municipal and sanitation commerce portal for **KNR Enterprises** (Chevella, Telangana), serving Gram Panchayats, Municipal Corporations, and EPC civil contractors across all 33 Telangana districts with certified civic supplies, live RFQ proforma invoicing, and swift highway depot dispatch.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following core user preferences have been confirmed and integrated into this architecture:
>
> - **Navigation Model**: Full Multi-Page SPA with header navbar navigation linking seamlessly across all 6 screens (**Home**, **Categories & Products Catalog**, **Institutional Services**, **About Us & Heritage**, **Depot Knowledge Base / FAQs**, and **Procurement Contact**).
> - **Priority Functional Feature**: Interactive RFQ Proforma Invoice Generator with real-time tax/total calculation, council sanction fields, and clean printable PDF/print preview layout.
> - **Bilingual Experience**: Global bilingual switcher (**EN | తెలుగు**) supporting English and Telugu labels across navigation, category badges, trust markers, and procurement actions.
> - **Supplementary Working Workflows**: Persistent procurement Cart Drawer with bulk MOQ verification, live catalog multi-faceted search & filters, WhatsApp RFQ dispatch triggers, and responsive interactive Google Maps depot routing.

---

## 1. Overview & Core Concept

**KNR Enterprises — We Supply** is a specialized institutional supply conduit headquartered along the Chevella–Vikarabad highway in Telangana. The web application equips government procurement officers, sarpanches, municipal sanitary inspectors, and civil works contractors with:

1. **Direct Wholesale Catalog**: Certified Grade-1 Bleaching Powder, Hydrated Lime, Malathion 5% DP, pulse-jet thermal fogging machines, UV-stabilized 240L Swachh Bharat wheeled dustbins, IP66 civic LED street luminaires, and sanitation worker PPE.
2. **Instant Statutory Invoicing**: Dynamic GST-3B compliant Proforma Invoice Generator that computes central/state taxes, freight logistics, and outputs an audit-cleared format for Panchayat grant approvals and council sanctions.
3. **Transparent Logistics & Depot Telemetry**: Real-time pickup operating hours, 24–48 hour statewide highway fleet delivery zones, and direct hotline access to Managing Partner K. Narendar Reddy and Logistics Incharge G. Siva.

---

## 2. User Experience & Visual Design

### 2.1 Color Palette & Theme Tokens
Built strictly in accordance with the **Municipal Commerce & Supply** design system tokens:
- **Primary (`#F57C00` / Safety Orange)**: Action triggers, "Add to Cart", "Get Quote", active sliders, urgent status chips.
- **Secondary (`#0D2B5B` / Deep Municipal Navy)**: Top headers, institutional authority cards, data grids, statutory tax badges.
- **Tertiary (`#2E9E5B` / Eco Sanitation Green)**: GST verified badges, CIB/ISI compliance tags, in-stock indicators, WhatsApp actions.
- **Canvas & Surfaces (`#FCF9F8`, `#FFFFFF`, `#F6F3F2`, `#EAE7E7`)**: Sterile, layered, high-contrast surfaces designed for intensive tabular scanning without fatigue.
- **Typography**: **Outfit** for structural headings and numerical SKU codes; **Inter** for dense transactional UI, item tables, and specifications.

### 2.2 Navigation & The 6 Screen Views
1. **Top Announcement Bar & Top Navigation Bar**:
   - Phone hotlines (`8886175855`, `9640195798`), Chevella depot location, GSTIN verification badge (`36CUHPK5939D1ZG`).
   - Global Language Switcher (`EN` | `తెలుగు`).
   - Persistent Cart indicator with bounce animation and badge count.
   - 6-Tab Single Page App navigation:
     - `Home`: Hero banner, trust markers, category showcase, featured carousels, Telangana bestsellers, and video/depot highlights.
     - `Products & Catalog`: Multi-faceted sidebar filter (categories, price slider, rating, MOQ, stock status), grid/list toggle, search bar, and quote drawers.
     - `Services`: Institutional municipal services (Bulk Supply, Tender Compliance, Site Delivery, Fogger Maintenance), 4-step workflow stepper, and sectors served.
     - `About Us`: 10-year depot heritage, direct manufacturer alliances, leadership profiles (K. Narendar Reddy & G. Siva), and 33-district transit map.
     - `FAQs`: Categorized accordion knowledge base with real-time keyword search and category pills.
     - `Contact & Depot`: Interactive RFQ procurement form with email simulation, WhatsApp prefill, hotline directory, and Google Maps embed.

2. **Interactive Procurement Overlays**:
   - **Cart & Tender Basket Drawer**: Slide-over panel tracking items, quantities, minimum order quantities (MOQ), subtotal, GST (18%), and action triggers.
   - **Proforma Invoice Modal with PDF Print**: Clean printable sheet styled with KNR Enterprises letterhead, buyer panchayat details, GSTIN, HSN codes, signature block, and browser print trigger (`window.print()`).
   - **Bilingual Notification Toast**: Real-time feedback when language is switched or when procurement tickets are generated.

---

## 3. Key Product Decisions & Trade-Offs

- **Multi-Page SPA via Route State**:
  - *Decision*: State-driven SPA routing (`activeScreen: 'home' | 'products' | 'services' | 'about' | 'faqs' | 'contact'`) paired with URL hash synchronization (`#home`, `#products`, `#services`, etc.).
  - *Rationale*: Instant zero-latency transitions between all 6 pages with no full page reloads, while retaining browser back/forward and direct deep-linking support.
- **Client-Side Proforma Invoicing & Print Generation**:
  - *Decision*: Build a specialized `@media print` CSS view and dedicated modal for proforma invoices rather than requiring an external PDF microservice.
  - *Rationale*: Zero server latency, instant download/print capabilities, and exact typographic fidelity matching government audit specifications.
- **Image Assets Strategy**:
  - *Decision*: Preserve high-fidelity hotlinked assets already provided in the design attachments (product photos, logo, depot imagery) with graceful SVG fallback containers for bulletproof resilience.
- **Bilingual Dictionary Architecture**:
  - *Decision*: Lightweight structured localization dictionary (`en` and `te`) mapping common UI labels, navigation titles, trust badges, and form headings.
  - *Rationale*: Clean maintainability, instant client switching, and accurate Telugu translations for local panchayat officials.

---

## 4. Technical Architecture & Data Strategy

### 4.1 System Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                        KNR ENTERPRISES CLIENT                          │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ Top Announcement Bar (Hotlines, GSTIN, Language Toggle EN/TE)   │  │
│  │ Main Navigation Bar (Brand, 6 SPA Links, Search, Cart Badge)     │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌───────────────────────── App State Store ────────────────────────┐  │
│  │  • activeScreen (home | products | services | about | faqs | ctc)│  │
│  │  • currentLang ('en' | 'te') & dictionary lookup                 │  │
│  │  • cartItems[] (id, name, price, moq, qty, image, hsn)           │  │
│  │  • catalogFilters (category, search, maxPrice, rating, stock)    │  │
│  │  • proformaModalState (open, customerData, invoiceNumber)        │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                │                                       │
│       ┌────────────────────────┼────────────────────────┐              │
│       ▼                        ▼                        ▼              │
│  ┌──────────────┐       ┌──────────────┐       ┌──────────────┐        │
│  │  Home View   │       │ Catalog View │       │ Services View│        │
│  │  • Hero      │       │ • Sidebar    │       │ • 4 Offerings│        │
│  │  • Categories│       │ • Live Search│       │ • 4-Step Flow│        │
│  │  • Carousels │       │ • Grid/List  │       │ • Sectors    │        │
│  │  • Why Choose│       │ • MOQ check  │       │ • Quick Quote│        │
│  └──────────────┘       └──────────────┘       └──────────────┘        │
│       │                        │                        │              │
│       ▼                        ▼                        ▼              │
│  ┌──────────────┐       ┌──────────────┐       ┌──────────────┐        │
│  │  About View  │       │  FAQs View   │       │ Contact View │        │
│  │  • Heritage  │       │ • Search box │       │ • RFQ Form   │        │
│  │  • Leadership│       │ • Cat Pills  │       │ • Hotlines   │        │
│  │  • Map Hub   │       │ • Accordions │       │ • GMaps Embed│        │
│  └──────────────┘       └──────────────┘       └──────────────┘        │
│                                                                        │
│  ┌────────────────────── Slide-out Drawers & Modals ────────────────┐  │
│  │  • Cart Drawer: Itemized bulk order calculation + WhatsApp sync  │  │
│  │  • Proforma Invoice Modal: Printable GST-3B sheet (window.print) │  │
│  │  • Instant WhatsApp RFQ Launcher (+91 8886175855)                │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Data Models

```typescript
export interface Product {
  id: string;
  name: string;
  nameTe?: string;
  category: 'Disinfectants & Chemicals' | 'Pest & Vector Control' | 'Waste Management' | 'Municipal Infrastructure' | 'Sanitization Tools' | 'Civic Landscaping';
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  moq: string;
  hsnCode: string;
  stockStatus: 'In Stock' | 'Bulk Order';
  badge?: string;
  image: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ProformaInvoiceData {
  invoiceNumber: string;
  date: string;
  officerName: string;
  institutionName: string;
  mandalDistrict: string;
  phone: string;
  email: string;
  items: CartItem[];
  subtotal: number;
  cgst: number;
  sgst: number;
  freight: number;
  total: number;
}
```

---

## 5. Verification Plan

1. **Compilation & Linting**:
   - Run `compile_applet` and `lint_applet` together to verify strict TypeScript adherence, zero missing imports, and clean build logs.
2. **Interactive UI Verification**:
   - Verify smooth switching across all 6 screens (**Home**, **Categories & Products**, **Services**, **About Us**, **FAQs**, **Contact**).
   - Test Cart Drawer: adding items from both Home carousels and Catalog grid, updating quantities, observing MOQ reminders, and subtotal calculation.
   - Test Proforma Invoice Generator: click "Generate Proforma", fill institution name and mandal, observe calculated tax line items (9% CGST + 9% SGST), and click "Print / Save PDF".
   - Test Bilingual Toggle: click "EN | తెలుగు" in header; verify that navigation labels, badges, and key headings update dynamically.
   - Test Catalog Filters: search text input, category chip selection, price slider, and grid vs. list view toggle.
   - Test Contact RFQ Form: submission validation, loading state, success toast, and pre-formatted WhatsApp link generation.
