"use client";

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { FaHeart, FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import Login from '../authFile/Login/page';
import Signup from '../authFile/Signup/page';

const Header = () => {
  const [currency, setCurrency] = useState('INR ₹');
  const [searchOpen, setSearchOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const searchRef = useRef(null);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        closeSearch();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <header className="bg- #2C4456" style={{ backgroundColor: '#9F7F7E' }}>
        <div className="text-center py-4 text-base font-normal text-white">
          Free Shipping on all domestic orders - Shop Now
        </div>
        <div className="py-1 px-5 flex items-center justify-between" style={{ backgroundColor: '#ececec' }}>
          <div className="flex items-center">
            <Image src="/Firrki_Logo.png" alt="Firki Logo" width={250} height={350} />
            <nav className="ml-8 flex items-center space-x-6 text-base" style={{ marginLeft: '17.5rem' }}>
              <a href="#" className="hover:text-[#AD8C87] font-bold">Home</a>
              <a href="#" className="hover:text-[#AD8C87] font-bold">Our Story</a>
              <a href="#" className="hover:text-[#AD8C87] font-bold">Shop</a>
              <a href="#" className="hover:text-[#AD8C87] font-bold flex items-center">
                <Image src="/Firbhet_Logo.jpeg" alt="Firbhet Logo" width={48} height={58} />
              </a>
              <a href="#" className="hover:text-[#AD8C87] font-bold">Contact</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4" style={{ marginRight: '20px' }}>
            <div className="relative" ref={searchRef} style={{ marginLeft: '-50px' }}>
              <FaSearch
                onClick={toggleSearch}
                className="w-6 h-6 cursor-pointer"
              />
              {searchOpen && (
                <div className="absolute mt-2 left-0">
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-8 pr-4 py-2 rounded-full text-sm border border-gray-300 focus:outline-none focus:border-pink-500"
                    style={{ backgroundColor: '#d9e2d6' }}
                  />
                </div>
              )}
            </div>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="text-sm border border-gray-300 py-2 px-3 rounded-full focus:outline-none focus:border-pink-500"
              style={{ backgroundColor: '#d9e2d6' }}
            >
              <option value="INR ₹">INR ₹</option>
              <option value="USD $">USD $</option>
              <option value="EUR €">EUR €</option>
            </select>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#AD8C87]">
                <FaHeart className="w-6 h-6 " />
              </a>
              <a href="#" className="hover:text-[#AD8C87]">
                <FaShoppingCart className="w-6 h-6 " />
              </a>
              <a href="#" className="hover:text-[#AD8C87]" onClick={toggleModal}>
                <FaUser className="w-6 h-6 " />
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="p-2 flex">
       
         <div className="relative h-96 w-[70%] mx-2">
          <div
            className="relative h-full w-full bg-cover bg-center rounded-lg shadow-md flex flex-col justify-between"
            style={{ backgroundImage: 'url("/master1.jpeg")' }}
          >
            <button className="bg-white text-black py-2 px-4  mx-4 mt-20 self-start hover:bg-gray-300 ml-14">
              Home
            </button>
            
           
            <button style={{ marginInlineStart: '4.7rem', padding: '6px 42px', transform: 'translateY(-59px)' }} className="bg-white text-black py-2 px-4 mx-2 mb-4 self-start hover:bg-gray-300">
              EXPLORE
            </button>


          </div>
        </div>
        <div className="relative h-96 w-[30%] mx-2">
          <Image
            src="/master2.jpeg"
            alt="New Section Image 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="p-2 flex">
        <div className="relative h-96 w-[30%] mx-2">
          <Image
            src="/master3.jpeg"
            alt="New Section Image 3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
        
        <div className="relative h-96 w-[70%] mx-2">
          <div
            className="relative h-full w-full bg-cover bg-center rounded-lg shadow-md flex flex-col justify-between"
            style={{ backgroundImage: 'url("/master4.jpeg")' }}
          >
            <button
            style={{
               transform: 'translateY(1px) translateX(-40px)'

            }}
             className="bg-white text-black py-2 px-4  mx-4 mt-20 self-end hover:bg-gray-300 mr-10">
              Home
            </button>
            
            
            
            <button 
             style={{ 
            padding: '6px 42px', 
            transform: 'translateY(-64px) translateX(-91px)'  // Adjust this value as needed
            }} 
           className="bg-white text-black py-2 px-4 mx-2 mb-4 self-end hover:bg-gray-300"
           >
              Discover
          </button>



          </div>
        </div>
      </div>

      <div className="p-2 flex">
        <div className="relative h-24 w-[100%] mx-2">
          <Image
            src="/master5.png"
            alt="New Section Image 5"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
         
      </div>

      <div className="p-2 flex">
        <div className="relative h-64 w-[25%] mx-2">
          <Image
            src="/master5.jpeg"
            alt="New Section Image 6"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="relative h-64 w-[25%] mx-2">
          <Image
            src="/master6.jpeg"
            alt="New Section Image 7"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="relative h-64 w-[25%] mx-2">
          <Image
            src="/master7.jpeg"
            alt="New Section Image 8"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="relative h-64 w-[25%] mx-2">
          <Image
            src="/master8.jpeg"
            alt="New Section Image 9"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <button className="absolute top-2 right-2 text-gray-500" onClick={toggleModal}>X</button>
            <div className="mb-4">
              <button
                className={`px-4 py-2 ${activeTab === 'login' ? 'bg-gray-200' : ''}`}
                onClick={() => handleTabSwitch('login')}
              >
                Login
              </button>
              <button
                className={`px-4 py-2 ${activeTab === 'register' ? 'bg-gray-200' : ''}`}
                onClick={() => handleTabSwitch('register')}
              >
                Register
              </button>
            </div>
            {activeTab === 'login' && (
              <div>
                {/* <h2 className="text-2xl font-bold mb-4">Login</h2> */}
                <Login/>
              </div>
            )}
            {activeTab === 'register' && (
              <div>
                {/* <h2 className="text-2xl font-bold mb-4">Register</h2> */}
                <Signup/>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
