# KNR ENTERPRISES — PRODUCT REQUIREMENTS DOCUMENT (PRD)

**Project Name:** KNR Enterprises — Municipal & Sanitation Wholesale Supply Portal  
**Depot Headquarters:** Chevella Highway Central Depot, Ranga Reddy District, Telangana - 501503  
**Audience:** Gram Panchayats, Municipal Corporations, Townships, and EPC Civil Infrastructure Contractors across all 33 Telangana Districts  
**Managing Partner:** K. Narendar Reddy (+91 8886175855)  
**Logistics Incharge:** G. Siva (+91 9640195798)  
**GSTIN:** 36CUHPK5939D1ZG  

---

## 1. Executive Summary & Purpose

KNR Enterprises is an institutional wholesale supply partner headquartered along the Chevella–Vikarabad highway in Telangana. The web portal equips government procurement officers, sarpanches, municipal sanitary inspectors, and civil works contractors with:
1. Direct wholesale access to certified public health chemicals (Grade 1 Bleaching Powder 33% Cl, Malathion 5% DP, Hydrated Lime), pulse-jet thermal foggers, Swachh Bharat 240L wheeled dustbins, IP66 civic LED lighting, and sanitation worker PPE.
2. An interactive, real-time GST-3B Proforma Invoice Generator compliant with Telangana Gram Panchayat audit and treasury token sanctions.
3. Rapid highway transit logistics reaching local mandals within 4 hours and all 33 Telangana districts within 24 to 48 hours.

---

## 2. Target Users & Personas

1. **Gram Panchayat Sarpanch & Panchayat Secretary (Panchayat Raj):**
   - *Needs:* Certified Grade 1 bleaching powder for overhead water tanks, open drains, and seasonal sanitation drives. Needs statutory GST proforma estimates to submit for Mandal Development Officer (MDO) sanction and bank token withdrawal.
2. **Municipal Sanitary Inspector & Health Officer (GHMC / Urban Municipalities):**
   - *Needs:* Immediate bulk dispatch of vector control equipment (SS304 pulse-jet thermal foggers, Malathion 5% DP, larvicides) during monsoon dengue hot-spot containment.
3. **EPC Civil & Infrastructure Contractors:**
   - *Needs:* Wholesale rate slabs for 60W/120W IP66 LED street fixtures with 10kV surge protection, UV-stabilized heavy landscaping turf, and tractor-tipper compatible 240L HDPE wheeled waste bins with immediate weighbridge verification.

---

## 3. Product Architecture & 6 Screen Views

The application is architected as a high-performance Single Page Application (SPA) with smooth hash-synchronized routing:

### 3.1 Screen 1: Home (`#home`)
- **Hero Banner:** Institutional authority headline, trust badges (Panchayat Approved, GSTIN 36CUHPK5939D1ZG), primary CTAs ("Explore Bulk Catalog", "Request Proforma Quote"), and key metrics (500+ Depot Orders, 100+ Active Clients, 8+ Product Lines).
- **Four-Column Trust Strip:** GST Registered Entity, Bulk MOQ Slabs, Highway Transit Fleet, and ISI/CIB Assayed Products.
- **Bulk Categories Showcase:** 6 core category cards linking with auto-filtered catalog routing.
- **Featured Products & Bestsellers Carousels:** Dynamic sliding carousels with price comparisons, rating badges, MOQ indicators, and direct cart actions.
- **Why Choose KNR Enterprises:** 10+ Years depot heritage, direct chemical synthesizers alliance, and depot photo showcase.
- **Testimonials & Trust:** Verified reviews from Chevella Gram Panchayat, Vikarabad Municipality, and Sri Sai Civil Infrastructure EPC.
- **Government Partners Marquee:** Continuous marquee listing institutional procurement partners.
- **Got Questions Accordion:** Quick answers with deep-link to full knowledge base.

### 3.2 Screen 2: Products & Catalog (`#products`)
- **Multi-Faceted Sticky Sidebar:** Category selection, maximum price slider (₹500 to ₹35,000), in-stock filter, contractor rating filter, and one-click "Reset All" button.
- **Top Toolbar:** Real-time search query matching product names, Telugu titles, categories, and HSN codes; sort dropdown (popularity, price ascending, price descending, rating); grid / list view toggle.
- **Responsive Product Grid:** Card layouts with badges, ratings, HSN numbers, discount percentages, MOQ warnings, "Add to RFQ Cart", and "Quote Only" buttons.
- **Dynamic Pagination:** Slices catalog items per page with working page navigation controls.

