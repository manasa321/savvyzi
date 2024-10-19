import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import { CPL } from '../data/CPL';

const creditCards = CPL.filter(item => item.CATEGORY === "Credit Card");

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
        <h2 className="text-2xl font-semibold">BEST CREDIT CARD OFFERS</h2>
        <Link to="/credit-cards" className="text-blue-600 hover:underline">VIEW ALL &gt;</Link>
      </div>
      
      <Carousel className="w-full" ref={emblaRef}>
        <CarouselContent>
          {creditCards.map((card, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <Card className="overflow-hidden h-full flex flex-col">
                <CardContent className="p-4 flex-grow">
                  <div className="mb-4">
                    <img src={card.LOGO || `https://via.placeholder.com/150?text=${card.COMPANY}`} alt={card.COMPANY} className="w-16 h-16 object-contain mb-2" />
                    <h3 className="text-lg font-semibold">{card.COMPANY}</h3>
                    <p className="text-sm text-gray-600">{card.PRODUCT}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-green-600 font-medium">Commission: {card.COMMISSION}</p>
                    {card.CONDITIONS && <p className="text-xs text-gray-500 mt-1">{card.CONDITIONS}</p>}
                  </div>
                </CardContent>
                <div className="p-4 bg-gray-50">
                  <Button 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white" 
                    onClick={() => window.open(card.LINK, '_blank')}
                  >
                    APPLY NOW
                  </Button>
                </div>
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