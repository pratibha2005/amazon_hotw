
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require("path"); 
const cors = require('cors');
const attemptRoutes = require("./routes/attempt");

const app = express();
app.use(cors());
app.use(express.json());


// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

// ✅ API routes first
app.use("/api/submit", require("./routes/submit"));
app.use("/api/export", require("./routes/export"));
app.use("/api/v1/attempt", attemptRoutes);
// app.use("/api/attempts", require("./routes/attempt"));
app.use("/api/attempt", require("./routes/attempt"));



// ✅ Serve React frontend
app.use(express.static(path.join(__dirname, "../frontend/build")));

// ✅ React SPA fallback (last)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));






