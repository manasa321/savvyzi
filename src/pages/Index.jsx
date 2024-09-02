import ProductComparison from '../components/ProductComparison';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Product Price Comparison</h1>
        <ProductComparison />
      </div>
    </div>
  );
};

export default Index;