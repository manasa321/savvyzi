import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './hooks/useAuth';
import Index from './pages/Index';
import SearchResults from './pages/SearchResults';
import ProductDetail from './pages/ProductDetail';
import ProductComparison from './pages/ProductComparison';
import CategoryPage from './pages/CategoryPage';
import ForeignBrandsList from './components/ForeignBrandsList';
import FinanceCategoryPage from './pages/FinanceCategoryPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/compare" element={<ProductComparison />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/category/:category/:subcategory" element={<CategoryPage />} />
            <Route path="/foreign/:category" element={<ForeignBrandsList />} />
            <Route path="/finance/:category" element={<FinanceCategoryPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;