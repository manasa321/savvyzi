import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";
import BackButton from './BackButton';

const CabSearch = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState(null);

  const handleSearch = () => {
    console.log('Searching for cabs:', { pickup, dropoff, date });
    // Implement cab search logic here
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <BackButton className="mb-4" />
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