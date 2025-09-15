


import React, { useContext } from "react";
import { TestContext } from "../context/TestContext";
import Timer from "../components/test/Timer";

export default function TestPage() {
  const { questions, current, setCurrent, answers, setAnswer } = useContext(TestContext);

  if (!questions.length) return <div>Loading...</div>;

  const q = questions[current];

  const handleOptionClick = (optionIdx) => {
    setAnswer(current, optionIdx);
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const prevQuestion = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
      <Timer />

      <h2>{current+1}. {q.question}</h2>
      <ul>
        {q.options.map((opt, idx) => (
          <li
            key={q.id + "-" + idx}
            style={{
              cursor: "pointer",
              fontWeight: answers[current] === idx ? "bold" : "normal",
              margin: "5px 0"
            }}
            onClick={() => handleOptionClick(idx)}
          >
            {opt}
          </li>
        ))}
      </ul>

      <button onClick={prevQuestion} disabled={current === 0}>Prev</button>
      <button onClick={nextQuestion} disabled={current === questions.length - 1}>Next</button>
    </div>
  );
}
