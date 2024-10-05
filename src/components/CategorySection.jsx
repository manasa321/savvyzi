import React, { useState } from 'react';
import { categories } from '../data/categories';

const CategorySection = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  const handleBrandClick = (url) => {
    window.open(url, '_blank');
  };

  const expandableCategories = ['Mobile', 'TV', 'Laptop', 'Headphones'];

  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-4 pb-2">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col items-center">
            <div
              className="flex flex-col items-center flex-shrink-0 w-16 cursor-pointer"
              onClick={() => handleCategoryClick(category.name)}
            >
              <div className="w-12 h-12 mb-1 overflow-hidden rounded-full">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs text-center whitespace-nowrap">{category.name}</span>
            </div>
            {expandableCategories.includes(category.name) && expandedCategory === category.name && (
              <div className="mt-2 grid grid-cols-3 gap-2">
                {category.brands.map((brand) => (
                  <div
                    key={brand.name}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => handleBrandClick(brand.url)}
                  >
                    <div className="w-8 h-8 mb-1 overflow-hidden rounded-full">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs text-center whitespace-nowrap">{brand.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;