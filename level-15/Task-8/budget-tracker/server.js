const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const transactionRoutes = require('./routes/transactionRoutes');

dotenv.config();
const app = express();

app.use(bodyParser.json());

connectDB();

app.use('/api', transactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
