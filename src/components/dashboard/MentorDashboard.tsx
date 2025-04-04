'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
    FiCalendar, 
    FiUser, 
    FiClock, 
    FiMessageSquare, 
    FiClipboard, 
    FiTrendingUp, 
    FiUsers,
    FiBook,  // Add this missing import
    FiFileText, 
    FiAward 
  } from 'react-icons/fi';

const MentorDashboard = ({ user }) => {
  const [upcomingSessions, setUpcomingSessions] = useState([]);
  const [menteeRequests, setMenteeRequests] = useState([]);
  const [stats, setStats] = useState({
    totalSessions: 0,
    totalMentees: 0,
    hoursContributed: 0,
    averageRating: 0,
  });

  useEffect(() => {
    // In a real app, these would come from API calls
    // Here we're simulating with dummy data
    
    // Mock upcoming sessions
    setUpcomingSessions([
      {
        id: 1,
        mentee: 'Kavita Patel',
        menteeImage: '/images/users/kavita.jpg',
        date: '2025-04-10T14:00:00',
        topic: 'Business Strategy Review',
        status: 'confirmed',
        businessType: 'Handicrafts & Textiles'
      },
      {
        id: 2,
        mentee: 'Sunita Sharma',
        menteeImage: null,
        date: '2025-04-12T11:30:00',
        topic: 'Product Pricing Strategy',
        status: 'confirmed',
        businessType: 'Food Products'
      },
      {
        id: 3,
        mentee: 'Meena Singh',
        menteeImage: null,
        date: '2025-04-15T16:00:00',
        topic: 'Business Plan Feedback',
        status: 'pending',
        businessType: 'Tech Startup'
      }
    ]);
    
    // Mock mentee requests
    setMenteeRequests([
      {
        id: 1,
        mentee: 'Priyanka Gupta',
        menteeImage: null,
        requestDate: '2025-04-03T09:45:00',
        topic: 'Market Expansion Strategy',
        message: 'I need guidance on how to expand my business from local to national markets.',
        businessType: 'Organic Food Products'
      },
      {
        id: 2,
        mentee: 'Anjali Desai',
        menteeImage: null,
        requestDate: '2025-04-02T14:20:00',
        topic: 'Funding Options Review',
        message: 'I would like to discuss the best funding options for my growing business.',
        businessType: 'Sustainable Fashion'
      }
    ]);
    
    // Mock stats
    setStats({
      totalSessions: 27,
      totalMentees: 14,
      hoursContributed: 36,
      averageRating: 4.8,
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
  const formatDate = (dateString) => {
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
                  {user.organization ? `${user.organization}` : 'Mentor'}
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
                href="/margdarshan/schedule"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <FiCalendar className="-ml-1 mr-2 h-5 w-5" />
                Update Availability
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
                <FiUsers className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">Total Mentees</p>
                <h3 className="text-lg font-semibold text-gray-900">{stats.totalMentees}</h3>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow p-6"
            variants={fadeIn}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-green-100 rounded-full p-3">
                <FiCalendar className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">Total Sessions</p>
                <h3 className="text-lg font-semibold text-gray-900">{stats.totalSessions}</h3>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow p-6"
            variants={fadeIn}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-purple-100 rounded-full p-3">
                <FiClock className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">Hours Contributed</p>
                <h3 className="text-lg font-semibold text-gray-900">{stats.hoursContributed}</h3>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow p-6"
            variants={fadeIn}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-yellow-100 rounded-full p-3">
                <FiTrendingUp className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-5">
                <p className="text-sm font-medium text-gray-500">Average Rating</p>
                <h3 className="text-lg font-semibold text-gray-900">{stats.averageRating}/5.0</h3>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Sessions */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Mentorship Sessions</h2>
                {upcomingSessions.length > 0 ? (
                  <div className="divide-y divide-gray-200">
                    {upcomingSessions.map((session) => (
                      <div key={session.id} className="py-4 flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          {session.menteeImage ? (
                            <Image
                              src={session.menteeImage}
                              alt={session.mentee}
                              width={40}
                              height={40}
                              className="h-10 w-10 rounded-full"
                            />
                          ) : (
                            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium">
                              {session.mentee.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-medium text-gray-900">{session.topic}</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            <span className="font-medium">{session.mentee}</span> • {session.businessType}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">{formatDate(session.date)}</p>
                        </div>
                        <div className="ml-4 flex flex-col items-end">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            session.status === 'confirmed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {session.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                          </span>
                          <div className="mt-2 flex space-x-2">
                            <Link
                              href={`/margdarshan/sessions/${session.id}`}
                              className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                            >
                              Details
                            </Link>
                            {session.status === 'confirmed' && (
                              <Link
                                href={`/margdarshan/sessions/${session.id}/join`}
                                className="text-green-600 hover:text-green-900 text-sm font-medium"
                              >
                                Join
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No upcoming mentorship sessions.</p>
                )}
                <div className="mt-4 flex justify-between">
                  <Link
                    href="/margdarshan/sessions"
                    className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                  >
                    View all sessions →
                  </Link>
                  <Link
                    href="/margdarshan/calendar"
                    className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                  >
                    View calendar →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Mentee Requests */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Mentorship Requests</h2>
                {menteeRequests.length > 0 ? (
                  <div className="divide-y divide-gray-200">
                    {menteeRequests.map((request) => (
                      <div key={request.id} className="py-4">
                        <div className="flex items-start mb-2">
                          <div className="flex-shrink-0 mr-4">
                            {request.menteeImage ? (
                              <Image
                                src={request.menteeImage}
                                alt={request.mentee}
                                width={40}
                                height={40}
                                className="h-10 w-10 rounded-full"
                              />
                            ) : (
                              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium">
                                {request.mentee.charAt(0)}
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-base font-medium text-gray-900">{request.topic}</h4>
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">{request.mentee}</span> • {request.businessType}
                            </p>
                            <p className="text-sm text-gray-500">{formatDate(request.requestDate)}</p>
                          </div>
                        </div>
                        <div className="pl-14">
                          <p className="text-sm text-gray-600 mb-3">
                            "{request.message}"
                          </p>
                          <div className="flex space-x-3">
                            <button
                              className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                              Accept Request
                            </button>
                            <button
                              className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                            >
                              Suggest Alternative Time
                            </button>
                            <button
                              className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded-md text-red-700 bg-white hover:bg-gray-50"
                            >
                              Decline
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No pending mentorship requests.</p>
                )}
                <div className="mt-4">
                  <Link
                    href="/margdarshan/requests"
                    className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                  >
                    View all requests →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Past Session Notes */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Session Notes</h2>
                <div className="divide-y divide-gray-200">
                  <div className="py-4">
                    <div className="flex items-center mb-2">
                      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium mr-4">
                        K
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-gray-900">Business Model Review</h4>
                        <p className="text-sm text-gray-600">Kavita Patel • April 1, 2025</p>
                      </div>
                    </div>
                    <div className="pl-14">
                      <p className="text-sm text-gray-600">
                        Discussed transition from B2C to B2B model. Key recommendations: Focus on 3 key corporate clients, develop wholesale pricing strategy, create professional catalog.
                      </p>
                      <Link
                        href="/margdarshan/notes/1"
                        className="mt-2 inline-block text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                      >
                        View full notes →
                      </Link>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="flex items-center mb-2">
                      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium mr-4">
                        S
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-gray-900">Digital Marketing Strategy</h4>
                        <p className="text-sm text-gray-600">Sunita Sharma • March 28, 2025</p>
                      </div>
                    </div>
                    <div className="pl-14">
                      <p className="text-sm text-gray-600">
                        Reviewed social media presence. Identified Instagram and YouTube as primary channels. Action items: content calendar, product showcase videos, and influencer partnerships.
                      </p>
                      <Link
                        href="/margdarshan/notes/2"
                        className="mt-2 inline-block text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                      >
                        View full notes →
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href="/margdarshan/notes"
                    className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                  >
                    View all session notes →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-6">
            {/* Your Impact */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FiTrendingUp className="mr-2 h-5 w-5 text-indigo-600" />
                  Your Impact
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2/5">
                      <p className="text-sm text-gray-600">Mentee Businesses</p>
                    </div>
                    <div className="w-3/5">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <p className="text-sm font-medium text-gray-900 mt-1">14 active businesses</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2/5">
                      <p className="text-sm text-gray-600">Revenue Growth</p>
                    </div>
                    <div className="w-3/5">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-green-600 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <p className="text-sm font-medium text-gray-900 mt-1">65% reported growth</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2/5">
                      <p className="text-sm text-gray-600">New Jobs Created</p>
                    </div>
                    <div className="w-3/5">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-purple-600 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                      <p className="text-sm font-medium text-gray-900 mt-1">42 new employment</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="/margdarshan/impact"
                    className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                  >
                    View detailed impact report →
                  </Link>
                </div>
              </div>
            </motion.div>
            
            {/* Resources for Mentors */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FiClipboard className="mr-2 h-5 w-5 text-indigo-600" />
                  Resources for Mentors
                </h2>
                <div className="space-y-3">
                  <Link
                    href="/margdarshan/resources/mentoring-guide"
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex-shrink-0 h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                      <FiBook className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Mentoring Guide</h4>
                      <p className="text-xs text-gray-600">Best practices for effective mentorship</p>
                    </div>
                  </Link>
                  <Link
                    href="/margdarshan/resources/templates"
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex-shrink-0 h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                      <FiFileText className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Session Templates</h4>
                      <p className="text-xs text-gray-600">Frameworks for different types of sessions</p>
                    </div>
                  </Link>
                  <Link
                    href="/margdarshan/resources/industry-insights"
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex-shrink-0 h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                      <FiTrendingUp className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Industry Insights</h4>
                      <p className="text-xs text-gray-600">Latest trends and market research</p>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
            
            {/* Community */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FiUsers className="mr-2 h-5 w-5 text-indigo-600" />
                  Mentor Community
                </h2>
                <div className="space-y-3">
                  <Link
                    href="/margdarshan/community/events"
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex-shrink-0 h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                      <FiCalendar className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Upcoming Events</h4>
                      <p className="text-xs text-gray-600">Workshops and networking opportunities</p>
                    </div>
                  </Link>
                  <Link
                    href="/margdarshan/community/forum"
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex-shrink-0 h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                      <FiMessageSquare className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Mentor Forum</h4>
                      <p className="text-xs text-gray-600">Connect with other mentors</p>
                    </div>
                  </Link>
                  <Link
                    href="/margdarshan/community/success-stories"
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex-shrink-0 h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                      <FiAward className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Success Stories</h4>
                      <p className="text-xs text-gray-600">Impact stories from mentees</p>
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

export default MentorDashboard;