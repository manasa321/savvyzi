import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import logo from '../logo-png.png';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() && typeof onSearch === 'function') {
      onSearch(searchTerm);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-auto"/>
          </div>
          <div className="flex-grow max-w-xl mx-4">
            <form onSubmit={handleSearch} className="relative flex items-center">
              <Input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-gray-200 focus:outline-none focus:border-primary"
              />
              <Button type="submit" className="absolute right-0 rounded-r-full">
                <Search className="h-5 w-5" />
              </Button>
            </form>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
