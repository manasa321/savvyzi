import React from 'react';
import { useRouter } from 'next/router';
import { Card, CardContent } from "@/components/ui/card";
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
  // Add other credit card details
];

const CreditCardDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const card = creditCards.find((card) => card.id === parseInt(id));

  if (!card) return <p>Card not found</p>;

  return (
    <div className="container mx-auto py-6">
      <Button onClick={() => router.back()} className="mb-4">Go Back</Button>
      <Card className="w-full">
        <CardContent className="p-4">
          <img src={card.image} alt={card.name} className="w-full h-48 object-cover mb-4" />
          <h3 className="text-xl font-bold">{card.name}</h3>
          <p className="text-lg">{card.benefits}</p>
          <p className="text-sm text-gray-600">{card.subBenefits}</p>
          <p className="text-sm font-medium text-blue-600">{card.rewards}</p>
          <Button 
            className="mt-4 w-full" 
            onClick={() => window.open(card.applyLink, '_blank')}
          >
            APPLY NOW
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreditCardDetail;
