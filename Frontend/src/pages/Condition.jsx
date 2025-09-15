import React from "react";
import { useNavigate } from "react-router-dom";

export default function Condition() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 relative">
      <div className="w-full max-w-4xl bg-gray-800 rounded-xl shadow-xl p-8 mb-10">
        <h1 className="text-3xl font-bold mb-4 text-center">WFS Online Test - PSN</h1>

        <p className="mb-4 text-lg">
          <span className="underline font-semibold">MANDATORY CONDITIONS FOR JOB</span>
        </p>

        <ul className="list-square list-inside space-y-2 text-gray-300">
          <li>Be comfortable to work on short term contract role.</li>
          <li>Be willing to be regular to work with a minimum of 95% attendance.</li>
          <li>Be willing to work in both day and night shift.</li>
          <li>Be willing to work in 10 hours shift (9 hours working 1 Hour break).</li>
          <li>Be willing to walk or stand throughout the shift.</li>
          <li>Be aware that Saturday and Sunday may not be weekly offs and you may have to work on weekends if scheduled.</li>
          <li>Client follows strict disciplinary and performance norms; you should be willing to work in a stringent work environment.</li>
        </ul>
      </div>

      <div className="flex gap-6">
        <button
          onClick={() => navigate("/")} // Go back to Home
          className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-full font-medium transition-transform transform hover:scale-105"
        >
          <span className="text-xl">&lsaquo;</span>
          Previous
        </button>

        <button
          onClick={() => navigate("/form")} // Go to FormPage
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full font-medium transition-transform transform hover:scale-105"
        >
          Next
          <span className="text-xl">&rsaquo;</span>
        </button>
      </div>
    </div>
  );
}
