import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductComparison from '../components/ProductComparison';

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search') || '';
  const category = searchParams.get('category') || '';

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Search Results for "{searchTerm}" {category && `in ${category}`}
        </h2>
        <ProductComparison searchTerm={searchTerm} category={category} />
      </main>
    </div>
  );
};

export default SearchResults;