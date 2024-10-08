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
    <section className="mb-8 relative bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold text-white mb-6">INSTALL AND EARN</h2>

      <Carousel className="w-full" ref={emblaRef}>
        <CarouselContent className="space-x-4">
          {installAndEarnItems.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden flex bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                {/* Left side: Image */}
                <div className="flex-shrink-0 w-1/3 rounded-l-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.brand} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Right side: Condition and reward */}
                <CardContent className="flex flex-col justify-center p-4 w-2/3 bg-gradient-to-r from-blue-50 to-blue-100">
                  <h5 className="text-lg font-semibold text-blue-700">{item.condition}</h5>
                  <p className="text-sm font-medium text-green-600">Earn {item.earning}</p>
                  <Button 
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                    onClick={() => window.open(item.link, '_blank')}
                  >
                    INSTALL NOW
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

export default InstallAndEarnSection;
