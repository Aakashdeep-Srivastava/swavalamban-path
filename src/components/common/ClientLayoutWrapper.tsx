'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the SmartAssistant with client-side only rendering
const SmartAssistant = dynamic(() => import('@/components/common/SmartAssistant'), {
  ssr: false,
});

export default function ClientLayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <SmartAssistant />
    </>
  );
}