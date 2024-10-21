import React from 'react';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import { Card, CardContent } from "@/components/ui/card";
import { categories } from '../data/categories';
import FinanceSection from '../components/FinanceSection';

const Index = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center mb-8">
          <BackButton />
          <h1 className="text-3xl font-bold text-secondary-foreground capitalize ml-4">Home</h1>
        </div>
        <FinanceSection />
      </div>
    </div>
  );
};

export default Index;
