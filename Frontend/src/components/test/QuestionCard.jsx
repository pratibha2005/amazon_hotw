import React from "react";

export default function QuestionCard({ qIndex, question, selected, onSelect }) {
  return (
    <div className="question-card" style={{border: "1px solid #ddd", padding: 16, borderRadius: 8}}>
      <h3 style={{margin: 0}}>{qIndex + 1}. {question.text}</h3>

      <div style={{marginTop: 12, display: "grid", gap: 8}}>
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onSelect(qIndex, i)}
            style={{
              padding: "10px 12px",
              textAlign: "left",
              border: selected === i ? "2px solid #2563eb" : "1px solid #ccc",
              borderRadius: 6,
              background: selected === i ? "#e6f0ff" : "#fff",
              cursor: "pointer"
            }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
