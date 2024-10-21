import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getFinanceCategories, getFinanceProductsByCategory } from '../data/CPL';

const FinanceSection = () => {
  const categories = getFinanceCategories();
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="mb-8 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Finance Products</h2>
        <Link to="/finance" className="text-blue-600 hover:underline">VIEW ALL &gt;</Link>
      </div>
      
      <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory}>
        <TabsList className="mb-4">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {getFinanceProductsByCategory(category).map((product) => (
                <Card key={`${product.COMPANY}-${product.PRODUCT}`} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      {product.LOGO && (
                        <img src={product.LOGO} alt={`${product.COMPANY} logo`} className="w-12 h-12 object-contain mr-2" />
                      )}
                      <div>
                        <h3 className="text-lg font-semibold">{product.COMPANY}</h3>
                        <p className="text-sm text-gray-600">{product.PRODUCT}</p>
                      </div>
                    </div>
                    <p className="text-green-600 font-medium mb-2">Commission: {product.COMMISSION}</p>
                    {product.CONDITIONS && (
                      <p className="text-sm text-gray-700 mb-2">Conditions: {product.CONDITIONS}</p>
                    )}
                    <Button 
                      className="w-full bg-orange-500 hover:bg-orange-600" 
                      onClick={() => window.open(product.LINK, '_blank')}
                    >
                      APPLY NOW
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default FinanceSection;