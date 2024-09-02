import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

const mockFetchProductData = async (productName) => {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock data with image and title
  return [
    { id: 1, website: "Amazon", price: Math.floor(Math.random() * 10000) + 1000, image: "https://via.placeholder.com/150", title: `${productName} - Amazon Edition` },
    { id: 2, website: "Flipkart", price: Math.floor(Math.random() * 10000) + 1000, image: "https://via.placeholder.com/150", title: `${productName} - Flipkart Special` },
    { id: 3, website: "Snapdeal", price: Math.floor(Math.random() * 10000) + 1000, image: "https://via.placeholder.com/150", title: `${productName} - Snapdeal Variant` },
    { id: 4, website: "Myntra", price: Math.floor(Math.random() * 10000) + 1000, image: "https://via.placeholder.com/150", title: `${productName} - Myntra Collection` },
  ];
};

const ProductComparison = () => {
  const [productName, setProductName] = useState("");
  const navigate = useNavigate();

  const { data: productData, refetch, isLoading, isError } = useQuery({
    queryKey: ['productComparison', productName],
    queryFn: () => mockFetchProductData(productName),
    enabled: false,
  });

  const handleSearch = () => {
    if (productName.trim()) {
      refetch();
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Product Price Comparison</h2>
      <div className="flex space-x-2 mb-4">
        <Input
          type="text"
          placeholder="Enter product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="flex-grow"
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching data. Please try again.</p>}
      
      {productData && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {productData.map((item) => (
            <Card 
              key={item.id} 
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleProductClick(item.id)}
            >
              <CardHeader>
                <CardTitle className="text-lg">{item.website}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded" />
                  <div>
                    <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                    <p className="text-2xl font-bold">₹{item.price.toLocaleString('en-IN')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductComparison;