import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherWidget = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    if (!apiKey) {
      setError("API Key is missing.");
      setLoading(false);
      return;
    }

    setLoading(true);
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => {
        setWeather(response.data);
        setError(null);
      })
      .catch(err => {
        setError('Could not fetch weather data.');
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [city]); // Re-run effect if the city prop changes

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p>{error}</p>;
  if (!weather) return null;

  // Destructure the complex weather object for easy access
  const { main, weather: weatherDetails, name } = weather;
  const iconUrl = `http://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`;

  return (
    <div className="weather-widget">
      <h3>Weather in {name}</h3>
      <div className="weather-info">
        <img src={iconUrl} alt={weatherDetails[0].description} />
        <p><strong>{main.temp}°C</strong></p>
        <p>{weatherDetails[0].description}</p>
      </div>
    </div>
  );
};

export default WeatherWidget;