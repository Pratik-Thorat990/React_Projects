import React from 'react';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-50 to-amber-200">
      {/* Navbar */}
        <Navbar />
    
        {/* Background Image */}
      <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center fixed top-0 z-10">
        <h1 className="text-2xl font-bold text-amber-600">C2G</h1>
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-600 hover:text-amber-600">About Us</a>
          <a href="#" className="text-gray-600 hover:text-amber-600">Contact Us</a>
        </div>
        
      </nav>

      {/* Content starts below navbar */}
      <div className="pt-28 flex flex-col items-center px-4">
        {/* Welcome Text */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-600 text-center animate-pulse">
          Welcome to C2G
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-5">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 w-52">
            Place Order
          </button>

          <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 w-52">
            View Subscription
          </button>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 w-52">
            Order History
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
