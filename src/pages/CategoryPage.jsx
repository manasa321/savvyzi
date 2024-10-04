import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import { Card, CardContent } from "@/components/ui/card";
import { categories } from '../data/categories';

const CategoryPage = () => {
  const { category } = useParams();
  const selectedCategory = categories.find(c => c.name.toLowerCase() === category.toLowerCase());

  if (!selectedCategory) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <BackButton />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-secondary-foreground capitalize">{selectedCategory.name} Brands</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {selectedCategory.brands.map((brand) => (
            <Link to={brand.url} key={brand.name}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center mb-2">
                      <img src={brand.logo} alt={brand.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <h2 className="text-sm font-semibold text-center">{brand.name}</h2>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;