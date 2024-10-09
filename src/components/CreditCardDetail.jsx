import React, { useEffect, useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';

const LootDealItems = [
  {
    id: 1,
    brand: "Cadbury",
    earning: "Flat 40% off",
    link: "https://clnk.in/vr8O",
    condition: "",
    image: "https://cdn0.cuelinks.com/merchant/3516/medium/Cadbury.png?1571644680",
  },
  {
    id: 2,
    brand: "Aroma Magic",
    earning: "Flat 25% off",
    link: "https://clnk.in/vrUv",
    condition: "",
    image: "https://cdn0.cuelinks.com/merchant/7175/medium/New_Project_-_2024-08-02T171811.156.png?1722599320",
  },
  {
    id: 3,
    brand: "Compass Guide",
    earning: "₹5",
    link: "https://clnk.in/vrEh",
    condition: "Install & Use Compass twice",
    image: "https://cdn0.cuelinks.com/merchant/7171/medium/Screenshot_2024-08-01_180523.png?1722515747",
  },
  {
    id: 4,
    brand: "Magni View",
    earning: "₹5",
    link: "https://clnk.in/vrOO",
    condition: "Install & Use magnification twice",
    image: "https://cdn0.cuelinks.com/merchant/6808/medium/unnamed_%281%29.jpg?1719313099",
  },
  {
    id: 5,
    brand: "Puzzle Stack",
    earning: "₹5",
    link: "https://clnk.in/vrOR",
    condition: "Install & Play 2 Consecutive Games",
    image: "https://cdn0.cuelinks.com/merchant/6810/medium/unnamed_%284%29.jpg?1719314198",
  },
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
    <section className="container mx-auto mb-8 p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">LOOT DEALS</h2>

      <Carousel className="w-full" ref={emblaRef}>
        <CarouselContent>
          {LootDealItems.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 p-4">
              <Card className="relative w-full h-full mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg overflow-hidden">
                <CardContent className="p-0 relative">
                  <img 
                    src={item.image} 
                    alt={item.brand} 
                    className="w-full h-64 object-cover" 
                  />
                  <div className="absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black via-transparent to-transparent">
                    <h3 className="text-2xl font-semibold mb-1">{item.brand}</h3>
                    <p className="text-lg font-bold text-red-600">{item.earning}</p>
                    {item.condition && (
                      <p className="text-md font-light text-red-500 truncate">{item.condition}</p>
                    )}
                  </div>
                </CardContent>
                <div className="p-4">
                  <Button 
                    className="w-full py-3 text-xl bg-orange-500 hover:bg-orange-600" 
                    onClick={() => window.open(item.link, '_blank')}
                  >
                    Shop Now
                  </Button>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-gray-600" />
        <CarouselNext className="text-gray-600" />
      </Carousel>
    </section>
  );
};

export default LootDealsSection;
