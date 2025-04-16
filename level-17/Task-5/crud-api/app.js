const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRouter');

const app = express();
app.use(express.json());

connectDB();

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
