import React, { useState } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import SearchResults from "./pages/SearchResults";
import ProductDetail from "./pages/ProductDetail";
import ProductComparison from "./pages/ProductComparison";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]); // This would typically be stored in a database

  const handleLogin = (email, password) => {
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
      setUser(foundUser);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleSignup = (email, password) => {
    if (users.some(u => u.email === email)) {
      alert("User already exists");
    } else {
      const newUser = { email, password };
      setUsers([...users, newUser]);
      setUser(newUser);
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster />
            <BrowserRouter>
              <Navbar user={user} onLogin={handleLogin} onSignup={handleSignup} onLogout={handleLogout} />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/product/:productId" element={<ProductDetail />} />
                <Route path="/compare/:productId" element={<ProductComparison />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;