import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

const FinanceCategoryPage = () => {
  const { category } = useParams();

  const { data: financeData, isLoading, error } = useQuery({
    queryKey: ['finance'],
    queryFn: async () => {
      const response = await fetch('http://localhost:8000/finance/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }
  });

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto px-4 py-8">Error loading finance data</div>;
  }

  const categoryData = financeData?.filter(item =>
    item.CATEGORY.toLowerCase() === category.replace('-', ' ').toLowerCase()
  ) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="mb-4 inline-block">
        <Button variant="outline" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>
      </Link>
      <h2 className="text-3xl font-bold mb-6 capitalize">{category.replace('-', ' ')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryData.map((item, index) => (
          <Card key={index} className="shadow-lg border border-gray-200">
            <div className="relative">
              <img
                src={item.IMAGE}
                alt={item.PRODUCT}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <img
                src={item.LOGO}
                alt={`${item.COMPANY} Logo`}
                className="absolute top-4 left-4 w-12 h-12 bg-white p-1 rounded-full shadow-md"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.PRODUCT}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.COMPANY}</p>
              <p className="text-sm text-gray-800 mb-2">
                <strong>Commission:</strong> {item.COMMISSION}
              </p>
              <p className="text-sm text-gray-800 mb-4">
                <strong>Conditions:</strong> {item.CONDITIONS}
              </p>
              <Button asChild className="w-full bg-blue-600 text-white">
                <a href={item.LINK} target="_blank" rel="noopener noreferrer">
                  Apply Now
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FinanceCategoryPage;
