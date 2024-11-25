import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/finance/${categoryName.toLowerCase().replace(' ', '-')}`);
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Finance</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
            className="cursor-pointer"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default FinanceSection;