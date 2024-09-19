import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src="/logo.png" alt="Price Pioneer Logo" className="h-8 w-auto mr-2" />
            <h1 className="text-xl font-bold text-white">Price Pioneer</h1>
          </div>
          <div className="flex-grow max-w-xl mx-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search for a product..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-white focus:outline-none focus:border-yellow-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
