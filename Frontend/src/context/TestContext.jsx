// import React, { createContext, useState } from "react";

// export const TestContext = createContext();

// export function TestProvider({ children }) {
//   const [questions, setQuestions] = useState([
//     { id: 1, question: "What is 2+2?", options: [2,3,4,5], answer: 2 },
//     { id: 2, question: "Capital of India?", options: ["Delhi","Mumbai","Kolkata"], answer: 0 },
//     { id: 3, question: "React is a ___?", options: ["Library","Framework"], answer: 0 }
//   ]); // example questions with unique ids

//   const [current, setCurrent] = useState(0);      // current question index
//   const [answers, setAnswers] = useState({});     // {0:1, 1:2} -> qIndex: selectedOptionIndex
//   const [timeLeft, setTimeLeft] = useState(120);  // example: 2 minutes timer

//   const setAnswer = (qIndex, optionIndex) => {
//     setAnswers(prev => ({ ...prev, [qIndex]: optionIndex }));
//   };

//   return (
//     <TestContext.Provider value={{
//       questions, setQuestions,
//       current, setCurrent,
//       answers, setAnswer,
//       timeLeft, setTimeLeft
//     }}>
//       {children}
//     </TestContext.Provider>
//   );
// }






import React, { createContext, useState } from "react";

export const TestContext = createContext();

export function TestProvider({ children }) {
  const [questions, setQuestions] = useState([
    { id: 1, question: "What is 2+2?", options: [2,3,4,5], answer: 2 },
    { id: 2, question: "Capital of India?", options: ["Delhi","Mumbai","Kolkata"], answer: 0 },
    { id: 3, question: "React is a ___?", options: ["Library","Framework"], answer: 0 },
    { id: 4, question: "Sun rises from?", options: ["West","East"], answer: 1 },
    { id: 5, question: "5+5?", options: [8,9,10,11], answer: 2 },
    { id: 6, question: "JS full form?", options: ["JavaScript","Java"], answer: 0 },
    { id: 7, question: "HTML stands for?", options: ["HyperText","HighText"], answer: 0 },
    { id: 8, question: "CSS is used for?", options: ["Styling","Logic"], answer: 0 },
    { id: 9, question: "2*3=?", options: [5,6,7], answer: 1 },
    { id: 10, question: "Color of sky?", options: ["Blue","Green"], answer: 0 }
  ]);

  const [current, setCurrent] = useState(0);      
  const [answers, setAnswers] = useState({});     
  const [timeLeft, setTimeLeft] = useState(120);  

  const setAnswer = (qIndex, optionIndex) => {
    setAnswers(prev => ({ ...prev, [qIndex]: optionIndex }));
  };

  return (
    <TestContext.Provider value={{
      questions, setQuestions,
      current, setCurrent,
      answers, setAnswer,
      timeLeft, setTimeLeft
    }}>
      {children}
    </TestContext.Provider>
  );
}
