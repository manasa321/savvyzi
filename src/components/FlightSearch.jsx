import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";
import { ArrowLeft } from 'lucide-react';

const FlightSearch = ({ setActiveSection }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const handleSearch = () => {
    console.log('Searching for flights:', { from, to, departDate, returnDate });
    // Implement flight search logic here
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <Button variant="ghost" onClick={() => setActiveSection('shopping')} className="mb-4">
        <ArrowLeft className="mr-2" />
        Back to Home
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
          date={departDate}
          onDateChange={setDepartDate}
        />
        <DatePicker
          date={returnDate}
          onDateChange={setReturnDate}
        />
      </div>
      <Button className="mt-4 w-full" onClick={handleSearch}>
        Search Flights
      </Button>
    </div>
  );
};

export default FlightSearch;