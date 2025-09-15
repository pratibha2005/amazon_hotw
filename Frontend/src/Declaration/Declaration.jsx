
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Declaration() {
//   const questions = [
//     "Are you willing to be regular to work with a minimum of 95% attendance?",
//     "Are you comfortable with short-term contract roles?",
//     "Do you agree to follow company policies?",
//     "Will you be punctual to all meetings?",
//     "Are you ready to relocate if required?",
//     "Will you complete tasks within deadlines?",
//     "Do you agree to maintain confidentiality?",
//     "Are you willing to work in a team?",
//     "Do you take responsibility for your work?",
//     "Do you commit to professional behavior at all times?"
//   ];

  
//   const [current, setCurrent] = useState(0);
//   const [selected, setSelected] = useState(null);
//   const [answers, setAnswers] = useState({});
//   const navigate = useNavigate();
// const handleClick = async (choice) => {
//   setSelected(choice);

//   const updated = { ...answers, [questions[current]]: choice };
//   setAnswers(updated);

//   setTimeout(async () => {
//     if (current < questions.length - 1) {
//       setCurrent(current + 1);
//       setSelected(null);
//     } else {
//       try {
         
//         const user = JSON.parse(localStorage.getItem("user"));
//         if (!user?.email) {
//             console.error("No user email found in localStorage");
//             return;
//           }

// //         const user = JSON.parse(localStorage.getItem("user"));
// // console.log("user from localStorage:", user);
// // console.log("sending to backend:", {
// //   email: user?.email,
// //   declaration: updated
// // });
// await axios.post("http://localhost:8000/api/v1/attempt/declaration", {
//   email: user?.email,
//   declaration: updated
// });




//         console.log("Declaration saved");
//       } catch (err) {
//         console.error("Failed to save declaration", err);
//       }

//       navigate("/practiceintro");
//     }
//   }, 600);
// };


//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4">
//       <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
//         {questions[current]}
//       </h1>

//       <div className="flex flex-col gap-6 w-full max-w-sm">
//         <button
//           onClick={() => handleClick("yes")}
//           className="w-full py-4 bg-orange-400 rounded-lg text-lg font-semibold hover:bg-orange-900 transition flex justify-center items-center"
//         >
//           Yes {selected === "yes" && <span className="ml-2">✅</span>}
//         </button>
//         <button
//           onClick={() => handleClick("no")}
//           className="w-full py-4 bg-orange-400 rounded-lg text-lg font-semibold hover:bg-orange-900 transition flex justify-center items-center"
//         >
//           No {selected === "no" && <span className="ml-2">✅</span>}
//         </button>
//       </div>

//       <p className="mt-6 text-gray-400">
//         {current + 1} / {questions.length}
//       </p>
//     </div>
//   );
// }


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Declaration() {
  const questions = [
    "Are you willing to be regular to work with a minimum of 95% attendance?",
    "Are you comfortable with short-term contract roles?",
    "Do you agree to follow company policies?",
    "Will you be punctual to all meetings?",
    "Are you ready to relocate if required?",
    "Will you complete tasks within deadlines?",
    "Do you agree to maintain confidentiality?",
    "Are you willing to work in a team?",
    "Do you take responsibility for your work?",
    "Do you commit to professional behavior at all times?"
  ];

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleClick = async (choice) => {
    setSelected(choice);

    const updated = { ...answers, [questions[current]]: choice };
    setAnswers(updated);

    setTimeout(async () => {
      if (current < questions.length - 1) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        try {
          // ✅ Get user from localStorage
          const user = JSON.parse(localStorage.getItem("user"));
          console.log("User:", user);

          await axios.post("http://localhost:8000/api/v1/attempt/declaration", {
            email: user?.email || "", // avoid crash
            declaration: updated,
          });

          console.log("Declaration saved ");
          navigate("/practiceintro");
        } catch (err) {
          console.error("Failed to save declaration ❌", err);
          navigate("/practiceintro"); // still navigate
        }
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
        {questions[current]}
      </h1>

      <div className="flex flex-col gap-6 w-full max-w-sm">
        <button
          onClick={() => handleClick("yes")}
          className="w-full py-4 bg-orange-400 rounded-lg text-lg font-semibold hover:bg-orange-900 transition flex justify-center items-center"
        >
          Yes {selected === "yes" && <span className="ml-2">✅</span>}
        </button>
        <button
          onClick={() => handleClick("no")}
          className="w-full py-4 bg-orange-400 rounded-lg text-lg font-semibold hover:bg-orange-900 transition flex justify-center items-center"
        >
          No {selected === "no" && <span className="ml-2">✅</span>}
        </button>
      </div>

      <p className="mt-6 text-gray-400">
        {current + 1} / {questions.length}
      </p>
    </div>
  );
}
