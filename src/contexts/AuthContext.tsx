'use client';

import { createContext, useState, useContext, useEffect } from 'react';
import { users } from '@/data/users';

// Create authentication context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('swavalambanUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = (email, password) => {
    // Find user by email and password (in a real app, this would be an API call)
    const foundUser = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (foundUser) {
      // Remove password from user object before storing
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('swavalambanUser', JSON.stringify(userWithoutPassword));
      return { success: true, user: userWithoutPassword };
    }

    return { success: false, message: 'Invalid email or password' };
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('swavalambanUser');
  };

  // Register function (in a real app, this would create a new user)
  const register = (userData) => {
    // Check if email already exists
    const emailExists = users.some(
      (u) => u.email.toLowerCase() === userData.email.toLowerCase()
    );

    if (emailExists) {
      return { success: false, message: 'Email already registered' };
    }

    // In a real app, this would create a new user in the database
    // Here we're just simulating a successful registration
    return { success: true, message: 'Registration successful! Please login.' };
  };

  const value = {
    user,
    login,
    logout,
    register,
    isAuthenticated: !!user,
    isLoading: loading,
    isEntrepreneur: user?.role === 'entrepreneur',
    isMentor: user?.role === 'mentor'
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};