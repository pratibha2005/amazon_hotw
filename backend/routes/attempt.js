

const express = require("express");
const router = express.Router();
const Attempt = require("../models/Attempt");
const answersKey = require("../config/answersKey");

// 🟢 Create new attempt (form details)
router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      gender,
      specially_abled,
      dob,
      city,
      site_location,
      aadhaar,
    } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and Email are required" });
    }

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
      answers: [],
      startedAt: new Date(),
    });

    await attempt.save();

    res.status(201).json({
      message: "Attempt created successfully!",
      attemptId: attempt._id, // 👈 frontend ko bhejna hai
    });
  } catch (err) {
    console.error("❌ Create attempt error:", err);
    res.status(500).json({ error: "Failed to create attempt" });
  }
});

// 🟢 Finish attempt (answers + score)
router.post("/finish", async (req, res) => {
  try {
    const { attemptId, answers } = req.body;

    if (!attemptId) {
      return res.status(400).json({ message: "attemptId is required" });
    }

    if (!answers || answers.length === 0) {
      return res.status(400).json({ message: "Answers are required" });
    }

    const attempt = await Attempt.findById(attemptId);
    if (!attempt) {
      return res.status(404).json({ message: "Attempt not found" });
    }

    // ✅ Evaluate answers
    const evaluatedAnswers = answers.map((ans) => {
      const correctAnswer = answersKey[ans.questionId];
      return {
        questionText: ans.questionText || `Question ${ans.questionId}`,
        selected: ans.selected,
        isCorrect: ans.selected === correctAnswer,
      };
    });

    attempt.answers = evaluatedAnswers;
    attempt.calculateScore();

    await attempt.save();

    res.json({ message: "Attempt finished successfully!", attempt });
  } catch (err) {
    console.error("❌ Finish attempt error:", err);
    res.status(500).json({ message: "Failed to finish attempt" });
  }
});

module.exports = router;
