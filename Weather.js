import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState('London');  // Default city is London

  useEffect(() => {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';  // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);  // Log the entire response for debugging
        
        if (data.cod === '404') {
          console.error('City not found');
          setWeatherData(null);
        } else {
          setWeatherData(data);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setLoading(false);  // Stop loading on error
      });
  }, [city]);

  return (
    <div className="weather-container">
      {loading ? (
        <p>Loading weather data...</p>
      ) : weatherData ? (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>{weatherData.weather?.[0]?.description || 'No description available'}</p>
          <p>Temperature: {weatherData.main?.temp || 'N/A'}°C</p>
          <p>Humidity: {weatherData.main?.humidity || 'N/A'}%</p>
        </div>
      ) : (
        <p>Error fetching weather data. Please try again later.</p>
      )}
    </div>
  );
};

export default Weather;
