// import express from "express";
// import UserTest from "../models/UserTest.js";
// import { Parser } from "json2csv";

// const router = express.Router();

// // POST /api/submit => save user test
// router.post("/submit", async (req, res) => {
//   try {
//     const data = req.body;
//     const newTest = new UserTest(data);
//     await newTest.save();
//     res.status(201).json({ message: "Test saved successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // GET /api/export => export CSV
// router.get("/export", async (req, res) => {
//   try {
//     const tests = await UserTest.find().lean();
//     const json2csvParser = new Parser();
//     const csv = json2csvParser.parse(tests);
//     res.header("Content-Type", "text/csv");
//     res.attachment("userTests.csv");
//     return res.send(csv);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;
