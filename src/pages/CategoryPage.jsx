import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Card, CardContent } from "@/components/ui/card";

const CategoryPage = () => {
  const { category } = useParams();

  // This is a mock function. In a real application, you'd fetch this data from an API or database.
  const getBrands = (category) => {
    const brandsByCategory = {
      mobile: [
        { name: 'Apple', logo: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png' },
        { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png' },
        { name: 'OnePlus', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKxyMJDTRJRMAOTYgrKR5fslKamX4AUHfbtQ&s' },
      ],
      tv: [
        { name: 'LG', logo: 'https://images.squarespace-cdn.com/content/v1/502a8efb84ae42cbccf920c4/1585574686746-VCDIHSO21O76WR72WIAD/LG-Logo.png' },
        { name: 'Sony', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_71af1QHWToXD7zD-eRrXfbzq8HuUnQzUWQ&s' },
        { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png' },
      ],
      laptop: [
        { name: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/1200px-Dell_Logo.png' },
        { name: 'HP', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png' },
        { name: 'Lenovo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/2560px-Lenovo_logo_2015.svg.png' },
      ],
    };
    return brandsByCategory[category] || [];
  };

  const brands = getBrands(category);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-secondary-foreground capitalize">{category} Brands</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <Card key={brand.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex flex-col items-center">
                  <img src={brand.logo} alt={brand.name} className="w-32 h-32 object-contain mb-4" />
                  <h2 className="text-xl font-semibold">{brand.name}</h2>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;