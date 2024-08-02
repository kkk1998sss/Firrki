import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
const Footer = () => {
  return (
    <div
      className="relative w-full bg-no-repeat bg-cover text-center"
      style={{
        backgroundImage: `url('/footer.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        minHeight: '100vh',
      }}
    >
      <div className="flex flex-col items-center pt-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-8">
          Transform Your Space: Discover Elegance in Every Thread
        </h2>
        <div className="flex justify-center mb-8">
          <Image src="/Firrki_Logo.png" alt="alt" width={150} height={10}className="h-16" />
        </div>
        <div className="flex justify-center space-x-4 mb-8">
          <FaFacebookF className="text-2xl text-gray-700 hover:text-gray-900" />
          <FaInstagram className="text-2xl text-gray-700 hover:text-gray-900" />
          <FaYoutube className="text-2xl text-gray-700 hover:text-gray-900" />
        </div>
        <div className="flex justify-center items-start space-x-16 w-full px-4">
          <div className="text-left">
            <h3 className="font-semibold text-gray-700 mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>FAQs</li>
              <li>Returns and Exchange</li>
              <li>Refunds</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div className="text-center">
            <p className="mb-4 text-gray-700">
              Stay in the Loop: Discover New Arrivals and Exclusive Discounts First
            </p>
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="p-2 border border-gray-300 rounded mb-4"
            />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-gray-700 mb-4">PRODUCTS</h3>
            <ul className="space-y-2">
              <li>New Arrivals</li>
              <li>Bed Linen</li>
              <li>Cushions</li>
              <li>Table Linen</li>
              <li>Gifting</li>
              <li>Personalization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer