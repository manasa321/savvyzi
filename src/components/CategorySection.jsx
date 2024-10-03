import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

const CategorySection = () => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
      {categories.map((category) => (
        <Link to={`/category/${category.name.toLowerCase()}`} key={category.name} className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
            <category.icon className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xs text-center">{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default CategorySection;