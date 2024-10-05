import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

const CategorySection = () => {
  const handleCategoryClick = (category, url) => {
    if (category.toLowerCase() === 'mobile' && url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-4 pb-2">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center flex-shrink-0 w-16 cursor-pointer"
            onClick={() => handleCategoryClick(category.name, category.brands[0]?.url)}
          >
            {category.name.toLowerCase() === 'mobile' ? (
              <div className="w-12 h-12 mb-1 overflow-hidden rounded-full">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <Link
                to={`/category/${category.name.toLowerCase()}`}
                className="w-12 h-12 mb-1 overflow-hidden rounded-full"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </Link>
            )}
            <span className="text-xs text-center whitespace-nowrap">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;