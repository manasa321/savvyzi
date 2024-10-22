import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { financeData } from '../data/financeData';

const FinanceCategoryPage = () => {
  const { category } = useParams();
  const categoryData = financeData.filter(item => item.CATEGORY.toLowerCase() === category.replace('-', ' '));

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="mb-4 inline-block">
        <Button variant="outline" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>
      </Link>
      <h2 className="text-3xl font-bold mb-6 capitalize">{category.replace('-', ' ')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categoryData.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.PRODUCT}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.COMPANY}</p>
              <p><strong>Commission:</strong> {item.COMMISSION}</p>
              <p><strong>Conditions:</strong> {item.CONDITIONS}</p>
              <Button asChild className="mt-4">
                <a href={item.LINK} target="_blank" rel="noopener noreferrer">Apply Now</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FinanceCategoryPage;