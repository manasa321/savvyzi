import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductComparison from '../components/ProductComparison';
import ProductFilter from '../components/ProductFilter';

const Index = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search') || '';

  const [filters, setFilters] = useState({
    brand: { Apple: false, Samsung: false, Sony: false, LG: false },
    type: { Smartphone: false, Laptop: false, TV: false, Headphones: false },
    price: { 'Under ₹10,000': false, '₹10,000 - ₹30,000': false, '₹30,000 - ₹50,000': false, 'Above ₹50,000': false }
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-indigo-200">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-indigo-800">Product Price Comparison</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            <ProductFilter filters={filters} setFilters={setFilters} />
          </div>
          <div className="w-full md:w-3/4">
            <ProductComparison initialSearch={searchTerm} filters={filters} />
          </div>
        </div>
      </div>
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Price Pioneer
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Price Pioneer is your go-to platform for comparing prices across multiple e-commerce websites. We help you find the best deals on electronics, including smartphones, laptops, TVs, and more. Our mission is to save you time and money by providing accurate, up-to-date price comparisons from trusted online retailers.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-900">Key Features:</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-green-500">✓</span>
                <p className="ml-3 text-lg text-gray-500">Real-time price comparisons from top e-commerce platforms</p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-green-500">✓</span>
                <p className="ml-3 text-lg text-gray-500">Advanced filtering options to find exactly what you're looking for</p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-green-500">✓</span>
                <p className="ml-3 text-lg text-gray-500">User-friendly interface for easy navigation and comparison</p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-green-500">✓</span>
                <p className="ml-3 text-lg text-gray-500">Detailed product information and specifications</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
