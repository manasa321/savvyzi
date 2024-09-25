import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const deals = [
  { id: 1, image: "https://via.placeholder.com/800x400?text=Deal+1", title: "Amazing Deal 1" },
  { id: 2, image: "https://via.placeholder.com/800x400?text=Deal+2", title: "Fantastic Offer 2" },
  { id: 3, image: "https://via.placeholder.com/800x400?text=Deal+3", title: "Incredible Discount 3" },
];

const DealOfTheDay = () => {
  const [currentDeal, setCurrentDeal] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDeal((prevDeal) => (prevDeal + 1) % deals.length);
    }, 5000); // Change deal every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-[400px]">
          {deals.map((deal, index) => (
            <img
              key={deal.id}
              src={deal.image}
              alt={deal.title}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                index === currentDeal ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h3 className="text-xl font-semibold">{deals[currentDeal].title}</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DealOfTheDay;