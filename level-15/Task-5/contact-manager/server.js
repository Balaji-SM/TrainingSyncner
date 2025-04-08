const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./db');
const contactRoutes = require('./routes/contactRoutes');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use('/api', contactRoutes);

const startServer = async () => {
    await connectDB();
    app.listen(5000, () => console.log('Server running on http://localhost:5000'));
};

startServer();
