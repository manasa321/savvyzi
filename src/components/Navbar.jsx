import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import logo from '../logo-png.png';

const Navbar = ({ onSearch }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState('');
  const [localCategory, setLocalCategory] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (localSearchTerm.trim() && typeof onSearch === 'function') {
      onSearch(localSearchTerm, localCategory);
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
                value={localSearchTerm}
                onChange={(e) => setLocalSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-l-full border-2 border-gray-200 focus:outline-none focus:border-primary"
              />
              <Select onValueChange={setLocalCategory}>
                <SelectTrigger className="w-[180px] rounded-none border-2 border-l-0 border-gray-200">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mobile">Mobile</SelectItem>
                  <SelectItem value="laptop">Laptop</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                </SelectContent>
              </Select>
              <Button type="submit" className="rounded-r-full">
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
