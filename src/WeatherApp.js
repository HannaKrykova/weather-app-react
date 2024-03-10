import React, { useState } from "react";
import axios from "axios";

export default function WeatherApp() {
  const [city, setCity] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    console.log(response);
    setLoaded(true);
    setWeather({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
    });
  }
  function searchForecast(event) {
    event.preventDefault();
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=fbef01f4et1b02o0d25c27210a43ef3f&unit=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={searchForecast}>
      <input
        type="search"
        placeholder="Search for a city.."
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}{" "}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind Speed: {weather.wind} km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
