import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const giftCards = [
  { id: 1, name: "Swiggy", logo: "https://via.placeholder.com/100?text=Swiggy", category: "Food & Drinks", discount: "4% Off" },
  { id: 2, name: "Ajio", logo: "https://via.placeholder.com/100?text=Ajio", category: "Shopping", discount: "7% Off" },
  { id: 3, name: "Nykaa", logo: "https://via.placeholder.com/100?text=Nykaa", category: "Shopping", discount: "8% Off" },
  { id: 4, name: "Myntra", logo: "https://via.placeholder.com/100?text=Myntra", category: "Shopping", discount: "7% Off" },
  { id: 5, name: "Cult.fit", logo: "https://via.placeholder.com/100?text=Cult.fit", category: "Lifestyle", discount: "9% Off" },
  { id: 6, name: "Tata CliQ", logo: "https://via.placeholder.com/100?text=Tata+CliQ", category: "Shopping", discount: "7% Off" },
  { id: 7, name: "Healthkart", logo: "https://via.placeholder.com/100?text=Healthkart", category: "Shopping", discount: "13% Off" },
];

const GiftCards = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Popular gift cards</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {giftCards.map((card) => (
          <Card key={card.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex flex-col items-center">
                <img src={card.logo} alt={card.name} className="w-16 h-16 object-contain mb-2" />
                <h3 className="text-sm font-semibold text-center">{card.name}</h3>
                <p className="text-xs text-gray-500">{card.category}</p>
                <p className="text-sm font-medium text-green-600 mt-1">{card.discount}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default GiftCards;