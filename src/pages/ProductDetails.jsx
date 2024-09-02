import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mockFetchProductDetails = async (productId) => {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock data for different websites
  return [
    { website: "Amazon", price: Math.floor(Math.random() * 10000) + 1000, link: "https://www.amazon.in" },
    { website: "Flipkart", price: Math.floor(Math.random() * 10000) + 1000, link: "https://www.flipkart.com" },
    { website: "Snapdeal", price: Math.floor(Math.random() * 10000) + 1000, link: "https://www.snapdeal.com" },
    { website: "Myntra", price: Math.floor(Math.random() * 10000) + 1000, link: "https://www.myntra.com" },
    { website: "Croma", price: Math.floor(Math.random() * 10000) + 1000, link: "https://www.croma.com" },
  ];
};

const ProductDetails = () => {
  const { productId } = useParams();

  const { data: productDetails, isLoading, isError } = useQuery({
    queryKey: ['productDetails', productId],
    queryFn: () => mockFetchProductDetails(productId),
  });

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (isError) return <div className="text-center mt-8 text-red-500">Error fetching product details</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Product Details</h2>
      <p className="mb-4">Product ID: {productId}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {productDetails.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.website}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-2">₹{item.price.toLocaleString('en-IN')}</p>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                View on {item.website}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;