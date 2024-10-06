import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CategorySection from '../components/CategorySection';
import DealOfTheDay from '../components/DealOfTheDay';
import PopularStores from '../components/PopularStores';
import GiftCards from '../components/GiftCards';
import FlightSearch from '../components/FlightSearch';
import { Button } from "@/components/ui/button";
import { ShoppingBag, Plane } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('shopping');

  const renderContent = () => {
    switch (activeSection) {
      case 'shopping':
        return (
          <>
            <section className="mb-6">
              <CategorySection />
            </section>
            <section className="mb-8">
              <DealOfTheDay />
            </section>
            <PopularStores />
            <GiftCards />
          </>
        );
      case 'flights':
        return <FlightSearch />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto py-4 px-4">
        <div className="flex justify-center mb-6 space-x-4">
          <Button
            variant={activeSection === 'shopping' ? 'default' : 'outline'}
            onClick={() => setActiveSection('shopping')}
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Shopping
          </Button>
          <Button
            variant={activeSection === 'flights' ? 'default' : 'outline'}
            onClick={() => setActiveSection('flights')}
          >
            <Plane className="mr-2 h-4 w-4" />
            Flights
          </Button>
        </div>
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;