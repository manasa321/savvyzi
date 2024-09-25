import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Tv, Laptop } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { name: 'Mobile', icon: Smartphone, path: '/category/mobile' },
  { name: 'TV', icon: Tv, path: '/category/tv' },
  { name: 'Laptop', icon: Laptop, path: '/category/laptop' },
];

const CategorySection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link to={category.path} key={category.name}>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 flex flex-col items-center">
              <category.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CategorySection;
