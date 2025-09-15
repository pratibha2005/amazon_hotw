// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function One() {
//   // ✅ 10 basic questions with options + correctAnswer (hidden)
//   const questions = [
//     {
//       question: "What is 2 + 2?",
//       options: ["3", "4", "5", "6"],
//       correctAnswer: "4",
//     },
//     {
//       question: "What is 4 - 2?",
//       options: ["1", "2", "3", "4"],
//       correctAnswer: "2",
//     },
//     {
//       question: "What comes after 5?",
//       options: ["4", "6", "7", "8"],
//       correctAnswer: "6",
//     },
//     {
//       question: "What is 3 + 1?",
//       options: ["2", "3", "4", "5"],
//       correctAnswer: "4",
//     },
//     {
//       question: "Which is a fruit?",
//       options: ["Car", "Apple", "Chair", "Book"],
//       correctAnswer: "Apple",
//     },
//     {
//       question: "What is 10 - 7?",
//       options: ["2", "3", "4", "5"],
//       correctAnswer: "3",
//     },
//     {
//       question: "Which number is even?",
//       options: ["3", "7", "8", "9"],
//       correctAnswer: "8",
//     },
//     {
//       question: "What is 5 + 0?",
//       options: ["0", "5", "10", "15"],
//       correctAnswer: "5",
//     },
//     {
//       question: "What is the first letter of English alphabet?",
//       options: ["B", "A", "C", "D"],
//       correctAnswer: "A",
//     },
//     {
//       question: "What is 9 - 9?",
//       options: ["0", "1", "9", "10"],
//       correctAnswer: "0",
//     },
//   ];

//   const [current, setCurrent] = useState(0);
//   const [selected, setSelected] = useState(null);
//   const navigate = useNavigate();

//   // const handleClick = (choice) => {
//   //   setSelected(choice);

//   //   // ✅ check answer (but don’t show in UI)
//   //   const isCorrect = choice === questions[current].correctAnswer;
//   //   console.log(
//   //     `Q${current + 1}: ${questions[current].question} | Selected: ${choice} | Correct: ${isCorrect}`
//   //   );

//   //   setTimeout(() => {
//   //     if (current < questions.length - 1) {
//   //       setCurrent(current + 1);
//   //       setSelected(null); // reset for next
//   //     } else {
//   //       navigate("/practiceintro"); // ✅ go to next page
//   //     }
//   //   }, 800);
//   // };
   
//   const handleClick = (choice) => {
//     const isCorrect = choice === questions[current].correctAnswer;

//     // save answer
//     formData.answers.push({
//       questionId: current,
//       questionText: questions[current].question,
//       selected: choice
//     });

//     setSelected(choice);

//     setTimeout(async () => {
//       if (current < questions.length - 1) {
//         setCurrent(current + 1);
//         setSelected(null);
//       } else {
//         // test finished
//         formData.finishedAt = new Date().toISOString();

//         // send final data to backend
//         const res = await fetch("http://localhost:5000/api/submit", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData)
//         });
//         const data = await res.json();
//         console.log("Final submission:", data);

//         navigate("/Result");
//       }
//     }, 800);
//   };
// }

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4">
//       {/* Question */}
//       <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
//         {questions[current].question}
//       </h1>

//       {/* Options */}
//       <div className="flex flex-col gap-4 w-full max-w-sm">
//         {questions[current].options.map((opt, idx) => (
//           <button
//             key={idx}
//             onClick={() => handleClick(opt)}
//             className="w-full py-3 bg-orange-400 rounded-lg text-lg font-semibold hover:bg-orange-900 transition flex justify-center items-center"
//           >
//             {opt} {selected === opt && <span className="ml-2">✅</span>}
//           </button>
//         ))}
//       </div>

//       {/* Progress */}
//       <p className="mt-6 text-gray-400">
//         {current + 1} / {questions.length}
//       </p>
//     </div>
//   );














// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function One() {
//   const questions = [
//     { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correctAnswer: "4" },
//     { question: "What is 4 - 2?", options: ["1", "2", "3", "4"], correctAnswer: "2" },
//     { question: "What comes after 5?", options: ["4", "6", "7", "8"], correctAnswer: "6" },
//     { question: "What is 3 + 1?", options: ["2", "3", "4", "5"], correctAnswer: "4" },
//     { question: "Which is a fruit?", options: ["Car", "Apple", "Chair", "Book"], correctAnswer: "Apple" },
//     { question: "What is 10 - 7?", options: ["2", "3", "4", "5"], correctAnswer: "3" },
//     { question: "Which number is even?", options: ["3", "7", "8", "9"], correctAnswer: "8" },
//     { question: "What is 5 + 0?", options: ["0", "5", "10", "15"], correctAnswer: "5" },
//     { question: "What is the first letter of English alphabet?", options: ["B", "A", "C", "D"], correctAnswer: "A" },
//     { question: "What is 9 - 9?", options: ["0", "1", "9", "10"], correctAnswer: "0" },
//   ];

