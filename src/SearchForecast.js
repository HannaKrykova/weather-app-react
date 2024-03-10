import React, { useState } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

import "./SearchForecast.css";

export default function SearchForecast() {
  const [city, setCity] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

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
    setLoading(false);
  }
  function searchForecast(event) {
    event.preventDefault();
    setLoading(true);
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=fbef01f4et1b02o0d25c27210a43ef3f&unit=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="SearchForecast" onSubmit={searchForecast}>
      <input
        type="search"
        placeholder="Search for a city.."
        onChange={updateCity}
        className="search-form-input"
        required
      />
      <input type="submit" value="Search" className="search-form-submit" />
    </form>
  );

  if (loading) {
    return (
      <div className="spinnerContainer">
        <TailSpin
          visible={true}
          height="60"
          width="60"
          color="#964d7d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  if (loaded) {
    return (
      <div>
        {form}{" "}
        <ul className="Forecast">
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind Speed: {weather.wind} km/h</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
