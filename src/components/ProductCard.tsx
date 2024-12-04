import React, { useState } from 'react';
import { Product } from '../types';
import { ChevronDown, ChevronUp, DollarSign } from 'lucide-react';
import { ContactModal } from './ContactModal';

interface ProductCardProps {
  product: Product;
}

function formatPrice(value: number): string {
  if (value === 0) return 'On Demand';
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  }
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

function formatCryptoAmount(value: number): string {
  if (value === 0) return 'On Demand';
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPrices, setShowPrices] = useState(false);

  const isOnDemand = product.price.fiat.usd === 0;

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-medium text-gray-900 mb-2">{product.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
          
          {/* Primary Price Display */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-gray-900">
              <DollarSign className="h-5 w-5 mr-1" />
              <span className="text-xl font-medium">
                {formatPrice(product.price.fiat.usd)}
              </span>
            </div>
            {!isOnDemand && (
              <button
                onClick={() => setShowPrices(!showPrices)}
                className="flex items-center text-sm text-gray-600 hover:text-gray-900"
              >
                {showPrices ? (
                  <>
                    Hide Prices
                    <ChevronUp className="h-4 w-4 ml-1" />
                  </>
                ) : (
                  <>
                    Show All Prices
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </>
                )}
              </button>
            )}
          </div>

          {/* Expandable Price Section */}
          {!isOnDemand && showPrices && (
            <div className="space-y-2 mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">EUR</span>
                    <span className="font-medium">€{formatPrice(product.price.fiat.eur)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">BTC</span>
                    <span className="font-medium">{formatCryptoAmount(product.price.crypto.btc)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">ETH</span>
                    <span className="font-medium">{formatCryptoAmount(product.price.crypto.eth)}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">USDT</span>
                    <span className="font-medium">${formatPrice(product.price.crypto.usdt)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">USDC</span>
                    <span className="font-medium">${formatPrice(product.price.crypto.usdc)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>

      <ContactModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}