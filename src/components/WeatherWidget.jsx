import React, { useState, useEffect } from 'react';
import axios from 'axios';

// TODO: Destructure `city` from props
const WeatherWidget = (props) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // TODO: Use useEffect to fetch weather data whenever the `city` prop changes
  // The dependency array should include `city`
  // Use `process.env.REACT_APP_OPENWEATHER_API_KEY` for your API key

  // TODO: Add conditional rendering for loading, error, and success states

  return (
    <div className="weather-widget">
      {/* This is where you will render the weather data */}
      <p>Weather widget will go here.</p>
    </div>
  );
};

export default WeatherWidget;
