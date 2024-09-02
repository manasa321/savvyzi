import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

const mockFetchProductData = async (productName) => {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock data
  return [
    { website: "Amazon", price: Math.floor(Math.random() * 10000) + 1000 },
    { website: "Flipkart", price: Math.floor(Math.random() * 10000) + 1000 },
    { website: "Snapdeal", price: Math.floor(Math.random() * 10000) + 1000 },
    { website: "Myntra", price: Math.floor(Math.random() * 10000) + 1000 },
  ];
};

const ProductComparison = () => {
  const [productName, setProductName] = useState("");

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

  return (
    <div className="max-w-2xl mx-auto p-4">
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
        <div className="grid grid-cols-2 gap-4">
          {productData.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{item.website}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">₹{item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductComparison;