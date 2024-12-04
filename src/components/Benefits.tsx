import React from 'react';
import { Shield, Award, Headphones, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Benefits() {
  const { t } = useTranslation();
  const [ref, controls] = useScrollAnimation();

  const benefits = [
    {
      icon: Shield,
      title: t('benefits.secure.title'),
      description: t('benefits.secure.description')
    },
    {
      icon: Award,
      title: t('benefits.verified.title'),
      description: t('benefits.verified.description')
    },
    {
      icon: Headphones,
      title: t('benefits.support.title'),
      description: t('benefits.support.description')
    },
    {
      icon: Zap,
      title: t('benefits.fast.title'),
      description: t('benefits.fast.description')
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-4">{t('benefits.title')}</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto" />
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-4 gap-12"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border border-gray-200 mb-6 group-hover:border-amber-600 transition-colors duration-300">
                <benefit.icon className="h-6 w-6 text-gray-900 group-hover:text-amber-600 transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 font-light">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}