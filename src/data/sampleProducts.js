export const sampleProducts = [
  {
    id: 1,
    name: "iPhone 13",
    description: "Latest Apple smartphone with A15 Bionic chip",
    price: 79900,
    image_url: "https://example.com/iphone13.jpg",
    processor: "A15 Bionic",
    capacity: "128GB",
    display_size: "6.1 inches",
    operating_system: "iOS 15",
    sellers: [
      { name: "Amazon", logo: "https://example.com/amazon-logo.png", price: 79900, in_stock: true },
      { name: "Flipkart", logo: "https://example.com/flipkart-logo.png", price: 79999, in_stock: true },
      { name: "Croma", logo: "https://example.com/croma-logo.png", price: 80000, in_stock: false },
    ]
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    description: "Flagship Android smartphone with 5G capability",
    price: 69999,
    image_url: "https://example.com/galaxys21.jpg",
    processor: "Exynos 2100",
    capacity: "256GB",
    display_size: "6.2 inches",
    operating_system: "Android 11",
    sellers: [
      { name: "Amazon", logo: "https://example.com/amazon-logo.png", price: 69999, in_stock: true },
      { name: "Flipkart", logo: "https://example.com/flipkart-logo.png", price: 70000, in_stock: true },
      { name: "Samsung Shop", logo: "https://example.com/samsung-logo.png", price: 69999, in_stock: true },
    ]
  },
  {
    id: 3,
    name: "OnePlus 9 Pro",
    description: "Premium Android phone with Hasselblad camera",
    price: 64999,
    image_url: "https://example.com/oneplus9pro.jpg",
    processor: "Snapdragon 888",
    capacity: "128GB",
    display_size: "6.7 inches",
    operating_system: "OxygenOS 11",
    sellers: [
      { name: "Amazon", logo: "https://example.com/amazon-logo.png", price: 64999, in_stock: true },
      { name: "Flipkart", logo: "https://example.com/flipkart-logo.png", price: 65000, in_stock: true },
      { name: "OnePlus Store", logo: "https://example.com/oneplus-logo.png", price: 64999, in_stock: true },
    ]
  },
];