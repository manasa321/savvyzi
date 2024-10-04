import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

const CategorySection = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {categories.map((category) => (
        <Link to={`/category/${category.name.toLowerCase()}`} key={category.name} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
            <category.icon className="w-8 h-8 text-primary" />
          </div>
          <span className="text-sm font-medium text-center">{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default CategorySection;