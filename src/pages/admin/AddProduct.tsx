import React, { useState } from 'react';
import { ProductForm } from '../../components/admin/ProductForm';
import { useNavigate } from 'react-router-dom';
import type { Product } from '../../types';
import { saveProduct } from '../../utils/productService';

export function AddProductPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (productData: Omit<Product, 'id'>) => {
    try {
      setIsSubmitting(true);
      setError(null);
      await saveProduct(productData);
      
      // Small delay to ensure the database is updated
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Navigate after successful save
      navigate(`/${productData.category}`, { replace: true });
    } catch (error) {
      console.error('Error saving product:', error);
      setError('Failed to save product. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-light text-gray-900 mb-8">Add New Product</h1>
        
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
            {error}
          </div>
        )}
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <ProductForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </div>
      </div>
    </div>
  );
}