import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className="flex h-screen">
      {/* Left Section - Text */}
      <div className="flex-1 flex flex-col justify-center p-12">
        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
          Recipes Online
        </h2>
        <h1 className="text-6xl font-bold text-black mb-6">
          New recipes <br /> every week
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Pellentesque vel metus sit amet dui suscipit placerat. Nam consectetur turpis metus.
        </p>
        <button>
        <Link to="/recipes" className="inline-block bg-black text-white px-6 py-3 text-lg rounded-full">
          Discover More
        </Link>
        </button>
        {/* Social Media Links */}
        <div className="flex space-x-6 mt-8">
          <a href="#" className="text-2xl text-black hover:text-gray-600">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-2xl text-black hover:text-gray-600">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-2xl text-black hover:text-gray-600">
            <i className="fab fa-tumblr"></i>
          </a>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="flex-1">
        <img
          src="food.jpg"
          alt="Food"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default WelcomePage;