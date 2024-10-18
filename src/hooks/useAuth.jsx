import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, otp) => {
    // TODO: Implement actual login logic
    setUser({ name: 'John Doe', email, mobile: '1234567890' });
  };

  const signup = async (name, email, mobile, otp) => {
    // TODO: Implement actual signup logic
    setUser({ name, email, mobile });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};