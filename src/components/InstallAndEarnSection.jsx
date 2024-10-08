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
    condition: "Install & Use the tracker feature twice",
    image: "https://cdn0.cuelinks.com/merchant/6809/medium/unnamed_%283%29.jpg?1719313823",
  },
  {
    id: 2,
    brand: "Drum Jam",
    earning: "₹5",
    link: "https://clnk.in/vrOK",
    condition: "Install & Create 2 unique rhythms & beats",
    image: "https://cdn0.cuelinks.com/merchant/6804/medium/unnamed.jpg?1719312675",
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
    condition: "Install & Use magnification feature twice",
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

const InstallAndEarnSection = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

  return (
    <section className="mb-8 relative p-6">
      <h2 className="text-3xl font-bold mb-6">INSTALL AND EARN</h2>

      <Carousel className="w-full" ref={emblaRef}>
        <CarouselContent className="space-x-4">
          {installAndEarnItems.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              {/* Gradient Card */}
              <Card className="overflow-hidden flex bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                {/* Left side: Image */}
                <div className="flex-shrink-0 w-1/3 rounded-l-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.brand} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Right side: Condition and reward */}
                <CardContent className="flex flex-col justify-center p-4 w-2/3 bg-white rounded-r-lg">
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
