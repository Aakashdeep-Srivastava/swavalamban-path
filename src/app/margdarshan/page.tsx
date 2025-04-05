'use client';

import { useState } from 'react';
import Link from 'next/link';
//import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter, FiUsers, FiCalendar, FiMessageSquare, FiStar, FiArrowRight } from 'react-icons/fi';
import { mentors } from '@/data/mentors';
import PageLayout from '@/components/common/PageLayout';

export default function Margdarshan() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  
  // Filter mentors based on search term, category, and language
  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch = 
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      mentor.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
      mentor.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || mentor.category === selectedCategory;
    const matchesLanguage = selectedLanguage === 'all' || mentor.languages.includes(selectedLanguage);
    
    return matchesSearch && matchesCategory && matchesLanguage;
  });
  
  // Get unique categories and languages for filters
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'academic', name: 'Academic Mentors' },
    { id: 'entrepreneur', name: 'Entrepreneur Mentors' },
    { id: 'corporate', name: 'Corporate Mentors' }
  ];
  
  // Get all unique languages from mentors
  const allLanguages = mentors.flatMap(mentor => mentor.languages);
  const uniqueLanguages = ['all', ...new Set(allLanguages)];
  
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
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Margdarshan: Expert Mentorship
            </h1>
            <p className="mt-4 text-xl text-green-100 max-w-3xl mx-auto">
              Connect with experienced mentors from academia, industry, and successful entrepreneurs who can guide your business journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div 
              className="flex items-start space-x-4"
              variants={fadeIn}
            >
              <div className="flex-shrink-0">
                <FiUsers className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Diverse Mentors</h3>
                <p className="mt-2 text-gray-600">
                  Access mentors from various backgrounds - academia, corporate, and successful entrepreneurs.
                </p>
                <Link 
                  href="#find-mentors" 
                  className="mt-3 inline-flex items-center text-green-600 hover:text-green-800"
                >
                  Find a mentor <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start space-x-4"
              variants={fadeIn}
            >
              <div className="flex-shrink-0">
                <FiCalendar className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Flexible Sessions</h3>
                <p className="mt-2 text-gray-600">
                  Schedule one-on-one sessions that fit your calendar and learning needs.
                </p>
                <Link 
                  href="/margdarshan/schedule" 
                  className="mt-3 inline-flex items-center text-green-600 hover:text-green-800"
                >
                  Book a session <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start space-x-4"
              variants={fadeIn}
            >
              <div className="flex-shrink-0">
                <FiMessageSquare className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Personalized Guidance</h3>
                <p className="mt-2 text-gray-600">
                  Get advice tailored to your specific business challenges and growth stage.
                </p>
                <Link 
                  href="/margdarshan/how-it-works" 
                  className="mt-3 inline-flex items-center text-green-600 hover:text-green-800"
                >
                  How it works <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Find a Mentor Section */}
      <section id="find-mentors" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Find a Mentor</h2>
            
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="md:w-1/2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Search by name, expertise, or organization"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="md:w-1/4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiFilter className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="md:w-1/4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiFilter className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                  >
                    {uniqueLanguages.map((language) => (
                      <option key={language} value={language}>
                        {language === 'all' ? 'All Languages' : language}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mentors Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {filteredMentors.length > 0 ? (
              filteredMentors.map((mentor) => (
                <motion.div 
                  key={mentor.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  variants={fadeIn}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-16 w-16 rounded-full bg-green-100 overflow-hidden flex-shrink-0">
                        {mentor.image ? (
                          <div className="h-full w-full flex items-center justify-center bg-green-100 text-green-600 text-2xl font-bold">
                            {mentor.name.charAt(0)}
                          </div>
                        ) : (
                          <div className="h-full w-full flex items-center justify-center bg-green-100 text-green-600 text-2xl font-bold">
                            {mentor.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
                        <p className="text-sm text-gray-600">{mentor.title}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-700">{mentor.bio}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {mentor.expertise.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <FiStar className="text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{mentor.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">({mentor.reviews} reviews)</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        {mentor.availability}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-2 mb-4">
                      {mentor.languages.map((language, idx) => (
                        <span 
                          key={idx} 
                          className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-4">
                      <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
                        Book a Session
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <FiUsers className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">No mentors found</h3>
                <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-green-100 rounded-lg shadow-xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="px-6 py-12 md:p-12 md:flex md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Ready to accelerate your growth?
                </h2>
                <p className="mt-3 text-lg text-gray-600">
                  Connect with a mentor today and take your business to the next level.
                </p>
              </div>
              <div className="mt-8 md:mt-0 md:ml-8">
                <Link 
                  href="#find-mentors" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  Find a Mentor Now
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}