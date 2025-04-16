const express = require("express");
const connectDB = require("./db");
require("dotenv").config();

const app = express();


connectDB();

app.get("/", (req, res) => {
  res.send("Connected to MongoDB");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
