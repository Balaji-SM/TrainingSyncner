const Weather = require('../models/Weather');

const saveWeatherData = async (data) => {
  try {
    const weather = new Weather({
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity
    });
    await weather.save();
    console.log('Weather Data Saved to MongoDB');
  } catch (error) {
    console.error('Error saving weather data:', error);
  }
}

const getAverageTemperature = async (city, startDate, endDate) => {
  const records = await Weather.find({
    city,
    timestamp: { $gte: new Date(startDate), $lte: new Date(endDate) }
  });

  const avgTemp = records.reduce((sum, item) => sum + item.temperature, 0) / records.length;
  console.log(`Average Temp in ${city} from ${startDate} to ${endDate}: ${avgTemp.toFixed(2)}°C`);
}

module.exports = { saveWeatherData, getAverageTemperature };
