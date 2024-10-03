import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ProductComparison = () => {
  const { productId } = useParams();

  return (
    <div>
      <Navbar />
      <h1>Product Comparison</h1>
      <p>Comparing product with ID: {productId}</p>
      {/* Add more comparison logic here */}
    </div>
  );
};

export default ProductComparison;