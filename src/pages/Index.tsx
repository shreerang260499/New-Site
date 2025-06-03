
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedDesigns from '../components/FeaturedDesigns';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import { CartProvider } from '../context/CartContext';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Categories />
        <FeaturedDesigns />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
