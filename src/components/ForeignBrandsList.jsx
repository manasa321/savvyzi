import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import { GlobalBrands } from '../data/GlobalCPC';

const ForeignBrandsList = () => {
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category).replace(/-/g, ' ');
  
  const brands = GlobalBrands.filter(brand => brand.CATEGORY.toLowerCase() === decodedCategory.toLowerCase());

  return (
    <div className="container mx-auto py-8">
      <Link to="/" className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
        <ArrowLeft className="mr-2" /> Back to Categories
      </Link>
      <h1 className="text-3xl font-bold mb-6">{decodedCategory} Brands</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {brands.map((brand) => (
          <a href={brand['WEBSITE LINK']} key={brand.COMPANY} target="_blank" rel="noopener noreferrer">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                <h3 className="text-lg font-medium text-center">{brand.COMPANY}</h3>
                <p className="text-sm text-center text-gray-600 mt-2">{brand.COUNTRY}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ForeignBrandsList;