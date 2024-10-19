import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";
import BackButton from '@/components/BackButton';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BusSearch = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log('Searching for buses:', { from, to, date });
    // Implement bus search logic here
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <div className="flex items-center mb-8">
          <BackButton />
          <br></br>
          <h1 className="text-3xl font-bold text-secondary-foreground capitalize ml-4">{selectedCategory.name}</h1>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <Input
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <DatePicker
          date={date}
          onDateChange={setDate}
        />
      </div>
      <Button className="mt-4 w-full" onClick={handleSearch}>
        Search Buses
      </Button>
    </div>
  );
};

export default BusSearch;
