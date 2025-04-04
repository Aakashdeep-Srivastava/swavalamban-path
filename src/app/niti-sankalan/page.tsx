'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter, FiArrowRight, FiCheckCircle, FiFileText, FiHelpCircle } from 'react-icons/fi';
import { governmentSchemes } from '@/data/schemes';
import PageLayout from '@/components/common/PageLayout';

export default function NitiSankalan() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Filter schemes based on search term and category
  const filteredSchemes = governmentSchemes.filter((scheme) => {
    const matchesSearch = scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const categories = [
    { id: 'all', name: 'All Schemes' },
    { id: 'finance', name: 'Financial Support' },
    { id: 'subsidy', name: 'Subsidies' },
    { id: 'training', name: 'Training & Development' }
  ];

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
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Niti Sankalan: Government Schemes for Women Entrepreneurs
            </h1>
            <p className="mt-4 text-xl text-purple-100 max-w-3xl mx-auto">
              Access government-backed schemes and programs designed to support and empower women entrepreneurs across India.
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
                <FiCheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Eligibility Checker</h3>
                <p className="mt-2 text-gray-600">
                  Find out which government schemes you qualify for with our AI-powered eligibility tool.
                </p>
                <Link 
                  href="/niti-sankalan/eligibility-checker" 
                  className="mt-3 inline-flex items-center text-purple-600 hover:text-purple-800"
                >
                  Check eligibility <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start space-x-4"
              variants={fadeIn}
            >
              <div className="flex-shrink-0">
                <FiFileText className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Application Guides</h3>
                <p className="mt-2 text-gray-600">
                  Step-by-step guides to help you navigate the application process for different schemes.
                </p>
                <Link 
                  href="/niti-sankalan/application-guides" 
                  className="mt-3 inline-flex items-center text-purple-600 hover:text-purple-800"
                >
                  View guides <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start space-x-4"
              variants={fadeIn}
            >
              <div className="flex-shrink-0">
                <FiHelpCircle className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Expert Assistance</h3>
                <p className="mt-2 text-gray-600">
                  Connect with experts who can help you with scheme selection and application processes.
                </p>
                <Link 
                  href="/niti-sankalan/expert-assistance" 
                  className="mt-3 inline-flex items-center text-purple-600 hover:text-purple-800"
                >
                  Get assistance <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Schemes Listing Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <motion.div 
            className="mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-2/3 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Search for schemes by name or description"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiFilter className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
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
            </div>
          </motion.div>

          {/* Schemes Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {filteredSchemes.length > 0 ? (
              filteredSchemes.map((scheme) => (
                <motion.div 
                  key={scheme.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  variants={fadeIn}
                >
                  <div className="h-40 bg-gray-300 relative">
                    {scheme.image ? (
                      <Image 
                        src={scheme.image} 
                        alt={scheme.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center bg-purple-100">
                        <span className="text-purple-600 font-medium text-xl">{scheme.title.charAt(0)}</span>
                      </div>
                    )}
                    <div className="absolute top-2 right-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        scheme.category === 'finance' 
                          ? 'bg-green-100 text-green-800' 
                          : scheme.category === 'subsidy'
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-blue-100 text-blue-800'
                      }`}>
                        {scheme.category === 'finance' 
                          ? 'Financial Support' 
                          : scheme.category === 'subsidy'
                            ? 'Subsidy'
                            : 'Training & Development'}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{scheme.title}</h3>
                    <p className="text-gray-600 mb-4">{scheme.shortDescription}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        Eligibility: {scheme.eligibility.length > 30 
                          ? `${scheme.eligibility.substring(0, 30)}...` 
                          : scheme.eligibility}
                      </span>
                      <Link
                        href={`/niti-sankalan/${scheme.id}`}
                        className="inline-flex items-center text-purple-600 hover:text-purple-800"
                      >
                        Details <FiArrowRight className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <FiSearch className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">No schemes found</h3>
                <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white rounded-lg shadow-xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="px-6 py-12 md:p-12 md:flex md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Not sure which scheme is right for you?
                </h2>
                <p className="mt-3 text-lg text-gray-600">
                  Try our AI-powered eligibility checker to find schemes that match your business profile.
                </p>
              </div>
              <div className="mt-8 md:mt-0 md:ml-8">
                <Link 
                  href="/niti-sankalan/eligibility-checker" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                >
                  Check Eligibility Now
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}