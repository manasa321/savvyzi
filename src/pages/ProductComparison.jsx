import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import Navbar from '../components/Navbar';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

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
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Product Comparison</h1>
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
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
            <Link to={`/product/${product.id}`} className="text-primary hover:underline">
              View Full Specifications
            </Link>
          </CardContent>
        </Card>
        <h3 className="text-2xl font-bold mb-4">{product.name} Price List</h3>
        <div className="space-y-4">
          {product.sellers.map((seller, index) => (
            <Card key={index}>
              <CardContent className="p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <img src={seller.logo} alt={seller.name} className="w-24 h-12 object-contain mr-4" />
                  <div>
                    <p className="font-semibold">{seller.name}</p>
                    <p className="text-3xl font-bold">₹{seller.price.toLocaleString('en-IN')}</p>
                  </div>
                </div>
                <Button variant={seller.in_stock ? "default" : "outline"} disabled={!seller.in_stock}>
                  {seller.in_stock ? "In Stock" : "Out of Stock"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductComparison;