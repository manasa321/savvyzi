import React from 'react';
import { useRouter } from 'next/router'; // For navigation
import { Card, CardContent } from "@/components/ui/card";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

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
  // Add more credit cards as necessary
];

const CreditCardSection = () => {
  const router = useRouter();

  const handleCardClick = (card) => {
    // Redirect to a new page with card details
    router.push(`/credit-card/${card.id}`);
  };

  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">BEST LIFETIME FREE CREDIT CARDS</h2>
      </div>
      <div className="flex overflow-x-auto space-x-4">
        {creditCards.map((card) => (
          <div key={card.id} className="min-w-[250px]">
            <Card 
              className="cursor-pointer" 
              onClick={() => handleCardClick(card)}
            >
              <CardContent className="p-0 relative">
                <img src={card.image} alt={card.name} className="w-full h-48 object-cover" />
                {card.tag && (
                  <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
                    {card.tag}
                  </span>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreditCardSection;
