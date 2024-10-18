import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Globe } from 'lucide-react';

const foreignBrands = [
  { name: 'International Fashion', icon: 'shopping-bag', url: '/foreign/fashion' },
  { name: 'Global Electronics', icon: 'smartphone', url: '/foreign/electronics' },
  { name: 'World Cuisine', icon: 'utensils', url: '/foreign/cuisine' },
  { name: 'Exotic Beauty', icon: 'sparkles', url: '/foreign/beauty' },
  { name: 'Foreign Auto', icon: 'car', url: '/foreign/auto' },
  { name: 'International Sports', icon: 'dumbbell', url: '/foreign/sports' },
];

const ExploreForeignBrands = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Globe className="mr-2" /> Explore Foreign Brands
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {foreignBrands.map((brand) => (
          <Link key={brand.name} to={brand.url}>
            <Card className="hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-indigo-100">
              <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center mb-2">
                  <lucide-react icon={brand.icon} className="text-white" />
                </div>
                <h3 className="text-sm font-medium text-center text-indigo-800">{brand.name}</h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ExploreForeignBrands;