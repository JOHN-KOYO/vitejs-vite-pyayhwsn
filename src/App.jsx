import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';             // Already fixed!
import AboutPage from './Pages/AboutPage';     // Change lowercase 'p' to 'P'
import CompaniesPage from './Pages/CompaniesPage'; // Change lowercase 'p' to 'P'
import ServicesPage from './Pages/ServicesPage'; // Change lowercase 'p' to 'P'
import ProductsPage from './Pages/ProductsPage'; // Change lowercase 'p' to 'P'
import ContactPage from './Pages/ContactPage';   // Chan

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<CompaniesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <a className="whatsapp" href="https://wa.me/254700000000" aria-label="WhatsApp">◔</a>
    </div>
  )
}
