import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Home, Watch } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Categories() {
  const { t } = useTranslation();
  const [ref, controls] = useScrollAnimation();

  const categories = [
    {
      title: t('categories.cars.title'),
      icon: Car,
      image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80',
      description: t('categories.cars.description'),
      path: '/cars'
    },
    {
      title: t('categories.realEstate.title'),
      icon: Home,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80',
      description: t('categories.realEstate.description'),
      path: '/real-estate'
    },
    {
      title: t('categories.watches.title'),
      icon: Watch,
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80',
      description: t('categories.watches.description'),
      path: '/watches'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-3 gap-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <Link to={category.path}>
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <category.icon className="h-6 w-6 text-gray-900 mr-3" />
                    <h3 className="text-xl font-light text-gray-900">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 font-light">{category.description}</p>
                  <span className="text-sm text-gray-900 font-medium group-hover:text-blue-600 transition-colors duration-300">
                    {t('categories.discoverMore')} →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}