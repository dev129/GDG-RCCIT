'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '../app/images/GDSC-RCIIT Logo.png'
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-white flex items-center justify-center px-4">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center text-center md:text-left">
        {/* Left side image */}
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0 md:mr-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
        >
          <Image
            src={Logo}
            alt="Not Found Illustration"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </motion.div>

        {/* Right side content */}
        <div className="md:w-1/2">
          <motion.h1 
            className="text-6xl font-bold text-blue-600 mb-4"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.4 }}
          >
            Oops!
          </motion.h1>
          
          <motion.h2 
            className="text-2xl font-semibold text-gray-800 mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.6 }}
          >
            The page you're looking for doesn't exist.
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Looks like you've wandered into unknown territory. Let's get you back to safety!
          </motion.p>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, delay: 1 }}
          >
            <Link href="/">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Go back to homepage
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
