export type Screen = 'home' | 'products' | 'services' | 'about' | 'faqs' | 'contact';

export type Language = 'en' | 'te';

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

export interface CartItem {
  product: Product;
  quantity: number;
}

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

export interface CatalogFilterState {
  category: string;
  searchQuery: string;
  maxPrice: number;
  inStockOnly: boolean;
  moqTier: string;
  minRating: number;
  sortBy: 'popularity' | 'price-asc' | 'price-desc' | 'rating';
}
