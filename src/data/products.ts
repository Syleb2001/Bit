import { Product } from '../types';

export const cars: Product[] = [
  {
    id: 'rolls-royce-phantom',
    title: 'Rolls-Royce Phantom VIII',
    description: '2023 model, pristine condition with bespoke interior',
    price: {
      fiat: { usd: 485000, eur: 450000 },
      crypto: { 
        btc: 18.5, 
        eth: 290,
        usdt: 485000,
        usdc: 485000
      }
    },
    images: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80'
    ],
    partnerId: 'luxury-motors-dubai',
    features: ['Extended wheelbase', 'Starlight headliner', 'Custom champagne cooler']
  }
];

export const properties: Product[] = [
  {
    id: 'palm-jumeirah-villa',
    title: 'Palm Jumeirah Signature Villa',
    description: 'Beachfront villa with private pool and yacht dock',
    price: {
      fiat: { usd: 12500000, eur: 11600000 },
      crypto: { 
        btc: 475, 
        eth: 7450,
        usdt: 12500000,
        usdc: 12500000
      }
    },
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80'
    ],
    partnerId: 'elite-properties',
    features: ['7 bedrooms', 'Private beach', 'Smart home system'],
    location: 'Palm Jumeirah, Dubai'
  }
];

export const watches: Product[] = [
  {
    id: 'patek-philippe-nautilus',
    title: 'Patek Philippe Nautilus 5711',
    description: 'Final edition, blue dial, unworn condition',
    price: {
      fiat: { usd: 250000, eur: 232000 },
      crypto: { 
        btc: 9.5, 
        eth: 149,
        usdt: 250000,
        usdc: 250000
      }
    },
    images: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80'
    ],
    partnerId: 'swiss-timepieces',
    features: ['Blue dial', 'Steel case', 'Automatic movement']
  }
];

export const artworks: Product[] = [
  {
    id: 'alec-monopoly-money-wings',
    title: 'Money Wings - Alec Monopoly',
    description: 'Original artwork by Alec Monopoly, mixed media on canvas',
    price: {
      fiat: { usd: 180000, eur: 167000 },
      crypto: {
        btc: 6.8,
        eth: 107,
        usdt: 180000,
        usdc: 180000
      }
    },
    images: [
      'https://images.unsplash.com/photo-1577720580479-7d839d829c73?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1577720580479-7d839d829c73?auto=format&fit=crop&q=80'
    ],
    partnerId: 'eden-gallery',
    features: ['Original artwork', 'Certificate of authenticity', 'Artist signature']
  },
  {
    id: 'david-kracov-butterfly-wall',
    title: 'Butterfly Wall - David Kracov',
    description: 'Metal sculpture with hand-painted butterflies',
    price: {
      fiat: { usd: 95000, eur: 88000 },
      crypto: {
        btc: 3.6,
        eth: 56,
        usdt: 95000,
        usdc: 95000
      }
    },
    images: [
      'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&q=80'
    ],
    partnerId: 'eden-gallery',
    features: ['Limited edition', 'Hand-painted', 'Wall mounted']
  }
];