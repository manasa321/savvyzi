import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import { Card, CardContent } from "@/components/ui/card";
import { categories } from '../data/categories';

const CategoryPage = () => {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  const selectedCategory = categories.find(c => c.name.toLowerCase() === category.toLowerCase());

  if (!selectedCategory) {
    return <div>Category not found</div>;
  }

  const renderBrands = (brands) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {brands.map((brand) => (
        <a href={brand.url} key={brand.name} target="_blank" rel="noopener noreferrer">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-3 bg-gray-100 flex items-center justify-center">
                  <img src={brand.logo} alt={brand.name} className="max-w-full max-h-full object-contain" />
                </div>
                <h2 className="text-sm font-semibold text-center">{brand.name}</h2>
                {brand.discount && (
                  <p className="text-xs text-green-600 mt-1">{brand.discount}</p>
                )}
              </div>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );

  const renderSubcategories = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {selectedCategory.subcategories.map((subcat) => (
        <Link to={`/category/${category.toLowerCase()}/${subcat.name.toLowerCase()}`} key={subcat.name}>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-center">{subcat.name}</h2>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center mb-8">
          <BackButton />
          <h1 className="text-3xl font-bold text-secondary-foreground capitalize ml-4">{selectedCategory.name}</h1>
        </div>
        {selectedCategory.subcategories ? (
          subcategory ? (
            <>
              <h2 className="text-2xl font-semibold mb-6 capitalize">{subcategory}</h2>
              {renderBrands(selectedCategory.subcategories.find(sub => sub.name.toLowerCase() === subcategory.toLowerCase()).brands)}
            </>
          ) : (
            renderSubcategories()
          )
        ) : (
          renderBrands(selectedCategory.brands)
        )}
      </div>
    </div>
  );
};

export default CategoryPage;