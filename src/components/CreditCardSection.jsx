import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronRight } from 'lucide-react';

const creditCards = [
  {
    id: 1,
    name: "Indusind Tiger Card",
    image: "https://example.com/indusind-tiger-card.jpg",
    benefits: "Upto ₹38,000 benefits",
    subBenefits: "on Lounge, Movies & Golf",
    rewards: "+ Flat ₹500 Rewards",
    applyLink: "https://example.com/apply-indusind-tiger-card"
  },
  {
    id: 2,
    name: "HSBC Platinum Card",
    image: "https://example.com/hsbc-platinum-card.jpg",
    benefits: "Upto 5X Rewards",
    subBenefits: "& Exclusive Privileges",
    rewards: "+ Flat ₹2200 Rewards",
    applyLink: "https://example.com/apply-hsbc-platinum-card",
    tag: "JUST ARRIVED"
  },
  {
    id: 3,
    name: "IDFC First Millennia",
    image: "https://example.com/idfc-first-millennia.jpg",
    benefits: "Upto 10X Rewards",
    subBenefits: "on online and offline purchases",
    rewards: "+ Upto ₹750 Rewards",
    applyLink: "https://example.com/apply-idfc-first-millennia"
  },
  {
    id: 4,
    name: "ICICI Platinum Card",
    image: "https://example.com/icici-platinum-card.jpg",
    benefits: "Earn 2X Rewards",
    subBenefits: "each time you shop",
    rewards: "+ Upto ₹2000 Rewards",
    applyLink: "https://example.com/apply-icici-platinum-card"
  },
];

const CreditCardSection = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card === selectedCard ? null : card);
  };

  const handleApplyNow = (applyLink, e) => {
    e.stopPropagation();
    window.open(applyLink, '_blank');
  };

  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">BEST LIFETIME FREE CREDIT CARDS</h2>
        <Button variant="link" className="text-blue-600">
          VIEW ALL <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
      <Carousel className="w-full">
        <CarouselContent>
          {creditCards.map((card) => (
            <CarouselItem key={card.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <Card 
                className="overflow-hidden cursor-pointer" 
                onClick={() => handleCardClick(card)}
              >
                <CardContent className="p-0 relative">
                  <img src={card.image} alt={card.name} className="w-full h-48 object-cover" />
                  {card.tag && (
                    <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
                      {card.tag}
                    </span>
                  )}
                  <div className="p-4">
                    <h3 className="font-bold mb-1">{card.name}</h3>
                    <p className="text-lg font-semibold mb-1">{card.benefits}</p>
                    <p className="text-sm text-gray-600 mb-2">{card.subBenefits}</p>
                    <p className="text-sm font-medium text-blue-600">{card.rewards}</p>
                    <Button 
                      className="mt-2 w-full" 
                      onClick={(e) => handleApplyNow(card.applyLink, e)}
                    >
                      APPLY NOW
                    </Button>
                  </div>
                </CardContent>
              </Card>
              {selectedCard === card && (
                <Card className="mt-4">
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">Card Details:</h4>
                    <p className="mb-2">{card.name} offers {card.benefits.toLowerCase()} {card.subBenefits.toLowerCase()}.</p>
                    <p>Additional perks include {card.rewards.toLowerCase()}.</p>
                    <Button 
                      className="mt-4 w-full" 
                      onClick={(e) => handleApplyNow(card.applyLink, e)}
                    >
                      APPLY NOW
                    </Button>
                  </CardContent>
                </Card>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default CreditCardSection;