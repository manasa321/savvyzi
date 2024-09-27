import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Bell, BarChart2 } from 'lucide-react';

const ProductDetail = () => {
  const { productId } = useParams();
  const [selectedCapacity, setSelectedCapacity] = useState('128GB');
  const [selectedColor, setSelectedColor] = useState('All');

  // Mock product data
  const product = {
    name: 'Apple iPhone 14 Pro, 128GB',
    rating: 4.4,
    description: 'While this might seem identical to the iPhone 13 at first glance, it does have some new features and tweaks that make it stand out.',
    priceRange: '£569.99 to £1,770.75',
    popularity: 50,
    category: 'Mobile Phones',
    images: [
      'https://via.placeholder.com/500x500?text=iPhone+14+Pro',
      'https://via.placeholder.com/100x100?text=iPhone+1',
      'https://via.placeholder.com/100x100?text=iPhone+2',
      'https://via.placeholder.com/100x100?text=iPhone+3',
    ],
    capacities: ['128GB', '256GB', '512GB', '1TB'],
    colors: ['All', 'Silver', 'Black', 'Purple', 'Gold'],
    sellers: [
      { name: 'OnBuy', price: 1704.46, shipping: '£12.00 shipping, 2-3 days' },
      { name: 'Smart Cellular', price: 569.99, condition: 'Used' },
      { name: 'Clove Technology', price: 935.00 },
      { name: 'AO - Mobile Phones Direct', price: 1049.00 },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <div className="text-sm breadcrumbs mb-4">
          <ul>
            <li><a>Start</a></li>
            <li><a>Phones & Wearables</a></li>
            <li>Mobile Phones</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="relative">
              <img src={product.images[0]} alt={product.name} className="w-full rounded-lg" />
              <span className="absolute top-4 left-4 bg-yellow-300 text-black px-2 py-1 rounded-full text-sm font-semibold">
                500+ watching
              </span>
              <Button variant="ghost" className="absolute top-4 right-4">
                <Heart className="h-6 w-6" />
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-4">
              {product.images.slice(1).map((img, index) => (
                <img key={index} src={img} alt={`${product.name} ${index + 1}`} className="w-full rounded-lg" />
              ))}
              <Button variant="outline" className="w-full h-full">+6</Button>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center mb-4">
              <span className="text-xl font-semibold mr-4">★ {product.rating}</span>
              <Button variant="outline" className="mr-4">
                <Bell className="h-4 w-4 mr-2" />
                Price alert
              </Button>
              <Button variant="outline">
                <BarChart2 className="h-4 w-4 mr-2" />
                Compare
              </Button>
            </div>
            <p className="mb-4">{product.description} <a href="#" className="text-blue-500">Read more</a></p>
            <p className="mb-4">Compare prices from {product.priceRange} · Popularity {product.popularity} in {product.category}</p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Capacity</h3>
              <div className="flex flex-wrap gap-2">
                {product.capacities.map((capacity) => (
                  <Button
                    key={capacity}
                    variant={selectedCapacity === capacity ? "default" : "outline"}
                    onClick={() => setSelectedCapacity(capacity)}
                  >
                    {capacity}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? "default" : "outline"}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </Button>
                ))}
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
                      {seller.condition && <p className="text-sm text-gray-500">{seller.condition}</p>}
                    </div>
                    <div className="text-right">
                      {seller.shipping && <p className="text-sm text-gray-500">{seller.shipping}</p>}
                      <p className="text-xl font-bold">£{seller.price.toFixed(2)}</p>
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