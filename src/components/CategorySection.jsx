import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

const CategorySection = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Link to={`/category/${category.name.toLowerCase()}`} key={category.name} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="w-24 h-24 mb-2 overflow-hidden rounded-full">
            <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-medium text-center">{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default CategorySection;