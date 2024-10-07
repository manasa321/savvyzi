import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

const CategorySection = () => {
  return (
    <div className="overflow-x-auto mb-8">
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <div className="flex space-x-6 pb-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/category/${category.name.toLowerCase()}`}
            className="flex flex-col items-center flex-shrink-0 w-24 cursor-pointer"
          >
            <div className="w-20 h-20 mb-2 overflow-hidden rounded-full">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm text-center whitespace-nowrap">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;