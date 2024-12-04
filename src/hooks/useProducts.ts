import { useState, useEffect } from 'react';
import { Product } from '../types';
import { getProducts } from '../utils/productService';

export function useProducts(category?: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function loadProducts() {
    try {
      setLoading(true);
      setError(null);
      const allProducts = await getProducts();
      if (category) {
        setProducts(allProducts.filter(p => p.category === category));
      } else {
        setProducts(allProducts);
      }
    } catch (err) {
      console.error('Error loading products:', err);
      setError('Failed to load products. Please try again later.');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();

    // Listen for database updates
    const handleDbUpdate = () => {
      loadProducts();
    };

    window.addEventListener('bitopia_db_update', handleDbUpdate);

    return () => {
      window.removeEventListener('bitopia_db_update', handleDbUpdate);
    };
  }, [category]);

  return {
    products,
    loading,
    error,
    refresh: loadProducts
  };
}