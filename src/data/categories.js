import { ShoppingBag } from 'lucide-react';
import { mobileBrands } from './categoryMobile';
import { beautyBrands } from './categoryBeauty';
import { wellnessKidsBrands } from './categoryWellnessKids';
import { tvBrands } from './categoryTV';
import { laptopBrands } from './categoryLaptop';
import { headphoneBrands } from './categoryHeadphones';
import { fashionSubcategories } from './categoryFashion';
import { jewelleryBrands } from './categoryJewellery';
import { mutualFundBrands } from './categoryMutualFunds';
import { fdRateBrands } from './categoryFDRates';
import { financePlanBrands } from './categoryFinancePlans';

// Helper function to add sample discount to brands
const addSampleDiscount = (brands) => {
  return brands.map(brand => ({
    ...brand,
    discount: `Up to ${Math.floor(Math.random() * 15) + 1}% Cashback`
  }));
};

export const categories = [
  { 
    name: 'Mobile', 
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    brands: addSampleDiscount(mobileBrands)
  },
  {
    name: 'Beauty',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    brands: addSampleDiscount(beautyBrands)
  },
  {
    name: 'Wellness & Kids',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    brands: addSampleDiscount(wellnessKidsBrands)
  },
  { 
    name: 'TV', 
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    brands: addSampleDiscount(tvBrands)
  },
  { 
    name: 'Laptop', 
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    brands: addSampleDiscount(laptopBrands)
  },
  { 
    name: 'Headphones', 
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    brands: addSampleDiscount(headphoneBrands)
  },
  { 
    name: 'Fashion', 
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    icon: ShoppingBag,
    subcategories: fashionSubcategories.map(subcat => ({
      ...subcat,
      brands: addSampleDiscount(subcat.brands)
    }))
  },
  { 
    name: 'Jewellery', 
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    brands: addSampleDiscount(jewelleryBrands)
  },
  { 
    name: 'Mutual Funds', 
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    brands: addSampleDiscount(mutualFundBrands)
  },
  { 
    name: 'FD Rates', 
    image: 'https://images.unsplash.com/photo-1621981386829-9b458a2cddde?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    brands: addSampleDiscount(fdRateBrands)
  },
  { 
    name: 'Finance Plans', 
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    brands: addSampleDiscount(financePlanBrands)
  },
  {
    name: 'Insurance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    brands: addSampleDiscount([
      { name: 'Nivabupa', logo: 'https://www.nivabupa.com/content/dam/nivabupa/Image/logos/NivaLogo324x180.png', url: 'https://track.vcommission.com/click?campaign_id=11195&pub_id=117026' }
    ])
  },
  {
    name: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    brands: addSampleDiscount([
      { name: 'Ugaoo', logo: 'https://www.ugaoo.com/cdn/shop/files/Logo-website-header-01.png?height=116&v=1725347801', url: 'https://track.vcommission.com/click?campaign_id=11223&pub_id=117026' }
    ])
  },
];
