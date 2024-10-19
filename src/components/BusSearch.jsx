import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";
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
      <Button variant="ghost" onClick={() => navigate('/')} className="mb-4">
        <ArrowLeft className="mr-2" />
        Back to Home
      </Button>
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