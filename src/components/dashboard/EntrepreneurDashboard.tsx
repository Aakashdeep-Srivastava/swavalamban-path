'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCalendar, FiUser, FiBookmark, FiAward, FiCheckCircle, FiTrendingUp, FiBarChart2, FiDollarSign } from 'react-icons/fi';
import { learningModules } from '@/data/courses';
import { governmentSchemes } from '@/data/schemes';
import { mentors } from '@/data/mentors';
interface User {
  name: string;
  image?: string;
  business?: {
    name: string;
    location: string;
  };
}

const EntrepreneurDashboard = ({ user }: { user: User }) => {
  const [progressData, setProgressData] = useState({
    coursesInProgress: 0,
    coursesCompleted: 0,
    schemesApplied: 0,
    mentorSessions: 0,
  });

  interface Course {
    id: number;
    title: string;
    description: string;
    duration: string;
    level: string;
    modules: string[];
    languages: string[];
    completion: string;
    progress: number;
    points: number;
    image: string;
  }

  interface Scheme {
    id: number;
    title: string;
    shortDescription: string;
    eligibility: string;
    applicationProcess: string[];
    benefits: string;
    requiredDocuments: string[];
    category: string;
    image: string;
  }

  interface Mentor {
    id: number;
    name: string;
    title: string;
    expertise: string[];
    bio: string;
    availability: string;
    languages: string[];
    rating: number;
    reviews: number;
    image: string;
    category: string;
  }

  interface Mentorship {
    id: number;
    mentor: string;
    date: string;
    topic: string;
    status: string;
  }

  const [recommendedCourses, setRecommendedCourses] = useState<Course[]>([]);
  const [recommendedSchemes, setRecommendedSchemes] = useState<Scheme[]>([]);
  const [recommendedMentors, setRecommendedMentors] = useState<Mentor[]>([]);
  const [upcomingMentorships, setUpcomingMentorships] = useState<Mentorship[]>([]);
  const financialHealth = {
    score: 72,
    insights: [
      'Good cash flow management',
      'Consider additional funding options',
      'Update financial documentation'
    ]
  };

  useEffect(() => {
    // In a real app, these would come from API calls
    // Here we're simulating with dummy data
    
    // Get some random courses
    const shuffledCourses = [...learningModules].sort(() => 0.5 - Math.random());
    setRecommendedCourses(shuffledCourses.slice(0, 3));
    
    // Get some random schemes
    const shuffledSchemes = [...governmentSchemes].sort(() => 0.5 - Math.random());
    setRecommendedSchemes(shuffledSchemes.slice(0, 2));
    
    // Get some random mentors
    const shuffledMentors = [...mentors].sort(() => 0.5 - Math.random());
    setRecommendedMentors(shuffledMentors.slice(0, 3));
    
    // Mock upcoming mentorships
    setUpcomingMentorships([
      {
        id: 1,
        mentor: 'Dr. Priya Sharma',
        date: '2025-04-10T14:00:00',
        topic: 'Business Strategy Review',
        status: 'confirmed'
      },
      {
        id: 2,
        mentor: 'Anita Desai',
        date: '2025-04-15T10:30:00',
        topic: 'Export Market Opportunities',
        status: 'pending'
      }
    ]);
    
    // Mock progress data
    setProgressData({
      coursesInProgress: 2,
      coursesCompleted: 1,
      schemesApplied: 3,
      mentorSessions: 5,
    });
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  // Format date function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-6 mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:flex md:items-center">
              <div className="flex-shrink-0">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full"
                  />
                ) : (
                  <div className="h-16 w-16 rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                    {user.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
                <p className="text-gray-600">
                  {user.business ? `${user.business.name} | ${user.business.location}` : 'Entrepreneur'}
                </p>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
              <Link
                href="/profile"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <FiUser className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
                View Profile
              </Link>
              <Link
                href="/gyanvardhan"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <FiBookmark className="-ml-1 mr-2 h-5 w-5" />
                Continue Learning
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <motion.div 
            className="bg-white rounded-lg shadow p-6"
            variants={fadeIn}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-indigo-100 rounded-full p-3">
                <FiBookmark className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">Courses in Progress</p>
                <h3 className="text-lg font-semibold text-gray-900">{progressData.coursesInProgress}</h3>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow p-6"
            variants={fadeIn}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-green-100 rounded-full p-3">
                <FiCheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">Courses Completed</p>
                <h3 className="text-lg font-semibold text-gray-900">{progressData.coursesCompleted}</h3>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow p-6"
            variants={fadeIn}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-purple-100 rounded-full p-3">
                <FiAward className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">Schemes Applied</p>
                <h3 className="text-lg font-semibold text-gray-900">{progressData.schemesApplied}</h3>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow p-6"
            variants={fadeIn}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                <FiUser className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">Mentor Sessions</p>
                <h3 className="text-lg font-semibold text-gray-900">{progressData.mentorSessions}</h3>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Mentorships */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Mentorship Sessions</h2>
                {upcomingMentorships.length > 0 ? (
                  <div className="divide-y divide-gray-200">
                    {upcomingMentorships.map((session) => (
                      <div key={session.id} className="py-4 flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="bg-indigo-100 rounded-full p-2">
                            <FiCalendar className="h-5 w-5 text-indigo-600" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base font-medium text-gray-900">{session.topic}</h4>
                          <p className="text-sm text-gray-600">
                            With <span className="font-medium">{session.mentor}</span>
                          </p>
                          <p className="text-sm text-gray-500 mt-1">{formatDate(session.date)}</p>
                        </div>
                        <div>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            session.status === 'confirmed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {session.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No upcoming mentorship sessions.</p>
                )}
                <div className="mt-4">
                  <Link
                    href="/margdarshan"
                    className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                  >
                    Schedule a new session →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Recommended Schemes */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommended Government Schemes</h2>
                {recommendedSchemes.map((scheme) => (
                  <div key={scheme.id} className="mb-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <h3 className="font-medium text-gray-900">{scheme.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{scheme.shortDescription}</p>
                    <div className="mt-2 flex justify-between items-center">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        scheme.category === 'finance' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                        {scheme.category === 'finance' ? 'Financial Support' : 'Subsidy'}
                      </span>
                      <Link
                        href={`/niti-sankalan/${scheme.id}`}
                        className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                      >
                        Check Eligibility →
                      </Link>
                    </div>
                  </div>
                ))}
                <div className="mt-4">
                  <Link
                    href="/niti-sankalan"
                    className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                  >
                    View all schemes →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Recommended Courses */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommended Learning Modules</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recommendedCourses.map((course) => (
                    <div key={course.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md">
                      <div className="h-32 bg-gray-300 relative">
                        {course.image ? (
                          <Image 
                            src={course.image} 
                            alt={course.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="h-full flex items-center justify-center bg-indigo-100">
                            <FiBookmark className="h-10 w-10 text-indigo-600" />
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-gray-900">{course.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{course.duration} • {course.level}</p>
                        <div className="mt-2 flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="text-sm text-gray-500">Progress:</span>
                            <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-indigo-600 h-2 rounded-full" 
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>
                          <Link
                            href={`/gyanvardhan/${course.id}`}
                            className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                          >
                            Start →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    href="/gyanvardhan"
                    className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                  >
                    Explore all courses →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-6">
            {/* Financial Health */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FiBarChart2 className="mr-2 h-5 w-5 text-indigo-600" />
                  Financial Health
                </h2>
                <div className="flex items-center mb-4">
                  <div className="w-24 h-24 relative">
                    <svg viewBox="0 0 36 36" className="w-24 h-24">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E2E8F0"
                        strokeWidth="3"
                        strokeDasharray="100, 100"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke={`${financialHealth.score > 70 ? '#48BB78' : financialHealth.score > 40 ? '#ED8936' : '#E53E3E'}`}
                        strokeWidth="3"
                        strokeDasharray={`${financialHealth.score}, 100`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold">{financialHealth.score}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">Financial Score</h4>
                    <p className="text-sm text-gray-600">
                      {financialHealth.score > 70 
                        ? 'Good standing' 
                        : financialHealth.score > 40 
                          ? 'Needs attention' 
                          : 'Requires improvement'}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Insights:</h4>
                  <ul className="space-y-2">
                    {financialHealth.insights.map((insight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 text-indigo-500">•</span>
                        <span className="ml-2 text-sm text-gray-600">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <Link
                    href="/vitta-path/assessment"
                    className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                  >
                    Get detailed assessment →
                  </Link>
                </div>
              </div>
            </motion.div>
            
            {/* Recommended Mentors */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FiUser className="mr-2 h-5 w-5 text-indigo-600" />
                  Mentors for You
                </h2>
                <div className="space-y-4">
                  {recommendedMentors.map((mentor) => (
                    <div key={mentor.id} className="flex items-start space-x-3 pb-3 border-b border-gray-200 last:border-0">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        {mentor.image ? (
                          <Image 
                            src={mentor.image} 
                            alt={mentor.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        ) : (
                          <span className="text-indigo-600 font-medium">{mentor.name.charAt(0)}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900">{mentor.name}</h4>
                        <p className="text-xs text-gray-600 mb-1">{mentor.title}</p>
                        <div className="flex flex-wrap gap-1">
                          {mentor.expertise.slice(0, 2).map((skill, index) => (
                            <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    href="/margdarshan"
                    className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                  >
                    Find more mentors →
                  </Link>
                </div>
              </div>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h2>
                <div className="space-y-2">
                  <Link
                    href="/vitta-path/loans"
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50"
                  >
                    <FiDollarSign className="h-5 w-5 text-indigo-600 mr-3" />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Explore Loan Options</h4>
                      <p className="text-xs text-gray-600">Find financing tailored for your business</p>
                    </div>
                  </Link>
                  <Link
                    href="/gyanvardhan/masterclasses"
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50"
                  >
                    <FiTrendingUp className="h-5 w-5 text-indigo-600 mr-3" />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Masterclasses</h4>
                      <p className="text-xs text-gray-600">Learn from successful entrepreneurs</p>
                    </div>
                  </Link>
                  <Link
                    href="/niti-sankalan/eligibility-checker"
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50"
                  >
                    <FiAward className="h-5 w-5 text-indigo-600 mr-3" />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Eligibility Checker</h4>
                      <p className="text-xs text-gray-600">Find government schemes you qualify for</p>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntrepreneurDashboard;