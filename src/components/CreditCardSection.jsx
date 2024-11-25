import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';

const creditCards = [
  {
    id: 1,
    name: "Indusind Tiger Card",
    image: "https://www.equitybulls.com/equitybullsadmin/uploads/IndusInd%20Bank%20and%20Tiger%20Fintech%20to%20launch%20a%20co-branded%20credit%20card.jpg",
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(scrollNext, 5000); // Auto-scroll every 5 seconds
      return () => clearInterval(interval);
    }
  }, [emblaApi, scrollNext]);

  return (
    <section className="mb-8 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">BEST LIFETIME FREE CREDIT CARDS</h2>
        <Link to="/credit-cards" className="text-blue-600 hover:underline">VIEW ALL &gt;</Link>
      </div>
      
      <Carousel className="w-full" ref={emblaRef}>
        <CarouselContent>
          {creditCards.map((card) => (
            <CarouselItem key={card.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <Card className="overflow-hidden">
                <CardContent className="p-0 relative">
                  <Link to={`/credit-card/${card.id}`}>
                    <img src={card.image} alt={card.name} className="w-full h-48 object-cover" />
                    <div className="absolute top-2 left-2 bg-white rounded-full p-1">
                      <img src={`https://example.com/${card.name.split(' ')[0].toLowerCase()}-logo.png`} alt={`${card.name.split(' ')[0]} logo`} className="w-8 h-8" />
                    </div>
                    {card.tag && (
                      <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
                        {card.tag}
                      </span>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                      <h3 className="text-lg font-semibold">{card.name}</h3>
                      <p className="text-sm font-medium text-blue-400">{card.rewards}</p>
                    </div>
                  </Link>
                </CardContent>
              </Card>
              <Button 
                className="mt-2 w-full bg-orange-500 hover:bg-orange-600" 
                onClick={() => window.open(card.applyLink, '_blank')}
              >
                APPLY NOW
              </Button>
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