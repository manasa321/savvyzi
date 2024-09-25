import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const deals = [
  { id: 1, image: "https://via.placeholder.com/800x400?text=Deal+1", title: "50% Off on Electronics", url: "https://example.com/deal1" },
  { id: 2, image: "https://via.placeholder.com/800x400?text=Deal+2", title: "Buy 1 Get 1 Free on Clothing", url: "https://example.com/deal2" },
  { id: 3, image: "https://via.placeholder.com/800x400?text=Deal+3", title: "Free Shipping on Orders Over $50", url: "https://example.com/deal3" },
];

const DealOfTheDay = () => {
  const [currentDeal, setCurrentDeal] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDeal((prevDeal) => (prevDeal + 1) % deals.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevDeal = () => {
    setCurrentDeal((prevDeal) => (prevDeal - 1 + deals.length) % deals.length);
  };

  const handleNextDeal = () => {
    setCurrentDeal((prevDeal) => (prevDeal + 1) % deals.length);
  };

  return (
    <Card className="overflow-hidden relative">
      <CardContent className="p-0">
        <div className="relative h-[300px] sm:h-[400px]">
          {deals.map((deal, index) => (
            <a
              key={deal.id}
              href={deal.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                index === currentDeal ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-xl font-semibold">{deal.title}</h3>
              </div>
            </a>
          ))}
        </div>
        <button
          onClick={handlePrevDeal}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNextDeal}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </CardContent>
    </Card>
  );
};

export default DealOfTheDay;
