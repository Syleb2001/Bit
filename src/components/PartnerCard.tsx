import React from 'react';
import { Partner } from '../types';
import { CheckCircle } from 'lucide-react';

interface PartnerCardProps {
  partner: Partner;
}

export function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg border border-gray-100">
      <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden">
        <img
          src={partner.logo}
          alt={partner.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center">
          <h3 className="text-lg font-medium text-gray-900">{partner.name}</h3>
          <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
        </div>
        <p className="text-gray-600 text-sm">{partner.description}</p>
      </div>
    </div>
  );
}