import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Navbar from '../components/Navbar';
import ProductComparison from '../components/ProductComparison';

const fetchSearchResults = async (category, brand) => {
  // This is a mock function. In a real application, you would fetch data from an API.
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
  return [
    { id: 1, name: `${brand} Product 1`, price: Math.floor(Math.random() * 1000) + 100 },
    { id: 2, name: `${brand} Product 2`, price: Math.floor(Math.random() * 1000) + 100 },
    { id: 3, name: `${brand} Product 3`, price: Math.floor(Math.random() * 1000) + 100 },
  ];
};

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  const brand = searchParams.get('brand');

  const { data: searchResults, isLoading, isError } = useQuery({
    queryKey: ['searchResults', category, brand],
    queryFn: () => fetchSearchResults(category, brand),
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Search Results for {brand} {category}</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error fetching results. Please try again.</p>
        ) : (
          <ProductComparison searchTerm={`${brand} ${category}`} />
        )}
      </main>
    </div>
  );
};

export default SearchResults;