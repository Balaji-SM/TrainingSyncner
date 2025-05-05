// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Correct MongoDB URI with scheme
const mongoURI = process.env.MONGO_URI || "mongodb+srv://balasivam05:bala12345@bala.cr6gc.mongodb.net/balaji?retryWrites=true&w=majority&appName=bala";

// MongoDB connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Weather Schema
const weatherSchema = new mongoose.Schema({
  city: String,
  country: String,
  coordinates: {
    lat: Number,
    lon: Number
  },
  current: {
    temperature: Number,
    humidity: Number,
    windSpeed: Number,
    icon: String
  },
  forecast: [
    {
      date: String,
      minTemp: Number,
      maxTemp: Number,
      icon: String,
      description: String
    }
  ],
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Weather = mongoose.model("Weather", weatherSchema);

// POST - Store weather data
app.post("/api/weather", async (req, res) => {
  try {
    const weatherData = new Weather(req.body);
    await weatherData.save();
    res.status(201).json({ message: "✅ Weather data saved to MongoDB" });
  } catch (err) {
    console.error("❌ Error saving weather data:", err);
    res.status(500).json({ message: "❌ Server error" });
  }
});

// GET - Retrieve all weather data
app.get("/api/weather", async (req, res) => {
  try {
    const data = await Weather.find().sort({ timestamp: -1 });
    res.json(data);
  } catch (err) {
    console.error("❌ Error fetching weather data:", err);
    res.status(500).json({ message: "❌ Error fetching data" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Server error during registration' });
  }
});


// Login API
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Login request for:', email);

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });

    res.json({
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email
      }
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error during login' });
  }
});