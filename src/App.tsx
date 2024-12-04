import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/Home';
import { CarsPage } from './pages/Cars';
import { RealEstatePage } from './pages/RealEstate';
import { WatchesPage } from './pages/Watches';
import { ArtPage } from './pages/Art';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { PrivacyPolicyPage } from './pages/PrivacyPolicy';
import { KycPolicyPage } from './pages/KycPolicy';
import { AddProductPage } from './pages/admin/AddProduct';

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/real-estate" element={<RealEstatePage />} />
        <Route path="/watches" element={<WatchesPage />} />
        <Route path="/art" element={<ArtPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/kyc-policy" element={<KycPolicyPage />} />
        <Route path="/admin/products/add" element={<AddProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;