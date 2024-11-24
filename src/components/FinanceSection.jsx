import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from '@tanstack/react-query';

const categories = [
  { name: "Credit Card", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51CTFijnx_cKrtSeabPPiIzSbVlWXt2cUdQ&s" },
  { name: "Insurance", image: "https://example.com/insurance-icon.png" },
  { name: "Loan", image: "https://example.com/loan-icon.png" },
  { name: "Telecom", image: "https://example.com/telecom-icon.png" },
  { name: "Finance", image: "https://example.com/finance-icon.png" },
  { name: "Others", image: "https://example.com/others-icon.png" },
];

const fetchFinanceData = async () => {
  console.log('Fetching finance data from API...');
  const response = await fetch('http://localhost:8000/api/finance/');
  if (!response.ok) {
    throw new Error('Failed to fetch finance data');
  }
  const data = await response.json();
  console.log('Finance data received:', data);
  return data;
};

const FinanceSection = () => {
  const { data: financeData, isLoading, error } = useQuery({
    queryKey: ['financeData'],
    queryFn: fetchFinanceData,
  });

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading finance data...</div>;
  }

  if (error) {
    console.error('Error fetching finance data:', error);
    return <div className="container mx-auto px-4 py-8">Error loading finance data</div>;
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Finance</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
        {categories.map((category) => (
          <Link 
            to={`/finance/${category.name.toLowerCase().replace(' ', '-')}`} 
            key={category.name}
            className="block"
          >
            <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-3 md:p-4">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden mb-2">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xs md:text-sm font-semibold text-center">{category.name}</h3>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FinanceSection;