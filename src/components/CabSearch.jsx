import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";
import { useNavigate } from 'react-router-dom';  // Make sure to import useNavigate
import BackButton from './BackButton';  // Already imported

const CabSearch = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState(null);
  const navigate = useNavigate(); // To handle navigation

  const handleSearch = () => {
    console.log('Searching for cabs:', { pickup, dropoff, date });
    // Implement cab search logic here
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      {/* Add a BackButton with a title, styled in a flex container */}
      <div className="flex items-center mb-8">
        <BackButton onClick={() => navigate('/')} />
        <h1 className="text-3xl font-bold text-secondary-foreground capitalize ml-4">
          Search Cabs
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          placeholder="Pickup Location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
        />
        <Input
          placeholder="Drop-off Location"
          value={dropoff}
          onChange={(e) => setDropoff(e.target.value)}
        />
        <DatePicker
          date={date}
          onDateChange={setDate}
        />
      </div>
      
      <Button className="mt-4 w-full" onClick={handleSearch}>
        Search Cabs
      </Button>
    </div>
  );
};

export default CabSearch;
