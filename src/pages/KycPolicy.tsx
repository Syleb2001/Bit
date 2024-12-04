import React from 'react';
import { UserCheck, FileCheck, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function KycPolicyPage() {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-light text-gray-900 mb-8">{t('kyc.title')}</h1>
          
          <div className="space-y-8">
            <section>
              <div className="flex items-center mb-4">
                <UserCheck className="h-6 w-6 text-gray-900 mr-3" />
                <h2 className="text-2xl font-light">{t('kyc.riskBased.title')}</h2>
              </div>
              <p className="text-gray-600 mb-4">
                {t('kyc.riskBased.description')}
              </p>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-medium mb-4">{t('kyc.verification.triggers')}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>High AML risk score on crypto deposits</li>
                  <li>Connection to suspicious activities (e.g., hacks, ransomware)</li>
                  <li>Transactions linked to OFAC sanctioned addresses</li>
                  <li>Unusual transaction patterns requiring enhanced due diligence</li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <FileCheck className="h-6 w-6 text-gray-900 mr-3" />
                <h2 className="text-2xl font-light">{t('kyc.verification.title')}</h2>
              </div>
              <p className="text-gray-600 mb-4">
                When verification is required, we may request the following documents:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Government-issued ID</li>
                <li>Proof of address</li>
                <li>Source of funds documentation</li>
                <li>Additional information based on risk assessment</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <ShieldCheck className="h-6 w-6 text-gray-900 mr-3" />
                <h2 className="text-2xl font-light">{t('kyc.monitoring.title')}</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Our automated monitoring system screens for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Transactions from high-risk or sanctioned addresses</li>
                <li>Connections to known hacks or illicit activities</li>
                <li>Unusual transaction patterns</li>
                <li>High-risk jurisdictions</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}