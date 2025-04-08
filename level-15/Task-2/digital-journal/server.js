const express = require('express');
const app = express();
require('dotenv').config();
const { connectDB } = require('./config/db');
const journalRoutes = require('./routes/journalRoutes');

app.use(express.json());
app.use('/api/journal', journalRoutes);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
