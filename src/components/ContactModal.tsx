import React from 'react';
import { X } from 'lucide-react';
import { Product, Partner } from '../types';
import { partners } from '../data/partners';

interface ContactModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ product, isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  const partner = partners.find(p => p.id === product.partnerId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-6">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-1">{product.title}</h3>
            {partner && (
              <p className="text-sm text-gray-600">
                Offered by: {partner.name}
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                WhatsApp Number
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
                placeholder="+1 234 567 8900"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}