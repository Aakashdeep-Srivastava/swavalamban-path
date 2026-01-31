import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/contexts/AuthContext';

import { ReactNode } from 'react';
import ClientLayoutWrapper from '@/components/common/ClientLayoutWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Udyamika - Empowering Women Entrepreneurs',
  description: 'A digital platform that supports women entrepreneurs with resources, mentorship, and funding opportunities.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          
            <ClientLayoutWrapper>
              {children}
            </ClientLayoutWrapper>
          
        </AuthProvider>
      </body>
    </html>
  );
}