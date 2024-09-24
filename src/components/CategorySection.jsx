import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      { name: 'Apple', logo: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png' },
      { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png' },
      { name: 'OnePlus', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/OnePlus_logo.svg/2560px-OnePlus_logo.svg.png' },
      { name: 'Xiaomi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/2048px-Xiaomi_logo.svg.png' },
      { name: 'Vivo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Vivo_logo_2019.svg/1280px-Vivo_logo_2019.svg.png' },
      { name: 'Oppo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/OPPO_LOGO_2019.svg/2560px-OPPO_LOGO_2019.svg.png' }
    ]
  },
  { 
    name: 'TV', 
    icon: Tv,
    brands: [
      { name: 'LG', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png' },
      { name: 'Sony', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Sony_logo.svg/2560px-Sony_logo.svg.png' },
      { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png' },
      { name: 'Panasonic', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Panasonic_logo_%282022%29.svg/2560px-Panasonic_logo_%282022%29.svg.png' },
      { name: 'Mi TV', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/2048px-Xiaomi_logo.svg.png' },
      { name: 'TCL', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/TCL_logo.svg/2560px-TCL_logo.svg.png' }
    ]
  },
  { 
    name: 'Laptop', 
    icon: Laptop,
    brands: [
      { name: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/1200px-Dell_Logo.png' },
      { name: 'HP', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png' },
      { name: 'Lenovo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/2560px-Lenovo_logo_2015.svg.png' },
      { name: 'Apple', logo: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png' },
      { name: 'Asus', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/2560px-ASUS_Logo.svg.png' },
      { name: 'Acer', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/2560px-Acer_2011.svg.png' }
    ]
  },
  { 
    name: 'Headphones', 
    icon: Headphones,
    brands: [
      { name: 'Sony', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Sony_logo.svg/2560px-Sony_logo.svg.png' },
      { name: 'Apple', logo: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png' },
      { name: 'Boat', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/BoAt_logo.svg/2560px-BoAt_logo.svg.png' },
      { name: 'Noise', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Noise_%28company%29_logo.svg/2560px-Noise_%28company%29_logo.svg.png' },
      { name: 'Redmi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/2048px-Xiaomi_logo.svg.png' },
      { name: 'OnePlus', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/OnePlus_logo.svg/2560px-OnePlus_logo.svg.png' }
    ]
  },
  { 
    name: 'Gold Schemes', 
    icon: Coins,
    brands: [
      { name: 'Joyalukkas', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Joyalukkas_Logo.svg/2560px-Joyalukkas_Logo.svg.png' },
      { name: 'Malabar Gold', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Malabar_Gold_%26_Diamonds_Logo.svg/2560px-Malabar_Gold_%26_Diamonds_Logo.svg.png' },
      { name: 'Kalyan Jewellers', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Kalyan_Jewellers_Logo.svg/2560px-Kalyan_Jewellers_Logo.svg.png' },
      { name: 'BlueStone', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/BlueStone_Logo.svg/2560px-BlueStone_Logo.svg.png' },
      { name: 'Tanishq', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Tanishq_Logo.svg/2560px-Tanishq_Logo.svg.png' },
      { name: 'Lalitha Jewellery', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Lalitha_Jewellery_Logo.svg/2560px-Lalitha_Jewellery_Logo.svg.png' }
    ]
  },
  { 
    name: 'Mutual Funds', 
    icon: TrendingUp,
    brands: [
      { name: 'HDFC AMC', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png' },
      { name: 'ICICI Prudential', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png' },
      { name: 'SBI Mutual Fund', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/1200px-State_Bank_of_India_logo.svg.png' },
      { name: 'Axis Mutual Fund', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Axis_Bank_logo.svg/1200px-Axis_Bank_logo.svg.png' },
      { name: 'Aditya Birla Sun Life', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Aditya_Birla_Group_Logo.svg/1200px-Aditya_Birla_Group_Logo.svg.png' }
    ]
  },
  { 
    name: 'FD Rates', 
    icon: Percent,
    brands: [
      { name: 'SBI', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/1200px-State_Bank_of_India_logo.svg.png' },
      { name: 'HDFC Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png' },
      { name: 'ICICI Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png' },
      { name: 'Axis Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Axis_Bank_logo.svg/1200px-Axis_Bank_logo.svg.png' },
      { name: 'Kotak Mahindra Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Kotak_Mahindra_Bank_logo.svg/2560px-Kotak_Mahindra_Bank_logo.svg.png' }
    ]
  },
  { 
    name: 'Finance Plans', 
    icon: CreditCard,
    brands: [
      { name: 'Bajaj Finserv', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Bajaj_Finserv_Logo.svg/2560px-Bajaj_Finserv_Logo.svg.png' },
      { name: 'HDFC Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png' },
      { name: 'ICICI Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png' },
      { name: 'Tata Capital', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/2560px-Tata_logo.svg.png' },
      { name: 'Mahindra Finance', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Mahindra_and_Mahindra_Logo.svg/2560px-Mahindra_and_Mahindra_Logo.svg.png' }
    ]
  },
];

const CategorySection = () => {
  const navigate = useNavigate();

  const handleBrandClick = (category, brand) => {
    navigate(`/search?category=${encodeURIComponent(category)}&brand=${encodeURIComponent(brand)}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Card key={category.name} className="overflow-hidden hover:shadow-lg transition-shadow">
          <CardHeader className="bg-secondary">
            <CardTitle className="flex items-center text-lg font-semibold">
              <category.icon className="w-6 h-6 mr-2 text-primary" />
              {category.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="grid grid-cols-3 gap-2">
              {category.brands.map((brand) => (
                <div 
                  key={brand.name} 
                  className="flex flex-col items-center bg-background rounded-md p-2 hover:bg-accent transition-colors cursor-pointer"
                  onClick={() => handleBrandClick(category.name, brand.name)}
                >
                  <img src={brand.logo} alt={brand.name} className="w-10 h-10 object-contain mb-1" />
                  <span className="text-xs font-medium text-center">{brand.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CategorySection;
