import React from 'react';
import { partners } from '../data/partners';
import { ProductCard } from '../components/ProductCard';
import { PartnerCard } from '../components/PartnerCard';
import { useProducts } from '../hooks/useProducts';

export function WatchesPage() {
  const { products: watches, loading } = useProducts('watches');

  // Filter partners based on products that exist in this category
  const watchPartners = partners.filter(partner => 
    watches.some(watch => watch.partnerId === partner.id)
  );

  if (loading) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-light text-gray-900 mb-8">Watches & Jewelry</h1>
          <div className="flex items-center justify-center py-12">
            <div className="text-gray-600">Loading timepieces...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-light text-gray-900 mb-8">Watches & Jewelry</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {watches.map(watch => (
            <ProductCard key={watch.id} product={watch} />
          ))}
        </div>

        {watchPartners.length > 0 && (
          <>
            <h2 className="text-2xl font-light text-gray-900 mb-6">Our Partners</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {watchPartners.map(partner => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}