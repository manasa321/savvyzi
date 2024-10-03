import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { useNavigate } from 'react-router-dom';
import { Search, Menu, X, Wallet } from 'lucide-react';
import { Button } from "@/components/ui/button";
import logo from '../logo-png.png';
import WalletModal from './WalletModal';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="Dealzy" className="h-8 w-auto sm:h-10"/>
          </div>
          <div className="hidden sm:block flex-grow max-w-xl mx-4">
            <form onSubmit={handleSearch} className="relative w-full">
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
          <div className="hidden sm:flex items-center space-x-4">
            <Button variant="ghost" onClick={() => setIsWalletOpen(true)}>
              <Wallet className="h-5 w-5 mr-2" />
              Wallet
            </Button>
            <Button variant="primary" className="bg-black text-white hover:bg-gray-800">
              Login/Sign up
            </Button>
          </div>
          <div className="sm:hidden">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden pb-4">
            <form onSubmit={handleSearch} className="relative mt-4">
              <Input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-gray-200 focus:outline-none focus:border-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </form>
            <Button variant="ghost" onClick={() => setIsWalletOpen(true)} className="w-full mt-4">
              <Wallet className="h-5 w-5 mr-2" />
              Wallet
            </Button>
            <Button variant="primary" className="bg-black text-white hover:bg-gray-800 w-full mt-4">
              Login/Sign up
            </Button>
          </div>
        )}
      </div>
      <WalletModal isOpen={isWalletOpen} onClose={() => setIsWalletOpen(false)} />
    </nav>
  );
};

export default Navbar;