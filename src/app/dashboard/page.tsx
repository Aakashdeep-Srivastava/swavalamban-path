'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import PageLayout from '@/components/common/PageLayout';
import EntrepreneurDashboard from '@/components/dashboard/EntrepreneurDashboard';
import MentorDashboard from '@/components/dashboard/MentorDashboard';
import { users } from '@/data/users'; // Import users data

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

  if (!isAuthenticated || !user) {
    return null;
  }

  // Find the full user data with all properties from the users array
  const fullUserData = users.find(u => u.email === user.email);
  
  // If we can't find the full user data, we'll have an issue, but let's handle that gracefully
  if (!fullUserData) {
    return (
      <PageLayout>
        <div className="min-h-screen flex justify-center items-center">
          <div className="p-4 text-center">
            <p className="text-red-600">User data not found. Please log in again.</p>
            <button 
              onClick={() => router.push('/login')}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md"
            >
              Return to Login
            </button>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {fullUserData.role === 'entrepreneur' ? (
        <EntrepreneurDashboard user={fullUserData} />
      ) : (
        <MentorDashboard user={fullUserData} />
      )}
    </PageLayout>
  );
}