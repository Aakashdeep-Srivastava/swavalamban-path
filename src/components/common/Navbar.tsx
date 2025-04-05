'use client';

import { useState } from 'react';
import Link from 'next/link';
//import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiUser, FiLogOut, FiHome, FiBook, FiUsers, FiDollarSign } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Home', icon: <FiHome className="mr-2" /> },
    { href: '/niti-sankalan', label: 'Niti Sankalan', icon: <FiBook className="mr-2" /> },
    { href: '/gyanvardhan', label: 'Gyanvardhan', icon: <FiBook className="mr-2" /> },
    { href: '/margdarshan', label: 'Margdarshan', icon: <FiUsers className="mr-2" /> },
    { href: '/vitta-path', label: 'Vitta Path', icon: <FiDollarSign className="mr-2" /> },
  ];

  return (
    <nav className="bg-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">Udyamika</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === link.href
                    ? 'bg-indigo-900 text-white'
                    : 'text-indigo-100 hover:bg-indigo-700'
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center">
            {isAuthenticated ? (
              <div className="flex items-center">
                <Link href="/dashboard" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-indigo-100 hover:bg-indigo-700">
                  <FiUser className="mr-2" />
                  {user?.email}
                </Link>
                <button
                  onClick={logout}
                  className="ml-4 flex items-center px-3 py-2 rounded-md text-sm font-medium text-indigo-100 hover:bg-indigo-700"
                >
                  <FiLogOut className="mr-2" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 rounded-md text-sm font-medium text-indigo-300 hover:bg-indigo-700"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-700 focus:outline-none"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? 'bg-indigo-900 text-white'
                    : 'text-indigo-100 hover:bg-indigo-700'
                }`}
                onClick={closeMenu}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-indigo-700">
            {isAuthenticated ? (
              <div className="px-2 space-y-1">
                <Link
                  href="/dashboard"
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium text-indigo-100 hover:bg-indigo-700"
                  onClick={closeMenu}
                >
                  <FiUser className="mr-2" />
                  Profile
                </Link>
                <button
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                  className="flex w-full items-center px-3 py-2 rounded-md text-base font-medium text-indigo-100 hover:bg-indigo-700"
                >
                  <FiLogOut className="mr-2" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="px-2 space-y-1">
                <Link
                  href="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-indigo-100 hover:bg-indigo-700"
                  onClick={closeMenu}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block px-3 py-2 rounded-md text-base font-medium text-indigo-100 hover:bg-indigo-700"
                  onClick={closeMenu}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;