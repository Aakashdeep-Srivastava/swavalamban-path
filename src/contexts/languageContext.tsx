'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

// Define the context type
type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};

// Create the context with a more explicit approach to avoid "unused variable" warnings
const defaultSetLanguage = () => {
  // This function intentionally left empty
  // It will be replaced by the actual implementation from useState
};

// Initialize with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'English',
  setLanguage: defaultSetLanguage
});

// Provider component for language state
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState('English');
  
  // Create the value object with the actual state and setter
  const contextValue = {
    language,
    setLanguage
  };
  
  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  return useContext(LanguageContext);
}