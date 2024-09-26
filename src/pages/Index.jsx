import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CategorySection from '../components/CategorySection';
import DealOfTheDay from '../components/DealOfTheDay';

const Index = () => {
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    navigate(`/search?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onSearch={handleSearch} />
      <main className="container mx-auto py-8 px-4">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Explore Categories</h2>
          <CategorySection />
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Deals of the Day</h2>
          <DealOfTheDay />
        </section>
      </main>
    </div>
  );
};

export default Index;
