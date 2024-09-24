import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductComparison from '../components/ProductComparison';
import CategorySection from '../components/CategorySection';
import { Compass } from 'lucide-react';

const Index = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search') || '';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary flex items-center justify-center">
            <Compass className="w-10 h-10 mr-2" />
            SavvyZi
          </h1>
          <p className="text-xl text-muted-foreground">
            Your compass for the best deals across the digital marketplace
          </p>
        </header>
        
        {searchTerm ? (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-secondary-foreground">Search Results for "{searchTerm}"</h2>
            <ProductComparison searchTerm={searchTerm} />
          </section>
        ) : (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-secondary-foreground">Explore Categories</h2>
            <CategorySection />
          </section>
        )}

        <section className="mb-12 bg-secondary rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-secondary-foreground">About Price Pioneer</h2>
          <p className="text-muted-foreground">
            Price Pioneer is your ultimate companion for smart shopping. We aggregate prices from multiple e-commerce platforms,
            helping you find the best deals on a wide range of products and services. From electronics to financial products,
            we've got you covered. Start your journey to smarter purchasing decisions today!
          </p>
        </section>
      </main>
    </div>
  );
};

export default Index;
