import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Sample credit cards data
const creditCards = [
  {
    id: 1,
    name: "Indusind Tiger Card",
    image: "https://example.com/indusind-tiger-card.jpg",
    applyLink: "https://example.com/apply-indusind-tiger-card"
  },
  {
    id: 2,
    name: "HSBC Platinum Card",
    image: "https://example.com/hsbc-platinum-card.jpg",
    applyLink: "https://example.com/apply-hsbc-platinum-card",
    tag: "JUST ARRIVED"
  },
  {
    id: 3,
    name: "IDFC First Millennia",
    image: "https://example.com/idfc-first-millennia.jpg",
    applyLink: "https://example.com/apply-idfc-first-millennia"
  },
  {
    id: 4,
    name: "ICICI Platinum Card",
    image: "https://example.com/icici-platinum-card.jpg",
    applyLink: "https://example.com/apply-icici-platinum-card"
  },
];

const CreditCardSection = () => {
  const navigate = useNavigate(); // For navigation to new pages

  const handleCardClick = (card) => {
    navigate(`/credit-card-details/${card.id}`); // Navigate to new details page
  };

  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">BEST LIFETIME FREE CREDIT CARDS</h2>
        <Button variant="link" className="text-blue-600">
          VIEW ALL <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      <Carousel className="w-full overflow-x-auto scroll-smooth">
        <CarouselContent className="flex">
          {creditCards.map((card) => (
            <CarouselItem key={card.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <Card className="overflow-hidden cursor-pointer" onClick={() => handleCardClick(card)}>
                <CardContent className="p-0 relative">
                  <img src={card.image} alt={card.name} className="w-full h-72 object-cover" />
                  {card.tag && (
                    <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
                      {card.tag}
                    </span>
                  )}
                </CardContent>
              </Card>
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
