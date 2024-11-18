import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

const CategorySection = () => {
  return (
    <div className="mb-8 px-4 sm:px-0">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Categories</h2>
      <div className="flex overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex space-x-4 sm:space-x-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/category/${category.name.toLowerCase()}`}
              className="flex flex-col items-center flex-shrink-0 w-20 sm:w-24"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 overflow-hidden rounded-full">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs sm:text-sm text-center">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;