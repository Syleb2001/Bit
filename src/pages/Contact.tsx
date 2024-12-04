import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function ContactPage() {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-light text-gray-900 mb-8"
            >
              {t('contact.title')}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 mb-12"
            >
              <p className="text-gray-600">
                {t('contact.description')}
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{t('contact.address.title')}</h3>
                    <p className="text-gray-600">{t('contact.address.line1')}</p>
                    <p className="text-gray-600">{t('contact.address.line2')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{t('contact.phone.title')}</h3>
                    <p className="text-gray-600">{t('contact.phone.number')}</p>
                    <p className="text-sm text-gray-500">{t('contact.phone.hours')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{t('contact.email.title')}</h3>
                    <p className="text-gray-600">contact@bitopia.com</p>
                    <p className="text-sm text-gray-500">{t('contact.email.response')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
          >
            <h2 className="text-2xl font-light text-gray-900 mb-6">{t('contact.form.title')}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.firstName')}
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
                    {t('contact.form.lastName')}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending' || formStatus === 'sent'}
                className="w-full flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
              >
                {formStatus === 'sending' ? (
                  <span>{t('contact.form.sending')}</span>
                ) : formStatus === 'sent' ? (
                  <span>{t('contact.form.sent')}</span>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    <span>{t('contact.form.submit')}</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}