import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LootDealItems = [
  {
    id: 1,
    brand: "Cadbury",
    earning: "Flat 40% off",
    link: "https://clnk.in/vr8O",
    condition: "",
    image: "https://cdn0.cuelinks.com/merchant/3516/medium/Cadbury.png?1571644680",
  },
  {
    id: 2,
    brand: "Aroma Magic",
    earning: "Flat 25% off",
    link: "https://clnk.in/vrUv",
    condition: "",
    image: "https://cdn0.cuelinks.com/merchant/7175/medium/New_Project_-_2024-08-02T171811.156.png?1722599320",
  },
  {
    id: 3,
    brand: "Compass Guide",
    earning: "₹5",
    link: "https://clnk.in/vrEh",
    condition: "Install & Use Compass twice",
    image: "https://cdn0.cuelinks.com/merchant/7171/medium/Screenshot_2024-08-01_180523.png?1722515747",
  },
  {
    id: 4,
    brand: "Magni View",
    earning: "₹5",
    link: "https://clnk.in/vrOO",
    condition: "Install & Use magnification twice",
    image: "https://cdn0.cuelinks.com/merchant/6808/medium/unnamed_%281%29.jpg?1719313099",
  },
  {
    id: 5,
    brand: "Puzzle Stack",
    earning: "₹5",
    link: "https://clnk.in/vrOR",
    condition: "Install & Play 2 Consecutive Games",
    image: "https://cdn0.cuelinks.com/merchant/6810/medium/unnamed_%284%29.jpg?1719314198",
  },
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
              className="h-40 bg-cover bg-center relative" 
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* Blue overlay with earning */}
              <div className="absolute bottom-0 left-0 w-full bg-blue-600 bg-opacity-75 text-white p-2">
                <p className="text-sm font-semibold">{item.earning}</p>
              </div>
            </div>

            {/* Brand and Condition */}
{/*             <div className="p-4 bg-white text-center">
              <h5 className="text-lg font-bold text-blue-700">{item.brand}</h5>
              {item.condition && (
                <p className="text-sm text-gray-600 mt-2">{item.condition}</p>
              )}
            </div> */}

            {/* CTA Button */}
            <div className="p-4 text-center">
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                onClick={() => window.open(item.link, '_blank')}
              >
                Shop Now
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LootDealsSection;
