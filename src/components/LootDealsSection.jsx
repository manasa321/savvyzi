import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LootDealItems = [
  {
    
  },
  // Add other items if needed
];

const LootDealsSection = () => {
  return (
    <section className="mb-8 p-6">
      <h2 className="text-3xl font-bold mb-6">LOOT DEALS</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {LootDealItems.map((item) => (
          <Card key={item.id} className="overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 ease-in-out">
            {/* Top Image */}
            <div 
              className="h-32 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }} 
            />

            {/* Offer Details */}
            <div className="p-4 bg-white">
              <div className="flex items-center justify-between">
                <h5 className="text-xl font-bold text-red-600">{item.discount}</h5>
                <span className="text-sm font-semibold text-green-600">{item.offerDetail}</span>
              </div>
              <p className="mt-2 text-sm font-medium text-blue-700">{item.reward}</p>

              {/* CTA Button */}
              <Button 
                className="mt-4 w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full"
                onClick={() => window.open(item.link, '_blank')}
              >
                Grab Deal
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LootDealsSection;
