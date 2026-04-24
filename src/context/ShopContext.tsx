import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface AffiliateData {
  code: string;
  referrals: number;
  earnings: number;
  clicks: number;
}

interface ShopContextType {
  products: Product[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  cartTotal: number;
  affiliateData: AffiliateData;
}

const defaultProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    price: 1199.00,
    description: 'Titanium design. A17 Pro chip. A more versatile, more advanced Pro camera system.',
    imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80',
    category: 'Smartphones'
  },
  {
    id: '2',
    name: 'MacBook Pro 16-inch (M3 Max)',
    price: 3499.00,
    description: 'Mind-blowing performance. Boundary-breaking battery life. A brilliant display.',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
    category: 'Laptops'
  },
  {
    id: '3',
    name: 'Samsung Galaxy S24 Ultra',
    price: 1299.00,
    description: 'Welcome to the era of mobile AI. Empower your productivity and unleash your creativity.',
    imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351cb315?w=800&q=80',
    category: 'Smartphones'
  },
  {
    id: '4',
    name: 'Dell XPS 15',
    price: 1899.00,
    description: 'Immersive screen. Masterful craftsmanship. Power to create.',
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80',
    category: 'Laptops'
  },
  {
    id: '5',
    name: 'iPhone 14 Plus',
    price: 899.00,
    description: 'Big time battery. Big size screen. Awesome cameras.',
    imageUrl: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&q=80',
    category: 'Smartphones'
  },
  {
    id: '6',
    name: 'HP Envy x360',
    price: 1049.00,
    description: 'Versatile 2-in-1 laptop, perfect for productivity and entertainment on the go.',
    imageUrl: 'https://images.unsplash.com/photo-1515041219749-89347f83291a?w=800&q=80',
    category: 'Laptops'
  },
  {
    id: '7',
    name: 'Wireless Noise-Canceling Headphones',
    price: 299.99,
    description: 'Premium over-ear headphones with active noise cancellation.',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    category: 'Accessories'
  },
  {
    id: '8',
    name: 'Minimalist Smartwatch',
    price: 199.50,
    description: 'Track your health and stay connected with this sleek smartwatch.',
    imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80',
    category: 'Accessories'
  }
];

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [products] = useState<Product[]>(defaultProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [affiliateData] = useState<AffiliateData>({
    code: 'REF-SUPER2024',
    referrals: 12,
    earnings: 345.50,
    clicks: 142
  });

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <ShopContext.Provider value={{ products, searchQuery, setSearchQuery, cart, addToCart, removeFromCart, updateQuantity, cartTotal, affiliateData }}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
}
