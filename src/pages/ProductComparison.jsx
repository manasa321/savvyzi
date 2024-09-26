import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Navbar from '../components/Navbar';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fetchProductDetails = async (productId) => {
  const response = await fetch(`/api/products/${productId}/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const ProductComparison = () => {
  const { productId } = useParams();
  const { data: product, isLoading, isError } = useQuery({
    queryKey: ['productDetails', productId],
    queryFn: () => fetchProductDetails(productId),
  });

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (isError) return <div className="text-center mt-8 text-red-500">Error fetching product details</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold mb-6">Key Specs of {product.name}</h2>
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="mr-2">🔲</span>
                <div>
                  <p className="font-medium">Processor</p>
                  <p>{product.processor}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-2">💾</span>
                <div>
                  <p className="font-medium">Capacity</p>
                  <p>{product.capacity}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🖥️</span>
                <div>
                  <p className="font-medium">Display Size</p>
                  <p>{product.display_size}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🖥️</span>
                <div>
                  <p className="font-medium">Operating System</p>
                  <p>{product.operating_system}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Button variant="link" className="mb-6">View Full Specifications</Button>
        <h3 className="text-xl font-semibold mb-4">{product.name} Price List</h3>
        {product.sellers.map((seller) => (
          <Card key={seller.name} className="mb-4">
            <CardContent className="p-4 flex justify-between items-center">
              <img src={seller.logo} alt={seller.name} className="h-8" />
              <span className="text-xl font-bold">₹ {seller.price.toLocaleString('en-IN')}</span>
              <Button variant="outline" className={seller.in_stock ? 'text-green-500' : 'text-red-500'}>
                {seller.in_stock ? 'In Stock' : 'Out of Stock'}
              </Button>
            </CardContent>
          </Card>
        ))}
        <Card className="mt-6">
          <CardContent className="p-6 flex items-center">
            <img src={product.image_url} alt={product.name} className="w-24 h-24 object-contain mr-6" />
            <div>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center mt-2">
                <span className="text-2xl font-bold text-orange-500 mr-4">₹ {product.best_price.toLocaleString('en-IN')}</span>
                <span className="text-sm text-gray-500 mr-4">{product.seller_count} Sellers</span>
                <Button variant="link" className="text-blue-500">Set Price Alert</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ProductComparison;