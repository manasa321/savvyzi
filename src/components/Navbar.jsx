import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { useNavigate } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import logo from '../logo-png.png';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4">
          <div className="flex items-center w-full sm:w-auto justify-between">
            <img src={logo} alt="Dealzy" className="h-12 sm:h-16 w-auto"/>
            <Button variant="ghost" className="sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:block w-full sm:w-auto mt-4 sm:mt-0`}>
            <form onSubmit={handleSearch} className="relative w-full sm:w-64 md:w-96">
              <Input
                type="text"
                placeholder="Search for your favorite brands..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-gray-200 focus:outline-none focus:border-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </form>
          </div>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:block mt-4 sm:mt-0`}>
            <Button variant="primary" className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto">
              Login/Sign up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;