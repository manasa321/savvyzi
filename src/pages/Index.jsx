import React from 'react';
import Navbar from '../components/Navbar';
import CategorySection from '../components/CategorySection';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const deals = [
  { id: 1, image: "https://via.placeholder.com/1200x400?text=Festival+Deals", title: "Festival Deals just got better", discount: "SAVE AN EXTRA 7%" },
  { id: 2, image: "https://via.placeholder.com/1200x400?text=Beauty+Products", title: "Beauty Products on Sale", discount: "UP TO 50% OFF" },
];

const giftCards = [
  { id: 1, name: "Swiggy", logo: "https://via.placeholder.com/100?text=Swiggy", category: "Food & Drinks", discount: "4% Off" },
  { id: 2, name: "Ajio", logo: "https://via.placeholder.com/100?text=Ajio", category: "Shopping", discount: "7% Off" },
  { id: 3, name: "Nykaa", logo: "https://via.placeholder.com/100?text=Nykaa", category: "Shopping", discount: "8% Off" },
  { id: 4, name: "Myntra", logo: "https://via.placeholder.com/100?text=Myntra", category: "Shopping", discount: "7% Off" },
  { id: 5, name: "Cult.fit", logo: "https://via.placeholder.com/100?text=Cult.fit", category: "Lifestyle", discount: "9% Off" },
  { id: 6, name: "Tata CliQ", logo: "https://via.placeholder.com/100?text=Tata+CliQ", category: "Shopping", discount: "7% Off" },
  { id: 7, name: "Healthkart", logo: "https://via.placeholder.com/100?text=Healthkart", category: "Shopping", discount: "13% Off" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <section className="mb-8 relative">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-[400px]">
                {deals.map((deal, index) => (
                  <div
                    key={deal.id}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                      index === 0 ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-8">
                      <h3 className="text-4xl font-bold mb-2">{deal.title}</h3>
                      <p className="text-2xl font-semibold">{deal.discount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Popular gift cards</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {giftCards.map((card) => (
              <Card key={card.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center">
                    <img src={card.logo} alt={card.name} className="w-16 h-16 object-contain mb-2" />
                    <h3 className="text-sm font-semibold text-center">{card.name}</h3>
                    <p className="text-xs text-gray-500">{card.category}</p>
                    <p className="text-sm font-medium text-green-600 mt-1">{card.discount}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Explore Categories</h2>
          <CategorySection />
        </section>
      </main>
    </div>
  );
};

export default Index;
