import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

const mockFetchProductData = async (productName) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: 1, website: "Amazon", price: Math.floor(Math.random() * 10000) + 1000, image: "https://via.placeholder.com/150", title: `${productName} - Amazon Edition` },
    { id: 2, website: "Flipkart", price: Math.floor(Math.random() * 10000) + 1000, image: "https://via.placeholder.com/150", title: `${productName} - Flipkart Special` },
    { id: 3, website: "Snapdeal", price: Math.floor(Math.random() * 10000) + 1000, image: "https://via.placeholder.com/150", title: `${productName} - Snapdeal Variant` },
    { id: 4, website: "Myntra", price: Math.floor(Math.random() * 10000) + 1000, image: "https://via.placeholder.com/150", title: `${productName} - Myntra Collection` },
  ];
};

const ProductComparison = ({ initialSearch }) => {
  const navigate = useNavigate();

  const { data: productData, refetch, isLoading, isError } = useQuery({
    queryKey: ['productComparison', initialSearch],
    queryFn: () => mockFetchProductData(initialSearch),
    enabled: false,
  });

  useEffect(() => {
    if (initialSearch) {
      refetch();
    }
  }, [initialSearch, refetch]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (isLoading) return <p className="text-center mt-8">Loading...</p>;
  if (isError) return <p className="text-center mt-8 text-red-500">Error fetching data. Please try again.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {productData && productData.map((item) => (
        <Card 
          key={item.id} 
          className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => handleProductClick(item.id)}
        >
          <CardHeader>
            <CardTitle className="text-lg">{item.website}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <img src={item.image} alt={item.title} className="w-32 h-32 object-cover rounded mb-4" />
              <h3 className="font-semibold text-sm mb-2 text-center">{item.title}</h3>
              <p className="text-2xl font-bold text-green-600">₹{item.price.toLocaleString('en-IN')}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductComparison;