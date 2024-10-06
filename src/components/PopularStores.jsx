import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const popularStores = [
  { id: 1, name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png", url: "https://www.amazon.in/" },
  { id: 2, name: "Flipkart", logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png", url: "https://www.flipkart.com/" },
  { id: 3, name: "Myntra", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Myntra_logo.png", url: "https://www.myntra.com/" },
  { id: 4, name: "Nykaa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Nykaa_Logo.png/800px-Nykaa_Logo.png", url: "https://www.nykaa.com/" },
  { id: 5, name: "Ajio", logo: "https://assets.ajio.com/static/img/Ajio-Logo.svg", url: "https://www.ajio.com/" },
  { id: 6, name: "Tata CLiQ", logo: "https://d2xamzlzrdbdbn.cloudfront.net/brands/tata_cliq_120x120.jpg", url: "https://www.tatacliq.com/" },
  { id: 7, name: "Reliance Digital", logo: "https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg", url: "https://www.reliancedigital.in/" },
];

const PopularStores = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Popular Stores</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {popularStores.map((store) => (
          <a href={store.url} key={store.id} target="_blank" rel="noopener noreferrer">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                    <img src={store.logo} alt={store.name} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-sm font-semibold text-center">{store.name}</h3>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PopularStores;