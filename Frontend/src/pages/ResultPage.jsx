// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FaCheckCircle, FaTimesCircle, FaClipboardList } from "react-icons/fa";

// export default function ResultPage() {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const correct = state?.correct ?? 0;
//   const wrong = state?.wrong ?? 0;
//   const total = state?.total ?? 0;

//   const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
//   const isPass = percentage >= 40;

//   const message = isPass
//     ? "🎉 Congratulations! You nailed it! 🎉"
//     : "😅 Don't worry, try again! You can do it 💪";

//   const radius = 60;
//   const circumference = 2 * Math.PI * radius;
//   const strokeDashoffset = circumference - (percentage / 100) * circumference;

//   return (
//     <div className="bg-gradient-to-br from-gray-900 via-gray-900  min-h-screen flex items-center justify-center p-4 font-sans relative overflow-hidden">
      
//       {/* Fireworks animation for pass */}
//       {isPass && (
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="animate-ping-slow absolute top-10 left-1/4 w-24 h-24  rounded-full opacity-70 blur-xl"></div>
//           <div className="animate-ping-slow absolute top-20 right-1/3 w-32 h-32 bg-pink-400 rounded-full opacity-70 blur-2xl"></div>
//         </div>
//       )}

//       <div className="bg-white/100 backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-md p-6 text-center transform transition-all hover:scale-105 duration-500">
        
//         <h1 className={`text-4xl font-extrabold mb-4 ${isPass ? "text-yellow-500 animate-bounce" : "text-red-500"}`}>
//           {isPass ? "🎊 You Passed! 🎊" : "Oops!"}
//         </h1>
//         <p className={`text-xl font-semibold mb-8 ${isPass ? "text-green-600" : "text-red-600"}`}>
//           {message}
//         </p>

//         {/* Circular Progress Bar */}
//         <div className="relative inline-flex items-center justify-center my-6">
//           <svg className="w-48 h-48">
//             <circle
//               className="text-gray-200"
//               strokeWidth="12"
//               stroke="currentColor"
//               fill="transparent"
//               r={radius}
//               cx="96"
//               cy="96"
//             />
//             <circle
//               className={isPass ? "text-green-500" : "text-red-500"}
//               strokeWidth="12"
//               strokeDasharray={circumference}
//               strokeDashoffset={strokeDashoffset}
//               strokeLinecap="round"
//               stroke="currentColor"
//               fill="transparent"
//               r={radius}
//               cx="96"
//               cy="96"
//               style={{
//                 transition: "stroke-dashoffset 1s ease-out",
//                 transform: "rotate(-90deg)",
//                 transformOrigin: "50% 50%",
//               }}
//             />
//           </svg>
//           <span className="absolute text-5xl font-extrabold text-gray-700">{`${percentage}%`}</span>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg my-6">
//           <div className="bg-green-100 text-green-800 p-4 rounded-xl flex flex-col items-center space-y-2">
//             <FaCheckCircle className="text-3xl animate-pulse" />
//             <span className="font-bold text-2xl">{correct}</span>
//             <span className="text-sm font-medium">CORRECT</span>
//           </div>
//           <div className="bg-red-100 text-red-800 p-4 rounded-xl flex flex-col items-center space-y-2">
//             <FaTimesCircle className="text-3xl" />
//             <span className="font-bold text-2xl">{wrong}</span>
//             <span className="text-sm font-medium">WRONG</span>
//           </div>
//           <div className="bg-blue-100 text-blue-800 p-4 rounded-xl flex flex-col items-center space-y-2">
//             <FaClipboardList className="text-3xl" />
//             <span className="font-bold text-2xl">{correct} / {total}</span>
//             <span className="text-sm font-medium">TOTAL SCORE</span>
//           </div>
//         </div>

//         {/* Back Button */}
//         <button
//           onClick={() => navigate("/")}
//           className={`mt-6 py-3 px-10 rounded-full font-bold text-white transition-transform transform hover:scale-110 duration-300 ${
//             isPass ? "bg-yellow-500 hover:bg-yellow-600" : "bg-red-500 hover:bg-red-600"
//           }`}
//         >
//           Back to Home Page
//         </button>
//       </div>
//     </div>
//   );
// }






import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle, FaClipboardList } from "react-icons/fa";

export default function ResultPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const correct = state?.correct ?? 0;
  const wrong = state?.wrong ?? 0;
  const total = state?.total ?? 0;

  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  const isPass = percentage >= 40;
  const message = isPass
    ? "🎉 Congratulations! You nailed it! 🎉"
    : "😅 Don't worry, try again! You can do it 💪";

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-900 min-h-screen flex items-center justify-center p-4 font-sans relative overflow-hidden">

      {/* Fireworks animation for pass */}
      {isPass && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="animate-ping-slow absolute top-10 left-1/4 w-24 h-24 rounded-full opacity-70 blur-xl"></div>
          <div className="animate-ping-slow absolute top-20 right-1/3 w-32 h-32 bg-pink-400 rounded-full opacity-70 blur-2xl"></div>
        </div>
      )}

      <div className="bg-white/100 backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-md p-6 text-center transform transition-all hover:scale-105 duration-500">

        <h1
          className={`text-4xl font-extrabold mb-4 ${
            isPass ? "text-yellow-500 animate-bounce" : "text-red-500"
          }`}
        >
          {isPass ? "🎊 You Passed! 🎊" : "Oops!"}
        </h1>

        <p
          className={`text-xl font-semibold mb-8 ${
            isPass ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>

        {/* Circular Progress Bar */}
        <div className="relative inline-flex items-center justify-center my-6">
          <svg className="w-48 h-48">
            <circle
              className="text-gray-200"
              strokeWidth="12"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="96"
              cy="96"
            />
            <circle
              className={isPass ? "text-green-500" : "text-red-500"}
              strokeWidth="12"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="96"
              cy="96"
              style={{
                transition: "stroke-dashoffset 1s ease-out",
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
              }}
            />
          </svg>
          <span className="absolute text-5xl font-extrabold text-gray-700">
            {percentage}%
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg my-6">
          <div className="bg-green-100 text-green-800 p-4 rounded-xl flex flex-col items-center space-y-2">
            <FaCheckCircle className="text-3xl animate-pulse" />
            <span className="font-bold text-2xl">{correct}</span>
            <span className="text-sm font-medium">CORRECT</span>
          </div>

          <div className="bg-red-100 text-red-800 p-4 rounded-xl flex flex-col items-center space-y-2">
            <FaTimesCircle className="text-3xl" />
            <span className="font-bold text-2xl">{wrong}</span>
            <span className="text-sm font-medium">WRONG</span>
          </div>

          <div className="bg-blue-100 text-blue-800 p-4 rounded-xl flex flex-col items-center space-y-2">
            <FaClipboardList className="text-3xl" />
            <span className="font-bold text-2xl">
              {correct} / {total}
            </span>
            <span className="text-sm font-medium">TOTAL SCORE</span>
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className={`mt-6 py-3 px-10 rounded-full font-bold text-white transition-transform transform hover:scale-110 duration-300 ${
            isPass
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          Back to Home Page
        </button>
      </div>
    </div>
  );
}
