// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      
      {/* Heading */}
      <h1 className="text-5xl sm:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6 drop-shadow-lg">
        Welcome to Your Test Hub
      </h1>
      
      {/* Description */}
      <p className="text-lg sm:text-xl text-gray-300 text-center max-w-3xl mb-10 leading-relaxed">
        Prepare and take your test easily! Sharpen your skills, boost your confidence, and track your progress effortlessly. Everything you need to succeed is just one click away.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/Condition")}
        className="relative inline-block px-14 py-5 font-bold text-lg text-white rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-2xl hover:scale-110 transform transition-all duration-500 overflow-hidden"
      >
        <span className="absolute inset-0 bg-white opacity-10 rounded-full"></span>
        Start the Test
      </button>

      {/* Optional floating decorative circles for premium feel */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-purple-600 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500 rounded-full opacity-20 animate-pulse"></div>
    </div>
  );
}
