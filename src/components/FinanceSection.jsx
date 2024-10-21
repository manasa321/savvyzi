import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { financeData } from '../data/financeData';

// Add image URLs for each category
const categories = [
  { name: "Credit Card", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51CTFijnx_cKrtSeabPPiIzSbVlWXt2cUdQ&s" }, // Update with your image path
  { name: "Insurance", image: "/images/insurance.png" },      // Update with your image path
  { name: "Loan", image: "/images/loan.png" },                // Update with your image path
  { name: "Telecom", image: "/images/telecom.png" },          // Update with your image path
  { name: "Finance", image: "/images/finance.png" },          // Update with your image path
  { name: "Others", image: "/images/others.png" },            // Update with your image path
];

const FinanceSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderCategoryGrid = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {categories.map((category) => (
        <Card key={category.name} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleCategoryClick(category)}>
          <CardContent className="flex flex-col items-center justify-center p-6">
            {/* Render the category image instead of the icon */}
            <img src={category.image} alt={category.name} className="w-12 h-12 mb-2" />
            <h3 className="text-lg font-semibold">{category.name}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderCategoryDetails = () => {
    const categoryData = financeData.filter(item => item.CATEGORY === selectedCategory.name);
    const companies = [...new Set(categoryData.map(item => item.COMPANY))];

    return (
      <div>
        <Button onClick={() => setSelectedCategory(null)} className="mb-4">
          ← Back
        </Button>
        <h2 className="text-2xl font-bold mb-4">{selectedCategory.name}</h2>
        {companies.map(company => (
          <div key={company} className="mb-6">
            <h3 className="text-xl font-semibold mb-3">{company}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryData
                .filter(item => item.COMPANY === company)
                .map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h4 className="text-lg font-semibold">{item.PRODUCT}</h4>
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
        ))}
      </div>
    );
  };

  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-6">Finance</h2>
      {selectedCategory ? renderCategoryDetails() : renderCategoryGrid()}
    </section>
  );
};

export default FinanceSection;
