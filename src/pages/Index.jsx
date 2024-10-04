import React from 'react';
import Navbar from '../components/Navbar';
import CategorySection from '../components/CategorySection';
import DealOfTheDay from '../components/DealOfTheDay';
import GiftCards from '../components/GiftCards';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto py-4 px-4">
        {/* Categories Section */}
        <section className="mb-6">
          <CategorySection />
        </section>
        
        {/* Deal of the Day Carousel */}
        <section className="mb-8">
          <DealOfTheDay />
        </section>
        
        {/* Gift Cards Section */}
        <GiftCards />
      </main>
    </div>
  );
};

export default Index;