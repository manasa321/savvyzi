import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
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
    <section className="mb-8 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">LOOT DEALS</h2>
        <Link to="/loot-deals" className="text-blue-600 hover:underline">VIEW ALL &gt;</Link>
      </div>
      
      <Carousel className="w-full" ref={emblaRef}>
        <CarouselContent>
          {LootDealItems.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <Card className="overflow-hidden">
                <CardContent className="p-0 relative">
                  <Link to={`/loot-deal/${item.id}`}>
                    <img src={item.image} alt={item.brand} className="w-full h-48 object-cover" />
                    <div className="absolute top-2 left-2 bg-white rounded-full p-1">
                      <img src={item.image} alt={`${item.brand} logo`} className="w-8 h-8 object-contain" />
                    </div>
                    {item.condition && (
                      <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
                        {item.condition}
                      </span>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-blue-500 bg-opacity-70 text-white p-4">
                      <h3 className="text-lg font-semibold">{item.brand}</h3>
                      <p className="text-sm font-medium text-blue-400">{item.earning}</p>
                    </div>
                  </Link>
                </CardContent>
              </Card>
              <Button 
                className="mt-2 w-full bg-blue-500 hover:bg-blue-600" 
                onClick={() => window.open(item.link, '_blank')}
              >
                SHOP NOW
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

export default LootDealsSection;
