
const mongoose = require("mongoose");
const answersKey = require("../config/answersKey");

// ✅ Answer Schema
const AnswerSchema = new mongoose.Schema(
  {
    questionText: String,      // question ka text
    selected: String,          // user ka selected option
    isCorrect: Boolean,        // correct ya wrong
  },

);

// ✅ Attempt Schema
const AttemptSchema = new mongoose.Schema(
  {
    // form fields
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    gender: { type: String },
    dob: { type: Date },
    aadhaar: { type: Number },
    city: { type: String },
    specially_abled: { type: String },
    site_location: { type: String },

    // answers
    answers: [AnswerSchema], // user ke selected answers + correctness

    // declaration
    declaration: { type: Object, default: {} },

    // ✅ score
    score: {
      correct: { type: Number, default: 0 },
      wrong: { type: Number, default: 0 },
      total: { type: Number, default: 0 }, // total questions
    },

    // test times
    startedAt: { type: Date, default: Date.now },
    finishedAt: { type: Date },
  },
  { timestamps: true } // createdAt, updatedAt automatically
);

// ✅ Helper method to calculate score
AttemptSchema.methods.calculateScore = function () {
  let correct = 0;
  let wrong = 0;
  this.answers.forEach((a) => {
    if (a.isCorrect) correct++;
    else wrong++;
  });
  this.score = {
    correct,
    wrong,
    total: this.answers.length,
  };
  this.finishedAt = new Date();
};

module.exports = mongoose.model("Attempt", AttemptSchema);
