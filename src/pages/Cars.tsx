import React from 'react';
import { partners } from '../data/partners';
import { ProductCard } from '../components/ProductCard';
import { PartnerCard } from '../components/PartnerCard';
import { useProducts } from '../hooks/useProducts';

export function CarsPage() {
  const { products: cars, loading } = useProducts('cars');

  // Filter partners based on products that exist in this category
  const carPartners = partners.filter(partner => 
    cars.some(car => car.partnerId === partner.id)
  );

  if (loading) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-light text-gray-900 mb-8">Luxury Automobiles</h1>
          <div className="flex items-center justify-center py-12">
            <div className="text-gray-600">Loading vehicles...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-light text-gray-900 mb-8">Luxury Automobiles</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cars.map(car => (
            <ProductCard key={car.id} product={car} />
          ))}
        </div>

        {carPartners.length > 0 && (
          <>
            <h2 className="text-2xl font-light text-gray-900 mb-6">Our Partners</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {carPartners.map(partner => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}