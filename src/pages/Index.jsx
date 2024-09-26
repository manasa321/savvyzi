import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductComparison from '../components/ProductComparison';
import CategorySection from '../components/CategorySection';
import DealOfTheDay from '../components/DealOfTheDay';

const Index = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search') || '';

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Explore Categories</h2>
          <CategorySection />
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Deals of the Day</h2>
          <DealOfTheDay />
        </section>
        
        {searchTerm && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Search Results for "{searchTerm}"</h2>
            <ProductComparison searchTerm={searchTerm} />
          </section>
        )}
      </main>
    </div>
  );
};

export default Index;
