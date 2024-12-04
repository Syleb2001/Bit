import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Stats() {
  const { t } = useTranslation();
  const [ref, controls] = useScrollAnimation();

  const stats = [
    { value: '10K+', label: t('stats.transactions') },
    { value: '150+', label: t('stats.partners') },
    { value: '25+', label: t('stats.countries') },
    { value: '99%', label: t('stats.satisfied') }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 md:grid-cols-4 gap-12"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <motion.div 
                className="text-4xl font-light text-gray-900 mb-2"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600 font-light">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}