import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { sampleProducts } from '../data/sampleProducts';

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('q') || '';

  // Filter products based on the search term
  const filteredProducts = sampleProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold mb-6">Search Results for "{searchTerm}"</h2>
        {filteredProducts.length === 0 ? (
          <p>No products found matching your search.</p>
        ) : (
          <div className="space-y-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <CardContent className="p-6 flex">
                  <img src={product.image_url} alt={product.name} className="w-48 h-48 object-contain mr-6" />
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
                    <div className="flex justify-between items-center">
                      <Link to={`/product/${product.id}`}>
                        <Button variant="link">View More</Button>
                      </Link>
                      <span className="text-2xl font-bold text-orange-500">₹ {product.price.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default SearchResults;
