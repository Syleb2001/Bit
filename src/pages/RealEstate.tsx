import React from 'react';
import { partners } from '../data/partners';
import { ProductCard } from '../components/ProductCard';
import { PartnerCard } from '../components/PartnerCard';
import { useProducts } from '../hooks/useProducts';

export function RealEstatePage() {
  const { products: properties, loading, error } = useProducts('real-estate');

  // Filter partners based on products that exist in this category
  const realEstatePartners = partners.filter(partner => 
    properties?.some(property => property.partnerId === partner.id)
  );

  if (loading) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-light text-gray-900 mb-8">Premium Real Estate</h1>
          <div className="flex items-center justify-center py-12">
            <div className="text-gray-600">Loading properties...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-light text-gray-900 mb-8">Premium Real Estate</h1>
          <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg p-4">
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-light text-gray-900 mb-8">Premium Real Estate</h1>
        
        {properties.length === 0 ? (
          <div className="text-center py-12 text-gray-600">
            No properties available at the moment.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {properties.map(property => (
              <ProductCard key={property.id} product={property} />
            ))}
          </div>
        )}

        {realEstatePartners.length > 0 && (
          <>
            <h2 className="text-2xl font-light text-gray-900 mb-6">Our Partners</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {realEstatePartners.map(partner => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}