import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40" />
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          src="https://st.depositphotos.com/31006582/53608/v/450/depositphotos_536088942-stock-illustration-dubai-vector-map-detailed-vector.jpg"
          className="w-full h-full object-cover mix-blend-luminosity contrast-125 brightness-50"
          alt="Dubai Vector Map"
          style={{
            imageRendering: 'crisp-edges',
            filter: 'url(#noise)'
          }}
        />
        <svg className="hidden">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch"/>
            <feColorMatrix type="saturate" values="0"/>
            <feBlend mode="multiply" in2="SourceGraphic" />
          </filter>
        </svg>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-6xl md:text-7xl font-light text-white mb-6 tracking-tight"
            >
              {t('hero.title')}{' '}
              <span className="font-normal bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                {t('hero.subtitle')}
              </span>
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl text-gray-200 mb-8 font-light"
            >
              {t('hero.description')}
            </motion.p>
            <motion.button 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="group flex items-center px-8 py-4 text-lg bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full hover:bg-white hover:border-white hover:text-gray-900 transition-all duration-300"
            >
              {t('hero.cta')}
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}