import React from 'react';

const WelcomePage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-start px-10 md:px-20 space-y-5">
        {/* Main Heading (Logo) */}
        <h1 style={{ color: 'black' }}>MyRecipe</h1>
        
        {/* Subheading */}
        <h2 style={{ color: 'black' }}>Recipes Online</h2>
        
        {/* Main Bold Text */}
        <h3 style={{ color: 'black' }}>
          New recipes <br /> every week
        </h3>
        
        {/* Paragraph */}
        <p style={{ color: 'black' }}>
          Pellentesque vel metus sit amet dui suscipit placerat. Nam consectetur turpis metus, id aliquam nibh aliquet eget.
        </p>
        
        {/* Button */}
        <button className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition">
          Discover More
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="flex-1">
        <img src="/food.jpg" alt="Food" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default WelcomePage;