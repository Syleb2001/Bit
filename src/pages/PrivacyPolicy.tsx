import React from 'react';
import { Shield, Lock, Eye, FileText, UserCheck, Bell } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function PrivacyPolicyPage() {
  const { t } = useTranslation();

  const dataCollected = [
    {
      title: "Personal Information",
      items: [
        "Name and contact details",
        "Government-issued identification",
        "Residential address",
        "Date of birth",
        "Email address",
        "Phone number"
      ]
    },
    {
      title: "Financial Information",
      items: [
        "Cryptocurrency wallet addresses",
        "Transaction history",
        "Source of funds information"
      ]
    },
    {
      title: "Technical Information",
      items: [
        "IP address",
        "Browser type and version",
        "Device information",
        "Access timestamps",
        "Session duration"
      ]
    }
  ];

  const userRights = [
    {
      title: "Access Rights",
      description: "You can request a copy of your personal data and verify its lawful processing."
    },
    {
      title: "Rectification Rights",
      description: "You can request correction of inaccurate personal data."
    },
    {
      title: "Erasure Rights",
      description: "You can request deletion of your personal data under certain circumstances."
    },
    {
      title: "Data Portability",
      description: "You can request transfer of your data to another service provider."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-light text-gray-900 mb-8">{t('privacy.title')}</h1>
          
          <div className="space-y-12">
            {/* Data Protection Overview */}
            <section className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-amber-600 mr-4" />
                <h2 className="text-2xl font-light text-gray-900">{t('privacy.dataProtection.title')}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                At Bitopia, we prioritize the protection of your personal information. Our privacy practices comply with UAE Federal Decree Law No. 45 of 2021 on Personal Data Protection and relevant DIFC data protection regulations. We implement industry-standard security measures to safeguard your data.
              </p>
            </section>

            {/* Information Collection */}
            <section className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-amber-600 mr-4" />
                <h2 className="text-2xl font-light text-gray-900">{t('privacy.information.title')}</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {dataCollected.map((category, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="font-medium text-gray-900 mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start">
                          <span className="mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Data Usage */}
            <section className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <Lock className="h-8 w-8 text-amber-600 mr-4" />
                <h2 className="text-2xl font-light text-gray-900">How We Use Your Data</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">We use your personal information for:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <UserCheck className="h-5 w-5 mr-2 flex-shrink-0 text-gray-400" />
                    <span>Verifying your identity and processing transactions</span>
                  </li>
                  <li className="flex items-start">
                    <Bell className="h-5 w-5 mr-2 flex-shrink-0 text-gray-400" />
                    <span>Sending important notifications about your transactions</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 mr-2 flex-shrink-0 text-gray-400" />
                    <span>Complying with legal obligations and preventing fraud</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* User Rights */}
            <section className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-amber-600 mr-4" />
                <h2 className="text-2xl font-light text-gray-900">{t('privacy.rights.title')}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {userRights.map((right, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="font-medium text-gray-900 mb-2">{right.title}</h3>
                    <p className="text-gray-600 text-sm">{right.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-amber-50 rounded-2xl p-8">
              <h2 className="text-xl font-medium text-gray-900 mb-4">Contact Our Data Protection Officer</h2>
              <p className="text-gray-600 mb-4">
                For any privacy-related inquiries or to exercise your rights, please contact our Data Protection Officer at:
              </p>
              <div className="text-gray-600">
                <p>Email: privacy@bitopia.com</p>
                <p>Address: Dubai International Financial Centre (DIFC), Dubai, UAE</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}