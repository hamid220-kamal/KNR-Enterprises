# KNR ENTERPRISES — TECHNICAL REQUIREMENTS DOCUMENT (TRD)

**Document Version:** 1.0  
**Technology Stack:** React 19, TypeScript, Vite 8, Tailwind CSS v4, Lucide React  
**Architecture:** Client-Side Single Page Application (SPA) with Hash Synchronization  
**State Persistence:** Schema-Validated LocalStorage  

---

## 1. System Architecture

The application is structured as a client-side Single Page Application with hash-synchronized routing, providing instant transitions without page reloads while maintaining browser history compatibility.

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
│  │  • currentScreen (home | products | services | about | faqs | ctc)│  │
│  │  • language ('en' | 'te') & dictionary lookup                    │  │
│  │  • cartItems[] (id, name, price, moq, qty, image, hsn)           │  │
│  │  • isCartOpen (boolean) & isProformaOpen (boolean)               │  │
│  │  • searchQuery (string) & selectedCategory (string)              │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                │                                       │
│       ┌────────────────────────┼────────────────────────┐              │
│       ▼                        ▼                        ▼              │
│  ┌──────────────┐       ┌──────────────┐       ┌──────────────┐        │
│  │  HomeScreen  │       │CatalogScreen │       │ServicesScreen│        │
│  └──────────────┘       └──────────────┘       └──────────────┘        │
│       │                        │                        │              │
│       ▼                        ▼                        ▼              │
│  ┌──────────────┐       ┌──────────────┐       ┌──────────────┐        │
│  │ AboutScreen  │       │  FaqsScreen  │       │ContactScreen │        │
│  └──────────────┘       └──────────────┘       └──────────────┘        │
│                                                                        │
│  ┌────────────────────── Slide-out Drawers & Modals ────────────────┐  │
│  │  • CartDrawer: Slide-over bulk order calculation + WhatsApp sync │  │
│  │  • ProformaModal: Dedicated printable GST-3B sheet               │  │
│  │  • Mobile Bottom App Bar: Fixed 5-tab responsive navigation      │  │
│  │  • Footer: Multi-column compliance, accreditations & bulletins   │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Technology Stack & Dependencies

| Layer | Technology | Version | Purpose |
| :--- | :--- | :---: | :--- |
| **Framework** | React | 19.0.1 | Modern declarative UI with concurrent rendering |
| **Language** | TypeScript | 5.8+ | Strict compile-time static typing and interface verification |
| **Build Tool** | Vite | 8.3.8 | Ultra-fast HMR and optimized production bundling |
| **Styling** | Tailwind CSS | 4.3.3 | Utility-first CSS using `@tailwindcss/vite` |
| **Icons** | Lucide React | 0.546.0 | Clean, accessible SVG iconography |
| **Package Manager**| npm | Latest | Dependency management and script orchestration |

---

## 3. Data Models & TypeScript Interfaces

```typescript
// Navigation & Localization
export type Screen = 'home' | 'products' | 'services' | 'about' | 'faqs' | 'contact';
export type Language = 'en' | 'te';

// Certified Product SKU
export interface Product {
  id: string;
  name: string;
  teluguName: string;
  category: string;
  categoryTelugu: string;
  badge?: string;
  badgeColor?: string;
  image: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  unit: string;
  moq: number;
  moqDescription: string;
  hsnCode: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  specifications: string[];
  description: string;
}

// Shopping Cart Item
export interface CartItem {
  product: Product;
  quantity: number;
}

// Official GST-3B Proforma Invoice Data
export interface ProformaInvoiceData {
  invoiceNumber: string;
  date: string;
  panchayatName: string;
  officerName: string;
  designation: string;
  mandal: string;
  district: string;
  state: string;
  phone: string;
  email: string;
  buyerGstin: string;
  deliveryTimeline: string;
  transportMode: string;
  notes: string;
}

// Catalog Filter State
export interface CatalogFilterState {
  category: string;
  searchQuery: string;
  maxPrice: number;
  inStockOnly: boolean;
  moqTier: string;
  minRating: number;
  sortBy: 'popularity' | 'price-asc' | 'price-desc' | 'rating';
}
```

---

## 4. Design System & Theme Tokens

