import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CategorySection from '../components/CategorySection';
import DealOfTheDay from '../components/DealOfTheDay';
import PopularStores from '../components/PopularStores';
import CreditCardSection from '../components/CreditCardSection';
import InstallAndEarnSection from '../components/InstallAndEarnSection';
import LootDealsSection from '../components/LootDealsSection';
import GiftCards from '../components/GiftCards';
import FlightSearch from '../components/FlightSearch';
import HotelSearch from '../components/HotelSearch';
import TrainSearch from '../components/TrainSearch';
import BusSearch from '../components/BusSearch';
import CabSearch from '../components/CabSearch';
import { Button } from "@/components/ui/button";
import { Plane, Hotel, Train, Bus, Car } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('shopping');

  const renderContent = () => {
    switch (activeSection) {
      case 'shopping':
        return (
          <>
            <DealOfTheDay />
            <CategorySection />
            <PopularStores />
            <LootDealsSection />
            <CreditCardSection />
            <InstallAndEarnSection />
            <GiftCards />
          </>
        );
      case 'flights':
        return <FlightSearch />;
      case 'hotels':
        return <HotelSearch />;
      case 'trains':
        return <TrainSearch />;
      case 'buses':
        return <BusSearch />;
      case 'cabs':
        return <CabSearch />;
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
            variant={activeSection === 'flights' ? 'default' : 'outline'}
            onClick={() => setActiveSection('flights')}
          >
            <Plane className="mr-2 h-4 w-4" />
            Flights
          </Button>
          <Button
            variant={activeSection === 'hotels' ? 'default' : 'outline'}
            onClick={() => setActiveSection('hotels')}
          >
            <Hotel className="mr-2 h-4 w-4" />
            Hotels
          </Button>
          <Button
            variant={activeSection === 'trains' ? 'default' : 'outline'}
            onClick={() => setActiveSection('trains')}
          >
            <Train className="mr-2 h-4 w-4" />
            Trains
          </Button>
          <Button
            variant={activeSection === 'buses' ? 'default' : 'outline'}
            onClick={() => setActiveSection('buses')}
          >
            <Bus className="mr-2 h-4 w-4" />
            Buses
          </Button>
          <Button
            variant={activeSection === 'cabs' ? 'default' : 'outline'}
            onClick={() => setActiveSection('cabs')}
          >
            <Car className="mr-2 h-4 w-4" />
            Cabs
          </Button>
        </div>
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;