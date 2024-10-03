import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const deals = [
  { id: 1, image: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/241b9b715c91303a.jpg?q=20", title: "50% Off on Electronics", url: "https://example.com/deal1" },
  { id: 2, image: "https://via.placeholder.com/800x400?text=Deal+2", title: "Buy 1 Get 1 Free on Clothing", url: "https://example.com/deal2" },
  { id: 3, image: "https://via.placeholder.com/800x400?text=Deal+3", title: "Free Shipping on Orders Over $50", url: "https://example.com/deal3" },
  { id: 4, image: "https://via.placeholder.com/800x400?text=Deal+4", title: "20% Off on Home Decor", url: "https://example.com/deal4" },
  { id: 5, image: "https://via.placeholder.com/800x400?text=Deal+5", title: "Flash Sale: Up to 70% Off", url: "https://example.com/deal5" },
];

const DealOfTheDay = () => {
  const [currentDeal, setCurrentDeal] = useState(0);
  const scrollRef = useRef(null);

  // Auto-scroll through deals every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDeal((prevDeal) => (prevDeal + 1) % deals.length);
      scrollToDeal((currentDeal + 1) % deals.length);
    }, 10000); // 10 seconds interval

    return () => clearInterval(timer); // Clean up interval on unmount
  }, [currentDeal]);

  // Scroll to the selected deal
  const scrollToDeal = (index) => {
    const dealWidth = scrollRef.current.scrollWidth / deals.length;
    scrollRef.current.scrollTo({
      left: dealWidth * index,
      behavior: 'smooth',
    });
  };

  // Manually scroll to previous deal
  const handlePrevDeal = () => {
    const prevDeal = (currentDeal - 1 + deals.length) % deals.length;
    setCurrentDeal(prevDeal);
    scrollToDeal(prevDeal);
  };

  // Manually scroll to next deal
  const handleNextDeal = () => {
    const nextDeal = (currentDeal + 1) % deals.length;
    setCurrentDeal(nextDeal);
    scrollToDeal(nextDeal);
  };

  // Open deal URL in a new tab
  const handleDealClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Card className="overflow-hidden relative">
      <CardContent className="p-0">
        <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {deals.map((deal, index) => (
            <div
              key={deal.id}
              className={`w-full flex-shrink-0 snap-center cursor-pointer transition-opacity duration-500 ${index === currentDeal ? 'opacity-100' : 'opacity-50'}`}
              onClick={() => handleDealClick(deal.url)}
            >
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-[300px] sm:h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-red-500 bg-opacity-75 text-white p-4">
                <h3 className="text-xl font-semibold">{deal.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrevDeal}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-red-500 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={handleNextDeal}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-red-500 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </CardContent>
    </Card>
  );
};

export default DealOfTheDay;
