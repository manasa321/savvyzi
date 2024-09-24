import React from 'react';
import { 
  Smartphone, 
  Tv, 
  Laptop, 
  Headphones, 
  Coins, 
  TrendingUp, 
  Percent, 
  CreditCard 
} from 'lucide-react';

const categories = [
  { 
    name: 'Mobile', 
    icon: Smartphone,
    brands: ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi']
  },
  { 
    name: 'TV', 
    icon: Tv,
    brands: ['Sony', 'LG', 'Samsung', 'TCL', 'Vizio']
  },
  { 
    name: 'Laptop', 
    icon: Laptop,
    brands: ['Dell', 'HP', 'Lenovo', 'Apple', 'Asus']
  },
  { 
    name: 'Headphones', 
    icon: Headphones,
    brands: ['Bose', 'Sony', 'Sennheiser', 'JBL', 'Beats']
  },
  { 
    name: 'Gold Schemes', 
    icon: Coins,
    brands: ['SBI', 'HDFC', 'ICICI', 'Axis Bank', 'Punjab National Bank']
  },
  { 
    name: 'Mutual Funds', 
    icon: TrendingUp,
    brands: ['HDFC AMC', 'ICICI Prudential', 'SBI Mutual Fund', 'Axis Mutual Fund', 'Aditya Birla Sun Life']
  },
  { 
    name: 'FD Rates', 
    icon: Percent,
    brands: ['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Kotak Mahindra Bank']
  },
  { 
    name: 'Finance Plans', 
    icon: CreditCard,
    brands: ['Bajaj Finserv', 'HDFC Bank', 'ICICI Bank', 'Tata Capital', 'Mahindra Finance']
  },
];

const CategorySection = () => {
  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <div key={category.name} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <category.icon className="w-8 h-8 text-indigo-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {category.brands.map((brand) => (
              <div key={brand} className="bg-gray-100 rounded-md p-2 text-center text-sm font-medium text-gray-700 hover:bg-indigo-100 transition-colors">
                {brand}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
