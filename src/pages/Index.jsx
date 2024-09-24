import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductComparison from '../components/ProductComparison';
import CategorySection from '../components/CategorySection';

const Index = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search') || '';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-indigo-800">Price Pioneer</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Categories</h2>
          <CategorySection />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700">About Price Pioneer</h2>
          <p className="text-gray-700 mb-4">
            Price Pioneer is your one-stop solution for comparing prices across multiple e-commerce platforms. 
            We help you find the best deals on a wide range of products, from electronics to financial services.
          </p>
        </section>

        {searchTerm && (
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Product Comparison</h2>
            <ProductComparison initialSearch={searchTerm} />
          </section>
        )}
      </div>
    </div>
  );
};

export default Index;
