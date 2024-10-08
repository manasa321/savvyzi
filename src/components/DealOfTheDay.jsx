import React, { useEffect, useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"; // Ensure you are importing Carousel correctly
import useEmblaCarousel from 'embla-carousel-react';

const deals = [
  {
    id: 1,
    image: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/241b9b715c91303a.jpg?q=20",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    title: "Up to 80% Off",
    subtitle: "10% Instant Discount with SBI Card",
    saleStatus: "SALE LIVE NOW",
    bgColor: "bg-gradient-to-r from-pink-500 to-orange-500",
    url: "https://www.amazon.in/"
  },
  {
    id: 2,
    image: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b21b5be304d115cd.jpg?q=20",
    logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png",
    title: "50-90% Off",
    subtitle: "Across Categories",
    saleStatus: "SALE ENDS TONIGHT",
    bgColor: "bg-gradient-to-r from-purple-500 to-indigo-500",
    url: "https://www.flipkart.com/"
  },
  {
    id: 3,
    image: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Myntra_logo.png",
    title: "50 - 90% Off",
    subtitle: "Across Categories",
    saleStatus: "1.5% EXTRA BONUS CASHBACK",
    bgColor: "bg-gradient-to-r from-red-500 to-yellow-500",
    url: "https://www.myntra.com/"
  },
  // Add more sample deals here
];

const DealOfTheDay = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });

  // Function to manually scroll to the next deal
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Function to manually scroll to the previous deal
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  // Setup for auto-scroll every 3 seconds
  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(scrollNext, 3000); // Auto-scroll every 3 seconds
      return () => clearInterval(interval);
    }
  }, [emblaApi, scrollNext]);

  const handleDealClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="mb-8 relative">
      <h2 className="text-2xl font-semibold mb-4">Deals</h2>

      {/* Carousel Wrapper */}
      <Carousel> {/* Ensure this Carousel is the correct component */}
        <div className="overflow-hidden" ref={emblaRef}>
          <CarouselContent className="flex">
            {deals.map((deal) => (
              <CarouselItem key={deal.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="overflow-hidden cursor-pointer" onClick={() => handleDealClick(deal.url)}>
                  <CardContent className="p-0">
                    <div className={`relative w-full h-48 ${deal.bgColor}`}>
                      <img
                        src={deal.image}
                        alt={deal.title}
                        className="w-full h-full object-cover mix-blend-overlay"
                      />
                      <div className="absolute inset-0 flex flex-col justify-between p-4">
                        <div className="flex justify-between items-start">
                          <img src={deal.logo} alt={`${deal.title} logo`} className="h-6 object-contain" />
                          <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
                            {deal.saleStatus}
                          </span>
                        </div>
                        <div className="text-white">
                          <h3 className="text-2xl font-bold mb-1">{deal.title}</h3>
                          <p className="text-sm mb-1">{deal.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>

        {/* Left Arrow (Previous Button) */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full cursor-pointer z-10"
          onClick={scrollPrev}
        >
          &lt;
        </button>

        {/* Right Arrow (Next Button) */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full cursor-pointer z-10"
          onClick={scrollNext}
        >
          &gt;
        </button>
      </Carousel>
    </div>
  );
};

export default DealOfTheDay;
