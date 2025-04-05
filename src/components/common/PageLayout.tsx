'use client';

import { ReactNode } from 'react'; // Import ReactNode type
import Navbar from './Navbar';
import Footer from './Footer';

// Add type annotation for the children prop
const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;