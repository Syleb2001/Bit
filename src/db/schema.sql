CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  price_usd REAL NOT NULL,
  price_eur REAL NOT NULL,
  price_btc REAL NOT NULL,
  price_eth REAL NOT NULL,
  price_usdt REAL NOT NULL,
  price_usdc REAL NOT NULL,
  partner_id TEXT NOT NULL,
  location TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS product_images (
  id TEXT PRIMARY KEY,
  product_id TEXT NOT NULL,
  url TEXT NOT NULL,
  order_index INTEGER NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS product_features (
  id TEXT PRIMARY KEY,
  product_id TEXT NOT NULL,
  feature TEXT NOT NULL,
  order_index INTEGER NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_partner ON products(partner_id);