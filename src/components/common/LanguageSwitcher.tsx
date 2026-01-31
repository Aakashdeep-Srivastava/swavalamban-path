'use client';

import { useState, useEffect, useRef } from 'react';
import { FiGlobe } from 'react-icons/fi';
import { useLanguage } from '@/contexts/languageContext';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Language options with their display names
  const languages = [
    'English',
    'हिंदी', // Hindi
    'தமிழ்', // Tamil
    'తెలుగు', // Telugu
    'বাংলা', // Bengali
    'मराठी', // Marathi
    'ગુજરાતી', // Gujarati
    'ಕನ್ನಡ', // Kannada
    'മലയാളം', // Malayalam
    'ਪੰਜਾਬੀ' // Punjabi
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-white"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <FiGlobe className="h-5 w-5 mr-1" />
        <span className="hidden md:inline">{language}</span>
        <span className="inline md:hidden">
          {language === 'English' ? 'EN' : language.charAt(0) + language.charAt(1)}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setLanguage(lang);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  language === lang
                    ? 'bg-indigo-100 text-indigo-900 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                role="menuitem"
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}