Defined in `src/index.css` using Tailwind CSS v4 `@theme`:

| Token | Hex Value | Usage |
| :--- | :---: | :--- |
| `--color-primary` | `#F57C00` | Safety Orange — primary CTAs, active pills, badges, highlights |
| `--color-primary-hover`| `#E06D00` | Hover states on primary buttons |
| `--color-primary-light`| `#FFF3E0` | Subtle background tints for badges and highlights |
| `--color-navy` | `#0D2B5B` | Deep Municipal Navy — header bars, authority cards, footer |
| `--color-navy-dark` | `#071A38` | Darkest container surfaces |
| `--color-navy-light`| `#E8EDF5` | Muted background borders and accents |
| `--color-accent` | `#2E9E5B` | Eco Sanitation Green — in-stock badges, WhatsApp desk, GST verified |
| `--color-surface` | `#FCF9F8` | Canvas surface color |
| `--color-border` | `#E2E8F0` | Subtle card borders and divider lines |

**Typography Tokens:**
- Headings & SKUs: `Outfit`, `Poppins`, `sans-serif`
- Body & Data Grids: `Inter`, `sans-serif`

---

## 5. Responsive Design Breakpoint Matrix

The application is engineered using mobile-first CSS and verified across standard viewport tiers:

| Viewport Tier | Width (px) | Layout Adjustments |
| :--- | :---: | :--- |
| **Small Mobile** | 320px | Single-column cards, `overflow-x-auto` table scroll, responsive header logo (`max-w-[140px]`), compact metrics (`text-xl`), bottom app bar |
| **Standard Mobile**| 360px–430px | Comfortable touch targets (≥44px), stacked buyer inputs (`grid-cols-1 sm:grid-cols-2`), full footer display with `pb-24` |
| **Tablet** | 768px | Two-column product grids, side-by-side buyer details, expanded filter chips |
| **Laptop** | 1024px | 3-column catalog grid, desktop header navigation, sticky filter sidebar |
| **Desktop** | 1280px–1920px| Maximum width container `max-w-7xl` (1280px), centered alignment, high-density tabular scanning |

---

## 6. Print Styles Architecture (`@media print`)

To guarantee audit-compliant document generation without external PDF microservices, `src/index.css` implements dedicated print formatting:
```css
@media print {
  html, body {
    background: white !important;
    color: black !important;
    overflow: visible !important;
    height: auto !important;
  }
  body * {
    visibility: hidden;
  }
  #printable-proforma,
  #printable-proforma * {
    visibility: visible;
  }
  #printable-proforma {
    position: static !important;
    width: 100% !important;
    padding: 16px !important;
    background: white !important;
    box-shadow: none !important;
    overflow: visible !important;
  }
  .fixed, .overflow-y-auto, .overflow-hidden {
    position: static !important;
    overflow: visible !important;
    max-height: none !important;
  }
  .no-print {
    display: none !important;
  }
}
```

---

## 7. Future Backend & Database Integration Blueprint

When connecting to Supabase or a PostgreSQL backend:

### 7.1 Proposed Schema Design
```sql
-- Certified Wholesale Products
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sku TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  telugu_name TEXT NOT NULL,
  category TEXT NOT NULL,
  price NUMERIC(10, 2) NOT NULL CHECK (price >= 0),
  original_price NUMERIC(10, 2) NOT NULL,
  unit TEXT NOT NULL,
  moq INTEGER NOT NULL DEFAULT 1,
  moq_description TEXT NOT NULL,
  hsn_code TEXT NOT NULL,
  stock_status TEXT NOT NULL DEFAULT 'In Stock',
  is_active BOOLEAN NOT NULL DEFAULT true,
  image_url TEXT NOT NULL,
  specifications JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Procurement Inquiries (RFQs)
CREATE TABLE inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  officer_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  category TEXT NOT NULL,
  details TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'quoted', 'dispatched', 'closed')),
  created_at TIMESTAMPTZ DEFAULT now()
);
```

### 7.2 Row Level Security (RLS) Strategy
- Public read access for active catalog products (`is_active = true`).
- Write operations restricted to authenticated users with `role = 'depot_admin'`.
- All administrative mutations protected server-side, never relying on frontend role checks.

