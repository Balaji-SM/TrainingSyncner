const express = require("express");
const connectDB = require("./db");
const User = require("./models/user");
require("dotenv").config();





const app = express();
app.use(express.json());

connectDB();

app.get("/user-schema", (req, res) => {
  const schemaPaths = Object.keys(User.schema.paths).map((key) => ({
    field: key,
    instance: User.schema.paths[key].instance,
  }));
  res.json({
    message: "User Schema Fields",
    fields: schemaPaths,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
