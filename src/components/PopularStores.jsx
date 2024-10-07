import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const popularStores = [
  { id: 1, name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png", url: "https://www.amazon.in/" },
  { id: 2, name: "Flipkart", logo: "https://cdn.iconscout.com/icon/free/png-256/free-flipkart-226594.png?f=webp", url: "https://www.flipkart.com/" },
  { id: 3, name: "Myntra", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72deXSuQEm4biPFKNe9_sGv1eBgujn2tmoA&s", url: "https://www.myntra.com/" },
  { id: 4, name: "Nykaa", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdsRx67JH7YLuELiekQL1RMptStEUKqWAd5g&s", url: "https://www.nykaa.com/" },
  { id: 5, name: "Ajio", logo: "https://assets.ajio.com/static/img/Ajio-Logo.svg", url: "https://track.vcommission.com/click?campaign_id=10364&pub_id=117026" },
  { id: 6, name: "Tata CLiQ", logo: "https://d2xamzlzrdbdbn.cloudfront.net/brands/tata_cliq_120x120.jpg", url: "https://track.vcommission.com/click?campaign_id=10240&pub_id=117026" },
  { id: 7, name: "Reliance Digital", logo: "https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg", url: "https://www.reliancedigital.in/" },
  { id: 8, name: "FirstCry", logo: "https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png", url: "https://track.vcommission.com/click?campaign_id=10081&pub_id=117026" },
  { id: 9, name: "Pantaloons", logo: "https://cdn-clabkjb.nitrocdn.com/plOmBgbYRKFaljxjoMMvTFNKXzWnOrzB/assets/images/optimized/rev-fa911e3/www.infinitimall.com/wp-content/uploads/2022/03/Pantaloons-Logo-Infiniti-Mall-.jpg", url: "https://track.vcommission.com/click?campaign_id=11287&pub_id=117026" },
  { id: 10, name: "Daily Objects", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR22LONdDw5JeFHwMugbfhZbtMzEd35OmvA7Q&s", url: "https://track.vcommission.com/click?campaign_id=11432&pub_id=117026" },
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
