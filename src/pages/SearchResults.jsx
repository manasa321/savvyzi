import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const generateRandomProducts = (searchTerm, count = 5) => {
  const brands = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi'];
  const models = ['Pro', 'Ultra', 'Lite', 'Max', 'Plus'];
  const processors = ['A15 Bionic', 'Snapdragon 888', 'Exynos 2100', 'Dimensity 1200', 'Kirin 9000'];
  const capacities = ['64GB', '128GB', '256GB', '512GB'];
  const displaySizes = ['5.8"', '6.1"', '6.4"', '6.7"'];
  const operatingSystems = ['iOS', 'Android'];

  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `${brands[Math.floor(Math.random() * brands.length)]} ${searchTerm} ${models[Math.floor(Math.random() * models.length)]}`,
    description: `Latest smartphone with advanced features`,
    price: Math.floor(Math.random() * 50000) + 30000,
    image_url: `https://via.placeholder.com/300x300?text=${searchTerm}+${index + 1}`,
    processor: processors[Math.floor(Math.random() * processors.length)],
    capacity: capacities[Math.floor(Math.random() * capacities.length)],
    display_size: displaySizes[Math.floor(Math.random() * displaySizes.length)],
    operating_system: operatingSystems[Math.floor(Math.random() * operatingSystems.length)],
  }));
};

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('q') || '';

  const randomProducts = generateRandomProducts(searchTerm);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold mb-6">Search Results for "{searchTerm}"</h2>
        <div className="space-y-6">
          {randomProducts.map((product) => (
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
      </main>
    </div>
  );
};

export default SearchResults;