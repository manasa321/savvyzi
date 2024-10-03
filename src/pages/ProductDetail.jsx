import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import Navbar from '../components/Navbar';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Bell, BarChart2 } from 'lucide-react';

const fetchProductDetails = async (productId) => {
  const response = await fetch(`/api/products/${productId}/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const ProductDetail = () => {
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
        <div className="text-sm breadcrumbs mb-4">
          <ul>
            <li><a>Start</a></li>
            <li><a>{product.category}</a></li>
            <li>{product.name}</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="relative">
              <img src={product.image_url} alt={product.name} className="w-full rounded-lg" />
              <span className="absolute top-4 left-4 bg-yellow-300 text-black px-2 py-1 rounded-full text-sm font-semibold">
                500+ watching
              </span>
              <Button variant="ghost" className="absolute top-4 right-4">
                <Heart className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center mb-4">
              <span className="text-xl font-semibold mr-4">★ 4.5</span>
              <Button variant="outline" className="mr-4">
                <Bell className="h-4 w-4 mr-2" />
                Price alert
              </Button>
              <Button variant="outline">
                <BarChart2 className="h-4 w-4 mr-2" />
                Compare
              </Button>
            </div>
            <p className="mb-4">{product.description}</p>
            <p className="mb-4">Compare prices from ₹{product.price.toLocaleString('en-IN')} · Popularity 50 in {product.category}</p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Capacity</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="default">{product.capacity}</Button>
              </div>
            </div>
          </div>
        </div>
        <Tabs defaultValue="prices" className="mt-8">
          <TabsList>
            <TabsTrigger value="prices">Prices</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="price-history">Price history</TabsTrigger>
            <TabsTrigger value="product-details">Product details</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
          </TabsList>
          <TabsContent value="prices">
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-4">
                    <Button variant="outline">Only in stock</Button>
                    <Button variant="outline">Price incl. delivery</Button>
                    <Button variant="outline">Used products</Button>
                  </div>
                  <select className="border rounded p-2">
                    <option>Delivery Options</option>
                  </select>
                </div>
                {product.sellers.map((seller, index) => (
                  <div key={index} className="flex justify-between items-center border-b py-4">
                    <div>
                      <h3 className="font-semibold">{seller.name}</h3>
                      <p className="text-blue-500">{product.name}</p>
                      {!seller.in_stock && <p className="text-sm text-gray-500">Out of stock</p>}
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold">₹{seller.price.toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          {/* Add content for other tabs as needed */}
        </Tabs>
      </main>
    </div>
  );
};

export default ProductDetail;