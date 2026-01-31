'use client';

import { useState, FormEvent } from 'react';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';
import { useLanguage } from '@/contexts/languageContext';
import { getTranslation } from '@/utils/translations';

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { language } = useLanguage();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim()) {
      // In a real app, you would process the message here
      // For now we just clear the input
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-indigo-600 text-white"
      >
        {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-indigo-600 text-white px-4 py-3 flex items-center justify-between">
            <h3 className="font-medium">{getTranslation(language, 'chatTitle')}</h3>
            <button onClick={() => setIsOpen(false)}>
              <FiX size={20} />
            </button>
          </div>

          <div className="p-4 h-64 overflow-y-auto">
            <div className="mb-3">
              <div className="bg-gray-200 text-gray-800 p-3 rounded-lg rounded-bl-none inline-block">
                {getTranslation(language, 'chatWelcome')}
              </div>
            </div>
          </div>

          <form 
            onSubmit={handleSubmit} 
            className="border-t border-gray-200 p-3 flex"
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={getTranslation(language, 'chatPlaceholder')}
              className="flex-1 border border-gray-300 rounded-l-md px-3 py-2"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-r-md"
            >
              <FiSend />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}