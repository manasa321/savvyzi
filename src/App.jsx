import React from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { AuthProvider } from "./hooks/useAuth";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import SearchResults from "./pages/SearchResults";
import ProductDetail from "./pages/ProductDetail";
import ProductComparison from "./pages/ProductComparison";
import CreditCardSection from "./components/CreditCardSection"; // Import the Credit Card Section
import CreditCardDetail from "./components/CreditCardDetail"; // Import the Credit Card Detail component
import Footer from "./components/Footer";

// Create QueryClient for react-query
const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <BrowserRouter>
              <div className="flex flex-col min-h-screen">
                <div className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/category/:category" element={<CategoryPage />} />
                    <Route path="/category/:category/:subcategory" element={<CategoryPage />} />
                    <Route path="/search" element={<SearchResults />} />
                    <Route path="/product/:productId" element={<ProductDetail />} />
                    <Route path="/compare/:productId" element={<ProductComparison />} />
                    
                    {/* Credit card related routes */}
                    <Route path="/credit-cards" element={<CreditCardSection />} /> {/* Route for the Credit Card section */}
                    <Route path="/credit-card/:id" element={<CreditCardDetail />} /> {/* Route for individual credit card details */}
                  </Routes>
                </div>
                <Footer />
              </div>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
