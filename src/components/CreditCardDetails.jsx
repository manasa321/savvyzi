import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BackButton from './BackButton';

// Example credit card data
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
  // Add other credit cards here
];

const CreditCardDetails = () => {
  const { id } = useParams();  // Get the card id from the URL
  const navigate = useNavigate(); // Navigate back to the homepage
  const card = creditCards.find((card) => card.id === parseInt(id)); // Find the selected card by id

  if (!card) {
    return <div>Card not found</div>;
  }

  const handleApplyNow = () => {
    window.open(card.applyLink, '_blank'); // Open the apply link in a new tab
  };

  return (
    <div className="p-4">
      <BackButton onClick={() => navigate('/')} /> {/* Back button to return */}
      <Card className="mt-4">
        <CardContent className="p-4">
          <img src={card.image} alt={card.name} className="w-full h-96 object-cover mb-4" />
          <h2 className="text-3xl font-bold mb-2">{card.name}</h2>
          <p className="text-lg mb-2">{card.benefits}</p>
          <p className="text-md mb-2">{card.subBenefits}</p>
          <p className="text-md mb-4">{card.rewards}</p>
          <Button className="w-full" onClick={handleApplyNow}>Apply Now</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreditCardDetails;
