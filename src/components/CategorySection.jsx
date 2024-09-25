import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Tv, Laptop, Shirt, ShoppingBag, Watch, Gift, Home } from 'lucide-react';

const categories = [
  { name: 'Mobile', icon: Smartphone, path: '/category/mobile' },
  { name: 'TV', icon: Tv, path: '/category/tv' },
  { name: 'Laptop', icon: Laptop, path: '/category/laptop' },
  { name: 'Fashion', icon: Shirt, path: '/category/fashion' },
  { name: 'Accessories', icon: ShoppingBag, path: '/category/accessories' },
  { name: 'Watches', icon: Watch, path: '/category/watches' },
  { name: 'Gifts', icon: Gift, path: '/category/gifts' },
  { name: 'Home', icon: Home, path: '/category/home' },
];

const CategorySection = () => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
      {categories.map((category) => (
        <Link to={category.path} key={category.name} className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-2">
            <category.icon className="w-8 h-8 text-primary" />
          </div>
          <span className="text-xs text-center">{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default CategorySection;
