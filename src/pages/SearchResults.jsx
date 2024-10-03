import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import Navbar from '../components/Navbar';
import { Card, CardContent } from "@/components/ui/card";

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

  const { data: searchResults, isLoading, isError } = useQuery({
    queryKey: ['searchResults', query],
    queryFn: () => fetchSearchResults(query),
    enabled: !!query,
  });

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (isError) return <div className="text-center mt-8 text-red-500">Error fetching search results</div>;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchResults && searchResults.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <img src={product.image_url} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-lg font-bold">₹{product.price}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SearchResults;