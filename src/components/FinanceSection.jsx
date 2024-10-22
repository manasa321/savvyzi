import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { name: "Credit Card", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51CTFijnx_cKrtSeabPPiIzSbVlWXt2cUdQ&s" },
  { name: "Insurance", image: "https://example.com/insurance-icon.png" },
  { name: "Loan", image: "https://example.com/loan-icon.png" },
  { name: "Telecom", image: "https://example.com/telecom-icon.png" },
  { name: "Finance", image: "https://example.com/finance-icon.png" },
  { name: "Others", image: "https://example.com/others-icon.png" },
];

const FinanceSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-6">Finance</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link to={`/finance/${category.name.toLowerCase().replace(' ', '-')}`} key={category.name}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                    <img src={category.image} alt={category.name} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-sm font-semibold text-center">{category.name}</h3>
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