// // Header and hero sectio of this 

// "use client";

// import Image from 'next/image';
// import { useState, useRef, useEffect } from 'react';
// import { FaHeart, FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';

// const Header = () => {
//   const [currency, setCurrency] = useState('INR ₹');
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('login');
//   const searchRef = useRef(null);

//   const toggleSearch = () => {
//     setSearchOpen(!searchOpen);
//   };

//   const closeSearch = () => {
//     setSearchOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (searchRef.current && !searchRef.current.contains(event.target)) {
//         closeSearch();
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const toggleModal = () => {
//     setModalOpen(!modalOpen);
//   };

//   const handleTabSwitch = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div>
//       <header className="bg- #2C4456" style={{ backgroundColor: '#9F7F7E' }}>
//         <div className="text-center py-4 text-base font-normal text-white">
//           Free Shipping on all domestic orders - Shop Now
//         </div>
//         <div className="py-1 px-5 flex items-center justify-between" style={{ backgroundColor: '#ececec' }}>
//           <div className="flex items-center">
//             <Image src="/Firrki_Logo.png" alt="Firki Logo" width={250} height={350} />
//             <nav className="ml-8 flex items-center space-x-6 text-base" style={{ marginLeft: '17.5rem' }}>
//               <a href="#" className="hover:text-[#AD8C87] font-bold">Home</a>
//               <a href="#" className="hover:text-[#AD8C87] font-bold">About</a>
//               <a href="#" className="hover:text-[#AD8C87] font-bold">Shop</a>
//               <a href="#" className="hover:text-[#AD8C87] font-bold flex items-center">
//                 <Image src="/Firbhet_Logo.jpeg" alt="Firbhet Logo" width={48} height={58} />
//               </a>
//               <a href="#" className="hover:text-[#AD8C87] font-bold">Contact</a>
//             </nav>
//           </div>
//           <div className="flex items-center space-x-4" style={{ marginRight: '20px' }}>
//             <div className="relative" ref={searchRef} style={{ marginLeft: '-50px' }}>
//               <FaSearch
//                 onClick={toggleSearch}
//                 className="w-6 h-6 cursor-pointer text-white"
//               />
//               {searchOpen && (
//                 <div className="absolute mt-2 left-0">
//                   <input
//                     type="text"
//                     placeholder="Search"
//                     className="pl-8 pr-4 py-2 rounded-full text-sm border border-gray-300 focus:outline-none focus:border-pink-500"
//                     style={{ backgroundColor: '#d9e2d6' }}
//                   />
//                 </div>
//               )}
//             </div>
//             <select
//               value={currency}
//               onChange={(e) => setCurrency(e.target.value)}
//               className="text-sm border border-gray-300 py-2 px-3 rounded-full focus:outline-none focus:border-pink-500"
//               style={{ backgroundColor: '#d9e2d6' }}
//             >
//               <option value="INR ₹">INR ₹</option>
//               <option value="USD $">USD $</option>
//               <option value="EUR €">EUR €</option>
//             </select>
//             <div className="flex space-x-4">
//               <a href="#" className="hover:text-[#AD8C87]">
//                 <FaHeart className="w-6 h-6 text-white" />
//               </a>
//               <a href="#" className="hover:text-[#AD8C87]">
//                 <FaShoppingCart className="w-6 h-6 text-white" />
//               </a>
//               <a href="#" className="hover:text-[#AD8C87]" onClick={toggleModal}>
//                 <FaUser className="w-6 h-6 text-white" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </header>

    



// <div className="p-2 flex">
//   <div className="relative h-64 w-[70%] mx-2">
//     <Image
//       src="/master1.jpeg"
//       alt="New Section Image 1"
//       layout="fill"
//       objectFit="cover"
//       className="rounded-lg shadow-md"
//     />
//   </div>
//   <div className="relative h-64 w-[30%] mx-2">
//     <Image
//       src="/master2.jpeg"
//       alt="New Section Image 2"
//       layout="fill"
//       objectFit="cover"
//       className="rounded-lg shadow-md"
//     />
//   </div>
// </div>
// <div className="p-2 flex">
 
//   <div className="relative h-64 w-[30%] mx-2">
//     <Image
//       src="/master3.jpeg"
//       alt="New Section Image 2"
//       layout="fill"
//       objectFit="cover"
//       className="rounded-lg shadow-md"
//     />
//   </div>
//   <div className="relative h-64 w-[70%] mx-2">
//     <Image
//       src="/master4.jpeg"
//       alt="New Section Image 1"
//       layout="fill"
//       objectFit="cover"
//       className="rounded-lg shadow-md"
//     />
//   </div>
// </div>

// <div className="p-2 flex">
 
//   <div className="relative h-24 w-[100%] mx-2">
//     <Image
//       src="/master5.png"
//       alt="New Section Image 2"
//       layout="fill"
//       objectFit="cover"
//       className="rounded-lg shadow-md"
//     />
//   </div>
  
// </div>
// <div className="p-2 flex">
 
//   <div className="relative h-64 w-[25%] mx-2">
//     <Image
//       src="/master5.jpeg"
//       alt="New Section Image 2"
//       layout="fill"
//       objectFit="cover"
//       className="rounded-lg shadow-md"
//     />
//   </div>
//   <div className="relative h-64 w-[25%] mx-2">
//     <Image
//       src="/master6.jpeg"
//       alt="New Section Image 1"
//       layout="fill"
//       objectFit="cover"
//       className="rounded-lg shadow-md"
//     />
//   </div>
//   <div className="relative h-64 w-[25%] mx-2">
//     <Image
//       src="/master7.jpeg"
//       alt="New Section Image 1"
//       layout="fill"
//       objectFit="cover"
//       className="rounded-lg shadow-md"
//     />
//   </div>
//   <div className="relative h-64 w-[25%] mx-2">
//     <Image
//       src="/master8.jpeg"
//       alt="New Section Image 1"
//       layout="fill"
//       objectFit="cover"
//       className="rounded-lg shadow-md"
//     />
//   </div>
// </div>


      
      

//       {modalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg relative">
//             <button className="absolute top-2 right-2 text-gray-500" onClick={toggleModal}>X</button>
//             <div className="mb-4">
//               <button
//                 className={`px-4 py-2 ${activeTab === 'login' ? 'bg-gray-200' : ''}`}
//                 onClick={() => handleTabSwitch('login')}
//               >
//                 Login
//               </button>
//               <button
//                 className={`px-4 py-2 ${activeTab === 'register' ? 'bg-gray-200' : ''}`}
//                 onClick={() => handleTabSwitch('register')}
//               >
//                 Register
//               </button>
//             </div>
//             {activeTab === 'login' && (
//               <div>
//                 <h2 className="text-2xl font-bold mb-4">Login</h2>
//                 {/* Login form goes here */}
//               </div>
//             )}
//             {activeTab === 'register' && (
//               <div>
//                 <h2 className="text-2xl font-bold mb-4">Register</h2>
//                 {/* Registration form goes here */}
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;

//// For one step above of footer section 

//  "use client"
//  const Footer = () => {
//   return (
//     <div
//       className="relative w-full bg-no-repeat text-center py-12"
//       style={{
//         backgroundImage: `url('/tigerMaster.jpeg')`,
//         backgroundSize: 'contain',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         minHeight: '100vh',
//       }}
//     >
//       <h2 className="text-4xl font-semibold text-pink-600 mb-8">
//         Customer Love in Every Thread
//       </h2>
//       <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="p-4">
//           <p className="text-lg italic mb-4">
//             Great shopping experience that I haven't seen in a while. I had a great time looking around here and would like to recommend it to everyone.
//           </p>
//           <p className="font-bold">Anthony Garcia</p>
//           <p>New York</p>
//         </div>
//         <div className="p-4">
//           <p className="text-lg italic mb-4">
//             This is one of the best interior store. They have a lot of things for you to explore. The price is reasonable and customer service is dedicated.
//           </p>
//           <p className="font-bold">Gloria Simpson</p>
//           <p>Arizona</p>
//         </div>
//         <div className="p-4">
//           <p className="text-lg italic mb-4">
//             I received my table yesterday. What an exceptional product quality! The delivery service is real quick. This will be one of my favorite store.
//           </p>
//           <p className="font-bold">Karen Rose</p>
//           <p>San Jose</p>
//         </div>
//       </div>
//       <div className="flex justify-center mt-8">
//         <span className="w-3 h-3 bg-pink-600 rounded-full mx-1"></span>
//         <span className="w-3 h-3 bg-pink-600 rounded-full mx-1"></span>
//         <span className="w-3 h-3 bg-pink-600 rounded-full mx-1"></span>
//       </div>
//     </div>
//   );
// };

// export default Footer;


//  "use client"
// import React from 'react';
// import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <div
//       className="relative w-full bg-no-repeat bg-cover text-center py-12"
//       style={{
//         backgroundImage: `url('/footer.jpeg')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//       }}
//     >
//       <h2 className="text-3xl font-semibold text-gray-700 mb-8">
//         Transform Your Space: Discover Elegance in Every Thread
//       </h2>
//       <div className="flex justify-center mb-8">
//         <img src="/Firrki_Logo.png" alt="Firki Logo" className="h-16" />
//       </div>
//       <div className="flex justify-center space-x-4 mb-8">
//         <FaFacebookF className="text-2xl text-gray-700 hover:text-gray-900" />
//         <FaInstagram className="text-2xl text-gray-700 hover:text-gray-900" />
//         <FaYoutube className="text-2xl text-gray-700 hover:text-gray-900" />
//       </div>
//       <p className="mb-8 text-gray-700">
//         Stay in the Loop: Discover New Arrivals and Exclusive Discounts First
//       </p>
//       <input
//         type="email"
//         placeholder="Enter your Email Address"
//         className="p-2 border border-gray-300 rounded"
//       />
//       <div className="grid grid-cols-2 gap-8 mt-12">
//         <div>
//           <h3 className="font-semibold text-gray-700 mb-4">QUICK LINKS</h3>
//           <ul className="text-left space-y-2">
//             <li>About Us</li>
//             <li>FAQs</li>
//             <li>Returns and Exchange</li>
//             <li>Refunds</li>
//             <li>Privacy Policy</li>
//             <li>Terms and Conditions</li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="font-semibold text-gray-700 mb-4">PRODUCTS</h3>
//           <ul className="text-left space-y-2">
//             <li>New Arrivals</li>
//             <li>Bed Linen</li>
//             <li>Cushions</li>
//             <li>Table Linen</li>
//             <li>Gifting</li>
//             <li>Personalization</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const Home = () => {
  return (
    <><Header />
    <MainContent />
    <Footer/>
    </>
  );
};

export default Home;
