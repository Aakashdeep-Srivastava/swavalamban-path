import Link from 'next/link';
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Swavalamban Path</h3>
            <p className="text-indigo-200">
              Empowering women entrepreneurs across India with resources, mentorship, and funding opportunities.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-indigo-200 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/niti-sankalan" className="text-indigo-200 hover:text-white">
                  Niti Sankalan
                </Link>
              </li>
              <li>
                <Link href="/gyanvardhan" className="text-indigo-200 hover:text-white">
                  Gyanvardhan
                </Link>
              </li>
              <li>
                <Link href="/margdarshan" className="text-indigo-200 hover:text-white">
                  Margdarshan
                </Link>
              </li>
              <li>
                <Link href="/vitta-path" className="text-indigo-200 hover:text-white">
                  Vitta Path
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-indigo-200 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-indigo-200 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-indigo-200 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-indigo-200 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-indigo-200 hover:text-white">
                <FiTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-indigo-200 hover:text-white">
                <FiFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-indigo-200 hover:text-white">
                <FiInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-indigo-200 hover:text-white">
                <FiLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-indigo-200 hover:text-white">
                <FiYoutube className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-indigo-200">Subscribe to our newsletter</p>
              <div className="mt-2 flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
                />
                <button className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-indigo-800 text-center text-indigo-300">
          <p>© {new Date().getFullYear()} Swavalamban Path. All rights reserved.</p>
          <p className="mt-2">A project to empower women entrepreneurs in India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;