import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import DealOfTheDay from '../components/DealOfTheDay';
import CategorySection from '../components/CategorySection';
import PopularStores from '../components/PopularStores';
import ExploreForeignBrands from '../components/ExploreForeignBrands';
import LootDealsSection from '../components/LootDealsSection';
import CreditCardSection from '../components/CreditCardSection';
import InstallAndEarnSection from '../components/InstallAndEarnSection';
import GiftCards from '../components/GiftCards';
import FlightSearch from '../components/FlightSearch';
import HotelSearch from '../components/HotelSearch';
import TrainSearch from '../components/TrainSearch';
import BusSearch from '../components/BusSearch';
import CabSearch from '../components/CabSearch';
import FinanceSection from '../components/FinanceSection';
import { Button } from "@/components/ui/button";
import { Plane, Hotel, Train, Bus, Car, DollarSign } from 'lucide-react';

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
            <ExploreForeignBrands />
            <LootDealsSection />
            <CreditCardSection />
            <InstallAndEarnSection />
            <GiftCards />
          </>
        );
      case 'flights':
        return <FlightSearch setActiveSection={setActiveSection} />;
      case 'hotels':
        return <HotelSearch setActiveSection={setActiveSection} />;
      case 'trains':
        return <TrainSearch setActiveSection={setActiveSection} />;
      case 'buses':
        return <BusSearch setActiveSection={setActiveSection} />;
      case 'cabs':
        return <CabSearch setActiveSection={setActiveSection} />;
      case 'finance':
        return <FinanceSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <div className="flex items-center mb-8">
          <BackButton />
          <h1 className="text-3xl font-bold text-secondary-foreground capitalize ml-4">Home</h1>
        </div>

        {/* Buttons for navigating between sections */}
        <div className="flex justify-center mb-6 space-x-4">
          <Button
            variant={activeSection === 'shopping' ? 'default' : 'outline'}
            onClick={() => setActiveSection('shopping')}
          >
            Shopping
          </Button>
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
          <Button
            variant={activeSection === 'finance' ? 'default' : 'outline'}
            onClick={() => setActiveSection('finance')}
          >
            <DollarSign className="mr-2 h-4 w-4" />
            Finance
          </Button>
        </div>

        {/* Render content based on active section */}
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
