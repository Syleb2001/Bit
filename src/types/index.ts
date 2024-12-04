export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
}

export type ProductCategory = 'cars' | 'real-estate' | 'watches' | 'art';

export interface Product {
  id: string;
  title: string;
  description: string;
  category: ProductCategory;
  price: {
    fiat: {
      usd: number;
      eur: number;
    };
    crypto: {
      btc: number;
      eth: number;
      usdt: number;
      usdc: number;
    };
  };
  images: string[];
  partnerId: string;
  features: string[];
  location?: string;
}