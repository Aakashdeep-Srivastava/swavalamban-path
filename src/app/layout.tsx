// app/layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/contexts/AuthContext';
import { ReactNode } from 'react';  // Import ReactNode type

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Udyamika - Empowering Women Entrepreneurs',
  description: 'A digital platform that supports women entrepreneurs with resources, mentorship, and funding opportunities.',
};

// Add proper type annotation for the children prop
export default function RootLayout({ 
  children 
}: { 
  children: ReactNode  // This is the proper type for React children
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}