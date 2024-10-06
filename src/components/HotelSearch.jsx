import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";

const HotelSearch = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    console.log('Searching for hotels:', { location, checkIn, checkOut, guests });
    // Implement hotel search logic here
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <DatePicker
          date={checkIn}
          onDateChange={setCheckIn}
        />
        <DatePicker
          date={checkOut}
          onDateChange={setCheckOut}
        />
        <Input
          type="number"
          placeholder="Guests"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
          min={1}
        />
      </div>
      <Button className="mt-4 w-full" onClick={handleSearch}>
        Search Hotels
      </Button>
    </div>
  );
};

export default HotelSearch;