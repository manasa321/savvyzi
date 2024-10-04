import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

const CategorySection = () => {
  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-4 pb-2">
        {categories.map((category) => (
          <Link
            to={`/category/${category.name.toLowerCase()}`}
            key={category.name}
            className="flex flex-col items-center flex-shrink-0 w-16"
          >
            <div className="w-12 h-12 mb-1 overflow-hidden rounded-full">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-center whitespace-nowrap">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;