'use client';

import { createContext, useState, useContext, useEffect, PropsWithChildren } from 'react';
import { users } from '@/data/users';

// Create a comprehensive user type that includes all possible properties
// This will match what your dashboard components expect
type User = {
  id?: number;
  name: string;
  email: string;
  role: string;
  business?: {
    name: string;
    sector: string;
    stage: string;
    founded: string;
    location: string;
  };
  organization?: string;
  expertise?: string[];
  phoneNumber?: string;
  image?: string;
  password?: string;
} | null;

// Create authentication context
const AuthContext = createContext<{
  user: User;
  login: (email: string, password: string) => { success: boolean; user?: User; message?: string };
  logout: () => void;
  register: (userData: { email: string; password: string; name: string; role: string }) => { success: boolean; message: string };
  isAuthenticated: boolean;
  isLoading: boolean;
  isEntrepreneur: boolean;
  isMentor: boolean;
} | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User>(null);
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
  const login = (email: string, password: string) => {
    // Find user by email and password (in a real app, this would be an API call)
    const foundUser = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (foundUser) {
      // Destructure password but don't store it in a variable that we won't use
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword as User);
      localStorage.setItem('swavalambanUser', JSON.stringify(userWithoutPassword));
      return { success: true, user: userWithoutPassword as User };
    }

    return { success: false, message: 'Invalid email or password' };
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('swavalambanUser');
  };

  // Register function
  const register = (userData: { email: string; password: string; name: string; role: string }) => {
    // In a real app, this would create a new user in the database
    // Here we're just simulating a successful registration
    
    // Check if the user's email already exists
    const emailExists = users.some(
      (u) => u.email.toLowerCase() === userData.email.toLowerCase()
    );

    if (emailExists) {
      return { success: false, message: 'Email already registered' };
    }

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