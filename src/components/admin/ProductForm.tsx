import React, { useState, useEffect } from 'react';
import { Product, ProductCategory } from '../../types';
import { partners } from '../../data/partners';

interface ProductFormProps {
  onSubmit: (product: Omit<Product, 'id'>) => void;
  initialData?: Product;
  isSubmitting?: boolean;
}

// Current crypto rates (simplified for demo)
const CRYPTO_RATES = {
  btc: 26000, // 1 BTC = $26,000
  eth: 1600,  // 1 ETH = $1,600
};

export function ProductForm({ onSubmit, initialData, isSubmitting = false }: ProductFormProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    description: initialData?.description || '',
    category: initialData?.category || 'cars' as ProductCategory,
    price: {
      fiat: {
        usd: initialData?.price?.fiat.usd || 0,
        eur: initialData?.price?.fiat.eur || 0
      },
      crypto: {
        btc: initialData?.price?.crypto.btc || 0,
        eth: initialData?.price?.crypto.eth || 0,
        usdt: initialData?.price?.crypto.usdt || 0,
        usdc: initialData?.price?.crypto.usdc || 0
      }
    },
    images: initialData?.images || [''],
    partnerId: initialData?.partnerId || '',
    features: initialData?.features || [''],
    location: initialData?.location || ''
  });

  const [isOnDemand, setIsOnDemand] = useState(!initialData?.price?.fiat.usd);

  // Calculate crypto prices when USD price changes
  useEffect(() => {
    if (!isOnDemand && formData.price.fiat.usd > 0) {
      const usdPrice = formData.price.fiat.usd;
      setFormData(prev => ({
        ...prev,
        price: {
          fiat: {
            usd: usdPrice,
            eur: Math.round(usdPrice * 0.93) // Simplified EUR conversion
          },
          crypto: {
            btc: Number((usdPrice / CRYPTO_RATES.btc).toFixed(6)),
            eth: Number((usdPrice / CRYPTO_RATES.eth).toFixed(6)),
            usdt: usdPrice,
            usdc: usdPrice
          }
        }
      }));
    }
  }, [formData.price.fiat.usd, isOnDemand]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare the data in the correct structure
    const submitData = {
      title: formData.title.trim(),
      description: formData.description.trim(),
      category: formData.category,
      price: isOnDemand ? {
        fiat: { usd: 0, eur: 0 },
        crypto: { btc: 0, eth: 0, usdt: 0, usdc: 0 }
      } : formData.price,
      // Filter out empty strings from arrays
      images: formData.images.filter(img => img.trim() !== ''),
      partnerId: formData.partnerId,
      features: formData.features.filter(feat => feat.trim() !== ''),
      location: formData.category === 'real-estate' ? formData.location.trim() : undefined
    };

    onSubmit(submitData);
  };

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData({ ...formData, images: newImages });
  };

  const addImage = () => {
    setFormData({ ...formData, images: [...formData.images, ''] });
  };

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ''] });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value as ProductCategory })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          required
          disabled={isSubmitting}
        >
          <option value="cars">Cars</option>
          <option value="real-estate">Real Estate</option>
          <option value="watches">Watches</option>
          <option value="art">Art</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          required
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          rows={3}
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center">
          <label className="block text-sm font-medium text-gray-700 mr-4">Price</label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isOnDemand}
              onChange={(e) => setIsOnDemand(e.target.checked)}
              className="rounded border-gray-300 text-gray-900 focus:ring-gray-900"
              disabled={isSubmitting}
            />
            <span className="ml-2 text-sm text-gray-600">On Demand</span>
          </label>
        </div>

        {!isOnDemand && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Price (USD)</label>
              <input
                type="number"
                value={formData.price.fiat.usd || ''}
                onChange={(e) => setFormData({
                  ...formData,
                  price: {
                    ...formData.price,
                    fiat: { ...formData.price.fiat, usd: Number(e.target.value) }
                  }
                })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                min="0"
                step="1000"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Price (EUR)</label>
              <input
                type="number"
                value={formData.price.fiat.eur || ''}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 bg-gray-50"
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Price (BTC)</label>
              <input
                type="number"
                value={formData.price.crypto.btc || ''}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 bg-gray-50"
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Price (ETH)</label>
              <input
                type="number"
                value={formData.price.crypto.eth || ''}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 bg-gray-50"
                disabled
              />
            </div>
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Partner</label>
        <select
          value={formData.partnerId}
          onChange={(e) => setFormData({ ...formData, partnerId: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          required
          disabled={isSubmitting}
        >
          <option value="">Select a partner</option>
          {partners.map((partner) => (
            <option key={partner.id} value={partner.id}>
              {partner.name}
            </option>
          ))}
        </select>
      </div>

      {formData.category === 'real-estate' && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            required
            disabled={isSubmitting}
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">Images</label>
        {formData.images.map((image, index) => (
          <div key={index} className="mt-1 flex items-center gap-2">
            <input
              type="url"
              value={image}
              onChange={(e) => handleImageChange(index, e.target.value)}
              className="block w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="Image URL"
              required
              disabled={isSubmitting}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addImage}
          className="mt-2 text-sm text-gray-600 hover:text-gray-900"
          disabled={isSubmitting}
        >
          + Add another image
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Features</label>
        {formData.features.map((feature, index) => (
          <div key={index} className="mt-1 flex items-center gap-2">
            <input
              type="text"
              value={feature}
              onChange={(e) => handleFeatureChange(index, e.target.value)}
              className="block w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="Feature"
              required
              disabled={isSubmitting}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addFeature}
          className="mt-2 text-sm text-gray-600 hover:text-gray-900"
          disabled={isSubmitting}
        >
          + Add another feature
        </button>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Saving...' : 'Save Product'}
      </button>
    </form>
  );
}