//   const [current, setCurrent] = useState(0);
//   const [selected, setSelected] = useState(null);
//   const navigate = useNavigate();

  
//   const [formData] = useState({
//     answers: [],
//     // startedAt: new Date().toISOString(),
//     finishedAt: null,
//   });

// //   const handleClick = (choice) => {
// //     const isCorrect = choice === questions[current].correctAnswer;

// //     // save answer
// //     formData.answers.push({
// //       questionId: current,
// //       questionText: questions[current].question,
// //       selected: choice,
// //       isCorrect,
// //     });

// //     setSelected(choice);

// //     setTimeout(async () => {
// //       if (current < questions.length - 1) {
// //         setCurrent(current + 1);
// //         setSelected(null);
// //       } else {
// //         formData.finishedAt = new Date().toISOString();
        
// //         const correct = formData.answers.filter(a => a.isCorrect).length;
// // const total = formData.answers.length;
// // const wrong = total - correct;

// //         // send final data to backend
// //         const res = await fetch("http://localhost:5000/api/submit", {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify(formData),
// //         });
// //         const data = await res.json();
// //         console.log("Final submission:", data);

// //         navigate("/Result", {
// //   state: { correct, wrong, total 
// //   }
// //   })
// //       }
// //     }, 800);
// //   };


// const handleClick = (choice) => {
//   const isCorrect = choice === questions[current].correctAnswer;

//   // save answer
//   // formData.answers.push({
//   //   questionId: current,
//   //   questionText: questions[current].question,
//   //   selected: choice,
//   //   isCorrect,
//   // });

//   formData.answers.push({
//   questionId: current,
//   questionText: questions[current].question,
//   selected: choice,
//   isCorrect,
// });


//   setSelected(choice);

//   setTimeout(async () => {
//     if (current < questions.length - 1) {
//       setCurrent(current + 1);
//       setSelected(null);
//     } else {
//       formData.finishedAt = new Date().toISOString();

//       // ✅ calculate result here
//       const correct = formData.answers.filter(a => a.isCorrect).length;
//       const total = formData.answers.length;
//       const wrong = total - correct;

//       // send final data to backend
//       const res = await fetch("http://localhost:5000/api/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       console.log("Final submission:", data);

//       // ✅ pass result to Result page
//       navigate("/Result", { state: { correct, wrong, total } });
//     }
//   }, 800);
// };


//   // ✅ ab return sahi jagah pe hai (function ke andar)
//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4">
//       {/* Question */}
//       <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
//         {questions[current].question}
//       </h1>

//       {/* Options */}
//       <div className="flex flex-col gap-4 w-full max-w-sm">
//         {questions[current].options.map((opt, idx) => (
//           <button
//             key={idx}
//             onClick={() => handleClick(opt)}
//             className="w-full py-3 bg-orange-400 rounded-lg text-lg font-semibold hover:bg-orange-900 transition flex justify-center items-center"
//           >
//             {opt} {selected === opt && <span className="ml-2">✅</span>}
//           </button>
//         ))}
//       </div>

//       {/* Progress */}
//       <p className="mt-6 text-gray-400">
//         {current + 1} / {questions.length}
//       </p>
//     </div>
//   );
// }










// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function One() {
//   const questions = [
//     { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correctAnswer: "4" },
//     { question: "What is 4 - 2?", options: ["1", "2", "3", "4"], correctAnswer: "2" },
//     { question: "What comes after 5?", options: ["4", "6", "7", "8"], correctAnswer: "6" },
//     { question: "What is 3 + 1?", options: ["2", "3", "4", "5"], correctAnswer: "4" },
//     { question: "Which is a fruit?", options: ["Car", "Apple", "Chair", "Book"], correctAnswer: "Apple" },
//     { question: "What is 10 - 7?", options: ["2", "3", "4", "5"], correctAnswer: "3" },
//     { question: "Which number is even?", options: ["3", "7", "8", "9"], correctAnswer: "8" },
//     { question: "What is 5 + 0?", options: ["0", "5", "10", "15"], correctAnswer: "5" },
//     { question: "What is the first letter of English alphabet?", options: ["B", "A", "C", "D"], correctAnswer: "A" },
//     { question: "What is 9 - 9?", options: ["0", "1", "9", "10"], correctAnswer: "0" },
//   ];

//   const [current, setCurrent] = useState(0);
//   const [selected, setSelected] = useState(null);
//   const navigate = useNavigate();

//   // ✅ Only answers + finishedAt
//   const [formData, setFormData] = useState({
//     answers:[],
//     finishedAt: null,
//   });

//   const handleClick = (choice) => {
//     const isCorrect = choice === questions[current].correctAnswer;

//     setFormData((prev) => ({
//       ...prev,
//       answers: [
//         ...prev.answers,
//         {
//           questionId: current,
//           questionText: questions[current].question,
//           selected: choice,
//           isCorrect,
//         },
//       ],
//     }));

//     setSelected(choice);

//     setTimeout(async () => {
//       if (current < questions.length - 1) {
//         setCurrent(current + 1);
//         setSelected(null);
//       } 
      
