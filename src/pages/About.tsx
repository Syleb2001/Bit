import React from 'react';
import { Bitcoin, Coins, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-light text-gray-900 mb-8">{t('about.title')}</h1>
          
          <div className="prose prose-lg mb-12">
            <p className="text-gray-600 mb-6">
              {t('about.intro')}
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center mb-6">
              <MapPin className="h-6 w-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-light text-gray-900">{t('about.location.title')}</h2>
            </div>
            <p className="text-gray-600 mb-6">
              {t('about.location.description')}
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center mb-6">
              <Coins className="h-6 w-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-light text-gray-900">{t('about.crypto.title')}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-medium text-gray-900 mb-4">{t('about.crypto.major')}</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600">
                    <Bitcoin className="h-5 w-5 mr-3 text-amber-600" />
                    <div>
                      <span className="font-medium">{t('about.crypto.btc')}</span>
                    </div>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Bitcoin className="h-5 w-5 mr-3 text-blue-600" />
                    <div>
                      <span className="font-medium">{t('about.crypto.eth')}</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-medium text-gray-900 mb-4">{t('about.crypto.stablecoins')}</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600">
                    <Bitcoin className="h-5 w-5 mr-3 text-green-600" />
                    <div>
                      <span className="font-medium">{t('about.crypto.usdt')}</span>
                    </div>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Bitcoin className="h-5 w-5 mr-3 text-blue-500" />
                    <div>
                      <span className="font-medium">{t('about.crypto.usdc')}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-light text-gray-900 mb-6">{t('about.commitment.title')}</h2>
            <p className="text-gray-600 mb-4">
              {t('about.commitment.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}