import React, { useEffect, useCallback } from 'react';
import { Card } from "@/components/ui/card";
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
    <section className="mb-8 relative p-6">
      <h2 className="text-3xl font-bold mb-6">LOOT DEALS</h2>

      <Carousel className="w-full" ref={emblaRef}>
        <CarouselContent className="-ml-4">
          {LootDealItems.map((item) => (
            <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
              {/* Card with Image Background */}
              <Card className="relative overflow-hidden h-64 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out">
                {/* Image as Background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>

                {/* Overlay for Earning */}
                <div className="absolute bottom-0 w-full bg-blue-600 bg-opacity-80 p-2 text-white text-center">
                  <p className="font-semibold">{item.earning}</p>
                </div>
              </Card>

              {/* Shop Now Button Below the Card */}
              <Button
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                onClick={() => window.open(item.link, '_blank')}
              >
                Shop Now
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
