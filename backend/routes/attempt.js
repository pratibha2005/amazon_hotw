// const express = require("express");
// const router = express.Router();
// const Attempt = require("../models/Attempt");

// // ✅ Save Declaration answers
// router.post("/declaration", async (req, res) => {
//     console.log("REQ BODY:", req.body);
//   try {
//     const { declaration, email } = req.body;
//     if (!email) {
//       return res.status(400).json({ message: "Email is required to find attempt" });
//     }
//     // Find attempt by email (ya userId agar use karte ho)
//     let attempt = await Attempt.findOne({ email });
//     if (!attempt) {
//       // agar nahi mila to naya create karo
//       attempt = new Attempt({ email });
//     }
     
//     attempt.finishedAt = new Date();
// await attempt.save();

//     attempt.declaration = declaration;
//     await attempt.save();

//     res.status(200).json({ message: "Declaration saved successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to save declaration" });
//   }
// });

// module.exports = router;










// const express = require("express");
// const router = express.Router();
// const Attempt = require("../models/Attempt");

// // ✅ Save Declaration answers


// router.post("/declaration", async (req, res) => {
//   console.log("REQ BODY FOR DECLARATION:", req.body);
//   try {
//     const { declaration, email } = req.body;

//     if (!email) {
//       return res.status(400).json({ message: "Email is required to find attempt" });
//     }

//     // Find attempt by email and update it in one go
//     // findOneAndUpdate is more reliable for updates.
//     const updatedAttempt = await Attempt.findOneAndUpdate(
//       { email: email }, // condition to find the document
//       {
//         $set: { // fields to update
//           declaration: declaration,
//           finishedAt: new Date(),
//         },
//       },
//       {
//         new: true, // return the updated document
//         upsert: false, // Do not create a new document if one isn't found
//       }
//     );


//     router.get("/:id", async (req, res) => {
//   try {
//     const attempt = await Attempt.findById(req.params.id);
//     if (!attempt) return res.status(404).json({ message: "Attempt not found" });
//     res.json(attempt);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

//     // Save final score
// router.post("/finish", async (req, res) => {
//   try {
//     const { correct, wrong } = req.body;

//     // Agar user ka attempt _id session/context me hai to usko update karo
//     // yaha simple example:
//     const attempt = new Form({
//       score: { correct, wrong },
//       finishedAt: new Date(),
//     });

//     await attempt.save();

//     res.json({ message: "Score saved", attempt });
//   } catch (err) {
//     console.error("❌ Save attempt error:", err);
//     res.status(500).json({ message: "Failed to save attempt" });
//   }
// });


//     if (!updatedAttempt) {
//         // This case handles if no attempt with the given email was found.
//         // The form should be submitted before the declaration, so an attempt should always exist.
//         console.error("Attempt not found for email:", email);
//         return res.status(404).json({ message: "Attempt not found for the provided email." });
//     }

//     console.log("UPDATED ATTEMPT:", updatedAttempt);

//     res.status(200).json({ message: "Declaration saved successfully" });
//   } catch (err) {
//     console.error("Error saving declaration:", err);
//     res.status(500).json({ message: "Failed to save declaration" });
//   }
// });

// module.exports = router;














const express = require("express");
const router = express.Router();
const Attempt = require("../models/Attempt");
const answersKey = require("../config/answersKey");

// ✅ Save Declaration answers
// router.post("/declaration", async (req, res) => {
//   console.log("REQ BODY FOR DECLARATION:", req.body);
//   try {
//     const { declaration, email } = req.body;

//     if (!email) {
//       return res.status(400).json({ message: "Email is required to find attempt" });
//     }

//     const updatedAttempt = await Attempt.findOneAndUpdate(
//       { email: email },
//       {
//         $set: {
//           declaration: declaration,
//           finishedAt: new Date(),
//         },
//       },
//       { new: true }
//     );

//     if (!updatedAttempt) {
//       console.error("Attempt not found for email:", email);
//       return res.status(404).json({ message: "Attempt not found for the provided email." });
//     }

//     console.log("UPDATED ATTEMPT:", updatedAttempt);
//     res.status(200).json({ message: "Declaration saved successfully" });
//   } catch (err) {
//     console.error("Error saving declaration:", err);
//     res.status(500).json({ message: "Failed to save declaration" });
//   }
// });

// // ✅ Get attempt by ID
// router.get("/:id", async (req, res) => {
//   try {
//     const attempt = await Attempt.findById(req.params.id);
//     if (!attempt) return res.status(404).json({ message: "Attempt not found" });
//     res.json(attempt);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // ✅ Finish attempt: save answers + calculate score
// router.post("/finish", async (req, res) => {
//   try {
//     const { email, answers } = req.body;

//     if (!email) {
//       return res.status(400).json({ message: "Email is required" });
//     }

//     const attempt = await Attempt.findOne({ email });
//     if (!attempt) {
//       return res.status(404).json({ message: "Attempt not found" });
//     }

//     attempt.answers = answers;
//     attempt.calculateScore();  // will set score + finishedAt

//     await attempt.save();

//     res.json({ message: "Attempt Finished", attempt });
//   } catch (err) {
//     console.error("❌ Finish attempt error:", err);
//     res.status(500).json({ message: "Failed to save attempt" });
//   }
// });

// module.exports = router;


router.post("/finish", async (req, res) => {
  try {
    const { email, answers } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    if (!answers || answers.length === 0) {
      return res.status(400).json({ message: "Answers are required" });
    }

    const attempt = await Attempt.findOne({ email });
    if (!attempt) {
      return res.status(404).json({ message: "Attempt not found" });
    }

    // ✅ Evaluate answers with correct/wrong
    const evaluatedAnswers = answers.map((ans) => {
      const correctAnswer = answersKey[ans.questionId];
      const isCorrect = ans.selected === correctAnswer;
      return {
        questionText: ans.questionText || `Question ${ans.questionId}`,
        selected: ans.selected,
        isCorrect,
      };
    });

    attempt.answers = evaluatedAnswers;
    attempt.calculateScore(); // sets score + finishedAt

    await attempt.save();

    res.json({ message: "Attempt Finished", attempt });
  } catch (err) {
    console.error("❌ Finish attempt error:", err);
    res.status(500).json({ message: "Failed to save attempt" });
  }
});

module.exports = router;