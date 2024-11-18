import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Globe } from 'lucide-react';
import { GlobalBrands } from '../data/GlobalCPC';

// Group brands by category
const groupedBrands = GlobalBrands.reduce((acc, brand) => {
  if (!acc[brand.CATEGORY]) {
    acc[brand.CATEGORY] = [];
  }
  acc[brand.CATEGORY].push(brand);
  return acc;
}, {});

// Get unique categories
const categories = Object.keys(groupedBrands);

const ExploreForeignBrands = () => {
  return (
    <section className="mb-8 px-4 sm:px-0">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
        <Globe className="mr-2" /> Explore Foreign Brands
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {categories.map((category) => (
          <Link key={category} to={`/foreign/${category.toLowerCase().replace(/\s+/g, '-')}`}>
            <Card className="hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-indigo-100">
              <CardContent className="p-3 sm:p-4 flex flex-col items-center justify-center h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-500 flex items-center justify-center mb-2">
                  <Globe className="text-white h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-center text-indigo-800">{category}</h3>
                <p className="text-xs text-center text-indigo-600 mt-1">
                  {groupedBrands[category].length} brands
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ExploreForeignBrands;