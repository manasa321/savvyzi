import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

const fetchSearchResults = async (query) => {
  const response = await fetch(`/api/search/?search=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  const { data: searchResults, isLoading, isError, error } = useQuery({
    queryKey: ['searchResults', query],
    queryFn: () => fetchSearchResults(query),
    enabled: !!query,
  });

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (isError) return <div className="text-center mt-8 text-red-500">Error fetching search results: {error.message}</div>;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <BackButton />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>
        {searchResults && searchResults.length > 0 ? (
          <div className="space-y-6">
            {searchResults.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                      <img src={product.image_url} alt={product.name} className="w-full h-48 object-contain mx-auto" />
                    </div>
                    <div className="w-full md:w-3/4 md:pl-6">
                      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Processor</p>
                          <p className="font-semibold">{product.processor}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Capacity</p>
                          <p className="font-semibold">{product.capacity}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Display Size</p>
                          <p className="font-semibold">{product.display_size}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Operating System</p>
                          <p className="font-semibold">{product.operating_system}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-3xl font-bold text-primary">₹{product.price.toLocaleString('en-IN')}</p>
                          <p className="text-sm text-gray-600">{product.sellers.length} Sellers</p>
                        </div>
                        <Link to={`/product/${product.id}`}>
                          <Button variant="outline" className="flex items-center">
                            View More <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center mt-8">No results found for "{query}"</div>
        )}
      </main>
    </div>
  );
};

export default SearchResults;