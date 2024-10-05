import { Smartphone, Tv, Laptop, Headphones, Coins, TrendingUp, Percent, CreditCard } from 'lucide-react';

export const categories = [
  { 
    name: 'Mobile', 
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    brands: [
      { name: 'Apple', logo: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png', url: 'https://www.apple.com/in/iphone/' },
      { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png', url: 'https://www.samsung.com/in/smartphones/' },
      { name: 'OnePlus', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKxyMJDTRJRMAOTYgrKR5fslKamX4AUHfbtQ&s', url: 'https://www.oneplus.in/smartphones' },
      { name: 'Xiaomi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/2048px-Xiaomi_logo.svg.png', url: 'https://www.mi.com/in/phone' },
      { name: 'Vivo', logo: 'https://1000logos.net/wp-content/uploads/2022/02/Vivo-Logo.jpg', url: 'https://www.vivo.com/in/products/series/y' },
      { name: 'Oppo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/OPPO_Logo_wiki.png/1024px-OPPO_Logo_wiki.png', url: 'https://www.oppo.com/in/smartphones/' },
      { name: 'Daily Objects', logo: 'https://images.dailyobjects.com/marche/icons/logo_named.png?tr=cm-pad_resize,v-3,w-135,h-27,dpr-2,q-60', url:'https://track.vcommission.com/click?campaign_id=11432&pub_id=117026' }
    ]
  },
  {
    name : 'Beauty',
    image : '',
    brands : [
      { name: 'Smytten', logo: 'https://smytten.com/images/smyttenlogo.svg', url:'https://track.vcommission.com/click?campaign_id=11421&pub_id=117026' }
    ] 
  },
  
  { 
    name: 'TV', 
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    brands: [
      { name: 'LG', logo: 'https://images.squarespace-cdn.com/content/v1/502a8efb84ae42cbccf920c4/1585574686746-VCDIHSO21O76WR72WIAD/LG-Logo.png', url: '/category/tv/lg' },
      { name: 'Sony', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_71af1QHWToXD7zD-eRrXfbzq8HuUnQzUWQ&s', url: '/category/tv/sony' },
      { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png', url: '/category/tv/samsung' },
      { name: 'Panasonic', logo: 'https://1000logos.net/wp-content/uploads/2017/04/Color-Panasonic-Logo.jpg', url: '/category/tv/panasonic' },
      { name: 'Mi TV', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/2048px-Xiaomi_logo.svg.png', url: '/category/tv/mi' },
      { name: 'TCL', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9OUetTLDhz74L9g3GTIK2OjpWviR9eBaclQ&s', url: '/category/tv/tcl' }
    ]
  },
  { 
    name: 'Laptop', 
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    brands: [
      { name: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/1200px-Dell_Logo.png', url: '/category/laptop/dell' },
      { name: 'HP', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png', url: '/category/laptop/hp' },
      { name: 'Lenovo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/2560px-Lenovo_logo_2015.svg.png', url: '/category/laptop/lenovo' },
      { name: 'Apple', logo: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png', url: '/category/laptop/apple' },
      { name: 'Asus', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/2560px-ASUS_Logo.svg.png', url: '/category/laptop/asus' },
      { name: 'Acer', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/2560px-Acer_2011.svg.png', url: '/category/laptop/acer' }
    ]
  },
  { 
    name: 'Headphones', 
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    brands: [
      { name: 'Sony', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_71af1QHWToXD7zD-eRrXfbzq8HuUnQzUWQ&s', url: '/category/headphones/sony' },
      { name: 'Apple', logo: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png', url: '/category/headphones/apple' },
      { name: 'Boat', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Boat_Logo.webp/1200px-Boat_Logo.webp.png', url: '/category/headphones/boat' },
      { name: 'Noise', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3NT_z01r9hc_vsk2rhzMq1K40I-tC9FvTQ&s', url: '/category/headphones/noise' },
      { name: 'Redmi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/2048px-Xiaomi_logo.svg.png', url: '/category/headphones/redmi' },
      { name: 'OnePlus', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKxyMJDTRJRMAOTYgrKR5fslKamX4AUHfbtQ&s', url: '/category/headphones/oneplus' }
    ]
  },
  { 
    name: 'Gold Schemes', 
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    brands: [
      { name: 'Joyalukkas', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Joyalukkas_Logo.svg/2560px-Joyalukkas_Logo.svg.png', url: '/category/gold-schemes/joyalukkas' },
      { name: 'Malabar Gold', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Malabar_Gold_%26_Diamonds_Logo.svg/2560px-Malabar_Gold_%26_Diamonds_Logo.svg.png', url: '/category/gold-schemes/malabar-gold' },
      { name: 'Kalyan Jewellers', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Kalyan_Jewellers_Logo.svg/2560px-Kalyan_Jewellers_Logo.svg.png', url: '/category/gold-schemes/kalyan-jewellers' },
      { name: 'BlueStone', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/BlueStone_Logo.svg/2560px-BlueStone_Logo.svg.png', url: '/category/gold-schemes/bluestone' },
      { name: 'Tanishq', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Tanishq_Logo.svg/2560px-Tanishq_Logo.svg.png', url: '/category/gold-schemes/tanishq' },
      { name: 'Lalitha Jewellery', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Lalitha_Jewellery_Logo.svg/2560px-Lalitha_Jewellery_Logo.svg.png', url: '/category/gold-schemes/lalitha-jewellery' }
    ]
  },
  { 
    name: 'Mutual Funds', 
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    brands: [
      { name: 'HDFC AMC', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png', url: '/category/mutual-funds/hdfc-amc' },
      { name: 'ICICI Prudential', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png', url: '/category/mutual-funds/icici-prudential' },
      { name: 'SBI Mutual Fund', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/1200px-State_Bank_of_India_logo.svg.png', url: '/category/mutual-funds/sbi-mutual-fund' },
      { name: 'Axis Mutual Fund', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Axis_Bank_logo.svg/1200px-Axis_Bank_logo.svg.png', url: '/category/mutual-funds/axis-mutual-fund' },
      { name: 'Aditya Birla Sun Life', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Aditya_Birla_Group_Logo.svg/1200px-Aditya_Birla_Group_Logo.svg.png', url: '/category/mutual-funds/aditya-birla-sun-life' }
    ]
  },
  { 
    name: 'FD Rates', 
    image: 'https://images.unsplash.com/photo-1621981386829-9b458a2cddde?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    brands: [
      { name: 'SBI', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/1200px-State_Bank_of_India_logo.svg.png', url: '/category/fd-rates/sbi' },
      { name: 'HDFC Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png', url: '/category/fd-rates/hdfc-bank' },
      { name: 'ICICI Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png', url: '/category/fd-rates/icici-bank' },
      { name: 'Axis Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Axis_Bank_logo.svg/1200px-Axis_Bank_logo.svg.png', url: '/category/fd-rates/axis-bank' },
      { name: 'Kotak Mahindra Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Kotak_Mahindra_Bank_logo.svg/2560px-Kotak_Mahindra_Bank_logo.svg.png', url: '/category/fd-rates/kotak-mahindra-bank' }
    ]
  },
  { 
    name: 'Finance Plans', 
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    brands: [
      { name: 'Bajaj Finserv', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Bajaj_Finserv_Logo.svg/2560px-Bajaj_Finserv_Logo.svg.png', url: '/category/finance-plans/bajaj-finserv' },
      { name: 'HDFC Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png', url: '/category/finance-plans/hdfc-bank' },
      { name: 'ICICI Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png', url: '/category/finance-plans/icici-bank' },
      { name: 'Tata Capital', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/2560px-Tata_logo.svg.png', url: '/category/finance-plans/tata-capital' },
      { name: 'Mahindra Finance', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Mahindra_and_Mahindra_Logo.svg/2560px-Mahindra_and_Mahindra_Logo.svg.png', url: '/category/finance-plans/mahindra-finance' }
    ]
  },
];
