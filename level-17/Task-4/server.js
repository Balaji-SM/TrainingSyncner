const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRouter');

const app = express();
app.use(express.json()); 

mongoose.connect('mongodb+srv://balasivam05:bala12345@bala.cr6gc.mongodb.net/project-0?retryWrites=true&w=majority&appName=bala', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use(userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
