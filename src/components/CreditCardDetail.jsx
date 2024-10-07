import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const creditCards = [
  {
    id: 1,
    name: "Indusind Tiger Card",
    image: "data:image/jpeg;base64,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",
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
  const { id } = useParams();
  const navigate = useNavigate();
  const card = creditCards.find((card) => card.id === parseInt(id));

  if (!card) return <p>Card not found</p>;

  return (
    <div className="container mx-auto py-6">
      <Button onClick={() => navigate(-1)} className="mb-4">Go Back</Button>
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
