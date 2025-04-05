'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';
import { FiAward, FiBook, FiUsers, FiDollarSign, FiChevronRight } from 'react-icons/fi';
import PageLayout from '@/components/common/PageLayout';

export default function HomePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const features = [
    {
      icon: <FiAward className="h-10 w-10 text-indigo-600" />,
      title: 'Niti Sankalan',
      description: 'Access government schemes and eligibility guidance designed for women entrepreneurs.',
      link: '/niti-sankalan'
    },
    {
      icon: <FiBook className="h-10 w-10 text-indigo-600" />,
      title: 'Gyanvardhan',
      description: 'Learn through interactive modules, masterclasses, and courses in your regional language.',
      link: '/gyanvardhan'
    },
    {
      icon: <FiUsers className="h-10 w-10 text-indigo-600" />,
      title: 'Margdarshan',
      description: 'Connect with university mentors and corporate professionals for guidance.',
      link: '/margdarshan'
    },
    {
      icon: <FiDollarSign className="h-10 w-10 text-indigo-600" />,
      title: 'Vitta Path',
      description: 'Explore financing options, investment resources, and improve financial literacy.',
      link: '/vitta-path'
    }
  ];

  const testimonials = [
    {
      quote: "Udyamika helped me navigate government schemes I didn't even know existed. Now my handicraft business is thriving with the financial support I received.",
      name: "Priya Sharma",
      role: "Founder, Kalakari Crafts",
      location: "Jaipur, Rajasthan"
    },
    {
      quote: "The mentorship I received through this platform was invaluable. My mentor helped me refine my business model and connect with the right investors.",
      name: "Anjali Patel",
      role: "CEO, EcoFriendly Solutions",
      location: "Ahmedabad, Gujarat"
    },
    {
      quote: "The financial literacy workshops completely changed how I manage my business finances. I've improved my cash flow and secured better funding options.",
      name: "Meena Reddy",
      role: "Founder, Organic Harvest",
      location: "Hyderabad, Telangana"
    }
  ];

  return (
    <PageLayout>
    {/* Hero Section with Background Video */}
<section className="relative bg-gradient-to-r from-indigo-900 to-indigo-700 text-white overflow-hidden">
  {/* Background Video */}
  <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
    <video 
      className="absolute inset-0 min-w-full min-h-full object-cover opacity-30"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/videos/Herov.mp4" type="video/mp4" />
      {/* You can add multiple source elements for different video formats */}
    </video>
    {/* Overlay to ensure text remains readable */}
    <div className="absolute inset-0 bg-indigo-900 opacity-60"></div>
  </div>
  
  {/* Content (positioned above the video) */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
    <motion.div 
      className="lg:w-1/2 mb-10 lg:mb-0"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Empowering Women Entrepreneurs Across India
      </h1>
      <p className="mt-4 text-xl text-indigo-100">
        Udyamika provides resources, mentorship, and funding opportunities to help women entrepreneurs turn their vision into reality.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/register" className="btn-primary bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-md font-medium text-lg">
          Join Now
        </Link>
        <Link href="#features" className="btn-secondary bg-transparent border border-white text-white hover:bg-indigo-800 px-6 py-3 rounded-md font-medium text-lg">
          Learn More
        </Link>
      </div>
    </motion.div>
   
  </div>
</section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              How Udyamika Helps You Succeed
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive ecosystem of support for women entrepreneurs at every stage of their journey.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                variants={fadeIn}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link href={feature.link} className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                  Explore <FiChevronRight className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-indigo-200">Women Entrepreneurs</div>
            </motion.div>
            <motion.div variants={fadeIn}>
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-indigo-200">Mentors Available</div>
            </motion.div>
            <motion.div variants={fadeIn}>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-indigo-200">Government Schemes</div>
            </motion.div>
            <motion.div variants={fadeIn}>
              <div className="text-4xl md:text-5xl font-bold mb-2">₹25Cr+</div>
              <div className="text-indigo-200">Funding Facilitated</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Success Stories
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from women entrepreneurs who transformed their businesses with Swavalamban Path.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-md"
                variants={fadeIn}
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="mt-4 text-gray-600 text-sm">{testimonial.location}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-100">
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
                  Ready to start your entrepreneurial journey?
                </h2>
                <p className="mt-3 text-lg text-gray-600">
                  Join Udyamika today and access resources tailored for women entrepreneurs.
                </p>
              </div>
              <div className="mt-8 md:mt-0 flex flex-col md:flex-row md:ml-8 space-y-4 md:space-y-0 md:space-x-4">
                <Link 
                  href="/register" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Join Now
                </Link>
                <Link 
                  href="/login" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}