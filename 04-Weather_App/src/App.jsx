import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App= () => {
  const [city, setCity] = useState("Delhi"); // Default city
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "e1b52b12d0454b48b9e105743252501"; // Replace with your WeatherAPI key
  const API_URL = `https://api.weatherapi.com/v1/current.json`;

  // Function to fetch weather data
  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch(
        `${API_URL}?key=${API_KEY}&q=${cityName}&aqi=no`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch weather data when the component mounts or city changes
  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  // Handle city input change
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  // Render loading, error, or weather data
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Weather App</h1>

      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city"
          className="p-2 border border-blue-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
        />
        <button
          onClick={() => fetchWeather(city)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {weatherData && (
        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <h2 className="text-xl font-bold text-blue-600">
            {weatherData.location.name}, {weatherData.location.country}
          </h2>
          <p className="text-lg text-gray-700">
            {weatherData.current.condition.text}
          </p>
          <img
            src={weatherData.current.condition.icon}
            alt={weatherData.current.condition.text}
            className="mx-auto"
          />
          <p className="text-2xl font-bold text-gray-900">
            {weatherData.current.temp_c}°C
          </p>
          <p className="text-sm text-gray-500">
            Humidity: {weatherData.current.humidity}% | Wind:{" "}
            {weatherData.current.wind_kph} kph
          </p>
        </div>
      )}
    </div>
  );
};

export default App;