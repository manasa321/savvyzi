import React from 'react';
import { 
  Smartphone, 
  Tv, 
  Laptop, 
  Headphones, 
  Coins, 
  TrendingUp, 
  Percent, 
  CreditCard 
} from 'lucide-react';

const categories = [
  { name: 'Mobile', icon: Smartphone },
  { name: 'TV', icon: Tv },
  { name: 'Laptop', icon: Laptop },
  { name: 'Headphones', icon: Headphones },
  { name: 'Gold Schemes', icon: Coins },
  { name: 'Mutual Funds', icon: TrendingUp },
  { name: 'FD Rates', icon: Percent },
  { name: 'Finance Plans', icon: CreditCard },
];

const CategorySection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      {categories.map((category) => (
        <div key={category.name} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <category.icon className="w-12 h-12 text-indigo-600 mb-2" />
          <span className="text-sm font-medium text-gray-700">{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;