//       // else {
//       //   const finalData = {
//       //     ...formData,
//       //     finishedAt: new Date().toISOString(),
//       //   };

//       //   // ✅ calculate result
//       //   const correct = finalData.answers.filter((a) => a.isCorrect).length;
//       //   const total = finalData.answers.length;
//       //   const wrong = total - correct;

//       //   // ✅ send only answers (no test user info)
//       //   const res = await fetch("http://localhost:5000/api/submit", {
//       //     method: "POST",
//       //     headers: { "Content-Type": "application/json" },
//       //     body: JSON.stringify(finalData),
//       //   });
//       //   const data = await res.json();
//       //   console.log("Final submission:", data);

//       //   navigate("/Result", { state: { correct, wrong, total } });
//       // }

//       else {
//   // ✅ Ensure last answer bhi include ho
//   const finalAnswers = [
//     ...formData.answers,
//     {
//       questionId: current,
//       questionText: questions[current].question,
//       selected: choice,
//       isCorrect,
//     },
//   ];

//   const finalData = {
//     ...formData,
//     finishedAt: new Date().toISOString(),
//     answers: finalAnswers, // ✅ force update
//   };

//   // ✅ calculate result
//   const correct = finalAnswers.filter((a) => a.isCorrect).length;
//   const total = finalAnswers.length;
//   const wrong = total - correct;

//   // ✅ send only answers (no test user info)
//   const res = await fetch("http://localhost:5000/api/submit", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(finalData),
//   });
//   const data = await res.json();
//   console.log("Final submission:", data);

//   navigate("/Result", { state: { correct, wrong, total } });
// }

//     }, 800);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4">
//       <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
//         {questions[current].question}
//       </h1>

//       <div className="flex flex-col gap-4 w-full max-w-sm">
//         {questions[current].options.map((opt, idx) => (
//           <button
//             key={idx}
//             onClick={() => handleClick(opt)}
//             className="w-full py-3 bg-orange-400 rounded-lg text-lg font-semibold hover:bg-orange-900 transition flex justify-center items-center"
//           >
//             {opt} {selected === opt && <span className="ml-2">✅</span>}
//           </button>
//         ))}
//       </div>

//       <p className="mt-6 text-gray-400">
//         {current + 1} / {questions.length}
//       </p>
//     </div>
//   );
// }















import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function One() {
  const questions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correctAnswer: "4" },
    { question: "What is 4 - 2?", options: ["1", "2", "3", "4"], correctAnswer: "2" },
    { question: "What comes after 5?", options: ["4", "6", "7", "8"], correctAnswer: "6" },
    { question: "What is 3 + 1?", options: ["2", "3", "4", "5"], correctAnswer: "4" },
    { question: "Which is a fruit?", options: ["Car", "Apple", "Chair", "Book"], correctAnswer: "Apple" },
    { question: "What is 10 - 7?", options: ["2", "3", "4", "5"], correctAnswer: "3" },
    { question: "Which number is even?", options: ["3", "7", "8", "9"], correctAnswer: "8" },
    { question: "What is 5 + 0?", options: ["0", "5", "10", "15"], correctAnswer: "5" },
    { question: "What is the first letter of English alphabet?", options: ["B", "A", "C", "D"], correctAnswer: "A" },
    { question: "What is 9 - 9?", options: ["0", "1", "9", "10"], correctAnswer: "0" },
  ];

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); 
   const userFormData = location.state?.formData || {};

  // ✅ Local ref to store answers immediately (state delay ka problem solved)
  const answersRef = useRef([]);

  const handleClick = async (choice) => {
    const isCorrect = choice === questions[current].correctAnswer;

    // ✅ direct push to ref (no delay)
    answersRef.current.push({
      questionId: current,
      questionText: questions[current].question,
      selected: choice,
      isCorrect,
    });

    setSelected(choice);

    setTimeout(async () => {
      if (current < questions.length - 1) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        const finalData = {
          ...userFormData,              //  user info add
          answers: answersRef.current,  //  all answers
          finishedAt: new Date().toISOString(),
        };

        const correct = finalData.answers.filter((a) => a.isCorrect).length;
        const total = finalData.answers.length;
        const wrong = total - correct;

        //  send to backend
        // const res = await fetch("http://localhost:5000/api/submit", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(finalData),
        // });

        const res = await fetch("https://amazon-hotw-7.onrender.com/api/submit", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(finalData),
});

        const data = await res.json();
        console.log("Final submission:", data);

        navigate("/Result", { state: { correct, wrong, total } });
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        {questions[current].question}
      </h1>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        {questions[current].options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(opt)}
            className="w-full py-3 bg-orange-400 rounded-lg text-lg font-semibold hover:bg-orange-900 transition flex justify-center items-center"
          >
            {opt} {selected === opt && <span className="ml-2">✅</span>}
          </button>
        ))}
      </div>

      <p className="mt-6 text-gray-400">
        {current + 1} / {questions.length}
      </p>
    </div>
  );
}
