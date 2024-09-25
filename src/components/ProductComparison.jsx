import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { ShoppingCart, Truck, Star } from 'lucide-react';
import axios from 'axios';

const fetchProductData = async (searchTerm) => {
  const response = await axios.get(`http://localhost:8000/api/products/search/?search=${searchTerm}`);
  return response.data;
};

const ProductComparison = ({ searchTerm }) => {
  const navigate = useNavigate();

  const { data: productData, isLoading, isError } = useQuery({
    queryKey: ['productComparison', searchTerm],
    queryFn: () => fetchProductData(searchTerm),
    enabled: !!searchTerm,
  });

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (isLoading) return <p className="text-center mt-8">Loading...</p>;
  if (isError) return <p className="text-center mt-8 text-red-500">Error fetching data. Please try again.</p>;

  return (
    <div className="space-y-6">
      {productData && productData.map((item) => (
        <Card 
          key={item.id} 
          className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow bg-white"
          onClick={() => handleProductClick(item.id)}
        >
          <div className="flex items-center p-4">
            <img src={item.image_url} alt={item.name} className="w-32 h-32 object-cover rounded mr-6" />
            <div className="flex-grow">
              <CardHeader className="p-0">
                <CardTitle className="text-xl text-indigo-700">{item.website}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <p className="text-3xl font-bold text-green-600 mb-2">₹{parseFloat(item.price).toLocaleString('en-IN')}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    {item.rating}
                  </span>
                  <span className="flex items-center">
                    <Truck className="h-4 w-4 mr-1" />
                    {item.delivery}
                  </span>
                  <span className="flex items-center text-blue-600 hover:underline">
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Add to Cart
                  </span>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProductComparison;
