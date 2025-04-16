const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

dotenv.config();
connectDB(); // ✅ MongoDB connection

const app = express();
app.use(express.json()); // ✅ Body parser

// ✅ Register Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes); // <--- THIS IS NEEDED

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
