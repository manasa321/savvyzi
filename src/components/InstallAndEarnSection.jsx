import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';

const installAndEarnItems = [
  {
    id: 1,
    brand: "Count Tracker",
    earning: "₹5",
    link: "https://clnk.in/vrOI",
    condition: "Install and make first purchase",
    image: "https://cdn0.cuelinks.com/merchant/6809/medium/unnamed_%283%29.jpg?1719313823",
  },
  {
    id: 2,
    brand: "Flipkart",
    earning: "₹150",
    link: "https://www.flipkart.com/",
    condition: "Install and complete KYC",
    image: "https://example.com/flipkart-app.jpg",
  },
  {
    id: 3,
    brand: "Myntra",
    earning: "₹200",
    link: "https://www.myntra.com/",
    condition: "Install and make first order",
    image: "https://example.com/myntra-app.jpg",
  },
  {
    id: 4,
    brand: "Swiggy",
    earning: "₹50",
    link: "https://www.swiggy.com/",
    condition: "Install and place first order",
    image: "https://example.com/swiggy-app.jpg",
  },
];

const InstallAndEarnSection = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

  return (
    <section className="mb-8 relative">
      <h2 className="text-2xl font-semibold mb-4">INSTALL AND EARN</h2>
      
      <Carousel className="w-full" ref={emblaRef}>
        <CarouselContent>
          {installAndEarnItems.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <Card className="overflow-hidden">
                <CardContent className="p-0 relative">
                  <img src={item.image} alt={item.brand} className="w-full h-48 object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 text-white p-4">
                    <h5 className="text-lg font-semibold text-blue-400">{item.condition}</h5>
                    <p className="text-sm font-medium text-green-400">Earn {item.earning}</p>
                  </div>
                </CardContent>
              </Card>
              <Button 
                className="mt-2 w-full bg-blue-500 hover:bg-blue-600" 
                onClick={() => window.open(item.link, '_blank')}
              >
                INSTALL NOW
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

export default InstallAndEarnSection;
