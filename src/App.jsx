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
import Footer from "./components/Footer";

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