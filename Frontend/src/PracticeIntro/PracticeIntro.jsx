import React from "react";
import { useNavigate } from "react-router-dom";
export default function PracticeIntro() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/One"); // yaha tumhara actual test start hoga
  };
  return (
    <main id="page-container" className="main-section min-h-screen bg-gray-900 text-white flex justify-center items-center px-4">
      <div className="outer-wrapper max-w-3xl">
        <div className="inner-wrapper bg-gray-800 rounded-lg p-8 shadow-xl">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Practice Test
          </h1>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-300">
            <li>
              This is a <strong>practice test</strong> consisting of <strong>10 questions</strong>.
            </li>
            <li>
              The purpose of this test is to <strong>familiarize you with the format</strong> and types of questions you will encounter in the main assessment.
            </li>
            <li>
              <strong>Your responses and scores on this practice test will NOT be considered</strong> in your final evaluation or selection process.
            </li>
            <li>
              Upon completion of this practice test, the <strong>main assessment will begin automatically</strong>.
            </li>
          </ul>
          <p className="mt-4 text-gray-400">
            Please take this opportunity to get comfortable with the test environment.
          </p>

          <div className="course-nav flex justify-between mt-8">
            <button
              onClick={() => navigate(-1)} // previous page
              className="px-6 py-2 bg-gray-600 rounded-lg hover:bg-gray-700"
            >
              ‹ Previous
            </button>
            <button
                onClick={handleNext}
              className="px-6 py-2 bg-orange-500 rounded-lg font-semibold hover:bg-orange-600"
            >
              Next ›
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
