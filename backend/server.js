require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const attemptRoutes = require("./routes/attempt");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

// Routes
app.use("/api/submit", require("./routes/submit"));
app.use("/api/export", require("./routes/export"));
app.use("/api/v1/attempt", attemptRoutes);
app.use("/api/attempts", require("./routes/attempt"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));