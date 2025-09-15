// import React, { useEffect, useState, useContext } from "react";
// import { TestContext } from "../../context/TestContext";
// import { useNavigate } from "react-router-dom";

// export default function Timer() {
//   const { timeLeft, setTimeLeft, questions, answers } = useContext(TestContext);
//   const [sec, setSec] = useState(timeLeft);
//   const navigate = useNavigate();

//   // sync context timeLeft with local state
//   useEffect(() => {
//     setSec(timeLeft);
//   }, [timeLeft]);

//   // countdown logic
//   useEffect(() => {
//     if (sec == null) return;

//     // if (sec <= 0) {
//     //   let score = 0;
//     //   questions.forEach((q, idx) => {
//     //     if (answers[idx] === q.answer) score++;
//     //   });
//     //   navigate("/result", { state: { score, total: questions.length } });
//     //   return;
//     // }

//     if (sec <= 0) {
//   let correct = 0;
//   let wrong = 0;

//   questions.forEach((q, idx) => {
//     const selected = answers[idx]; // user ka selected option index
//     if (selected !== undefined) {
//       if (selected === q.answer) correct++;
//       else wrong++;
//     } else {
//       // unanswered question ko wrong count me add karna
//       wrong++;
//     }
//   });

//   navigate("/result", { state: { correct, wrong, total: questions.length } });
//   return;
// }



//     const id = setInterval(() => setSec((s) => s - 1), 1000);
//     return () => clearInterval(id);
//   }, [sec, questions, answers, navigate]);

//   // update context timeLeft
//   useEffect(() => {
//     setTimeLeft(sec);
//   }, [sec, setTimeLeft]);

//   if (sec == null) return null;

//   const mm = String(Math.floor(sec / 60)).padStart(2, "0");
//   const ss = String(sec % 60).padStart(2, "0");

//   return (
//     <div style={{ fontWeight: 600 }}>
//       Time left: {mm}:{ss}
//     </div>
//   );
// }






import React, { useEffect, useState, useContext } from "react";
import { TestContext } from "../../context/TestContext";
import { useNavigate } from "react-router-dom";

export default function Timer() {
  const { timeLeft, setTimeLeft, questions, answers } = useContext(TestContext);
  const [sec, setSec] = useState(timeLeft);
  const navigate = useNavigate();

  useEffect(() => setSec(timeLeft), [timeLeft]);

  useEffect(() => {
    if (sec == null) return;

    if (sec <= 0) {
      let correct = 0;
      let wrong = 0;

      questions.forEach((q, idx) => {
        const selected = answers[idx]; // correct lookup
        if (selected !== undefined && selected !== null) {
          if (selected === q.answer) correct++;
          else wrong++;
        } else {
          wrong++;
        }
      });

      console.log("Debug Timer → correct:", correct, "wrong:", wrong, "total:", questions.length);

      // Navigate with state
      navigate("/result", { state: { correct, wrong, total: questions.length } });
      return;
    }

    const id = setInterval(() => setSec((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [sec, questions, answers, navigate]);

  useEffect(() => setTimeLeft(sec), [sec, setTimeLeft]);

  if (sec == null) return null;

  const mm = String(Math.floor(sec / 60)).padStart(2, "0");
  const ss = String(sec % 60).padStart(2, "0");

  return <div style={{ fontWeight: 600 }}>Time left: {mm}:{ss}</div>;
}
