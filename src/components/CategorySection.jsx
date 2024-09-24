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
    brands: [
      { name: 'Apple', logo: 'https://w7.pngwing.com/pngs/186/863/png-transparent-apple-logo-apple-logo-computer-wallpaper-silhouette.png'},
      { name: 'Samsung', logo: 'https://via.placeholder.com/50?text=Samsung' },
      { name: 'Google', logo: 'https://via.placeholder.com/50?text=Google' },
      { name: 'OnePlus', logo: 'https://via.placeholder.com/50?text=OnePlus' },
      { name: 'Xiaomi', logo: 'https://via.placeholder.com/50?text=Xiaomi' }
    ]
  },
  { 
    name: 'TV', 
    icon: Tv,
    brands: [
      { name: 'Sony', logo: 'https://via.placeholder.com/50?text=Sony' },
      { name: 'LG', logo: 'https://via.placeholder.com/50?text=LG' },
      { name: 'Samsung', logo: 'https://via.placeholder.com/50?text=Samsung' },
      { name: 'TCL', logo: 'https://via.placeholder.com/50?text=TCL' },
      { name: 'Vizio', logo: 'https://via.placeholder.com/50?text=Vizio' }
    ]
  },
  { 
    name: 'Laptop', 
    icon: Laptop,
    brands: [
      { name: 'Dell', logo: 'https://via.placeholder.com/50?text=Dell' },
      { name: 'HP', logo: 'https://via.placeholder.com/50?text=HP' },
      { name: 'Lenovo', logo: 'https://via.placeholder.com/50?text=Lenovo' },
      { name: 'Apple', logo: 'https://via.placeholder.com/50?text=Apple' },
      { name: 'Asus', logo: 'https://via.placeholder.com/50?text=Asus' }
    ]
  },
  { 
    name: 'Headphones', 
    icon: Headphones,
    brands: [
      { name: 'Bose', logo: 'https://via.placeholder.com/50?text=Bose' },
      { name: 'Sony', logo: 'https://via.placeholder.com/50?text=Sony' },
      { name: 'Sennheiser', logo: 'https://via.placeholder.com/50?text=Sennheiser' },
      { name: 'JBL', logo: 'https://via.placeholder.com/50?text=JBL' },
      { name: 'Beats', logo: 'https://via.placeholder.com/50?text=Beats' }
    ]
  },
  { 
    name: 'Gold Schemes', 
    icon: Coins,
    brands: [
      { name: 'SBI', logo: 'https://via.placeholder.com/50?text=SBI' },
      { name: 'HDFC', logo: 'https://via.placeholder.com/50?text=HDFC' },
      { name: 'ICICI', logo: 'https://via.placeholder.com/50?text=ICICI' },
      { name: 'Axis Bank', logo: 'https://via.placeholder.com/50?text=Axis' },
      { name: 'Punjab National Bank', logo: 'https://via.placeholder.com/50?text=PNB' }
    ]
  },
  { 
    name: 'Mutual Funds', 
    icon: TrendingUp,
    brands: [
      { name: 'HDFC AMC', logo: 'https://via.placeholder.com/50?text=HDFC_AMC' },
      { name: 'ICICI Prudential', logo: 'https://via.placeholder.com/50?text=ICICI_Pru' },
      { name: 'SBI Mutual Fund', logo: 'https://via.placeholder.com/50?text=SBI_MF' },
      { name: 'Axis Mutual Fund', logo: 'https://via.placeholder.com/50?text=Axis_MF' },
      { name: 'Aditya Birla Sun Life', logo: 'https://via.placeholder.com/50?text=ABSL' }
    ]
  },
  { 
    name: 'FD Rates', 
    icon: Percent,
    brands: [
      { name: 'SBI', logo: 'https://via.placeholder.com/50?text=SBI' },
      { name: 'HDFC Bank', logo: 'https://via.placeholder.com/50?text=HDFC' },
      { name: 'ICICI Bank', logo: 'https://via.placeholder.com/50?text=ICICI' },
      { name: 'Axis Bank', logo: 'https://via.placeholder.com/50?text=Axis' },
      { name: 'Kotak Mahindra Bank', logo: 'https://via.placeholder.com/50?text=Kotak' }
    ]
  },
  { 
    name: 'Finance Plans', 
    icon: CreditCard,
    brands: [
      { name: 'Bajaj Finserv', logo: 'https://via.placeholder.com/50?text=Bajaj' },
      { name: 'HDFC Bank', logo: 'https://via.placeholder.com/50?text=HDFC' },
      { name: 'ICICI Bank', logo: 'https://via.placeholder.com/50?text=ICICI' },
      { name: 'Tata Capital', logo: 'https://via.placeholder.com/50?text=Tata' },
      { name: 'Mahindra Finance', logo: 'https://via.placeholder.com/50?text=Mahindra' }
    ]
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
              <div key={brand.name} className="flex flex-col items-center bg-gray-100 rounded-md p-2 hover:bg-indigo-100 transition-colors">
                <img src={brand.logo} alt={brand.name} className="w-10 h-10 object-contain mb-2" />
                <span className="text-sm font-medium text-gray-700 text-center">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
