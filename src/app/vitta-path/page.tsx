'use client';

import { useState } from 'react';
import Link from 'next/link';
//import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter, FiDollarSign, FiTrendingUp, FiCalendar, FiFileText, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { financialResources } from '@/data/financial-resources';
import { workshops } from '@/data/workshops';
import PageLayout from '@/components/common/PageLayout';

export default function VittaPath() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Filter financial resources based on search term and category
  const filteredResources = financialResources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'loan', name: 'Loans' },
    { id: 'grant', name: 'Grants' },
    { id: 'investment', name: 'Investments' }
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
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Vitta Path: Financial Resources
            </h1>
            <p className="mt-4 text-xl text-red-100 max-w-3xl mx-auto">
              Access loans, grants, and investment opportunities tailored for women entrepreneurs, along with financial literacy resources.
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
                <FiDollarSign className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Funding Options</h3>
                <p className="mt-2 text-gray-600">
                  Explore loans, grants, and investment opportunities specifically for women entrepreneurs.
                </p>
                <Link 
                  href="#funding-options" 
                  className="mt-3 inline-flex items-center text-red-600 hover:text-red-800"
                >
                  View funding options <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start space-x-4"
              variants={fadeIn}
            >
              <div className="flex-shrink-0">
                <FiCalendar className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Financial Workshops</h3>
                <p className="mt-2 text-gray-600">
                  Attend workshops to enhance your financial literacy and business management skills.
                </p>
                <Link 
                  href="#workshops" 
                  className="mt-3 inline-flex items-center text-red-600 hover:text-red-800"
                >
                  Browse workshops <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start space-x-4"
              variants={fadeIn}
            >
              <div className="flex-shrink-0">
                <FiTrendingUp className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Credit Assessment</h3>
                <p className="mt-2 text-gray-600">
                  Get your business credit-readiness assessed and receive improvement recommendations.
                </p>
                <Link 
                  href="/vitta-path/credit-assessment" 
                  className="mt-3 inline-flex items-center text-red-600 hover:text-red-800"
                >
                  Take assessment <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Funding Options Section */}
      <section id="funding-options" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Funding Options</h2>
            
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="md:w-2/3 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                  placeholder="Search by title, provider, or description"
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
                    className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
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

          {/* Financial Resources Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <motion.div 
                  key={resource.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  variants={fadeIn}
                >
                  <div className="h-40 bg-gray-300 relative">
                    <div className="h-full w-full flex items-center justify-center bg-red-100">
                      <FiDollarSign className="h-10 w-10 text-red-600" />
                    </div>
                    <div className="absolute top-2 right-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        resource.category === 'loan' 
                          ? 'bg-blue-100 text-blue-800' 
                          : resource.category === 'grant'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-purple-100 text-purple-800'
                      }`}>
                        {resource.category === 'loan' 
                          ? 'Loan' 
                          : resource.category === 'grant'
                            ? 'Grant'
                            : 'Investment'}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{resource.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">Provider: {resource.provider}</p>
                    <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                    
                    {resource.category === 'loan' && (
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-700">Interest Rate: <span className="text-gray-900">{resource.interestRate}</span></p>
                      </div>
                    )}
                    
                    {resource.category === 'grant' && resource.grantAmount && (
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-700">Grant Amount: <span className="text-gray-900">{resource.grantAmount}</span></p>
                      </div>
                    )}
                    
                    {resource.category === 'investment' && resource.investmentRange && (
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-700">Investment Range: <span className="text-gray-900">{resource.investmentRange}</span></p>
                      </div>
                    )}
                    
                    <div className="mb-3">
                      <p className="text-sm font-medium text-gray-700 mb-1">Eligibility:</p>
                      <p className="text-sm text-gray-600">{resource.eligibility}</p>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-1">Key Benefits:</p>
                      <ul className="space-y-1">
                        {resource.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <FiCheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-4 flex justify-between">
                      <Link
                        href={`/vitta-path/${resource.id}`}
                        className="text-red-600 hover:text-red-800 text-sm font-medium"
                      >
                        View details
                      </Link>
                      <Link
                        href={resource.applicationLink || "#"}
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                      >
                        Apply now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <FiDollarSign className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">No resources found</h3>
                <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Financial Literacy Workshops</h2>
            <p className="text-gray-600 max-w-3xl">
              Enhance your financial knowledge and business management skills with our expert-led workshops.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {workshops.slice(0, 4).map((workshop) => (
              <motion.div 
                key={workshop.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
                variants={fadeIn}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium text-gray-900">{workshop.title}</h3>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                      {workshop.format}
                    </span>
                  </div>
                  
                  <div className="flex items-center mb-4 text-sm text-gray-600">
                    <FiCalendar className="mr-2 h-4 w-4 text-gray-400" />
                    {workshop.date}, {workshop.time}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{workshop.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Key Topics:</p>
                    <ul className="space-y-1">
                      {workshop.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <FiCheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <FiFileText className="mr-2 h-4 w-4 text-gray-400" />
                    Facilitator: {workshop.facilitator}
                  </div>
                  
                  <div className="mt-4">
                    <Link
                      href={workshop.registrationLink || "#"}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-8 text-center">
            <Link
              href="/vitta-path/workshops"
              className="inline-flex items-center text-red-600 hover:text-red-800 font-medium"
            >
              View all workshops <FiArrowRight className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Credit Assessment Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="md:grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Check Your Financial Readiness
                </h2>
                <p className="text-gray-600 mb-6">
                  Not sure which financial option is right for you? Take our credit assessment to understand your financial readiness and get personalized recommendations.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FiCheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span className="text-gray-700">Evaluate your business credit-worthiness</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span className="text-gray-700">Identify areas for improvement</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span className="text-gray-700">Get matched with suitable funding options</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span className="text-gray-700">Receive a personalized improvement plan</span>
                  </li>
                </ul>
                <Link
                  href="/vitta-path/credit-assessment"
                  className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
                >
                  Take Credit Assessment
                </Link>
              </div>
              <div className="bg-red-100 p-8 md:p-12 flex items-center justify-center">
                <div className="max-w-md">
                  <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Sample Credit Score</h3>
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200">
                            Your Score
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-red-600">
                            72/100
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
                        <div style={{ width: "72%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-600"></div>
                      </div>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <FiCheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Good cash flow management
                      </li>
                      <li className="flex items-center">
                        <FiCheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Clean credit history
                      </li>
                      <li className="flex items-center text-gray-400">
                        <FiCheckCircle className="h-4 w-4 text-gray-300 mr-2" />
                        Improve financial documentation
                      </li>
                      <li className="flex items-center text-gray-400">
                        <FiCheckCircle className="h-4 w-4 text-gray-300 mr-2" />
                        Diversify revenue streams
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Personalized Financial Guidance?
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              Our financial experts can help you navigate the complex world of business finance and select the most suitable options for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/vitta-path/consultation"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
              >
                Book a Consultation
              </Link>
              <Link
                href="/margdarshan"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Connect with a Financial Mentor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}