### 3.3 Screen 3: Services & Logistics (`#services`)
- **4 Core Offerings:**
  1. *Gram Panchayat Swachh Bharat Bulk Fulfillment* (24-48 Hr Statewide Dispatch)
  2. *Emergency Vector & Epidemic Response Supplies* (4-Hour Local Emergency Dispatches)
  3. *Civic Infrastructure & Public Illumination* (BIS Certified / 2-Year Warranty)
  4. *e-Procurement & Audit Documentation Support* (15-Minute Proforma Turnaround)
- **Interactive 4-Step Procurement Stepper:** Step-by-step visual workflow (Requirement Submission -> Formal GST-3B Proforma -> Depot Palletized Loading -> On-site Mandal Delivery).
- **Institutional Sectors Served:** Grid covering Rural Bodies, Municipal Corporations, EPC Contractors, PHC Centers, and Industrial SEZs.

### 3.4 Screen 4: About Us & Heritage (`#about`)
- **Depot Heritage:** Operational story of central warehouse near HP Petrol Pump, Chevella.
- **Foundational Pillars:** Mission, Vision, and Public Health Commitment cards.
- **Enterprise Evolution Timeline:** 2014-2026 milestones from local outlet to 33-district wholesale network.
- **Leadership Profiles:** Managing Partner K. Narendar Reddy (Institutional Relations) and G. Siva (Logistics Incharge) with direct phone and WhatsApp links.
- **Logistics Corridor Hub:** Transit diagram illustrating distribution to Vikarabad, HMDA, Mahabubnagar, and Warangal corridors.

### 3.5 Screen 5: FAQs & Knowledge Base (`#faqs`)
- **Category Filter Pills:** Bulk Orders & MOQ, Tenders & Billing, Delivery & Logistics, Payments & Support.
- **Real-time Keyword Search:** Instant filtering across questions, Telugu questions, answers, and compliance tags.
- **Interactive Accordion:** Numbered expandable items with compliance tags (e.g. "GST-3B Compliant", "MDO / Audit Approved").
- **Direct Helpdesk Card:** Direct hotlines to depot leadership.

### 3.6 Screen 6: Contact & Depot Procurement (`#contact`)
- **Procurement RFQ Form:** Officer name, mobile number, official email, procurement category, requirement details, and WhatsApp copy toggle.
- **Guaranteed Dispatch Handlers:** WhatsApp desk launch and mailto fallback dispatching directly to `knrenterprises679@gmail.com`.
- **Direct Hotlines Directory:** Managing Partner (+91 8886175855) and Logistics Incharge (+91 9640195798).
- **Interactive Google Maps Embed:** Accurate iframe embed of Chevella depot near HP Petrol Pump with map overlay information card.

---

## 4. Priority Procurement Overlays

### 4.1 Slide-over Cart & Tender Basket Drawer
- Accessible from header, mobile navigation, and product cards.
- Itemized display with product image, HSN code, unit price, quantity increment/decrement, and remove button.
- Dynamic MOQ validation notice alerting users when items are below wholesale threshold.
- Real-time calculations: Subtotal, Estimated GST (18%), and Grand Total.
- Actions: "Generate Proforma Invoice" and "Order on WhatsApp" (prefills itemized tender message).

### 4.2 Official GST-3B Proforma Invoice Generator Modal
- Clean printable sheet styled with KNR Enterprises letterhead and GSTIN `36CUHPK5939D1ZG`.
- Fully editable buyer credentials: Gram Panchayat / Department Name, Officer Name, Designation, Mandal, District, State, Phone, Buyer GSTIN, Delivery Timeline, and Transport Mode.
- Itemized table with #, Description, HSN Code, Qty, Unit Rate, Taxable Amount, GST (18%), and Line Total.
- Remittance credentials: State Bank of India, Chevella Branch, Current A/c `4189201004721`, IFSC `SBIN0020478`.
- Direct browser print / PDF export via `window.print()` using targeted `@media print` CSS.

### 4.3 Bilingual Localization (English | తెలుగు)
- Global header toggle (`EN | తెలుగు`) dynamically switching UI labels, navigation buttons, badges, and catalog product names.

---

## 5. Non-Functional Requirements

- **Performance:** Sub-second build times, lightweight bundle (< 120 kB gzip JS), and zero external heavy UI dependencies.
- **Responsiveness:** Flawless multi-breakpoint rendering across small mobile (320px), mobile (360px–430px), tablet (768px), laptop (1024px), and desktop (1280px–1920px).
- **Accessibility:** Semantic HTML, WCAG-compliant color contrast, keyboard navigable modals, and ARIA labels.
- **Reliability:** Bulletproof error boundaries and resilient `localStorage` schema parsing.

