import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

const fetchSearchResults = async (searchTerm) => {
  const response = await fetch(`/api/search/?search=${encodeURIComponent(searchTerm)}`);
  if (!response.ok) {
    const text = await response.text();
    try {
      // Try to parse as JSON
      const errorData = JSON.parse(text);
      throw new Error(errorData.error || 'An error occurred while fetching search results');
    } catch (e) {
      // If parsing fails, it's likely HTML
      throw new Error('Received unexpected response from server. Please try again later.');
    }
  }
  return response.json();
};

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('q') || '';

  const { data: products, isLoading, isError, error } = useQuery({
    queryKey: ['searchResults', searchTerm],
    queryFn: () => fetchSearchResults(searchTerm),
    enabled: !!searchTerm,
  });

  if (isLoading) return <p className="text-center mt-8">Loading...</p>;
  if (isError) return <p className="text-center mt-8 text-red-500">Error: {error.message}</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold mb-6">Search Results for "{searchTerm}"</h2>
        {products && products.length > 0 ? (
          <div className="space-y-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <CardContent className="p-6 flex flex-col sm:flex-row">
                  <img src={product.image_url} alt={product.name} className="w-full sm:w-48 h-48 object-contain mb-4 sm:mb-0 sm:mr-6" />
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="mb-4">{product.description}</p>
                    <div className="mb-4">
                      <h4 className="font-medium">Key Specifications</h4>
                      <ul className="list-disc list-inside">
                        <li>Processor: {product.processor}</li>
                        <li>Capacity: {product.capacity}</li>
                        <li>Display Size: {product.display_size}</li>
                        <li>Operating System: {product.operating_system}</li>
                      </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <Link to={`/product/${product.id}`}>
                        <Button variant="link">View More</Button>
                      </Link>
                      <span className="text-2xl font-bold text-orange-500 mt-2 sm:mt-0">₹ {product.price.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center mt-8">No results found for "{searchTerm}"</p>
        )}
      </main>
    </div>
  );
};

export default SearchResults;