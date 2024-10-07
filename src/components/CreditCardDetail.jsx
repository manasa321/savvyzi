import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
    applyLink: "https://example.com/apply-indusind-tiger-card",
    importantInfo: [
      "Please use your Aadhaar linked Mobile number to complete your application",
      "If your Card is Activated as per RBI guidelines, you will be eligible for CashKaro Rewards",
      "Joining Fees: Nil (Lifetime Free)",
      "Annual Fees: Nil (Lifetime Free)"
    ],
    whyAwesome: [
      "Earn up to 10X reward points on dining, groceries, and entertainment",
      "Complimentary airport lounge access",
      "Golf privileges at top courses",
      "Movie ticket discounts and buy-one-get-one offers"
    ]
  },
  // ... Add other credit card details here
];

const CreditCardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const card = creditCards.find((card) => card.id === parseInt(id));

  if (!card) return <p>Card not found</p>;

  return (
    <div className="container mx-auto py-6 px-4">
      <Button onClick={() => navigate(-1)} className="mb-4">Go Back</Button>
      <Card className="w-full mb-6">
        <CardContent className="p-0 relative">
          <img src={card.image} alt={card.name} className="w-full h-64 object-cover" />
          <div className="absolute top-4 left-4 bg-white rounded-full p-2">
            <img src={`https://example.com/${card.name.split(' ')[0].toLowerCase()}-logo.png`} alt={`${card.name.split(' ')[0]} logo`} className="w-12 h-12" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-6">
            <h3 className="text-2xl font-semibold mb-2">{card.name}</h3>
            <p className="text-3xl font-bold">{card.benefits}</p>
            <p className="text-xl">{card.subBenefits}</p>
            <p className="text-lg font-medium text-blue-400 mt-2">{card.rewards}</p>
          </div>
        </CardContent>
      </Card>
      <Button 
        className="w-full py-3 text-xl bg-orange-500 hover:bg-orange-600 mb-8" 
        onClick={() => window.open(card.applyLink, '_blank')}
      >
        APPLY NOW
      </Button>
      <div className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Important Information</h4>
        <ul className="list-disc pl-5 space-y-2">
          {card.importantInfo.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-4">Why is this card so AWESOME?</h4>
        <ul className="list-disc pl-5 space-y-2">
          {card.whyAwesome.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreditCardDetail;