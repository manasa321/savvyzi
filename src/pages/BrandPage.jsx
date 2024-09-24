import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fetchBrandData = async (category, brand) => {
  // Simulating an API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    category,
    brand,
    products: [
      { id: 1, name: `${brand} Product 1`, price: Math.floor(Math.random() * 1000) + 100 },
      { id: 2, name: `${brand} Product 2`, price: Math.floor(Math.random() * 1000) + 100 },
      { id: 3, name: `${brand} Product 3`, price: Math.floor(Math.random() * 1000) + 100 },
    ]
  };
};

const BrandPage = () => {
  const { category, brand } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['brandData', category, brand],
    queryFn: () => fetchBrandData(category, brand),
  });

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">Error: {error.message}</div>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">{brand} - {category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600">₹{product.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;