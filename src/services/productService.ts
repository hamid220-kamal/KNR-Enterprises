// Dynamic Product Data & Price Management Service
// Reads product definitions, allows live administrative price overrides,
// persists via storage, and provides Supabase-ready client bindings.

export interface CatalogItem {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  inStock: boolean;
  category: string;
  image: string;
}

export const INITIAL_CATALOG_PRODUCTS: CatalogItem[] = [
  {
    id: 'bleaching-powder',
    name: 'Bleaching Powder',
    description: 'Effective disinfectant and bleaching agent.',
    price: 850,
    unit: '/Kg',
    inStock: true,
    category: 'Disinfectants & Chemicals',
    image: '/product-bleaching-powder.jpg'
  },
  {
    id: 'lime-powder',
    name: 'Lime Powder',
    description: 'High quality lime powder for various applications.',
    price: 620,
    unit: '/Kg',
    inStock: true,
    category: 'Disinfectants & Chemicals',
    image: '/product-lime-powder.jpg'
  },
  {
    id: 'malathion',
    name: 'Malathion',
    description: 'Trusted pesticide for insect control.',
    price: 1450,
    unit: '/Ltr',
    inStock: true,
    category: 'Pest & Vector Control',
    image: '/product-malathion.jpg'
  },
  {
    id: 'street-light',
    name: 'Street Light',
    description: 'Energy efficient street lighting solution.',
    price: 2450,
    unit: '/Piece',
    inStock: true,
    category: 'Municipal Infrastructure',
    image: '/product-street-light.jpg'
  },
  {
    id: 'delta-fog',
    name: 'Delta Fog',
    description: 'Powerful fogging solution for mosquito control.',
    price: 26500,
    unit: '/Ltr',
    inStock: true,
    category: 'Pest & Vector Control',
    image: '/product-delta-fog.jpg'
  },
  {
    id: 'dust-bins',
    name: 'Dust Bins',
    description: 'Durable and reliable dustbins.',
    price: 2850,
    unit: '/Piece',
    inStock: true,
    category: 'Waste Management',
    image: '/product-dust-bins.jpg'
  },
  {
    id: 'green-mat',
    name: 'Green Mat',
    description: 'Quality green mat for clean and safe spaces.',
    price: 48,
    unit: '/Roll',
    inStock: true,
    category: 'Civic Landscaping',
    image: '/product-green-mat.jpg'
  },
  {
    id: 'sanitization-tools',
    name: 'Sanitization Tools',
    description: 'Complete sanitization solutions.',
    price: 2750,
    unit: '/Unit',
    inStock: true,
    category: 'Sanitization Tools',
    image: '/product-sanitization-tools.jpg'
  }
];

const STORAGE_KEY = 'knr_dynamic_product_prices';

// Helper to get all current prices (defaults + admin overrides)
export function getCatalogProducts(): CatalogItem[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const overrides: Record<string, number> = JSON.parse(saved);
      return INITIAL_CATALOG_PRODUCTS.map((prod) => ({
        ...prod,
        price: typeof overrides[prod.id] === 'number' ? overrides[prod.id] : prod.price
      }));
    }
  } catch (err) {
    console.warn('Could not read product price overrides from storage:', err);
  }
  return INITIAL_CATALOG_PRODUCTS;
}

// Admin function to update a product price dynamically
export function updateProductPrice(productId: string, newPrice: number): void {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const overrides: Record<string, number> = saved ? JSON.parse(saved) : {};
    overrides[productId] = newPrice;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));

    // Dispatch global event so public pages update reactively
    window.dispatchEvent(new CustomEvent('knr_product_price_updated', {
      detail: { productId, newPrice }
    }));
  } catch (err) {
    console.error('Failed to save product price:', err);
  }
}

// Reset all prices to defaults
export function resetProductPrices(): void {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent('knr_product_price_updated'));
}

// Format price in Indian Rupees
export function formatINR(price: number): string {
  return '₹' + price.toLocaleString('en-IN');
}

