'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
    FiSearch, 
    FiFilter, 
    FiBook, 
    FiVideo, 
    FiAward, 
    FiArrowRight, 
    FiGlobe, 
    FiTrendingUp // Add this missing import
  } from 'react-icons/fi';
import { learningModules } from '@/data/courses';
import { masterclasses } from '@/data/masterclasses';
import PageLayout from '@/components/common/PageLayout';

export default function Gyanvardhan() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  
  // Filter courses based on search term, level, and language
  const filteredCourses = learningModules.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesLanguage = selectedLanguage === 'all' || course.languages.includes(selectedLanguage);
    
    return matchesSearch && matchesLevel && matchesLanguage;
  });
  
  // Get unique levels and languages for filters
  const levels = ['all', ...new Set(learningModules.map(course => course.level))];
  const languages = ['all', ...new Set(learningModules.flatMap(course => course.languages))];
  
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
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Gyanvardhan: Learning Modules
            </h1>
            <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
              Enhance your entrepreneurial skills with our interactive courses and masterclasses, available in multiple regional languages.
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
                <FiBook className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Interactive Courses</h3>
                <p className="mt-2 text-gray-600">
                  Learn at your own pace with our interactive courses designed for entrepreneurs.
                </p>
                <Link 
                  href="/gyanvardhan/courses" 
                  className="mt-3 inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Browse courses <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start space-x-4"
              variants={fadeIn}
            >
              <div className="flex-shrink-0">
                <FiVideo className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Expert Masterclasses</h3>
                <p className="mt-2 text-gray-600">
                  Watch masterclasses from successful entrepreneurs and industry experts.
                </p>
                <Link 
                  href="/gyanvardhan/masterclasses" 
                  className="mt-3 inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  View masterclasses <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start space-x-4"
              variants={fadeIn}
            >
              <div className="flex-shrink-0">
                <FiGlobe className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Regional Languages</h3>
                <p className="mt-2 text-gray-600">
                  Access content in multiple regional languages for a better learning experience.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {languages.filter(lang => lang !== 'all').map((language) => (
                    <button
                      key={language}
                      onClick={() => setSelectedLanguage(language)}
                      className={`px-2 py-1 text-xs rounded-full ${
                        selectedLanguage === language
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                      }`}
                    >
                      {language}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Masterclasses */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-8 flex justify-between items-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold text-gray-900">Featured Masterclasses</h2>
            <Link
              href="/gyanvardhan/masterclasses"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
            >
              View all <FiArrowRight className="ml-1" />
            </Link>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {masterclasses.slice(0, 4).map((masterclass) => (
              <motion.div 
                key={masterclass.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                variants={fadeIn}
              >
                <div className="h-40 bg-gray-300 relative">
                  {masterclass.thumbnail ? (
                    <Image 
                      src={masterclass.thumbnail} 
                      alt={masterclass.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center bg-blue-100">
                      <FiVideo className="h-10 w-10 text-blue-600" />
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-medium text-gray-900 mb-1">{masterclass.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">By {masterclass.presenter}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {masterclass.duration}
                    </span>
                    <div className="text-xs text-gray-500 flex items-center">
                      <FiGlobe className="mr-1" />
                      {masterclass.languages.length} languages
                    </div>
                  </div>
                  <Link
                    href={`/gyanvardhan/masterclasses/${masterclass.id}`}
                    className="mt-3 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Watch now →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Modules</h2>
            
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="md:w-1/2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search for courses by name or description"
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
                    className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                  >
                    {levels.map((level) => (
                      <option key={level} value={level}>
                        {level === 'all' ? 'All Levels' : level}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="md:w-1/4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiGlobe className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                  >
                    {languages.map((language) => (
                      <option key={language} value={language}>
                        {language === 'all' ? 'All Languages' : language}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Courses Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <motion.div 
                  key={course.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200"
                  variants={fadeIn}
                >
                  <div className="h-40 bg-gray-300 relative">
                    {course.image ? (
                      <Image 
                        src={course.image} 
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center bg-blue-100">
                        <FiBook className="h-10 w-10 text-blue-600" />
                      </div>
                    )}
                    <div className="absolute top-2 right-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        course.level === 'Beginner' 
                          ? 'bg-green-100 text-green-800' 
                          : course.level === 'Intermediate'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-purple-100 text-purple-800'
                      }`}>
                        {course.level}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <FiGlobe className="mr-1" />
                        {course.languages.length} languages
                      </div>
                      <div className="text-sm text-gray-500">
                        {course.duration}
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-500">Progress</span>
                        <span className="text-sm font-medium text-gray-700">{course.completion}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <FiAward className="mr-1" />
                        {course.points} points
                      </div>
                      <Link
                        href={`/gyanvardhan/${course.id}`}
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                      >
                        {course.progress > 0 ? 'Continue' : 'Start'} Learning
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <FiSearch className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">No courses found</h3>
                <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Learning Achievements */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold text-gray-900">Learning Achievements</h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              Track your progress and earn certificates as you complete courses and build your skills.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              variants={fadeIn}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <FiBook className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Learning Tracker</h3>
              <p className="text-gray-600 mb-4">
                Track your progress across all courses and modules.
              </p>
              <Link
                href="/gyanvardhan/tracker"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View your progress →
              </Link>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              variants={fadeIn}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <FiAward className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Certificates</h3>
              <p className="text-gray-600 mb-4">
                Earn certificates for completed courses to showcase your skills.
              </p>
              <Link
                href="/gyanvardhan/certificates"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View your certificates →
              </Link>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              variants={fadeIn}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <FiTrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Skill Assessment</h3>
              <p className="text-gray-600 mb-4">
                Take assessments to identify your strengths and areas for improvement.
              </p>
              <Link
                href="/gyanvardhan/assessments"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Start assessment →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-blue-100 rounded-lg shadow-xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="px-6 py-12 md:p-12 md:flex md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Looking for personalized guidance?
                </h2>
                <p className="mt-3 text-lg text-gray-600">
                  Connect with mentors who can provide tailored advice for your business.
                </p>
              </div>
              <div className="mt-8 md:mt-0 md:ml-8">
                <Link 
                  href="/margdarshan" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Find a Mentor
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}