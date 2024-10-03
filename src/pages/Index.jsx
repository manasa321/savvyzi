// Index.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import CategorySection from '../components/CategorySection';
import DealOfTheDay from '../components/DealOfTheDay';
import GiftCards from '../components/GiftCards';  // Import GiftCards component

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto py-8 px-4">

        {/* Deal of the Day Carousel */}
        <section className="mb-8">
          <DealOfTheDay />  {/* Integrating the DealOfTheDay component */}
        </section>
        
        {/* Gift Cards Section */}
        <GiftCards />  {/* Using the GiftCards component */}

        {/* Categories Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Explore Categories</h2>
          <CategorySection />
        </section>

      </main>
    </div>
  );
};

export default Index;
