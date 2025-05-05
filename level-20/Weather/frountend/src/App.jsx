import { useState, useEffect } from "react";
import "./App.css";

// Images
import SearchIcon from './assets/search.png.png';
import CloudIcon from './assets/cloud.png.png';
import Humidity from './assets/humidity.png';
import Wind from './assets/wind.png';


// Weather details component
const WeatherDetails = ({ iCon, temp, city, country, lat, log, humidity, wind }) => {
  return (
    <>
      <div className="image-sun">
        <img className="sun" src={iCon} alt="Sun" />
      </div>
      <div className="temp">{temp}°C</div>
      <div className="Location">{city}</div>
      <div className="Country">{country}</div>
      <div className="cord">
        <div>
          <span className="lat">Latitude:</span>
          <span>{lat}</span>
        </div>
        <div>
          <span className="log">Longitude:</span>
          <span>{log}</span>
        </div>
      </div>
      <div className="data-container">
        <div className="element">
          <img src={Humidity} alt="humidity" className="icon" />
          <div className="data">
            <div className="humidity-percent">{humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={Wind} alt="wind speed" className="icon" />
          <div className="data">
            <div className="wind-percent">{wind} km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </>
  );
};

function App() {
  const api_key = "e7322461474cda160ca42f8f6e41de42";
  const [text, setText] = useState("Chennai");
  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [iCon, setICon] = useState(CloudIcon);
  const [temp, setTemp] = useState();
  const [city, setCity] = useState("Chennai");
  const [country, setCountry] = useState("India");
  const [log, setLog] = useState(0);
  const [lat, setLat] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);

  const sendToBackend = async (data) => {
    try {
      await fetch("http://localhost:5000/api/weather", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      console.log("Data sent to backend");
    } catch (error) {
      console.error("Failed to send data to backend:", error.message);
    }
  };

  const search = async () => {
    setLoading(true);

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=metric`;

    try {
      let res = await fetch(url);
      let data = await res.json();
      if (data.cod === "404") {
        alert("City not found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }

      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      setICon(iconUrl);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLog(data.coord.lon);

      // Send to backend
      await sendToBackend({
        city: data.name,
        country: data.sys.country,
        coordinates: {
          lat: data.coord.lat,
          lon: data.coord.lon
        },
        current: {
          temperature: Math.floor(data.main.temp),
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          icon: iconUrl
        },
        forecast: [] // You can add a 7-day forecast here later
      });

    } catch (error) {
      console.error("An error occurred:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCity = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <>
      
      <div className="container">
        <div className="in-container">
          <input
            className="city"
            type="text"
            placeholder="Search city"
            onChange={handleCity}
            onKeyDown={handleKeyDown}
            value={text}
          />
          <div className="search" onClick={() => search()}>
            <img src={SearchIcon} alt="search" />
          </div>
        </div>
        <WeatherDetails
          iCon={iCon}
          temp={temp}
          city={city}
          country={country}
          lat={lat}
          log={log}
          humidity={humidity}
          wind={wind}
        />
        <p className="p">Design By Balaji S</p>
      </div>
    </>
  );
}

export default App;
