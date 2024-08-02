
"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaDollarSign } from 'react-icons/fa';

const  Dashboard = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    time: '',
    date: '',
    location: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    additionalInfo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleEnroll = () => {
    router.push('/enroll');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white w-full max-w-5xl rounded shadow p-8">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-blue-600">ENROLLMENT</h1>
          <p className="text-xl">Training Program Enrollment In Gaithersburg And Howard Maryland</p>
        </div>
        <div className="mb-6">
          <nav className="text-lg">
            <a href="/" className="font-bold">Home</a> &raquo; Enrollment
          </nav>
        </div>
        <div className="mb-6 border-b border-gray-300">
          <p className="text-lg">Enroll Now.</p>
        </div>
        
            <div className="flex space-x-4">
  <div className="w-1/2">
    <label className="block text-gray-700 flex items-center">
       Payment For
    </label>
    <input 
      type="text"
      name="firstName"
      value={form.firstName}
      onChange={handleInputChange}
      className="w-full mt-1 p-2 border rounded"
      placeholder="First Name"
      disabled // Disable input
    />
  </div>
  <div className="w-1/2">
    <label className="block text-gray-700">Amount</label>
    <input 
      type="text"
      name="lastName"
      value={form.lastName}
      onChange={handleInputChange}
      className="w-full mt-1 p-2 border rounded"
      placeholder="Last Name"
      disabled // Disable input
    />
  </div>
</div>
        <div className="bg-gray-100 p-4 rounded mb-6">
          <form className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700">Select Time</label>
                <select 
                  name="time"
                  value={form.time}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border rounded"
                >
                  <option value="">Select Time</option>
                  {/* Add time options here */}
                </select>
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700">Select Date</label>
                <input 
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Select Location</label>
              <select 
                name="location"
                value={form.location}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded"
              >
                <option value="">Select Location</option>
                {/* Add location options here */}
              </select>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700">First Name</label>
                <input 
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border rounded"
                  placeholder="First Name"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700">Last Name</label>
                <input 
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border rounded"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700">Email</label>
                <input 
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border rounded"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700">Phone Number</label>
                <input 
                  type="tel"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border rounded"
                  placeholder="Enter your phone number (optional)"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Address</label>
              <input 
                type="text"
                name="address"
                value={form.address}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded"
                placeholder="Enter your address"
              />
            </div>
            <div>
              <label className="block text-gray-700">Additional Information (optional)</label>
              <textarea 
                name="additionalInfo"
                value={form.additionalInfo}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border rounded"
                placeholder="Enter any additional information"
              />
            </div>
            <div>
              <ReCAPTCHA
                sitekey="your_site_key_here" // Replace with your actual site key
                onChange={(value) => console.log('Captcha value:', value)}
              />
            </div>
            <div className="flex justify-between items-center mt-6">
              <span className="text-xl font-bold">Total: $230.00</span>
              <div className="flex space-x-2">
                <button 
                  type="button"
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                  PayPal
                </button>
                <div className="flex space-x-1">
                  <img src="/path/to/visa.png" alt="Visa" className="h-8" />
                  <img src="/path/to/mastercard.png" alt="Mastercard" className="h-8" />
                  <img src="/path/to/amex.png" alt="Amex" className="h-8" />
                  <img src="/path/to/discover.png" alt="Discover" className="h-8" />
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* <button 
          onClick={handleEnroll} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Enroll
        </button> */}
      </div>
    </div>
  );
}

export default Dashboard;