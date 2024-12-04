import { nanoid } from 'nanoid';
import type { Product } from '../types';

interface Database {
  products: Product[];
}

// Function to load the database from file
export const loadDb = async (): Promise<Database> => {
  try {
    const response = await fetch('/data/db.json?' + Date.now());
    
    if (!response.ok) {
      throw new Error('Failed to load database');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading database:', error);
    return { products: [] };
  }
};

// Function to save the database
export const saveDb = async (data: Database): Promise<void> => {
  try {
    const response = await fetch('/api/saveDb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Failed to save database');
    }

    // Dispatch event to notify other components about the update
    window.dispatchEvent(new CustomEvent('bitopia_db_update'));
  } catch (error) {
    console.error('Error saving database:', error);
    throw error;
  }
};

export const getProducts = async (): Promise<Product[]> => {
  const db = await loadDb();
  return db.products;
};

export const getProduct = async (id: string): Promise<Product | null> => {
  const db = await loadDb();
  return db.products.find(p => p.id === id) || null;
};

export const saveProduct = async (productData: Omit<Product, 'id'>): Promise<Product> => {
  const db = await loadDb();
  
  const newProduct = {
    ...productData,
    id: nanoid()
  };
  
  db.products.push(newProduct);
  await saveDb(db);
  return newProduct;
};

export const updateProduct = async (id: string, productData: Omit<Product, 'id'>): Promise<Product> => {
  const db = await loadDb();
  const index = db.products.findIndex(p => p.id === id);
  
  if (index === -1) {
    throw new Error('Product not found');
  }
  
  const updatedProduct = { ...productData, id };
  db.products[index] = updatedProduct;
  await saveDb(db);
  return updatedProduct;
};

export const deleteProduct = async (id: string): Promise<void> => {
  const db = await loadDb();
  db.products = db.products.filter(p => p.id !== id);
  await saveDb(db);
};