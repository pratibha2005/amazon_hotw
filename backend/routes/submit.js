// const express = require('express');
// const router = express.Router();
// const Attempt = require('../models/Attempt');
// const answersKey = require('../config/answersKey');

// // POST /api/submit
// router.post('/submit', async (req, res) => {
//   try {
//     const {
//       name, email, phone, gender, dob, aadhaar, city,
//       declaration = {}, // object {q1: 'yes', ...}
//       answers = [], // [{questionId, questionText, selected}]
//       edAt, finishedAt
//     } = req.body;

//     // compute score
//     let correct = 0, wrong = 0;
//     answers.forEach((a, idx) => {
//       const key = a.questionId ?? idx; // if questionId present use it, else index
//       const correctAns = answersKey[key];
//       if (String(a.selected) === String(correctAns)) correct++;
//       else wrong++;
//     });

//     const attempt = new Attempt({
//       name, email, phone, gender, dob: dob ? new Date(dob) : null,
//       aadhaar, city,
//       declaration,
//       answers,
//       score: { correct, wrong },
//       startedAt: startedAt ? new Date(startedAt) : null,
//       finishedAt: finishedAt ? new Date(finishedAt) : null
//     });

//     await attempt.save();
//     res.status(201).json({ success: true, id: attempt._id, score: attempt.score });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, error: err.message });
//   }
// });

// module.exports = router;





// const express = require('express');
// const router = express.Router();
// const Attempt = require('../models/Attempt');
// const answersKey = require('../config/answersKey');

// router.post("/", async (req, res) => {
//   try {
//     const attempt = new Attempt(req.body);
//     await attempt.save();
//     res.status(201).json({ message: "Form data saved successfully!", attempt });
//   } catch (err) {
//     console.error("Error saving form:", err);
//     res.status(500).json({ error: "Failed to save form data" });
//   }
// });

// module.exports = router;




// const express = require("express");
// const router = express.Router();
// const Attempt = require("../models/Attempt");
// const answersKey = require("../config/answersKey");

// router.post("/", async (req, res) => {
//   try {
//     const { formId, userEmail, answers } = req.body;

//     let correct = 0;
//     let wrong = 0;

//     const evaluatedAnswers = answers.map((ans) => {
//       const correctAnswer = answersKey[ans.questionText]; // correct answer from key
//       const isCorrect = ans.selected === correctAnswer;
//       if (isCorrect) correct++;
//       else wrong++;
//       return { ...ans, isCorrect };
//     });

//     const attempt = new Attempt({
//       formId,
//       userEmail,
//       answers: evaluatedAnswers,
//       score: {
//         correct,
//         wrong,
//         total: answers.length,
//       },
//       finishedAt: new Date(),
//     });

//     await attempt.save();

//     res.status(201).json({
//       message: "Form data saved successfully!",
//       attempt,
//     });
//   } catch (err) {
//     console.error("Error saving form:", err);
//     res.status(500).json({ error: "Failed to save form data" });
//   }
// });

// module.exports = router;



const express = require("express");
const router = express.Router();
const Attempt = require("../models/Attempt");
const answersKey = require("../config/answersKey");

// router.post("/", async (req, res) => {
//   try {
//     const { formId, userEmail, name, phone, gender, dob, city, site_location, answers } = req.body;

//     let correct = 0;
//     let wrong = 0;

//     const evaluatedAnswers = answers.map((ans) => {
//       const correctAnswer = answersKey[ans.questionText];
//       const isCorrect = ans.selected === correctAnswer;
//       if (isCorrect) correct++;
//       else wrong++;
//       return { ...ans, isCorrect };
//     });

//     const attempt = new Attempt({
//       formId,
//       userEmail,
//       name,
//       phone,
//       gender,
//       dob,
//       city,
//       site_location,
//       answers: evaluatedAnswers,
//       score: {
//         correct,
//         wrong,
//         total: answers.length,
//       },
//       startedAt: new Date(),       // optional
//       finishedAt: new Date(),      //  now added
//     });

//     await attempt.save();

//     res.status(201).json({ message: "Form data saved successfully!", attempt });
//   } catch (err) {
//     console.error("Error saving form:", err);
//     res.status(500).json({ error: "Failed to save form data" });
//   }
// });

// module.exports = router;



router.post("/", async (req, res) => {
  try {
    console.log("Full incoming body:", req.body);
    const { name, email, phone, gender, specially_abled, dob, city, site_location, aadhaar,  answers } = req.body;
  const evaluatedAnswers = answers.map((ans) => {
      const correctAnswer = answersKey[ans.questionId];
      const isCorrect = ans.selected === correctAnswer;

      return {
        questionText: ans.questionText || `Question ${ans.questionId}`,
        selected: ans.selected,
        isCorrect,
      };
    });


    const attempt = new Attempt({
      name,
      email,
      phone,
      gender,
      specially_abled,
      dob,
      city,
      site_location,
      aadhaar,
      answers: evaluatedAnswers,
      startedAt: new Date(), // ✅ test start time
    });

    // ✅ yaha pe schema ka method call karo
    attempt.calculateScore();

    await attempt.save();

    res.status(201).json({ message: "Form data saved successfully!", attempt });
  } catch (err) {
    console.error("Error saving form:", err);
    res.status(500).json({ error: "Failed to save form data" });
  }
});
module.exports = router;
