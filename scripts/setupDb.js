import Database from 'better-sqlite3';
import { readFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';

// Ensure the public directory exists
const dbPath = 'public/database.sqlite';
const dbDir = dirname(dbPath);

if (!existsSync(dbDir)) {
  mkdirSync(dbDir, { recursive: true });
}

const db = new Database(dbPath);

// Enable foreign keys
db.pragma('foreign_keys = ON');

// Read and execute schema
const schema = readFileSync(join(process.cwd(), 'src/db/schema.sql'), 'utf8');
db.exec(schema);

// Initial products data
const initialProducts = [
  {
    id: 'rolls-royce-phantom',
    title: 'Rolls-Royce Phantom VIII',
    description: '2023 model, pristine condition with bespoke interior',
    category: 'cars',
    price_usd: 485000,
    price_eur: 450000,
    price_btc: 18.5,
    price_eth: 290,
    price_usdt: 485000,
    price_usdc: 485000,
    partner_id: 'luxury-motors-dubai',
    location: null
  },
  {
    id: 'palm-jumeirah-villa',
    title: 'Palm Jumeirah Signature Villa',
    description: 'Beachfront villa with private pool and yacht dock',
    category: 'real-estate',
    price_usd: 12500000,
    price_eur: 11600000,
    price_btc: 475,
    price_eth: 7450,
    price_usdt: 12500000,
    price_usdc: 12500000,
    partner_id: 'elite-properties',
    location: 'Palm Jumeirah, Dubai'
  },
  {
    id: 'patek-philippe-nautilus',
    title: 'Patek Philippe Nautilus 5711',
    description: 'Final edition, blue dial, unworn condition',
    category: 'watches',
    price_usd: 250000,
    price_eur: 232000,
    price_btc: 9.5,
    price_eth: 149,
    price_usdt: 250000,
    price_usdc: 250000,
    partner_id: 'swiss-timepieces',
    location: null
  },
  {
    id: 'alec-monopoly-money-wings',
    title: 'Money Wings - Alec Monopoly',
    description: 'Original artwork by Alec Monopoly, mixed media on canvas',
    category: 'art',
    price_usd: 180000,
    price_eur: 167000,
    price_btc: 6.8,
    price_eth: 107,
    price_usdt: 180000,
    price_usdc: 180000,
    partner_id: 'eden-gallery',
    location: null
  },
  {
    id: 'david-kracov-butterfly-wall',
    title: 'Butterfly Wall - David Kracov',
    description: 'Metal sculpture with hand-painted butterflies',
    category: 'art',
    price_usd: 95000,
    price_eur: 88000,
    price_btc: 3.6,
    price_eth: 56,
    price_usdt: 95000,
    price_usdc: 95000,
    partner_id: 'eden-gallery',
    location: null
  }
];

const productImages = [
  {
    id: 'img-rolls-1',
    product_id: 'rolls-royce-phantom',
    url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80',
    order_index: 0
  },
  {
    id: 'img-palm-1',
    product_id: 'palm-jumeirah-villa',
    url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80',
    order_index: 0
  },
  {
    id: 'img-patek-1',
    product_id: 'patek-philippe-nautilus',
    url: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80',
    order_index: 0
  },
  {
    id: 'img-monopoly-1',
    product_id: 'alec-monopoly-money-wings',
    url: 'https://images.unsplash.com/photo-1577720580479-7d839d829c73?auto=format&fit=crop&q=80',
    order_index: 0
  },
  {
    id: 'img-butterfly-1',
    product_id: 'david-kracov-butterfly-wall',
    url: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&q=80',
    order_index: 0
  }
];

const productFeatures = [
  {
    id: 'feat-rolls-1',
    product_id: 'rolls-royce-phantom',
    feature: 'Extended wheelbase',
    order_index: 0
  },
  {
    id: 'feat-rolls-2',
    product_id: 'rolls-royce-phantom',
    feature: 'Starlight headliner',
    order_index: 1
  },
  {
    id: 'feat-rolls-3',
    product_id: 'rolls-royce-phantom',
    feature: 'Custom champagne cooler',
    order_index: 2
  },
  {
    id: 'feat-palm-1',
    product_id: 'palm-jumeirah-villa',
    feature: '7 bedrooms',
    order_index: 0
  },
  {
    id: 'feat-palm-2',
    product_id: 'palm-jumeirah-villa',
    feature: 'Private beach',
    order_index: 1
  },
  {
    id: 'feat-palm-3',
    product_id: 'palm-jumeirah-villa',
    feature: 'Smart home system',
    order_index: 2
  },
  {
    id: 'feat-patek-1',
    product_id: 'patek-philippe-nautilus',
    feature: 'Blue dial',
    order_index: 0
  },
  {
    id: 'feat-patek-2',
    product_id: 'patek-philippe-nautilus',
    feature: 'Steel case',
    order_index: 1
  },
  {
    id: 'feat-patek-3',
    product_id: 'patek-philippe-nautilus',
    feature: 'Automatic movement',
    order_index: 2
  },
  {
    id: 'feat-monopoly-1',
    product_id: 'alec-monopoly-money-wings',
    feature: 'Original artwork',
    order_index: 0
  },
  {
    id: 'feat-monopoly-2',
    product_id: 'alec-monopoly-money-wings',
    feature: 'Certificate of authenticity',
    order_index: 1
  },
  {
    id: 'feat-monopoly-3',
    product_id: 'alec-monopoly-money-wings',
    feature: 'Artist signature',
    order_index: 2
  },
  {
    id: 'feat-butterfly-1',
    product_id: 'david-kracov-butterfly-wall',
    feature: 'Limited edition',
    order_index: 0
  },
  {
    id: 'feat-butterfly-2',
    product_id: 'david-kracov-butterfly-wall',
    feature: 'Hand-painted',
    order_index: 1
  },
  {
    id: 'feat-butterfly-3',
    product_id: 'david-kracov-butterfly-wall',
    feature: 'Wall mounted',
    order_index: 2
  }
];

// Insert initial data
db.transaction(() => {
  const productStmt = db.prepare(`
    INSERT INTO products (
      id, title, description, category,
      price_usd, price_eur, price_btc, price_eth, price_usdt, price_usdc,
      partner_id, location
    ) VALUES (
      @id, @title, @description, @category,
      @price_usd, @price_eur, @price_btc, @price_eth, @price_usdt, @price_usdc,
      @partner_id, @location
    )
  `);

  const imageStmt = db.prepare(`
    INSERT INTO product_images (id, product_id, url, order_index)
    VALUES (@id, @product_id, @url, @order_index)
  `);

  const featureStmt = db.prepare(`
    INSERT INTO product_features (id, product_id, feature, order_index)
    VALUES (@id, @product_id, @feature, @order_index)
  `);

  // Insert products
  for (const product of initialProducts) {
    productStmt.run(product);
  }

  // Insert images
  for (const image of productImages) {
    imageStmt.run(image);
  }

  // Insert features
  for (const feature of productFeatures) {
    featureStmt.run(feature);
  }
})();

console.log('Database setup complete!');
db.close();