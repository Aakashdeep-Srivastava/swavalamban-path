'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import PageLayout from '@/components/common/PageLayout';
import EntrepreneurDashboard from '@/components/dashboard/EntrepreneurDashboard';
import MentorDashboard from '@/components/dashboard/MentorDashboard';

export default function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <PageLayout>
        <div className="min-h-screen flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
        </div>
      </PageLayout>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <PageLayout>
      {user.role === 'entrepreneur' ? (
        <EntrepreneurDashboard user={user} />
      ) : (
        <MentorDashboard user={user} />
      )}
    </PageLayout>
  );
}