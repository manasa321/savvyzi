import React, { useEffect, useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';

const LootDealItems = [
  // Items array here (same as above)
];

const LootDealsSection = () => {
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
    <section className="mb-8 relative p-6">
      <h2 className="text-3xl font-bold mb-6">LOOT DEALS</h2>

      <Carousel className="w-full" ref={emblaRef}>
        <CarouselContent className="space-x-4">
          {LootDealItems.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              {/* Uniform Gradient Card */}
              <Card className="overflow-hidden flex bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out" style={{ height: '350px' }}>
                {/* Left side: Image */}
                <div className="flex-shrink-0 w-1/2 h-full rounded-l-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.brand} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Right side: Condition and reward */}
                <CardContent className="flex flex-col justify-center p-4 w-1/2 bg-white rounded-r-lg">
                  <h5 className="text-lg font-semibold text-blue-700">{item.condition}</h5>
                  <p className="text-sm font-medium text-green-600">Earn {item.earning}</p>
                  <Button 
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                    onClick={() => window.open(item.link, '_blank')}
                  >
                    Shop Now
                  </Button>
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

export default LootDealsSection;
