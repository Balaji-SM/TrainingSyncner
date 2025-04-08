const connectDB = require('./config/db');
const { getWeatherData } = require('./services/weatherService');
const { saveWeatherData, getAverageTemperature } = require('./services/dataService');
const cron = require('node-cron');
require('dotenv').config();

// Connect to DB
connectDB();

// Scheduled Task - Every 10 mins
cron.schedule('*/10 * * * *', async () => {
  const data = await getWeatherData('Chennai');
  await saveWeatherData(data);
});

// Manual Query Example
setTimeout(async () => {
  await getAverageTemperature('Chennai', '2024-04-01', '2024-04-07');
}, 5000);
